import Link from "next/link";

export default function Footer () {
  return (
      <footer className="bg-[#D82B2B] text-white text-center py-6 mt-6">
        <h4 className="mb-2">© 2025 VAPO Portfolio. All rights reserved.</h4>
        <div className="flex justify-center space-x-4">
          <a href="https://www.instagram.com/">
            Instagram
          </a>
          <a href="https://www.whatsapp.com/contact">
            WhatsApp
          </a>
        </div>
      </footer>
  );
}
