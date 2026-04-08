import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Video } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const location = useLocation();
  const linksRef = useRef([]);
  
  const navLinks = [
    { path: '/home', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/about', label: 'About' },
    { path: '/pricing', label: 'Pricing' },
  ];

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

  useEffect(() => {
    const activeIndex = navLinks.findIndex(link => location.pathname === link.path);
    if (activeIndex !== -1 && linksRef.current[activeIndex]) {
      const el = linksRef.current[activeIndex];
      setIndicatorStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
        opacity: 1
      });
    } else {
      setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
    }
  }, [location.pathname, isScrolled]); // Re-run when scrolled as scales change

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-[600ms] flex justify-between items-center glass border border-white/10 mx-auto will-change-[width,max-width,transform] ${
      isScrolled 
        ? 'max-w-[1050px] w-[95%] shadow-2xl scale-[0.98] rounded-3xl px-8 py-3' 
        : 'max-w-[1400px] w-full shadow-sm scale-100 rounded-3xl px-12 py-5'
    }`}
    style={{ transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)' }}>
      <NavLink to="/home" className="flex items-center gap-3 cursor-pointer group no-underline">
        <div className={`p-2 bg-cyan-500/10 rounded-xl border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-all duration-300 ${isScrolled ? 'scale-90' : ''}`}>
          <img src="/logo.png" alt="Logo" className="w-5 h-5 md:w-10 md:h-10 text-cyan-400 group-hover:scale-110 transition-transform" />
        </div>
        <span className={`font-bold tracking-tighter text-white font-outfit uppercase transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-2xl'}`}>Afnan Khan</span>
      </NavLink>

      <div className="hidden lg:flex items-center gap-8 xl:gap-12 relative">
        {navLinks.map((link, index) => (
          <NavLink
            key={link.path}
            to={link.path}
            ref={el => linksRef.current[index] = el}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} text-xs md:text-sm uppercase tracking-widest font-bold no-underline`}
          >
            {link.label}
          </NavLink>
        ))}
        <div 
          className="nav-indicator"
          style={{
            left: `${indicatorStyle.left}px`,
            width: `${indicatorStyle.width}px`,
            opacity: indicatorStyle.opacity
          }}
        />
      </div>

      <NavLink to="/contact" className={`btn-exact-cta cta-gradient-btn hover:scale-105 transition-all duration-300 active:scale-95 whitespace-nowrap no-underline flex items-center justify-center ${isScrolled ? 'px-6 py-2.5 text-xs' : 'px-8 py-3.5 text-sm'}`}>
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
