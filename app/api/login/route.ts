import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { password } = await request.json();

  if (password === process.env.ADMIN_PASSWORD) {
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

  return NextResponse.json({ success: false }, { status: 401 });
}