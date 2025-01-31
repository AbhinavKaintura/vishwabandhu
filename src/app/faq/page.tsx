import React from "react";
import HeaderBar from "@/components/common/header-bar/page";
import NavBar from "@/components/common/nav-bar/page";
import Footer from "@/components/common/footer/page";

const FAQs = () => {
  const faqList = [
    {
      question: "What is the Vishwabandhu Foundation?",
      answer: "The Vishwabandhu Foundation is an NGO focused on helping families and supporting cows as part of its Bharat Self Care Team. Members contribute to provide financial support to families in times of need.",
    },
    {
      question: "What is the Bharat Self Care Team?",
      answer: "The Bharat Self Care Team is a community-driven initiative where members contribute to a fund that provides financial assistance to the families of deceased members.",
    },
    {
      question: "How does the contribution system work?",
      answer: "Members pay an initial fee of ₹500 to join the program. In the event of a member’s death, all other members contribute ₹30 each to support the deceased member’s family.",
    },
    {
      question: "Who can join the Vishwabandhu Foundation?",
      answer: "Any individual who wishes to support the cause and be part of a community-driven safety net can join.",
    },
    {
      question: "What are the benefits of joining?",
      answer: "Financial assistance to your family in case of unforeseen events. Contribution to a noble cause supporting families and cows.",
    },
    {
      question: "How can I join the Bharat Self Care Team?",
      answer: "You can join by filling out the registration form on our website and paying the joining fee.",
    },
    {
      question: "Where can I learn more about your initiatives?",
      answer: "Visit our official website to explore our programs, events, and success stories.",
    },
    {
      question: "Can I volunteer for the foundation?",
      answer: "Yes, we welcome volunteers who are passionate about contributing to our mission. Contact us to get involved.",
    },
  ];

  return (
    <div>
      <HeaderBar />
      <NavBar bg_color=""/>
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Frequently Asked Questions
          </h1>
          <div className="space-y-6">
            {faqList.map((faq, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white"
              >
                <h2 className="text-xl font-semibold text-gray-700 mb-2">
                  {faq.question}
                </h2>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQs;
