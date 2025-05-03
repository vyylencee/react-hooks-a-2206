'use client';

import { SearchButton, BackButton } from '../button';
import { AdminNavLinks, NavLinks } from './nav-links';

export function TopNav1 () {
  return (
    <nav className='fixed top-0 left-0 w-full bg-red-700 py-5 shadow-md z-50'>
      <div className='flex items-center justify-between px-6'>
        <div className="flex items-center flex-grow">
          <BackButton />
        </div>
        <div className='inline-flex ml-40'>
          <div className='flex items-center text-center justify-end '>
            <AdminNavLinks />
          </div>
        </div>
      </div>
    </nav>
  )
}

export function TopNav2 () {
  return (
    <nav className='fixed top-0 left-0 w-full bg-red-700 py-5 shadow-md z-50'>
      <div className='flex items-center justify-between px-6'>
        <div className="flex items-center flex-grow">
          <BackButton />
          <input  
            type="text"
            placeholder="Mau cari apa?"
            className="px-4 py-2 rounded-md text-black w-full max-w-sm ml-28 "
          />
          <SearchButton />
        </div>
        <div className='inline-flex ml-40'>
          <div className='flex items-center text-center justify-end '>
            <AdminNavLinks />
          </div>
        </div>
      </div>
    </nav>
  )
}


export function NavigasiUtama () {
  return (
    <nav className='fixed top-0 left-0 w-full bg-red-700 py-7 shadow-md z-50'>
      <div className='flex items-center justify-between px-6'>
      <div className="flex items-center flex-grow">
          <input  
            type="text"
            placeholder="Cari produk apa hari ini..."
            className="px-4 py-2 rounded-md text-black w-full max-w-sm ml-28 "
          />
          <SearchButton />
        <div className='inline-flex ml-40'>
          <div className='flex items-center text-center justify-end '>
            <NavLinks />
          </div>
        </div>
      </div>
      </div>
    </nav>
  )
}
