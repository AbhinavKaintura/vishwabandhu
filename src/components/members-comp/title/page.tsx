
import React from 'react'
import title_img from "../../../../public/users-page/blue_sky.jpg";
import Image from 'next/image';

const Title = () => {
  return (
    <div>
      <div className='relative'>
        <Image
          src={title_img}
          alt='sky background'
          width={300}
          height={1920}
          className='w-full h-[100px] sm:h-[120px] md:h-[140px] object-cover'
        />
        <div className='absolute inset-0 bg-blue-900/30 flex items-center'>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
            tracking-widest font-serif text-white
            px-4 sm:px-8 md:px-16 lg:px-32">
            Vishwabandhu Family Members
          </h1>
        </div>
      </div>
      
      <p className="text-white bg-[#285584] 
        text-sm sm:text-base md:text-lg lg:text-xl 
        tracking-widest font-bold font-caveat
        p-4 sm:px-8 md:px-16 lg:px-32
        h-auto min-h-[3rem] md:h-14 
        flex items-center">
        Presenting our Human Safety Program Members
      </p>
    </div>

  )
}
export default Title