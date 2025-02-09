'use client';
import React, { useState, useEffect } from 'react';
import { db } from '@/firebase/config';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';

const MemberList = () => {
  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 10;

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const membersRef = collection(db, 'members');
        const q = query(membersRef, orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);

        const memberData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          // Format the timestamp
          date: doc.data().timestamp?.toDate().toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          }),
        }));

        setMembers(memberData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching members:', err);
        setError('Failed to load members data');
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const filteredMembers = members.filter(member =>
    `${member.firstName} ${member.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredMembers.length / membersPerPage);
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = filteredMembers.slice(indexOfFirstMember, indexOfLastMember);

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return (
      <div className="w-full max-w-6xl mx-auto px-1 py-8">
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-800"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-6xl mx-auto px-1 py-8">
        <div className="bg-red-50 text-red-600 p-4 rounded-lg text-center">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-br from-indigo-50 to-white md:bg-white rounded-xl shadow-xl overflow-hidden border border-indigo-100">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4">
          <h2 className="text-white font-bold text-xl text-center">Vishwabandhu's Family Members</h2>
        </div>
        <div className="p-4">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="hidden md:block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
          <div className="relative p-8">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-blue-500/20"></div>
              <div className="absolute left-0 top-0 w-48 h-full bg-gradient-to-r from-purple-500/20"></div>
            </div>
            <div className="grid grid-cols-4 w-full gap-8">
              {["Name", "Date", "Phone Number", "State"].map((header, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-gray-100">{header}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="divide-y divide-indigo-100 md:divide-gray-100">
          {currentMembers.length === 0 ? (
            <div className="p-8 text-center">
              <div className="text-indigo-400 md:text-gray-400 text-lg">No record found...</div>
            </div>
          ) : (
            currentMembers.map((member, index) => (
              <div
                key={member.id}
                className="group hover:bg-indigo-50 md:hover:bg-gray-50 transition-all duration-200"
              >
                <div className="hidden md:grid md:grid-cols-4 p-6 gap-8">
                  <div className="flex items-center">
                    <div className="mr-4 text-2xl font-bold text-gray-200">
                      {((currentPage - 1) * membersPerPage) + index + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {member.firstName} {member.lastName}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">Member</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md text-sm">
                      {member.date}
                    </div>
                  </div>
                  <div className="flex items-center font-mono text-gray-600">
                  XXXXX{Number(member.phone.slice(5, 10))}
                  </div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {member.city || member.state || 'N/A'}
                    </span>
                  </div>
                </div>
                <div className="md:hidden p-4">
                  <div className="flex flex-col space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-3">
                        <span className="bg-indigo-100 text-indigo-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                          {((currentPage - 1) * membersPerPage) + index + 1}
                        </span>
                        <span className="text-gray-900 font-semibold">
                          {member.firstName} {member.lastName}
                        </span>
                      </div>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs">
                        {member.city || member.state || 'N/A'}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm pl-9">
                      <span className="text-gray-600">{member.date}</span>
                      <span className="font-mono text-gray-600">
                        {Number(member.phone.slice(0, 5))}XXXXX
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="flex justify-center space-x-3 py-4">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              className={`px-4 py-2 rounded-md text-sm font-semibold ${currentPage === index + 1
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-indigo-600 hover:bg-indigo-50'
                }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 md:bg-gray-50 p-4 text-center text-sm text-gray-600">
          Total Members: {filteredMembers.length}
        </div>
      </div>
    </div>
  );
};

export default MemberList;