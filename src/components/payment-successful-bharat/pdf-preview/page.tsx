import React from 'react';
import { jsPDF } from 'jspdf';

interface OrderDetails {
    firstName: string;
    middleName?: string;
    lastName: string;
    gender: string;
    dob: string;
    aadharCard: string;
    companyName?: string;
    country: string;
    state: string;
    address: string;
    landmark: string;
    postalCode: string;
    phone: string;
    email: string;
    nomineeName: string;
    relation: string;
    nomineeAadhar: string;
    paymentId: string;
    timestamp: any;
    status: string;
}

const PDFPreviewAndDownload = ({ orderDetails }: { orderDetails: OrderDetails }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Set background color for header
    doc.setFillColor(255, 119, 34); // Orange color
    doc.rect(0, 0, 210, 30, 'F');
    
    // Add header text
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.text('Bharat Self Care Team', 105, 20, { align: 'center' });
    
    // Reset text color for content
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    
    // Member Information Section
    doc.setFontSize(16);
    doc.setTextColor(255, 119, 34);
    doc.text('Member Information', 20, 40);
    doc.line(20, 45, 190, 45);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    // doc.text(`Member ID: ${orderDetails.memberID}`, 20, 55);
    doc.text(`Name: ${orderDetails.firstName} ${orderDetails.middleName || ''} ${orderDetails.lastName}`, 20, 65);
    doc.text(`Phone: ${orderDetails.phone}`, 20, 75);
    doc.text(`Aadhar: XXXX-XXXX-${orderDetails.aadharCard.slice(-4)}`, 20, 85);
    
    // Nominee Information Section
    doc.setFontSize(16);
    doc.setTextColor(255, 119, 34);
    doc.text('Nominee Information', 20, 105);
    doc.line(20, 110, 190, 110);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Nominee Name: ${orderDetails.nomineeName}`, 20, 120);
    doc.text(`Relationship: ${orderDetails.relation}`, 20, 130);
    doc.text(`Nominee Aadhar: XXXX-XXXX-${orderDetails.nomineeAadhar.slice(-4)}`, 20, 140);
    
    // Address Section
    doc.setFontSize(16);
    doc.setTextColor(255, 119, 34);
    doc.text('Address', 20, 160);
    doc.line(20, 165, 190, 165);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(orderDetails.address, 20, 175);
    doc.text(`${orderDetails.landmark}`, 20, 185);
    doc.text(`${orderDetails.state} - ${orderDetails.postalCode}`, 20, 195);
    doc.text(orderDetails.country, 20, 205);
    
    // Add footer
    doc.setFontSize(10);
    doc.text('For any queries, contact: support@vishwabandhufoundation.org', 105, 280, { align: 'center' });
    
    // Save the PDF
    doc.save(`${orderDetails.firstName}_details.pdf`);
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 mb-12">
      <h2 className="text-xl font-bold text-[#ff7722] border-b-2 border-orange-400 pb-2 mb-4">
        Membership Card Preview
      </h2>
      
      {/* Preview Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-orange-400 mb-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-200">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-2xl text-orange-500">BSC</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-600">Bharat Self Care Team</h3>
            <p className="text-sm text-gray-500">Member Card</p>
          </div>
        </div>

        {/* Main Content - Two Columns */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            {/* <div>
              <p className="text-sm text-gray-500">Member ID</p>
              <p className="font-semibold">{orderDetails.memberID}</p>
            </div> */}
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-semibold">
                {orderDetails.firstName} {orderDetails.middleName} {orderDetails.lastName}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-semibold">{orderDetails.phone}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Aadhar</p>
              <p className="font-semibold">XXXX-XXXX-{orderDetails.aadharCard.slice(-4)}</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Nominee Name</p>
              <p className="font-semibold">{orderDetails.nomineeName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Relationship</p>
              <p className="font-semibold">{orderDetails.relation}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p className="font-semibold">
                {orderDetails.address}, {orderDetails.landmark},
                <br />
                {orderDetails.state} - {orderDetails.postalCode},
                <br />
                {orderDetails.country}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            For support: support@vishwabandhufoundation.org
          </p>
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={generatePDF}
        className="block w-full max-w-xs mx-auto px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200"
      >
        Download Membership Card PDF
      </button>
    </div>
  );
};

export default PDFPreviewAndDownload;