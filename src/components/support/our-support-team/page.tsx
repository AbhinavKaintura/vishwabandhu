import React from "react";
import bg from '../../../../public/man.png';
import { StaticImageData } from "next/image";
import Image from "next/image";

interface TeamMember {
    name: string;
    role: string;
    phone: string;
    email: string;
    image: StaticImageData; // URL for the team member's photo
  }
  
  const teamMembers: TeamMember[] = [
    {
      name: "Lorem Ipsum",
      role: "Support Lead",
      phone: "+91 9876543210",
      email: "loremipsum@gmail.com",
      image: bg,
    },
    {
      name: "Lorem Ipsum",
      role: "Community Coordinator",
      phone: "+91 8765432109",
      email: "loremipsum@gmail.com",
      image: bg,
    },
    {
      name: "Lorem Ipsum",
      role: "Technical Support",
      phone: "+91 7654321098",
      email: "loremipsum@gmail.com",
      image: bg,
    },
  ];

const OurSupportTeam = () => {
    return (
        <div>
        {/* Team Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Meet Our Support Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, key) => (
                <div
                  key={key}
                  className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                  <p className="mt-4">
                    <strong>Phone:</strong> <a href={`tel:${member.phone}`}>{member.phone}</a>
                  </p>
                  <p>
                    <strong>Email:</strong> <a href={`mailto:${member.email}`}>{member.email}</a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        </div>
    )
}

export default OurSupportTeam;