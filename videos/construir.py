#!/usr/bin/env python3
"""Gera /videos/: quem ficou com cada tema (nome autorizado, login), o tema e o video da serie Prospeccao de Futuros.
Fontes: tmi_tema (escolha de tema, Supabase do site), creditos.json de cada tema (nome so com autorizacao escrita no
grupo da turma) e serie.json (id do YouTube). Rodar de novo quando sair video ou mudar autorizacao."""
import html, json, os, urllib.request
AQUI = os.path.dirname(os.path.realpath(__file__)); V = os.path.join(AQUI, "..", "..", "skill-professor", "videos")
K = "sb_publishable_zC5cR1oRWD1Wf8TdzCQlkA_Rv5V5qzk"
req = urllib.request.Request("https://rrfjezpecrjzaomqiouk.supabase.co/rest/v1/tmi_tema?select=aluno,tema", headers={"apikey": K})
dono = {r["tema"]: r["aluno"] for r in json.load(urllib.request.urlopen(req, timeout=20))}
serie = {e["numero"]: e for e in json.load(open(os.path.join(V, "skill-video-prospeccao", "serie.json")))["episodios"]}
E = html.escape; linhas = []
for n in range(1, 20):
    p = os.path.join(V, f"tema{n:02d}", "v5", "creditos.json")
    c = json.load(open(p if os.path.exists(p) else os.path.join(V, "v5", "creditos.json")))
    nomes = {a["login_provavel"]: a["nome"] for a in c["autorizados"]}
    login = dono.get(n); nome = nomes.get(login) if login else None
    pessoa = (f'<span class="v-nome">{E(nome)}</span>' if nome else ('<span class="v-sem">nome não autorizado</span>' if login else '<span class="v-sem">sem apresentador</span>'))
    ep = serie.get(n)
    video = (f'<a href="https://youtu.be/{ep["id"]}" target="_blank" rel="noopener">youtu.be/{ep["id"]}</a>' if ep else '<span class="v-sem">em produção</span>')
    linhas.append(f'<tr><td class="v-n">{n:02d}</td><td>{pessoa}</td><td class="v-login">{E(login or "—")}</td><td>{E(c["tema"]["titulo"])}</td><td>{video}</td></tr>')
pagina = open(os.path.join(AQUI, "modelo.html")).read().replace("<!--LINHAS-->", "\n".join(linhas))
open(os.path.join(AQUI, "index.html"), "w").write(pagina); print(len(linhas), "linhas;", sum(1 for n in range(1, 20) if n in dono), "com apresentador")
