'use client';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import logo_img from '../../../../public/nav-header/RSVBF-LOGO.png'
import Animated_family from '../../../../public/human-safety-program/animated-family.jpeg'


interface Join_Details {
  campaignTitle: string;
  description: string;
}

const Join_Page: React.FC = () => {
  const stats: Join_Details = {
    campaignTitle: "Human Safety Program",
    description: "The Vishwa Bandhu Foundation is committed to the welfare of all living beings. We are dedicated to the protection of human life and the promotion of human safety. Our Human Safety Program aims to provide support to those in need and to create a safer world for all.",
  };

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear any previous errors
    setError('');

    setIsLoading(true);

    try {
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID_HS, 
        amount: Number(500) * 100, // Amount in paise (1 INR = 100 paise)
        currency: 'INR',
        name: 'HS Vishwa Bandhu Foundation',
        description: 'Donation',
        image: {logo_img},
        handler: function (response: any) {
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
          console.log('Payment successful:', response);
          // You can send the payment details to your server here
        },
        prefill: {
          name: 'John Carter',
          email: 'john.carter@example.com',
          contact: '9876543210',
        },
        notes: {
          address: 'Vishwa Bandhu Foundation',
        },
        theme: {
          color: '#f4d981',
        },
      };

      const rzp1 = new (window as any).Razorpay(options);
      rzp1.open();
      setIsLoading(false); // Reset loading state after opening the payment gateway
    } catch (err) {
      console.error('Error initiating Razorpay payment:', err);
      setError('Something went wrong. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 ">
      <div className="max-w-5xl mx-auto ">
        <div className="overflow-hidden bg-white rounded-3xl shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Image Section */}
            <div className="relative h-[300px] lg:h-full">
              <Image
                src={Animated_family}
                alt='Gau Mata with calf'
                className="w-full h-full object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-t-none"
                fill
              />
            </div>
            {/* Content Section */}
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-red-500 font-medium uppercase tracking-wider text-sm">Campaign</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-800">{stats.campaignTitle}</h1>
                <p className="text-gray-600 leading-relaxed">
                  {stats.description}
                </p>
                <div className="space-y-4">
                  <h2 className="text-gray-700 font-medium pt-4">MEMBERSHIP AMOUNT</h2>
                  {/* Amount */}
                  <div>
                    <input readOnly type="number" value={''} placeholder='500'
                    className='bg-gray-100 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 w-full'
                    />  
                  </div>            
                  
                </div>
                {/* Error Message */}
                {error && (
                  <div className="text-red-500 mt-2">
                    {error}
                  </div>
                )}
                {/* Donate Button */}
                <button 
                  onClick={handleDonate}
                  disabled={isLoading}
                  className={`w-[40%] bg-orange-400 hover:bg-orange-500 text-white font-semibold py-4 px-6 rounded-full transition-all duration-500 hover:w-[45%] hover:shadow-lg hover:scale-105 ${
                    isLoading ? 'bg-gray-400 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? 'Processing...' : 'JOIN NOW'}
                </button>
                {/* Short message */}
                <p className='text-center pt-10 align-bottom text-sm text-gray-600 tracking-wide opacity-60'>"To make big changes small steps are necessary"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join_Page;