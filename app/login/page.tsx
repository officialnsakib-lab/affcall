'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push('/dashboard');
      router.refresh();
    } else {
      setError('ভুল পাসওয়ার্ড দিয়েছেন!');
    }
  };

  return (
    <div className="min-h-screen bg-[#0b132b] flex items-center justify-center text-white">
      <form onSubmit={handleLogin} className="bg-[#111827] p-8 rounded-2xl border border-gray-800 shadow-2xl w-96">
        <h1 className="text-2xl font-bold mb-6 text-center text-orange-500">Admin Login</h1>
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        <input
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-[#1e293b] border border-gray-700 rounded-xl px-4 py-3 mb-4 text-white focus:outline-none focus:border-orange-500"
          required
        />
        <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 transition font-semibold py-3 rounded-xl">
          Login
        </button>
      </form>
    </div>
  );
}