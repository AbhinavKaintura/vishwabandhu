import { useState } from 'react';
import Link from 'next/link';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';

const HoverDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu
      as="div"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <MenuButton className="text-gray-700 hover:text-orange-600 transition-colors">
          SERVICES
      </MenuButton>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 translate-y-4"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-200 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-4"
      >
        <MenuItems
          static
          anchor="bottom end"
          className=" bg-white inline-grid grid-cols-1 px-4 py-2 text-gray-600 text-sm tracking-wide " 
        >
          <MenuItem className='border-b border-gray-200  hover:bg-gray-100 transition-colors p-2'>
            <Link href="/human-safety-program" className=''>Bharat Self-Care Team</Link>
          </MenuItem>
          <MenuItem className=' hover:bg-gray-100 transition-colors p-2'>
            <Link href="/gaushala-program">Gaushala Program</Link>
          </MenuItem>
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default HoverDropdown;
