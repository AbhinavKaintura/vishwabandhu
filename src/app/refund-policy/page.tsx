import React from 'react';
import NavBar from '@/components/common/nav-bar/page';
import HeaderBar from '@/components/common/header-bar/page';
import Footer from '@/components/common/footer/page';

const Refund = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header and Navbar */}
      <HeaderBar />
      <NavBar bg_color="bg-[#F8F8F8]" />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-center text-[#2C3E50] mb-10 tracking-tight">
          Refund Policy
        </h1>

        {/* Introduction Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#34495E] mb-6">Introduction</h2>
          <p className="text-lg text-[#5D6D7E] leading-relaxed">
            Vishwa Bandhu Foundation is committed to protecting the privacy of our website visitors, donors, and supporters. This Privacy Policy outlines how we collect, use, and protect personal information.
          </p>
        </section>

        {/* Information Collection Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#34495E] mb-6">1. Information Collection</h2>
          <p className="text-lg text-[#5D6D7E] leading-relaxed mb-4">
            We collect personal information (name, email, phone number, address) when you:
          </p>
          <ul className="list-disc pl-6 text-lg text-[#5D6D7E] leading-relaxed space-y-2">
            <li>Make a donation</li>
            <li>Register for an event</li>
            <li>Subscribe to our newsletter</li>
            <li>Contact us through the website</li>
          </ul>
          <p className="text-lg text-[#5D6D7E] leading-relaxed mt-4">
            We also collect non-personal information (IP address, browser type, pages visited).
          </p>
        </section>

        {/* Use of Information Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#34495E] mb-6">2. Use of Information</h2>
          <p className="text-lg text-[#5D6D7E] leading-relaxed mb-4">
            We use personal information to:
          </p>
          <ul className="list-disc pl-6 text-lg text-[#5D6D7E] leading-relaxed space-y-2">
            <li>Process donations and send receipts</li>
            <li>Communicate about events, news, and updates</li>
            <li>Improve our website and services</li>
          </ul>
          <p className="text-lg text-[#5D6D7E] leading-relaxed mt-4">
            We do not share personal information with third parties without consent.
          </p>
        </section>

        {/* Data Security Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#34495E] mb-6">3. Data Security</h2>
          <p className="text-lg text-[#5D6D7E] leading-relaxed">
            We implement reasonable security measures to protect personal information. Our website uses SSL encryption for secure transactions.
          </p>
        </section>

        {/* Cookies and Tracking Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#34495E] mb-6">4. Cookies and Tracking</h2>
          <p className="text-lg text-[#5D6D7E] leading-relaxed">
            We use cookies to analyze website usage and improve user experience. You can disable cookies in your browser settings.
          </p>
        </section>

        {/* Data Retention Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#34495E] mb-6">5. Data Retention</h2>
          <p className="text-lg text-[#5D6D7E] leading-relaxed">
            We retain personal information for as long as necessary to fulfill our purposes. You can request deletion of your information by contacting us.
          </p>
        </section>

        {/* Changes to Privacy Policy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#34495E] mb-6">6. Changes to Privacy Policy</h2>
          <p className="text-lg text-[#5D6D7E] leading-relaxed">
            We reserve the right to update this policy without notice.
          </p>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#34495E] mb-6">Contact</h2>
          <p className="text-lg text-[#5D6D7E] leading-relaxed">
            For concerns or questions, email{' '}
            <a href="mailto:Support@vishwabandhufoundation.org" className="text-[#2980B9] hover:underline transition duration-300 ease-in-out">
              Support@vishwabandhufoundation.org
            </a>{' '}
            or write to:
          </p>
          <address className="text-lg text-[#5D6D7E] leading-relaxed not-italic mt-2">
            Office no. 3, Sector-39, Gurgaon, Haryana – 122001.
          </address>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Refund;