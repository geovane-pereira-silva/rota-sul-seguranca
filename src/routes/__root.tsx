import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const SITE_URL = "https://rota-sul-seguranca.lovable.app";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Rota Sul Segurança",
  description:
    "Central de monitoramento 24h, portaria remota e CFTV com IA em Poços de Caldas - MG.",
  url: SITE_URL,
  telephone: "+55-0800-000-0000",
  image: OG_IMAGE,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Poços de Caldas",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  areaServed: "Poços de Caldas e região - MG",
  openingHours: "Mo-Su 00:00-23:59",
  taxID: "00.000.000/0001-00",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como reduzir o passivo trabalhista em condomínios com portaria remota?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A portaria remota substitui o porteiro presencial por uma central de monitoramento 24h. Você elimina folha de pagamento, encargos, férias, 13º e riscos trabalhistas — pagando apenas uma mensalidade fixa pelo serviço terceirizado.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto custa terceirizar o monitoramento de um condomínio ou empresa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O investimento varia conforme o tamanho do imóvel, número de câmeras e nível de resposta contratado. Em média, condomínios economizam de 30% a 60% em relação a uma portaria própria. Enviamos um orçamento comparativo em até 24h.",
      },
    },
    {
      "@type": "Question",
      name: "Portaria remota é mais segura que porteiro presencial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Na portaria remota, quem opera o acesso está protegido em uma central blindada, com câmeras, IA e protocolo de resposta imediata. Isso elimina o risco de coação ao porteiro e adiciona uma frota tática que se desloca ao local em minutos.",
      },
    },
    {
      "@type": "Question",
      name: "Vocês atendem empresas, obras e comércios, ou só condomínios residenciais?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atendemos condomínios residenciais e comerciais, empresas, indústrias, obras, gastronomia e propriedades rurais em Poços de Caldas e região. Cada operação é dimensionada sob medida.",
      },
    },
    {
      "@type": "Question",
      name: "Em quanto tempo a central responde a um alarme disparado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nosso tempo médio de recepção e validação do alerta é de 8 segundos. Após a confirmação pelas câmeras, a viatura tática mais próxima é acionada e, quando necessário, a Polícia Militar é comunicada em paralelo.",
      },
    },
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Rota Sul Segurança | Terceirização de Monitoramento 24h" },
      {
        name: "description",
        content:
          "Central de monitoramento 24h com IA, portaria remota e CFTV em Poços de Caldas - MG. Reduza custos e passivos trabalhistas terceirizando sua segurança.",
      },
      { name: "author", content: "Rota Sul Segurança" },
      { property: "og:title", content: "Rota Sul Segurança | Monitoramento 24h com IA" },
      {
        property: "og:description",
        content:
          "Terceirize sua central de monitoramento com tecnologia de ponta, portaria remota e resposta imediata 24/7 em Poços de Caldas - MG.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:site_name", content: "Rota Sul Segurança" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Rota Sul Segurança | Monitoramento 24h com IA" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJsonLd),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
