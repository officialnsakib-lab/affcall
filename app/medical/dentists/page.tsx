'use client'; // Next.js Client Component

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function DentalPatientsPage() {
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
                Fill Your Dental Chair With High-Quality Patient Leads!
              </h1>
              
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                With a proven track record for the dental industry, AffCall provides high-converting local leads and phone calls to connect dental practices directly with patients in urgent need of oral care. Say goodbye to slow marketing and bloated ad expenses, and step into a steady stream of exclusive, high-intent dental patients.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Our platform eliminates the guessing game. With SEO-driven lead generation, precision PPC campaigns, and instant live call routing, we connect you with individuals dealing with tooth pain, routine checkups, and cosmetic procedures ready to book appointments right away. Stop wasting time chasing cold inquiries.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                AffCall serves as a powerful bridge, giving local clinics exclusive, high-intent web leads and live telephone calls. Scale your dental practice with reliable, predictable client acquisition, and leave the hassle of advertising to us so you can focus on treating patients and growing your practice. Partner with AffCall today to accelerate your practice growth and maximize your return on ad spend.
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

        {/* ==================== 2. EVERY SMILE NEEDS A DENTIST — MAKE YOURS THE FIRST CALL! (Updated with Animation Video) ==================== */}
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
                Every Smile Needs a Dentist — Make Yours the First Call!
              </h2>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                Oral health is a fundamental component of overall well-being, and millions of adults search online daily for emergency dental care, routine checkups, cosmetic improvements, and preventative dental work. From sudden toothaches to annual cleanings, local patients need trustworthy dental clinics to secure a healthy smile. If your practice isn't visible at the exact moment of search, you are losing valuable patients to your competitors.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Our lead-routing system quickly matches patients needing dental care with verified local dentists. We eliminate slow response times and ensure you get exclusive, high-intent leads that convert into regular appointments. Your local patients are already searching—this helps guarantee whether they choose you or another local provider.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                This is where we come in. We take precise targeting and performance-driven campaigns to deliver exclusive, pre-screened dental leads that are ready to book. Skip the guesswork of traditional advertising. Focus on treating patients while we handle the complicated setup of generating high-intent traffic for your practice.
              </p>
            </div>

          </div>
        </section>

        {/* ==================== 3. MORE NEW PATIENTS, FULLER SCHEDULE, HEALTHIER PRACTICE! ==================== */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
                More New Patients, Fuller Schedule, Healthier Practice!
              </h2>
              
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold mt-1">✔</span>
                  <p><strong>Protect your marketing budget:</strong> Invest in high-quality traffic that produces real revenue and patient care. We filter out low-intent clicks and send only genuine patients looking for dental services.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold mt-1">✔</span>
                  <p><strong>Secure exclusive contacts:</strong> Stop sharing your leads with dozens of competing dental clinics. Our exclusive lead routing system ensures every patient connects with you alone, dramatically increasing conversion rates.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold mt-1">✔</span>
                  <p><strong>Scale predictably:</strong> Grow your dental practice month after month with a steady influx of high-intent patients looking to book dental procedures without straining your marketing budget.</p>
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

        {/* ==================== 4. HOW WE BRING NEW PATIENTS STRAIGHT TO YOUR PRACTICE? ==================== */}
        <section className="bg-gray-50/50 py-20 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image sv2.jpeg */}
            <div className="relative w-full h-[350px] lg:h-[400px] rounded-2xl overflow-hidden flex items-center justify-center border border-gray-300 order-2 lg:order-1">
              <img src="/sv2.jpeg" alt="Mobile Lead Generation Illustration" className="w-full h-full object-cover" />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
                How We Bring New Patients Straight to Your Practice?
              </h2>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                We combine the power of high-converting web forms and direct telephone calls to connect you with prospective dental patients. By utilizing targeted digital campaigns, search engine positioning, and optimized keyword targeting, we capture individuals actively seeking local dental treatments.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>INBOUND CALLS:</strong> When a user calls via our managed tracking numbers, our intelligent platform routes the call instantly to your front desk or clinic. No waiting periods, no unverified cold forms — just live conversations with high-intent patients looking for dental care right now.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                We handle the entire lead routing pipeline so your team can focus on consulting patients, performing dental procedures, and expanding your practice.
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
                Our approach is simple: We bring you high-intent patients looking for immediate dental care. With real-time delivery and strict compliance filters, you can connect directly with individuals actively looking to hire a dentist.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                We handle the acquisition process so your team can focus on closing appointments and building long-term patient trust. Say goodbye to low-converting leads and bloated ad management expenses.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Scale your dental practice with predictable, recurring patient leads that convert into high-value patient lifetime value.
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
                Enjoy transparent and cost-effective pricing tailored to your clinic's goals. Only pay for high-intent traffic and verified calls that drive real business value.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center space-y-4">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto font-bold">📞</div>
              <h3 className="text-xl font-bold text-gray-900">Volume</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Scale your appointment pipeline seamlessly with steady, consistent inbound calls tailored to your target geographic zones and dental treatments.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center space-y-4">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto font-bold">📊</div>
              <h3 className="text-xl font-bold text-gray-900">Call Tracking</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Gain complete transparency with advanced call recordings, exact lead duration, conversion stats, and performance metrics to track your clinic's exact ROI.
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
                    AffCall provides exclusive, high-intent live phone call leads and web leads across dental care categories, including general dentistry, emergency dental procedures, cosmetic dentistry, implants, and cleanings.
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
                    We use rigorous filtering, intent verification, and validation checks to block spam callers, ensuring that only qualified patients reach your dental clinic.
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
                    Fill out the lead form at the top of the page with your clinic's information or email our support staff directly to configure your target dental campaign parameters.
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