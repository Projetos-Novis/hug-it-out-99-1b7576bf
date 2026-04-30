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
      { date: "15 a 17", title: "Inscrição CTBD e CTDA (Tesouraria e Capelania)" },
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
      { date: "30", title: "1ª data de relatório do ranking - 30/06" },
    ],
  },
  {
    month: "Julho",
    events: [{ date: "7 a 9", title: "Inscrição III Campori de Líderes de Desbravadores e Aventureiros - APV" }],
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
    events: [{ date: "09 a 12", title: "III Campori de Líderes de Desbravadores e Aventureiros - APV" }],
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
  id?: string;
  name: string;
  points: string | number;
  detail?: string[];
  verse?: string;
}

export interface PontuacaoCategory {
  id: string;
  title: string;
  verse?: string;
  items: PontuacaoItem[];
}

export const pontuacaoData: PontuacaoCategory[] = [
  {
    id: "organizacao",
    title: "1. Organização do Clube",
    verse: "Ensina-nos a contar os nossos dias para que o nosso coração alcance sabedoria. Salmo 90:12",
    items: [
      { name: "1A - Atualização do Cadastro no SGC - 19/03/2026", points: 400 },
      { name: "1B - Seguro Anual Atualizado até 19/03/2026", points: 400 },
      { name: "1C - Secretaria do Clube Organizada (pasta, ficha médica, autorizações). Entrega da Pasta na APV até dia 15/03/26", points: 400 },
      { name: "1D - Planejamento anual do Clube aprovado pela comissão da igreja até 19/03/2026", points: 300 },
      { name: "1E - Planejamento financeiro do Clube aprovado pela comissão da igreja até 19/03/2026", points: 300 },
      { name: "1F - Antecedentes Criminais", points: 200 },
    ],
  },
  {
    id: "classes",
    title: "2. Classes - Desenvolvimento",
    verse: "Jesus ia crescendo em sabedoria, estatura e graça diante de Deus e dos homens. Lucas 2:52",
    items: [
      {
        name: "2A - Classes Regulares e Agrupadas. (em 4 etapas abaixo)",
        points: 800,
        detail: [
          "Etapa 01: Ter um planejamento detalhado para cumprimento de requisito de Classes do ano: 200 pts",
          "Etapa 02: Ter uma lista dos desbravadores com as seguintes informações: Qual classe cada um deverá realizar no decorrer de 2026 e quais classes não realizadas anteriormente ainda lhe faltam. (Apresentar ao regional) Anexo 4: 100 pts",
          "Etapa 03: Ter um planejamento detalhado para cumprimento de requisito de Classes anteriormente não realizadas: 100 pts",
          "Etapa 04: Ter de 90% a 100% dos Desbravadores Investidos nas Classes do ano: 400 pts (Ou de acordo com a porcentagem abaixo: 75% = 300 pts | 50% = 200 pts | Abaixo de 50% não pontua)",
          "Ponto Bônus - Vamos dar 100 pontos para o clube que consiga investir 10% dos desbravadores em classes anteriormente não realizada: 100 pts",
        ],
      },
      {
        id: "lideranca",
        name: "2B - Classe de Líder, Master e Líder Master Avançado (APV)",
        points: 200,
        detail: [
          "100% da Diretoria Fazendo o Cartão (L, LM ou LMA): 200 pts",
          "75% da Diretoria Fazendo o Cartão (L, LM ou LMA): 150 pts",
          "50% da diretoria Fazendo o Cartão (L, LM ou LMA): 100 pts",
        ],
      },
      {
        id: "agrupadas-16",
        name: "2C - Classe Agrupadas 16 anos acima",
        points: 400,
        detail: [
          "100% dos que precisam, fazendo o Cartão: 400 pts",
          "75% dos que precisam, fazendo o Cartão: 300 pts",
          "50% dos que precisam, fazendo o Cartão: 200 pts",
        ],
      },
    ],
  },
  {
    id: "unidades",
    title: "3. Sistema de Unidades - Discipulado",
    verse: "Portanto, vão e façam discípulos de todas as nações, batizando-os em nome do Pai e do Filho e do Espírito Santo. Mateus 28:19",
    items: [
      { name: "3A - Treinamento Básico para Diretoria (CTBD) Online", points: 200 },
      { name: "3B - Curso de Capitães (regional)", points: 100 },
      { name: "3C - Curso de Conselheiros (regional)", points: 100 },
      {
        name: "3D - Conselheiro TOP (Avaliação Regional)",
        points: 200,
        detail: [
          "90% a 100% dos Conselheiros realizando o programa: 200 pts",
          "75% dos Conselheiros realizando o programa: 150 pts",
          "50% dos Conselheiros realizando o programa: 100 pts",
        ],
      },
    ],
  },
  {
    id: "evangelismo",
    title: "4. Evangelismo",
    verse: "E disse-lhes: \"Vão pelo mundo todo e preguem o evangelho a todas as pessoas\". Marcos 16:15",
    items: [
      { name: "4A - Sábado da Missão - Impacto Esperança", points: 100 },
      { name: "4B - Semana Santa", points: 400 },
      { name: "4C - Classe Bíblica. (Início em 12/04/2026)", points: 300 },
      { name: "4D - Controle de Desbravadores não batizados", points: 100 },
      { name: "4E - Semana de Evangelismo do Min. Da Mulher", points: 400 },
      { name: "4F - Semana Jovem", points: 400 },
      { name: "4G - Caleb de Lenço (diretoria)", points: 200 },
      { name: "4H - Sábado Quebrando o Silêncio", points: 100 },
      {
        name: "4I - Semana da Primavera",
        points: 1000,
        detail: [
          "Etapa 1: Planejamento (Apresentar ao Regional até Agosto/2026): 200 pts",
          "Etapa 2: Realização da Semana de Oração: 100 pts",
          "Etapa 3: Visitas Missionárias (pelo menos 1 visita para cada desbravador não batizado): 300 pts",
          "Etapa 4: Cerimônia Batismal: 400 pts",
        ],
      },
    ],
  },
  {
    id: "eventos",
    title: "5. Eventos",
    verse: "Agora me está reservada a coroa da justiça, que o Senhor, justo Juiz, me dará naquele dia, e não somente a mim, mas também a todos os que amam a sua vinda. 2 Timóteo 4:8",
    items: [
      { name: "5A - Participação na Convenção Novas Gerações", points: 200 },
      { name: "5B - Pregador Mirim (regional, local)", points: 100 },
      { name: "5C - Desbravadores em Louvor (regional, local)", points: 100 },
      { name: "5D - Jornada Clube do Livro (Regional, APV)", points: 200 },
      { name: "5E - Concurso Bom de Bíblia", points: 200 },
      { name: "5F - III Campori de Líderes", points: 400 },
      { name: "5G - Dia Mundial do Desbravador (Clube local)", points: 200 },
      { name: "5H - Semana do lenço (Clube local)", points: 200 },
      { name: "5I - Desbravador por um dia (Clube local)", points: 200 },
      { name: "5J - Participar dos programas dos Aventureiros da sua igreja", points: 100 },
      { name: "5L - Desbravaday (evento regional)", points: 300 },
    ],
  },
  {
    id: "social",
    title: "6. Atividades Sociais e Familiares",
    verse: "\"Mas, eu e a minha família serviremos ao Senhor\". Josué 24:15",
    items: [
      {
        name: "6A - Clube da Família",
        points: 200,
        detail: [
          "Realizar pelo menos duas Reuniões de Pais no ano: 100 pts",
          "Homenagem Dia dos Pais: 150 pts",
          "Homenagem Dia das Mães: 100 pts",
        ],
      },
      { name: "6B - SEMPRE DESBRAVADOR", points: 200 },
      { name: "6C - Visitação da diretoria aos membros do clube", points: 100 },
      { name: "6D - Projeto Especial do Ano - Nisto Cremos", points: 300 },
    ],
  },
];

export const padraoPontuacao = [
  { faixa: "9.000 a 10.000 pontos", estrelas: 5 },
  { faixa: "7.000 a 8.999 pontos", estrelas: 4 },
  { faixa: "5.000 a 6.999 pontos", estrelas: 3 },
  { faixa: "0 a 4.999 pontos", estrelas: 0, label: "Participação" },
];
