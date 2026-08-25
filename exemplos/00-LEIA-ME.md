# Hiper Deep Research — exemplos de referência

**CIN0055 · Tendências em Mídia e Interação · CIn/UFPE · 2026.2**

Um exemplo de cada coisa que o sistema pede, para você ver o formato e o nível esperado antes de
montar o seu. **Não é gabarito** — é referência de forma. O conteúdo tem que ser o da sua varredura.

Sistema: **https://tendencias-midia-interacao.vercel.app**

---

## Os quatro entregáveis

O sistema pede os quatro **de uma vez**, na tela 2. Sem os quatro, você não passa para a peneira.
Pode voltar e reenviar qualquer um deles até o prazo.

| # | O que é | Exemplo aqui | O que o sistema faz com ele |
|---|---|---|---|
| 1 | **As 500** | `02-as-500.jsonl` | Lê, remove repetidas, e joga no catálogo da turma. É a única que entra no catálogo. |
| 2 | **O log completo da varredura** | `01-log-da-varredura.jsonl` | Guarda inteiro, do jeito que chegou. Conta linhas e endereços distintos e mostra o número. Não entra no catálogo. |
| 3 | **As fontes** | `03-fontes.md` | Guarda inteiro. |
| 4 | **A conversa com a IA** *ou* **as diretrizes** | `04-conversa-com-a-ia.md` *ou* `05-diretrizes.md` | Guarda inteiro. Um dos dois basta — pode ser arquivo ou texto digitado na própria tela. |

---

## 1 · O documento das 500 — `02-as-500.jsonl`

O formato preferido é **JSONL**: um objeto JSON por linha, sem vírgula no fim.

```json
{"nome":"ComfyUI","url":"https://www.comfy.org","categoria":"imagem","descricao":"Editor nodal para modelos de difusão: em vez de um campo de prompt, você monta o pipeline ligando caixas…","imagem":"https://www.google.com/s2/favicons?domain=www.comfy.org&sz=64"}
```

**Campos.** `nome` e `url` são obrigatórios. `descricao` é o que decide se a atividade termina ou
não — veja abaixo. `categoria` e `imagem` são opcionais; sem `imagem`, o sistema desenha um ícone
a partir do favicon do site.

**Outros formatos aceitos** (estão em `outros-formatos/`, com a mesma lista):

- **CSV ou TSV** com cabeçalho — o sistema encontra as colunas por nome (`nome`/`name`/`tool`,
  `url`/`link`, `desc…`, `categ…`, `imagem`).
- **Markdown** com `- [Nome](url) — descrição` por linha.
- **JSON** array.
- **Uma URL por linha**, no pior caso. Funciona, e a peneira fica péssima.

### A descrição é o que faz a atividade caber no prazo

Compare. Isto é inútil:

> *Uma solução poderosa que revoluciona o seu fluxo criativo com o poder da inteligência artificial.*

Isto serve:

> *Separa uma mistura em voz, baixo, bateria e resto, com qualidade que sobrevive a uso
> profissional. É a base de quase todo separador comercial que você encontra por aí. Roda local;
> com GPU leva segundos, sem GPU leva minutos.*

Duas ou três frases, nesta ordem: **o que entra e o que sai** · **onde encaixa no seu trabalho** ·
**qual é o limite** (preço, requisito, o que ela não faz). A terceira é a que mais importa: é ela
que deixa você decidir olhando o cartão, sem abrir 500 links na mão.

Se a IA devolver descrição de propaganda, o pedido que conserta está no arquivo `05-diretrizes.md`,
na seção "o que eu mandei a IA fazer com a descrição".

> ⚠️ **Sobre este arquivo de exemplo em particular:** as **59 primeiras** entradas são ferramentas
> reais, escritas no nível que se espera de você. As **441** restantes são preenchimento sintético,
> só para o arquivo ter o tamanho certo para testar o sistema — todas usam domínios terminados em
> `.invalid`, que não existem, e trazem `"exemplo": true`. **Não suba este arquivo como se fosse a
> sua entrega.** Qualquer pessoa vê na hora, e você ainda perde o direito de escolher as
> ferramentas reais que outra pessoa pegar primeiro.

---

## 2 · O log completo — `01-log-da-varredura.jsonl`

**22.420 linhas · 11.500 endereços distintos · 5,7 MB.** É o arquivo bruto, sujo, do jeito que saiu
do coletor: com repetição, com `utm_source` no fim das URLs, com `www.` e `docs.` do mesmo domínio,
com linha de lixo que toda varredura traz junto.

**Não limpe.** A sujeira é a prova. O sistema conta as linhas e os endereços distintos e mostra os
dois números para você e para a turma.

Uma linha:

```json
{"quando":"2026-08-20T14:32:00Z","consulta":"gaussian splatting web viewer","fonte":"github awesome-list","nome":"Nerfstudio","url":"https://docs.nerf.studio/?ref=producthunt","trecho":"Framework que organiza os vários métodos de campo de radiância…"}
```

Os campos `consulta` e `fonte` são o que amarra o log ao arquivo das fontes. Sem eles, o log é um
monte de linha sem procedência.

**Formato livre.** JSONL é o mais fácil de gerar e de ler, mas CSV, TXT ou o que o seu coletor
cuspir também serve. Limite: 45 MB por arquivo.

---

## 3 · As fontes — `03-fontes.md`

Responde a **de onde veio o que você achou**. O exemplo tem quatro partes, e as quatro contam:

1. **A tabela**: fonte, o que é, como você varreu, quanto rendeu, **e qual o viés dela**.
2. **Com o que você varreu**: uma linha por ferramenta, biblioteca ou API — onde entrou e
   **qual o seu veredito sobre ela**, inclusive as que você testou e descartou.
3. **O que ficou de fora**, e por quê.
4. **O que você faria diferente** — onde o tempo foi mal gasto.
5. A conclusão que sai disso: **a fonte determina o achado.**

A coluna do viés é a que separa uma lista de links de um documento de método. Varrer só diretório
comercial produz uma lista de ferramentas de produtividade; as zonas mais interessantes não estão
em diretório nenhum.

---

## 4 · A conversa **ou** as diretrizes — `04-conversa-com-a-ia.md` **ou** `05-diretrizes.md`

Escolha **um dos dois**. Os dois exemplos descrevem o mesmo trabalho por ângulos diferentes.

**A conversa** (`04`) é a transcrição do que aconteceu: as trocas que mudaram o rumo, com os erros
no lugar. Corte as repetições e marque onde cortou. Não reescreva para ficar bonito — o valor está
justamente nas vezes em que a IA contestou você e você mudou de ideia.

**As diretrizes** (`05`) são o critério escrito: os cortes duros, os critérios de interesse, as
regras de desempate, o prompt que rodou em cima de cada lote, **o que você montou para rodar isso e
o que aprendeu montando**, e **o que o critério deixou passar**.

O que não serve, em nenhum dos dois formatos: "pedi para a IA escolher as 500 melhores". Isso não
é um critério, e é exatamente o que a atividade está pedindo para você não fazer.

Se preferir, o item 4 pode ser **digitado direto na tela** do sistema, sem arquivo — mínimo de 200
caracteres.

---

## Antes de enviar, confira

- [ ] O documento das 500 tem **nome, link e descrição de verdade** em todas as linhas.
- [ ] A descrição diz **o limite** da ferramenta, não só o que ela faz.
- [ ] O log tem **dezenas de milhares** de linhas e está sujo.
- [ ] As fontes dizem **como** cada uma foi varrida e **qual viés** ela tem.
- [ ] A conversa ou as diretrizes mostram **um critério seu**, não um pedido genérico.
- [ ] Você abriu o sistema e entrou com o seu login **antes** do dia do prazo, não na última hora.

---

## Arquivos deste pacote

```
00-LEIA-ME.md                        este arquivo
01-log-da-varredura.jsonl            22.420 linhas · 11.500 distintas · 5,7 MB
02-as-500.jsonl                      500 linhas (59 reais + 441 sintéticas .invalid)
03-fontes.md                         12 fontes, com viés e balanço
04-conversa-com-a-ia.md              transcrição em 4 rodadas
05-diretrizes.md                     cortes duros, critérios, desempate
outros-formatos/
  as-500-em-csv.csv                  a mesma lista em CSV
  as-500-em-markdown.md              a mesma lista em Markdown
```
