/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  Camera, 
  HardDrive, 
  Wrench, 
  History, 
  Monitor, 
  Home, 
  ShoppingBag, 
  Briefcase, 
  Warehouse, 
  Factory, 
  Building2, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Mail, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Menu, 
  X,
  Star,
  Search,
  Settings,
  ArrowUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants ---
const PHONE = "8972000660";
const EMAIL = "ranashekh660@gmail.com";
const ADDRESS = "Hingalganj Patherdabi, Hingalganj, North 24 Parganas, West Bengal, 743435";
const WHATSAPP_LINK = `https://wa.me/91${PHONE}`;
const TEL_LINK = `tel:+91${PHONE}`;

// --- Components ---

const SectionHeading = ({ children, subtitle, light = false }: { children: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-16 px-4">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-4xl md:text-6xl font-display font-black mb-4 uppercase italic tracking-tighter ${light ? 'text-white' : 'text-slate-100'}`}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-[10px] font-bold uppercase tracking-widest max-w-2xl mx-auto ${light ? 'text-orange-400' : 'text-orange-500'}`}
      >
        {subtitle}
      </motion.p>
    )}
    <div className={`h-1 w-24 mx-auto mt-4 rounded-full ${light ? 'bg-orange-500' : 'bg-orange-600'}`} />
  </div>
);

const Accordion = ({ items }: { items: { q: string, a: string }[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3 max-w-3xl mx-auto px-4">
      {items.map((item, idx) => (
        <div key={idx} className="border border-slate-700 rounded-xl overflow-hidden bg-slate-800 shadow-sm hover:border-slate-600 transition-all">
          <button 
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full flex items-center justify-between p-5 text-left font-bold text-xs uppercase tracking-widest text-slate-100"
          >
            {item.q}
            {openIndex === idx ? <ChevronUp className="w-4 h-4 text-orange-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
          </button>
          <AnimatePresence>
            {openIndex === idx && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-5 pt-0 text-slate-400 text-xs leading-relaxed border-t border-slate-700/50">
                  {item.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Form state
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 500);
      
      const sections = ['home', 'about', 'services', 'products', 'industries', 'benefits', 'process', 'testimonials', 'portfolio', 'faq', 'contact', 'quote'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Industries', href: '#industries' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    // In real app, send to API
    setTimeout(() => setFormStatus(null), 5000);
  };

  return (
    <div className="relative min-h-screen bg-slate-900">
      {/* --- Sticky Header --- */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="bg-orange-600 w-10 h-10 rounded flex items-center justify-center font-bold text-xl italic text-white group-hover:rotate-6 transition-transform">
              RS
            </div>
            <div>
              <h1 className={`text-lg font-black tracking-tight leading-none uppercase ${scrolled ? 'text-white' : (activeSection === 'home' ? 'text-white' : 'text-orange-500')}`}>
                Rohini <span className="text-orange-500">Safecam</span>
              </h1>
              <p className="text-[9px] text-orange-500 font-bold tracking-[0.2em] uppercase">Kolkata's Leading Security Partner</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-[10px] font-bold uppercase tracking-widest transition-colors hover:text-orange-500 ${activeSection === link.href.slice(1) ? 'text-orange-500' : 'text-slate-400'}`}
              >
                {link.name}
              </a>
            ))}
            <a href="#quote" className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded font-black text-[10px] uppercase tracking-widest transition-all transform hover:scale-105 shadow-xl">
              Free Quote
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6 text-orange-500" /> : <Menu className={`w-6 h-6 ${scrolled ? 'text-orange-500' : 'text-white'}`} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-slate-950 pt-24 px-6 flex flex-col gap-6"
          >
            <button className="absolute top-6 right-6 p-2" onClick={() => setIsMenuOpen(false)}>
              <X className="w-8 h-8 text-orange-500" />
            </button>
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-display font-black text-slate-100 italic uppercase border-b border-slate-800 pb-4"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#quote" 
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 bg-orange-600 text-white text-center py-4 rounded font-black text-lg uppercase italic shadow-2xl"
            >
              Get Free Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Home / Hero Section --- */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1557597774-9d2739f85a76?auto=format&fit=crop&q=80&w=2000" 
            alt="CCTV Monitoring Room" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/85 mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-orange-600 text-white text-[10px] px-3 py-1 rounded font-bold uppercase tracking-widest mb-6">
              Authorized Surveillance Specialist
            </span>
            <h1 className="text-5xl md:text-8xl font-display font-black text-white mb-6 leading-[0.9] uppercase italic tracking-tighter text-shadow-strong">
              PROTECT WHAT <br/>
              <span className="text-orange-500">MATTERS MOST</span>
            </h1>
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Premium Sales • Professional Installation • 24/7 Repair Service • Annual AMC Maintenance across <span className="text-orange-500">West Bengal</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#quote" className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded font-black text-sm uppercase italic transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2">
                Get Free Quote <ArrowRight className="w-4 h-4" />
              </a>
              <a href={TEL_LINK} className="w-full sm:w-auto bg-slate-800/80 hover:bg-slate-700 text-white backdrop-blur-sm border border-slate-700 px-8 py-4 rounded font-black text-sm uppercase italic transition-all flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> Call Specialist
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="no-referrer" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded font-black text-sm uppercase italic transition-all flex items-center justify-center gap-2 overflow-hidden relative group">
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform" />
                <MessageCircle className="w-4 h-4 relative z-10" /> <span className="relative z-10">WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-orange-500"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* --- About Section --- */}
      <section id="about" className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1524143878510-e3b8d6312402?auto=format&fit=crop&q=80&w=800" 
                  alt="Security Expert" 
                  className="rounded-2xl shadow-2xl relative z-10 border border-slate-800"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-600 rounded-2xl -z-0 hidden md:block opacity-20" />
                <div className="absolute -top-6 -left-6 w-48 h-48 border-2 border-orange-500 rounded-2xl -z-0 hidden md:block opacity-30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950/90 backdrop-blur border border-slate-800 p-6 rounded-xl shadow-2xl z-20 flex flex-col items-center">
                  <span className="text-5xl font-black text-orange-500 italic leading-none">10+</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Years Expert</span>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <span className="text-orange-500 font-black text-[10px] uppercase tracking-[0.3em]">Hingalganj Master Agency</span>
              <h2 className="text-5xl md:text-6xl font-display font-black text-white leading-[0.95] uppercase italic tracking-tighter">
                DIGITAL <span className="text-orange-500">PROTECTION</span> SPECIALISTS
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">
                At Rohini Safecam, we provide high-end surveillance and security solutions tailored to your unique needs. From small residential setups to massive industrial deployments across West Bengal, we keep a watchful eye so you don't have to.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {[
                  "Industrial Grade Hardware",
                  "Certified Master Technicians",
                  "24/7 Remote Monitoring",
                  "Lifetime Service Support"
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 bg-slate-800/50 border border-slate-800 p-3 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                    <span className="font-bold text-[10px] text-slate-200 uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section id="services" className="py-24 bg-slate-950">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="From sales to long-term maintenance, we cover every aspect of your security infrastructure.">
            HIGH <span className="text-orange-500">FIDELITY</span> SERVICES
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Camera, title: "CCTV Installation", desc: "Expert placement and cabling for maximum coverage and blind-spot elimination." },
              { icon: ShoppingBag, title: "CCTV Sales", desc: "Premium Hikvision, CP Plus, and Dahua cameras at unbeatable local rates." },
              { icon: HardDrive, title: "DVR/NVR Setup", desc: "High-capacity storage systems with cloud backup options for long-term recording." },
              { icon: Wrench, title: "CCTV Repair", desc: "Fast diagnostics and onsite repair for faulty cameras, wiring, or systems." },
              { icon: History, title: "AMC Maintenance", desc: "Annual Maintenance Contracts to ensure your cameras never stop recording." },
              { icon: Monitor, title: "Remote Monitoring", desc: "Watch your home or office live from your smartphone, anywhere in the world." },
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-all group flex flex-col items-start text-left"
              >
                <div className="bg-slate-900 w-12 h-12 rounded flex items-center justify-center mb-6 border border-slate-700 group-hover:bg-orange-600 transition-colors">
                  <service.icon className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-sm font-black text-white uppercase italic tracking-widest mb-3 group-hover:text-orange-500 transition-colors">{service.title}</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed mb-6 uppercase font-bold tracking-tight">{service.desc}</p>
                <a href="#quote" className="mt-auto inline-flex items-center gap-2 text-[10px] font-black uppercase text-orange-500 group-hover:underline">
                  Inquire Now <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Products Section --- */}
      <section id="products" className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="We supply only original, brand-warrantied hardware from global leaders in security.">
            MASTER <span className="text-orange-500">HARDWARE</span> GRID
          </SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: "https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?auto=format&fit=crop&q=80&w=500", name: "Dome Cameras", type: "Indoor Security", price: "Starts ₹1,299" },
              { img: "https://images.unsplash.com/photo-1557597774-9d2739f85a76?auto=format&fit=crop&q=80&w=500", name: "Bullet Cameras", type: "Outdoor Security", price: "Starts ₹1,599" },
              { img: "https://images.unsplash.com/photo-1524143878510-e3b8d6312402?auto=format&fit=crop&q=80&w=500", name: "IP Cameras", type: "High Definition", price: "Starts ₹2,499" },
              { img: "https://plus.unsplash.com/premium_photo-1661882654378-0eecf9f0919a?auto=format&fit=crop&q=80&w=500", name: "PTZ Zoom Cameras", type: "360° Pan Tilt Zoom", price: "Starts ₹8,999" },
              { img: "https://images.unsplash.com/photo-1563206767-5b18f218e7de?auto=format&fit=crop&q=80&w=500", name: "DVR Systems", type: "Channel Management", price: "Starts ₹3,499" },
              { img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=500", name: "NVR Systems", type: "Network Video", price: "Starts ₹4,999" },
            ].map((product, idx) => (
              <div key={idx} className="group overflow-hidden rounded-xl bg-slate-800 border border-slate-700 hover:border-orange-500/50 transition-all flex flex-col">
                <div className="h-48 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <span className="text-orange-500 text-[9px] font-black uppercase tracking-[0.2em]">{product.type}</span>
                    <h4 className="text-base font-black text-white italic uppercase">{product.name}</h4>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <p className="text-orange-500 font-black text-lg italic">{product.price}</p>
                    <a href="#quote" className="bg-slate-900 border border-slate-700 hover:bg-orange-600 hover:text-white text-[9px] px-4 py-2 rounded font-black uppercase tracking-widest transition-colors">
                      Inquiry
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Industries Section --- */}
      <section id="industries" className="py-24 bg-slate-950">
        <div className="container mx-auto px-4">
          <SectionHeading light subtitle="Tailored security implementations for every sector in Hingalganj.">
            GLOBAL <span className="text-orange-500">SECTOR</span> COVERAGE
          </SectionHeading>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Home, name: "Homes" },
              { icon: ShoppingBag, name: "Shops" },
              { icon: Building2, name: "Offices" },
              { icon: Warehouse, name: "Warehouses" },
              { icon: Factory, name: "Factories" },
              { icon: Building2, name: "Apartments" },
            ].map((industry, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5, borderColor: '#ea580c' }}
                className="bg-slate-900 border border-slate-800 p-8 rounded-xl flex flex-col items-center justify-center text-center group transition-all"
              >
                <industry.icon className="w-8 h-8 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
                <span className="text-slate-200 font-black text-[10px] uppercase tracking-widest leading-none">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Benefits Section --- */}
      <section id="benefits" className="py-24 bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <SectionHeading subtitle="Why hundreds of residents and businesses in West Bengal choose us for their safety.">
                TECHNICAL <span className="text-orange-500">SUPERIORITY</span>
              </SectionHeading>
              
              <div className="space-y-6">
                {[
                  { title: "Crystal Clear Vision", desc: "Industrial grade sensors for extreme night visibility and blind-spot reduction." },
                  { title: "Smart Logic Alerts", desc: "AI-driven motion tracking with zero false-alarm algorithms for total peace." },
                  { title: "Secure Data Isolation", desc: "Bank-level encryption for all local recordings and cloud-link interfaces." },
                  { title: "4-Hour Local Response", desc: "As a Hingalganj native agency, we respond faster than anyone in the district." },
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-5 bg-slate-800/40 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                    <div className="bg-orange-600/20 w-10 h-10 rounded flex items-center justify-center shrink-0 border border-orange-500/20">
                      <span className="text-orange-500 font-black text-xs">{idx + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-white uppercase italic mb-1 tracking-widest">{benefit.title}</h4>
                      <p className="text-[11px] text-slate-400 font-bold leading-relaxed uppercase tracking-tight">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1563206767-5b18f218e7de?auto=format&fit=crop&q=80&w=800" 
                alt="Security Screen" 
                className="rounded-xl shadow-2xl relative z-10 w-full border border-slate-700 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -inset-10 bg-orange-600/10 rounded-full blur-3xl -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* --- Process Section --- */}
      <section id="process" className="py-24 bg-slate-950">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="From initial consultation to active surveillance in 4 professional stages.">
            EXECUTION <span className="text-orange-500">PIPELINE</span>
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {[
              { num: "01", title: "Site Survey", desc: "Detailed perimeter analysis and hardware mapping.", icon: Search },
              { num: "02", title: "Custom Quote", desc: "Itemized billing with tiered hardware options.", icon: Shield },
              { num: "03", title: "Deployment", desc: "Full tactical installation and server sync.", icon: Settings },
              { num: "04", title: "Live Ops", desc: "Final handover and client training session.", icon: MessageCircle },
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-xl text-center group hover:border-orange-500 transition-colors">
                <div className="bg-slate-950 w-16 h-16 rounded flex items-center justify-center mx-auto mb-6 border border-slate-700 group-hover:bg-orange-600 transition-colors">
                  <step.icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <span className="block text-orange-500 font-black text-3xl mb-1 italic opacity-20">{step.num}</span>
                <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-4">{step.title}</h4>
                <p className="text-[10px] text-slate-500 font-bold uppercase leading-relaxed tracking-tight">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Testimonials Section --- */}
      <section id="testimonials" className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Real feedback from families and business owners in Hingalganj.">
            OPERATIONAL <span className="text-orange-500">FEEDBACK</span>
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "S.K. Mondal", role: "Shop Owner", text: "Best CCTV service in Hingalganj. They installed 4 night-vision cameras in my grocery shop. Very professional behavior and affordable price." },
              { name: "Rafiqul Islam", role: "Homeowner", text: "Highly recommend Rohini Safecam. I can now watch my home live from my mobile while I'm away at work. Installation was very clean." },
              { name: "Amit Das", role: "Factory Manager", text: "Excellent AMC services. They maintain our 16-camera factory setup. Their response time is faster than anyone else in this area." },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800 border border-slate-700 p-8 rounded-xl relative group hover:border-orange-500/50 transition-colors">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-orange-500 text-orange-500" />)}
                </div>
                <p className="text-slate-200 text-xs italic font-medium mb-8 leading-relaxed uppercase tracking-tight">"{item.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-orange-600 flex items-center justify-center text-white font-black italic">
                    {item.name[0]}
                  </div>
                  <div>
                    <h5 className="font-black text-slate-100 text-[10px] uppercase tracking-widest">{item.name}</h5>
                    <span className="text-[9px] text-orange-500 font-bold uppercase">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Portfolio Section --- */}
      <section id="portfolio" className="py-24 bg-slate-950">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="A glimpse into some of our successful installations across West Bengal.">
            SURVEILLANCE <span className="text-orange-500">PORTFOLIO</span>
          </SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800", title: "Residential Complex", loc: "Hingalganj Town" },
              { img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800", title: "Modern Office Setup", loc: "Basirhat" },
              { img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800", title: "Wholesale Warehouse", loc: "Hingalganj" },
              { img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800", title: "Retail Jewelry Shop", loc: "Hasnabad" },
              { img: "https://images.unsplash.com/photo-1574621443011-8756541247a3?auto=format&fit=crop&q=80&w=800", title: "Educational Institution", loc: "Sandeshkhali" },
              { img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800", title: "Private Parking Area", loc: "Hingalganj" },
            ].map((work, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl aspect-[16/10] bg-slate-900">
                <img src={work.img} alt={work.title} className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-6 flex flex-col justify-end">
                  <h4 className="text-white text-sm font-black uppercase italic tracking-widest">{work.title}</h4>
                  <p className="text-orange-500 text-[10px] font-bold uppercase tracking-widest">{work.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section id="faq" className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Common questions about our services and security products.">
            FREQUENT <span className="text-orange-500">SYSTEM</span> INTEL
          </SectionHeading>

          <Accordion items={[
            { q: "How long does a standard home installation take?", a: "A typical 4-camera installation in a residential unit takes about 4 to 6 hours, including professional cabling and app configuration." },
            { q: "Do the cameras work during power cuts?", a: "Yes, if connected to a UPS or Inverter. We highly recommend a dedicated security power backup for uninterrupted 24/7 logging." },
            { q: "Is remote monitoring possible on older smartphones?", a: "Yes, our firmware supports all modern surveillance protocols compatible with almost any smartphone from the last 8 years." },
            { q: "What is the true warranty period for products?", a: "We provide full 1-year brand warranty on all hardware, plus a specialized 6-month rapid-response certificate from our agency." },
          ]} />
        </div>
      </section>

      {/* --- Contact & Quote Section --- */}
      <section id="contact" className="py-24 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Details */}
            <div className="flex-1 space-y-8">
              <div>
                <span className="text-orange-500 font-black text-[10px] uppercase tracking-[0.4em] block mb-4 italic text-center lg:text-left">COMMAND CENTER</span>
                <h2 className="text-5xl font-display font-black text-white leading-none uppercase italic text-center lg:text-left">LET'S SECURE<br/><span className="text-orange-500">YOUR ASSETS</span></h2>
                <p className="text-slate-500 text-[11px] font-bold uppercase leading-relaxed max-w-md mt-6 text-center lg:text-left">
                  Questions? Emergency repairs? Or ready for a full installation? Our technical team is standing by for fast deployment.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <a href={TEL_LINK} className="flex items-center gap-5 p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-orange-600 transition-all group">
                  <div className="w-12 h-12 bg-orange-600 rounded flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="block text-slate-500 text-[9px] font-black uppercase tracking-widest">Call Specialist</span>
                    <span className="text-xl font-black text-white italic tracking-tighter leading-none">+91 {PHONE}</span>
                  </div>
                </a>
                <div className="flex items-start gap-5 p-5 bg-slate-900 border border-slate-800 rounded-xl">
                  <div className="w-12 h-12 bg-orange-600 rounded flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="block text-slate-500 text-[9px] font-black uppercase tracking-widest">Base Location</span>
                    <span className="text-xs font-black text-white uppercase italic leading-tight tracking-tight">
                      {ADDRESS}
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-800 h-64 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all shadow-2xl relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14749.563456345634!2d89.0205!3d22.4697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff72d3f23a54b7%3A0x2f1b4c6e9e8e54b7!2sHingalganj%2C%20West%20Bengal%20743435!5e0!3m2!1sen!2sin!4v1714150000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Quote Form */}
            <div id="quote" className="flex-1">
              <div className="bg-orange-600 p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -z-0" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter mb-1">GET A FREE QUOTE</h3>
                  <p className="text-[10px] text-white/80 font-bold uppercase tracking-widest mb-8">Ready for Professional Grade 24/7 Monitoring?</p>
                  
                  {formStatus === 'success' ? (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl text-center"
                    >
                      <CheckCircle2 className="w-12 h-12 text-white mx-auto mb-4" />
                      <h4 className="text-xl font-black text-white italic uppercase mb-2">Request Uplinked!</h4>
                      <p className="text-xs text-white/80 uppercase font-black tracking-tight">Our field team will call you within 2 hours.</p>
                      <button onClick={() => setFormStatus(null)} className="mt-6 text-[10px] font-black text-white uppercase underline">New Request</button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" required placeholder="FULL NAME" className="w-full bg-orange-700/50 border border-orange-500 rounded px-4 py-3 text-xs text-white placeholder-orange-200 outline-none font-bold uppercase tracking-widest" />
                        <input type="tel" required placeholder="PHONE NUMBER" className="w-full bg-orange-700/50 border border-orange-500 rounded px-4 py-3 text-xs text-white placeholder-orange-200 outline-none font-bold uppercase tracking-widest" />
                      </div>
                      <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-orange-700/50 border border-orange-500 rounded px-4 py-3 text-xs text-white placeholder-orange-200 outline-none font-bold uppercase tracking-widest" />
                      <input type="text" placeholder="LOCATION AREA" className="w-full bg-orange-700/50 border border-orange-500 rounded px-4 py-3 text-xs text-white placeholder-orange-200 outline-none font-bold uppercase tracking-widest" />
                      <select className="w-full bg-orange-700/50 border border-orange-500 rounded px-4 py-3 text-xs text-white outline-none font-bold uppercase tracking-widest appearance-none cursor-pointer">
                        <option className="bg-orange-700">NEW INSTALLATION</option>
                        <option className="bg-orange-700">SYSTEM REPAIR</option>
                        <option className="bg-orange-700">AMC CONTRACT</option>
                        <option className="bg-orange-700">SALES INQUIRY</option>
                      </select>
                      <textarea rows={3} placeholder="TACTICAL REQUIREMENTS..." className="w-full bg-orange-700/50 border border-orange-500 rounded px-4 py-3 text-xs text-white placeholder-orange-200 outline-none font-bold uppercase tracking-widest"></textarea>
                      <button type="submit" className="w-full bg-white text-orange-600 py-4 rounded font-black text-xs uppercase italic shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all tracking-tighter">
                        TRANSMIT REQUEST NOW
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-slate-950 py-16 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-orange-600 w-10 h-10 rounded flex items-center justify-center font-bold text-xl italic text-white">RS</div>
                <div>
                  <h1 className="text-lg font-black tracking-tight leading-none uppercase text-white">Rohini <span className="text-orange-500">Safecam</span></h1>
                  <p className="text-[9px] text-orange-500 font-bold tracking-[0.2em] uppercase">Kolkata's Leading Security Partner</p>
                </div>
              </div>
              <p className="text-[10px] text-slate-500 font-bold uppercase leading-relaxed tracking-widest">
                Surveillance Intelligence excellence since 2014. GST Validated Entity.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-8 h-8 bg-slate-900 border border-slate-800 rounded flex items-center justify-center text-slate-500 hover:text-orange-500 hover:border-orange-500 transition-all">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-slate-100 font-black text-[10px] mb-8 uppercase tracking-[0.2em] italic">NAVIGATION</h5>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-[10px] text-slate-500 font-bold uppercase tracking-widest hover:text-white transition-colors">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-slate-100 font-black text-[10px] mb-8 uppercase tracking-[0.2em] italic">CORE DEPARTMENTS</h5>
              <ul className="space-y-4">
                <li><a href="#services" className="text-[10px] text-slate-500 font-bold uppercase tracking-widest hover:text-white transition-colors">Residential Systems</a></li>
                <li><a href="#services" className="text-[10px] text-slate-500 font-bold uppercase tracking-widest hover:text-white transition-colors">Industrial Security</a></li>
                <li><a href="#services" className="text-[10px] text-slate-500 font-bold uppercase tracking-widest hover:text-white transition-colors">Tactical Support</a></li>
                <li><a href="#services" className="text-[10px] text-slate-500 font-bold uppercase tracking-widest hover:text-white transition-colors">Hardware Sales</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-slate-100 font-black text-[10px] mb-8 uppercase tracking-[0.2em] italic">COMMAND INTEL</h5>
              <ul className="space-y-4 border-l border-slate-800 pl-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                  <span className="text-[9px] text-slate-500 font-black uppercase tracking-tight leading-tight">{ADDRESS}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-orange-500" />
                  <span className="text-[10px] text-slate-100 font-black italic tracking-tighter">+91 {PHONE}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-600 text-[9px] font-bold uppercase tracking-[0.3em]">
              © {new Date().getFullYear()} ROHINI SAFECAM. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-4">
               <div className="flex items-center gap-1">
                 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                 <span className="text-[9px] text-white font-black uppercase tracking-widest leading-none">Ops Center Active</span>
               </div>
            </div>
          </div>
        </div>
      </footer>

      {/* --- Floating Actions --- */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3">
        <AnimatePresence>
          {showBackToTop && (
            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-slate-950 text-white p-3 rounded shadow-2xl border border-slate-800 hover:bg-orange-600 transition-all hidden md:flex items-center justify-center"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="no-referrer"
          className="bg-green-600 text-white p-4 rounded shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform skew-x-[-20deg]" />
          <MessageCircle className="w-6 h-6 relative z-10" />
        </a>
        <a 
          href={TEL_LINK}
          className="bg-orange-600 text-white p-4 rounded shadow-2xl hover:scale-105 active:scale-95 transition-all flex lg:hidden items-center justify-center animate-pulse"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
