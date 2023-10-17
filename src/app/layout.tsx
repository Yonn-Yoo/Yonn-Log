import Footer from '@/components/core/footer';
import Header from '@/components/core/header';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yonn-Log',
  description: 'For recording',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${sans.className} max-w-screen-2xl mx-auto flex flex-col`}
      >
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
