'use client';

import Image from 'next/image';
import { MouseEvent } from 'react';

interface TeamMemberProps {
  imageUrl: string;
  name: string;
  designation: string;
}

const TeamMemberCard = ({ imageUrl, name, designation }: TeamMemberProps) => {
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      className="group relative h-[30vh] transform-gpu transition-all duration-300 ease-out hover:z-10"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-full overflow-hidden rounded-lg bg-gradient-to-br from-[#ff7722] to-[#ff9955] p-0.5 shadow-lg">
        <div className="flex h-full overflow-hidden rounded-lg bg-white">
          {/* Image container */}
          <div className="relative w-1/3 overflow-hidden">
            <Image
              src={imageUrl}
              alt={`${name} - ${designation}`}
              width={150}
              height={200}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          {/* Content container */}
          <div className="flex flex-1 flex-col justify-center p-4">
            <div className="transform transition-transform duration-300 group-hover:-translate-y-1">
              <h3 className="text-lg font-bold text-gray-800">{name}</h3>
              <div className="mt-1 flex items-center space-x-2">
                <div className="h-0.5 w-6 rounded-full bg-[#ff7722]" />
                <p className="text-sm font-semibold text-[#ff7722]">{designation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;