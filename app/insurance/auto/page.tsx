'use client'; // Next.js Client Component

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // লিংক ব্যবহারের জন্য নেক্সট জেসের Link ইমপোর্ট করা হয়েছে
import { useRouter } from 'next/navigation'; // পেজ রিডাইরেক্ট করার জন্য

export default function ApplianceRepairPage() {
  const router = useRouter();
  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // ফর্ম সাবমিট হলে কোথায় যাবে তার হ্যান্ডলার (এখানে আপনার কাঙ্ক্ষিত লিংক বসান)
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // উদাহরণস্বরূপ সাবমিটের পর Thank You পেজে রিডাইরেক্ট করতে পারেন:
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
                Get Appliance Repair Calls <br />Flooding In Today!
              </h1>
              
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                Find out how appliance service providers are scaling their businesses with our exclusive real-time call and web leads. Stop wasting money on unverified contacts and start connecting with customers who need your repairs right now.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Whether you specialize in refrigerator repairs, washer and dryer fixing, dishwasher maintenance, or oven servicing, we deliver high-intent callers directly to your phone.
              </p>
            </div>

            {/* Right Form Box (এখানে ফর্ম সাবমিট করলে নির্দিষ্ট লিংকে যাবে) */}
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
                    className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3.5 rounded-lg transition cursor-pointer text-sm"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

          </div>
        </section>

        {/* ==================== 2. BROKEN APPLIANCES CAN'T WAIT (Video Added) ==================== */}
        <section className="bg-gray-50/50 py-20 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Video Added */}
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

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
                Broken Appliances Can’t Wait — <br />Neither Should You!
              </h2>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                Homeowners drop everything when their refrigerator breaks down, when a washing machine floods their laundry room, or when a kitchen stove stops working. They need immediate help, and they search for local appliance repair technicians online.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Our app-based lead routing system quickly matches homeowners needing urgent repairs with verified local pros. We eliminate slow response times and ensure you get exclusive, high-intent leads that convert into profitable jobs.
              </p>
            </div>

          </div>
        </section>

        {/* ==================== 3. REAL REPAIR JOBS SECTION (Image sv1.jpeg Added) ==================== */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
                Real Repair Jobs. Real Homeowners. Real Revenue.
              </h2>
              
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold mt-1">✔</span>
                  <p><strong>Stop wasting your marketing budget:</strong> Stop paying for clicks and form submissions that never turn into actual jobs. Our pay-per-call model guarantees you only pay for genuine conversations.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold mt-1">✔</span>
                  <p><strong>Work smarter:</strong> Connect directly with customers who are ready to book service right now. No bidding wars or competing with dozens of other contractors.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold mt-1">✔</span>
                  <p><strong>Grow your business:</strong> Scale your appliance repair company predictably month after month with steady, reliable customer flow.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg text-sm transition">
                  Get Started Now
                </Link>
              </div>
            </div>

            {/* Image sv1.jpeg Added */}
            <div className="relative w-full h-[350px] lg:h-[400px] bg-gray-200 rounded-2xl overflow-hidden flex items-center justify-center border border-gray-300">
              <Image src="/sv1.jpeg" alt="Real Repair Jobs" fill className="object-cover" />
            </div>

          </div>
        </section>

        {/* ==================== 4. HOW WE KEEP YOUR PHONE RINGING (Image sv2.jpeg Added) ==================== */}
        <section className="bg-gray-50/50 py-20 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image sv2.jpeg Added */}
            <div className="relative w-full h-[350px] lg:h-[400px] bg-gray-200 rounded-2xl overflow-hidden flex items-center justify-center border border-gray-300 order-2 lg:order-1">
              <Image src="/sv2.jpeg" alt="Phone Ringing Leads" fill className="object-cover" />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
                How We Keep Your Phone Ringing With Repair Leads?
              </h2>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                It is common that when a household appliance breaks down, the first thing people do is grab their phones and search for local help. Our targeted campaigns position your business right at the top of search engine results when local customers are ready to hire.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                We manage the entire lead generation pipeline so you can focus on fixing appliances and growing your revenue.
              </p>
            </div>

          </div>
        </section>

        {/* ==================== 5. BENEFITS OF WORKING WITH US (Image sv3.jpeg or Feature enhancement) ==================== */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Benefits of Working With Us</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center space-y-4">
                <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto font-bold">📞</div>
                <h3 className="text-xl font-bold text-gray-900">Volume</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We deliver consistent lead flow tailored to your service categories. Partner with AffCall today and enjoy high-volume inbound calls.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center space-y-4">
                <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto font-bold">📊</div>
                <h3 className="text-xl font-bold text-gray-900">Call Tracking</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  All customers are tracked accurately with call recordings, duration, and metrics so you always get measurable results.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center space-y-4">
                <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto font-bold">🤝</div>
                <h3 className="text-xl font-bold text-gray-900">Support</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our dedicated support team is available around the clock to assist you with campaign adjustments and lead queries.
                </p>
              </div>

            </div>

            {/* Right Image sv3.jpeg Added */}
            <div className="lg:col-span-5 relative w-full h-[350px] lg:h-[400px] bg-gray-200 rounded-2xl overflow-hidden flex items-center justify-center border border-gray-300">
              <Image src="/sv3.jpeg" alt="Premium Calls and Web Leads" fill className="object-cover" />
            </div>

          </div>
        </section>

        {/* ==================== 6. FAQ SECTION ==================== */}
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
                  <span>What types of leads do you offer?</span>
                  <span className="text-orange-500">{openFaq === 0 ? '−' : '+'}</span>
                </button>
                {openFaq === 0 && (
                  <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    AffCall provides exclusive high-intent phone call leads and web leads across a wide range of industries including appliance repair, home services, and HVAC.
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
                    You only pay for genuine inbound phone calls that meet your specified duration and geographic criteria. No monthly retainers or hidden fees.
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
                    We use rigorous filtering and advanced call verification techniques to screen out spam and low-intent callers before they reach your business phone.
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