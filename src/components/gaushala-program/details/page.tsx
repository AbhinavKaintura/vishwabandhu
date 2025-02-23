'use client';

// components/ProgramInfo/page.tsx
import Image, { StaticImageData } from 'next/image';
import about_us from '../../../../public/gaushala-program/about_us.jpg'
import goal from '../../../../public/gaushala-program/values.png'
import join_us from '../../../../public/gaushala-program/join_us (1).jpg'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { p } from 'framer-motion/client';

interface InfoCard {
  title: string;
  description: string;
  image: StaticImageData;
}

const ProgramInfo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const infoCards: InfoCard[] = [
    {
      title: "हमारे बारे में – गौशाला",
      description: "गौशाला में, हम मनुष्यों और गायों के बीच गहरे, हार्दिक बंधन में विश्वास करते हैं। हमारा मिशन इन कोमल प्राणियों के लिए एक सुरक्षित, प्रेमपूर्ण आश्रय प्रदान करना है, उन्हें वह देखभाल और सम्मान प्रदान करना है जिसके वे हकदार हैं।",
      image: about_us,
    },
    {
      title: "गौशाला का उद्देश्य",
      description: "गौशाला सिर्फ़ जानवरों के लिए जगह नहीं है; यह एक ऐसी जगह है जहाँ करुणा, दया और जुड़ाव पनपता है। हम आपको इस बंधन को बढ़ाने, गायों की बुद्धिमत्ता से सीखने और उनकी मौजूदगी से मिलने वाले आनंद और उपचार का अनुभव करने के लिए आमंत्रित करते हैं।",
      image: goal,
    },
    {
      title: "आइये, हम सब मिलकर एक समुदाय बनाएं",
      description: "आइये, हम सब मिलकर प्रेम, सम्मान और कृतज्ञता पर आधारित एक समुदाय बनाएं – गायों के लिए, एक-दूसरे के लिए, तथा उस विश्व के लिए जिसे हम साझा करते हैं।",
      image: join_us,
    },
  ];

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prev) => (prev + 1) % infoCards.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prev) => (prev - 1 + infoCards.length) % infoCards.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-16">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300"></div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Main Carousel */}
        <div className="relative h-[28rem] sm:h-[32rem] md:h-[36rem] overflow-hidden rounded-3xl shadow-2xl">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-transform duration-500 ease-out ${index === activeIndex
                ? 'translate-x-0 opacity-100'
                : index < activeIndex
                  ? '-translate-x-full opacity-0'
                  : 'translate-x-full opacity-0'
                }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />


                <div className="absolute bottom-10 left-0 right-0 p-8 sm:p-12 text-white">
                  {/* title */}
                  <div className="mb-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                      {card.title}
                    </h2>
                    <div className="h-1 w-24 bg-[#ff7722] rounded-full" />
                  </div>
                  {/* description */}
                  <span className="text-lg sm:text-xl md:text-2xl">
                    {card.description}
                    {index === 0 && (
                      <span className="hidden md:inline text-lg sm:text-xl md:text-2xl"> यहाँ, हर गाय को परिवार की तरह माना जाता है, जो शांति और स्वतंत्रता से रहती है।</span>
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Buttons hidden in smaller screens*/}
          <div className='hidden md:block'>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 p-3 rounded-full transition-all duration-300 text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 p-3 rounded-full transition-all duration-300 text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
            {infoCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex
                  ? 'bg-[#ff7722] w-8'
                  : 'bg-white/50 hover:bg-white/80'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramInfo;