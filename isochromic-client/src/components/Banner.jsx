import React from 'react';
import { 
  Play, 
  Settings, 
  Layers, 
  Palette, 
  Share2, 
  ArrowRight,
  Activity
} from 'lucide-react';
import workspaceImg from '../assets/workspace.png';

const GlassPanel = ({ children, className = "" }) => (
  <div className={`glass rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl border border-white/10 ${className}`}>
    {children}
  </div>
);

const Waveform = ({ colorClass = "bg-neon-magenta" }) => (
  <div className="flex items-end gap-[2px] h-12 w-32 overflow-hidden px-2">
    {[...Array(20)].map((_, i) => (
      <div 
        key={i} 
        className={`w-1 ${colorClass} rounded-full animate-pulse`} 
        style={{ height: `${20 + Math.random() * 80}%`, animationDelay: `${i * 0.05}s` }}
      />
    ))}
  </div>
);

const WorkspaceVisual = () => {
  return (
    <div className="relative w-full max-w-3xl mx-auto lg:mx-0 [perspective:2000px] py-10 px-10">
      
      {/* Main Glass Workspace Card */}
      <div className="workspace-card glass p-2 lg:p-3 rotate-y-[-10deg] rotate-x-[5deg] group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border-white/20 transition-all duration-700 relative z-10">
        <img 
          src={workspaceImg} 
          alt="Video Editing Workspace" 
          className="w-full rounded-xl opacity-90 group-hover:opacity-100 transition-opacity"
        />
        
        {/* Play Button - Left Middle */}
        <div className="absolute top-1/2 left-[-60px] -translate-y-1/2 z-30 animate-float" style={{ animationDuration: '7s', animationDelay: '0s' }}>
          <div className="w-20 h-20 glass rounded-3xl flex items-center justify-center border-white/20 shadow-[-20px_20px_40px_rgba(0,0,0,0.4)]">
            <Play className="w-8 h-8 text-white fill-white ml-1" />
          </div>
        </div>

        {/* Action Group - Right Middle */}
        <div className="absolute top-[40%] right-[-70px] flex flex-col gap-4 z-30 animate-float" style={{ animationDuration: '9s', animationDelay: '-2s' }}>
          <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center border-white/20 shadow-[20px_20px_40px_rgba(0,0,0,0.4)]">
            {/* Custom Trim Icon */}
            <div className="flex gap-1.5 items-center">
              <div className="w-1 h-6 bg-white rounded-full opacity-80" />
              <div className="flex flex-col gap-1">
                <div className="w-3 h-0.5 bg-white rounded-full" />
                <div className="w-3 h-0.5 bg-white rounded-full opacity-30" />
                <div className="w-3 h-0.5 bg-white rounded-full" />
              </div>
              <div className="w-1 h-6 bg-white rounded-full opacity-80" />
            </div>
          </div>
          <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center border-white/20 shadow-[20px_20px_40px_rgba(0,0,0,0.4)]">
            <Settings className="w-7 h-7 text-white/90" />
          </div>
        </div>

        {/* Color Panel - Bottom Left */}
        <div className="absolute bottom-[-60px] left-[-30px] z-30 animate-float" style={{ animationDuration: '8s', animationDelay: '-4s' }}>
          <GlassPanel className="p-6 border-l-4 border-l-cyan-500/50">
            <div className="flex flex-col gap-5">
              <div className="w-32 h-32 rounded-full border-[10px] border-white/5 relative flex items-center justify-center overflow-hidden shadow-inner">
                <div className="w-full h-full rounded-full bg-[conic-gradient(from_0deg,#ff0000,#ffff00,#00ff00,#00ffff,#0000ff,#ff00ff,#ff0000)]" />
                <div className="absolute w-5 h-5 bg-white rounded-full shadow-2xl border-2 border-black/20 translate-x-10 -translate-y-10" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-full h-1.5 bg-white/10 rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-magenta-500 to-transparent" />
                  <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg" />
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                  <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg" />
                </div>
              </div>
            </div>
          </GlassPanel>
        </div>

        {/* Top Waveform - Top Right */}
        <div className="absolute top-[-30px] right-[-40px] z-30 animate-float" style={{ animationDuration: '6s', animationDelay: '-1s' }}>
          <GlassPanel className="p-3">
            <Waveform colorClass="bg-neon-magenta" />
          </GlassPanel>
        </div>

        {/* Bottom Waveform - Bottom Right */}
        <div className="absolute bottom-[-40px] right-[-20px] z-30 animate-float" style={{ animationDuration: '5.5s', animationDelay: '-3s' }}>
          <GlassPanel className="p-3 backdrop-blur-3xl border-r-4 border-r-purple-500/50">
            <Waveform colorClass="bg-neon-cyan" />
          </GlassPanel>
        </div>
      </div>

      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 opacity-40 blur-[100px] pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-magenta-600 rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600 rounded-full" />
      </div>

    </div>
  );
};

const Banner = () => {
  return (
    <main id="home" className="w-full max-w-[1400px] mx-auto hero-container">
      <div className="main-glass-card glass flex flex-col lg:flex-row gap-20 items-center justify-between border-t-white/10 border-l-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
        
        {/* Left Column - Content */}
        <div className="flex flex-col gap-10 max-w-xl text-center lg:text-left z-20">
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl md:text-6xl lg:text-5xl font-black font-outfit leading-tightest text-white tracking-tighter animate-in slide-in-from-left duration-1000">
              ELEVATE YOUR VISUALS WITH <br />
              <span className="text-gradient-magenta">PROFESSIONAL <br /> VIDEO EDITING</span>
            </h1>
            <p className="text-xl text-white/50 leading-relaxed max-w-lg animate-in slide-in-from-left duration-1000 delay-200 mx-auto lg:mx-0">
              I transform raw footage into captivating cinematic stories. 
              Specializing in post-production, color grading, and motion graphics.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 animate-in slide-in-from-left duration-1000 delay-400 justify-center lg:justify-start">
            <button className="btn-exact-cta p-[1px] bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="bg-[#020205] hover:bg-transparent transition-colors px-10 py-5 rounded-full flex items-center gap-3">
                <span className="text-white font-bold uppercase tracking-widest text-sm">View my portfolio</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </button>
            <button className="px-10 py-5 rounded-full border border-white/10 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/5 transition-all">
              Let's Work Together
            </button>
          </div>
        </div>

        {/* Right Column - Visual */}
        <div className="animate-in fade-in zoom-in duration-1000 delay-300 relative">
          <WorkspaceVisual />
        </div>

      </div>
    </main>
  );
};

export default Banner;
