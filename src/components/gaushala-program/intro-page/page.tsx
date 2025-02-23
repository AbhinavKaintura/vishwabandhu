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
    <div className="bg-gradient-to-b from-white to-orange-50 sm:pb-0 md:pb-8">
      <div className="max-w-6xl lg:max-w-7xl mx-auto p-6 md:p-12 ">
        {/* <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
            भारत सेल्फ केयर टीम
          </h1>
          <p className="text-orange-800 max-w-2xl mx-auto">
            सामाजिक सुरक्षा का एक नया आयाम
          </p>
        </div> */}

        <div className='space-y-12 sm:mt-0 md:mt-12'>
          {sections.map((section, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-stretch`}>
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                  <div className="md:space-y-6">
                    <div className="inline-block">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-[#ff7722] to-orange-600 bg-clip-text text-transparent ">
                        {section.title}
                      </h2>
                      <div className="h-1 w-24 bg-[#ff7722] rounded-full"></div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg pt-6">
                      {section.text}
                    </p>
                    {/* <button className="mt-6 px-6 py-3 bg-[#ff7722] text-white rounded-lg hover:bg-orange-600 transition-colors duration-300 inline-flex items-center space-x-2 group">
                      <span>अधिक जानें</span>
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </button> */}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="relative h-full min-h-[300px] md:min-h-[400px]">
                    <Image
                      src={section.imageSrc}
                      alt={section.imageAlt}
                      className="object-cover absolute inset-0 w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeachingPhilosophy;
