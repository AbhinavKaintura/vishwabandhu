import React from "react";

const Arrangement_Fee = () => {
    return (
        <div className="flex justify-center font-semibold">
            <div className="p-5 w-[55rem]">
            <div className="bg-green-50 border-2 border-green-500 p-6 m-5 rounded-lg text-center">
                <h2 className="text-gray-800 text-3xl m-0 p-5 border-b-3 border-green-500">
                    व्यवस्था शुल्क
                </h2>

                <span className="text-4xl text-green-500 font-bold block my-2.5">
                    ₹100
                </span>

                <p className="my-4 leading-8">
                    व्यवस्था शुल्क समिति के खाते में ऑनलाइन लिया जाता है।
                </p>

                <div className="border-l-5 border-blue-500 bg-gray-50 p-5 my-5 rounded-lg text-left">
                    <p className="my-2.5">&bull; समय-समय पर समिति हिसाब देगी</p>
                    <p className="my-2.5">&bull; विभिन्न प्रकार की व्यवस्थाएं सदस्यों को दी जाएंगी</p>
                    <p className="my-2.5">&bull; व्यवस्था शुल्क न जमा करने पर भी सदस्यता बनी रहेगी</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Arrangement_Fee;