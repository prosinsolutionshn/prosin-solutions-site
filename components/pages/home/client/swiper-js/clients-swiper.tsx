'use client';
import Marquee from 'react-fast-marquee';

import Image from 'next/image';

import { FadeIn } from '@/components/shared/client/framer-motion/fade-in';

export const ClientsSlider = () => {
  return (
    <FadeIn as="div" className="h-fit overflow-hidden lg:!w-[60%]">
      <Marquee className="overflow-hidden" gradient={true} gradientColor="#040510">
        <Image alt="any" className="ml-5 h-16 w-auto lg:h-20" height={512} src="/clients/puma.png" width={512} />
        <Image alt="any" className="ml-5 h-16 w-auto lg:h-20" height={512} src="/clients/agrovisa.png" width={512} />
        <Image alt="any" className="ml-5 h-16 w-auto lg:h-20" height={512} src="/clients/avicola.png" width={512} />
        <Image alt="any" className="ml-5 h-16 w-auto lg:h-20" height={512} src="/clients/uno_logo.png" width={512} />
        <Image alt="any" className="ml-5 h-16 w-auto lg:h-20" height={512} src="/clients/c807_logistic.png" width={512} />
        <Image alt="any" className="ml-5 h-16 w-auto lg:h-20" height={512} src="/clients/star_logistic.png" width={512} />
        <Image alt="any" className="ml-5 h-16 w-auto lg:h-20" height={512} src="/clients/hotel_logo.png" width={512} />
        <Image alt="any" className="ml-5 h-16 w-auto lg:h-20" height={512} src="/clients/texaco_logo.png" width={512} />
      </Marquee>
    </FadeIn>
  );
};

export default ClientsSlider;
