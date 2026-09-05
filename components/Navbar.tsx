"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  const handleDropdownClick = (menuName: string) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left Side: Logo and Navigation grouped together */}
          <div className="flex items-center gap-8">
            {/* Custom Logo (Compact) */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <Image 
                  src="/logo.png" 
                  alt="Affcall Logo" 
                  width={110} 
                  height={35} 
                  className="object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation (Compact spacing) */}
            <nav className="hidden lg:flex items-center space-x-6">
              
              {/* 1. Insurance Dropdown */}
              <div 
                className="relative py-2"
                onMouseEnter={() => setActiveDropdown("insurance")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  onClick={() => handleDropdownClick("insurance")}
                  className="flex items-center gap-1 text-gray-800 hover:text-amber-500 font-medium text-sm transition"
                >
                  Insurance 
                  <span className={`text-[10px] transition-transform duration-200 ${activeDropdown === "insurance" ? "rotate-180 text-amber-500" : ""}`}>▼</span>
                </button>
                
                {activeDropdown === "insurance" && (
                  <div className="absolute top-full left-0 w-72 bg-white shadow-2xl rounded-2xl p-3 border border-gray-100 mt-1">
                    <div className="flex items-center gap-2.5 pb-2.5 mb-2 border-b border-gray-100">
                      <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 text-sm">🛡️</div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-xs">Insurance</h4>
                        <p className="text-[11px] text-gray-500">High-intent insurance calls</p>
                      </div>
                    </div>
                    <div className="space-y-0.5">
                      {[
                        { name: "Auto Insurance", href: "/insurance/auto", icon: "🚗" },
                        { name: "Health Insurance", href: "/insurance/health", icon: "📄" },
                        { name: "Homeowners Insurance", href: "/insurance/homeowners", icon: "🏠" },
                        { name: "ACA Insurance", href: "/insurance/aca", icon: "🤝" },
                        { name: "Medicare Insurance", href: "/insurance/medicare", icon: "➕" },
                        { name: "Final Expense Insurance", href: "/insurance/final-expense", icon: "💼" },
                      ].map((item, idx) => (
                        <Link key={idx} href={item.href} className="flex items-center justify-between p-1.5 hover:bg-amber-50/60 rounded-xl text-xs text-gray-700 hover:text-amber-600 transition group">
                          <div className="flex items-center gap-2">
                            <span className="text-amber-500 text-sm">{item.icon}</span>
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
                <button 
                  onClick={() => handleDropdownClick("homeservices")}
                  className="flex items-center gap-1 text-gray-800 hover:text-amber-500 font-medium text-sm transition"
                >
                  Home Services 
                  <span className={`text-[10px] transition-transform duration-200 ${activeDropdown === "homeservices" ? "rotate-180 text-amber-500" : ""}`}>▼</span>
                </button>
                
                {activeDropdown === "homeservices" && (
                  <div className="absolute top-full left-0 w-72 bg-white shadow-2xl rounded-2xl p-3 border border-gray-100 mt-1 max-h-[400px] overflow-y-auto">
                    <div className="flex items-center gap-2.5 pb-2.5 mb-2 border-b border-gray-100">
                      <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 text-sm">🏠</div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-xs">Home Services</h4>
                        <p className="text-[11px] text-gray-500">Connect with local service pros</p>
                      </div>
                    </div>
                    <div className="space-y-0.5">
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
                        <Link key={idx} href={item.href} className="flex items-center justify-between p-1.5 hover:bg-amber-50/60 rounded-xl text-xs text-gray-700 hover:text-amber-600 transition group">
                          <div className="flex items-center gap-2">
                            <span className="text-amber-500 text-sm">{item.icon}</span>
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
                <button 
                  onClick={() => handleDropdownClick("medical")}
                  className="flex items-center gap-1 text-gray-800 hover:text-amber-500 font-medium text-sm transition"
                >
                  Medical 
                  <span className={`text-[10px] transition-transform duration-200 ${activeDropdown === "medical" ? "rotate-180 text-amber-500" : ""}`}>▼</span>
                </button>
                
                {activeDropdown === "medical" && (
                  <div className="absolute top-full left-0 w-72 bg-white shadow-2xl rounded-2xl p-3 border border-gray-100 mt-1">
                    <div className="flex items-center gap-2.5 pb-2.5 mb-2 border-b border-gray-100">
                      <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 text-sm">➕</div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-xs">Medical</h4>
                        <p className="text-[11px] text-gray-500">Qualified medical calls</p>
                      </div>
                    </div>
                    <div className="space-y-0.5">
                      {[
                        { name: "Chiropractors", href: "/medical/chiropractors", icon: "🦴" },
                        { name: "Dentists", href: "/medical/dentists", icon: "🦷" },
                        { name: "Drug & Alcohol Addiction Treatment", href: "/medical/addiction-treatment", icon: "💊" },
                      ].map((item, idx) => (
                        <Link key={idx} href={item.href} className="flex items-center justify-between p-1.5 hover:bg-amber-50/60 rounded-xl text-xs text-gray-700 hover:text-amber-600 transition group">
                          <div className="flex items-center gap-2">
                            <span className="text-amber-500 text-sm">{item.icon}</span>
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
                <button 
                  onClick={() => handleDropdownClick("travel")}
                  className="flex items-center gap-1 text-gray-800 hover:text-amber-500 font-medium text-sm transition"
                >
                  Travel 
                  <span className={`text-[10px] transition-transform duration-200 ${activeDropdown === "travel" ? "rotate-180 text-amber-500" : ""}`}>▼</span>
                </button>
                
                {activeDropdown === "travel" && (
                  <div className="absolute top-full left-0 w-72 bg-white shadow-2xl rounded-2xl p-3 border border-gray-100 mt-1">
                    <div className="flex items-center gap-2.5 pb-2.5 mb-2 border-b border-gray-100">
                      <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 text-sm">✈️</div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-xs">Travel</h4>
                        <p className="text-[11px] text-gray-500">Qualified travel calls</p>
                      </div>
                    </div>
                    <div className="space-y-0.5">
                      {[
                        { name: "Flights booking", href: "/travel/flights", icon: "✈️" },
                        { name: "Car Booking", href: "/travel/cars", icon: "🚗" },
                      ].map((item, idx) => (
                        <Link key={idx} href={item.href} className="flex items-center justify-between p-1.5 hover:bg-amber-50/60 rounded-xl text-xs text-gray-700 hover:text-amber-600 transition group">
                          <div className="flex items-center gap-2">
                            <span className="text-amber-500 text-sm">{item.icon}</span>
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
              <Link href="/about" className="text-gray-800 hover:text-amber-500 font-medium text-sm transition">About</Link>
              <Link href="/contact" className="text-gray-800 hover:text-amber-500 font-medium text-sm transition">Contact</Link>
            </nav>
          </div>

          {/* Right Side: Desktop Registration Buttons & Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            {/* Desktop Action Buttons - Both Orange/Amber Theme */}
            <div className="hidden lg:flex items-center gap-2.5">
              <Link 
                href="/form/affiliate-register" 
                className="px-3.5 py-2 text-xs font-semibold text-amber-600 bg-amber-50 hover:bg-amber-100 rounded-xl transition"
              >
                Affiliate Registration
              </Link>
              <Link 
                href="/form/advertiser-register" 
                className="px-3.5 py-2 text-xs font-semibold text-white bg-amber-500 hover:bg-amber-600 rounded-xl shadow-sm transition"
              >
                Advertiser Registration
              </Link>
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
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-2 shadow-xl max-h-[80vh] overflow-y-auto">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 font-semibold text-gray-900 border-b border-gray-100 text-sm">Home</Link>
          
          {/* 1. Insurance Mobile Dropdown */}
          <div className="border-b border-gray-100">
            <button 
              onClick={() => setMobileSubmenu(mobileSubmenu === "insurance" ? null : "insurance")}
              className="w-full flex items-center justify-between py-2.5 font-semibold text-gray-900 text-sm"
            >
              <span className="flex items-center gap-2">🛡️ Insurance</span>
              <span className={`text-xs transition-transform duration-200 ${mobileSubmenu === "insurance" ? "rotate-180" : ""}`}>▼</span>
            </button>
            {mobileSubmenu === "insurance" && (
              <div className="pl-4 pb-2 space-y-1.5">
                {[
                  { name: "Auto Insurance", href: "/insurance/auto" },
                  { name: "Health Insurance", href: "/insurance/health" },
                  { name: "Homeowners Insurance", href: "/insurance/homeowners" },
                  { name: "ACA Insurance", href: "/insurance/aca" },
                  { name: "Medicare Insurance", href: "/insurance/medicare" },
                  { name: "Final Expense Insurance", href: "/insurance/final-expense" },
                ].map((item, idx) => (
                  <Link key={idx} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-gray-600 hover:text-amber-500">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* 2. Home Services Mobile Dropdown */}
          <div className="border-b border-gray-100">
            <button 
              onClick={() => setMobileSubmenu(mobileSubmenu === "homeservices" ? null : "homeservices")}
              className="w-full flex items-center justify-between py-2.5 font-semibold text-gray-900 text-sm"
            >
              <span className="flex items-center gap-2">🏠 Home Services</span>
              <span className={`text-xs transition-transform duration-200 ${mobileSubmenu === "homeservices" ? "rotate-180" : ""}`}>▼</span>
            </button>
            {mobileSubmenu === "homeservices" && (
              <div className="pl-4 pb-2 space-y-1.5">
                {[
                  { name: "Appliance Repair Pros", href: "/home-services/appliance-repair" },
                  { name: "Electricians", href: "/home-services/electricians" },
                  { name: "HVAC Contractors", href: "/home-services/hvac" },
                  { name: "Landscapers", href: "/home-services/landscapers" },
                  { name: "Locksmiths", href: "/home-services/locksmiths" },
                  { name: "Pest Control", href: "/home-services/pest-control" },
                  { name: "Plumbers", href: "/home-services/plumbers" },
                  { name: "Roofers", href: "/home-services/roofers" },
                ].map((item, idx) => (
                  <Link key={idx} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-gray-600 hover:text-amber-500">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* 3. Medical Mobile Dropdown */}
          <div className="border-b border-gray-100">
            <button 
              onClick={() => setMobileSubmenu(mobileSubmenu === "medical" ? null : "medical")}
              className="w-full flex items-center justify-between py-2.5 font-semibold text-gray-900 text-sm"
            >
              <span className="flex items-center gap-2">➕ Medical</span>
              <span className={`text-xs transition-transform duration-200 ${mobileSubmenu === "medical" ? "rotate-180" : ""}`}>▼</span>
            </button>
            {mobileSubmenu === "medical" && (
              <div className="pl-4 pb-2 space-y-1.5">
                {[
                  { name: "Chiropractors", href: "/medical/chiropractors" },
                  { name: "Dentists", href: "/medical/dentists" },
                  { name: "Drug & Alcohol Addiction Treatment", href: "/medical/addiction-treatment" },
                ].map((item, idx) => (
                  <Link key={idx} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-gray-600 hover:text-amber-500">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* 4. Travel Mobile Dropdown */}
          <div className="border-b border-gray-100">
            <button 
              onClick={() => setMobileSubmenu(mobileSubmenu === "travel" ? null : "travel")}
              className="w-full flex items-center justify-between py-2.5 font-semibold text-gray-900 text-sm"
            >
              <span className="flex items-center gap-2">✈️ Travel</span>
              <span className={`text-xs transition-transform duration-200 ${mobileSubmenu === "travel" ? "rotate-180" : ""}`}>▼</span>
            </button>
            {mobileSubmenu === "travel" && (
              <div className="pl-4 pb-2 space-y-1.5">
                {[
                  { name: "Flights booking", href: "/travel/flights" },
                  { name: "Car Booking", href: "/travel/cars" },
                ].map((item, idx) => (
                  <Link key={idx} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block py-1 text-xs text-gray-600 hover:text-amber-500">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 font-semibold text-gray-900 border-b border-gray-100 text-sm">About</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 font-semibold text-gray-900 border-b border-gray-100 text-sm">Contact</Link>
          
          {/* Mobile Registration Action Buttons (Orange Theme) */}
          <div className="pt-3 flex flex-col gap-2">
            <Link 
              href="/form/affiliate-register" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-center text-xs font-semibold text-amber-600 bg-amber-50 hover:bg-amber-100 rounded-xl transition"
            >
              Affiliate Registration
            </Link>
            <Link 
              href="/form/advertiser-register" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-center text-xs font-semibold text-white bg-amber-500 hover:bg-amber-600 rounded-xl shadow-md transition"
            >
              Advertiser Registration
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}