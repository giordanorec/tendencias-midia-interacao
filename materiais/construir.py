#!/usr/bin/env python3
"""Gera materiais/<slug>/index.html a partir de materiais/<slug>.md, com a casca da central.
Sem dependência: um conversor Markdown mínimo, para o subconjunto que estes documentos usam
(títulos, parágrafos, listas, tabelas, citações, código cercado, negrito/itálico/código/links).
Rode: python3 materiais/construir.py   (da raiz do repositório)"""
import re, html, unicodedata, pathlib, sys

RAIZ = pathlib.Path(__file__).resolve().parent
DOCS = [
    ("quinta-10-09",                   "Quinta 10/09", "Não tem aula ao vivo: o passo a passo para escolher o tema, deixar a skill e testar a de um colega, até domingo."),
    ("plano-2026-2",                   "Plano",       "O que a disciplina é, o que a turma escolheu, os três movimentos, o calendário e as decisões abertas."),
    ("atividade-03-skill-futurizacao", "Atividade 03", "Construa a sua ferramenta de futurização — as quatro exigências, os quatro arquivos, como se avalia."),
    ("formato-documento-tendencia",    "Formato",     "O documento de tendência: frontmatter, doze seções e o bloco da roda em YAML."),
    ("temas-tendencias-2026-2",        "Temas",       "Os 19 temas derivados do que a turma entregou, com a régua entre maduro e emergente."),
    ("movimento-3-experimento",        "Movimento 3", "O projeto-experimento: as três exigências, a aula de teste, o registro do que mudou e a nota."),
]

def slug(t):
    t = unicodedata.normalize("NFKD", t).encode("ascii", "ignore").decode()
    t = re.sub(r"[^a-zA-Z0-9]+", "-", t).strip("-").lower()
    return t or "secao"

def inline(s):
    s = html.escape(s, quote=False)
    codes = []
    def guarda(m):
        codes.append(m.group(1)); return f"\x00{len(codes)-1}\x00"
    s = re.sub(r"`([^`]+)`", guarda, s)
    s = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", s)
    s = re.sub(r"(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])", r"<em>\1</em>", s)
    s = re.sub(r"~~(.+?)~~", r"<del>\1</del>", s)
    s = re.sub(r"\[([^\]]+)\]\(([^)\s]+)\)", r'<a href="\2">\1</a>', s)
    s = re.sub(r"(?<![\"'>=])(https?://[^\s<)]+)", r'<a href="\1">\1</a>', s)
    s = re.sub(r"\x00(\d+)\x00", lambda m: f"<code>{codes[int(m.group(1))]}</code>", s)
    return s

def converter(md):
    linhas = md.split("\n"); out = []; i = 0; n = len(linhas)
    titulo = None; olho = []
    def flush_par(buf):
        if buf: out.append("<p>" + inline(" ".join(x.strip() for x in buf)) + "</p>")
    buf = []
    while i < n:
        l = linhas[i]
        # código cercado
        if l.startswith("```"):
            flush_par(buf); buf = []
            lang = l[3:].strip(); i += 1; bloco = []
            while i < n and not linhas[i].startswith("```"):
                bloco.append(linhas[i]); i += 1
            i += 1
            out.append(f'<pre><code class="lang-{html.escape(lang)}">' + html.escape("\n".join(bloco)) + "</code></pre>")
            continue
        # títulos
        m = re.match(r"^(#{1,4})\s+(.*)$", l)
        if m:
            flush_par(buf); buf = []
            nivel = len(m.group(1)); texto = m.group(2).strip()
            if nivel == 1 and titulo is None:
                titulo = texto; i += 1
                # linhas em itálico logo abaixo viram o olho
                while i < n and (linhas[i].strip() == "" or re.match(r"^\*[^*].*\*$", linhas[i].strip())):
                    if linhas[i].strip(): olho.append(linhas[i].strip().strip("*"))
                    i += 1
                continue
            mt = re.match(r"^(\d+)\s*·\s*(.*)$", texto)
            ident = f"tema-{mt.group(1)}" if mt else slug(texto)
            out.append(f'<h{nivel} id="{ident}">{inline(texto)}</h{nivel}>')
            i += 1; continue
        # régua
        if re.match(r"^-{3,}\s*$", l):
            flush_par(buf); buf = []; out.append("<hr>"); i += 1; continue
        # tabela
        if l.startswith("|") and i + 1 < n and re.match(r"^\|?\s*:?-{2,}", linhas[i+1]):
            flush_par(buf); buf = []
            cab = [c.strip() for c in l.strip().strip("|").split("|")]
            i += 2; corpo = []
            while i < n and linhas[i].startswith("|"):
                corpo.append([c.strip() for c in linhas[i].strip().strip("|").split("|")]); i += 1
            t = ['<div class="tabela-envolve"><table><thead><tr>']
            t += [f"<th>{inline(c)}</th>" for c in cab]; t.append("</tr></thead><tbody>")
            for r in corpo:
                t.append("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in r) + "</tr>")
            t.append("</tbody></table></div>"); out.append("".join(t)); continue
        # citação
        if l.startswith(">"):
            flush_par(buf); buf = []; q = []
            while i < n and linhas[i].startswith(">"):
                q.append(linhas[i][1:].strip()); i += 1
            pars = []; cur = []
            for x in q:
                if x == "": pars.append(cur); cur = []
                else: cur.append(x)
            pars.append(cur)
            out.append("<blockquote>" + "".join(f"<p>{inline(' '.join(p))}</p>" for p in pars if p) + "</blockquote>")
            continue
        # listas (um nível de aninhamento por recuo de 2+ espaços)
        ml = re.match(r"^(\s*)([-*]|\d+\.)\s+(.*)$", l)
        if ml:
            flush_par(buf); buf = []
            ordenada = ml.group(2)[0].isdigit()
            tag = "ol" if ordenada else "ul"
            itens = []
            while i < n:
                mm = re.match(r"^(\s*)([-*]|\d+\.)\s+(.*)$", linhas[i])
                if mm:
                    itens.append((len(mm.group(1)), mm.group(3))); i += 1
                elif linhas[i].startswith("  ") and itens and linhas[i].strip():
                    itens[-1] = (itens[-1][0], itens[-1][1] + " " + linhas[i].strip()); i += 1
                else: break
            h = [f"<{tag}>"]; aberto = False
            for rec, texto in itens:
                if rec >= 2:
                    if not aberto: h[-1] = h[-1][:-5] if h[-1].endswith("</li>") else h[-1]; h.append("<ul>"); aberto = True
                    h.append(f"<li>{inline(texto)}</li>")
                else:
                    if aberto: h.append("</ul></li>"); aberto = False
                    h.append(f"<li>{inline(texto)}</li>")
            if aberto: h.append("</ul></li>")
            h.append(f"</{tag}>"); out.append("".join(h)); continue
        # vazio
        if l.strip() == "":
            flush_par(buf); buf = []; i += 1; continue
        buf.append(l); i += 1
    flush_par(buf)
    return titulo or "", olho, "\n".join(out)

CASCA = """<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{titulo} — Tendências em Mídia e Interação</title>
<meta name="description" content="{descricao}">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='13' fill='%23db1e2f'/%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,600;1,6..72,300&family=JetBrains+Mono:wght@400;500&display=swap">
<link rel="canonical" href="https://tendencias-midia-interacao.vercel.app/materiais/{slug}/">
<link rel="stylesheet" href="/assets/tokens.css">
<link rel="stylesheet" href="/assets/base.css">
<link rel="stylesheet" href="/assets/hub.css">
<link rel="alternate" type="text/markdown" title="Este documento em Markdown" href="/materiais/{slug}.md">
<script>try{{var t=localStorage.getItem("tema");if(t==="claro"||t==="escuro")document.documentElement.setAttribute("data-tema",t);}}catch(e){{}}</script>
</head>
<body>
<a class="pular" href="#conteudo">Pular para o conteúdo</a>
<header class="topo">
  <div class="pagina topo__interno">
    <a class="marca" href="/"><span class="marca__ponto" aria-hidden="true"></span>Tendências em Mídia e Interação</a>
    <nav aria-label="Principal">
      <a href="/#agora">Agora</a>
      <a href="/#jornada">Jornada</a>
      <a href="/#calendario">Calendário</a>
      <a href="/#temas">Temas</a>
      <a href="/materiais/" aria-current="page">Materiais</a>
      <a href="/galeria/">Galerias</a>
      <button class="tema-btn" id="tema" type="button" aria-label="Alternar tema claro e escuro" title="Alternar tema">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
      </button>
    </nav>
  </div>
</header>
<main id="conteudo">
<section class="estreita doc-cabecalho">
  <p class="rotulo">Material · {rotulo} · CIN0055 · 2026.2</p>
  <h1 style="margin-top:var(--s-4)">{titulo}</h1>
  {olho}
  <p class="doc-nav">
    <a class="botao botao--linha" href="/">← Voltar à central</a>
    <a class="botao botao--discreto" href="/materiais/{slug}.md">Versão em Markdown</a>
  </p>
</section>
<section class="estreita doc-corpo">
  <article class="prosa">
{corpo}
  </article>
</section>
</main>
<footer class="rodape">
  <div class="pagina rodape__grade">
    <div>
      <p class="rotulo">CIN0055 · Tendências em Mídia e Interação</p>
      <p style="margin-top:var(--s-3);max-width:44ch">Centro de Informática da UFPE · 2026.2 · Prof. Giordano Cabral.</p>
    </div>
    <div>
      <p class="rotulo">Materiais</p>
      <ul style="margin-top:var(--s-3)">{lista}</ul>
    </div>
    <div>
      <p class="rotulo">A central</p>
      <ul style="margin-top:var(--s-3)"><li><a href="/#agora">Agora</a></li><li><a href="/#calendario">Calendário</a></li><li><a href="/hdr/">Hiper Deep Research</a></li></ul>
    </div>
  </div>
</footer>
<script src="/assets/hub.js"></script>
</body>
</html>
"""

INDICE = """<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Materiais — Tendências em Mídia e Interação</title>
<meta name="description" content="Todos os materiais da disciplina CIN0055 — Tendências em Mídia e Interação, CIn/UFPE 2026.2.">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='13' fill='%23db1e2f'/%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,600;1,6..72,300&family=JetBrains+Mono:wght@400;500&display=swap">
<link rel="stylesheet" href="/assets/tokens.css">
<link rel="stylesheet" href="/assets/base.css">
<link rel="stylesheet" href="/assets/hub.css">
<script>try{{var t=localStorage.getItem("tema");if(t==="claro"||t==="escuro")document.documentElement.setAttribute("data-tema",t);}}catch(e){{}}</script>
</head>
<body>
<header class="topo">
  <div class="pagina topo__interno">
    <a class="marca" href="/"><span class="marca__ponto" aria-hidden="true"></span>Tendências em Mídia e Interação</a>
    <nav aria-label="Principal">
      <a href="/#agora">Agora</a>
      <a href="/#jornada">Jornada</a>
      <a href="/#calendario">Calendário</a>
      <a href="/#temas">Temas</a>
      <a href="/materiais/" aria-current="page">Materiais</a>
      <a href="/galeria/">Galerias</a>
      <button class="tema-btn" id="tema" type="button" aria-label="Alternar tema claro e escuro" title="Alternar tema"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg></button>
    </nav>
  </div>
</header>
<main id="conteudo">
<section class="estreita doc-cabecalho">
  <p class="rotulo">CIN0055 · 2026.2</p>
  <h1 style="margin-top:var(--s-4)">Materiais</h1>
  <p class="olho">Tudo o que a disciplina publicou, em ordem de uso. Cada documento tem também uma versão em Markdown — é a que se dá a uma IA para ler.</p>
</section>
<section class="estreita doc-corpo">
  <h2>O que saiu do levantamento da turma</h2>
  <ul class="docs" style="margin-top:var(--s-4)">
    <li><a href="/temas/"><span><span class="docs__titulo">Os 19 temas — o mergulho</span><span class="docs__texto">O processamento das 5.776 ferramentas e 659 escolhas que a turma entregou: o mapa dos temas em cinco famílias, uma cena por tema com o que cada varredura trouxe, a régua entre maduro e emergente, as perguntas para a roda. É por aqui que se escolhe.</span></span><span class="docs__meta">/temas/</span></a></li>
    <li><a href="/temas/escolher/"><span><span class="docs__titulo">Escolher o meu tema · rodada cruzada</span><span class="docs__texto">A página da quinta assíncrona: escolha do tema (abre 10/09 às 8h), link da sua skill, teste da skill de um colega, e o sorteio da ordem na segunda.</span></span><span class="docs__meta">/temas/escolher/</span></a></li>
    <li><a href="/galeria/"><span><span class="docs__titulo">Galerias do que a turma escolheu</span><span class="docs__texto">As 50, as 5 e a 1 de cada aluno, nas duas unidades, abertas a qualquer pessoa.</span></span><span class="docs__meta">/galeria/</span></a></li>
  </ul>
  <h2 style="margin-top:var(--s-8)">Documentos</h2>
  <ul class="docs" style="margin-top:var(--s-4)">{itens}</ul>
  <h2 style="margin-top:var(--s-8)">Do movimento 1</h2>
  <ul class="docs" style="margin-top:var(--s-4)">
    <li><a href="/atividade/"><span><span class="docs__titulo">Hiper Deep Research — o enunciado</span><span class="docs__texto">O funil de 10.000 a 1, as duas entregas, o que a IA faz e o que não faz, o que se avalia.</span></span><span class="docs__meta">/atividade/</span></a></li>
    <li><a href="/exemplos/"><span><span class="docs__titulo">Exemplos de entrega</span><span class="docs__texto">Um exemplo de cada arquivo: o log da varredura, as 500, as fontes, a conversa com a IA, as diretrizes.</span></span><span class="docs__meta">/exemplos/</span></a></li>
    <li><a href="/llms.txt"><span><span class="docs__titulo">Instruções para IAs</span><span class="docs__texto">O papel de um agente que ajuda um aluno nesta disciplina: provocar, questionar, devolver a decisão.</span></span><span class="docs__meta">/llms.txt</span></a></li>
  </ul>
</section>
</main>
<footer class="rodape"><div class="pagina"><p class="rotulo">CIN0055 · Tendências em Mídia e Interação · CIn/UFPE · 2026.2</p></div></footer>
<script src="/assets/hub.js"></script>
</body>
</html>
"""

lista = "".join(f'<li><a href="/materiais/{s}/">{r}</a></li>' for s, r, _ in DOCS)
itens = []
for s, r, d in DOCS:
    md = (RAIZ / f"{s}.md").read_text(encoding="utf-8")
    titulo, olho, corpo = converter(md)
    olho_html = "".join(f'<p class="olho">{inline(o)}</p>' for o in olho)
    dest = RAIZ / s; dest.mkdir(exist_ok=True)
    (dest / "index.html").write_text(CASCA.format(titulo=html.escape(titulo), descricao=html.escape(d), slug=s,
        rotulo=r, olho=olho_html, corpo=corpo, lista=lista), encoding="utf-8")
    itens.append(f'<li><a href="/materiais/{s}/"><span><span class="docs__titulo">{html.escape(titulo)}</span><span class="docs__texto">{html.escape(d)}</span></span><span class="docs__meta">{r}</span></a></li>')
    print(f"ok  /materiais/{s}/  ← {titulo!r}  ({len(corpo)} chars)")
(RAIZ / "index.html").write_text(INDICE.format(itens="".join(itens)), encoding="utf-8")
print("ok  /materiais/")
