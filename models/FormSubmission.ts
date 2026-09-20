import mongoose, { Schema, model, models } from 'mongoose';

const FormSchema = new Schema({
  companyName: { type: String },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  category: { type: String, default: 'Service Lead' },       // ফোল্ডার ফিল্টারিংয়ের জন্য জরুরি
  pageSource: { type: String, default: 'Appliance Repair' }, // কোন পেজ থেকে এসেছে
}, { 
  timestamps: true, 
  collection: 'formsubmissions' // আপনার ড্যাশবোর্ড যে কালেকশন ব্যবহার করছে
});

const FormSubmission = models.FormSubmission || model('FormSubmission', FormSchema);

export default FormSubmission;