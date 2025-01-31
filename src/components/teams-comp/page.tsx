'use client';

import React, { useState, useEffect } from 'react';
import { db } from '@/firebase/config';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';

const DonorList = () => {
  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
            year: 'numeric'
          })
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
    <div className="w-full max-w-6xl mx-auto px-1 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-800 text-white p-4 grid grid-cols-4 rounded-t-lg">
          <div className="font-semibold text-lg font-mono">Name</div>
          <div className="font-semibold text-lg font-mono">Phone Number</div>
          <div className="font-semibold text-lg font-mono">City/State</div>
          <div className="font-semibold text-lg font-mono">Date</div>
        </div>

        {/* Donor List */}
        <div className="divide-y divide-gray-200">
          {members.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              No donations found
            </div>
          ) : (
            members.map((member, index) => (
              <div
                key={member.id}
                className="grid grid-cols-4 p-4 hover:bg-gray-50 transition-colors duration-150 ease-in-out"
              >
                <div className="flex items-center gap-9 text-sm">
                  <span className="text-gray-600">{index + 1}.</span>
                  <span className="text-gray-800 font-merryweather">
                    {member.firstName} {member.lastName}
                  </span>
                </div>
                <div className="text-gray-800 text-sm">
                  {Number(member.phone.slice(0, 5))}XXXXX
                </div>
                <div className="text-gray-600 font-merryweather text-sm">
                  {member.city || member.state || 'N/A'}
                </div>
                <div className="text-gray-600 font-merryweather text-sm">
                  {member.date}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DonorList;