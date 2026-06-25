import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function IntroSection() {
  return (
    <section id="lider-para-lideres" className="py-10 sm:py-16 px-3 sm:px-6 scroll-mt-20">
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
              MENSAGEM DO LÍDER
            </h2>
          </div>
          <div className="prose-campori space-y-4 text-sm sm:text-base leading-relaxed text-foreground/85">
            <p>
              Olá líderes e aspirantes à liderança de Desbravadores e Aventureiros da Associação Paulista do Vale, chegou o momento de atender a um chamado que vai além de um evento — é um convite para uma experiência que pode transformar sua caminhada com Deus e o seu ministério. Este é um ano aguardado com grande expectativa, pois viveremos juntos o <strong className="text-primary">III Campori de Líderes de Desbravadores e Aventureiros da APV</strong>, que acontecerá no <strong>CATRE</strong>, em Analândia/SP. Um encontro preparado para marcar vidas, fortalecer propósitos e reafirmar o compromisso de cada líder com a missão.
            </p>
            <p>
              Pela primeira vez, o Campori será realizado por regiões, criando uma oportunidade única de fortalecer vínculos, desenvolver a liderança local e promover ações práticas que contribuam diretamente para a formação de cada participante. O tema que guiará essa jornada é claro e desafiador: <strong className="text-secondary font-heading">ÍNTEGROS</strong>. Deus nos chama para uma liderança que vai além de cargos ou funções — Ele nos chama para uma vida de integridade. Ser íntegro é alinhar caráter e prática, é viver fiel à Palavra mesmo diante dos desafios, é representar Cristo com coerência em cada decisão.
            </p>
            <p>
              Como líderes e aspirantes, somos convidados a dar o nosso melhor, não por reconhecimento humano, mas porque entendemos o valor do ministério que recebemos. Essa integridade se constrói diariamente, sustentada por três fundamentos indispensáveis:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-primary">Palavra:</strong> quando permitimos que a Bíblia molde nossas escolhas e direcione nossa vida;</li>
              <li><strong className="text-primary">Relacionamento:</strong> quando cultivamos comunhão genuína com Deus e com as pessoas;</li>
              <li><strong className="text-primary">Oração:</strong> quando reconhecemos nossa total dependência do Senhor em cada passo.</li>
            </ul>
            <p>
              Todos os dias somos desafiados a testemunhar do amor de Jesus de forma intencional em casa, no trabalho, na igreja e até mesmo no clube, por isso cada requisito cumprido, cada ação realizada e cada esforço dedicado fazem parte de algo maior — a formação de líderes comprometidos com a missão e preparados para servir com excelência.
            </p>
            <p>
              O desafio está diante de você. <strong className="text-primary">Viva com propósito. Lidere com integridade.</strong> E responda a esse chamado dando o seu melhor para Deus e para o ministério.
            </p>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
