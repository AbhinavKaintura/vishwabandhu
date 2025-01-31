'use client'

import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface MemberCardProps {
  imageSrc: StaticImageData;
  name: string;
  role: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ imageSrc, name, role }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-32 h-32 mb-4 mx-auto rounded-full overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={`${name}'s photo`} 
          layout="intrinsic" 
          width={128} 
          height={128} 
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 text-center">{name}</h3>
      <p className="text-sm text-gray-600 text-center">{role}</p>
    </div>
  );
};

export default MemberCard;
