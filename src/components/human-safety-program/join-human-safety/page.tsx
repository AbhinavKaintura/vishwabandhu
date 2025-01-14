'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Animated_family from '../../../../public/human-safety-program/animated-family.jpeg'

interface CompaignDetails {
  campaignTitle: string;
  description: string;
}

const Join_Human_safety = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  const stats: CompaignDetails = {
    campaignTitle: "Human Safety Program",
    description: "Join our Human Safety Program now and prebook a secure future for your family",
  };


  const handleDonate = () => {
    if (termsAccepted) {
      // Add donation logic here
      console.log('Processing donation...');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 mb-12">
      <div className="max-w-5xl mx-auto mt-24">
        <div className="overflow-hidden bg-white rounded-3xl shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Image Section */}
            <div className="relative h-[300px] lg:h-full">
              <Image
                src={Animated_family}
                alt='Gau Mata with calf'
                className="w-full h-full object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-t-none"
              />
            </div>

            {/* Content Section */}
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-red-500 font-medium uppercase tracking-wider text-sm">Campaign</span>
                </div>

                <h1 className="text-3xl font-bold text-gray-800 pt-10 ">{stats.campaignTitle}</h1>

                <p className="text-gray-600 leading-relaxed">
                  {stats.description}
                </p>

                <div className="space-y-4 pt-10 pb-4">
                  <p className='inline-block'>  
                    Before joining our program, please read our 
                    <a href="/privacy-policy" className="text-blue-500 hover:text-blue-700"> Privacy Policy</a>.
                  </p>
                  
                  {/* Terms and Conditions Checkbox */}
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox"
                      id="terms"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                      className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 focus:ring-2 cursor-pointer"
                    />
                    <label 
                      htmlFor="terms" 
                      className="text-gray-700 font-medium "
                    >
                      I accept the <Link href="/terms-and-conditions" className=' text-orange-500 hover:text-orange-700 transition-colors duration-500 cursor-pointer select-none'>Terms and Conditions</Link>
                    </label>
                  </div>
                </div>

                {/* Donate Button */}
                <button 
                  onClick={handleDonate}
                  disabled={!termsAccepted}
                  className={`w-[30%] ${
                    termsAccepted 
                      ? 'bg-orange-400 hover:bg-orange-500 hover:w-[35%]' 
                      : 'bg-gray-400 cursor-not-allowed'
                  } text-white font-semibold py-4 px-6 rounded-full transition-all duration-500`}
                >
                  JOIN US
                </button>

                {/* Short message */}
                <p className='text-center text-sm text-gray-600 tracking-wide opacity-60 pt-36'>
                  "To make big changes small steps are necessary"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join_Human_safety;