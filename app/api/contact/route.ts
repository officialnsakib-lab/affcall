import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();

    const newContact = await Contact.create(body);

    return NextResponse.json({ success: true, data: newContact }, { status: 201 });
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json({ success: false, message: 'সার্ভারে ডেটা সেভ করতে সমস্যা হয়েছে।' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: contacts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'ডেটা ফেচ করতে সমস্যা হয়েছে।' }, { status: 500 });
  }
}