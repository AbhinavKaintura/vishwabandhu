import React from 'react';
import Image from 'next/image';
import mission from "../../../../public/home-img/mission.jpg"

const Mission = () => {
  return (
    <div className="w-full">
      <div className="relative w-full bg-orange-50 overflow-hidden py-8">
        {/* Title - Centered above the image */}
        <div className="text-center mb-8 pt-20">
          <h2 className="text-4xl font-bold font-serif">
            <span className="text-orange-500">OUR</span>{' '}
            <span className="text-orange-300">MISSION</span>
          </h2>
        </div>

        {/* Main content container with image and text */}
        <div className="relative w-full h-[500px] overflow-hidden">
          {/* Background Image */}
          <Image 
            src={mission}
            alt="Background scenery"
            fill
            className="object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Content Container - Positioned at the left top corner */}
          <div className="relative z-10 p-12 h-full flex flex-col items-start max-w-2xl">
            <p className="text-gray-100 mb-8 leading-relaxed text-lg mt-10 font-serif">
              Our mission is to build a compassionate community that <br/> supports families in times of loss, promotes human safety, <br/> 
              and fosters care for cows.
            </p>

            <button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-3xl font-poppins transition-colors">
              SEE PROGRAMS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;