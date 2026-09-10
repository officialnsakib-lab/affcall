import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Affcall - Enterprise Pay Per Call Infrastructure",
  description: "Scale & perform pay-per-call programs into leads/revenue",
  icons: {
    icon: "/vercel.svg", // আপনার public ফোল্ডারে থাকা লোগো বা ফ্যাভিকন ফাইলের পাথ এখানে দিন
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-950 flex flex-col min-h-screen`}>
        
        {/* Navbar Header */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}