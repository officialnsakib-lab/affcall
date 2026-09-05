'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MarketerPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    address: '',
    industry: '',
    messengerType: 'Microsoft Teams',
    messengerLink: '',
    howDidYouHear: '',
    verticalToStart: '',
    callsPerDay: '',
    howSoonToStart: '',
    agreeToTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName} (${formData.companyName})`,
          email: formData.email,
          phone: formData.phone,
          message: `Industry: ${formData.industry}, Address: ${formData.address}, Calls/Day: ${formData.callsPerDay}, Vertical: ${formData.verticalToStart}`,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(result.message || 'সাবমিট করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMsg('সার্ভারে সংযোগ স্থাপন করা সম্ভব হয়নি।');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center py-12 px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">✓</div>
          <h1 className="text-2xl font-extrabold text-gray-800 mb-2">Thank You!</h1>
          <p className="text-gray-600 text-sm mb-6">Your advertiser application has been successfully submitted. We will contact you soon.</p>
          <button
            onClick={() => router.push('/')}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-full transition cursor-pointer text-sm shadow-md"
          >
            Go Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center py-12 px-4">
      <div className="text-center mb-6">
        <span className="text-orange-500 text-xs font-bold tracking-widest uppercase">— Advertiser —</span>
        <h1 className="text-white text-xl font-extrabold mt-1">READY TO RECEIVE EXCLUSIVE PHONE CALLS FOR YOUR BUSINESS</h1>
      </div>

      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-2xl">
        {errorMsg && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm text-center font-medium">{errorMsg}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">First Name *</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500 text-black" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Last Name *</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500 text-black" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Email Address *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500 text-black" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Phone Number *</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500 text-black" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Company Name *</label>
              <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500 text-black" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Address *</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500 text-black" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Industry *</label>
            <input type="text" name="industry" value={formData.industry} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500 text-black" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Instant messenger</label>
              <select name="messengerType" value={formData.messengerType} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm bg-white focus:outline-none focus:border-orange-500 text-black">
                <option value="Microsoft Teams">Microsoft Teams</option>
                <option value="Skype">Skype</option>
                <option value="Telegram">Telegram</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Link (Optional)</label>
              <input type="text" name="messengerLink" value={formData.messengerLink} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500 text-black" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">How did you hear about us?</label>
            <input type="text" name="howDidYouHear" value={formData.howDidYouHear} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500 text-black" />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">What vertical/campaign would you like to start?</label>
            <input type="text" name="verticalToStart" value={formData.verticalToStart} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500 text-black" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">How many calls do you need PER day?</label>
              <input type="text" name="callsPerDay" value={formData.callsPerDay} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500 text-black" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">How soon would you like to start?</label>
              <input type="text" name="howSoonToStart" value={formData.howSoonToStart} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500 text-black" />
            </div>
          </div>

          <div className="flex items-start space-x-2 pt-2">
            <input type="checkbox" name="agreeToTerms" id="advTerms" checked={formData.agreeToTerms} onChange={handleChange} className="mt-1 h-4 w-4 text-orange-500 border-gray-300 rounded" required />
            <label htmlFor="advTerms" className="text-xs text-gray-600">
              I understand and agree to be contacted by a representative from AFFCALL.
            </label>
          </div>

          <button type="submit" disabled={loading} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-full transition cursor-pointer text-sm shadow-md mt-4 disabled:opacity-50">
            {loading ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>
    </div>
  );
}