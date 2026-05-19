import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Facebook, 
  Instagram, 
  Clock,
  Send,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CONTACT_INFO } from '@/config/prices';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { handleFirestoreError, OperationType } from '@/lib/firestore-errors';

export default function Contact() {
  const [formState, setFormState] = React.useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
      createdAt: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, 'contacts'), data);
      setFormState('success');
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'contacts');
      setFormState('idle');
    }
  };

  return (
    <div className="pt-32 pb-20 px-4 bg-paper min-h-screen">
      <Helmet>
        <title>Contact Polokwane Scrap Metals | Location & Hours</title>
        <meta name="description" content="Find our yard in Ladine, Polokwane. Contact us via phone, WhatsApp or email. Open Monday to Saturday for all your scrap metal recycling needs." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="mb-20 border-b-2 border-ebony pb-8">
          <span className="text-brand font-black uppercase tracking-[0.4em] text-sm">Direct Line</span>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic font-industrial leading-none text-ebony mt-4">
            Our <span className="text-brand">Yard</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="flex flex-col gap-12">
            <div className="grid sm:grid-cols-2 gap-0 border-2 border-ebony">
               <div className="bg-paper p-8 border-b-2 sm:border-b-0 sm:border-r-2 border-ebony flex flex-col justify-between group hover:bg-brand/5 transition-colors">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate mb-8">01 / Telephone</div>
                  <h3 className="text-2xl font-black uppercase italic font-industrial mb-6 group-hover:text-brand transition-colors">Voice Inquiries</h3>
                </div>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-xl font-black font-industrial tracking-widest border-b-2 border-ebony w-fit pb-1">
                  {CONTACT_INFO.phone}
                </a>
              </div>

               <div className="bg-paper p-8 flex flex-col justify-between group hover:bg-[#25D366]/5 transition-colors">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate mb-8">02 / Digital</div>
                  <h3 className="text-2xl font-black uppercase italic font-industrial mb-6 group-hover:text-[#25D366] transition-colors">WhatsApp Yard</h3>
                </div>
                <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="text-xl font-black font-industrial tracking-widest border-b-2 border-ebony w-fit pb-1">
                  Chat Now
                </a>
              </div>
            </div>

            <div className="bg-ebony text-paper p-10 shadow-[20px_20px_0px_#1A1D21]">
               <div className="space-y-12">
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand">Physical Location</span>
                  <div className="space-y-2">
                    <p className="text-2xl font-black uppercase italic font-industrial leading-none">{CONTACT_INFO.address}</p>
                    <p className="text-sm font-bold uppercase text-slate">Ladine Industrial, Polokwane, 0699</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand">Operating Hours</span>
                  <div className="grid grid-cols-2 gap-y-4 border-t border-slate/20 pt-4">
                    <span className="text-xs font-black uppercase text-slate">Weekdays:</span>
                    <span className="text-xs font-black uppercase text-paper text-right">{CONTACT_INFO.hours.weekdays}</span>
                    <span className="text-xs font-black uppercase text-slate">Saturdays:</span>
                    <span className="text-xs font-black uppercase text-paper text-right">{CONTACT_INFO.hours.saturday}</span>
                  </div>
                </div>
               </div>
            </div>

            <div className="h-[400px] border-2 border-ebony overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115984.60673323!2d29.358245786718743!3d-23.8821424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec6d628889755b7%3A0xe5a3c93259b66d48!2sPolokwane!5e0!3m2!1sen!2sza!4v1716124712345!5m2!1sen!2sza" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="bg-white border-2 border-ebony p-10 md:p-14 shadow-[20px_20px_0px_#1A1D21] sticky top-32">
              {formState === 'success' ? (
                <div className="text-center py-20 flex flex-col items-center gap-8">
                  <div className="w-24 h-24 bg-brand text-white flex items-center justify-center font-black text-4xl italic font-industrial">OK</div>
                  <h3 className="text-4xl font-black uppercase italic font-industrial">Transmitted</h3>
                  <p className="text-ebony font-bold uppercase tracking-widest text-xs">We will contact you across the wire shortly.</p>
                  <Button className="bg-ebony text-paper rounded-none px-12 py-8 font-black uppercase tracking-widest" onClick={() => setFormState('idle')}>Send Another</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  <div className="space-y-4">
                    <h2 className="text-4xl font-black uppercase italic font-industrial leading-none">Inquiry Desk</h2>
                    <p className="text-xs font-black uppercase tracking-widest text-slate">Direct line to site administration</p>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate">Identity</label>
                       <Input name="name" placeholder="Full Name" required className="h-16 rounded-none border-2 border-ebony font-black text-lg focus:border-brand focus:ring-0" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate">Contact Terminal</label>
                       <Input name="phone" placeholder="+27 ..." required className="h-16 rounded-none border-2 border-ebony font-black text-lg focus:border-brand focus:ring-0" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate">Electronic Mail</label>
                       <Input name="email" type="email" placeholder="john@example.com" required className="h-16 rounded-none border-2 border-ebony font-black text-lg focus:border-brand focus:ring-0" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate">Communication</label>
                       <Textarea name="message" placeholder="State your requirements..." required className="min-h-[160px] rounded-none border-2 border-ebony font-bold text-lg focus:border-brand focus:ring-0" />
                    </div>
                  </div>

                  <Button 
                    disabled={formState === 'submitting'}
                    className="w-full h-20 bg-brand hover:bg-[#B55A1A] text-white rounded-none uppercase font-black tracking-widest shadow-[8px_8px_0px_#1A1D21] active:translate-y-1 active:shadow-none transition-all text-xl"
                  >
                    {formState === 'submitting' ? 'Processing...' : 'Send Transmission'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
