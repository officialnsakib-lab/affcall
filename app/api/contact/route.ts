import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';
import AdvertiserModel from '@/models/Advertiser';
import AffiliateModel from '@/models/Affiliate';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json().catch(() => ({}));

    // ইউআরএল পাথ চেক করা (যদি রিকোয়েস্ট /api/affiliates থেকে আসে)
    const url = new URL(request.url);
    const pathname = url.pathname;

    let savedDoc;
    let formType = body.formType || body.type;

    if (pathname.includes('affiliates') || formType === 'Affiliate') {
      savedDoc = await AffiliateModel.create({
        ...body,
        type: 'Affiliate',
        name: body.companyName || body.name,
      });
    } else if (pathname.includes('advertisers') || formType === 'Advertiser') {
      savedDoc = await AdvertiserModel.create({
        ...body,
        type: 'Advertiser',
        name: body.companyName || body.name,
      });
    } else {
      savedDoc = await Contact.create(body);
    }

    return NextResponse.json({ success: true, data: savedDoc }, { status: 201 });
  } catch (error: any) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'সার্ভারে ডেটা সেভ করতে সমস্যা হয়েছে।' }, 
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    await dbConnect();
    
    const url = new URL(request.url);
    const type = url.searchParams.get('type');

    let data;
    if (type === 'Advertiser') {
      data = await AdvertiserModel.find({}).sort({ createdAt: -1 });
    } else if (type === 'Affiliate') {
      data = await AffiliateModel.find({}).sort({ createdAt: -1 });
    } else {
      // ড্যাশবোর্ডের জন্য যদি একসাথে সব ডাটা দরকার হয়
      const advertisers = await AdvertiserModel.find({}).lean();
      const affiliates = await AffiliateModel.find({}).lean();
      const contacts = await Contact.find({}).lean();

      // সবগুলোকে একসাথে মার্জ করে টাইপ সহ রিটার্ন করা
      const allSubmissions = [
        ...advertisers.map((item: any) => ({ ...item, type: 'Advertiser' })),
        ...affiliates.map((item: any) => ({ ...item, type: 'Affiliate' })),
        ...contacts.map((item: any) => ({ ...item, type: 'Contact' })),
      ].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

      return NextResponse.json({ success: true, submissions: allSubmissions, data: allSubmissions }, { status: 200 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Fetch Error:', error);
    return NextResponse.json({ success: false, message: 'ডেটা ফেচ করতে সমস্যা হয়েছে।' }, { status: 500 });
  }
}