import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play } from 'lucide-react';
import workspaceImg from '../assets/workspace.png';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#020205] flex items-center justify-center relative overflow-hidden font-outfit">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={workspaceImg} 
          alt="Studio Workspace" 
          className="w-full h-full object-cover scale-105 animate-float opacity-70 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020205] via-transparent to-[#020205] opacity-60" />
      </div>

      {/* Cinematic Glowing Orbs (Subtle overlays) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-cyan-500/10 rounded-full animate-orb blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full animate-orb [animation-delay:5s] blur-[120px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 animate-cinematic">
        <div className="flex flex-col gap-2 mb-12">
          <span className="text-cyan-400 font-bold tracking-[0.5em] text-xs uppercase animate-pulse">
            Experience the future of visuals
          </span>
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none">
            AFNAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">KHAN</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full glow-line" />
        </div>

        <p className="text-white/40 max-w-lg text-lg md:text-xl font-medium mb-12 leading-relaxed">
          Step into the cinematic world of Afnan Khan. 
          Professional cinematography and post-production tailored for maximum visual impact.
        </p>

        <button 
          onClick={() => navigate('/home')}
          className="group relative px-12 py-6 bg-white text-black rounded-full font-black uppercase tracking-[0.2em] text-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(255,255,255,0.2)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative flex items-center gap-3 group-hover:text-white transition-colors">
            <span>Start Experience</span>
            <Play className="w-4 h-4 fill-current" />
          </div>
        </button>

      </div>

      {/* Footer Meta - Moved outside of centered content and opacity increased */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex items-center gap-8 text-[11px] text-white/40 uppercase tracking-[0.3em] font-bold animate-cinematic [animation-delay:1s] whitespace-nowrap">
        <span>Production Ready</span>
        <div className="w-1 h-1 bg-white/20 rounded-full" />
        <span>Cinematic Quality</span>
        <div className="w-1 h-1 bg-white/20 rounded-full" />
        <span>2026 Edition</span>
      </div>
    </div>
  );
};

export default Landing;
