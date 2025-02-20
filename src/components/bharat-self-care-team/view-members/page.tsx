'use client';

import Link from 'next/link';
import { Users, ArrowRight, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

const ViewMembers = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300"></div>
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-orange-100 opacity-50"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-amber-100 opacity-40"></div>

            <div className={`container mx-auto px-6 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-3xl mx-auto">
                    <div className="flex justify-center mb-6">
                        <div className="bg-orange-100 p-4 rounded-full">
                            <Users size={32} className="text-orange-600" />
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-[#7d553c] mb-4 tracking-tight font-serif">
                        Meet Our <span className="text-[#bd6026] italic">Vishwabandhu</span> Family
                    </h2>

                    <p className="text-lg text-gray-700 mb-10 max-w-xl mx-auto font-normal leading-relaxed tracking-wide font-sans">
                        Join a <span className="text-orange-500 font-medium">vibrant community</span> of individuals dedicated to supporting and <span className="italic">uplifting one another</span> through shared values and collective growth.
                    </p>

                    <div className="relative bg-white p-8 rounded-xl shadow-lg overflow-hidden border border-amber-100 mb-10">
                        <div className="absolute top-0 right-0 w-32 h-32 -mr-10 -mt-10 bg-orange-100 rounded-full opacity-30"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="text-left">
                                <h3 className="text-xl font-serif font-medium text-[#7d553c] mb-2">Discover Our Members</h3>
                                <p className="text-gray-600 font-light leading-relaxed tracking-wide font-serif">
                                    Explore profiles of dedicated individuals who contribute to our thriving community.
                                </p>
                            </div>

                            <Link href="/members" className="flex items-center font-serif gap-2 px-6 py-3 bg-gradient-to-r from-[#ff7722] to-[#f15a22] text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 group uppercase tracking-wide text-sm">
                                <span>View Members</span>
                                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                    <div className="flex justify-center items-center text-[#bd6026] text-sm font-medium tracking-wide">
                        <Heart size={16} className="mr-1" />
                        <span className="uppercase text-xs letter-spacing-1">Together we grow stronger</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ViewMembers;