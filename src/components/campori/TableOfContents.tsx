import { motion } from "framer-motion";
import { BookOpen, ChevronRight } from "lucide-react";
import { sections } from "./camporiData";

export function TableOfContents() {
  return (
    <section id="indice" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <BookOpen className="w-10 h-10 text-secondary mx-auto mb-4" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-3">
            Índice de Orientações
          </h2>
          <p className="text-muted-foreground text-lg">
            Clique em um tópico para navegar diretamente à seção.
          </p>
        </motion.div>

        {/* Índice visual (site) */}
        <motion.div
          data-pdf-screen-index
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid gap-3"
        >
          {sections.map((section, i) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="group flex items-center gap-4 p-4 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-all border border-border hover:border-primary"
            >
              <span className="font-heading text-sm font-bold text-secondary group-hover:text-secondary-foreground bg-secondary/10 group-hover:bg-secondary/30 w-8 h-8 rounded flex items-center justify-center shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <section.icon className="w-5 h-5 shrink-0 text-muted-foreground group-hover:text-primary-foreground/70" />
                <span className="font-heading font-semibold text-base truncate">
                  {section.title}
                </span>
              </div>
              <ChevronRight className="w-4 h-4 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </motion.div>

        {/* Índice simples (somente PDF/print) */}
        <div data-pdf-print-index className="hidden">
          <h3 className="font-heading text-xl font-bold text-primary mb-3">Índice</h3>
          <ol className="list-decimal pl-6 space-y-1">
            {sections.map((section, i) => (
              <li key={section.id} className="font-heading text-foreground">
                {String(i + 1).padStart(2, "0")} — {section.title}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
