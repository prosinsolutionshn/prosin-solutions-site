'use client';
import { useEffect } from 'react';

import { usePathname } from 'next/navigation';

import { AnimatePresence, motion, usePresence } from 'framer-motion';

interface PageAnimationWrapperProps {
  children: React.ReactNode;
  key: string;
}

export default function PageAnimationWrapper({ children, key }: PageAnimationWrapperProps) {
  const pathname = usePathname();

  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 1000);
  }, [isPresent, pathname, safeToRemove]);

  return (
    <>
      <AnimatePresence>
        {isPresent && (
          <motion.main
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 500, y: 15 }}
            initial={{ opacity: 0, y: 15 }}
            key={key}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
