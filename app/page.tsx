"use client";

import Image from "next/image";
import { useState } from "react";
import { Copy, Check, ExternalLink, Heart, Dog, Zap, Menu, X, Rocket, Shield, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const CA = "HF9GHYi2a5fh9gCQLgzRg4PLyBnJTBs9uMhUXJvSdoge";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", bounce: 0.4 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="min-h-screen text-white overflow-x-hidden selection:bg-brand-yellow selection:text-brand-darkTeal font-display">
      
      {/* Background Stars (Static CSS/SVG Pattern could be better, but simple divs work for now) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.3, scale: 0.5 }}
            animate={{ 
              opacity: [0.3, 0.8, 0.3], 
              scale: [0.8, 1.2, 0.8],
              y: [0, -20, 0]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2, 
              repeat: Infinity,
              delay: Math.random() * 2 
            }}
            className="absolute text-brand-yellow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            <Star fill="currentColor" size={20 + Math.random() * 30} />
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-brand-teal/90 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-display text-2xl font-black text-white drop-shadow-md">
            <span className="text-3xl animate-bounce">🐾</span> 
            <span className="text-brand-yellow drop-shadow-[0_2px_0_rgba(180,83,9,1)] stroke-black">PetsOnDoge</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-lg font-bold text-white/90">
            <a href="#about" className="hover:text-brand-yellow transition hover:scale-110 inline-block">About</a>
            <a href="#tokenomics" className="hover:text-brand-yellow transition hover:scale-110 inline-block">Tokenomics</a>
            <a href="#roadmap" className="hover:text-brand-yellow transition hover:scale-110 inline-block">Roadmap</a>
            <a href="#gallery" className="hover:text-brand-yellow transition hover:scale-110 inline-block">Gallery</a>
          </div>

          <div className="hidden md:flex gap-4">
             <a href="https://anoncoin.it/pets" target="_blank" className="px-6 py-3 bg-brand-yellow text-brand-darkTeal font-black rounded-full hover:bg-white transition hover:scale-105 shadow-[0_4px_0_rgba(180,83,9,0.3)] hover:shadow-[0_2px_0_rgba(180,83,9,0.3)] translate-y-0 hover:translate-y-[2px]">
               BUY $PETS
             </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-brand-darkTeal border-b border-white/10"
            >
              <div className="flex flex-col p-6 gap-6 font-bold text-center text-xl">
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-yellow">About</a>
                <a href="#tokenomics" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-yellow">Tokenomics</a>
                <a href="#roadmap" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-yellow">Roadmap</a>
                <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-yellow">Gallery</a>
                <a href="https://anoncoin.it/pets" target="_blank" className="bg-brand-yellow text-brand-darkTeal py-3 rounded-xl mx-12 shadow-[0_4px_0_rgba(180,83,9,0.3)]">BUY NOW</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 flex flex-col items-center text-center z-10">
        
        <motion.div 
          initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          className="relative w-64 h-64 sm:w-80 sm:h-80 mb-8 animate-float"
        >
          {/* Logo Container with 'Pop' effect */}
          <div className="absolute inset-0 bg-brand-yellow rounded-full scale-105 blur-sm opacity-50" />
          <Image src="/logo.jpg" alt="PetsOnDoge Logo" fill className="object-cover rounded-full border-8 border-white shadow-2xl" priority />
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl sm:text-8xl font-black mb-4 text-brand-yellow drop-shadow-[0_6px_0_rgba(180,83,9,1)] tracking-tight stroke-text"
          style={{ WebkitTextStroke: '2px #B45309' }}
        >
          PetsOnDoge
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl text-white font-bold max-w-2xl mb-8 drop-shadow-md"
        >
          All Pets Need <span className="text-brand-yellow underline decoration-wavy decoration-2">$PETS</span> 🐾
        </motion.p>

        {/* CA Box */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          onClick={copyToClipboard}
          className="cursor-pointer group relative flex flex-wrap justify-center items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 px-6 py-4 rounded-2xl hover:bg-white/20 transition mb-12 max-w-[95vw] shadow-lg"
        >
          <span className="text-brand-yellow font-black text-lg">CA:</span>
          <code className="text-sm sm:text-lg text-white font-mono break-all sm:break-normal font-bold">
            {CA}
          </code>
          <div className="text-white group-hover:scale-110 transition p-2 bg-brand-yellow/20 rounded-lg">
            {copied ? <Check size={20} className="text-green-300" /> : <Copy size={20} />}
          </div>
          {copied && (
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-xl shadow-lg animate-bounce">
              Copied!
            </span>
          )}
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <a href="https://anoncoin.it/pets" target="_blank" className="flex items-center justify-center gap-3 px-8 py-4 bg-brand-yellow text-brand-darkTeal font-black text-xl rounded-2xl hover:bg-white transition hover:-translate-y-1 shadow-[0_6px_0_rgba(180,83,9,0.4)] active:shadow-none active:translate-y-1">
            <Rocket size={28} /> BUY NOW
          </a>
          <a href="https://dexscreener.com/solana/HF9GHYi2a5fh9gCQLgzRg4PLyBnJTBs9uMhUXJvSdoge" target="_blank" className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-brand-darkTeal font-black text-xl rounded-2xl hover:bg-gray-100 transition hover:-translate-y-1 shadow-[0_6px_0_rgba(0,0,0,0.2)] active:shadow-none active:translate-y-1">
            <Zap size={28} /> CHART
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-6xl font-black mb-8 text-white drop-shadow-lg">
              <span className="text-brand-yellow">Do Only Good</span> Everyday
            </h2>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border-2 border-white/20">
              <p className="text-xl sm:text-2xl text-white font-medium leading-relaxed max-w-3xl mx-auto">
                PetsOnDoge is a family crypto dedicated to funding food, care, and adoptions to bring hope and homes to every shelter pet. 
                <br/><br/>
                We are the <span className="text-brand-yellow font-black">goodest boys</span> of crypto! 🐶
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Heart, color: "text-red-400", title: "Charity", desc: "Supporting shelters and animal welfare." },
              { icon: Dog, color: "text-brand-yellow", title: "Community", desc: "Strong Doge family bringing memes to life." },
              { icon: Shield, color: "text-blue-300", title: "Safe", desc: "Secure on Solana. Transparent and fair." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="p-8 bg-brand-darkTeal/50 backdrop-blur-md rounded-3xl border-2 border-white/10 hover:border-brand-yellow transition hover:-translate-y-2 shadow-xl">
                <div className={`w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 ${item.color} mx-auto`}>
                  <item.icon size={40} strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-black mb-3 text-center">{item.title}</h3>
                <p className="text-gray-200 text-center text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-24 relative overflow-hidden z-10 bg-brand-darkTeal/30">
        <div className="container mx-auto px-6 max-w-4xl relative">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-6xl font-black mb-6 text-white drop-shadow-md">Tokenomics</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 bg-white text-brand-darkTeal rounded-3xl shadow-[0_10px_0_rgba(0,0,0,0.1)] flex flex-col items-center justify-center text-center border-4 border-white"
            >
              <span className="text-gray-500 text-lg font-bold uppercase tracking-wider mb-2">Total Supply</span>
              <span className="text-3xl sm:text-5xl font-black text-brand-teal">1,000,000,000</span>
              <span className="text-xl font-bold mt-2">$PETS</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-white text-brand-darkTeal rounded-3xl shadow-[0_10px_0_rgba(0,0,0,0.1)] flex flex-col items-center justify-center text-center border-4 border-white"
            >
              <span className="text-gray-500 text-lg font-bold uppercase tracking-wider mb-2">Taxes</span>
              <span className="text-3xl sm:text-5xl font-black text-brand-orange">0/0</span>
              <span className="text-xl font-bold mt-2">No Taxes</span>
            </motion.div>

             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 p-10 bg-brand-yellow rounded-3xl shadow-[0_10px_0_rgba(180,83,9,0.3)] flex flex-col items-center justify-center text-center transform hover:scale-[1.02] transition"
            >
              <span className="text-brand-darkTeal text-xl font-black uppercase tracking-wider mb-2">Current Market Cap</span>
              <span className="text-5xl sm:text-7xl font-black text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.1)]">~$60k</span>
              <div className="mt-4 bg-white px-6 py-2 rounded-full">
                  <span className="text-brand-teal font-black text-lg">💎 EARLY GEM</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How To Buy */}
      <section id="how-to-buy" className="py-24 z-10 relative">
        <div className="container mx-auto px-6 max-w-4xl">
           <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl sm:text-6xl font-black mb-16 text-center text-white"
           >
             How to Buy
           </motion.h2>

           <div className="space-y-6">
             {[
               { step: "01", title: "Create a Wallet", desc: "Download Phantom or your preferred Solana wallet." },
               { step: "02", title: "Get some SOL", desc: "Buy SOL from an exchange (Coinbase, Binance) and send it to your wallet." },
               { step: "03", title: "Go to Anoncoin", desc: "Visit the PetsOnDoge page on Anoncoin.it." },
               { step: "04", title: "Swap for $PETS", desc: "Connect your wallet and swap SOL for $PETS. Welcome to the family!" }
             ].map((item, i) => (
               <motion.div 
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 p-6 bg-white/90 rounded-2xl border-4 border-transparent hover:border-brand-yellow transition group shadow-lg"
               >
                 <div className="flex-shrink-0 w-16 h-16 bg-brand-teal rounded-full flex items-center justify-center text-3xl font-black text-white shadow-inner">
                    {item.step}
                 </div>
                 <div>
                   <h3 className="text-2xl font-black mb-1 text-brand-darkTeal">{item.title}</h3>
                   <p className="text-gray-600 font-medium">{item.desc}</p>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-24 relative z-10 bg-brand-darkTeal/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl sm:text-6xl font-black mb-16 text-center text-white"
           >
             Roadmap
           </motion.h2>

           <div className="relative border-l-8 border-white/20 ml-4 md:ml-0 md:pl-0 space-y-16">
             {[
               { phase: "Phase 1", title: "Launch 🚀", items: ["Website Launch", "Community Building", "DEX Listing", "1000 Holders"] },
               { phase: "Phase 2", title: "Growth 📈", items: ["Marketing Push", "Charity Partnerships", "CoinGecko Listing", "CEX Listings"] },
               { phase: "Phase 3", title: "Expansion 🌍", items: ["Merchandise", "Doge DAO", "Global Charity Events", "To The Moon"] },
             ].map((phase, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.2 }}
                 className="relative pl-12 md:pl-0 md:flex md:gap-16 md:items-start group"
               >
                 {/* Dot */}
                 <div className="absolute left-[-11px] top-0 w-8 h-8 rounded-full bg-brand-yellow border-4 border-white shadow-lg md:hidden z-10" />
                 
                 <div className="md:w-1/3 md:text-right md:pr-16 md:border-r-8 md:border-white/20 md:relative">
                    <div className="hidden md:block absolute -right-[20px] top-0 w-8 h-8 rounded-full bg-brand-yellow border-4 border-white shadow-lg z-10" />
                    <h3 className="text-brand-yellow font-black text-2xl mb-2 uppercase tracking-wide">{phase.phase}</h3>
                    <h4 className="text-white text-3xl font-black drop-shadow-md">{phase.title}</h4>
                 </div>
                 <div className="md:w-2/3 md:pl-0 pt-2 md:pt-0">
                   <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border-2 border-white/10 hover:bg-white/20 transition">
                    <ul className="space-y-3">
                        {phase.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-3 text-white font-bold text-lg">
                            <Star size={16} className="text-brand-yellow fill-brand-yellow" />
                            {item}
                        </li>
                        ))}
                    </ul>
                   </div>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 z-10 relative">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-6xl font-black mb-12 text-white">Meme Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
             {[...Array(4)].map((_, i) => (
               <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square bg-white rounded-3xl border-4 border-brand-teal p-2 shadow-xl hover:scale-105 transition duration-300 rotate-1 hover:rotate-0"
               >
                  <div className="w-full h-full relative rounded-2xl overflow-hidden bg-gray-100">
                    <Image src="/logo.jpg" alt="Meme" fill className="object-cover" />
                  </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/10 text-center bg-brand-darkTeal relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center gap-6 mb-8">
            <a href="#" className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-brand-darkTeal transition hover:-translate-y-1 shadow-lg">
              <span className="sr-only">Twitter</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-brand-darkTeal transition hover:-translate-y-1 shadow-lg">
              <span className="sr-only">Telegram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-2.02-1.23-2.94-1.83-.42-.27-.76-.59.26-1.63.24-.24 4.4-4.22 4.48-4.57.01-.04.01-.2-.16-.29-.2-.09-.52-.06-.76.06-.35.17-5.5 3.65-5.91 3.93-.56.39-1.33.63-1.92.48-.54-.14-1.58-.45-2.27-.64-.85-.23-1.22-.36-1.16-.9.03-.27.38-.54 1.07-.82 4.19-1.83 7-3.03 8.39-3.6 3.99-1.63 4.82-1.92 5.37-1.93.12 0 .39.03.56.17.14.11.18.26.19.41 0 .15.01.29 0 .44z"/></svg>
            </a>
          </div>
          <p className="text-white/60 text-sm mb-4 font-bold">© 2024 PetsOnDoge. All rights reserved.</p>
          <p className="text-white/40 text-xs max-w-lg mx-auto font-medium">
            Disclaimer: $PETS is a meme coin with no intrinsic value. 
            The coin is completely useless and for entertainment purposes only.
          </p>
        </div>
      </footer>
    </main>
  );
}
