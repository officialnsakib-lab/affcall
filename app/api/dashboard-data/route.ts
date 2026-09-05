import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import AdvertiserModel from '@/models/Advertiser';
import AffiliateModel from '@/models/Affiliate';
import LeadModel from '@/models/Lead';
import ContactModel from '@/models/Contact';

export async function GET() {
  try {
    await dbConnect();

    const advertisers = await AdvertiserModel.find({}).lean();
    const affiliates = await AffiliateModel.find({}).lean();
    const leads = await LeadModel.find({}).lean();
    const contacts = await ContactModel.find({}).lean();

    const formatData = (items: any[], type: string) => {
      return items.map((item: any) => {
        let name = item.name || item.companyName || `${item.firstName || ''} ${item.lastName || ''}`.trim() || 'N/A';
        let message = item.message || item.industry || item.primaryTrafficSource || item.notes || 'N/A';
        
        return {
          ...item,
          _id: item._id.toString(),
          name,
          type,
          message,
          createdAt: item.createdAt || new Date(),
        };
      });
    };

    const formattedAdvertisers = formatData(advertisers, 'Advertiser');
    const formattedAffiliates = formatData(affiliates, 'Affiliate');
    const formattedLeads = formatData(leads, 'Lead');
    const formattedContacts = formatData(contacts, 'Contact');

    const allSubmissions = [
      ...formattedAdvertisers, 
      ...formattedAffiliates, 
      ...formattedLeads, 
      ...formattedContacts
    ].sort((a, b) => new Date(b.createdAt).getTime() - new Date(new Date(a.createdAt).getTime()));

    return NextResponse.json({ success: true, submissions: allSubmissions }, { status: 200 });
  } catch (error) {
    console.error('Dashboard Data Fetch Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch data' }, { status: 500 });
  }
}