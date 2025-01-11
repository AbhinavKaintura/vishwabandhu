import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, MapPin, Mail, Phone } from 'lucide-react';
import logo from "../../../../public/nav-header/RSVBF-LOGO.png"
 

const Footer = () => {
  return (
    <footer className="bg-[#FFF5EE] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Hotline */}
          <div className="space-y-6">
            <div className="relative w-48 h-16">
              <Image
                src={logo}
                alt="RSVBF Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-6">
              <h3 className="text-gray-800 font-semibold mb-4">Contact Us</h3>
              <div className="flex items-center text-orange-500 gap-2">
                <Phone className="w-5 h-5" />
                <div>
                  <p className="text-sm font-medium">Hotline 24/7</p>
                  <p className="text-gray-700">+91 - 956052121</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-xl font-semibold text-emerald-800 mb-6">Services</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/gaushala" className="text-gray-700 hover:text-orange-500 transition-colors">
                  Gaushala Program
                </Link>
              </li>
              <li>
                <Link href="/human-safety" className="text-gray-700 hover:text-orange-500 transition-colors">
                  Human Safety Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold text-emerald-800 mb-6">Quick Link</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/support" className="text-gray-700 hover:text-orange-500 transition-colors">
                  SUPPORT
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-700 hover:text-orange-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-700 hover:text-orange-500 transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-gray-700 hover:text-orange-500 transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold text-emerald-800 mb-6">Contact Info</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-500 mt-1" />
                <span className="text-gray-700">Open Hours Mon - Fri: 8.00 am. - 6.00 pm.</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                <span className="text-gray-700">Office no. 3, Sector-39, Gurgaon, Haryana - 122001</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-500 mt-1" />
                <a 
                  href="mailto:support@vishwabandhufoundation.org" 
                  className="text-gray-700 hover:text-orange-500 transition-colors break-words"
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