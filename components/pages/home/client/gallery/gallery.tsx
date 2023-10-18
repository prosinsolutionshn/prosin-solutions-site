'use client';

import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import { FadeInStagger, FadeInStaggredChildren } from '@/components/shared/client/framer-motion/fade-in';

import thirdImage from '@/public/gallery/3.jpeg';
import fourthImage from '@/public/gallery/4.jpeg';
import fifthImage from '@/public/gallery/5.jpeg';
import sixthImage from '@/public/gallery/6.jpeg';
import seventhImage from '@/public/gallery/7.jpeg';
import eighthImage from '@/public/gallery/8.jpeg';
import ninthImage from '@/public/gallery/9.jpeg';
import tenthImage from '@/public/gallery/10.jpeg';
import eleventhImage from '@/public/gallery/11.jpeg';
import thirteenthImage from '@/public/gallery/13.jpeg';
import instructor_soldiers from '@/public/gallery/instructor_soldiers.jpeg';
import woman1 from '@/public/gallery/woman1.jpg';
import woman2 from '@/public/gallery/woman2.jpg';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize, X } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Keyboard, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { twMerge } from 'tailwind-merge';

const photos = [
  {
    classes: 'lg:col-span-2',
    src: woman1.src,
  },

  {
    classes: 'lg:col-span-5',
    src: thirdImage.src,
  },
  {
    classes: 'lg:col-span-5',
    src: fourthImage.src,
  },
  {
    classes: 'lg:col-span-5',
    src: fifthImage.src,
  },
  {
    classes: 'lg:col-span-7',
    src: sixthImage.src,
  },
  {
    classes: 'lg:col-span-7',
    src: seventhImage.src,
  },
  {
    classes: 'lg:col-span-7',
    src: ninthImage.src,
  },
  {
    classes: 'lg:col-span-5',
    src: eighthImage.src,
  },
  {
    classes: 'lg:col-span-5',
    src: woman2.src,
  },

  {
    classes: 'lg:col-span-5',
    src: tenthImage.src,
  },
  {
    classes: 'lg:col-span-7',
    src: eleventhImage.src,
  },
  {
    classes: 'lg:col-span-5',
    src: thirteenthImage.src,
  },
  {
    classes: 'lg:col-span-7',
    src: instructor_soldiers.src,
  },

  // {
  //   classes: 'lg:col-span-5',
  //   src: fourteenthImage.src,
  // },
  // {
  //   classes: 'lg:col-span-7',
  //   src: fifteenthImage.src,
  // },
  // {
  //   classes: 'lg:col-span-5',
  //   src: sixteenthImage.src,
  // },
  // {
  //   classes: 'lg:col-span-5',
  //   src: secondImage.src,
  // },
];

export default function GallerySection() {
  const [modalState, setmodalState] = useState({
    initalSlide: 0,
    isOpen: false,
  });

  const closeModal = () => {
    setmodalState((previous) => ({ ...previous, isOpen: false }));
  };

  const openModal = () => {
    setmodalState((previous) => ({ ...previous, isOpen: true }));
  };

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="flex flex-col gap-y-5">
      <div className="container flex justify-end px-5 lg:px-20">
        <button
          className="group flex items-center p-2 text-third-main transition-all duration-300 hover:bg-third-main hover:text-custom-white-main"
          onClick={() => {
            setmodalState((previous) => ({ ...previous, initalSlide: 0, isOpen: true }));
          }}
        >
          Abrir Galeria <ChevronRight className="h-8 w-8 text-third-main group-hover:text-custom-white-main" />
        </button>
      </div>
      <FadeInStagger as="div" className="container grid gap-x-5 gap-y-5 px-5 lg:grid-cols-12 lg:px-20">
        {photos.slice(0, 5).map((photo, index) => {
          return (
            <FadeInStaggredChildren
              as="figure"
              className={(twMerge('h-full max-h-[20rem] w-full cursor-pointer rounded-lg object-cover'), photo.classes)}
              key={`${photo.src}-gallery-view`}
              onClick={() => {
                setmodalState((previous) => ({ ...previous, initalSlide: index, isOpen: true }));
              }}
            >
              <Image
                alt="foto"
                className={twMerge('h-full max-h-[20rem] w-full cursor-pointer rounded-lg object-cover')}
                height={512}
                loading="lazy"
                src={photo.src}
                width={512}
              />
            </FadeInStaggredChildren>
          );
        })}
      </FadeInStagger>
      <AnimatePresence>
        {modalState.isOpen && (
          <Gallery
            initialSlide={modalState.initalSlide}
            isOpen={modalState.isOpen}
            key={`${modalState.initalSlide}-slidechange`}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

interface GalleryProps {
  initialSlide: number;
  isOpen: boolean;
  onClose: () => void;
}

export function Gallery({ initialSlide = 0, isOpen = false, onClose }: GalleryProps) {
  const swiperRef = useRef<SwiperRef>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(initialSlide);
  const fullScreenRef = useRef<HTMLDivElement>(null);

  const toggleFullScreen = () => {
    const elem = fullScreenRef.current;
    if (!document.fullscreenElement && elem) {
      elem.requestFullscreen().catch((err) => {
        alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen().catch((err) => {
        alert(`Error attempting to disable full-screen mode: ${err.message} (${err.name})`);
      });
    }
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="fixed left-0 top-0 z-[900] flex h-screen w-full items-center justify-center bg-black/[0.9]"
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      initial={{ opacity: 0 }}
      key={'full-gallery-view'}
      onClick={onClose}
      ref={fullScreenRef}
      transition={{ duration: 0.3 }}
    >
      <button
        className="group absolute left-0 z-[950] ml-3 hidden rounded-full bg-[#5B5B5C] p-3 font-bold text-white transition-all active:opacity-70 md:ml-10 md:block md:p-5"
        onClick={(e) => {
          e.stopPropagation();
          if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
          }
        }}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute right-0 z-[950] mr-3 hidden rounded-full bg-[#5B5B5C] p-3 font-bold text-white transition-all active:opacity-70 md:mr-10 md:block md:p-5"
        onClick={(e) => {
          e.stopPropagation();
          if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
          }
        }}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute right-0 top-0 flex gap-x-3 p-5">
        <button>
          <X className="h-10 w-10 text-white" onClick={onClose} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFullScreen();
          }}
        >
          <Maximize className="h-10 w-10 text-white" />
        </button>
      </div>

      <div className="container relative mx-auto h-[50vh] max-h-[800px] md:h-[80vh] xl:px-32 2xl:px-5" onClick={(e) => e.stopPropagation()}>
        <Swiper
          className="mySwiper2"
          initialSlide={initialSlide}
          keyboard={{
            enabled: true,
          }}
          loop={true}
          modules={[FreeMode, Navigation, Thumbs, Keyboard]}
          onSlideChangeTransitionEnd={(s) => setCurrentSlideIndex(s.realIndex)}
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={10}
        >
          {photos.map((photo, index) => (
            <SwiperSlide className="!flex !items-center !justify-center !bg-black/5" key={photo.src} onClick={onClose}>
              <Image
                alt="foto"
                className="h-auto w-auto max-w-full animate-pulse bg-gray-300 object-contain opacity-0 lg:max-w-[900px] xl:max-w-[1200px]"
                height={0}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                onLoadingComplete={(img) => img.classList.remove('animate-pulse', 'bg-gray-300', 'opacity-0')}
                src={photo.src}
                unoptimized={true}
                width={0}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute bottom-0 right-0 mx-auto flex w-full justify-center p-3 text-4xl text-white">{`${currentSlideIndex + 1} / ${
        photos.length
      }`}</div>
    </motion.div>
  );
}
