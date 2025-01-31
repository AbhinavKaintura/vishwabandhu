'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import email from "../../../../public/nav-header/email.png"
import facebook from "../../../../public/nav-header/facebook.png"
import instagram from "../../../../public/nav-header/instagram.png"
import phone from "../../../../public/nav-header/phone-call.png"
import threads from "../../../../public/nav-header/threads.png"
import whatsapp from "../../../../public/nav-header/whatsapp.png"
import youtube from "../../../../public/nav-header/youtube.png"

const HeaderBar = () => {
  return (
    <div>
      {/* Visible only on medium and larger screens */}
      <div className='hidden md:block bg-black text-zinc-400'>
        <div className='flex items-center h-10 px-4'>
          {/* Contact Information */}
          <div className='text-xs flex flex-row items-center'>
            <p
              className="hover:opacity-80 mr-5 hover:text-gray-400 transition-colors break-words"
            >
              <a href="mailto:support@vishwabandhufoundation.org"
                className=" hover:text-orange-500 transition-colors "
              > Support@vishwabandhufoundation.org
              </a>
            </p>
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
          <div className='flex flex-row space-x-4 ml-10'>
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
          {/* <div className='text-xs m-auto'>
            <Link href="/gaushala-program" className='hover:opacity-80 px-3'>Donate</Link>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default HeaderBar