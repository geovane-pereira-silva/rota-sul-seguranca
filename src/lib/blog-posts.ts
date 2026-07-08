export type BlogPost = {
  slug: string;
  cat: string;
  titulo: string;
  resumo: string;
  img: string;
  conteudo: { heading?: string; paragrafo: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "sinais-condominio-terceirizar-portaria",
    cat: "Condomínios",
    titulo: "5 sinais de que seu condomínio precisa terceirizar a portaria",
    resumo:
      "Rotatividade alta, passivo trabalhista, brechas no controle de acesso: sinais que apontam para a portaria remota.",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=75",
    conteudo: [
      {
        paragrafo:
          "A conta da portaria presencial não fecha mais para a maioria dos condomínios. Encargos, férias, 13º, afastamentos e rotatividade transformam um serviço essencial em um dos maiores custos do rateio.",
      },
      {
        heading: "1. Custo da folha maior que 40% do rateio",
        paragrafo:
          "Se a folha de portaria consome quase metade da arrecadação, existe margem clara para terceirizar e liberar caixa para reformas, reserva e melhorias reais para os moradores.",
      },
      {
        heading: "2. Turnover constante",
        paragrafo:
          "Trocar de porteiro a cada poucos meses gera brechas de segurança, treinamentos repetidos e desconforto para os moradores. Na portaria remota, a operação é padronizada e auditável.",
      },
      {
        heading: "3. Reclamações de acessos indevidos",
        paragrafo:
          "Entregadores entrando sem verificação, prestadores sem cadastro, visitantes 'liberados por telefone': todos são sintomas de um controle frágil, resolvido por dupla checagem em vídeo.",
      },
      {
        heading: "4. Passivo trabalhista em aberto",
        paragrafo:
          "Ações trabalhistas de ex-porteiros custam caro e demoram anos. A terceirização com contrato PJ elimina esse risco e transfere a responsabilidade para a empresa contratada.",
      },
      {
        heading: "5. Câmeras que ninguém assiste",
        paragrafo:
          "Ter CFTV instalado não é o mesmo que ter monitoramento. Sem uma central 24h olhando em tempo real, as imagens só servem depois do prejuízo — quando já não há mais o que evitar.",
      },
    ],
  },
  {
    slug: "ia-reduz-falsos-positivos-alarmes",
    cat: "Tecnologia",
    titulo: "Como a IA reduz falsos positivos em alarmes residenciais",
    resumo:
      "Vento, chuva, animais e insetos disparam a maior parte dos alarmes. A IA muda esse jogo.",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=75",
    conteudo: [
      {
        paragrafo:
          "Um alarme que dispara por qualquer motivo perde credibilidade. E um alarme sem credibilidade cansa o operador, cansa o cliente e, no pior dia, é ignorado quando mais importa.",
      },
      {
        heading: "O que a IA analisa antes de acionar",
        paragrafo:
          "Nossa central usa modelos de visão computacional que diferenciam pessoa, carro, animal e vegetação em movimento. Só chega ao operador o que realmente merece atenção humana.",
      },
      {
        heading: "Resultado prático",
        paragrafo:
          "Clientes que migraram para o sistema com IA reportam queda de mais de 80% em disparos indevidos — e uma resposta muito mais rápida quando o alerta é real.",
      },
    ],
  },
  {
    slug: "terceirizacao-vs-seguranca-propria-custos",
    cat: "Gestão",
    titulo: "Terceirização x segurança própria: comparativo completo de custos",
    resumo:
      "Salário é só a ponta do iceberg. Veja tudo que entra no custo real da segurança presencial.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=75",
    conteudo: [
      {
        paragrafo:
          "Muita gente compara o salário do porteiro com a mensalidade da portaria remota — e é aí que a conta engana. O custo real da segurança própria envolve MUITO mais do que aparece no holerite.",
      },
      {
        heading: "O que entra na conta que ninguém faz",
        paragrafo:
          "FGTS, INSS patronal, férias, 13º, adicional noturno, insalubridade, vale-transporte, uniformes, treinamento, cobertura de folgas e afastamentos. Somado, o custo mensal real fica entre 1,8 e 2,3 vezes o salário nominal.",
      },
      {
        heading: "E o passivo trabalhista?",
        paragrafo:
          "Cada demissão sem acordo pode gerar ação trabalhista de anos. Na terceirização, esse risco sai da sua administração e passa para a empresa contratada.",
      },
    ],
  },
  {
    slug: "contrato-monitoramento-seguradora",
    cat: "Seguros",
    titulo: "Contrato de monitoramento: o detalhe que a seguradora exige (e ninguém te contou)",
    resumo:
      "Sua apólice pode ser negada se o monitoramento não cumprir requisitos mínimos. Veja o que a seguradora olha.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=75",
    conteudo: [
      {
        paragrafo:
          "Ter contrato de monitoramento vira exigência cada vez mais comum das seguradoras para imóveis comerciais, industriais e residenciais de alto valor. Mas nem todo contrato é aceito.",
      },
      {
        heading: "O que a seguradora costuma exigir",
        paragrafo:
          "Central certificada (ABESE), atendimento humano 24h, log auditável de eventos, tempo de resposta comprovado e resposta tática coordenada com a Polícia Militar. Contratos sem esses itens podem ser recusados no momento do sinistro.",
      },
      {
        heading: "O erro mais comum",
        paragrafo:
          "Contratar 'monitoramento' que na prática é só uma câmera na nuvem, sem central humana, sem viatura e sem SLA. No papel parece igual — na hora do sinistro, não é.",
      },
      {
        heading: "Como se proteger",
        paragrafo:
          "Peça sempre à sua seguradora a lista de requisitos para o benefício de desconto ou aceitação da apólice, e confirme por escrito que o contrato de monitoramento atende.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAdjacentPosts(slug: string): { prev?: BlogPost; next?: BlogPost } {
  const i = blogPosts.findIndex((p) => p.slug === slug);
  if (i === -1) return {};
  return {
    prev: i > 0 ? blogPosts[i - 1] : undefined,
    next: i < blogPosts.length - 1 ? blogPosts[i + 1] : undefined,
  };
}

export const WHATSAPP_URL =
  "https://wa.me/5535988749336?text=" +
  encodeURIComponent(
    "Olá! Vim pelo blog da Rota Sul Segurança e gostaria de falar com um especialista."
  );
