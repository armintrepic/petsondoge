"use client";

import Image from "next/image";
import { useState } from "react";
import { Copy, Check, Heart, Dog, Zap, Menu, X, Rocket, Shield, Star, Bone, PawPrint } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import clsx from "clsx";

// --- Components ---

const WavyDivider = ({ className, flip = false }: { className?: string; flip?: boolean }) => (
  <div className={clsx("w-full leading-[0] z-20 relative", className)}>
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={clsx("relative block w-full h-[60px] sm:h-[100px]", flip ? "transform rotate-180" : "")}
    >
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        className="fill-current"
      ></path>
    </svg>
  </div>
);

const Marquee = () => (
  <div className="bg-brand-yellow text-brand-darkTeal py-3 overflow-hidden border-y-4 border-brand-darkTeal relative z-30 transform -rotate-1">
    <div className="whitespace-nowrap animate-marquee flex gap-8 items-center font-black text-xl uppercase tracking-widest">
      {[...Array(10)].map((_, i) => (
        <span key={i} className="flex items-center gap-4">
          DO ONLY GOOD EVERYDAY <PawPrint size={20} /> $PETS <Bone size={20} />
        </span>
      ))}
    </div>
  </div>
);

const NavButton = ({ href, children, mobile = false, onClick }: any) => (
  <a
    href={href}
    onClick={onClick}
    className={clsx(
      "font-black tracking-wide transition-all duration-300",
      mobile
        ? "text-2xl hover:text-brand-yellow"
        : "text-lg text-white hover:text-brand-yellow hover:scale-110"
    )}
  >
    {children}
  </a>
);

// --- Main Page ---

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const CA = "HF9GHYi2a5fh9gCQLgzRg4PLyBnJTBs9uMhUXJvSdoge";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", bounce: 0.5 } }
  };

  return (
    <main className="min-h-screen bg-brand-teal text-white overflow-x-hidden font-display selection:bg-brand-yellow selection:text-black">
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 px-4 py-4 top-0">
        <div className="bg-brand-darkTeal/90 backdrop-blur-md rounded-full border-4 border-white/20 shadow-xl container mx-auto px-6 py-3 flex justify-between items-center max-w-6xl">
          <div className="flex items-center gap-2">
            <div className="bg-brand-yellow p-1.5 rounded-full border-2 border-white shadow-sm">
                <span className="text-2xl">🐶</span>
            </div>
            <span className="text-2xl font-black tracking-tight text-white drop-shadow-md">PetsOnDoge</span>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <NavButton href="#about">About</NavButton>
            <NavButton href="#tokenomics">Tokenomics</NavButton>
            <NavButton href="#how-to-buy">How to Buy</NavButton>
            <a href="https://anoncoin.it/pets" target="_blank" className="bg-brand-yellow text-brand-darkTeal px-6 py-2.5 rounded-full font-black border-b-4 border-brand-orange hover:border-b-0 hover:translate-y-1 transition-all shadow-lg hover:shadow-md">
              BUY NOW
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-teal pt-24 px-6 flex flex-col gap-8 items-center md:hidden"
          >
            <NavButton mobile href="#about" onClick={() => setMobileMenuOpen(false)}>About</NavButton>
            <NavButton mobile href="#tokenomics" onClick={() => setMobileMenuOpen(false)}>Tokenomics</NavButton>
            <NavButton mobile href="#how-to-buy" onClick={() => setMobileMenuOpen(false)}>How to Buy</NavButton>
            <a href="https://anoncoin.it/pets" className="bg-brand-yellow text-brand-darkTeal w-full py-4 rounded-xl font-black text-center text-xl shadow-xl">BUY NOW</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="relative pt-40 pb-32 px-6 flex flex-col items-center text-center overflow-hidden bg-brand-teal">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-20 left-10 text-white animate-bounce duration-[3s]"><Bone size={60} /></div>
            <div className="absolute bottom-40 right-20 text-brand-yellow animate-bounce duration-[4s] delay-100"><PawPrint size={80} /></div>
        </div>

        <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 mb-6 z-10"
        >
            <div className="absolute inset-0 bg-brand-yellow rounded-full scale-110 border-8 border-white/30 animate-pulse" />
            <Image src="/logo.jpg" alt="Logo" fill className="object-cover rounded-full border-[12px] border-white shadow-2xl relative z-10" priority />
            <div className="absolute -bottom-6 -right-6 bg-brand-orange text-white px-6 py-2 rounded-full font-black text-xl border-4 border-white shadow-lg rotate-12 z-20">
                Hi! 👋
            </div>
        </motion.div>

        <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl sm:text-9xl font-black text-brand-yellow drop-shadow-[0_8px_0_rgba(22,99,102,1)] tracking-tight relative z-10 stroke-text"
            style={{ WebkitTextStroke: "3px #166366" }}
        >
            PetsOnDoge
        </motion.h1>
        
        <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl font-bold text-white mt-4 mb-10 max-w-3xl drop-shadow-md"
        >
            The <span className="text-brand-yellow underline decoration-wavy decoration-4">goodest</span> coin on Solana. 
            Helping shelter pets find homes! 🏡
        </motion.p>

        <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center z-10"
        >
            <div onClick={copyToClipboard} className="cursor-pointer bg-white text-brand-darkTeal px-6 py-4 rounded-2xl font-mono font-bold border-b-8 border-gray-200 active:border-b-0 active:translate-y-2 transition-all flex items-center gap-3 shadow-xl group">
                <span className="text-sm sm:text-base">{CA.slice(0, 6)}...{CA.slice(-6)}</span>
                <div className="bg-brand-teal/10 p-2 rounded-lg group-hover:bg-brand-yellow transition-colors">
                    {copied ? <Check size={20} className="text-green-600" /> : <Copy size={20} />}
                </div>
            </div>
            
            <a href="https://anoncoin.it/pets" target="_blank" className="bg-brand-orange text-white px-8 py-4 rounded-2xl font-black text-xl border-b-8 border-[#c25e00] active:border-b-0 active:translate-y-2 transition-all shadow-xl flex items-center justify-center gap-2 hover:brightness-110">
                <Rocket size={24} /> BUY NOW
            </a>
        </motion.div>
      </header>

      <Marquee />

      {/* About Section */}
      <section id="about" className="relative bg-[#166366] py-24">
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-brand-teal rounded-[3rem] p-8 sm:p-16 border-[10px] border-white/10 shadow-2xl text-center"
            >
                <h2 className="text-4xl sm:text-6xl font-black mb-8 text-white drop-shadow-lg">
                    Do Only <span className="text-brand-yellow">Good</span> Everyday
                </h2>
                <p className="text-xl sm:text-2xl font-medium leading-relaxed mb-12 text-white/90">
                    We aren't just another meme coin. We are a <b className="text-brand-yellow">family</b>. 
                    PetsOnDoge is inspired by the original Doge ethos, funding food, care, and adoptions for shelter pets worldwide.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { icon: Heart, title: "Charity", desc: "Donations to shelters" },
                        { icon: Dog, title: "Community", desc: "Stronger together" },
                        { icon: Shield, title: "Secure", desc: "Safe on Solana" },
                    ].map((item, i) => (
                        <div key={i} className="bg-white text-brand-darkTeal p-6 rounded-3xl border-b-8 border-gray-200 transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-brand-teal/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-brand-darkTeal">
                                <item.icon size={32} strokeWidth={3} />
                            </div>
                            <h3 className="text-2xl font-black mb-2">{item.title}</h3>
                            <p className="font-bold opacity-70">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
      </section>

      <WavyDivider className="text-[#166366] -mt-1 bg-brand-cream" flip />

      {/* Tokenomics */}
      <section id="tokenomics" className="bg-brand-cream py-24 text-brand-darkTeal">
        <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-5xl sm:text-7xl font-black text-center mb-16 drop-shadow-sm text-brand-darkTeal">
                TOKENOMICS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-brand-yellow p-10 rounded-[2.5rem] border-4 border-brand-darkTeal shadow-[10px_10px_0px_0px_rgba(22,99,102,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-default">
                    <h3 className="text-2xl font-black uppercase tracking-widest opacity-80 mb-2">Total Supply</h3>
                    <p className="text-4xl sm:text-6xl font-black">1 Billion</p>
                    <p className="font-bold mt-2 text-xl">$PETS</p>
                </div>

                <div className="bg-white p-10 rounded-[2.5rem] border-4 border-brand-darkTeal shadow-[10px_10px_0px_0px_rgba(22,99,102,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-default">
                    <h3 className="text-2xl font-black uppercase tracking-widest opacity-80 mb-2">Tax</h3>
                    <p className="text-4xl sm:text-6xl font-black text-brand-orange">0/0</p>
                    <p className="font-bold mt-2 text-xl">No Buy/Sell Tax</p>
                </div>
            </div>
            
            <div className="mt-8 bg-brand-teal p-8 rounded-3xl border-4 border-brand-darkTeal text-center text-white shadow-[10px_10px_0px_0px_rgba(22,99,102,1)]">
                <span className="text-2xl font-black uppercase">Current Market Cap</span>
                <div className="text-6xl sm:text-8xl font-black my-4 text-brand-yellow drop-shadow-md">~$60k</div>
                <span className="bg-white text-brand-darkTeal px-4 py-1 rounded-full font-black text-sm uppercase tracking-wider">Early Gem Alert 💎</span>
            </div>
        </div>
      </section>

      <WavyDivider className="text-brand-cream bg-[#166366]" />

      {/* How to Buy */}
      <section id="how-to-buy" className="bg-[#166366] py-24 relative">
         <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-5xl sm:text-7xl font-black text-center mb-16 text-white drop-shadow-md">
                HOW TO BUY
            </h2>
            
            <div className="space-y-6">
                {[
                    { step: "1", text: "Create a Wallet (Phantom)" },
                    { step: "2", text: "Get some SOL" },
                    { step: "3", text: "Go to Anoncoin.it" },
                    { step: "4", text: "Swap SOL for $PETS" },
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-6 rounded-2xl flex items-center gap-6 border-l-[16px] border-brand-yellow shadow-lg"
                    >
                        <div className="bg-brand-darkTeal text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-2xl flex-shrink-0">
                            {item.step}
                        </div>
                        <p className="text-xl sm:text-2xl font-black text-brand-darkTeal">{item.text}</p>
                    </motion.div>
                ))}
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-darkTeal text-white py-12 text-center border-t-8 border-brand-yellow">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-black mb-8 text-brand-yellow">PetsOnDoge</h2>
            <div className="flex justify-center gap-6 mb-8">
                <a href="#" className="bg-white/10 p-4 rounded-full hover:bg-brand-yellow hover:text-brand-darkTeal transition-all"><Zap /></a>
                <a href="#" className="bg-white/10 p-4 rounded-full hover:bg-brand-yellow hover:text-brand-darkTeal transition-all"><Rocket /></a>
            </div>
            <p className="opacity-50 text-sm max-w-md mx-auto font-medium">
                $PETS is a community meme coin for entertainment purposes only. No financial advice.
            </p>
        </div>
      </footer>

    </main>
  );
}
