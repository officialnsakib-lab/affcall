'use client'; // Next.js Client Component

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LocksmithLeadsPage() {
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
                Unlock a Steady Stream of Locksmith Leads!
              </h1>
              
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Tired of losing time on vague and low-converting leads? AffCall provides locksmiths and security professionals with exclusive, high-intent leads and live phone calls directly connecting you with homeowners, drivers, and property managers experiencing lockouts, broken keys, and security upgrade needs ready for immediate service.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Our platform eliminates the guessing game. With hyper-local SEO-driven lead generation, precision PPC campaigns, and instant live call routing, we connect you with residential and commercial customers dealing with emergency lockouts and urgent locksmith requests. Stop wasting time chasing cold inquiries or competing for shared leads.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                AffCall serves as a powerful bridge, giving local locksmith contractors exclusive web leads and live telephone calls. Scale your business with predictable client acquisition, and leave the hassle of advertising to us so you can focus on servicing locksmith projects and growing your local brand. Partner with AffCall today to accelerate your business growth and maximize your return on ad spend.
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

        {/* ==================== 2. EVERY LOCKOUT IS AN OPPORTUNITY — ARE YOU ANSWERING? (Updated with Animation Video) ==================== */}
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
                Every Lockout Is an Opportunity — Are You Answering?
              </h2>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                Lockout situations and security needs pop up unexpectedly at any time, and when keys are lost or locks fail, people require an immediate solution. From emergency car lockouts and home lock changes to commercial security repairs, customers urgently search online for trustworthy local locksmiths. If your business isn't visible at the exact moment of search, you are losing valuable jobs to your competitors.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Our lead-routing system quickly matches customers needing locksmith services with verified local security and lock professionals. We eliminate slow response times and ensure you get exclusive, high-intent leads that convert into profitable locksmith jobs. Your local customers are already searching—this helps guarantee whether they call you or another provider.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                This is where we come in. We take precise targeting and performance-driven campaigns to deliver exclusive, pre-screened locksmith leads that are ready to convert. Skip the guesswork of traditional advertising. Focus on handling lock and key work while we handle the complicated setup of generating high-intent traffic for your business.
              </p>
            </div>

          </div>
        </section>

        {/* ==================== 3. FAST LEADS FOR A FAST-MOVING INDUSTRY! ==================== */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
                Fast Leads for a Fast-Moving Industry!
              </h2>
              
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold mt-1">✔</span>
                  <p><strong>Protect your marketing budget:</strong> Invest in high-quality traffic that produces real revenue and service calls. We filter out low-intent clicks and send only genuine customers looking for locksmith services.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold mt-1">✔</span>
                  <p><strong>Secure exclusive contacts:</strong> Stop sharing your leads with dozens of competing contractors. Our exclusive lead routing system ensures every customer connects with you alone, dramatically increasing conversion rates.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold mt-1">✔</span>
                  <p><strong>Scale predictably:</strong> Grow your locksmith business month after month with a steady influx of high-intent clients looking to unlock doors and secure properties without straining your marketing budget.</p>
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
              <img src="/sv1.jpeg" alt="Dashboard Teamwork Illustration" className="w-full h-full object-cover" />
            </div>

          </div>
        </section>

        {/* ==================== 4. HOW WE GET LOCKED-IN CUSTOMERS CALLING YOU? ==================== */}
        <section className="bg-gray-50/50 py-20 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image sv2.jpeg */}
            <div className="relative w-full h-[350px] lg:h-[400px] rounded-2xl overflow-hidden flex items-center justify-center border border-gray-300 order-2 lg:order-1">
              <img src="/sv2.jpeg" alt="Mobile Lead Generation Illustration" className="w-full h-full object-cover" />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
                How We Get Locked-In Customers Calling You?
              </h2>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                We combine the power of high-converting web forms and direct telephone calls to connect you with prospective locksmith customers. By utilizing targeted digital campaigns, search engine positioning, and optimized keyword targeting, we capture individuals actively seeking local emergency locksmiths.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>Inbound Calls:</strong> Phone calls are a guaranteed way to quickly convert customers. When a user calls via our managed tracking numbers, our intelligent platform routes the call instantly to your dispatch or office team. No waiting periods, no unverified cold forms — just live conversations with high-intent people locked out and needing a locksmith right now.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                We handle the entire lead routing pipeline so your locksmith technicians can focus on opening doors, replacing locks, and expanding your local service area.
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
                Our approach is simple: We bring you high-intent customers looking for immediate locksmith services. With real-time delivery and strict compliance filters, you can connect directly with people actively looking to hire a locksmith contractor.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                We handle the acquisition process so your team can focus on closing service jobs and building long-term customer trust. Say goodbye to low-converting leads and bloated ad management expenses.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Scale your locksmith business with predictable, recurring service leads that convert into high-value customer lifetime value.
              </p>
            </div>

            {/* Image sv3.jpeg */}
            <div className="relative w-full h-[350px] lg:h-[400px] bg-white rounded-2xl overflow-hidden flex items-center justify-center border border-blue-200 shadow-sm">
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
                Enjoy transparent and cost-effective pricing tailored to your business goals. Only pay for high-intent traffic and verified calls that drive real business value.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center space-y-4">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto font-bold">📞</div>
              <h3 className="text-xl font-bold text-gray-900">Volume</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Scale your dispatch pipeline seamlessly with steady, consistent inbound calls tailored to your target service areas and locksmith service categories.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center space-y-4">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto font-bold">📊</div>
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
                    AffCall provides exclusive, high-intent live phone call leads and web leads across locksmith service categories, including emergency lockouts, residential lock changes, automotive key programming, and commercial security upgrades.
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
                    We use rigorous filtering, intent verification, and validation checks to block spam callers, ensuring that only qualified customers reach your locksmith business.
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
                    Fill out the lead form at the top of the page with your company's information or email our support staff directly to configure your target locksmith campaign parameters.
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