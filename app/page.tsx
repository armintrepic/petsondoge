"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Copy, Check, ArrowRight, ExternalLink, Globe, ShieldCheck, Users, Zap, Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

// --- Components ---

const Button = ({ children, variant = "primary", className, href, onClick, icon: Icon }: any) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 group relative overflow-hidden";
  const variants = {
    primary: "bg-white text-black hover:bg-gray-100",
    secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/10",
    glow: "bg-yellow-400 text-black shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:bg-yellow-300"
  };

  const Component = href ? 'a' : 'button';
  
  return (
    <Component 
      href={href} 
      onClick={onClick}
      className={clsx(baseStyles, variants[variant as keyof typeof variants], className)}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && <Icon size={16} className="transition-transform group-hover:translate-x-1" />}
      </span>
    </Component>
  );
};

const Card = ({ title, value, subtext, className, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={clsx("glass-card p-8 flex flex-col justify-between h-full min-h-[200px]", className)}
  >
    <div>
      <h3 className="text-gray-400 text-sm uppercase tracking-wider font-mono mb-2">{title}</h3>
      <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 tracking-tight">{value}</div>
    </div>
    <div className="text-sm text-gray-500 font-medium">{subtext}</div>
  </motion.div>
);

const Feature = ({ icon: Icon, title, desc, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
  >
    <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-400 mb-4">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-display font-bold mb-2">{title}</h3>
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
      
      {/* Abstract Background Orbs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-yellow-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav className={clsx("fixed w-full z-50 transition-all duration-300", scrolled ? "py-4 bg-[#0A0A0A]/80 backdrop-blur-lg border-b border-white/5" : "py-6 bg-transparent")}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20">
                <Image src="/logo.jpg" alt="Logo" fill className="object-cover" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">PetsOnDoge</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">Mission</a>
            <a href="#tokenomics" className="hover:text-white transition-colors">Protocol</a>
            <a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a>
            <Button href="https://anoncoin.it/pets" variant="glow" icon={ArrowRight}>Trade Now</Button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
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
             className="fixed inset-0 z-40 bg-black/95 pt-24 px-6 md:hidden"
           >
             <div className="flex flex-col gap-6 text-2xl font-display font-bold">
               <a href="#about" onClick={() => setMobileMenuOpen(false)}>Mission</a>
               <a href="#tokenomics" onClick={() => setMobileMenuOpen(false)}>Protocol</a>
               <a href="#roadmap" onClick={() => setMobileMenuOpen(false)}>Roadmap</a>
               <Button href="https://anoncoin.it/pets" variant="glow" className="justify-center mt-4">Trade Now</Button>
             </div>
           </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 z-10 min-h-[90vh] flex flex-col justify-center items-center text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-yellow-400 mb-8"
        >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            Live on Solana
        </motion.div>

        <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent max-w-4xl"
        >
            The Future of <br/> Charity Crypto
        </motion.h1>

        <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed"
        >
            PetsOnDoge leverages the efficiency of Solana to fund animal welfare worldwide. 
            Transparent. Community-driven. Impactful.
        </motion.p>

        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
        >
            <div onClick={copyToClipboard} className="cursor-pointer group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <code className="font-mono text-gray-300 text-sm">{CA.slice(0, 4)}...{CA.slice(-4)}</code>
                {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-gray-500 group-hover:text-white" />}
            </div>
            <div className="flex gap-3">
                <Button href="https://anoncoin.it/pets" variant="glow" icon={Zap}>Buy $PETS</Button>
                <Button href="https://dexscreener.com/solana/HF9GHYi2a5fh9gCQLgzRg4PLyBnJTBs9uMhUXJvSdoge" variant="secondary" icon={ExternalLink}>Chart</Button>
            </div>
        </motion.div>
      </section>

      {/* Stats Grid (Bento) */}
      <section id="tokenomics" className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
                {/* Market Cap */}
                <Card 
                    title="Market Cap" 
                    value="~$60k" 
                    subtext="Undervalued Gem" 
                    className="md:col-span-2 bg-gradient-to-br from-white/5 to-white/0"
                    delay={0.1}
                />
                
                {/* Supply */}
                <Card 
                    title="Total Supply" 
                    value="1B" 
                    subtext="Fixed Supply"
                    delay={0.2} 
                />

                {/* Tax */}
                <Card 
                    title="Tax Protocol" 
                    value="0%" 
                    subtext="Buy / Sell" 
                    className="bg-yellow-500/10 border-yellow-500/20"
                    delay={0.3}
                />

                {/* Holders */}
                <div className="md:col-span-2 glass-card p-8 flex items-center justify-between">
                    <div>
                        <h3 className="text-gray-400 text-sm uppercase tracking-wider font-mono mb-2">Community</h3>
                        <div className="text-3xl font-display font-bold text-white">Growing Fast</div>
                        <p className="text-gray-500 mt-2">Join the revolution</p>
                    </div>
                    <div className="flex -space-x-4">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-12 h-12 rounded-full border-2 border-[#121212] bg-white/10 flex items-center justify-center text-xs backdrop-blur-md">
                                <Users size={16} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Mission / About */}
      <section id="about" className="py-24 px-6 relative z-10 border-t border-white/5 bg-white/[0.02]">
        <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Built for Impact</h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                    We believe crypto can be a force for good. By harnessing the meme economy, 
                    we channel liquidity into real-world aid for animal shelters.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Feature 
                    icon={Globe} 
                    title="Global Reach" 
                    desc="Partnering with shelters across continents to provide food and medical supplies."
                    delay={0.1} 
                />
                <Feature 
                    icon={ShieldCheck} 
                    title="Transparency" 
                    desc="Blockchain verifiable donations. Every transaction is traceable on-chain." 
                    delay={0.2} 
                />
                <Feature 
                    icon={Users} 
                    title="DAO Governance" 
                    desc="Community votes on which shelters to support next. You decide the impact." 
                    delay={0.3} 
                />
            </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">Roadmap</h2>
            
            <div className="space-y-4">
                {[
                    { phase: "01", title: "Foundation", items: "Contract Deploy, Website Launch, Initial Liquidity" },
                    { phase: "02", title: "Growth", items: "Community Expansion, First Charity Drop, CMC Listing" },
                    { phase: "03", title: "Scale", items: "CEX Listings, Global Partnerships, DAO Implementation" }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group flex items-center justify-between p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.07] transition-all cursor-default"
                    >
                        <div className="flex items-center gap-6">
                            <span className="text-4xl font-display font-bold text-white/10 group-hover:text-yellow-400/20 transition-colors">{item.phase}</span>
                            <div>
                                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.items}</p>
                            </div>
                        </div>
                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-500 group-hover:bg-yellow-400 group-hover:text-black group-hover:border-yellow-400 transition-all">
                            <ChevronRight size={16} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black z-10 relative">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-gray-500">
                © 2024 PetsOnDoge Foundation.
            </div>
            <div className="flex gap-6">
                <a href="#" className="text-gray-500 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">Telegram</a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">Etherscan</a>
            </div>
        </div>
      </footer>

    </main>
  );
}
