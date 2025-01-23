// components/DropdownMenu.tsx
import { useState, useEffect, useRef } from 'react';
import profile_pic from '../../../../public/nav-header/user.png'
import Image from 'next/image';

const Profile_Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Function to handle clicks outside the dropdown
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        // Add event listener when dropdown is open
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Cleanup function to remove event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]); // Only re-run effect when isOpen changes

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div ref={dropdownRef} className="relative inline-block text-left z-10">
            <div>
                <button
                    type="button"
                    className="flex items-center justify-center w-10 h-10 rounded-full focus:outline-none"
                    onClick={toggleDropdown}
                >
                    <Image src={profile_pic}
                        alt="User Icon"
                        className="w-full h-full rounded-full"
                    />

                </button>
            </div>

            <div
                className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 transform ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                    }`}
            >
                <div className="py-1 mt-2">
                    <Image src={profile_pic} alt="User Icon" className="w-10 h-10 mx-auto rounded-full" />  
                    <a
                        href="#"
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 pt-7 "
                    >
                        Manage your Account
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Sign Out
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Profile_Dropdown;
