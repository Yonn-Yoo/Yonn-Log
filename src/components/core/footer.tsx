import { navArray } from '@/array/navArray';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background1 flex justify-between items-center px-4 py-2 md:px-6 md:py-2">
      <nav className="flex space-x-2 text-xs md:text-sm">
        <Link href="/">Home</Link>
        {navArray.map(({ label, link }) => (
          <Link key={`footerNav-${label}`} href={link}>
            {label}
          </Link>
        ))}
      </nav>
      <span className="text-text3 text-xs md:text-sm">
        © 2023 Yeonseung Yoo. All rights reserved.
      </span>
    </footer>
  );
}
