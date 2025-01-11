// components/ProgramInfo/page.tsx
import Image, { StaticImageData } from 'next/image';
import Boy from '../../../../public/human-safety-program/boy.jpg'
import Poor_people from '../../../../public/human-safety-program/poor_people.jpg'
import Coins from '../../../../public/human-safety-program/coins.jpg'

interface InfoCard {
  title: string;
  description: string;
  image: StaticImageData;
}

const ProgramInfo = () => {
  const infoCards: InfoCard[] = [
    {
      title: "WHO CAN JOIN",
      description: "Anyone aged 18 and above can join our community program.",
      image: Poor_people, // Replace with your actual image path
    },
    {
      title: "WHY JOIN US",
      description: "Experience community support, financial security, and contribute to welfare.",
      image: Boy, // Replace with your actual image path
    },
    {
      title: "HOW TO JOIN",
      description: "Join with a one-time fee of 500 rupees for membership.",
      image: Coins, // Replace with your actual image path
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
            className="relative bg-white rounded-3xl shadow-lg overflow-hidden group"
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
            <div className="p-6 bg-white relative -mt-6 mx-4 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold mb-3">
                {card.title}
                <div className="mt-1 w-16 h-0.5 bg-orange-500"></div>
              </h3>
              <p className="text-gray-600">
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