import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const blogPosts = [
  {
    title: 'Why Copper Prices are Rising in 2024',
    excerpt: 'Global demand for renewable energy is driving red metal prices to historic highs. Learn how to capitalize.',
    date: 'May 15, 2024',
    image: 'https://images.unsplash.com/photo-1558444394-bb9e0d1601ee?q=80&w=600'
  },
  {
    title: 'Clean vs Dirty Scrap: How to Get Paid More',
    excerpt: 'Simple sorting and cleaning tips that can increase your pay-out by up to 30% per load.',
    date: 'May 02, 2024',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600'
  },
  {
    title: 'New Recycling Regulations in Polokwane',
    excerpt: 'Keep your business compliant with the latest changes to the Second-Hand Goods Act.',
    date: 'April 20, 2024',
    image: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?q=80&w=600'
  }
];

export default function Blog() {
  return (
    <div className="pt-32 pb-20 px-4 bg-paper min-h-screen">
      <Helmet>
        <title>Recycling Blog & Industry News | Polokwane Scrap Metals</title>
        <meta name="description" content="Stay updated with the latest metal market trends, recycling tips, and local news from PSM Polokwane." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="mb-24 border-b-2 border-ebony pb-8 text-center">
          <span className="text-brand font-black uppercase tracking-[0.4em] text-sm italic">Industry Insights</span>
          <h1 className="text-6xl md:text-[100px] font-black uppercase tracking-tighter italic font-industrial leading-[0.8] text-ebony mt-4">
            The <span className="text-brand">Wire</span>.
          </h1>
          <p className="mt-10 text-slate font-bold max-w-xl mx-auto uppercase tracking-widest text-xs leading-relaxed italic">
            Expert analysis on commodity markets, scrap optimization, and environmental policy in Limpopo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-ebony shadow-[30px_30px_60px_rgba(0,0,0,0.05)]">
          {blogPosts.map((post, i) => (
            <div key={i} className={`group bg-white h-full flex flex-col transition-all relative overflow-hidden ${i < blogPosts.length - 1 ? 'lg:border-r-2 border-ebony' : ''} ${i < 2 ? 'md:border-b-2 lg:border-b-0 border-ebony' : ''}`}>
              <div className="h-[400px] overflow-hidden border-b-2 border-ebony relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                <div className="absolute top-6 left-6 bg-brand text-white p-3 font-black text-[10px] uppercase tracking-widest italic font-industrial shadow-[4px_4px_0px_#1A1D21]">
                  Feature / 0{i+1}
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow gap-8">
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-brand">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-slate rounded-none" />
                  <span>By Site Admin</span>
                </div>
                <h3 className="text-3xl font-black uppercase italic font-industrial leading-[0.9] text-ebony tracking-tighter hover:text-brand transition-colors cursor-pointer">{post.title}</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-slate leading-relaxed italic">{post.excerpt}</p>
                <div className="mt-auto pt-8 border-t border-slate/10">
                  <Button variant="link" className="p-0 h-auto text-[10px] font-black uppercase tracking-[0.4em] text-ebony group-hover:text-brand transition-colors">
                    Access Intel <ArrowRight size={14} className="ml-4 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe Section */}
        <div className="mt-40 bg-ebony text-paper p-12 md:p-24 flex flex-col items-center text-center gap-12 border-l-[16px] border-brand shadow-[40px_40px_80px_rgba(0,0,0,0.2)] relative overflow-hidden">
          <BookOpen size={200} className="absolute -left-20 -bottom-20 text-white/5 -rotate-12" />
          <div className="space-y-4 relative z-10">
            <span className="text-brand font-black uppercase tracking-[0.5em] text-xs">Market Intelligence</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter font-industrial italic leading-[0.8] max-w-2xl mx-auto">
              Weekly Rate <span className="text-brand">Sheets</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row w-full max-w-lg gap-0 border-2 border-slate/20 relative z-10">
             <input type="email" placeholder="Terminal Address (Email)" className="flex-grow h-20 bg-paper/5 px-8 font-black uppercase tracking-widest text-xs focus:outline-none focus:bg-paper/10 text-white placeholder:text-slate/50" />
             <Button className="bg-brand hover:bg-[#B55A1A] h-20 px-12 rounded-none uppercase font-black tracking-widest text-sm transition-all border-l-2 border-slate/20">Subscribe</Button>
          </div>
          <p className="text-[10px] text-slate/40 uppercase tracking-[0.6em] font-black italic relative z-10">Confidential / Direct / Secure</p>
        </div>
      </div>
    </div>
  );
}
