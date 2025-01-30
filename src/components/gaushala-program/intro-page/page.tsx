import { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';
import mission from '../../../../public/gaushala-program/mission.jpg';
import values from '../../../../public/gaushala-program/values.jpg';
import join_us from '../../../../public/gaushala-program/join_us.jpg';

interface TeachingSection {
  title: string;
  text: string;
  imageSrc: StaticImageData;
  imageAlt: string;
}

const TeachingPhilosophy = () => {
  const sections: TeachingSection[] = [
    {
      title: "Our Mission",
      text: "At Gaushala, we believe in the deep, heartfelt bond between humans and cows. Our mission is to provide a safe, loving sanctuary for these gentle creatures, offering them the care and respect they deserve. Here, every cow is treated like family, living in peace and freedom.",
      imageSrc: mission,
      imageAlt: "our mission"
    },
    {
      title: "Our Values",
      text: "Gaushala is not just a place for animals; it’s a space where compassion, kindness, and connection flourish. We invite you to join us in nurturing this bond, to learn from the cows’ wisdom, and to experience the joy and healing that comes from simply being in their presence.",
      imageSrc: values,
      imageAlt: "our values"
    },
    {
      title: "Join Us",
      text: "Together, let’s create a community built on love, respect, and gratitude—for the cows, for each other, and for the world we share.",
      imageSrc: join_us,
      imageAlt: "join us"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 space-y-12 md:space-y-24 mt-8 md:mt-20">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          } items-center gap-6 md:gap-8 lg:gap-12`}
        >
          <div className="flex-1 space-y-4 w-full md:w-auto">
            {section.title && (
              <h2 className="text-[#ff7722] tracking-wider uppercase text-xl md:text-2xl font-semibold text-center md:text-left">
                {section.title}
              </h2>
            )}
            <p className="text-gray-600 leading-7 md:leading-9 w-full md:w-auto lg:w-[25rem] font-bold tracking-wide md:tracking-wider text-base md:text-lg pt-3 md:pt-5 text-center md:text-left">
              {section.text}
            </p>
          </div>

          <div className="flex-1 w-full md:w-auto">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg w-full md:w-3/4 mx-auto">
              <Image
                src={section.imageSrc}
                alt={section.imageAlt}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeachingPhilosophy;