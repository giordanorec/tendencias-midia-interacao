# Hiper Deep Research

Sistema da Atividade 01 da disciplina **Tendências em Mídia e Interação** (CIN0055) —
CIn/UFPE, 2026.2.

O aluno faz uma varredura de dezenas de milhares de ferramentas com IA, afunila até uma, e
**a entrega acontece aqui dentro** — não há planilha, arquivo ou anexo para enviar.

## O funil

```
10.000   varredura bruta      log entregue no Classroom, não passa por aqui
   500   pré-seleção da IA    é o que se carrega no sistema
    50   escolhidas           únicas na turma inteira
     5   destacadas  ★
     1   a melhor    ★★       apresentada em sala
```

## Como funciona

1. **Entrar** — o aluno se identifica pelo login do CIn. Sem senha: a lista é aberta entre eles.
2. **Enviar as 500** — o arquivo é lido no navegador, deduplicado e enviado ao catálogo comum.
   Aceita `.jsonl`, `.json`, `.csv`, `.md` e `.txt`.
3. **Peneirar** — item por item, pelo teclado. Marca-se sem limite: a pergunta é só
   *"vale um segundo olhar?"*.
4. **Escolher as 50** — as marcadas aparecem juntas e são comparadas entre si.
5. **A turma** — a lista viva de todo mundo, que é a própria entrega.

## A regra da unicidade

Uma ferramenta pertence a **um** aluno. Dois alunos podem subir catálogos com 95% de sobreposição
— isso é esperado —, mas ninguém escolhe o que já foi escolhido.

Isso não é validado na interface: é a **chave primária** de `tmi_escolhas.cid`. O banco recusa a
segunda tentativa, e o sistema avisa quem chegou primeiro. Não há condição de corrida possível.

As já reservadas nem chegam a aparecer na peneira do aluno.

## Estrutura

| Arquivo | Papel |
|---|---|
| `index.html` | casca da página |
| `style.css` | estilos |
| `app.js` | estado, chave canônica de URL, parser multi-formato, ícones |
| `db.js` | camada de dados (Supabase REST) |
| `ui.js` | as cinco telas |

Sem build, sem dependências, sem framework. Módulos ES nativos.

## Chave canônica

`elevenlabs.io`, `www.elevenlabs.io/` e `elevenlabs.io/pt?ref=x` são a mesma ferramenta.
A função `cid()` em `app.js` normaliza para o domínio registrável, e trata hosts multi-projeto
(GitHub, Hugging Face, PyPI…) incluindo o caminho — `github.com/dono/repo`.

É essa função que faz a deduplicação e a unicidade funcionarem.

## Dados

Postgres no Supabase, cinco tabelas prefixadas `tmi_`:

- `tmi_alunos` — quem entrou
- `tmi_ferramentas` — catálogo comum, chave `cid`
- `tmi_escolhas` — **`cid` é PK**; é o que garante a unicidade. `nivel` ∈ {50, 5, 1}
- `tmi_uploads` — cada varredura entregue, com os totais
- `tmi_eventos` — telemetria: cada marcação, com o tempo gasto no item

A telemetria existe porque o que se avalia na disciplina é o **processo**, e ler 500 itens é
justamente o trabalho que não aparece no resultado. Vai em lote, falha em silêncio e nunca
atrasa a interface.

## Rodar localmente

```bash
python3 -m http.server 8000
```

Depois abra `http://localhost:8000`. Precisa ser servido por HTTP — módulos ES não carregam
de `file://`.

---

CIn/UFPE · Prof. Giordano Cabral
