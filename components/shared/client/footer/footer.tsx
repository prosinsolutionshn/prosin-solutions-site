'use client';
import Image from 'next/image';

import WhatsappIcon from '@/components/shared/server/icons/whatsapp-icon';

import logoProsin from '@/public/logo-prosin.png';

import { handleScroll } from '@/lib/utils/functions/handle-scroll';

import { Facebook, Instagram } from 'lucide-react';
import useTranslation from 'next-translate/useTranslation';

export default function Footer() {
  const { t } = useTranslation('footer');

  return (
    <footer className="w-full bg-primary-main text-typography-primary">
      <div className="container relative mx-auto flex flex-col items-center justify-center gap-y-5 px-5 py-3 md:flex-row lg:px-20">
        <Image
          alt="Logo Prosin"
          className="h-auto w-[4rem] cursor-pointer md:mr-auto"
          height={512}
          onClick={() => {
            handleScroll('hero');
          }}
          src={logoProsin}
          width={512}
        />
        <div className="container absolute z-10 mx-auto hidden w-1/2 justify-center md:flex lg:w-fit">
          <span className="text-center text-third-main">PROSIN SOLUTIONS {new Date().getFullYear()}</span>
        </div>
        <span className="text-center text-third-main md:hidden">PROSIN SOLUTIONS {new Date().getFullYear()}</span>
        <div className="flex flex-col items-center gap-y-3">
          <span className="font-semibold text-typography-primary">Redes Sociales</span>
          <div className="flex gap-x-3">
            <a
              className="hover:bg-secondary-mid active:bg-secondary-mid rounded-full p-2 transition-all duration-200 ease-linear hover:-translate-y-1 active:-translate-y-1"
              href={process.env.NEXT_PUBLIC_LINK_SOCIAL_FACEBOOK}
              target="_blank"
            >
              <Facebook />
            </a>
            <a
              className="hover:bg-secondary-mid active:bg-secondary-mid rounded-full p-2 transition-all duration-200 ease-linear hover:-translate-y-1 active:-translate-y-1"
              href={process.env.NEXT_PUBLIC_LINK_SOCIAL_INSTAGRAM}
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              className="hover:bg-secondary-mid active:bg-secondary-mid rounded-full p-2 transition-all duration-200 ease-linear hover:-translate-y-1 active:-translate-y-1"
              href={process.env.NEXT_PUBLIC_LINK_SOCIAL_WHATSAPP}
              target="_blank"
            >
              <WhatsappIcon className="h-6 fill-typography-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
