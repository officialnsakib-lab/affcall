import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Affiliate from '@/models/Affiliate';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();

    const newAffiliate = await Affiliate.create(body);

    return NextResponse.json({ success: true, data: newAffiliate }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}