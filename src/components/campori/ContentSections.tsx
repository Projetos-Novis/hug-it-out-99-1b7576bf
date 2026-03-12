import { SectionCard, AlertBox, DataTable } from "./UIComponents";
import { sections } from "./camporiData";

export function ContentSections() {
  return (
    <div className="space-y-4">
      {/* FILOSOFIA & OBJETIVO */}
      <SectionCard id="filosofia" title="Filosofia & Objetivo" icon={sections[0].icon}>
        <p className="text-lg text-muted-foreground mb-6 italic">
          "De Líder para Líderes" — Um Campori por Regiões, promovendo companheirismo e formação prática.
        </p>
        <h3 className="font-heading font-bold text-lg text-primary mb-3">Filosofia do III Campori de Líderes / APV</h3>
        <ol className="list-decimal pl-5 space-y-2 text-foreground/90 mb-6">
          <li>O Aspirante e o Líder de Desbravador são o centro. Eles são o foco de todo o III Campori de Líderes APV.</li>
          <li>O sermão é mais importante do que o programa.</li>
          <li>As reuniões, eventos e programas devem ser vistas por todos os participantes.</li>
          <li>Decisões para Jesus são mais importantes que um troféu.</li>
          <li>As atividades devem marcar a vida dos participantes.</li>
          <li>Eventos criativos e relevantes.</li>
          <li>Menos competição, mais cooperação.</li>
          <li>A alimentação de todos é nossa base: ovolactariana, saborosa e natural.</li>
          <li>Padrão cristão para o "Grito de Guerra". Sem semelhanças com estilos musicais seculares.</li>
        </ol>
        <h3 className="font-heading font-bold text-lg text-primary mb-3">Objetivo</h3>
        <p className="text-foreground/90">
          O III Campori de Líderes tem como propósito promover experiências inesquecíveis de crescimento espiritual e desenvolvimento pessoal, fortalecendo laços de amizade e preparando os participantes para um testemunho cristão autêntico.
        </p>
      </SectionCard>

      {/* INFO GERAIS */}
      <SectionCard id="info-gerais" title="Informações Gerais" icon={sections[1].icon}>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          {[
            ["Tema", "ÍNTEGROS"],
            ["Data", "09 a 12 de outubro de 2026"],
            ["Local", "Catre, Analândia-SP"],
            ["Participantes", "1.000 pessoas"],
            ["Início", "09/10/2026 – 6:00h"],
            ["Término", "12/10/2026 – 17:00h"],
          ].map(([label, value]) => (
            <div key={label} className="bg-muted rounded-lg p-4">
              <p className="font-heading font-bold text-xs text-muted-foreground uppercase tracking-wide">{label}</p>
              <p className="font-heading font-semibold text-foreground text-lg">{value}</p>
            </div>
          ))}
        </div>
        <p className="text-foreground/90 mb-3">
          <strong>Participantes elegíveis:</strong> Aspirantes cursando o 3º Módulo do Curso de Líder e liderança matriculada e ativa em um dos clubes de Desbravadores da APV que tenham, a partir de 16 anos, com data de corte de 30/06/2026. Incluindo Líderes investidos (L, LM, LMA), Aspirantes, Coordenadores, Regionais, Equipe de Apoio e Convidados.
        </p>
        <AlertBox type="info" title="Chegada antecipada">
          Os participantes poderão chegar a partir do dia 09/10/2026 às 06:00h, para montagens de acampamento e construção de portais.
        </AlertBox>
      </SectionCard>

      {/* ÔNIBUS */}
      <SectionCard id="onibus" title="Contratação de Ônibus" icon={sections[2].icon}>
        <p className="mb-4 text-foreground/90">Ao organizar a viagem de sua Região, observe:</p>
        <ul className="list-disc pl-5 space-y-2 text-foreground/90">
          <li>Verifique a condição do ônibus para a viagem;</li>
          <li>Confirme se a empresa tem estrutura de apoio dentro da rota;</li>
          <li>Confira a documentação de viagem intermunicipal;</li>
          <li>Atente à documentação legal para viagem de menores de idade;</li>
          <li>Não haverá estacionamento para ônibus na área do Campori;</li>
          <li>Hospedagem e alimentação dos motoristas <strong>não é responsabilidade do evento</strong> — inclua no contrato;</li>
          <li>Defina o responsável pelo seguro e gastos da viagem;</li>
          <li>Os motoristas serão identificados e poderão usar banheiros, mas não poderão usar bebidas alcoólicas nem fumar na área do acampamento.</li>
        </ul>
        <AlertBox type="warning" title="Atenção">
          O evento não se responsabiliza por danos aos veículos estacionados na área.
        </AlertBox>
      </SectionCard>

      {/* CÓDIGO DISCIPLINAR */}
      <SectionCard id="codigo-disciplinar" title="Código Disciplinar" icon={sections[3].icon}>
        <p className="mb-4 text-foreground/90">
          Haverá uma Comissão de Disciplina atuando durante o Campori. Cada infração significará, inicialmente, na perda de <strong>cinco pontos</strong>.
        </p>
        <h3 className="font-heading font-bold text-lg text-primary mb-3">O que pode ser considerado indisciplina:</h3>
        <ul className="list-disc pl-5 space-y-2 text-foreground/90">
          <li>Namoro e contatos físicos;</li>
          <li>Movimentação após toque de silêncio;</li>
          <li>Ficar na área do acampamento nos horários de programas;</li>
          <li>Visitantes no acampamento fora do horário;</li>
          <li>Fazer buracos não autorizados;</li>
          <li>Agressão física e/ou verbal;</li>
          <li>Uso de aparelhos de som sem autorização;</li>
          <li>Roupas inadequadas para o evento;</li>
          <li>Uso de joias, bijuterias, piercings, minissaias, shorts ou calças justas;</li>
          <li>Andar sem camisa ou ir/vir do banho sem camisa / enrolado na toalha;</li>
          <li>Ausentar-se sem autorização do Regional e Oficial de Dia;</li>
          <li>Qualquer ato de vandalismo;</li>
          <li>Veículos não autorizados na área do Campori.</li>
        </ul>
        <AlertBox type="danger" title="Importante">
          A Região responsável por veículo infrator será penalizada com perda de pontos. O Campori não se responsabiliza por danos em veículos.
        </AlertBox>
      </SectionCard>

      {/* PARTICIPAÇÃO DA REGIÃO */}
      <SectionCard id="participacao-regiao" title="Como a Região Participa" icon={sections[4].icon}>
        <AlertBox type="warning" title="Mínimo obrigatório">
          A Região deve inscrever no mínimo <strong>20 pessoas pagantes</strong> (não inclui apoio) para participar com seu nome representado.
        </AlertBox>
        <p className="mb-3 text-foreground/90">Cada Região deve ter pelo menos: um(a) Secretário(a) e Tesoureiro(a).</p>
        <h3 className="font-heading font-bold text-base text-primary mb-2">Requisitos para os cargos:</h3>
        <ul className="list-disc pl-5 space-y-1 text-foreground/90">
          <li>Maiores de idade;</li>
          <li>Matriculados e frequentem ativamente um clube de DBV da sua região;</li>
          <li>Membros batizados na IASD com carta de recomendação da igreja.</li>
        </ul>
      </SectionCard>

      {/* PARTICIPAÇÃO DO LÍDER */}
      <SectionCard id="participacao-lider" title="Como o Líder ou Aspirante Participa" icon={sections[5].icon}>
        <p className="text-foreground/90">O Líder (L, LM, LMA) ou aspirante deve:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2 text-foreground/90">
          <li>Ser membro de um Clube de Desbravadores;</li>
          <li>Estar matriculado e com o Seguro Anual 2026 ativo;</li>
          <li>Possuir 16 anos completos até 30/06/2026;</li>
          <li>Ser membro ativo em um dos Clubes de Desbravadores na APV.</li>
        </ul>
      </SectionCard>

      {/* SEGURO */}
      <SectionCard id="seguro" title="Seguro Anual ARM" icon={sections[6].icon}>
        <p className="text-foreground/90 mb-3">Para assegurar os membros no seguro:</p>
        <ol className="list-decimal pl-5 space-y-1 text-foreground/90 mb-3">
          <li>Acesse o módulo <strong>PROTEÇÃO DE CLUBES</strong></li>
          <li>Clique em <strong>Incluir Vidas</strong></li>
          <li>Marque os nomes não assegurados e inclua-os no Seguro Anual ARM vigência 2026</li>
        </ol>
        <AlertBox type="info" title="Abrangência">
          O Seguro vale para todos: participantes, cozinheiras, segurança, profissional de saúde e outros com Ficha de Membro ativa no Clube de DBV local.
        </AlertBox>
        <h3 className="font-heading font-bold text-base text-primary mt-4 mb-2">Validação de Idade</h3>
        <AlertBox type="danger" title="Data de corte">
          Somente aspirantes que completarem 16 anos até <strong>30 de junho de 2026</strong> poderão ser inscritos. Após essa data, não poderão participar.
        </AlertBox>
      </SectionCard>

      {/* INSCRIÇÕES */}
      <SectionCard id="inscricoes" title="Inscrições" icon={sections[7].icon}>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="bg-campori-amber/10 border border-campori-amber/30 rounded-lg p-4">
            <p className="font-heading font-bold text-xs uppercase tracking-wide text-campori-earth-dark">Valor</p>
            <p className="font-heading font-bold text-xl text-foreground">A definir</p>
          </div>
          <div className="bg-campori-amber/10 border border-campori-amber/30 rounded-lg p-4">
            <p className="font-heading font-bold text-xs uppercase tracking-wide text-campori-earth-dark">Data da Inscrição</p>
            <p className="font-heading font-bold text-xl text-foreground">07 a 09 de julho de 2026</p>
            <p className="text-xs text-muted-foreground">Duração: apenas 3 dias</p>
          </div>
        </div>

        <h3 className="font-heading font-bold text-base text-primary mb-2">Passos para a inscrição:</h3>
        <ol className="list-decimal pl-5 space-y-1 text-foreground/90 mb-4">
          <li>Acesse o sistema: <strong>https://sg.sdasystems.org</strong></li>
          <li>Entre com suas credenciais;</li>
          <li>Vá até o módulo <strong>INSCRIÇÕES</strong>;</li>
          <li>Procure: "III Campori de Líderes – APV";</li>
          <li>Insira todos os membros da Região;</li>
          <li>Gere os links e encaminhe para cada um pagar;</li>
          <li>Pagamento: PIX, Débito ou Crédito (até 3x).</li>
        </ol>

        <AlertBox type="info" title="Pré-requisitos para inscrição">
          O participante já deverá estar incluído no Seguro Anual ARM, com ficha médica atualizada e termo de adesão assinado (feito pela secretaria do Clube). Após gerar o link, tem 24h para concluir o pagamento.
        </AlertBox>

        <AlertBox type="danger" title="Proibição">
          NÃO será permitida a presença de menores de 16 anos, inclusive bebês. Se não tiver com quem deixar crianças, sugerimos que não faça a inscrição.
        </AlertBox>

        <h3 className="font-heading font-bold text-base text-primary mt-4 mb-2">Troca de Nomes</h3>
        <p className="text-foreground/90">
          Trocas disponíveis somente entre <strong>01 a 20 de julho de 2026</strong>, e apenas de nomes de uma mesma Região já inscrita. Após essa data, nenhuma troca será permitida.
        </p>
      </SectionCard>

      {/* INSCRIÇÕES ESPECIAIS */}
      <SectionCard id="inscricoes-especiais" title="Inscrições Especiais" icon={sections[8].icon}>
        <ul className="space-y-3 text-foreground/90">
          <li><strong className="text-primary">Coordenadores e Staff:</strong> Inscrição feita diretamente no MDA-APV.</li>
          <li><strong className="text-primary">Pastor Distrital:</strong> Inscrição feita diretamente no MDA-APV.</li>
          <li><strong className="text-primary">Família Pastoral:</strong> Esposa e filhos (16+ anos), membros ativos de Clube DBV, pagam valor integral.</li>
          <li><strong className="text-primary">Filhos de Pastores &lt;16 anos:</strong> Não poderão participar.</li>
          <li><strong className="text-primary">Cozinheiras:</strong> Até 2 isentas por Região. A partir da 3ª, paga valor integral. Devem ser adventistas, 18+ anos, incluídas no Seguro Anual 2026 de um clube DBV.</li>
        </ul>
      </SectionCard>

      {/* DAYPASS */}
      <SectionCard id="daypass" title="Day Pass – Visitantes" icon={sections[9].icon}>
        <div className="bg-campori-sky/10 border border-campori-sky/30 rounded-lg p-5">
          <p className="font-heading font-bold text-xl text-foreground mb-2">R$ 50,00 por pessoa</p>
          <p className="text-foreground/90">
            O Campori estará aberto para visitação (inclusive no sábado) das <strong>7:00h às 18:00h</strong>, mediante aquisição antecipada via link enviado pelo Regional.
          </p>
        </div>
      </SectionCard>

      {/* ENTRADA E IDENTIFICAÇÃO */}
      <SectionCard id="entrada-identificacao" title="Entrada e Identificação" icon={sections[10].icon}>
        <h3 className="font-heading font-bold text-base text-primary mb-2">Entrada</h3>
        <p className="text-foreground/90 mb-4">
          Acesso disponível a partir de <strong>09/10/2026 às 6h</strong>. Regiões que necessitem podem enviar membros da diretoria no dia anterior a partir das 9h, com autorização prévia. Sem autorização, aguardarão na cidade até abertura.
        </p>

        <h3 className="font-heading font-bold text-base text-primary mb-2">Identificação</h3>
        <ul className="list-disc pl-5 space-y-2 text-foreground/90">
          <li>Sistema de pulseira de vinil com cor diferenciada por função;</li>
          <li><strong>Obrigatório</strong> circular com pulseira de identificação;</li>
          <li>Perda de pulseira: nova somente mediante pagamento de <strong>R$ 50,00</strong>;</li>
          <li>Pulseira danificada por eventos: apresentar a estragada para substituição gratuita.</li>
        </ul>
      </SectionCard>

      {/* PROGRAMAÇÃO */}
      <SectionCard id="programacao" title="Programação" icon={sections[11].icon}>
        <ul className="list-disc pl-5 space-y-2 text-foreground/90 mb-4">
          <li>A Lição da Escola Sabatina será a dos <strong>Adultos</strong>;</li>
          <li>Cada participante deve levar sua <strong>Bíblia</strong> em todos os programas — isso terá pontuação;</li>
          <li>Não será permitido na arena: apitos, tambores, flautas, buzinas;</li>
        </ul>
        <AlertBox type="danger" title="Proibições na programação">
          É terminantemente proibido o uso de ponteiros laser, flash, fogos de artifício, bastões ou latas de fumaça colorida durante as programações. Uso de objetos que perturbem projeções será infração disciplinar.
        </AlertBox>
        <p className="text-foreground/90 mt-4">
          O Campori será formado por turnos de atividades específicas, chamado de <strong>Carrossel</strong>.
        </p>
      </SectionCard>

      {/* RESPONSABILIDADES */}
      <SectionCard id="responsabilidades" title="Responsabilidades de Cada Região" icon={sections[12].icon}>
        <ul className="list-disc pl-5 space-y-2 text-foreground/90">
          <li>Instalar e equipar seu acampamento adequadamente;</li>
          <li>Confirmar que cada participante tenha documento com foto;</li>
          <li>Possuir a lista de viagem;</li>
          <li>Instalar a cozinha de forma segura;</li>
          <li>Cuidar dos acampantes e da área de acampamento;</li>
          <li>Apresentar formulários exigidos devidamente preenchidos;</li>
          <li>Levar qualquer material necessário para as atividades da Região.</li>
        </ul>
      </SectionCard>

      {/* O QUE LEVAR */}
      <SectionCard id="o-que-levar" title="O Que Levar / Não Levar" icon={sections[13].icon}>
        <h3 className="font-heading font-bold text-base text-primary mb-2">Cada participante deve levar:</h3>
        <ol className="list-decimal pl-5 space-y-1 text-foreground/90 mb-4">
          <li>Bíblia e Lição de Escola Sabatina dos Adultos;</li>
          <li>Documentos de Identificação, Carteira SUS;</li>
          <li>Uniformes DBV Oficial e do Campo;</li>
          <li>Boné, protetor solar e capa de chuva;</li>
          <li>Caneta e caderneta;</li>
          <li>Insígnias, pins e recordações para trocar.</li>
        </ol>

        <h3 className="font-heading font-bold text-base text-primary mb-2">Cada Região deve levar:</h3>
        <ol className="list-decimal pl-5 space-y-1 text-foreground/90 mb-4">
          <li>Bandeiras, mastros e pedestal;</li>
          <li>Profissional de Saúde e material de Primeiros Socorros;</li>
          <li>Material de acampamento: enxadão, pá, reservatório p/ água, lanterna, cordas, balde;</li>
          <li>Bússola (pelo menos 1 por unidade);</li>
          <li>Extensão para cozinha;</li>
          <li>Freezer ou geladeira (só um) e equipamentos de cozinha.</li>
        </ol>

        <h3 className="font-heading font-bold text-base text-campori-red mb-2">❌ NÃO levar:</h3>
        <ol className="list-decimal pl-5 space-y-1 text-foreground/90">
          <li>Animais;</li>
          <li>Equipamentos de som;</li>
          <li>Televisores;</li>
          <li>Jogos eletrônicos;</li>
          <li>Fogos de artifício ou similares;</li>
          <li>Laser point;</li>
          <li>Botijão de gás (comprar no local);</li>
          <li>Equipamentos elétricos de cozinha (microondas, sanduicheira, air fryer, forno elétrico).</li>
        </ol>
      </SectionCard>

      {/* PONTUAÇÃO */}
      <SectionCard id="pontuacao" title="Pontuação e Classificação" icon={sections[14].icon}>
        <DataTable
          headers={["Etapa", "Área de Atuação", "Onde?", "Pontos"]}
          rows={[
            ["Pré-Requisitos", "Administração, Nas Casas, nos Templos e nas Ruas", "SGC", "1.013"],
            ["Requisitos", "Administração, Acampamento, Cozinha, Saúde e Outras", "Campori", "1.013"],
            ["", "", "TOTAL", "2.026"],
          ]}
        />
        <AlertBox type="info" title="Sem pastas físicas">
          Não haverá entrega ou recebimento de pastas no Campori. Todas as comprovações de pré-requisitos devem ser feitas antecipadamente pelo Ranking do SGC.
        </AlertBox>

        <h3 className="font-heading font-bold text-base text-primary mt-6 mb-3">Classificação por Estrelas</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-3 bg-campori-amber/10 rounded-lg p-3">
            <span className="text-xl">⭐⭐⭐⭐⭐</span>
            <span className="text-sm font-medium">80% a 100% da maior pontuação</span>
          </div>
          <div className="flex items-center gap-3 bg-campori-amber/10 rounded-lg p-3">
            <span className="text-xl">⭐⭐⭐⭐</span>
            <span className="text-sm font-medium">60% a 79% da maior pontuação</span>
          </div>
          <div className="flex items-center gap-3 bg-campori-amber/10 rounded-lg p-3">
            <span className="text-xl">⭐⭐⭐</span>
            <span className="text-sm font-medium">Menos de 59% da maior pontuação</span>
          </div>
        </div>
      </SectionCard>

      {/* PRÉ-REQUISITOS */}
      <SectionCard id="pre-requisitos" title="Pré-Requisitos – Etapa I (1.013 pts)" icon={sections[15].icon}>
        <p className="text-foreground/90 mb-6">
          Divididos em 4 áreas. Devem ser cumpridos na localidade da Região e comprovados via relatórios. O Regional aprova e a Secretária do Campo valida.
        </p>

        <h3 className="font-heading font-bold text-lg text-primary mb-3">Administração – 200 pts</h3>
        <DataTable
          headers={["Código", "Descrição", "Pts"]}
          rows={[
            ["A1", "Planejamento Anual da Região – Enviar até 30/05/26 o planejamento detalhado com atividades, responsáveis e locais. Anexar no Ranking.", "100"],
            ["A2", "Secretaria On-Line no SGC – Inscrever todos os membros no módulo Fábrica de Líderes com dados atualizados até 15/07/26.", "100"],
          ]}
        />

        <h3 className="font-heading font-bold text-lg text-primary mb-3 mt-6">Nas Casas – 300 pts</h3>
        <DataTable
          headers={["Código", "Descrição", "Pts"]}
          rows={[
            ["C3", "Ano Bíblico – Atualizado até 30/06/26. ≥80% = 50pts; 50-79% = 25pts; <50% = 0pts.", "50"],
            ["C4", "Curso de Leitura – Livro ORAÇÃO concluído até 30/07/26. ≥80% = 50pts; 50-79% = 25pts; <50% = 0pts.", "50"],
            ["C5", "PG my Life – Cada membro participar/liderar PG de março a 31/julho. Anexar foto.", "100"],
            ["C6", "Visita a Desbravadores – Escolher 3 DBVs e visitar 2x cada (abril-jun e jul-set). Anexar lista.", "100"],
          ]}
        />

        <h3 className="font-heading font-bold text-lg text-primary mb-3 mt-6">Nos Templos – 300 pts</h3>
        <DataTable
          headers={["Código", "Descrição", "Pts"]}
          rows={[
            ["T7", "Curso de Diretoria Básico/Avançado e/ou Capitães e Conselheiros. ≥80% = 50pts; 50-79% = 25pts; <50% = 0pts. Anexar relatório.", "50"],
            ["T8", "Suporte a Clubes – Participar de 2 atividades em diferentes clubes da Região até 31/07. Anexar foto.", "100"],
            ["T9", "Reunião de participantes da Região – Participar de 2 reuniões com equipe regional. Anexar foto.", "50"],
            ["T10", "Visita do Coordenador à Região – Receber visita de um Coordenador da APV. Anexar foto.", "50"],
            ["T11", "Visita do Pastor Distrital – Receber visita do Pastor em evento/reunião. Anexar foto.", "50"],
          ]}
        />

        <h3 className="font-heading font-bold text-lg text-primary mb-3 mt-6">Nas Ruas – 213 pts</h3>
        <DataTable
          headers={["Código", "Descrição", "Pts"]}
          rows={[
            ["R12", "Calebe de Lenço – Mínimo 20 membros participando/apoiando Missão Calebe em julho. Anexar foto.", "50"],
            ["R13", "DBV Por um Dia – Participar na execução e organização. Anexar relatório com lista, clubes e novos DBVs.", "50"],
            ["R14", "Classe Bíblica DBV – Cada clube com funcionamento semanal a partir de abril/2026. Dar suporte às classes. Anexar fotos.", "50"],
            ["R15", "Líderes Ativos – Participar uniformizados da Semana Santa e Impacto Esperança. Anexar mosaico de fotos.", "63"],
          ]}
        />
      </SectionCard>

      {/* REQUISITOS NO CAMPORI */}
      <SectionCard id="requisitos-campori" title="Requisitos no Campori – Etapa II (1.013 pts)" icon={sections[16].icon}>
        <h3 className="font-heading font-bold text-lg text-primary mb-3">Administração – 150 pts</h3>
        <DataTable
          headers={["Código", "Descrição", "Pts"]}
          rows={[
            ["E1", "Pasta da Secretaria – Entregar na chegada: lista de inscritos com contato de emergência, fichas médicas, cópias de identidade, contrato do ônibus e dados dos motoristas.", "50"],
            ["E2", "Pontualidade – Cada atraso ou não comparecimento = perda de 10 pts (máx. 50 pts).", "50"],
            ["E3", "Disciplina – Todos iniciam com 50 pts. Perda por indisciplina. Falta grave pode custar até 1.000 pts ou retirada do Campori.", "50"],
          ]}
        />

        <h3 className="font-heading font-bold text-lg text-primary mb-3 mt-6">Acampamento – 350 pts</h3>
        <DataTable
          headers={["Código", "Descrição", "Pts"]}
          rows={[
            ["E4", "Área de Acampamento pronta na abertura às 18h. Dividido por sexo, unidades identificadas com nomes.", "50"],
            ["E5", "Portal e Demarcação – Portal criativo de pioneiria com identificação. Área demarcada com cordas.", "25"],
            ["E6", "Barracas Alinhadas – Alinhadas, arrumadas e em ordem.", "25"],
            ["E7", "Móveis de Campanha – Pelo menos 3 móveis de pioneiria (inclui varal).", "25"],
            ["E8", "Bandeiras e Mastros – Brasil, São Paulo, Desbravadores e Região nos mastros.", "25"],
            ["E9", "Bandeiras dos Clubes DBV da Região em mastros criativos.", "25"],
            ["E10", "Limpeza do Acampamento – Sempre limpo com local para lixo.", "25"],
            ["E11", "Quadro de Nós – Nós de Amigo a Guia exposto no acampamento.", "50"],
            ["E12", "Histórico da Região – Expor história por escrito e em fotos.", "50"],
            ["E13", "Limpeza no Encerramento – Áreas de acampamento e cozinha limpas.", "50"],
          ]}
        />
        <AlertBox type="warning" title="Energia elétrica">
          Proibido uso de energia elétrica na área do acampamento. Para iluminação do portal, usar bateria ou energia solar (comunicar ao MDA-APV).
        </AlertBox>
      </SectionCard>

      {/* COZINHA */}
      <SectionCard id="cozinha" title="Cozinha – 150 pts" icon={sections[17].icon}>
        <DataTable
          headers={["Código", "Descrição", "Pts"]}
          rows={[
            ["E14", "Montagem da Cozinha – Área identificada com a Região. Levar extensão ~20m (3 pinos). Rede elétrica: 220V.", "25"],
            ["E15", "Cardápio Ovolactariano – Seguindo orientação da igreja, em local visível.", "25"],
            ["E16", "Água para Beber – Reservatório na cozinha.", "25"],
            ["E17", "Uniforme das Cozinheiras – Avental e toucas personalizadas. Cozinha nunca vazia.", "25"],
            ["E18", "Organização e Higiene – Limpa e organizada, com local para alimentação e lixo.", "25"],
            ["E19", "Segurança – Extintor tipo B na área da cozinha.", "25"],
          ]}
        />

        <AlertBox type="danger" title="Botijão de Gás">
          Não existe autorização do CONTRAN para transportar botijão em ônibus/carros (mesmo vazios). Haverá venda no local mediante pagamento do gás e caução do botijão (devolvido na devolução do casco).
        </AlertBox>

        <h3 className="font-heading font-bold text-base text-primary mt-4 mb-2">Segurança do Gás (NBR 13523)</h3>
        <ul className="list-disc pl-5 space-y-1 text-foreground/90">
          <li>Botijões de 13 kg em local ventilado;</li>
          <li>Longe de fontes de calor;</li>
          <li>Mínimo 1 metro de tomadas, interruptores e materiais inflamáveis.</li>
        </ul>
      </SectionCard>

      {/* SAÚDE */}
      <SectionCard id="saude" title="Saúde – 100 pts" icon={sections[18].icon}>
        <h3 className="font-heading font-bold text-base text-primary mb-3">E20 – Maleta de Primeiros Socorros (50 pts)</h3>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="bg-muted rounded-lg p-4">
            <p className="font-heading font-bold text-sm text-primary mb-2">Higiene e Antissépticos</p>
            <ul className="list-disc pl-4 text-sm space-y-1 text-foreground/80">
              <li>Álcool 70% ou em gel</li>
              <li>Soro fisiológico 0,9%</li>
              <li>Sabonete antisséptico</li>
              <li>Clorexidina 2% ou Povidine 10%</li>
              <li>Lenços descartáveis</li>
            </ul>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <p className="font-heading font-bold text-sm text-primary mb-2">Curativos e Bandagens</p>
            <ul className="list-disc pl-4 text-sm space-y-1 text-foreground/80">
              <li>Curativos adesivos (variados)</li>
              <li>Gaze estéril</li>
              <li>Esparadrapo / fita microporosa</li>
              <li>Ataduras de crepe e elásticas</li>
              <li>Algodão hidrófilo</li>
            </ul>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <p className="font-heading font-bold text-sm text-primary mb-2">Medicamentos (com orientação médica)</p>
            <ul className="list-disc pl-4 text-sm space-y-1 text-foreground/80">
              <li>Analgésicos / antitérmicos</li>
              <li>Antialérgicos</li>
              <li>Pomada para queimaduras</li>
              <li>Antisséptico para picadas</li>
              <li>Reidratante oral</li>
            </ul>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <p className="font-heading font-bold text-sm text-primary mb-2">Equipamentos de Proteção</p>
            <ul className="list-disc pl-4 text-sm space-y-1 text-foreground/80">
              <li>Luvas descartáveis</li>
              <li>Máscara descartável</li>
              <li>Óculos de proteção</li>
            </ul>
          </div>
        </div>

        <h3 className="font-heading font-bold text-base text-primary mb-3">E21 – Profissional de Saúde (50 pts)</h3>
        <p className="text-foreground/90 mb-2">
          A Região deve levar um profissional de saúde (Médico, Enfermeiro, Técnico/Auxiliar de Enfermagem, Dentista ou Fisioterapeuta).
        </p>
        <ul className="list-disc pl-5 space-y-1 text-foreground/90">
          <li>Maior de 18 anos, adventista;</li>
          <li>Registro no Conselho Regional ativo;</li>
          <li>Incluído no Seguro Anual 2026 de um clube DBV;</li>
          <li><strong>Inscrição gratuita</strong> — deverá cumprir plantão na enfermaria do Campori.</li>
        </ul>
      </SectionCard>

      {/* OUTRAS AVALIAÇÕES */}
      <SectionCard id="outras-avaliacoes" title="Outras Avaliações – 263 pts" icon={sections[19].icon}>
        <DataTable
          headers={["Código", "Descrição", "Pts"]}
          rows={[
            ["E22", "Batismo no Campori – Levar ao menos 1 pessoa para batismo. Ficha batismal preenchida e assinada pelo Pastor.", "50"],
            ["E23", "Investidura em Líder, Máster ou Máster Avançado – Trazer pelo menos 1 pessoa. Cartão virtual 100% concluído até 01/05/2025.", "50"],
            ["E24", "Uniforme Oficial – Usado na abertura, investidura e sábado. 100% com uniforme completo (boné opcional) e faixa de especialidades.", "25"],
            ["E25", "Uniforme do Campo (APV) – 100% com uniforme para avaliação de Ordem Unida e ações externas.", "25"],
            ["E26", "Grito de Guerra – Gritar o BRADO em momento pré-determinado.", "13"],
            ["E27", "Circuito de Atividades – Regiões divididas em equipes. Troféu para menor tempo. Treinar: Bússola, Código Semafórico, Sinais de Pista, Bandeiras, Nós e Amarras, Pioneirias, Primeiros Socorros, Emblemas, História do Clube, Ideais.", "100"],
          ]}
        />
      </SectionCard>

      {/* CHECKLIST DE DATAS */}
      <SectionCard id="checklist-datas" title="Check-list de Datas Importantes" icon={sections[20].icon}>
        <p className="text-foreground/90 mb-4">
          Datas organizadas na sequência de acontecimento e/ou registro no SGC. Use esta lista para acompanhamento:
        </p>
        <div className="space-y-3">
          {[
            { date: "30/05/2026", task: "Enviar Planejamento Anual da Região (A1)", tag: "Pré-Requisito" },
            { date: "30/06/2026", task: "Data de corte – Idade mínima 16 anos", tag: "Inscrição" },
            { date: "30/06/2026", task: "Ano Bíblico atualizado (C3)", tag: "Pré-Requisito" },
            { date: "07-09/07/2026", task: "Período de inscrições (apenas 3 dias!)", tag: "Inscrição" },
            { date: "15/07/2026", task: "Secretaria On-Line no SGC (A2)", tag: "Pré-Requisito" },
            { date: "01-20/07/2026", task: "Troca de nomes dos inscritos", tag: "Inscrição" },
            { date: "30/07/2026", task: "Conclusão do Curso de Leitura – livro ORAÇÃO (C4)", tag: "Pré-Requisito" },
            { date: "31/07/2026", task: "PG my Life concluído (C5)", tag: "Pré-Requisito" },
            { date: "31/07/2026", task: "Suporte a Clubes concluído (T8)", tag: "Pré-Requisito" },
            { date: "Julho/2026", task: "Missão Calebe (R12)", tag: "Pré-Requisito" },
            { date: "Set/2026", task: "Visitas a Desbravadores concluídas (C6)", tag: "Pré-Requisito" },
            { date: "09/10/2026", task: "Abertura do III Campori de Líderes (6h)", tag: "Evento" },
            { date: "12/10/2026", task: "Encerramento do Campori (17h)", tag: "Evento" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-muted rounded-lg p-3">
              <div className="shrink-0 text-center min-w-[90px]">
                <p className="font-heading font-bold text-sm text-primary">{item.date}</p>
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground/90">{item.task}</p>
              </div>
              <span className={`shrink-0 text-xs font-heading font-semibold px-2 py-1 rounded ${
                item.tag === "Inscrição" ? "bg-campori-sky/20 text-campori-sky" :
                item.tag === "Evento" ? "bg-secondary/20 text-secondary" :
                "bg-primary/10 text-primary"
              }`}>
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
