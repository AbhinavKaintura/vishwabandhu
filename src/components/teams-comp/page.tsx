import React from 'react'

const MembersList = () => {
  return (

    <div>MembersList</div>

  )
}

export default MembersList


// import React, { useState, useEffect } from 'react';
// import { Card } from "@/components/ui/card";

// // Dummy data for initial development
// const dummyMembers = [
//   {
//     id: 1,
//     name: "Donor Lorem",
//     role: "Member",
//     imageUrl: "/api/placeholder/150/150",
//     social: {
//       facebook: "#",
//       twitter: "#",
//       linkedin: "#"
//     }
//   },
//   {
//     id: 2,
//     name: "Donor Lorem",
//     role: "Member",
//     imageUrl: "/api/placeholder/150/150",
//     social: {
//       facebook: "#",
//       twitter: "#",
//       linkedin: "#"
//     }
//   },
//   {
//     id: 3,
//     name: "Donor Lorem",
//     role: "Member",
//     imageUrl: "/api/placeholder/150/150",
//     social: {
//       facebook: "#",
//       twitter: "#",
//       linkedin: "#"
//     }
//   }
// ];

// const MembersList = () => {
//   const [members, setMembers] = useState(dummyMembers);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMembers = async () => {
//       setLoading(true);
//       try {
//         // Replace with your actual API endpoint
//         const response = await fetch('/api/members');
//         if (!response.ok) throw new Error('Failed to fetch members');
//         const data = await response.json();
//         setMembers(data);
//       } catch (err) {
//         setError(err.message);
//         // Fallback to dummy data on error
//         setMembers(dummyMembers);
//       } finally {
//         setLoading(false);
//       }
//     };

//     // Comment out fetchMembers() for now to use dummy data
//     // fetchMembers();
//   }, []);

//   if (loading) return <div className="text-center py-8">Loading members...</div>;
//   if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-center mb-8 relative">
//         Our Members
//         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-black"></div>
//       </h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {members.map((member) => (
//           <Card key={member.id} className="p-6 flex flex-col items-center text-center">
//             <div className="relative mb-4">
//               <img
//                 src={member.imageUrl}
//                 alt={member.name}
//                 className="w-32 h-32 rounded-full object-cover"
//               />
//             </div>
            
//             <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
//             <p className="text-gray-600 mb-4">{member.role}</p>
            
//             <div className="flex space-x-4">
//               <a href={member.social.facebook} className="text-gray-600 hover:text-blue-600">
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/>
//                 </svg>
//               </a>
//               <a href={member.social.twitter} className="text-gray-600 hover:text-blue-400">
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
//                 </svg>
//               </a>
//               <a href={member.social.linkedin} className="text-gray-600 hover:text-blue-700">
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//                 </svg>
//               </a>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MembersList;
