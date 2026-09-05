import mongoose, { Schema, Document } from 'mongoose';

export interface IContact extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  address: string;
  industry: string;
  messengerType: string;
  messengerLink?: string;
  howDidYouHear?: string;
  verticalToStart?: string;
  callsPerDay?: string;
  howSoonToStart?: string;
  agreeToTerms: boolean;
  createdAt: Date;
}

const ContactSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  companyName: { type: String, required: true },
  address: { type: String, required: true },
  industry: { type: String, required: true },
  messengerType: { type: String },
  messengerLink: { type: String },
  howDidYouHear: { type: String },
  verticalToStart: { type: String },
  callsPerDay: { type: String },
  howSoonToStart: { type: String },
  agreeToTerms: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);