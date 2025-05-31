import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Sword, ArrowRight } from 'lucide-react';
import Button from './Button';
import AnimatedGradient from './AnimatedGradient';
import SolCoin from './SolCoin';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-slayd-black">
      <AnimatedGradient />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <SolCoin className="absolute -top-16 right-0 md:-top-20 md:right-0 lg:-right-16 opacity-60 w-24 h-24 md:w-32 md:h-32" />
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slayd-white leading-tight mb-6"
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
              className="text-lg md:text-xl text-slayd-white/80 mb-8 max-w-2xl mx-auto"
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
              <div className="flex gap-4">
                <Button variant="secondary" size="lg" icon={<Sword />}>
                  Create Goal
                </Button>
                <Button variant="outline" size="lg">
                  Login
                </Button>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-3xl overflow-hidden rounded-xl shadow-2xl shadow-slayd-purple/20">
              <div className="bg-gradient-to-r from-slayd-pink via-slayd-purple to-slayd-blue p-1 rounded-xl">
                <div className="bg-slayd-black/90 backdrop-blur-sm rounded-lg p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="bg-slayd-black/60 rounded-lg p-4 backdrop-blur-sm border border-slayd-purple/20">
                      <h3 className="text-slayd-pink font-semibold mb-2">Daily Gym Streak</h3>
                      <p className="text-slayd-white/70 text-sm">5 SOL staked</p>
                      <div className="mt-3 text-xs text-slayd-white/50">with @cryptofitbro</div>
                    </div>
                    <div className="bg-gradient-to-br from-slayd-purple/20 to-slayd-blue/10 rounded-lg p-4 backdrop-blur-sm border border-slayd-blue/30">
                      <h3 className="text-slayd-blue font-semibold mb-2">Complete Thesis</h3>
                      <p className="text-slayd-white/70 text-sm">10 SOL staked</p>
                      <div className="mt-3 text-xs text-slayd-white/50">with @studybuddy</div>
                    </div>
                    <div className="bg-slayd-black/60 rounded-lg p-4 backdrop-blur-sm border border-slayd-purple/20">
                      <h3 className="text-slayd-pink font-semibold mb-2">Launch MVP</h3>
                      <p className="text-slayd-white/70 text-sm">15 SOL staked</p>
                      <div className="mt-3 text-xs text-slayd-white/50">with @devcommunity</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div 
              className="absolute -bottom-5 right-5 md:-bottom-5 md:right-5"
              animate={{ 
                rotate: [0, 5, 0, -5, 0],
                y: [0, -5, 0, -5, 0] 
              }}
              transition={{ repeat: Infinity, duration: 5 }}
            >
              <div className="bg-slayd-pink/90 text-white rounded-full px-4 py-2 text-sm flex items-center shadow-lg">
                <Sword size={16} className="mr-2" />
                Just Slayd a goal! +10 SOL
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <a 
              href="#how-it-works" 
              className="flex items-center text-slayd-white hover:text-slayd-pink transition-colors"
            >
              <span className="mr-2">Learn how it works</span>
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;