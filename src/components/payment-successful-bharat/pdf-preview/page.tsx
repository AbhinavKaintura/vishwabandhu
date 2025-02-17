import React from 'react';
import GenerateMembershipCard from '@/app/helper/GenerateMembershipCard/page';
import Image from 'next/image';
import logo from '../../../../public/RSVBF LOGO.png';
import Link from 'next/link';

interface OrderDetails {
  memberID: string;
  name: { firstName: string, middleName?: string, lastName: string };
  phone: string;
  aadhar: string;
  nomineeName: string;
  nomineeRelation: string;
  nomineeAadhar: string;
  address: { street: string, landmark: string, state: string, postalCode: string, country: string };
}

const PDFPreviewAndDownload = ({ orderDetails }: { orderDetails: OrderDetails }) => {
  const generatePDF = async () => {
    const membershipCardPDF = await GenerateMembershipCard({
      memberID: orderDetails.memberID,
      name: orderDetails.name,
      phone: orderDetails.phone,
      aadhar: orderDetails.aadhar,
      nomineeName: orderDetails.nomineeName,
      nomineeRelation: orderDetails.nomineeRelation,
      nomineeAadhar: orderDetails.nomineeAadhar,
      address: orderDetails.address
    });

    const blob = new Blob([membershipCardPDF], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${orderDetails.name.firstName}_Vishwabandhu_Card.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className=' bg-gray-100 py-8'>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl font-bold text-[#ff7722] pb-2 mb-4">
          Membership Card Preview
        </h2>

        {/* Preview Card with PDF-like appearance */}
        <div className="bg-white rounded-lg shadow-lg mb-6">
          <div className="p-8 bg-white border-2 border-[#ff7722] rounded-lg">
            {/* Header with Logo */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-[#ff7722]">
              <div className="flex items-center gap-4">
                <Image src={logo} alt="Vishwabandhu Foundation" width={72} height={72} />
                <div>
                  <h3 className="text-2xl font-bold text-[#ff7722]">Membership Card</h3>
                  <p className="text-sm text-gray-600">Bharat Self Care Team</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-[#ff7722]">Member ID</p>
                <p className="font-semibold text-gray-700">{orderDetails.memberID}</p>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-medium text-[#ff7722]">Full Name</p>
                  <p className="text-lg font-semibold text-gray-700">
                    {orderDetails.name.firstName} {orderDetails.name.middleName} {orderDetails.name.lastName}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#ff7722]">Contact Number</p>
                  <p className="text-lg font-semibold text-gray-700">{orderDetails.phone}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#ff7722]">Aadhar Number</p>
                  <p className="text-lg font-semibold text-gray-700">XXXX-XXXX-{orderDetails.aadhar.slice(-4)}</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-medium text-[#ff7722]">Nominee Details</p>
                  <p className="text-lg font-semibold text-gray-700">{orderDetails.nomineeName}</p>
                  <p className="text-sm text-gray-600">({orderDetails.nomineeRelation})</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#ff7722]">Address</p>
                  <p className="text-lg font-semibold text-gray-700">
                    {orderDetails.address.street}
                    {orderDetails.address.landmark && `, ${orderDetails.address.landmark}`}
                  </p>
                  <p className="text-lg font-semibold text-gray-700">
                    {orderDetails.address.state} - {orderDetails.address.postalCode}
                  </p>
                  <p className="text-lg font-semibold text-gray-700">{orderDetails.address.country}</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                For support: support@vishwabandhufoundation.org
              </p>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <button
          onClick={generatePDF}
          className="block w-full max-w-xs mx-auto px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200"
        >
          Download Membership Card
        </button>

        <Link href='/'>
          <button className='block m-auto w-32 bg-orange-500 rounded-lg p-2 mt-10 hover:bg-orange-600 text-white'>Go to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default PDFPreviewAndDownload;