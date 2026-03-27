export interface CalendarEvent {
  date: string;
  title: string;
}

export interface CalendarMonth {
  month: string;
  events: CalendarEvent[];
}

export const calendarData: CalendarMonth[] = [
  {
    month: "Janeiro",
    events: [
      { date: "16 a 18", title: "ECOR MDA" },
      { date: "12 a 23", title: "Inscrição para Convenção" },
    ],
  },
  {
    month: "Fevereiro",
    events: [
      { date: "01", title: "Convenção Novas Gerações SJC" },
      { date: "08", title: "Convenção Novas Gerações GRU" },
      { date: "15 a 17", title: "Inscrição CTBD e CTDA" },
      { date: "22", title: "Convenção Novas Gerações MOGI" },
    ],
  },
  {
    month: "Março",
    events: [
      { date: "15", title: "CTBD e CTDA" },
      { date: "15", title: "Inspeção de pastas do clube - DBV" },
    ],
  },
  {
    month: "Abril",
    events: [{ date: "12", title: "Início das Classes Bíblicas" }],
  },
  {
    month: "Maio",
    events: [
      { date: "20 e 21", title: "Inscrição 1º e 2º módulo do Curso de Líderes DBV" },
      { date: "20 e 21", title: "Inscrição Pregador Mirim" },
      { date: "30", title: "1ª data de Relatório MDA" },
    ],
  },
  {
    month: "Junho",
    events: [
      { date: "19 e 20", title: "1º e 2º módulo do Curso de Líderes DBV" },
      { date: "23 a 25", title: "Inscrição do JCL e QLA MDA" },
      { date: "30", title: "1ª data de relatório do ranking" },
    ],
  },
  {
    month: "Julho",
    events: [{ date: "7 a 9", title: "Inscrição III Campori de Líderes APV" }],
  },
  {
    month: "Agosto",
    events: [
      { date: "02", title: "Reunião de Diretores de Clube - Online" },
      { date: "16", title: "JCL e QLA Fase 1" },
    ],
  },
  {
    month: "Setembro",
    events: [
      { date: "07", title: "Desfile 7 de Setembro" },
      { date: "13 a 18", title: "Semana do Lenço de Desbravadores" },
      { date: "19", title: "Dia Mundial dos Desbravadores" },
      { date: "20", title: "JCL e QLA Fase 2" },
      { date: "22 a 24", title: "Inscrição Troféu Unificado Padrão do Ano" },
    ],
  },
  {
    month: "Outubro",
    events: [{ date: "09 a 12", title: "III Campori de Líderes APV" }],
  },
  {
    month: "Novembro",
    events: [{ date: "15", title: "JCL e QLA Semifinal" }],
  },
  {
    month: "Dezembro",
    events: [{ date: "06", title: "Celebração / Oscar MDA" }],
  },
];

export interface PontuacaoItem {
  name: string;
  points: number;
  detail?: string[];
}

export interface PontuacaoCategory {
  id: string;
  title: string;
  items: PontuacaoItem[];
  extra?: string;
}

export const pontuacaoData: PontuacaoCategory[] = [
  {
    id: "organizacao",
    title: "Organização do Clube",
    items: [
      { name: "Atualização do cadastro no SGC até 19/03/2026", points: 400 },
      { name: "Seguro anual atualizado até 19/03/2026", points: 400 },
      { name: "Secretaria do clube organizada e entrega da pasta na APV até 15/03/2026", points: 400 },
      { name: "Planejamento anual do clube aprovado pela comissão da igreja até 19/03/2026", points: 300 },
      { name: "Planejamento financeiro do clube aprovado pela comissão da igreja até 19/03/2026", points: 300 },
      { name: "Antecedentes criminais", points: 200 },
    ],
  },
  {
    id: "classes",
    title: "Classes e Desenvolvimento",
    items: [
      {
        name: "Classes Regulares e Avançadas",
        points: 800,
        detail: [
          "Etapa 1 – Planejamento detalhado para cumprimento de requisito das classes do ano: 200 pts",
          "Etapa 2 – Lista dos desbravadores com classes do ano e classes anteriores pendentes: 100 pts",
          "Etapa 3 – Planejamento detalhado para cumprimento de requisito das classes anteriormente não realizadas: 100 pts",
          "Etapa 4 – Percentual investido nas classes do ano: 90-100% = 400 pts | 75% = 300 pts | 50% = 200 pts | abaixo de 50% = sem pontuação",
          "Ponto bônus por investir 10% dos desbravadores em classes anteriormente não realizadas: 100 pts",
        ],
      },
      { name: "Classe de Líder, Master e Líder Master Avançado", points: 200 },
      { name: "Classes Agrupadas 16 anos acima", points: 400 },
    ],
  },
  {
    id: "unidades",
    title: "Sistema de Unidades / Discipulado",
    items: [
      { name: "Treinamento Básico para Diretoria CTBD Online", points: 200 },
      { name: "Curso de Capitães regional", points: 100 },
      { name: "Curso de Conselheiros regional", points: 100 },
      {
        name: "Conselheiro TOP, avaliação regional",
        points: 200,
        detail: [
          "90% a 100%: 200 pts",
          "75%: 150 pts",
          "50%: 100 pts",
        ],
      },
    ],
  },
  {
    id: "evangelismo",
    title: "Evangelismo",
    items: [
      { name: "Sábado da Missão Impacto Esperança", points: 100 },
      { name: "Semana Santa", points: 400 },
      { name: "Classe Bíblica", points: 300 },
      { name: "Controle de Desbravadores não batizados", points: 100 },
      { name: "Semana de Evangelismo do Ministério da Mulher", points: 400 },
      { name: "Semana Jovem", points: 400 },
      { name: "Caleb de Lenço", points: 200 },
      { name: "Sábado Quebrando o Silêncio", points: 100 },
      {
        name: "Semana da Primavera",
        points: 1000,
        detail: [
          "Planejamento: 200 pts",
          "Participação: 100 pts",
          "Visita aos desbravadores não batizados: 300 pts",
          "Cerimônia batismal: 400 pts",
          "Obs: clubes com batismo de 5+ desbravadores em setembro recebem o troféu Arthur Spalding",
        ],
      },
    ],
  },
  {
    id: "eventos",
    title: "Eventos",
    items: [
      { name: "Participação na Convenção Novas Gerações", points: 300 },
      { name: "Pregador Mirim", points: 100 },
      { name: "Desbravadores em Louvor", points: 100 },
      { name: "Jornada Clube do Livro", points: 200 },
      { name: "Concurso Bom de Bíblia", points: 200 },
      { name: "III Campori de Líderes", points: 400 },
      { name: "Dia Mundial do Desbravador", points: 200 },
      { name: "Semana do Lenço", points: 200 },
      { name: "Desbravador por um dia", points: 200 },
      { name: "Participar dos programas dos Aventureiros da igreja", points: 100 },
      { name: "Desbravaday", points: 300 },
    ],
  },
  {
    id: "social",
    title: "Atividades Sociais e Familiares",
    items: [
      { name: "Clube da Família", points: 200 },
      { name: "Sempre Desbravador", points: 200 },
      { name: "Visitação da diretoria aos membros do clube", points: 100 },
      { name: "Projeto Especial do Ano Nisto Cremos", points: 300 },
    ],
  },
];

export interface EventoDetalhado {
  id: string;
  title: string;
  details: { label: string; value: string }[];
  extra?: string[];
}

export const eventosDetalhados: EventoDetalhado[] = [
  {
    id: "pregador-mirim",
    title: "Pregador Mirim",
    details: [
      { label: "Tema", value: "Sempre Desbravador" },
      { label: "Formato", value: "Regional, distrito ou igreja local" },
      { label: "Categorias", value: "10 a 12 anos e 13 a 15 anos" },
      { label: "Inscrição", value: "20 e 21 de maio" },
      { label: "Valor", value: "R$ 7,00 por participante" },
    ],
    extra: [
      "Uniforme completo",
      "Tempo de 5 a 8 minutos",
      "Uso de texto bíblico",
      "Boa dicção e ilustração",
      "Coerência com o tema",
      "Conclusão com apelo e postura",
    ],
  },
  {
    id: "louvor",
    title: "Desbravadores em Louvor",
    details: [
      { label: "Tema", value: "Sempre Desbravador" },
      { label: "Formato", value: "Regional, distrito ou igreja local" },
      { label: "Inscrição", value: "17 a 19 de maio" },
      { label: "Valor", value: "R$ 7,00 por participante" },
    ],
    extra: [
      "Clube uniformizado",
      "Música conhecida ou composição própria",
      "Uso de playback ou instrumentos",
      "Letra com princípios cristãos",
    ],
  },
  {
    id: "jcl",
    title: "Jornada Clube do Livro",
    details: [
      { label: "Inscrição", value: "23 a 25 de junho" },
      { label: "Fase 1 – Regional classificatória", value: "16 de agosto" },
      { label: "Fase 2 – Regional classificatória", value: "20 de setembro" },
      { label: "Semifinal", value: "15 de novembro" },
      { label: "Final", value: "06 de dezembro" },
    ],
    extra: ["Livros por faixa etária conforme agenda oficial"],
  },
  {
    id: "bom-de-biblia",
    title: "Concurso Bom de Bíblia",
    details: [
      { label: "Formato", value: "Participação ativa no concurso promovido pela UCB/APV" },
      { label: "Pontuação", value: "50 pontos por etapa em que o clube estiver participando" },
    ],
  },
  {
    id: "campori-lideres",
    title: "III Campori de Líderes",
    details: [
      { label: "Categoria", value: "Líderes investidos e aspirantes a líder" },
      { label: "Inscrição", value: "7 a 9 de julho" },
      { label: "Valor", value: "R$ 270,00" },
      { label: "Data do evento", value: "9 a 12 de outubro" },
    ],
  },
  {
    id: "desbravaday",
    title: "Desbravaday",
    details: [
      { label: "Pontuação", value: "300 pts" },
      { label: "09/08", value: "São José dos Campos / Lorena" },
      { label: "16/08", value: "Litoral" },
      { label: "30/08", value: "Guarulhos / Mogi" },
    ],
    extra: [
      "Culto de abertura e apelo para batismo da primavera",
      "Exposição de atividades e feira de desbravadores",
      "Feira de especialidades e gincanas",
      "Dinâmicas recreativas e festival de ordem unida",
      "Cassori e outras ações conforme padrão MDA",
    ],
  },
];

export const nistoCremosTopics = [
  "Batismo",
  "Ceia do Senhor",
  "Conduta Cristã",
  "Crescimento em Cristo",
  "Criação do Mundo",
  "Deus Espírito Santo",
  "Eu Irei",
  "Deus Pai",
  "Dom de Profecia",
  "Dons e Ministérios Espirituais",
  "Escrituras Sagradas",
  "Experiência da Salvação",
  "Grande Conflito",
  "Igreja",
  "Lei de Deus",
  "Matrimônio e Família",
  "Milênio e Fim do Pecado",
  "Ministério de Cristo no Santuário Celestial",
  "Mordomia",
  "Morte e Ressurreição",
  "Natureza da Humanidade",
  "Nova Terra",
  "Remanescente e sua Missão",
  "Sábado",
  "Segunda Vinda de Cristo",
  "Trindade",
  "Unidade no Corpo de Cristo",
  "Vida, Morte e Ressurreição de Cristo",
];

export const padraoPontuacao = [
  { faixa: "9.000 a 10.000 pontos", estrelas: 5 },
  { faixa: "7.000 a 8.999 pontos", estrelas: 4 },
  { faixa: "5.000 a 6.999 pontos", estrelas: 3 },
  { faixa: "0 a 4.999 pontos", estrelas: 0 },
];

export const oscarCategories = [
  "Clube que levar mais pessoas ao batismo",
  "Clube que mais investir em atividades familiares",
  "Clube que mais investir em classes do ano",
  "Clube que mais investir em líderes",
  "Clube que mais investir em classes não realizadas anteriormente",
  "Secretaria mais organizada",
  "Clube mais bem uniformizado",
];

export const excelenciaAreas = [
  "Organização do Clube",
  "Classes e Desenvolvimento",
  "Sistema de Unidades",
  "Evangelismo",
  "Eventos",
  "Atividades Sociais e Familiares",
];
