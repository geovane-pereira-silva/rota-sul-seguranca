import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Send, ShieldCheck } from "lucide-react";

type Msg = { from: "bot" | "user"; text: string };

type Step =
  | "nome"
  | "servico"
  | "tipo"
  | "cidade"
  | "interesse"
  | "jaTem"
  | "urgencia"
  | "fim";

type Dados = {
  nome?: string;
  servico?: string;
  tipo?: string;
  cidade?: string;
  interesse?: string;
  jaTem?: string;
  urgencia?: string;
};

const WHATS_BASE =
  "https://web.whatsapp.com/send?phone=5535988749336&text=";

function buildWhatsUrl(d: Dados) {
  const linhas = [
    "Olá! Vim pelo site da Rota Sul Segurança.",
    d.nome ? `Nome: ${d.nome}` : "",
    d.servico ? `Serviço de interesse: ${d.servico}` : "",
    d.tipo ? `Tipo de imóvel: ${d.tipo}` : "",
    d.cidade ? `Cidade: ${d.cidade}` : "",
    d.interesse ? `Interesse: ${d.interesse}` : "",
    d.jaTem ? `Já possui sistema: ${d.jaTem}` : "",
    d.urgencia ? `Prazo: ${d.urgencia}` : "",
    "",
    "Gostaria de falar com um especialista.",
  ].filter(Boolean);
  return WHATS_BASE + encodeURIComponent(linhas.join("\n"));
}

export function SdrChat({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState<Step>("nome");
  const [dados, setDados] = useState<Dados>({});
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // reset on open
  useEffect(() => {
    if (open) {
      setMessages([]);
      setDados({});
      setStep("nome");
      setInput("");
      pushBot([
        "Olá! Aqui é a Sentinela, da Central de Atendimento da Rota Sul Segurança 🛡️",
        "Vou fazer algumas perguntas rápidas pra te encaminhar ao especialista certo. Tudo bem?",
        "Pra começar, qual é o seu nome?",
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 999999, behavior: "smooth" });
  }, [messages, typing]);

  function pushBot(texts: string[]) {
    setTyping(true);
    let delay = 400;
    texts.forEach((t, i) => {
      setTimeout(() => {
        setMessages((m) => [...m, { from: "bot", text: t }]);
        if (i === texts.length - 1) setTyping(false);
      }, delay);
      delay += 700 + t.length * 15;
    });
  }


  function submit(raw: string) {
    const value = raw.trim();
    if (!value) return;
    setInput("");
    setMessages((m) => [...m, { from: "user", text: value }]);

    const next: Dados = { ...dados };

    if (step === "nome") {
      next.nome = value;
      setDados(next);
      setStep("servico");
      pushBot([
        `Prazer, ${value.split(" ")[0]}!`,
        "Posso te ajudar com câmeras, alarmes, monitoramento 24h ou portaria virtual. Qual desses serviços você procura?",
      ]);
    } else if (step === "servico") {
      next.servico = value;
      setDados(next);
      setStep("tipo");
      pushBot(["Ótimo. Esse atendimento é pra uma residência ou empresa/comércio?"]);
    } else if (step === "tipo") {
      next.tipo = value;
      setDados(next);
      setStep("cidade");
      pushBot(["Perfeito. E em qual cidade fica o imóvel?"]);
    } else if (step === "cidade") {
      next.cidade = value;
      setDados(next);
      setStep("interesse");
      pushBot(["Entendi. Me conta um pouco mais: o que você quer resolver agora?"]);
    } else if (step === "interesse") {
      next.interesse = value;
      setDados(next);
      setStep("jaTem");
      pushBot([
        "Entendi. Você já possui algum sistema instalado (câmeras, alarme, cerca elétrica)?",
      ]);
    } else if (step === "jaTem") {
      next.jaTem = value;
      setDados(next);
      setStep("urgencia");
      pushBot(["Última pergunta: qual a sua urgência pra resolver isso?"]);
    } else if (step === "urgencia") {
      next.urgencia = value;
      setDados(next);
      setStep("fim");
      pushBot([
        "Prontinho! Já tenho tudo que preciso ✅",
        "Vou te encaminhar agora pra um especialista humano no WhatsApp, com o resumo do seu caso. Ele te retorna em minutos.",
      ]);
    }
  }


  const finalUrl = buildWhatsUrl({ ...dados });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-0 overflow-hidden gap-0 bg-white">
        <DialogHeader className="p-4 bg-[#128C7E] text-white flex-row items-center gap-3 space-y-0">
          <div className="h-10 w-10 rounded-full bg-white/20 grid place-items-center">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <DialogTitle className="text-white text-base leading-tight">
              Sentinela · Rota Sul Segurança
            </DialogTitle>
            <p className="text-xs text-white/80 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-green-400 inline-block" />
              online agora
            </p>
          </div>
        </DialogHeader>

        <div
          ref={scrollRef}
          className="h-[400px] overflow-y-auto p-4 space-y-2 bg-[#ECE5DD]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='2' cy='2' r='1' fill='%23d9d2c9'/></svg>\")",
          }}
        >
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-3 py-2 text-sm shadow ${
                  m.from === "user"
                    ? "bg-[#DCF8C6] text-slate-900 rounded-tr-none"
                    : "bg-white text-slate-800 rounded-tl-none"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex justify-start">
              <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 shadow flex gap-1">
                <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" />
                <span
                  className="h-2 w-2 rounded-full bg-slate-400 animate-bounce"
                  style={{ animationDelay: "0.15s" }}
                />
                <span
                  className="h-2 w-2 rounded-full bg-slate-400 animate-bounce"
                  style={{ animationDelay: "0.3s" }}
                />
              </div>
            </div>
          )}
        </div>

        {step !== "fim" ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit(input);
            }}
            className="flex items-center gap-2 p-3 bg-white border-t"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua resposta..."
              disabled={typing}
              className="flex-1 rounded-full border border-slate-300 px-4 py-2 text-sm focus:outline-none focus:border-[#128C7E]"
            />
            <button
              type="submit"
              disabled={typing || !input.trim()}
              className="h-10 w-10 rounded-full bg-[#128C7E] text-white grid place-items-center disabled:opacity-40"
              aria-label="Enviar"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        ) : (
          <div className="p-4 bg-white border-t space-y-2">
            <a
              href={finalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white font-semibold px-4 py-3 text-sm shadow hover:brightness-110 transition"
            >
              Falar com nosso especialista no WhatsApp
            </a>
            <p className="text-[11px] text-slate-500 text-center">
              Você será direcionado ao WhatsApp com o resumo do seu atendimento.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
