import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAdvertiser extends Document {
  name?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone: string;
  companyName?: string;
  address?: string;
  industry?: string;
  messengerType?: string;
  messengerLink?: string;
  howDidYouHear?: string;
  verticalToStart?: string;
  callsPerDay?: string;
  howSoonToStart?: string;
  message?: string;
  createdAt: Date;
}

const AdvertiserSchema: Schema<IAdvertiser> = new Schema(
  {
    name: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    companyName: { type: String },
    address: { type: String },
    industry: { type: String },
    messengerType: { type: String },
    messengerLink: { type: String },
    howDidYouHear: { type: String },
    verticalToStart: { type: String },
    callsPerDay: { type: String },
    howSoonToStart: { type: String },
    message: { type: String },
  },
  {
    timestamps: true,
  }
);

const AdvertiserModel: Model<IAdvertiser> =
  mongoose.models.Advertiser || mongoose.model<IAdvertiser>('Advertiser', AdvertiserSchema);

export default AdvertiserModel;