import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function IntroSection() {
  return (
    <section className="py-10 sm:py-16 px-3 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-card border border-border rounded-xl p-5 sm:p-8 md:p-10 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary/10 text-primary p-2.5 rounded-lg">
              <Heart className="w-6 h-6" />
            </div>
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-secondary">
              DE LÍDER PARA LÍDERES
            </h2>
          </div>
          <div className="prose-campori space-y-4 text-sm sm:text-base leading-relaxed text-foreground/85">
            <p>
              Olá, Coordenadores, Regionais e Diretores de Clube de Desbravadores, este é um ano muito esperado, pois nele, acontecerá o <strong className="text-primary">III Campori de Líderes de Desbravadores</strong> da Associação Paulista do Vale, no Catre, na cidade de Analândia - SP.
            </p>
            <p>
              Pela primeira vez, este Campori será por Regiões, nosso objetivo é envolver os membros aspirantes deste campo em companheirismo e ações práticas da formação de cada indivíduo. O tema para este grande encontro de celebração será <strong className="text-secondary font-heading">ÍNTEGROS</strong>. Pois, os líderes já investidos e aspirantes a líderes de Desbravadores, em cada momento, são desafiados por Deus a terem uma liderança ÍNTEGRA. E isso só é possível, através do estudo da <strong>PALAVRA</strong>, vivendo em <strong>RELACIONAMENTO</strong> uns com os outros e tendo uma vida de <strong>ORAÇÃO</strong>.
            </p>
            <p>
              Este ano, você e a sua Região tem o <strong className="text-primary">DESAFIO</strong> de testemunhar do amor de Jesus em sua cidade, igreja e Clube, no cumprimento dos pré-requisitos e, no final, juntos com todas as regiões da APV, celebraremos grandes conquistas no III Campori de Líderes. Um bom desafio para você!
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
