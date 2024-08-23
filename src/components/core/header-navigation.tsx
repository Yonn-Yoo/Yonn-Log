'use client';

import { NavigationType, navArray } from '@/array/navArray';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HeaderNavigation() {
  const pathname = usePathname();
  const isCurrentPage = (link: NavigationType['link']) => pathname === link;

  return (
    <nav className="flex space-x-3">
      {navArray.map(({ label, link }) => (
        <Link
          href={link}
          key={label}
          className={`relative font-medium text-sm md:text-base 2xl:text-lg hover:text-teal-500/90 transition ${
            isCurrentPage(link) && 'text-teal-500 font-semibold'
          }`}
        >
          {label}
          {isCurrentPage(link) && (
            <div className="absolute inset-x-0 -bottom-1.5 h-[2px] bg-gradient-to-r from-teal-400/0 via-teal-400/40 to-teal-400/0 block" />
          )}
        </Link>
      ))}
    </nav>
  );
}
