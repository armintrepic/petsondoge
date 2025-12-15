"use client";

import Image from "next/image";
import { useState } from "react";
import { Copy, Check, ExternalLink, Heart, Dog, Zap, Menu, X, Rocket, Shield } from "lucide-react";
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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
    <main className="min-h-screen bg-[#121212] text-gray-100 overflow-x-hidden selection:bg-yellow-500 selection:text-black">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#121212]/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-display text-2xl font-bold text-yellow-400">
            <span className="text-3xl">🐾</span> PetsOnDoge
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-300">
            <a href="#about" className="hover:text-yellow-400 transition">About</a>
            <a href="#tokenomics" className="hover:text-yellow-400 transition">Tokenomics</a>
            <a href="#roadmap" className="hover:text-yellow-400 transition">Roadmap</a>
            <a href="#gallery" className="hover:text-yellow-400 transition">Gallery</a>
          </div>

          <div className="hidden md:flex gap-4">
             <a href="https://anoncoin.it/pets" target="_blank" className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition hover:scale-105 shadow-[0_0_15px_rgba(250,204,21,0.4)]">
               Buy Now
             </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#1a1a1a] border-b border-white/10"
            >
              <div className="flex flex-col p-6 gap-4 font-semibold">
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-400">About</a>
                <a href="#tokenomics" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-400">Tokenomics</a>
                <a href="#roadmap" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-400">Roadmap</a>
                <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="hover:text-yellow-400">Gallery</a>
                <a href="https://anoncoin.it/pets" target="_blank" className="text-yellow-400">Buy $PETS</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-yellow-500/30 rounded-full blur-[100px]" />
            <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-[100px]" />
        </div>

        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="relative w-48 h-48 sm:w-64 sm:h-64 mb-8 border-4 border-yellow-400/30 rounded-full overflow-hidden shadow-[0_0_50px_rgba(250,204,21,0.2)]"
        >
          <Image src="/logo.jpg" alt="PetsOnDoge Logo" fill className="object-cover" priority />
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl sm:text-7xl font-display font-bold mb-4 bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
        >
          PetsOnDoge
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xl sm:text-2xl text-gray-300 max-w-2xl mb-8 font-light"
        >
          All Pets Need <span className="text-yellow-400 font-bold">$PETS</span>
        </motion.p>

        {/* CA Box */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          onClick={copyToClipboard}
          className="cursor-pointer group relative flex flex-wrap justify-center items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-xl hover:bg-white/10 transition mb-12 max-w-[95vw]"
        >
          <span className="text-gray-500 text-sm font-mono">CA:</span>
          <code className="text-sm sm:text-base text-yellow-200 font-mono break-all sm:break-normal">
            {CA}
          </code>
          <div className="text-gray-400 group-hover:text-white transition p-2 bg-white/5 rounded-lg">
            {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
          </div>
          {copied && (
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full animate-bounce">
              Copied!
            </span>
          )}
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a href="https://anoncoin.it/pets" target="_blank" className="flex items-center justify-center gap-2 px-8 py-4 bg-yellow-400 text-black font-bold text-lg rounded-xl hover:bg-yellow-300 hover:scale-105 transition shadow-lg shadow-yellow-400/20">
            <Rocket size={24} /> Buy on Anoncoin
          </a>
          <a href="https://dexscreener.com/solana/HF9GHYi2a5fh9gCQLgzRg4PLyBnJTBs9uMhUXJvSdoge" target="_blank" className="flex items-center justify-center gap-2 px-8 py-4 bg-[#232323] border border-white/20 text-white font-bold text-lg rounded-xl hover:bg-[#2a2a2a] hover:scale-105 transition">
            <Zap size={24} /> Live Chart
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-[#121212] to-[#1a1a1a]">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-display font-bold mb-6 text-yellow-400">Our Mission</h2>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Inspired by Dogecoin’s <span className="text-white font-bold">"Do Only Good Everyday"</span> ethos, 
              PetsOnDoge is a family crypto dedicated to funding food, care, and adoptions to bring hope and homes to every shelter pet.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="p-8 bg-[#232323] rounded-3xl border border-white/5 hover:border-yellow-400/30 transition hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 text-red-500">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 font-display">Charity First</h3>
              <p className="text-gray-400">Every transaction and community effort helps support animal shelters and welfare organizations.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-8 bg-[#232323] rounded-3xl border border-white/5 hover:border-yellow-400/30 transition hover:-translate-y-2">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mb-6 text-yellow-400">
                <Dog size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 font-display">Doge Family</h3>
              <p className="text-gray-400">Building a strong, positive community that meme's for a cause. We are the good boys of crypto.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="p-8 bg-[#232323] rounded-3xl border border-white/5 hover:border-yellow-400/30 transition hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 font-display">Secure & Safe</h3>
              <p className="text-gray-400">Built on Solana for lightning-fast speeds and low costs. Community driven and transparent.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[120px] -z-10" />
        
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-display font-bold mb-6 text-white">Tokenomics</h2>
            <p className="text-gray-400">Simple, fair, and transparent.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center"
            >
              <span className="text-gray-400 text-sm uppercase tracking-wider mb-2">Total Supply</span>
              <span className="text-3xl sm:text-4xl font-mono font-bold text-yellow-400">1,000,000,000</span>
              <span className="text-sm text-gray-500 mt-2">$PETS</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center"
            >
              <span className="text-gray-400 text-sm uppercase tracking-wider mb-2">Taxes</span>
              <span className="text-3xl sm:text-4xl font-mono font-bold text-green-400">0/0</span>
              <span className="text-sm text-gray-500 mt-2">Buy / Sell Tax</span>
            </motion.div>

             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center"
            >
              <span className="text-gray-400 text-sm uppercase tracking-wider mb-2">Current Market Cap</span>
              <span className="text-4xl sm:text-6xl font-display font-bold text-white">~$60k</span>
              <span className="text-sm text-yellow-400 mt-2 font-semibold">Early Gem 💎</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How To Buy */}
      <section id="how-to-buy" className="py-24 bg-[#151515]">
        <div className="container mx-auto px-6 max-w-4xl">
           <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-5xl font-display font-bold mb-16 text-center text-yellow-400"
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 p-6 bg-[#1a1a1a] rounded-2xl border border-white/5 hover:border-yellow-400/50 transition group"
               >
                 <span className="text-4xl font-black text-gray-800 group-hover:text-yellow-500/20 transition">{item.step}</span>
                 <div>
                   <h3 className="text-xl font-bold mb-1 text-white">{item.title}</h3>
                   <p className="text-gray-400">{item.desc}</p>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-24 relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-5xl font-display font-bold mb-16 text-center text-white"
           >
             Roadmap
           </motion.h2>

           <div className="relative border-l-2 border-yellow-400/20 ml-4 md:ml-0 md:pl-0 space-y-12">
             {[
               { phase: "Phase 1", title: "Launch", items: ["Website Launch", "Community Building", "DEX Listing", "1000 Holders"] },
               { phase: "Phase 2", title: "Growth", items: ["Marketing Push", "Charity Partnerships", "CoinGecko Listing", "CEX Listings"] },
               { phase: "Phase 3", title: "Expansion", items: ["Merchandise", "Doge DAO", "Global Charity Events", "To The Moon 🚀"] },
             ].map((phase, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.2 }}
                 className="relative pl-8 md:pl-0 md:flex md:gap-12 md:items-start group"
               >
                 <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)] md:hidden" />
                 
                 <div className="md:w-1/3 md:text-right md:pr-12 md:border-r-2 md:border-yellow-400/20 md:relative">
                    <div className="hidden md:block absolute -right-[9px] top-0 w-4 h-4 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
                    <h3 className="text-yellow-400 font-bold text-xl mb-1">{phase.phase}</h3>
                    <h4 className="text-white font-display text-2xl font-bold">{phase.title}</h4>
                 </div>
                 <div className="md:w-2/3 md:pl-0 pt-2 md:pt-0">
                   <ul className="space-y-2">
                     {phase.items.map((item, j) => (
                       <li key={j} className="flex items-center gap-2 text-gray-400">
                         <div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-yellow-400 transition" />
                         {item}
                       </li>
                     ))}
                   </ul>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* Gallery (Placeholder) */}
      <section id="gallery" className="py-24 bg-[#151515]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-5xl font-display font-bold mb-12 text-yellow-400">Meme Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
             {[...Array(4)].map((_, i) => (
               <div key={i} className="aspect-square bg-[#232323] rounded-xl border border-white/5 flex items-center justify-center overflow-hidden relative group">
                  <Image src="/logo.jpg" alt="Meme" fill className="object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition duration-500" />
                  <span className="absolute bottom-2 right-2 text-xs font-bold bg-black/50 px-2 py-1 rounded text-white">Meme #{i+1}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center bg-[#121212]">
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center gap-4 mb-8">
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition">
              <span className="sr-only">Telegram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-2.02-1.23-2.94-1.83-.42-.27-.76-.59.26-1.63.24-.24 4.4-4.22 4.48-4.57.01-.04.01-.2-.16-.29-.2-.09-.52-.06-.76.06-.35.17-5.5 3.65-5.91 3.93-.56.39-1.33.63-1.92.48-.54-.14-1.58-.45-2.27-.64-.85-.23-1.22-.36-1.16-.9.03-.27.38-.54 1.07-.82 4.19-1.83 7-3.03 8.39-3.6 3.99-1.63 4.82-1.92 5.37-1.93.12 0 .39.03.56.17.14.11.18.26.19.41 0 .15.01.29 0 .44z"/></svg>
            </a>
          </div>
          <p className="text-gray-500 text-sm mb-4">© 2024 PetsOnDoge. All rights reserved.</p>
          <p className="text-gray-600 text-xs max-w-lg mx-auto">
            Disclaimer: $PETS is a meme coin with no intrinsic value or expectation of financial return. 
            There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only.
          </p>
        </div>
      </footer>
    </main>
  );
}
