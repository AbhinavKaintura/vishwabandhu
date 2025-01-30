'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '@/firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import Link from 'next/link';

interface MemberData extends JoinFormDetails {
  paymentId: string;
  timestamp: any; // Firebase Timestamp
  status: 'successful';
}

interface JoinFormDetails {
  firstName: string;
  middleName?: string;
  lastName: string;
  gender: string;
  dob: string;
  aadharCard: string;
  companyName?: string;
  country: string;
  state: string;
  address: string;
  landmark: string;
  postalCode: string;
  phone: string;
  email: string;
  nomineeName: string;
  relation: string;
  nomineeAadhar: string;
}

const JoinPage: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<JoinFormDetails>({
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    dob: '',
    aadharCard: '',
    companyName: '',
    country: 'India', // Default value set to India
    state: '',
    address: '',
    landmark: '',
    postalCode: '',
    phone: '',
    email: '',
    nomineeName: '',
    relation: '',
    nomineeAadhar: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState('');

  // List of Indian states
  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
    "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
    "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
  ];

  const sendOrderEmail = async (orderData: any) => {
    try {
      console.log('Sending email data:', orderData);
      const response = await fetch('/api/send-order-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
        cache: 'no-store' // Prevents caching of the request
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Log the response status
      console.log('Email API response status:', response.status);

      const data = await response.json();
      console.log('Email sent successfully:', data);
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  };

  const saveToFirebase = async (paymentId: string) => {
    try {
      const memberRef = collection(db, 'members');

      const memberData: MemberData = {
        ...formData,
        paymentId,
        timestamp: serverTimestamp(),
        status: 'successful'
      };

      console.log('saving to firebase initiated. ', memberData);

      const docRef = await addDoc(memberRef, memberData);
      console.log('Member saved with ID:', docRef.id);

      // Prepare email data
      const orderEmailData = {
        memberID: `VBFR${String(Date.now()).slice(-6)}`,
        // name: `${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim(),
        name: {
          firstName: formData.firstName,
          middleName: formData.middleName,
          lastName: formData.lastName
        },
        date: new Date().toLocaleDateString(),
        gender: formData.gender,
        dob: formData.dob,
        paymentMethod: 'Credit Card|Debit Card|NetBanking|Upi',
        address: {
          street: formData.address,
          landmark: formData.landmark,
          postalCode: formData.postalCode,
          state: formData.state,
          country: formData.country
        },
        email: formData.email,
        phone: formData.phone,
        paymentId,
        aadhar: formData.aadharCard,
        nomineeName: formData.nomineeName,
        nomineeRelation: formData.relation,
        nomineeAadhar: formData.nomineeAadhar
      };

      // Send confirmation email
      await sendOrderEmail(orderEmailData);

      return docRef.id;
    } catch (error) {
      console.error('Error saving to Firebase:', error);
      throw new Error('Failed to save member data');
    }
  };


  // Handle form changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Validation for specific fields
    let validatedValue = value;

    if (name === 'aadharCard') {
      validatedValue = value.replace(/\D/g, '').slice(0, 12);
    }

    if (name === 'phone') {
      validatedValue = value.replace(/\D/g, '').slice(0, 10);
    }

    if (name === 'postalCode') {
      validatedValue = value.replace(/\D/g, '');
    }

    if (name === 'nomineeAadhar') {
      validatedValue = value.replace(/\D/g, '').slice(0, 12);
    }

    setFormData({ ...formData, [name]: validatedValue });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError('');
    setIsLoading(true);

    try {
      // Razorpay Payment Gateway Integration
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID_HS,
        amount: 500 * 100, // Amount in paise
        currency: 'INR',
        name: 'Bharat Self Care Team Registration',
        description: 'Registration for the program',
        image: '',
        handler: async function (response: any) {
          console.log('Payment successful:', response);

          // Save data to Firebase after successful payment
          const orderId = await saveToFirebase(response.razorpay_payment_id);

          router.push(`/payment-successful-bharat?orderId=${orderId}`);
        },
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          contact: formData.phone,
        },
        notes: {
          address: formData.address,
        },
        theme: {
          color: '#f4d981',
        },
      };

      const rzp1 = new (window as any).Razorpay(options);
      rzp1.open();
      setIsLoading(false);
    } catch (err) {
      console.error('Error initiating Razorpay payment:', err);
      setError('Something went wrong. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl">
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Join the Bharat Self Care Team</h1>
              <p className="text-gray-600">Please fill in the details to register for our Bharat Self Care Team.</p>
            </div>

            {/* Personal Information Section */}
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">Personal Information</h2>

              <div className="space-y-4">
                {/* Name Fields Group */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <div className="grid md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full p-3 bg-gray-50 border rounded-lg  "
                      required
                    />
                    <input
                      type="text"
                      name="middleName"
                      placeholder="Middle Name (Optional)"
                      value={formData.middleName}
                      onChange={handleChange}
                      className="w-full p-3 bg-gray-50 border rounded-lg  "
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full p-3 bg-gray-50 border rounded-lg  "
                      required
                    />
                  </div>
                </div>

                {/* Basic Details Group */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full p-3 bg-gray-50 border rounded-lg text-gray-600 "
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full p-3 bg-gray-50 border rounded-lg text-gray-600 "
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Aadhar Card</label>
                    <input
                      type="text"
                      name="aadharCard"
                      value={formData.aadharCard}
                      onChange={handleChange}
                      maxLength={12}
                      pattern="\d{12}"
                      placeholder="12-digit Aadhar number"
                      className="w-full p-3 bg-gray-50 border rounded-lg  "
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">Contact Information</h2>

              <div className="space-y-4">
                {/* Address Group */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full p-3 bg-gray-50 border rounded-lg  "
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Landmark</label>
                    <input
                      type="text"
                      name="landmark"
                      value={formData.landmark}
                      onChange={handleChange}
                      className="w-full p-3 bg-gray-50 border rounded-lg  "
                      required
                    />
                  </div>
                </div>

                {/* Location Details */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                    <input
                      type="text"
                      value="India"
                      readOnly
                      className="w-full p-3 bg-gray-100 border rounded-lg cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full p-3 bg-gray-50 border rounded-lg text-gray-600 "
                      required
                    >
                      <option value="">Select State</option>
                      {indianStates.map((state) => (  
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      maxLength={6}
                      pattern="\d*"
                      className="w-full p-3 bg-gray-50 border rounded-lg  "
                      required
                    />
                  </div>
                </div>

                {/* Contact Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      pattern="\d{10}"
                      maxLength={10}
                      className="w-full p-3 bg-gray-50 border rounded-lg  "
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 bg-gray-50 border rounded-lg  "
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Nominee Information Section */}
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">Nominee Information</h2>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nominee Name</label>
                  <input
                    type="text"
                    name="nomineeName"
                    value={formData.nomineeName}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border rounded-lg  "
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Relation</label>
                  <select
                    name="relation"
                    value={formData.relation}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border rounded-lg  "
                    required
                  >
                    <option value="">Select Relation</option>
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Spouse">Spouse</option>
                    <option value="Sibling">Sibling</option>
                    <option value="Friend">Friend</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nominee Aadhar</label>
                  <input
                    type="text"
                    name="nomineeAadhar"
                    value={formData.nomineeAadhar}
                    onChange={handleChange}
                    maxLength={12}
                    pattern="\d{12}"
                    className="w-full p-3 bg-gray-50 border rounded-lg  "
                    required
                  />
                </div>
              </div>
            </div>

            {/* Registration Fee Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-700">Registration Amount:</span>
                <span className="text-lg font-semibold text-orange-500">500 INR</span>
              </div>
            </div>

            {/* Terms and Privacy Policy */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="w-4 h-4 text-orange-500 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I accept the{' '}
                  <Link href="/terms-and-conditions" className="text-orange-500 hover:text-orange-600">
                    Terms and Conditions
                  </Link>
                  {' '}and{' '}
                  <Link href="/privacy-policy" className="text-orange-500 hover:text-orange-600">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading || !termsAccepted}
                className={`w-full md:w-auto ${termsAccepted
                  ? 'bg-orange-500 hover:bg-orange-600'
                  : 'bg-gray-400 cursor-not-allowed'
                  } text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-300`}
              >
                {isLoading ? 'Processing...' : 'Join Now'}
              </button>

              {error && (
                <div className="text-red-500 text-sm text-center">
                  {error}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default JoinPage;