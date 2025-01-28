// components/ProgramInfo/page.tsx
import Image, { StaticImageData } from 'next/image';
import why_join_us from '../../../../public/human-safety-program/why_join_us.jpg'
import who_can_join from '../../../../public/human-safety-program/who_can_join.jpg'
import how_to_join from '../../../../public/human-safety-program/how_to_join.jpg'

interface InfoCard {
  title: string;
  description: string;
  image: StaticImageData;
}

const ProgramInfo = () => {
  const infoCards: InfoCard[] = [
    {
      title: "सदस्यता शुल्क = ₹500",
      description: "Vishwabandhu Foundation से जुड़ने हेतु सदस्यता शुल्क देना अनिवार्य है। Join with a one-time fee of 500 rupees for membership. ",
      image: who_can_join, 
    },
    {
      title: "WHY JOIN US",
      description: "Experience community support, financial security, and contribute to welfare.",
      image: why_join_us, 
    },
    {
      title: "HOW TO JOIN",
      description: "Vishwabandhu Foundation से जुड़ने के लिए वेबसाइट vishwabandhufoundation.org पर जाकर रजिस्ट्रेशन करें।",
      image: how_to_join, 
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
            className="relative bg-white rounded-3xl shadow-lg overflow-hidden group min-h-[24rem]"
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