import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Sparkles } from 'lucide-react';
import Button from './Button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-slayd-pink via-slayd-purple to-slayd-blue p-[2px] rounded-2xl">
            <div className="bg-white rounded-2xl p-8 md:p-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="inline-block bg-gradient-to-r from-slayd-pink to-slayd-purple rounded-full p-3 mb-6">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-slayd-text mb-4">
                  Ready to <span className="text-slayd-pink">Slay</span>?
                </h2>
                
                <p className="text-slayd-text/80 text-lg mb-8 max-w-xl mx-auto">
                  Connect your wallet and start crushing your goals with real accountability and rewards.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row justify-center items-center gap-4"
              >
                <Button 
                  variant="primary" 
                  size="lg" 
                  icon={<Wallet />}
                  className="bg-gradient-to-r from-slayd-blue via-slayd-purple to-slayd-pink animate-gradient-x"
                >
                  Connect Wallet
                </Button>
                <Button variant="secondary" size="lg">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;