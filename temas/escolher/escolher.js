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
  /* a mesma regra do Hiper Deep Research (ui.js): letra inicial, só letras e números, 2 a 12 — o login tem que ser o MESMO nos dois sistemas */
  if (!/^[a-z][a-z0-9]{1,11}$/.test(s)) return { erro: "Use o seu login do CIn — só letras e números, sem espaço nem ponto. Ex.: grec. Tem que ser o mesmo que você usou no Hiper Deep Research." };
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
let TEMA = [], ALUNOS = [], FB = [], TROCAS = [];
async function carregar() {
  try {
    [TEMA, ALUNOS, FB, TROCAS] = await Promise.all([
      api("tmi_tema?select=aluno,tema,proposta,proposta_status,escolhido_em"),
      api("tmi_alunos?select=login,skill_url,skill_em&order=login.asc"),
      api("tmi_skill_feedback?select=de,para,tema,perguntou,recusou_maduro,duvidou,formato,comentario,criado_em&order=criado_em.desc"),
      api("tmi_troca?select=id,de,para,status,criado_em,respondido_em&order=criado_em.asc"),
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

/* Rótulo do tema de uma linha do banco: um dos 19, ou a proposta fora da lista. */
function nomeTema(r) {
  if (r.tema) return `tema ${r.tema} — ${TEMAS[r.tema - 1]}`;
  const st = r.proposta_status === "aprovada" ? "aprovado pelo professor" : r.proposta_status === "recusada" ? "recusado pelo professor" : "aguardando o professor";
  return `tema próprio — ${r.proposta || ""} (${st})`;
}

function pintarTemas() {
  const j = janela(); const ej = $("#estado-janela"); ej.textContent = "escolha " + j.txt; ej.className = "janela " + (j.ok ? "aberta" : "fechada");
  const dono = {}; TEMA.forEach((r) => { if (r.tema) dono[r.tema] = r.aluno; });
  const minha = TEMA.find((r) => r.aluno === EU);
  $("#lista-temas").innerHTML = TEMAS.map((t, i) => {
    const n = i + 1, d = dono[n];
    const cls = d === EU ? "meu" : d ? "tomado" : "";
    const rot = d === EU ? "o seu tema" : d ? "escolhido por " + esc(d) : "livre";
    const btn = d === EU ? `<button class="botao botao--linha" data-soltar="${n}" ${j.ok ? "" : "disabled"}>Desistir</button>`
      : d ? "" : `<button class="botao botao--principal" data-escolher="${n}" ${j.ok ? "" : "disabled"}>${minha ? "Trocar para este" : "Escolher"}</button>`;
    return `<li class="${cls}"><span class="n">${String(n).padStart(2, "0")}</span><span class="t"><a href="/temas/#tema-${n}">${esc(t)}</a><span class="dono">${rot}</span></span>${btn}</li>`;
  }).join("");
  /* proposta fora da lista: a minha, e as dos colegas (para ninguém propor a mesma) */
  const propostas = TEMA.filter((r) => !r.tema);
  const minhaProp = propostas.find((r) => r.aluno === EU);
  $("#minha-proposta").innerHTML = minhaProp
    ? `<span><b>A sua proposta:</b> ${esc(minhaProp.proposta)} <span class="mudo">— ${esc(nomeTema(minhaProp).split("(").pop().replace(")", ""))}</span></span>
       <button class="botao botao--linha" data-soltar-proposta="1" ${j.ok ? "" : "disabled"}>Desistir da proposta</button>`
    : "";
  $("#form-proposta button").disabled = !j.ok;
  $("#lista-propostas").innerHTML = propostas.filter((r) => r.aluno !== EU).length
    ? propostas.filter((r) => r.aluno !== EU).map((r) => `<li class="mudo"><span>${esc(r.aluno)}: ${esc(r.proposta)}</span><span class="data">${esc(r.proposta_status)}</span></li>`).join("")
    : `<li class="mudo">Nenhum colega propôs tema fora da lista.</li>`;
}

$("#form-proposta").addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const texto = $("#proposta-texto").value.trim();
  if (texto.length < 8) { alert("Descreva o tema em uma frase (pelo menos 8 caracteres)."); return; }
  try {
    await api("tmi_tema?on_conflict=aluno", { method: "POST", headers: { Prefer: "resolution=merge-duplicates" },
      body: JSON.stringify({ aluno: EU, tema: null, proposta: texto.slice(0, 200), proposta_status: "pendente", atualizado_em: new Date().toISOString() }) });
    $("#proposta-texto").value = "";
    $("#ok-proposta").textContent = "Proposta registrada. Ela fica aguardando o professor; enquanto isso você não ocupa nenhum dos 19. Se ele recusar, escolha um da lista."; $("#ok-proposta").hidden = false;
  } catch (e) {
    alert(/42501|policy|row-level/i.test(e.message) ? "A escolha está fechada agora (abre quinta 10/09 às 8h, fecha domingo 13/09 23h59)." : "Não deu: " + e.message.slice(0, 160));
  }
  carregar();
});

$("#minha-proposta").addEventListener("click", async (ev) => {
  const b = ev.target.closest("button[data-soltar-proposta]"); if (!b) return;
  b.disabled = true;
  try { await api(`tmi_tema?aluno=eq.${encodeURIComponent(EU)}`, { method: "DELETE" }); }
  catch (e) { alert("Não deu: " + e.message.slice(0, 160)); }
  carregar();
});

$("#lista-temas").addEventListener("click", async (ev) => {
  const b = ev.target.closest("button"); if (!b) return;
  b.disabled = true;
  try {
    if (b.dataset.soltar) {
      await api(`tmi_tema?aluno=eq.${encodeURIComponent(EU)}`, { method: "DELETE" });
    } else {
      const tema = Number(b.dataset.escolher);
      await api("tmi_tema?on_conflict=aluno", { method: "POST", headers: { Prefer: "resolution=merge-duplicates" },
        body: JSON.stringify({ aluno: EU, tema, proposta: null, proposta_status: null, atualizado_em: new Date().toISOString() }) });
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
/* A ordem final = sorteio + trocas ACEITAS, aplicadas na ordem em que foram aceitas.
   A central do WhatsApp calcula exatamente igual (central-zap: ordem_sorteada). */
async function ordemFinal() {
  const linhas = await Promise.all(TEMA.map(async (r) => ({ ...r, h: await sha(r.aluno + SEMENTE), troca: null })));
  linhas.sort((a, b) => a.h.localeCompare(b.h));
  const aceitas = TROCAS.filter((t) => t.status === "aceita").sort((a, b) => (a.respondido_em || "").localeCompare(b.respondido_em || ""));
  for (const t of aceitas) {
    const i = linhas.findIndex((l) => l.aluno === t.de), j = linhas.findIndex((l) => l.aluno === t.para);
    if (i < 0 || j < 0) continue;
    [linhas[i], linhas[j]] = [linhas[j], linhas[i]];
    linhas[i].troca = t; linhas[j].troca = t;
  }
  return linhas;
}

async function pintarSorteio() {
  if (new Date() < SORTEIO) return;
  const linhas = await ordemFinal();
  $("#lista-sorteio").innerHTML = linhas.length ? linhas.map((r, i) =>
    `<li${r.aluno === EU ? ' class="meu"' : ""}><span><b>${esc(r.aluno)}</b> · ${esc(nomeTema(r))}${r.troca ? ` <span class="mudo">(trocou com ${esc(r.troca.de === r.aluno ? r.troca.para : r.troca.de)})</span>` : ""}</span><span class="data">${DATAS[i] || "a combinar"} · ${r.h.slice(0, 8)}</span></li>`).join("")
    : `<li class="mudo">Ninguém escolheu tema.</li>`;
  pintarTrocas(linhas);
}

/* ---------------- troca de data: quem propõe + quem aceita ---------------- */
function pintarTrocas(linhas) {
  const bloco = $("#bloco-trocas"); if (!bloco) return;
  bloco.hidden = false;
  const minhaPos = linhas.findIndex((l) => l.aluno === EU);
  const pendentesParaMim = TROCAS.filter((t) => t.status === "pendente" && t.para === EU);
  const minhasPendentes = TROCAS.filter((t) => t.status === "pendente" && t.de === EU);
  const historico = TROCAS.filter((t) => t.status !== "pendente" && (t.de === EU || t.para === EU));
  const sel = $("#troca-para"); const atual = sel.value;
  sel.innerHTML = `<option value="">— escolha o colega —</option>` + linhas.filter((l) => l.aluno !== EU).map((l, k) =>
    `<option value="${esc(l.aluno)}">${esc(l.aluno)} — ${DATAS[linhas.indexOf(l)] || "?"} (posição ${linhas.indexOf(l) + 1})</option>`).join("");
  sel.value = atual;
  $("#troca-minha").textContent = minhaPos >= 0 ? `Você está na posição ${minhaPos + 1}, em ${DATAS[minhaPos] || "data a combinar"}.` : "Você não está na ordem (não escolheu tema).";
  $("#form-troca button").disabled = minhasPendentes.length > 0 || minhaPos < 0;
  $("#troca-aviso").textContent = minhasPendentes.length ? `Você já tem uma proposta pendente para ${minhasPendentes[0].para}. Espere a resposta ou cancele.` : "";
  $("#lista-trocas").innerHTML = [
    ...pendentesParaMim.map((t) => `<li><span><b>${esc(t.de)}</b> propôs trocar de data com você.</span><span><button class="botao botao--principal" data-aceitar="${t.id}">Aceitar</button> <button class="botao botao--linha" data-recusar="${t.id}">Recusar</button></span></li>`),
    ...minhasPendentes.map((t) => `<li><span>Sua proposta para <b>${esc(t.para)}</b> está esperando resposta.</span><span><button class="botao botao--linha" data-cancelar="${t.id}">Cancelar</button></span></li>`),
    ...historico.slice(-5).reverse().map((t) => `<li class="mudo"><span>${esc(t.de)} ⇄ ${esc(t.para)}: ${t.status}</span><span class="data">${(t.respondido_em || t.criado_em).slice(0, 16).replace("T", " ")}</span></li>`),
  ].join("") || `<li class="mudo">Nenhuma troca por enquanto.</li>`;
}

$("#form-troca")?.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const para = $("#troca-para").value; if (!para) return;
  try {
    await api("tmi_troca", { method: "POST", body: JSON.stringify({ de: EU, para }) });
    $("#troca-aviso").textContent = `Proposta enviada para ${para}. Ela só vale quando ${para} aceitar aqui na página.`;
  } catch (e) { alert("Não deu para propor: " + e.message.slice(0, 160)); }
  carregar();
});

$("#lista-trocas")?.addEventListener("click", async (ev) => {
  const b = ev.target.closest("button"); if (!b) return;
  const id = b.dataset.aceitar || b.dataset.recusar || b.dataset.cancelar;
  const status = b.dataset.aceitar ? "aceita" : b.dataset.recusar ? "recusada" : "cancelada";
  b.disabled = true;
  try {
    await api(`tmi_troca?id=eq.${id}&status=eq.pendente`, { method: "PATCH", body: JSON.stringify({ status, respondido_em: new Date().toISOString() }) });
  } catch (e) { alert("Não deu: " + e.message.slice(0, 160)); }
  carregar();
});

if (EU) entrar();
