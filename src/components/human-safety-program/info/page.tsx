import { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';
import what from '../../../../public/human-safety-program/what.png';
import goal from '../../../../public/human-safety-program/goal.jpg';
import how from '../../../../public/human-safety-program/how (2).jpg';

interface TeachingSection {
  title: string;
  text: string;
  imageSrc: StaticImageData;
  imageAlt: string;
}

const TeachingPhilosophy = () => {
  const sections: TeachingSection[] = [
    {
      title: "क्या है Bharat Self Care Team?",
      text: "Bharat Self Care Team मानव के लिए, Vishwabandhu Foundation के द्वारा समूह से जुड़े इंसान की असामयिक मृत्यु होने पर उनके परिवार को आर्थिक सहायता देने हेतु बनाया गया है।",
      imageSrc: what,
      imageAlt: "what is bharat self care team"
    },
    {
      title: "Vishwabandhu Foundation का लक्ष्य?",
      text: "Vishwabandhu Foundation का लक्ष्य है कि भारत के सभी मनुष्य इस टीम से जुड़ें और टीम के किसी भी विधिक सदस्य की असामयिक मृत्यु पर उसके परिवार को सहयोग किया जाए।",
      imageSrc: goal,
      imageAlt: "Goal of vishwabandhu foundation"
    },
    {
      title: "कौन जुड़ सकता है?",
      text: "Vishwabandhu Foundation में बेसिक, माध्यमिक वर्ग के मनुष्य तथा अन्य लोग शामिल हो सकते हैं।",
      imageSrc: how,
      imageAlt: "who can join"
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
              <h2 className="text-emerald-700 tracking-wider uppercase text-xl md:text-2xl font-semibold text-center md:text-left">
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