'use client'; // Next.js Client Component

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AutoInsurancePage() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/thank-you'); 
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans overflow-x-hidden">
      <main>
        
        {/* ==================== 1. HERO SECTION ==================== */}
        <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                Exclusive Auto Insurance <br />Leads Delivered to You!
              </h1>
              
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                Are you searching for a seamless way to grow your auto insurance business? Finding it challenging to secure consistent, high-converting prospects? Stop wasting budget on unverified contacts and start connecting with drivers who need your policies right now.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                The auto insurance industry is fiercely competitive. Finding and closing leads takes absolute dedication, constant follow-ups, and a lot of patience. This drains your team's energy, diverts your focus from selling, and leaves you wondering where the next client will come from.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                AffCall is here to change that. We make it easy for you to scale your business predictably by linking you with high-intent inbound calls from car owners actively looking for auto insurance coverage.
              </p>
            </div>

            <div className="lg:col-span-5 bg-orange-500 p-6 sm:p-8 rounded-2xl shadow-lg text-white">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Company Name" 
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 text-sm focus:outline-none"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 text-sm focus:outline-none"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 text-sm focus:outline-none"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Phone Number" 
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 text-sm focus:outline-none"
                  />
                </div>
                <div>
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-lg transition cursor-pointer text-sm"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

          </div>
        </section>

        {/* ==================== 2. WHY AUTO INSURANCE LEADS BOOST YOUR BUSINESS (VIDEO ADDED) ==================== */}
        <section className="py-20 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="relative w-full h-[350px] lg:h-[420px] bg-gray-200 rounded-2xl overflow-hidden flex items-center justify-center border border-gray-300">
              <video 
                src="/say.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
                Why Auto Insurance Leads Boost Your Business?
              </h2>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                Auto insurance is more competitive than ever, with every carrier, provider, and broker vying for a slice of the pie. Capturing the attention of drivers requires targeted strategies. When you buy auto insurance leads, you are skipping the guesswork and acquiring verified contacts ready to purchase policies.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Quality leads eliminate the most demanding part of running an insurance agency: prospecting. Instead of spending hours chasing cold leads, you can focus on building relationships with qualified prospects — maximizing your conversion rate and growing your bottom line.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                This is exactly what we offer. Our strategic campaigns target high-intent drivers actively searching for insurance. We provide exclusive, high-intent call and web leads designed to give your agency a competitive edge.
              </p>
            </div>

          </div>
        </section>

        {/* ==================== 3. WHAT SETS OUR AUTO INSURANCE CALL LEADS APART? ==================== */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
                What Sets Our Auto Insurance Call Leads Apart?
              </h2>
              
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold mt-1">✔</span>
                  <p><strong>Exclusive and Qualified Calls:</strong> Unlike traditional lead gen models where you pay per click or form fill, our pay-per-call model connects you directly with high-intent prospects who are ready to talk about their coverage needs.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold mt-1">✔</span>
                  <p><strong>Connect with Motivated Prospects:</strong> No more waiting for web leads to respond to emails. Our callers are actively looking to secure auto policies right now, making them far more likely to convert.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold mt-1">✔</span>
                  <p><strong>Scalable Campaigns:</strong> Whether you want to scale up or pull back, our system adapts to your business goals. Every campaign comes with advanced tracking and analytics giving you complete visibility and predictable performance month after month.</p>
                </div>
              </div>
            </div>

            <div className="relative w-full h-[350px] lg:h-[400px] bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center p-4">
              <Image src="/sv1.jpeg" alt="Dashboard & Analytics" fill className="object-contain p-4" />
            </div>

          </div>
        </section>

        {/* ==================== 4. HOW WE DELIVER QUALITY AUTO INSURANCE LEADS? ==================== */}
        <section className="py-20 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="relative w-full h-[350px] lg:h-[400px] bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center p-4 order-2 lg:order-1">
              <Image src="/sv3.jpeg" alt="Quality Leads Delivery" fill className="object-contain p-4" />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
                How We Deliver Quality Auto Insurance Leads?
              </h2>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                Our approach is designed to help your team close policies and grow your business. Our digital campaigns attract drivers actively looking for auto coverage. We capture leads through precise targeting and route them directly to your phone.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Inbound calls are the golden ticket for insurance agencies. When a driver has an immediate need, they pick up the phone. These consumers are actively searching for an auto insurance coverage and are ready to be enrolled immediately.
              </p>
            </div>

          </div>
        </section>

        {/* ==================== 5. PREMIUM PHONE CALLS & WEB LEADS, READY FOR YOU! ==================== */}
        <section className="bg-blue-50/60 py-20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
                Premium Phone Calls & Web Leads, Ready for You!
              </h2>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                AffCall provides top-tier performance marketing services to insurance agents and agencies across the country. Our real-time call and web lead generation engine ensures you never run out of prospects.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Forget wasting advertising dollars on unverified contacts. Our goal is to connect you with car owners looking for comprehensive and affordable protection.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Partner with AffCall today and enjoy a steady stream of high-intent auto insurance leads delivered straight to your phone.
              </p>
            </div>

            <div className="relative w-full h-[350px] lg:h-[400px] bg-white rounded-2xl overflow-hidden flex items-center justify-center p-4 shadow-sm border border-gray-100">
              <Image src="/sv2.jpeg" alt="Premium Calls and Web Leads" fill className="object-contain p-4" />
            </div>

          </div>
        </section>

        {/* ==================== 6. BENEFITS OF WORKING WITH US ==================== */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Benefits of Working With Us</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center space-y-4">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto font-bold">📞</div>
              <h3 className="text-xl font-bold text-gray-900">Volume</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We deliver consistent lead flow tailored to your service categories. Partner with AffCall today and enjoy high-volume inbound calls.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center space-y-4">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto font-bold">📊</div>
              <h3 className="text-xl font-bold text-gray-900">Call Tracking</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                All customers are tracked accurately with call recordings, duration, and metrics so you always get measurable results.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center space-y-4">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto font-bold">🤝</div>
              <h3 className="text-xl font-bold text-gray-900">Support</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our dedicated support team is available around the clock to assist you with campaign adjustments and lead queries.
              </p>
            </div>

          </div>
        </section>

        {/* ==================== 7. FAQ SECTION ==================== */}
        <section className="bg-gray-50/50 py-20 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">FAQ</h2>

            <div className="space-y-4">
              
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button 
                  onClick={() => toggleFaq(0)}
                  className="w-full px-6 py-4 text-left font-bold text-sm sm:text-base flex justify-between items-center cursor-pointer"
                >
                  <span>What types of leads do AffCall provide?</span>
                  <span className="text-orange-500">{openFaq === 0 ? '−' : '+'}</span>
                </button>
                {openFaq === 0 && (
                  <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    AffCall provides exclusive high-intent phone call leads and web leads across a wide range of industries including auto insurance, home services, and HVAC.
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button 
                  onClick={() => toggleFaq(1)}
                  className="w-full px-6 py-4 text-left font-bold text-sm sm:text-base flex justify-between items-center cursor-pointer"
                >
                  <span>How does the pay-per-call model work?</span>
                  <span className="text-orange-500">{openFaq === 1 ? '−' : '+'}</span>
                </button>
                {openFaq === 1 && (
                  <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    You only pay for genuine inbound phone calls that meet your specified duration and geographic criteria. No monthly retainers or hidden fees.
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button 
                  onClick={() => toggleFaq(2)}
                  className="w-full px-6 py-4 text-left font-bold text-sm sm:text-base flex justify-between items-center cursor-pointer"
                >
                  <span>How do you ensure the quality of your leads?</span>
                  <span className="text-orange-500">{openFaq === 2 ? '−' : '+'}</span>
                </button>
                {openFaq === 2 && (
                  <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    We use rigorous filtering and advanced call verification techniques to screen out spam and low-intent callers before they reach your business phone.
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button 
                  onClick={() => toggleFaq(3)}
                  className="w-full px-6 py-4 text-left font-bold text-sm sm:text-base flex justify-between items-center cursor-pointer"
                >
                  <span>How do I get started with AffCall?</span>
                  <span className="text-orange-500">{openFaq === 3 ? '−' : '+'}</span>
                </button>
                {openFaq === 3 && (
                  <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    Simply fill out the form above with your company details or contact our support team directly at <a href="mailto:info@affcall.com" className="text-orange-500 underline">info@affcall.com</a> to set up your campaign.
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>

      </main>
    </div>
  );
}