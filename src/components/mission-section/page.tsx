import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import scene from "../../../public/scene.jpg"

const Page = () => {
  return (
    <div className="max-h-full bg-orange-50 flex flex-col items-center py-16 px-4">
      <div className="text-center max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">
          <span className="text-orange-500">OUR</span>{' '}
          <span className="text-orange-300">MISSION</span>
        </h2>
        
        <p className="text-gray-700 mb-12 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque orci elit, 
          sagittis eget dui sed, elementum lobortis orci. Aliquam erat volutpat 
          tincidunt sapien id placerat gravida
        </p>

        <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
          {/* Replace '/your-image.jpg' with your actual image path */}
          <div className="relative w-full h-full">
            <Image 
              src={scene}
              alt="Mission video thumbnail"
              fill
              // height={500}
              // width={500}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <button className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                <Play className="w-8 h-8 text-gray-800" />
              </button>
            </div>
          </div>
        </div>

        <button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded font-medium transition-colors">
          SEE PROGRAMS
        </button>
      </div>
    </div>
  );
};

export default Page;