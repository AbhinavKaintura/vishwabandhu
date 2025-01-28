'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError('');
    // setIsLoading(true);

    try {
      // Razorpay Payment Gateway Integration
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID_GAUSHALA, 
        amount: Number(formData.amount) * 100, // Amount in paise
        currency: 'INR',
        name: `${formData.firstName} ${formData.lastName}`,
        description: 'Gaumata Donation',
        image: '',
        handler: function (response: any) {
          console.log('Payment successful:', response);
          router.push('/payment-successful-gaumata');
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
      // setIsLoading(false);
    } catch (err) {
      console.error('Error initiating Razorpay payment:', err);
      setError('Something went wrong. Please try again.');
      // setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="overflow-hidden bg-white rounded-xl sm:rounded-3xl shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 p-4 sm:p-6 md:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Donate to the Gaushala Program</h1>
            <p className="text-sm sm:text-base text-gray-600">Please fill in the details to donate for our Gaushala Program.</p>
            
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
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <label className="text-sm font-semibold text-gray-700">Registration Amount</label>
              <input
                type="number"
                name="amount"
                placeholder='Enter amount in INR'
                value={formData.amount}
                onChange={handleChange}
                required
                className="bg-gray-100 p-2.5 sm:p-3 rounded-md w-full sm:w-auto focus:ring-2 focus:ring-orange-300"
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className={`w-full sm:w-auto bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-all duration-300 min-w-[200px]`}
              >
              Donate Now
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
