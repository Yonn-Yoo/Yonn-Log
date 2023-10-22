export type CategoryType = {
  label: 'All category' | 'My story' | 'Front-end' | 'Back-end';
  value: 'all' | 'my story' | 'frontend' | 'backend';
};

export const categoryArray: CategoryType[] = [
  {
    label: 'All category',
    value: 'all',
  },
  {
    label: 'My story',
    value: 'my story',
  },
  {
    label: 'Front-end',
    value: 'frontend',
  },
  {
    label: 'Back-end',
    value: 'backend',
  },
];
