import React from 'react';
import { Mail, Globe, Video, Send, MapPin, MessageSquare } from 'lucide-react';
import '../App.css';

const Contact = () => {
  return (
    <>
      <section className="w-full max-w-[1400px] mx-auto px-6 pt-40 pb-24 min-h-[90vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Contact Info */}
          <div className="flex flex-col gap-12 animate-in slide-in-from-left duration-1000">
             <div className="flex flex-col gap-6">
               <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border-white/10 w-fit">
                  <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/70">Available for new projects</span>
               </div>
               <h1 className="text-6xl md:text-8xl font-black tracking-tightest leading-none">
                  LET'S <br /> 
                  <span className="text-gradient-cyan">CONNECT</span>
               </h1>
               <p className="text-xl text-white/40 leading-relaxed font-medium max-w-lg mt-4">
                  Have a vision in mind? Let's turn it into a cinematic masterpiece. Reach out and let's start creating together.
               </p>
             </div>

             <div className="flex flex-col gap-8">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center border-white/10 group-hover:border-neon-cyan/50 transition-all duration-500">
                     <Mail className="w-6 h-6 text-neon-cyan" />
                  </div>
                  <div>
                     <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Email Me</p>
                     <p className="text-xl font-bold group-hover:text-neon-cyan transition-colors">hello@afnankhan.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center border-white/10 group-hover:border-neon-magenta/50 transition-all duration-500">
                     <MessageSquare className="w-6 h-6 text-neon-magenta" />
                  </div>
                  <div>
                     <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Socials</p>
                     <div className="flex gap-4 mt-2">
                        <Globe className="w-5 h-5 text-white/50 hover:text-neon-magenta cursor-pointer transition-colors" />
                        <Video className="w-5 h-5 text-white/50 hover:text-red-500 cursor-pointer transition-colors" />
                     </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center border-white/10">
                     <MapPin className="w-6 h-6 text-white/50" />
                  </div>
                  <div>
                     <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Location</p>
                     <p className="text-xl font-bold">Dubai, UAE / Remote</p>
                  </div>
                </div>
             </div>
          </div>

          {/* Right: Contact Form */}
          <div className="animate-in slide-in-from-right duration-1000">
             <div className="glass p-10 md:p-14 rounded-[3rem] border-white/10 shadow-2xl relative overflow-hidden group">
                {/* Decorative background for the form */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-neon-cyan/10 blur-[100px] rounded-full" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-neon-magenta/10 blur-[100px] rounded-full" />

                <form className="relative z-10 flex flex-col gap-8">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-3">
                         <label className="text-[10px] uppercase tracking-widest font-black text-white/70 ml-4">Your Name</label>
                         <input 
                            type="text" 
                            placeholder="John Doe"
                            className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-neon-cyan/50 focus:bg-white/15 transition-all placeholder:text-white/40 text-white font-medium"
                         />
                      </div>
                      <div className="flex flex-col gap-3">
                         <label className="text-[10px] uppercase tracking-widest font-black text-white/70 ml-4">Email Address</label>
                         <input 
                            type="email" 
                            placeholder="john@example.com"
                            className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-neon-cyan/50 focus:bg-white/15 transition-all placeholder:text-white/40 text-white font-medium"
                         />
                      </div>
                   </div>

                   <div className="flex flex-col gap-3">
                      <label className="text-[10px] uppercase tracking-widest font-black text-white/70 ml-4">Subject</label>
                      <input 
                         type="text" 
                         placeholder="Project Inquiry"
                         className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:border-neon-cyan/50 focus:bg-white/15 transition-all placeholder:text-white/40 text-white font-medium"
                      />
                   </div>

                   <div className="flex flex-col gap-3">
                      <label className="text-[10px] uppercase tracking-widest font-black text-white/70 ml-4">Message</label>
                      <textarea 
                         rows={5}
                         placeholder="Tell me about your vision..."
                         className="w-full bg-white/10 border border-white/20 rounded-3xl px-6 py-4 focus:outline-none focus:border-neon-cyan/50 focus:bg-white/15 transition-all placeholder:text-white/40 text-white font-medium resize-none"
                      />
                   </div>

                   <button 
                      type="submit"
                      className="cta-gradient-btn w-full py-5 rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 group/btn"
                      onClick={(e) => e.preventDefault()}
                   >
                      Send Message
                      <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                   </button>
                </form>
             </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;
