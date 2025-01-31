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
    <footer className="relative py-12 px-4">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <div className="relative w-40 md:w-48 h-14 md:h-16 mx-auto md:mx-0">
              <Image src={logo} alt="RSVBF Logo" layout="fill" className="object-contain" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-gray-800 font-semibold mb-4">Contact Us</h3>
              <div className="flex items-center text-emerald-800 gap-2 justify-center md:justify-start">
                <Phone className="w-5 h-5" />
                <div>
                  <p className="text-sm font-medium">Hotline 24/7</p>
                  <p className="text-gray-700">+91 - 956052121</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-emerald-800 mb-6">Services</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/gaushala-program" className="text-gray-700 hover:text-orange-500 transition-colors">
                  Gaushala Program
                </Link>
              </li>
              <li>
                <Link href="/human-safety-program" className="text-gray-700 hover:text-orange-500 transition-colors">
                  Bharat Self Care Team
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-emerald-800 mb-6">Quick Links</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/support" className="text-gray-700 hover:text-orange-500 transition-colors">
                  SUPPORT
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-700 hover:text-orange-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-gray-700 hover:text-orange-500 transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-gray-700 hover:text-orange-500 transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className='flex flex-col space-y-6 items-center md:items-start'>
            <div className="flex flex-row space-x-4 justify-center md:justify-start">
              <Link href="mailto:vishwabandhufoundation.ngo@gmail.com">
                <Image src={email} alt="Email" width={30} height={30} className="hover:opacity-80" />
              </Link>
              <Link href="https://www.whatsapp.com/channel/0029VaoK7GB6xCSSsM3t6j2E">
                <Image src={whatsapp} alt='threads' width={30} height={30} className='hover:opacity-80' />
              </Link>
              <Link href="https://www.facebook.com/people/Vishwa-Bandhu-Foundation/61572132692556/">
                <Image src={facebook} alt='facebook' width={30} height={30} className='hover:opacity-80' />
              </Link>
              <Link href="https://www.instagram.com/vishwa_bandhu_foundation">
                <Image src={instagram} alt='instagram' width={30} height={30} className='hover:opacity-80' />
              </Link>
              <Link href="https://www.youtube.com/@Vishwabandhufoundation">
                <Image src={youtube} alt='phone' width={30} height={30} className='hover:opacity-80' />
              </Link>
              <Link href="https://www.threads.net/@vishwa_bandhu_foundation">
                <Image src={threads} alt='threads' width={30} height={30} className='hover:opacity-80' />
              </Link>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold text-emerald-800 mb-6">Contact Info</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 justify-center md:justify-start">
                  <Clock className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-base">
                    Open Hours Mon - Fri: 8.00 am. - 6.00 pm.
                  </span>
                </li>
                <li className="flex items-start gap-3 justify-center md:justify-start">
                  <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-base">
                    Office no. 3, Sector-39, Gurgaon, Haryana - 122001
                  </span>
                </li>
                <li className="flex items-start gap-3 justify-center md:justify-start">
                  <Mail className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <a 
                    href="mailto:support@vishwabandhufoundation.org"
                    className="text-gray-700 hover:text-orange-500 transition-colors break-words text-sm"
                  >Support@vishwabandhufoundation.org
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
