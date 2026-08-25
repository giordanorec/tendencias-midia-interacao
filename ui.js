import { DB } from "./db.js";
import { S, UNIDADES, esc, nfmt, icone, faixa, dominio, $, app, parse, cid } from "./app.js";

const FASES = [["login", "1 entrar"], ["carga", "2 entregar"],
                ["escolha", "3 escolher as 50"], ["turma", "4 a turma"]];
const U = UNIDADES[S.unidade];
const TEM_UNIDADE = ["inspiracao", "desenvolvimento"]
  .includes(new URLSearchParams(window.location.search).get("entrega"));
let TMR = null;

export function chrome() {
  const brand = document.querySelector(".brand");
  if (brand) brand.textContent = `Hiper Deep Research · ${U.nome}`;
  const gl = document.getElementById("link-galeria");
  if (gl) gl.href = U.galeria;
  const atual = S.fase === "foco" ? "escolha" : S.fase;
  const k = FASES.findIndex(f => f[0] === atual);
  $("steps").innerHTML = FASES.map((f, i) =>
    `<b class="${i === k ? "on" : i < k ? "ok" : ""}" data-ir="${f[0]}">${f[1]}</b>`).join("");
  void atual;
  document.querySelectorAll("[data-ir]").forEach(b => b.onclick = () => {
    const f = b.dataset.ir;
    if (f === "turma" && S.login) return go("turma");
    if (f === "escolha" && S.itens.length) return go("escolha");
    if (f === "carga" && S.login) return go("carga");
  });
  let h = "";
  if (S.fase === "escolha" || S.fase === "foco") {
    const c5 = [...S.finais.values()].filter(v => v === 5 || v === 1).length;
    h = `<div class="stat g"><b>${S.finais.size}</b><small>✓ de 50</small></div>
         <div class="stat"><b style="color:var(--no)">${c5}</b><small>♥ de 5</small></div>`;
    $("prog").style.width = Math.min(100, S.finais.size / 50 * 100) + "%";
  }
  if (S.login) h += `<div class="eu">entregando como <b>${esc(S.login)}</b></div>`;
  $("stats").innerHTML = h;
}
export function go(f) {
  clearTimeout(TMR); S.fase = f; chrome();
  ({ login: tLogin, carga: tCarga, escolha: tEscolha, foco: tFoco, turma: tTurma }[f])();
  window.scrollTo(0, 0);
}

function tUnidades() {
  S.fase = "unidades";
  $("steps").innerHTML = "";
  $("stats").innerHTML = "";
  $("prog").style.width = "0";
  const brand = document.querySelector(".brand");
  if (brand) brand.textContent = "Hiper Deep Research";
  app.innerHTML = `
  <section class="panel unit-hero">
    <span class="unit-kicker">Tendências em Mídia e Interação · CIn/UFPE · 2026.2</span>
    <h1>Duas entregas, dois tipos de ferramenta</h1>
    <p class="sub">O processo é o mesmo nas duas unidades — 10.000 → 500 → 50 → 5 → 1 —,
      mas os catálogos, as reservas e as galerias são completamente separados.</p>
    <div class="msg bad"><b>Entrega 1 — prazo extraordinário.</b> Quem ainda não entregou pode
      concluir até <b>quinta-feira, 27/08/2026</b>, e apresenta também na quinta-feira.</div>
  </section>
  <section class="unit-grid" aria-label="Escolha a entrega">
    <article class="unit-card inspiracao">
      <span class="unit-number">Entrega 1</span>
      <h2>Ferramentas de inspiração</h2>
      <p>Aplicativos, plataformas e serviços interessantes que você abre e usa diretamente para
        criar, explorar, organizar ou experimentar.</p>
      <p class="unit-rule"><b>Teste:</b> a ferramenta é, ela própria, o lugar onde você trabalha.</p>
      <div class="row"><a class="btn" href="/?entrega=inspiracao">Abrir a Entrega 1</a>
        <a class="btn gh" href="${UNIDADES.inspiracao.galeria}">Ver a galeria</a></div>
    </article>
    <article class="unit-card desenvolvimento">
      <span class="unit-number">Entrega 2</span>
      <h2>Ferramentas de desenvolvimento</h2>
      <p>APIs, bibliotecas, SDKs, frameworks, componentes e projetos open source que você consegue
        instalar, importar ou chamar <b>de dentro do seu próprio código</b>.</p>
      <p class="unit-rule"><b>Teste:</b> seu programa chama a ferramenta; ela vira parte do que você desenvolve.</p>
      <div class="row"><a class="btn" href="/?entrega=desenvolvimento">Abrir a Entrega 2</a>
        <a class="btn gh" href="${UNIDADES.desenvolvimento.galeria}">Ver a galeria</a></div>
    </article>
  </section>
  <section class="panel unit-note">
    <b>A fronteira em uma frase.</b> Midjourney usado no navegador é inspiração; uma API de geração
    de imagens chamada pelo seu código é desenvolvimento. Um produto pode oferecer os dois, mas
    nesta rodada você cadastra a interface programável que realmente conseguiria integrar.
  </section>`;
}

/* ===== 1. entrar ===== */
/* aceita o login puro (grec) ou o e-mail inteiro do CIn (grec@cin.ufpe.br) */
function normLogin(v) {
  let s = String(v || "").trim().toLowerCase().replace(/\s+/g, "");
  const at = s.indexOf("@");
  if (at >= 0) {
    const dom = s.slice(at + 1);
    if (!/^([a-z]+\.)?ufpe\.br$/.test(dom))
      return { erro: "Esse e-mail não é do CIn. Use <b>seulogin@cin.ufpe.br</b> ou só o login." };
    s = s.slice(0, at);
  }
  if (!/^[a-z][a-z0-9]{1,11}$/.test(s))
    return { erro: "Use o seu login do CIn — letras e números, sem espaço. Ex.: <b>grec</b> ou <b>grec@cin.ufpe.br</b>." };
  return { login: s };
}

function tLogin(msg) {
  const salvo = (() => { try { return localStorage.getItem("tmi_login") || ""; } catch (e) { return ""; } })();
  app.innerHTML = `
  <div class="panel" style="max-width:600px;margin:32px auto">
    <span class="unit-kicker">Entrega ${U.numero}</span>
    <h1>${esc(U.titulo)}</h1>
    <p class="sub" style="margin-bottom:22px">Tendências em Mídia e Interação · 2026.2 · ${esc(U.curta)}</p>
    ${msg ? `<div class="msg bad">${msg}</div>` : ""}

    ${S.unidade === "inspiracao" ? `<div class="msg bad"><b>Novo prazo para quem ainda não entregou:</b>
      quinta-feira, <b>27/08/2026</b>. A apresentação também será na quinta-feira.</div>` :
      `<div class="msg info"><b>O que entra nesta unidade:</b> APIs, bibliotecas, SDKs, frameworks,
      componentes e código aberto que possam ser instalados, importados ou chamados pelo seu código.
      Um aplicativo interessante usado manualmente pertence à Entrega 1, não a esta.</div>`}

    <div class="porta">
      <b>Comece por aqui — o método e a distinção entre as duas entregas estão explicados.</b>
      <p>O funil de 10.000 até 1, o que entregar, que ferramenta de IA usar (e como fazer sem pagar
         nada), as dicas de garimpo, o prazo. Uns cinco minutos de leitura.</p>
      <div class="row" style="margin-top:14px">
        <a class="btn" href="/atividade/#${S.unidade}">Ler a atividade</a>
        <a class="btn gh" href="/exemplos/">Ver os exemplos</a>
        <a class="btn gh" href="${U.galeria}">Ver esta galeria</a>
        <a class="btn gh" href="/">Trocar de entrega</a>
      </div>
    </div>

    <h3 style="margin-top:26px">Já leu? Entre com o seu login do CIn</h3>
    <p class="sub" style="font-size:13.5px">Pode ser só o login (<b>grec</b>) ou o e-mail inteiro
       (<b>grec@cin.ufpe.br</b>) — dá no mesmo. Sem senha. É por ele que o sistema sabe que a
       entrega é sua.</p>
    <input type="text" id="lg" placeholder="grec  ou  grec@cin.ufpe.br" value="${esc(salvo)}"
           autocomplete="off" autocapitalize="off" spellcheck="false">
    <div class="row"><button class="btn" id="e">Entrar</button></div>

    <div class="msg info" style="margin-top:22px">
      <b>Tenha estas quatro coisas à mão — a próxima tela pede as quatro juntas:</b>
      <div class="check">
        <div><i>1</i><span>O documento das <b>500</b> — nome, link e uma descrição de verdade de cada ferramenta.</span></div>
        <div><i>2</i><span>O <b>log completo</b> da varredura, do jeito bruto que saiu.</span></div>
        <div><i>3</i><span>As <b>fontes</b> que você varreu — de onde as referências vieram.</span></div>
        <div><i>4</i><span>A <b>conversa com a IA</b> transcrita <b>ou</b> as <b>diretrizes</b> que você deu para ela.</span></div>
      </div>
      <div style="margin-top:12px;padding-top:11px;border-top:1px solid #2b2247">
        Cada um deles está explicado, com exemplo, em
        <a href="/atividade/#entregar" style="color:#b9a6ff">o que entregar</a>.
      </div>
    </div>
  </div>`;
  const ir = async () => {
    const r = normLogin($("lg").value);
    if (r.erro) return tLogin(r.erro);
    const v = r.login;
    $("e").disabled = true; $("e").textContent = "Entrando…";
    try {
      await DB.entrar(v);
      S.login = v;
      try { localStorage.setItem("tmi_login", v); } catch (e) {}
      $("e").textContent = "Carregando a sua galeria…";
      const [minhas, cat] = await Promise.all([
        DB.minhasEscolhas(v),
        DB.meuCatalogo(v).catch(() => []),
      ]);
      S.finais = new Map(minhas.map(m => [m.cid, m.nivel]));
      if (cat.length) {
        S.itens = cat;
        for (const x of cat) if (x.capa) CAPAS.set(x._cid, x.capa);
        S.turma = await DB.escolhasDaTurma();
        return go("escolha");
      }
      go(S.finais.size ? "turma" : "carga");
    } catch (err) { tLogin("Não consegui conectar: " + esc(err.message)); }
  };
  $("e").onclick = ir;
  $("lg").onkeydown = e => { if (e.key === "Enter") ir(); };
  $("lg").focus();
}

/* ===== 2. a entrega ===== */
const MAXB = 45 * 1024 * 1024;
const ENV = { cat: null, catNome: "", log: null, logLinhas: 0, logUrls: 0,
              fontes: null, fontesItens: 0, metodo: null };

const kb = n => n < 1024 ? n + " B"
  : n < 1048576 ? (n / 1024).toFixed(0) + " KB"
  : (n / 1048576).toFixed(1) + " MB";

const caixa = (id, n, tit, sub, aceita, extra) => `
  <div class="slot" id="w-${id}">
    <div class="slot-h"><i class="num" id="n-${id}">${n}</i>
      <div><b>${tit}</b><div class="sub">${sub}</div></div></div>
    <div class="drop sm" id="d-${id}"><h3>Arraste aqui, ou clique</h3><p>${aceita}</p></div>
    <input type="file" id="f-${id}" hidden>
    ${extra || ""}
    <div id="ok-${id}"></div>
  </div>`;

function tCarga(msg) {
  app.innerHTML = `
  <div class="panel">
    <span class="unit-kicker">Entrega ${U.numero} · ${esc(U.nome)}</span>
    <h1>A sua entrega</h1>
    <p class="sub">Quatro coisas, e nenhuma é opcional. Não existe planilha nem anexo por fora: o que ficar
       gravado aqui é o que vale. As ferramentas que outra pessoa já escolheu aparecem com a borda
       cinza na galeria: você vê o que são, mas não pode pegá-las.
       <br><a class="url" href="/atividade/#entregar" target="_blank" rel="noopener">O que se espera de cada um</a>
       <a class="url" href="/exemplos/" target="_blank" rel="noopener" style="margin-left:6px">Ver um exemplo de cada um</a></p>
    ${msg ? `<div class="msg bad">${msg}</div>` : ""}

    ${caixa("cat", 1, "O documento das 500",
      "Entra no catálogo da turma. Precisa de nome, link e descrição de cada ferramenta.",
      ".jsonl · .json · .csv · .tsv · .md · .txt")}

    ${caixa("log", 2, "O log completo da varredura",
      "As dezenas de milhares, do jeito bruto que saíram. Não entra no catálogo — é a prova do tamanho da varredura.",
      "qualquer arquivo de texto · .jsonl · .csv · .txt · .md")}

    ${caixa("fon", 3, "As fontes que você varreu",
      "De onde as referências vieram: diretórios, newsletters, repositórios, buscas, o que for.",
      ".md · .txt · .csv · .json")}

    ${caixa("met", 4, "Como a IA escolheu as 500",
      "A conversa transcrita <b>ou</b> as diretrizes que você deu para ela peneirar. Uma das duas basta.",
      ".md · .txt · .json · .pdf",
      `<div class="ou">— ou escreva aqui mesmo —</div>
       <textarea id="t-met" rows="6" placeholder="Cole aqui o prompt ou as diretrizes que a IA seguiu para sair de dezenas de milhares para 500: o que contava como interessante, o que descartava na hora, como resolveu empate…"></textarea>
       <div class="sub" id="c-met">0 caracteres — o mínimo é 200.</div>`)}

    <div id="ok1"></div>
    <div class="row"><button class="btn" id="go" disabled>Enviar tudo e começar a peneirar</button></div>
    <p class="sub" style="font-size:12.5px">Pode voltar aqui e reenviar qualquer um dos quatro até o prazo.</p>
  </div>`;

  liga("cat", lerCat); liga("log", lerLog); liga("fon", lerFontes); liga("met", lerMetodo);
  const t = $("t-met");
  t.oninput = () => {
    const n = t.value.trim().length;
    $("c-met").innerHTML = n >= 200
      ? `<b style="color:var(--yes)">${nfmt(n)} caracteres</b> — serve.`
      : `${nfmt(n)} caracteres — o mínimo é 200.`;
    if (n) { ENV.metodo = null; $("ok-met").innerHTML = ""; }
    checa();
  };
  restaura();
  $("go").onclick = enviar;
}

function liga(id, aoLer) {
  const d = $("d-" + id), inp = $("f-" + id);
  d.onclick = () => inp.click();
  inp.onchange = e => { if (e.target.files[0]) aoLer(e.target.files[0]); inp.value = ""; };
  ["dragenter", "dragover"].forEach(v => d.addEventListener(v, e => { e.preventDefault(); d.classList.add("hot"); }));
  ["dragleave", "drop"].forEach(v => d.addEventListener(v, e => { e.preventDefault(); d.classList.remove("hot"); }));
  d.addEventListener("drop", e => { e.preventDefault(); const x = e.dataTransfer.files[0]; if (x) aoLer(x); });
}

function feito(id, html) { $("ok-" + id).innerHTML = `<div class="msg good">${html}</div>`; $("n-" + id).classList.add("ok"); checa(); }
function falhou(id, html) { $("ok-" + id).innerHTML = `<div class="msg bad">${html}</div>`; $("n-" + id).classList.remove("ok"); checa(); }
function grande(f) { return f.size > MAXB ? `<b>${esc(f.name)}</b> tem ${kb(f.size)} — o limite é 45 MB. Compacte ou divida o arquivo.` : null; }

function texto(file) {
  return new Promise((ok, nao) => {
    const r = new FileReader();
    r.onload = () => ok(r.result); r.onerror = () => nao(new Error("não consegui ler o arquivo"));
    r.readAsText(file, "utf-8");
  });
}

async function lerCat(file) {
  const g = grande(file); if (g) return falhou("cat", g);
  let b;
  try { b = parse(await texto(file)); } catch (e) { return falhou("cat", "Erro ao ler: " + esc(e.message)); }
  if (!b.length) return falhou("cat", "Não encontrei ferramentas nesse arquivo. Ele precisa ter <b>nome e link</b> de cada uma. Formatos: JSONL, JSON, CSV, Markdown com links, ou uma URL por linha.");
  ENV.cat = b; ENV.catNome = file.name;
  const comDesc = b.filter(x => (x.descricao || "").length > 40).length;
  feito("cat", `<b>${nfmt(b.length)}</b> ferramentas lidas de ${esc(file.name)} · ${kb(file.size)}
    ${comDesc < b.length * .5 ? `<br><b>Atenção:</b> só ${nfmt(comDesc)} têm descrição de verdade. Sem descrição
    a peneira vira adivinhação — volte na sua IA e peça o documento de novo, com 2 ou 3 frases por ferramenta.` : ""}`);
}

const RXURL = /https?:\/\/[^\s"'<>,;)\]}]+/g;
async function lerLog(file) {
  const g = grande(file); if (g) return falhou("log", g);
  ENV.log = file; ENV.logLinhas = 0; ENV.logUrls = 0;
  let aviso = "";
  if (file.size <= 30 * 1024 * 1024) {
    try {
      const t = await texto(file);
      ENV.logLinhas = t.split(/\r?\n/).filter(l => l.trim()).length;
      const u = new Set(); let m;
      while ((m = RXURL.exec(t))) u.add(cid(m[0]));
      RXURL.lastIndex = 0;
      ENV.logUrls = u.size;
      if (ENV.logUrls && ENV.logUrls < 2000)
        aviso = `<br><b>Atenção:</b> encontrei ${nfmt(ENV.logUrls)} endereços distintos. A atividade pede
                 <b>dezenas de milhares</b> de linhas varridas — se esse é o log inteiro, a varredura foi curta demais.`;
    } catch (e) { /* log gigante ou binario: guarda mesmo assim */ }
  }
  feito("log", `<b>${esc(file.name)}</b> · ${kb(file.size)}
    ${ENV.logLinhas ? ` · ${nfmt(ENV.logLinhas)} linhas · ${nfmt(ENV.logUrls)} endereços distintos` : ""}${aviso}`);
}

async function lerFontes(file) {
  const g = grande(file); if (g) return falhou("fon", g);
  ENV.fontes = file; ENV.fontesItens = 0;
  try {
    const t = await texto(file);
    const u = new Set(); let m;
    while ((m = RXURL.exec(t))) u.add(m[0]);
    RXURL.lastIndex = 0;
    ENV.fontesItens = u.size;
  } catch (e) {}
  feito("fon", `<b>${esc(file.name)}</b> · ${kb(file.size)}${ENV.fontesItens ? ` · ${nfmt(ENV.fontesItens)} endereços citados` : ""}`);
}

async function lerMetodo(file) {
  const g = grande(file); if (g) return falhou("met", g);
  ENV.metodo = file;
  const t = $("t-met"); if (t) { t.value = ""; $("c-met").innerHTML = "0 caracteres — o mínimo é 200."; }
  feito("met", `<b>${esc(file.name)}</b> · ${kb(file.size)}`);
}

function metodoTexto() { const t = $("t-met"); return t ? t.value.trim() : ""; }
function temMetodo() { return !!ENV.metodo || metodoTexto().length >= 200; }

function checa() {
  const falta = [];
  if (!ENV.cat) falta.push("as 500");
  if (!ENV.log) falta.push("o log");
  if (!ENV.fontes) falta.push("as fontes");
  if (!temMetodo()) falta.push("a conversa ou as diretrizes");
  const b = $("go"); if (!b) return;
  b.disabled = falta.length > 0;
  b.textContent = falta.length
    ? "Falta " + (falta.length === 1 ? falta[0] : falta.slice(0, -1).join(", ") + " e " + falta.slice(-1))
    : "Enviar tudo e começar a peneirar";
}

/* se o aluno ja entregou antes, mostra o que esta gravado */
async function restaura() {
  checa();
  let e = null;
  try { e = await DB.minhaEntrega(S.login); } catch (err) { return; }
  if (!e || S.fase !== "carga") return;
  const antes = [];
  if (e.log_path) antes.push(`log (${esc(e.log_arquivo || "")})`);
  if (e.fontes_path) antes.push(`fontes (${esc(e.fontes_arquivo || "")})`);
  if (e.metodo_path || e.metodo_texto) antes.push("conversa/diretrizes");
  if (e.cat_arquivo) antes.push(`${nfmt(e.cat_lidos || 0)} ferramentas (${esc(e.cat_arquivo)})`);
  if (!antes.length) return;
  $("ok1").innerHTML = `<div class="msg info">Você já enviou antes: ${antes.join(" · ")}.
    Reenviar substitui o que estava lá.</div>`;
}

async function enviar() {
  if (!ENV.cat) return;
  const txtMet = metodoTexto();
  $("go").disabled = true;
  const passo = t => { $("ok1").innerHTML = `<div class="msg info"><span class="spin"></span> ${t}</div>`; };
  try {
    passo("Guardando o log da varredura…");
    const logPath = await DB.subirArquivo(S.login, "log", ENV.log);
    passo("Guardando as fontes…");
    const fonPath = await DB.subirArquivo(S.login, "fontes", ENV.fontes);
    let metPath = null;
    if (ENV.metodo) { passo("Guardando a conversa…"); metPath = await DB.subirArquivo(S.login, "metodo", ENV.metodo); }
    const agora = new Date().toISOString();
    await DB.salvarEntrega(S.login, {
      log_arquivo: ENV.log.name, log_bytes: ENV.log.size, log_linhas: ENV.logLinhas || null,
      log_urls: ENV.logUrls || null, log_path: logPath, log_em: agora,
      fontes_arquivo: ENV.fontes.name, fontes_bytes: ENV.fontes.size,
      fontes_itens: ENV.fontesItens || null, fontes_path: fonPath, fontes_em: agora,
      metodo_tipo: ENV.metodo ? "arquivo" : "escrito",
      metodo_arquivo: ENV.metodo ? ENV.metodo.name : null,
      metodo_bytes: ENV.metodo ? ENV.metodo.size : null,
      metodo_path: metPath, metodo_texto: ENV.metodo ? null : txtMet, metodo_em: agora,
    });

    passo("Removendo repetidas…");
    const b = ENV.cat, vis = new Map(); let dups = 0;
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
    S.removidos = unicos.filter(x => { const t = S.turma.get(x._cid); return t && t.quem !== S.login; }).length;
    const meus = unicos;
    await DB.registrarUpload(S.login, ENV.catNome, b.length, unicos.length, S.removidos);
    await DB.salvarEntrega(S.login, {
      cat_arquivo: ENV.catNome, cat_lidos: b.length, cat_unicos: unicos.length, cat_em: agora,
    });
    S.itens = meus; S.lidos = b.length; S.dups = dups;
    S.fp = 0; S.vist = new Set(); S.tempos = []; S.abriu = 0;
    DB.evento(S.login, "entrega", null, null, {
      lido: b.length, unico: unicos.length, ja_de_outros: S.removidos,
      log_linhas: ENV.logLinhas, log_urls: ENV.logUrls, metodo: ENV.metodo ? "arquivo" : "texto",
    });
    go("escolha");
  } catch (err) {
    $("ok1").innerHTML = `<div class="msg bad">Falhou ao enviar: ${esc(err.message)}.
      ${err.detalhe ? `<br><small>${esc(String(err.detalhe))}</small>` : ""}
      <br>Tente de novo — nada se perdeu.</div>`;
    $("go").disabled = false;
  }
}
export { tLogin, tCarga };

/* ===== avisos flutuantes ===== */
let TTOAST = null;
function aviso(tipo, html) {
  let t = $("toast");
  if (!t) { t = document.createElement("div"); t.id = "toast"; document.body.appendChild(t); }
  t.className = "toast " + tipo; t.innerHTML = html;
  requestAnimationFrame(() => t.classList.add("mostra"));
  clearTimeout(TTOAST);
  TTOAST = setTimeout(() => t.classList.remove("mostra"), 5200);
}

/* ===== as tres acoes de um cartao, usadas pela galeria e pelo modo foco =====
   ✓ = uma das 50  ·  ♥ = uma das 5  ·  ★ = a que vai apresentar          */
let REDESENHA = () => {};
const conta5 = () => [...S.finais.values()].filter(v => v === 5 || v === 1).length;

async function acao(k, tipo) {
  const q = dono({ _cid: k });
  if (q) return aviso("bad", "<b>Essa já foi escolhida.</b> Cada ferramenta só pode ser de uma pessoa — escolha outra.");
  const nv = S.finais.get(k), dentro = S.finais.has(k);
  const mudou = [k];

  if (tipo === "sel") {
    if (dentro) {
      S.finais.delete(k); S.turma.delete(k);
      await DB.desescolher(k, S.login);
      DB.evento(S.login, "tirou", k);
    } else {
      if (S.finais.size >= 50)
        return aviso("bad", "<b>Já são 50.</b> Para trocar, tire o ✓ de outra antes.");
      const r = await DB.escolher(k, S.login, 50);
      if (!r.ok && r.tomada) {
        S.turma.set(k, { quem: r.quem, nivel: 50 });
        REDESENHA(mudou);
        return aviso("bad", "<b>Alguém pegou essa agora há pouco.</b> Ficou marcada como já escolhida — escolha outra.");
      }
      S.finais.set(k, 50); S.turma.set(k, { quem: S.login, nivel: 50 });
      DB.evento(S.login, "escolheu", k);
    }
  } else if (tipo === "cor") {
    if (!dentro) return aviso("info", "Marque o <b>✓</b> primeiro — o ♥ é para escolher 5 entre as suas 50.");
    if (nv === 5 || nv === 1) { S.finais.set(k, 50); await DB.marcarNivel(k, S.login, 50); }
    else {
      if (conta5() >= 5) return aviso("bad", "<b>Já são 5 com ♥.</b> Tire o coração de outra antes.");
      S.finais.set(k, 5); await DB.marcarNivel(k, S.login, 5);
    }
    DB.evento(S.login, "coracao", k, null, { nivel: S.finais.get(k) });
  } else if (tipo === "est") {
    if (!dentro) return aviso("info", "Marque o <b>✓</b> primeiro — a ★ é a melhor entre as suas.");
    if (nv === 1) { S.finais.set(k, 5); await DB.marcarNivel(k, S.login, 5); }
    else {
      if (nv !== 5 && conta5() >= 5)
        return aviso("bad", "<b>A ★ tem que estar entre as 5.</b> Já são 5 com ♥ — tire um coração antes.");
      const antigas = [...S.finais].filter(([c, v]) => v === 1 && c !== k).map(([c]) => c);
      for (const c of antigas) { S.finais.set(c, 5); await DB.marcarNivel(c, S.login, 5); }
      S.finais.set(k, 1); await DB.marcarNivel(k, S.login, 1);
      mudou.push(...antigas);
    }
    DB.evento(S.login, "estrela", k);
  }
  REDESENHA(mudou);
}

/* ===== modo foco — um por vez, grande, aberto de qualquer cartao ===== */
const FOCO = { lista: [], i: 0, cid: null };

function abrirFoco(lista, i) {
  FOCO.lista = lista;
  FOCO.i = Math.max(0, Math.min(i, lista.length - 1));
  FOCO.cid = (lista[FOCO.i] || {})._cid || null;
  go("foco");
}
function andar(d) {
  const n = FOCO.lista.length; if (!n) return;
  const ms = Math.round(performance.now() - (S.tItem || performance.now()));
  if (FOCO.cid && ms > 500) DB.evento(S.login, "olhou", FOCO.cid, ms);
  FOCO.i = (FOCO.i + d + n) % n;
  FOCO.cid = (FOCO.lista[FOCO.i] || {})._cid || null;
  tFoco();
}
function tFoco() {
  const it = FOCO.lista[FOCO.i];
  if (!it) return go("escolha");
  S.tItem = performance.now();
  S.vist.add(it._cid);
  REDESENHA = () => tFoco();
  enfileirar([it._cid], true);
  enfileirar(FOCO.lista.slice(FOCO.i + 1, FOCO.i + 9).map(x => x._cid), true);
  const q = dono(it), nv = S.finais.get(it._cid), dentro = S.finais.has(it._cid);
  app.innerHTML = `
  <div class="foco-topo">
    <button class="btn sm gh" id="ant" title="anterior (←)">←</button>
    <span class="pos"><b>${nfmt(FOCO.i + 1)}</b> de ${nfmt(FOCO.lista.length)}</span>
    <button class="btn sm gh" id="prox" title="próxima (→)">→</button>
    <span style="flex:1"></span>
    <button class="btn sm" id="fechar">voltar para a galeria</button>
  </div>
  <div class="foco ${dentro ? "in" : ""} ${q ? "tomada" : ""}">
    <div class="foco-capa">${faixa(it, CAPAS.get(it._cid))}</div>
    <div class="foco-txt">
      ${it.categoria ? `<span class="cat">${esc(it.categoria)}</span>` : ""}
      <h2>${esc(it.nome)}</h2>
      <p class="desc">${it.descricao ? esc(it.descricao)
        : '<span style="color:var(--dim)">— o seu arquivo não trouxe descrição para esta —</span>'}</p>
      ${it.url ? `<a class="url" href="${esc(it.url)}" target="_blank" rel="noopener" id="lnk">↗ ${esc(it.url)}</a>` : ""}
      ${q ? `<div class="msg" style="margin:18px 0 0;background:#191922;border:1px solid #3a3a4a;color:#a9a9bd">
             <b>Esta já foi escolhida.</b> Cada ferramenta só pode ser de uma pessoa — mas você pode
             olhar à vontade, e é a mesma que vai aparecer na galeria da turma no fim.</div>`
      : `<div class="foco-acoes">
          <button class="btn ${dentro ? "gh" : ""}" id="bsel">${dentro ? "✓ escolhida — tirar" : "✓ escolher"}</button>
          <button class="bt cor gr ${nv === 5 || nv === 1 ? "on" : ""}" id="bcor" title="uma das 5 (C)">♥</button>
          <button class="bt est gr ${nv === 1 ? "on" : ""}" id="best" title="a que você apresenta (E)">★</button>
        </div>`}
      <div class="hint" style="text-align:left;margin-top:16px">
        <b>←</b> <b>→</b> navegar · <b>enter</b> escolher · <b>C</b> coração · <b>E</b> estrela ·
        <b>espaço</b> abre o link · <b>esc</b> volta para a galeria</div>
    </div>
  </div>`;
  $("ant").onclick = () => andar(-1);
  $("prox").onclick = () => andar(1);
  $("fechar").onclick = () => { VOLTAR_A = FOCO.cid; go("escolha"); };
  if (!q) {
    $("bsel").onclick = () => acao(it._cid, "sel");
    $("bcor").onclick = () => acao(it._cid, "cor");
    $("best").onclick = () => acao(it._cid, "est");
  }
}

/* ===== 3. escolher — a galeria ===== */
let FILTRO = "todas", BUSCA = "", QUANTOS = 400, SINC = null, VOLTAR_A = null;
const CAPAS = new Map();     // cid -> url da capa, ou null se o site nao tem
const PEDIDAS = new Set();
const VISTO = new Map();     // cid -> quando entrou na tela
const CONTADO = new Set();
let FILA = [], TCAP = null, OBS = null, DRENOS = 0;

const dono = x => { const t = S.turma.get(x._cid || x.cid); return t && t.quem !== S.login ? t.quem : null; };

/* ---- capas: enche o catalogo em segundo plano, com prioridade para o que esta na tela ---- */
const MAXDRENOS = 3;
function agendaCapas() {
  clearTimeout(TCAP);
  TCAP = setTimeout(() => {
    while (DRENOS < MAXDRENOS && FILA.length) {
      DRENOS++;
      drenar().catch(() => {}).finally(() => { DRENOS--; agendaCapas(); });
    }
    progresso();
  }, 150);
}
async function drenar() {
  const lote = FILA.splice(0, 24);
  if (!lote.length) return;
  let r = {};
  try { r = await DB.capasDe(lote); }
  catch (e) { lote.forEach(k => PEDIDAS.delete(k)); return; }
  for (const k of lote) { const u = r[k] || null; CAPAS.set(k, u); if (u) poeCapa(k, u); }
  progresso();
}
function progresso() {
  const el = $("prg"); if (!el) return;
  const falta = FILA.length + DRENOS * 24;
  el.textContent = falta > 0 ? `buscando imagens… faltam ${nfmt(Math.max(0, falta))}` : "";
}
function enfileirar(cids, naFrente) {
  const novos = cids.filter(k => !CAPAS.has(k) && !PEDIDAS.has(k));
  if (!novos.length) return;
  novos.forEach(k => PEDIDAS.add(k));
  if (naFrente) FILA.unshift(...novos); else FILA.push(...novos);
  agendaCapas();
}
function poeCapa(k, url) {
  document.querySelectorAll(`[data-t="${CSS.escape(k)}"] .capa`).forEach(c => {
    if (c.querySelector(".cv")) return;
    const img = new Image();
    img.className = "cv"; img.loading = "lazy"; img.decoding = "async"; img.alt = "";
    img.onerror = () => img.remove();
    img.src = url;
    c.insertBefore(img, c.querySelector(".fv"));
  });
}

/* ---- olho: pede capa do que aparece e mede quanto tempo ficou na tela ---- */
function observar() {
  if (OBS) OBS.disconnect();
  OBS = new IntersectionObserver(ents => {
    for (const e of ents) {
      const k = e.target.dataset.t; if (!k) continue;
      if (e.isIntersecting) {
        if (!VISTO.has(k)) VISTO.set(k, performance.now());
        enfileirar([k], true);
      } else {
        const t0 = VISTO.get(k);
        if (t0 == null) continue;
        VISTO.delete(k);
        S.vist.add(k);
        const ms = Math.round(performance.now() - t0);
        if (ms > 700 && !CONTADO.has(k)) { CONTADO.add(k); DB.evento(S.login, "viu", k, ms); }
      }
    }
  }, { rootMargin: "900px 0px" });
  document.querySelectorAll(".cart[data-t]").forEach(c => OBS.observe(c));
}

function cartao(x) {
  const q = dono(x), nv = S.finais.get(x._cid), dentro = S.finais.has(x._cid);
  return `<div class="cart ${dentro ? "in" : ""} ${q ? "tomada" : ""}" data-t="${esc(x._cid)}">
    ${faixa(x, CAPAS.get(x._cid))}
    ${q ? `<span class="quem">já escolhida</span>` : `
    <div class="acoes">
      <button class="bt sel ${dentro ? "on" : ""}" data-a="sel" data-k="${esc(x._cid)}"
        title="${dentro ? "tirar das minhas 50" : "escolher — uma das 50"}">✓</button>
      ${dentro ? `<button class="bt cor ${nv === 5 || nv === 1 ? "on" : ""}" data-a="cor" data-k="${esc(x._cid)}"
        title="uma das 5">♥</button>
      <button class="bt est ${nv === 1 ? "on" : ""}" data-a="est" data-k="${esc(x._cid)}"
        title="a que você apresenta">★</button>` : ""}
    </div>`}
    <div class="txt">
      ${x.categoria ? `<span class="cat">${esc(x.categoria)}</span>` : ""}
      <h4>${esc(x.nome)}</h4>
      <p class="dsc">${esc(x.descricao || "")}</p>
      <div class="pe">
        <span class="dom">${esc(dominio(x.url))}</span>
        ${x.url ? `<a class="ir" href="${esc(x.url)}" target="_blank" rel="noopener"
          data-abrir="${esc(x._cid)}" title="abrir o site">↗</a>` : ""}
      </div>
    </div>
    <span class="lupa">clique para ver grande</span>
  </div>`;
}

function tEscolha() {
  clearInterval(SINC);
  const livres = S.itens.filter(x => !dono(x));
  const tomadas = S.itens.length - livres.length;
  const n = S.finais.size, cinco = conta5();
  const umzinho = [...S.finais.values()].filter(v => v === 1).length;

  app.innerHTML = `
  <div class="panel" style="padding:20px 22px">
    <h1>Escolha as 50</h1>
    <p class="sub">Passe o olho na galeria e marque o <b class="ic-v">✓</b> nas que você quer.
       Clicando em <b>qualquer outro ponto do cartão</b> ela abre grande, para você olhar com calma —
       e de lá dá para andar uma a uma com as setas. As de <b>borda cinza</b> já foram escolhidas por
       outra pessoa: dá para abrir e ver o que são, mas não dá para pegá-las.</p>
    <div class="grid">
      <div class="box g"><b id="bn">${n}</b><small>✓ escolhidas, de 50</small></div>
      <div class="box" style="border-color:#5c2237"><b id="b5" style="color:var(--no)">${cinco}</b><small>♥ destaques, de 5</small></div>
      <div class="box" style="border-color:#5a4520"><b id="b1" style="color:var(--star)">${umzinho}</b><small>★ a que apresenta</small></div>
      <div class="box"><b>${nfmt(livres.length)}</b><small>livres para você</small></div>
      <div class="box r"><b>${nfmt(tomadas)}</b><small>já tomadas</small></div>
    </div>
  </div>
  <div class="toolbar">
    <button class="pill ${FILTRO === "todas" ? "on" : ""}" data-f="todas">todas (${nfmt(S.itens.length)})</button>
    <button class="pill ${FILTRO === "livres" ? "on" : ""}" data-f="livres">livres (${nfmt(livres.length)})</button>
    <button class="pill ${FILTRO === "minhas" ? "on" : ""}" data-f="minhas">minhas (${n})</button>
    <input type="text" id="q" placeholder="buscar por nome, descrição ou categoria…" value="${esc(BUSCA)}">
    <span class="sub" id="prg" style="margin:0;font-size:11.5px;color:#7d7d96"></span>
    <button class="btn sm gh" id="uma">passar uma a uma</button>
    <button class="btn sm gh" id="sinc" title="ver o que a turma pegou agora">atualizar</button>
    <button class="btn sm" id="ver">Ver a turma</button>
  </div>
  <div class="gal" id="gal"></div>
  <div class="row" style="justify-content:center;margin-top:18px" id="mais"></div>`;

  document.querySelectorAll("[data-f]").forEach(b => b.onclick = () => { FILTRO = b.dataset.f; QUANTOS = 400; tEscolha(); });
  $("q").oninput = e => { BUSCA = e.target.value; QUANTOS = 400; pinta(); };
  $("ver").onclick = () => go("turma");
  $("uma").onclick = () => abrirFoco(base(), 0);
  $("sinc").onclick = () => sincronizar(false);
  $("gal").onclick = aoClicar;
  REDESENHA = cids => { (cids || []).forEach(trocaCartao); contar(); };

  if (VOLTAR_A) {
    const i = base().findIndex(x => x._cid === VOLTAR_A);
    if (i >= QUANTOS) QUANTOS = Math.ceil((i + 1) / 400) * 400;
  }
  pinta();
  if (VOLTAR_A) {
    const alvo = VOLTAR_A; VOLTAR_A = null;
    /* go() ainda vai rolar a pagina para o topo depois desta funcao — por isso o setTimeout */
    setTimeout(() => {
      const el = document.querySelector(`.cart[data-t="${CSS.escape(alvo)}"]`);
      if (el) el.scrollIntoView({ block: "center", behavior: "instant" });
    }, 0);
  }
  enfileirar(S.itens.map(x => x._cid), false);
  SINC = setInterval(() => { if (S.fase === "escolha") sincronizar(true); }, 45000);

  function base() {
    let b = FILTRO === "livres" ? livres
      : FILTRO === "minhas" ? S.itens.filter(x => S.finais.has(x._cid))
      : S.itens;
    const q = BUSCA.toLowerCase().trim();
    if (q) b = b.filter(x => (x.nome + " " + (x.descricao || "") + " " + (x.categoria || "")).toLowerCase().includes(q));
    return b;
  }
  function pinta() {
    const b = base(), lim = b.slice(0, QUANTOS);
    $("gal").innerHTML = lim.map(cartao).join("")
      || `<div class="msg info" style="grid-column:1/-1">Nada aqui${BUSCA ? " com esse texto" : ""}.</div>`;
    $("mais").innerHTML = b.length > lim.length
      ? `<button class="btn gh sm" id="+">mostrar mais ${nfmt(Math.min(400, b.length - lim.length))} de ${nfmt(b.length)}</button>`
      : (b.length ? `<span class="sub" style="font-size:12px;margin:0">fim da galeria — ${nfmt(b.length)} ferramentas</span>` : "");
    const mais = $("+"); if (mais) mais.onclick = () => { QUANTOS += 400; pinta(); };
    observar();
  }
  function trocaCartao(k) {
    const it = S.itens.find(x => x._cid === k); if (!it) return;
    document.querySelectorAll(`.cart[data-t="${CSS.escape(k)}"]`).forEach(velho => {
      const tmp = document.createElement("div");
      tmp.innerHTML = cartao(it);
      const novo = tmp.firstElementChild;
      velho.replaceWith(novo);
      if (OBS) OBS.observe(novo);
    });
  }
  function contar() {
    if ($("bn")) $("bn").textContent = S.finais.size;
    if ($("b5")) $("b5").textContent = conta5();
    if ($("b1")) $("b1").textContent = [...S.finais.values()].filter(v => v === 1).length;
    chrome();
  }
  function aoClicar(ev) {
    const b = ev.target.closest("[data-a]");
    if (b) { ev.preventDefault(); ev.stopPropagation(); return acao(b.dataset.k, b.dataset.a); }
    const l = ev.target.closest("[data-abrir]");
    if (l) { ev.stopPropagation(); S.abriu++; DB.evento(S.login, "abriu_link", l.dataset.abrir); return; }
    const c = ev.target.closest(".cart[data-t]");
    if (!c) return;
    const lista = base(), i = lista.findIndex(x => x._cid === c.dataset.t);
    abrirFoco(lista, i < 0 ? 0 : i);
  }
  async function sincronizar(silencioso) {
    try {
      const nova = await DB.escolhasDaTurma();
      let novas = 0;
      for (const [cid, v] of nova) {
        const antes = S.turma.get(cid);
        if (v.quem !== S.login && (!antes || antes.quem !== v.quem)) novas++;
      }
      S.turma = nova;
      document.querySelectorAll(".cart[data-t]").forEach(c => {
        const q = dono({ _cid: c.dataset.t }), tem = c.querySelector(".quem");
        if (q && !tem) trocaCartao(c.dataset.t);
        else if (!q && tem) trocaCartao(c.dataset.t);
      });
      if (!silencioso || novas)
        aviso(novas ? "info" : "good", novas
          ? `A turma escolheu <b>${novas}</b> ferramenta(s) desde a última vez. Ficaram com a borda cinza.`
          : "Nada mudou — nenhuma ferramenta nova foi escolhida.");
      contar();
    } catch (e) { /* rede ruim nao pode atrapalhar */ }
  }
}

/* ===== 4. a turma — a galeria final, consolidada ===== */
let FT = "galeria", QT = "";
async function tTurma() {
  clearInterval(SINC);
  app.innerHTML = `<div class="panel"><h1>A turma</h1>
    <p class="sub"><span class="spin"></span> Carregando o que todo mundo escolheu…</p></div>`;
  let linhas, entregas = [];
  try { [linhas, entregas] = await Promise.all([DB.listaDaTurma(), DB.entregasDaTurma().catch(() => [])]); }
  catch (e) {
    app.innerHTML = `<div class="panel"><h1>A turma</h1>
      <div class="msg bad">Não consegui carregar: ${esc(e.message)}</div>
      <div class="row"><button class="btn" onclick="location.reload()">Tentar de novo</button></div></div>`;
    return;
  }
  for (const l of linhas) { const f = l.tmi_ferramentas || {}; if (f.capa) CAPAS.set(l.cid, f.capa); }

  const porAluno = {};
  for (const l of linhas) (porAluno[l.aluno] = porAluno[l.aluno] || []).push(l);
  const alunos = Object.keys(porAluno).sort();
  const meu = porAluno[S.login] || [];
  const top1 = meu.find(x => x.nivel === 1), top5 = meu.filter(x => x.nivel === 1 || x.nivel === 5);
  const daTurma1 = linhas.filter(l => l.nivel === 1);
  const daTurma5 = linhas.filter(l => l.nivel === 5);

  app.innerHTML = `
  <div class="panel" style="padding:20px 22px">
    <span class="unit-kicker">Entrega ${U.numero} · ${esc(U.nome)}</span>
    <h1>A galeria da turma</h1>
    <p class="sub">Esta é a entrega — não existe planilha nem arquivo para mandar. O que está aqui
       é o que vale.</p>
    <div class="grid">
      <div class="box"><b>${nfmt(linhas.length)}</b><small>ferramentas escolhidas</small></div>
      <div class="box"><b>${alunos.length}</b><small>alunos entregando</small></div>
      <div class="box" style="border-color:#5a4520"><b style="color:var(--star)">${daTurma1.length}</b><small>★ apresentadas</small></div>
      <div class="box g"><b>${meu.length}</b><small>suas, de 50</small></div>
    </div>
    ${meu.length !== 50 || top5.length !== 5 || !top1 ? `<div class="msg ${meu.length ? "info" : "bad"}">
      Para fechar a sua entrega faltam:
      ${meu.length !== 50 ? `<br>· chegar a <b>50</b> escolhidas (você tem ${meu.length})` : ""}
      ${top5.length !== 5 ? `<br>· marcar <b>5 com ♥</b> (você tem ${top5.length})` : ""}
      ${!top1 ? `<br>· marcar <b>1 com ★</b> — a melhor de todas, que você apresenta` : ""}
      <br><br><button class="btn sm" id="ir">Voltar para a galeria</button></div>`
      : `<div class="msg good"><b>Entrega completa.</b> 50 com ✓, 5 com ♥, e a melhor de
         todas é <b>${esc((top1.tmi_ferramentas || {}).nome || "")}</b>.</div>`}
  </div>
  <div class="toolbar">
    <button class="pill ${FT === "galeria" ? "on" : ""}" data-t="galeria">a galeria</button>
    <button class="pill ${FT === "entregas" ? "on" : ""}" data-t="entregas">entregas (${entregas.length})</button>
    <input type="text" id="qt" placeholder="buscar por ferramenta ou por aluno…" value="${esc(QT)}">
    <button class="btn sm gh" id="voltar">Continuar escolhendo</button>
  </div>
  <div id="tab"></div>`;

  const ir = $("ir"); if (ir) ir.onclick = () => go(S.itens.length ? "escolha" : "carga");
  $("voltar").onclick = () => go(S.itens.length ? "escolha" : "carga");
  document.querySelectorAll("[data-t]").forEach(b => { if (b.dataset.t === "galeria" || b.dataset.t === "entregas") b.onclick = () => { FT = b.dataset.t; pinta(); }; });
  $("qt").oninput = e => { QT = e.target.value; pinta(); };
  pinta();

  function filtra(ls) {
    const q = QT.toLowerCase().trim();
    if (!q) return ls;
    return ls.filter(l => {
      const f = l.tmi_ferramentas || {};
      return ((f.nome || "") + " " + (f.descricao || "") + " " + (f.categoria || "") + " " + l.aluno)
        .toLowerCase().includes(q);
    });
  }
  function cartaoT(l) {
    const f = l.tmi_ferramentas || {};
    const x = { _cid: l.cid, nome: f.nome || "?", url: f.url, descricao: f.descricao,
                categoria: f.categoria, imagem: f.imagem };
    return `<div class="cart ro ${l.nivel === 1 ? "top1" : l.nivel === 5 ? "top5" : ""}" data-t="${esc(l.cid)}">
      ${faixa(x, CAPAS.get(l.cid))}
      <span class="quem q2">${esc(l.aluno)}</span>
      ${l.nivel <= 5 ? `<span class="estr ${l.nivel === 1 ? "e1" : "e5"}">${l.nivel === 1 ? "★" : "♥"}</span>` : ""}
      ${x.url ? `<a class="abrir" href="${esc(x.url)}" target="_blank" rel="noopener">abrir ↗</a>` : ""}
      <div class="txt">
        ${x.categoria ? `<span class="cat">${esc(x.categoria)}</span>` : ""}
        <h4>${esc(x.nome)}</h4>
        <p class="dsc">${esc(x.descricao || "")}</p>
        <div class="pe"><span class="dom">${esc(dominio(x.url))}</span></div>
      </div>
    </div>`;
  }
  function bloco(titulo, sub, ls) {
    if (!ls.length) return "";
    return `<div class="faixa-t"><h3>${titulo}</h3><small>${sub} · ${nfmt(ls.length)}</small></div>
            <div class="gal">${ls.map(cartaoT).join("")}</div>`;
  }
  function pinta() {
    document.querySelectorAll("[data-t]").forEach(b => {
      if (b.dataset.t === "galeria" || b.dataset.t === "entregas")
        b.classList.toggle("on", b.dataset.t === FT);
    });
    if (FT === "entregas") return pintaEntregas();
    const um = filtra(daTurma1), cinco = filtra(daTurma5), todas = filtra(linhas);
    const ordAluno = (a, b) => a.aluno.localeCompare(b.aluno);
    $("tab").innerHTML =
      bloco("★ &nbsp;A melhor de cada um", "uma por aluno, apresentada em sala", [...um].sort(ordAluno)) +
      bloco("♥ &nbsp;Os destaques da turma", "as cinco de cada um", [...cinco].sort(ordAluno)) +
      bloco("As 50 de todo mundo", "o catálogo inteiro da turma", [...todas].sort((a, b) => (a.nivel - b.nivel) || ordAluno(a, b))) +
      (todas.length ? "" : `<div class="msg info">Ninguém escolheu nada ainda${QT ? " com esse texto" : ""}.</div>`);
    observar();
  }
  function pintaEntregas() {
    const q = QT.toLowerCase().trim();
    const lista = entregas.filter(e => !q || e.aluno.toLowerCase().includes(q));
    const arq = (path, nome) => path
      ? `<a class="arq" href="${esc(DB.linkPublico(path))}" target="_blank" rel="noopener">${esc(nome || "baixar")}</a>`
      : `<span class="nao">falta</span>`;
    $("tab").innerHTML = `
      <p class="sub" style="margin:14px 0 0">Cada aluno entrega quatro coisas. O log e as fontes ficam
         guardados inteiros, do jeito que chegaram.</p>
      <table class="lista">
        <thead><tr>
          <th style="width:78px">Quem</th><th>1 · as 500</th><th>2 · log da varredura</th>
          <th>3 · fontes</th><th>4 · conversa / diretrizes</th>
        </tr></thead>
        <tbody>${lista.map(e => `<tr>
          <td><span class="dono">${esc(e.aluno)}</span></td>
          <td>${e.cat_arquivo
              ? `<b>${nfmt(e.cat_unicos || 0)}</b> únicas<div class="num-cell">${nfmt(e.cat_lidos || 0)} lidas · ${esc(e.cat_arquivo)}</div>`
              : `<span class="nao">falta</span>`}</td>
          <td>${arq(e.log_path, e.log_arquivo)}${e.log_linhas
              ? `<div class="num-cell">${nfmt(e.log_linhas)} linhas · ${nfmt(e.log_urls || 0)} endereços</div>` : ""}</td>
          <td>${arq(e.fontes_path, e.fontes_arquivo)}${e.fontes_itens
              ? `<div class="num-cell">${nfmt(e.fontes_itens)} endereços</div>` : ""}</td>
          <td>${e.metodo_path ? arq(e.metodo_path, e.metodo_arquivo)
              : e.metodo_texto ? `<b>escrito no sistema</b><div class="num-cell">${nfmt(e.metodo_texto.length)} caracteres</div>`
              : `<span class="nao">falta</span>`}</td>
        </tr>`).join("") || `<tr><td colspan="5" style="color:var(--dim);padding:18px">Ninguém entregou ainda.</td></tr>`}</tbody>
      </table>
      ${lista.some(e => e.metodo_texto) ? `<div class="msg info" style="margin-top:16px">
        <b>Diretrizes escritas no sistema</b>
        ${lista.filter(e => e.metodo_texto).map(e => `<div style="margin-top:10px">
          <span class="dono">${esc(e.aluno)}</span><br>
          <span style="color:var(--dim);font-size:12.5px;white-space:pre-wrap">${esc(e.metodo_texto)}</span>
        </div>`).join("")}</div>` : ""}`;
  }
}

/* ===== teclado — so no modo foco ===== */
document.addEventListener("keydown", e => {
  if (S.fase !== "foco") return;
  if (/^(input|textarea)$/i.test((e.target.tagName || ""))) return;
  const it = FOCO.lista[FOCO.i]; if (!it) return;
  const k = e.key;
  if (k === "ArrowRight") { e.preventDefault(); andar(1); }
  else if (k === "ArrowLeft") { e.preventDefault(); andar(-1); }
  else if (k === "Escape") { e.preventDefault(); VOLTAR_A = FOCO.cid; go("escolha"); }
  else if (k === "Enter") { e.preventDefault(); acao(it._cid, "sel"); }
  else if (k === " ") {
    e.preventDefault();
    const l = $("lnk");
    if (l) { S.abriu++; DB.evento(S.login, "abriu_link", it._cid); window.open(l.href, "_blank", "noopener"); }
  }
  else if (k.toLowerCase() === "c") { e.preventDefault(); acao(it._cid, "cor"); }
  else if (k.toLowerCase() === "e") { e.preventDefault(); acao(it._cid, "est"); }
});
window.addEventListener("beforeunload", () => DB.descarregar());
if (TEM_UNIDADE) go("login");
else tUnidades();
