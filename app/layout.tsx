import { ReactNode } from 'react';

import { Roboto } from 'next/font/google';

import Footer from '@/components/shared/client/footer/footer';
import Navbar from '@/components/shared/client/navbar/navbar';

import './globals.css';
import { Metadata } from 'next';
import { twMerge } from 'tailwind-merge';

const titillium_Web = Roboto({ display: 'auto', subsets: ['latin'], weight: '500' });

export async function generateMetadata(): Promise<Metadata> {
  return {
    description:
      'Prosin Solutions Hn es una empresa especializada en la prestacion de servicios de seguridad privada, asesorias y consultorias en seguridad, capacitaciones y entrenamientos en seguridad, investigaciones privadas, entre otros.',
    keywords: [],
    openGraph: {
      alternateLocale: ['en'],

      locale: 'es_HN',
      siteName: 'Prosin Solutions Hn',
      type: 'website',
    },
    title: {
      default: 'Prosin Solutions Hn',
      template: '%s | ',
    },
    verification: {
      google: 'google-site-verification=3Q4',
    },
  };
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={twMerge('bg-primary-main', titillium_Web.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
