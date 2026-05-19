import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  MapPin, 
  Briefcase, 
  Package, 
  User, 
  ClipboardCheck,
  MessageCircle,
  Truck,
  Building2,
  ShieldCheck,
  Scale
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { handleFirestoreError, OperationType } from '@/lib/firestore-errors';

const quoteSchema = z.object({
  metalTypes: z.array(z.string()).min(1, "Select at least one metal type"),
  estimatedWeight: z.string().min(1, "Weight is required"),
  location: z.string().min(3, "Location or area is required"),
  serviceType: z.enum(["Collection", "Drop-Off"]),
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  whatsappOptIn: z.boolean(),
  preferredTime: z.string().min(1, "Preferred callback time is required"),
  additionalInfo: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

const METAL_OPTIONS = [
  { id: 'copper', label: 'Copper' },
  { id: 'brass', label: 'Brass' },
  { id: 'aluminium', label: 'Aluminium' },
  { id: 'steel', label: 'Steel / Iron' },
  { id: 'stainless', label: 'Stainless Steel' },
  { id: 'lead', label: 'Lead' },
  { id: 'batteries', label: 'Batteries' },
  { id: 'ewaste', label: 'E-Waste' },
  { id: 'mixed', label: 'Mixed Scrap' },
];

export default function Quote() {
  const [step, setStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      metalTypes: [],
      estimatedWeight: '',
      location: '',
      serviceType: 'Collection',
      name: '',
      phone: '',
      whatsappOptIn: true,
      preferredTime: '',
      additionalInfo: '',
    },
  });

  const onSubmit = async (values: QuoteFormValues) => {
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'quotes'), {
        ...values,
        createdAt: serverTimestamp(),
      });
      setIsSubmitted(true);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'quotes');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = async () => {
    let fieldsToValidate: any[] = [];
    if (step === 1) fieldsToValidate = ['metalTypes', 'estimatedWeight'];
    if (step === 2) fieldsToValidate = ['location', 'serviceType'];
    
    const isValid = await form.trigger(fieldsToValidate);
    if (isValid) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 bg-paper flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl w-full bg-ebony text-paper p-12 text-center border-4 border-brand shadow-[20px_20px_0px_#1A1D21]"
        >
          <div className="w-24 h-24 bg-brand rounded-none flex items-center justify-center mx-auto mb-10">
            <CheckCircle2 size={48} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter font-industrial mb-6">Quote Received</h1>
          <p className="text-slate text-lg mb-10 font-bold uppercase tracking-widest leading-relaxed">
            Our Yard Manager will contact you via phone or WhatsApp within 2 hours with our best scrap rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <Link to="/" className="w-full sm:w-auto">
              <Button className="w-full h-16 bg-brand text-white px-10 rounded-none font-black uppercase tracking-widest shadow-[4px_4px_0px_white/10]">
                Return Home
              </Button>
            </Link>
            <a href="https://wa.me/27712345678" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full h-16 border-2 border-slate text-slate px-10 rounded-none font-black uppercase tracking-widest hover:bg-slate hover:text-ebony transition-all">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-paper">
      <Helmet>
        <title>Get a Quote | Polokwane Scrap Metals</title>
        <meta name="description" content="Request a scrap metal quote or collection. Highest prices paid in Polokwane for copper, aluminium, brass and more." />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <div className="mb-20 text-center space-y-4">
          <span className="text-brand font-black uppercase tracking-[0.4em] text-sm italic">Step {step} of 3</span>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic font-industrial leading-none text-ebony">
            Get Your <span className="text-brand">Quote</span>
          </h1>
          <div className="max-w-xs mx-auto pt-6">
            <Progress value={(step / 3) * 100} className="h-1 rounded-none bg-ebony/10 [&>div]:bg-brand" />
          </div>
        </div>

        <div className="bg-white border-2 border-ebony p-8 md:p-12 shadow-[20px_20px_0px_#1A1D21]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div 
                    key="step1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-10"
                  >
                    <div className="flex items-center gap-4 border-b-2 border-brand pb-4 mb-10">
                      <span className="bg-brand text-white w-8 h-8 flex items-center justify-center font-black italic font-industrial">01</span>
                      <h2 className="text-2xl font-black uppercase italic font-industrial">Metal Classification</h2>
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="metalTypes"
                      render={() => (
                        <FormItem>
                          <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate mb-4 block">Select categories you have</FormLabel>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {METAL_OPTIONS.map((item) => (
                              <div key={item.id}>
                                <FormField
                                  control={form.control}
                                  name="metalTypes"
                                  render={({ field }) => {
                                    const isChecked = field.value?.includes(item.id);
                                    return (
                                      <FormItem
                                        onClick={() => {
                                          const newValue = isChecked
                                            ? field.value.filter((v: string) => v !== item.id)
                                            : [...field.value, item.id];
                                          field.onChange(newValue);
                                        }}
                                        className={`flex flex-row items-center space-x-3 space-y-0 p-5 border-2 transition-all cursor-pointer ${isChecked ? 'border-brand bg-brand/5' : 'border-ebony/10 hover:border-ebony'}`}
                                      >
                                        <FormControl>
                                          <Checkbox
                                            checked={isChecked}
                                            className="hidden"
                                          />
                                        </FormControl>
                                        <FormLabel className="text-xs font-black uppercase tracking-tighter cursor-pointer">
                                          {item.label}
                                        </FormLabel>
                                      </FormItem>
                                    )
                                  }}
                                />
                              </div>
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="estimatedWeight"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate">Approximate Total Weight (kg)</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="e.g. 250" 
                              {...field} 
                              className="h-16 rounded-none border-2 border-ebony focus:border-brand focus:ring-0 font-black text-xl placeholder:text-ebony/20"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div 
                    key="step2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-10"
                  >
                    <div className="flex items-center gap-4 border-b-2 border-brand pb-4 mb-10">
                      <span className="bg-brand text-white w-8 h-8 flex items-center justify-center font-black italic font-industrial">02</span>
                      <h2 className="text-2xl font-black uppercase italic font-industrial">Logistics Detail</h2>
                    </div>

                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate">Collection Area / Suburb</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="e.g. Ladine, Seshego, Polokwane North" 
                              {...field} 
                              className="h-16 rounded-none border-2 border-ebony focus:border-brand focus:ring-0 font-black text-xl"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="serviceType"
                      render={({ field }) => (
                        <FormItem className="space-y-4">
                          <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate">Service Requirement</FormLabel>
                          <FormControl>
                            <div className="grid grid-cols-2 gap-4">
                              <div 
                                className={`p-8 border-2 flex flex-col items-center gap-4 cursor-pointer transition-all ${field.value === 'Collection' ? 'border-brand bg-brand/5' : 'border-ebony/10 hover:border-ebony'}`}
                                onClick={() => field.onChange('Collection')}
                              >
                                <Truck className={field.value === 'Collection' ? 'text-brand' : 'text-ebony/30'} size={40} />
                                <span className="font-black uppercase text-xs italic tracking-widest">Free Collection</span>
                              </div>
                              <div 
                                className={`p-8 border-2 flex flex-col items-center gap-4 cursor-pointer transition-all ${field.value === 'Drop-Off' ? 'border-brand bg-brand/5' : 'border-ebony/10 hover:border-ebony'}`}
                                onClick={() => field.onChange('Drop-Off')}
                              >
                                <Building2 className={field.value === 'Drop-Off' ? 'text-brand' : 'text-ebony/30'} size={40} />
                                <span className="font-black uppercase text-xs italic tracking-widest">Drop-Off Yard</span>
                              </div>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div 
                    key="step3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-10"
                  >
                    <div className="flex items-center gap-4 border-b-2 border-brand pb-4 mb-10">
                      <span className="bg-brand text-white w-8 h-8 flex items-center justify-center font-black italic font-industrial">03</span>
                      <h2 className="text-2xl font-black uppercase italic font-industrial">Contact Information</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} className="h-16 rounded-none border-2 border-ebony font-black" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate">Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+27 ..." {...field} className="h-16 rounded-none border-2 border-ebony font-black" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="preferredTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate">Best Time to Call</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Immediately or Morning" {...field} className="h-16 border-2 border-ebony rounded-none font-black" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="additionalInfo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[10px] font-black uppercase tracking-widest text-slate">Special Instructions (Optional)</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Any extra details about your load?" {...field} className="min-h-[120px] rounded-none border-2 border-ebony font-bold" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="whatsappOptIn"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-3 space-y-0 p-6 bg-slate/10 border-2 border-ebony">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="w-6 h-6 data-[state=checked]:bg-brand data-[state=checked]:border-brand rounded-none"
                            />
                          </FormControl>
                          <div className="space-y-1">
                            <FormLabel className="text-[10px] font-black uppercase tracking-wider flex items-center gap-2">
                              Primary Contact via WhatsApp
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-col sm:flex-row justify-between gap-4 pt-8 border-t-2 border-ebony/10">
                {step > 1 ? (
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={prevStep}
                    className="h-16 border-2 border-ebony uppercase font-black tracking-widest rounded-none px-10 hover:bg-ebony hover:text-white transition-all"
                  >
                    <ArrowLeft className="mr-2" size={18} /> Previous
                  </Button>
                ) : (
                  <div className="hidden sm:block"></div>
                )}

                {step < 3 ? (
                  <Button 
                    type="button" 
                    onClick={nextStep}
                    className="h-16 bg-ebony text-white uppercase font-black tracking-widest rounded-none px-12 transition-all hover:bg-black"
                  >
                    Next Stage <ArrowRight className="ml-2" size={18} />
                  </Button>
                ) : (
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="h-20 bg-brand hover:bg-[#B55A1A] text-white uppercase font-black tracking-widest rounded-none px-16 shadow-[10px_10px_0px_#1A1D21] active:translate-y-1 active:shadow-none transition-all text-xl"
                  >
                    {isSubmitting ? "Processing..." : "Finalize Request"}
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </div>

        {/* Form Trust Signals */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {[
            { icon: <ShieldCheck size={20} />, label: 'Secure SSL' },
            { icon: <MessageCircle size={20} />, label: 'Fast Reply' },
            { icon: <CheckCircle2 size={20} />, label: 'SA Licensed' },
            { icon: <Scale size={20} />, label: 'Certified' }
          ].map((signal, i) => (
            <div key={i} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black/40 bg-white/50 p-3 justify-center border border-ebony/5">
              {signal.icon}
              {signal.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
