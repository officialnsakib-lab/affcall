'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AffCallLandingPage() {
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
                Stop the Drip — Start Getting Exclusive Plumber Leads!
              </h1>
              
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                Tired of waiting around for emergency calls? Stop the drain on your time and marketing budget with exclusive, high-intent plumbing leads and live phone calls directly connecting you with homeowners facing pipe bursts, clogged drains, and urgent plumbing issues ready for immediate service.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                The plumbing industry is constantly moving, and with high demand comes intense competition. When a pipe bursts or a water heater fails, property owners need an instant fix. Our platform ensures your plumbing business stays at the forefront of search results, routing homeowners with urgent plumbing problems directly to your dispatch team.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                AffCall serves as a powerful bridge, giving local plumbers fully exclusive web and telephone leads. Scale your business and leave the hassle of advertising to us so you can focus on servicing residential and commercial plumbing projects.
              </p>
            </div>

            {/* Right Form Box */}
            <div className="lg:col-span-5 bg-[#f97316] p-6 sm:p-8 rounded-2xl shadow-lg text-white">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Company Name" 
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 text-sm focus:outline-none placeholder-gray-400"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 text-sm focus:outline-none placeholder-gray-400"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 text-sm focus:outline-none placeholder-gray-400"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Phone Number" 
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 text-sm focus:outline-none placeholder-gray-400"
                  />
                </div>
                <div>
                  <button 
                    type="submit" 
                    className="w-full bg-[#0066ff] hover:bg-blue-700 text-white font-bold py-3.5 rounded-lg transition cursor-pointer text-sm shadow-md"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>

          </div>
        </section>

        {/* ==================== 2. SECTION TWO (Updated with say.mp4 Video) ==================== */}
        <section className="bg-gray-50/50 py-20 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="relative w-full h-[350px] lg:h-[420px] rounded-2xl overflow-hidden flex items-center justify-center border border-gray-300 bg-black shadow-sm">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover"
              >
                <source src="/say.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
                Plumbing Emergencies Never Wait — Do Your Leads?
              </h2>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                Plumbing disasters can strike at any moment, turning a normal day into a frantic search for professional help. From leaking pipes and clogged drains to overflowing toilets, property owners require immediate assistance. If your business isn't visible at the exact moment of search, you lose high-value jobs to competitors.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Homeowners and facility managers need reliable operators, and our lead-routing system ensures you connect with qualified customers instantly. We eliminate slow response times and guarantee that every lead is matched to your specific expertise.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                We handle the complex digital targeting and performance-driven campaigns to deliver pre-screened plumbing leads. Focus on fixing leaks and growing your plumbing business while we handle the acquisition pipeline.
              </p>
            </div>

          </div>
        </section>

        {/* ==================== 3. SECTION THREE (Updated with sv1.jpeg) ==================== */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
                No More Waiting — Just a Full Schedule of Plumbing Jobs!
              </h2>
              
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start space-x-3">
                  <span className="text-[#f97316] font-bold mt-1">✔</span>
                  <p><strong>Protect your marketing budget:</strong> Invest in high-intent traffic that turns into real service calls. We filter out low-intent clicks so you only pay for genuine homeowners seeking plumbing solutions.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-[#f97316] font-bold mt-1">✔</span>
                  <p><strong>Secure exclusive contacts:</strong> Stop sharing leads with dozens of contractors. Our exclusive routing system ensures every customer connects with you alone, boosting conversions.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-[#f97316] font-bold mt-1">✔</span>
                  <p><strong>Scale predictably:</strong> Grow your plumbing company month after month with a consistent influx of high-value plumbing jobs.</p>
                </div>
              </div>
            </div>

            <div className="relative w-full h-[350px] lg:h-[400px] rounded-2xl overflow-hidden flex items-center justify-center border border-gray-300">
              <img src="/sv1.jpeg" alt="Teamwork Illustration" className="w-full h-full object-cover" />
            </div>

          </div>
        </section>

        {/* ==================== 4. SECTION FOUR (Updated with sv2.jpeg) ==================== */}
        <section className="bg-gray-50/50 py-20 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="relative w-full h-[350px] lg:h-[400px] rounded-2xl overflow-hidden flex items-center justify-center border border-gray-300 order-2 lg:order-1">
              <img src="/sv2.jpeg" alt="Mobile Lead Generation Illustration" className="w-full h-full object-cover" />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
                How We Keep Your Plumbing Leads Flowing Non-Stop?
              </h2>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                We combine the power of high-converting web forms and direct telephone calls to connect you with prospective plumbing customers. By utilizing targeted digital campaigns, search engine positioning, and optimized keyword targeting, we capture individuals actively seeking local plumbers.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>Inbound Calls:</strong> Phone calls are a guaranteed way to quickly convert customers. When a user calls via our managed tracking numbers, our intelligent platform routes the call instantly to your dispatch team. No waiting periods, no unverified cold forms — just live conversations with high-intent people dealing with plumbing emergencies right now.
              </p>
            </div>

          </div>
        </section>

        {/* ==================== 5. SECTION FIVE (Updated with sv3.jpeg) ==================== */}
        <section className="bg-[#eaf1fb] py-20 border-y border-blue-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
                Premium Phone Calls & Web Leads, Ready For You!
              </h2>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                Our approach is simple: We bring you high-intent customers looking for immediate plumbing services. With real-time delivery and strict compliance filters, you can connect directly with people actively looking to hire a professional plumber.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                We handle the acquisition process so your team can focus on closing service jobs and building long-term customer trust. Say goodbye to low-converting leads and bloated ad management expenses.
              </p>
            </div>

            <div className="relative w-full h-[350px] lg:h-[400px] bg-white rounded-2xl overflow-hidden flex items-center justify-center border border-blue-200 shadow-sm">
              <img src="/sv3.jpeg" alt="Analytics Graph Illustration" className="w-full h-full object-cover" />
            </div>

          </div>
        </section>

        {/* ==================== 6. BENEFITS SECTION ==================== */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Benefits of Working With Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center space-y-4">
              <div className="w-12 h-12 bg-orange-100 text-[#f97316] rounded-full flex items-center justify-center mx-auto font-bold">💳</div>
              <h3 className="text-xl font-bold text-gray-900">Prices</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Enjoy transparent and cost-effective pricing tailored to your business goals. Only pay for high-intent traffic and verified calls that drive real business value.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center space-y-4">
              <div className="w-12 h-12 bg-orange-100 text-[#f97316] rounded-full flex items-center justify-center mx-auto font-bold">📞</div>
              <h3 className="text-xl font-bold text-gray-900">Volume</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Scale your dispatch pipeline seamlessly with steady, consistent inbound calls tailored to your target service areas and plumbing categories.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center space-y-4">
              <div className="w-12 h-12 bg-orange-100 text-[#f97316] rounded-full flex items-center justify-center mx-auto font-bold">📊</div>
              <h3 className="text-xl font-bold text-gray-900">Call Tracking</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Gain complete transparency with advanced call recordings, exact lead duration, conversion stats, and performance metrics to track your business's exact ROI.
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
                  <span>What types of leads do you offer—AffCall provider?</span>
                  <span className="text-gray-400 font-normal">{openFaq === 0 ? '∧' : '∨'}</span>
                </button>
                {openFaq === 0 && (
                  <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    AffCall provides exclusive, high-intent live phone call leads and web leads across plumbing service categories, including emergency leak repairs, drain cleaning, water heater installations, and general plumbing maintenance.
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button 
                  onClick={() => toggleFaq(1)}
                  className="w-full px-6 py-4 text-left font-bold text-sm sm:text-base flex justify-between items-center cursor-pointer"
                >
                  <span>How does the pay-per-call model work?</span>
                  <span className="text-gray-400 font-normal">{openFaq === 1 ? '∧' : '∨'}</span>
                </button>
                {openFaq === 1 && (
                  <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    You only pay for genuine inbound phone calls that meet your specified duration threshold and geographic criteria. No wasteful retainers or unexpected costs.
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button 
                  onClick={() => toggleFaq(2)}
                  className="w-full px-6 py-4 text-left font-bold text-sm sm:text-base flex justify-between items-center cursor-pointer"
                >
                  <span>How do you ensure the quality of your leads?</span>
                  <span className="text-gray-400 font-normal">{openFaq === 2 ? '∧' : '∨'}</span>
                </button>
                {openFaq === 2 && (
                  <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    We use rigorous filtering, intent verification, and validation checks to block spam callers, ensuring that only qualified customers reach your plumbing business.
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button 
                  onClick={() => toggleFaq(3)}
                  className="w-full px-6 py-4 text-left font-bold text-sm sm:text-base flex justify-between items-center cursor-pointer"
                >
                  <span>How do I get started with AffCall?</span>
                  <span className="text-gray-400 font-normal">{openFaq === 3 ? '∧' : '∨'}</span>
                </button>
                {openFaq === 3 && (
                  <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    Fill out the lead form at the top of the page with your company's information or email our support staff directly to configure your target plumbing campaign parameters.
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