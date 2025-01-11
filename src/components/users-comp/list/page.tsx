import React from 'react';
import Image from 'next/image';
import title from "../../../../public/users-page/blue_sky.jpg";

// Interface for donor data
interface Donor {
  image: string;
  name: string;
  amount: number;
  location: string;
}

// Props interface for DonorCard component
interface DonorCardProps {
  donor: Donor;
}

// Individual donor card component
const DonorCard: React.FC<DonorCardProps> = ({ donor }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center transform transition-transform hover:scale-105">
      <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
        <Image
          src={donor.image}
          alt={donor.name}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <h3 className="text-blue-800 font-semibold text-lg mb-2">{donor.name}</h3>
      <p className="text-orange-500 font-medium mb-1">₹{donor.amount}</p>
      <p className="text-gray-600">{donor.location}</p>
    </div>
  );
};

const DonorMemorial: React.FC = () => {
  // Sample donor data - replace with your actual data
  const donors: Donor[] = [
    {
      image: "/path/to/donor1.jpg",
      name: "Donor Lorem",
      amount: 1000,
      location: "DDun, UK"
    }
    // Add more donors as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Cloud Background */}
      <div className="relative">
        <Image
          src={title}
          alt="Sky background"
          className="w-full h-[300px] object-cover"
          width={1920}
          height={300}
        />
        <div className="absolute inset-0 bg-blue-900/30 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
            Vishwabandhu Donor Memorial
          </h1>
          <p className="text-xl text-white italic">
            Presenting our Proud Donors
          </p>
        </div>
      </div>

      {/* Donors Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {donors.map((donor, index) => (
            <DonorCard key={index} donor={donor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonorMemorial;