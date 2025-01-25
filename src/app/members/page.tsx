
import React from 'react';
import HeaderBar from '@/components/common/header-bar/page';
import NavBar from '@/components/common/nav-bar/page';
import Title from '@/components/teams-comp/title/page';
import MembersList from '@/components/teams-comp/page';

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

const dummyMembers: Member[] = [
  {
    id: '1',
    name: 'Abhinav',
    image: '/user1.jpg', // Assuming images are served from a static folder
    socialLinks: [
      { platform: 'facebook', url: 'https://facebook.com' },
      { platform: 'pinterest', url: 'https://pinterest.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' },
      { platform: 'twitter', url: 'https://twitter.com' },
    ],
  },
  {
    id: '2',
    name: 'Donor Lorem',
    image: '/user1.jpg', // Assuming images are served from a static folder
    socialLinks: [
      { platform: 'facebook', url: 'https://facebook.com' },
      { platform: 'pinterest', url: 'https://pinterest.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' },
      { platform: 'twitter', url: 'https://twitter.com' },
    ],
  },
  {
    id: '3',
    name: 'Donor Lorem',
    image: '/user1.jpg', // Assuming images are served from a static folder
    socialLinks: [
      { platform: 'facebook', url: 'https://facebook.com' },
      { platform: 'pinterest', url: 'https://pinterest.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' },
      { platform: 'twitter', url: 'https://twitter.com' },
    ],
  },
  {
    id: '4',
    name: 'Donor Lorem',
    image: '/user1.jpg', // Assuming images are served from a static folder
    socialLinks: [
      { platform: 'facebook', url: 'https://facebook.com' },
      { platform: 'pinterest', url: 'https://pinterest.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' },
      { platform: 'twitter', url: 'https://twitter.com' },
    ],
  },
  {
    id: '5',
    name: 'Donor Lorem',
    image: '/user1.jpg', // Assuming images are served from a static folder
    socialLinks: [
      { platform: 'facebook', url: 'https://facebook.com' },
      { platform: 'pinterest', url: 'https://pinterest.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' },
      { platform: 'twitter', url: 'https://twitter.com' },
    ],
  },
  // Add more members as needed
];

const Teams: React.FC<TeamsProps> = ({ members }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderBar />
      <NavBar bg_color="bg-white" />
      <Title />
      <MembersList members={dummyMembers} />
    </div>
  );
};

export default Teams;