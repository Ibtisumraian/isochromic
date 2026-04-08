import React from 'react';
import '../App.css';

const Portfolio = () => {
  return (
    <>
      <section className="w-full max-w-[1400px] mx-auto px-6 pt-40 pb-20 text-center animate-in fade-in duration-1000">
        <h1 className="text-6xl md:text-7xl font-black tracking-tightest mb-6">
          LATEST <span className="text-gradient-magenta">WORKS</span>
        </h1>
        <p className="text-xl text-white/50 max-w-2xl mx-auto uppercase tracking-widest font-medium">
          A showcase of cinematic storytelling and visual precision.
        </p>
      </section>

      <section className="w-full max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { title: "CYBER NEON", type: "Visual Effects / Grading", color: "bg-neon-cyan" },
            { title: "URBAN RHYTHM", type: "Music Video", color: "bg-neon-magenta" },
            { title: "BRAND STORY", type: "Commercial", color: "bg-neon-purple" },
            { title: "NXT GEN", type: "Promo Video", color: "bg-white" }
          ].map((work, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-video glass rounded-[2.5rem] overflow-hidden border-white/10 group-hover:border-white/20 transition-all duration-700 relative">
                <div className={`absolute inset-0 ${work.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40 backdrop-blur-sm scale-110 group-hover:scale-100">
                   <span className="px-8 py-3 glass rounded-full font-bold uppercase tracking-widest text-xs border-white/20">Watch Project</span>
                </div>
              </div>
              <div className="mt-8 flex justify-between items-end px-4">
                <div>
                  <h3 className="text-3xl font-black tracking-tight uppercase group-hover:text-neon-cyan transition-colors">{work.title}</h3>
                  <p className="text-sm font-bold text-white/30 uppercase tracking-[0.3em] mt-2">{work.type}</p>
                </div>
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center border-white/10 group-hover:bg-white group-hover:text-black transition-all">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
