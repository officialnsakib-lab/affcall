import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/logo.png" 
                alt="Affcall Logo" 
                width={130} 
                height={40} 
                className="object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Enterprise Pay Per Call Infrastructure. Scale & perform pay-per-call programs into leads and revenue 24/7.
            </p>
            <div className="text-sm text-orange-500 font-semibold">
              Support: support@affcall.com
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Verticals</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/insurance/auto" className="hover:text-orange-400 transition">Auto Insurance</Link></li>
              <li><Link href="/home-services/plumbers" className="hover:text-orange-400 transition">Home Services</Link></li>
              <li><Link href="/medical/dentists" className="hover:text-orange-400 transition">Medical & Dentists</Link></li>
              <li><Link href="/travel/flights" className="hover:text-orange-400 transition">Travel Booking</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-orange-400 transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-orange-400 transition">Contact Us</Link></li>
              <li><Link href="/dashboard" className="hover:text-orange-400 transition">Advertiser Dashboard</Link></li>
              <li><Link href="/publisher" className="hover:text-orange-400 transition">For Publishers</Link></li>
            </ul>
          </div>

          {/* Legal / Newsletter */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/privacy" className="hover:text-orange-400 transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-orange-400 transition">Terms of Service</Link></li>
              <li><Link href="/compliance" className="hover:text-orange-400 transition">Compliance</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Affcall. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="hover:text-orange-400 transition">Privacy</Link>
            <Link href="/terms" className="hover:text-orange-400 transition">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}