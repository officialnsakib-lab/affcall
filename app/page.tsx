'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<'Insurance' | 'Home Services' | 'Medical'>('Insurance');

  const generateCallsData = [
    {
      title: "Search",
      desc: "We work with partners using Google and Bing ads, plus SEO, to drive consumer-initiated inbound phone calls.",
      iconSrc: "/x6.png" 
    },
    {
      title: "Display Ads",
      desc: "We place display ads on relevant third-party sites as image, banner, and text ads to attract users.",
      iconSrc: "/x7.png"
    },
    {
      title: "Social Media",
      desc: "We produce consumer-initiated inbound calls through Facebook, Instagram, Snapchat, and other social platforms.",
      iconSrc: "/x1.png"
    },
    {
      title: "TV & Radio",
      desc: "Our publishers leverage TV, Radio to generate high-quality consumer-initiated inbound calls effectively.",
      iconSrc: "/x2.png"
    },
    {
      title: "Native Ads",
      desc: "Native advertising, known as sponsored content, lets our publishers promote ads on relevant websites to drive calls.",
      iconSrc: "/x3.png",
      link: true
    },
    {
      title: "Transfers",
      desc: "Publishers buy opt-in data or generate leads on websites. Agents qualify each lead before transferring it to buyers.",
      iconSrc: "/x4.png",
      link: true
    },
    {
      title: "Web Form to SMS",
      desc: "Publishers drive traffic to Basile via Google, Bing, social, native, display ads. Consumers fill forms, then receive SMS",
      iconSrc: "/x5.png",
      link: true
    }
  ];

  const verticalsData = {
    Insurance: [
      { title: "Auto Insurance", href: "/insurance/auto", icon: "/v1.png" },
      { title: "Health Insurance", href: "/insurance/health", icon: "/v2.png" },
      { title: "Homeowners Insurance", href: "/insurance/homeowners", icon: "/v3.png" },
      { title: "ACA Insurance", href: "/insurance/aca", icon: "/v4.png" },
      { title: "Medicare Insurance", href: "/insurance/medicare", icon: "/v5.png" },
      { title: "Final Expense Insurance", href: "insurance/final-expense", icon: "/v6.png" },
    ],
    "Home Services": [
      { title: "Appliance Repair Pros", href: "/home-services/appliance-repair", icon: "/s.jpeg" },
      { title: "Electricians", href: "/home-services/electricians", icon: "/ss.jpeg" },
      { title: "HVAC Contractors", href: "/home-services/hvac", icon: "/s3.jpeg" },
      { title: "Landscapers", href: "/home-services/landscapers", icon: "/s4.jpeg" },
      { title: "Locksmiths", href: "/home-services/locksmiths", icon: "/s5.jpeg" },
      { title: "Pest Control", href: "/home-services/pest-control", icon: "/s6.jpeg" },
      { title: "Plumbers", href: "/home-services/plumbers", icon: "/s7.jpeg" },
      { title: "Roofers", href: "/home-services/roofers", icon: "/s8.jpeg" },
    ],
    Medical: [
      { title: "Chiropractors", href: "/medical/chiropractors", icon: "/cx1.jpeg" },
      { title: "Dentists", href: "/medical/dentists", icon: "/cx2.jpeg" },
      { title: "Drug & Alcohol Addiction Treatment", href: "/medical/addiction-treatment", icon: "/cx3.jpeg" },
    ]
  };

  const faqData = [
    {
      question: "Is Pay-Per-Call better than traditional digital leads?",
      answer: "With Pay-Per-Call, you're not chasing leads – they call you. Unlike form leads or clicks, inbound calls have higher intent, faster close rates, and better ROI. You're speaking directly to motivated customers in real time."
    },
    {
      question: "Can I scale my campaigns as I grow?",
      answer: "Yes! Whether you want 10 calls a day or 500, we can scale with your demand. Our network and traffic sources are optimized to grow your campaign without sacrificing call quality."
    },
    {
      question: "Do I get exclusive calls or shared leads?",
      answer: "All calls from AFFCALL are 100% exclusive to you. We do not resell or recycle calls. You get full control over the customer interaction from the very first ring."
    },
    {
      question: "How do I track performance and ROI?",
      answer: "You'll have access to a real-time dashboard showing call recordings, durations, caller info, and conversion metrics. We believe in full transparency – so you always know where your budget is going and what's working."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % generateCallsData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [generateCallsData.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % generateCallsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + generateCallsData.length) % generateCallsData.length);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans overflow-x-hidden">
      
      <style>{`
        @keyframes pulseGlow {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; filter: drop-shadow(0 0 10px rgba(249, 115, 22, 0.6)); }
          100% { transform: scale(0.95); opacity: 0.8; }
        }
        .map-animation {
          animation: pulseGlow 4s infinite ease-in-out;
        }
      `}</style>

      {/* ==================== MAIN CONTENT ==================== */}
      <main>
        
        {/* 1. Hero Section */}
        <section className="relative bg-cover bg-center bg-no-repeat py-12 lg:py-20" style={{ backgroundImage: `url('Sakib.jpeg')` }}>
          <div className="absolute inset-0 bg-white/40 lg:bg-white/30"></div>

          <div className="relative max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
            
            <div className="lg:w-1/2 space-y-6 z-10 backdrop-blur-md bg-white/75 p-6 lg:p-8 rounded-2xl shadow-md border border-white/60">
              
              {/* Ringba Tag with Image */}
              <div className="bg-orange-50 text-orange-600 font-semibold px-4 py-2 rounded-full text-xs uppercase tracking-wider inline-flex items-center space-x-2 border border-orange-100 shadow-sm">
                <span>Powered by</span>
                <div className="relative w-16 h-4 inline-block">
                  <Image src="/t.webp" alt="Ringba Logo" fill className="object-contain" />
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                Enterprise Pay Per <br />
                Call <span className="text-orange-500">Infrastructure.</span>
              </h1>

              <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                Scale customer acquisition with <strong>Pay Per Call Program</strong>, intelligent routing, and real-time performance insights.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-500 flex-shrink-0 mt-2"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Pay Per Call</h4>
                    <p className="text-xs text-gray-700">Inbound & outbound call campaigns with real-time routing & Quality scoring.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-500 flex-shrink-0 mt-2"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Cost-Per-Acquisition (CPA)</h4>
                    <p className="text-xs text-gray-700">Data-Driven Campaigns Designed for Conversions & ROI.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center relative w-full z-10">
              <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-black">
                <video autoPlay loop muted playsInline className="w-full h-auto object-cover">
                  <source src="/sakib.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* 2. How Affcall Delivers Results */}
        <section className="bg-gray-50 py-12 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">How <span className="text-orange-500">affcall</span> Delivers Results</h2>
            <p className="text-gray-500 text-sm mb-10">A simple process built for performance and scale.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:bg-orange-50/50 hover:border-orange-200 hover:shadow-xl cursor-pointer">
                <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                  <Image src="/i1.png" alt="Create Campaign Icon" fill className="object-contain" />
                </div>
                <h4 className="font-bold text-gray-800 text-sm mb-1">Create Campaign</h4>
                <p className="text-xs text-gray-500">Set your targeting, call rules, routing, and budget</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:bg-orange-50/50 hover:border-orange-200 hover:shadow-xl cursor-pointer">
                <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                  <Image src="/hu.png" alt="We Connect Calls Icon" fill className="object-contain" />
                </div>
                <h4 className="font-bold text-gray-800 text-sm mb-1">We Connect Calls</h4>
                <p className="text-xs text-gray-500">Our network connects you with high-intent callers in real-time.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:bg-orange-50/50 hover:border-orange-200 hover:shadow-xl cursor-pointer">
                <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                  <Image src="/hu2.png" alt="Calls Tracked in Ringba Icon" fill className="object-contain" />
                </div>
                <h4 className="font-bold text-gray-800 text-sm mb-1">Calls Are Tracked in Ringba</h4>
                <p className="text-xs text-gray-500">Every call is tracked, recorded, and verified on the Ringba platform.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:bg-orange-50/50 hover:border-orange-200 hover:shadow-xl cursor-pointer">
                <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                  <Image src="/hu3.png" alt="Analyze & Optimize Icon" fill className="object-contain" />
                </div>
                <h4 className="font-bold text-gray-800 text-sm mb-1">Analyze & Optimize</h4>
                <p className="text-xs text-gray-500">Use real-time reports and insights to optimize performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Cards Grid Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-center text-2xl lg:text-3xl font-extrabold text-gray-900 mb-16">
            Call High-Intent Callers, Real-Time Call Tracking, 24/7 Call Flows.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 relative group">
              <div>
                <div className="w-full h-36 relative mb-6 flex items-center justify-center">
                  <Image src="/hi1.jpeg" alt="Pay for Qualified Calls" fill className="object-contain" />
                </div>
                <h3 className="text-xl font-bold text-orange-500 mb-3 text-center">Pay for Qualified Calls</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-center">
                  Stop wasting budget on unqualified traffic. Only pay for calls that are qualified and valuable.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-50 text-center">
                <Link href="#" className="text-orange-500 font-bold text-xs inline-flex items-center space-x-1 hover:underline">
                  <span>Learn more</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 relative group">
              <div>
                <div className="w-full h-36 relative mb-6 flex items-center justify-center">
                  <Image src="/rt.jpeg" alt="Dedicated client services team" fill className="object-contain" />
                </div>
                <h3 className="text-xl font-bold text-orange-500 mb-3 text-center">Dedicated client services team</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-center">
                  Your dedicated account managers are always here to assist you and drive your campaigns forward.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-50 text-center">
                <Link href="#" className="text-orange-500 font-bold text-xs inline-flex items-center space-x-1 hover:underline">
                  <span>Learn more</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 relative group">
              <div>
                <div className="w-full h-36 relative mb-6 flex items-center justify-center">
                  <Image src="/hi.jpeg" alt="Actionable reporting" fill className="object-contain" />
                </div>
                <h3 className="text-xl font-bold text-orange-500 mb-3 text-center">Actionable reporting</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-center">
                  Get real-time insights with advanced call tracking and analytics to make smart, data-driven decisions.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-50 text-center">
                <Link href="#" className="text-orange-500 font-bold text-xs inline-flex items-center space-x-1 hover:underline">
                  <span>Learn more</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Predictable Revenue Section */}
        <section className="bg-gray-50 py-16 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center border flex flex-col items-center">
                <div className="relative w-12 h-12 mb-3">
                  <Image src="/i1.png" alt="Call" fill className="object-contain" />
                </div>
                <span className="text-xs font-bold">Exclusive Phone Calls</span>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm text-center border flex flex-col items-center">
                <div className="relative w-12 h-12 mb-3">
                  <Image src="/i3.png" alt="Target" fill className="object-contain" />
                </div>
                <span className="text-xs font-bold">Multiple Campaigns</span>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm text-center border flex flex-col items-center">
                <div className="relative w-12 h-12 mb-3">
                  <Image src="/4e.png" alt="Shield" fill className="object-contain" />
                </div>
                <span className="text-xs font-bold">Pay Per Results Only</span>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm text-center border flex flex-col items-center">
                <div className="relative w-12 h-12 mb-3">
                  <Image src="/2i.png" alt="Chart" fill className="object-contain" />
                </div>
                <span className="text-xs font-bold">Realtime Reporting</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Turn Phone Calls Into Predictable Revenue.</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                We connect you with consumers actively looking for services through ready-to-buy live inbound calls, directly connected to your sales team.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                You can scale inbound performance with zero upfront costs, turning clicks into paying customers.
              </p>
            </div>
          </div>
        </section>

        {/* 5. OUR Verticals */}
        <section className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">OUR Verticals</h2>
          
          <div className="flex justify-center space-x-6 sm:space-x-10 mb-12 border-b border-gray-200 pb-4 max-w-lg mx-auto">
            {(['Insurance', 'Home Services', 'Medical'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-base sm:text-lg font-semibold transition-all pb-1 relative cursor-pointer ${
                  activeTab === tab ? 'text-gray-900 border-b-2 border-orange-500' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {verticalsData[activeTab].map((vertical, index) => (
              <Link 
                key={index} 
                href={vertical.href}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center hover:bg-orange-50/50 hover:border-orange-200 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="relative w-14 h-14 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Image src={vertical.icon} alt={vertical.title} fill className="object-contain" />
                </div>
                <span className="text-xs font-semibold text-gray-700 group-hover:text-orange-600 text-center">
                  {vertical.title}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* 6. How We Generate Calls Slider Section */}
        <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <h2 className="text-center text-3xl lg:text-4xl font-extrabold text-orange-500 mb-16">
              How We Generate Calls
            </h2>

            <div className="relative flex items-center justify-center">
              <button 
                onClick={prevSlide}
                className="absolute left-0 z-20 bg-white border border-gray-200 text-gray-800 p-3 rounded-full shadow-md hover:bg-orange-500 hover:text-white transition-all cursor-pointer -ml-4 lg:-ml-6"
              >
                ◀
              </button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
                {[0, 1, 2].map((offset) => {
                  const itemIndex = (currentSlide + offset) % generateCallsData.length;
                  const data = generateCallsData[itemIndex];

                  return (
                    <div 
                      key={itemIndex} 
                      className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 flex flex-col justify-between relative transform transition-all duration-500 hover:-translate-y-1"
                    >
                      <div className="absolute -top-6 left-8 bg-white p-3 rounded-2xl shadow-md border border-gray-100 w-12 h-12 flex items-center justify-center">
                        <Image src={data.iconSrc} alt={data.title} width={24} height={24} className="object-contain" />
                      </div>

                      <div className="mt-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{data.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {data.desc}
                        </p>
                      </div>

                      {data.link && (
                        <div className="mt-6 pt-4 border-t border-gray-50">
                          <span className="text-orange-500 font-bold text-xs flex items-center space-x-1 cursor-pointer hover:underline">
                            <span>Learn More</span>
                            <span>→</span>
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <button 
                onClick={nextSlide}
                className="absolute right-0 z-20 bg-white border border-gray-200 text-gray-800 p-3 rounded-full shadow-md hover:bg-orange-500 hover:text-white transition-all cursor-pointer -mr-4 lg:-mr-6"
              >
                ▶
              </button>
            </div>

            <div className="flex justify-center items-center space-x-2 mt-10">
              {generateCallsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? 'w-6 bg-orange-500' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Publishers & Advertisers Cards + Banner */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col justify-between hover:shadow-2xl transition-all">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">For Publishers</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  Monetize Your Traffic with High-Payout Call Campaigns.
                </p>
              </div>
              <div>
                <Link href="https://www.affcall.com/from/affiliate" className="inline-flex items-center space-x-2 border-2 border-orange-500 text-orange-500 font-bold px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-all text-sm">
                  <span>GET OFFERS</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col justify-between hover:shadow-2xl transition-all">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">For Advertisers</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  Get High-Intent Calls That Turn Into Paying Customers.
                </p>
              </div>
              <div>
                <Link href="https://www.affcall.com/from/marketer" className="inline-flex items-center space-x-2 border-2 border-orange-500 text-orange-500 font-bold px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-all text-sm">
                  <span>GET QUALIFIED CALLS</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-orange-500 rounded-2xl p-8 lg:p-10 shadow-lg flex flex-col lg:flex-row items-center justify-between text-white">
            <div className="mb-6 lg:mb-0 space-y-2 text-center lg:text-left">
              <h2 className="text-2xl lg:text-3xl font-extrabold">Start Receiving High-Intent Calls</h2>
              <p className="text-sm opacity-90 max-w-xl">
                Launch pay-per-call campaigns and only pay for qualified call that match your criteria.
              </p>
            </div>
            <div>
              <Link href="#" className="bg-white text-orange-600 font-bold px-8 py-3.5 rounded-full shadow-md hover:bg-gray-100 transition-all inline-flex items-center space-x-2 text-sm">
                <span>LAUNCH CAMPAIGN</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 7. FAQ's & Animated Map Video Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-center text-3xl font-bold text-orange-500 mb-12">FAQ's</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              {faqData.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={index} 
                    className={`rounded-lg p-5 shadow-sm transition-colors duration-200 ${
                      isOpen ? 'bg-orange-500 text-white' : 'bg-white text-gray-800 border border-gray-200'
                    }`}
                  >
                    <div 
                      className="flex justify-between items-center cursor-pointer" 
                      onClick={() => toggleFaq(index)}
                    >
                      <h4 className="font-bold text-sm">{faq.question}</h4>
                      <span>{isOpen ? '▲' : '▼'}</span>
                    </div>
                    {isOpen && (
                      <p className="text-xs mt-3 leading-relaxed opacity-90">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="lg:col-span-5 flex justify-center items-center bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="relative w-full h-72 rounded-xl overflow-hidden map-animation">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-xl">
                  <source src="/map-animation.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}