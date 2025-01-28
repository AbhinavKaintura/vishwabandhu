// IntroSection.tsx
import React from 'react';
import Image from 'next/image';
import bharat_gaushala from "../../../../public/home-img/bharat_gaushala.jpg"
import introbg from "../../../../public/home-img/introbg.jpg"

const IntroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={introbg}
          alt="background"
          fill
          className="object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start gap-32">
          {/* Image Section */}
          <div className="lg:w-[40%]">
            <div className="bg-orange-50 p-3 shadow-lg">
              <div className="relative aspect-[5/6] w-full">
                <Image
                  src={bharat_gaushala}
                  alt="Happy children"
                  fill
                  className="object-cover py-10"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-[55%] lg:-mt-12">
            <div className="bg-white p-8 shadow-lg">
              <h2 className="text-4xl font-poppins font-bold mb-2">Who are we?</h2>
              
              <div className="w-16 h-0.5 bg-orange-400 mb-6" />
              
              <div className="mb-8">
                <blockquote className="text-xl font-poppins mb-2">
                  "Remember that the happiest people are not those getting more, but those giving more"
                </blockquote>
                <p className="text-right font-poppins text-gray-600">- H. Jackson Brown Jr.</p>
              </div>

              <p className="text-xl font-caveat leading-relaxed mb-6">
                The Vishwa Bandhu Foundation is an Section 8 non-profit company dedicated 
                to creating positive social impact by fostering community development, 
                supporting education, promoting environmental sustainability, and 
                empowering underprivileged groups.
              </p>
              
              <p className="text-xl font-caveat leading-relaxed">
                As a registered NGO, we focus on building a better future for all by 
                implementing impactful initiatives, supporting sustainable practices, 
                and advocating for the rights and welfare of marginalized communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
