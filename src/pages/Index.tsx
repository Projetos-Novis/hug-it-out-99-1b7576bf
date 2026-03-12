import { HeroSection } from "@/components/campori/HeroSection";
import { TableOfContents } from "@/components/campori/TableOfContents";
import { SidebarNav } from "@/components/campori/SidebarNav";
import { ContentSections } from "@/components/campori/ContentSections";
import { BackToTop } from "@/components/campori/UIComponents";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SidebarNav />

      <div className="lg:ml-72">
        <div id="hero">
          <HeroSection />
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-8">
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

      <BackToTop />
    </div>
  );
};

export default Index;
