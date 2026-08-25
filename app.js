import { DB } from "./db.js";

/* ---------- estado ---------- */
const S = {
  fase: "login", login: "", itens: [], fp: 0,
  marc: new Set(), vist: new Set(), finais: new Map(), // cid -> nivel
  turma: new Map(), lidos: 0, dups: 0, removidos: 0,
  tItem: null, tempos: [], abriu: 0, brutos: null,
};
const $ = i => document.getElementById(i);
const app = $("app");
const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const nfmt = n => n.toLocaleString("pt-BR");

/* ---------- chave canonica ---------- */
const MULTI = { "github.com": 2, "gitlab.com": 2, "huggingface.co": 2, "replicate.com": 2, "codeberg.org": 2, "pypi.org": 2, "npmjs.com": 2, "itch.io": 1, "producthunt.com": 2, "apps.apple.com": 2, "play.google.com": 1 };
const CTLD = new Set(["co.uk", "com.br", "co.jp", "com.au", "co.kr", "com.cn", "org.uk", "net.br", "org.br", "com.mx"]);
function regDom(h) {
  h = (h || "").toLowerCase().replace(/^www\./, "").replace(/\.$/, "");
  const p = h.split("."); if (p.length <= 2) return h;
  return CTLD.has(p.slice(-2).join(".")) && p.length >= 3 ? p.slice(-3).join(".") : p.slice(-2).join(".");
}
export function cid(url, nome) {
  let u = (url || "").trim();
  if (!u) return "n:" + (nome || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  if (!/^https?:\/\//i.test(u)) u = "https://" + u;
  let p; try { p = new URL(u); } catch (e) { return "n:" + (nome || "").toLowerCase().replace(/[^a-z0-9]+/g, "-"); }
  const host = regDom(p.hostname), full = p.hostname.toLowerCase().replace(/^www\./, "");
  const d = MULTI[full] || MULTI[host];
  if (d) { const s = p.pathname.split("/").filter(Boolean).slice(0, d); if (s.length) return host + "/" + s.map(x => x.toLowerCase()).join("/"); }
  return host;
}

/* ---------- parser ---------- */
export function parse(txt) {
  txt = txt.replace(/^﻿/, ""); const t = txt.trim(); let out = [];
  if (t.startsWith("[")) { try { const a = JSON.parse(t); if (Array.isArray(a)) out = a.map(norm).filter(Boolean); } catch (e) {} }
  if (!out.length && /^\s*\{/.test(t))
    out = t.split(/\r?\n/).map(l => { l = l.trim(); if (!l) return null; try { return norm(JSON.parse(l)); } catch (e) { return null; } }).filter(Boolean);
  if (!out.length) {
    const l1 = t.split(/\r?\n/)[0] || "";
    const sep = (l1.match(/\t/g) || []).length > (l1.match(/,/g) || []).length ? "\t" : ",";
    if (/nome|name|tool|ferrament|url|link/i.test(l1) && l1.includes(sep)) {
      const rows = splitCSV(t, sep), head = (rows.shift() || []).map(h => h.toLowerCase().trim());
      const F = (...k) => head.findIndex(h => k.some(x => h.includes(x)));
      const iN = F("nome", "name", "tool", "ferrament", "titulo"), iU = F("url", "link", "site"),
        iD = F("desc", "o que", "resumo"), iC = F("categ", "tipo", "area"), iI = F("imagem", "image", "thumb", "icon");
      out = rows.map(r => norm({ nome: r[iN], url: r[iU], descricao: r[iD], categoria: r[iC], imagem: r[iI] })).filter(Boolean);
    }
  }
  if (!out.length && /\]\(https?:\/\//.test(t)) {
    const seen = new Set();
    t.split(/\r?\n/).forEach(l => {
      const m = l.match(/\[([^\]]{1,140})\]\((https?:\/\/[^)\s]+)\)/); if (!m) return;
      const rest = l.slice(l.indexOf(m[0]) + m[0].length).replace(/^[\s\-–—:•|*]+/, "").replace(/[*_`]/g, "").trim();
      if (seen.has(m[2])) return; seen.add(m[2]);
      out.push(norm({ nome: m[1].replace(/[*_`]/g, "").trim(), url: m[2], descricao: rest }));
    });
    out = out.filter(Boolean);
  }
  if (!out.length && /https?:\/\//.test(t))
    out = t.split(/\r?\n/).map(l => {
      const m = l.match(/https?:\/\/[^\s,;)"']+/); if (!m) return null;
      const n = l.slice(0, m.index).replace(/[\s\-–—:•|*>#]+$/, "").replace(/^[\s\-–—•*>#]+/, "").trim();
      const d = l.slice(m.index + m[0].length).replace(/^[\s\-–—:•|*]+/, "").trim();
      return norm({ nome: n || m[0].replace(/^https?:\/\/(www\.)?/, "").split("/")[0], url: m[0], descricao: d });
    }).filter(Boolean);
  return out;
}
function splitCSV(t, sep) {
  const rows = []; let row = [], cur = "", q = false;
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (q) { if (c === '"') { if (t[i + 1] === '"') { cur += '"'; i++; } else q = false; } else cur += c; }
    else if (c === '"') q = true; else if (c === sep) { row.push(cur); cur = ""; }
    else if (c === "\n") { row.push(cur); rows.push(row); row = []; cur = ""; }
    else if (c !== "\r") cur += c;
  }
  if (cur || row.length) { row.push(cur); rows.push(row); }
  return rows.filter(r => r.some(x => x && x.trim()));
}
function norm(o) {
  if (!o || typeof o !== "object") return null;
  const g = (...ks) => { for (const k of ks) for (const kk of Object.keys(o)) if (kk.toLowerCase().replace(/[^a-z]/g, "") === k) return o[kk]; return ""; };
  const nome = String(g("nome", "name", "tool", "ferramenta", "titulo", "title") || "").trim();
  const url = String(g("url", "link", "site", "href", "website") || "").trim();
  if (!nome && !url) return null;
  return {
    nome: nome || url.replace(/^https?:\/\/(www\.)?/, "").split("/")[0], url,
    descricao: String(g("descricao", "description", "desc", "resumo", "oquee", "sobre") || "").trim(),
    categoria: String(g("categoria", "category", "categ", "tipo", "area") || "").trim(),
    imagem: String(g("imagem", "image", "img", "thumb", "icone", "icon", "favicon") || "").trim(),
  };
}

/* ---------- icone ---------- */
function icone(it) {
  const h = [...it.nome].reduce((a, c) => (a * 31 + c.charCodeAt(0)) & 0xffffff, 7);
  const ini = (it.nome.replace(/[^A-Za-zÀ-ÿ0-9 ]/g, "").trim()[0] || "?").toUpperCase();
  let src = it.imagem || "";
  if (!src && it.url) {
    try { src = "https://www.google.com/s2/favicons?domain=" + encodeURIComponent(new URL(/^https?:/.test(it.url) ? it.url : "https://" + it.url).hostname) + "&sz=64"; } catch (e) {}
  }
  /* a inicial fica no fundo; a imagem so aparece se carregar de verdade */
  return `<div class="ic" style="background:hsl(${h % 360} 55% 42%)">${esc(ini)}${
    src ? `<img src="${esc(src)}" alt="" loading="lazy" onload="this.style.opacity=1"
             onerror="this.remove()">` : ""}</div>`;
}
/* ---------- cartao de galeria: faixa de capa + selo do favicon ---------- */
function favicon(url) {
  if (!url) return "";
  try {
    const h = new URL(/^https?:/.test(url) ? url : "https://" + url).hostname;
    return "https://www.google.com/s2/favicons?domain=" + encodeURIComponent(h) + "&sz=64";
  } catch (e) { return ""; }
}
function dominio(url) {
  try { return new URL(/^https?:/.test(url) ? url : "https://" + url).hostname.replace(/^www\./, ""); }
  catch (e) { return ""; }
}
function faixa(it, capa) {
  const h = [...(it.nome || "?")].reduce((a, c) => (a * 31 + c.charCodeAt(0)) & 0xffffff, 7) % 360;
  const ini = ((it.nome || "?").replace(/[^A-Za-zÀ-ÿ0-9 ]/g, "").trim()[0] || "?").toUpperCase();
  const fv = it.imagem || favicon(it.url);
  return `<div class="capa" style="background:linear-gradient(150deg,hsl(${h} 52% 32%),hsl(${(h + 40) % 360} 55% 15%))">
    <span class="sigla">${esc(ini)}</span>
    ${capa ? `<img class="cv" src="${esc(capa)}" alt="" loading="lazy" decoding="async"
        onerror="this.remove()">` : ""}
    ${fv ? `<img class="fv" src="${esc(fv)}" alt="" loading="lazy" decoding="async"
        onerror="this.remove()">` : ""}
  </div>`;
}

export { S, esc, nfmt, icone, faixa, favicon, dominio, $, app };
