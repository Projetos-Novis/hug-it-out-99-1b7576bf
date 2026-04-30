import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { calendarData } from "@/components/agenda/agendaData";

export default function Agenda() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm font-heading font-semibold mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Campori
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="font-heading text-secondary font-bold text-xs tracking-[0.2em] uppercase mb-2">
                Associação Paulista do Vale
              </p>
              <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl font-black leading-tight mb-2">
                Agenda Desbravadores
                <br />
                <span className="text-secondary">APV 2026</span>
              </h1>
              <p className="text-primary-foreground/70 text-sm sm:text-base max-w-2xl">
                Painel com calendário anual, critérios de pontuação, eventos, premiações e prazos oficiais dos Desbravadores APV 2026.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 sm:gap-4 shrink-0"
            >
              <img
                src="https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/c3282a3e-4626-4299-be47-5fdd33267ae5/1777507787884_440qbn_imagem_emblema_a1.svg"
                alt="Emblema A1"
                className="h-11 sm:h-14 w-auto opacity-70"
              />
              <div className="h-6 w-[1px] bg-primary-foreground/20" />
              <img
                src="https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/c3282a3e-4626-4299-be47-5fdd33267ae5/1777508266968_g7o8hl_circular.png"
                alt="Logo Circular"
                className="h-10 sm:h-12 w-auto opacity-70"
              />
              <div className="h-6 w-[1px] bg-primary-foreground/20" />
              <img
                src="https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/c3282a3e-4626-4299-be47-5fdd33267ae5/1777507740748_jehh4y_D3.png"
                alt="Logo Desbravadores"
                className="h-10 sm:h-12 w-auto opacity-70"
              />
            </motion.div>
          </div>
        </div>
      </header>

      {/* Calendário Anual */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <section id="calendario" className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-6 h-6 text-secondary shrink-0" />
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-primary">
              Calendário Anual 2026
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {calendarData.map((m) => (
              <div key={m.month} className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-heading font-bold text-primary text-base mb-3 border-b border-border pb-2">{m.month}</h3>
                <ul className="space-y-2">
                  {m.events.map((e, i) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <span className="font-heading font-bold text-secondary whitespace-nowrap min-w-[60px]">{e.date}</span>
                      <span className="text-foreground">{e.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <footer className="py-12 mt-10 border-t border-border text-center">
          <p className="font-heading text-base font-bold text-primary mb-1">Agenda Desbravadores APV 2026</p>
          <p className="text-muted-foreground text-sm">Associação Paulista do Vale</p>
        </footer>
      </main>
    </div>
  );
}
