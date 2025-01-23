import React from 'react';
import Hero_bg from '../../../../public/home-img/hero.png'
import NavBar from "@/components/common/nav-bar/page"

const Intro = () => {
    const scrollToContent = () => {
        const contentSection = document.getElementById('content-section');
        if (contentSection) {
            contentSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <div className="relative h-screen">
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${Hero_bg.src})`,
                        backgroundBlendMode: "overlay",
                    }}
                >
                    {/* Dark overlay with navbar */}
                    <div className="absolute inset-0 bg-black/40">
                        <NavBar bg_color="bg-white" />

                        {/* Hero content */}
                        <div className="flex flex-col items-center justify-center h-[calc(100%-64px)] text-center px-4">
                            <h1 className="text-white text-6xl font-bold mb-6 tracking-widest font-serif">
                                GAUSHALA PROGRAM
                            </h1>
                            <p className="text-white text-xl max-w-3xl mb-8 tracking-widest">
                                Join our Gaushala Program and contribute to the well-being of cows by donating a small amount
                            </p>
                            <button
                                onClick={scrollToContent}
                                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg transition-colors duration-300"
                            >
                                GET STARTED
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            {/* Content section with ID for scrolling */}
            <section id="content-section" className="w-full px-4 py-24 bg-[#FDF6F0]">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase font-serif tracking-wider">
                        What is Gaushala Program
                    </h2>
                    <div className="mt-2 w-48 h-1 bg-orange-500 mx-auto"></div>
                </div>

                <div className="text-center pl-[25%]">
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed md:leading-loose max-w-[70%] tracking-widest">
                        At Gaushala, we cherish the deep bond between humans and cows,
                        providing a loving sanctuary for these gentle beings. Our mission
                        is to ensure every cow lives with care, respect, and freedom. It's a
                        space where compassion and connection thrive, inviting all to
                        nurture this special relationship. Join us in fostering a community
                        of love, respect, and gratitude for the cows and our shared world.
                    </p>
                </div>
            </section>
        </div>

    )
}

export default Intro;