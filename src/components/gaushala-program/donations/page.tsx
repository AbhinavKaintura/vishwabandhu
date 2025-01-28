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
