'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Users, Mail, Phone, Calendar, Database, AlertCircle, Trash2, RefreshCw, Eye, X } from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();
  const [allSubmissions, setAllSubmissions] = useState<any[]>([]);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<any | null>(null); // ফুল ডিটেইলস পপআপের জন্য

  // ডাটা লোড করার ফাংশন
  const fetchSubmissions = async () => {
    setLoading(true);
    setHasError(false);
    try {
      const res = await fetch('/api/dashboard-data');
      const data = await res.json();
      if (res.ok) {
        setAllSubmissions(data.submissions || []);
      } else {
        setHasError(true);
      }
    } catch (error) {
      console.error("Dashboard fetch error:", error);
      setHasError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  // ডাটা ডিলিট করার ফাংশন
  const handleDelete = async (id: string, type: string) => {
    if (!confirm('Are you sure you want to delete this submission?')) return;

    try {
      const res = await fetch(`/api/submissions/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type })
      });
      
      const result = await res.json();
      if (res.ok && result.success) {
        setAllSubmissions(prev => prev.filter(item => item._id !== id));
        if (selectedSubmission?._id === id) {
          setSelectedSubmission(null);
        }
      } else {
        alert(result.message || 'Failed to delete submission.');
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Server connection error while deleting.');
    }
  };

  return (
    <div className="min-h-screen bg-[#0b132b] text-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        
        {/* ড্যাশবোর্ড হেডার */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-gray-800 pb-6">
          <div>
            <span className="text-orange-500 text-xs font-bold tracking-widest uppercase">— Admin Panel —</span>
            <h1 className="text-3xl font-extrabold mt-1">AffCall Unified Dashboard</h1>
            <p className="text-gray-400 text-sm mt-1">Manage, verify and delete incoming affiliate, advertiser, and lead submissions.</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button 
              onClick={fetchSubmissions}
              className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2.5 rounded-xl border border-gray-700 flex items-center space-x-2 transition text-sm cursor-pointer"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-orange-500' : ''}`} />
              <span>Refresh</span>
            </button>

            <div className="bg-[#1e293b] px-4 py-2.5 rounded-xl border border-gray-700 flex items-center space-x-3 shadow-md">
              <Database className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-xs text-gray-400">Total Submissions</p>
                <p className="text-lg font-bold">{allSubmissions.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ডেটাবেজ এরর অ্যালার্ট */}
        {hasError && (
          <div className="mb-6 bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl flex items-center space-x-3">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm">Could not connect to the database or fetch submissions. Please check your connection.</p>
          </div>
        )}

        {/* লিড টেবিল সেকশন */}
        <div className="bg-[#111827] rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1f2937] text-gray-300 text-xs uppercase tracking-wider border-b border-gray-800">
                  <th className="p-4 font-semibold">Name / Company</th>
                  <th className="p-4 font-semibold">Form Type</th>
                  <th className="p-4 font-semibold">Email Address</th>
                  <th className="p-4 font-semibold">Phone</th>
                  <th className="p-4 font-semibold">Summary Details</th>
                  <th className="p-4 font-semibold">Submission Date</th>
                  <th className="p-4 font-semibold text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 text-sm">
                {allSubmissions.map((item: any) => (
                  <tr key={item._id} className="hover:bg-[#1a2234] transition">
                    <td className="p-4 font-medium text-white flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center font-bold flex-shrink-0">
                        {item.name ? item.name.charAt(0).toUpperCase() : (item.firstName ? item.firstName.charAt(0).toUpperCase() : 'U')}
                      </div>
                      <span className="truncate max-w-[180px]">
                        {item.name || (item.firstName ? `${item.firstName} ${item.lastName || ''}` : 'N/A')}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border whitespace-nowrap ${
                        item.type === 'Advertiser' 
                          ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' 
                          : 'bg-orange-500/10 text-orange-400 border-orange-500/20'
                      }`}>
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
                    <td className="p-4 text-gray-400 max-w-xs truncate" title={item.message || item.companyName}>
                      {item.message || item.companyName || item.industry || 'No additional details'}
                    </td>
                    <td className="p-4 text-gray-400 whitespace-nowrap">
                      <div className="flex items-center space-x-1.5 text-xs">
                        <Calendar className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" />
                        <span>{item.createdAt ? new Date(item.createdAt).toLocaleString() : 'N/A'}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center space-x-2 whitespace-nowrap">
                      <button
                        onClick={() => setSelectedSubmission(item)}
                        className="bg-blue-500/10 hover:bg-blue-600 text-blue-400 hover:text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition inline-flex items-center space-x-1 cursor-pointer"
                        title="View All Fields"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Details</span>
                      </button>
                      <button
                        onClick={() => handleDelete(item._id, item.type)}
                        className="bg-red-500/10 hover:bg-red-600 text-red-400 hover:text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition inline-flex items-center space-x-1 cursor-pointer"
                        title="Delete Submission"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete</span>
                      </button>
                    </td>
                  </tr>
                ))}
                
                {allSubmissions.length === 0 && !hasError && !loading && (
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

      </div>

      {/* ফুল ডিটেইলস পপআপ মডাল (সব ডাটা দেখতে পাওয়ার জন্য) */}
      {selectedSubmission && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#111827] border border-gray-800 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden my-8">
            <div className="bg-[#1f2937] px-6 py-4 flex justify-between items-center border-b border-gray-800">
              <div>
                <span className="text-orange-500 text-xs font-bold uppercase tracking-wider">{selectedSubmission.type} Details</span>
                <h3 className="text-lg font-bold text-white">
                  {selectedSubmission.name || (selectedSubmission.firstName ? `${selectedSubmission.firstName} ${selectedSubmission.lastName || ''}` : 'Submission Information')}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedSubmission(null)}
                className="text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 p-2 rounded-xl transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 max-h-[70vh] overflow-y-auto space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(selectedSubmission).map(([key, value]) => {
                  if (key === '__v') return null;
                  return (
                    <div key={key} className="bg-[#1a2234] p-3 rounded-xl border border-gray-800/80">
                      <p className="text-xs text-orange-400 font-semibold uppercase tracking-wider mb-1">{key}</p>
                      <p className="text-sm text-gray-200 break-words">
                        {typeof value === 'object' && value !== null 
                          ? JSON.stringify(value) 
                          : String(value ?? 'N/A')}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-[#1f2937] px-6 py-4 border-t border-gray-800 flex justify-end space-x-3">
              <button
                onClick={() => handleDelete(selectedSubmission._id, selectedSubmission.type)}
                className="bg-red-500/10 hover:bg-red-600 text-red-400 hover:text-white px-4 py-2 rounded-xl text-xs font-semibold transition flex items-center space-x-1.5 cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete Submission</span>
              </button>
              <button
                onClick={() => setSelectedSubmission(null)}
                className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-5 py-2 rounded-xl text-xs font-semibold transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}