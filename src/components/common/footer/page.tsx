import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, MapPin, Mail, Phone } from 'lucide-react';
import logo from "../../../../public/nav-header/RSVBF-LOGO.png"

const Footer = () => {
  return (
    <footer className="bg-[#FFF5EE] py-8 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Logo and Contact Section - Full width on mobile */}
          <div className="space-y-4 sm:space-y-6">
            {/* Logo container with responsive width */}
            <div className="relative w-40 sm:w-48 h-14 sm:h-16 mx-auto sm:mx-0">
              <Image
                src={logo}
                alt="RSVBF Logo"
                fill
                className="object-contain"
              />
            </div>
            {/* Hotline section */}
            <div className="text-center sm:text-left">
              <h3 className="text-gray-800 font-semibold mb-3 sm:mb-4">Contact Us</h3>
              <div className="flex items-center text-orange-500 gap-2 justify-center sm:justify-start">
                <Phone className="w-5 h-5" />
                <div>
                  <p className="text-sm font-medium">Hotline 24/7</p>
                  <p className="text-gray-700">+91 - 956052121</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-semibold text-emerald-800 mb-4 sm:mb-6">Services</h2>
            <ul className="space-y-3 sm:space-y-4">
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

          {/* Quick Links Section */}
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-semibold text-emerald-800 mb-4 sm:mb-6">Quick Link</h2>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link href="/support" className="text-gray-700 hover:text-orange-500 transition-colors">
                  SUPPORT
                </Link>
              </li>
              {/* <li>
                <Link href="/terms-and-conditions" className="text-gray-700 hover:text-orange-500 transition-colors">
                  Privacy Policy
                </Link>
              </li> */}
              <li>
                <Link href="/terms-and-conditions" className="text-gray-700 hover:text-orange-500 transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              {/* <li>
                <Link href="/refund" className="text-gray-700 hover:text-orange-500 transition-colors">
                  Refund Policy
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-semibold text-emerald-800 mb-4 sm:mb-6">Contact Info</h2>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3 justify-center sm:justify-start">
                <Clock className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">
                  Open Hours Mon - Fri: 8.00 am. - 6.00 pm.
                </span>
              </li>
              <li className="flex items-start gap-3 justify-center sm:justify-start">
                <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">
                  Office no. 3, Sector-39, Gurgaon, Haryana - 122001
                </span>
              </li>
              <li className="flex items-start gap-3 justify-center sm:justify-start">
                <Mail className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <a 
                  href="mailto:support@vishwabandhufoundation.org" 
                  className="text-gray-700 hover:text-orange-500 transition-colors break-words text-sm sm:text-base"
                >
                  support@vishwabandhufoundation.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;