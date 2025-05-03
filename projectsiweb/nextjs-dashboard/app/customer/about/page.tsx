'use client';

import { poppins, quicksand, fredoka } from '@/app/ui/fonts';
import Image from 'next/image';
import fotobelanja from '@/public/shop.png';
import makanan from '@/public/mie.png';
import minuman from '@/public/aqua.png';
import kebutuhanrumah from '@/public/tisu.png';
import kebersihan from '@/public/wipol.png';
import ibudananak from '@/public/popok.png';
import warung from '@/public/warung.png';
import Link from 'next/link';
import { NavigasiUtama } from '@/app/ui/dashboard/topnav';

export default function AboutPage() {
    const testimonials = [
      {
        name: 'Sarah Manoban',
        rating: 4,
        comment: 'Sangat bagus, ramah untuk masyarakat',
        image: "/muka jelek.jpg"
      },
      {
        name: 'Kim Wahyu',
        rating: 5,
        comment: 'Baik sekali, pembelian lebih cepat',
        image: "/popo.png",
      },
      {
        name: 'Ibu nya Wahyu',
        rating: 4,
        comment: 'ok, sy gk ribet',
        image: '/ibuibu.png',
      },
      {
        name: 'Adik qm',
        rating: 5,
        comment: 'wow, kit mama keren xixixi #mbadfrr',
        image: '/sarange.png',
      },
      {
        name: 'Xi Baba',
        rating: 5,
        comment: 'Nihao, Mami i suka',
        image: '/china.png',
      },
      {
        name: 'kak gem',
        rating: 4,
        comment: 'KATA-KATA HARI INI, KLONGGA MARKET KEREN PAHAM!!',
        image: '/kakgen.png',
      },
    ];
    return (
        <main className="flex min-h-screen flex-col bg-yellow-100 overflow-hidden">
            <NavigasiUtama />
            <div className='mt-24 ml-7'>
            <a className='inline-flex font-semibold text-5xl'>
                <span className={` ${poppins.className} ml-14 mr-2 mt-9 text-black`}>
                    Belanja
                </span>
                <span className={` ${poppins.className} ml-4 mt-9 text-green-800`}>
                    Nyaman
                </span>
            </a>
            </div>
            <a className='inline-flex ml-7 font-semibold text-4xl'>
                <span className={` ${poppins.className} ml-14 mr-2 mt-5 text-black`}>
                    Info
                </span>
                <span className={`${poppins.className} ml-5 mt-5 text-blue-700`}>
                    Jelas
                </span>
            </a>
            <div className='flex justify-between '>
                <a className='inline-flex ml-7 font-semibold text-5xl'>
                    <span className={`${poppins.className} ml-14 mr-2 mt-5 text-black`}>
                        Harga
                    </span>
                    <span className={`${poppins.className} ml-5 mt-5 text-green-800`}>
                        Pas
                    </span>
                </a>
                <div className='inline-flex justify-normal'>
                    <div className='inline-flex overflow-hidden rounded-l-full rounded-r-3xl'>
                        <Image
                            alt=''
                            width={700}
                            height={800}
                            src={fotobelanja}
                            className='object-cover'>
                        </Image>
                    </div>
                </div>
            </div>

            <div className='bg-red-800 h-48 w-screen left-0 right-0'>
                <div className='flex ml-14 mt-7 justify-start'>
                    <a className={`${poppins.className} text-4xl text-white font-semibold`}>Apa itu Klongga Market?</a>
                </div>
                <div className='flex ml-14 mt-6 mr-5 justify-start'>
                    <a className={`${quicksand.className} text-2xl text-white font-medium`}>Klongga Market adalah toko kelontong yang menyediakan berbagai jenis kebutuhan sehari-hari. Toko ini melayani pelanggan lewat toko fisik yang dapat dikunjungi serta website yang memudahkan pelanggan untuk memesan barang dimana pun dan kapan pun.</a>
                </div>
            </div>


            <div className='flex mr-14 mt-16 mb-4 justify-end'>
                <a className={`${poppins.className} text-black text-5xl font-semibold`}>KLONGGA MARKET MENYEDIAKAN</a>
            </div>
            <div className='flex justify-between mt-8'>
                <div className='inline-flex justify-start ml-28'>
                    <Image
                        alt=''
                        src={makanan}
                        width={150}
                        height={150}
                        className='rounded-full'>
                    </Image>
                </div>

                <div className='inline-flex justify-start ml-36 mr-28'>
                    <Image
                        alt=''
                        src={minuman}
                        width={150}
                        height={150}
                        className='rounded-full'>
                    </Image>
                </div>

                <div className='inline-flex justify-center'>
                    <Image
                        alt=''
                        src={kebutuhanrumah}
                        width={150}
                        height={150}
                        className='rounded-full'>
                    </Image>
                </div>

                <div className='inline-flex justify-end ml-28 mr-36'>
                    <Image
                        alt=''
                        src={kebersihan}
                        width={150}
                        height={150}
                        className='rounded-full'>
                    </Image>
                </div>

                <div className='inline-flex justify-end mr-28'>
                    <Image
                        alt=''
                        src={ibudananak}
                        width={150}
                        height={150}
                        className='rounded-full'>
                    </Image>
                </div>

            </div>

            <div className='flex justify-between mt-8'>
                <div className='inline-flex justify-start ml-36 mr-6'>
                    <a className={`${fredoka.className} text-black text-2xl font-semibold`}>Makanan</a>
                </div>

                <div className='inline-flex justify-start ml-44 mr-14'>
                    <a className={`${fredoka.className} text-black text-2xl font-semibold`}>Minuman</a>
                </div>

                <div className='inline-flex justify-center ml-20'>
                    <a className={`${fredoka.className} text-black text-2xl font-semibold`}>Kebutuhan Rumah</a>
                </div>

                <div className='inline-flex justify-end ml-28 mr-44'>
                    <a className={`${fredoka.className} text-black text-2xl font-semibold`}>Kebersihan</a>
                </div>

                <div className='inline-flex justify-end mr-28'>
                    <a className={`${fredoka.className} text-black text-2xl font-semibold`}>Ibu dan Anak</a>
                </div>
            </div>


            <div className={`flex min-h-screen flex-col p-6 bg-yellow-100 text-black ${poppins.className} ${quicksand.className} ${fredoka.className}`}>
            <NavigasiUtama />
            <div className='flex justify-center mt-20 ml-7'></div>
            <div className="px-6 py-6">
                <h1 className="text-4xl font-bold">
                Cari Tau, Apa Kata Orang Orang Tentang Klongga Market!
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-10">
                {testimonials.map((t, i) => (
                <div key={i} className="bg-red-800 text-white p-4 rounded-lg shadow-md w-85 h-60">
                    <div className="flex items-center justify-between mb-2">
                    <div className="flex space-x-1 text-yellow-400 text-2xl">
                        {[1, 2, 3, 4, 5].map((num) => (
                        <span key={num}>{num <= t.rating ? '⭐' : '☆'}</span>
                        ))}
                    </div>
                    <img
                        src={t.image}
                        alt={t.name}
                        style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        marginRight: "15px",
                        marginTop: "4px"
                        }}
                    />
                    </div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-ml mt-1">{t.comment}</div>
                </div>
                ))}
            </div>
            </div>

            <div className='flex justify-between'>
                <div className='flex-col mt-20 ml-14 '>
                    <div className='mb-6'>
                        <a className={` ${poppins.className} font-semibold text-4xl text-black`}>LOKASI</a>
                    </div>
                    <a className={` ${quicksand.className} font-semibold text-2xl text-black`}>Jalan Babarsari I No.4, Janti, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281</a>
                    <div className='mt-12 mb-5'>
                        <a className={` ${quicksand.className} font-bold text-2xl text-black`}>Google Maps :</a>
                    </div>
                    
                    <div className='mt-3 mb-12'>
                    <Link
                        href="https://maps.app.goo.gl/BRh5QY1FryTgUXpu7?g_st=aw">
                        <span className={`${quicksand.className} text-blue-600 text-2xl font-semibold`}>https://maps.app.goo.gl/BRh5QY1FryTgUXpu7?g_st=aw</span>
                    </Link>
                </div>

                </div>
                <div className='inline-flex mt-20 mb-12 right-0 z-50'>
                    <Image
                        alt=''
                        src={warung}
                        width={600}
                        height={500}
                        className='rounded-tl-3xl rounded-bl-3xl'>
                    </Image>
                </div>
            </div>
        </main>
    )
}