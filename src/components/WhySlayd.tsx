import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Users, Trophy, Shield } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';

const benefits = [
  {
    title: 'Real Stakes, Real Motivation',
    description: 'When you have SOL on the line, you\'re more motivated to follow through with your commitments.',
    icon: <Flame className="h-10 w-10 text-slayd-pink" />,
    delay: 0.2,
  },
  {
    title: 'Gamified Self-Discipline',
    description: 'Turn personal development into a game you play with friends, making goals fun to achieve.',
    icon: <Trophy className="h-10 w-10 text-slayd-purple" />,
    delay: 0.3,
  },
  {
    title: 'Built for Everyone',
    description: 'Perfect for students, freelancers, gym enthusiasts, and hustlers looking to level up.',
    icon: <Users className="h-10 w-10 text-slayd-blue" />,
    delay: 0.4,
  },
  {
    title: 'Verified Achievement System',
    description: 'Our proof submission and partner verification system ensures accountability with integrity.',
    icon: <Shield className="h-10 w-10 text-slayd-pink" />,
    delay: 0.5,
  },
];

const WhySlayd: React.FC = () => {
  return (
    <section id="why-slayd\" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slayd-text mb-4">
            Why Use <span className="text-slayd-pink">Slayd</span>
          </h2>
          <p className="text-slayd-text/70 max-w-2xl mx-auto">
            Slayd transforms how you achieve your goals through accountability and incentives
          </p>
          
          <div className="mt-8 max-w-lg mx-auto">
            <Player
              autoplay
              loop
              src="/Screen Recording 2025-05-31 143729.mp4"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: benefit.delay }}
              whileHover={{ y: -5 }}
              className="flex gap-5 p-6 rounded-2xl bg-white shadow-soft"
            >
              <div className="mt-1 relative shrink-0">
                <div className="absolute -inset-2 bg-gradient-to-r from-slayd-pink to-slayd-purple rounded-full opacity-20 blur-sm" />
                <div className="relative">{benefit.icon}</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slayd-text mb-2">{benefit.title}</h3>
                <p className="text-slayd-text/70">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySlayd;