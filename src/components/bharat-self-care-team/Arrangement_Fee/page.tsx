import React from "react";
import { Shield, Star, ArrowRight } from "lucide-react";

const Rules_and_Arrangement_Fee = () => {
    return (
        <div className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-12 sm:py-20 px-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300"></div>
            <div className="hidden lg:block absolute -top-40 -right-40 w-80 h-80 rounded-full bg-orange-100 opacity-50"></div>
            <div className="hidden lg:block absolute -top-40 -left-40 w-80 h-80 rounded-full bg-orange-100 opacity-50"></div>

            <div className="max-w-7xl mx-auto">
                {/* Header Section - Responsive text size */}
                <div className="relative mb-8 sm:mb-16 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        <span className="relative">
                            नियम और शुल्क
                            {/* <div className="absolute -bottom-3 left-0 right-0 h-1 bg-[#ff7722] rounded-full" /> */}
                        </span>
                    </h1>
                    <div className="mt-4 flex items-center gap-2 justify-center">
                        <div className="h-1 w-12 rounded-full bg-orange-200" />
                        <div className="h-1 w-24 rounded-full bg-[#ff7722]" />
                        <div className="h-1 w-12 rounded-full bg-orange-200" />
                    </div>
                </div>

                <div className="grid lg:grid-cols-5 gap-4 sm:gap-8">
                    {/* Rules Card - Responsive padding and text */}
                    <div className="lg:col-span-3 relative overflow-hidden rounded-2xl sm:rounded-[2rem] bg-[#ff7722] p-1">
                        <div className="bg-gradient-to-r from-orange-50 to-white rounded-[1.85rem] p-4 sm:p-8 h-full relative overflow-hidden">
                            <div className="relative">
                                <div className="flex items-center gap-3 mb-4 sm:mb-8">
                                    <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-[#ff7722]" />
                                    <h2 className="text-2xl sm:text-3xl font-bold text-orange-600">महत्वपूर्ण नियम</h2>
                                </div>

                                <div className="space-y-3 sm:space-y-6">
                                    {[
                                        "Vishwabandhu Foundation से विधिक रूप से रजिस्ट्रेशन के पश्चात आपको ग्रुप पर अपडेट की नज़र रखनी होगी।",
                                        "किसी साथी की मृत्यु पर उसके परिवार का सहयोग करके फॉर्म भरना अनिवार्य है।",
                                        "सहयोग करने पर ही सहयोग मिलेगा।",
                                        "नियम और अनुशासन सर्वोपरि है।"
                                    ].map((rule, index) => (
                                        <div key={index}
                                            className="flex items-start gap-3 sm:gap-4 bg-gradient-to-r from-orange-200 via-orange-100 to-orange-50 rounded-xl p-3 sm:p-4">
                                            <div className="bg-[#ff7722] rounded-full p-1.5 sm:p-2 flex-shrink-0 mt-0.5">
                                                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                            </div>
                                            <p className="text-gray-700 text-base sm:text-lg leading-snug sm:leading-relaxed">{rule}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fee Card - Responsive layout */}
                    <div className="lg:col-span-2 relative overflow-hidden rounded-2xl sm:rounded-[2rem] bg-white shadow-xl sm:shadow-2xl border-2 border-[#ff7722]/20">
                        <div className="absolute top-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-b from-orange-50 to-transparent" />

                        <div className="relative p-4 sm:p-8">
                            <div className="text-center mb-6 sm:mb-12">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">व्यवस्था शुल्क</h2>
                                <div className="h-1 w-20 sm:w-24 bg-[#ff7722] mx-auto rounded-full" />
                            </div>

                            <div className="text-center mb-6 sm:mb-12">
                                <div className="inline-block bg-[#ff7722]/10 rounded-full px-6 sm:px-8 py-3 sm:py-4">
                                    <span className="text-4xl sm:text-6xl font-bold text-[#ff7722]">₹100</span>
                                </div>
                                <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600">
                                    व्यवस्था शुल्क समिति के खाते में ऑनलाइन लिया जाता है।
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-4 sm:p-6 border border-orange-200">
                                {[
                                    "समय-समय पर समिति हिसाब देगी",
                                    "विभिन्न प्रकार की व्यवस्थाएं सदस्यों को दी जाएंगी",
                                    "व्यवस्था शुल्क न जमा करने पर भी सदस्यता बनी रहेगी"
                                ].map((point, index) => (
                                    <div key={index} className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 last:mb-0">
                                        <div className="bg-[#ff7722] rounded-full p-1 sm:p-1.5">
                                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                        </div>
                                        <p className="text-gray-700 text-sm sm:text-base">{point}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rules_and_Arrangement_Fee;