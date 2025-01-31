'use client'

import React, { useState } from 'react';
import logo from '../../../../public/nav-header/RSVBF-LOGO.png'
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
interface Props {
  bg_color: string;
}

const NavBar: React.FC<Props> = ({ bg_color }) => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    { name: 'Bharat Self Care Team', href: '/human-safety-program' },
    { name: 'Gaushala Program', href: '/gaushala-program' }
  ];

  const userGroups = [
    { name: "Member's List", href: '/members' },
    { name: "Donor's List", href: '/users' }
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href='/'>
              <Image
                className="pl-4 h-10 w-auto"
                src={logo}
                alt="RSVBF Logo"
              />
            </Link>
            {/* <span className="ml-2 text-xl font-bold text-orange-500">RSVBF</span> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-orange-500">
              HOME
            </a>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 group-hover:text-orange-500 flex items-center">
                SERVICES
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute z-10 hidden group-hover:block w-56 bg-white shadow-lg py-2">
                {services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Users Group Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 group-hover:text-orange-500 flex items-center">
                USER'S GROUP
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute z-10 hidden group-hover:block w-48 bg-white shadow-lg py-2">
                {userGroups.map((group) => (
                  <a
                    key={group.name}
                    href={group.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                  >
                    {group.name}
                  </a>
                ))}
              </div>
            </div>

            <a href="/our-team" className="text-gray-700 hover:text-orange-500">
              OUR TEAM
            </a>
            <a href="/support" className="text-gray-700 hover:text-orange-500">
              SUPPORT
            </a>

            {/* Donate Button */}
            <Link href='/donate-gaushala-program'>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
                Donate NOW
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-orange-500"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/"
              className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
            >
              HOME
            </a>
            <div>
              <button
                className="w-full text-left px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
              >
                SERVICES
              </button>
              <div className="pl-6 space-y-1">
                {services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block px-3 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <button
                className="w-full text-left px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
              >
                USER'S GROUP
              </button>
              <div className="pl-6 space-y-1">
                {userGroups.map((group) => (
                  <a
                    key={group.name}
                    href={group.href}
                    className="block px-3 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                  >
                    {group.name}
                  </a>
                ))}
              </div>
            </div>
            <a
              href="/our-team"
              className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
            >
              OUR TEAM
            </a>
            <a
              href="/support"
              className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
            >
              SUPPORT
            </a>
            <Link href='/donate-gaushala-program'>
              <button className="w-full bg-orange-500 text-white px-3 py-2 rounded-md hover:bg-orange-600">
                Donate NOW
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;