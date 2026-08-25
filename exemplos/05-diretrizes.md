# 5 · As diretrizes que a IA seguiu para sair de 11.500 para 500

**Aluno:** exemplo (troque pelo seu login)
**Modelo usado no julgamento em lote:** Gemini 2.5 Flash pelo Google AI Studio (cota gratuita),
em lotes de 40 itens por chamada.

Este é o documento que responde: **por que essas 500 e não outras 500.** Se você entregar a
conversa transcrita (arquivo 4), não precisa entregar este. Um dos dois basta — mas o que se
espera é que exista um critério escrito em algum lugar, e não "pedi para a IA escolher as melhores".

---

## O prompt que rodou em cima de cada lote

> Você vai receber 40 ferramentas, cada uma com nome, URL e um trecho de descrição colhido na
> varredura. Para cada uma, devolva um JSON com `manter` (true/false), `categoria`, `nota` (0 a 5)
> e `porque` (uma frase).
>
> Mantenha uma ferramenta se ela passar em **todos** os cortes duros e em **pelo menos dois** dos
> critérios de interesse. Na dúvida entre manter e cortar, **mantenha** — a peneira seguinte é
> humana e é ela que decide de verdade.

## Cortes duros — reprova em qualquer um, cai fora

1. **Não é ferramenta.** Artigo, vídeo, thread, lista de outras ferramentas, página de vaga.
2. **Link morto ou que não é o produto.** Redireciona para domínio parqueado, para a home de um
   agregador, ou para uma loja de apps genérica.
3. **Não tem nada a ver com mídia ou interação.** CRM, planilha, gerador de currículo, chatbot de
   atendimento. O corte que mais rendeu: tirou cerca de 3.000 itens sozinho.
4. **É a mesma coisa que outra já mantida.** Mesmo domínio registrável, ou clone declarado
   ("alternativa ao X") sem nada de próprio.
5. **Está morta.** Último commit ou última postagem há mais de 24 meses, ou aviso de encerramento
   na própria página.

## Critérios de interesse — precisa de pelo menos dois

- **Faz algo que eu não conseguiria fazer à mão em uma tarde.** Não é atalho de conveniência, é
  capacidade nova.
- **Dá para eu testar hoje**, de graça ou com camada gratuita útil — não uma lista de espera.
- **O resultado é material**: sai imagem, som, malha, cena, texto navegável, sinal. Não sai só
  relatório sobre outra coisa.
- **Encaixa em pipeline**: tem API, exporta em formato aberto, ou roda local.
- **Tem alguma ideia própria de interface.** Faz a mesma tarefa dos concorrentes de um jeito
  diferente de operar.
- **Vem de um lugar que eu respeito** — laboratório, artista, conferência da área — mesmo que
  esteja tosca.

## Regras de desempate, quando sobrava mais de 500

Aplicadas nesta ordem, até chegar em 500:

1. **Diversidade de categoria antes de nota.** Nenhuma categoria podia passar de 80 das 500. Sem
   isso, 300 seriam geradores de imagem e o resto sumia.
2. **Diversidade de fonte.** Se duas empatavam, ficava a que veio da fonte menos representada.
   Foi assim que anais de conferência sobreviveram à enxurrada de diretório comercial.
3. **Estranha ganha de polida.** Empatando, fica a que eu não consigo classificar direito.
4. **Nota mais alta**, só no fim.

## O que eu mandei a IA fazer com a descrição

Este foi o pedido que mais mudou o resultado, e eu só cheguei nele na terceira tentativa:

> A descrição não pode ser publicidade. Escreva 2 ou 3 frases que respondam, nesta ordem:
> **(a)** o que a ferramenta faz, em termos concretos — o que entra e o que sai;
> **(b)** onde ela encaixa no trabalho de quem vai usar;
> **(c)** qual é o limite dela — o que custa, o que exige, o que ela não faz.
> Proibido: "revolucionário", "poderoso", "solução completa", "leva a sua criatividade a outro
> nível". Se você não sabe o limite, escreva "não consegui apurar" — é melhor que inventar.

A alínea (c) é a que salva a peneira seguinte. Com ela, dá para decidir olhando o cartão. Sem ela,
tem que abrir o link de todas as 500 — e aí a atividade não termina.

## O que eu montei para rodar isso, e o que aprendi montando

O julgamento em lote não é um prompt: é um programinha. O meu tinha 60 linhas e três coisas que
eu só descobri que precisava depois de quebrar:

1. **Cache em disco por lote.** Na primeira tentativa a cota estourou no lote 190 de 288 e eu
   perdi tudo. Com cache, rodar de novo custa zero e recomeça de onde parou.
2. **Saída em JSON forçado.** Enquanto eu pedia "responda em JSON" em texto livre, uns 5% dos
   lotes voltavam com markdown em volta e quebravam o parser. Ligando o modo JSON estruturado do
   modelo, o problema sumiu.
3. **Lote de 40, não de 200.** Com 200 itens por chamada o modelo começava a repetir a justificativa
   do item anterior. Com 40 ele mantinha atenção em todos. Descobri isso lendo a saída, não
   supondo.

E a lição que eu levo: **o gargalo nunca foi o modelo, foi o meu critério.** Toda vez que o
resultado veio ruim e eu culpei o modelo, o problema era que eu tinha pedido algo vago. Quando eu
escrevi a regra, ele executou a regra.

## O que eu sei que esse critério deixou passar

- **Ferramenta boa e cara.** O critério "dá para testar hoje" derrubou coisa relevante que só tem
  demonstração comercial. Assumi a perda conscientemente.
- **Ferramenta boa sem site.** Muito projeto de pesquisa vive só num repositório com README ruim.
  O corte 2 comeu alguns.
- **Ferramenta boa em outra língua.** Não busquei em japonês, coreano ou chinês. Sei que perdi
  território inteiro aí.
