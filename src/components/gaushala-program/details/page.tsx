// components/ProgramInfo/page.tsx
import Image, { StaticImageData } from 'next/image';
import about_us from '../../../../public/gaushala-program/about_us.jpg'
import goal from '../../../../public/gaushala-program/values.png'
import join_us from '../../../../public/gaushala-program/join_us (1).jpg'

interface InfoCard {
  title: string;
  description: string;
  image: StaticImageData;
}

const ProgramInfo = () => {
  const infoCards: InfoCard[] = [
    {
      title: "हमारे बारे में – गौशाला",
      description: "गौशाला में, हम मनुष्यों और गायों के बीच गहरे, हार्दिक बंधन में विश्वास करते हैं। हमारा मिशन इन कोमल प्राणियों के लिए एक सुरक्षित, प्रेमपूर्ण आश्रय प्रदान करना है, उन्हें वह देखभाल और सम्मान प्रदान करना है जिसके वे हकदार हैं। यहाँ, हर गाय को परिवार की तरह माना जाता है, जो शांति और स्वतंत्रता से रहती है।",
      image: about_us, 
    },
    {
      title: "गौशाला का उद्देश्य",
      description: "गौशाला सिर्फ़ जानवरों के लिए जगह नहीं है; यह एक ऐसी जगह है जहाँ करुणा, दया और जुड़ाव पनपता है। हम आपको इस बंधन को बढ़ाने, गायों की बुद्धिमत्ता से सीखने और उनकी मौजूदगी से मिलने वाले आनंद और उपचार का अनुभव करने के लिए आमंत्रित करते हैं।",
      image: goal, 
    },
    {
      title: "आइये, हम सब मिलकर एक समुदाय बनाएं",
      description: "आइये, हम सब मिलकर प्रेम, सम्मान और कृतज्ञता पर आधारित एक समुदाय बनाएं – गायों के लिए, एक-दूसरे के लिए, तथा उस विश्व के लिए जिसे हम साझा करते हैं।",
      image: join_us,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-wide">
          More About The Program
        </h2>
        <div className="mt-2 w-48 h-1 bg-orange-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {infoCards.map((card, index) => (
          <div 
            key={index} 
            className="relative bg-white rounded-3xl shadow-lg overflow-hidden group min-h-[30rem]"
          >
            {/* Image with overlay */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content */}
            <div className="p-6 bg-white relative -mt-6 mx-4 rounded-2xl shadow-md min-h-[10rem]">
              <h3 className="text-xl font-bold mb-3">
                {card.title}
                <div className="mt-1 w-16 h-0.5 bg-orange-500"></div>
              </h3>
              <p className="text-gray-600 font-semibold">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramInfo;