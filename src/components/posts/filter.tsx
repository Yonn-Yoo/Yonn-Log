'use client';

import { CategoryType, categoryArray } from '@/array/categoryArray';
import { Menu, Transition } from '@headlessui/react';
import { Dispatch, Fragment, SetStateAction, useState } from 'react';

type Props = {
  category: CategoryType['value'];
  setCategory: Dispatch<SetStateAction<CategoryType['value']>>;
};

export default function Filter({ category, setCategory }: Props) {
  const [selected, setSelected] = useState('All category');

  const handleOnClick = (
    label: CategoryType['label'],
    value: CategoryType['value']
  ) => {
    setSelected(label);
    setCategory(value);
  };

  return (
    <div className="absolute right-0 lg:right-10 -top-12 w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-gray-500 bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition">
            {selected}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-background2 rounded-md bg-background2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-30">
            {categoryArray.map(({ label, value }) => (
              <div key={value} className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => {
                    const isSelected = value === category;
                    return (
                      <button
                        onClick={() => handleOnClick(label, value)}
                        className={`${active && 'bg-background1'} ${
                          isSelected && 'bg-teal-600 font-semibold'
                        } text-text1 group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {label}
                      </button>
                    );
                  }}
                </Menu.Item>
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
