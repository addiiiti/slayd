import React from 'react';
import { motion } from 'framer-motion';

type AnimatedGradientProps = {
  className?: string;
};

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        className="absolute -inset-[100px] opacity-20 bg-gradient-to-r from-slayd-pink via-slayd-purple to-slayd-blue rounded-full blur-3xl"
        animate={{
          x: ['-25%', '25%', '-25%'],
          y: ['-15%', '5%', '-15%'],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -inset-[100px] opacity-20 bg-gradient-to-r from-slayd-blue via-slayd-pink to-slayd-purple rounded-full blur-3xl"
        animate={{
          x: ['25%', '-25%', '25%'],
          y: ['5%', '-15%', '5%'],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default AnimatedGradient;