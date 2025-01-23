'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '../../../../public/nav-header/RSVBF-LOGO.png'
import profileLogo from '../../../../public/nav-header/user.png'
import Profile_Dropdown from '../profile_photo/page'

import HoverDropdown from './services'

interface Props {
  bg_color: string;
}

const NavBar: React.FC<Props> = ({ bg_color }) => {

  return (
    <div className={`h-20 ${bg_color} w-full shadow-sm text-xs`}>
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

        <div className='flex items-center space-x-24'>
          <button
            aria-label="Donate Now"
            className="rounded-2xl bg-orange-600 text-white px-6 py-2 decoration-8 font-bold transition-colors duration-200 hover:bg-orange-700">
            <Link href="/gaushala-program">Donate<span> <br /></span>NOW</Link>
          </button>


          <nav className='flex items-center space-x-16'>
            <Link href="/" className='text-gray-700 hover:text-orange-600 transition-colors'>
              HOME
            </Link>
            <HoverDropdown></HoverDropdown>
            <Link href="/users" className='text-gray-700 hover:text-orange-600 transition-colors'>
              DONATERS' GROUP
            </Link>
            <Link href="/members" className='text-gray-700 hover:text-orange-600 transition-colors'>
              OUR MEMBERS
            </Link>
            <Link href="/support" className='text-gray-700 hover:text-orange-600 transition-colors'>
              SUPPORT
            </Link>
            <Profile_Dropdown />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar
