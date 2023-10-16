/* eslint-disable perfectionist/sort-objects */
// eslint-disable-next-line perfectionist/sort-objects

'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

import prosinlogo from '@/public/logo-prosin.png';

import { NavbarItem, NavbarItems } from '@/lib/types/navbar-items/navbar-items.interface';
import { handleScroll } from '@/lib/utils/functions/handle-scroll';

import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

export const navBarItems: NavbarItems = {
  // eslint-disable-next-line perfectionist/sort-objects
  Home: {
    active: true,
    href: 'hero',
    label: {
      en: 'About Us',
      es: 'Inicio',
    },
  },
  // eslint-disable-next-line perfectionist/sort-objects

  Services: {
    active: false,
    href: 'services',
    label: {
      en: 'Services',
      es: 'Servicios',
    },
  },

  OurCLients: {
    active: false,
    href: 'clients',
    label: {
      en: 'Our Clients',
      es: 'Nuestros Clientes',
    },
  },
  AboutUs: {
    active: false,
    href: 'about',
    label: {
      en: 'About Us',
      es: 'Nosotros',
    },
  },
  ContactUs: {
    active: false,
    href: 'contact',
    label: {
      en: 'Contact Us',
      es: 'Contacto',
    },
  },
};

export default function Navbar() {
  const [navState, setnavState] = useState({
    isOpen: false,
    activeSection: 'hero',
  });

  const sectionScroll = () => {
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
      if (!section) return;

      if (!section.getAttribute('id')) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - sectionHeight / 3) {
        setnavState((previous) => ({ ...previous, activeSection: section.getAttribute('id')! }));
      }
    });
    // ... other sections
  };

  useEffect(() => {
    window.addEventListener('scroll', sectionScroll);
    return () => window.removeEventListener('scroll', sectionScroll);
  }, []);

  return (
    <>
      <header className="fixed left-0 top-0 z-40 w-full bg-primary-main transition-all duration-300">
        <nav className="container mx-auto flex flex-wrap items-center justify-between gap-y-3 px-5 py-3 text-custom-white-main lg:flex-nowrap lg:gap-y-0 2xl:px-20">
          <Image
            alt="Prosin Logo"
            className="h-auto w-[4rem] cursor-pointer"
            height={512}
            onClick={() => {
              handleScroll('hero');
              setnavState((previous) => ({ ...previous, isOpen: false }));
            }}
            src={prosinlogo}
            width={512}
          ></Image>
          {navState.isOpen ? (
            <X
              className="h-9 w-9 cursor-pointer text-third-main lg:hidden"
              onClick={() => {
                setnavState((previous) => ({ ...previous, isOpen: !navState.isOpen }));
              }}
            />
          ) : (
            <Menu
              className="h-9 w-9 cursor-pointer text-third-main lg:hidden"
              onClick={() => {
                setnavState((previous) => ({ ...previous, isOpen: !navState.isOpen }));
              }}
            />
          )}
          <AnimatePresence>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className={twMerge('hidden w-full flex-col gap-x-5 text-lg font-semibold lg:flex lg:w-auto lg:flex-row')}
              exit={{ opacity: 0, y: -100 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5 }}
            >
              {Object.values(navBarItems).map((item: NavbarItem) => {
                return (
                  <a
                    className={twMerge(
                      'w-fit cursor-pointer border-b-4 border-transparent hover:text-third-main',
                      item.href === navState.activeSection ? 'border-third-main' : 'border-transparent'
                    )}
                    key={item.label.es}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(item.href);
                    }}
                  >
                    {item.label.es}
                  </a>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </nav>
        <AnimatePresence>
          {navState.isOpen ? (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className={twMerge(
                'container absolute top-[100%] -z-20 hidden w-full flex-col gap-x-5 bg-primary-main px-5 py-3 text-lg font-semibold lg:hidden lg:w-auto lg:flex-row',
                navState.isOpen && 'flex'
              )}
              exit={{ y: '-100%' }}
              initial={{ y: '-100%' }}
              transition={{ duration: 0.3 }}
            >
              {Object.values(navBarItems).map((item: NavbarItem) => {
                return (
                  <a
                    className={twMerge(
                      'w-fit cursor-pointer border-b-4 border-transparent text-typography-main hover:text-third-main',
                      item.href === navState.activeSection ? 'border-third-main' : 'border-transparent'
                    )}
                    key={item.label.es}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(item.href);
                      setnavState((previous) => ({ ...previous, isOpen: false }));
                    }}
                  >
                    {item.label.es}
                  </a>
                );
              })}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}
