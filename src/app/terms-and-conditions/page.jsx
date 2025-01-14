import React from "react";

const Terms_and_conditions = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 py-5">
                <div className="bg-white rounded-2xl shadow-lg mb-8 overflow-hidden">
                    {/* Header Section */}
                    <div className="bg-gradient-to-r from-gray-800 to-blue-500 text-white py-10 px-5 text-center">
                        <h1 className="text-4xl font-bold p-5 text-white shadow-sm">Human Safety Program - India</h1>
                    </div>

                    {/* About Section */}
                    <div className="p-6 bg-white m-5 rounded-lg shadow-sm">
                        <h2 className="text-3xl text-gray-800 m-0 p-5 border-b-3 border-blue-500">क्या है Human Safety Program Vishwabandhu Foundation का?</h2>
                        <p className="my-4 leading-relaxed">Human Safety Program मानव के लिए, Vishwabandhu Foundation के द्वारा समूह से जुड़े इंसान की असामयिक मृत्यु होने पर उनके परिवार को आर्थिक सहायता देने हेतु बनाया गया है।</p>
                    </div>

                    {/* Goals Section */}
                    <div className="p-6 bg-white m-5 rounded-lg shadow-sm">
                        <h2 className="text-3xl text-gray-800 m-0 p-5 border-b-3 border-blue-500">Vishwabandhu Foundation का लक्ष्य?</h2>
                        <p className="my-4 leading-relaxed">Vishwabandhu Foundation का लक्ष्य है कि <span className="font-bold text-blue-500">भारत के सभी मनुष्य</span> इस टीम से जुड़ें और टीम के किसी भी विधिक सदस्य की असामयिक मृत्यु पर उसके परिवार को सहयोग किया जाए।</p>
                    </div>

                    {/* Who Can Join Section */}
                    <div className="p-6 bg-white m-5 rounded-lg shadow-sm">
                        <h2 className="text-3xl text-gray-800 m-0 p-5 border-b-3 border-blue-500">कौन जुड़ सकता है?</h2>
                        <p className="my-4 leading-relaxed">Vishwabandhu Foundation में बेसिक, माध्यमिक वर्ग के मनुष्य तथा अन्य लोग शामिल हो सकते हैं।</p>
                    </div>

                    {/* Membership Fee Section */}
                    <div className="bg-green-50 border-2 border-green-500 p-6 m-5 rounded-lg text-center">
                        <h2 className="text-3xl text-gray-800 m-0 p-5 border-b-3 border-green-500">सदस्यता शुल्क</h2>
                        <span className="text-4xl text-green-500 font-bold block my-3">₹500</span>
                        <p className="my-4 leading-relaxed">Vishwabandhu Foundation से जुड़ने हेतु सदस्यता शुल्क देना अनिवार्य है।</p>
                    </div>

                    {/* How to Join Section */}
                    <div className="p-6 bg-white m-5 rounded-lg shadow-sm">
                        <h2 className="text-3xl text-gray-800 m-0 p-5 border-b-3 border-blue-500">कैसे जुड़ें?</h2>
                        <p className="my-4 leading-relaxed">
                            Vishwabandhu Foundation से जुड़ने के लिए वेबसाइट 
                            <a className="text-blue-500 no-underline font-bold" href="https://vishwabandhufoundation.org">vishwabandhufoundation.org</a> 
                            पर जाकर रजिस्ट्रेशन करें।
                        </p>
                        <div className="border-l-4 border-red-500 bg-red-50 p-5 my-5 rounded-lg">
                            <p className="my-3">साथ ही Vishwabandhu Foundation के व्हाट्सऐप ग्रुप से अवश्य जुड़ जाएं। समस्त अपडेट और जानकारी आपको व्हाट्सऐप ग्रुप से मिल जाएगी।</p>
                        </div>
                    </div>

                    {/* Rules Section */}
                    <div className="bg-gray-800 text-white p-8 m-5 rounded-lg">
                        <h2 className="text-3xl text-white m-0 p-5 border-b-3 border-yellow-500">महत्वपूर्ण नियम</h2>
                        <p className="my-3 text-white">&bull; Vishwabandhu Foundation से विधिक रूप से रजिस्ट्रेशन के पश्चात आपको ग्रुप पर अपडेट की नज़र रखनी होगी।</p>
                        <p className="my-3 text-white">&bull; किसी साथी की मृत्यु पर उसके परिवार का सहयोग करके फॉर्म भरना अनिवार्य है।</p>
                        <p className="my-3 text-white">&bull; सहयोग करने पर ही सहयोग मिलेगा।</p>
                        <p className="my-3 text-white">&bull; नियम और अनुशासन सर्वोपरि है।</p>
                    </div>

                    {/* Management Fee Section */}
                    <div className="bg-green-50 border-2 border-green-500 p-6 m-5 rounded-lg text-center">
                        <h2 className="text-3xl text-gray-800 m-0 p-5 border-b-3 border-green-500">व्यवस्था शुल्क</h2>
                        <span className="text-4xl text-green-500 font-bold block my-3">₹100</span>
                        <p className="my-4 leading-relaxed">व्यवस्था शुल्क समिति के खाते में ऑनलाइन लिया जाता है।</p>
                        <div className="border-l-4 border-blue-500 bg-gray-50 p-5 my-5 rounded-lg text-left">
                            <p className="my-3">&bull; समय-समय पर समिति हिसाब देगी</p>
                            <p className="my-3">&bull; विभिन्न प्रकार की व्यवस्थाएं सदस्यों को दी जाएंगी</p>
                            <p className="my-3">&bull; व्यवस्था शुल्क न जमा करने पर भी सदस्यता बनी रहेगी</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Terms_and_conditions;