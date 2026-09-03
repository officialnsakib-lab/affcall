import dbConnect from '@/lib/mongodb';
import Lead from '@/models/Lead';
import { Users, Mail, Phone, Calendar, Database } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  await dbConnect();
  const leads = await Lead.find({}).sort({ createdAt: -1 }).lean();

  return (
    <div className="min-h-screen bg-[#0b132b] text-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        
        {/* ড্যাশবোর্ড হেডার */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-gray-800 pb-6">
          <div>
            <span className="text-orange-500 text-xs font-bold tracking-widest uppercase">— Admin Panel —</span>
            <h1 className="text-3xl font-extrabold mt-1">AffCall Lead Dashboard</h1>
            <p className="text-gray-400 text-sm mt-1">Manage and view all incoming affiliate and advertiser submissions.</p>
          </div>
          <div className="mt-4 md:mt-0 bg-[#1e293b] px-4 py-2.5 rounded-xl border border-gray-700 flex items-center space-x-3 shadow-md">
            <Database className="w-5 h-5 text-orange-500" />
            <div>
              <p className="text-xs text-gray-400">Total Leads</p>
              <p className="text-lg font-bold">{leads.length}</p>
            </div>
          </div>
        </div>

        {/* লিড টেবিল সেকশন */}
        <div className="bg-[#111827] rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1f2937] text-gray-300 text-xs uppercase tracking-wider border-b border-gray-800">
                  <th className="p-4 font-semibold">Name / Company</th>
                  <th className="p-4 font-semibold">Email Address</th>
                  <th className="p-4 font-semibold">Phone</th>
                  <th className="p-4 font-semibold">Details / Message</th>
                  <th className="p-4 font-semibold">Submission Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 text-sm">
                {leads.map((lead: any) => (
                  <tr key={lead._id.toString()} className="hover:bg-[#1a2234] transition">
                    <td className="p-4 font-medium text-white flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center font-bold">
                        {lead.name ? lead.name.charAt(0).toUpperCase() : 'U'}
                      </div>
                      <span>{lead.name}</span>
                    </td>
                    <td className="p-4 text-gray-300">
                      <div className="flex items-center space-x-1.5">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <span>{lead.email}</span>
                      </div>
                    </td>
                    <td className="p-4 text-gray-300">
                      <div className="flex items-center space-x-1.5">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <span>{lead.phone}</span>
                      </div>
                    </td>
                    <td className="p-4 text-gray-400 max-w-xs truncate" title={lead.message}>
                      {lead.message}
                    </td>
                    <td className="p-4 text-gray-400 whitespace-nowrap">
                      <div className="flex items-center space-x-1.5 text-xs">
                        <Calendar className="w-3.5 h-3.5 text-gray-500" />
                        <span>{new Date(lead.createdAt).toLocaleString()}</span>
                      </div>
                    </td>
                  </tr>
                ))}
                
                {leads.length === 0 && (
                  <tr>
                    <td colSpan={5} className="p-12 text-center text-gray-500">
                      <Users className="w-12 h-12 mx-auto text-gray-600 mb-3" />
                      <p className="text-base font-medium">No leads found in the database yet.</p>
                      <p className="text-xs text-gray-600 mt-1">Submitted forms will appear here automatically.</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}