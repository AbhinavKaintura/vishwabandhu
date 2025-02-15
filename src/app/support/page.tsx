import React from "react";
import NavBar from "@/components/common/nav-bar/page";
import HeaderBar from "@/components/common/header-bar/page";
import Link from "next/link";
import Footer from "@/components/common/footer/page";
// import OurSupportTeam from "@/components/support/our-support-team/page";
import ContactForm from "@/components/support/query-form/page";


const Support: React.FC = () => {
  return (
    <div>
      <HeaderBar />
      <NavBar bg_color="bg-white" />
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* Header Section */}
        <header className="bg-orange-50 text-gray-800 py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center">How Can We Help You?</h1>
            <p className="text-center mt-2">We're here to provide assistance and support whenever you need it.</p>
          </div>
        </header>
        
        {/* Contact Form */}
        <ContactForm />
        
        {/* Additional Support Details */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Additional Support Options</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold mb-2">FAQs</h3>
                <p className="text-gray-600">Check out our <a href="/faq" className="text-blue-600 underline">Frequently Asked Questions</a> for quick answers to common queries.</p>
              </div>
              {/* <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">Submit a Ticket</h3>
              <p className="text-gray-600">Need further assistance? <a href="/support/ticket" className="text-blue-600 underline">Submit a support ticket</a>, and we'll get back to you shortly.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-600">Connect with a support representative in real-time using our <a href="/support/chat" className="text-blue-600 underline">Live Chat</a> feature.</p>
            </div> */}
              {/* <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold mb-2">Community Forum</h3>
                <p className="text-gray-600">Join discussions and find help in our <a href="/community" className="text-blue-600 underline">Community Forum</a>.</p>
              </div> */}
              {/* <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold mb-2">Ask Us</h3>
                <span className="text-gray-600">Let your Queries me answered by one of us. </span>
                <Link href='/contact-us' className="text-blue-600 underline">
                  <span>Ask Here</span>
                </Link>

              </div> */}
            </div>
          </div>
        </section>

        {/* Footer Section
        <footer className="bg-orange-50 text-gray-800 py-6">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Adhyapak Self-Care Team. All rights reserved.</p>
          </div>
        </footer> */}

      </div>
      <Footer />
    </div>
  );
};

export default Support;
