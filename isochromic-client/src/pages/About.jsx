import React from 'react';
import '../App.css';

const About = () => {
  return (
    <>
      <section className="w-full max-w-[1400px] mx-auto px-6 pt-40 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-10 animate-in slide-in-from-left duration-1000">
            <div className="flex flex-col gap-6">
              <h1 className="text-6xl md:text-7xl font-black tracking-tightest leading-none">
                THE MAN <br /> BEHIND THE <br />
                <span className="text-gradient-magenta">FRAME</span>
              </h1>
              <p className="text-xl text-white/60 leading-relaxed font-medium">
                I'm Afnan Khan, a professional video editor and visual storyteller dedicated to transforming abstract ideas into cinematic reality.
              </p>
            </div>
            
            <div className="flex flex-col gap-8">
              <div className="glass p-8 rounded-3xl border-white/10">
                 <h3 className="text-neon-cyan font-bold uppercase tracking-widest text-xs mb-4">My Philosophy</h3>
                 <p className="text-white/40 leading-relaxed">
                   Every frame counts. I believe that editing isn't just about cutting clips; it's about finding the rhythm and soul of the footage to create an emotional connection with the audience.
                 </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="glass p-6 rounded-3xl border-white/10 text-center">
                  <span className="text-4xl font-black block mb-1">5+</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Years Experience</span>
                </div>
                <div className="glass p-6 rounded-3xl border-white/10 text-center">
                  <span className="text-4xl font-black block mb-1">200+</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Projects Done</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Placeholder */}
          <div className="relative animate-in zoom-in duration-1000">
             <div className="aspect-[4/5] glass rounded-[3rem] border-white/20 shadow-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/20 via-transparent to-neon-cyan/20 group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute bottom-10 left-10 p-8 glass rounded-3xl border-white/10 backdrop-blur-2xl">
                   <p className="text-sm font-bold uppercase tracking-widest text-white/50">Based in Dubai / Global</p>
                </div>
             </div>
             
             {/* Decorative Orbs */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon-magenta/20 blur-[80px] rounded-full animate-pulse" />
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-neon-cyan/20 blur-[80px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
