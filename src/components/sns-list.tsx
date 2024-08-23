'use client';

import InstagramIcon from './svg/InstagramIcon';
import GithubIcon from './svg/github-icon';

const SNS_ARR = [
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/_ya_nagi/',
    icon: <InstagramIcon isAbout />,
  },
  {
    label: 'Github',
    link: 'https://github.com/yonn-yoo',
    icon: <GithubIcon />,
  },
];

export default function SNSList() {
  return (
    <ul role="list">
      {SNS_ARR.map(({ link, icon, label }, idx) => (
        <li
          key={`sns-${idx}`}
          onClick={() => window.open(link)}
          className={`${
            idx !== 0 && 'mt-4'
          } group flex items-center text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500 cursor-pointer`}
        >
          {icon}
          <span className="ml-4">Follow on {label}</span>
        </li>
      ))}
    </ul>
  );
}
