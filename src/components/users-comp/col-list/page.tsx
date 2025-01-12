import React from 'react';

const DonorList = () => {
  // Sample donor data - replace with your actual data source
  const donors = [
    { id: 1, name: "Abhinav", location: "DDun, UK", amount: "₹ 700", date: "13-01-2025" },
    { id: 2, name: "Donor Lorem", location: "DDun, UK", amount: "₹ 1000", date: "07-01-2025" },
    { id: 3, name: "Donor Lorem", location: "DDun, UK", amount: "₹ 1000", date: "07-01-2025" },
    { id: 4, name: "Donor Lorem", location: "DDun, UK", amount: "₹ 1000", date: "07-01-2025" },
    { id: 5, name: "Donor Lorem", location: "DDun, UK", amount: "₹ 1000", date: "07-01-2025" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-1 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-800 text-white p-4 grid grid-cols-4 rounded-t-lg">
          <div className="font-semibold text-lg font-mono">Name</div>
          <div className="font-semibold text-lg font-mono">City/State</div>
          <div className="font-semibold text-lg font-mono">Donations</div>
          <div className="font-semibold text-lg font-mono">Date</div>
        </div>

        {/* Donor List */}
        <div className="divide-y divide-gray-200">
          {donors.map((donor, index) => (
            <div
              key={donor.id} 
              className="grid grid-cols-4 p-4 hover:bg-gray-50 transition-colors duration-150 ease-in-out"
            >
              <div className="flex items-center gap-9 text-sm">
                <span className="text-gray-600 ">{index + 1}.</span>
                <span className="text-gray-800 font-merryweather">{donor.name}</span>
              </div>
              <div className="text-gray-600 font-merryweather text-sm">{donor.location}</div>
              <div className="text-gray-800 font-merryweather text-sm">{donor.amount}</div>
              <div className="text-gray-600 font-merryweather text-sm">{donor.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonorList;