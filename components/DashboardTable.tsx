'use client';

import React, { useState } from 'react';
import { Users, Mail, Phone, Calendar, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function DashboardTable({ initialSubmissions, hasError }: { initialSubmissions: any[], hasError: boolean }) {
  const [submissions, setSubmissions] = useState(initialSubmissions);
  const router = useRouter();

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this submission?')) return;

    try {
      const res = await fetch(`/api/submissions/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setSubmissions(prev => prev.filter(item => item._id !== id));
        router.refresh();
      } else {
        alert(data.message || 'Failed to delete');
      }
    } catch (error) {
      alert('Error connecting to server');
    }
  };

  return (
    <div className="bg-[#111827] rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#1f2937] text-gray-300 text-xs uppercase tracking-wider border-b border-gray-800">
              <th className="p-4 font-semibold">Name / Company</th>
              <th className="p-4 font-semibold">Form Type</th>
              <th className="p-4 font-semibold">Email Address</th>
              <th className="p-4 font-semibold">Phone</th>
              <th className="p-4 font-semibold">Details / Message</th>
              <th className="p-4 font-semibold">Submission Date</th>
              <th className="p-4 font-semibold text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800 text-sm">
            {submissions.map((item: any) => (
              <tr key={item._id} className="hover:bg-[#1a2234] transition">
                <td className="p-4 font-medium text-white flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center font-bold flex-shrink-0">
                    {item.name ? item.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <span className="truncate max-w-[180px]">{item.name || 'N/A'}</span>
                </td>
                <td className="p-4">
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20 whitespace-nowrap">
                    {item.type}
                  </span>
                </td>
                <td className="p-4 text-gray-300">
                  <div className="flex items-center space-x-1.5">
                    <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <span className="truncate max-w-[180px]">{item.email || 'N/A'}</span>
                  </div>
                </td>
                <td className="p-4 text-gray-300">
                  <div className="flex items-center space-x-1.5">
                    <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <span>{item.phone || 'N/A'}</span>
                  </div>
                </td>
                <td className="p-4 text-gray-400 max-w-xs truncate" title={item.message}>
                  {item.message || 'No additional details'}
                </td>
                <td className="p-4 text-gray-400 whitespace-nowrap">
                  <div className="flex items-center space-x-1.5 text-xs">
                    <Calendar className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" />
                    <span>{item.createdAt ? new Date(item.createdAt).toLocaleString() : 'N/A'}</span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500/10 hover:bg-red-600 text-red-400 hover:text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition inline-flex items-center space-x-1 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete</span>
                  </button>
                </td>
              </tr>
            ))}
            
            {submissions.length === 0 && !hasError && (
              <tr>
                <td colSpan={7} className="p-12 text-center text-gray-500">
                  <Users className="w-12 h-12 mx-auto text-gray-600 mb-3" />
                  <p className="text-base font-medium">No submissions found in the database yet.</p>
                  <p className="text-xs text-gray-600 mt-1">Submitted forms will appear here automatically.</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}