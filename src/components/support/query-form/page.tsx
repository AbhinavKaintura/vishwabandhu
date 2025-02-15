'use client';
import React, { useState } from "react";
import axios from "axios";
import { Mail, User, Phone, MessageSquare, Send, Check, AlertCircle } from "lucide-react";

const QueryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    query: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
  
    try {
        console.log("formData", formData);
      const response = await fetch('/api/send-query-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setMessage("Your query has been sent successfully.");
        setFormData({ name: "", phone: "", email: "", query: "" });
      } else {
        throw new Error("Failed to send query");
      }
    } catch (error) {
      setMessage("Failed to send query. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-[#ff7722] to-[#ff9955] p-8 text-white">
            <h3 className="text-3xl font-bold text-center mb-2">Get in Touch</h3>
            <p className="text-center text-white/80">We'd love to hear from you</p>
          </div>

          {/* Form Section */}
          <div className="p-8">
            {message && (
              <div className={`mb-6 p-4 rounded-lg flex items-center gap-2 ${
                messageType === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
              }`}>
                {messageType === "success" ? <Check size={20} /> : <AlertCircle size={20} />}
                <p>{message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <User size={20} />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff7722] focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-gray-100 focus:bg-white"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Phone size={20} />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff7722] focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-gray-100 focus:bg-white"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Mail size={20} />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff7722] focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-gray-100 focus:bg-white"
                />
              </div>

              <div className="relative">
                <div className="absolute top-3 left-0 pl-4 pointer-events-none text-gray-400">
                  <MessageSquare size={20} />
                </div>
                <textarea
                  name="query"
                  placeholder="Tell us about your query..."
                  value={formData.query}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff7722] focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-gray-100 focus:bg-white min-h-[120px] resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#ff7722] text-white py-4 rounded-xl hover:bg-[#e66a1e] transition-all duration-300 flex items-center justify-center gap-2 font-semibold shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryForm;