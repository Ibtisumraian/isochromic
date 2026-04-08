import React from 'react';
import '../App.css';

const Pricing = () => {
  return (
    <>
      <section className="w-full max-w-[1400px] mx-auto px-6 pt-40 pb-20 text-center animate-in fade-in duration-1000">
        <h1 className="text-6xl md:text-7xl font-black tracking-tightest mb-6 uppercase">
          Pricing <span className="text-gradient-magenta">Plans</span>
        </h1>
        <p className="text-xl text-white/50 max-w-2xl mx-auto uppercase tracking-widest font-medium">
          Transparent investment for cinematic results.
        </p>
      </section>

      <section className="w-full max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              tier: "Essential", 
              price: "499", 
              features: ["Up to 3 min video", "Basic Title Anim", "Color Correction", "1 Revision"],
              accent: "border-white/10"
            },
            { 
              tier: "Cinematic", 
              price: "999", 
              features: ["Up to 10 min video", "Advanced Graphics", "Professional Grading", "3 Revisions", "VFX basics"], 
              featured: true,
              accent: "border-neon-magenta/40"
            },
            { 
              tier: "Enterprise", 
              price: "Custom", 
              features: ["Full Commercials", "High-end VFX", "Unlimited Revisions", "Raw Footage Org", "Fast Delivery"],
              accent: "border-white/10"
            }
          ].map((plan, i) => (
            <div key={i} className={`glass p-12 rounded-[3rem] border ${plan.accent} flex flex-col gap-10 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group`}>
              {plan.featured && (
                <div className="absolute top-0 right-0 px-6 py-2 bg-neon-magenta text-[10px] font-black uppercase tracking-widest rounded-bl-3xl">
                  Most Popular
                </div>
              )}
              
              <div>
                 <h3 className="text-2xl font-black uppercase tracking-tight mb-2">{plan.tier}</h3>
                 <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black">{plan.price === "Custom" ? "" : "$"}{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-white/30 font-bold uppercase tracking-widest text-[10px]">/ project</span>}
                 </div>
              </div>

              <ul className="flex flex-col gap-4 flex-1">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-4 text-sm text-white/50 font-medium">
                    <div className="w-5 h-5 rounded-full border border-neon-cyan/30 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full" />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 rounded-full font-black uppercase tracking-widest text-xs transition-all ${plan.featured ? 'cta-gradient-btn' : 'glass border-white/10 hover:bg-white/5'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Pricing;
