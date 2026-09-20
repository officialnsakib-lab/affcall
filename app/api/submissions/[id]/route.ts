import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import AdvertiserModel from '@/models/Advertiser';
import AffiliateModel from '@/models/Affiliate';
import LeadModel from '@/models/Lead';
import ContactModel from '@/models/Contact';
import FormSubmission from '@/models/FormSubmission'; // নতুন ফর্ম মডেল ইম্পোর্ট করা হলো

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const resolvedParams = await params;
    const { id } = resolvedParams;
    
    // বডি বা কুয়েরি থেকে টাইপ বের করার চেষ্টা করা
    let type = '';
    try {
      const body = await request.json();
      type = body.type;
    } catch {
      const url = new URL(request.url);
      type = url.searchParams.get('type') || '';
    }

    let deletedItem = null;

    // টাইপ অনুযায়ী নির্দিষ্ট কালেকশন থেকে ডিলিট করা
    if (type === 'Advertiser') {
      deletedItem = await AdvertiserModel.findByIdAndDelete(id);
    } else if (type === 'Affiliate') {
      deletedItem = await AffiliateModel.findByIdAndDelete(id);
    } else if (type === 'Lead') {
      deletedItem = await LeadModel.findByIdAndDelete(id);
    } else if (type === 'Contact') {
      deletedItem = await ContactModel.findByIdAndDelete(id);
    } else if (type === 'Service Lead' || type === 'FormSubmission') {
      deletedItem = await FormSubmission.findByIdAndDelete(id);
    } else {
      // টাইপ না মিললে বা মিসিং থাকলে সব কালেকশনেই চেক করে ডিলিট করবে
      deletedItem = await FormSubmission.findByIdAndDelete(id) ||
                    await LeadModel.findByIdAndDelete(id) ||
                    await ContactModel.findByIdAndDelete(id) ||
                    await AdvertiserModel.findByIdAndDelete(id) ||
                    await AffiliateModel.findByIdAndDelete(id);
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