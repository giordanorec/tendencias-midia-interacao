import { DB } from "./db.js";
import { S, esc, nfmt, icone, $, app, parse, cid } from "./app.js";

const FASES = [["login", "1 entrar"], ["carga", "2 enviar as 500"], ["peneira", "3 peneirar"],
                ["escolha", "4 escolher as 50"], ["turma", "5 a turma"]];
let TMR = null;

export function chrome() {
  const k = FASES.findIndex(f => f[0] === S.fase);
  $("steps").innerHTML = FASES.map((f, i) =>
    `<b class="${i === k ? "on" : i < k ? "ok" : ""}" data-ir="${f[0]}">${f[1]}</b>`).join("");
  document.querySelectorAll("[data-ir]").forEach(b => b.onclick = () => {
    const f = b.dataset.ir;
    if (f === "turma" && S.login) return go("turma");
    if (f === "escolha" && S.itens.length) return go("escolha");
    if (f === "peneira" && S.itens.length) return go("peneira");
    if (f === "carga" && S.login) return go("carga");
  });
  let h = "";
  if (S.fase === "peneira") {
    h = `<div class="stat"><b>${Math.min(S.fp + 1, S.itens.length)}</b><small>de ${S.itens.length}</small></div>
         <div class="stat g"><b>${S.marc.size}</b><small>marcadas</small></div>`;
    $("prog").style.width = (S.fp / Math.max(1, S.itens.length) * 100) + "%";
  } else if (S.fase === "escolha") {
    h = `<div class="stat g"><b>${S.finais.size}</b><small>de 50</small></div>
         <div class="stat"><b>${S.marc.size}</b><small>marcadas</small></div>`;
    $("prog").style.width = Math.min(100, S.finais.size / 50 * 100) + "%";
  }
  if (S.login) h += `<div class="eu">entregando como <b>${esc(S.login)}</b></div>`;
  $("stats").innerHTML = h;
}
export function go(f) {
  clearTimeout(TMR); S.fase = f; chrome();
  ({ login: tLogin, carga: tCarga, peneira: tPeneira, escolha: tEscolha, turma: tTurma }[f])();
  window.scrollTo(0, 0);
}

/* ===== 1. entrar ===== */
function tLogin(msg) {
  const salvo = (() => { try { return localStorage.getItem("tmi_login") || ""; } catch (e) { return ""; } })();
  app.innerHTML = `
  <div class="panel" style="max-width:520px;margin:40px auto">
    <h1>Hiper Deep Research</h1>
    <p class="sub">Tendências em Mídia e Interação · 2026.2</p>
    ${msg ? `<div class="msg bad">${msg}</div>` : ""}
    <h3>Qual é o seu login do CIn?</h3>
    <p class="sub" style="font-size:13.5px">É como a turma vai ver as suas escolhas. Sem senha —
       a lista é aberta entre vocês.</p>
    <input type="text" id="lg" placeholder="ex.: yrv" value="${esc(salvo)}" autocomplete="off" autocapitalize="off" spellcheck="false">
    <div class="row"><button class="btn" id="e">Entrar</button></div>
  </div>`;
  const ir = async () => {
    const v = $("lg").value.trim().toLowerCase();
    if (!/^[a-z][a-z0-9]{1,11}$/.test(v)) return tLogin("Use o seu login do CIn — letras e números, sem espaço.");
    $("e").disabled = true; $("e").textContent = "Entrando…";
    try {
      await DB.entrar(v);
      S.login = v;
      try { localStorage.setItem("tmi_login", v); } catch (e) {}
      const minhas = await DB.minhasEscolhas(v);
      S.finais = new Map(minhas.map(m => [m.cid, m.nivel]));
      go(S.finais.size ? "turma" : "carga");
    } catch (err) { tLogin("Não consegui conectar: " + esc(err.message)); }
  };
  $("e").onclick = ir;
  $("lg").onkeydown = e => { if (e.key === "Enter") ir(); };
  $("lg").focus();
}

/* ===== 2. enviar as 500 ===== */
function tCarga(msg) {
  app.innerHTML = `
  <div class="panel">
    <h1>Envie o seu documento das 500</h1>
    <p class="sub">Tudo que você enviar entra no catálogo da turma. As ferramentas que outro aluno
       já escolheu <b>não vão aparecer</b> para você peneirar — some antes de começar.</p>
    ${msg ? `<div class="msg bad">${msg}</div>` : ""}
    <div class="drop" id="drop">
      <h3>Arraste o arquivo aqui, ou clique</h3>
      <p>.jsonl · .json · .csv · .md · .txt — com nome, link e descrição de cada ferramenta</p>
    </div>
    <input type="file" id="f" accept=".jsonl,.json,.csv,.tsv,.md,.txt" hidden>
    <div id="ok1"></div>
    <div class="row"><button class="btn" id="go" disabled>Enviar e começar</button></div>
  </div>`;
  const d = $("drop");
  d.onclick = () => $("f").click();
  $("f").onchange = e => e.target.files[0] && ler(e.target.files[0]);
  ["dragenter", "dragover"].forEach(v => d.addEventListener(v, e => { e.preventDefault(); d.classList.add("hot"); }));
  ["dragleave", "drop"].forEach(v => d.addEventListener(v, e => { e.preventDefault(); d.classList.remove("hot"); }));
  d.addEventListener("drop", e => { const x = e.dataTransfer.files[0]; if (x) ler(x); });
  $("go").onclick = enviar;
}
let ARQ = "";
function ler(file) {
  const r = new FileReader();
  r.onload = () => {
    let b; try { b = parse(r.result); } catch (e) { return tCarga("Erro ao ler: " + esc(e.message)); }
    if (!b.length) return tCarga("Não encontrei ferramentas nesse arquivo. Ele precisa ter nome e link de cada uma. Formatos: JSONL, JSON, CSV, Markdown com links, ou uma URL por linha.");
    S.brutos = b; ARQ = file.name;
    const comDesc = b.filter(x => (x.descricao || "").length > 40).length;
    $("ok1").innerHTML = `<div class="msg good"><b>${nfmt(b.length)}</b> ferramentas lidas de ${esc(file.name)}.
      ${comDesc < b.length * .5 ? `<br><b>Atenção:</b> só ${comDesc} têm descrição de verdade. Sem descrição a peneira
      vira adivinhação — volte na sua IA e peça o documento de novo, com 2 ou 3 frases explicando cada ferramenta.` : ""}</div>`;
    $("go").disabled = false;
  };
  r.readAsText(file, "utf-8");
}
async function enviar() {
  const b = S.brutos; if (!b) return;
  $("go").disabled = true;
  const passo = t => { $("ok1").innerHTML = `<div class="msg info"><span class="spin"></span> ${t}</div>`; };
  try {
    passo("Removendo repetidas…");
    const vis = new Map(); let dups = 0;
    for (const it of b) {
      const k = cid(it.url, it.nome);
      if (vis.has(k)) { dups++; const e = vis.get(k); if ((it.descricao || "").length > (e.descricao || "").length) e.descricao = it.descricao; continue; }
      it._cid = k; vis.set(k, it);
    }
    const unicos = [...vis.values()];
    passo(`Enviando ${nfmt(unicos.length)} ferramentas para o catálogo da turma…`);
    await DB.subirFerramentas(unicos, S.login, (f, t) => passo(`Enviando… ${nfmt(f)} de ${nfmt(t)}`));
    passo("Vendo o que a turma já escolheu…");
    S.turma = await DB.escolhasDaTurma();
    const meus = unicos.filter(x => { const t = S.turma.get(x._cid); return !t || t.quem === S.login; });
    S.removidos = unicos.length - meus.length;
    await DB.registrarUpload(S.login, ARQ, b.length, unicos.length, S.removidos);
    S.itens = meus; S.lidos = b.length; S.dups = dups;
    S.fp = 0; S.marc = new Set(); S.vist = new Set(); S.tempos = []; S.abriu = 0;
    for (const [c] of S.finais) S.marc.add(c);
    DB.evento(S.login, "upload", null, null, { lido: b.length, unico: unicos.length, ja_de_outros: S.removidos });
    go("peneira");
  } catch (err) {
    $("ok1").innerHTML = `<div class="msg bad">Falhou ao enviar: ${esc(err.message)}. Tente de novo — nada se perdeu.</div>`;
    $("go").disabled = false;
  }
}
export { tLogin, tCarga };

/* ===== 3. peneira ===== */
function tPeneira() {
  if (S.fp >= S.itens.length) return go("escolha");
  const it = S.itens[S.fp]; S.tItem = performance.now();
  app.innerHTML = `
  ${S.fp === 0 ? `<div class="msg info" style="margin-bottom:16px">
    <b>Marque tudo que parecer interessante — sem contar.</b> Não é a escolha final: depois você
    compara as marcadas entre si e corta até 50. Aqui a pergunta é só <i>"vale um segundo olhar?"</i>.
    ${S.removidos ? `<br><br>Tirei <b>${S.removidos}</b> que outro aluno já escolheu.` : ""}
    ${S.dups ? ` Tirei também <b>${S.dups}</b> repetidas.` : ""}</div>` : ""}
  <div class="card" id="card">
    ${icone(it)}
    <div class="cbody">
      ${it.categoria ? `<span class="tag">${esc(it.categoria)}</span>` : ""}
      <h2>${esc(it.nome)}</h2>
      <p class="desc">${it.descricao ? esc(it.descricao) : '<span style="color:var(--dim)">— sem descrição no seu arquivo —</span>'}</p>
      ${it.url ? `<a class="url" href="${esc(it.url)}" target="_blank" rel="noopener" id="lnk">↗ ${esc(it.url)}</a>` : ""}
    </div>
  </div>
  <div class="acts">
    <div class="act n" data-d="0"><kbd>←</kbd><small>passar</small></div>
    <div class="act y" data-d="1"><kbd>→</kbd><small>marcar</small></div>
  </div>
  <div class="hint"><b>espaço</b> abre o link · <b>Z</b> volta um · <b>E</b> encerra e vai escolher</div>`;
  document.querySelectorAll(".act").forEach(b => b.onclick = () => marcar(b.dataset.d === "1"));
}
function marcar(sim) {
  const it = S.itens[S.fp], ms = Math.round(performance.now() - S.tItem);
  S.vist.add(it._cid);
  if (sim) S.marc.add(it._cid); else S.marc.delete(it._cid);
  S.tempos.push(ms);
  DB.evento(S.login, sim ? "marcou" : "passou", it._cid, ms);
  const c = $("card"); if (c) c.classList.add(sim ? "oy" : "on");
  S.fp++;
  clearTimeout(TMR);
  TMR = setTimeout(() => { if (S.fase === "peneira") { chrome(); tPeneira(); } }, 120);
}
function voltar() {
  if (S.fp <= 0) return;
  clearTimeout(TMR); S.fp--;
  const it = S.itens[S.fp]; S.marc.delete(it._cid); S.vist.delete(it._cid); S.tempos.pop();
  DB.evento(S.login, "desfez", it._cid);
  chrome(); tPeneira();
}

/* ===== 4. escolher as 50 ===== */
let FILTRO = "marcadas", BUSCA = "";
function tEscolha() {
  const n = S.finais.size, faltam = 50 - n;
  const marcadas = S.itens.filter(x => S.marc.has(x._cid));
  const novas = S.itens.filter(x => !S.vist.has(x._cid) && !S.finais.has(x._cid));
  app.innerHTML = `
  <div class="panel" style="padding:22px 24px">
    <h1>Escolha as 50</h1>
    <p class="sub">Agora compare as marcadas <b>entre si</b>. Clicar grava na hora — a sua escolha
       fica reservada para você e some da lista dos colegas.</p>
    <div class="grid">
      <div class="box g"><b id="bn">${n}</b><small>escolhidas de 50</small></div>
      <div class="box"><b>${marcadas.length}</b><small>marcadas na peneira</small></div>
      <div class="box"><b>${nfmt(novas.length)}</b><small>não olhadas ainda</small></div>
    </div>
    <div id="aviso">${
      faltam > 0 && marcadas.length < 50 ? `<div class="msg bad"><b>Você marcou ${marcadas.length} e precisa de 50.</b>
        Foi rigoroso demais na peneira — normal. Use <b>não olhadas</b> para continuar de onde parou,
        ou <b>passadas</b> para rever o que deixou passar.</div>`
      : faltam > 0 ? `<div class="msg info">Faltam <b>${faltam}</b>.</div>`
      : `<div class="msg good">As 50 estão fechadas. Agora marque as ⭐ e a ⭐⭐ — depois vá em <b>a turma</b>.</div>`}</div>
    <p class="sub" style="font-size:13.5px;margin:4px 0 0">
      Nas suas escolhidas, clique na <b>⭐</b> para as 5 que você destaca, e na segunda ⭐ para a
      <b>melhor de todas</b>. É essa que você apresenta.</p>
  </div>
  <div class="toolbar">
    <button class="pill ${FILTRO === "marcadas" ? "on" : ""}" data-f="marcadas">marcadas (${marcadas.length})</button>
    <button class="pill ${FILTRO === "escolhidas" ? "on" : ""}" data-f="escolhidas">escolhidas (${n})</button>
    <button class="pill ${FILTRO === "passadas" ? "on" : ""}" data-f="passadas">passadas</button>
    ${novas.length ? `<button class="pill ${FILTRO === "novas" ? "on" : ""}" data-f="novas">não olhadas (${nfmt(novas.length)})</button>` : ""}
    <input type="text" id="q" placeholder="buscar por nome ou descrição…" value="${esc(BUSCA)}">
    <button class="btn sm" id="ver">Ver a turma</button>
  </div>
  <div class="gal" id="gal"></div>
  <div class="row" style="justify-content:center;margin-top:20px">
    <button class="btn gh sm" id="volta">Voltar para a peneira</button>
  </div>`;
  document.querySelectorAll("[data-f]").forEach(b => b.onclick = () => { FILTRO = b.dataset.f; tEscolha(); });
  $("q").oninput = e => { BUSCA = e.target.value; pinta(); };
  $("ver").onclick = () => go("turma");
  $("volta").onclick = () => go("peneira");
  pinta();

  function pinta() {
    let base = FILTRO === "marcadas" ? marcadas
      : FILTRO === "escolhidas" ? S.itens.filter(x => S.finais.has(x._cid))
      : FILTRO === "passadas" ? S.itens.filter(x => S.vist.has(x._cid) && !S.marc.has(x._cid))
      : novas;
    const q = BUSCA.toLowerCase().trim();
    if (q) base = base.filter(x => (x.nome + " " + (x.descricao || "") + " " + (x.categoria || "")).toLowerCase().includes(q));
    const lim = base.slice(0, 300);
    $("gal").innerHTML = lim.map(x => cartao(x)).join("")
      || `<div class="msg info" style="grid-column:1/-1">Nada aqui${q ? " com esse texto" : ""}.</div>`;
    if (base.length > 300) $("gal").insertAdjacentHTML("beforeend",
      `<div class="msg info" style="grid-column:1/-1">Mostrando 300 de ${nfmt(base.length)} — use a busca.</div>`);
    ligar();
  }
  function cartao(x) {
    const dentro = S.finais.has(x._cid), nv = S.finais.get(x._cid);
    return `<div class="mini ${dentro ? "in" : ""}" data-t="${esc(x._cid)}">
      <span class="mk">✓</span>${icone(x)}
      <div style="min-width:0">
        <h4>${esc(x.nome)}</h4>
        <p>${esc(x.descricao || x.url || "")}</p>
      </div>
      ${dentro ? `<div class="est">
        <span class="${nv === 5 || nv === 1 ? "on" : ""}" data-e5="${esc(x._cid)}" title="uma das minhas 5">★</span>
        <span class="${nv === 1 ? "on" : ""}" data-e1="${esc(x._cid)}" title="a melhor de todas">★</span>
      </div>` : ""}</div>`;
  }
  function ligar() {
    document.querySelectorAll("[data-t]").forEach(b => b.onclick = async ev => {
      if (ev.target.closest(".est")) return;
      const k = b.dataset.t;
      if (S.finais.has(k)) {
        S.finais.delete(k); b.classList.remove("in");
        await DB.desescolher(k, S.login);
        DB.evento(S.login, "tirou", k);
      } else {
        if (S.finais.size >= 50) return alerta("bad", "<b>Já são 50.</b> Para trocar, tire uma antes — clique numa que já tem ✓.");
        const r = await DB.escolher(k, S.login, 50);
        if (!r.ok && r.tomada) {
          b.style.opacity = ".3"; b.style.pointerEvents = "none";
          S.itens = S.itens.filter(y => y._cid !== k); S.marc.delete(k);
          return alerta("bad", `<b>${esc(r.quem)}</b> escolheu essa agora há pouco. Tirei da sua lista — escolha outra.`);
        }
        S.finais.set(k, 50); b.classList.add("in");
        DB.evento(S.login, "escolheu", k);
      }
      atualiza(); trocaCartao(k);
    });
    document.querySelectorAll("[data-e5]").forEach(b => b.onclick = async ev => {
      ev.stopPropagation();
      const k = b.dataset.e5, atual = S.finais.get(k);
      const novo = (atual === 5 || atual === 1) ? 50 : 5;
      S.finais.set(k, novo); await DB.marcarNivel(k, S.login, novo);
      DB.evento(S.login, "estrela", k, null, { nivel: novo }); trocaCartao(k);
    });
    document.querySelectorAll("[data-e1]").forEach(b => b.onclick = async ev => {
      ev.stopPropagation();
      const k = b.dataset.e1;
      if (S.finais.get(k) === 1) { S.finais.set(k, 5); await DB.marcarNivel(k, S.login, 5); }
      else {
        for (const [c, v] of S.finais) if (v === 1 && c !== k) { S.finais.set(c, 5); await DB.marcarNivel(c, S.login, 5); }
        S.finais.set(k, 1); await DB.marcarNivel(k, S.login, 1);
      }
      DB.evento(S.login, "estrela_top", k);
      document.querySelectorAll("[data-t]").forEach(c => trocaCartao(c.dataset.t));
    });
  }
  /* re-renderiza um cartao no lugar, sem mexer no resto da grade */
  function trocaCartao(k) {
    const velho = document.querySelector(`[data-t="${CSS.escape(k)}"]`);
    if (!velho) return;
    const it = S.itens.find(x => x._cid === k); if (!it) return;
    const tmp = document.createElement("div");
    tmp.innerHTML = cartao(it);
    velho.replaceWith(tmp.firstElementChild);
    ligar();
  }
  function atualiza() {
    const n2 = S.finais.size;
    const b = $("bn"); if (b) b.textContent = n2;
    chrome();
  }
  function alerta(tipo, html) {
    $("aviso").innerHTML = `<div class="msg ${tipo}">${html}</div>`;
    $("aviso").scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
}

/* ===== 5. a turma — substitui a planilha ===== */
let FT = "todas", QT = "";
async function tTurma() {
  app.innerHTML = `<div class="panel"><h1>A turma</h1>
    <p class="sub"><span class="spin"></span> Carregando o que todo mundo escolheu…</p></div>`;
  let linhas;
  try { linhas = await DB.listaDaTurma(); }
  catch (e) { app.innerHTML = `<div class="panel"><h1>A turma</h1>
    <div class="msg bad">Não consegui carregar: ${esc(e.message)}</div>
    <div class="row"><button class="btn" onclick="location.reload()">Tentar de novo</button></div></div>`; return; }

  const porAluno = {};
  for (const l of linhas) (porAluno[l.aluno] = porAluno[l.aluno] || []).push(l);
  const alunos = Object.keys(porAluno).sort();
  const meu = porAluno[S.login] || [];
  const top1 = meu.find(x => x.nivel === 1), top5 = meu.filter(x => x.nivel === 1 || x.nivel === 5);

  app.innerHTML = `
  <div class="panel" style="padding:22px 24px">
    <h1>A turma</h1>
    <p class="sub">Esta é a entrega — não existe planilha nem arquivo para mandar. O que está aqui é o que vale.</p>
    <div class="grid">
      <div class="box"><b>${nfmt(linhas.length)}</b><small>ferramentas na turma</small></div>
      <div class="box"><b>${alunos.length}</b><small>alunos entregando</small></div>
      <div class="box g"><b>${meu.length}</b><small>suas, de 50</small></div>
      <div class="box"><b>${top5.length}</b><small>suas com ★</small></div>
    </div>
    ${meu.length !== 50 || top5.length !== 5 || !top1 ? `<div class="msg ${meu.length ? "info" : "bad"}">
      Para fechar a sua entrega faltam:
      ${meu.length !== 50 ? `<br>· chegar a <b>50</b> escolhidas (você tem ${meu.length})` : ""}
      ${top5.length !== 5 ? `<br>· marcar <b>5 com ★</b> (você tem ${top5.length})` : ""}
      ${!top1 ? `<br>· marcar <b>1 com ★★</b> — a melhor de todas, que você apresenta` : ""}
      <br><br><button class="btn sm" id="ir">Voltar e ajustar</button></div>`
      : `<div class="msg good"><b>Entrega completa.</b> 50 escolhidas, 5 destacadas, e a melhor de todas
         é <b>${esc((top1.tmi_ferramentas || {}).nome || "")}</b>.</div>`}
  </div>
  <div class="toolbar">
    <button class="pill ${FT === "todas" ? "on" : ""}" data-t="todas">todas (${nfmt(linhas.length)})</button>
    <button class="pill ${FT === "minhas" ? "on" : ""}" data-t="minhas">minhas (${meu.length})</button>
    <button class="pill ${FT === "estrelas" ? "on" : ""}" data-t="estrelas">★ da turma</button>
    <input type="text" id="qt" placeholder="buscar…" value="${esc(QT)}">
    <button class="btn sm gh" id="voltar">Continuar escolhendo</button>
  </div>
  <div id="tab"></div>`;

  const ir = $("ir"); if (ir) ir.onclick = () => go(S.itens.length ? "escolha" : "carga");
  $("voltar").onclick = () => go(S.itens.length ? "escolha" : "carga");
  document.querySelectorAll("[data-t]").forEach(b => b.onclick = () => { FT = b.dataset.t; pinta(); });
  $("qt").oninput = e => { QT = e.target.value; pinta(); };
  pinta();

  function pinta() {
    let base = FT === "minhas" ? linhas.filter(l => l.aluno === S.login)
      : FT === "estrelas" ? linhas.filter(l => l.nivel === 5 || l.nivel === 1) : linhas;
    const q = QT.toLowerCase().trim();
    if (q) base = base.filter(l => {
      const f = l.tmi_ferramentas || {};
      return ((f.nome || "") + " " + (f.descricao || "") + " " + l.aluno).toLowerCase().includes(q);
    });
    base = [...base].sort((a, b) => (a.nivel - b.nivel) || a.aluno.localeCompare(b.aluno));
    $("tab").innerHTML = `<table class="lista">
      <thead><tr><th style="width:34px"></th><th>Ferramenta</th><th style="width:88px">Quem</th><th style="width:52px">★</th></tr></thead>
      <tbody>${base.slice(0, 600).map(l => {
        const f = l.tmi_ferramentas || {};
        return `<tr>
          <td>${icone({ nome: f.nome || "?", url: f.url, imagem: f.imagem })}</td>
          <td><b>${esc(f.nome || "—")}</b>
            ${f.url ? `<br><a class="url" style="padding:2px 7px;font-size:11px;margin-top:3px" href="${esc(f.url)}" target="_blank" rel="noopener">${esc(f.url)}</a>` : ""}
            ${f.descricao ? `<br><span style="color:var(--dim);font-size:12px">${esc(f.descricao.slice(0, 160))}</span>` : ""}</td>
          <td><span class="dono">${esc(l.aluno)}</span></td>
          <td style="color:var(--star);font-size:15px;white-space:nowrap">${l.nivel === 1 ? "★★" : l.nivel === 5 ? "★" : ""}</td>
        </tr>`;
      }).join("") || `<tr><td colspan="4" style="color:var(--dim);padding:18px">Nada aqui ainda.</td></tr>`}</tbody></table>
      ${base.length > 600 ? `<div class="msg info">Mostrando 600 de ${nfmt(base.length)} — use a busca.</div>` : ""}`;
  }
}

/* ===== teclado ===== */
document.addEventListener("keydown", e => {
  if (S.fase !== "peneira") return;
  const k = e.key;
  if (k === "ArrowRight") { e.preventDefault(); marcar(true); }
  else if (k === "ArrowLeft") { e.preventDefault(); marcar(false); }
  else if (k === " ") { e.preventDefault(); const l = $("lnk"); if (l) { S.abriu++; DB.evento(S.login, "abriu_link", null); window.open(l.href, "_blank", "noopener"); } }
  else if (k.toLowerCase() === "z") { e.preventDefault(); voltar(); }
  else if (k.toLowerCase() === "e") { e.preventDefault(); go("escolha"); }
});
window.addEventListener("beforeunload", () => DB.descarregar());
go("login");
