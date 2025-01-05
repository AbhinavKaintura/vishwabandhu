import React from 'react';
import Image from 'next/image';
import { Home, ArrowRight } from 'lucide-react';
import sec1 from "../../../public/sec1.png"
import sec2 from "../../../public/sec2.png"

const ServicesSection = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl text-orange-500 font-medium mb-4">
            Our Services
          </h3>
          <div className="relative">
            <h2 className="text-4xl font-bold mb-4">
              How we work to make a Difference.
            </h2>
            <div className="absolute -right-4 top-0 w-3 h-3 bg-cyan-400 rounded-full" />
          </div>
        </div>

        {/* Cards Container */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Gaushala Program Card */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
            <div className="relative h-64 w-full">
              <Image
                src={sec1}
                alt="Gaushala Program"
                fill
                className="object-cover rounded-t-3xl"
              />
              <div className="absolute -bottom-6 left-6">
                <div className="bg-orange-400 p-4 rounded-xl shadow-lg">
                  <Home className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <div className="p-8 pt-12">
              <h3 className="text-2xl font-bold mb-4">GAUSHALA PROGRAM</h3>
              <div className="flex items-center text-orange-400 hover:text-orange-500 transition-colors cursor-pointer group">
                <span className="mr-2 font-medium">Read More</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>

          {/* Human Safety Program Card */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
            <div className="relative h-64 w-full">
              <Image
                src={sec2}
                alt="Human Safety Program"
                fill
                className="object-cover rounded-t-3xl"
              />
              <div className="absolute -bottom-6 left-6">
                <div className="bg-orange-400 p-4 rounded-xl shadow-lg">
                  <Home className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <div className="p-8 pt-12">
              <h3 className="text-2xl font-bold mb-4">HUMAN SAFETY PROGRAM</h3>
              <div className="flex items-center text-orange-400 hover:text-orange-500 transition-colors cursor-pointer group">
                <span className="mr-2 font-medium">Read More</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;