export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center text-white px-4">
      <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl max-w-md text-center">
        <h1 className="text-2xl font-bold text-orange-500 mb-2">ধন্যবাদ!</h1>
        <p className="text-sm text-gray-600 mb-6">আপনার ফর্মটি সফলভাবে জমা হয়েছে। খুব শীঘ্রই আমাদের একজন প্রতিনিধি আপনার সাথে যোগাযোগ করবেন।</p>
        <a href="/" className="inline-block bg-orange-500 text-white font-bold px-6 py-3 rounded-full hover:bg-orange-600 transition text-sm">
          হোম পেজে ফিরে যান
        </a>
      </div>
    </div>
  );
}