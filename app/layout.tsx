import type { Metadata, Viewport } from "next";
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
    icon: "/vercel.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-950 flex flex-col min-h-screen overflow-x-hidden`}>
        
        {/* Navbar Header (এটি ফिक्सড করার জন্য Navbar কম্পোনেন্টের ভেতরে ক্লাস দিতে হবে) */}
        <Navbar />

        {/* Main Content Area - হেডারের নিচে জায়গা রাখার জন্য pt-20 বা আপনার হেডারের উচ্চতা অনুযায়ী প্যাডিং দিন */}
        <main className="flex-grow w-full overflow-x-hidden pt-20">
          {children}
        </main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}