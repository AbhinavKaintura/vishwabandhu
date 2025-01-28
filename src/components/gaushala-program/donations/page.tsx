// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import GauMata_image from '../../../../public/gaushala-program/cow_human.jpg'

// import Donate_Gaushala_Program from '@/app/donate-gaushala-program/page';

// interface DonationStats {
//   currentAmount: number;
//   goalAmount: number;
//   campaignTitle: string;
//   description: string;
// }

// const GauMataDonation = () => {
//   const stats: DonationStats = {
//     currentAmount: 25000,
//     goalAmount: 100000,
//     campaignTitle: "Gau Mata Donation",
//     description: "Gau Mata campaign aims to protect, honor, and cherish cows, recognizing their sacred and vital role."
//   };

//   const progressPercentage = (stats.currentAmount / stats.goalAmount) * 100;

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 md:p-8 mb-8">
//       <div className="max-w-5xl mx-auto">
//         <div className="overflow-hidden bg-white rounded-3xl shadow-xl">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {/* Image Section */}
//             <div className="relative h-[300px] lg:h-full">
//               <Image
//                 src={mission}
//                 alt='Gau Mata with calf'
//                 className="w-full h-full object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-t-none"
//               />

//             </div>

//             {/* Content Section */}
//             <div className="p-6 space-y-6">
//               <div className="space-y-4">
//                 <div className="flex items-center space-x-2">
//                   <span className="text-red-500 font-medium uppercase tracking-wider text-sm">Campaign</span>
//                 </div>

//                 <h1 className="text-3xl font-bold text-gray-800">{stats.campaignTitle}</h1>

//                 <p className="text-gray-600 leading-relaxed">
//                   {stats.description}
//                 </p>

//                 <div className="space-y-4">
//                   <h2 className="text-gray-700 font-medium pt-4">DONATION STATUS</h2>

//                   {/* Progress Bar */}
//                   <div className="relative pt-4">
//                     <div className="flex mb-2 items-center justify-between">
//                       <div className="relative">
//                         <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-red-500 rounded-lg">
//                           {progressPercentage.toFixed(0)}%
//                         </span>
//                       </div>
//                     </div>
//                     <div className="h-2 bg-gray-200 rounded-full">
//                       <div
//                         className="h-full bg-red-500 rounded-full transition-all duration-500"
//                         style={{ width: `${progressPercentage}%` }}
//                       />
//                     </div>
//                   </div>

//                   {/* Amount Display */}
//                   <div className="flex justify-between items-center">
//                     <div className="text-gray-800 font-semibold">
//                       ₹{stats.goalAmount.toLocaleString()} Goals
//                     </div>
//                     <div className="text-gray-800 font-semibold">
//                       ₹{stats.currentAmount} Donated
//                     </div>
//                   </div>
//                 </div>

//                 {/* Donate Button */}
//                 <Link href="/donate-gaushala-program" className="w-[40%] bg-orange-400 hover:bg-orange-500 text-white font-semibold py-4 px-6 rounded-full transition-all duration-500 hover:w-[45%] hover:shadow-lg hover:scale-105 ">
//                   <button className='mt-7'>
//                     DONATE NOW
//                   </button>
//                 </Link>

//                 {/* Short message */}
//                 <p className='text-center pt-10 align-bottom text-sm text-gray-600 tracking-wide opacity-60'>"To make big changes small steps are necessary"</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GauMataDonation;


'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import mission from '../../../../public/gaushala-program/mission.jpg';
// import Animated_family from '../../../../public/human-safety-program/who_can_join.jpg';

interface CampaignDetails {
  campaignTitle: string;
  description: string;
}

const JoinHumanSafety = () => {
  const stats: CampaignDetails = {
    campaignTitle: "Gaushala Program",
    description:
      "Gau Mata campaign aims to protect, honor, and cherish cows, recognizing their sacred and vital role.",
  };

  return (
    <div className="bg-gradient-to-r from-yellow-100 via-yellow-50 to-yellow-200 py-6 sm:py-8 md:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-full w-full">
              <Image
                src={mission}
                alt="Animated family"
                fill
                priority
                className="object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-t-none"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-center p-6 sm:p-8 md:py-8 lg:px-12 space-y-4 sm:space-y-6">
              <span className="text-orange-500 font-medium uppercase tracking-wide text-xs sm:text-sm">
                Campaign
              </span>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                {stats.campaignTitle}
              </h1>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {stats.description}
              </p>

              {/* Call-to-action Button */}
              <div className="pt-4 sm:pt-6">
                <Link href="/donate-gaushala-program" className="inline-block w-full sm:w-auto text-center">
                  <p className="block sm:inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-md transform transition-all hover:scale-105 duration-300">
                    Donate Now
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinHumanSafety;