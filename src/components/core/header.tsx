import { navArray } from '@/array/navArray';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 md:px-6 md:py-5">
      <h1 className="font-semibold text-lg md:text-xl xl:text-2xl tracking-widest">
        <Link href="/">YonnLog</Link>
      </h1>
      <nav className="flex space-x-3">
        {navArray.map(({ label, link }) => (
          <Link
            href={link}
            key={label}
            className="font-medium text-sm md:text-base 2xl:text-lg"
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
