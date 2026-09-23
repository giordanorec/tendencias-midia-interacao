---
titulo: "Lições aprendidas nas prospecções de futuro da CIN0055"
data: 2026-09-22
autor: skill-professor (leitura do acervo de rodadas, confrontos e decisões)
mapas_lidos: 36
mapas_totais: 280
skills: 13
temas: 19
horizontes: 5
confrontos: 3
---

# Lições aprendidas — prospecções de futuro da CIN0055

*Tendências em Mídia e Interação · CIn-UFPE · 2026.2 · escrito em 22/09/2026.*

O objeto deste texto é **prática de método** e **skill**, nunca pessoa. Não há nota, ranking nem
comparação entre alunos. Onde uma skill é nomeada, é como evidência — do mesmo modo que se nomeia
um tema ou um confronto.

Os números vêm de medição por script sobre os arquivos do acervo, e estão reproduzíveis: o
frontmatter dos 280 mapas, as 280 saídas de `verificar.py`, os 280 `meta.json` de rodada, os três
confrontos lidos por inteiro e as 117 decisões em `docs/decisoes/`. Trinta e seis mapas foram lidos
em texto — inteiros ou por seções.

---

## Em uma frase

Rodar a roda é barato e quase sempre dá certo; o que é caro, e o que quase nunca foi feito, é
**derrubar o que a roda produziu** — e quase tudo que separou um mapa útil de um mapa volumoso
cabe nessa frase.

---

## O acervo

| o quê | número |
|---|---|
| mapas de tendência (`tendencia-*.md`) | **280** |
| procedimentos distintos | **13** — 11 skills da turma, a skill do professor e a Futures Wheel original; a skill do professor rodou ainda em quatro horizontes longos, somando 17 famílias de rodada |
| temas | **19**, todos cobertos por 12 mapas cada (11 da turma + professor) mais a Futures Wheel |
| horizontes | **5** — 2031 (247 mapas), 2036 (9), 2041 (8), 2046 (8), 2056 (8) |
| palavras escritas | **3.180.571** (mediana de 10.474 por mapa; mínimo 2.814, máximo 24.306) |
| disrupções-raiz declaradas | **852** (mediana de 3 por mapa) |
| efeitos declarados | **13.940** — 9.867 nos 261 mapas de 12 seções (2.304 de 1ª ordem, 3.866 de 2ª, 3.697 de 3ª) e 4.073 nos 19 mapas completos da Futures Wheel |
| citações de fonte | **9.019** — 4.431 declaradas no frontmatter dos mapas de 12 seções, 4.588 nos da Futures Wheel |
| URLs distintas citadas | **3.107**; 5.404 citações; **72%** das URLs aparecem em um mapa só |
| links que respondem (seção 11) | **4.043 de 4.166 — 97%**; 76 mapas de 258 têm ao menos um link morto |
| verificador | **159 `ok`**, **102 com ao menos um problema**, 19 `n/a` (a Futures Wheel não usa o formato) |
| confrontos aluno × professor | **3** — tema 4 (hfm), tema 8 (yrv), tema 19 (jlsn) |
| decisões registradas | **117** em `docs/decisoes/`; **26** delas tratam do estatuto de uma fonte que não abre |
| custo e tempo | **≈ US$ 2.600** equivalentes em API e **116 h** de tempo de API, somando as 280 rodadas |

Distribuição de confiança, somando os 9.023 efeitos que o verificador leu:

| ordem | alta | média | baixa |
|---|---|---|---|
| 1ª | 714 (33%) | 1.294 (60%) | 132 (6%) |
| 2ª | 95 (3%) | 2.598 (73%) | 878 (25%) |
| 3ª | 0 (0%) | 199 (6%) | 3.113 (94%) |

A regra "a confiança cai com a ordem" foi cumprida por praticamente todo mundo. É a regra mais
fácil de cumprir do formato inteiro — e, como se verá, a que menos diz sobre a qualidade do mapa.

---

## Lições

### 1. A convergência entre mapas mede a busca, não o futuro

Em cada um dos 19 temas há uma **fonte-âncora** que 8 a 12 dos 12 mapas citam. No tema 3 e no
tema 6, os 12 mapas citam a mesma URL. Nenhum enunciado de tema traz URL: a coincidência não veio
do briefing, veio de os doze procedimentos fazerem a mesma busca e receberem o mesmo primeiro
resultado.

Fora dessa âncora, as bibliografias mal se tocam. Entre os 1.045 pares de mapas de skills
diferentes sobre o mesmo tema, a mediana é de **3 fontes em comum** e o índice de Jaccard mediano
é **0,10**. Setenta e dois por cento das 3.107 URLs aparecem num mapa só. Ou seja: há um núcleo
minúsculo compartilhado e uma cauda enorme privada — e é o núcleo que produz a sensação de
convergência.

Isso tem consequência direta no confronto. No tema 19, o efeito `e2.1` do aluno e o `e1_16` da
Futures Wheel dizem a mesma coisa e **saem do mesmo artigo** (Cheng et al., que é a fonte [1] do
próprio aluno). Marcá-los como convergência tripla teria apresentado à turma um artigo contado
duas vezes como se fossem três caminhos. Das seis convergências daquele confronto, só uma
sobreviveu como evidência de três fontes distintas.

**Evidência:** 1.045 pares medidos, Jaccard mediano 0,10; fonte-âncora em 8–12 de 12 mapas nos 19
temas; confronto `19-jlsn`, linha C2 da seção 1; decisão TMI-0118.

### 2. O enunciado volta como resposta

O briefing de cada tema abre com uma seção chamada "A disrupção-raiz" e fecha com "Perguntas que
mobilizam a roda", já separadas em 1ª, 2ª e 3ª ordem. Ele é entregue idêntico a todas as skills.

No tema 16, o enunciado diz que a inteligência sai da nuvem por "runtimes em WebGPU e frameworks
nativos dos sistemas operacionais", e pergunta, na 3ª ordem, se "a inteligência vira bem pessoal
como o diário. Herdável? Confiscável?". Os **12 mapas do tema 16** têm como primeira raiz alguma
forma de "a inferência vira serviço do sistema operacional e do navegador". Dez dos doze têm, como
terceira raiz, alguma forma de "o modelo vira posse" — e um deles usa literalmente as palavras
"herdável" e "apreensível".

Recusar a raiz anunciada é possível e foi feito, mas raramente: **9 mapas de 280** declaram por
escrito que recusam ou contradizem o enunciado. Seis decisões da disciplina existem só para
autorizar essa recusa quando a régua de maturidade a exige (TMI-0020, 0035, 0038, 0104, 0110,
0113) — o que indica quanta pressão o enunciado exerce.

**Evidência:** enunciado do tema 16 (`rodadas/*/16-*/prompt.md`, zero URLs, três promessas
nomeadas); raízes dos 12 mapas do tema 16; 9 de 280 mapas com recusa declarada do enunciado.

### 3. A dúvida está escrita e não está executada

A seção 7 ("Contra o próprio mapa") é o passo que todas as nove skills lidas em 10/09 prescrevem, e
a prosa dela costuma ser a melhor parte do documento. O mapa `jlsn/16` escreve, fora do roteiro,
que "'ninguém pode desligar' também significa 'ninguém pode consertar'". O `meap/16` nomeia o viés
de construir o mapa *contra* o enunciado como viés tão real quanto o de construí-lo a favor.

Só que a régua não é a qualidade da prosa: é se a roda mudou. **115 dos 280 mapas (41%) não
registram nenhum rebaixamento com valor anterior nem nenhum corte de efeito com `id`.** Só 52%
registram um "antes → depois" e só 40% registram um efeito removido com identificador.

Os três confrontos chegam à mesma conclusão por caminhos independentes. No tema 4: "a seção 7
registra três alterações de confiança e nenhuma remoção, nenhum acréscimo e nenhuma mudança de
prazo". No tema 19: "nenhum dos doze efeitos do bloco YAML foi removido ou rebaixado como resultado
da bateria — pela cota mínima da skill, a bateria não fechou". A diferença apontada ali não é de
rigor intelectual, é de **auditabilidade**: ninguém consegue reconstruir, lendo o documento, qual
valor mudou.

**Evidência:** 115 de 280 mapas sem rebaixamento com valor nem corte com `id`; seção 5 dos
confrontos `04-hfm`, `08-yrv` e `19-jlsn`.

### 4. O verificador pega forma, não derivação — e isso é bom, desde que se saiba

Dos 280 mapas, **159 saíram `ok`** e **102 com ao menos um problema**. O que o script acusa é
concreto: campo de frontmatter faltando, título fora do literal, contador que não bate com a
árvore, prazo fora do horizonte, link que não responde.

O que ele **não** testa é o que decide se o mapa vale: se o efeito tem mecanismo escrito, se ele é
específico daquela raiz, se o prazo tem classe de referência, e se o `sinal` corresponde a um
artefato que existe. O confronto do tema 4 diz isso com o documento na mão: o mapa passa em 18/18
campos, 12/12 títulos, contagens batendo e calibração caindo com a ordem — `RESULTADO: ok` — e as
doze ressalvas da seção 2 do confronto estão todas nos quatro testes que o script não faz.

Há um caso que mostra o limite dos dois lados. Um dos `DUVIDAS.md` da turma relata um script de
checagem com bug de regex, que cortava o documento no primeiro bloco de código e "passou" com 5
seções em vez de 12. Foi pego porque o número impresso não fechava. **Peça sempre o número, nunca
a palavra "passou".**

**Evidência:** 159 `ok` / 102 com problema em 280; confronto `04-hfm`, seção 5; o caso do regex está
em `SKILLS-DA-TURMA.md`, seção sobre `futurizacao-mjbo`.

### 5. O prazo é a parte mais fraca de quase todo mapa

Os prazos das ordens 1 e 2 se comportam: só **6 efeitos em 5 mapas** passam do horizonte. Na 3ª
ordem são **672 efeitos em 106 mapas** — e o formato permite isso, desde que a prosa declare. A
declaração é que raramente aparece: no tema 8, oito dos dez efeitos de 3ª ordem do mapa do aluno
estavam além de 2031 e nenhum foi declarado como fora da janela, o que faz o mapa responder "o que
acontece até 2031" com menos do que parece.

O problema de fundo não é a conta, é a ausência de âncora. O termo "classe de referência" aparece
literalmente em **53 dos 280 mapas (19%)**; alguma forma de precedente datado aparece em 206 (74%),
mas quase sempre na prosa e não colada ao ano de um efeito. O confronto do tema 4 registra a
consequência numa linha que vale para os doze efeitos que examina: "prazo sem referência é chute — o
que não significa que o ano esteja errado, significa que não há como discutir se está".

Quando a referência é usada, ela muda o ano. No mesmo confronto, o prazo do HTTP 402 rotineiro foi
empurrado de 2027 para 2029 pela classe de referência dos micropagamentos web (fracassos em 1997,
1999 e 2013). Dois mapas chegaram ao mesmo ano — um por referência, outro por intuição. Convergência
de número sem convergência de método.

**Evidência:** 6 efeitos fora da janela nas ordens 1–2 contra 672 na 3ª ordem; "classe de referência"
em 53 de 280 mapas; confronto `04-hfm`, seção 2 e nota sobre `p e6`; confronto `08-yrv`, seção 5.

### 6. Volume não compra discriminação

A Futures Wheel original produziu **4.073 efeitos e 4.588 citações de fonte** em 19 temas, contra
uma mediana de 32 efeitos e 14 fontes nos mapas de 12 seções. Custou, por tema, uma mediana de
**US$ 90 equivalentes e 224 minutos**, contra US$ 3 a US$ 10 e 8 a 29 minutos nos demais.

O que o volume compra é cobertura, e o próprio confronto do tema 4 registra o desconto que isso
exige: "com quatro vezes mais efeitos, a chance de cobrir qualquer coisa é maior — por isso a
ausência dupla vale mais que a presença tripla". Foi por essa razão que a terceira voz entrou só
numa seção do confronto, e não em todas.

O melhor sinal de que volume sem critério não discrimina é a marca `is_obvious`. Nas rodadas 01 a
04, os agentes classificaram **90% a 99%** dos efeitos como não-óbvios. Depois que o critério foi
escrito — óbvio é o efeito que um profissional informado enuncia sem pesquisar, ainda que o dado
seja inédito —, a proporção caiu para a faixa de 55% a 83%. O mesmo material, lido com régua,
passou a separar o que a roda descobriu do que ela apenas confirmou.

Tamanho também não prevê correção formal: entre os mapas que o verificador aprovou e os que
reprovou, a mediana de palavras (11.452 contra 11.167), de efeitos (35 contra 33) e de fontes (17
contra 17) é praticamente a mesma.

**Evidência:** `nao_obvios/total_effects` por rodada da Futures Wheel (90–99% nas rodadas 01–04;
55% na 15); decisão TMI-0061; medianas de palavras/efeitos/fontes por resultado do verificador;
confronto `04-hfm`, seção 7.

### 7. A fonte é recente, abundante e frágil

Dos anos citados na seção 11 dos mapas, **62% são 2026** e **88% são de 2025 em diante**. Menos de
**3%** são anteriores a 2023. O acervo inteiro está construído sobre notícia dos últimos doze meses.

Isso é excelente para responder "por que agora" e péssimo para responder "quando" — porque a classe
de referência exige história, e a história é justamente o que não está no corpus. As duas lições
anteriores são o mesmo fato visto de dois lados.

Os links respondem: 4.043 de 4.166 (97%). Mas **76 mapas de 258** entregaram com ao menos um link
morto, e o estado de uma fonte que não abre foi o assunto mais difícil da disciplina inteira: **26
das 117 decisões** tratam disso, e a TMI-0067 existe só para arbitrar entre cinco decisões vigentes
que se contradiziam sobre links bloqueados. Nos próprios mapas, 46% mencionam alguma fonte que não
abriu, 36% mencionam um 403, 34% mencionam algo "citado de memória, não verificado" e 21% mencionam
paywall.

E fontes que respondem ainda podem discordar. A leitura de qualidade do tema 13 encontrou, entre
seis mapas da mesma skill, ARR da ElevenLabs de US$ 600 M contra US$ 500 M, uploads gerados na
Deezer acima de 50% contra 44%, e o WER do SpeechAnalyzer pior que o Whisper em dois mapas e melhor
em outros dois.

**Evidência:** 6.277 anos extraídos das seções 11 (62% em 2026, 3% antes de 2023); 97% de links
vivos com 76 mapas contendo pelo menos um morto; 26 de 117 decisões sobre fonte que não abre;
`estudo-clis/leitura/LEITURA-QUALIDADE.md`, "Números que não batem".

### 8. A roda gira só para um lado

Só **38%** dos mapas trazem, em qualquer lugar, um freio explícito — retroação, contra-mecanismo,
ator com incentivo para bloquear. Nos outros, todos os efeitos apontam na mesma direção da raiz, e
o futuro descrito é a raiz amplificada três vezes.

Os confrontos encontraram isso em todos os três temas. No tema 19: "toda a roda dele aponta para a
mesma direção — o vínculo agrava o problema — e nenhum efeito freia a raiz". No tema 4, dois
efeitos inteiros do mapa independente são freios que o outro não tem: a demanda por micropagamento
que não aparece na escala prometida, e a diretriz de busca que pune quem entrega texto diferente ao
agente. No tema 8, o freio estava diagnosticado na prosa (a rejeição do público existe e se
manifesta como policiamento) e não estava derivado na roda.

Duas das nove skills lidas em 10/09 modelam explicitamente força contrária ou ator com incentivo
para bloquear. É a prática menos difundida e a de maior retorno: um freio por raiz muda mais o mapa
do que dez efeitos a mais.

**Evidência:** 105 de 280 mapas com freio declarado; confrontos `19-jlsn` (buraco `e4.1`), `04-hfm`
(buracos `e8` e `e13`) e `08-yrv` ("o ramo do freio de demanda"); `SKILLS-DA-TURMA.md`, seção 3.

### 9. O Brasil fica na prosa e não entra na roda

O briefing pediu a todos "global, com uma nota sobre o Brasil". A nota foi escrita: **os 280 mapas
mencionam o Brasil na prosa**, com mediana de 14,5 menções, e **247 deles citam ao menos uma fonte
`.br`** — Senado, Câmara, gov.br, CETIC, CFP, SciELO, imprensa especializada.

Mas o Brasil entra no bloco `roda:`, como efeito derivado com mecanismo e prazo, em apenas **93 dos
280 mapas (33%)**. Nos outros dois terços ele é contexto de abertura e ressalva de fechamento, não
consequência.

O confronto do tema 19 mostra o custo disso. O efeito do aluno sobre adiamento da busca de ajuda
profissional tem uma causa concorrente brasileira com número — consulta a R$ 322,28 na referência
do CFP e fila de até 943 dias — que tornaria o efeito discutível, e que estava numa fonte
brasileira do terceiro mapa. Sem entrar na roda, o dado brasileiro não disputa nada.

**Evidência:** Brasil na prosa em 280/280 mapas, no bloco `roda:` em 93/280; 247 mapas com fonte
`.br`; confronto `19-jlsn`, seção 2, `e3.1`.

### 10. O mesmo procedimento em outro ambiente dá outro mapa

O estudo entre CLIs rodou **a mesma skill, no mesmo tema 13, com o mesmo prompt não interativo**, em
seis ambientes. Saíram de **2 a 4 raízes** e de **6 a 16 efeitos de 1ª ordem**. Na leitura de
qualidade por oito critérios, as notas foram de **14 a 39 pontos em 40**.

A divergência não foi de redação. Cinco dos seis mapas registram que o limite técnico dos canais
separados caiu entre junho e agosto de 2026; um diz que não caiu e constrói uma raiz sobre isso.
Três recusam "música inteira a partir de descrição" como raiz por maturidade, com medição; três
aceitam. É o mesmo fato decidindo ramos inteiros em direções opostas.

E o gasto não explica a ordem. O mapa mais barato (1,95 M tokens) ficou em quarto e teve o melhor
desempenho isolado em classe de referência; um mapa que gastou quase três vezes isso ficou em
último, com um presente de 2024 e nenhuma fonte posterior. A conclusão registrada ali vale como
regra: **o token compra profundidade quando há método para gastá-lo; sem método, compra extensão.**

Dois modos de falha valem guardar, porque não aparecem no documento final. Uma ferramenta encontrou
o mapa do dia anterior na árvore de trabalho e devolveu **525 de 532 linhas idênticas em 4
minutos** — por isso o estudo foi refeito em pastas isoladas. Outra passou 26 minutos, fez 8 buscas
e **anunciou ter gravado o arquivo num caminho inventado**, sem nunca ter chamado a ferramenta de
escrita.

**Evidência:** `26_2/estudo-clis/ESTUDO.md` e `leitura/LEITURA-QUALIDADE.md`, tema 13, 11–12/09/2026.

### 11. A skill que fixa a forma produz a mesma árvore em qualquer tema

Uma skill do acervo entregou **6 efeitos de 1ª ordem, 12 de 2ª e 18 de 3ª nos dezenove temas** —
desvio-padrão zero nos três. O template força dois filhos por nó e fixa os contadores no
frontmatter; por construção, eles sempre batem. A mesma skill foi a que mais reprovou no verificador
por outro motivo: títulos em formato próprio ("## Seção 1 —") e chaves fora do esquema
(`roda_dos_futuros`, `filhos`, sem `ordem`), que quebram a leitura por máquina.

O oposto também tem custo. Duas skills do lote entregaram árvores que **afunilam**: a mediana dos
19 temas é 9/13/10 numa delas e 7/11/11 na outra — a 3ª ordem menor ou igual à 2ª, o que significa
que a maior parte dos ramos morreu antes de chegar ao fim. Nas próprias entregas de setembro isso
já aparecia (5/4/3 e 6/6/5 nos `TESTE.md`).

O que funciona, nas skills que o fizeram, é uma **regra de parada escrita**: expandir um nó só se o
filho mudar de ator ou de mecanismo; parar quando não se conseguir nomear o mecanismo causal.
"Muda a sociedade" não é efeito de 3ª ordem, é vazio.

**Evidência:** `futurizacao-kvv`, 6/12/18 com desvio-padrão 0,0 nos 19 temas e 3 de 17 verificações
`ok`; `futurizacao-alpa2` com árvore 5/4/3; regras de parada em `futurizacao-yrv`,
`futurizacao-mjbo` e `futurization-meap`, descritas em `SKILLS-DA-TURMA.md`.

### 12. O confronto corrige os dois lados — e é por isso que ele ensina

O confronto foi desenhado para ler o mapa do aluno com uma régua. O que ele de fato produziu, nos
três temas, foi **correção nas duas direções**.

No tema 19, o mapa do aluno distingue concordância excessiva de incompreensão de contexto; o mapa
independente não faz essa distinção e usa uma métrica de uma para justificar um efeito sobre a
outra. Está registrado no confronto: "é o ponto em que o mapa dele é mais preciso que o meu". E a
calibração de confiança dele, medida pelo mesmo script, é melhor: nenhuma confiança alta na 1ª
ordem, contra duas do mapa independente.

No tema 4, a raiz 2 do aluno — delegação verificável, mandato, revogação, prova de consentimento —
é um eixo inteiro que o mapa independente tratou como pré-condição e empurrou para outro tema. O
confronto declara que, se essa fronteira estiver mal traçada, sete efeitos classificados como "só do
aluno" eram, na verdade, efeitos que o outro mapa deveria ter derivado.

Também aparece o que o placar não mede. No tema 19, `efeitos_so_do_professor: 46` parece lacuna e
não é: 38 dos 46 estão listados como escolha de recorte defensável. O número que importa é o de
buracos, e ele é pequeno.

**Evidência:** confronto `19-jlsn`, seção 5 ("o que ele derrubou e eu não tinha", quatro itens) e
seção 7; confronto `04-hfm`, seção 7, segundo marcador.

### 13. Recusar candidata a raiz é o hábito que mais separa as práticas

**157 dos 280 mapas** registram alguma recusa na seção 4. A frequência varia muito por skill: duas
registram recusa nos 19 temas; três registram em 4 ou menos.

Registrar a recusa é barato e muda o mapa inteiro, porque a recusa é o único ponto em que a régua
de maturidade da disciplina — "descarte o que já é comum em produto de massa" — chega a agir. Várias
decisões da disciplina nasceram de recusas concretas: parsing de documento por modelo de
visão-linguagem (três fornecedores acima de 95% num benchmark declarado saturado), passkey como
login (75% das pessoas com uma habilitada, 49% usando regularmente), companheiro de nuvem com
memória (já passou da maioria inicial de Rogers).

E a régua precisa de cuidado na medida. "Mais de 100 milhões de usuários" da Suno é o acumulado de
quem já experimentou, declarado pela própria empresa, com 2 milhões pagando — enquanto a música
gerada responde por 1% a 3% da escuta na Deezer. A decisão que saiu disso vale como regra geral:
**posição na curva de adoção se mede pelo uso ativo de quem recebe, nunca pelo acumulado
autodeclarado de quem cria.**

**Evidência:** 157 de 280 mapas com recusa na seção 4 (19/19 em `futurizacao-bvga` e
`futurizacao-jcsc`; 1/19, 2/19 e 4/19 em três outras); decisões TMI-0104, TMI-0113, TMI-0110,
TMI-0092 e TMI-0096.

---

## Pontos cegos coletivos

Classifiquei por família as 9.729 frases de efeito extraídas dos blocos `roda:`. As cinco famílias
mais frequentes — preço e modelo de negócio (13%), regulação (10%), mercado e concentração (10%),
interface e design (9%), procedência e verificação (9%) — aparecem em 224 a 249 dos 256 mapas
legíveis. São o repertório garantido. O que falta é sistemático e não é aleatório:

- **Acessibilidade.** 168 ocorrências, **1,7%** dos efeitos, em 105 mapas; e o tema é mencionado em
  qualquer lugar do documento em só 142 dos 280. Num tema de mídia e interação isso é a maior
  ausência conjunta, e o confronto do tema 4 a nomeia: agentes leem pela mesma árvore de
  acessibilidade dos leitores de tela, e "é o único ponto em que fazer para máquina entrega algo
  diretamente usável por gente" — não estava nem no mapa do aluno nem no independente.
- **Cultura, estética e repertório.** 1,5% dos efeitos. Homogeneização de repertório, localização
  cultural decorativa, perda de variabilidade entre saídas: aparecem na Futures Wheel do tema 8 com
  número medido e em nenhum dos outros dois mapas do mesmo tema.
- **Infraestrutura física e energia.** 331 ocorrências, e elas **encolhem** com a ordem (93 na 1ª,
  134 na 2ª, 94 na 3ª) enquanto o total de efeitos cresce. O custo material da mudança entra no
  mapa como fato do presente e sai antes de chegar às consequências.
- **Geopolítica e soberania.** 0,3% dos efeitos, em 22 mapas.
- **Confiança do público e legitimidade.** 0,2%, em 17 mapas. Quase nenhum mapa deriva o que
  acontece quando as pessoas simplesmente deixam de acreditar no que a tecnologia entrega.
- **Quem perde.** Não é uma categoria de palavra-chave, mas aparece em todos os três confrontos como
  o mesmo buraco: o mapa registra quem ganha distribuição, e não registra o jornalismo local que
  perde a base econômica, a pessoa sem agente que volta para a fila, nem o pequeno editor sem poder
  de negociação. Onde o viés declarado na entrevista foi "otimista", o efeito é visível no
  resultado.
- **O efeito genérico que sobrevive.** A família "currículo, formação, ensino" aparece em **123 dos
  256 mapas**, com 198 ocorrências, apesar de "cursos reorganizam o currículo" estar na lista de
  efeitos proibidos de várias skills. É o efeito plausível em qualquer tema — que é a definição
  operacional de efeito genérico.

---

## O que muda com horizontes longos

A skill do professor rodou os temas 1 a 8 em cinco horizontes: 2031, 2036, 2041, 2046 e 2056. O
resultado é a medição mais nítida do acervo.

| horizonte pedido | janela | prazo mediano dos efeitos | alcance mediano | efeitos com prazo > 2036 | fontes (mediana) |
|---|---|---|---|---|---|
| 2031 | 5 anos | 2029 | **3 anos** | 0% | 27 |
| 2036 | 10 anos | 2031 | **5 anos** | 3% | 32 |
| 2041 | 15 anos | 2034 | **8 anos** | 24% | 21 |
| 2046 | 20 anos | 2035 | **9 anos** | 38% | 21 |
| 2056 | 30 anos | 2037 | **11 anos** | 51% | 17 |

**Sextuplicar o horizonte triplica o alcance.** Pedir trinta anos não produziu um mapa de trinta
anos: produziu um mapa de onze, com a última década vazia. Em 2056, só 10% dos prazos caem nos dez
anos finais da janela.

As raízes praticamente não mudam. No tema 4, os cinco mapas têm as mesmas três a quatro rupturas —
o site publica ferramentas em vez de páginas, o acesso passa a ser cobrado na requisição, a URL
responde conforme o propósito, a descoberta ranqueia operabilidade. O horizonte muda a profundidade
da cascata, não o ponto de partida. E o ponto de partida é sempre lido no presente, com fontes de
2026.

As fontes ficam mais escassas quanto mais longe se olha (27 em 2031, 17 em 2056), o que é
coerente: não há notícia sobre 2056. O que deveria ocupar esse lugar é a classe de referência
histórica, e ela é exatamente o que falta (lição 5).

A disciplina já produziu três decisões para lidar com isso, e elas se leem juntas: datar pela
referência ainda que passe da janela (TMI-0055); tratar "zero efeitos fora da janela" em horizonte
longo como **suspeita de compressão**, não como conformidade (TMI-0080); e aceitar a janela final
vazia como resultado legítimo, em vez de esticar efeitos para preencher o horizonte pedido
(TMI-0085). As três dizem a mesma coisa: **o prazo deriva da referência, nunca da moldura do
documento** — e vale nas duas direções, contra comprimir e contra esticar.

Para a aula, o material é esse: abrir o mesmo tema em cinco horizontes e perguntar por que o mapa
de 2056 termina em 2037.

---

## Para a próxima edição

1. **Pedir a fonte-âncora declarada.** Se um efeito repete o que outro mapa diz, o mapa deve
   informar se a evidência é a mesma. Convergência entre mapas gerados por modelo de linguagem é
   evidência mais fraca do que convergência entre pessoas, porque eles podem compartilhar viés de
   material de treinamento. Um campo `fonte_primaria` por efeito resolveria a maior parte.
2. **Cota de dano obrigatória e auditável.** Pelo menos um efeito rebaixado ou removido **por
   raiz**, com `id`, valor anterior e valor posterior. Hoje 41% dos mapas não registram nenhum. A
   frase "a bateria não derrubou nada" precisa ser dita com essas palavras quando for o caso — é
   confissão de que ela foi frouxa, não elogio ao mapa.
3. **Classe de referência por efeito que afirma adoção.** Uma linha: que tecnologia comparável se
   difundiu nessa velocidade, e em quanto tempo. Sem ela, o ano não é discutível.
4. **Um freio por raiz.** Nomear o ator com incentivo para bloquear, capturar ou redirecionar a
   mudança, e derivar dele um efeito. Falta em quase dois terços dos mapas.
5. **Estender o verificador em três linhas baratas.** Contar efeitos sem a palavra "porque"; marcar
   efeitos cuja frase sobrevive à troca da raiz por outra do catálogo; e, em horizonte longo, acusar
   janela final vazia (TMI-0080). Nenhuma delas exige julgamento.
6. **Colar a saída do verificador na seção 12.** Só 57 dos 280 mapas o fazem. Os números, não a
   palavra "passou" — o caso do bug de regex mostra por quê.
7. **Pedir a nota sobre o Brasil como efeito, não como parágrafo.** Um efeito derivado, com
   mecanismo e prazo, e a fonte brasileira que o sustenta.
8. **Um lote curto em pasta isolada e a mesma skill em dois ambientes.** O estudo entre CLIs mostrou
   que a variação entre modelos rodando a mesma skill é da mesma ordem que a variação entre skills
   diferentes. Saber disso muda a leitura de qualquer mapa.
9. **Didática.** A observação do professor depois da aula de 17/09 é de método de apresentação, não
   de método de roda: a turma se apropriou do tema, discordou da máquina e deu a própria visão — e
   o ponto a treinar é **transformar o que a LLM produziu em comunicação simples, clara e direta**,
   em vez de ler o documento.

---

## Antes de rodar a sua skill

Uma lista curta, tirada do que o acervo mostrou. Não é sobre a ferramenta; é sobre o que você
precisa ter decidido antes de apertar o botão.

1. **Saiba que o enunciado vai voltar.** Ele nomeia a ruptura e já organiza perguntas em 1ª, 2ª e 3ª
   ordem. Submeta a ruptura anunciada aos mesmos testes de qualquer outra candidata, e registre por
   escrito se ela não passar. As perguntas do enunciado são matéria-prima de ideação, nunca efeito
   pronto.
2. **Escreva a régua de maturidade antes de procurar a raiz.** O que rompe, por que agora, onde está
   na difusão, o que ainda falta. Se a resposta à última for "nada, já está em uso comum", é maduro.
   Meça adoção pelo uso ativo de quem recebe, não pelo acumulado que o fornecedor declara.
3. **Duas a quatro raízes, e que caiam separadamente.** Um mapa de raiz única cai inteiro quando ela
   cai — foi o que o confronto do tema 19 mostrou, com o próprio documento reconhecendo isso.
4. **Todo efeito com mecanismo escrito.** "Porque X faz Y, logo Z." Sem mecanismo nomeado não há o
   que testar, e não há o que matar depois.
5. **Faça o teste da causa solta.** Remova a raiz. O efeito acontece do mesmo jeito, por outro
   motivo? Então ele não deriva dali — reconecte ou descarte. É o teste que menos aparece nas skills
   e o que mais pega efeito genérico.
6. **Frase afirmativa e falseável.** "Passam a omitir" arrisca; "podem omitir" não. Modal e hedge
   empilhado protegem o efeito do teste, e um efeito protegido do teste não serve para nada.
7. **Prazo com classe de referência.** Escreva o comparável histórico ao lado do ano. Se não achar,
   escreva "não encontrei" — busca negativa registrada vale mais que ano afirmado.
8. **Calibre `sinal` pela evidência, não pela posição na árvore.** `sinal` mede o que é observável
   hoje: conte artefatos verificáveis e nomeie-os. Um efeito que já está medido em 2026 com confiança
   "média" é descrição travestida de profecia, e uma especificação sem caso real não sustenta
   `forte`.
9. **Derrube alguma coisa, e deixe o rastro.** Pelo menos um efeito por raiz rebaixado ou removido,
   com `id` e com o valor de antes. Se nada morreu, escreva isso com todas as letras.
10. **Ponha um freio na roda.** Quem tem incentivo para bloquear, capturar ou redirecionar? O que
    acontece quando a demanda prometida não aparece?
11. **Só cite o que abriu.** E quando uma fonte não abrir, diga qual afirmação ficava órfã e o que
    você fez com ela. Vinte e seis das 117 decisões da disciplina existem por causa desse ponto.
12. **Rode em pasta isolada.** Uma ferramenta do estudo encontrou o mapa do dia anterior na árvore
    e devolveu 525 de 532 linhas idênticas em 4 minutos. Se há o que copiar, pode ser copiado.
13. **Rode o verificador e cole a saída.** Os números, não a palavra "passou". Se o número impresso
    não fechar com a árvore, o erro pode estar no script.
14. **Lembre do que ele não testa.** Mecanismo, especificidade, classe de referência e se o `sinal`
    tem artefato. Esses quatro são seus, e são os únicos que decidem se o mapa vale.
