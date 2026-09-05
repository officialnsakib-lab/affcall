import dbConnect from '@/lib/mongodb';
import Lead from '@/models/Lead';
import Contact from '@/models/Contact';
import Affiliate from '@/models/Affiliate';
import { Users, Mail, Phone, Calendar, Database, AlertCircle } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  let allSubmissions: any[] = [];
  let hasError = false;

  try {
    await dbConnect();
    
    // সব মডেল থেকে ডেটা একসাথে ফেচ করা হচ্ছে (.lean() ব্যবহার করা হয়েছে যাতে প্লেইন অবজেক্ট পাওয়া যায়)
    const leads = await Lead.find({}).sort({ createdAt: -1 }).lean();
    const contacts = await Contact.find({}).sort({ createdAt: -1 }).lean();
    const affiliates = await Affiliate.find({}).sort({ createdAt: -1 }).lean();

    // সব ডেটাকে একটি এরেতে একত্র করা হলো
    allSubmissions = [
      ...leads.map((item: any) => ({ 
        ...item, 
        _id: item._id.toString(),
        type: 'Lead / Simple Form' 
      })),
      ...contacts.map((item: any) => ({ 
        ...item, 
        _id: item._id.toString(),
        name: `${item.firstName || ''} ${item.lastName || ''}`.trim() || item.companyName || 'Advertiser',
        message: `Industry: ${item.industry || 'N/A'}, Calls/Day: ${item.callsPerDay || 'N/A'}`,
        type: 'Advertiser' 
      })),
      ...affiliates.map((item: any) => ({ 
        ...item, 
        _id: item._id.toString(),
        name: item.companyName || 'Affiliate User',
        message: `Country: ${item.country || 'N/A'}, Traffic: ${item.primaryTrafficSource || 'N/A'}`,
        type: 'Affiliate' 
      })),
    ].sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());

  } catch (error) {
    console.error("Dashboard database fetch error:", error);
    hasError = true;
  }

  return (
    <div className="min-h-screen bg-[#0b132b] text-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        
        {/* ড্যাশবোর্ড হেডার */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-gray-800 pb-6">
          <div>
            <span className="text-orange-500 text-xs font-bold tracking-widest uppercase">— Admin Panel —</span>
            <h1 className="text-3xl font-extrabold mt-1">AffCall Unified Dashboard</h1>
            <p className="text-gray-400 text-sm mt-1">Manage and view all incoming affiliate, advertiser, and lead submissions.</p>
          </div>
          <div className="mt-4 md:mt-0 bg-[#1e293b] px-4 py-2.5 rounded-xl border border-gray-700 flex items-center space-x-3 shadow-md">
            <Database className="w-5 h-5 text-orange-500" />
            <div>
              <p className="text-xs text-gray-400">Total Submissions</p>
              <p className="text-lg font-bold">{allSubmissions.length}</p>
            </div>
          </div>
        </div>

        {/* ডেটাবেজ এরর অ্যালার্ট */}
        {hasError && (
          <div className="mb-6 bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl flex items-center space-x-3">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm">Could not connect to the database or fetch submissions. Please check your MongoDB connection.</p>
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
                  <th className="p-4 font-semibold">Details / Message</th>
                  <th className="p-4 font-semibold">Submission Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 text-sm">
                {allSubmissions.map((item: any) => (
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
                  </tr>
                ))}
                
                {allSubmissions.length === 0 && !hasError && (
                  <tr>
                    <td colSpan={6} className="p-12 text-center text-gray-500">
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
    </div>
  );
}