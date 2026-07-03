import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShieldCheck,
  FileText,
  Wallet,
  Wrench,
  MessageSquare,
  Download,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Send,
} from "lucide-react";

export const Route = createFileRoute("/area-cliente")({
  head: () => ({
    meta: [
      { title: "Área do Cliente | Rota Sul Tech" },
      { name: "description", content: "Acesse suas notas fiscais, histórico de pagamentos, ordens de serviço e tickets financeiros." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ClientArea,
});

type Tab = "notas" | "pagamentos" | "os" | "tickets";

const notas = [
  { id: "NF 001284", data: "05/03/2026", valor: "R$ 2.480,00", status: "Emitida" },
  { id: "NF 001271", data: "05/02/2026", valor: "R$ 2.480,00", status: "Emitida" },
  { id: "NF 001258", data: "05/01/2026", valor: "R$ 2.480,00", status: "Emitida" },
  { id: "NF 001244", data: "05/12/2025", valor: "R$ 2.320,00", status: "Emitida" },
];

const pagamentos = [
  { data: "05/03/2026", desc: "Mensalidade Monitoramento 24h", valor: "R$ 2.480,00", status: "Pago" },
  { data: "05/02/2026", desc: "Mensalidade Monitoramento 24h", valor: "R$ 2.480,00", status: "Pago" },
  { data: "05/01/2026", desc: "Mensalidade Monitoramento 24h", valor: "R$ 2.480,00", status: "Pago" },
  { data: "05/12/2025", desc: "Mensalidade + Instalação CFTV", valor: "R$ 2.320,00", status: "Pago" },
];

function ClientArea() {
  const [tab, setTab] = useState<Tab>("notas");
  const [osSent, setOsSent] = useState(false);
  const [ticketSent, setTicketSent] = useState(false);

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
              Rota Sul Tech
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

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-border">
          {[
            { id: "notas" as Tab, label: "Notas Fiscais", icon: FileText },
            { id: "pagamentos" as Tab, label: "Histórico de Pagamentos", icon: Wallet },
            { id: "os" as Tab, label: "Ordem de Serviço", icon: Wrench },
            { id: "tickets" as Tab, label: "Financeiro (Tickets)", icon: MessageSquare },
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
          {tab === "notas" && (
            <div className="rounded-2xl border border-border bg-white overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-secondary/60 text-left text-xs uppercase text-muted-foreground">
                  <tr>
                    <th className="px-5 py-3">Nota</th>
                    <th className="px-5 py-3">Data</th>
                    <th className="px-5 py-3">Valor</th>
                    <th className="px-5 py-3">Status</th>
                    <th className="px-5 py-3 text-right">Ação</th>
                  </tr>
                </thead>
                <tbody>
                  {notas.map((n) => (
                    <tr key={n.id} className="border-t border-border">
                      <td className="px-5 py-4 font-medium text-primary">{n.id}</td>
                      <td className="px-5 py-4">{n.data}</td>
                      <td className="px-5 py-4">{n.valor}</td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 text-xs px-2 py-1">
                          <CheckCircle2 className="h-3 w-3" /> {n.status}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-right">
                        <button className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition">
                          <Download className="h-4 w-4" /> Baixar XML/PDF
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === "pagamentos" && (
            <div className="rounded-2xl border border-border bg-white overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-secondary/60 text-left text-xs uppercase text-muted-foreground">
                  <tr>
                    <th className="px-5 py-3">Data</th>
                    <th className="px-5 py-3">Descrição</th>
                    <th className="px-5 py-3">Valor</th>
                    <th className="px-5 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pagamentos.map((p, i) => (
                    <tr key={i} className="border-t border-border">
                      <td className="px-5 py-4">{p.data}</td>
                      <td className="px-5 py-4">{p.desc}</td>
                      <td className="px-5 py-4 font-medium">{p.valor}</td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 text-xs px-2 py-1">
                          <CheckCircle2 className="h-3 w-3" /> {p.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === "os" && (
            <div className="grid md:grid-cols-2 gap-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setOsSent(true);
                }}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <h3 className="text-lg font-bold text-primary" style={{ fontFamily: "var(--font-display)" }}>
                  Gerar Ordem de Serviço
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">Nossa equipe técnica retorna em até 4h úteis.</p>

                {osSent ? (
                  <div className="mt-6 rounded-xl bg-emerald-50 text-emerald-700 p-5 text-sm flex gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <div>
                      <div className="font-semibold">OS #4821 criada!</div>
                      <div>Nossa equipe técnica entrará em contato em breve.</div>
                    </div>
                  </div>
                ) : (
                  <div className="mt-5 space-y-4">
                    <div>
                      <label className="text-sm font-medium">Tipo de chamado</label>
                      <select className="mt-1 w-full rounded-lg border border-border px-4 py-3 text-sm bg-white">
                        <option>Manutenção corretiva CFTV</option>
                        <option>Ajuste de sensor / alarme</option>
                        <option>Configuração de acesso</option>
                        <option>Visita técnica preventiva</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Prioridade</label>
                      <select className="mt-1 w-full rounded-lg border border-border px-4 py-3 text-sm bg-white">
                        <option>Normal</option>
                        <option>Urgente</option>
                        <option>Emergência</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Descrição</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Descreva o problema com o máximo de detalhes possível"
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

              <div className="rounded-2xl border border-border bg-white p-6">
                <h3 className="text-lg font-bold text-primary" style={{ fontFamily: "var(--font-display)" }}>
                  Chamados recentes
                </h3>
                <ul className="mt-4 divide-y divide-border">
                  {[
                    { id: "OS #4802", tipo: "Ajuste sensor portão", data: "28/02/2026", status: "Concluído", cor: "emerald" },
                    { id: "OS #4781", tipo: "Visita preventiva", data: "10/02/2026", status: "Concluído", cor: "emerald" },
                    { id: "OS #4765", tipo: "Reset câmera CAM-03", data: "22/01/2026", status: "Concluído", cor: "emerald" },
                  ].map((o) => (
                    <li key={o.id} className="py-3 flex items-center justify-between text-sm">
                      <div>
                        <div className="font-medium text-primary">{o.id} — {o.tipo}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" /> {o.data}</div>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 text-xs px-2 py-1">
                        {o.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {tab === "tickets" && (
            <div className="grid md:grid-cols-2 gap-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setTicketSent(true);
                }}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <h3 className="text-lg font-bold text-primary" style={{ fontFamily: "var(--font-display)" }}>
                  Falar com o Financeiro
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Dúvidas sobre boletos, notas ou contrato. Retorno em até 1 dia útil.
                </p>

                {ticketSent ? (
                  <div className="mt-6 rounded-xl bg-emerald-50 text-emerald-700 p-5 text-sm flex gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <div>
                      <div className="font-semibold">Ticket #T-921 aberto!</div>
                      <div>Você receberá as respostas por e-mail e nesta tela.</div>
                    </div>
                  </div>
                ) : (
                  <div className="mt-5 space-y-4">
                    <div>
                      <label className="text-sm font-medium">Assunto</label>
                      <select className="mt-1 w-full rounded-lg border border-border px-4 py-3 text-sm bg-white">
                        <option>2ª via de boleto</option>
                        <option>Dúvida sobre nota fiscal</option>
                        <option>Reajuste / contrato</option>
                        <option>Outros</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Mensagem</label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Como podemos ajudar?"
                        className="mt-1 w-full rounded-lg border border-border px-4 py-3 text-sm bg-white"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground hover:brightness-110 transition"
                    >
                      Enviar ticket <Send className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </form>

              <div className="rounded-2xl border border-border bg-white p-6">
                <h3 className="text-lg font-bold text-primary" style={{ fontFamily: "var(--font-display)" }}>
                  Tickets recentes
                </h3>
                <ul className="mt-4 divide-y divide-border">
                  {[
                    { id: "T-908", assunto: "2ª via boleto Fev/26", data: "03/02/2026", status: "Resolvido" },
                    { id: "T-889", assunto: "Ajuste dados de faturamento", data: "12/01/2026", status: "Resolvido" },
                    { id: "T-871", assunto: "Comprovante de retenção", data: "18/12/2025", status: "Resolvido" },
                  ].map((t) => (
                    <li key={t.id} className="py-3 flex items-center justify-between text-sm">
                      <div>
                        <div className="font-medium text-primary">#{t.id} — {t.assunto}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" /> {t.data}</div>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 text-xs px-2 py-1">
                        {t.status}
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
