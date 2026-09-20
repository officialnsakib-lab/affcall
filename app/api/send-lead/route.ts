import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import FormSubmission from '@/models/FormSubmission';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { companyName, fullName, email, phone, category, pageSource } = body;

    // ডেটাবেজে কানেক্ট করা
    await dbConnect();

    // ১. সরাসরি ডেটাবেজে সেভ করা (যাতে ড্যাশবোর্ডের ফোল্ডারে শো করে)
    const newSubmission = await FormSubmission.create({
      companyName,
      fullName,
      email,
      phone,
      category: category || 'Service Lead',       // 18 Service Pages ফোল্ডারে দেখানোর জন্য
      pageSource: pageSource || 'Appliance Repair', // পেজের নাম
    });

    // ২. Nodemailer দিয়ে জিমেইলে নোটিফিকেশন পাঠানো
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'official.nsakib@gmail.com',
      subject: 'New Appliance Repair Lead Submitted!',
      html: `
        <h2>New Lead Received from AffCall</h2>
        <p><strong>Company Name:</strong> ${companyName || 'N/A'}</p>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Page Source:</strong> ${pageSource || 'Appliance Repair'}</p>
      `,
    };

    // ইমেইল পাঠানোর চেষ্টা (মেইল ফেইল করলেও যেন ডেটা সেভ হওয়া আটকে না যায়)
    await transporter.sendMail(mailOptions).catch((err) => {
      console.error('Email sending failed:', err);
    });

    return NextResponse.json(
      { success: true, message: 'Lead saved to dashboard and email sent!', data: newSubmission }, 
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process lead' }, 
      { status: 500 }
    );
  }
}