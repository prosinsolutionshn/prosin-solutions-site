'use client';
import React, { ComponentProps } from 'react';

import { motion } from 'framer-motion';
type MotionDivProps = ComponentProps<typeof motion.div>;
type MotionAnchorProps = ComponentProps<typeof motion.a>;
type MotionIframeProps = ComponentProps<typeof motion.iframe>;

interface FramerProps extends MotionDivProps {
  allowFullScreen?: boolean;
  as: keyof typeof motion;
  loading?: string;
  referrerPolicy?: string;
}

const Framer: React.FC<FramerProps> = ({ as, children, ...props }) => {
  const MotionComponent = motion[as] as React.FC<MotionDivProps>;
  return <MotionComponent {...props}>{children}</MotionComponent>;
};

export default Framer;
