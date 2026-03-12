import { useEffect, useState } from "react";
import { sections } from "./camporiData";
import { Menu, X } from "lucide-react";

export function SidebarNav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navContent = (
    <nav className="space-y-1">
      <p className="font-heading text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 px-3">
        Navegação
      </p>
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          onClick={() => setOpen(false)}
          className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-heading font-medium transition-colors ${
            active === s.id
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          <s.icon className="w-4 h-4 shrink-0" />
          <span className="truncate">{s.title}</span>
        </a>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 w-72 h-screen bg-card border-r border-border overflow-y-auto py-6 px-4 z-40">
        <a href="#hero" className="block mb-6 px-3">
          <p className="font-heading text-lg font-black text-primary leading-tight">III Campori</p>
          <p className="font-heading text-xs font-semibold text-secondary">de Líderes APV</p>
        </a>
        {navContent}
      </aside>

      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-primary text-primary-foreground p-2.5 rounded-lg shadow-lg"
        aria-label="Menu"
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile overlay */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-foreground/40" onClick={() => setOpen(false)} />
          <aside className="absolute left-0 top-0 w-72 h-screen bg-card overflow-y-auto py-6 px-4 shadow-xl">
            <a href="#hero" className="block mb-6 px-3" onClick={() => setOpen(false)}>
              <p className="font-heading text-lg font-black text-primary leading-tight">III Campori</p>
              <p className="font-heading text-xs font-semibold text-secondary">de Líderes APV</p>
            </a>
            {navContent}
          </aside>
        </div>
      )}
    </>
  );
}
