'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '@/firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import Link from 'next/link';


interface DonationData extends JoinFormDetails {
  paymentId: string;
  timestamp: any; // Firebase Timestamp
  status: 'successful';
}

interface JoinFormDetails {
  firstName: string;
  lastName: string;
  country?: string;
  city?: string;
  state?: string;
  address?: string;
  landmark?: string;
  postalCode?: string;
  phone: string;
  email: string;
  amount: string;
}

const JoinPage: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<JoinFormDetails>({
    firstName: '',
    lastName: '',
    country: 'India', // Default value set to India
    state: '',
    city: '',
    address: '',
    landmark: '',
    postalCode: '',
    phone: '',
    email: '',
    amount: '',
  });

  // const [isLoading, setIsLoading] = useState(false);
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

  const sendOrderEmail = async (donorData: any) => {
    try {
      console.log('Sending email data:', donorData);
      const response = await fetch('/api/send-donate-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donorData),
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
      const donationsRef = collection(db, 'donations');

      const donationData: DonationData = {
        ...formData,
        paymentId,
        timestamp: serverTimestamp(),
        status: 'successful'
      };

      console.log('saving to firebase initiated. ', donationData);

      const docRef = await addDoc(donationsRef, donationData);
      console.log('Donation saved with ID:', docRef.id);

      // Prepare email data
      const donorEmailData = {
        memberID: `VBFG${String(Date.now()).slice(-6)}`,
        // name: `${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim(),
        name: {
          firstName: formData.firstName,
          lastName: formData.lastName
        },
        date: new Date().toLocaleDateString(),
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
        amount: formData.amount
      };

      // Send confirmation email
      await sendOrderEmail(donorEmailData);

      return docRef.id;
    } catch (error) {
      console.error('Error saving to Firebase:', error);
      throw new Error('Failed to save donation data');
    }
  };

  // Handle form changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Validation for specific fields
    let validatedValue = value;

    if (name === 'phone') {
      validatedValue = value.replace(/\D/g, '').slice(0, 10);
    }

    if (name === 'postalCode') {
      validatedValue = value.replace(/\D/g, '');
    }

    setFormData({ ...formData, [name]: validatedValue });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID_GAUSHALA,
        amount: Number(formData.amount) * 100,
        currency: 'INR',
        name: `${formData.firstName} ${formData.lastName}`,
        description: 'Gaumata Donation',
        image: '',
        handler: async function (response: any) {
          console.log('Payment successful:', response);

          // Save data to Firebase after successful payment
          const donorId = await saveToFirebase(response.razorpay_payment_id);

          // Redirect to success page
          router.push(`/payment-successful-gaumata?donorId=${donorId}`);
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
    } catch (err) {
      console.error('Error initiating Razorpay payment:', err);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl">
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">
            {/* Header Section */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Donate to the Gaushala Program
              </h1>
              <p className="text-gray-600">
                Please fill in the details to donate for our Gaushala Program.
              </p>
            </div>

            {/* Personal Information Section */}
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">Personal Information</h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border rounded-lg  "
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border rounded-lg  "
                    required
                  />
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">Contact Information</h2>

              <div className="space-y-4">
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
                      placeholder="Enter phone number"
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

                {/* Address Section */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full p-3 bg-gray-50 border rounded-lg  "
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
                      className="w-full p-3 bg-gray-50 border rounded-lg  "
                    >
                      <option value="">Select State</option>
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
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Donation Amount Section */}
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">Donation Details</h2>

              <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
                <label className="text-sm font-medium text-gray-700">Donation Amount (INR)</label>
                <input
                  type="string"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="Enter amount in INR"
                  className="w-full md:w-64 p-3 bg-gray-50 border rounded-lg  "
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-300 min-w-[200px]"
              >
                Donate Now
              </button>

              {error && (
                <div className="mt-4 text-red-500 text-sm text-center">
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
