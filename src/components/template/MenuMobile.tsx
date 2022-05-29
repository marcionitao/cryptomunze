import { Transition } from '@headlessui/react'; // <- https://headlessui.dev/react/transition
import Link from 'next/link';
import React, { useState } from 'react';
import { IconFechar, IconHamburger } from '../icons/myIcons';

export default function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div data-testid="menu-mobile">
      <div className="flex mt-2 mr-2 sm:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {/* condição para mostrar ou não o botão */}
          {!isOpen ? IconHamburger : IconFechar}
        </button>
      </div>
      <Transition
        data-testid="menu-transition"
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <a
                className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-700"
                aria-current="page"
              >
                Home
              </a>
            </Link>

            <Link href="/list">
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
              >
                List Coins
              </a>
            </Link>
            <Link href="/about">
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
              >
                About
              </a>
            </Link>
          </div>
        </div>
      </Transition>
    </div>
  );
}
