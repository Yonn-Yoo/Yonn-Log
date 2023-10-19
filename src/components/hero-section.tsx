import Image from 'next/image';
import Link from 'next/link';
import EnvelopeIcon from './svg/envelope-icon';
import GithubIcon from './svg/github-icon';
import HomeIcon from './svg/home-icon';

const buttonArray = [
  {
    href: '/contact',
    icon: <EnvelopeIcon />,
    newTab: false,
  },
  {
    href: 'https://yeonseung.vercel.app',
    icon: <HomeIcon />,
    newTab: true,
  },
  {
    href: 'https://github.com/Yonn-Yoo',
    icon: <GithubIcon />,
    newTab: true,
  },
];

export default function HeroSection() {
  return (
    <section className="max-w-4xl w-full mx-auto">
      <div className="w-full flex items-center space-x-4 border-b border-stone-700 pb-5 md:pb-8 mb-5 md:mb-8">
        <Image
          width={100}
          height={100}
          priority
          className="rounded-full object-cover w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28"
          src="https://velog.velcdn.com/images/ysyoo719/profile/da634545-d1a3-4446-af6d-98e46de80ffa/image.jpeg"
          alt="avatar"
        />
        <div className="flex flex-col space-y-1">
          <h3 className="font-bold tracking-wide text-xl md:text-2xl">
            Yeonseung Yoo
          </h3>
          <span className="text-text3 font-medium md:text-lg">
            Front-end engineer 💻
          </span>
        </div>
      </div>
      <div className="flex space-x-2">
        {buttonArray.map(({ href, icon, newTab }) => (
          <button
            key={href}
            className="p-1 px-1.5 bg-stone-600 rounded-xl hover:bg-stone-500 transition"
          >
            <Link target={newTab ? '_blank' : ''} href={href}>
              {icon}
            </Link>
          </button>
        ))}
      </div>
    </section>
  );
}
