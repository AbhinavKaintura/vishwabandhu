import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, MapPin, Mail, Phone } from 'lucide-react';
import logo from "../../../../public/nav-header/RSVBF-LOGO.png";
import email from "../../../../public/nav-header/email.png";
import facebook from "../../../../public/nav-header/facebook.png";
import instagram from "../../../../public/nav-header/instagram.png";
import threads from "../../../../public/nav-header/threads.png";
import whatsapp from "../../../../public/nav-header/whatsapp.png";
import youtube from "../../../../public/nav-header/youtube.png";

const Footer = () => {
  return (
    <footer className="relative pt-16 pb-8 px-4 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Grid Container */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Hotline Section */}
          <div className="col-span-2 sm:col-span-1 space-y-6">
            <div className="relative w-40 md:w-48 h-14 md:h-16 mx-auto sm:mx-0">
              <Image src={logo} alt="RSVBF Logo" layout="fill" className="object-contain" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-[#ff7722] font-semibold mb-4 text-lg">Contact Us</h3>
              <div className="flex items-center text-gray-800 gap-2 justify-center sm:justify-start">
                <Phone className="w-5 h-5 text-[#ff7722]" />
                <div>
                  <p className="text-sm font-medium">Hotline 24/7</p>
                  <p className="text-[#ff7722] font-semibold">+91 - 956052121</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-semibold text-[#ff7722] mb-6">Services</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/gaushala-program" className="text-gray-700 hover:text-[#ff7722] transition-colors duration-300">
                  Gaushala Program
                </Link>
              </li>
              <li>
                <Link href="/bharat-self-care-team" className="text-gray-700 hover:text-[#ff7722] transition-colors duration-300">
                  Bharat Self Care Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-semibold text-[#ff7722] mb-6">Quick Links</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/support" className="text-gray-700 hover:text-[#ff7722] transition-colors duration-300">
                  SUPPORT
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-700 hover:text-[#ff7722] transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-gray-700 hover:text-[#ff7722] transition-colors duration-300">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-gray-700 hover:text-[#ff7722] transition-colors duration-300">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section - Full Width on Mobile */}
          <div className="col-span-2 sm:col-span-1">
            <div className="text-center sm:text-left">
              <h2 className="text-xl font-semibold text-[#ff7722] mb-6">Contact Info</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 justify-center sm:justify-start">
                  <Clock className="w-5 h-5 text-[#ff7722] mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-base">
                    Open Hours Mon - Fri: 8.00 am. - 6.00 pm.
                  </span>
                </li>
                <li className="flex items-start gap-3 justify-center sm:justify-start">
                  <MapPin className="w-5 h-5 text-[#ff7722] mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-base">
                    Office no. 3, Sector-39, Gurgaon, Haryana - 122001
                  </span>
                </li>
                <li className="flex items-start gap-3 justify-center sm:justify-start">
                  <Mail className="w-5 h-5 text-[#ff7722] mt-1 flex-shrink-0" />
                  <a
                    href="mailto:support@vishwabandhufoundation.org"
                    className="text-gray-700 hover:text-[#ff7722] transition-colors duration-300 break-words text-sm"
                  >
                    Support@vishwabandhufoundation.org
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Icons */}
            <div className="flex flex-row space-x-4 justify-center sm:justify-start mt-6">
              <Link href="mailto:vishwabandhufoundation.ngo@gmail.com">
                <div className="transform hover:scale-110 transition-transform duration-300">
                  <Image src={email} alt="Email" width={30} height={30} className="hover:opacity-80" />
                </div>
              </Link>
              <Link href="https://www.whatsapp.com/channel/0029VaoK7GB6xCSSsM3t6j2E">
                <div className="transform hover:scale-110 transition-transform duration-300">
                  <Image src={whatsapp} alt='whatsapp' width={30} height={30} className='hover:opacity-80' />
                </div>
              </Link>
              <Link href="https://www.facebook.com/people/Vishwa-Bandhu-Foundation/61572132692556/">
                <div className="transform hover:scale-110 transition-transform duration-300">
                  <Image src={facebook} alt='facebook' width={30} height={30} className='hover:opacity-80' />
                </div>
              </Link>
              <Link href="https://www.instagram.com/vishwa_bandhu_foundation">
                <div className="transform hover:scale-110 transition-transform duration-300">
                  <Image src={instagram} alt='instagram' width={30} height={30} className='hover:opacity-80' />
                </div>
              </Link>
              <Link href="https://www.youtube.com/@Vishwabandhufoundation">
                <div className="transform hover:scale-110 transition-transform duration-300">
                  <Image src={youtube} alt='youtube' width={30} height={30} className='hover:opacity-80' />
                </div>
              </Link>
              <Link href="https://www.threads.net/@vishwa_bandhu_foundation">
                <div className="transform hover:scale-110 transition-transform duration-300">
                  <Image src={threads} alt='threads' width={30} height={30} className='hover:opacity-80' />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-orange-200">
          <div className="text-center">
            <p className="text-gray-600">
              © {new Date().getFullYear()} Vishwa Bandhu Foundation. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Making a difference in the lives of those who need it most.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;