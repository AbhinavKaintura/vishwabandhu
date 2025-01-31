import React from 'react'
import HeaderBar from '@/components/common/header-bar/page';
import NavBar from '@/components/common/nav-bar/page';
import Footer from '@/components/common/footer/page';

const Privacy_Policy = () => {
    return (
        <div>
            <HeaderBar />
            <NavBar bg_color='' />
            <div className="min-h-screen bg-gray-100">
                {/* Header */}
                <header className="bg-teal-600 text-white py-16 px-4 rounded-b-[40px]">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                        <p className="text-xl">Vishwa Bandhu Foundation - A Section 8 non-profit organization</p>
                    </div>
                </header>

                {/* Main Content */}
                <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">
                    {/* Cards */}
                    {[
                        {
                            title: "Introduction",
                            content: "Vishwa Bandhu Foundation is committed to protecting the privacy of our website visitors, donors, and supporters. This Privacy Policy outlines how we collect, use, and protect personal information."
                        },
                        {
                            title: "1. Information Collection",
                            content: (
                                <>
                                    <p className="mb-4">We collect personal information (name, email, phone number, address) when you:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Make a donation</li>
                                        <li>Register for an event</li>
                                        <li>Subscribe to our newsletter</li>
                                        <li>Contact us through the website</li>
                                    </ul>
                                    <p className="mt-4">We also collect non-personal information (IP address, browser type, pages visited).</p>
                                </>
                            )
                        },
                        {
                            title: "2. Use of Information",
                            content: (
                                <>
                                    <p className="mb-4">We use personal information to:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Process donations and send receipts</li>
                                        <li>Communicate about events, news, and updates</li>
                                        <li>Improve our website and services</li>
                                    </ul>
                                    <p className="mt-4">We do not share personal information with third parties without consent.</p>
                                </>
                            )
                        },
                        {
                            title: "3. Data Security",
                            content: "We implement reasonable security measures to protect personal information. Our website uses SSL encryption for secure transactions."
                        },
                        {
                            title: "4. Cookies and Tracking",
                            content: "We use cookies to analyze website usage and improve user experience. You can disable cookies in your browser settings."
                        },
                        {
                            title: "5. Data Retention",
                            content: "We retain personal information for as long as necessary to fulfill our purposes. You can request deletion of your information by contacting us."
                        },
                        {
                            title: "6. Changes to Privacy Policy",
                            content: "We reserve the right to update this policy without notice."
                        },
                        {
                            title: "Contact",
                            content: (
                                <>
                                    <p>For concerns or questions, email <span className="font-bold">
                                        <a href="mailto:support@vishwabandhufoundation.org"
                                            className=" hover:text-orange-500 transition-colors "
                                        > Support@vishwabandhufoundation.org
                                        </a></span> or write to:</p>
                                    <p className="mt-2">Office no. 3, Sector-39, Gurgaon, Haryana – 122001.</p>
                                </>
                            )
                        }
                    ].map((section, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-teal-600 mb-4">{section.title}</h2>
                            <div className="text-gray-600 text-lg">{section.content}</div>
                        </div>
                    ))}
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Privacy_Policy;