import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // পরিবেশ পরিবর্তনশীল (Environment Variables) থেকে ইমেইল ও পাসওয়ার্ড যাচাই
    const adminEmail = process.env.ADMIN_EMAIL; // আপনার `.env.local` ফাইলে এটি দিতে হবে
    const adminPassword = process.env.ADMIN_PASSWORD;

    // ইমেইল এবং পাসওয়ার্ড উভয়ই মিলতে হবে
    if (email === adminEmail && password === adminPassword) {
      const response = NextResponse.json({ success: true });
      
      // ১ দিনের জন্য সিকিউর কুকি সেট করা হলো
      response.cookies.set({
        name: 'admin_logged_in',
        value: 'true',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: 60 * 60 * 24,
      });

      return response;
    }

    return NextResponse.json( 
      { success: false, message: 'Invalid email or password' }, 
      { status: 401 } 
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}