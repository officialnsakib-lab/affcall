'use client'; // Next.js Client Component

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function FlightBookingPage() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Track form data state
  const [formData, setFormData] = useState({
    companyName: '',
    fullName: '',
    email: '',
    phone: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Form submit handler with API fetch
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        router.push('/thank-you');
      } else {
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('Failed to submit the form. Please check your connection.');
    } finally {
      setLoading(false);
    }
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
                Get Exclusive Flight Booking Leads Delivered to You!
              </h1>
              
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                Tired of competing for the same scattered leads that never convert into actual bookings? AffCall takes the guesswork out of you, providing travel agencies and air ticketing providers with exclusive, high-intent leads and live phone calls directly connecting you with travelers ready to book flights instantly.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                The travel industry is experiencing a massive resurgence, with millions of people searching online daily for flights, vacation packages, and business travel. If your agency isn't visible at the exact moment of search, you are losing valuable business to your competitors. From family getaways to corporate trips, AffCall delivers reliable incoming leads. We handle the heavy lifting so you can focus on managing bookings, delivering exceptional customer service, and scaling your travel agency to new heights—while we drive the steady stream of incoming inquiries.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                With our data-driven approach, you can scale your travel business with predictable and profitable client acquisition, eliminating the overhead of costly traditional marketing. Partner with AffCall today to accelerate your growth and maximize your return on ad spend with Flight Booking Phone Calls & Web Leads.
              </p>
            </div>

            {/* Right Form Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-orange-500 to-orange-600 p-6 sm:p-8 rounded-2xl shadow-xl text-white">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="bg-red-600 text-white p-3 rounded-lg text-sm">
                    {errorMessage}
                  </div>
                )}
                <div>
                  <input 
                    type="text" 
                    placeholder="Company Name" 
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white/95 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white/95 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white/95 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Phone Number" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white/95 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-lg transition-colors cursor-pointer text-sm shadow-md disabled:opacity-50"
                  >
                    {loading ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>

          </div>
        </section>

        {/* ==================== 2. MILLIONS ARE READY TO FLY — ARE YOU BOOKING THEM? ==================== */}
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
                Millions Are Ready to Fly — Are You Booking Them?
              </h2>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                Each year, a massive boom in travel has millions of people searching online daily for flights, vacation packages, and air ticketing services. From holiday getaways to business trips, travelers and locals need trustworthy travel agencies to secure a smooth itinerary. If your agency isn't visible at the exact moment of search, you are losing valuable business to your competitors.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Our lead-routing system quickly connects travelers needing flight booking assistance with verified travel agencies. We eliminate slow response times and ensure you get exclusive, high-intent leads that convert into profitable bookings. Your customers are already searching—this helps guarantee whether they choose you or another provider.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                This is where we come in. We take precise targeting and performance-driven campaigns to deliver exclusive, pre-screened flight booking leads that are ready to convert. Skip the guesswork of traditional advertising. Focus on managing your bookings while we handle the complicated setup of generating high-intent traffic for your practice.
              </p>
            </div>

          </div>
        </section>

        {/* ==================== 3. REAL TRAVELERS, REAL BOOKINGS, REAL REVENUE! ==================== */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
                Real Travelers, Real Bookings, Real Revenue!
              </h2>
              
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold mt-1">✔</span>
                  <p><strong className="text-gray-900">Protect your marketing budget:</strong> Invest in high-quality traffic that produces real revenue. We filter out low-intent clicks and send only genuine buyers looking for flight ticketing and booking services.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold mt-1">✔</span>
                  <p><strong className="text-gray-900">Secure exclusive contacts:</strong> Stop sharing your leads with dozens of competing travel agencies. Our exclusive lead routing system ensures every customer connects with you alone, dramatically increasing conversion rates.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 font-bold mt-1">✔</span>
                  <p><strong className="text-gray-900">Scale predictably:</strong> Grow your travel agency month after month with a steady influx of high-intent travelers and flyers looking to secure flight bookings without straining your marketing budget.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors shadow-sm">
                  Get Started Now
                </Link>
              </div>
            </div>

            {/* Image sv1.jpeg */}
            <div className="relative w-full h-[350px] lg:h-[400px] rounded-2xl overflow-hidden flex items-center justify-center border border-gray-300 shadow-sm">
              <img src="/sv1.jpeg" alt="Dashboard Teamwork Illustration" className="w-full h-full object-cover" />
            </div>

          </div>
        </section>

        {/* ==================== 4. HOW WE SEND READY-TO-BOOK TRAVELERS YOUR WAY? ==================== */}
        <section className="bg-gray-50/50 py-20 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image sv2.jpeg */}
            <div className="relative w-full h-[350px] lg:h-[400px] rounded-2xl overflow-hidden flex items-center justify-center border border-gray-300 shadow-sm order-2 lg:order-1">
              <img src="/sv2.jpeg" alt="Mobile Lead Generation Illustration" className="w-full h-full object-cover" />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight">
                How We Send Ready-to-Book Travelers Your Way?
              </h2>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                We combine the power of high-converting web forms and direct telephone calls to connect you with prospective flight booking customers. By utilizing targeted digital campaigns, search engine positioning, and optimized keyword targeting, we capture individuals actively seeking flight tickets and travel services.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-gray-900">INBOUND CALLS:</strong> When a user calls via our managed tracking numbers, our intelligent platform routes the call instantly to your travel agents. No waiting periods, no unverified cold forms — just live conversations with high-intent flyers looking to book a flight right now.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                We handle the entire lead routing pipeline so your team can focus on managing itineraries, ticketing flights, and expanding your travel agency reach.
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
                Our approach is simple: We bring you high-intent travelers looking for immediate flight booking assistance. With real-time delivery and strict compliance filters, you can connect directly with customers actively looking to book flights.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                We handle the acquisition process so your team can focus on closing bookings and building long-term client trust. Say goodbye to low-converting leads and bloated ad management expenses.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Scale your travel agency with predictable, recurring booking leads that convert into high-value customer lifetime value.
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
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto font-bold">💳</div>
              <h3 className="text-xl font-bold text-gray-900">Prices</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Enjoy transparent and cost-effective pricing tailored to your agency's goals. Only pay for high-intent traffic and verified calls that drive real business value.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto font-bold">📞</div>
              <h3 className="text-xl font-bold text-gray-900">Volume</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Scale your ticketing pipeline seamlessly with steady, consistent inbound calls tailored to your target travel routes and flight categories.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center space-y-4 hover:shadow-md transition-shadow">
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
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <button 
                  onClick={() => toggleFaq(0)}
                  className="w-full px-6 py-4 text-left font-bold text-sm sm:text-base flex justify-between items-center cursor-pointer text-gray-900 hover:bg-gray-50/50 transition-colors"
                >
                  <span>What types of leads do you offer—AffCall provider?</span>
                  <span className="text-orange-500 text-lg">{openFaq === 0 ? '−' : '+'}</span>
                </button>
                {openFaq === 0 && (
                  <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    AffCall provides exclusive, high-intent live phone call leads and web leads across flight booking categories, including international travel, domestic flights, corporate travel itineraries, and vacation packages.
                  </div>
                )}
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <button 
                  onClick={() => toggleFaq(1)}
                  className="w-full px-6 py-4 text-left font-bold text-sm sm:text-base flex justify-between items-center cursor-pointer text-gray-900 hover:bg-gray-50/50 transition-colors"
                >
                  <span>How does the pay-per-call model work?</span>
                  <span className="text-orange-500 text-lg">{openFaq === 1 ? '−' : '+'}</span>
                </button>
                {openFaq === 1 && (
                  <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    You only pay for genuine inbound phone calls that meet your specified duration threshold and criteria. No wasteful retainers or unexpected costs.
                  </div>
                )}
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <button 
                  onClick={() => toggleFaq(2)}
                  className="w-full px-6 py-4 text-left font-bold text-sm sm:text-base flex justify-between items-center cursor-pointer text-gray-900 hover:bg-gray-50/50 transition-colors"
                >
                  <span>How do you ensure the quality of your leads?</span>
                  <span className="text-orange-500 text-lg">{openFaq === 2 ? '−' : '+'}</span>
                </button>
                {openFaq === 2 && (
                  <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    We use rigorous filtering, intent verification, and validation checks to block spam callers, ensuring that only qualified travelers reach your travel agency.
                  </div>
                )}
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <button 
                  onClick={() => toggleFaq(3)}
                  className="w-full px-6 py-4 text-left font-bold text-sm sm:text-base flex justify-between items-center cursor-pointer text-gray-900 hover:bg-gray-50/50 transition-colors"
                >
                  <span>How do I get started with AffCall?</span>
                  <span className="text-orange-500 text-lg">{openFaq === 3 ? '−' : '+'}</span>
                </button>
                {openFaq === 3 && (
                  <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    Fill out the lead form at the top of the page with your agency's information or email our support staff directly to configure your target flight booking campaign parameters.
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