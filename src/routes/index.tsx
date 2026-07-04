import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import heroFrota from "@/assets/hero-frota.jpg";
import ligacoesCentral from "@/assets/ligacoes-central.jpg.asset.json";
import relatoriosImg from "@/assets/relatorios.jpg.asset.json";
import appAgente from "@/assets/app-agente.jpg.asset.json";
import appPersonalizado from "@/assets/app-cliente-mockup.png";
import centralOperadores from "@/assets/central-operadores.jpg";
import servicosBg from "@/assets/servicos-bg.jpg";
import estruturaCentral from "@/assets/estrutura-central-24h.jpg";
import estruturaFrota from "@/assets/estrutura-frota-tatica.jpg";
import estruturaTime from "@/assets/estrutura-time-tecnico.jpg";
import centralAlertaPanico from "@/assets/central-alerta-panico.jpg";
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
  PhoneCall,
  BarChart3,
  Lock,
  Unlock,
  Video,
  Bell,
  MoveLeft,
  Signal,
  Wifi,
  BatteryFull,
  Activity,
  AlertTriangle,
  Home,

  LayoutGrid,
  Settings,

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
  const [armado, setArmado] = useState(true);
  const [panicoAberto, setPanicoAberto] = useState(false);
  const [eventos, setEventos] = useState<{ dot: string; label: string; meta: string; time: string }[]>([
    { dot: "bg-red-500", label: "Alarme intrusão", meta: "Setor externo", time: "22:15" },
    { dot: "bg-emerald-400", label: "Armado", meta: "Por João", time: "20:30" },
    { dot: "bg-white/40", label: "Desarmado", meta: "Por Maria", time: "07:45" },
  ]);
  const registrarEvento = (novoArmado: boolean) => {
    if (novoArmado === armado) return;
    setArmado(novoArmado);
    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    setEventos((prev) => [
      novoArmado
        ? { dot: "bg-emerald-400", label: "Armado", meta: "Por você (app)", time }
        : { dot: "bg-white/40", label: "Desarmado", meta: "Por você (app)", time },
      ...prev,
    ].slice(0, 4));
  };


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

      {/* HERO — full-bleed, imagem em destaque com frota de segurança ao fundo */}
      <section
        id="top"
        className="relative min-h-[92vh] flex items-center overflow-hidden"
      >
        {/* Imagem de fundo com a frota */}
        <img
          src={heroFrota}
          alt="Gestor da Rota Sul Tech em base operacional com frota de viaturas de segurança"
          fetchPriority="high"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover object-right"
        />
        {/* Overlays: escurece geral + gradiente forte à esquerda pro texto */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, var(--primary-deep) 0%, color-mix(in oklab, var(--primary-deep) 88%, transparent) 35%, color-mix(in oklab, var(--primary-deep) 45%, transparent) 60%, transparent 90%)",
          }}
        />
        <div aria-hidden className="absolute inset-0 bg-primary-deep/25" />

        {/* Grid decorativo sutil */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* Conteúdo — texto à esquerda */}
        <div className="relative w-full max-w-7xl mx-auto px-5 lg:px-10 pt-28 pb-20 md:pt-32 md:pb-28">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur px-3 py-1 text-[11px] font-semibold tracking-widest uppercase text-white/90">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Central ativa agora — 24/7
            </div>
            <h1
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold leading-[1.02] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Nós cuidamos da{" "}
              <span className="text-accent">segurança do seu patrimônio</span>,
              e você cuida do que realmente importa.
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/80 max-w-xl">
              Há mais de 10 anos em Poços de Caldas, unindo tecnologia,
              monitoramento eletrônico e uma equipe humana 24h para proteger
              famílias, empresas e obras com resposta em segundos.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a
                href="#orcamento"
                onClick={scrollToForm}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-9 py-4 text-sm md:text-base font-bold uppercase tracking-wider text-accent-foreground shadow-lg shadow-accent/30 hover:brightness-110 hover:-translate-y-0.5 transition"
              >
                Quero saber mais
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/5 backdrop-blur px-8 py-4 text-sm md:text-base font-semibold text-white hover:bg-white/15 transition"
              >
                Ver soluções <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/75">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Certificação ABESE</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> +500 clientes protegidos</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Resposta média em 8s</div>
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
              src={centralOperadores}
              alt="Central de monitoramento 24h da Rota Sul Tech com operadores acompanhando câmeras em tempo real"
              loading="lazy"
              width={1600}
              height={1088}
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

      {/* SERVIÇOS — inspirado na referência: fundo escuro, pill + "Nossos serviços" */}
      <section id="servicos" className="relative py-20 md:py-28 bg-primary-deep text-white overflow-hidden">
        {/* Fundo humanizado — operador em videowall */}
        <img
          src={servicosBg}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25 pointer-events-none"
        />
        {/* Gradiente para garantir legibilidade */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in oklab, var(--primary-deep) 92%, transparent) 0%, color-mix(in oklab, var(--primary-deep) 78%, transparent) 50%, color-mix(in oklab, var(--primary-deep) 92%, transparent) 100%)",
          }}
        />
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center rounded-full border border-white/25 px-4 py-1.5 text-[11px] font-semibold tracking-[0.25em] text-white/90 uppercase">
              Conheça as nossas soluções
            </span>
            <h2
              className="mt-5 text-4xl md:text-6xl font-bold tracking-tight leading-[1.02]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Nossos <span className="text-accent">serviços</span>
            </h2>
            <p className="mt-5 text-white/70 text-base md:text-lg">
              Soluções completas em segurança e conservação para garantir proteção, confiança
              e eficiência em todos os ambientes.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {[
              {
                icon: Users,
                title: "Portaria Remota & Controle de Acesso",
                desc:
                  "Profissionais altamente treinados para controle de acesso e recepção em empresas, condomínios e instituições. Cordialidade e vigilância no fluxo de pessoas.",
              },
              {
                icon: Radio,
                title: "Monitoramento 24h",
                desc:
                  "Proteção contínua com sistemas avançados de segurança eletrônica: monitoramento em tempo real, alarmes integrados, rondas motorizadas e resposta rápida.",
              },
              {
                icon: Camera,
                title: "CFTV & Segurança Híbrida",
                desc:
                  "Vigilância eletrônica com IA, gravação redundante em nuvem e visão computacional para detecção antecipada de anomalias.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative rounded-2xl bg-white/[0.04] border border-white/10 p-7 hover:bg-white/[0.07] hover:border-accent/40 transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-white/10 text-accent grid place-items-center group-hover:bg-accent group-hover:text-accent-foreground transition">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-5">
            {[
              {
                icon: ShieldCheck,
                title: "Segurança Particular",
                desc:
                  "Serviço exclusivo e personalizado para proteção individual e patrimonial — na prevenção e redução de riscos como assaltos, furtos e demais ameaças urbanas.",
              },
              {
                icon: Handshake,
                title: "Consultoria & Projetos",
                desc:
                  "Análise de vulnerabilidade, projeto executivo e implantação de infraestrutura de segurança sob medida para o seu negócio.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative rounded-2xl bg-white/[0.04] border border-white/10 p-7 hover:bg-white/[0.07] hover:border-accent/40 transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-white/10 text-accent grid place-items-center group-hover:bg-accent group-hover:text-accent-foreground transition">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BAND AZUL — Descubra por que somos a solução ideal (inspirado na referência) */}
      <section className="py-14 md:py-20 bg-primary-deep">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div
            className="relative overflow-hidden rounded-[2rem] p-8 md:p-14"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.18 250), oklch(0.42 0.20 258))",
            }}
          >
            <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
            <div className="relative text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center rounded-full border border-white/40 px-4 py-1.5 text-[11px] font-semibold tracking-[0.25em] text-white uppercase">
                Conheça as nossas soluções
              </span>
              <h2
                className="mt-5 text-3xl md:text-5xl font-bold text-white leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Descubra por que somos a solução ideal<br className="hidden md:block" />
                {" "}para proteger você e a sua empresa.
              </h2>
            </div>

            <ul className="relative mt-10 grid md:grid-cols-2 gap-3">
              {[
                "Mais de 10 anos de experiência no setor",
                "Equipe altamente treinada e qualificada",
                "Monitoramento 24h com tecnologia avançada",
                "Atendimento personalizado para cada cliente",
                "Compromisso com ética e transparência",
                "Soluções completas em um único parceiro",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-full bg-primary-deep/60 border border-white/10 px-5 py-3 text-white text-sm md:text-base"
                >
                  <span className="grid place-items-center h-6 w-6 rounded-full bg-white text-primary-deep shrink-0">
                    <CheckCircle2 className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="relative mt-10 flex justify-center">
              <a
                href="#orcamento"
                onClick={scrollToForm}
                className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary hover:brightness-105 hover:-translate-y-0.5 transition shadow-xl"
              >
                Solicite um orçamento <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA — 3 imagens: central 24h, app mobile, agente em ronda */}
      <section id="operacao" className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">
              Como funciona
            </span>
            <h2
              className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-primary"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Uma operação inteira{" "}
              <span className="text-accent">trabalhando por você</span>.
            </h2>
            <p className="mt-4 text-muted-foreground text-base md:text-lg">
              Central humana 24h, aplicativo do cliente e agentes em campo — três
              camadas conectadas que garantem tempo de resposta em segundos.
            </p>
          </div>

          {/* Bento: destaque para o App do cliente + 3 recursos ao lado */}
          <div className="mt-14 grid lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
            {/* DESTAQUE — App do cliente */}
            <article className="group relative rounded-3xl overflow-hidden border border-border bg-gradient-to-br from-primary-deep via-primary to-primary-deep text-white shadow-xl">
              <div className="absolute top-5 left-5 z-10 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-3 py-1 text-[11px] font-bold uppercase tracking-widest">
                <Star className="h-3 w-3" /> Aplicativo do cliente
              </div>
              <div className="grid md:grid-cols-[1fr_1.05fr] gap-6 p-6 md:p-10 items-center min-h-[620px]">
                <div className="order-2 md:order-1">
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-accent">
                    iOS & Android
                  </div>
                  <h3
                    className="mt-3 text-2xl md:text-3xl font-bold leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Controle a sua segurança <span className="text-accent">na palma da mão</span>
                  </h3>
                  <p className="mt-4 text-white/80 text-sm md:text-base leading-relaxed">
                    Um aplicativo completo para você acompanhar tudo em tempo real — do celular,
                    onde estiver. Prático, rápido e direto.
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-white/85">
                    {[
                      "Arme e desarme remoto do sistema",
                      "Anulação de setores em segundos",
                      "Recepção de eventos e linha do tempo",
                      "Registros de ocorrência com evidências do agente",
                      "Acesso ao vivo às suas câmeras",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mockup interativo do celular */}
                <div className="order-1 md:order-2 relative flex items-center justify-center py-4">
                  <div className="absolute inset-0 bg-accent/15 blur-3xl rounded-full" />

                  {/* Dica de interação — acima do celular para não sobrepor a tela */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 pointer-events-none">
                    <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 border border-accent/40 px-3 py-1 backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                      <span className="text-[11px] font-bold uppercase tracking-widest text-accent">Experimente</span>
                      <span className="text-[11px] text-white/85">toque em Armar / Desarmar</span>
                    </span>
                  </div>

                  {/* Frame do celular */}
                  <div className="relative w-full max-w-[340px] aspect-[9/19.5] rounded-[2.5rem] bg-neutral-900 p-2.5 shadow-2xl ring-1 ring-white/10">
                    <div className="relative h-full w-full rounded-[2rem] overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-black flex flex-col">
                      {/* Notch */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 h-5 w-24 rounded-full bg-black z-10" />

                      {/* Status bar */}
                      <div className="relative z-0 pt-3 px-5 flex items-center justify-between text-[10px] text-white/70 font-medium">
                        <span>9:41</span>
                        <div className="flex items-center gap-1">
                          <Signal className="h-2.5 w-2.5" />
                          <Wifi className="h-2.5 w-2.5" />
                          <BatteryFull className="h-3 w-3" />
                        </div>
                      </div>

                      {/* Header: logo + ações */}
                      <div className="mt-4 px-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center">
                            <ShieldCheck className="h-4 w-4 text-accent" />
                          </div>
                          <div>
                            <div className="text-[10px] text-white/50 leading-none">Bem-vindo</div>
                            <div className="text-[11px] font-bold text-white leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                              Rota Sul Tech
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="h-7 w-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                            <Menu className="h-3.5 w-3.5 text-white/70" />
                          </div>
                          <div className="relative h-7 w-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                            <Bell className="h-3.5 w-3.5 text-white/70" />
                            <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-red-500" />
                          </div>
                        </div>
                      </div>

                      {/* System status */}
                      <div className={`mt-3 mx-4 rounded-2xl p-3 border transition-colors duration-500 ${
                        armado
                          ? "bg-gradient-to-br from-emerald-500/15 to-emerald-500/5 border-emerald-400/30"
                          : "bg-gradient-to-br from-amber-500/15 to-amber-500/5 border-amber-400/30"
                      }`}>
                        <div className="flex items-center gap-2.5">
                          <div className={`h-9 w-9 rounded-full flex items-center justify-center ${
                            armado ? "bg-emerald-500/20" : "bg-amber-500/20"
                          }`}>
                            <Activity className={`h-4 w-4 ${armado ? "text-emerald-300" : "text-amber-300"} animate-pulse`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className={`text-[13px] font-bold tracking-wide ${
                              armado ? "text-emerald-300" : "text-amber-300"
                            }`}>
                              {armado ? "ARMADO" : "DESARMADO"}
                            </div>
                            <div className="text-[10px] text-white/60">
                              {armado ? "Tudo seguro" : "Sistema em stand-by"}
                            </div>
                          </div>
                          <span className={`h-2 w-2 rounded-full animate-pulse ${
                            armado ? "bg-emerald-400" : "bg-amber-400"
                          }`} />
                        </div>
                      </div>

                      {/* Quick actions — Armar/Desarmar clicáveis */}
                      <div className="mt-3 px-4 grid grid-cols-4 gap-1.5">
                        <button
                          type="button"
                          onClick={() => registrarEvento(true)}
                          aria-pressed={armado}
                          className={`flex flex-col items-center gap-1 rounded-xl border py-2 transition-all active:scale-95 ${
                            armado
                              ? "bg-emerald-500/20 border-emerald-400/50 shadow-lg shadow-emerald-500/20"
                              : "bg-emerald-500/10 border-emerald-400/60 hover:bg-emerald-500/20 animate-pulse ring-2 ring-emerald-400/40"
                          }`}
                        >
                          <Lock className={`h-3.5 w-3.5 ${armado ? "text-emerald-300" : "text-emerald-200"}`} />
                          <span className={`text-[9px] font-semibold ${armado ? "text-emerald-200" : "text-emerald-100"}`}>Armar</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => registrarEvento(false)}
                          aria-pressed={!armado}
                          className={`flex flex-col items-center gap-1 rounded-xl border py-2 transition-all active:scale-95 ${
                            !armado
                              ? "bg-amber-500/20 border-amber-400/50 shadow-lg shadow-amber-500/20"
                              : "bg-amber-500/10 border-amber-400/60 hover:bg-amber-500/20 animate-pulse ring-2 ring-amber-400/40"
                          }`}
                        >
                          <Unlock className={`h-3.5 w-3.5 ${!armado ? "text-amber-300" : "text-amber-200"}`} />
                          <span className={`text-[9px] font-semibold ${!armado ? "text-amber-200" : "text-amber-100"}`}>Desarmar</span>
                        </button>
                        <div className="flex flex-col items-center gap-1 rounded-xl border py-2 bg-white/5 border-white/10">
                          <Video className="h-3.5 w-3.5 text-white/70" />
                          <span className="text-[9px] font-semibold text-white/70">Câmeras</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setPanicoAberto(true)}
                          className="flex flex-col items-center gap-1 rounded-xl border py-2 bg-red-500/20 border-red-400/50 shadow-lg shadow-red-500/20 transition-all active:scale-95 hover:bg-red-500/30"
                        >
                          <AlertTriangle className="h-3.5 w-3.5 text-red-300" />
                          <span className="text-[9px] font-semibold text-red-200">Pânico</span>
                        </button>
                      </div>

                      {/* Live camera */}
                      <div className="mt-3 mx-4">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-semibold text-white/80">Câmera ao vivo</span>
                          <span className="inline-flex items-center gap-1 text-[9px] font-bold text-red-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                            AO VIVO
                          </span>
                        </div>
                        <div className="relative h-16 rounded-lg overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-black border border-white/10">
                          <div className="absolute inset-0 opacity-70 bg-[radial-gradient(ellipse_at_bottom,_rgba(251,191,36,0.35),_transparent_60%)]" />
                          <div className="absolute inset-0 opacity-40 bg-[linear-gradient(180deg,transparent_60%,rgba(0,0,0,0.6))]" />
                          <div className="absolute bottom-1 left-1.5 text-[8px] text-white/70 font-mono">CAM 01 · GARAGEM</div>
                        </div>
                      </div>

                      {/* Eventos recentes */}
                      <div className="mt-3 mx-4 flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-semibold text-white/80">Eventos recentes</span>
                          <span className="text-[9px] text-accent">Ver todos</span>
                        </div>
                        <div className="space-y-1">
                          {eventos.map((ev, i) => (
                            <div key={`${ev.label}-${ev.time}-${i}`} className="flex items-center gap-2 rounded-md bg-white/5 border border-white/5 px-2 py-1.5 animate-in fade-in slide-in-from-top-1 duration-300">
                              <span className={`h-1.5 w-1.5 rounded-full ${ev.dot} shrink-0`} />
                              <div className="flex-1 min-w-0">
                                <div className="text-[10px] text-white/90 leading-tight truncate">{ev.label}</div>
                                <div className="text-[8px] text-white/50 leading-tight truncate">{ev.meta}</div>
                              </div>
                              <span className="text-[8px] text-white/50 font-mono">{ev.time}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom navigation */}
                      <div className="mt-2 mx-2 mb-2 grid grid-cols-4 rounded-xl bg-white/5 border border-white/10 py-1.5">
                        {[
                          { Icon: Home, label: "Início", active: true },
                          { Icon: Clock, label: "Histórico", active: false },
                          { Icon: LayoutGrid, label: "Dispositivos", active: false },
                          { Icon: Settings, label: "Config.", active: false },
                        ].map(({ Icon, label, active }) => (
                          <div key={label} className="flex flex-col items-center gap-0.5">
                            <Icon className={`h-3.5 w-3.5 ${active ? "text-accent" : "text-white/50"}`} />
                            <span className={`text-[8px] ${active ? "text-accent font-bold" : "text-white/50"}`}>{label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </article>

            {/* Recursos secundários — apenas ícone + texto, imagens ganharam bloco próprio abaixo */}
            <div className="flex flex-col justify-between gap-6">
              {[
                {
                  Icon: PhoneCall,
                  titulo: "Ligações e notificações personalizadas",
                  desc:
                    "WhatsApp e ligações com o número e a marca da sua empresa. Alertas com fotos e status em tempo real.",
                  tag: "WhatsApp & Voz",
                },
                {
                  Icon: Radio,
                  titulo: "App tático do agente de campo",
                  desc:
                    "Tarefas, SLA cronometrado, deslocamento, checklists e evidências — auditáveis ponta a ponta.",
                  tag: "Ronda & Ocorrências",
                },
                {
                  Icon: BarChart3,
                  titulo: "Relatórios e e-mails personalizados",
                  desc:
                    "Relatórios gerenciais, gráficos e envios programados com a identidade visual da sua empresa.",
                  tag: "Gestão & BI",
                },
              ].map(({ Icon, titulo, desc, tag }) => (
                <article
                  key={titulo}
                  className="group flex items-start gap-5 rounded-2xl border border-border bg-card p-5 md:p-6 hover:border-accent/60 hover:shadow-md transition-all"
                >
                  <div className="shrink-0 h-12 w-12 rounded-xl bg-accent/10 text-accent inline-flex items-center justify-center">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-accent">
                      {tag}
                    </span>
                    <h3
                      className="mt-1 text-base md:text-lg font-semibold text-primary leading-snug"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {titulo}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Galeria — imagens em bloco próprio, sem texto sobreposto */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { img: ligacoesCentral.url, alt: "Central de ligações e notificações" },
              { img: appAgente.url, alt: "App tático do agente em campo" },
              { img: relatoriosImg.url, alt: "Relatórios gerenciais personalizados" },
            ].map(({ img, alt }) => (
              <div
                key={alt}
                className="rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-secondary to-muted p-4 flex items-center justify-center"
              >
                <img
                  src={img}
                  alt={alt}
                  loading="lazy"
                  className="w-full h-auto max-h-64 object-contain hover:scale-[1.04] transition-transform duration-500"
                />
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
              { img: estruturaCentral, title: "Central 24h", desc: "Operadores presenciais, videowall e protocolo de resposta em segundos." },
              { img: estruturaFrota, title: "Frota Tática", desc: "Viaturas próprias com rastreamento em tempo real para atendimento local." },
              { img: estruturaTime, title: "Time Técnico", desc: "Engenheiros e técnicos certificados para instalação e manutenção." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-lg transition">
                <img src={c.img} alt={c.title} loading="lazy" width={1024} height={768} className="h-48 w-full object-cover" />
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
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Poços de Caldas · MG</li>
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
