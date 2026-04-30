// Conteúdo completo da Agenda Desbravadores APV 2026
// Textos preservados exatamente como fornecidos pelo usuário

export interface SubItem {
  code?: string;
  text: string;
  points?: string;
  details?: string[];
  notes?: string[];
}

export interface AgendaSection {
  id: string;
  number: string;
  title: string;
  verse?: string;
  items: SubItem[];
}

export const agendaSections: AgendaSection[] = [
  {
    id: "organizacao",
    number: "1",
    title: "Organização do Clube",
    verse: "Ensina-nos a contar os nossos dias para que o nosso coração alcance sabedoria. Salmo 90:12",
    items: [
      { code: "1A", text: "Atualização do Cadastro no SGC - 19/03/2026", points: "400 pts" },
      { code: "1B", text: "Seguro Anual Atualizado até 19/03/2026", points: "400 pts" },
      { code: "1C", text: "Secretaria do Clube Organizada (pasta, ficha médica, autorizações). Entrega da Pasta na APV até dia 15/03/26", points: "400 pts" },
      { code: "1D", text: "Planejamento anual do Clube aprovado pela comissão da igreja até 19/03/2026", points: "300 pts" },
      { code: "1E", text: "Planejamento financeiro do Clube aprovado pela comissão da igreja até 19/03/2026", points: "300 pts" },
      { code: "1F", text: "Antecedentes Criminais", points: "200 pts" },
    ],
  },
  {
    id: "classes",
    number: "2",
    title: "Classes - Desenvolvimento",
    verse: "Jesus ia crescendo em sabedoria, estatura e graça diante de Deus e dos homens. Lucas 2:52",
    items: [
      {
        code: "2A",
        text: "Classes Regulares e Agrupadas. (em 4 etapas abaixo)",
        points: "800 pts",
        details: [
          "Etapa 01: Ter um planejamento detalhado para cumprimento de requisito de Classes do ano — 200 pts",
          "Etapa 02: Ter uma lista dos desbravadores com as seguintes informações: Qual classe cada um deverá realizar no decorrer de 2026 e quais classes não realizadas anteriormente ainda lhe faltam. (Apresentar ao regional) Anexo 4 — 100 pts",
          "Etapa 03: Ter um planejamento detalhado para cumprimento de requisito de Classes anteriormente não realizadas. — 100 pts",
          "Etapa 04: Ter de 90% a 100% dos Desbravadores Investidos nas Classes do ano: 400 pts",
          "Ou de acordo com a porcentagem abaixo:",
          "> Ter 75% dos Desbravadores Investidos nas Classes do ano (300);",
          "> Ter 50% dos Desbravadores Investidos nas Classes do ano (200);",
          "> Abaixo de 50% não pontua.",
          "Investidura da Classe não realizada anteriormente. (PONTO BÔNUS) — 100 pts",
        ],
        notes: [
          "**Ponto Bônus - Vamos dar 100 pontos para o clube que consiga investir 10% dos desbravadores em classes anteriormente não realizada.",
          "Sabemos que muitos desbravadores estão defasados com as classes de acordo com sua idade.",
          "Sabemos que investir classes anteriormente não realizadas demanda grande esforço e organização.",
          "Dica: se possível, destine um semestre por classe. Exemplo. 1º Semestre, Classe regular (de acordo com a idade do Desbravador). 2º Semestre, classe anteriormente não realizada.",
          "IMPORTANTE: O regional precisa ser informado da data investidura de classe com no máximo até 02 meses de antecedência e os cadernos devem ser entregues para sua aprovação com até 01 mês de antecedência. No caso de investiduras que ocorrerão no fim do ano a entrega dos cadernos para aprovação do regional deve ser até 02/11.",
          "OBS.: Veja dicas de como realizar e avaliar classes no Anexo 4",
        ],
      },
      {
        code: "2B",
        text: "Classe de Líder, Master e Líder Master Avançado (APV)",
        points: "200 pts",
        details: [
          "100% da Diretoria Fazendo o Cartão (L, LM ou LMA) — 200 pts",
          "75% da Diretoria Fazendo o Cartão (L, LM ou LMA) — 150 pts",
          "50% da diretoria Fazendo o Cartão (L, LM ou LMA) — 100 pts",
        ],
        notes: [
          "Nota: Os que não tiverem requisitos do cartão cumpridos, registrados e assinados, no decorrer do ano serão considerados como \"Não fazendo o Cartão\".",
          "Observação: O requisito Não se Aplica quando:",
          "1) Não houver pessoas qualificadas iniciar as Classes de Liderança, por não possuir as Classes regulares ou outro motivo;",
          "2) Todos os líderes investidos estiverem no período de espera exigido pelo cartão para iniciar a Classe de nível superior;",
          "3) Todos os líderes atingiram o nível de Líder Master Avançado.",
          "Em qualquer destes casos o clube receberá a pontuação deste requisito.",
        ],
      },
      {
        code: "2C",
        text: "Classe Agrupadas 16 anos acima",
        points: "400 pts",
        details: [
          "100% dos que precisam, fazendo o Cartão — 400 pts",
          "75% dos que precisam, fazendo o Cartão — 300 pts",
          "50% dos que precisam, fazendo o Cartão — 200 pts",
        ],
        notes: [
          "Observação: O requisito Não se Aplica quando:",
          "1) Não houver pessoas de 16 anos acima, que necessitam fazer o cartão de Classes Agrupadas. Neste caso o clube receberá a pontuação deste requisito.",
        ],
      },
    ],
  },
  {
    id: "unidades",
    number: "3",
    title: "Sistema de Unidades - Discipulado",
    verse: "Portanto, vão e façam discípulos de todas as nações, batizando-os em nome do Pai e do Filho e do Espírito Santo. Mateus 28:19",
    items: [
      {
        code: "3A",
        text: "Treinamento Básico para Diretoria (CTBD) Online",
        points: "200 pts",
        notes: ["15 a 17 - INSCRIÇÃO CTBD E CTDA (TESOURARIA E CAPELANIA)"],
      },
      {
        code: "3B",
        text: "Curso de Capitães (regional)",
        points: "100 pts",
        notes: ["15 a 17 - INSCRIÇÃO CTBD E CTDA (TESOURARIA E CAPELANIA)"],
      },
      {
        code: "3C",
        text: "Curso de Conselheiros (regional)",
        points: "100 pts",
        notes: ["Participação de, pelo menos, um conselheiro por unidade no Curso de Conselheiro promovido pela Região."],
      },
      {
        code: "3D",
        text: "Conselheiro TOP (Avaliação Regional)",
        points: "200 pts",
        details: [
          "90% a 100% dos Conselheiros realizando o programa — 200 pts",
          "75% dos Conselheiros realizando o programa — 150 pts",
          "50% dos Conselheiros realizando o programa — 100 pts",
        ],
      },
    ],
  },
  {
    id: "evangelismo",
    number: "4",
    title: "Evangelismo",
    verse: "E disse-lhes: \"Vão pelo mundo todo e preguem o evangelho a todas as pessoas\". Marcos 16:15",
    items: [
      {
        code: "4A",
        text: "Sábado da Missão - Impacto Esperança",
        points: "100 pts",
        notes: ["Participar da distribuição de livros promovido e organizado pela igreja local e/ou distrito."],
      },
      {
        code: "4B",
        text: "Semana Santa",
        points: "400 pts",
        notes: [
          "Participar ativamente da Semana Santa 2026.",
          "Fazer uma escala de membros do clube para que em todos os dias tenham desbravadores uniformizados (UNIFORME DE GALA) participando das seguintes atividades: Recepção, Louvor, Espaço infantil e/ou outra atividade que auxilie a igreja durante a realização da Semana Santa 2026.",
        ],
      },
      {
        code: "4C",
        text: "Classe Bíblica. (Início em 12/04/2026)",
        points: "300 pts",
        notes: ["Manter uma Classe Bíblica presencial a fim de preparar os desbravadores, ainda não batizados, para o batismo da primavera."],
      },
      {
        code: "4D",
        text: "Controle de Desbravadores não batizados",
        points: "100 pts",
        notes: ["O Capelão deve ter uma lista atualizada de controle com nomes dos desbravadores (de famílias adventistas e família não adventistas) não batizados do seu clube. A lista deve ser apresentada ao Departamento de MDA da APV até maio/2026 e atualizada até agosto/2026. (Anexo 5)"],
      },
      {
        code: "4E",
        text: "Semana de Evangelismo do Min. Da Mulher",
        points: "400 pts",
        notes: [
          "Participar ativamente da Semana de Evangelismo do Min. da Mulher 2026.",
          "Fazer uma escala de membros do clube para que em todos os dias tenham desbravadores uniformizados (UNIFORME DE GALA) participando das seguintes atividades: Recepção, Louvor, Espaço infantil e/ou outra atividade que auxilie a igreja durante a realização da Semana de Evangelismo do Min. da Mulher 2026.",
        ],
      },
      {
        code: "4F",
        text: "Semana Jovem",
        points: "400 pts",
        notes: [
          "Participar ativamente da Semana de Evangelismo Jovem 2026. Fazer uma escala de membros do clube para que em todos os dias tenham desbravadores uniformizados (UNIFORME DE GALA) participando das seguintes atividades: Recepção, Louvor, Espaço infantil e/ou outra atividade que auxilie a igreja durante a realização da Semana de Evangelismo Jovem 2026.",
          "Nota: Caso a igreja local não promova uma semana completa, participe ativamente nos dias promovidos pelo Ministério Jovem de sua Igreja Local.",
        ],
      },
      {
        code: "4G",
        text: "Caleb de Lenço (diretoria)",
        points: "200 pts",
        notes: ["75% dos Membros do Clube com 16 anos de idade ou mais, participar ativamente da Missão Caleb no Distrito. (Comprovar com Lista de inscritos e fotos usando o LENÇO nas atividades da Missão Caleb 2026)."],
      },
      {
        code: "4H",
        text: "Sábado Quebrando o Silêncio",
        points: "100 pts",
        notes: ["Participar do projeto em sua igreja ou distrito (UNIFORME DE GALA)."],
      },
      {
        code: "4I",
        text: "Semana da Primavera",
        points: "1000 pts",
        details: [
          "(Distribuídos nas 4 etapas abaixo)",
          "Planejamento: Participar de pelo menos duas reuniões de comissão da igreja local, com o objetivo de organizar, planejar e delegar as responsabilidades para a semana da primavera — 200 pts",
          "Participação: Cada unidade deverá estar envolvida nas atividades (prévias; durante e pós) da semana da Primavera. Tais como: Oração Intercessora, Recepção, Ajuda na sala das crianças, Serenata, Whatsapp de Oração para as visitas do dia etc. Respeitando sempre os dons espirituais de cada um e ajudando na descoberta deles. — 100 pts",
          "Visita aos desbravadores não Batizados: Em parceria com o pastor distrital e/ou ancião da igreja, organizar uma maratona de visitação aos desbravadores não batizados que demonstraram interesse pelo batismo durante o DESBRAVA DAY 2026. (Foto das visitas) — 300 pts",
          "Cerimônia Batismal: Realizar uma cerimônia batismal durante a Semana da Primavera 2026 (ou durante o mês de setembro). — 400 pts",
        ],
        notes: ["Nota: Os Clubes que realizarem o batismo de CINCO ou mais desbravadores durante o mês de setembro receberão o troféu Arthur Spalding."],
      },
    ],
  },
  {
    id: "eventos",
    number: "5",
    title: "Eventos",
    verse: "Agora me está reservada a coroa da justiça, que o Senhor, justo Juiz, me dará naquele dia, e não somente a mim, mas também a todos os que amam a sua vinda. 2 Timóteo 4:8",
    items: [
      {
        code: "5A",
        text: "Participação na Convenção Novas Gerações",
        points: "200 pts",
        details: [
          "Participantes convocados: Diretor(a) e/ou Diretor(a) Associado(a); secretário(a)",
          "Inscrição: 12 a 23 de Janeiro",
          "01 FEV - CONVENÇÃO NOVAS GERAÇÕES - SJC",
          "08 FEV - CONVENÇÃO NOVAS GERAÇÕES - GRU",
          "22 FEV - CONVENÇÃO NOVAS GERAÇÕES - MOGI",
        ],
      },
      {
        code: "5B",
        text: "Pregador Mirim (regional, local)",
        points: "100 pts",
        details: [
          "Como Tema: Sempre Desbravador, vamos descobrir crianças da Bíblia que foram verdadeiros desbravadores. Nomes como: Samuel, Davi, Daniel, Josias, Moisés, Jesus, Serva de Naamã, Miriam, Caim, Abel, entre outros.",
          "Regras para participar:",
          "a) Uniforme completo;",
          "b) Sermão de 5 a 8 minutos;",
          "c) Uso de textos bíblicos;",
          "d) Boa Dicção;",
          "e) Ilustração;",
          "f) Abordagem de acordo com o tema (introdução, argumentação, conclusão e apelo);",
          "g) Postura.",
          "TEMA: Sempre Desbravador",
          "FORMATO: Regional, Distrito ou Igreja local (definido pelo Regional)",
          "CATEGORIAS: a) 10 a 12 anos; b) 13-16 anos",
          "INSCRIÇÃO: SGC de 20 e 21 de maio",
          "VALOR: R$ 7,00 por participante (direito a 1 trunfo)",
          "DATA: A partir de maio, a definir com a equipe regional",
        ],
        notes: [
          "OBSERVAÇÃO:",
          "a) Registrar a participação com fotos que evidencie o evento;",
          "b) O participante deve observar e respeitar os princípios e a modéstia cristã no vestir, falar, fazer e testemunhar;",
          "c) Sugestão de premiações especiais, consulte seu Regional.",
        ],
      },
      {
        code: "5C",
        text: "Desbravadores em Louvor (regional, local)",
        points: "100 pts",
        details: [
          "Com o Tema: Sempre Desbravador, vamos cantar sobre crianças da Bíblia que foram verdadeiros desbravadores. Nomes como: Samuel, Davi, Daniel, Josias, Moisés, Jesus, Serva de Naamã, Miriam, Caim, Abel, entre outros.",
          "Regras para participar:",
          "a) Clube Uniformizado: Gala, Região, Clube ou Beca;",
          "b) Música conhecida ou Composição própria;",
          "c) Uso de Playback ou uso de Instrumentos;",
          "d) Letra e Ritmo: Deve-se respeitar os princípios cristãos da igreja e/ou local que irá receber o evento",
          "TEMA: Sempre Desbravador",
          "FORMATO: Regional, Distrito ou Igreja local (definido pelo Regional)",
          "CATEGORIAS: 100% do clube",
          "INSCRIÇÃO: SGC de 17 e 19 de maio",
          "VALOR: R$ 7,00 por participante (direito a 1 trunfo)",
          "DATA: A partir de maio, a definir com a equipe regional",
        ],
        notes: [
          "OBSERVAÇÃO:",
          "a) Registrar a participação com fotos que evidencie o evento;",
          "b) O participante deve observar e respeitar os princípios e a modéstia cristã no vestir, falar, fazer e testemunhar;",
          "c) Sugestão de premiações especiais, consulte seu Regional",
        ],
      },
      {
        code: "5D",
        text: "Jornada Clube do Livro (Regional, APV)",
        points: "200 pts",
        details: [
          "Datas: 23 a 25/06",
          "INSCRIÇÃO DO JCL E QLA MDA. R$ 14,00 por participante.",
          "16/08 - 1ª Fase Regional JCL (Classificatória);",
          "20/09 - 2ª Fase Regional JCL (Classificatória);",
          "15/11 - JCL SEMIFINAL e 06/12 - JCL Final.",
          "Categoria 10/11; 12/13; 14/15 — Livro Servo de Deus e Amigo de todos",
          "Fase 1 - Cap 1 a 3",
          "Fase 2 - Cap 4 a 6",
          "Semifinal e Final Livro Todo",
          "Categoria 16/21 — Livro 7 Razões para crer na vida eterna",
          "Fase 1 - Prefácio - Cap 1 a 6",
          "Fase 2 - Cap 7 a 12",
          "Semifinal e Final Livro Todo",
          "Categoria 22 acima — Livro Oração",
          "Fase 1 - Prefácio - Cap 1 a 16",
          "Fase 2 - Cap 17 a 32",
          "Semifinal e Final Livro Todo",
        ],
      },
      {
        code: "5E",
        text: "Concurso Bom de Bíblia",
        points: "200 pts",
        notes: [
          "Participar ativamente do Concurso Bom de Bíblia promovido pela UCB/APV. A pontuação referente a participação será 50 pontos em cada etapa em que o Clube estiver participando.",
          "Nota: O regulamento se encontra no Guia de Orientações Gerais em anexo.",
        ],
      },
      {
        code: "5F",
        text: "III Campori de Líderes",
        points: "400 pts",
        details: [
          "CATEGORIA: Líderes investidos e aspirantes a Líder.",
          "INSCRIÇÃO: De 7 a 9 de Julho",
          "VALOR: R$ 270,00",
          "DATA: 09 a 12 de Outubro",
        ],
      },
      { code: "5G", text: "Dia Mundial do Desbravador (Clube local)", points: "200 pts" },
      { code: "5H", text: "Semana do lenço (Clube local)", points: "200 pts" },
      { code: "5I", text: "Desbravador por um dia (Clube local)", points: "200 pts", notes: ["Pode ser realizado em qualquer data de março."] },
      {
        code: "5J",
        text: "Participar dos programas dos Aventureiros da sua igreja",
        points: "100 pts",
        notes: ["Em consulta prévia com a diretoria dos Aventureiros, ofereça ajuda para os eventos especiais tais como: Dia do Aventureiro, Atividades recreativas, etc. Use seu uniforme de Gala quando possível. Para igrejas que não possuem Clube de Aventureiros o clube receberá a pontuação normalmente."],
      },
      {
        code: "5L",
        text: "Desbravaday (evento regional)",
        points: "300 pts",
        details: [
          "Cada grupo de regionais (definido pela localidade de cada um dos eventos) em parceria com a coordenação e o departamento de MDA e em conjunto com seus diretores deve promover, organizar e executar o DESBRAVADAY com o foco voltado para duas finalidades:",
          "Evangelística: No Desbravaday será organizado um culto na abertura do evento com todos os Desbravadores com o objetivo de fazer um apelo direto para o batismo da Primavera, para tal os Clubes devem estar com a relação de desbravadores não batizados atualizada e preparado para na semana seguinte organizar um mutirão de visitação juntamente com o pastor distrital e/ou ancionato da igreja local aos desbravadores que manifestarem interesse pelo batismo.",
          "Exposição de Atividades: No Desbravaday será organizado até duas das seguintes atividades, segue uma lista de sugestões:",
          "a) Feira de Desbravador;",
          "b) Feira de Especialidades;",
          "c) Olimpíadas Regionais;",
          "d) Gincana e atividades recreativas;",
          "e) Festival de Ordem Unida;",
          "f) Classori;",
          "g) E/ou qualquer outra atividade, desde que esteja de acordo com os padrões do MDA",
          "DATA E LOCAL DE ONDE SERÁ REALIZADOS CADA UM DOS EVENTOS:",
          "09 de Agosto: São José dos Campos/Lorena",
          "16 de Agosto: Litoral",
          "30 de Agosto: Guarulhos/Mogi",
        ],
        notes: [
          "PARA REALIZAÇÃO DOS EVENTOS É NECESSÁRIO QUE A EQUIPE DE REGIONAIS OBTENHA OS TRÊS SELOS DE APROVAÇÃO APV (EVENTOS; PROGRAMA E INFRAESTRUTURA). SEM OS SELOS O EVENTO NÃO PODERÁ SER REALIZADO.",
          "ATENÇÃO: NÃO SERVEM PARA ESTA PONTUAÇÃO OS SEGUINTES EVENTOS: PREGADOR MIRIM, DESBRAVADORES EM LOUVOR, CURSO DE CAPITÃES E/OU CONSELHEIROS OU OUTRO EVENTO QUE JÁ É PONTUADO NO RANKING.",
        ],
      },
    ],
  },
  {
    id: "sociais",
    number: "6",
    title: "Atividades Sociais e Familiares",
    verse: "\"Mas, eu e a minha família serviremos ao Senhor\". Josué 24:15",
    items: [
      {
        code: "6A",
        text: "Clube da Família",
        points: "200 pts",
        details: [
          "(Distribuídos nas 4 etapas abaixo)",
          "Realizar pelo menos duas Reuniões de Pais no ano — 100 pts",
          "Homenagem Dia dos Pais — 150 pts",
          "Homenagem Dia das Mães — 100 pts",
        ],
      },
      {
        code: "6B",
        text: "SEMPRE DESBRAVADOR",
        points: "200 pts",
        details: [
          "Organizar com o clube uma atividade de homenagem aos Desbravadores, tendo como base as seguintes sugestões:",
          "a) Processo de insígnia de Excelência para Desbravadores (seguindo a orientação do Manual Administrativo);",
          "b) Comenda de Homenagem para os pioneiros do clube da sua igreja. O 1º Diretor ou os fundadores do clube. A comenda poderá ser (medalha especial, troféu, certificado ou similar);",
          "c) Projeto Reencontro. Convidar os desbravadores afastados do clube para: Desbravador por 1 dia, Dia Mundial dos Desbravadores, Culto Jovem ou outro encontro.",
        ],
      },
      { code: "6C", text: "Visitação da diretoria aos membros do clube", points: "100 pts" },
      {
        code: "6D",
        text: "PROJETO ESPECIAL DO ANO NISTO CREMOS",
        points: "300 pts",
        notes: [
          "Estamos iniciando o PROJETO NISTO CREMOS. Nos próximos 4 anos, nosso desafio será realizar 7 especialidades por ano da área ENSINOS BÍBLICOS. Ao final de 4 anos, teremos concluído as 28 Doutrinas da nossa igreja através das especialidades. Agora é só escolher e começar.",
          "Segue a lista completa: Batismo; Ceia do Senhor; Conduta Cristã; Crescimento em Cristo; Criação do Mundo; Deus Espírito Santo; Deus Filho; Deus Pai; Dom de Profecia; Dons e Ministérios Espirituais; Escrituras Sagradas; Experiência da Salvação; Grande Conflito; Igreja; Lei de Deus; Matrimônio e Família; Milênio e Fim do Pecado; Ministério de Cristo no Santuário Celestial; Mordomia; Morte e Ressurreição; Natureza da Humanidade; Nova Terra; Remanescente e sua Missão; Sábado; Segunda Vinda de Cristo; Trindade; Unidade no Corpo de Cristo; Vida, morte e ressurreição de Cristo.",
        ],
      },
    ],
  },
];

export const padraoData = [
  "9.000 a 10.000 pontos = 5 estrelas",
  "7.000 a 8.999 pontos = 4 estrelas",
  "5.000 a 6.999 pontos = 3 estrelas",
  "0 a 4.999 pontos = Participação",
];

export const premiacoesData = {
  intro: "Cada clube poderá participar de três premiações diferentes:",
  padraoAnual: [
    "*Padrão 5 estrelas",
    "*Padrão 4 estrelas",
    "*Padrão 3 estrelas",
    "*Padrão Participação",
  ],
  importante: "IMPORTANTE: Troféu Integrado. O troféu trará os símbolos dos principais eventos do ano e nele terá a tarja com o nome do clube e o padrão atingido em 2026. Este troféu é opcional e pode ser significativo para a galeria do Clube.",
  inscricao: "DATA DA INSCRIÇÃO: 22 A 24 DE SETEMBRO. VALOR R$ 90,00",
  excelencia: "Seu clube poderá atingir o padrão de EXCELÊNCIA em áreas específicas. São 6 áreas a serem pontuadas: Organização do Clube; Classes e Desenvolvimento; Sistema de Unidade; Evangelismo; Eventos; Atividades Sociais e Familiares. O clube que cumprir 100% dos requisitos de cada uma das áreas, receberá um CERTIFICADO DE EXCELÊNCIA.",
  oscar: [
    "O clube que levar mais pessoas ao batismo - desbravadores e familiares.",
    "O clube que mais investir em classes do ano.",
    "O clube que mais investir líderes.",
    "O clube que mais investir em classes não realizadas anteriormente;",
    "A secretaria mais organizada;",
    "O clube mais bem uniformizado.",
  ],
  eventosRegionais: [
    "*Curso de Conselheiros",
    "*Curso de Capitães e Secretários",
    "*Pregador Mirim",
    "*Desbravadores em Louvor",
    "*Jornada Clube do Livro",
    "* 2 eventos regionais especiais",
  ],
  relatorios: [
    "RELATÓRIO TRIMESTRAL OU SEMESTRAL",
    "- 30/06",
    "- 16/11",
  ],
  relatorioObs: "ATENÇÃO: Os relatórios devem ser preenchidos dentro do prazo. Se o clube necessitar de extensão de prazo, haverá redução percentual para os requisitos daquele relatório.",
};
