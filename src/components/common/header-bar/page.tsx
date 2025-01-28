'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

import email from "../../../../public/nav-header/email.png"
import facebook from "../../../../public/nav-header/facebook.png"
import instagram from "../../../../public/nav-header/instagram.png"
import phone from "../../../../public/nav-header/phone-call.png"
import threads from "../../../../public/nav-header/threads.png"
import whatsapp from "../../../../public/nav-header/whatsapp.png"
import youtube from "../../../../public/nav-header/youtube.png"

const HeaderBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      {/* Desktop View */}
      <div className='bg-black text-zinc-400'>
        {/* Main container - hidden on small screens, visible on medium and up */}
        <div className='hidden md:flex justify-between items-center h-10 px-4'>
          {/* Contact Information */}
          <div className='text-xs flex flex-row items-center'>
            {/* <div className=''>vishwabandhufoundation.ngo@gmail.com</div> */}
            <a
              href="mailto:support@vishwabandhufoundation.org"
              className="hover:opacity-80 mr-5 hover:text-gray-400 transition-colors break-words"
            >
              support@vishwabandhufoundation.org
            </a>
            <div className='hover:opacity-80 flex flex-row items-center'>
              <Image
                src={phone}
                alt='phone'
                width={20}
                height={20}
                className='hover:opacity-80 mr-2'
              />
              +91 - 9560522121
            </div>
          </div>

          {/* Social Media Icons */}
          <div className='flex items-center space-x-4'>
            <Link href="mailto:vishwabandhufoundation.ngo@gmail.com">
              <Image src={email} alt="Email" width={20} height={20} className="hover:opacity-80" />
            </Link>
            <Link href="https://www.whatsapp.com/channel/0029VaoK7GB6xCSSsM3t6j2E">
              <Image src={whatsapp} alt='threads' width={20} height={20} className='hover:opacity-80' />
            </Link>
            <Link href="https://www.facebook.com/people/Vishwa-Bandhu-Foundation/61572132692556/">
              <Image src={facebook} alt='facebook' width={20} height={20} className='hover:opacity-80' />
            </Link>
            <Link href="https://www.instagram.com/vishwa_bandhu_foundation">
              <Image src={instagram} alt='instagram' width={20} height={20} className='hover:opacity-80' />
            </Link>
            <Link href="https://www.youtube.com/@Vishwabandhufoundation">
              <Image src={youtube} alt='phone' width={20} height={20} className='hover:opacity-80' />
            </Link>
            <Link href="https://www.threads.net/@vishwa_bandhu_foundation">
              <Image src={threads} alt='threads' width={20} height={20} className='hover:opacity-80' />
            </Link>
          </div>

          {/* Auth Links */}
          <div className='text-xs flex items-center'>
            <Link href="/gaushala-program" className='hover:opacity-80 px-3'>Donate</Link>
            <Link href="/login" className='hover:opacity-80 px-3'>Login</Link>
            <Link href="/register" className='hover:opacity-80 px-3'>Register</Link>
          </div>
        </div>

        {/* Mobile View */}
        <div className='md:hidden'>
          {/* Mobile Toggle Button */}
          <div className='flex justify-between items-center px-4 h-10'>
            <div className='text-xs hover:opacity-80'>
              vishwabandhufoundation.ngo@gmail.com
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='text-zinc-400 p-2'
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className='bg-black px-4 pb-4'>
              {/* Contact Info */}
              <div className='text-xs py-2 flex items-center'>
                <Image
                  src={phone}
                  alt='phone'
                  width={20}
                  height={20}
                  className='mr-2'
                />
                +91 - 9560522121
              </div>

              {/* Auth Links */}
              <div className='text-xs flex flex-col space-y-2 py-2 border-t border-zinc-800'>
                <Link href="/gaushala-program" className='hover:opacity-80'>Donate</Link>
                <Link href="/login" className='hover:opacity-80'>Login</Link>
                <Link href="/register" className='hover:opacity-80'>Register</Link>
              </div>

              {/* Social Media Icons */}
              <div className='flex space-x-4 py-2 border-t border-zinc-800'>
                <Link href="mailto:vishwabandhufoundation.ngo@gmail.com">
                  <Image src={email} alt="Email" width={20} height={20} className="hover:opacity-80" />
                </Link>
                <Link href="https://www.whatsapp.com/channel/0029VaoK7GB6xCSSsM3t6j2E">
                  <Image src={whatsapp} alt='threads' width={20} height={20} className='hover:opacity-80' />
                </Link>
                <Link href="https://www.facebook.com/people/Vishwa-Bandhu-Foundation/61572132692556/">
                  <Image src={facebook} alt='facebook' width={20} height={20} className='hover:opacity-80' />
                </Link>
                <Link href="https://www.instagram.com/vishwa_bandhu_foundation">
                  <Image src={instagram} alt='instagram' width={20} height={20} className='hover:opacity-80' />
                </Link>
                <Link href="https://www.youtube.com/@Vishwabandhufoundation">
                  <Image src={youtube} alt='phone' width={20} height={20} className='hover:opacity-80' />
                </Link>
                <Link href="https://www.threads.net/@vishwa_bandhu_foundation">
                  <Image src={threads} alt='threads' width={20} height={20} className='hover:opacity-80' />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HeaderBar