"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left Side: Logo and Navigation grouped together */}
          <div className="flex items-center gap-10">
            {/* Custom Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <Image 
                  src="/logo.png" 
                  alt="Affcall Logo" 
                  width={140} 
                  height={45} 
                  className="object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              
              {/* 1. Insurance Dropdown */}
              <div 
                className="relative py-2"
                onMouseEnter={() => setActiveDropdown("insurance")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1.5 text-gray-900 hover:text-amber-500 font-semibold text-base transition">
                  Insurance 
                  <span className={`text-xs transition-transform duration-200 ${activeDropdown === "insurance" ? "rotate-180 text-amber-500" : ""}`}>▼</span>
                </button>
                
                {activeDropdown === "insurance" && (
                  <div className="absolute top-full left-0 w-80 bg-white shadow-2xl rounded-2xl p-4 border border-gray-100 mt-1">
                    <div className="flex items-center gap-3 pb-3 mb-2 border-b border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 text-lg">🛡️</div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Insurance</h4>
                        <p className="text-xs text-gray-500">High-intent insurance calls</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      {[
                        { name: "Auto Insurance", href: "/insurance/auto", icon: "🚗" },
                        { name: "Health Insurance", href: "/insurance/health", icon: "📄" },
                        { name: "Homeowners Insurance", href: "/insurance/homeowners", icon: "🏠" },
                        { name: "ACA Insurance", href: "/insurance/aca", icon: "🤝" },
                        { name: "Medicare Insurance", href: "/insurance/medicare", icon: "➕" },
                        { name: "Final Expense Insurance", href: "/insurance/final-expense", icon: "💼" },
                      ].map((item, idx) => (
                        <Link key={idx} href={item.href} className="flex items-center justify-between p-2 hover:bg-amber-50/60 rounded-xl text-sm text-gray-700 hover:text-amber-600 transition group">
                          <div className="flex items-center gap-2.5">
                            <span className="text-amber-500 text-base">{item.icon}</span>
                            <span className="font-medium">{item.name}</span>
                          </div>
                          <span className="text-gray-300 group-hover:text-amber-500 group-hover:translate-x-0.5 transition">›</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 2. Home Services Dropdown */}
              <div 
                className="relative py-2"
                onMouseEnter={() => setActiveDropdown("homeservices")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1.5 text-gray-900 hover:text-amber-500 font-semibold text-base transition">
                  Home Services 
                  <span className={`text-xs transition-transform duration-200 ${activeDropdown === "homeservices" ? "rotate-180 text-amber-500" : ""}`}>▼</span>
                </button>
                
                {activeDropdown === "homeservices" && (
                  <div className="absolute top-full left-0 w-80 bg-white shadow-2xl rounded-2xl p-4 border border-gray-100 mt-1 max-h-[450px] overflow-y-auto">
                    <div className="flex items-center gap-3 pb-3 mb-2 border-b border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 text-lg">🏠</div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Home Services</h4>
                        <p className="text-xs text-gray-500">Connect with local service pros</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      {[
                        { name: "Appliance Repair Pros", href: "/home-services/appliance-repair", icon: "🧺" },
                        { name: "Electricians", href: "/home-services/electricians", icon: "⚡" },
                        { name: "HVAC Contractors", href: "/home-services/hvac", icon: "❄️" },
                        { name: "Landscapers", href: "/home-services/landscapers", icon: "🌳" },
                        { name: "Locksmiths", href: "/home-services/locksmiths", icon: "🔑" },
                        { name: "Pest Control", href: "/home-services/pest-control", icon: "🐛" },
                        { name: "Plumbers", href: "/home-services/plumbers", icon: "🔧" },
                        { name: "Roofers", href: "/home-services/roofers", icon: "🏠" },
                      ].map((item, idx) => (
                        <Link key={idx} href={item.href} className="flex items-center justify-between p-2 hover:bg-amber-50/60 rounded-xl text-sm text-gray-700 hover:text-amber-600 transition group">
                          <div className="flex items-center gap-2.5">
                            <span className="text-amber-500 text-base">{item.icon}</span>
                            <span className="font-medium">{item.name}</span>
                          </div>
                          <span className="text-gray-300 group-hover:text-amber-500 group-hover:translate-x-0.5 transition">›</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 3. Medical Dropdown */}
              <div 
                className="relative py-2"
                onMouseEnter={() => setActiveDropdown("medical")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1.5 text-gray-900 hover:text-amber-500 font-semibold text-base transition">
                  Medical 
                  <span className={`text-xs transition-transform duration-200 ${activeDropdown === "medical" ? "rotate-180 text-amber-500" : ""}`}>▼</span>
                </button>
                
                {activeDropdown === "medical" && (
                  <div className="absolute top-full left-0 w-80 bg-white shadow-2xl rounded-2xl p-4 border border-gray-100 mt-1">
                    <div className="flex items-center gap-3 pb-3 mb-2 border-b border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 text-lg">➕</div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Medical</h4>
                        <p className="text-xs text-gray-500">Qualified medical calls</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      {[
                        { name: "Chiropractors", href: "/medical/chiropractors", icon: "🦴" },
                        { name: "Dentists", href: "/medical/dentists", icon: "🦷" },
                        { name: "Drug & Alcohol Addiction Treatment", href: "/medical/addiction-treatment", icon: "💊" },
                      ].map((item, idx) => (
                        <Link key={idx} href={item.href} className="flex items-center justify-between p-2 hover:bg-amber-50/60 rounded-xl text-sm text-gray-700 hover:text-amber-600 transition group">
                          <div className="flex items-center gap-2.5">
                            <span className="text-amber-500 text-base">{item.icon}</span>
                            <span className="font-medium">{item.name}</span>
                          </div>
                          <span className="text-gray-300 group-hover:text-amber-500 group-hover:translate-x-0.5 transition">›</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 4. Travel Dropdown */}
              <div 
                className="relative py-2"
                onMouseEnter={() => setActiveDropdown("travel")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1.5 text-gray-900 hover:text-amber-500 font-semibold text-base transition">
                  Travel 
                  <span className={`text-xs transition-transform duration-200 ${activeDropdown === "travel" ? "rotate-180 text-amber-500" : ""}`}>▼</span>
                </button>
                
                {activeDropdown === "travel" && (
                  <div className="absolute top-full left-0 w-80 bg-white shadow-2xl rounded-2xl p-4 border border-gray-100 mt-1">
                    <div className="flex items-center gap-3 pb-3 mb-2 border-b border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 text-lg">✈️</div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Travel</h4>
                        <p className="text-xs text-gray-500">Qualified travel calls</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      {[
                        { name: "Flights booking", href: "/travel/flights", icon: "✈️" },
                        { name: "Car Booking", href: "/travel/cars", icon: "🚗" },
                      ].map((item, idx) => (
                        <Link key={idx} href={item.href} className="flex items-center justify-between p-2 hover:bg-amber-50/60 rounded-xl text-sm text-gray-700 hover:text-amber-600 transition group">
                          <div className="flex items-center gap-2.5">
                            <span className="text-amber-500 text-base">{item.icon}</span>
                            <span className="font-medium">{item.name}</span>
                          </div>
                          <span className="text-gray-300 group-hover:text-amber-500 group-hover:translate-x-0.5 transition">›</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Direct Links */}
              <Link href="/about" className="text-gray-900 hover:text-amber-500 font-semibold text-base transition">About</Link>
              <Link href="/contact" className="text-gray-900 hover:text-amber-500 font-semibold text-base transition">Contact</Link>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-amber-500 hover:bg-gray-100 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-3 shadow-xl max-h-[80vh] overflow-y-auto">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium text-gray-800 border-b border-gray-50">Home</Link>
          <Link href="/insurance/auto" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-gray-600 pl-4 border-b border-gray-50">🛡️ Insurance</Link>
          <Link href="/home-services/plumbers" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-gray-600 pl-4 border-b border-gray-50">🏠 Home Services</Link>
          <Link href="/medical/dentists" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-gray-600 pl-4 border-b border-gray-50">➕ Medical</Link>
          <Link href="/travel/flights" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-gray-600 pl-4 border-b border-gray-50">✈️ Travel</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium text-gray-800 border-b border-gray-50">About</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 font-medium text-gray-800 border-b border-gray-50">Contact</Link>
        </div>
      )}
    </header>
  );
}