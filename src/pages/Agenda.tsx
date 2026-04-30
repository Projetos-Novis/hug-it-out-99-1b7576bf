import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, ListChecks, Award, FileText } from "lucide-react";
import { calendarData } from "@/components/agenda/agendaData";
import { agendaSections, padraoData, premiacoesData } from "@/components/agenda/agendaContent";

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

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {/* Calendário Anual */}
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

        {/* Índice das seções de pontuação */}
        <section id="indice" className="scroll-mt-20 mt-14">
          <div className="flex items-center gap-3 mb-6">
            <ListChecks className="w-6 h-6 text-secondary shrink-0" />
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-primary">
              Desbravadores 2026 — Índice
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {agendaSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="group flex items-center gap-3 p-3 sm:p-4 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-all border border-border hover:border-primary"
              >
                <span className="font-heading text-sm font-bold text-secondary group-hover:text-secondary-foreground bg-secondary/10 group-hover:bg-secondary/30 w-9 h-9 rounded flex items-center justify-center shrink-0">
                  {s.number}
                </span>
                <span className="font-heading font-semibold text-base">{s.title}</span>
              </a>
            ))}
            <a
              href="#padrao-premiacoes"
              className="group flex items-center gap-3 p-3 sm:p-4 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-all border border-border hover:border-primary"
            >
              <span className="font-heading text-sm font-bold text-secondary group-hover:text-secondary-foreground bg-secondary/10 group-hover:bg-secondary/30 w-9 h-9 rounded flex items-center justify-center shrink-0">
                <Award className="w-4 h-4" />
              </span>
              <span className="font-heading font-semibold text-base">Padrão e Premiações</span>
            </a>
            <a
              href="#relatorios"
              className="group flex items-center gap-3 p-3 sm:p-4 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-all border border-border hover:border-primary"
            >
              <span className="font-heading text-sm font-bold text-secondary group-hover:text-secondary-foreground bg-secondary/10 group-hover:bg-secondary/30 w-9 h-9 rounded flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4" />
              </span>
              <span className="font-heading font-semibold text-base">Datas do Relatório SGC</span>
            </a>
          </div>
        </section>

        {/* Seções de pontuação */}
        {agendaSections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-20 mt-14">
            <div className="flex items-start gap-3 mb-4">
              <span className="font-heading font-black text-2xl text-secondary leading-none shrink-0 mt-1">
                {section.number}.
              </span>
              <div>
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-primary">
                  {section.title}
                </h2>
                {section.verse && (
                  <p className="text-muted-foreground italic text-sm mt-1">{section.verse}</p>
                )}
              </div>
            </div>

            <div className="space-y-3">
              {section.items.map((item, i) => (
                <article key={i} className="bg-card border border-border rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <h3 className="font-heading font-bold text-primary text-base sm:text-lg flex-1 leading-snug">
                      {item.code && (
                        <span className="inline-flex items-center justify-center font-heading font-black text-xs bg-secondary/15 text-secondary px-2 py-0.5 rounded mr-2 align-middle">
                          {item.code}
                        </span>
                      )}
                      {item.text}
                    </h3>
                    {item.points && (
                      <span className="font-heading font-bold text-xs sm:text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full whitespace-nowrap shadow-sm">
                        {item.points}
                      </span>
                    )}
                  </div>

                  {item.details && item.details.length > 0 && (
                    <ul className="mt-3 space-y-2 pl-4 border-l-2 border-secondary/40">
                      {item.details.map((d, j) => {
                        const trimmed = d.trim();
                        const isHeading = /^\(.*\)$/.test(trimmed) || /^(TEMA|FORMATO|CATEGORIAS?|INSCRIÇÃO|VALOR|DATA|Datas|Regras para participar|Participantes convocados|Como Tema|Com o Tema):/i.test(trimmed);
                        const pointsMatch = trimmed.match(/[—:-]\s*(\d{1,4}\s*pts?)\s*$/i);
                        const cleanText = (pointsMatch ? trimmed.slice(0, pointsMatch.index).replace(/[—:-]\s*$/, "").trim() : trimmed).replace(/^[-*>•]\s*/, "");

                        if (isHeading && !pointsMatch) {
                          return (
                            <li key={j} className="text-sm font-heading font-semibold text-primary list-none -ml-4 pt-1">
                              {trimmed}
                            </li>
                          );
                        }

                        return (
                          <li key={j} className="text-sm text-foreground leading-relaxed list-none flex gap-2">
                            <span className={`shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full ${pointsMatch ? "bg-secondary" : "bg-muted-foreground/40"}`} />
                            <span className="flex-1">
                              {cleanText}
                              {pointsMatch && (
                                <span className="ml-2 inline-block font-heading font-bold text-xs bg-secondary/15 text-secondary px-2 py-0.5 rounded-full whitespace-nowrap align-middle">
                                  {pointsMatch[1]}
                                </span>
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  )}

                  {item.notes && item.notes.length > 0 && (
                    <div className="mt-4 space-y-2 text-sm text-muted-foreground leading-relaxed bg-muted/30 rounded-lg p-3 border border-border/50">
                      {item.notes.map((n, j) => {
                        const t = n.trim();
                        const labelMatch = t.match(/^(Nota|Observação|OBS\.?|OBSERVAÇÃO|IMPORTANTE|Dica)[:.]\s*/i);
                        if (labelMatch) {
                          const rest = t.slice(labelMatch[0].length);
                          return (
                            <p key={j}>
                              <span className="font-heading font-bold text-primary">{labelMatch[1].replace(/\.$/, "")}:</span> {rest}
                            </p>
                          );
                        }
                        return <p key={j}>{t}</p>;
                      })}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}

        {/* Padrão e Premiações */}
        <section id="padrao-premiacoes" className="scroll-mt-20 mt-14">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-secondary shrink-0" />
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-primary">
              Padrão e Premiações do Ano
            </h2>
          </div>

          <div className="bg-card border border-border rounded-xl p-4 sm:p-5 mb-4">
            <h3 className="font-heading font-bold text-primary mb-3">PADRÃO</h3>
            <ul className="space-y-1.5">
              {padraoData.map((p, i) => (
                <li key={i} className="text-sm text-foreground">{p}</li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-4 sm:p-5 mb-4">
            <h3 className="font-heading font-bold text-primary mb-3">PREMIAÇÕES DO ANO</h3>
            <p className="text-sm text-foreground mb-3">{premiacoesData.intro}</p>
            <p className="font-heading font-semibold text-secondary text-sm mb-2">Padrão Anual</p>
            <ul className="space-y-1 mb-3">
              {premiacoesData.padraoAnual.map((p, i) => (
                <li key={i} className="text-sm text-foreground">{p}</li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground mb-2">{premiacoesData.importante}</p>
            <p className="font-heading font-semibold text-secondary text-sm">{premiacoesData.inscricao}</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-4 sm:p-5 mb-4">
            <h3 className="font-heading font-bold text-primary mb-3">Excelência por área de pontuação</h3>
            <p className="text-sm text-foreground">{premiacoesData.excelencia}</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-4 sm:p-5 mb-4">
            <h3 className="font-heading font-bold text-primary mb-3">Destaques por categoria (OSCAR)</h3>
            <p className="text-sm text-muted-foreground mb-2">Premiação para os clubes em destaque nas seguintes categorias:</p>
            <ul className="space-y-1.5 list-disc pl-5">
              {premiacoesData.oscar.map((o, i) => (
                <li key={i} className="text-sm text-foreground">{o}</li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
            <h3 className="font-heading font-bold text-primary mb-3">EVENTOS REGIONAIS</h3>
            <ul className="space-y-1">
              {premiacoesData.eventosRegionais.map((e, i) => (
                <li key={i} className="text-sm text-foreground">{e}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Relatórios */}
        <section id="relatorios" className="scroll-mt-20 mt-14">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-6 h-6 text-secondary shrink-0" />
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-primary">
              Datas do Relatório SGC
            </h2>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
            <ul className="space-y-1.5 mb-3">
              {premiacoesData.relatorios.map((r, i) => (
                <li key={i} className="text-sm text-foreground font-heading font-semibold">{r}</li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground">{premiacoesData.relatorioObs}</p>
          </div>
        </section>

        {/* Anexos */}
        <section id="anexos" className="scroll-mt-20 mt-14">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 text-center">
            <p className="font-heading font-bold text-primary text-lg">Anexos</p>
            <p className="font-heading text-secondary text-sm mt-1">AGENDA ANUAL DESBRAVADORES — ASSOCIAÇÃO PAULISTA DO VALE</p>
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
