'use client';
import React from 'react';
import HeaderBar from '@/components/common/header-bar/page';
import NavBar from '@/components/common/nav-bar/page';
import MemberCard from '@/components/our-team/page';
import i1 from '../../../public/our-team/MB.png';
import i2 from '../../../public/our-team/RT.png';
import i3 from '../../../public/our-team/ADG.png';
import i4 from '../../../public/our-team/SB.png';
import i5 from '../../../public/our-team/S.png';
import i6 from '../../../public/our-team/AP.png';
import i7 from '../../../public/our-team/NK.png';
import i8 from '../../../public/our-team/BS.png';
import i9 from '../../../public/our-team/NKK.png';

const members = [
  { imageSrc: i1, name: 'Mr. Mohit Bhardwaj', role: 'Joint Secretary' },
  { imageSrc: i2, name: 'Mr. Robin Tomar', role: 'Manager' },
  { imageSrc: i3, name: 'Acharya. Dilip Gimir', role: 'Volunteer' },
  { imageSrc: i4, name: 'Mr. Sandeep Bhadana', role: 'Volunteer' },
  { imageSrc: i5, name: 'Mr. Suraj', role: 'Volunteer' },
  { imageSrc: i6, name: 'Mr. Aditya Prakash', role: 'Volunteer' },
  { imageSrc: i7, name: 'Mr. Neeraj Kaushik', role: 'Volunteer' },
  { imageSrc: i8, name: 'Mr. Bhupender Singh', role: 'Volunteer' },
  { imageSrc: i9, name: 'Mr. Nitin Kumar Kaushik', role: 'Volunteer' },
];

const Teams: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderBar />
      <NavBar bg_color="bg-white" />
      <div className="py-16 px-4 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <MemberCard 
              key={index} 
              imageSrc={member.imageSrc} 
              name={member.name} 
              role={member.role} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
