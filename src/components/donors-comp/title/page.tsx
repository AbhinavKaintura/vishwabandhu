import React from 'react'
import title_img from "../../../../public/users-page/blue_sky.jpg";
import Image from 'next/image';

const Title = () => {
  return (
    <div>
      <div className='relative'>
        <Image
          src = {title_img}
          alt ='sky background'
          width={300}
          height={1920}
          className='w-full h-[140px] object-cover'
        />
        <div className='absolute items-center justify-center inset-0 bg-blue-900/30'>
        <h1 className="tracking-widest text-5xl  h-36 font-serif pt-11 pl-32 text-white">Gaushala Donor List</h1>
        
        </div>
      </div>
      <p className="text-left pl-32 pt-4 pr-16 text-2xl tracking-widest bg-[#7399c1] h-14 text-white font-bold font-caveat">Presenting our Proud Donors</p>

    </div>
  )
}

export default Title