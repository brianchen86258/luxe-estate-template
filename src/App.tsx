/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Waves, 
  Film, 
  UserCheck, 
  Cpu, 
  Trees, 
  Dumbbell, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { PROPERTY_DATA } from './constants';

const iconMap: Record<string, React.ReactNode> = {
  Waves: <Waves className="w-6 h-6" />,
  Film: <Film className="w-6 h-6" />,
  UserCheck: <UserCheck className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Trees: <Trees className="w-6 h-6" />,
  Dumbbell: <Dumbbell className="w-6 h-6" />,
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen selection:bg-gold/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-white/80 backdrop-blur-sm border-b border-black/5">
        <div className="text-2xl font-serif font-semibold tracking-tighter text-dark">
          {PROPERTY_DATA.name.toUpperCase()}
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {[
            { id: 'overview', label: '建案概述' },
            { id: 'amenities', label: '頂級設施' },
            { id: 'gallery', label: '精選藝廊' },
            { id: 'location', label: '地理位置' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-xs tracking-widest font-medium hover:text-gold transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-dark text-white px-6 py-2 text-xs tracking-widest hover:bg-gold transition-all duration-300"
          >
            立即諮詢
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-8 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {[
                { id: 'overview', label: '建案概述' },
                { id: 'amenities', label: '頂級設施' },
                { id: 'gallery', label: '精選藝廊' },
                { id: 'location', label: '地理位置' },
                { id: 'contact', label: '聯絡我們' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-2xl font-serif text-left border-b border-black/5 pb-4"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="overview" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={PROPERTY_DATA.heroImage} 
            alt="Hero" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs uppercase tracking-[0.4em] mb-4 font-medium"
          >
            {PROPERTY_DATA.location}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl font-serif mb-6 leading-tight"
          >
            {PROPERTY_DATA.tagline}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-dark px-10 py-4 text-sm tracking-widest hover:bg-gold hover:text-white transition-all duration-500 group"
            >
              預約私人鑑賞
              <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-white/30" />
        </div>
      </section>

      {/* Stats/Highlights */}
      <section className="py-24 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {PROPERTY_DATA.features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <p className="text-xs uppercase tracking-widest text-dark/50 mb-2">{feature.label}</p>
                <p className="text-3xl font-serif text-dark">{feature.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-32 bg-paper">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif mb-10 leading-snug text-balance"
          >
            {PROPERTY_DATA.description}
          </motion.h2>
          <div className="w-20 h-px bg-gold mx-auto" />
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <p className="text-xs tracking-widest text-gold mb-4 font-semibold">精緻生活</p>
              <h2 className="text-5xl font-serif">為品味人士量身打造的頂級設施</h2>
            </div>
            <p className="text-dark/60 max-w-sm">
              每一個細節都經過精心設計，旨在提供無與倫比的居住體驗，將舒適與絕對的奢華完美結合。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/5 border border-black/5">
            {PROPERTY_DATA.amenities.map((amenity, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-12 hover:bg-paper transition-colors group"
              >
                <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                  {iconMap[amenity.icon]}
                </div>
                <h3 className="text-xl font-serif mb-2">{amenity.name}</h3>
                <p className="text-sm text-dark/50 leading-relaxed">
                  體驗為您的身心健康與娛樂量身打造的世界級設施。
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-32 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-xs tracking-widest text-gold mb-4 font-semibold">視覺饗宴</p>
            <h2 className="text-5xl font-serif">生活的藝術</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROPERTY_DATA.gallery.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden aspect-[4/3] ${idx % 3 === 0 ? 'md:col-span-2 aspect-[21/9]' : ''}`}
              >
                <img 
                  src={img} 
                  alt={`Gallery ${idx}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-32 bg-paper">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs tracking-widest text-gold mb-4 font-semibold">黃金地段</p>
              <h2 className="text-5xl font-serif mb-8">{PROPERTY_DATA.neighborhood.title}</h2>
              <p className="text-lg text-dark/70 leading-relaxed mb-10">
                {PROPERTY_DATA.neighborhood.description}
              </p>
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="text-gold shrink-0 mt-1" />
                <p className="text-dark/80">{PROPERTY_DATA.contact.address}</p>
              </div>
              <button className="flex items-center gap-2 text-xs tracking-widest font-bold hover:text-gold transition-colors">
                在 Google 地圖上查看 <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-2xl shadow-2xl"
            >
              <img 
                src={PROPERTY_DATA.neighborhood.image} 
                alt="Neighborhood" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl font-serif mb-8">開啟您的尊榮旅程</h2>
              <p className="text-dark/60 mb-12 text-lg">
                我們的顧問隨時為您提供私人諮詢與鑑賞安排。請留下您的聯絡資料，我們將儘快與您聯繫。
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-paper flex items-center justify-center text-gold">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest text-dark/40">致電我們</p>
                    <p className="font-medium">{PROPERTY_DATA.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-paper flex items-center justify-center text-gold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest text-dark/40">電子郵件</p>
                    <p className="font-medium">{PROPERTY_DATA.contact.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-6 glass-card p-10 rounded-2xl" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs tracking-widest font-semibold">姓氏</label>
                  <input type="text" className="w-full bg-paper border-none p-4 focus:ring-1 focus:ring-gold outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs tracking-widest font-semibold">名字</label>
                  <input type="text" className="w-full bg-paper border-none p-4 focus:ring-1 focus:ring-gold outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs tracking-widest font-semibold">電子郵件地址</label>
                <input type="email" className="w-full bg-paper border-none p-4 focus:ring-1 focus:ring-gold outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs tracking-widest font-semibold">訊息內容</label>
                <textarea rows={4} className="w-full bg-paper border-none p-4 focus:ring-1 focus:ring-gold outline-none transition-all resize-none"></textarea>
              </div>
              <button className="w-full bg-dark text-white py-5 text-xs tracking-widest font-bold hover:bg-gold transition-all duration-500">
                送出諮詢
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-paper border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-serif font-semibold tracking-tighter">
            {PROPERTY_DATA.name.toUpperCase()}
          </div>
          <p className="text-xs text-dark/40 tracking-widest">
            © 2025 {PROPERTY_DATA.name}。保留所有權利。
          </p>
          <div className="flex gap-6">
            {[
              { label: '隱私權政策', id: 'privacy' },
              { label: '使用條款', id: 'terms' },
              { label: '法律聲明', id: 'legal' }
            ].map(item => (
              <button key={item.id} className="text-xs tracking-widest text-dark/40 hover:text-gold transition-colors">
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </footer>

      {/* Custom Styles for Zoom Animation */}
      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
}
