import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Truck, MapPin, Scale, Clock, CheckCircle2, ChevronRight, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Collection() {
  return (
    <div className="pt-32 pb-20 px-4 bg-paper min-h-screen">
      <Helmet>
        <title>Free Scrap Collection Polokwane | 100km Coverage</title>
        <meta name="description" content="We collect your scrap metal for free! Covering Polokwane, Seshego, Mankweng and more. Book a collection for loads over 500kg today." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="mb-24 border-b-2 border-ebony pb-8">
          <span className="text-brand font-black uppercase tracking-[0.4em] text-sm italic">Logistics & Transport</span>
          <h1 className="text-6xl md:text-[100px] font-black uppercase tracking-tighter italic font-industrial leading-[0.8] text-ebony mt-4">
            Free <span className="text-brand">Dispatch</span>. <br/>
            Limpopo-Wide.
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
          <div className="flex flex-col gap-10">
            <h2 className="text-4xl font-black uppercase italic font-industrial leading-none text-ebony">Bulk Recovery Services</h2>
            <p className="text-xl text-ebony/60 font-medium leading-relaxed italic max-w-lg">
              Eliminate logistics overhead. Our fleet and crane-equipped recovery vehicles handle the heavy lifting while you focus on site management.
            </p>
            
            <div className="grid gap-0 border-2 border-ebony">
              {[
                { title: 'Free Removal', desc: 'Complimentary dispatch for loads over 500kg or high-value materials.', icon: <CheckCircle2 className="text-brand" /> },
                { title: '100km Radius', desc: 'Covering Polokwane, Seshego, Mankweng, and as far as Tzaneen.', icon: <MapPin className="text-brand" /> },
                { title: 'Express Load', desc: 'Book before 10 AM for prioritized same-day recovery.', icon: <Clock className="text-brand" /> },
                { title: 'Certified Mass', desc: 'On-board calibrated scales for instant verification.', icon: <Scale className="text-brand" /> }
              ].map((item, i) => (
                <div key={i} className={`flex gap-6 p-8 hover:bg-brand/5 transition-colors ${i < 3 ? 'border-b-2 border-ebony' : ''}`}>
                  <div className="shrink-0">{item.icon}</div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-black uppercase italic font-industrial text-ebony">{item.title}</h3>
                    <p className="text-xs font-black uppercase tracking-widest text-slate leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-brand translate-x-4 translate-y-4" />
            <div className="relative border-2 border-ebony overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1000&auto=format&fit=crop" 
                alt="Scrap metal truck" 
                className="w-full h-[700px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-ebony text-paper p-12 max-w-sm hidden lg:block border-t-8 border-brand shadow-[20px_20px_0px_rgba(0,0,0,0.1)]">
              <Truck size={48} className="mb-6 text-brand" />
              <h3 className="text-2xl font-black uppercase italic font-industrial mb-4 italic leading-none">Heavy Lift Fleet</h3>
              <p className="text-slate text-sm font-bold uppercase tracking-widest leading-relaxed italic">8-ton flatbeds, skip trucks, and crane units ready for mobilization.</p>
            </div>
          </div>
        </div>

        {/* Coverage Map Section */}
        <div className="bg-ebony p-12 md:p-24 text-paper border-b-[16px] border-brand mb-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col gap-10">
              <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter font-industrial leading-[0.8] text-brand">
                Service <br/>
                Radius
              </h2>
              <p className="text-slate text-lg font-bold uppercase tracking-widest italic leading-relaxed max-w-lg">
                Our logistics hub in Polokwane allows us to reach businesses and residential areas swiftly within minutes of dispatch.
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 border-t border-slate/20 pt-8">
                {['Polokwane', 'Seshego', 'Mankweng', 'Molepo', 'Ladine', 'Nirvana', 'Annadale', 'Tzaneen'].map((area, i) => (
                  <div key={i} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-brand">
                    <ChevronRight size={14} /> {area}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-paper/5 border border-slate/20 h-[450px] p-12 flex flex-col items-center justify-center text-center relative overflow-hidden group">
               <MapPin size={120} className="text-brand opacity-10 absolute -right-4 -bottom-4 group-hover:scale-125 transition-transform duration-1000" />
               <h4 className="text-3xl font-black uppercase italic font-industrial italic mb-8">External Radius?</h4>
               <p className="text-slate font-bold uppercase tracking-widest text-xs mb-10 max-w-xs leading-relaxed italic">We regularly service Mokopane and Lebowakgomo for bulk industrial recovery.</p>
               <Link to="/contact">
                 <Button className="bg-paper text-ebony rounded-none uppercase font-black tracking-widest px-12 h-16 shadow-[6px_6px_0px_#A0A5AE]">Inquire Now</Button>
               </Link>
            </div>
          </div>
        </div>

        {/* Collection Note */}
        <div className="max-w-5xl mx-auto p-12 md:p-16 bg-white border-4 border-ebony flex flex-col md:flex-row gap-12 items-center shadow-[20px_20px_0px_rgba(0,0,0,0.05)]">
           <AlertTriangle size={64} className="text-brand shrink-0" />
           <div className="flex flex-col gap-4">
             <h3 className="text-3xl font-black uppercase italic font-industrial italic leading-none">Security Protocol</h3>
             <p className="text-ebony/60 font-bold uppercase tracking-widest text-[10px] leading-relaxed italic">
               Per the Second-Hand Goods Act, our logistics team requires a verified copy of ID and Proof of Residence for all on-site recoveries. 
             </p>
           </div>
           <Link to="/quote" className="shrink-0 w-full md:w-auto">
             <Button className="w-full bg-ebony text-paper rounded-none uppercase font-black tracking-widest h-20 px-12 shadow-[8px_8px_0px_#D2691E] active:translate-y-1 active:shadow-none transition-all">Secure Dispatch</Button>
           </Link>
        </div>
      </div>
    </div>
  );
}
