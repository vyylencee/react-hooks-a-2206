import Link from 'next/link';
import { TopNav2 } from '@/app/ui/dashboard/topnav';
import { poppins,quicksand } from '@/app/ui/fonts';
import Image from 'next/image';
import gambar from '@/public/uht.png';
import gambar2 from '@/public/tehpucuk.png'
import gambar3 from '@/public/oreo.webp';
import gambar4 from '@/public/piattos.webp';
import { EditButton } from '@/app/ui/button';
import { DeleteButton } from '@/app/ui/button';


export default function AdminPage() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-yellow-100">
      <TopNav2 />
      <div className='flex justify-center mt-28 ml-7'>
        <div className='bg-white shadow-md p-8 rounded-lg mx-20 ml-4 mb-4'>
          <Image
            alt=''
            width={60}
            height={60}
            className='rounded-md position-left inline-block'
            src={gambar}>
            </Image>
            <div className='inline-flex ml-4'></div>
          <a className={`${quicksand.className} text-justify text-black text-md flex-1 ml-5 mr-72`}>Ultra Milk Susu UHT Full Cream 250 ml</a>
          <a className={`${poppins.className} text-justify text-black text-md font-semibold flex-1 ml-5 mr-10`}>Rp 8.500</a>
          <div className='inline-flex ml-10'></div>
          <EditButton />
          <div className='inline-flex ml-4'></div>
          <DeleteButton />
        </div>
      </div>
      
      <div className='flex justify-center ml-7'>
        <div className='bg-white shadow-md p-8 rounded-lg mx-20 gap-4 ml-4 mb-4'>
          <Image
            alt=''
            width={60}
            height={60}
            className='rounded-md position-left inline-block'
            src={gambar2}>
            </Image>
            <div className='inline-flex ml-4'></div>
          <a className={`${quicksand.className} text-justify text-black text-md ml-5 mr-60`}>Teh Pucuk Harum Melati 350 ml</a>
          <a className={`${poppins.className} text-justify text-black text-md font-semibold ml-28 mr-10`}>Rp 3.500</a>
          <div className='inline-flex ml-10'></div>
          <EditButton />
          <div className='inline-flex ml-4'></div>
          <DeleteButton />
        </div>
      </div>

      <div className='flex justify-center ml-7'>
        <div className='bg-white shadow-md p-8 rounded-lg mx-20 gap-4 ml-4 mb-4'>
          <Image
            alt=''
            width={60}
            height={60}
            className='rounded-md position-left inline-block'
            src={gambar3}>
            </Image>
            <div className='inline-flex ml-4'></div>
          <a className={`${quicksand.className} text-justify text-black text-md ml-5 mr-72`}>OREO Biskuit Cokelat 119.6g</a>
          <a className={`${poppins.className} text-justify text-black text-md font-semibold ml-20 mr-10`}>Rp 10.000</a>
          <div className='inline-flex ml-10'></div>
          <EditButton />
          <div className='inline-flex ml-4'></div>
          <DeleteButton />
        </div>
      </div>

      <div className='flex justify-center ml-7'>
        <div className='bg-white shadow-md p-8 rounded-lg mx-20 gap-4 ml-4 mb-4'>
          <Image
            alt=''
            width={60}
            height={60}
            className='rounded-md position-left inline-block'
            src={gambar4}>
            </Image>
            <div className='inline-flex ml-4'></div>
          <a className={`${quicksand.className} text-justify text-black text-md flex-1 ml-5 mr-56`}>Piattos Kentang Sapi Panggang 68 g</a>
          <a className={`${poppins.className} text-justify text-black text-md font-semibold flex-1 ml-20 mr-10`}>Rp 15.000</a>
          <div className='inline-flex ml-10'></div>
          <EditButton />
          <div className='inline-flex ml-4'></div>
          <DeleteButton />         
        </div>
      </div>
    </main>
  );
}
