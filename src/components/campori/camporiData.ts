import {
  Heart, Shield, Users, UserCheck, ShieldCheck, ClipboardList,
  Bus, AlertTriangle, MapPin, IdCard, Calendar, Star,
  Trophy, Tent, UtensilsCrossed, HeartPulse, CheckSquare,
  Compass, BookOpen, type LucideIcon,
} from "lucide-react";

export interface Section {
  id: string;
  title: string;
  icon: LucideIcon;
}

export const sections: Section[] = [
  { id: "hero", title: "De Líder para Líderes", icon: Heart },
  { id: "filosofia", title: "Filosofia & Objetivo", icon: BookOpen },
  { id: "info-gerais", title: "Informações Gerais", icon: Compass },
  { id: "onibus", title: "Contratação de Ônibus", icon: Bus },
  { id: "codigo-disciplinar", title: "Código Disciplinar", icon: Shield },
  { id: "participacao-regiao", title: "Como a Região Participa", icon: Users },
  { id: "participacao-lider", title: "Como o Líder Participa", icon: UserCheck },
  { id: "seguro", title: "Seguro Anual ARM", icon: ShieldCheck },
  { id: "inscricoes", title: "Inscrições", icon: ClipboardList },
  { id: "inscricoes-especiais", title: "Inscrições Especiais", icon: Star },
  { id: "daypass", title: "Day Pass – Visitantes", icon: IdCard },
  { id: "entrada-identificacao", title: "Entrada e Identificação", icon: MapPin },
  { id: "programacao", title: "Programação", icon: Calendar },
  { id: "responsabilidades", title: "Responsabilidades da Região", icon: AlertTriangle },
  { id: "o-que-levar", title: "O Que Levar / Não Levar", icon: CheckSquare },
  { id: "pontuacao", title: "Pontuação e Classificação", icon: Trophy },
  { id: "pre-requisitos", title: "Pré-Requisitos (Etapa I)", icon: BookOpen },
  { id: "requisitos-campori", title: "Requisitos no Campori (Etapa II)", icon: Tent },
  { id: "cozinha", title: "Cozinha", icon: UtensilsCrossed },
  { id: "saude", title: "Saúde", icon: HeartPulse },
  { id: "outras-avaliacoes", title: "Outras Avaliações", icon: Star },
  { id: "checklist-datas", title: "Check-list de Datas", icon: CheckSquare },
];
