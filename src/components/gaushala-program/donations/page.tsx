import React from 'react';
import Image from 'next/image';
import GauMata_image from '../../../../public/gaushala-program/cow_human.jpg'

interface DonationStats {
  currentAmount: number;
  goalAmount: number;
  campaignTitle: string;
  description: string;
}

const GauMataDonation = () => {
  const stats: DonationStats = {
    currentAmount: 25000,
    goalAmount: 100000,
    campaignTitle: "Gau Mata Donation",
    description: "Gau Mata campaign aims to protect, honor, and cherish cows, recognizing their sacred and vital role."
  };

  const progressPercentage = (stats.currentAmount / stats.goalAmount) * 100;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 mb-12">
      <div className="max-w-5xl mx-auto mt-24">
        <div className="overflow-hidden bg-white rounded-3xl shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Image Section */}
            <div className="relative h-[300px] lg:h-full">
              <Image 
                src={GauMata_image}
                alt='Gau Mata with calf'
                className="w-full h-full object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-t-none"
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
                  <h2 className="text-gray-700 font-medium pt-4">DONATION STATUS</h2>
                  
                  {/* Progress Bar */}
                  <div className="relative pt-4">
                    <div className="flex mb-2 items-center justify-between">
                      <div className="relative">
                        <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-red-500 rounded-lg">
                          {progressPercentage.toFixed(0)}%
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-full bg-red-500 rounded-full transition-all duration-500"
                        style={{ width: `${progressPercentage}%` }}
                      />
                    </div>
                  </div>

                  {/* Amount Display */}
                  <div className="flex justify-between items-center">
                    <div className="text-gray-800 font-semibold">
                      ₹{stats.goalAmount.toLocaleString()} Goals
                    </div>
                    <div className="text-gray-800 font-semibold">
                      ₹{stats.currentAmount} Donated
                    </div>
                  </div>
                </div>

                {/* Donate Button */}
                <button className="w-[40%] bg-orange-400 hover:bg-orange-500 text-white font-semibold py-4 px-6 rounded-full transition-all duration-500 hover:w-[45%] ">
                  DONATE NOW
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

export default GauMataDonation;