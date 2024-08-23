export type WorkListType = {
  companyName: string;
  position: string;
  from: string;
  thumbnail: string;
  to?: string;
};
export const workListArr: WorkListType[] = [
  {
    companyName: 'Ing people',
    position: 'Frontend devloper',
    from: '2023. Mar',
    thumbnail: '/company/ing.jpg',
  },
  {
    companyName: 'Lillo corporation',
    position: 'Frontend devloper',
    from: '2022. Nov',
    to: '2023. Feb',
    thumbnail: '/company/lillo.png',
  },
  {
    companyName: 'Easypress',
    position: 'Frontend devloper',
    from: '2022. Sep',
    to: '2022. Oct',
    thumbnail: '/company/easypress.png',
  },
  {
    companyName: 'Sangmyung uni.',
    position: 'Assistant',
    from: '2022. Feb',
    to: '2022. Aug',
    thumbnail: '/company/sangmyung.png',
  },
];
