
import { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-background">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/40 z-10" /> {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/videos/hero-descent.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-20 container mx-auto px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-primary font-mono text-sm md:text-base tracking-[0.5em] uppercase mb-6 drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
            Submerged Luxury Dining
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-display text-foreground mb-8 tracking-tight leading-tight">
            THE LEVIATHAN<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-background to-background/50">ENCLAVE</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground-300 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            A culinary sanctuary hidden 20,000 leagues beneath the ordinary. 
            Experience seafood where it lives, in a glass-walled cathedral of the deep.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
             <button onClick={() => document.getElementById('reservation')?.scrollIntoView({behavior: 'smooth'})} className="px-8 py-4 bg-primary text-foreground font-bold tracking-widest text-sm hover:bg-primary/90 transition-colors rounded-none uppercase">
               Book a Table
             </button>
             <button onClick={() => document.getElementById('menu')?.scrollIntoView({behavior: 'smooth'})} className="px-8 py-4 bg-transparent border border-border/20 text-foreground font-bold tracking-widest text-sm hover:bg-background/10 transition-colors rounded-none uppercase">
               View Menu
             </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-foreground/50"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
