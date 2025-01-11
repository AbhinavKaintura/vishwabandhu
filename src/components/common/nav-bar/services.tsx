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
          className="text-lg bg-[#f1e5d4] inline-grid p-2 rounded-lg"
        >
          <MenuItem>
            <Link href="/human-safety-program">Human Safety Program</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/gaushala-program">Gaushala Program</Link>
          </MenuItem>
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default HoverDropdown;
