# Atividade 03 — Construa a sua ferramenta de futurização

*CIN0055 · Tendências em Mídia e Interação · 2026.2*
**Entrega: terça, 08/09, até meio-dia (12h00).** Individual. Vale nota, dentro dos 4,0 do
movimento de tendências.

---

## O problema

A partir da próxima aula, cada um de vocês vai pegar **um tema** e produzir um **mapa de
futuro** dele: quais disrupções estão na raiz, e o que elas provocam em primeira, segunda e
terceira ordem. Não é opinião. É método — e existe um corpo de métodos para isso, com décadas
de uso, com pontos fortes e com falhas conhecidas.

Vocês poderiam usar uma ferramenta pronta. **Não vão.** Cada um vai construir a sua.

Por dois motivos. O primeiro é que, quando dez pessoas rodam a mesma ferramenta, dez pessoas
chegam ao mesmo lugar, e não se aprende nada sobre o método — só sobre a ferramenta. Com dez
ferramentas diferentes nos mesmos temas, a divergência entre elas **é o objeto de estudo**.
Vamos comparar, e eu vou rodar a minha contra as de vocês.

O segundo é mais direto: **construir a ferramenta é a competência.** Escrever o prompt que
alguém executa uma vez é uma coisa. Empacotar um método inteiro em algo que outra pessoa roda,
que faz as perguntas certas antes de rodar, e que produz saída num formato previsível — isso é
outra, e é a que quase nenhum currículo alcançou.

---

## O que você entrega

Uma pasta com quatro arquivos. Nada além disso.

```
futurizacao-<seu-login>/
  SKILL.md          a ferramenta
  ESTUDO.md         o que você aprendeu do método, e de onde
  TESTE.md          uma rodada completa, num tema de teste
  DUVIDAS.md        onde a IA errou, e como você percebeu
```

### 1. `SKILL.md` — a ferramenta

Uma skill no formato de Agent Skill: um arquivo Markdown com frontmatter e instruções. Tem que
funcionar em pelo menos um agente real — Claude Code, Codex, ou colada como instrução de sistema
num chat. Diga no topo do arquivo onde você testou.

```markdown
---
name: futurizacao-<seu-login>
description: Use quando ... (uma frase; é o que faz o agente decidir invocar a skill)
---

# ... as instruções ...
```

**Quatro exigências de comportamento.** Uma skill que não faz as quatro não conta:

**(a) Ela entrevista antes de rodar.** Recebe um tema e um recorte, e **não sai produzindo**.
Pergunta o que precisa perguntar até o pedido estar claro: qual horizonte de tempo, para quem,
que região, o que já está descartado, qual o viés desejado. Só depois roda. Uma skill que
aceita "faça a roda dos futuros de XR" e já despeja três níveis de efeitos não está pronta —
está adivinhando.

**(b) Ela separa emergente de disruptivo, e maduro de nenhum dos dois.** Está no enunciado da
disciplina e é a distinção mais fácil de errar. A sua skill tem que ter um critério explícito,
escrito, para recusar tecnologia madura.

**(c) Ela duvida do próprio resultado.** Depois de gerar os efeitos, a skill tem que ter um
passo que **tenta derrubá-los**: qual efeito não se sustenta, qual é só extrapolação linear do
presente, qual assume adoção que nunca aconteceu antes nessa velocidade. Se a sua skill só
produz e nunca contesta, ela está automatizando entusiasmo, não análise.

**(d) Ela produz a saída no formato padrão da disciplina.** O documento está especificado em
`FORMATO-documento-tendencia.md`. A saída da sua skill tem que sair já naquele formato —
frontmatter, seções numeradas e o bloco da roda em YAML. É isso que vai permitir processar os
dez mapas juntos, gerar os infográficos e montar o site da turma.

### 2. `ESTUDO.md` — o método, estudado por você

Este é o arquivo em que você mostra que **entendeu**, não que pesquisou. Máximo de duas páginas.

Cubra, no mínimo:

- **Futures Wheel** — como funciona, quem propôs, e como se decide onde parar de derivar efeitos.
- **Hype Cycle da Gartner** — o que a curva afirma, e a crítica de que ela não é validada
  empiricamente. Você vai usá-la assim mesmo; a questão é saber para quê ela serve e para quê não.
- **Quadrante Mágico** — o que ele mede, e por que ele fala de mercado e não de futuro.
- **Emergente × disruptivo** — a distinção, com o critério que você adotou.
- **Efeitos de 1ª, 2ª e 3ª ordem** — o que separa uma ordem da seguinte, na prática.
- **Pelo menos um método que não está nesta lista**, que você encontrou por conta própria.

Para cada método, uma linha que a maioria dos textos não escreve: **para que ele não serve.**

### 3. `TESTE.md` — uma rodada de verdade

Rode a sua skill num tema de teste — qualquer um, **não precisa ser o tema que você vai pegar
na disciplina**. Cole a rodada inteira: a entrevista que a skill fez, as suas respostas, e a
saída. Sem cortes e sem embelezar.

### 4. `DUVIDAS.md` — onde a máquina errou

Meia página. Onde a IA te deu coisa errada, plausível e convincente, enquanto você construía
isso: efeito inventado, fonte que não existe, autoria trocada, número redondo demais, causa que
não decorre. E — a parte que interessa — **como você percebeu.**

Se a resposta honesta for "não percebi nada de errado", escreva isso. Mas releia antes, porque
em duas horas de trabalho com um modelo generativo sobre um método que você acabou de conhecer,
não ter encontrado nada geralmente significa não ter conferido.

---

## Como entregar

Repositório ou pasta compartilhada, link no Google Classroom, até **08/09, 12h00**.
Não há aula síncrona nesse dia — o horário da aula é seu, para terminar.

---

## Como isso é avaliado

Na ordem em que pesa:

1. **A skill roda e faz as quatro coisas.** Entrevista, distingue, duvida, e sai no formato.
2. **`DUVIDAS.md` mostra discernimento real** — um erro específico, pego por um motivo que você
   consegue explicar. Vale mais do que um `ESTUDO.md` caprichado.
3. **`ESTUDO.md` mostra que você entendeu os limites de cada método**, não só o que cada um é.
4. **`TESTE.md` é uma rodada honesta**, com a entrevista visível.

Não se avalia tamanho, nem quantidade de métodos, nem beleza do Markdown.

---

## Se você travar

Cota estourada, máquina que não aguenta, ferramenta que passou a pedir cartão, tempo curto:
**me avise antes de segunda, 07/09.** Tem contorno para quase tudo — modelo aberto rodando
local, lote menor, skill em formato mais simples. O que não tem contorno é avisar depois do prazo.
