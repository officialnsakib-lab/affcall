'use client';

import React, { useState } from 'react';

export default function AffiliatePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    country: '',
    address1: '',
    address2: '',
    city: '',
    region: '',
    postalCode: '',
    messengerType: 'Microsoft Teams',
    messengerLink: '',
    referredBy: '',
    howDidYouHear: '',
    campaignsWorking: '',
    primaryTrafficSource: '',
    campaignLookingFor: '',
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

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Affiliate Form Data:', formData);
    alert('Affiliate Form Submitted Successfully! Check console.');
  };

  return (
    <div className="min-h-screen bg-[#0b132b] flex flex-col items-center justify-center py-12 px-4">
      <div className="text-center mb-6">
        <span className="text-orange-500 text-xs font-bold tracking-widest uppercase">— Affiliates —</span>
        <h1 className="text-white text-2xl font-extrabold mt-1">REGISTER TO JOIN OUR PROGRAM</h1>
      </div>

      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-2xl">
        {/* স্টেপ প্রোগ্রেস */}
        <div className="flex items-center justify-between mb-8 relative">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200"></div>
          <div className="relative z-10 flex flex-col items-center">
            <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm">1</span>
            <span className="text-xs text-gray-500 mt-1">Account Details</span>
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step === 2 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'}`}>2</span>
            <span className="text-xs text-gray-500 mt-1">Additional Questions</span>
          </div>
        </div>

        {step === 1 ? (
          <form onSubmit={handleNext} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Company / Name *</label>
              <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Email Address *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Phone *</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Country *</label>
              <select name="country" value={formData.country} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm bg-white focus:outline-none focus:border-orange-500">
                <option value="">Select Country</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Address 1 *</label>
              <input type="text" name="address1" value={formData.address1} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Address 2</label>
              <input type="text" name="address2" value={formData.address2} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">City *</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} required className="w-full px-3 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Region</label>
                <input type="text" name="region" value={formData.region} onChange={handleChange} className="w-full px-3 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Postal Code *</label>
                <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required className="w-full px-3 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500" />
              </div>
            </div>
            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-full transition cursor-pointer text-sm shadow-md mt-4">
              Next
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Instant messenger</label>
                <select name="messengerType" value={formData.messengerType} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm bg-white focus:outline-none focus:border-orange-500">
                  <option value="Microsoft Teams">Microsoft Teams</option>
                  <option value="Skype">Skype</option>
                  <option value="Telegram">Telegram</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Link (Optional)</label>
                <input type="text" name="messengerLink" value={formData.messengerLink} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Did someone refer you to us? If so, who was it?</label>
              <input type="text" name="referredBy" value={formData.referredBy} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">How did you hear about us?</label>
              <input type="text" name="howDidYouHear" value={formData.howDidYouHear} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Which campaigns are you working?</label>
              <input type="text" name="campaignsWorking" value={formData.campaignsWorking} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">What primary traffic source do you work with?</label>
              <input type="text" name="primaryTrafficSource" value={formData.primaryTrafficSource} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">What campaign/vertical are you looking for?</label>
              <input type="text" name="campaignLookingFor" value={formData.campaignLookingFor} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500" />
            </div>
            <div className="flex items-start space-x-2 pt-2">
              <input type="checkbox" name="agreeToTerms" id="affTerms" checked={formData.agreeToTerms} onChange={handleChange} className="mt-1 h-4 w-4 text-orange-500 border-gray-300 rounded" required />
              <label htmlFor="affTerms" className="text-xs text-gray-600">
                I agree to the <span className="text-orange-500 underline cursor-pointer">Terms and Conditions</span>
              </label>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <button type="button" onClick={() => setStep(1)} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-full transition cursor-pointer text-sm shadow-md">
                Previous
              </button>
              <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-full transition cursor-pointer text-sm shadow-md">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}