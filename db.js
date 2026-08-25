/* Camada de dados — Supabase REST. Sem dependencia externa. */
const SUPA_URL = (typeof window !== "undefined" && window.TMI_API !== undefined)
  ? window.TMI_API
  : "https://rrfjezpecrjzaomqiouk.supabase.co";
const SUPA_KEY = "sb_publishable_zC5cR1oRWD1Wf8TdzCQlkA_Rv5V5qzk";
const PARAM_ENTREGA = (typeof window !== "undefined")
  ? new URLSearchParams(window.location.search).get("entrega")
  : null;
const UNIDADE = PARAM_ENTREGA === "desenvolvimento" ? "desenvolvimento" : "inspiracao";
const UF = "&unidade=eq." + UNIDADE;

const H = {
  "apikey": SUPA_KEY,
  "Authorization": "Bearer " + SUPA_KEY,
  "Content-Type": "application/json",
};

async function api(caminho, opts = {}) {
  const r = await fetch(SUPA_URL + "/rest/v1/" + caminho, {
    ...opts,
    headers: { ...H, ...(opts.headers || {}) },
  });
  const txt = await r.text();
  let corpo = null;
  if (txt) { try { corpo = JSON.parse(txt); } catch (e) { corpo = txt; } }
  if (!r.ok) {
    const err = new Error((corpo && corpo.message) || ("HTTP " + r.status));
    err.status = r.status;
    err.code = corpo && corpo.code;
    err.detalhe = corpo;
    throw err;
  }
  return corpo;
}

export const DB = {
  online: true,
  unidade: UNIDADE,

  async entrar(login, nome) {
    await api("tmi_alunos", {
      method: "POST",
      headers: { "Prefer": "resolution=merge-duplicates,return=minimal" },
      body: JSON.stringify({ login, nome: nome || null, visto_em: new Date().toISOString() }),
    });
    return login;
  },

  /* manda o catalogo em lotes; ferramenta que ja existe e atualizada */
  async subirFerramentas(itens, login, aoProgredir) {
    const LOTE = 250;
    for (let i = 0; i < itens.length; i += LOTE) {
      const parte = itens.slice(i, i + LOTE).map(x => ({
        cid: x._cid, nome: x.nome, url: x.url || null,
        descricao: x.descricao || null, categoria: x.categoria || null, imagem: x.imagem || null,
      }));
      await api("tmi_ferramentas?on_conflict=cid", {
        method: "POST",
        headers: { "Prefer": "resolution=merge-duplicates,return=minimal" },
        body: JSON.stringify(parte),
      });
      await api("tmi_catalogo?on_conflict=unidade,aluno,cid", {
        method: "POST",
        headers: { "Prefer": "resolution=ignore-duplicates,return=minimal" },
        body: JSON.stringify(parte.map(x => ({ unidade: UNIDADE, aluno: login, cid: x.cid }))),
      });
      if (aoProgredir) aoProgredir(Math.min(i + LOTE, itens.length), itens.length);
    }
  },

  /* o catalogo que o aluno mandou, para ele voltar depois sem reenviar nada */
  async meuCatalogo(login) {
    const linhas = await api(
      "tmi_catalogo?select=cid,tmi_ferramentas(nome,url,descricao,categoria,imagem,capa)" +
      "&aluno=eq." + encodeURIComponent(login) + UF + "&limit=5000");
    return linhas.map(l => ({ _cid: l.cid, ...(l.tmi_ferramentas || {}) })).filter(x => x.nome);
  },

  /* capas: a funcao no servidor le a og:image de cada site e guarda */
  async capasDe(cids) {
    if (!cids.length) return {};
    const r = await fetch(SUPA_URL + "/functions/v1/capa", {
      method: "POST", headers: H, body: JSON.stringify({ cids: cids.slice(0, 30) }),
    });
    if (!r.ok) return {};
    const j = await r.json();
    return j.capas || {};
  },

  async registrarUpload(login, arquivo, lido, unico, deOutros) {
    await api("tmi_uploads", {
      method: "POST",
      headers: { "Prefer": "return=minimal" },
      body: JSON.stringify({ unidade: UNIDADE, aluno: login, arquivo, total_lido: lido, total_unico: unico, ja_de_outros: deOutros }),
    });
  },

  /* tudo que a turma ja escolheu — com o dono */
  async escolhasDaTurma() {
    const linhas = await api("tmi_escolhas?select=cid,aluno,nivel" + UF);
    return new Map(linhas.map(l => [l.cid, { quem: l.aluno, nivel: l.nivel }]));
  },

  async minhasEscolhas(login) {
    return api(`tmi_escolhas?select=cid,nivel&aluno=eq.${encodeURIComponent(login)}${UF}`);
  },

  /* a PK em cid faz o banco recusar se outro aluno pegou primeiro */
  async escolher(cid, login, nivel = 50) {
    try {
      await api("tmi_escolhas", {
        method: "POST",
        headers: { "Prefer": "return=minimal" },
        body: JSON.stringify({ unidade: UNIDADE, cid, aluno: login, nivel }),
      });
      return { ok: true };
    } catch (e) {
      if (e.status === 409 || e.code === "23505") {
        const dono = await api(`tmi_escolhas?select=aluno&cid=eq.${encodeURIComponent(cid)}${UF}`);
        return { ok: false, tomada: true, quem: (dono[0] || {}).aluno || "outro aluno" };
      }
      throw e;
    }
  },

  async desescolher(cid, login) {
    await api(`tmi_escolhas?cid=eq.${encodeURIComponent(cid)}&aluno=eq.${encodeURIComponent(login)}${UF}`,
      { method: "DELETE", headers: { "Prefer": "return=minimal" } });
  },

  async marcarNivel(cid, login, nivel) {
    await api(`tmi_escolhas?cid=eq.${encodeURIComponent(cid)}&aluno=eq.${encodeURIComponent(login)}${UF}`, {
      method: "PATCH",
      headers: { "Prefer": "return=minimal" },
      body: JSON.stringify({ nivel, alterada_em: new Date().toISOString() }),
    });
  },

  /* a lista viva da turma, que substitui a planilha */
  async listaDaTurma() {
    return api("tmi_escolhas?select=cid,aluno,nivel,criada_em,tmi_ferramentas(nome,url,descricao,categoria,imagem,capa)" + UF + "&order=criada_em.desc");
  },

  /* ---- arquivos brutos da entrega (log, fontes, metodo) ---- */
  async subirArquivo(login, tipo, file) {
    const ext = ((file.name || "").match(/\.[a-z0-9]{1,6}$/i) || [".txt"])[0].toLowerCase();
    const caminho = (UNIDADE === "desenvolvimento" ? "desenvolvimento/" : "") + login + "/" + tipo + ext;
    const r = await fetch(SUPA_URL + "/storage/v1/object/tmi/" + caminho, {
      method: "POST",
      headers: {
        "apikey": SUPA_KEY,
        "Authorization": "Bearer " + SUPA_KEY,
        "x-upsert": "true",
        "Content-Type": file.type || "text/plain",
      },
      body: file,
    });
    if (!r.ok) {
      const t = await r.text();
      const e = new Error("nao consegui guardar o arquivo (HTTP " + r.status + ")");
      e.detalhe = t.slice(0, 300);
      throw e;
    }
    return caminho;
  },

  linkPublico(caminho) {
    return caminho ? SUPA_URL + "/storage/v1/object/public/tmi/" + caminho : "";
  },

  /* ---- a entrega: uma linha por aluno, atualizada em pedacos ---- */
  async salvarEntrega(login, campos) {
    await api("tmi_entregas?on_conflict=unidade,aluno", {
      method: "POST",
      headers: { "Prefer": "resolution=merge-duplicates,return=minimal" },
      body: JSON.stringify({ unidade: UNIDADE, aluno: login, ...campos }),
    });
  },

  async minhaEntrega(login) {
    const r = await api("tmi_entregas?select=*&aluno=eq." + encodeURIComponent(login) + UF);
    return r[0] || null;
  },

  async entregasDaTurma() {
    return api("tmi_entregas?select=*" + UF + "&order=aluno.asc");
  },

  /* telemetria — nao pode travar a interface, entao vai em lote e falha em silencio */
  _fila: [],
  _timer: null,
  evento(login, tipo, cid, ms, dados) {
    this._fila.push({ unidade: UNIDADE, aluno: login, tipo, cid: cid || null, ms: ms ?? null, dados: dados || null });
    clearTimeout(this._timer);
    this._timer = setTimeout(() => this.descarregar(), 4000);
    if (this._fila.length >= 40) this.descarregar();
  },
  async descarregar() {
    if (!this._fila.length) return;
    const lote = this._fila.splice(0, this._fila.length);
    try {
      await api("tmi_eventos", {
        method: "POST",
        headers: { "Prefer": "return=minimal" },
        body: JSON.stringify(lote),
      });
    } catch (e) { /* telemetria nunca atrapalha o aluno */ }
  },
};
