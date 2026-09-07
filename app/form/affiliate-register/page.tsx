'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AffiliatePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    region: '',
    postalCode: '',
    messengerType: 'Microsoft Teams',
    messengerLink: '',
    referredBy: '',
    howDidYouHear: '',
    workingCampaigns: '',
    primaryTrafficSource: '',
    desiredVertical: '',
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
      const response = await fetch('/api/affiliates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'Affiliate',
          type: 'Affiliate',
          name: formData.companyName,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(result.message || result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting affiliate form:', error);
      setErrorMsg('Server connection error.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0b132b] flex flex-col items-center justify-center py-12 px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">✓</div>
          <h1 className="text-2xl font-extrabold text-gray-800 mb-2">Thank You!</h1>
          <p className="text-gray-600 text-sm mb-6">Your affiliate registration has been successfully submitted. We will review your application and get back to you soon.</p>
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
    <div className="min-h-screen bg-[#0b132b] flex flex-col items-center justify-center py-12 px-4">
      <div className="text-center mb-6">
        <span className="text-orange-500 text-xs font-bold tracking-widest uppercase">— Affiliates —</span>
        <h1 className="text-white text-2xl font-extrabold mt-1">REGISTER TO JOIN OUR PROGRAM</h1>
      </div>

      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-2xl">
        {errorMsg && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm text-center font-medium">{errorMsg}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Company / Name *</label>
              <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500 text-black" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Email Address *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500 text-black" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Phone *</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500 text-black" />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Address 1 *</label>
            <input type="text" name="address1" value={formData.address1} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500 text-black" />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Address 2 *</label>
            <input type="text" name="address2" value={formData.address2} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500 text-black" />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">City *</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} required className="w-full px-3 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500 text-black" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Region *</label>
              <input type="text" name="region" value={formData.region} onChange={handleChange} required className="w-full px-3 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500 text-black" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Postal Code *</label>
              <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required className="w-full px-3 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500 text-black" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Instant messenger *</label>
              <select name="messengerType" value={formData.messengerType} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm bg-white focus:outline-none focus:border-orange-500 text-black">
                <option value="Microsoft Teams">Microsoft Teams</option>
                <option value="Skype">Skype</option>
                <option value="Telegram">Telegram</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Link *</label>
              <input type="text" name="messengerLink" value={formData.messengerLink} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500 text-black" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Did someone refer you to us? If so, who was it? *</label>
            <input type="text" name="referredBy" value={formData.referredBy} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500 text-black" />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">How did you hear about us? *</label>
            <input type="text" name="howDidYouHear" value={formData.howDidYouHear} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500 text-black" />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Which campaigns are you working? *</label>
            <input type="text" name="workingCampaigns" value={formData.workingCampaigns} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500 text-black" />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">What primary traffic source do you work with? *</label>
            <input type="text" name="primaryTrafficSource" value={formData.primaryTrafficSource} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500 text-black" />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">What campaign/vertical are you looking for? *</label>
            <input type="text" name="desiredVertical" value={formData.desiredVertical} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500 text-black" />
          </div>

          <div className="flex items-start space-x-2 pt-2">
            <input type="checkbox" name="agreeToTerms" id="affTerms" checked={formData.agreeToTerms} onChange={handleChange} className="mt-1 h-4 w-4 text-orange-500 border-gray-300 rounded" required />
            <label htmlFor="affTerms" className="text-xs text-gray-600">
              I agree to the <span className="text-orange-500 underline cursor-pointer">Terms and Conditions</span> *
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