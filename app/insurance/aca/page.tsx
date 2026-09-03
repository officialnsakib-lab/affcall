'use client'; // Next.js Client Component

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AcaInsurancePage() {
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
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                Your Pipeline of ACA Insurance Leads Starts Here!
              </h1>
              
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                Stop wasting your marketing budget on inefficient ad campaigns and low-quality data. AffCall connects ACA insurance agents and brokers directly with qualified prospects actively seeking affordable health insurance coverage right now.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                The ACA insurance market is one of the fastest-growing sectors in the health insurance industry, and stiff competition means searching for affordable health coverage can be exhausting. For agents and agencies, securing a steady stream of incoming policies is key to growing your practice and staying competitive in the market.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Our platform delivers exclusive, high-intent live phone calls and web leads instantly to your business. We handle the heavy lifting so you can focus on closing health policies and scaling your agency to new heights.
              </p>
            </div>

            {/* Right Form Box */}
            <div className="lg:col-span-5 bg-orange-500 p-6 sm:p-8 rounded-2xl shadow-lg text-white">
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
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-lg transition cursor-pointer text-sm shadow-md"
                  >
                    Submit
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

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
                Millions Are Shopping for ACA — Are You Capturing Them?
              </h2>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                The ACA marketplace has millions of active citizens browsing for plans. For thousands of Americans every year, finding access to affordable health insurance is vital. With premium subsidies and open enrollment special enrollment seasons, there is a growing surge of traffic and searches on the decay of ACA marketplace options.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Local health insurance brokers and agencies face an uphill battle fighting for quality leads. If your agency isn't visible when prospects are actively considering ACA plans and looking for immediate help, quick claims to the state exchanges and direct info are lost to competitors.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                We take care of the heavy lifting. Instead of relying on clumsy ad campaigns, we match you directly with ACA consumer leads so you can skip the tedious forms, and easily email, shop, or call customers for immediate enrollments and maximum conversion over your investments.
              </p>
            </div>

          </div>
        </section>

        {/* ==================== 3. SECTION THREE (Updated with sv1.jpeg) ==================== */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
                Qualified ACA Prospects, Zero Wasted Budget.
              </h2>
              
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold mt-1">✔</span>
                  <p><strong>Stop wasting marketing budget:</strong> Stop paying for low-intent clicks that never convert into bound policies. Our pay-per-call model guarantees you only connect with genuine callers ready to review health coverage.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold mt-1">✔</span>
                  <p><strong>Exclusive contacts:</strong> Stop sharing your leads with dozens of competing agents. Our exclusive lead delivery pipeline ensures every customer connects only with you, maximizing your conversion rates.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold mt-1">✔</span>
                  <p><strong>Scale your practice:</strong> Grow your health insurance book of business month after month with stable, compliant inbound customer flows without straining your marketing budget or team capacity.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg text-sm transition shadow-md">
                  Get Started Now
                </Link>
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
                How We Deliver Your ACA Insurance Leads?
              </h2>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                We combine the power of high-converting web forms and direct telephone calls to connect you with prospective health policy buyers. By utilizing targeted digital campaigns, search engine positioning, and optimized keyword targeting, we capture individuals actively seeking health coverage under the Affordable Care Act.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>INBOUND CALLS:</strong> When a user calls via our managed tracking numbers, our intelligent platform routes the call instantly to your agents. No waiting periods, no unverified cold forms — just live conversations with high-intent consumers looking for health insurance policies right now.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                We handle the entire lead routing pipeline so your team can focus on consulting health plans, verifying subsidies, and expanding your portfolio.
              </p>
            </div>

          </div>
        </section>

        {/* ==================== 5. SECTION FIVE (Updated with sv3.jpeg) ==================== */}
        <section className="bg-blue-50/80 py-20 border-y border-blue-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
                Premium Phone Calls & Web Leads, Ready For You!
              </h2>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                Our approach is simple: We bring you high-intent health insurance shoppers looking for immediate guidance. With real-time delivery and strict compliance filters, you can connect directly with consumers actively comparing marketplace health plans.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                We handle the acquisition process so your team can focus on closing enrollments and building long-term client trust. Say goodbye to low-converting leads and bloated ad management expenses.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Scale your health agency with predictable, recurring ACA leads that convert into high-value customer lifetime value.
              </p>
            </div>

            <div className="relative w-full h-[350px] lg:h-[400px] bg-white rounded-2xl overflow-hidden flex items-center justify-center border border-blue-200 shadow-sm">
              <img src="/sv3.jpeg" alt="Analytics Graph Illustration" className="w-full h-full object-cover" />
            </div>

          </div>
        </section>

        {/* ==================== 6. BENEFITS OF WORKING WITH US ==================== */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Benefits of Working With Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center space-y-4">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto font-bold">💳</div>
              <h3 className="text-xl font-bold text-gray-900">Prices</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Enjoy transparent and cost-effective pricing tailored to your health agency's goals. Only pay for high-intent traffic and verified calls that drive real business value.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center space-y-4">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto font-bold">📞</div>
              <h3 className="text-xl font-bold text-gray-900">Volume</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Scale your enrollment pipeline seamlessly with steady, consistent inbound calls tailored to your target geographic states and health plan offerings.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center space-y-4">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto font-bold">📊</div>
              <h3 className="text-xl font-bold text-gray-900">Call Tracking</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Gain complete transparency with advanced call recordings, exact lead duration, conversion stats, and performance metrics to track your agency's exact ROI.
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
                  <span className="text-orange-500">{openFaq === 0 ? '−' : '+'}</span>
                </button>
                {openFaq === 0 && (
                  <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    AffCall provides exclusive, high-intent live phone call leads and web leads across health insurance lines, including ACA marketplace plans, short-term health insurance, and supplemental coverage.
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
                  <span className="text-orange-500">{openFaq === 2 ? '−' : '+'}</span>
                </button>
                {openFaq === 2 && (
                  <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    We use rigorous filtering, intent verification, and compliance check protocols to block spam callers, ensuring that only qualified consumers reach your licensed health insurance agents.
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
                    Fill out the lead form at the top of the page with your agency's information or email our support staff directly to configure your target health insurance campaign parameters.
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