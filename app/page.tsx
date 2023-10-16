import ContactForm from '@/components/pages/home/client/contact-form/contact-form';
import GallerySection from '@/components/pages/home/client/gallery/gallery';
import ServicesSlider from '@/components/pages/home/client/services/services-slider';
import ClientsSlider from '@/components/pages/home/client/swiper-js/clients-swiper';
import { FadeIn, FadeInStagger, FadeInStaggredChildren } from '@/components/shared/client/framer-motion/fade-in';
import Framer from '@/components/shared/client/framer-motion/framer';
import PageAnimationWrapper from '@/components/shared/client/framer-motion/page-wrapper';

import herobg from '@/public/main_hero_bg.jpeg';

import {
  CheckCircleIcon,
  ClipboardCheckIcon,
  ClockIcon,
  EyeIcon,
  FlagIcon,
  HeartIcon,
  LightbulbIcon,
  Mail,
  Map,
  Phone,
  ShieldIcon,
  TrendingUpIcon,
} from 'lucide-react';
import { NextPage } from 'next';

interface Props {}

const values = [
  {
    icon: <CheckCircleIcon className="h-12 w-12" />,
    name: 'Compromiso',
  },
  {
    icon: <HeartIcon className="h-12 w-12" />,
    name: 'Honradez',
  },
  {
    icon: <ClipboardCheckIcon className="h-12 w-12" />,
    name: 'Responsabilidad',
  },
  {
    icon: <EyeIcon className="h-12 w-12" />,
    name: 'Transparencia',
  },
  {
    icon: <ClockIcon className="h-12 w-12" />,
    name: 'Constancia',
  },
  {
    icon: <TrendingUpIcon className="h-12 w-12" />,
    name: 'Eficacia',
  },
  {
    icon: <FlagIcon className="h-12 w-12" />,
    name: 'Disciplina',
  },
  {
    icon: <LightbulbIcon className="h-12 w-12" />,
    name: 'Innovación',
  },
  {
    icon: <ShieldIcon className="h-12 w-12" />,
    name: 'Discreción',
  },
];

const HomePage: NextPage<Props> = ({}) => {
  return (
    <PageAnimationWrapper key="home">
      <section className="relative flex min-h-[100vh] items-center justify-center bg-primary-main" id="hero">
        <figure
          className="absolute z-10 h-full !w-full bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundBlendMode: 'multiply',
            backgroundImage: `linear-gradient(to top, var(--primary-color-950), transparent), url("${herobg.src}")`,
          }}
        ></figure>
        <div className="container absolute z-20 flex flex-col gap-y-5 px-5 lg:px-20">
          <Framer
            as="h1"
            className="text-center text-3xl font-bold text-third-main underline shadow-2xl lg:text-left lg:text-7xl"
            initial={{ opacity: 0, y: '-100%' }}
            transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            PROSIN SOLUTIONS
          </Framer>
          <Framer
            as="h2"
            className="w-full text-center text-2xl font-bold text-custom-white-main md:text-5xl lg:w-[40%] lg:text-left xl:text-7xl"
            initial={{ opacity: 0, y: '-100%' }}
            transition={{ delay: 0.4, duration: 0.5, type: 'spring' }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Profesionales en seguridad integral
          </Framer>
        </div>
      </section>
      <section className="py-5 lg:py-10" id="services">
        <div className="container mx-auto flex flex-col justify-between gap-x-10 gap-y-5 px-5 lg:flex-row lg:px-20">
          <div className="flex min-w-[30%] flex-col items-center gap-y-3 lg:items-start ">
            <FadeIn
              as="h2"
              className="w-fit border-b-2 border-third-main pb-1 text-center text-3xl font-bold text-custom-white-main lg:text-left lg:text-5xl"
            >
              Servicios
            </FadeIn>
            <FadeIn as="p" className="text-center text-lg text-typography-muted lg:text-left">
              Proporciona servicios de seguridad con personal altamente competente en el área de seguridad privada, con el fin de satisfacer las
              necesidades de nuestros clientes, cumpliendo con los requisitos legales y reglamentarios aplicables, buscando la mejora continua de
              nuestros procesos y servicios.
            </FadeIn>
          </div>
          <ServicesSlider />
        </div>
      </section>
      <section className="flex min-h-[40vh] flex-col justify-center py-5 lg:py-10" id="clients">
        <div className="container mx-auto flex flex-col-reverse items-center gap-x-10 gap-y-5 px-5 lg:flex-row lg:px-20">
          <ClientsSlider />
          <div className="flex grow flex-col items-center gap-y-3 lg:w-[30%] lg:items-start">
            <FadeIn as="h2" className="w-fit border-b-4 border-third-main pb-1 text-3xl font-bold text-custom-white-main lg:text-5xl">
              Nuestros Clientes
            </FadeIn>
            <FadeIn as="p" className="text-center text-lg text-typography-muted lg:text-left">
              PROSIN SOLUTIONS proporciona a nuestra cartera de clientes los servicios de acarreo y custodia de contenedores, reacción armada,
              seguridad patrimonial, seguridad ejecutiva, servicio de alarmas y seguridad electrónica entre otros.
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-y-7 py-5 lg:py-10" id="about">
        <div className="container mx-auto flex flex-col items-center gap-y-3 overflow-hidden px-5 lg:items-start lg:px-20">
          <FadeIn as="h2" className="w-fit border-b-4 border-third-main pb-1 text-3xl font-bold text-custom-white-main lg:text-5xl">
            Sobre Nosotros
          </FadeIn>
          <FadeIn as="p" className="text-center text-lg text-typography-muted lg:text-left">
            Somos una empresa especializada en la prestación de servicios integrales en seguridad privada contamos con personal operativo, técnico y
            administrativo calificado especializado, una estructura organizacional con diferentes niveles jerárquicos, con el propósito de distribuir
            las diversas tareas de trabajo para lograr la eficacia y el control de las mismas.
          </FadeIn>
        </div>

        <GallerySection />
      </section>

      <section className="flex flex-col items-center gap-y-10 overflow-hidden py-5 lg:py-10">
        <Framer
          as="div"
          className="container mx-auto flex flex-col items-center gap-x-10 gap-y-5 px-5 lg:flex-row lg:px-20"
          initial={{ opacity: 0, x: '-100%' }}
          transition={{ delay: 0.2, duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="flex grow flex-col items-center gap-y-3 lg:w-[40%] lg:items-start">
            <h3 className="w-fit border-b-4 border-third-main pb-1 text-2xl font-bold text-custom-white-main lg:text-4xl">Mision</h3>
            <p className="text-lg text-typography-muted">
              Proporcionar y garantizar seguridad privada integral a nuestros clientes con un recurso humano profesional y calificado empleando
              tecnología innovadora y adaptado a las necesidades y exigencias, permitiendo generar tranquilidad, satisfacción y confianza absoluta.
            </p>
          </div>
          <div className="flex grow flex-col items-center gap-y-3 lg:w-[40%] lg:items-start">
            <h3 className="w-fit border-b-4 border-third-main pb-1 text-2xl font-bold text-custom-white-main lg:text-4xl">Vision</h3>
            <p className="text-lg text-typography-muted">
              La visión de nuestra empresa es ser líderes en seguridad integral, generadora de confianza y marcando la diferencia en materia de
              seguridad, utilizando las mejores herramientas tecnológicas, en la combinación con el mejor recurso humano para brindar un servicio
              eficaz y eficiente.
            </p>
          </div>
        </Framer>
        <div className="container mx-auto flex flex-col items-center gap-y-10 px-5 lg:items-start lg:px-20">
          <h3 className="w-fit border-b-4 border-third-main pb-1 text-2xl font-bold text-custom-white-main lg:text-4xl">Valores</h3>
          <FadeInStagger as="ul" className="flex w-full flex-wrap">
            {values.map((value, index) => {
              return (
                <FadeInStaggredChildren
                  as="li"
                  className="flex w-[40%] grow flex-col items-center justify-center gap-x-3 border-2 border-typography-muted py-10 md:grid md:grid-cols-3 lg:w-[30%]"
                  key={`${value.name}-${index}`}
                >
                  <span className="flex justify-end text-third-main md:ml-[25%]">{value.icon}</span>
                  <span className="w-fit text-lg text-custom-white-main">{value.name}</span>
                </FadeInStaggredChildren>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      <section className="py-5 lg:py-10" id="contact">
        <div className="container mx-auto flex flex-col justify-between gap-x-10 gap-y-10 px-5 lg:gap-y-0 lg:px-20 xl:flex-row">
          <FadeIn as="div" className="flex w-full flex-col gap-y-5 md:h-96 xl:h-auto xl:w-[50%]">
            <h3 className="w-fit border-b-4 border-third-main pb-1 text-2xl font-bold text-custom-white-main lg:text-4xl">Contactanos</h3>
            <div className="flex flex-col gap-x-5 gap-y-5 lg:flex-row">
              <div className="flex grow flex-wrap items-center gap-x-3 lg:w-[40%]">
                <Mail className="h-12 w-12 text-third-main" />
                <a className="text-lg text-typography-main transition-all duration-300 hover:text-third-main" href="">
                  prosinsolutions@gmail.com
                </a>
              </div>
              <div className="flex grow flex-wrap items-center gap-x-3 lg:w-[40%]">
                <Phone className="h-12 w-12 text-third-main" />
                <a className="text-lg text-typography-main transition-all duration-300 hover:text-third-main" href="">
                  9652-1175
                </a>
                <a className="text-lg text-typography-main transition-all duration-300 hover:text-third-main" href="">
                  3391-6322
                </a>
              </div>
            </div>
            <div className="flex grow flex-wrap gap-x-5 gap-y-5">
              <div className="flex w-full grow flex-col gap-y-5">
                <div className="flex gap-x-3 text-typography-main">
                  <Map className="h-12 w-12 shrink-0 text-base text-third-main" />
                  Sps, Cortes, Barrio Guamilito, 2 y 3 calle, 9 Avenida, media cuadra antes del centro Comercial NOVA PRISA. San Pedro Sula, Honduras.
                  C.A C.A
                </div>

                <iframe
                  allowFullScreen
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3844.569910233302!2d-88.03101875035617!3d15.507558137076234!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDMwJzI3LjEiTiA4OMKwMDEnNDQuOSJX!5e0!3m2!1sen!2sus!4v1696715787163!5m2!1sen!2sus"
                  style={{ border: 0 }}
                ></iframe>
              </div>
              <div className="flex w-full grow flex-col gap-y-5">
                <div className="flex gap-x-3 text-typography-main">
                  <Map className="h-12 w-12 shrink-0 text-base text-third-main" />
                  Colonia Castillo a Mano Derecha a la Canchita de Fútbol, Quimistan Santa Bárbara. C.A
                </div>

                <iframe
                  allowFullScreen
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d10882.73658265849!2d-88.41013998486173!3d15.342420110410565!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDIwJzMxLjciTiA4OMKwMjQnMjYuMCJX!5e0!3m2!1sen!2sus!4v1696724832257!5m2!1sen!2sus"
                  style={{ border: 0 }}
                ></iframe>
              </div>
            </div>
          </FadeIn>
          <ContactForm />
        </div>
      </section>
    </PageAnimationWrapper>
  );
};

export default HomePage;
