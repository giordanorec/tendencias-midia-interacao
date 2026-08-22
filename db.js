/* Camada de dados — Supabase REST. Sem dependencia externa. */
const SUPA_URL = (typeof window !== "undefined" && window.TMI_API !== undefined)
  ? window.TMI_API
  : "https://rrfjezpecrjzaomqiouk.supabase.co";
const SUPA_KEY = "sb_publishable_zC5cR1oRWD1Wf8TdzCQlkA_Rv5V5qzk";

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
      if (aoProgredir) aoProgredir(Math.min(i + LOTE, itens.length), itens.length);
    }
  },

  async registrarUpload(login, arquivo, lido, unico, deOutros) {
    await api("tmi_uploads", {
      method: "POST",
      headers: { "Prefer": "return=minimal" },
      body: JSON.stringify({ aluno: login, arquivo, total_lido: lido, total_unico: unico, ja_de_outros: deOutros }),
    });
  },

  /* tudo que a turma ja escolheu — com o dono */
  async escolhasDaTurma() {
    const linhas = await api("tmi_escolhas?select=cid,aluno,nivel");
    return new Map(linhas.map(l => [l.cid, { quem: l.aluno, nivel: l.nivel }]));
  },

  async minhasEscolhas(login) {
    return api(`tmi_escolhas?select=cid,nivel&aluno=eq.${encodeURIComponent(login)}`);
  },

  /* a PK em cid faz o banco recusar se outro aluno pegou primeiro */
  async escolher(cid, login, nivel = 50) {
    try {
      await api("tmi_escolhas", {
        method: "POST",
        headers: { "Prefer": "return=minimal" },
        body: JSON.stringify({ cid, aluno: login, nivel }),
      });
      return { ok: true };
    } catch (e) {
      if (e.status === 409 || e.code === "23505") {
        const dono = await api(`tmi_escolhas?select=aluno&cid=eq.${encodeURIComponent(cid)}`);
        return { ok: false, tomada: true, quem: (dono[0] || {}).aluno || "outro aluno" };
      }
      throw e;
    }
  },

  async desescolher(cid, login) {
    await api(`tmi_escolhas?cid=eq.${encodeURIComponent(cid)}&aluno=eq.${encodeURIComponent(login)}`,
      { method: "DELETE", headers: { "Prefer": "return=minimal" } });
  },

  async marcarNivel(cid, login, nivel) {
    await api(`tmi_escolhas?cid=eq.${encodeURIComponent(cid)}&aluno=eq.${encodeURIComponent(login)}`, {
      method: "PATCH",
      headers: { "Prefer": "return=minimal" },
      body: JSON.stringify({ nivel, alterada_em: new Date().toISOString() }),
    });
  },

  /* a lista viva da turma, que substitui a planilha */
  async listaDaTurma() {
    return api("tmi_escolhas?select=cid,aluno,nivel,criada_em,tmi_ferramentas(nome,url,descricao,categoria,imagem)&order=criada_em.desc");
  },

  /* telemetria — nao pode travar a interface, entao vai em lote e falha em silencio */
  _fila: [],
  _timer: null,
  evento(login, tipo, cid, ms, dados) {
    this._fila.push({ aluno: login, tipo, cid: cid || null, ms: ms ?? null, dados: dados || null });
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
