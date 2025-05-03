'use client';

import { poppins } from '@/app/ui/fonts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


const links = [
  { name: 'Home', href: '/', },
  { name: 'About', href: '/customer/about', },
  { name: 'Catalogue', href: '/customer/catalogue', },
  { name: 'Contact', href: '/customer/contact', },
  { name: 'Profile', href: '/customer/profile', },
];

const adminLinks = [
  { name: 'Dashboard', href: '/admin', },
  { name: 'Kelola Produk', href: '/admin/produk', },
  { name: 'Kelola Transaksi', href: '/admin/transaksi', },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-4">
      {links.map((link) => (
        <Link
        key={link.name}
        href={link.href}
        className={clsx(
          poppins.className,'text-white text-lg font-bold mr-20 items-center text-center justify-normal',
          {
            'underline': pathname === link.href,
          },
        )}
      >
        {link.name}
      </Link>
      ))}
    </div>
  );
}

export function AdminNavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-4">
      {adminLinks.map((link) => (
        <Link
        key={link.name}
        href={link.href}
        className={clsx(
          poppins.className,'text-white text-lg font-bold mr-20 items-center text-center justify-normal',
          {
            'underline': pathname === link.href,
          },
        )}
      >
        {link.name}
      </Link>
      ))}
    </div>
  );
}