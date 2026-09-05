import mongoose, { Schema, Document } from 'mongoose';

export interface IAffiliate extends Document {
  companyName: string;
  email: string;
  phone: string;
  country: string;
  primaryTrafficSource: string;
  createdAt: Date;
}

const AffiliateSchema: Schema = new Schema({
  companyName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  country: { type: String },
  primaryTrafficSource: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Affiliate || mongoose.model<IAffiliate>('Affiliate', AffiliateSchema);