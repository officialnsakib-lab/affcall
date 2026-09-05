import mongoose, { Schema, model, models } from 'mongoose';

const FormSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true }); // এটি ডেটা সাবমিট হওয়ার সঠিক সময় সেভ করবে

const FormSubmission = models.FormSubmission || model('FormSubmission', FormSchema);

export default FormSubmission;