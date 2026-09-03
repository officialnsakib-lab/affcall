'use client';

import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // এখানে আপনার ফর্ম সাবমিটের লজিক বা API কল যুক্ত করতে পারেন
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans overflow-x-hidden">
      
      {/* ==================== MAIN CONTENT ==================== */}
      <main>
        
        {/* 1. Contact Hero Title Section */}
        <section className="bg-gray-50/50 py-16 lg:py-24 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Contact
            </h1>
          </div>
        </section>

        {/* 2. Contact Form & Info Section */}
        <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-orange-500 uppercase tracking-wider block">
                Contact Us
              </span>
              
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                Get in Touch with Our AI <br className="hidden sm:inline" />Specialists
              </h2>

              <div className="space-y-4 pt-2">
                <div className="flex items-center space-x-3 text-sm text-gray-700">
                  <FaEnvelope className="text-orange-500 text-base shrink-0" />
                  <span className="font-medium">info@affcall.com</span>
                </div>

                <div className="flex items-start space-x-3 text-sm text-gray-700">
                  <FaMapMarkerAlt className="text-orange-500 text-base mt-1 shrink-0" />
                  <span className="font-medium">4114 Darica Dr, Houston, TX 77047, USA</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed pt-2">
                Have questions about campaigns, payouts, traffic quality, or onboarding? Our team is here to help.
              </p>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm">
              {submitted ? (
                <div className="bg-orange-50 border border-orange-200 text-orange-700 p-6 rounded-xl text-center space-y-2">
                  <h3 className="text-lg font-bold">Thank You!</h3>
                  <p className="text-sm">Your message has been successfully sent. We will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                    />
                  </div>

                  <div>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
                    />
                  </div>

                  <div>
                    <textarea 
                      name="message"
                      rows={5} 
                      placeholder="Message" 
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <button 
                      type="submit" 
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm py-4 rounded-lg shadow-md transition cursor-pointer"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </section>

      </main>

    </div>
  );
}