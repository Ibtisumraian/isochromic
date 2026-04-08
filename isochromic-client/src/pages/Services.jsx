import React from 'react';
import Workflow from '../components/Workflow';
import '../App.css';

const Services = () => {
  return (
    <>
      <section className="w-full max-w-[1400px] mx-auto px-6 pt-40 pb-20 text-center animate-in fade-in duration-1000">
        <h1 className="text-6xl md:text-7xl font-black tracking-tightest mb-6">
          MY <span className="text-gradient-magenta">SERVICES</span>
        </h1>
        <p className="text-xl text-white/50 max-w-2xl mx-auto uppercase tracking-widest font-medium">
          High-fidelity post-production for creators and brands.
        </p>
      </section>

      <Workflow />

      <section className="w-full max-w-[1400px] mx-auto px-6 py-24">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
             { title: "Commercial Editing", desc: "High-impact edits for brands and commercials that convert." },
             { title: "Cinematic Color Grading", desc: "Professional look-dev and color correction to set the mood." },
             { title: "Motion Graphics", desc: "Dynamic typography and elements to elevate your story." }
           ].map((svc, i) => (
             <div key={i} className="glass p-10 rounded-[2.5rem] border-white/10 hover:border-white/20 transition-all group">
               <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{svc.title}</h3>
               <p className="text-white/40 leading-relaxed">{svc.desc}</p>
               <div className="mt-8 h-1 w-12 bg-neon-cyan/30 group-hover:w-full transition-all duration-500" />
             </div>
           ))}
         </div>
      </section>
    </>
  );
};

export default Services;
