import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    // কনসোলে চেক করার জন্য প্রিন্ট করা হলো
    console.log("Form Sent -> Email:", email, "Password:", password);
    console.log("Env Config -> Email:", adminEmail, "Password:", adminPassword);

    if (email === adminEmail && password === adminPassword) {
      const response = NextResponse.json({ success: true });
      
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
    console.error('Login API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}