import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  TrendingDown, 
  Minus, 
  AlertCircle,
  HelpCircle,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Package
} from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { METAL_PRICES } from '@/config/prices';

export default function MetalsWeBuy() {
  const currentDate = new Date().toLocaleDateString('en-ZA', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });

  return (
    <div className="pt-32 pb-20 px-4 bg-paper min-h-screen">
      <Helmet>
        <title>Daily Scrap Metal Prices Polokwane | Copper, Brass, Aluminium</title>
        <meta name="description" content="Check our daily updated scrap metal prices in Polokwane. We buy non-ferrous and ferrous metals at the best rates. Get today's R/kg for copper, iron and more." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b-2 border-ebony pb-8">
          <div className="flex flex-col gap-4">
            <span className="text-brand font-black uppercase tracking-[0.3em] text-sm">Industrial Grade Pricing</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter italic font-industrial leading-[0.85] text-ebony">
              Metals We <span className="text-brand">Buy</span>
            </h1>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="bg-ebony text-paper px-4 py-2 text-[10px] font-black uppercase tracking-widest italic">
              Live Rates: {currentDate}
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid lg:grid-cols-3 gap-0 border-2 border-ebony mb-16 bg-ebony overflow-hidden">
          <div className="bg-paper border-b-2 md:border-b-0 md:border-r-2 border-ebony">
            <div className="bg-ebony text-paper p-6">
              <h3 className="text-2xl font-black uppercase italic font-industrial">01 / Non-Ferrous</h3>
            </div>
            <Table>
              <TableBody>
                {METAL_PRICES.filter(m => m.category === 'non-ferrous').map((metal) => (
                  <TableRow key={metal.id} className="border-b border-ebony/10 hover:bg-brand/5 transition-colors group">
                    <TableCell className="p-6">
                      <div className="flex flex-col">
                        <span className="font-black uppercase text-sm italic font-industrial">{metal.name}</span>
                        <span className="text-[10px] text-ebony/40 font-black uppercase tracking-widest">{metal.examples[0]}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right p-6">
                      <div className="flex flex-col items-end">
                        <span className="text-2xl font-black font-industrial italic text-forest">R{metal.price.toFixed(2)}</span>
                        <span className="text-[10px] font-black text-ebony/20 uppercase">per {metal.unit}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="bg-paper border-b-2 md:border-b-0 md:border-r-2 border-ebony">
            <div className="bg-ebony text-paper p-6">
              <h3 className="text-2xl font-black uppercase italic font-industrial">02 / Ferrous</h3>
            </div>
            <Table>
              <TableBody>
                {METAL_PRICES.filter(m => m.category === 'ferrous').map((metal) => (
                  <TableRow key={metal.id} className="border-b border-ebony/10 hover:bg-ebony/5 transition-colors group">
                    <TableCell className="p-6">
                      <div className="flex flex-col">
                        <span className="font-black uppercase text-sm italic font-industrial">{metal.name}</span>
                        <span className="text-[10px] text-ebony/40 font-black uppercase tracking-widest">{metal.examples[0]}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right p-6">
                      <div className="flex flex-col items-end">
                        <span className="text-2xl font-black font-industrial italic text-forest">R{metal.price.toFixed(2)}</span>
                        <span className="text-[10px] font-black text-ebony/20 uppercase">per {metal.unit}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="bg-paper flex flex-col">
             <div className="bg-brand text-white p-6">
              <h3 className="text-2xl font-black uppercase italic font-industrial">03 / Info</h3>
            </div>
            <div className="p-8 flex-grow flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate">Prep Guide</h4>
                <ul className="space-y-4">
                  {[
                    'Remove non-metal parts',
                    'Strip copper for best rates',
                    'Separate metals by type',
                    'Drain all fluids'
                  ].map((tip, i) => (
                    <li key={i} className="flex gap-3 text-xs font-black uppercase text-ebony/60">
                      <CheckCircle2 size={14} className="text-brand shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto bg-ebony text-paper p-6">
                <p className="text-[10px] font-black uppercase tracking-widest mb-4">Bulk Rates</p>
                <p className="text-xs font-medium mb-6 opacity-60">Loads over 500kg qualify for adjusted pricing and free collection within 50km.</p>
                <Link to="/quote">
                  <Button className="w-full bg-brand text-white rounded-none uppercase font-black tracking-widest text-[10px] h-12 shadow-[4px_4px_0px_white/10]">
                    Get Bulk Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {METAL_PRICES.slice(0, 4).map((metal, i) => (
            <motion.div
              key={metal.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="rounded-none border-2 border-[#1A1D21] bg-white group hover:shadow-[10px_10px_0px_#1A1D21] transition-all overflow-hidden h-full">
                <div className="h-40 bg-[#1A1D21]/5 flex items-center justify-center p-8 group-hover:bg-[#1A1D21]/10 transition-colors">
                  <Package size={48} className="text-black/10 group-hover:text-[#D2691E]/50 transition-colors" />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-black uppercase italic font-display">{metal.name}</h4>
                    <div className="flex items-center gap-1">
                      {metal.trend === 'up' ? <TrendingUp size={16} className="text-green-500" /> : metal.trend === 'down' ? <TrendingDown size={16} className="text-red-500" /> : <Minus size={16} className="text-blue-500" />}
                    </div>
                  </div>
                  <p className="text-xs text-black/50 font-medium mb-6 line-clamp-2">{metal.description}</p>
                  <div className="flex justify-between items-end border-t border-black/5 pt-4">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-black/30">Current Rate</span>
                      <span className="text-2xl font-black font-display italic">R {metal.price.toFixed(2)}</span>
                    </div>
                    <Link to="/quote" className="text-[#D2691E] p-2 bg-[#D2691E]/10 flex items-center justify-center hover:bg-[#D2691E] hover:text-white transition-all">
                      <ChevronRight size={20} />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Global Markets Note */}
        <div className="mt-20 p-12 bg-white border-2 border-[#1A1D21] shadow-[20px_20px_0px_#D2691E] grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter font-display leading-[0.9]">
              Connected to Global <br/>
              Metal Markets
            </h2>
            <p className="text-black/60 font-medium leading-relaxed">
              We monitor the London Metal Exchange (LME) daily. This allows us to provide the most competitive pricing in Limpopo, reflecting real-time global supply and demand.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="text-2xl font-black font-display italic">LME</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-black/40">Market Data Sync</span>
              </div>
              <div className="w-px h-10 bg-black/10" />
              <div className="flex flex-col">
                <span className="text-2xl font-black font-display italic">DAILY</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-black/40">Price Updates</span>
              </div>
            </div>
          </div>
          <div className="relative h-[250px] bg-[#1A1D21] flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
             <TrendingUp size={120} className="text-green-500 opacity-20 absolute -right-10 -bottom-10" />
             <div className="relative text-center p-8">
               <p className="text-white text-3xl font-black uppercase italic font-display mb-4">Need a bulk rate?</p>
               <p className="text-white/60 text-sm font-medium mb-6 uppercase tracking-widest">For loads over 1000kg, contact our industrial buyers.</p>
               <Link to="/contact">
                 <Button className="bg-[#D2691E] text-white rounded-none uppercase font-black tracking-widest px-8">
                   Contact Sales
                 </Button>
               </Link>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
