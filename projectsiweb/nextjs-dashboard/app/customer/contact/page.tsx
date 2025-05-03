import Footer from "@/app/ui/dashboard/footer";
import { NavigasiUtama } from "@/app/ui/dashboard/topnav";
import { poppins, quicksand, fredoka } from '@/app/ui/fonts';
import { Instagram, Phone } from 'lucide-react';

export default function ContactUs() {
  return (
    <main className="flex min-h-screen flex-col bg-yellow-100 overflow-hidden">
      <NavigasiUtama />
      <div className="flex-1 flex mt-32 text-black items-center justify-center">
      <div className="bg-yellow-200 border-[8px]  border-red-900 rounded-xl px-10 py-8 w-full max-w-3xl min-h-[350px] shadow-xl">
        <h2 className={`text-4xl font-bold mb-6 ${poppins.className}`}>Contact Us !</h2>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Apa yang kamu butuhkan..."
            className={`flex-1 p-2 rounded border border-gray-300 ${quicksand.className}`}
          />
          <button className={`bg-blue-600 text-white px-4 py-2 rounded ${poppins.className}`}>
            KIRIM
          </button>
        </div>
        <hr className="border-gray-400 mb-10" />
        <div className={`flex flex-col items-center gap-3 text-sm ${quicksand.className}`}>
          <div className="flex items-center gap-2">
            <Instagram className="w-5 h-5" />
            <span>KLONGGA_ID</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <span>+62-7889-1223-878</span>
          </div>
        </div>
        <hr className="border-gray-400 mt-10" />
      </div>
      </div>
      <Footer />
    </main>
  );
}
