import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  // ড্যাশবোর্ড পাথে কেউ প্রবেশ করতে চাইলে কুকি চেক করা হবে
  const path = request.nextUrl.pathname;

  if (path.startsWith('/dashboard')) {
    // এখানে আপনার লগইন কুকি চেক করা হচ্ছে
    const isLoggedIn = request.cookies.get('admin_logged_in')?.value;

    // কুকি বা টোকেন না থাকলে তাকে সরাসরি লগইন পেজে রিডাইরেক্ট করে দেওয়া হবে
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*',
};