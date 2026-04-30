import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft, Calendar, Trophy, Star, BookOpen, Award,
  Clock, FileText, ChevronDown, ChevronUp, Folder, Target, Users
} from "lucide-react";
import { useState } from "react";
import {
  calendarData, pontuacaoData, eventosDetalhados,
  nistoCremosTopics, padraoPontuacao, oscarCategories, excelenciaAreas,
} from "@/components/agenda/agendaData";

const sectionIds = [
  { id: "calendario", label: "Calendário 2026", icon: Calendar },
  { id: "pontuacao", label: "Áreas de Pontuação", icon: Target },
  { id: "eventos-detalhados", label: "Eventos Detalhados", icon: FileText },
  { id: "projeto-especial", label: "Projeto Nisto Cremos", icon: BookOpen },
  { id: "padrao-anual", label: "Padrão Anual e Premiações", icon: Trophy },
  { id: "excelencia", label: "Excelência e Destaques", icon: Award },
  { id: "relatorios", label: "Datas dos Relatórios SGC", icon: Clock },
  { id: "anexos", label: "Anexos", icon: Folder },
];

function CollapsibleSection({ id, title, icon: Icon, children, defaultOpen = false }: {
  id: string; title: string; icon: React.ElementType; children: React.ReactNode; defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section id={id} className="scroll-mt-20">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 py-4 px-4 sm:px-6 bg-card border border-border rounded-xl font-heading font-bold text-base sm:text-lg text-primary hover:bg-muted/50 transition-colors"
      >
        <span className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-secondary shrink-0" />
          {title}
        </span>
        {open ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-3 px-2 sm:px-4"
        >
          {children}
        </motion.div>
      )}
    </section>
  );
}

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
                className="h-9 sm:h-11 w-auto opacity-70"
              />
              <div className="h-6 w-[1px] bg-primary-foreground/20" />
              <img 
                src="https://rmetppilvfrxosvxzhgj.supabase.co/storage/v1/object/public/message-attachments/c3282a3e-4626-4299-be47-5fdd33267ae5/1777507634362_ghng91_de07f-logoiasd-preto2.png" 
                alt="Logo IASD" 
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

      {/* Quick nav */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-8">
          {sectionIds.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-card border border-border text-sm font-heading font-semibold text-foreground hover:bg-muted hover:border-primary/30 transition-colors"
            >
              <s.icon className="w-4 h-4 text-secondary shrink-0" />
              <span className="truncate">{s.label}</span>
            </a>
          ))}
        </div>

        <div className="space-y-4">
          {/* 1. Calendário */}
          <CollapsibleSection id="calendario" title="Calendário Anual 2026" icon={Calendar} defaultOpen>
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
          </CollapsibleSection>

          {/* 2. Pontuação */}
          <CollapsibleSection id="pontuacao" title="Áreas de Pontuação" icon={Target}>
            <div className="space-y-4">
              {pontuacaoData.map((cat) => (
                <div key={cat.id} className="bg-card border border-border rounded-xl p-4 sm:p-5">
                  <h3 className="font-heading font-bold text-primary text-base mb-3">{cat.title}</h3>
                  <div className="space-y-2">
                    {cat.items.map((item, i) => (
                      <div key={i}>
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-sm text-foreground">{item.name}</span>
                          <span className="font-heading font-bold text-secondary text-sm whitespace-nowrap">{item.points} pts</span>
                        </div>
                        {item.detail && (
                          <ul className="mt-1 ml-4 space-y-0.5">
                            {item.detail.map((d, j) => (
                              <li key={j} className="text-xs text-muted-foreground list-disc">{d}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleSection>

          {/* 3. Eventos Detalhados */}
          <CollapsibleSection id="eventos-detalhados" title="Eventos Detalhados" icon={FileText}>
            <div className="space-y-4">
              {eventosDetalhados.map((ev) => (
                <div key={ev.id} className="bg-card border border-border rounded-xl p-4 sm:p-5">
                  <h3 className="font-heading font-bold text-primary text-base mb-3">{ev.title}</h3>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 mb-2">
                    {ev.details.map((d, i) => (
                      <div key={i} className="flex gap-2 text-sm">
                        <dt className="font-heading font-semibold text-muted-foreground whitespace-nowrap">{d.label}:</dt>
                        <dd className="text-foreground">{d.value}</dd>
                      </div>
                    ))}
                  </dl>
                  {ev.extra && (
                    <ul className="mt-2 ml-4 space-y-0.5">
                      {ev.extra.map((e, i) => (
                        <li key={i} className="text-xs text-muted-foreground list-disc">{e}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </CollapsibleSection>

          {/* 4. Projeto Especial */}
          <CollapsibleSection id="projeto-especial" title="Projeto Especial do Ano – Nisto Cremos" icon={BookOpen}>
            <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
              <p className="text-sm text-foreground mb-4">
                Estamos iniciando o Projeto Nisto Cremos. Nos próximos 4 anos, o desafio será realizar 7 especialidades por ano na área de Ensinos Bíblicos. Ao final dos 4 anos, teremos concluído as 28 doutrinas.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {nistoCremosTopics.map((t) => (
                  <div key={t} className="bg-muted rounded-lg px-3 py-2 text-xs font-heading font-semibold text-foreground text-center">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleSection>

          {/* 5. Padrão Anual */}
          <CollapsibleSection id="padrao-anual" title="Padrão Anual e Premiações" icon={Trophy}>
            <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
              <h3 className="font-heading font-bold text-primary text-base mb-4">Faixas de Classificação</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {padraoPontuacao.map((p) => (
                  <div key={p.faixa} className="flex items-center gap-3 bg-muted rounded-lg px-4 py-3">
                    <div className="flex gap-0.5">
                      {p.estrelas > 0
                        ? Array.from({ length: p.estrelas }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                          ))
                        : <span className="text-xs font-heading font-semibold text-muted-foreground">Participação</span>}
                    </div>
                    <span className="text-sm font-heading font-semibold text-foreground">{p.faixa}</span>
                  </div>
                ))}
              </div>

              <h4 className="font-heading font-bold text-primary text-sm mb-2">Troféu Integrado</h4>
              <p className="text-sm text-muted-foreground mb-1">O troféu trará os símbolos dos principais eventos do ano e o nome do clube.</p>
              <p className="text-sm text-muted-foreground">Inscrição: 22 a 24 de setembro · Valor: R$ 90,00</p>
            </div>
          </CollapsibleSection>

          {/* 6. Excelência */}
          <CollapsibleSection id="excelencia" title="Excelência e Destaques" icon={Award}>
            <div className="bg-card border border-border rounded-xl p-4 sm:p-5 space-y-5">
              <div>
                <h3 className="font-heading font-bold text-primary text-base mb-2">Certificado de Excelência</h3>
                <p className="text-sm text-muted-foreground mb-3">Clubes que cumprirem 100% dos requisitos de cada área receberão certificado:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {excelenciaAreas.map((a) => (
                    <div key={a} className="bg-muted rounded-lg px-3 py-2 text-xs font-heading font-semibold text-foreground text-center">{a}</div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-primary text-base mb-2">Destaques por Categoria – Oscar</h3>
                <ul className="space-y-1.5">
                  {oscarCategories.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-foreground">
                      <Trophy className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CollapsibleSection>

          {/* 7. Relatórios SGC */}
          <CollapsibleSection id="relatorios" title="Datas dos Relatórios SGC" icon={Clock}>
            <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4 sm:p-5">
              <h3 className="font-heading font-bold text-destructive text-base mb-3">⚠️ Prazos Importantes</h3>
              <div className="flex flex-col sm:flex-row gap-3 mb-3">
                <div className="bg-background rounded-lg px-5 py-3 text-center border border-destructive/20">
                  <p className="font-heading font-black text-2xl text-destructive">30/06</p>
                  <p className="text-xs text-muted-foreground">1º Relatório</p>
                </div>
                <div className="bg-background rounded-lg px-5 py-3 text-center border border-destructive/20">
                  <p className="font-heading font-black text-2xl text-destructive">16/11</p>
                  <p className="text-xs text-muted-foreground">2º Relatório</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Os relatórios devem ser preenchidos dentro do prazo. Se o clube necessitar de extensão de prazo, haverá redução percentual para os requisitos daquele relatório.
              </p>
            </div>
          </CollapsibleSection>

          {/* 8. Anexos */}
          <CollapsibleSection id="anexos" title="Anexos" icon={Folder}>
            <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
              <p className="text-sm text-muted-foreground">
                Área reservada para arquivos complementares, links, PDFs ou materiais de apoio relacionados à agenda oficial dos Desbravadores APV 2026.
              </p>
            </div>
          </CollapsibleSection>
        </div>

        {/* Footer */}
        <footer className="py-12 mt-10 border-t border-border text-center">
          <p className="font-heading text-base font-bold text-primary mb-1">Agenda Desbravadores APV 2026</p>
          <p className="text-muted-foreground text-sm">Associação Paulista do Vale</p>
        </footer>
      </div>
    </div>
  );
}
