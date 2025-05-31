import React from 'react';
import { motion } from 'framer-motion';

type SolCoinProps = {
  className?: string;
};

const SolCoin: React.FC<SolCoinProps> = ({ className = '' }) => {
  return (
    <motion.div 
      className={`${className}`}
      animate={{ 
        rotateY: [0, 180, 360],
        scale: [1, 1.05, 1]
      }}
      transition={{ 
        repeat: Infinity, 
        duration: 8,
        ease: "easeInOut"
      }}
    >
      <div className="relative w-full h-full">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slayd-blue via-slayd-purple to-slayd-pink opacity-80 animate-pulse-slow" />
        <div className="absolute inset-[2px] rounded-full bg-slayd-black flex items-center justify-center">
          <span className="text-3xl font-bold text-slayd-white/90">SOL</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SolCoin;