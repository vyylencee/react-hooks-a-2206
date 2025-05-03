'use client';

import { TopNav2 } from '@/app/ui/dashboard/topnav';
import { poppins } from '@/app/ui/fonts';
import { EditButton, DeleteButton } from '@/app/ui/button';

const daftarTransaksi = [
  {
    noTransaksi: 2001,
    tanggalTransaksi: '20-01-2025',
    totalBarang: 4,
    totalHarga: 35000
  },

  {
    noTransaksi: 2002,
    tanggalTransaksi: '12-02-2025',
    totalBarang: 2,
    totalHarga: 78000
  },

  {
    noTransaksi: 2003,
    tanggalTransaksi: '28-02-2025',
    totalBarang: 3,
    totalHarga: 45000
  },

  {
    noTransaksi: 2004,
    tanggalTransaksi: '19-03-2025',
    totalBarang: 7,
    totalHarga: 7000
  },

  {
    noTransaksi: 2005,
    tanggalTransaksi: '09-04-2025',
    totalBarang: 6,
    totalHarga: 60000
  },
]


export default function TransaksiPage() {
  return (
    <main className='flex min-h-screen flex-col p-6 bg-yellow-100'>
      <TopNav2 />
      <div className='mt-24'>
        <button onClick={() => window.location.href = '/admin/transaksi/tambah'} className={`${poppins.className} text-center text-lg font-semibold text-black mt-4 w-52 h-10 rounded-lg justify-center border-4 border-red-800 hover:bg-red-800 hover:text-white transition-colors`}>
          Tambah Transaksi
        </button>

        <div className='bg-white w-full h-14 border-black border-2 rounded-lg mt-6'>
          <div className='flex justify-between'>
            <span className={`${poppins.className} text-lg font-bold ml-4 mt-3`}>No. Transaksi</span>
            <span className={`${poppins.className} text-lg font-bold  ml-8 mt-3`}>Tanggal Transaksi</span>
            <span className={`${poppins.className} text-lg font-bold ml-4 mr-1 mt-3`}>Total Barang</span>
            <span className={`${poppins.className} text-lg font-bold mr-1 mt-3`}>Total Harga</span>
            <span className={`${poppins.className} text-lg font-bold mr-24 mt-3`}>Aksi</span>
          </div>
        </div>

        <div className='relative'>
          {daftarTransaksi.map((transaksi) => (
            <div key={transaksi.noTransaksi} className='bg-white w-ful h-12 border-black border-2 rounded-lg mt-4'>
              <div className='flex justify-between'>
                <span className={`${poppins.className} w-1/4 text-left text-lg font-medium ml-4 mt-2`}>{transaksi.noTransaksi}</span>
                <span className={`${poppins.className} w-1/5 text-center text-lg font-medium ml-16 mr-2 mt-2`}>{transaksi.tanggalTransaksi}</span>
                <span className={`${poppins.className} w-1/3  text-center text-lg font-medium ml-16 mr-1 mt-2`}>{transaksi.totalBarang}</span>
                <span className={`${poppins.className} w-1/4 text-center text-lg font-medium ml-2 mr-16  mt-2`}>{transaksi.totalHarga}</span>
                <div onClick={() => window.location.href = '/admin/transaksi/edit'} className='inline-flex mt-2 mr-4'>
                  <EditButton />
                </div>
                <div className='inline-flex mt-2 mr-4'>
                  <DeleteButton />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div></div>
      </div>
    </main>
  )
}
