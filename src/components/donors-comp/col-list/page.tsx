'use client';

import React, { useState, useEffect } from 'react';
import { db } from '@/firebase/config';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { ChevronLeft, ChevronRight } from "lucide-react";

const DonorList = () => {
  const [donors, setDonors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const donorsPerPage = 10;

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const donationsRef = collection(db, 'donations');
        const q = query(donationsRef, orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);

        const donorData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          date: doc.data().timestamp?.toDate().toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          }),
        }));

        setDonors(donorData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching donors:', err);
        setError('Failed to load donor data');
        setLoading(false);
      }
    };

    fetchDonors();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const filteredDonors = donors.filter(donor =>
    `${donor.firstName} ${donor.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredDonors.length / donorsPerPage);
  const indexOfLastDonor = currentPage * donorsPerPage;
  const indexOfFirstDonor = indexOfLastDonor - donorsPerPage;
  const currentDonors = filteredDonors.slice(indexOfFirstDonor, indexOfLastDonor);

  // Calculate page range to display
  const getPageRange = () => {
    const delta = 1; // Number of pages to show on each side of current page
    let range = [];

    if (totalPages <= 5) {
      range = [...Array(totalPages)].map((_, i) => i + 1);
    } else {
      if (currentPage <= delta + 1) {
        range = [1, 2, 3, '...', totalPages];
      } else if (currentPage >= totalPages - delta) {
        range = [1, '...', totalPages - 2, totalPages - 1, totalPages];
      } else {
        range = [
          1,
          '...',
          currentPage - 1,
          currentPage,
          currentPage + 1,
          '...',
          totalPages
        ];
      }
    }
    return range;
  };

  const handlePageClick = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      // Smooth scroll to top of the list
      document.querySelector('.donor-list-container')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
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
    <div className="md:w-11/12 mx-auto px-4 py-8">
      <div className="donor-list-container bg-gradient-to-br from-[#fff8f3] to-white md:bg-white rounded-xl shadow-xl overflow-hidden border border-[#ffddc2]">
        <div className="p-4">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-2 border border-[#ffaa66] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff7722]"
          />
        </div>

        {/* Column Names Section */}
        <div className="hidden md:block bg-gradient-to-r from-[#ff7722]/90 via-[#ff9955]/90 to-[#ff7722]/90 shadow-lg">
          <div className="hidden md:grid md:grid-cols-4 p-6 gap-8 text-white ml-3">
            {["Name", "Date", "Phone Number", "State"].map((header, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 uppercase tracking-wider text-sm font-semibold"
              >
                <div className='flex items-center'>
                  {header}
                </div>
                {/* small sort indicator */}
                {index !== 4 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white/70"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="divide-y divide-[#e3e1df] md:divide-gray-100">
          {currentDonors.length === 0 ? (
            <div className="p-8 text-center">
              <div className="text-[#ff7722] md:text-gray-400 text-lg">No record found...</div>
            </div>
          ) : (
            currentDonors.map((donor, index) => (
              <div
                key={donor.id}
                className="group hover:bg-[#f9e7da] md:hover:bg-[#fff0e3] transition-all duration-200"
              >
                {/* Desktop view */}
                <div className="hidden md:grid md:grid-cols-4 p-6 gap-8">
                  <div className="flex items-center">
                    <div className="mr-4 text-2xl font-bold text-[#ff7722]">
                      {((currentPage - 1) * donorsPerPage) + index + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {donor.firstName} {donor.lastName}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">Donor</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#fff0e6] text-[#ff7722] px-3 py-1 rounded-md text-sm">
                      {donor.date}
                    </div>
                  </div>
                  <div className="flex items-center font-mono text-gray-600">
                    XXXXX{Number(donor.phone.slice(5, 10))}
                  </div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#ffddc2] text-[#ff7722]">
                      {donor.city || donor.state || 'N/A'}
                    </span>
                  </div>
                </div>
                {/* Mobile view */}
                <div className="md:hidden p-4">
                  <div className="flex flex-col space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-3">
                        <span className="bg-[#fff0e6] text-[#ff7722] w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                          {((currentPage - 1) * donorsPerPage) + index + 1}
                        </span>
                        <span className="text-gray-900 font-semibold">
                          {donor.firstName} {donor.lastName}
                        </span>
                      </div>
                      <span className="px-2 py-1 bg-[#fff0e6] text-[#ff7722] rounded-full text-xs">
                        {donor.city || donor.state || 'N/A'}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm pl-9">
                      <span className="text-gray-600">{donor.date}</span>
                      <span className="font-mono text-gray-600">
                        XXXXX{Number(donor.phone.slice(5, 10))}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex justify-center items-center gap-2 py-4 px-2 overflow-x-auto">
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-md text-[#ff7722] hover:bg-[#fff0e6] disabled:opacity-50 disabled:hover:bg-transparent shrink-0"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            {getPageRange().map((page, index) => (
              <React.Fragment key={index}>
                {page === '...' ? (
                  <span className="px-2 py-2 text-gray-500 shrink-0">...</span>
                ) : (
                  <button
                    onClick={() => handlePageClick(page as number)}
                    className={`min-w-[40px] px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200 shrink-0 ${currentPage === page
                        ? 'bg-[#ff7722] text-white'
                        : 'bg-white text-[#ff7722] hover:bg-[#fff0e6]'
                      }`}
                  >
                    {page}
                  </button>
                )}
              </React.Fragment>
            ))}
          </div>

          <button
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-md text-[#ff7722] hover:bg-[#fff0e6] disabled:opacity-50 disabled:hover:bg-transparent shrink-0"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="bg-gradient-to-r from-[#fff0e6] to-[#ffddc2] md:bg-gray-50 p-4 text-center text-sm text-[#ff7722]">
          Total Members: {filteredDonors.length}
        </div>
      </div>
    </div>
  );
};

export default DonorList;