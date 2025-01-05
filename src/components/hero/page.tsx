import React from 'react'
import Image from 'next/image'
import cow from "../../../public/background.jpg"

interface BackgroundWithTextProps {
  backgroundUrl?: string;
  firstText?: string;
  secondText?: string;
}

const Hero: React.FC<BackgroundWithTextProps> = (
  backgroundUrl = "../../../public/background.jpg",
  firstText = "First Text Block",
  secondText = "Second Text Block"
) => {
  return (
<div className="relative min-h-screen w-full">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content Container */}
      <div className="relative flex flex-col justify-center items-center min-h-screen p-4 space-y-8">
        {/* First Text Block */}
        <div className="max-w-lg p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
          <p className="text-gray-800 text-xl">
            {firstText}
          </p>
        </div>

        {/* Second Text Block */}
        <div className="max-w-lg p-6 bg-black/80 backdrop-blur-sm rounded-lg shadow-lg">
          <p className="text-white text-xl">
            {secondText}
          </p>
        </div>
      </div>
    </div>
  );

    // <div>
    //   <div>
    //     <Image 
    //       src = {cow}
    //       alt = 'cow'
    //       height={300}
    //       width={300}
    //       className=''
    //     />
    //   </div>
    // </div>

  
}

export default Hero