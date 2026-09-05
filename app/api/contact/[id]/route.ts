import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { password } = body;

    // পাসওয়ার্ড খালি আছে কিনা চেক করা
    if (!password) {
      return NextResponse.json(
        { success: false, message: 'পাসওয়ার্ড প্রদান করা হয়নি।' },
        { status: 400 }
      );
    }

    // পরিবেশ থেকে পাসওয়ার্ড যাচাই
    if (password === process.env.ADMIN_PASSWORD) {
      const response = NextResponse.json({ 
        success: true, 
        message: 'লগইন সফল হয়েছে।' 
      });

      // ১ দিনের জন্য সিকিউর কুকি সেট করা হলো
      response.cookies.set({
        name: 'admin_logged_in',
        value: 'true',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24, // ১ দিন
      });

      return response;
    }

    return NextResponse.json(
      { success: false, message: 'ভুল পাসওয়ার্ড দেওয়া হয়েছে।' }, 
      { status: 401 }
    );
  } catch (error) {
    console.error('Login Error:', error);
    return NextResponse.json(
      { success: false, message: 'সার্ভারে অভ্যন্তরীণ সমস্যা হয়েছে।' }, 
      { status: 500 }
    );
  }
}