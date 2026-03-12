import { HeroSection } from "@/components/campori/HeroSection";
import { IntroSection } from "@/components/campori/IntroSection";
import { TableOfContents } from "@/components/campori/TableOfContents";
import { SidebarNav } from "@/components/campori/SidebarNav";
import { ContentSections } from "@/components/campori/ContentSections";
import { BackToTop } from "@/components/campori/UIComponents";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div data-pdf-hide="sidebar">
        <SidebarNav />
      </div>

      <div id="pdf-wrapper" className="lg:ml-72">
        <div id="pdf-content">
          {/* Print-only header (hidden on screen) */}
          <div id="pdf-print-header" className="hidden" style={{ display: "none" }}>
            <div style={{ textAlign: "center", marginBottom: 30, paddingBottom: 20, borderBottom: "3px solid #1a5c3a" }}>
              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: 12, letterSpacing: 3, color: "#c78c3c", textTransform: "uppercase", marginBottom: 8 }}>
                Associação Paulista do Vale
              </p>
              <h1 style={{ fontFamily: "Montserrat, sans-serif", fontSize: 28, fontWeight: 900, color: "#1a5c3a", margin: "0 0 4px", lineHeight: 1.1 }}>
                III CAMPORI DE LÍDERES
              </h1>
              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: 16, fontWeight: 700, color: "#c78c3c", margin: "8px 0" }}>
                TEMA: ÍNTEGROS
              </p>
              <p style={{ fontSize: 13, color: "#666", margin: "4px 0" }}>
                09 a 12 de outubro de 2026 · Catre, Analândia-SP
              </p>
              <p style={{ fontSize: 11, color: "#888" }}>
                De Líder para Líderes · 1.000 participantes
              </p>
            </div>
          </div>

          <div id="hero">
            <HeroSection />
          </div>

          <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-8">
            <IntroSection />
            <TableOfContents />
            <ContentSections />

            {/* Footer */}
            <footer className="py-16 mt-12 border-t border-border text-center">
              <p className="font-heading text-lg font-bold text-primary mb-1">
                III Campori de Líderes – APV
              </p>
              <p className="text-muted-foreground text-sm">
                Associação Paulista do Vale · 09 a 12 de outubro de 2026 · Catre, Analândia-SP
              </p>
              <p className="text-muted-foreground text-xs mt-2 font-heading font-semibold tracking-wide uppercase">
                Tema: Íntegros
              </p>
            </footer>
          </div>
        </div>
      </div>

      <div data-pdf-hide="back-to-top">
        <BackToTop />
      </div>
    </div>
  );
};

export default Index;
