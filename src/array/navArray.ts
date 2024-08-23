export type NavigationType = {
  label: 'About' | 'Posts' | 'Contact';
  link: '/about' | '/posts' | '/contact';
};

export const navArray: NavigationType[] = [
  {
    label: 'About',
    link: '/about',
  },
  {
    label: 'Posts',
    link: '/posts',
  },
  {
    label: 'Contact',
    link: '/contact',
  },
];
