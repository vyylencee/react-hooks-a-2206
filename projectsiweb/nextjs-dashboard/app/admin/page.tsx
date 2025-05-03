'use client';

import Image from 'next/image';
import Link from 'next/link';
import { poppins, quicksand } from '@/app/ui/fonts';
import { TopNav2 } from '../ui/dashboard/topnav';

export default function Dashboard() {
  return (
    <div className={`flex min-h-screen flex-col p-6 bg-yellow-100 ${poppins.className}`}>
      <TopNav2 />
      <div className='mt-20'>
      <h1 className="text-3xl font-bold my-6 px-6">Dashboard</h1>

      <div className="mb-6 bg-white rounded-lg shadow p-6 mx-6">
        <h2 className="text-lg font-semibold mb-2">Top Products</h2>
        <div className="space-y-2">
          {[
            { name: "Indomie Mi Instan Kari Ayam 70 g", sales: 45, color: "bg-blue-400" },
            { name: "Bango Kecap Manis 100ml", sales: 29, color: "bg-green-300" },
            { name: "Ultra Milk UHT Full Cream 250 ml", sales: 18, color: "bg-purple-300" },
            { name: "OREO Biskuit Cokelat 119.6 g", sales: 25, color: "bg-orange-300" },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <span className="w-8 text-gray-500">{`0${index + 1}`}</span>
              <span className="flex-1">{item.name}</span>
              <div className="w-1/3">
                <div className={`h-2 rounded-full ${item.color}`} style={{ width: `${item.sales}%` }}></div>
              </div>
              <span className="w-12 text-right text-gray-600">{item.sales}%</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mx-6 mb-6">
  <div className="flex items-center justify-between mb-4">
    <div>
      <h2 className="text-lg font-semibold">Penjualan Hari Ini</h2>
      <p className="text-sm text-gray-500">Ringkasan Penjualan</p>
    </div>
    <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 text-sm font-semibold rounded transition">
  Export
</button>


  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {[
      { title: "Total Penjualan", value: "100k", change: "+8%", color: "bg-pink-100", text: "text-blue-400" },
      { title: "Total Order", value: "300", change: "+5%", color: "bg-orange-100", text: "text-blue-400" },
      { title: "Produk Terjual", value: "5", change: "+2%", color: "bg-green-100", text: "text-blue-600" },
      { title: "Pelanggan Baru", value: "8", change: "3%", color: "bg-purple-100", text: "text-blue-600" },
    ].map((item, index) => (
      <div key={index} className={`${item.color} p-4 rounded-lg`}>
        <p className="text-sm text-gray-500">{item.title}</p>
        <h2 className="text-xl font-bold">{item.value}</h2>
        <p className={`${item.text} text-xs`}>{item.change} dari hari sebelumnya</p>
      </div>
    ))}
  </div>
</div>

      </div>

    </div>
  );
}
