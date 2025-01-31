import React from "react";
import HeaderBar from '@/components/common/header-bar/page';
import NavBar from '@/components/common/nav-bar/page';
import Footer from '@/components/common/footer/page';

const Terms_and_conditions = () => {
    return (
        <div>
            <HeaderBar />
            <NavBar bg_color='' />
            <div className="min-h-screen bg-gray-100">
                <header className="bg-teal-600 text-white py-16 px-4 rounded-b-[40px]">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
                        <p className="text-xl">Vishwa Bandhu Foundation - A Section 8 non-profit organization</p>
                    </div>
                </header>

                <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-teal-600 mb-4">Welcome to Vishwa Bandhu Foundation</h2>
                        <p className="text-gray-600 text-lg">By using our website, you agree to these Terms and Conditions.</p>
                    </div>

                    {[
                        {
                            title: "1. Website Use",
                            content: (
                                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                    <li>Our website is for informational purposes only.</li>
                                    <li>We reserve the right to modify or discontinue content without notice.</li>
                                </ul>
                            )
                        },
                        {
                            title: "2. Intellectual Property",
                            content: (
                                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                    <li>Our website content is proprietary and protected by copyright.</li>
                                    <li>You may not reproduce or distribute content without permission.</li>
                                </ul>
                            )
                        },
                        {
                            title: "3. Donations",
                            content: (
                                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                    <li>Donations are non-refundable (see Refund Policy).</li>
                                    <li>We reserve the right to decline or return donations.</li>
                                </ul>
                            )
                        },
                        {
                            title: "4. Event Registration",
                            content: (
                                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                    <li>Event registration is subject to availability and cancellation policies.</li>
                                    <li>We reserve the right to modify event details without notice.</li>
                                </ul>
                            )
                        },
                        {
                            title: "5. User-Generated Content",
                            content: (
                                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                    <li>You grant us permission to use any content you submit (comments, feedback, etc.).</li>
                                    <li>You agree not to post harmful or unlawful content.</li>
                                </ul>
                            )
                        },
                        {
                            title: "6. Disclaimer",
                            content: (
                                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                    <li>We disclaim warranties and liability for website use or content.</li>
                                    <li>Your use of our website is at your own risk.</li>
                                </ul>
                            )
                        },
                        {
                            title: "7. Governing Law",
                            content: "These Terms shall be governed by Indian laws and jurisdiction."
                        },
                        {
                            title: "8. Changes to Terms",
                            content: "We reserve the right to update these Terms without notice."
                        }
                    ].map((section, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-teal-600 mb-4">{section.title}</h2>
                            <div className="text-lg">{section.content}</div>
                        </div>
                    ))}

                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-teal-600 mb-4">Contact Us</h2>
                        <div className="text-gray-600 text-lg">
                            <p>For concerns or questions, email <span className="font-bold"><a href="mailto:support@vishwabandhufoundation.org"
                                className=" hover:text-orange-500 transition-colors "
                            > Support@vishwabandhufoundation.org
                            </a></span> or write to:</p>
                            <p className="mt-2">Office no. 3, Sector-39, Gurgaon, Haryana – 122001</p>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>

    );
};

export default Terms_and_conditions;