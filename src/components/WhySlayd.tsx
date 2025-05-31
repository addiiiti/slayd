import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Users, Trophy, Shield } from 'lucide-react';

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
    <section id="why-slayd\" className="py-16 md:py-24 bg-gradient-to-b from-slayd-black/95 to-slayd-black relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10%] bg-gradient-to-br from-slayd-purple/10 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slayd-white mb-4">
            Why Use <span className="text-slayd-pink">Slayd</span>
          </h2>
          <p className="text-slayd-white/70 max-w-2xl mx-auto">
            Slayd transforms how you achieve your goals through accountability and incentives
          </p>
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
              className="flex gap-5 p-6 rounded-xl border border-slayd-purple/20 bg-gradient-to-br from-slayd-black to-slayd-black/80 backdrop-blur-sm"
            >
              <div className="mt-1 relative shrink-0">
                <div className="absolute -inset-2 bg-gradient-to-r from-slayd-pink to-slayd-purple rounded-full opacity-20 blur-sm" />
                <div className="relative">{benefit.icon}</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slayd-white mb-2">{benefit.title}</h3>
                <p className="text-slayd-white/70 text-sm">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySlayd;