'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans overflow-x-hidden">
      
      {/* ==================== MAIN CONTENT ==================== */}
      <main>
        
        {/* 1. Hero Section with "About Us" Title */}
        <section className="relative py-28 lg:py-40 overflow-hidden bg-gray-900">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/dd.jpeg" 
              alt="Hero Background" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          {/* অপাসিটি কমানো হয়েছে যাতে ছবি পরিষ্কার দেখায় */}
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white tracking-wide">
              About Us
            </h1>
          </div>
        </section>

        {/* 2. Who We Are & What We Do Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                Who We Are & What <br />We Do
              </h2>
              
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                AffCall is a premier pay-per-call and web lead generation company dedicated to connecting businesses with high intent customers who are actively searching for their services. We specialize in delivering exclusive, real time phone call leads and web leads across a wide range of industries including insurance, home services, medical, and travel.
              </p>

              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                We understand that every business is unique, which is why we tailor every lead generation campaign to match your specific goals, target audience, and service area. Our data-driven approach ensures that every lead we deliver is pre-qualified, location specific, and ready to convert — giving your business the competitive edge it needs to grow consistently.
              </p>

              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                Our mission is simple — to eliminate wasted marketing spend and replace it with a smarter, more efficient system that connects you with the right customers at the right time, every single time.
              </p>

              <div className="pt-2">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg shadow-md transition cursor-pointer">
                  Explore More
                </button>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="relative w-full h-[350px] lg:h-[450px] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <Image 
                src="/sd.webp" 
                alt="Team working together" 
                fill 
                className="object-cover"
              />
            </div>

          </div>
        </section>

        {/* 3. Our Lead Generation Expertise & Our Commitment to Your Success */}
        <section className="bg-gray-50/40 py-20 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Image with Dark Overlay Description Card */}
            <div className="relative w-full h-[380px] lg:h-[440px] rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="/ddd.jpeg" 
                alt="Our Lead Generation Expertise" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent flex flex-col justify-end p-6 lg:p-8 text-white z-10">
                <h3 className="text-xl font-bold mb-2">Our Lead Generation Expertise</h3>
                <p className="text-xs lg:text-sm text-gray-200 leading-relaxed">
                  <strong className="text-white font-semibold">Image Overlay Description:</strong> With over 10 years of experience delivering high-quality pay-per-call leads, we have helped thousands of businesses across insurance, home services, medical, and travel industries grow their revenue and reach their ideal customers consistently.
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
                Our Commitment to <br />Your Success
              </h2>
              
              <div className="w-12 h-1 bg-orange-500 rounded-full"></div>

              <p className="text-sm text-gray-600 leading-relaxed">
                At AffCall, we believe that quality always outperforms quantity. Unlike traditional lead generation companies that flood your pipeline with unverified, low-quality contacts, we focus exclusively on delivering genuine, high-intent leads that have a real chance of converting into loyal, long-term customers for your business.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Our advanced targeting strategies, performance-driven campaigns, and rigorous quality control processes work together to ensure that every single lead we deliver meets the highest possible standards. Here is what sets us apart:
              </p>

              {/* Checkmark List */}
              <div className="space-y-3 pt-1">
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold text-sm mt-0.5">✓</span>
                  <span className="text-sm text-gray-700 font-medium">Exclusive leads never shared with competitors.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold text-sm mt-0.5">✓</span>
                  <span className="text-sm text-gray-700 font-medium">Real-time connections at the moment of peak interest.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold text-sm mt-0.5">✓</span>
                  <span className="text-sm text-gray-700 font-medium">Advanced call tracking powered by industry-leading technology.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold text-sm mt-0.5">✓</span>
                  <span className="text-sm text-gray-700 font-medium">Dedicated support team available around the clock.</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 4. Grow Your Business With Confidence Banner Section */}
        <section className="relative py-28 overflow-hidden bg-gray-900">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/dddd.jpeg" 
              alt="Grow Your Business Background" 
              fill 
              className="object-cover"
            />
          </div>
          {/* ওভারলে অপাসিটি bg-black/75 থেকে কমিয়ে bg-black/50 করা হয়েছে যাতে ছবি পরিষ্কার দেখায় */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
              Grow Your Business With <br />Confidence
            </h2>
            
            <p className="text-sm lg:text-base text-gray-300 leading-relaxed max-w-3xl mx-auto">
              At AffCall, we go beyond just delivering leads — we deliver real results. With over a decade of experience, cutting-edge targeting technology, and a dedicated team working around the clock, we are committed to helping your business connect with the right customers at the right time. No long-term contracts, no hidden fees, and no wasted budget — just high-quality leads that drive real growth for your business every single day.
            </p>
          </div>
        </section>

      </main>

    </div>
  );
}