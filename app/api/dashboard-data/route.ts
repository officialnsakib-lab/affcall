import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import AdvertiserModel from '@/models/Advertiser';
import AffiliateModel from '@/models/Affiliate';
import LeadModel from '@/models/Lead';
import ContactModel from '@/models/Contact';
import FormSubmission from '@/models/FormSubmission'; // নতুন ফর্মের মডেল এখানে ইম্পোর্ট করা হলো

export async function GET() {
  try {
    await dbConnect();

    const advertisers = await AdvertiserModel.find({}).lean();
    const affiliates = await AffiliateModel.find({}).lean();
    const leads = await LeadModel.find({}).lean();
    const contacts = await ContactModel.find({}).lean();
    const formSubmissions = await FormSubmission.find({}).lean(); // নতুন লিডগুলো ফেচ করা হলো

    const formatData = (items: any[], type: string) => {
      return items.map((item: any) => {
        let name = item.name || item.fullName || item.companyName || `${item.firstName || ''} ${item.lastName || ''}`.trim() || 'N/A';
        let message = item.message || item.industry || item.primaryTrafficSource || item.notes || 'N/A';
        
        return {
          ...item,
          _id: item._id.toString(),
          name,
          type: item.category === 'Service Lead' ? (item.pageSource || 'Service Lead') : type, // ক্যাটাগরি অনুযায়ী নাম ঠিক রাখা
          message,
          createdAt: item.createdAt || new Date(),
        };
      });
    };

    const formattedAdvertisers = formatData(advertisers, 'Advertiser');
    const formattedAffiliates = formatData(affiliates, 'Affiliate');
    const formattedLeads = formatData(leads, 'Lead');
    const formattedContacts = formatData(contacts, 'Contact');
    const formattedFormSubmissions = formatData(formSubmissions, 'Service Lead'); // নতুন লিড ফরম্যাট করা হলো

    const allSubmissions = [
      ...formattedAdvertisers, 
      ...formattedAffiliates, 
      ...formattedLeads, 
      ...formattedContacts,
      ...formattedFormSubmissions // ড্যাশবোর্ডের অ্যারেতে যুক্ত করা হলো
    ].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return NextResponse.json({ success: true, submissions: allSubmissions }, { status: 200 });
  } catch (error) {
    console.error('Dashboard Data Fetch Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch data' }, { status: 500 });
  }
}