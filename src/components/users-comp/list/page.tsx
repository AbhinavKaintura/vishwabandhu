import React, { use } from 'react';
import Image from 'next/image';
import user1 from "./user1.jpg"

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
    <div className="bg-[#f7f7f7] rounded-3xl p-6 flex flex-col items-center transform transition-transform hover:scale-105">
      <div className="relative w-24 h-32 rounded-full overflow-hidden mb-4">
        <Image
          // src={donor.image}
          src={user1}
          alt={donor.name}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <h3 className="text-gray-800 font-merryweather text-sm mb-2">{donor.name}</h3>
      <p className="text-gray-700 text-sm font-thin font-poppins mb-1">₹{donor.amount}</p>
      <p className="text-gray-800 font-merryweather font-extralight text-sm">{donor.location}</p>
    </div>
  );
};

const DonorMemorial: React.FC = () => {
  // Sample donor data - replace with your actual data
  const donors: Donor[] = [
    {
      image: "/path/to/image",
      name: "Abhinav",
      amount: 700,
      location: "DDun, UK"
    },
    {
      image: "/path/to/image",
      name: "Donor Lorem",
      amount: 1000,
      location: "DDun, UK"
    },
    {
      image: "/path/to/image",
      name: "Donor Lorem",
      amount: 1000,
      location: "DDun, UK"
    }
    ,
    {
      image: "/path/to/image",
      name: "Donor Lorem",
      amount: 1000,
      location: "DDun, UK"
    }
    ,
    {
      image: "/path/to/image",
      name: "Donor Lorem",
      amount: 1000,
      location: "DDun, UK"
    }
    // Add more donors as needed
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Cloud Background */}

      {/* Donors Grid */}
      <div className="container mx-auto px-12 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-28">
          {donors.map((donor, index) => (
            <DonorCard key={index} donor={donor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonorMemorial;