import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShieldCheck,
  Camera,
  Radio,
  Clock,
  TrendingDown,
  Wallet,
  Cpu,
  Users,
  CheckCircle2,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Newspaper,
  Building2,
  Handshake,
  Headphones,
} from "lucide-react";


export const Route = createFileRoute("/")({
  component: Landing,
});

function scrollToForm(e: React.MouseEvent) {
  e.preventDefault();
  document.getElementById("orcamento")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground" style={{ fontFamily: "var(--font-sans)" }}>
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-primary/85 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 text-white">
            <span className="grid place-items-center h-9 w-9 rounded-lg bg-accent text-accent-foreground">
              <ShieldCheck className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Rota Sul Tech
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-6 text-sm text-white/80" aria-label="Navegação principal">
            <a href="#top" className="hover:text-white transition">Home</a>
            <a href="#sobre" className="hover:text-white transition">A Rota Sul Tech</a>
            <a href="#servicos" className="hover:text-white transition">Serviços</a>
            <a href="#diferenciais" className="hover:text-white transition">Diferenciais</a>
            <a href="#estrutura" className="hover:text-white transition">Estrutura</a>
            <a href="#parceiros" className="hover:text-white transition">Parceiros</a>
            <a href="#midia" className="hover:text-white transition">Na mídia</a>
            <a href="#blog" className="hover:text-white transition">Blog</a>
            <a href="#orcamento" onClick={scrollToForm} className="hover:text-white transition font-semibold">CONTATO</a>
          </nav>
          <Link
            to="/area-cliente"
            className="hidden lg:inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:brightness-110 transition"
          >
            Área do Cliente <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-primary border-t border-white/10 px-5 py-4 space-y-3 text-white/90">
            {[
              ["#top", "Home"],
              ["#sobre", "A Rota Sul Tech"],
              ["#servicos", "Serviços"],
              ["#diferenciais", "Diferenciais"],
              ["#estrutura", "Estrutura"],
              ["#parceiros", "Parceiros"],
              ["#midia", "Na mídia"],
              ["#blog", "Blog"],
              ["#orcamento", "CONTATO"],
            ].map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block">{label}</a>
            ))}
            <Link
              to="/area-cliente"
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg bg-accent text-accent-foreground text-center py-2 font-semibold"
            >
              Área do Cliente
            </Link>
          </div>
        )}

      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden"
        style={{
          background:
            "radial-gradient(1200px 600px at 80% -10%, oklch(0.35 0.12 260 / 0.6), transparent 60%), linear-gradient(180deg, var(--primary-deep), var(--primary))",
        }}
      >
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/90">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Central operando agora — 24/7
            </span>
            <h1
              className="mt-6 text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Tranquilidade 24h e Tecnologia de Ponta.{" "}
              <span className="text-accent">Terceirize sua Central de Segurança.</span>
            </h1>
            <p className="mt-6 text-lg text-white/75 max-w-2xl">
              Elimine passivos trabalhistas e reduza os custos do seu condomínio ou empresa
              com nossas soluções híbridas de monitoramento e Inteligência Artificial.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#orcamento"
                onClick={scrollToForm}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-semibold text-accent-foreground shadow-lg shadow-black/30 hover:brightness-110 hover:-translate-y-0.5 transition"
              >
                Receber Proposta Personalizada <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-base font-medium text-white hover:bg-white/10 transition"
              >
                Ver soluções
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Certificação ABESE</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> ISO 9001</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Redundância total</div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-6 shadow-2xl">
              <div className="flex items-center justify-between text-white/80 text-xs">
                <span className="flex items-center gap-2"><Radio className="h-4 w-4 text-emerald-400" /> Central ao vivo</span>
                <span>MG · SP · RJ</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { label: "CAM 01 · Rua principal", src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=70" },
                  { label: "CAM 02 · Portaria", src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=70" },
                  { label: "CAM 03 · Residencial", src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&q=70" },
                  { label: "CAM 04 · Garagem", src: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=600&q=70" },
                ].map(({ label, src }, i) => (
                  <div key={i} className="aspect-video rounded-lg bg-slate-950 border border-white/10 relative overflow-hidden">
                    <img
                      src={src}
                      alt={label}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-25"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 3px)",
                      }}
                    />
                    <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/70 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute top-2 left-2 text-[10px] font-medium text-white drop-shadow">{label}</div>
                    <div className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    <div className="absolute bottom-2 left-2 text-[10px] text-white/90 font-mono tracking-wider">● LIVE</div>
                    <div className="absolute bottom-2 right-2 text-[10px] text-emerald-400 font-mono">REC</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between rounded-xl bg-primary-deep/60 border border-white/10 p-4">
                <div>
                  <div className="text-white text-sm font-semibold">Tempo médio de resposta</div>
                  <div className="text-white/60 text-xs">Últimos 30 dias</div>
                </div>
                <div className="text-3xl font-bold text-accent" style={{ fontFamily: "var(--font-display)" }}>
                  8s
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* METRICS BAR */}
      <section className="border-y border-border bg-secondary">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "+500", l: "Clientes Protegidos" },
            { n: "8s", l: "Tempo médio de resposta" },
            { n: "24/7", l: "Atendimento ininterrupto" },
            { n: "99,98%", l: "Uptime da central" },
          ].map((m) => (
            <div key={m.l}>
              <div className="text-3xl md:text-4xl font-bold text-primary" style={{ fontFamily: "var(--font-display)" }}>
                {m.n}
              </div>
              <div className="mt-1 text-xs md:text-sm text-muted-foreground">{m.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE — A Rota Sul Tech */}
      <section id="sobre" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=75"
              alt="Equipe Rota Sul Tech no centro de operações"
              loading="lazy"
              className="rounded-2xl shadow-xl w-full h-[420px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:flex items-center gap-3 rounded-xl bg-white border border-border shadow-lg px-5 py-4">
              <div className="grid place-items-center h-11 w-11 rounded-lg bg-accent text-accent-foreground">
                <Headphones className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-primary">Operadores certificados</div>
                <div className="text-xs text-muted-foreground">Treinamento contínuo · ABESE</div>
              </div>
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">A Rota Sul Tech</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-primary" style={{ fontFamily: "var(--font-display)" }}>
              Segurança feita por gente. Escalada por tecnologia.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Somos uma empresa gaúcha especializada em terceirização de monitoramento eletrônico.
              Nascemos da união entre operadores de segurança experientes e engenheiros de tecnologia
              — com a missão de proteger pessoas, patrimônios e o sono de quem confia na gente.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground">
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-accent shrink-0" /> +10 anos protegendo condomínios e empresas do Sul do Brasil</li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-accent shrink-0" /> Central própria com energia e link redundantes</li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-accent shrink-0" /> Equipe humana 24/7 — nunca só uma máquina do outro lado</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}

      <section id="servicos" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">O que oferecemos</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-primary" style={{ fontFamily: "var(--font-display)" }}>
              Três pilares para uma segurança sem falhas
            </h2>
            <p className="mt-4 text-muted-foreground">
              Integração de pessoas, processos e tecnologia — sob monitoramento humano
              assistido por inteligência artificial.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Portaria Remota & Controle de Acesso",
                desc:
                  "Sistemas integrados, biometria sem contato e leitura de placas. Atendimento humano 24h sem porteiro físico.",
              },
              {
                icon: Radio,
                title: "Monitoramento de Alarmes 24h",
                desc:
                  "Resposta imediata com IA para detecção de anomalias, redução de falsos positivos e acionamento tático.",
              },
              {
                icon: Camera,
                title: "CFTV e Segurança Híbrida",
                desc:
                  "Vigilância eletrônica com análise preditiva via IoT e nuvem, gravação redundante e visão computacional.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative rounded-2xl border border-border bg-card p-7 hover:border-primary/40 hover:-translate-y-1 transition-all shadow-sm hover:shadow-xl"
              >
                <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground grid place-items-center group-hover:bg-accent group-hover:text-accent-foreground transition">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-primary" style={{ fontFamily: "var(--font-display)" }}>
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                <a
                  href="#orcamento"
                  onClick={scrollToForm}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition"
                >
                  Solicitar demonstração <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section id="diferenciais" className="py-20 md:py-28 bg-primary text-white relative overflow-hidden">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">Por que terceirizar</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Menos operação, mais resultado.
            </h2>
            <p className="mt-4 text-white/70 max-w-lg">
              Substitua o custo fixo, imprevisível e regulatório da segurança própria por um
              serviço enxuto, mensurável e escalável.
            </p>
            <a
              href="#orcamento"
              onClick={scrollToForm}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:brightness-110 transition"
            >
              Quero calcular minha economia <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <ul className="space-y-4">
            {[
              {
                icon: TrendingDown,
                title: "Redução de Passivo Trabalhista",
                desc: "Fique livre de encargos, férias, rotatividade e processos com funcionários próprios.",
              },
              {
                icon: Wallet,
                title: "Previsibilidade de Custos",
                desc: "Orçamento fixo mensal, sem horas extras, adicional noturno ou surpresas financeiras.",
              },
              {
                icon: Clock,
                title: "Foco no seu Negócio",
                desc: "Deixe escalas, treinamentos e cobertura de faltas com nossos especialistas.",
              },
              {
                icon: Cpu,
                title: "Acesso à Alta Tecnologia",
                desc: "IA, aplicativos exclusivos e redundância de comunicação sem investir em equipamentos caros.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <li key={title} className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition">
                <div className="shrink-0 h-11 w-11 rounded-lg bg-accent text-accent-foreground grid place-items-center">
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <div>
                  <div className="font-semibold" style={{ fontFamily: "var(--font-display)" }}>{title}</div>
                  <div className="mt-1 text-sm text-white/70">{desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section id="clientes" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">Prova social</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-primary" style={{ fontFamily: "var(--font-display)" }}>
              Quem confia na Rota Sul Tech dorme tranquilo.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Veja como nossos parceiros de diversos setores escalaram seus negócios, eliminaram custos operacionais e garantiram a melhor tecnologia de monitoramento do mercado.
            </p>
          </div>

          {/* Barra de métricas / gatilhos de autoridade */}
          <div className="mt-12 grid md:grid-cols-3 gap-4">
            {[
              { title: "Zero Custo Trabalhista", desc: "Elimine gastos com folha de pagamento, férias e encargos de uma portaria física." },
              { title: "Atendimento 24/7 Ininterrupto", desc: "Monitores de base com tempo de resposta ágil, todos os dias do ano." },
              { title: "Tecnologia de Ponta", desc: "Soluções híbridas com Inteligência Artificial e integração em nuvem." },
            ].map((m) => (
              <div key={m.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="text-sm font-bold tracking-wide text-accent uppercase">{m.title}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Diretoria de Operações",
                role: "Enterplak Produtos Eletrônicos · Indústria",
                text: "Como uma indústria de componentes e placas eletrônicas, a segurança de nossa infraestrutura e do nosso estoque é vital. Terceirizar nossa portaria e o monitoramento reduziu drasticamente nossos custos operacionais e nos livrou de passivos trabalhistas. A tecnologia implantada é de primeira linha. Recomendo muito!",
              },
              {
                name: "Gerência",
                role: "Maria Maria Gastrobar · Gastronomia",
                text: "Nosso movimento no gastrobar é muito forte, principalmente à noite. Ter a certeza de que contamos com uma central 24h monitorando o ambiente nos dá a paz de espírito necessária para focarmos apenas na experiência dos nossos clientes. Atendimento e suporte sempre muito rápidos e eficientes!",
              },
              {
                name: "Gestão de Facilities",
                role: "Ampla Construção · Obras & Empreiteiras",
                text: "A gestão de acesso de prestadores de serviço e o controle de entrada e saída em nossos projetos eram uma dor de cabeça constante. Com as soluções de portaria remota e CFTV, otimizamos todo o fluxo e eliminamos os furos de segurança. Uma parceria que traz tranquilidade e muita economia.",
              },
            ].map((t) => (
              <figure key={t.name} className="rounded-2xl border border-border bg-card p-7 shadow-sm flex flex-col">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground flex-1">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-5 pt-5 border-t border-border">
                  <div className="font-semibold text-primary">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
            {["ISO 9001", "ABESE", "LGPD Compliant", "CFTV Certificado", "Anatel"].map((s) => (
              <div key={s} className="text-xs font-semibold tracking-widest text-muted-foreground uppercase border border-border rounded-md px-4 py-2">
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESTRUTURA */}
      <section id="estrutura" className="py-20 md:py-28 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">Nossa estrutura</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-primary" style={{ fontFamily: "var(--font-display)" }}>
              Uma central pronta para não falhar.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=75", title: "Central 24h", desc: "Operadores presenciais, videowall e protocolo de resposta em segundos." },
              { img: "https://images.unsplash.com/photo-1580983218765-f663bec07b37?w=800&q=75", title: "Frota Tática", desc: "Viaturas próprias com rastreamento em tempo real para atendimento local." },
              { img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=75", title: "Time Técnico", desc: "Engenheiros e técnicos certificados para instalação e manutenção." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-lg transition">
                <img src={c.img} alt={c.title} loading="lazy" className="h-48 w-full object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary">
                    <Building2 className="h-5 w-5" />
                    <h3 className="font-bold" style={{ fontFamily: "var(--font-display)" }}>{c.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARCEIROS */}
      <section id="parceiros" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">Parceiros tecnológicos</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-primary" style={{ fontFamily: "var(--font-display)" }}>
              Trabalhamos com os melhores do mercado.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Integramos equipamentos e plataformas homologadas para garantir performance, escalabilidade e suporte oficial.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Intelbras", "Hikvision", "Motorola", "Bosch", "Positivo", "Axis", "Dahua", "Unifi"].map((p) => (
              <div key={p} className="flex items-center justify-center rounded-xl border border-border bg-card py-8 hover:border-accent/50 hover:shadow-md transition">
                <div className="flex items-center gap-2 text-primary">
                  <Handshake className="h-5 w-5 text-accent" />
                  <span className="font-semibold" style={{ fontFamily: "var(--font-display)" }}>{p}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NA MÍDIA */}
      <section id="midia" className="py-20 md:py-28 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">Na mídia</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-primary" style={{ fontFamily: "var(--font-display)" }}>
              Nosso trabalho é notícia.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { veiculo: "Jornal da Cidade", titulo: "Rota Sul Tech reduz em 38% o custo de portaria em condomínios de Poços de Caldas." },
              { veiculo: "Correio do Povo", titulo: "IA aplicada à segurança: startup gaúcha entra no radar de administradoras." },
              { veiculo: "Portal Sindiconet", titulo: "Terceirização de monitoramento: por que síndicos estão migrando." },
            ].map((n) => (
              <article key={n.veiculo} className="rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition">
                <div className="flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-widest">
                  <Newspaper className="h-4 w-4" /> {n.veiculo}
                </div>
                <h3 className="mt-3 font-semibold text-primary" style={{ fontFamily: "var(--font-display)" }}>{n.titulo}</h3>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition">
                  Ler matéria <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">Blog</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-primary" style={{ fontFamily: "var(--font-display)" }}>
                Conteúdo pra quem leva segurança a sério.
              </h2>
            </div>
            <a href="#" className="text-sm font-semibold text-primary hover:text-accent transition inline-flex items-center gap-1">
              Ver todos os artigos <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=75", cat: "Condomínios", titulo: "5 sinais de que seu condomínio precisa terceirizar a portaria" },
              { img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=75", cat: "Tecnologia", titulo: "Como a IA reduz falsos positivos em alarmes residenciais" },
              { img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=75", cat: "Gestão", titulo: "Terceirização x segurança própria: comparativo completo de custos" },
            ].map((p) => (
              <article key={p.titulo} className="rounded-2xl overflow-hidden border border-border bg-card hover:shadow-lg transition">
                <img src={p.img} alt={p.titulo} loading="lazy" className="h-44 w-full object-cover" />
                <div className="p-6">
                  <div className="text-xs font-semibold text-accent uppercase tracking-widest">{p.cat}</div>
                  <h3 className="mt-2 font-semibold text-primary" style={{ fontFamily: "var(--font-display)" }}>{p.titulo}</h3>
                  <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition">
                    Ler artigo <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULÁRIO */}

      <section
        id="orcamento"
        className="py-20 md:py-28 relative"
        style={{
          background:
            "linear-gradient(180deg, var(--primary), var(--primary-deep))",
        }}
      >
        <div className="max-w-5xl mx-auto px-5 lg:px-8 grid md:grid-cols-2 gap-10 items-center text-white">
          <div>
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">Orçamento gratuito</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Receba uma proposta sob medida em até 24h.
            </h2>
            <p className="mt-4 text-white/75">
              Nosso especialista analisa seu perfil, dimensiona a operação e envia uma
              proposta comparativa com o cenário atual da sua segurança.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-accent shrink-0" /> Diagnóstico sem compromisso</li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-accent shrink-0" /> Resposta em até 24 horas úteis</li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-accent shrink-0" /> Estudo comparativo de economia</li>
            </ul>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                setSubmitted(true);
              }, 1200);
            }}
            className="rounded-2xl bg-white p-7 md:p-8 shadow-2xl text-foreground"
          >
            {submitted ? (
              <div className="text-center py-8">
                <div className="mx-auto h-14 w-14 rounded-full bg-emerald-100 grid place-items-center">
                  <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-primary" style={{ fontFamily: "var(--font-display)" }}>
                  Solicitação recebida!
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Um especialista entrará em contato em até 24h úteis.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-primary" style={{ fontFamily: "var(--font-display)" }}>
                  Pronto para otimizar sua segurança?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">Leva menos de 30 segundos.</p>

                <div className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="f-nome" className="text-sm font-medium text-foreground">Nome</label>
                    <input
                      id="f-nome"
                      required
                      type="text"
                      className="mt-1 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="f-contato" className="text-sm font-medium text-foreground">E-mail corporativo ou Telefone</label>
                    <input
                      id="f-contato"
                      required
                      type="text"
                      className="mt-1 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="voce@empresa.com.br ou (51) 90000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="f-perfil" className="text-sm font-medium text-foreground">Perfil</label>
                    <select
                      id="f-perfil"
                      required
                      className="mt-1 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      defaultValue=""
                    >
                      <option value="" disabled>Selecione uma opção</option>
                      <option>Sou Síndico / Administradora</option>
                      <option>Sou Empresário</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-bold text-accent-foreground hover:brightness-110 transition disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 rounded-full border-2 border-accent-foreground/40 border-t-accent-foreground animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>Solicitar Orçamento Gratuito <ArrowRight className="h-4 w-4" /></>
                  )}
                </button>
                <p className="mt-3 text-[11px] text-center text-muted-foreground">
                  Seus dados estão protegidos conforme a LGPD.
                </p>
              </>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary-deep text-white/70 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-white">
              <span className="grid place-items-center h-9 w-9 rounded-lg bg-accent text-accent-foreground">
                <ShieldCheck className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="font-semibold" style={{ fontFamily: "var(--font-display)" }}>Rota Sul Tech</span>
            </div>
            <p className="mt-4 text-sm max-w-md">
              Central de monitoramento 24h com tecnologia proprietária, IA e atendimento
              humano especializado para condomínios e empresas.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm">Contato</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> 0800 000 0000</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> contato@rotasultech.com.br</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Porto Alegre · RS</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition">LGPD</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 py-5 text-xs flex flex-col md:flex-row justify-between gap-2">
            <span>© 2026 Rota Sul Tech. Todos os direitos reservados.</span>
            <span>CNPJ 00.000.000/0001-00</span>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20quero%20um%20or%C3%A7amento%20de%20monitoramento."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-2xl hover:scale-110 transition"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden="true">
          <path d="M19.11 17.24c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.33-.79-.71-1.33-1.58-1.49-1.85-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.66 1.12 2.84.14.18 1.94 2.96 4.7 4.15.66.28 1.17.45 1.57.58.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.02 3C9.39 3 4 8.39 4 15.02c0 2.34.68 4.52 1.85 6.36L4 29l7.83-2.05a12 12 0 0 0 4.19.76c6.63 0 12.02-5.39 12.02-12.02S22.65 3 16.02 3zm0 21.86a9.83 9.83 0 0 1-5.02-1.37l-.36-.21-4.65 1.22 1.24-4.53-.23-.37a9.83 9.83 0 0 1-1.5-5.24c0-5.44 4.43-9.86 9.87-9.86 5.44 0 9.86 4.42 9.86 9.86 0 5.44-4.42 9.86-9.86 9.86z" />
        </svg>
      </a>
    </div>
  );
}
