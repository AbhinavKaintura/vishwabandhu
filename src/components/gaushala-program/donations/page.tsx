'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import mission from '../../../../public/gaushala-program/mission.jpg';
import { Leaf, ChevronRight, HandHeart } from 'lucide-react';

interface CampaignDetails {
  campaignTitle: string;
  description: string;
}

const DonateGaushalaProgram = () => {
  const stats: CampaignDetails = {
    campaignTitle: "Gaushala Program",
    description:
      "Together, we can honor these divine beings and preserve our ancient traditions. Support our mission to protect and serve Gau Mata.",
  };

  return (
    <div className="bg-gradient-to-b from-orange-50 to-yellow-50 py-12 md:py-16 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300"></div>

      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-orange-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Section with Overlay */}
            <div className="relative h-[280px] sm:h-[350px] md:h-[400px] lg:h-full w-full overflow-hidden group">
              <div className="absolute inset-0 bg-orange-900/20 z-10 rounded-t-xl lg:rounded-l-xl lg:rounded-t-none"></div>
              <Image
                src={mission}
                alt="Sacred cows in our Gaushala"
                fill
                priority
                className="object-cover rounded-t-xl lg:rounded-l-xl lg:rounded-t-none transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-orange-900/80 to-transparent h-24 z-10 flex items-end p-6 lg:hidden">
                <h1 className="text-white text-xl sm:text-2xl font-bold">
                  {stats.campaignTitle}
                </h1>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-between px-6 lg:p-10 relative">
              {/* display only for larger displays */}

              <div className="hidden lg:block absolute -top-40 -right-40 w-80 h-80 rounded-full bg-orange-50"></div>
              <div className="space-y-5">
                {/* Headline with badge */}
                <div className="hidden lg:block mb-2">
                  <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full mb-6">
                    <Leaf className="w-4 h-4 inline-block mr-1" />
                    Sacred Initiative
                  </span>
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight transition-transform duration-300 hover:scale-[1.02]">
                    {stats.campaignTitle}
                  </h1>
                </div>

                <p className="text-base md:text-lg font-merryweather sm:pb-0 md:pb-16 text-gray-700 leading-relaxed transition-transform duration-300 hover:scale-[1.02]">
                  {stats.description}
                </p>

                {/* Testimonial */}
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-[#ff7722] italic text-gray-700 text-sm mt-6">
                  <p className='transition-transform duration-300 hover:scale-[1.02]'>"Supporting the Gaushala Program has been a blessing. Seeing these sacred beings receive the care and respect they deserve brings peace to my heart. It's not just about protection - it's about preserving our dharma."</p>
                  <div className="text-right mt-2 text-orange-700 font-medium text-xs">
                    — Pandit Rajesh Kumar, Mathura
                  </div>
                </div>
              </div>

              {/* Call-to-action Section */}
              <div className="space-y-4 pt-6 transition-transform duration-300 hover:scale-105">
                <Link href="/donate-gaushala-program" className="block w-full">
                  <button
                    className="w-full bg-[#ff7722] hover:bg-orange-600 text-white font-medium text-lg px-8 py-4 rounded-lg shadow-md flex items-center justify-center group transition-all duration-300"
                    style={{ backgroundColor: "#ff7722" }}
                  >
                    <HandHeart className="mr-2 w-5 h-5" />
                    <span>Donate Now</span>
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <div className="text-center text-sm text-gray-500 mt-2">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateGaushalaProgram;