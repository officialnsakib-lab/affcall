'use client';

import React from 'react';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4 font-sans">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-2xl p-8 sm:p-12 text-center space-y-6">
        
        <h1 className="text-3xl sm:text-4xl font-extrabold text-orange-600">
          Thank You!
        </h1>
        
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          Your form has been submitted successfully. One of our representatives will contact you very soon.
        </p>

        <div className="pt-4">
          <Link 
            href="/" 
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3.5 rounded-full transition shadow-lg text-sm sm:text-base"
          >
            Go Back Home
          </Link>
        </div>

      </div>
    </div>
  );
}