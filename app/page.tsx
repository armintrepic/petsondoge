"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Copy, Check, ArrowRight, ExternalLink, Globe, ShieldCheck, Users, Zap, Menu, X, ChevronRight, BarChart3, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

// --- Components ---

const Button = ({ children, variant = "primary", className, href, onClick, icon: Icon }: any) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden";
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200 border border-transparent",
    secondary: "bg-white/5 text-white hover:bg-white/10 backdrop-blur-md border border-white/10",
    glow: "bg-[#FACC15] text-black shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:bg-[#EAB308] border border-transparent"
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
        {Icon && <Icon size={16} className="transition-transform group-hover:translate-x-1" />}
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
    className={clsx("glass-card p-6 md:p-8 flex flex-col justify-between h-full min-h-[180px]", className)}
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-gray-400 text-xs uppercase tracking-widest font-mono">{title}</h3>
      {Icon && <Icon size={18} className="text-gray-500" />}
    </div>
    <div>
      <div className="text-3xl md:text-5xl font-display font-bold text-white mb-2 tracking-tight">{value}</div>
      <div className="text-sm text-gray-500 font-medium">{subtext}</div>
    </div>
  </motion.div>
);

const Feature = ({ icon: Icon, title, desc, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors group"
  >
    <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center text-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-300">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-display font-bold mb-3 text-white">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
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
    <main className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden relative selection:bg-yellow-500/20">
      <div className="bg-noise" />
      
      {/* Background Gradients */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav className={clsx("fixed w-full z-50 transition-all duration-300 border-b", scrolled ? "py-4 bg-[#0A0A0A]/90 backdrop-blur-lg border-white/5" : "py-6 bg-transparent border-transparent")}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white/10 ring-1 ring-white/20">
                <Image src="/logo.jpg" alt="Logo" fill className="object-cover" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">PetsOnDoge</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#mission" className="hover:text-white transition-colors">Mission</a>
            <a href="#protocol" className="hover:text-white transition-colors">Protocol</a>
            <a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a>
            <Button href="https://anoncoin.it/pets" variant="glow" icon={ArrowRight} className="py-2 px-4 text-xs">Launch App</Button>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
           <motion.div 
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -20 }}
             className="fixed inset-0 z-40 bg-[#0A0A0A] pt-24 px-6 md:hidden flex flex-col h-screen"
           >
             <div className="flex flex-col gap-8 text-3xl font-display font-bold">
               <a href="#mission" onClick={() => setMobileMenuOpen(false)} className="border-b border-white/10 pb-4">Mission</a>
               <a href="#protocol" onClick={() => setMobileMenuOpen(false)} className="border-b border-white/10 pb-4">Protocol</a>
               <a href="#roadmap" onClick={() => setMobileMenuOpen(false)} className="border-b border-white/10 pb-4">Roadmap</a>
             </div>
             <div className="mt-auto mb-12 flex flex-col gap-4">
                <Button href="https://anoncoin.it/pets" variant="glow" className="w-full justify-center py-4 text-lg">Launch App</Button>
             </div>
           </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 z-10 min-h-[90vh] flex flex-col justify-center items-center text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-xs font-medium text-yellow-400 mb-8 uppercase tracking-widest"
        >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            Live on Solana Network
        </motion.div>

        <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-6 text-white max-w-5xl leading-[1.1]"
        >
            Decentralized <br className="hidden md:block" />
            <span className="text-gray-500">Philanthropy</span>
        </motion.h1>

        <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed"
        >
            PetsOnDoge leverages high-performance blockchain infrastructure to fund animal welfare initiatives globally. Transparent, efficient, and community-governed.
        </motion.p>

        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-center w-full justify-center"
        >
            <div onClick={copyToClipboard} className="w-full sm:w-auto cursor-pointer group flex items-center justify-between sm:justify-start gap-4 px-6 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-left">
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-0.5">Contract Address</div>
                    <code className="font-mono text-gray-300 text-sm">{CA.slice(0, 6)}...{CA.slice(-6)}</code>
                </div>
                {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} className="text-gray-500 group-hover:text-white" />}
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
                <Button href="https://anoncoin.it/pets" variant="glow" icon={Zap} className="flex-1 sm:flex-none justify-center">Buy $PETS</Button>
                <Button href="https://dexscreener.com/solana/HF9GHYi2a5fh9gCQLgzRg4PLyBnJTBs9uMhUXJvSdoge" variant="secondary" icon={BarChart3} className="flex-1 sm:flex-none justify-center">Chart</Button>
            </div>
        </motion.div>
      </section>

      {/* Protocol / Tokenomics */}
      <section id="protocol" className="py-24 px-6 relative z-10 border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <h2 className="text-3xl font-display font-bold mb-4">Protocol Statistics</h2>
                    <p className="text-gray-400 max-w-md">Real-time network metrics and supply distribution.</p>
                </div>
                <div className="text-sm text-gray-500 font-mono">
                    NETWORK: SOLANA (SOL)
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[180px]">
                <Card 
                    title="Market Capitalization" 
                    value="$60,000" 
                    subtext="Early Stage Valuation" 
                    className="md:col-span-2 bg-gradient-to-br from-white/5 to-transparent border-white/5"
                    delay={0.1}
                    icon={BarChart3}
                />
                
                <Card 
                    title="Circulating Supply" 
                    value="1.00B" 
                    subtext="Fixed Cap. No Minting."
                    delay={0.2}
                    icon={Lock} 
                />

                <Card 
                    title="Transaction Tax" 
                    value="0.0%" 
                    subtext="Frictionless Trading" 
                    className="bg-yellow-500/[0.03] border-yellow-500/10"
                    delay={0.3}
                />

                <div className="md:col-span-2 glass-card p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div>
                        <h3 className="text-gray-400 text-xs uppercase tracking-widest font-mono mb-2">Community Growth</h3>
                        <div className="text-2xl md:text-3xl font-display font-bold text-white">Expanding Ecosystem</div>
                        <p className="text-gray-500 mt-2 text-sm">Join a network of holders dedicated to impact.</p>
                    </div>
                    <Button href="https://anoncoin.it/pets" variant="secondary" icon={ArrowRight}>View Holders</Button>
                </div>
            </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="py-24 px-6 relative z-10 border-t border-white/5 bg-white/[0.02]">
        <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Built for Utility</h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                    We believe blockchain technology can revolutionize charitable giving by reducing overhead and increasing transparency.
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
                    title="Decentralized Governance" 
                    desc="Holders participate in key protocol decisions, including treasury allocation and partnership selection." 
                    delay={0.3} 
                />
            </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-24 px-6 relative z-10 border-t border-white/5">
        <div className="container mx-auto max-w-4xl">
            <div className="flex justify-between items-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold">Development Roadmap</h2>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400">2024 - 2025</span>
            </div>
            
            <div className="space-y-4">
                {[
                    { phase: "01", title: "Foundation", items: "Contract Deployment, Protocol Audit, Liquidity Provision" },
                    { phase: "02", title: "Expansion", items: "Strategic Partnerships, Community Governance Launch, Initial Charity Distributions" },
                    { phase: "03", title: "Ecosystem", items: "CEX Listings, Cross-chain Bridge, DAO Treasury Implementation" }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all cursor-default gap-4"
                    >
                        <div className="flex items-start md:items-center gap-6">
                            <span className="text-lg font-mono text-yellow-500/50 group-hover:text-yellow-400 transition-colors pt-1 md:pt-0">{item.phase}</span>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.items}</p>
                            </div>
                        </div>
                        <div className="hidden md:flex w-8 h-8 rounded-full border border-white/10 items-center justify-center text-gray-600 group-hover:border-yellow-400/50 group-hover:text-yellow-400 transition-all">
                            <ChevronRight size={14} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#050505] z-10 relative">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xs text-gray-600 font-mono uppercase tracking-wide">
                © 2024 PetsOnDoge Foundation.
            </div>
            <div className="flex gap-8">
                <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Twitter / X</a>
                <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Telegram</a>
                <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Solscan</a>
            </div>
        </div>
      </footer>

    </main>
  );
}
