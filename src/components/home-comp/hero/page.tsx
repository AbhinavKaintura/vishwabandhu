import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import qr_code from '../../../../public/home-img/qr-code.jpeg'
import bg_img from '../../.././../public/home-img/hero.png'

const Hero = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg_img.src})` 
        }}
      >
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="text-white text-center px-4 max-w-3xl">
          <h1 className="mb-6 text-5xl font-bold leading-tight">
            गोपालक बनिये और कृष्ण कृपा प्राप्त करिये
          </h1>
          <p className="mb-8 text-lg">
            अपनी इच्छा अनुसार दान करें और गोपालक बनें, गौ माता के आशीर्वाद के साथ-साथ देवी-देवताओं की भी कृपा प्राप्त करें
          </p>
          <div className="flex items-center justify-center lg:mb-10">
            <Link href='/donate-gaushala-program'>
              <button
                className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-lg uppercase text-2xl mr-4">
                दान करें
              </button>
            </Link>
            <Image src={qr_code} alt='' width={100} height={100} className='lg:ml-32'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero