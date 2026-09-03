import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Lead from '@/models/Lead';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ success: false, message: 'সব ফিল্ড পূরণ করা বাধ্যতামূলক' }, { status: 400 });
    }

    const newLead = await Lead.create({ name, email, phone, message });

    return NextResponse.json({ success: true, data: newLead }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'সার্ভারে সমস্যা হয়েছে' }, { status: 500 });
  }
}