import React from 'react';
import Image from 'next/image';
import intro from "../../../public/intro.png"

const IntroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-300/20 via-amber-50/20 to-orange-50/20 py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white p-4 shadow-lg rounded-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="relative aspect-square w-full">
              <Image
                src={intro}
                alt="Happy children"
                fill
                className="object-cover rounded"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 bg-white p-12 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-6">Who are we?</h2>
          
          <div className="w-20 h-1 bg-orange-400 mb-8" />
          
          <div className="mb-8">
            <blockquote className="text-2xl font-medium italic mb-4">
              "Remember that the happiest people are not those getting more, but those giving more"
            </blockquote>
            <p className="text-lg text-right">- H. Jackson Brown Jr.</p>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-handwriting leading-relaxed">
              The Vishwa Bandhu Foundation is an Section 8 non-profit company dedicated 
              to creating positive social impact by fostering community development, 
              supporting education, promoting environmental sustainability, and 
              empowering underprivileged groups.
            </p>
            
            <p className="text-lg font-handwriting leading-relaxed">
              As a registered NGO, we focus on building a better future for all by 
              implementing impactful initiatives, supporting sustainable practices, 
              and advocating for the rights and welfare of marginalized communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;

// Add this to your tailwind.config.js:
// fontFamily: {
//   handwriting: ['var(--font-handwriting)', 'cursive'],
// }