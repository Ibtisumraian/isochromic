import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#020205] text-white selection:bg-cyan-500/30 overflow-x-hidden relative font-inter">
      {/* Shared Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
          src="/bg.png" 
          alt="" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
