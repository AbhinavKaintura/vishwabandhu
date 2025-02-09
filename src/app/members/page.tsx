
import React from 'react';
import HeaderBar from '@/components/common/header-bar/page';
import NavBar from '@/components/common/nav-bar/page';
import Title from '@/components/members-comp/title/page';
import MembersList from '@/components/members-comp/page';

// Define the type for a member
interface Member {
  id: string;
  name: string;
  image: string;
  socialLinks: {
    platform: string;
    url: string;
  }[];
}

interface TeamsProps {
  members: Member[];
}

const Teams: React.FC<TeamsProps> = ({ members }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderBar />
      <NavBar bg_color="bg-white" />
      {/* <Title /> */}
      <MembersList />
    </div>
  );
};

export default Teams;
