import Link from 'next/link';
import HeaderNavigation from './header-navigation';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 md:px-6 md:py-5">
      <Link href="/">
        <h1 className="font-semibold text-lg md:text-xl xl:text-2xl tracking-widest">
          YonnLog
        </h1>
      </Link>
      <HeaderNavigation />
    </header>
  );
}
