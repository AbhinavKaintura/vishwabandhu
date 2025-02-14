'use client';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase/config';
import TeamMemberCard from '@/components/our-team/TeamMemberCard/page';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TeamMember {
  id: string;
  name: string;
  designation: string;
  imageUrl: string;
}

const TeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      const querySnapshot = await getDocs(collection(db, "our-team"));
      const members = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as TeamMember[];
      setTeamMembers(members);
    };

    fetchTeamMembers();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Animated Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h1 className="relative mb-6 text-5xl font-bold text-gray-900 sm:text-6xl lg:text-7xl">
            <span className="relative">
              Our Amazing Team
              <div className="absolute -bottom-4 left-0 h-2 w-full rounded-full bg-[#ff7722] opacity-50"></div>
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-600">
            Meet the talented individuals who make Vishwabandhu extraordinary. Together, we turn vision into reality.
          </p>
        </motion.div>

        {/* Team Grid with Staggered Animation */}
        <motion.div 
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <TeamMemberCard
                imageUrl={member.imageUrl}
                name={member.name}
                designation={member.designation}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default TeamMembers;