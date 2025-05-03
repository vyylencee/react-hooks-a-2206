'use client';

import { poppins } from '@/app/ui/fonts';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function TambahTransaksiPage() {
  const [pilihTanggal, setPilihTanggal] = useState(new Date());
  return (
    <main className='flex min-h-screen flex-col p-6 bg-yellow-100'>
      <div className="mt-24">
        <div className="bg-white w-full h-96 border-red-800 border-2 rounded-lg ">
          <div className='mt-5'>
            <span className={`${poppins.className} text-2xl font-bold ml-4`}>Formulir Tambah Transaksi</span>
            <div className="mt-5">
              <span className={`${poppins.className} text-base font-semibold ml-4`}>Kode Transaksi</span>
              <input
                placeholder='Masukkan kode transaksi'
                className='w-1/2 h-8 ml-10 border-black border-2 rounded-lg'>
              </input>
            </div>

            <div className="mt-5">
              <span className={`${poppins.className} text-base font-semibold ml-4 mr-4`}>Tanggal Transaksi</span>
              <DatePicker
                selected={pilihTanggal}
                onChange={() => setPilihTanggal(new Date())}
                showTimeSelect
                dateFormat="dd MMMM yyyy"
                className="w-full p-2 border-black border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className='mt-5'>
              <span className={`${poppins.className} text-base font-semibold ml-4 mr-5`}>Total Barang</span>
              <input
                placeholder='Masukkan jumlah barang yang dibeli'
                className='w-1/2 h-8 ml-10 border-black border-2 rounded-lg'>
              </input>
            </div>

            <div className='mt-5'>
              <span className={`${poppins.className} text-base font-semibold ml-4 mr-7`}>Total Harga</span>
              <input
                placeholder='Masukkan total harga belanja yang dibeli'
                className='w-1/2 h-8 ml-10 border-black border-2 rounded-lg'>
              </input>
            </div>

            <div className='mt-7 flex justify-end'>
              <div className='mr-10'>
                <button onClick={() => window.location.href = '/admin/transaksi'} className={`${poppins.className} text-lg font-semibold w-32 h-14 border-black border-2 text-black rounded-full bg-red-600 hover:text-white transition-colors`}>Kembali</button>
              </div>
              <div className='mr-10'>
                <button className={`${poppins.className} text-lg font-semibold w-32 h-14 border-black border-2 text-black rounded-full bg-green-400 hover:text-white transition-colors`}>Tambah</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}