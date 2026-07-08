import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, MessageCircle, ShieldCheck } from "lucide-react";
import { blogPosts, getAdjacentPosts, getPostBySlug, WHATSAPP_URL, type BlogPost } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Artigo não encontrado — Rota Sul Segurança" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    const title = `${post.titulo} — Blog Rota Sul Segurança`;
    return {
      meta: [
        { title },
        { name: "description", content: post.resumo },
        { property: "og:title", content: title },
        { property: "og:description", content: post.resumo },
        { property: "og:image", content: post.img },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: post.img },
      ],
    };
  },
  component: BlogPostPage,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-background px-4 text-center">
      <div>
        <h1 className="text-2xl font-bold text-primary">Artigo não encontrado</h1>
        <p className="mt-2 text-muted-foreground">Talvez ele tenha mudado de endereço.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110"
        >
          Voltar para a home <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  ),
});

function BlogPostPage() {
  const { post } = Route.useLoaderData() as { post: BlogPost };
  const { prev, next } = getAdjacentPosts(post.slug);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground" style={{ fontFamily: "var(--font-sans)" }}>
      {/* Nav simples */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-primary/90 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-5 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white">
            <span className="grid place-items-center h-9 w-9 rounded-lg bg-accent text-accent-foreground">
              <ShieldCheck className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Rota Sul Segurança
            </span>
          </Link>
          <Link
            to="/"
            hash="blog"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-white/85 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Todos os artigos
          </Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-5 pt-10 pb-20">
        <Link
          to="/"
          hash="blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar ao blog
        </Link>

        <div className="mt-6 text-xs font-semibold tracking-widest text-accent uppercase">{post.cat}</div>
        <h1
          className="mt-3 text-3xl md:text-5xl font-bold leading-tight tracking-tight text-primary"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {post.titulo}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{post.resumo}</p>

        <img
          src={post.img}
          alt={post.titulo}
          className="mt-8 w-full rounded-2xl object-cover aspect-[16/9]"
          loading="eager"
        />

        <div className="mt-10 space-y-6">
          {post.conteudo.map((bloco, i) => (
            <div key={i}>
              {bloco.heading && (
                <h2
                  className="text-xl md:text-2xl font-bold text-primary mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {bloco.heading}
                </h2>
              )}
              <p className="text-base leading-relaxed text-foreground/85">{bloco.paragrafo}</p>
            </div>
          ))}
        </div>

        {/* CTA WhatsApp */}
        <div className="mt-12 rounded-2xl border border-accent/30 bg-gradient-to-br from-primary to-primary-deep p-6 md:p-8 text-white">
          <div className="text-xs font-semibold tracking-widest text-accent uppercase">Fale com um especialista</div>
          <h3
            className="mt-2 text-2xl md:text-3xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Quer aplicar isso na sua realidade?
          </h3>
          <p className="mt-3 text-white/80 text-sm md:text-base">
            Nossa equipe analisa seu cenário e responde em minutos pelo WhatsApp — sem compromisso.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-lg hover:brightness-110 transition"
          >
            <MessageCircle className="h-4 w-4" /> Falar no WhatsApp agora
          </a>
        </div>

        {/* Navegação prev/next */}
        <nav className="mt-12 grid sm:grid-cols-2 gap-4">
          {prev ? (
            <Link
              to="/blog/$slug"
              params={{ slug: prev.slug }}
              className="group rounded-xl border border-border bg-card p-5 hover:border-accent hover:shadow-md transition"
            >
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest inline-flex items-center gap-2">
                <ArrowLeft className="h-3.5 w-3.5" /> Anterior
              </div>
              <div className="mt-2 font-semibold text-primary group-hover:text-accent transition">{prev.titulo}</div>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to="/blog/$slug"
              params={{ slug: next.slug }}
              className="group rounded-xl border border-border bg-card p-5 hover:border-accent hover:shadow-md transition sm:text-right"
            >
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest inline-flex items-center gap-2 sm:justify-end sm:w-full">
                Próximo <ArrowRight className="h-3.5 w-3.5" />
              </div>
              <div className="mt-2 font-semibold text-primary group-hover:text-accent transition">{next.titulo}</div>
            </Link>
          ) : (
            <div />
          )}
        </nav>

        {/* Outros artigos */}
        <div className="mt-16">
          <h3
            className="text-xl font-bold text-primary mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Continue lendo
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 2)
              .map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg transition"
                >
                  <img src={p.img} alt={p.titulo} loading="lazy" className="h-36 w-full object-cover" />
                  <div className="p-4">
                    <div className="text-[11px] font-semibold text-accent uppercase tracking-widest">{p.cat}</div>
                    <div className="mt-1.5 font-semibold text-primary text-sm leading-snug">{p.titulo}</div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </div>
  );
}
