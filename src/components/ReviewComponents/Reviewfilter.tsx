import { Menu } from '@headlessui/react';
import { Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import React, { Fragment, useState } from 'react';

const Reviewfilter = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'>
            Filter By
            <ChevronDownIcon
              className='-mr-1 ml-2 h-5 w-5'
              aria-hidden='true'
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='py-1'>
              <Menu.Item>
                <button className='block w-full px-4 py-2 text-right text-sm text-gray-700'>
                  Stars
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className='block w-full px-4 py-2 text-right text-sm text-gray-700'>
                  Newest
                </button>
              </Menu.Item>
              <Menu.Item>
                <button className='block w-full px-4 py-2 text-right text-sm text-gray-700'>
                  Oldest
                </button>
              </Menu.Item>

              <Menu.Item>
                <button className='block w-full px-4 py-2 text-right text-sm text-gray-700'>
                  Most Critical
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Reviewfilter;
