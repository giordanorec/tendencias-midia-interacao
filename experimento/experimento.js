/* Movimento 3: ideias (prazo = apresentação + 7 dias), experimento (véspera do teste), registro. Supabase REST, sem dependência. */
const SUPA = "https://rrfjezpecrjzaomqiouk.supabase.co/rest/v1/";
const KEY  = "sb_publishable_zC5cR1oRWD1Wf8TdzCQlkA_Rv5V5qzk";
const H = { apikey: KEY, Authorization: "Bearer " + KEY, "Content-Type": "application/json" };
const SEMENTE = "TMI-2026-2-sorteio";
/* as mesmas tabelas da página de escolha (temas/escolher/escolher.js) — se mudar lá, mude aqui */
const DATAS = ["17/09","17/09","22/09","22/09","24/09","24/09","29/09","29/09","01/10","01/10","06/10","06/10","08/10","08/10"];
const DATAS_TESTE = ["22/10","22/10","27/10","27/10","29/10","29/10","03/11","03/11","05/11","05/11","10/11","10/11","12/11","12/11"];
const DATAS_FINAL = ["17/11","17/11","17/11","17/11","19/11","19/11","19/11","19/11","01/12","01/12","01/12","01/12","03/12","03/12"];
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
async function api(caminho, opt = {}) {
  const r = await fetch(SUPA + caminho, { ...opt, headers: { ...H, ...(opt.headers || {}) } });
  if (!r.ok) { const t = await r.text(); const e = new Error(t || r.statusText); e.status = r.status; throw e; }
  const t = await r.text(); return t ? JSON.parse(t) : null;
}
function validaLogin(v) {
  let s = v.trim().toLowerCase();
  if (s.includes("@")) { const [u, d] = s.split("@"); if (!/^(cin\.)?ufpe\.br$/.test(d || "")) return { erro: "Esse e-mail não é do CIn. Use seulogin@cin.ufpe.br ou só o login." }; s = u; }
  if (!/^[a-z][a-z0-9]{1,11}$/.test(s)) return { erro: "Use o seu login do CIn — só letras e números. Ex.: grec." };
  return { login: s };
}
let EU = (() => { try { return localStorage.getItem("tmi_login") || ""; } catch (e) { return ""; } })();
$("#form-login").addEventListener("submit", async (ev) => {
  ev.preventDefault(); const v = validaLogin($("#login").value);
  if (v.erro) { $("#erro-login").textContent = v.erro; $("#erro-login").hidden = false; return; }
  try { await api("tmi_alunos?on_conflict=login", { method: "POST", headers: { Prefer: "resolution=merge-duplicates" }, body: JSON.stringify({ login: v.login, visto_em: new Date().toISOString() }) }); } catch (e) {}
  EU = v.login; try { localStorage.setItem("tmi_login", EU); } catch (e) {} entrar();
});
$("#sair").addEventListener("click", () => { EU = ""; try { localStorage.removeItem("tmi_login"); } catch (e) {} $("#bloco-app").hidden = true; $("#bloco-login").hidden = false; });
function entrar() { $("#bloco-login").hidden = true; $("#bloco-app").hidden = false; $("#eu-login").textContent = EU; carregar(); if (!entrar.timer) entrar.timer = setInterval(carregar, 15000); }

let TEMA = [], ALUNOS = [], TROCAS = [], ORDEM = [], PRE = [];
async function sha(s) { const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s)); return [...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, "0")).join(""); }
async function ordemFinal() {
  const linhas = await Promise.all(TEMA.map(async (r) => ({ ...r, h: await sha(r.aluno + SEMENTE) })));
  linhas.sort((a, b) => a.h.localeCompare(b.h));
  for (const t of TROCAS.filter((t) => t.status === "aceita").sort((a, b) => (a.respondido_em || "").localeCompare(b.respondido_em || ""))) {
    const i = linhas.findIndex((l) => l.aluno === t.de), j = linhas.findIndex((l) => l.aluno === t.para);
    if (i >= 0 && j >= 0) [linhas[i], linhas[j]] = [linhas[j], linhas[i]];
  }
  return linhas;
}
async function carregar() {
  try {
    [TEMA, ALUNOS, TROCAS] = await Promise.all([
      api("tmi_tema?select=aluno,tema"), api("tmi_alunos?select=login,ideias_url,ideias_em,exp_url,exp_em&order=login.asc"),
      api("tmi_troca?select=de,para,status,respondido_em&order=criado_em.asc")]);
    try { PRE = await (await fetch("/experimento/ideias/lista.json", { cache: "no-store" })).json(); } catch (e) { PRE = []; }
  } catch (e) { console.error(e); return; }
  ORDEM = await ordemFinal(); pintarDatas(); pintarIdeias(); pintarExps();
}
const fmtDia = (d) => `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}`;
function dataDe(login, tabela, desloca) {
  const i = ORDEM.findIndex((l) => l.aluno === login); const d = i >= 0 ? tabela[i] || null : null; if (!d) return null;
  const [dd, mm] = d.split("/").map(Number); const dia = new Date(Date.UTC(2026, mm - 1, dd)); dia.setUTCDate(dia.getUTCDate() + desloca);
  return new Date(`2026-${String(dia.getUTCMonth() + 1).padStart(2, "0")}-${String(dia.getUTCDate()).padStart(2, "0")}T23:59:59-03:00`);
}
const prazoIdeias = (l) => dataDe(l, DATAS, 7), prazoExp = (l) => dataDe(l, DATAS_TESTE, -1), prazoReg = (l) => dataDe(l, DATAS_FINAL, -1);
function pintarDatas() {
  const i = ORDEM.findIndex((l) => l.aluno === EU);
  if (i < 0) { $("#minhas-datas").textContent = "Você não está na ordem sorteada (não escolheu tema no movimento 2). Fale com o professor."; return; }
  $("#minhas-datas").innerHTML = `Você apresentou (ou apresenta) o tema em <b>${DATAS[i]}</b> · ideias até <b>${fmtDia(prazoIdeias(EU))} 23h59</b> · experimento até <b>${fmtDia(prazoExp(EU))} 23h59</b> (teste em <b>${DATAS_TESTE[i]}</b>) · registro até <b>${fmtDia(prazoReg(EU))} 23h59</b> (final em <b>${DATAS_FINAL[i]}</b>).`;
}
function lista(campo, campoEm, prazoFn, el, extra) {
  const com = ALUNOS.filter((a) => a[campo]);
  $(el).innerHTML = com.length ? com.map((a) => {
    const pz = prazoFn(a.login); const em = a[campoEm] ? new Date(a[campoEm]) : null; const tarde = pz && em && em > pz;
    return `<li><span><span class="quem">${esc(a.login)}</span> · <a href="${esc(a[campo])}" target="_blank" rel="noopener">${esc(a[campo].replace(/^https?:\/\//, "")).slice(0, 50)}</a>${extra ? extra(a) : ""}</span><span class="n-testes">${em ? fmtDia(em) : ""}${tarde ? ' <span class="atrasado">· entrega atrasada</span>' : ""}</span></li>`;
  }).join("") : `<li class="mudo">Nenhuma ainda.</li>`;
}
function pintarIdeias() {
  const eu = ALUNOS.find((a) => a.login === EU); if (eu?.ideias_url && !$("#ideias-url").value) $("#ideias-url").value = eu.ideias_url;
  const pz = prazoIdeias(EU); $("#ideias-prazo").textContent = pz ? `o seu prazo: ${fmtDia(pz)} às 23h59 (uma semana depois da sua apresentação)` : "o seu prazo aparece aqui quando você estiver na ordem sorteada";
  lista("ideias_url", "ideias_em", prazoIdeias, "#lista-ideias", (a) => { const p = PRE.find((x) => x.login === a.login); return p ? ` · <a href="${esc(p.url)}"><b>pré-análise</b></a>` : ` · <span class="mudo">pré-análise em preparação</span>`; });
}
function pintarExps() {
  const eu = ALUNOS.find((a) => a.login === EU); if (eu?.exp_url && !$("#exp-url").value) $("#exp-url").value = eu.exp_url;
  const pz = prazoExp(EU); const i = ORDEM.findIndex((l) => l.aluno === EU);
  $("#exp-prazo").textContent = pz ? `o seu prazo: ${fmtDia(pz)} às 23h59 (você testa em ${DATAS_TESTE[i]} e apresenta a final em ${DATAS_FINAL[i]})` : "o seu prazo aparece aqui quando você estiver na ordem sorteada";
  lista("exp_url", "exp_em", prazoExp, "#lista-exps");
}
async function salvar(campo, campoEm, inputId, okId, prazoFn, msg) {
  try {
    await api(`tmi_alunos?login=eq.${encodeURIComponent(EU)}`, { method: "PATCH", body: JSON.stringify({ [campo]: $(inputId).value.trim(), [campoEm]: new Date().toISOString() }) });
    const pz = prazoFn(EU); const tarde = pz && new Date() > pz;
    $(okId).textContent = tarde ? "Salvo — depois do seu prazo, então fica registrado como entrega atrasada." : msg; $(okId).hidden = false;
  } catch (e) { alert("Não deu para salvar: " + e.message.slice(0, 160)); }
  carregar();
}
$("#form-ideias").addEventListener("submit", (ev) => { ev.preventDefault(); salvar("ideias_url", "ideias_em", "#ideias-url", "#ok-ideias", prazoIdeias, "Salvo. A pré-análise aparece aqui em algumas horas, e o professor comenta no grupo."); });
$("#form-exp").addEventListener("submit", (ev) => { ev.preventDefault(); salvar("exp_url", "exp_em", "#exp-url", "#ok-exp", prazoExp, "Salvo. É este link que a turma vai abrir no dia do teste."); });
if (EU) entrar();
