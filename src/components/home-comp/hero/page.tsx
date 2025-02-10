'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import qr_code from '../../../../public/home-img/qr-code.jpeg';
import bg_gaushala from '../../.././../public/home-img/hero.png';
import bg_bharat from '../../../../public/bharat-self-care-team/bsct4.jpg';

const Hero = () => {
  const slides = [
    {
      image: bg_gaushala,
      title: "गोपालक बनिये और कृष्ण कृपा प्राप्त करिये",
      description: "अपनी इच्छा अनुसार दान करें और गोपालक बनें, गौ माता के आशीर्वाद के साथ-साथ देवी-देवताओं की भी कृपा प्राप्त करें",
      buttonText: "दान करें",
      buttonLink: "/donate-gaushala-program"
    },
    {
      image: bg_bharat, // Replace with your second image import
      title: "भारत सेल्फ केयर टीम",
      description: "भारत सेल्फ केयर टीम से जुड़ें और एक ऐसे समुदाय का हिस्सा बनें जो जरूरत के समय एक-दूसरे का सहारा बनता है, ताकि हर परिवार को सही समय पर सहायता मिल सके।",
      buttonText: "सदस्य बनें",
      buttonLink: "/join-bharat-self-care-team"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-20" />
          <div className="relative min-h-screen flex items-center justify-center">
            <div className="text-white text-center px-4 max-w-3xl">
              <h1 className="mb-6 text-5xl font-bold leading-tight">
                {slide.title}
              </h1>
              <p className="mb-8 text-lg">
                {slide.description}
              </p>
              <div className="flex items-center justify-center lg:mb-10">
                <Link href={slide.buttonLink}>
                  <button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-lg uppercase text-2xl mr-4">
                    {slide.buttonText}
                  </button>
                </Link>
                <Image 
                  src={qr_code} 
                  alt="QR Code" 
                  width={100} 
                  height={100} 
                  className="lg:ml-32"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;