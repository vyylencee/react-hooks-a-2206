'use client';

import { TopNav1 } from '@/app/ui/dashboard/topnav';
import { poppins,quicksand } from '@/app/ui/fonts';
import Image from 'next/image';


export default function Dashboard() {
  return (
    <main className='flex min-h-screen flex-col p-6 bg-yellow-100'>
      <TopNav1 />
    </main>
  )
}
