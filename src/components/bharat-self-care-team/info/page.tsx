import { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';
import what from '../../../../public/bharat-self-care-team/what.png';
import goal from '../../../../public/bharat-self-care-team/goal.jpg';
import how from '../../../../public/bharat-self-care-team/how (2).jpg';
import { motion } from 'framer-motion';

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
      text: "Bharat Self Care Team एक नवीन पहल है जो मानव कल्याण के लिए समर्पित है। Vishwabandhu Foundation के तत्वावधान में, यह टीम परिवारों को आर्थिक सुरक्षा प्रदान करती है, विशेषकर उन परिस्थितियों में जब किसी सदस्य की असामयिक मृत्यु हो जाती है।",
      imageSrc: what,
      imageAlt: "what is bharat self care team"
    },
    {
      title: "हमारा लक्ष्य",
      text: "Vishwabandhu Foundation का उद्देश्य है भारत के हर नागरिक को सुरक्षा कवच प्रदान करना। हम मानते हैं कि एकजुटता में शक्ति है, और हमारा लक्ष्य है कि कोई भी परिवार अकेला न रहे। हम सामूहिक सहयोग के माध्यम से एक मजबूत सामाजिक सुरक्षा नेटवर्क बना रहे हैं।",
      imageSrc: goal,
      imageAlt: "Goal of vishwabandhu foundation"
    },
    {
      title: "सदस्यता",
      text: "हमारी टीम में शामिल होने का अवसर सभी के लिए खुला है। चाहे आप बेसिक वर्ग से हों या माध्यमिक, हर कोई इस पहल का हिस्सा बन सकता है। हम विश्वास करते हैं कि सामाजिक सुरक्षा हर नागरिक का अधिकार है।",
      imageSrc: how,
      imageAlt: "who can join"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-orange-50 sm:pb-0 md:pb-8">
      <div className="max-w-6xl mx-auto p-6 md:p-12 ">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
            भारत सेल्फ केयर टीम
          </h1>
          <p className="text-orange-800 max-w-2xl mx-auto">
            सामाजिक सुरक्षा का एक नया आयाम
          </p>
        </div>

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