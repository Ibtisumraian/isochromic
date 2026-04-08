import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Workflow from '../components/Workflow';
import '../App.css';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#020205] text-white selection:bg-cyan-500/30 overflow-x-hidden relative font-inter">
      {/* Background Layer - Exact image match */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
          src="/bg.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        <Navbar />
        <Banner />
        <Workflow />
      </div>
    </div>
  );
};

export default Home;
