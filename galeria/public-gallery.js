import { DB } from "../db.js";
import { esc, nfmt, faixa, dominio } from "../app.js";

const app = document.getElementById("app");
let busca = "";
let filtro = "todos";
let linhas = [];

const nivelNome = nivel => nivel === 1 ? "apresentada" : nivel === 5 ? "destaque" : "selecionada";

function cartao(linha) {
  const f = linha.tmi_ferramentas || {};
  const item = {
    nome: f.nome || "Ferramenta sem nome",
    url: f.url || "",
    descricao: f.descricao || "",
    categoria: f.categoria || "",
    imagem: f.imagem || "",
  };
  return `<article class="cart ro public-card ${linha.nivel === 1 ? "top1" : linha.nivel === 5 ? "top5" : ""}">
    ${faixa(item, f.capa || "")}
    ${linha.nivel <= 5 ? `<span class="estr ${linha.nivel === 1 ? "e1" : "e5"}">${linha.nivel === 1 ? "★" : "♥"}</span>` : ""}
    ${item.url ? `<a class="abrir" href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">abrir ↗</a>` : ""}
    <div class="txt">
      ${item.categoria ? `<span class="cat">${esc(item.categoria)}</span>` : ""}
      <h4>${esc(item.nome)}</h4>
      <p class="dsc">${esc(item.descricao)}</p>
      <div class="pe"><span class="dom">${esc(dominio(item.url))}</span><span class="dom">${nivelNome(linha.nivel)}</span></div>
    </div>
  </article>`;
}

function visiveis() {
  const q = busca.trim().toLowerCase();
  return linhas.filter(linha => {
    if (filtro === "top1" && linha.nivel !== 1) return false;
    if (filtro === "top5" && linha.nivel !== 5 && linha.nivel !== 1) return false;
    if (!q) return true;
    const f = linha.tmi_ferramentas || {};
    return `${f.nome || ""} ${f.descricao || ""} ${f.categoria || ""} ${dominio(f.url || "")}`
      .toLowerCase().includes(q);
  });
}

function desenhar() {
  const lista = visiveis();
  document.querySelectorAll("[data-filtro]").forEach(b => b.classList.toggle("on", b.dataset.filtro === filtro));
  document.getElementById("resultado").innerHTML = lista.length
    ? `<div class="faixa-t"><h3>${filtro === "top1" ? "★ As apresentadas" : filtro === "top5" ? "♥ Os destaques" : "Todas as selecionadas"}</h3><small>${nfmt(lista.length)} ferramentas</small></div><div class="gal">${lista.map(cartao).join("")}</div>`
    : `<div class="msg info public-empty">Nenhuma ferramenta encontrada com esse filtro.</div>`;
}

async function iniciar() {
  try {
    const recebidas = await DB.listaDaTurma();
    linhas = [...new Map(recebidas.map(l => [l.cid, l])).values()];
    const alunos = new Set(linhas.map(l => l.aluno)).size;
    const apresentadas = linhas.filter(l => l.nivel === 1).length;
    const destaques = linhas.filter(l => l.nivel === 1 || l.nivel === 5).length;

    app.innerHTML = `<section class="panel public-intro">
      <h1>A galeria da turma</h1>
      <p class="sub">O resultado vivo da Atividade 01 de Tendências em Mídia e Interação, CIn/UFPE, 2026.2. Aqui aparecem apenas as ferramentas escolhidas; os arquivos brutos das entregas permanecem fora desta página pública.</p>
      <div class="grid">
        <div class="box"><b>${nfmt(linhas.length)}</b><small>ferramentas selecionadas</small></div>
        <div class="box"><b>${nfmt(alunos)}</b><small>alunos com seleção</small></div>
        <div class="box" style="border-color:#5a4520"><b style="color:var(--star)">${nfmt(apresentadas)}</b><small>★ apresentadas</small></div>
        <div class="box r"><b>${nfmt(destaques)}</b><small>♥ destaques</small></div>
      </div>
      <p class="public-note"><b>Privacidade:</b> a galeria pública não mostra logins, logs de varredura, fontes nem conversas dos estudantes.</p>
    </section>
    <div class="toolbar public-toolbar">
      <button class="pill on" data-filtro="todos">todas</button>
      <button class="pill" data-filtro="top5">destaques</button>
      <button class="pill" data-filtro="top1">apresentadas</button>
      <input type="text" id="busca" placeholder="buscar por ferramenta, categoria ou domínio…">
    </div>
    <section id="resultado" aria-live="polite"></section>`;

    document.querySelectorAll("[data-filtro]").forEach(b => b.onclick = () => {
      filtro = b.dataset.filtro;
      desenhar();
    });
    document.getElementById("busca").oninput = e => {
      busca = e.target.value;
      desenhar();
    };
    desenhar();
  } catch (e) {
    app.innerHTML = `<div class="panel"><h1>A galeria da turma</h1>
      <div class="msg bad">Não consegui carregar a galeria agora: ${esc(e.message)}</div>
      <div class="row"><button class="btn" onclick="location.reload()">Tentar de novo</button></div></div>`;
  }
}

iniciar();
