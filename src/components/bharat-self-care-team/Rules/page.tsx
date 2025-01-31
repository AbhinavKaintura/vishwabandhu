import React from "react";

const Rules = () => {
    return (
        <div className="flex justify-center">
            <div className="bg-gray-800 text-white p-8 m-5 rounded-lg w-[55rem]">
            <h2 className="text-white text-3xl m-0 pb-2">
                महत्वपूर्ण नियम
            </h2>

            <div className=" w-full h-0.5 bg-orange-500"></div>

            
            <div className="space-y-2.5 mt-3">
                <p className="text-white">
                    &bull; Vishwabandhu Foundation से विधिक रूप से रजिस्ट्रेशन के पश्चात आपको ग्रुप पर अपडेट की नज़र रखनी होगी।
                </p>
                <p className="text-white">
                    &bull; किसी साथी की मृत्यु पर उसके परिवार का सहयोग करके फॉर्म भरना अनिवार्य है।
                </p>
                <p className="text-white">
                    &bull; सहयोग करने पर ही सहयोग मिलेगा।
                </p>
                <p className="text-white">
                    &bull; नियम और अनुशासन सर्वोपरि है।
                </p>
            </div>
        </div>
        </div>
    );
};

export default Rules;