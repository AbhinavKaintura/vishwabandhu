'use Client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import email from "../../../public/email.png"
import facebook from "../../../public/facebook.png"
import instgram from "../../../public/instagram.png"
import phone from "../../../public/phone-call.png"
import threads from "../../../public/threads.png"



const HeaderBar = () => {
  return (
    <div>
        <div className='bg-black h-10 text-zinc-400 flex justify-between '>

            <div className='text-xs flex flex-row '>
                <div className='p-3 mx-5 hover:opacity-80 '>vishwabandhufoundation.ngo@gmail.com</div>
                
                
                <div className='p-3 hover:opacity-80  flex flex-row '>
                <Image
                        src={phone}
                        alt='phone'
                        width={20}
                        height={20}
                        className='hover:opacity-80 mr-2'
                />
                    +91 - 9560522121</div>
            </div>


            <div className='flex items-center space-x-4 ml-6'>
                <Link href="mailto:vishwabandhufoundation.ngo@gmail.com">
                    <Image 
                        src={email} 
                        alt="Email"
                        width={20}
                        height={20}
                        className="hover:opacity-80"
                    />
                </Link>
                <Link href="#">
                    <Image
                        src={facebook}
                        alt='facebook'
                        width={20}
                        height={20}
                        className='hover:opacity-80'
                    />
                </Link>
                <Link href="https://www.instagram.com/vishwa_bandhu_foundation">
                    <Image
                        src={instgram}
                        alt='instagram'
                        width={23}
                        height={23}
                        className='hover:opacity-80'
                    />
                </Link>
                <Link href="#">
                    <Image
                        src={phone}
                        alt='phone'
                        width={20}
                        height={20}
                        className='hover:opacity-80'
                    />
                </Link>
                <Link href="https://www.threads.net/@vishwa_bandhu_foundation">
                    <Image
                        src={threads}
                        alt='threads'
                        width={20}
                        height={20}
                        className='hover:opacity-80'
                    />
                </Link>

                </div>

            <div className='text-xs flex justify-end flex-grow mt-3 mr-6 '>
                <div>
                    <Link href="/donate" className='hover:opacity-80 p-3'>Donate</Link>
                    <Link href="/login" className='p-3 hover:opacity-80'>Login</Link>
                    <Link href="/register" className='p-3 hover:opacity-80'>Register</Link>
                </div>

                </div>

        </div>
    </div>
  )
}

export default HeaderBar