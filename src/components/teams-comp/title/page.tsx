
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
        <h1 className="tracking-widest text-5xl  h-36 font-serif pt-11 pl-32 text-white">Vishwabandhu Members</h1>
        
        </div>
      </div>
      <p className="text-right pt-4 pr-16 text-xl tracking-widest bg-[#285584] h-14 text-white font-bold font-caveat">Presenting our Human Safety Program Members</p>

    </div>
  )
}


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
        <h1 className="tracking-widest text-5xl  h-36 font-serif pt-11 pl-32 text-white">Vishwabandhu Members</h1>
        
        </div>
      </div>
      <p className="text-right pt-4 pr-16 text-xl tracking-widest bg-[#285584] h-14 text-white font-bold font-caveat">Presenting our Human Safety Program Members</p>

    </div>
  )
}

export default Title