"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Copy, Check, Heart, Dog, Zap, Menu, X, Rocket, Shield, Star, Bone, PawPrint, ArrowRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

// --- Components ---

const WavyDivider = ({ className, flip = false, color = "fill-white" }: { className?: string; flip?: boolean; color?: string }) => (
  <div className={clsx("w-full leading-[0] relative", className)}>
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={clsx("relative block w-full h-[40px] md:h-[80px]", flip ? "transform rotate-180" : "")}
    >
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        className={color}
      ></path>
    </svg>
  </div>
);

const SectionHeading = ({ title, highlight, dark = false }: { title: string, highlight?: string, dark?: boolean }) => (
  <div className="mb-16 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={clsx(
        "text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none",
        dark ? "text-brand-darkTeal" : "text-white"
      )}
    >
      {title} <br className="hidden md:block" />
      {highlight && <span className="text-brand-yellow drop-shadow-sm">{highlight}</span>}
    </motion.h2>
  </div>
);

// --- Main Page ---

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const CA = "HF9GHYi2a5fh9gCQLgzRg4PLyBnJTBs9uMhUXJvSdoge";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-brand-teal selection:bg-brand-yellow selection:text-brand-darkTeal">
      <div className="bg-noise" />
      
      {/* Navbar */}
      <nav className={clsx(
        "fixed w-full z-[100] transition-all duration-500 px-6",
        scrolled ? "top-4" : "top-8"
      )}>
        <div className={clsx(
          "max-w-6xl mx-auto flex justify-between items-center px-6 py-3 rounded-full transition-all duration-500",
          scrolled ? "bg-brand-darkTeal/80 backdrop-blur-xl border border-white/10 shadow-2xl" : "bg-transparent"
        )}>
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-brand-yellow group cursor-pointer shadow-lg">
                <Image src="/logo.jpg" alt="Logo" fill className="object-cover group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-white">PetsOnDoge</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Mission", "Protocol", "Roadmap"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-black uppercase tracking-widest text-white/80 hover:text-brand-yellow transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="https://anoncoin.it/pets" 
              target="_blank"
              className="bg-brand-yellow text-brand-darkTeal px-6 py-2.5 rounded-full font-black text-sm border-b-4 border-brand-orange hover:border-b-0 hover:translate-y-1 transition-all shadow-lg active:shadow-none"
            >
              BUY NOW
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[90] bg-brand-darkTeal flex flex-col items-center justify-center gap-8 p-12 md:hidden"
          >
            {["Mission", "Protocol", "Roadmap"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-black uppercase tracking-tighter text-white hover:text-brand-yellow transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="https://anoncoin.it/pets" 
              className="w-full bg-brand-yellow text-brand-darkTeal py-5 rounded-3xl font-black text-2xl text-center shadow-2xl"
            >
              BUY NOW
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="relative pt-44 pb-32 px-6 flex flex-col items-center text-center overflow-hidden">
        {/* Floating Background Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
            <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-20 left-10 text-white"><Bone size={80} /></motion.div>
            <motion.div animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-40 right-10 text-brand-yellow"><PawPrint size={100} /></motion.div>
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-40 right-20 text-white"><Star size={40} /></motion.div>
        </div>

        <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 15 }}
            className="relative w-56 h-56 md:w-80 md:h-80 mb-12"
        >
            <div className="absolute inset-0 bg-brand-yellow rounded-full blur-3xl opacity-20 animate-pulse" />
            <Image 
              src="/logo.jpg" 
              alt="Logo" 
              fill 
              className="object-cover rounded-[3rem] border-8 border-white shadow-2xl transform rotate-3" 
              priority 
            />
            <div className="absolute -bottom-4 -right-4 bg-brand-orange text-white px-6 py-2 rounded-2xl font-black text-xl border-4 border-white shadow-xl -rotate-6">
                Hi! 👋
            </div>
        </motion.div>

        <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-7xl md:text-9xl lg:text-[11rem] font-black text-brand-yellow tracking-tighter leading-[0.85] stroke-text uppercase drop-shadow-[0_10px_0_#0d3d3f]"
        >
            PetsOnDoge
        </motion.h1>
        
        <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl font-bold text-white mt-8 mb-12 max-w-3xl leading-relaxed"
        >
            The <span className="text-brand-yellow underline decoration-wavy decoration-4 underline-offset-8">goodest</span> coin on Solana. <br className="hidden md:block" />
            Helping shelter pets find homes! 🏡
        </motion.p>

        <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 w-full justify-center max-w-2xl px-6"
        >
            <div onClick={copyToClipboard} className="flex-1 cursor-pointer bg-white text-brand-darkTeal px-8 py-5 rounded-3xl font-mono font-bold border-b-8 border-gray-200 active:border-b-0 active:translate-y-2 transition-all flex items-center justify-between shadow-2xl group overflow-hidden">
                <div className="text-left flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Contract Address</span>
                  <span className="text-sm md:text-base">{CA.slice(0, 8)}...{CA.slice(-8)}</span>
                </div>
                <div className="bg-brand-teal/5 p-3 rounded-2xl group-hover:bg-brand-yellow transition-colors">
                    {copied ? <Check size={20} className="text-green-600" /> : <Copy size={20} />}
                </div>
            </div>
            
            <a href="https://anoncoin.it/pets" target="_blank" className="bg-brand-orange text-white px-10 py-5 rounded-3xl font-black text-2xl border-b-8 border-[#c25e00] active:border-b-0 active:translate-y-2 transition-all shadow-2xl flex items-center justify-center gap-3 hover:brightness-110">
                <Rocket size={28} /> BUY NOW
            </a>
        </motion.div>
      </header>

      {/* Marquee */}
      <div className="bg-brand-yellow text-brand-darkTeal py-5 overflow-hidden border-y-[6px] border-brand-darkTeal relative z-20 transform -rotate-1 shadow-2xl">
        <div className="whitespace-nowrap animate-marquee flex gap-12 items-center font-black text-2xl md:text-3xl uppercase tracking-widest">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex items-center gap-6">
              DO ONLY GOOD EVERYDAY <PawPrint size={28} /> $PETS <Bone size={28} />
            </span>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <section id="mission" className="bg-brand-darkTeal py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-teal/20 blur-[120px] rounded-full" />
        
        <div className="section-container relative z-10">
            <SectionHeading title="Do Only" highlight="Good Everyday" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-panel p-10 md:p-16"
              >
                <p className="text-2xl md:text-3xl font-bold leading-relaxed mb-10 text-white/90">
                    We aren't just another meme coin. We are a <b className="text-brand-yellow">family</b>. <br /><br />
                    PetsOnDoge is inspired by the original Doge ethos, funding food, care, and adoptions for shelter pets worldwide.
                </p>
                <div className="flex gap-4">
                  <div className="bg-brand-yellow text-brand-darkTeal px-6 py-3 rounded-2xl font-black flex items-center gap-2">
                    <Heart size={20} fill="currentColor" /> CHARITY FIRST
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Heart, title: "100%", desc: "Community Focused", color: "text-red-400" },
                  { icon: Dog, title: "Shelter", desc: "Global Support", color: "text-brand-yellow" },
                  { icon: Shield, title: "Secure", desc: "Verified Contract", color: "text-blue-400" },
                  { icon: Zap, title: "Solana", desc: "Ultra Fast Speed", color: "text-purple-400" },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-all group"
                  >
                    <item.icon size={40} className={clsx("mb-6 group-hover:scale-110 transition-transform", item.color)} />
                    <h3 className="text-3xl font-black mb-1">{item.title}</h3>
                    <p className="font-bold opacity-50 uppercase tracking-widest text-xs">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
        </div>
      </section>

      <WavyDivider className="-mt-1 bg-brand-cream" color="fill-brand-darkTeal" flip />

      {/* Protocol Section */}
      <section id="protocol" className="bg-brand-cream py-32">
        <div className="section-container">
            <SectionHeading title="Protocol" highlight="Economics" dark />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {[
                { label: "Total Supply", value: "1 Billion", sub: "$PETS Tokens", color: "bg-brand-yellow" },
                { label: "Buy/Sell Tax", value: "0 / 0", sub: "No Transaction Fees", color: "bg-white" },
                { label: "Market Cap", value: "~$60k", sub: "Early Opportunity", color: "bg-brand-teal text-white" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={clsx(
                    "p-12 rounded-[3rem] border-4 border-brand-darkTeal shadow-[12px_12px_0px_0px_#0d3d3f] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all",
                    item.color
                  )}
                >
                  <h3 className={clsx("text-sm font-black uppercase tracking-widest opacity-60 mb-4")}>{item.label}</h3>
                  <p className="text-5xl lg:text-6xl font-black mb-2 leading-none">{item.value}</p>
                  <p className="font-bold text-lg opacity-80">{item.sub}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-brand-darkTeal p-12 rounded-[3rem] text-center text-white border-4 border-brand-darkTeal shadow-[12px_12px_0px_0px_#facc15]"
            >
              <h3 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight">Fair Launch on Solana</h3>
              <p className="text-xl md:text-2xl font-medium text-white/70 max-w-2xl mx-auto mb-10">
                No private sales. No pre-mine. 100% of the supply is in circulation and owned by the community.
              </p>
              <a href="https://dexscreener.com/solana/HF9GHYi2a5fh9gCQLgzRg4PLyBnJTBs9uMhUXJvSdoge" target="_blank" className="inline-flex items-center gap-3 bg-brand-yellow text-brand-darkTeal px-10 py-5 rounded-3xl font-black text-xl hover:scale-105 transition-transform shadow-xl">
                VIEW CHART <ArrowRight />
              </a>
            </motion.div>
        </div>
      </section>

      <WavyDivider className="-mt-1 bg-brand-teal" color="fill-brand-cream" />

      {/* Roadmap Section */}
      <section id="roadmap" className="bg-brand-teal py-32 relative">
         <div className="section-container relative z-10">
            <SectionHeading title="Development" highlight="Roadmap" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {[
                    { step: "01", title: "Foundation", items: ["Contract Deployment", "LP Burned Forever", "Community Launch"], active: true },
                    { step: "02", title: "Expansion", items: ["Strategic Partnerships", "Charity Donation #1", "Marketing Overdrive"], active: false },
                    { step: "03", title: "Ecosystem", items: ["Global Pet Network", "DAO Governance", "CEX Listings"], active: false },
                    { step: "04", title: "Infinity", items: ["Helping Every Shelter", "The Doge Ethos", "Mass Adoption"], active: false },
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={clsx(
                          "relative p-10 md:p-14 rounded-[3rem] border-4 transition-all overflow-hidden",
                          item.active 
                            ? "bg-white text-brand-darkTeal border-brand-yellow shadow-[0_20px_60px_-15px_rgba(250,204,21,0.3)]" 
                            : "bg-white/5 border-white/10 text-white opacity-40 grayscale hover:opacity-100 hover:grayscale-0"
                        )}
                    >
                        <span className={clsx(
                          "text-7xl font-black absolute -top-4 -right-4 opacity-10",
                          item.active ? "text-brand-teal" : "text-white"
                        )}>{item.step}</span>
                        
                        <div className="relative z-10">
                          <h3 className="text-4xl font-black mb-8 uppercase tracking-tighter">{item.title}</h3>
                          <ul className="space-y-4">
                            {item.items.map((li, index) => (
                              <li key={index} className="flex items-center gap-4 font-bold text-lg">
                                <div className={clsx(
                                  "w-6 h-6 rounded-full flex items-center justify-center",
                                  item.active ? "bg-brand-teal text-white" : "bg-white/20 text-white"
                                )}>
                                  <Check size={14} strokeWidth={4} />
                                </div>
                                {li}
                              </li>
                            ))}
                          </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-darkTeal text-white pt-32 pb-16 relative">
        <WavyDivider className="absolute top-0 left-0" color="fill-brand-teal" flip />
        
        <div className="section-container text-center">
            <div className="flex flex-col items-center gap-8 mb-16">
              <div className="relative w-24 h-24 rounded-[2rem] overflow-hidden border-4 border-brand-yellow shadow-2xl">
                  <Image src="/logo.jpg" alt="Logo" fill className="object-cover" />
              </div>
              <h2 className="text-5xl font-black tracking-tighter text-white uppercase">PetsOnDoge</h2>
              
              <div className="flex justify-center gap-6">
                  {[
                    { icon: Zap, label: "Twitter" },
                    { icon: Rocket, label: "Telegram" },
                    { icon: ExternalLink, label: "Solscan" }
                  ].map((social) => (
                    <a 
                      key={social.label} 
                      href="#" 
                      className="bg-white/10 p-6 rounded-3xl hover:bg-brand-yellow hover:text-brand-darkTeal transition-all hover:scale-110 shadow-xl"
                    >
                      <social.icon size={28} />
                    </a>
                  ))}
              </div>
            </div>

            <div className="max-w-xl mx-auto border-t border-white/10 pt-12">
              <p className="opacity-40 text-sm font-bold uppercase tracking-widest leading-loose">
                  $PETS is a community meme coin for entertainment purposes only. <br />
                  No financial advice. © 2024 PetsOnDoge Foundation.
              </p>
            </div>
        </div>
      </footer>

    </main>
  );
}
