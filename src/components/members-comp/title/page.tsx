
import React from 'react'
import title_img from "../../../../public/bharat-self-care-team/member_bharat.jpeg";
import Image from 'next/image';

const Title = () => {
  return (
    <div>
      <div className='relative'>
        <Image
          src={title_img}
          alt='happy family'
          className='w-full h-[100px] sm:h-[120px] md:h-[180px] object-cover'
        />
        <div className='absolute inset-0 bg-orange-400/10 flex items-center'>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
            tracking-widest font-serif text-white
            px-4 sm:px-8 md:px-16 lg:px-32">
            Vishwabandhu Family Members
          </h1>
        </div>
      </div>

      {/* <p className="text-white bg-[#ecbea1] 
        text-sm sm:text-base md:text-lg lg:text-xl 
        tracking-widest font-bold font-caveat
        p-4 sm:px-8 md:px-16 lg:px-32
        h-auto min-h-[3rem] md:h-14 
        flex items-center">
        Presenting our Bharat Self Care Team Members
      </p> */}
    </div>

  )
}
export default Title