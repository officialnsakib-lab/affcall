import mongoose, { Schema, Document } from 'mongoose';

export interface IAffiliate extends Document {
  formType?: string;
  type?: string;
  name?: string;
  companyName: string;
  email: string;
  phone: string;
  address1: string;
  address2?: string;
  city: string;
  region: string;
  postalCode: string;
  messengerType: string;
  messengerLink: string;
  referredBy?: string;
  howDidYouHear?: string;
  workingCampaigns?: string;
  primaryTrafficSource?: string;
  desiredVertical?: string;
  agreeToTerms: boolean;
  createdAt: Date;
}

const AffiliateSchema: Schema = new Schema({
  formType: { type: String, default: 'Affiliate' },
  type: { type: String, default: 'Affiliate' },
  name: { type: String },
  companyName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address1: { type: String, required: true },
  address2: { type: String },
  city: { type: String, required: true },
  region: { type: String, required: true },
  postalCode: { type: String, required: true },
  messengerType: { type: String, required: true },
  messengerLink: { type: String, required: true },
  referredBy: { type: String },
  howDidYouHear: { type: String },
  workingCampaigns: { type: String },
  primaryTrafficSource: { type: String },
  desiredVertical: { type: String },
  agreeToTerms: { type: Boolean, required: true },
}, { 
  timestamps: true,
  strict: false // অতিরিক্ত কোনো ফিল্ড আসলেও যেন ড্রপ না হয়
});

export default mongoose.models.Affiliate || mongoose.model<IAffiliate>('Affiliate', AffiliateSchema);