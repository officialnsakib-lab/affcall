import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import AdvertiserModel from '@/models/Advertiser';
import AffiliateModel from '@/models/Affiliate';

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const resolvedParams = await params;
    const { id } = resolvedParams;
    
    // বডি বা কুয়েরি থেকে টাইপ বের করার চেষ্টা করা
    let type = '';
    try {
      const body = await request.json();
      type = body.type;
    } catch {
      const url = new URL(request.url);
      type = url.searchParams.get('type') || '';
    }

    let deletedItem = null;

    // যদি টাইপ 'Advertiser' হয়
    if (type === 'Advertiser') {
      deletedItem = await AdvertiserModel.findByIdAndDelete(id);
    } 
    // যদি টাইপ 'Affiliate' হয়
    else if (type === 'Affiliate') {
      deletedItem = await AffiliateModel.findByIdAndDelete(id);
    } 
    // যদি টাইপ মিসিং থাকে, তবে উভয় কালেকশনেই খুঁজে ডিলিট করবে
    else {
      deletedItem = await AdvertiserModel.findByIdAndDelete(id);
      if (!deletedItem) {
        deletedItem = await AffiliateModel.findByIdAndDelete(id);
      }
    }

    if (!deletedItem) {
      return NextResponse.json({ success: false, message: 'Submission not found in database' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Delete error:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}