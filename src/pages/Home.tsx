import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Truck, 
  Scale, 
  BadgeDollarSign, 
  ShieldCheck, 
  MessageCircle,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  Minus
} from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { METAL_PRICES, CONTACT_INFO } from '@/config/prices';

const stats = [
  { label: 'Years in Business', value: '25+' },
  { label: 'Tons Recycled', value: '50k+' },
  { label: 'Free Collection Radius', value: '100km' },
  { label: 'Happy Clients', value: '10k+' },
];

const services = [
  {
    title: 'Ferrous Metals',
    description: 'Steel, iron, and light mixed scrap from construction or demolition.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop',
    icon: <Scale className="text-[#D2691E]" />
  },
  {
    title: 'Non-Ferrous Metals',
    description: 'Top-dollar for Copper, Brass, Aluminium, Lead, and Stainless Steel.',
    image: 'https://images.unsplash.com/photo-1558444394-bb9e0d1601ee?q=80&w=600&auto=format&fit=crop',
    icon: <BadgeDollarSign className="text-[#D2691E]" />
  },
  {
    title: 'E-Waste Recycling',
    description: 'Responsible disposal of old electronics, circuit boards, and hardware.',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=600&auto=format&fit=crop',
    icon: <ShieldCheck className="text-[#D2691E]" />
  },
  {
    title: 'Cable Stripping',
    description: 'State-of-the-art cable stripping for maximum copper recovery.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35222efeeff?q=80&w=600&auto=format&fit=crop',
    icon: <TrendingUp className="text-[#D2691E]" />
  },
  {
    title: 'Vehicle Scrapping',
    description: 'End-of-life vehicle disposal with full documentation and fast payment.',
    image: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=600&auto=format&fit=crop',
    icon: <Truck className="text-[#D2691E]" />
  },
  {
    title: 'Industrial Clearance',
    description: 'On-site scrap removal and factory site clearance services.',
    image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=600&auto=format&fit=crop',
    icon: <ArrowRight className="text-[#D2691E]" />
  }
];

const faqs = [
  { q: 'Do you offer free collection?', a: 'Yes, we offer free collection for bulk loads (usually 500kg+) within a 100km radius of Polokwane. For smaller loads, a nominal fee may apply or we can arrange a drop-off at our yard.' },
  { q: 'What documentation do I need to sell scrap?', a: 'By law, we require a valid SA ID or Passport, and proof of residence. For businesses, we require company registration documents and VAT numbers if applicable.' },
  { q: 'How do you pay?', a: 'We offer instant EFT payments or cash (within legal limits of the Second-Hand Goods Act). Payments are processed immediately after weighing.' },
  { q: 'Are your scales certified?', a: 'Absolutely. We use SABS-certified digital weighbridges and platform scales that are calibrated regularly to ensure you get paid for every gram.' },
  { q: 'Do you buy old car batteries?', a: 'Yes, we buy all types of lead-acid batteries, including car, truck, and solar batteries.' },
  { q: 'Can you provide a skip for my site?', a: 'Yes, we provide free skips for industrial sites and construction projects that generate consistent scrap metal.' }
];

export default function Home() {
  return (
    <div className="overflow-hidden bg-paper">
      <Helmet>
        <title>Polokwane Scrap Metals | Top-Paying Scrap Buyers in Limpopo</title>
        <meta name="description" content="Sell your scrap metal for the best prices in Polokwane. We buy copper, brass, aluminium, steel and more. Free collection available. Instant EFT payments." />
      </Helmet>

      {/* Hero Section - Split Grid Editorial */}
      <section className="relative min-h-[calc(100vh-100px)] grid grid-cols-1 md:grid-cols-12 gap-0 border-b-2 border-ebony">
        {/* Left Column: Copy */}
        <div className="md:col-span-12 lg:col-span-7 flex flex-col justify-center px-6 md:px-16 py-20 space-y-10 bg-paper">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-8"
          >
            <div className="inline-flex items-center space-x-2 bg-forest/10 border border-forest px-4 py-1.5 text-forest text-[10px] font-black uppercase tracking-widest w-fit">
              <span className="w-2 h-2 rounded-full bg-forest animate-pulse"></span>
              <span>Prices Updated: Today 08:30 AM</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[112px] font-black leading-[0.85] tracking-tighter uppercase font-industrial text-ebony">
              Turning <span className="text-brand italic">Scrap</span><br/>
              Into Cash <br/>
              <span className="text-slate italic">Instantly.</span>
            </h1>

            <p className="text-lg md:text-xl text-ebony/60 max-w-lg font-medium leading-relaxed">
              Polokwane’s highest-paying recycling center. Industrial-grade weighing, same-day cash payments, and free collection for heavy loads.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/quote">
                <Button className="h-16 px-10 bg-brand hover:bg-[#B55A1A] text-white text-lg font-black uppercase tracking-widest rounded-none shadow-[6px_6px_0px_#1A1D21] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
                  Book Free Collection
                </Button>
              </Link>
              <Link to="/metals-we-buy">
                <Button variant="outline" className="h-16 px-10 border-2 border-ebony text-ebony text-lg font-black uppercase tracking-widest rounded-none hover:bg-ebony hover:text-paper transition-all">
                  View Buy Rates
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-12">
               <div className="border-2 border-ebony p-6 rounded-none shadow-[4px_4px_0px_rgba(0,0,0,0.05)]">
                <span className="block text-4xl font-black font-industrial">15+</span>
                <span className="text-[10px] uppercase tracking-widest text-slate font-black">Years in PSM</span>
              </div>
              <div className="border-2 border-ebony p-6 rounded-none shadow-[4px_4px_0px_rgba(0,0,0,0.05)]">
                <span className="block text-4xl font-black font-industrial">50km</span>
                <span className="text-[10px] uppercase tracking-widest text-slate font-black">Free Radius</span>
              </div>
              <div className="border-2 border-ebony p-6 rounded-none shadow-[4px_4px_0px_rgba(0,0,0,0.05)]">
                <span className="block text-4xl font-black font-industrial">SABS</span>
                <span className="text-[10px] uppercase tracking-widest text-slate font-black">Certified</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual Feature */}
        <div className="md:hidden lg:flex lg:col-span-5 relative bg-[#15171A] border-l-2 border-ebony flex flex-col justify-center items-center p-12 overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C0C5CE 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            className="z-10 bg-ebony border-2 border-brand p-10 w-full max-w-sm shadow-[30px_30px_60px_rgba(0,0,0,0.5)] relative"
          >
            <div className="absolute -top-4 -right-4 bg-forest text-white px-3 py-1 text-[10px] font-black uppercase animate-bounce">
              Live Rates
            </div>
            <h3 className="text-brand font-black uppercase tracking-tighter mb-8 text-2xl font-industrial italic">Live Buy Rates</h3>
            <div className="space-y-6">
              {METAL_PRICES.slice(0, 4).map((metal, i) => (
                <div key={i} className="flex justify-between items-end border-b border-slate/20 pb-3">
                  <span className="text-sm uppercase font-black text-slate tracking-widest">{metal.name}</span>
                  <div className="text-right">
                    <span className="text-2xl font-black text-forest font-industrial">R{metal.price.toFixed(2)}</span>
                    <small className="text-[10px] font-bold text-slate block">/kg</small>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 bg-brand text-white text-center p-3 text-[10px] font-black uppercase tracking-widest italic">
              Rates updated: {new Date().toLocaleDateString('en-ZA', { day: '2-digit', month: 'short', year: 'numeric' })}
            </div>
          </motion.div>

          <div className="mt-12 text-center">
            <p className="text-slate text-[10px] font-black uppercase tracking-[0.3em] mb-4">Certified Scales</p>
            <div className="flex gap-4 opacity-30 invert">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/SABS_logo.svg/1200px-SABS_logo.svg.png" className="h-8 grayscale" alt="SABS" />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Services Bar - Ticker Style Info */}
      <div className="h-auto md:h-48 bg-slate text-ebony grid grid-cols-1 md:grid-cols-4 border-b-2 border-ebony">
        <div className="border-b md:border-b-0 md:border-r-2 border-ebony/20 p-8 flex flex-col justify-between hover:bg-black/5 transition-colors group">
          <div className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">01 / Industrial</div>
          <h5 className="font-black uppercase text-xl leading-none font-industrial">Site <br/>Clearance</h5>
        </div>
        <div className="border-b md:border-b-0 md:border-r-2 border-ebony/20 p-8 flex flex-col justify-between hover:bg-black/5 transition-colors group">
          <div className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">02 / Metals</div>
          <h5 className="font-black uppercase text-xl leading-none font-industrial">Ferrous & <br/>Non-Ferrous</h5>
        </div>
        <div className="border-b md:border-b-0 md:border-r-2 border-ebony/20 p-8 flex flex-col justify-between hover:bg-black/5 transition-colors group">
          <div className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">03 / Processing</div>
          <h5 className="font-black uppercase text-xl leading-none font-industrial">Cable <br/>Stripping</h5>
        </div>
        <div className="p-8 flex flex-col justify-between hover:bg-black/5 transition-colors group">
          <div className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">04 / Logistics</div>
          <h5 className="font-black uppercase text-xl leading-none font-industrial">Free <br/>Collection</h5>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24 bg-[#E4E3E0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="flex flex-col gap-4">
              <span className="text-[#D2691E] font-black uppercase tracking-[0.3em] text-sm">Industrial Recycling</span>
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none italic font-display">What We Buy</h2>
            </div>
            <Link to="/services">
              <Button variant="link" className="text-[#1A1D21] font-black uppercase tracking-widest text-sm p-0 h-auto hover:text-[#D2691E] transition-colors">
                View All Services <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="rounded-none border-t-0 border-x-0 border-b-4 border-b-[#1A1D21] hover:border-b-[#D2691E] transition-all bg-white group h-full overflow-hidden shadow-none">
                  <div className="h-64 overflow-hidden relative">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-white p-3 shadow-[4px_4px_0px_#000]">
                      {service.icon}
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col gap-4">
                    <h3 className="text-2xl font-black uppercase tracking-tight italic font-display">{service.title}</h3>
                    <p className="text-sm text-black/60 leading-relaxed font-medium">
                      {service.description}
                    </p>
                    <Link to="/quote" className="text-xs font-black uppercase tracking-widest text-[#D2691E] flex items-center gap-2 group-hover:translate-x-1 transition-transform pt-4">
                      Get Latest Price <ChevronDown size={14} className="-rotate-90" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#1A1D21] text-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?q=80&w=800&auto=format&fit=crop" alt="Recycling facility" className="w-full h-[600px] object-cover shadow-[20px_20px_0px_#D2691E]" />
            <div className="absolute -bottom-10 -right-10 bg-white p-8 hidden md:block max-w-[280px] shadow-[10px_10px_0px_#D2691E]">
              <p className="text-black font-black text-4xl mb-2 font-display italic">98%</p>
              <p className="text-black/60 text-xs font-bold uppercase tracking-widest">Client Satisfaction Rate in Limpopo province</p>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <span className="text-[#D2691E] font-black uppercase tracking-[0.3em] text-sm">The PSM Advantage</span>
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none italic font-display">Why Trust Us?</h2>
            </div>
            <div className="grid gap-8">
              {[
                { title: 'Best Prices Guaranteed', desc: 'We track global LME markets daily to ensure you get the absolute highest Rand-per-Kilo rate.' },
                { title: 'Honest Weight Verification', desc: 'Transparent weighing with certified digital scales. See the numbers yourself.' },
                { title: 'Instant EFT & Fast Cash', desc: 'No waiting for payments. We process electronic transfers while you wait.' },
                { title: 'Free Bulk Collections', desc: 'Our fleet of trucks covers Polokwane and surrounding areas up to 100km radius.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-[#D2691E] shrink-0 flex items-center justify-center font-black text-2xl font-display italic">0{i+1}</div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-black uppercase italic tracking-tight font-display">{item.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <span className="text-[#D2691E] font-black uppercase tracking-[0.3em] text-sm">Simple Process</span>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none italic font-display mt-4">Cash in 3 Easy Steps</h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          {[
            { step: '01', title: 'Get a Quote', desc: 'Contact us via WhatsApp, Phone or our online form for a current price estimate.', icon: <MessageCircle size={32} /> },
            { step: '02', title: 'We Clean & Weigh', desc: 'Bring your scrap or we collect. We verify weights on our certified scales.', icon: <Scale size={32} /> },
            { step: '03', title: 'Get Paid Fast', desc: 'Receive instant payment via EFT or Cash once weight is confirmed.', icon: <BadgeDollarSign size={32} /> }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-6 relative">
              {i < 2 && <ArrowRight className="hidden lg:block absolute top-[20%] -right-10 text-[#D2691E]/20" size={64} />}
              <div className="w-24 h-24 bg-white border-2 border-[#1A1D21] flex items-center justify-center text-[#D2691E] shadow-[8px_8px_0px_#1A1D21]">
                {item.icon}
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[#D2691E] font-black font-display italic text-2xl">{item.step}</span>
                <h3 className="text-2xl font-black uppercase italic tracking-tight font-display">{item.title}</h3>
                <p className="text-sm text-black/60 font-medium max-w-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-[#E4E3E0] border-y border-black/5">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none italic font-display">Common Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-black/10 mb-2">
                <AccordionTrigger className="text-lg font-black uppercase text-left hover:no-underline hover:text-[#D2691E] py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-black/70 text-base font-medium leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-0 relative">
        <div className="absolute inset-0 bg-[#D2691E]" />
        <div className="max-w-7xl mx-auto px-4 relative grid lg:grid-cols-2 items-stretch min-h-[400px]">
          <div className="flex flex-col justify-center py-20 pr-12 text-white gap-8">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] italic font-display">
              Turn Your Scrap <br/>
              Into Real <span className="text-[#1A1D21]">Cash</span> Today
            </h2>
            <p className="text-white/80 text-xl font-bold uppercase tracking-widest max-w-md">
              The longest-standing scrap buyer in Polokwane. Thousands of happy clients, millions of tons recycled.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/quote">
                <Button className="h-16 px-10 bg-[#1A1D21] hover:bg-black text-white text-xl font-black uppercase tracking-widest rounded-none shadow-[6px_6px_0px_white]">
                  Get Quote Now
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative overflow-hidden">
             <img src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=1000" alt="Truck collection" className="absolute inset-0 w-full h-full object-cover scale-110 -rotate-3" />
          </div>
        </div>
      </section>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
