import React from 'react';
import { motion } from 'framer-motion';
import { Target, Coins, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: 'Set a goal',
    description: 'Create a daily, weekly, or monthly goal you want to achieve.',
    icon: <Target className="h-12 w-12 text-slayd-pink" />,
    delay: 0.2,
  },
  {
    title: 'Stake SOL',
    description: 'Stake SOL with a partner. Both lock tokens as accountability.',
    icon: <Coins className="h-12 w-12 text-slayd-purple" />,
    delay: 0.4,
  },
  {
    title: 'Get Verified',
    description: 'Submit proof, get verified, and unlock your SOL.',
    icon: <CheckCircle className="h-12 w-12 text-slayd-blue" />,
    delay: 0.6,
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works\" className="py-16 md:py-24 bg-gradient-to-b from-slayd-black to-slayd-black/95 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slayd-white mb-4">
            How It <span className="text-slayd-pink">Works</span>
          </h2>
          <p className="text-slayd-white/70 max-w-2xl mx-auto">
            Slayd makes accountability fun and effective with real stakes
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: step.delay }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slayd-black to-slayd-black/80 rounded-xl p-6 border border-slayd-purple/20 h-full flex flex-col items-center text-center relative z-10 backdrop-blur-sm">
                <div className="mb-6 relative">
                  <div className="absolute -inset-3 bg-gradient-to-r from-slayd-pink via-slayd-purple to-slayd-blue rounded-full opacity-30 blur-md" />
                  <div className="relative">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slayd-white mb-3">
                  Step {index + 1}: {step.title}
                </h3>
                <p className="text-slayd-white/70 text-sm">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-0">
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M39.7071 8.70711C40.0976 8.31658 40.0976 7.68342 39.7071 7.29289L33.3431 0.928932C32.9526 0.538408 32.3195 0.538408 31.9289 0.928932C31.5384 1.31946 31.5384 1.95262 31.9289 2.34315L37.5858 8L31.9289 13.6569C31.5384 14.0474 31.5384 14.6805 31.9289 15.0711C32.3195 15.4616 32.9526 15.4616 33.3431 15.0711L39.7071 8.70711ZM0 9H39V7H0V9Z" fill="#FF4FBF" fillOpacity="0.7"/>
                    </svg>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;