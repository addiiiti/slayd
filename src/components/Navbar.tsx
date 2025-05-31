import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import SlaydLogo from './SlaydLogo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-soft' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <SlaydLogo className="h-8 w-auto" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <a href="#how-it-works" className="text-slayd-text hover:text-slayd-pink transition-colors">
                How It Works
              </a>
              <a href="#why-slayd" className="text-slayd-text hover:text-slayd-pink transition-colors">
                Why Slayd
              </a>
              <a href="#" className="text-slayd-text hover:text-slayd-pink transition-colors">
                Docs
              </a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button variant="secondary" size="sm">
                Login
              </Button>
              <Button variant="primary" size="sm">
                Connect Wallet
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slayd-text hover:text-slayd-pink"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <motion.div
          className="md:hidden bg-white border-t border-slayd-purple/20"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-4 pt-2 pb-4 space-y-4">
            <a
              href="#how-it-works"
              className="block py-2 text-slayd-text hover:text-slayd-pink"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#why-slayd"
              className="block py-2 text-slayd-text hover:text-slayd-pink"
              onClick={() => setIsOpen(false)}
            >
              Why Slayd
            </a>
            <a
              href="#"
              className="block py-2 text-slayd-text hover:text-slayd-pink"
              onClick={() => setIsOpen(false)}
            >
              Docs
            </a>
            <div className="pt-2 flex flex-col space-y-3">
              <Button variant="secondary" isFullWidth>
                Login
              </Button>
              <Button variant="primary" isFullWidth>
                Connect Wallet
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;