import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import AdvertiserModel from '@/models/Advertiser';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();

    // নতুন অ্যাডভারটাইজার ডকুমেন্ট তৈরি এবং সেভ করা
    const newAdvertiser = await AdvertiserModel.create(body);

    return NextResponse.json({ success: true, data: newAdvertiser }, { status: 201 });
  } catch (error: any) {
    console.error('Advertiser Save Error:', error);
    return NextResponse.json({ success: false, message: error.message || 'Failed to save data' }, { status: 500 });
  }
}