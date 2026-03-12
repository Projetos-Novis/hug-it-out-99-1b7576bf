import { motion } from "framer-motion";
import { ChevronDown, Compass, Mountain, TreePine } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary topo-pattern overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Mountain className="absolute bottom-0 left-0 w-64 h-64 text-primary-foreground/5" />
        <TreePine className="absolute top-20 right-10 w-32 h-32 text-primary-foreground/5" />
        <TreePine className="absolute bottom-40 right-40 w-20 h-20 text-primary-foreground/5" />
        <Compass className="absolute top-1/4 left-10 w-24 h-24 text-primary-foreground/5 animate-spin" style={{ animationDuration: "60s" }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-heading text-secondary font-bold text-sm tracking-[0.3em] uppercase mb-4">
            Associação Paulista do Vale
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground mb-4 leading-tight">
            III CAMPORI
            <br />
            <span className="text-secondary">DE LÍDERES</span>
          </h1>
          <div className="inline-block bg-secondary/20 border border-secondary/40 rounded-lg px-6 py-3 mb-6">
            <p className="font-heading text-primary-foreground/90 text-xl md:text-2xl font-bold tracking-wide">
              TEMA: ÍNTEGROS
            </p>
          </div>
          <p className="text-primary-foreground/70 text-lg md:text-xl mb-2 font-body">
            09 a 12 de outubro de 2026 · Catre, Analândia-SP
          </p>
          <p className="text-primary-foreground/50 text-base mb-10 font-body">
            De Líder para Líderes · 1.000 participantes
          </p>
        </motion.div>

        <motion.a
          href="#indice"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-flex items-center gap-2 bg-secondary hover:bg-campori-earth-dark text-secondary-foreground font-heading font-bold text-lg px-8 py-4 rounded-lg transition-colors"
        >
          Ir para o Índice
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40L60 35C120 30 240 20 360 25C480 30 600 50 720 55C840 60 960 50 1080 40C1200 30 1320 20 1380 15L1440 10V80H0V40Z" fill="hsl(40 20% 97%)" />
        </svg>
      </div>
    </section>
  );
}
