import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, History, ShieldCheck, Users2, Trophy, Globe2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <div className="pt-32 pb-20 px-4 bg-paper min-h-screen">
      <Helmet>
        <title>About Polokwane Scrap Metals | Our History & Ethics</title>
        <meta name="description" content="Established in 1999, Polokwane Scrap Metals is Limpopo's leader in recycling. Learn about our commitment to fair pricing and environmental responsibility." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="mb-24 border-b-2 border-ebony pb-8">
          <span className="text-brand font-black uppercase tracking-[0.4em] text-sm italic">Our Legacy</span>
          <h1 className="text-6xl md:text-[100px] font-black uppercase tracking-tighter italic font-industrial leading-[0.8] text-ebony mt-4">
            Since <span className="text-brand">1999</span>. <br/>
            Refining Limpopo.
          </h1>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-40">
          <div className="flex flex-col gap-10 order-2 lg:order-1">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic font-industrial leading-none text-ebony tracking-tight">Trust Forged in Steel</h2>
            <div className="flex flex-col gap-8 text-ebony/60 font-medium leading-relaxed text-lg italic">
              <p>
                From a small yard in 1999 to Limpopo's premier recycling hub, Polokwane Scrap Metals (PSM) has grown alongside our city. We started with one mission: to provide the fairest possible prices while cleaning up our environment.
              </p>
              <p>
                Today, we operate a multi-hectare facility in Ladine, processing thousands of tons of ferrous and non-ferrous metals every month. Our growth is built on a simple foundation—unwavering honesty and instant payment.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-0 border-2 border-ebony">
              <div className="p-8 border-r-2 border-ebony hover:bg-brand/5 transition-colors">
                <p className="text-brand text-6xl font-black font-industrial italic">25</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate mt-2">Years of Service</p>
              </div>
              <div className="p-8 hover:bg-brand/5 transition-colors">
                <p className="text-ebony text-6xl font-black font-industrial italic">0%</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate mt-2">Scale Variance</p>
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2 group">
            <div className="absolute inset-0 bg-brand translate-x-4 translate-y-4" />
            <div className="relative border-2 border-ebony overflow-hidden">
              <img src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=1000" alt="Old scrap yard photo" className="w-full h-[700px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-ebony text-brand p-8 font-black uppercase tracking-widest italic font-industrial text-xl shadow-[10px_10px_0px_#D2691E]">
              POLOKWANE / HQ
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-0 mb-40 border-2 border-ebony shadow-[30px_30px_0px_rgba(0,0,0,0.05)]">
          {[
            { icon: <ShieldCheck size={48} />, title: 'Certified Ethics', desc: 'Full compliance with SARPCCO, SARS, and the Second-Hand Goods Act.' },
            { icon: <History size={48} />, title: 'Deep Experience', desc: 'Industry veterans with decades of knowledge in metal grading and pricing.' },
            { icon: <Globe2 size={48} />, title: 'Eco Leadership', desc: 'We ensure zero waste-to-landfill for the metals processed in our yard.' }
          ].map((pillar, i) => (
            <div key={i} className={`flex flex-col gap-10 p-12 bg-white ${i < 2 ? 'md:border-r-2 border-ebony' : ''} hover:bg-paper transition-colors group`}>
              <div className="text-brand group-hover:scale-110 transition-transform duration-500">{pillar.icon}</div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black uppercase italic font-industrial text-ebony">{pillar.title}</h3>
                <p className="text-sm font-bold uppercase text-slate tracking-widest leading-relaxed italic">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-ebony p-16 md:p-32 text-paper relative overflow-hidden border-b-[16px] border-brand">
          <div className="relative z-10 flex flex-col items-center text-center gap-16">
            <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter font-industrial text-brand">Industrial Standards</h2>
            <div className="flex flex-wrap justify-center gap-16 md:gap-24 opacity-40">
               <div className="flex flex-col items-center gap-4">
                 <Trophy size={64} />
                 <span className="text-[10px] font-black uppercase tracking-widest">SABS Quality</span>
               </div>
               <div className="flex flex-col items-center gap-4">
                 <ShieldCheck size={64} />
                 <span className="text-[10px] font-black uppercase tracking-widest">SAPSE Licensed</span>
               </div>
               <div className="flex flex-col items-center gap-4">
                 <Users2 size={64} />
                 <span className="text-[10px] font-black uppercase tracking-widest">BBBEE Level 1</span>
               </div>
            </div>
            <p className="max-w-3xl text-slate text-xl font-bold uppercase tracking-widest italic leading-relaxed pt-10 border-t border-slate/10">
              "Polokwane Scrap Metals maintains the highest standards of industrial recycling. We believe in transparency, legality, and the power of the circular economy."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
