'use client'; // Next.js Client Component

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function HomeownersInsurancePage() {
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
                Exclusive Homeowners Insurance Leads Delivered to You!
              </h1>
              
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                Are you looking for a reliable way to grow your homeowners insurance business? Finding new policyholders can be a constant challenge, and traditional marketing often yields low-intent prospects. AffCall connects you with active homeowners who are ready to secure coverage right now—helping you scale your agency without wasting time or ad budget.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Our platform delivers live inbound phone calls and high-intent web leads directly from homeowners actively searching for better coverage, new policies, or competitive quotes for their properties. Stop paying for unverified contacts and start closing more policies with our performance-driven lead generation engine.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Whether you specialize in high-value properties, standard home protection, or policy bundles, we deliver exclusive, high-intent callers to your phone. Partner with AffCall today to accelerate your agency's growth and maximize your return on ad spend.
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
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-lg transition cursor-pointer text-sm shadow-md"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

          </div>
        </section>

        {/* ==================== 2. ARE YOU THERE WHEN HOMEOWNERS SEARCH? (With Animation Video) ==================== */}
        <section className="bg-gray-50/50 py-20 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Custom Animation Video Box */}
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
                Are You There When Homeowners Search?
              </h2>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                Securing a policy is one of the biggest financial decisions a property owner will ever make. That's why thousands of homeowners turn to search engines every day to find trustworthy insurance agents and agencies. When a homeowner needs instant coverage updates, policy renewals, or quotes for a new property, they expect immediate answers. If your agency isn't visible at the moment of search, you are missing out on high-value business to your competitors.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                With our pay-per-call system, we take the heavy lifting out of customer acquisition by connecting you directly with ready-to-convert insurance shoppers. Our platform routes live calls from local property owners straight to your phone. Your ideal customers are already searching — this helps guarantee whether they choose you or a competing agency.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                We eliminate costly ad agency fees, long pending baseline campaigns, and unpredictable lead generation. Instead, we deliver pre-screened insurance prospects ready to discuss rates and policy options. Focus on writing policies and closing business, while we handle the complicated setup of generating high-intent traffic for your practice.
              </p>
            </div>

          </div>
        </section>

        {/* ==================== 3. REAL HOMEOWNERS. REAL RESULTS. ==================== */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
                Real Homeowners. Real Results.
              </h2>
              
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold mt-1">✔</span>
                  <p><strong>To protect your trading:</strong> Protect your marketing budget by investing in qualified traffic that produces real revenue. We filter out low-intent clicks and send only genuine buyers looking for policy advice or coverage.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold mt-1">✔</span>
                  <p><strong>Secure exclusive contacts:</strong> Stop sharing your leads with dozens of competing agencies. Our exclusive lead routing system ensures every customer connects with you alone, dramatically increasing conversion rates.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold mt-1">✔</span>
                  <p><strong>Scale predictably:</strong> Grow your insurance portfolio month after month with a steady influx of high-intent homeowners looking to secure, switch, or upgrade their insurance policies without straining your marketing budget.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg text-sm transition">
                  Get Started Now
                </Link>
              </div>
            </div>

            {/* Image sv1.jpeg */}
            <div className="relative w-full h-[350px] lg:h-[400px] rounded-2xl overflow-hidden flex items-center justify-center border border-gray-300">
              <img src="/sv1.jpeg" alt="Real Homeowners Illustration" className="w-full h-full object-cover" />
            </div>

          </div>
        </section>

        {/* ==================== 4. HOW WE FIND YOUR PERFECT LEADS? ==================== */}
        <section className="bg-gray-50/50 py-20 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image sv2.jpeg */}
            <div className="relative w-full h-[350px] lg:h-[400px] rounded-2xl overflow-hidden flex items-center justify-center border border-gray-300 order-2 lg:order-1">
              <img src="/sv2.jpeg" alt="Mobile Lead Generation Illustration" className="w-full h-full object-cover" />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
                How We Find Your Perfect Leads?
              </h2>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                Marketing experiments cost a lot, and web-based marketing can be overwhelming if you don't have the right tracking systems in place. AffCall uses highly targeted PPC campaigns, multi-channel search engine optimization, and localized intent matching to position your insurance brand right where prospective homeowners look when they are ready to switch providers or secure coverage.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>INBOUND CALLS:</strong> When a homeowner searches for competitive insurance options and clicks our secure call channels, our intelligent routing platform matches them with your agency instantly. No waiting periods, no unverified cold forms — just live conversations with high-intent homeowners who need policy quotes immediately.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                We manage the entire lead delivery pipeline from start to finish, ensuring your agency receives exclusive, high-value insurance inquiries while you maintain complete visibility over your return on investment.
              </p>
            </div>

          </div>
        </section>

        {/* ==================== 5. PREMIUM PHONE CALLS & WEB LEADS, READY FOR YOU! ==================== */}
        <section className="bg-blue-50/80 py-20 border-y border-blue-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
                Premium Phone Calls & Web Leads, Ready For You!
              </h2>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                Our approach is straightforward: We bring you high-intent homeowners looking for competitive insurance quotes. With real-time delivery and strict compliance filters, you can connect directly with customers actively comparing options or looking to bind a policy today.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                We handle the acquisition process so your team can focus on closing policies and building long-term client relationships. Say goodbye to low-converting leads and high ad management expenses.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Scale your agency with predictable, recurring policy leads that convert into high-value customer lifetime value.
              </p>
            </div>

            {/* Image sv3.jpeg */}
            <div className="relative w-full h-[350px] lg:h-[400px] rounded-2xl overflow-hidden flex items-center justify-center border border-blue-200 shadow-sm">
              <img src="/sv3.jpeg" alt="Analytics and Graph Illustration" className="w-full h-full object-cover" />
            </div>

          </div>
        </section>

        {/* ==================== 6. BENEFITS OF WORKING WITH US ==================== */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Benefits of Working With Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center space-y-4">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto font-bold">💳</div>
              <h3 className="text-xl font-bold text-gray-900">Prices</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Enjoy transparent and cost-effective pricing tailored to your agency's goals. Only pay for high-intent traffic and verified calls that drive real business value to your desk.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center space-y-4">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto font-bold">📞</div>
              <h3 className="text-xl font-bold text-gray-900">Volume</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Scale your policy pipeline seamlessly with steady, consistent inbound calls tailored to your target geographic areas and insurance line offerings.
              </p>
            </div>

            {/* Card 3 */}
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
              
              {/* FAQ Item 1 */}
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
                    AffCall provides exclusive, high-intent live phone call leads and web leads across a wide range of insurance sectors, including homeowners, auto, life, commercial property, and general insurance coverage.
                  </div>
                )}
              </div>

              {/* FAQ Item 2 */}
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

              {/* FAQ Item 3 */}
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
                    We use rigorous filtering, intent verification, and automated validation filters to block spam callers, ensuring that only qualified property owners reach your insurance agents.
                  </div>
                )}
              </div>

              {/* FAQ Item 4 */}
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
                    Fill out the lead form at the top of the page with your agency's information or email our support staff directly to configure your target campaign parameters.
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