import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faPinterest, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import user1 from "./user1.jpg"

interface Member {
  id: string;
  name: string;
  image: string;
  socialLinks: {
    platform: string;
    url: string;
  }[];

}

interface MembersListProps {
  members: Member[];
}

const MembersList: React.FC<MembersListProps> = ({ members }) => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h2 className='text-3xl font-bold text-center pb-2 mb-8'>Our Team</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24'>
        {members.map((member) => (
          
          <div key={member.id} className='container w-80 h-96 flex flex-col rounded-lg'>
            <div className='absolute bg-white w-60 h-60  ml-16  mt-32 p-2 rounded-xl  drop-shadow-md shadow-black'></div>
            <div className='relative  w-60 h-72'>
              <Image
                // src={member.image}
                src = {user1}
                alt='member image'
                fill
                className='rounded-3xl object-cover object-center '
                // style={{ objectFit: 'cover', borderRadius: 'md' }} // Adjust borderRadius as needed
              />
            </div>
            <div className='absolute  bg-white p-4 ml-60   mt-32'>
              {member.socialLinks.map((link) => (
                <a key={link.platform} href={link.url} className='text-black mr-6'>
                  {link.platform === 'facebook' && <FontAwesomeIcon icon={faFacebook} />}
                  {link.platform === 'pinterest' && <FontAwesomeIcon icon={faPinterest} />}
                  {link.platform === 'linkedin' && <FontAwesomeIcon icon={faLinkedin} />}
                  {link.platform === 'twitter' && <FontAwesomeIcon icon={faTwitter} />}
                </a>
              ))}
            </div>
              <div className='absolute mt-72 ml-20  '>
              <h2 className='text-xl font-bold text-center text-indigo-900 mt-4'>{member.name}</h2>
            {/* <p className='text-center text-gray-700 mt-2'>{member.role}</p> */}
            <p className='text-center text-gray-700 mt-2'>Member</p>
              </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default MembersList;