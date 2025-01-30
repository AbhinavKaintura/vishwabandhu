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
        name: `${formData.firstName} ${formData.lastName}`,
        description: 'Human Safety Program Registration',
        image: '',
        handler: async function (response: any) {
          console.log('Payment successful:', response);

          // Save data to Firebase after successful payment
          await saveToFirebase(response.razorpay_payment_id);

          router.push('/payment-successful-bharat');
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
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="overflow-hidden bg-white rounded-xl sm:rounded-3xl shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 p-4 sm:p-6 md:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Join the Bharat Self Care Team</h1>
            <p className="text-sm sm:text-base text-gray-600">Please fill in the details to register for our Bharat Self Care Team.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2.5 sm:p-3 bg-gray-100 border rounded-md focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Middle Name (Optional)</label>
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName || ''}
                  onChange={handleChange}
                  className="w-full p-2.5 sm:p-3 bg-gray-100 border rounded-md focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2.5 sm:p-3 bg-gray-100 border rounded-md focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-2.5 sm:p-3 bg-gray-100 border rounded-md focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition-colors"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full p-2.5 sm:p-3 bg-gray-100 border rounded-md focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Aadhar Card Number</label>
                <input
                  type="text"
                  name="aadharCard"
                  value={formData.aadharCard}
                  onChange={handleChange}
                  maxLength={12}
                  pattern="\d{12}"
                  title="Please enter a valid 12-digit Aadhar number"
                  className="w-full p-2.5 sm:p-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Company Name (Optional)</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName || ''}
                  onChange={handleChange}
                  className="w-full p-2.5 sm:p-3 bg-gray-100 border rounded-md focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Country/Region</label>
                <input
                  type="text"
                  name="country"
                  value="India"
                  readOnly
                  className="w-full p-2.5 sm:p-3 bg-gray-100 rounded-md cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">State</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full p-2.5 sm:p-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition-colors"
                  required
                >
                  <option value="">Select State</option>
                  {indianStates.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-2.5 sm:p-3 bg-gray-100 border rounded-md focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nearby Landmark</label>
                <input
                  type="text"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleChange}
                  className="w-full p-2.5 sm:p-3 bg-gray-100 border rounded-md focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  pattern="\d*"
                  maxLength={6}
                  className="w-full p-2.5 sm:p-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone No.</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="\d{10}"
                  maxLength={10}
                  title="Please enter a valid 10-digit phone number"
                  className="w-full p-2.5 sm:p-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2.5 sm:p-3 bg-gray-100 border rounded-md focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nominee Name</label>
                <input
                  type="text"
                  name="nomineeName"
                  value={formData.nomineeName}
                  onChange={handleChange}
                  className="w-full p-2.5 sm:p-3 bg-gray-100 border rounded-md focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Relation with Nominee</label>
                <select
                  name="relation"
                  value={formData.relation}
                  onChange={handleChange}
                  className="w-full p-2.5 sm:p-3 bg-gray-100 border rounded-md focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition-colors"
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
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nominee Aadhar Card</label>
                <input
                  type="text"
                  name="nomineeAadhar"
                  value={formData.nomineeAadhar}
                  onChange={handleChange}
                  maxLength={12}
                  pattern="\d{12}"
                  className="w-full p-2.5 sm:p-3 bg-gray-100 border rounded-md focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition-colors"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <label className="text-sm font-semibold text-gray-700">Registration Amount</label>
              <input
                type="text"
                value="500 INR"
                readOnly
                className="bg-gray-100 text-gray-500 p-2.5 sm:p-3 rounded-md w-full sm:w-auto focus:ring-2 focus:ring-orange-300"
              />
            </div>

            <div className="space-y-4 pt-6 sm:pt-10">
              <p className="text-sm sm:text-base">
                Before joining our program, please read our
                <Link href="/privacy-policy" className="text-blue-500 hover:text-blue-700 ml-1">
                  Privacy Policy
                </Link>.
              </p>

              <div className="flex items-start sm:items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="mt-1 sm:mt-0 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                />
                <label htmlFor="terms" className="text-sm sm:text-base text-gray-700">
                  I accept the
                  <Link href="/terms-and-conditions" className="text-orange-500 hover:text-orange-700 ml-1">
                    Terms and Conditions
                  </Link>
                </label>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={isLoading || !termsAccepted}
                className={`w-full sm:w-auto ${termsAccepted
                    ? 'bg-orange-400 hover:bg-orange-500'
                    : 'bg-gray-400 cursor-not-allowed'
                  } text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-all duration-300 min-w-[200px]`}
              >
                {isLoading ? 'Processing...' : 'Join Now'}
              </button>
            </div>

            {error && (
              <div className="text-red-500 text-sm sm:text-base text-center">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default JoinPage;
