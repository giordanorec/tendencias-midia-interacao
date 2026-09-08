/* Escolha de tema + link da skill + rodada cruzada + sorteio. Supabase REST, sem dependência. */
const SUPA = "https://rrfjezpecrjzaomqiouk.supabase.co/rest/v1/";
const KEY  = "sb_publishable_zC5cR1oRWD1Wf8TdzCQlkA_Rv5V5qzk";
const H = { apikey: KEY, Authorization: "Bearer " + KEY, "Content-Type": "application/json" };
const ABRE  = new Date("2026-09-10T08:00:00-03:00");
const FECHA = new Date("2026-09-13T23:59:59-03:00");
const SORTEIO = new Date("2026-09-14T08:00:00-03:00");
const SEMENTE = "TMI-2026-2-sorteio";
const DATAS = ["17/09","17/09","22/09","22/09","24/09","24/09","29/09","29/09","01/10","01/10","06/10","06/10","08/10","08/10"];

const TEMAS = [
 "Programação agêntica: o desenvolvedor vira orquestrador",
 "Contenção, segurança e identidade de agentes autônomos",
 "A infraestrutura de confiança: memória, observabilidade e avaliação de agentes",
 "A internet agêntica: quando o usuário é uma máquina",
 "Agentes com carteira: comércio agêntico e mercados de máquinas",
 "Sociedades simuladas: a simulação como instrumento de investigação",
 "NPCs generativos e mundos vivos",
 "Narrativa gerativa e coautoria",
 "Agentes corporificados, IA física e modelos de mundo",
 "Captura de realidade e renderização neural",
 "Máquinas que veem qualquer coisa: visão de vocabulário aberto",
 "Mídia sintética controlável: vídeo e imagem",
 "Voz e som gerativos",
 "Gerar geradores: design procedural e creative coding com IA",
 "O navegador como console: 3D e XR sem instalação",
 "IA local: no dispositivo e no navegador",
 "Soberania de dados: local-first, ponta-a-ponta e o fim da senha",
 "Bem-estar digital e design de fricção",
 "Companheiros digitais e IA afetiva",
];

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

async function api(caminho, opt = {}) {
  const r = await fetch(SUPA + caminho, { ...opt, headers: { ...H, ...(opt.headers || {}) } });
  if (!r.ok) { const t = await r.text(); const e = new Error(t || r.statusText); e.status = r.status; throw e; }
  const t = await r.text(); return t ? JSON.parse(t) : null;
}

/* ---------------- login (mesma regra do HDR) ---------------- */
function validaLogin(v) {
  let s = v.trim().toLowerCase();
  if (s.includes("@")) { const [u, d] = s.split("@"); if (!/^(cin\.)?ufpe\.br$/.test(d || "")) return { erro: "Esse e-mail não é do CIn. Use seulogin@cin.ufpe.br ou só o login." }; s = u; }
  if (!/^[a-z0-9._-]{2,24}$/.test(s)) return { erro: "Use o seu login do CIn — letras e números, sem espaço. Ex.: grec." };
  return { login: s };
}
let EU = (() => { try { return localStorage.getItem("tmi_login") || ""; } catch (e) { return ""; } })();

$("#form-login").addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const v = validaLogin($("#login").value);
  if (v.erro) { $("#erro-login").textContent = v.erro; $("#erro-login").hidden = false; return; }
  try {
    await api("tmi_alunos?on_conflict=login", { method: "POST", headers: { Prefer: "resolution=merge-duplicates" }, body: JSON.stringify({ login: v.login, visto_em: new Date().toISOString() }) });
  } catch (e) { /* já existe: segue */ }
  EU = v.login; try { localStorage.setItem("tmi_login", EU); } catch (e) {}
  entrar();
});
$("#sair").addEventListener("click", () => { EU = ""; try { localStorage.removeItem("tmi_login"); } catch (e) {} $("#bloco-app").hidden = true; $("#bloco-login").hidden = false; });

function entrar() {
  $("#bloco-login").hidden = true; $("#bloco-app").hidden = false; $("#eu-login").textContent = EU;
  carregar(); if (!entrar.timer) entrar.timer = setInterval(carregar, 12000);
}

/* ---------------- dados ---------------- */
let TEMA = [], ALUNOS = [], FB = [];
async function carregar() {
  try {
    [TEMA, ALUNOS, FB] = await Promise.all([
      api("tmi_tema?select=aluno,tema,escolhido_em"),
      api("tmi_alunos?select=login,skill_url,skill_em&order=login.asc"),
      api("tmi_skill_feedback?select=de,para,tema,perguntou,recusou_maduro,duvidou,formato,comentario,criado_em&order=criado_em.desc"),
    ]);
  } catch (e) { console.error(e); return; }
  pintarTemas(); pintarSkills(); pintarFeedback(); pintarSorteio();
}

function janela() {
  const agora = new Date();
  if (agora < ABRE) return { ok: false, txt: "fechada — abre quinta 10/09 às 8h" };
  if (agora > FECHA) return { ok: false, txt: "encerrada — os temas estão travados desde domingo 13/09" };
  return { ok: true, txt: "aberta até domingo 13/09, 23h59" };
}

function pintarTemas() {
  const j = janela(); const ej = $("#estado-janela"); ej.textContent = "escolha " + j.txt; ej.className = "janela " + (j.ok ? "aberta" : "fechada");
  const dono = {}; TEMA.forEach((r) => { dono[r.tema] = r.aluno; });
  const meu = TEMA.find((r) => r.aluno === EU)?.tema;
  $("#lista-temas").innerHTML = TEMAS.map((t, i) => {
    const n = i + 1, d = dono[n];
    const cls = d === EU ? "meu" : d ? "tomado" : "";
    const rot = d === EU ? "o seu tema" : d ? "escolhido por " + esc(d) : "livre";
    const btn = d === EU ? `<button class="botao botao--linha" data-soltar="${n}" ${j.ok ? "" : "disabled"}>Desistir</button>`
      : d ? "" : `<button class="botao botao--principal" data-escolher="${n}" ${j.ok ? "" : "disabled"}>${meu ? "Trocar para este" : "Escolher"}</button>`;
    return `<li class="${cls}"><span class="n">${String(n).padStart(2, "0")}</span><span class="t"><a href="/temas/#tema-${n}">${esc(t)}</a><span class="dono">${rot}</span></span>${btn}</li>`;
  }).join("");
}

$("#lista-temas").addEventListener("click", async (ev) => {
  const b = ev.target.closest("button"); if (!b) return;
  b.disabled = true;
  try {
    if (b.dataset.soltar) {
      await api(`tmi_tema?aluno=eq.${encodeURIComponent(EU)}`, { method: "DELETE" });
    } else {
      const tema = Number(b.dataset.escolher);
      await api("tmi_tema?on_conflict=aluno", { method: "POST", headers: { Prefer: "resolution=merge-duplicates" },
        body: JSON.stringify({ aluno: EU, tema, atualizado_em: new Date().toISOString() }) });
    }
  } catch (e) {
    const msg = /23505|duplicate|unique/i.test(e.message) ? "Alguém escolheu esse tema um instante antes de você. Escolha outro."
      : /42501|policy|row-level/i.test(e.message) ? "A escolha está fechada agora (abre quinta 10/09 às 8h, fecha domingo 13/09 23h59)."
      : "Não deu: " + e.message.slice(0, 160);
    alert(msg);
  }
  carregar();
});

function pintarSkills() {
  const recebidos = {}; FB.forEach((f) => { recebidos[f.para] = (recebidos[f.para] || 0) + 1; });
  const com = ALUNOS.filter((a) => a.skill_url);
  const eu = ALUNOS.find((a) => a.login === EU); if (eu?.skill_url && !$("#skill-url").value) $("#skill-url").value = eu.skill_url;
  $("#lista-skills").innerHTML = com.length ? com.map((a) =>
    `<li><span><span class="quem">${esc(a.login)}</span> · <a href="${esc(a.skill_url)}" target="_blank" rel="noopener">${esc(a.skill_url.replace(/^https?:\/\//, "")).slice(0, 70)}</a></span><span class="n-testes">${recebidos[a.login] || 0} teste(s) recebido(s)</span></li>`).join("")
    : `<li class="mudo">Ninguém deixou link ainda. Seja o primeiro.</li>`;
  const sel = $("#fb-para"); const atual = sel.value;
  sel.innerHTML = `<option value="">— escolha —</option>` + com.filter((a) => a.login !== EU).map((a) => `<option value="${esc(a.login)}">${esc(a.login)} (${recebidos[a.login] || 0} teste(s))</option>`).join("");
  sel.value = atual;
}

$("#form-skill").addEventListener("submit", async (ev) => {
  ev.preventDefault();
  try {
    await api(`tmi_alunos?login=eq.${encodeURIComponent(EU)}`, { method: "PATCH", body: JSON.stringify({ skill_url: $("#skill-url").value.trim(), skill_em: new Date().toISOString() }) });
    $("#ok-skill").textContent = "Salvo. Já aparece na lista para a turma."; $("#ok-skill").hidden = false;
  } catch (e) { alert("Não deu para salvar: " + e.message.slice(0, 160)); }
  carregar();
});

$("#form-fb").addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const para = $("#fb-para").value; if (!para) return;
  const meu = TEMA.find((r) => r.aluno === EU)?.tema ?? null;
  try {
    await api("tmi_skill_feedback?on_conflict=de,para", { method: "POST", headers: { Prefer: "resolution=merge-duplicates" },
      body: JSON.stringify({ de: EU, para, tema: meu, perguntou: $("#fb-perguntou").checked, recusou_maduro: $("#fb-recusou").checked,
        duvidou: $("#fb-duvidou").checked, formato: $("#fb-formato").checked, comentario: $("#fb-coment").value.trim().slice(0, 300) }) });
    $("#ok-fb").textContent = `Enviado para ${para}. Obrigado — isso é o feedback que conta na nota.`; $("#ok-fb").hidden = false;
    $("#form-fb").reset();
  } catch (e) { alert("Não deu para enviar: " + e.message.slice(0, 160)); }
  carregar();
});

function pintarFeedback() {
  const meus = FB.filter((f) => f.para === EU);
  $("#lista-fb").innerHTML = meus.length ? meus.map((f) => {
    const m = [["perguntou antes", f.perguntou], ["recusou o maduro", f.recusou_maduro], ["duvidou de si", f.duvidou], ["formato certo", f.formato]]
      .map(([r, v]) => (v ? `<b>✓ ${r}</b>` : `✗ ${r}`)).join(" · ");
    return `<li><span><span class="marcas">${m}</span>${f.comentario ? `<br>${esc(f.comentario)}` : ""}</span><span class="n-testes">de ${esc(f.de)}${f.tema ? " · no tema " + f.tema : ""}</span></li>`;
  }).join("") : `<li class="mudo">Ninguém testou a sua ainda.</li>`;
}

/* ---------------- sorteio verificável ---------------- */
async function sha(s) {
  const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return [...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, "0")).join("");
}
async function pintarSorteio() {
  if (new Date() < SORTEIO) return;
  const linhas = await Promise.all(TEMA.map(async (r) => ({ ...r, h: await sha(r.aluno + SEMENTE) })));
  linhas.sort((a, b) => a.h.localeCompare(b.h));
  $("#lista-sorteio").innerHTML = linhas.length ? linhas.map((r, i) =>
    `<li><span><b>${esc(r.aluno)}</b> · tema ${r.tema} — ${esc(TEMAS[r.tema - 1])}</span><span class="data">${DATAS[i] || "a combinar"} · ${r.h.slice(0, 8)}</span></li>`).join("")
    : `<li class="mudo">Ninguém escolheu tema.</li>`;
}

if (EU) entrar();
