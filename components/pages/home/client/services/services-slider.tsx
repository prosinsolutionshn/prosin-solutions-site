'use client';

import { FadeIn } from '@/components/shared/client/framer-motion/fade-in';

import { Camera, CircleDollarSign, ShieldBan, ShieldHalf } from 'lucide-react';
import { Briefcase, Car, GraduationCap, Home, SatelliteDish, Search, ShieldCheck } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Autoplay, FreeMode, Keyboard, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const services = [
  {
    icon: <Camera className="h-16 w-16" />,
    id: 1,
    image: 'imagen_vigilancia.jpg',
    name: 'Vigilancia',
  },
  {
    icon: <ShieldHalf className="h-16 w-16" />,
    id: 2,
    image: 'imagen_proteccion_personal.jpg',
    name: 'Protección Personal',
  },
  {
    icon: <CircleDollarSign className="h-16 w-16" />,
    id: 3,
    image: 'imagen_transporte_valores.jpg',
    name: 'Transporte de Valores',
  },
  {
    icon: <ShieldCheck className="h-16 w-16" />,
    id: 4,
    image: 'imagen_seguridad_electronica.jpg',
    name: 'Seguridad Electrónica',
  },
  {
    icon: <SatelliteDish className="h-16 w-16" />,
    id: 5,
    image: 'imagen_seguridad_gps.jpg',
    name: 'Seguridad Satelital (GPS)',
  },
  {
    icon: <Search className="h-16 w-16" />,
    id: 6,
    image: 'imagen_estudios_seguridad.jpg',
    name: 'Estudios de Seguridad',
  },
  {
    icon: <Briefcase className="h-16 w-16" />,
    id: 7,
    image: 'imagen_planes_seguridad_fisica.jpg',
    name: 'Planes de Seguridad Física',
  },
  {
    icon: <ShieldBan className="h-16 w-16" />,
    id: 8,
    image: 'imagen_seguridad_ejecutiva.jpg',
    name: 'Seguridad Ejecutiva',
  },
  {
    icon: <Home className="h-16 w-16" />,
    id: 9,
    image: 'imagen_seguridad_residencial.jpg',
    name: 'Seguridad Residencial',
  },
  {
    icon: <Car className="h-16 w-16" />,
    id: 10,
    image: 'imagen_patrulla_moviles.jpg',
    name: 'Patrulla Móviles de Reacción',
  },
  {
    icon: <Search className="h-16 w-16" />,
    id: 11,
    image: 'imagen_investigacion.jpg',
    name: 'Investigación',
  },
  {
    icon: <ShieldCheck className="h-16 w-16" />,
    id: 12,
    image: 'imagen_evaluaciones_confianza_riesgo.jpg',
    name: 'Evaluaciones de Confiabilidad y Riesgo',
  },
  {
    icon: <GraduationCap className="h-16 w-16" />,
    id: 13,
    image: 'imagen_capacitacion_docencia.jpg',
    name: 'Capacitación y Docencia',
  },
];

export default function ServicesSlider() {
  return (
    <FadeIn as="ul" className="min-w-[60%]">
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper3"
        keyboard={{
          enabled: true,
        }}
        loop={true}
        modules={[FreeMode, Navigation, Keyboard, Autoplay]}
        spaceBetween={10}
      >
        {services.map((service) => {
          return (
            <SwiperSlide className="card-bg p-5" key={`${service.name}-${service.id}`}>
              <div className="flex h-full flex-col justify-between p-2">
                <span className="flex w-full grow justify-end text-third-main">{service.icon}</span>
                <h4 className="text-xl text-white lg:text-2xl">{service.name}</h4>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </FadeIn>
  );
}
