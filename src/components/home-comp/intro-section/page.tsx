// IntroSection.tsx
import React from 'react';
import Image from 'next/image';
import bharat_gaushala from "../../../../public/home-img/bharat_gaushala.jpg"
import introbg from "../../../../public/home-img/introbg.jpg"

const IntroSection = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={introbg}
          alt="background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-[35%] transition-transform duration-300 hover:scale-[1.02]">
            <div className="bg-orange-50 p-4 shadow-xl rounded-lg">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
                <Image
                  src={bharat_gaushala}
                  alt="Happy children"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 90vw, 35vw"
                />
              </div>
            </div>
          </div>

          {/* Content Section - Wider with better text containment */}
          <div className="w-full lg:w-[60%] transition-transform duration-300 hover:scale-[1.01]">
            <div className="bg-white p-6 sm:p-8 shadow-xl rounded-lg">
              <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-3 text-gray-800">
                Who are we?
              </h2>
              
              <div className="w-20 h-0.5 bg-orange-400 mb-6" />
              
              <div className="mb-8">
                <blockquote className="text-lg sm:text-xl font-poppins mb-3 text-gray-700 italic">
                  "Remember that the happiest people are not those getting more, but those giving more"
                </blockquote>
                <p className="text-right font-poppins text-gray-600 text-sm sm:text-base">
                  - H. Jackson Brown Jr.
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-base lg:text-2xl sm:text-lg font-caveat leading-relaxed text-gray-700">
                  The Vishwa Bandhu Foundation is an Section 8 non-profit company dedicated 
                  to creating positive social impact by fostering community development, 
                  supporting education, promoting environmental sustainability, and 
                  empowering underprivileged groups.
                </p>
                
                <p className="text-base lg:text-2xl sm:text-lg font-caveat leading-relaxed text-gray-700">
                  As a registered NGO, we focus on building a better future for all by 
                  implementing impactful initiatives, supporting sustainable practices, 
                  and advocating for the rights and welfare of marginalized communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;