import React, { useState, useEffect } from 'react';
import { Video } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-[600ms] flex justify-between items-center glass border border-white/10 mx-auto will-change-[width,max-width,transform] ${
      isScrolled 
        ? 'max-w-[1050px] w-[95%] shadow-2xl scale-[0.98] rounded-3xl px-8 py-3' 
        : 'max-w-[1400px] w-full shadow-sm scale-100 rounded-3xl px-12 py-5'
    }`}
    style={{ transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)' }}>
      <div className="flex items-center gap-3 cursor-pointer group">
        <div className={`p-2 bg-cyan-500/10 rounded-xl border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-all duration-300 ${isScrolled ? 'scale-90' : ''}`}>
          <Video className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
        </div>
        <span className={`font-bold tracking-tighter text-white font-outfit uppercase transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-2xl'}`}>Afnan Khan</span>
      </div>

      <div className="hidden lg:flex items-center gap-8 xl:gap-12">
        <a href="#home" className="nav-link active text-xs md:text-sm uppercase tracking-widest font-bold">Home</a>
        <a href="#services" className="nav-link text-xs md:text-sm uppercase tracking-widest font-bold">Services</a>
        <a href="#" className="nav-link text-xs md:text-sm uppercase tracking-widest font-bold">Portfolio</a>
        <a href="#" className="nav-link text-xs md:text-sm uppercase tracking-widest font-bold">About</a>
        <a href="#" className="nav-link text-xs md:text-sm uppercase tracking-widest font-bold">Pricing</a>
      </div>

      <button className={`btn-exact-cta cta-gradient-btn hover:scale-105 transition-all duration-300 active:scale-95 whitespace-nowrap ${isScrolled ? 'px-6 py-2.5 text-xs' : 'px-8 py-3.5 text-sm'}`}>
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
