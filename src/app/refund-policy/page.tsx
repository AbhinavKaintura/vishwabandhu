import React from "react";
import HeaderBar from '@/components/common/header-bar/page';
import NavBar from '@/components/common/nav-bar/page';
import Footer from '@/components/common/footer/page';

const Refund_Policy = () => {
    return (
        <div>
            <HeaderBar />
            <NavBar bg_color='' />
            <div className="min-h-screen bg-gray-100">
                <header className="bg-teal-600 text-white py-16 px-4 rounded-b-[40px]">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund Policy</h1>
                        <p className="text-xl">Vishwa Bandhu Foundation - A Section 8 non-profit organization</p>
                    </div>
                </header>

                <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <p className="text-gray-600 text-lg">
                            Vishwa Bandhu Foundation is committed to transparency and accountability. This Refund Policy outlines our procedures for handling donations and refunds.
                        </p>
                    </div>

                    {[
                        {
                            title: "1. Donation Refund",
                            content: (
                                <div className="space-y-4">
                                    <p className="text-gray-600">Donations are non-refundable, except in cases of:</p>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                        <li>Error in processing</li>
                                        <li>Duplicate transactions</li>
                                        <li>Cancellation of events or programs</li>
                                    </ul>
                                </div>
                            )
                        },
                        {
                            title: "2. Eligibility for Refund",
                            content: (
                                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                    <li>Refunds are only available for online donations made through our website</li>
                                    <li>Refunds will be credited to the original payment method within 7-10 days</li>
                                </ul>
                            )
                        },
                        {
                            title: "3. Cancellation of Events/Programs",
                            content: (
                                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                    <li>If an event or program is cancelled, we will refund registration fees in full</li>
                                </ul>
                            )
                        },
                        {
                            title: "4. Requesting a Refund",
                            content: (
                                <div className="space-y-4 text-gray-600">
                                    <p>To request a refund, email <a href="mailto:support@vishwabandhufoundation.org"
                                        className=" hover:text-orange-500 transition-colors "
                                    > Support@vishwabandhufoundation.org
                                    </a> with:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Donation details (date, amount, transaction ID)</li>
                                        <li>Reason for refund request</li>
                                    </ul>
                                    <p className="mt-4 font-medium">Refund requests must be made within 30 days of donation</p>
                                </div>
                            )
                        }
                    ].map((section, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-teal-600 mb-4">{section.title}</h2>
                            <div className="text-lg">{section.content}</div>
                        </div>
                    ))}
                </main>
            </div>
            <Footer />
        </div>

    );
};

export default Refund_Policy;