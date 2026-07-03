import { createFileRoute } from "@tanstack/react-router";
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
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#servicos" className="hover:text-white transition">Serviços</a>
            <a href="#beneficios" className="hover:text-white transition">Benefícios</a>
            <a href="#clientes" className="hover:text-white transition">Clientes</a>
            <a href="#orcamento" className="hover:text-white transition">Contato</a>
          </nav>
          <a
            href="#orcamento"
            onClick={scrollToForm}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:brightness-110 transition"
          >
            Falar com especialista <ArrowRight className="h-4 w-4" />
          </a>
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-primary border-t border-white/10 px-5 py-4 space-y-3 text-white/90">
            <a href="#servicos" onClick={() => setMenuOpen(false)} className="block">Serviços</a>
            <a href="#beneficios" onClick={() => setMenuOpen(false)} className="block">Benefícios</a>
            <a href="#clientes" onClick={() => setMenuOpen(false)} className="block">Clientes</a>
            <a
              href="#orcamento"
              onClick={(e) => { setMenuOpen(false); scrollToForm(e); }}
              className="block rounded-lg bg-accent text-accent-foreground text-center py-2 font-semibold"
            >
              Falar com especialista
            </a>
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
              Tranquilidade 24h e Tecnologia de Ponta:{" "}
              <span className="text-accent">Terceirize sua Central de Monitoramento.</span>
            </h1>
            <p className="mt-6 text-lg text-white/75 max-w-2xl">
              Reduza custos operacionais e passivos trabalhistas com soluções híbridas de
              segurança, IA e monitoramento em tempo real.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#orcamento"
                onClick={scrollToForm}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-semibold text-accent-foreground shadow-lg shadow-black/30 hover:brightness-110 hover:-translate-y-0.5 transition"
              >
                Receber 5 Propostas <ArrowRight className="h-5 w-5" />
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
                <span>SP · RS · PR</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {["CAM 01 · Portaria", "CAM 02 · Garagem", "CAM 03 · Playground", "CAM 04 · Perímetro"].map((label, i) => (
                  <div key={i} className="aspect-video rounded-lg bg-gradient-to-br from-slate-800 to-slate-950 border border-white/10 relative overflow-hidden">
                    <div className="absolute top-2 left-2 text-[10px] font-medium text-white/70">{label}</div>
                    <div className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 animate-pulse" />
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
            { n: "+320", l: "Condomínios atendidos" },
            { n: "8s", l: "Tempo médio de resposta" },
            { n: "24/7", l: "Monitoramento ininterrupto" },
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
      <section id="beneficios" className="py-20 md:py-28 bg-primary text-white relative overflow-hidden">
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
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">Prova social</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-primary" style={{ fontFamily: "var(--font-display)" }}>
              Quem confia na Rota Sul Tech dorme tranquilo.
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Ricardo M.",
                role: "Síndico · Cond. Villa Toscana",
                text: "Reduzimos 38% do custo de portaria em 4 meses. O tempo de resposta impressiona — atenderam uma tentativa de invasão em segundos.",
              },
              {
                name: "Aline P.",
                role: "Administradora · GP Imóveis",
                text: "Passamos 12 condomínios para a Rota Sul Tech. Zero passivo trabalhista novo e relatórios claros todo mês.",
              },
              {
                name: "Eduardo L.",
                role: "Diretor · Logística Sul",
                text: "A IA deles cortou 90% dos falsos positivos que nos tiravam o sono. Investimento que se pagou no 2º mês.",
              },
            ].map((t) => (
              <figure key={t.name} className="rounded-2xl border border-border bg-card p-7 shadow-sm">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground">
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
              setSubmitted(true);
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
                  Solicite seu orçamento
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">Leva menos de 30 segundos.</p>

                <div className="mt-6 space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground">Nome</label>
                    <input
                      required
                      type="text"
                      className="mt-1 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">E-mail corporativo</label>
                    <input
                      required
                      type="email"
                      className="mt-1 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="voce@empresa.com.br"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Perfil</label>
                    <select
                      required
                      className="mt-1 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      defaultValue=""
                    >
                      <option value="" disabled>Selecione uma opção</option>
                      <option>Condomínio</option>
                      <option>Empresa</option>
                      <option>Residência</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-bold text-accent-foreground hover:brightness-110 transition"
                >
                  Solicitar Orçamento Gratuito <ArrowRight className="h-4 w-4" />
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
            <span>© {new Date().getFullYear()} Rota Sul Tech. Todos os direitos reservados.</span>
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
