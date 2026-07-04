import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShieldCheck,
  Wallet,
  Headphones,
  Download,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Send,
  Video,
} from "lucide-react";

export const Route = createFileRoute("/area-cliente")({
  head: () => ({
    meta: [
      { title: "Área do Cliente | Rota Sul Segurança" },
      {
        name: "description",
        content:
          "Acesse suas faturas e notas fiscais em um só lugar e abra chamados técnicos ou financeiros pela central de atendimento.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ClientArea,
});

type Tab = "financeiro" | "atendimento";

// Faturas unificadas: cada linha traz o pagamento + a nota fiscal correspondente
const faturas = [
  {
    data: "05/03/2026",
    desc: "Mensalidade Monitoramento 24h",
    valor: "R$ 2.480,00",
    statusPagto: "Pago",
    nf: "NF 001284",
  },
  {
    data: "05/02/2026",
    desc: "Mensalidade Monitoramento 24h",
    valor: "R$ 2.480,00",
    statusPagto: "Pago",
    nf: "NF 001271",
  },
  {
    data: "05/01/2026",
    desc: "Mensalidade Monitoramento 24h",
    valor: "R$ 2.480,00",
    statusPagto: "Pago",
    nf: "NF 001258",
  },
  {
    data: "05/12/2025",
    desc: "Mensalidade + Instalação CFTV",
    valor: "R$ 2.320,00",
    statusPagto: "Pago",
    nf: "NF 001244",
  },
  {
    data: "05/04/2026",
    desc: "Mensalidade Monitoramento 24h",
    valor: "R$ 2.480,00",
    statusPagto: "Em aberto",
    nf: "—",
  },
];

// Chamados unificados: técnico + financeiro na mesma lista
const chamadosRecentes = [
  {
    id: "OS #4821",
    tipo: "Encontrar gravação — CAM 03",
    categoria: "Técnico",
    data: "01/03/2026",
    status: "Em análise",
    cor: "amber",
  },
  {
    id: "T-908",
    tipo: "2ª via boleto — Fev/26",
    categoria: "Financeiro",
    data: "03/02/2026",
    status: "Resolvido",
    cor: "emerald",
  },
  {
    id: "OS #4802",
    tipo: "Ajuste sensor do portão",
    categoria: "Técnico",
    data: "28/02/2026",
    status: "Concluído",
    cor: "emerald",
  },
  {
    id: "T-889",
    tipo: "Ajuste dados de faturamento",
    categoria: "Financeiro",
    data: "12/01/2026",
    status: "Resolvido",
    cor: "emerald",
  },
  {
    id: "OS #4781",
    tipo: "Visita técnica preventiva",
    categoria: "Técnico",
    data: "10/02/2026",
    status: "Concluído",
    cor: "emerald",
  },
];

// Tipos unificados de chamado — inclui "Encontrar gravação"
const tiposChamado = [
  { group: "Técnico", options: [
    "Encontrar gravação de câmera (data e horário)",
    "Manutenção corretiva CFTV",
    "Ajuste de sensor / alarme",
    "Configuração de acesso / biometria",
    "Reset de câmera",
    "Visita técnica preventiva",
  ]},
  { group: "Financeiro", options: [
    "2ª via de boleto",
    "Dúvida sobre nota fiscal",
    "Reajuste / contrato",
    "Comprovante de retenção",
    "Outros — financeiro",
  ]},
];

function ClientArea() {
  const [tab, setTab] = useState<Tab>("financeiro");
  const [chamadoSent, setChamadoSent] = useState(false);
  const [categoria, setCategoria] = useState<"Técnico" | "Financeiro">("Técnico");
  const [tipo, setTipo] = useState("Encontrar gravação de câmera (data e horário)");

  const isGravacao = tipo.startsWith("Encontrar gravação");

  return (
    <div className="min-h-screen bg-secondary/40 font-sans" style={{ fontFamily: "var(--font-sans)" }}>
      {/* Header */}
      <header className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid place-items-center h-9 w-9 rounded-lg bg-accent text-accent-foreground">
              <ShieldCheck className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Rota Sul Segurança
            </span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar ao site
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-5 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">Área do Cliente</span>
            <h1 className="mt-2 text-3xl md:text-4xl font-bold text-primary" style={{ fontFamily: "var(--font-display)" }}>
              Olá, Condomínio Villa Toscana
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Contrato ativo · Plano Monitoramento 24h + CFTV · Desde 03/2024
            </p>
          </div>
          <div className="flex gap-3">
            <div className="rounded-xl border border-border bg-white p-4 min-w-[160px]">
              <div className="text-xs text-muted-foreground">Próximo vencimento</div>
              <div className="mt-1 text-lg font-bold text-primary" style={{ fontFamily: "var(--font-display)" }}>05/04/2026</div>
            </div>
            <div className="rounded-xl border border-border bg-white p-4 min-w-[160px]">
              <div className="text-xs text-muted-foreground">Status</div>
              <div className="mt-1 text-lg font-bold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4" /> Em dia
              </div>
            </div>
          </div>
        </div>

        {/* Tabs — apenas 2 agora: Financeiro (notas + pagamentos) e Atendimento (OS + tickets) */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-border">
          {[
            { id: "financeiro" as Tab, label: "Financeiro & Notas Fiscais", icon: Wallet },
            { id: "atendimento" as Tab, label: "Atendimento & Chamados", icon: Headphones },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`inline-flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 -mb-px transition ${
                tab === id
                  ? "border-accent text-primary"
                  : "border-transparent text-muted-foreground hover:text-primary"
              }`}
            >
              <Icon className="h-4 w-4" /> {label}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {/* ================= FINANCEIRO UNIFICADO ================= */}
          {tab === "financeiro" && (
            <div className="rounded-2xl border border-border bg-white overflow-hidden">
              <div className="px-5 py-4 border-b border-border flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-primary" style={{ fontFamily: "var(--font-display)" }}>
                    Faturas, pagamentos e notas fiscais
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Tudo em um só lugar — baixe boleto, comprovante ou nota fiscal de cada mês.
                  </p>
                </div>
                <button className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-primary hover:bg-secondary transition">
                  <Download className="h-3.5 w-3.5" /> Exportar histórico (CSV)
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-secondary/60 text-left text-xs uppercase text-muted-foreground">
                    <tr>
                      <th className="px-5 py-3">Competência</th>
                      <th className="px-5 py-3">Descrição</th>
                      <th className="px-5 py-3">Valor</th>
                      <th className="px-5 py-3">Pagamento</th>
                      <th className="px-5 py-3">Nota Fiscal</th>
                      <th className="px-5 py-3 text-right">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {faturas.map((f, i) => {
                      const pago = f.statusPagto === "Pago";
                      return (
                        <tr key={i} className="border-t border-border hover:bg-secondary/30 transition">
                          <td className="px-5 py-4 whitespace-nowrap">{f.data}</td>
                          <td className="px-5 py-4">{f.desc}</td>
                          <td className="px-5 py-4 font-medium">{f.valor}</td>
                          <td className="px-5 py-4">
                            <span
                              className={`inline-flex items-center gap-1 rounded-full text-xs px-2 py-1 ${
                                pago
                                  ? "bg-emerald-50 text-emerald-700"
                                  : "bg-amber-50 text-amber-700"
                              }`}
                            >
                              {pago ? <CheckCircle2 className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                              {f.statusPagto}
                            </span>
                          </td>
                          <td className="px-5 py-4 font-medium text-primary">{f.nf}</td>
                          <td className="px-5 py-4 text-right">
                            <div className="inline-flex gap-3 justify-end">
                              {!pago && (
                                <button className="text-sm font-semibold text-accent hover:brightness-110">
                                  Boleto
                                </button>
                              )}
                              {pago && (
                                <button className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition">
                                  <Download className="h-4 w-4" /> Comprovante
                                </button>
                              )}
                              {f.nf !== "—" && (
                                <button className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition">
                                  <Download className="h-4 w-4" /> NF-e
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ================= ATENDIMENTO UNIFICADO ================= */}
          {tab === "atendimento" && (
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Form unificado */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setChamadoSent(true);
                }}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <h3 className="text-lg font-bold text-primary" style={{ fontFamily: "var(--font-display)" }}>
                  Abrir chamado
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Um único canal para pedir suporte técnico, encontrar gravações ou falar com o financeiro.
                </p>

                {chamadoSent ? (
                  <div className="mt-6 rounded-xl bg-emerald-50 text-emerald-700 p-5 text-sm flex gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <div>
                      <div className="font-semibold">
                        Chamado {categoria === "Técnico" ? "OS #4822" : "T-921"} criado!
                      </div>
                      <div>
                        {categoria === "Técnico"
                          ? "Nossa equipe técnica retorna em até 4h úteis."
                          : "O time financeiro responde em até 1 dia útil."}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mt-5 space-y-4">
                    {/* Categoria: técnico ou financeiro */}
                    <div>
                      <label className="text-sm font-medium">Categoria</label>
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        {(["Técnico", "Financeiro"] as const).map((c) => (
                          <button
                            type="button"
                            key={c}
                            onClick={() => {
                              setCategoria(c);
                              const first = tiposChamado.find((g) => g.group === c)?.options[0];
                              if (first) setTipo(first);
                            }}
                            className={`rounded-lg border px-4 py-3 text-sm font-medium transition ${
                              categoria === c
                                ? "border-accent bg-accent/10 text-primary"
                                : "border-border text-muted-foreground hover:border-primary/40"
                            }`}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium">Tipo</label>
                      <select
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                        className="mt-1 w-full rounded-lg border border-border px-4 py-3 text-sm bg-white"
                      >
                        {tiposChamado
                          .find((g) => g.group === categoria)
                          ?.options.map((op) => (
                            <option key={op}>{op}</option>
                          ))}
                      </select>
                    </div>

                    {/* Campos extras para "Encontrar gravação" */}
                    {isGravacao && (
                      <div className="rounded-xl bg-primary/5 border border-primary/10 p-4">
                        <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                          <Video className="h-4 w-4 text-accent" /> Dados da gravação
                        </div>
                        <div className="mt-3 grid grid-cols-2 gap-3">
                          <div>
                            <label className="text-xs text-muted-foreground">Câmera</label>
                            <select className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm bg-white">
                              <option>CAM 01 · Portaria</option>
                              <option>CAM 02 · Garagem</option>
                              <option>CAM 03 · Hall</option>
                              <option>CAM 04 · Perímetro</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-xs text-muted-foreground">Data</label>
                            <input
                              type="date"
                              required
                              className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm bg-white"
                            />
                          </div>
                          <div>
                            <label className="text-xs text-muted-foreground">Horário início</label>
                            <input
                              type="time"
                              required
                              className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm bg-white"
                            />
                          </div>
                          <div>
                            <label className="text-xs text-muted-foreground">Horário fim</label>
                            <input
                              type="time"
                              required
                              className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm bg-white"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {categoria === "Técnico" && (
                      <div>
                        <label className="text-sm font-medium">Prioridade</label>
                        <select className="mt-1 w-full rounded-lg border border-border px-4 py-3 text-sm bg-white">
                          <option>Normal</option>
                          <option>Urgente</option>
                          <option>Emergência</option>
                        </select>
                      </div>
                    )}

                    <div>
                      <label className="text-sm font-medium">Descrição</label>
                      <textarea
                        rows={4}
                        required
                        placeholder={
                          isGravacao
                            ? "Ex.: preciso identificar a entrada de um veículo prata"
                            : categoria === "Técnico"
                              ? "Descreva o problema com o máximo de detalhes"
                              : "Como podemos ajudar?"
                        }
                        className="mt-1 w-full rounded-lg border border-border px-4 py-3 text-sm bg-white"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground hover:brightness-110 transition"
                    >
                      Abrir chamado <Send className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </form>

              {/* Lista unificada de chamados */}
              <div className="rounded-2xl border border-border bg-white p-6">
                <h3 className="text-lg font-bold text-primary" style={{ fontFamily: "var(--font-display)" }}>
                  Meus chamados
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Técnicos e financeiros na mesma linha do tempo.
                </p>
                <ul className="mt-4 divide-y divide-border">
                  {chamadosRecentes.map((c) => (
                    <li key={c.id} className="py-3 flex items-center justify-between text-sm gap-3">
                      <div className="min-w-0">
                        <div className="font-medium text-primary truncate">{c.id} — {c.tipo}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-2">
                          <span
                            className={`inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-semibold ${
                              c.categoria === "Técnico"
                                ? "bg-primary/10 text-primary"
                                : "bg-accent/15 text-accent"
                            }`}
                          >
                            {c.categoria}
                          </span>
                          <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {c.data}</span>
                        </div>
                      </div>
                      <span
                        className={`shrink-0 inline-flex items-center gap-1 rounded-full text-xs px-2 py-1 ${
                          c.cor === "amber"
                            ? "bg-amber-50 text-amber-700"
                            : "bg-emerald-50 text-emerald-700"
                        }`}
                      >
                        {c.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
