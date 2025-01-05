'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import logo from '../../../public/RSVBF-LOGO.png'
import profileLogo from '../../../public/user.png'

const NavBar = () => {
  const router = useRouter();

  const handleDonateClick =() => {
    router.push('/donate');
  };

  return (
    <div className='h-20 bg-slate-50 w-full shadow-sm text-xs '>
      <div className=' mx-auto px-4 h-full flex items-center justify-between'>
        <div className='flex-initial ml-20'>
          <Link href="/">
            <Image
              src={logo}
              alt='logo'
              width={150}
              height={150}
              className='object-contain'
            />
          </Link>
        </div>

        <div className='flex items-center space-x-28'>
          <button
            onClick={handleDonateClick}
            aria-label="Donate Now"
            className="rounded-2xl bg-orange-600 text-white px-6 py-2 font-medium transition-colors duration-200 hover:bg-orange-700 decoration-8">
            DONATE <span> <br/></span>NOW
          </button>

          <nav className='flex items-center space-x-12'>
            <Link href="/" className='text-gray-700 hover:text-orange-600 transition-colors'>
              HOME
            </Link>
            <Link href="/services" className='text-gray-700 hover:text-orange-600 transition-colors'>
              SERVICES
            </Link>
            <Link href="/users" className='text-gray-700 hover:text-orange-600 transition-colors'>
              USER'S GROUP
            </Link>
            <Link href="/team" className='text-gray-700 hover:text-orange-600 transition-colors'>
              OUR TEAM
            </Link>
            <Link href="/support" className='text-gray-700 hover:text-orange-600 transition-colors'>
              SUPPORT
            </Link>
            <Link href="/profile">
              <Image
                src={profileLogo}
                alt='profile'
              />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar