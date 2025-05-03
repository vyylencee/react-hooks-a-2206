'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { poppins, quicksand } from '@/app/ui/fonts';
import { NavigasiUtama } from '@/app/ui/dashboard/topnav';
import Footer from './ui/dashboard/footer';

const promoImages = [
  '/promo1.png',
  '/promo2.png',
  '/promo3.png',
  '/promo4.png',
  '/promo5.png',
];

const products = [
  { name: 'Kecap Bango Manis', price: 20000, img: '/bango.png' },
  { name: 'ABC Sambal Asli Botol', price: 10000, img: '/sambalabc.jpg' },
  { name: 'Sirup Marjan Cocopandan', price: 25000, img: '/marjan.png' },
  { name: 'Indomie Kari Ayam', price: 5000, img: '/indomie.png' },
  { name: 'OREO Biskuit Cokelat', price: 10000, img: '/oreo.png' },
  { name: 'Piattos Snack BBQ', price: 5000, img: '/piattos.png' },
  { name: 'Teh Pucuk Harum', price: 3500, img: '/pucuk.png' },
  { name: 'Ultra Milk Full Cream', price: 8500, img: '/ultra.png' },
];

export default function Page() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 320;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 320;
    }
  };

  return (
    <main className="flex min-h-screen flex-col p-6 bg-yellow-100">
      {/* Header */}
      <NavigasiUtama />
      <div className='flex justify-center mt-20 ml-7'></div>
      {/* bagian Promo */}
      <section className="p-4">
        <h2 className={`${poppins.className} text-xl font-bold mb-2`}>Promo bulan ini</h2>
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth"
          >
            {promoImages.map((src, index) => (
              <div
                key={index}
                className="min-w-[300px] h-[160px] flex-shrink-0 rounded-lg overflow-hidden relative"
              >
                <Image
                  src={src}
                  alt={`Promo ${index + 1}`}
                  width={300}
                  height={160}
                  className="w-[300px] h-[160px] object-contain"
                />
              </div>
            ))}
          </div>
          <button
            onClick={scrollLeft}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white p-2 rounded-full shadow"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            onClick={scrollRight}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white p-2 rounded-full shadow"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Produk Terlaris */}
      <section className="p-6">
        <h2 className={`${poppins.className} text-xl font-bold mb-4`}>Produk Terlaris Bulan Ini</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {products.map((item) => (
            <div
              key={item.name}
              className="bg-white p-3 rounded-lg shadow-md flex flex-col justify-between h-full text-center hover:shadow-lg transition"
            >
              <div>
                <Image
                  src={item.img}
                  alt={item.name}
                  width={140}
                  height={140}
                  className="w-[140px] h-[140px] object-contain mx-auto mb-2"
                />
                <h3 className={`${quicksand.className} font-semibold text-sm`}>{item.name}</h3>
                <p className={`${quicksand.className} text-black font-bold mt-1`}>
                  Rp {item.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Metode Pembayaran */}
      <section className="bg-[#FFF1C1] p-6">
        <h2 className={`${poppins.className} text-center font-bold mb-4 text-lg`}>Metode Pembayaran</h2>
        <div className="flex justify-center">
          <Image
            src="/metode-pembayaran.png"
            alt="Metode Pembayaran"
            width={400}
            height={100}
            className="object-contain"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
