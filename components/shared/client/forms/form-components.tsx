'use client';
import { useEffect, useState } from 'react';

import Framer from '@/components/shared/client/framer-motion/framer';

import { AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
export function FormField({ children, className }: { children: React.ReactNode; className: string }) {
  return <div className={className}>{children}</div>;
}

export function FormGroup({ children, className }: { children: React.ReactNode; className: string }) {
  return <div className={className}>{children}</div>;
}

interface NotificationProps {
  isOpen: boolean;
}

export function FormNotificacion({ isOpen, ...props }: NotificationProps) {
  const [state, setstate] = useState({
    isOpen: isOpen,
  });

  useEffect(() => {
    setstate({ isOpen: isOpen });
  }, [isOpen]);

  return (
    <AnimatePresence>
      {state.isOpen && (
        <Framer
          animate="show"
          as="div"
          className="text- fixed right-0 top-28 z-[60] mr-5 flex flex-col items-center justify-center gap-y-5 rounded-md bg-secondary-main px-2 py-2 text-sm font-bold text-typography-primary shadow-2xl lg:px-12 lg:py-6 lg:text-lg"
          exit={{ x: '100%' }}
          initial="hidden"
          transition={{ duration: 0.3 }}
          variants={{ hidden: { x: 200 }, show: { x: 0 } }}
        >
          <div className="flex w-full items-center gap-x-2 text-center">
            <span>Formulario Enviado con exito!</span>
            <span>
              <Check className="text-green-300" />
            </span>
          </div>
        </Framer>
      )}
    </AnimatePresence>
  );
}
