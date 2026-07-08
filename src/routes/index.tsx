import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { SdrChat } from "@/components/sdr-chat";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { blogPosts } from "@/lib/blog-posts";

import cameraQuintal from "@/assets/camera-quintal.jpg";
import cameraFrente from "@/assets/camera-frente.jpg";
import cameraRua from "@/assets/camera-rua.jpg";
import cameraGaragem from "@/assets/camera-garagem.jpg";
import heroFrota from "@/assets/hero-frota.jpg";
import ligacoesCentral from "@/assets/ligacoes-central.jpg.asset.json";
import relatoriosImg from "@/assets/relatorios.jpg.asset.json";
import appAgente from "@/assets/app-agente.jpg.asset.json";
import appPersonalizado from "@/assets/app-cliente-mockup.png";
import centralOperadores from "@/assets/central-operadores.jpg";
import servicosBg from "@/assets/servicos-bg.jpg";
import estruturaCentral from "@/assets/estrutura-central-24h.jpg";
import estruturaFrota from "@/assets/estrutura-frota-tatica.jpg";
import estruturaTime from "@/assets/camera-intelbras-tecnico.jpg.asset.json";
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
  Download,
  ShieldAlert,
  HelpCircle,
  MessageCircle,
  Send,
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
  const [formEmail, setFormEmail] = useState("");
  const [formTelefone, setFormTelefone] = useState("");
  const [contatoErro, setContatoErro] = useState<string | null>(null);
  const [materialEnviado, setMaterialEnviado] = useState<Record<string, boolean>>({});
  const [materialEmail, setMaterialEmail] = useState<Record<string, string>>({});
  const [armado, setArmado] = useState(true);
  const [panicoAberto, setPanicoAberto] = useState(false);
  const [funnyAberto, setFunnyAberto] = useState(false);
  const [camerasAberto, setCamerasAberto] = useState(false);
  const [chatAberto, setChatAberto] = useState(false);

  const [eventos, setEventos] = useState<{ dot: string; label: string; meta: string; time: string }[]>([
    { dot: "bg-red-500", label: "Alarme intrusão", meta: "Setor externo", time: "22:15" },
    { dot: "bg-emerald-400", label: "Armado", meta: "Por João", time: "20:30" },
    { dot: "bg-white/40", label: "Desarmado", meta: "Por Maria", time: "07:45" },
    { dot: "bg-white/40", label: "Sistema iniciado", meta: "Auto-check", time: "07:30" },
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

  const nowHHMM = () => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  };
  const pushEvento = (ev: { dot: string; label: string; meta: string; time: string }) => {
    setEventos((prev) => [ev, ...prev].slice(0, 4));
  };

  const acionarPanico = () => {
    setPanicoAberto(true);
    pushEvento({ dot: "bg-red-500", label: "Pânico acionado", meta: "Por você (app)", time: nowHHMM() });
  };

  // Popup pânico: registra "tático a caminho", abre "fica tranquilo" após 2s e fecha o principal após 10s
  useEffect(() => {
    if (!panicoAberto) return;
    const t0 = setTimeout(() => {
      pushEvento({ dot: "bg-amber-400", label: "Tático a caminho", meta: "Central 24h", time: nowHHMM() });
    }, 1500);
    const t1 = setTimeout(() => setFunnyAberto(true), 2000);
    const t2 = setTimeout(() => setPanicoAberto(false), 10000);
    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [panicoAberto]);


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
              Rota Sul Segurança
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-6 text-sm text-white/80" aria-label="Navegação principal">
            <a href="#top" className="hover:text-white transition">Home</a>
            <a href="#sobre" className="hover:text-white transition">A Empresa</a>
            <a href="#servicos" className="hover:text-white transition">Serviços</a>
            <a href="#diferenciais" className="hover:text-white transition">Diferenciais</a>
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
              ["#sobre", "A Empresa"],
              ["#servicos", "Serviços"],
              ["#diferenciais", "Diferenciais"],

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
          alt="Gestor da Rota Sul Segurança em base operacional com frota de viaturas de segurança"
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
              A cada 11 segundos, um alarme dispara no Brasil
            </div>
            <h1
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold leading-[1.02] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Elimine o custo e o risco da{" "}
              <span className="text-accent">portaria própria</span> — sem abrir mão da segurança.
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/80 max-w-xl">
              Há mais de 10 anos em Poços de Caldas, oferecendo portaria remota,
              monitoramento eletrônico terceirizado e uma equipe humana 24h para
              proteger condomínios, empresas e obras com resposta em segundos.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a
                href="#orcamento"
                onClick={scrollToForm}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-9 py-4 text-sm md:text-base font-bold uppercase tracking-wider text-accent-foreground shadow-lg shadow-accent/30 hover:brightness-110 hover:-translate-y-0.5 transition"
              >
                Quero minha proposta em 24h <ArrowRight className="h-4 w-4" />
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

      {/* SOBRE — A Rota Sul Segurança */}
      <section id="sobre" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={centralOperadores}
              alt="Central de monitoramento 24h da Rota Sul Segurança com operadores acompanhando câmeras em tempo real"
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
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">A Rota Sul Segurança</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-primary" style={{ fontFamily: "var(--font-display)" }}>
              Segurança feita por gente. Escalada por tecnologia.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Somos uma empresa de Poços de Caldas - MG especializada em <strong>monitoramento eletrônico terceirizado</strong>,
              <strong> portaria remota</strong> e <strong>segurança patrimonial para empresas</strong> e condomínios.
              Nascemos da união entre operadores experientes e engenheiros de tecnologia — com a missão de
              proteger pessoas, patrimônios e o sono de quem confia na gente.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground">
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-accent shrink-0" /> +10 anos em <strong>segurança para condomínio</strong> e empresas em Poços de Caldas e região</li>
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
                "Mais de 10 anos em segurança patrimonial para empresas",
                "Especialistas em substituir porteiro por monitoramento",
                "Monitoramento eletrônico terceirizado com tecnologia avançada",
                "Portaria remota com atendimento personalizado 24h",
                "Compromisso com ética, LGPD e transparência",
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
                              Rota Sul Segurança
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
                        <button
                          type="button"
                          onClick={() => setCamerasAberto(true)}
                          className="flex flex-col items-center gap-1 rounded-xl border py-2 bg-white/5 border-white/10 hover:bg-white/10 transition-all active:scale-95"
                        >
                          <Video className="h-3.5 w-3.5 text-white/70" />
                          <span className="text-[9px] font-semibold text-white/70">Câmeras</span>
                        </button>
                        <button
                          type="button"
                          onClick={acionarPanico}
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
                        <button
                          type="button"
                          onClick={() => setCamerasAberto(true)}
                          className="relative block w-full h-16 rounded-lg overflow-hidden border border-white/10 group"
                        >
                          <img
                            src={cameraQuintal}
                            alt="Prévia câmera quintal"
                            loading="lazy"
                            width={1280}
                            height={768}
                            className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
                          <div className="absolute bottom-1 left-1.5 text-[8px] text-white/90 font-mono drop-shadow">CAM 01 · QUINTAL</div>
                          <div className="absolute top-1 right-1.5 text-[8px] text-white/90 font-mono bg-black/40 px-1 rounded">HD</div>
                        </button>
                      </div>

                      {/* Eventos recentes — altura fixa evita mudança de tamanho do mockup */}
                      <div className="mt-3 mx-4 flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-semibold text-white/80">Eventos recentes</span>
                          <span className="text-[9px] text-accent">Ver todos</span>
                        </div>
                        <div className="space-y-1 min-h-[128px]">
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
              Quem confia na Rota Sul Segurança dorme tranquilo.
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
              { img: estruturaCentral, title: "Central 24h", alt: "Central de monitoramento 24 horas da Rota Sul Segurança em Poços de Caldas, MG", desc: "Operadores presenciais, videowall e protocolo de resposta em segundos." },
              { img: estruturaFrota, title: "Frota Tática", alt: "Frota tática de resposta rápida a alarmes em Poços de Caldas, MG", desc: "Viaturas próprias com rastreamento em tempo real para atendimento local." },
              { img: estruturaTime, title: "Time Técnico", alt: "Equipe técnica certificada para instalação de CFTV e alarmes em Poços de Caldas, MG", desc: "Engenheiros e técnicos certificados para instalação e manutenção." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-lg transition">
                <img src={c.img} alt={c.alt} loading="lazy" width={1024} height={768} className="h-48 w-full object-cover" />

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
            {[
              { nome: "intelbras", tag: "Câmeras & CFTV", cor: "text-[#00A859]" },
              { nome: "HIKVISION", tag: "Vídeo IP", cor: "text-[#CE0E2D]" },
              { nome: "MOTOROLA", tag: "Rádios & Alarmes", cor: "text-[#0071CE]" },
              { nome: "BOSCH", tag: "Sensores", cor: "text-[#EA0016]" },
              { nome: "Positivo", tag: "Automação", cor: "text-[#00A0DF]" },
              { nome: "AXIS", tag: "Câmeras IP", cor: "text-[#CC092F]" },
              { nome: "Dahua", tag: "Monitoramento", cor: "text-[#E60012]" },
              { nome: "Ubiquiti", tag: "Redes & Wi-Fi", cor: "text-[#0559C9]" },
            ].map((p) => (
              <div
                key={p.nome}
                className="group flex flex-col items-center justify-center rounded-xl border border-border bg-card py-8 px-4 hover:border-accent/60 hover:shadow-md transition h-28"
              >
                <span
                  className={`text-xl md:text-2xl font-extrabold tracking-tight ${p.cor} group-hover:scale-105 transition`}
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
                >
                  {p.nome}
                </span>
                <span className="mt-1 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
                  {p.tag}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Marcas registradas de seus respectivos proprietários. Somos integradores homologados.
          </p>
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
              { veiculo: "Jornal Regional de Poços", titulo: "Rota Sul Segurança reduz em 38% o custo de portaria em condomínios de Poços de Caldas." },
              { veiculo: "Portal Sul de Minas Notícias", titulo: "IA aplicada à segurança: empresa de Poços de Caldas entra no radar de administradoras." },
              { veiculo: "Revista Síndico Mineiro", titulo: "Terceirização de monitoramento: por que síndicos estão migrando." },
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
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group rounded-2xl overflow-hidden border border-border bg-card hover:shadow-lg transition flex flex-col"
              >
                <img src={p.img} alt={p.titulo} loading="lazy" className="h-44 w-full object-cover" />
                <div className="p-5 flex-1 flex flex-col">
                  <div className="text-xs font-semibold text-accent uppercase tracking-widest">{p.cat}</div>
                  <h3 className="mt-2 font-semibold text-primary leading-snug break-words" style={{ fontFamily: "var(--font-display)" }}>
                    {p.titulo}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-accent transition">
                    Ler artigo <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — perguntas frequentes (SEO / GEO) */}
      <section id="faq" className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-accent uppercase">
              <HelpCircle className="h-4 w-4" /> Perguntas frequentes
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-primary" style={{ fontFamily: "var(--font-display)" }}>
              Tira-dúvidas sobre monitoramento terceirizado.
            </h2>
            <p className="mt-4 text-muted-foreground">
              As perguntas que mais recebemos de síndicos, empresários e gestores em Poços de Caldas e região.
            </p>
          </div>

          <Accordion type="single" collapsible className="mt-10 rounded-2xl border border-border bg-card px-6">
            {[
              {
                q: "Como reduzir o passivo trabalhista em condomínios com portaria remota?",
                a: "A portaria remota substitui o porteiro presencial por uma central de monitoramento 24h. Você elimina folha de pagamento, encargos, férias, 13º e afastamentos — pagando apenas uma mensalidade fixa pelo serviço terceirizado. O contrato é entre pessoas jurídicas, então não há vínculo trabalhista com quem opera o acesso.",
              },
              {
                q: "Quanto custa terceirizar o monitoramento de um condomínio ou empresa?",
                a: "O investimento varia conforme o tamanho do imóvel, número de câmeras, quantidade de acessos e nível de resposta contratado. Em média, condomínios em Poços de Caldas economizam entre 30% e 60% em relação a uma portaria própria. Enviamos um orçamento comparativo em até 24 horas, sem compromisso.",
              },
              {
                q: "Portaria remota é mais segura que porteiro presencial?",
                a: "Sim, em quase todos os cenários. Na portaria remota, quem opera o acesso está protegido em uma central blindada, com múltiplas câmeras, IA de detecção e protocolo de resposta imediata. Isso elimina o risco de coação ao porteiro — e ainda acionamos uma frota tática que se desloca ao local em minutos.",
              },
              {
                q: "Vocês atendem empresas, obras e comércios, ou só condomínios residenciais?",
                a: "Atendemos condomínios residenciais e comerciais, empresas, indústrias, obras, gastronomia e propriedades rurais em Poços de Caldas - MG e região. Cada operação é dimensionada sob medida — do CFTV com IA à portaria remota com controle biométrico.",
              },
              {
                q: "Em quanto tempo a central responde a um alarme disparado?",
                a: "Nosso tempo médio de recepção e validação do alerta é de 8 segundos. Após a confirmação pelas câmeras, a viatura tática mais próxima é acionada e, quando o caso exige, a Polícia Militar é comunicada em paralelo. Você recebe todo o histórico no app do cliente em tempo real.",
              },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border last:border-0">
                <AccordionTrigger className="text-left text-base font-semibold text-primary hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* LEAD MAGNETS — 3 materiais gratuitos (reciprocidade) */}
      <section id="checklist" className="py-16 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">Materiais gratuitos</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-primary" style={{ fontFamily: "var(--font-display)" }}>
              Baixe agora. Proteja depois.
            </h2>
            <p className="mt-3 text-muted-foreground text-sm">
              Guias práticos escritos pela nossa equipe operacional. Sem enrolação, sem venda disfarçada.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: "checklist",
                icone: ShieldCheck,
                selo: "Checklist · Condomínios",
                titulo: "7 sinais de que seu condomínio está vulnerável",
                sub: "Diagnóstico rápido para síndicos identificarem brechas antes que virem prejuízo.",
                cta: "Quero o checklist",
              },
              {
                id: "casa",
                icone: Home,
                selo: "Guia · Residencial",
                titulo: "75 dicas para blindar sua casa sem gastar uma fortuna",
                sub: "Do posicionamento da câmera aos hábitos que denunciam quando você viaja. Pequenas mudanças, grande efeito.",
                cta: "Baixar o guia",
              },
              {
                id: "portaria",
                icone: Unlock,
                selo: "E-book · Portaria virtual",
                titulo: "O que não te contaram sobre portaria virtual",
                sub: "Mitos, letras miúdas em contratos e as 5 perguntas que você precisa fazer antes de assinar.",
                cta: "Ler o e-book",
              },
            ].map((m) => {
              const enviado = materialEnviado[m.id];
              return (
                <div
                  key={m.id}
                  className="rounded-3xl border border-accent/30 bg-gradient-to-br from-white to-accent/5 p-7 shadow-sm hover:shadow-lg transition flex flex-col"
                >
                  <div className="grid place-items-center h-14 w-14 rounded-2xl bg-accent text-accent-foreground shadow-md shrink-0">
                    <m.icone className="h-7 w-7" />
                  </div>
                  <div className="mt-5 text-[11px] font-semibold tracking-widest text-accent uppercase">{m.selo}</div>
                  <h3 className="mt-2 text-base sm:text-lg md:text-xl font-bold text-primary leading-snug break-words" style={{ fontFamily: "var(--font-display)" }}>
                    {m.titulo}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground flex-1">{m.sub}</p>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (!materialEmail[m.id]) return;
                      setMaterialEnviado((prev) => ({ ...prev, [m.id]: true }));
                    }}
                    className="mt-5 flex flex-col gap-2"
                  >
                    {enviado ? (
                      <div className="w-full flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-3">
                        <CheckCircle2 className="h-5 w-5" />
                        Enviado! Confira sua caixa de entrada.
                      </div>
                    ) : (
                      <>
                        <input
                          type="email"
                          required
                          value={materialEmail[m.id] ?? ""}
                          onChange={(e) => setMaterialEmail((prev) => ({ ...prev, [m.id]: e.target.value }))}
                          placeholder="Seu melhor e-mail"
                          className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-primary-foreground hover:brightness-110 transition"
                        >
                          {m.cta} <Download className="h-4 w-4" />
                        </button>
                      </>
                    )}
                  </form>
                </div>
              );
            })}
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
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-amber-300/40 bg-amber-400/10 px-4 py-3 text-sm text-amber-100">
              <AlertTriangle className="h-4 w-4 shrink-0" />
              Vagas limitadas de atendimento prioritário este mês para novos condomínios na região.
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!formEmail && !formTelefone) {
                setContatoErro("Informe ao menos um e-mail ou telefone para contato.");
                return;
              }
              setContatoErro(null);
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
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="f-email" className="text-sm font-medium text-foreground">
                        E-mail <span className="text-muted-foreground text-xs">(opcional)</span>
                      </label>
                      <input
                        id="f-email"
                        type="email"
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        className="mt-1 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                        placeholder="voce@empresa.com.br"
                      />
                    </div>
                    <div>
                      <label htmlFor="f-tel" className="text-sm font-medium text-foreground">
                        Telefone / WhatsApp <span className="text-muted-foreground text-xs">(opcional)</span>
                      </label>
                      <input
                        id="f-tel"
                        type="tel"
                        value={formTelefone}
                        onChange={(e) => setFormTelefone(e.target.value)}
                        className="mt-1 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                        placeholder="(35) 90000-0000"
                      />
                    </div>
                  </div>
                  {contatoErro && (
                    <p className="text-xs text-destructive font-medium">{contatoErro}</p>
                  )}
                  <p className="text-[11px] text-muted-foreground">
                    Preencha ao menos um dos campos acima — escolha o canal que preferir.
                  </p>
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
                    <>Quero saber quanto vou economizar <ArrowRight className="h-4 w-4" /></>
                  )}
                </button>
                <p className="mt-3 text-[11px] text-center text-muted-foreground inline-flex items-center justify-center gap-1.5 w-full">
                  <Lock className="h-3 w-3" />
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
              <span className="font-semibold" style={{ fontFamily: "var(--font-display)" }}>Rota Sul Segurança</span>
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
            <span>© 2026 Rota Sul Segurança. Todos os direitos reservados.</span>
            <span>CNPJ 00.000.000/0001-00</span>
          </div>
        </div>
      </footer>

      {/* CHAT SDR FLOAT */}
      <button
        type="button"
        onClick={() => setChatAberto(true)}
        aria-label="Falar com atendente"
        className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-2xl hover:scale-110 transition"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 ring-2 ring-white animate-pulse" />
      </button>

      <SdrChat open={chatAberto} onOpenChange={setChatAberto} />


      {/* Popup Pânico — simulação de acionamento */}
      <Dialog open={panicoAberto} onOpenChange={setPanicoAberto}>
        <DialogContent className="max-w-lg p-0 overflow-hidden border-red-500/40 bg-slate-950">
          <div className="relative">
            <img
              src={centralAlertaPanico}
              alt="Central de monitoramento recebendo alerta de pânico"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-red-600/90 px-3 py-1 text-white text-xs font-bold shadow-lg animate-pulse">
              <AlertTriangle className="h-3.5 w-3.5" />
              ALERTA DE PÂNICO
            </div>
            <div className="absolute top-3 right-10 inline-flex items-center gap-1.5 rounded-full bg-yellow-400/95 text-black px-2.5 py-1 text-[10px] font-black uppercase tracking-widest shadow-lg">
              Simulação
            </div>
            <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-mono text-red-300">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
              AO VIVO
            </div>
          </div>
          <div className="p-5 space-y-3">
            <DialogHeader>
              <DialogTitle className="text-white flex items-center gap-2">
                <PhoneCall className="h-5 w-5 text-red-400 animate-pulse" />
                Central acionada — Polícia a caminho
              </DialogTitle>
              <DialogDescription className="text-white/70">
                <strong className="text-yellow-300">Isto é apenas uma simulação — ninguém foi acionado de verdade.</strong> Em um caso real, nossos operadores recebem seu alerta em segundos, validam as câmeras e acionam a viatura mais próxima e a Polícia Militar.
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 py-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 mx-auto" />
                <div className="text-[10px] text-emerald-200 font-semibold mt-1">Alerta recebido</div>
              </div>
              <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 py-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 mx-auto" />
                <div className="text-[10px] text-emerald-200 font-semibold mt-1">Câmeras validadas</div>
              </div>
              <div className="rounded-lg border border-red-500/40 bg-red-500/10 py-2">
                <Radio className="h-4 w-4 text-red-400 mx-auto animate-pulse" />
                <div className="text-[10px] text-red-200 font-semibold mt-1">Polícia acionada</div>
              </div>
            </div>
            <p className="text-[11px] text-white/50 text-center pt-1">
              Fecha sozinho em 10s · ou clique no X no canto superior.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Popup Funny — pra ficar tranquilo */}
      <Dialog open={funnyAberto} onOpenChange={setFunnyAberto}>
        <DialogContent className="max-w-sm border-yellow-400/40 bg-gradient-to-br from-yellow-50 to-white text-slate-900">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <span className="text-3xl">😅</span>
              Calma, calma!
            </DialogTitle>
            <DialogDescription className="text-slate-700 text-sm leading-relaxed">
              Respira fundo. <strong>Ninguém foi acionado</strong>, a Polícia não está a caminho, e nenhum vizinho vai reclamar. 🚔❌
              <br /><br />
              Isso foi só uma <strong>simulação</strong> pra você ver como o botão de pânico funciona no app da Rota Sul Segurança. Fique tranquilo(a) — é só uma demonstração 💚
            </DialogDescription>
          </DialogHeader>
          <button
            type="button"
            onClick={() => { setFunnyAberto(false); setPanicoAberto(false); }}
            className="mt-2 w-full rounded-md bg-primary text-white py-2 font-semibold hover:brightness-110 transition"
          >
            Ufa, entendi! 😌
          </button>
        </DialogContent>
      </Dialog>

      {/* Popup Câmeras — grid com 4 câmeras */}
      <Dialog open={camerasAberto} onOpenChange={setCamerasAberto}>
        <DialogContent className="max-w-2xl border-white/10 bg-slate-950 text-white">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Video className="h-5 w-5 text-accent" />
              Câmeras ao vivo
              <span className="ml-2 inline-flex items-center gap-1 text-[10px] font-bold text-red-300">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                AO VIVO
              </span>
            </DialogTitle>
            <DialogDescription className="text-white/60">
              Acesse todas as câmeras da sua propriedade em tempo real.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "Quintal", cam: "CAM 01", img: cameraQuintal, motion: "dog" as const },
              { label: "Frente da casa", cam: "CAM 02", img: cameraFrente, motion: "flicker" as const },
              { label: "Rua", cam: "CAM 03", img: cameraRua, motion: "car" as const },
              { label: "Garagem", cam: "CAM 04", img: cameraGaragem, motion: "scan" as const },
            ].map((c) => (
              <div key={c.cam} className="relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-black">
                <img
                  src={c.img}
                  alt={`Câmera ${c.label}`}
                  loading="lazy"
                  width={1280}
                  height={768}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {/* Motion overlay — simula gif com animação CSS */}
                {c.motion === "dog" && (
                  <>
                    <div className="absolute bottom-[18%] left-0 right-0 h-8 cam-walk pointer-events-none">
                      <div className="relative h-full">
                        {/* Sombra pessoa + cachorro */}
                        <div className="absolute bottom-0 left-0 w-3 h-6 rounded-t-full bg-black/70" />
                        <div className="absolute bottom-0 left-4 w-4 h-3 rounded-t-md bg-black/70" />
                        <div className="absolute bottom-0 left-3.5 w-0.5 h-1.5 bg-black/70" />
                        <div className="absolute bottom-0 left-7 w-0.5 h-1.5 bg-black/70" />
                      </div>
                    </div>
                  </>
                )}
                {c.motion === "flicker" && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-yellow-200 mix-blend-overlay cam-flicker" />
                  </div>
                )}
                {c.motion === "car" && (
                  <div className="absolute top-[38%] left-0 right-0 h-6 cam-headlights pointer-events-none">
                    <div className="relative h-full w-16">
                      <div className="absolute inset-y-0 left-0 w-16 rounded-full bg-yellow-200/70 blur-md" />
                      <div className="absolute inset-y-1 left-1 w-14 rounded-full bg-white/90 blur-sm" />
                    </div>
                  </div>
                )}
                {c.motion === "scan" && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute inset-x-0 h-8 bg-gradient-to-b from-transparent via-emerald-400/25 to-transparent cam-scan" />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute top-1.5 left-2 text-[10px] font-mono text-white/90 bg-black/50 px-1.5 py-0.5 rounded">
                  {c.cam} · {c.label.toUpperCase()}
                </div>
                <div className="absolute top-1.5 right-2 inline-flex items-center gap-1 text-[9px] font-bold text-red-300 bg-black/50 px-1.5 py-0.5 rounded">
                  <span className="h-1 w-1 rounded-full bg-red-500 animate-pulse" />
                  REC
                </div>
                <div className="absolute bottom-1.5 right-2 text-[9px] font-mono text-white/80">HD · 1080p</div>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-white/50 text-center">
            Simulação demonstrativa · imagens ilustrativas com movimento.
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
}
