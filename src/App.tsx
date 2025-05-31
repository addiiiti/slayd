import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhySlayd from './components/WhySlayd';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slayd-lavender to-white font-sans text-slayd-text">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <WhySlayd />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;