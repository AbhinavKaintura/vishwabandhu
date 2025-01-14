// IntroSection.tsx
import React from 'react';
import Image from 'next/image';
import cow_background from "../../../../public/gaushala-program/cow_background.jpg"
import cow_human from "../../../../public/gaushala-program/cow_human.jpg"

const Details = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={cow_background}
                    alt="background"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
                <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start gap-32">
                    {/* Image Section */}
                    <div className="lg:w-[40%]">
                        <div className="bg-orange-50 p-3 shadow-lg">
                            <div className="relative aspect-[5/6] w-full">
                                <Image
                                    src={cow_human}
                                    alt="Happy children"
                                    fill
                                    className="object-cover py-10"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-[55%] lg:-mt-12">
                        <div className="bg-white p-8 shadow-lg">
                            <h2 className="text-3xl font-serif font-bold mb-2 tracking-wider">What Makes Us Different?</h2>

                            <div className="w-20 h-0.5 bg-[#d79b52] mb-6 ml-6" />

                            <p className="text-xl tracking-wider font-bold font-caveat leading-relaxed mb-6">
                                At Gaushala, we believe in the deep, heartfelt bond between humans and cows. Our mission is to provide a safe, loving sanctuary for these gentle creatures, offering them the care and respect they deserve. Here, every cow is treated like family, living in peace and freedom.
                            </p>

                            <p className="text-xl tracking-wider font-bold font-caveat leading-relaxed mb-6">
                                At Gaushala, we believe in the deep, heartfelt bond between humans and cows. Our mission is to provide a safe, loving sanctuary for these gentle creatures, offering them the care and respect they deserve. Here, every cow is treated like family, living in peace and freedom.
                            </p>

                            <p className="text-xl tracking-wider font-bold font-caveat leading-relaxed">
                                Together, let’s create a community built on love, respect, and gratitude—for the cows, for each other, and for the world we share.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
