import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Truck, Scale, BadgeDollarSign, ShieldCheck, Factory, Car, Cable } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const fullServices = [
  {
    title: 'Non-Ferrous Recycling',
    icon: <BadgeDollarSign size={40} />,
    description: 'We offer the highest price-per-kilo for Copper, Brass, Aluminium, Lead, and Stainless Steel. Prices updated daily based on LME rates.',
    details: ['Bright Copper Wire', 'Mixed Copper', 'Plumbing Brass', 'Aluminium Siding/Cans', '304 & 316 Stainless Steel'],
    image: 'https://images.unsplash.com/photo-1558444394-bb9e0d1601ee?q=80&w=800'
  },
  {
    title: 'Ferrous Metal Buying',
    icon: <Scale size={40} />,
    description: 'Bulk buying for industrial heavy melting steel, plate and structural, and light mixed scrap iron.',
    details: ['I-Beams & Heavy Plate', 'Reinforcing Bar (Rebar)', 'Light Gauge Tin', 'Industrial Machinery', 'Cast Iron'],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800'
  },
  {
    title: 'Cable Stripping',
    icon: <Cable size={40} />,
    description: 'State-of-the-art cable processing. We recover high-grade copper from all types of electrical and industrial cabling.',
    details: ['Household PVC Wire', 'Armoured Power Cable', 'Telecommunication Lines', 'Automotive Wiring Harnesses'],
    image: 'https://images.unsplash.com/photo-1621905252507-b35222efeeff?q=80&w=800'
  },
  {
    title: 'Industrial Site Clearance',
    icon: <Factory size={40} />,
    description: 'Full-service removal for factories, warehouses, and construction sites. We provide the equipment and labour.',
    details: ['Equipment Dismantling', 'Skip Bin Placement', 'Structural Demolition Scrap', 'Regular Schedule Pick-ups'],
    image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800'
  },
  {
    title: 'Vehicle Scrapping',
    icon: <Car size={40} />,
    description: 'Turn your old, accidental, or non-running vehicle into cash. We handle the paperwork and ecological disposal.',
    details: ['Accident Damaged Vehicles', 'Non-Runners', 'Fleet Disposal', 'Engine & Transmission Scrap'],
    image: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=800'
  },
  {
    title: 'E-Waste Solutions',
    icon: <ShieldCheck size={40} />,
    description: 'Safe and responsible recycling of electronic components. Certified data destruction where applicable.',
    details: ['Computer Towers & Laptops', 'Server Hardware', 'Circuit Boards', 'UPS Batteries'],
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=800'
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-20 px-4 bg-paper min-h-screen">
      <Helmet>
        <title>Recycling Services Polokwane | Industrial & Household Scrap</title>
        <meta name="description" content="Explore our full range of recycling services. From cable stripping and vehicle scrapping to industrial site clearance in Limpopo. Top prices for all metals." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="mb-24 border-b-2 border-ebony pb-8">
          <span className="text-brand font-black uppercase tracking-[0.4em] text-sm">Our Operations</span>
          <h1 className="text-6xl md:text-[100px] font-black uppercase tracking-tighter italic font-industrial leading-[0.8] text-ebony mt-4">
            Industrial <br/>
            <span className="text-brand">Solutions</span>.
          </h1>
        </div>

        <div className="grid gap-40">
          {fullServices.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-24 items-center`}
            >
              <div className="lg:w-1/2 relative group w-full">
                <div className="absolute inset-0 bg-brand translate-x-4 translate-y-4 transition-transform" />
                <div className="relative overflow-hidden border-2 border-ebony z-10 shadow-[20px_20px_40px_rgba(0,0,0,0.1)]">
                  <img src={service.image} alt={service.title} className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                </div>
              </div>

              <div className="lg:w-1/2 flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                  <div className="text-brand font-black italic font-industrial text-3xl">0{i+1}</div>
                  <h2 className="text-4xl md:text-6xl font-black uppercase italic font-industrial leading-none text-ebony tracking-tighter">{service.title}</h2>
                </div>
                
                <p className="text-xl text-ebony/60 font-medium leading-relaxed max-w-lg">
                  {service.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-12 border-y-2 border-ebony/10 py-8">
                  {service.details.map((detail, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-brand rounded-none" />
                      <span className="text-xs font-black uppercase tracking-widest text-slate">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link to="/quote">
                    <Button className="bg-brand hover:bg-[#B55A1A] text-white rounded-none uppercase font-black tracking-widest h-20 px-12 text-xl shadow-[8px_8px_0px_rgba(0,0,0,0.1)] active:translate-y-1 active:shadow-none transition-all">
                      Request Valuation
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industrial Section */}
        <div className="mt-40 bg-ebony text-paper p-12 md:p-20 grid md:grid-cols-2 items-center gap-16 border-l-[16px] border-brand shadow-[30px_30px_60px_rgba(0,0,0,0.3)]">
           <div className="space-y-8">
             <div className="space-y-2">
               <span className="text-brand font-black uppercase tracking-[0.3em] text-sm italic">Strategic Partnerships</span>
               <h2 className="text-4xl md:text-6xl font-black uppercase italic font-industrial leading-none">Commercial Contracts</h2>
             </div>
             <p className="text-slate text-lg font-bold uppercase tracking-widest italic leading-relaxed">
               Managing heavy manufacturing or large-scale construction? Our dedicated site agents provide full lifecycle scrap management.
             </p>
           </div>
           <div className="flex flex-col gap-6">
              <div className="bg-paper/5 border border-slate/20 p-8">
                <ul className="space-y-4">
                  <li className="flex justify-between text-xs font-black uppercase tracking-widest border-b border-slate/10 pb-4">
                    <span>Bin Placements</span>
                    <span className="text-brand">Free</span>
                  </li>
                  <li className="flex justify-between text-xs font-black uppercase tracking-widest border-b border-slate/10 pb-4">
                    <span>Dedicated Buyer</span>
                    <span className="text-brand">Assigned</span>
                  </li>
                  <li className="flex justify-between text-xs font-black uppercase tracking-widest pb-4">
                    <span>LME Rate Lock</span>
                    <span className="text-brand">Available</span>
                  </li>
                </ul>
              </div>
              <Link to="/contact">
                <Button className="w-full bg-paper text-ebony hover:bg-white rounded-none uppercase font-black tracking-widest h-20 text-xl shadow-[6px_6px_0px_#A0A5AE]">
                  Contact Sales Desk
                </Button>
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
}
