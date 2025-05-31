import React from 'react';
import { Twitter, Github, Book, MessageCircle } from 'lucide-react';
import SlaydLogo from './SlaydLogo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slayd-black py-12 border-t border-slayd-purple/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <SlaydLogo className="mb-4" />
            <p className="text-slayd-white/60 text-sm max-w-xs">
              A social accountability app where you stake SOL on your goals and earn it back by achieving them.
            </p>
          </div>
          
          <div>
            <h3 className="text-slayd-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slayd-white/70 hover:text-slayd-pink transition-colors text-sm">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-slayd-white/70 hover:text-slayd-pink transition-colors text-sm">
                  Create Goal
                </a>
              </li>
              <li>
                <a href="#" className="text-slayd-white/70 hover:text-slayd-pink transition-colors text-sm">
                  Verification System
                </a>
              </li>
              <li>
                <a href="#" className="text-slayd-white/70 hover:text-slayd-pink transition-colors text-sm">
                  Leaderboard
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-slayd-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slayd-white/70 hover:text-slayd-pink transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slayd-white/70 hover:text-slayd-pink transition-colors text-sm">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="text-slayd-white/70 hover:text-slayd-pink transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-slayd-white/70 hover:text-slayd-pink transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slayd-white/70 hover:text-slayd-pink transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-slayd-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-slayd-white/70 hover:text-slayd-pink transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slayd-white/70 hover:text-slayd-pink transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-slayd-white/70 hover:text-slayd-pink transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="text-slayd-white/70 hover:text-slayd-pink transition-colors">
                <Book size={20} />
              </a>
            </div>
            <p className="text-slayd-white/60 text-sm">
              Subscribe to our newsletter:
            </p>
            <div className="mt-2 flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-slayd-black/70 border border-slayd-purple/30 rounded-l-md px-3 py-2 text-sm text-slayd-white/90 w-full focus:outline-none focus:ring-1 focus:ring-slayd-pink"
              />
              <button className="bg-slayd-pink hover:bg-opacity-90 text-white text-sm py-2 px-4 rounded-r-md">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slayd-purple/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slayd-white/50 text-sm">
            © 2025 Slayd Labs | Powered by Solana
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-slayd-white/50 hover:text-slayd-pink text-sm">
              Privacy
            </a>
            <a href="#" className="text-slayd-white/50 hover:text-slayd-pink text-sm">
              Terms
            </a>
            <a href="#" className="text-slayd-white/50 hover:text-slayd-pink text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;