import React from 'react';
import { 
  Users, 
  MessageSquare, 
  Scissors, 
  Clapperboard, 
  Palette, 
  Activity, 
  HardDrive, 
  CheckCircle,
  Play,
  SkipForward,
  SkipBack,
  Volume2,
  Settings
} from 'lucide-react';

const StepCard = ({ number, title, subtitle, icon: Icon, description, delay = 0 }) => (
  <div className="flex flex-col items-center gap-6 group relative z-20">
    {/* Number Pill */}
    <div className="px-4 py-1 glass rounded-full text-xs font-black text-white/50 border-white/10 group-hover:text-neon-cyan transition-colors">
      {number}
    </div>
    
    {/* Main Card */}
    <div className="w-full max-w-[280px] glass p-8 rounded-[2rem] border-white/10 hover:border-white/20 transition-all hover:-translate-y-2 duration-500 flex flex-col items-center text-center gap-4 group/card shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
      <div className="p-4 bg-white/5 rounded-2xl group-hover/card:bg-white/10 transition-colors">
        <Icon className="w-10 h-10 text-white" />
      </div>
      <div>
        <h3 className="text-xl font-black tracking-tight text-white mb-1 uppercase">{title}</h3>
        <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest leading-none">{subtitle}</p>
      </div>
      
      {/* Decorative Icons for specific steps - matches screenshot detail */}
      {number === "3" && (
        <div className="flex gap-4 mt-2">
          <div className="w-10 h-10 rounded-full bg-[conic-gradient(from_0deg,#ff0000,#00ff00,#0000ff,#ff0000)] opacity-70" />
          <div className="flex flex-col gap-1 justify-center">
            <div className="w-12 h-1.5 bg-neon-magenta/30 rounded-full" />
            <div className="w-12 h-1.5 bg-neon-cyan/30 rounded-full" />
          </div>
        </div>
      )}
      
      {number === "4" && (
        <div className="flex gap-2 mt-2">
          {["MP4", "MOV", "4K"].map(tag => (
            <span key={tag} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[8px] font-black text-white/40">{tag}</span>
          ))}
        </div>
      )}
    </div>

    {/* Description text under card */}
    <p className="max-w-[220px] text-[11px] text-white/30 font-medium leading-relaxed group-hover:text-white/50 transition-colors">
      {description}
    </p>
  </div>
);

const Workflow = () => {
  return (
    <section id="services" className="w-full max-w-[1400px] mx-auto py-15 mt-10 relative">
      <div className="main-glass-card glass p-12 lg:p-20 border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] flex flex-col gap-20">
        
        {/* Header */}
        <div className="text-center flex flex-col gap-2">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
            The Creative Process
          </h2>
          <p className="text-white/30 text-sm font-bold uppercase tracking-[0.4em] mb-4">
            (The Workflow)
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto rounded-full glow-line" />
        </div>

        {/* Steps Grid Container */}
        <div className="relative">
          {/* The Neon Path - SVG Connection */}
          <div className="absolute top-[40%] left-0 w-full h-32 z-10 opacity-30 pointer-events-none">
            <svg viewBox="0 0 1200 100" fill="none" className="w-full h-full stroke-[3px]">
              <path 
                d="M50 50 C 200 50, 200 90, 350 90 C 500 90, 500 20, 650 20 C 800 20, 800 70, 950 70 C 1100 70, 1100 50, 1200 50" 
                stroke="url(#neonGradient)" 
                strokeDasharray="15 5" 
                className="animate-dash"
              />
              <defs>
                <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00f2ff" />
                  <stop offset="50%" stopColor="#ff00ff" />
                  <stop offset="100%" stopColor="#00f2ff" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 justify-items-center">
            <StepCard 
              number="1"
              title="Consultation"
              subtitle="Understanding the vision"
              icon={Users}
              description="Define project scope, goals, and style. Establishing a clear direction."
            />
            <StepCard 
              number="2"
              title="First Cut"
              subtitle="The 'Rough Edit' phase"
              icon={Clapperboard}
              description="Assembling the story, pacing, and basic structure from raw footage."
            />
            <StepCard 
              number="3"
              title="Polishing"
              subtitle="Color Grading, Sound Design, & VFX"
              icon={Palette}
              description="Adding cinematic look, clean audio, music, and special effects."
            />
            <StepCard 
              number="4"
              title="Delivery"
              subtitle="High-quality exports in required formats"
              icon={HardDrive}
              description="Final rendered files are delivered, ready for distribution."
            />
          </div>
        </div>

        {/* Bottom Player Controls */}
        <div className="flex flex-col gap-6 mt-12 bg-white/5 p-8 rounded-3xl border border-white/5 relative group">
          <div className="flex items-center justify-between gap-12">
            <div className="flex items-center gap-6">
              <SkipBack className="w-5 h-5 text-white/40 hover:text-white cursor-pointer" />
              <div className="p-3 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer transition-colors">
                <Play className="w-6 h-6 text-white fill-current" />
              </div>
              <SkipForward className="w-5 h-5 text-white/40 hover:text-white cursor-pointer" />
            </div>

            <div className="flex-1 flex flex-col gap-2">
              <div className="flex justify-between text-[10px] font-black text-white/30 uppercase tracking-widest">
                <span>02:45:12</span>
                <span className="text-neon-magenta">Processing Flow</span>
                <span>04:20:00</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full relative overflow-hidden group/seek">
                <div className="absolute top-0 left-0 w-3/4 h-full bg-gradient-to-r from-neon-cyan to-neon-magenta" />
                <div className="absolute top-0 left-3/4 -translate-x-1/2 w-4 h-full bg-white shadow-[0_0_10px_#fff]" />
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <Volume2 className="w-5 h-5 text-white/40" />
                <div className="w-20 h-1.5 bg-white/10 rounded-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1/2 h-full bg-white/40" />
                </div>
              </div>
              <Settings className="w-5 h-5 text-white/40 cursor-pointer hover:text-white" />
            </div>
          </div>
          
          {/* Subtle decoration as seen in screenshot */}
          <div className="absolute -bottom-2 translate-y-full left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-xl" />
        </div>
      </div>
    </section>
  );
};

export default Workflow;
