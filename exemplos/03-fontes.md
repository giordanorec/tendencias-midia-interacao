# 3 · As fontes que eu varri

**Aluno:** exemplo (troque pelo seu login)
**Quando:** 19 a 22 de agosto de 2026
**Total bruto:** 22.420 registros · **11.500 endereços distintos** depois de limpar

Este documento responde a uma pergunta só: **de onde veio o que eu achei.** Sem ele, o log da
varredura é um monte de linhas sem procedência.

---

## O que eu varri, e como

| # | Fonte | O que é | Como varri | Rendeu | Viés que ela tem |
|---|---|---|---|---|---|
| 1 | [There's An AI For That](https://theresanaiforthat.com) | Diretório comercial de ferramentas de IA | Script de paginação, 240 páginas | ~4.100 | Só produto pago com landing page. Nada de pesquisa, nada de projeto de artista. |
| 2 | [Futurepedia](https://www.futurepedia.io) | Diretório concorrente do anterior | Mesmo script, 130 páginas | ~2.200 | Sobreposição de ~60% com o item 1. Serviu mais para confirmar do que para achar. |
| 3 | [Product Hunt](https://www.producthunt.com) | Lançamentos diários votados pela comunidade | API oficial, tópicos `design-tools`, `artificial-intelligence`, `audio`, `developer-tools`, últimos 18 meses | ~2.600 | Enviesado para SaaS americano com boa apresentação. O que não faz lançamento não aparece. |
| 4 | [Hugging Face Spaces](https://huggingface.co/spaces) | Demos rodando de modelos de pesquisa | API `/api/spaces`, ordenado por likes, 40 páginas | ~1.900 | O contrário do item 1: muita pesquisa, quase nenhum produto. Metade dos links está fora do ar. |
| 5 | [GitHub — listas `awesome-*`](https://github.com/topics/awesome) | Listas curadas por tema | Busca por `awesome creative coding`, `awesome generative art`, `awesome audio`, `awesome accessibility` + extração dos links de cada README | ~2.400 | Bem curado e desatualizado ao mesmo tempo. Muita coisa de 2021 que morreu. |
| 6 | [Hugging Face Papers](https://huggingface.co/papers) | Artigos com implementação e demo (herdou o papel do Papers with Code, que saiu do ar em 2025) | API de trending + busca por tarefa: `image generation`, `speech synthesis`, `novel view synthesis` | ~1.300 | É código de pesquisa, não ferramenta. Entra aqui porque parte do que interessa ainda não virou produto. |
| 7 | [arXiv `cs.HC` e `cs.GR`](https://arxiv.org/list/cs.HC/recent) | Pré-prints de interação e computação gráfica | Busca por período (12 meses) e leitura só dos títulos e resumos | ~700 | Serve para achar o que **vai** virar ferramenta em um ano. Quase nada tem link utilizável hoje. |
| 8 | [itch.io](https://itch.io/tools) | Jogos e ferramentas independentes | Tags `tool`, `generator`, `procedural` | ~900 | Território de artista solo. Achados que não existem em nenhum outro lugar desta lista. |
| 9 | [Anais de SIGGRAPH 2026, CHI 2026, NIME 2025, ISMIR 2025](https://dl.acm.org/conference/siggraph) | Conferências das áreas | Índice de cada conferência, título + link do projeto quando havia | ~600 | A fonte mais lenta e a de maior densidade. Quase nada repetido com as outras. |
| 10 | [Newsletters (Ben's Bites, TLDR AI)](https://bensbites.com) | Curadoria diária | Arquivo público, 8 meses | ~800 | Repete muito o Product Hunt com uma semana de atraso. Mantive para pegar o que escapou. |
| 11 | [Buscas manuais no Google e no Perplexity](https://www.perplexity.ai) | 16 consultas específicas (estão no log, campo `consulta`) | Manual, primeiras 5 páginas de cada | ~600 | O buscador me devolveu o que já era popular. Rendeu pouco e caro. |
| 12 | [Are.na e OpenProcessing](https://www.are.na) | Acervos de referência visual e código artístico | Navegação manual por canais | ~400 | Nada disso é "ferramenta" no sentido comercial. Entrou porque a disciplina é de mídia, não de produtividade. |

---

## Com o que eu varri, e o que achei de cada ferramenta

| Ferramenta | Onde entrou | Veredito |
|---|---|---|
| `httpx` + `selectolax` | O coletor inteiro, com 12 requisições em paralelo | O que transformou seis horas em quarenta minutos. Nada a reclamar. |
| `trafilatura` | Extrair o texto útil de cada página achada | Excelente. Devolve o conteúdo sem menu, rodapé nem banner de cookie, e foi o que deixou os trechos do log legíveis. |
| `tldextract` | Normalizar o endereço antes de deduplicar | Pequena e decisiva. Sem ela eu teria contado `x.com`, `www.x.com/` e `docs.x.com` como três achados. |
| **Exa** (busca semântica) | Achar "sites parecidos com este" a partir de 30 sementes | A melhor surpresa. Rendeu pouco volume e muita coisa que buscador nenhum me daria. Se eu refizesse, começaria por aqui. |
| **Tavily** | Substituir as buscas manuais no Google | Boa, mas devolveu quase o mesmo que o Google. Gastei chave à toa. |
| **Jina Reader** (`r.jina.ai/`) | Ler páginas que quebravam o meu parser | Salvou umas 200 páginas sem eu precisar de chave. Lento para lote grande, ótimo para caso isolado. |
| **Firecrawl** | Testei e descartei | Funciona bem, mas a camada gratuita acabou no terceiro diretório. Para o meu volume não fechava. |
| **Playwright** | Dois diretórios que só montam com JavaScript | Resolveu, e é pesado: 4s por página contra 0,3s do `httpx`. Usei só onde não tinha jeito. |
| **Gemini 2.5 Flash** via Google AI Studio | Julgar os 11.500 em lotes de 40 | Cota gratuita deu conta com folga. As decisões vieram boas; as descrições, só depois que eu apertei o formato (ver arquivo 5). |
| **Ollama** com Qwen local | Limpeza de duplicatas por semelhança de nome | Rodou de graça e devagar. Para 11 mil itens deu certo; para 100 mil eu não tentaria. |

O que eu tiraria da experiência: **a ferramenta de varrer importa tanto quanto o critério de
peneirar.** Perdi a primeira tarde raspando HTML de fontes que tinham API pública, e perdi a
segunda batendo em páginas JavaScript com um parser que nunca ia funcionar. A pergunta certa, antes
de escrever qualquer linha, é *"esta fonte tem API? e se não tem, ela monta no servidor ou no
navegador?"*.

---

## O que eu deliberadamente deixei de fora

- **Listicles de blog** (`os 50 melhores AI tools de 2026`). São reciclagem uns dos outros e sujam
  a amostra. Quando um apareceu no log, foi por acidente do buscador.
- **Twitter/X e LinkedIn.** Alto ruído, links quebrados, e quase tudo que valia lá já tinha
  entrado pelo Product Hunt.
- **App stores.** A atividade é sobre mídia e interação, não sobre aplicativo de celular. Teria
  dobrado o volume sem melhorar a qualidade.

## O que eu faria diferente

As fontes 1 e 2 renderam **28% do volume** e **quase nenhuma** das 50 que escolhi no fim. Se eu
refizesse, cortaria as duas para uma amostra e realocaria o tempo nas fontes 8 e 9, que renderam
pouco volume e muita coisa boa.

O ponto que eu não tinha entendido antes de começar: **a fonte determina o achado.** Varrer só
diretório comercial produz uma lista de ferramentas de produtividade com IA. As zonas mais
interessantes da disciplina não estão em diretório nenhum — estão em anais de conferência, em
`itch.io` e em repositório de laboratório.
