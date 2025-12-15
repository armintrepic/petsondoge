"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Copy, Check, ArrowRight, ExternalLink, Globe, ShieldCheck, Users, Zap, Menu, X, ChevronRight, BarChart3, Lock, Heart, Dog } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

// --- Components ---

const Button = ({ children, variant = "primary", className, href, onClick, icon: Icon }: any) => {
  const baseStyles = "px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden uppercase tracking-wider";
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200 border-2 border-white",
    secondary: "bg-white/5 text-white hover:bg-white/10 backdrop-blur-md border-2 border-white/20",
    glow: "bg-[#FACC15] text-black shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_40px_rgba(250,204,21,0.5)] hover:bg-[#EAB308] border-2 border-[#FACC15]"
  };

  const Component = href ? 'a' : 'button';
  
  return (
    <Component 
      href={href} 
      onClick={onClick}
      target={href?.startsWith('http') ? "_blank" : undefined}
      className={clsx(baseStyles, variants[variant as keyof typeof variants], className)}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && <Icon size={18} className="transition-transform group-hover:translate-x-1" />}
      </span>
    </Component>
  );
};

const Card = ({ title, value, subtext, className, delay = 0, icon: Icon }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={clsx("glass-card p-6 md:p-8 flex flex-col justify-between h-full min-h-[200px] border-l-4 border-l-yellow-500", className)}
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-yellow-500/80 text-xs uppercase tracking-widest font-mono font-bold">{title}</h3>
      {Icon && <Icon size={20} className="text-yellow-500/50" />}
    </div>
    <div>
      <div className="text-4xl md:text-5xl font-display font-black text-white mb-2 tracking-tight">{value}</div>
      <div className="text-sm text-gray-400 font-medium">{subtext}</div>
    </div>
  </motion.div>
);

const Feature = ({ icon: Icon, title, desc, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="p-8 rounded-2xl bg-[#121212] border border-white/5 hover:border-yellow-500/50 hover:bg-[#1A1A1A] transition-all duration-300 group shadow-lg"
  >
    <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-400 mb-6 group-hover:scale-110 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300">
      <Icon size={28} strokeWidth={2.5} />
    </div>
    <h3 className="text-xl font-display font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm font-medium">{desc}</p>
  </motion.div>
);

// --- Main Page ---

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const CA = "HF9GHYi2a5fh9gCQLgzRg4PLyBnJTBs9uMhUXJvSdoge";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden relative selection:bg-yellow-500/30 selection:text-white">
      <div className="bg-noise" />
      
      {/* Background Glows (Subtle Brand Colors) */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-yellow-500/10 to-transparent opacity-40 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#166366]/20 to-transparent opacity-30 blur-[80px]" />
      </div>

      {/* Navbar */}
      <nav className={clsx("fixed w-full z-50 transition-all duration-300 border-b", scrolled ? "py-4 bg-[#050505]/90 backdrop-blur-xl border-white/10 shadow-2xl" : "py-6 bg-transparent border-transparent")}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-500 shadow-[0_0_15px_rgba(250,204,21,0.3)] transition-transform group-hover:scale-110 duration-300">
                <Image src="/logo.jpg" alt="Logo" fill className="object-cover" />
            </div>
            <span className="font-display font-black text-xl tracking-tight text-white group-hover:text-yellow-400 transition-colors">PetsOnDoge</span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-bold tracking-wide uppercase text-gray-400">
            <a href="#mission" className="hover:text-yellow-400 transition-colors">Mission</a>
            <a href="#protocol" className="hover:text-yellow-400 transition-colors">Protocol</a>
            <a href="#roadmap" className="hover:text-yellow-400 transition-colors">Roadmap</a>
            <Button href="https://anoncoin.it/pets" variant="glow" icon={ArrowRight} className="py-2 px-5 text-xs">Launch App</Button>
          </div>

          <button className="md:hidden text-white p-2 hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
           <motion.div 
             initial={{ opacity: 0, x: '100%' }}
             animate={{ opacity: 1, x: 0 }}
             exit={{ opacity: 0, x: '100%' }}
             transition={{ type: "spring", damping: 25, stiffness: 200 }}
             className="fixed inset-0 z-40 bg-[#050505] pt-24 px-8 md:hidden flex flex-col h-screen border-l border-white/10"
           >
             <div className="flex flex-col gap-8 text-4xl font-display font-black uppercase tracking-tight">
               <a href="#mission" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-yellow-400 transition-colors">Mission</a>
               <a href="#protocol" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-yellow-400 transition-colors">Protocol</a>
               <a href="#roadmap" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-yellow-400 transition-colors">Roadmap</a>
             </div>
             <div className="mt-auto mb-12 flex flex-col gap-4">
                <Button href="https://anoncoin.it/pets" variant="glow" className="w-full justify-center py-5 text-lg">Launch App</Button>
                <Button href="https://dexscreener.com/solana/HF9GHYi2a5fh9gCQLgzRg4PLyBnJTBs9uMhUXJvSdoge" variant="secondary" className="w-full justify-center py-5 text-lg">View Chart</Button>
             </div>
           </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-44 pb-24 px-6 z-10 min-h-[85vh] flex flex-col justify-center items-center text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-xs font-bold text-yellow-400 mb-8 uppercase tracking-widest hover:bg-yellow-500/20 transition-colors cursor-default"
        >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-500"></span>
            </span>
            Active on Solana Network
        </motion.div>

        <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter mb-8 text-white max-w-6xl leading-[0.95] uppercase"
        >
            Decentralized <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-300 to-yellow-600 drop-shadow-sm">Philanthropy</span>
        </motion.h1>

        <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-14 leading-relaxed font-medium"
        >
            Leveraging blockchain infrastructure to fund animal welfare globally. 
            <span className="text-white font-bold block mt-2">Zero Friction. 100% Impact.</span>
        </motion.p>

        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 items-center w-full justify-center max-w-lg mx-auto"
        >
            <div onClick={copyToClipboard} className="w-full cursor-pointer group flex items-center justify-between px-6 py-4 rounded-xl bg-[#1A1A1A] border border-white/10 hover:border-yellow-500/50 hover:bg-[#222] transition-all shadow-lg">
                <div className="text-left flex flex-col">
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-1 group-hover:text-yellow-500 transition-colors">Contract Address</span>
                    <code className="font-mono text-white font-bold text-sm tracking-wide">{CA.slice(0, 4)}...{CA.slice(-4)}</code>
                </div>
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-yellow-500 group-hover:text-black transition-all">
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                </div>
            </div>
            
            <Button href="https://anoncoin.it/pets" variant="glow" icon={Zap} className="w-full h-[74px] text-lg shadow-yellow-500/20">Buy $PETS</Button>
        </motion.div>
      </section>

      {/* Protocol / Tokenomics */}
      <section id="protocol" className="py-24 px-6 relative z-10 bg-[#0A0A0A] border-y border-white/5">
        <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <h2 className="text-4xl font-display font-black mb-4 uppercase tracking-tight">Protocol Statistics</h2>
                    <p className="text-gray-400 text-lg max-w-md">Real-time network metrics and verified supply distribution.</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-mono font-bold text-gray-300">SYSTEM OPERATIONAL</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card 
                    title="Market Capitalization" 
                    value="$60,000" 
                    subtext="Undervalued Opportunity" 
                    className="md:col-span-2 bg-gradient-to-br from-[#1A1A1A] to-transparent border-white/5"
                    delay={0.1}
                    icon={BarChart3}
                />
                
                <Card 
                    title="Circulating Supply" 
                    value="1.00B" 
                    subtext="Fixed Cap. No Mint Function."
                    delay={0.2}
                    icon={Lock} 
                    className="bg-[#1A1A1A]"
                />

                <Card 
                    title="Transaction Tax" 
                    value="0.0%" 
                    subtext="Zero Fee Protocol" 
                    className="bg-yellow-500/[0.05] border-yellow-500/20"
                    delay={0.3}
                />

                <div className="md:col-span-2 p-8 rounded-3xl bg-[#1A1A1A] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-8 group hover:border-white/20 transition-all">
                    <div>
                        <h3 className="text-yellow-500/80 text-xs uppercase tracking-widest font-mono font-bold mb-3">Community Growth</h3>
                        <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Expanding Ecosystem</div>
                        <p className="text-gray-400 font-medium">Join a network of holders dedicated to real-world impact.</p>
                    </div>
                    <Button href="https://anoncoin.it/pets" variant="secondary" icon={ArrowRight} className="whitespace-nowrap">View Holder Distribution</Button>
                </div>
            </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="py-32 px-6 relative z-10 bg-[#050505]">
        <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-display font-black mb-8 uppercase tracking-tight">Built for <span className="text-yellow-500">Utility</span></h2>
                <p className="text-gray-400 text-xl leading-relaxed max-w-3xl mx-auto font-medium">
                    We are replacing inefficient legacy charity models with blockchain speed and transparency.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Feature 
                    icon={Globe} 
                    title="Global Infrastructure" 
                    desc="Connecting donors directly with vetted animal shelters across multiple continents without intermediaries."
                    delay={0.1} 
                />
                <Feature 
                    icon={ShieldCheck} 
                    title="On-Chain Verification" 
                    desc="Every donation and fund allocation is recorded on the Solana blockchain for immutable proof of impact." 
                    delay={0.2} 
                />
                <Feature 
                    icon={Users} 
                    title="DAO Governance" 
                    desc="Holders participate in key protocol decisions, including treasury allocation and partnership selection." 
                    delay={0.3} 
                />
            </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-24 px-6 relative z-10 bg-[#0A0A0A] border-t border-white/5">
        <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-4">
                <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight">Development Roadmap</h2>
                <span className="px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-xs font-bold text-yellow-500 uppercase tracking-widest">Execution Phase 1</span>
            </div>
            
            <div className="space-y-4">
                {[
                    { phase: "01", title: "Foundation", items: "Contract Deployment • Protocol Audit • Liquidity Provision", active: true },
                    { phase: "02", title: "Expansion", items: "Strategic Partnerships • Community Governance • First Charity Drop", active: false },
                    { phase: "03", title: "Ecosystem", items: "CEX Listings • Cross-chain Bridge • DAO Treasury Implementation", active: false }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={clsx(
                            "group flex flex-col md:flex-row md:items-center justify-between p-8 rounded-2xl border transition-all cursor-default gap-6",
                            item.active ? "bg-white/[0.03] border-yellow-500/30 shadow-[0_0_30px_rgba(250,204,21,0.05)]" : "bg-transparent border-white/5 opacity-60 hover:opacity-100 hover:bg-white/[0.02]"
                        )}
                    >
                        <div className="flex items-start gap-8">
                            <span className={clsx("text-xl font-mono font-bold pt-1 md:pt-0", item.active ? "text-yellow-500" : "text-gray-600")}>{item.phase}</span>
                            <div>
                                <h3 className={clsx("text-2xl font-bold mb-3 uppercase tracking-wide", item.active ? "text-white" : "text-gray-300")}>{item.title}</h3>
                                <p className="text-gray-400 text-sm font-medium tracking-wide">{item.items}</p>
                            </div>
                        </div>
                        <div className={clsx("hidden md:flex w-10 h-10 rounded-full border items-center justify-center transition-all", item.active ? "border-yellow-500 text-yellow-500 bg-yellow-500/10" : "border-white/10 text-gray-600")}>
                            {item.active ? <Zap size={18} fill="currentColor" /> : <ChevronRight size={18} />}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/10 bg-black z-10 relative">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col gap-2">
                <span className="font-display font-bold text-xl text-white">PetsOnDoge</span>
                <div className="text-xs text-gray-600 font-mono uppercase tracking-wide">
                    © 2024 Foundation. All Rights Reserved.
                </div>
            </div>
            <div className="flex gap-10">
                <a href="#" className="text-sm font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-wider">Twitter</a>
                <a href="#" className="text-sm font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-wider">Telegram</a>
                <a href="#" className="text-sm font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-wider">Solscan</a>
            </div>
        </div>
      </footer>

    </main>
  );
}
