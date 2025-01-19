import React from 'react'

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(https://vishwabandhufoundation.org/wp-content/uploads/2024/12/front.jpg)"
        }}
      >
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="text-white text-center px-4 max-w-3xl">
          <h1 className="mb-6 text-5xl font-bold leading-tight">
            गोपालक बनिये और कृष्ण कृपा प्राप्त करिये
          </h1>
          <p className="mb-8 text-lg">
            अपनी इच्छा अनुसार दान करें और गोपालक बनें, गौ माता के आशीर्वाद के साथ-साथ देवी-देवताओं की भी कृपा प्राप्त करें
          </p>
          <button
           className="bg-orange-400 hover:bg-orange-500 text-white font-medium px-8 py-3 rounded-lg uppercase text-sm">
            Click here to know <span><br/></span>about our programs
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero