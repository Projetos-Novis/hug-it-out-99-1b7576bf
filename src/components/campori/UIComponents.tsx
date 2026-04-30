import { AlertTriangle, ArrowUp, ChevronUp } from "lucide-react";

interface AlertBoxProps {
  children: React.ReactNode;
  type?: "warning" | "info" | "danger";
  title?: string;
}

export function AlertBox({ children, type = "warning", title }: AlertBoxProps) {
  const styles = {
    warning: "bg-campori-amber/10 border-campori-amber/40 text-campori-earth-dark",
    info: "bg-campori-sky/10 border-campori-sky/40 text-foreground",
    danger: "bg-campori-red/10 border-campori-red/40 text-campori-red",
  };

  return (
    <div className={`border-l-4 rounded-r-lg p-4 my-4 ${styles[type]}`}>
      {title && (
        <div className="flex items-center gap-2 font-heading font-bold text-sm mb-1">
          <AlertTriangle className="w-4 h-4" />
          {title}
        </div>
      )}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export function BackToIndex() {
  return (
    <a
      href="#indice"
      data-pdf-hide="back-link"
      className="inline-flex items-center gap-1 text-sm text-secondary hover:text-campori-earth-dark transition-colors mt-6 font-heading font-medium"
    >
      <ChevronUp className="w-4 h-4" />
      Voltar ao Índice
    </a>
  );
}

export function BackToTop() {
  return (
    <a
      href="#hero"
      className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-campori-forest-light text-primary-foreground p-3 rounded-full shadow-lg transition-colors"
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="w-5 h-5" />
    </a>
  );
}

interface SectionCardProps {
  id: string;
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

export function SectionCard({ id, title, icon: Icon, children }: SectionCardProps) {
  return (
    <section id={id} className="scroll-mt-20 py-6 sm:py-12">
      <div className="bg-card border border-border rounded-xl p-4 sm:p-6 md:p-8 shadow-sm">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="bg-primary/10 text-primary p-2 sm:p-2.5 rounded-lg">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-primary">
            {title}
          </h2>
        </div>
        <div className="prose-campori">{children}</div>
        <BackToIndex />
      </div>
    </section>
  );
}

export function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-4 -mx-4 sm:mx-0">
      <table className="w-full text-xs sm:text-sm border-collapse min-w-[400px]">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="bg-primary text-primary-foreground font-heading font-semibold px-2 sm:px-4 py-2 sm:py-3 text-left first:rounded-tl-lg last:rounded-tr-lg">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? "bg-card" : "bg-muted/50"}>
              {row.map((cell, ci) => (
                <td key={ci} className="px-2 sm:px-4 py-2 sm:py-3 border-b border-border font-serif text-center">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
