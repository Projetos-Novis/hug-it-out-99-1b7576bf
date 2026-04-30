import { motion } from "framer-motion";
import { ChevronDown, Compass, Monitor, Mountain, Smartphone, TreePine, CalendarDays } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { generatePDF, type PdfMode } from "./pdfGenerator";

export function HeroSection() {
  const [generating, setGenerating] = useState<PdfMode | null>(null);

  const handleDownload = async (mode: PdfMode) => {
    setGenerating(mode);
    try {
      await generatePDF(mode);
    } finally {
      setGenerating(null);
    }
  };

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
          <div className="flex items-center justify-center gap-6 mb-8 sm:mb-10">
            <img 
              src="https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/c3282a3e-4626-4299-be47-5fdd33267ae5/1777507740748_jehh4y_D3.png" 
              alt="Logo Desbravadores" 
              className="h-10 sm:h-14 w-auto brightness-0 invert opacity-40 hover:opacity-70 transition-opacity"
            />
            <div className="h-8 w-[1px] bg-primary-foreground/20" />
            <img 
              src="https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/c3282a3e-4626-4299-be47-5fdd33267ae5/1777507634362_ghng91_de07f-logoiasd-preto2.png" 
              alt="Logo IASD" 
              className="h-10 sm:h-14 w-auto invert opacity-40 hover:opacity-70 transition-opacity"
            />
          </div>
          <p className="font-heading text-secondary font-bold text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">
            Associação Paulista do Vale
          </p>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground mb-3 sm:mb-4 leading-tight">
            III CAMPORI
            <br />
            <span className="text-secondary">DE LÍDERES</span>
          </h1>
          <div className="inline-block bg-secondary/20 border border-secondary/40 rounded-lg px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
            <p className="font-heading text-primary-foreground/90 text-base sm:text-xl md:text-2xl font-bold tracking-wide">
              TEMA: ÍNTEGROS
            </p>
          </div>
          <p className="text-primary-foreground/70 text-sm sm:text-lg md:text-xl mb-1 sm:mb-2 font-body">
            09 a 12 de outubro de 2026 · Catre, Analândia-SP
          </p>
          <p className="text-primary-foreground/50 text-xs sm:text-base mb-8 sm:mb-10 font-body">
            De Líder para Líderes · 1.000 participantes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#indice"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-campori-earth-dark text-secondary-foreground font-heading font-bold text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors"
          >
            Ir para o Índice
            <ChevronDown className="w-5 h-5" />
          </a>

          <button
            onClick={() => handleDownload("desktop")}
            disabled={!!generating}
            className="inline-flex items-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 border border-primary-foreground/30 text-primary-foreground font-heading font-bold text-sm sm:text-base px-5 sm:px-6 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-wait"
          >
            <Monitor className="w-4 h-4 sm:w-5 sm:h-5" />
            {generating === "desktop" ? "Gerando..." : "PDF Desktop"}
          </button>

          <button
            onClick={() => handleDownload("mobile")}
            disabled={!!generating}
            className="inline-flex items-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 border border-primary-foreground/30 text-primary-foreground font-heading font-bold text-sm sm:text-base px-5 sm:px-6 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-wait"
          >
            <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
            {generating === "mobile" ? "Gerando..." : "PDF Mobile"}
          </button>

          <Link
            to="/agenda"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-campori-earth-dark text-secondary-foreground font-heading font-bold text-sm sm:text-base px-5 sm:px-6 py-3 rounded-lg transition-colors"
          >
            <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5" />
            Agenda Desbravadores APV 2026
          </Link>
        </motion.div>
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
