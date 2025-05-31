import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Sword } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';
import Button from './Button';
import SolCoin from './SolCoin';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <SolCoin className="absolute -top-16 right-0 md:-top-20 md:right-0 lg:-right-16 w-24 h-24 md:w-32 md:h-32" />
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slayd-text leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Slay your goals.
              <br />
              <span className="text-slayd-pink">Stake</span> your <span className="text-slayd-blue">SOL</span>.
              <br />
              Get it back.
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-slayd-text/80 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              A social accountability app where your progress earns back your stake. 
              Miss it? You lose SOL. Hit it? You Slayd.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Button 
                variant="primary" 
                size="lg" 
                icon={<Wallet />}
                className="bg-gradient-to-r from-slayd-blue via-slayd-purple to-slayd-pink animate-gradient-x"
              >
                Connect Wallet
              </Button>
              <Button variant="secondary" size="lg" icon={<Sword />}>
                Create Goal
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="relative mx-auto max-w-3xl"
          >
            <Player
              autoplay
              loop
              src="/Screen Recording 2025-05-31 143813.mp4"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;