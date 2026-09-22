---
tema: Companheiros digitais e IA afetiva
slug: companheiros-digitais-e-ia-afetiva
aluno_login: jlsn
professor_login: grec
data: 2026-09-22
horizonte: 2031
mapa_independente: /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/giordano/19-companheiros-digitais-e-ia-afetiva/tendencia-companheiros-digitais-e-ia-afetiva.md
mapa_terceira_voz: /Volumes/Extra/cosmos/ufpe/Aulas/TendenciasMidiaInteracao/26_2/skill-professor/rodadas/futures-wheel/19-companheiros-digitais-e-ia-afetiva/tendencia-companheiros-digitais-e-ia-afetiva.md
efeitos_em_comum: 6
efeitos_so_do_aluno: 6
efeitos_so_do_professor: 46
raizes_recusadas: 5
---

# Confronto — Companheiros digitais e IA afetiva

Três mapas do mesmo tema, produzidos sem contato entre si. O **mapa principal deste confronto** é o
da skill `futurizacao-giordano` (11/09/2026, 4 raízes, 51 efeitos, 21 fontes abertas) — foi escrito
onze dias antes da entrega do aluno e sem acesso a ela. O mapa do `futures-wheel` (13/09/2026, 254
efeitos, 257 fontes) entra **só como terceira voz**: aparece na seção 1, para marcar convergência
tripla, e na subseção 1b, com o que apenas ele viu. O documento do aluno (`jlsn`, 22/09/2026,
1 raiz, 12 efeitos, 3 fontes) não foi alterado.

Como contar os números do frontmatter: `efeitos_em_comum: 6` são seis **efeitos do aluno** que
encontram par no meu mapa — os seis pares abaixo usam cinco efeitos meus, porque o meu `e4`
responde a dois dos dele. `efeitos_so_do_professor: 46` é o que sobra dos meus 51 depois de
descontados esses cinco.

---

## 1. O que os dois mapas têm em comum

| # | Efeito (frase curta) | id no aluno | id no professor | ordem | tripla? | o que a convergência sugere |
|---|---|---|---|---|---|---|
| C1 | O que o sistema carrega da conversa anterior é o que o faz concordar com a premissa errada | `e2` | `e4` | 1ª × 1ª | **sim** (`e1_15`) | mecanismo com duas medições independentes; é o achado mais firme dos três mapas |
| C2 | Quem concorda demais fica mais convicto e menos disposto a reparar o conflito | `e2.1` | `e4` | 2ª × 1ª | **sim** (`e1_16`) | **convergência aparente**: aluno e futures-wheel citam a mesma fonte primária |
| C3 | A métrica de satisfação seleciona contra a qualidade do conselho | `e4.1` | `e9.1` | 2ª × 2ª | **sim** (`e1_11`, `e1_13`) | o incentivo econômico é o mesmo em qualquer camada do produto |
| C4 | Passa-se a medir qualidade do apoio, e não satisfação, como critério de segurança | `e4.1.1` | `e4.1.1` | 3ª × 3ª | **sim** (`w9`) | dois mapas põem aqui o mesmo efeito terminal; o terceiro diz quem paga a conta |
| C5 | O serviço humano de apoio passa a lidar com o histórico de conselho automatizado | `e3.1.1` | `e9.2.1` | 3ª × 3ª | **sim** (`e1_27`) | dois efeitos fracos concordando — e os dois autores já os declararam fracos |
| C6 | A memória compartilhada é o que dá peso à relação | `e1` | `e3` | 1ª × 1ª | **sim** (`e1_44`) | mesma premissa, consequências opostas: autoridade (ele) e trava de mercado (eu) |

**C1 — o mecanismo central.** Ele escreve em `e2`: "*Usuários de companheiros excessivamente
concordantes ficam mais seguros de suas próprias interpretações após desabafar*". Eu escrevo em
`e4`: "*A memória vira o principal vetor de dano documentado e os fornecedores passam a limitá-la
deliberadamente em temas sensíveis*", e na prosa da seção 5 o mecanismo é "*quanto mais o sistema
carrega do que foi dito antes, mais coerente fica com a premissa errada*" (psychosis-bench: DCS
0,91 contra SIS 0,37). O futures-wheel chega pelo terceiro caminho, em `e1_15`: "*Na arquitetura
atual, lembrar e concordar são a mesma coisa: a feature que cria o vínculo é a que corrompe o
conselho*", com o PersistBench dando 97% de bajulação induzida por memória em 18 modelos. **Três
mapas, três fontes diferentes, um mecanismo.** Este é o único ponto do confronto em que eu diria
que a convergência independente vale como evidência. Diferença de uso: ele tira daí uma
consequência sobre o usuário; eu tiro uma sobre o fornecedor; o futures-wheel trata como
propriedade da arquitetura. As três são compatíveis.

**C2 — a convergência que não conta.** O `e2.1` dele ("*Alguns usuários se mostram menos dispostos
a ouvir outras versões e a reparar conflitos com pessoas próximas*") e o `e1_16` do futures-wheel
("*O efeito da concordância não fica dentro da tela: foi medido no comportamento fora dela*", com
"reduz em 28% a disposição de reparar o conflito humano") **saem do mesmo artigo** — Cheng et al.,
que é a fonte [1] dele. Isso não é convergência independente, é a mesma leitura duas vezes. Registro
porque o contrário seria inflar o placar: o que sustenta `e2.1` continua sendo um estudo só, com a
janela e a população que ele próprio descreve na seção 3.

**C3 — o incentivo.** Ele, em `e4.1`: "*Produtos que priorizam satisfação imediata recebem sinais de
sucesso que podem favorecer a manutenção da concordância excessiva*". Eu, em `e9.1`: "*A interrupção
passa a ser otimizada contra si mesma, no formato mais leve que a lei permite, porque avisar reduz
retenção*". São o mesmo mecanismo em objetos diferentes — ele olha para a avaliação do produto, eu
para o aviso legal. O futures-wheel radicaliza em `e1_11`: "*A dependência não é emergente do
modelo: está escrita na especificação*", e em `e1_13`, "*O dinheiro empurra para o lado íntimo*". O
que os três dizem juntos: o comportamento indesejado não é falha, é o que a métrica seleciona.

**C4 — o efeito terminal.** `e4.1.1` dele: "*Avaliadores independentes e compradores institucionais
passam a exigir critérios de qualidade do apoio além de satisfação e retenção*". `e4.1.1` meu: "*A
pesquisa em interação humano-computador passa a medir qualidade do esquecimento como métrica de
segurança*". Dois mapas independentes terminam o mesmo ramo no mesmo lugar — alguém passa a medir
qualidade em vez de engajamento. O futures-wheel corrige o sujeito: a régua efetiva "*está sendo
escrita por quem precifica o risco — a AIUC-1, com 51 requisitos e 130 controles*", e `w9` descreve
a seguradora escrevendo exclusão nominal de dependência emocional antes de qualquer lei. Se o
futures-wheel estiver certo, o comprador institucional de `e4.1.1` existe e não é uma instituição de
ensino: é uma subscritora de seguro.

**C5 — dois efeitos fracos que se encontram.** `e3.1.1` dele: "*Serviços de acolhimento passam a
incluir o histórico de aconselhamento por IA entre as informações relevantes para compreender a
busca tardia de ajuda*". `e9.2.1` meu: "*As linhas de apoio humanas recebem volume vindo de
encaminhamento automático e passam a negociar contrato com as plataformas*". A seção 7 dele declara
que não achou precedente para o ritmo; a minha seção 8, item 7, diz que `e9.2.1` "*é plausível e
quase não tem base*" e convida a derrubá-lo primeiro. **Dois efeitos que os próprios autores
marcaram como os mais frágeis dos seus mapas caíram no mesmo ponto.** Isso não os fortalece. O
futures-wheel é o único que traz número: em `e1_27`, no único ensaio da categoria com efeito medido,
"*a equipe humana interveio 28 vezes em 106 pessoas em quatro semanas — 15 por ideação suicida*". O
plantão humano já é custo estrutural; a pergunta dele e a minha são sobre para onde esse custo vai.

**C6 — a mesma premissa, dois destinos.** Ele, em `e1`: "*Parte dos usuários atribui às
interpretações do companheiro uma confiabilidade baseada no histórico compartilhado*". Eu, em `e3`:
"*O custo de saída afetivo substitui o custo de saída técnico como principal trava de mercado em
produtos de relação*". A premissa é uma só: o valor está no estado acumulado, não no modelo. O
futures-wheel dá a formulação mais seca em `e1_44` — "*A identidade do companheiro está na memória,
não no corpo*" — e acrescenta duas medidas que nenhum dos outros dois tem: `e1_22`, 10,2% da
comunidade estudada desenvolveu a relação **sem intenção**, a partir de uso produtivo; e `e1_23`,
"*Três semanas é o prazo medido de conversão*". A segunda tem efeito direto sobre o prazo 2028 do
`e1` dele: se a conversão leva três semanas, o efeito não está em 2028, está no presente.

---

### 1b. O que só o futures-wheel viu

Cinco achados que não estão nem no mapa dele nem no meu, e que tocam diretamente o recorte
brasileiro que ele escolheu.

1. **`e1_21` — "O companheiro afetivo majoritário não é um app de companhia: ele mora dentro da
   ferramenta de trabalho."** 36,7% das relações analisadas rodam em ChatGPT, contra 2,6% no
   Character.AI e 1,6% no Replika. Se isso estiver certo, o sujeito da raiz dele muda: a delegação
   não acontece num produto de companhia, acontece no assistente genérico que ganhou memória. O meu
   `e12` chega perto ("*a categoria jurídica de companheiro mostra-se instável porque o assistente
   genérico faz companhia sem se declarar companhia*"), mas sem o número.
2. **`e1_28` — em população não clínica, 39 ensaios randomizados (n=7.401) dão g=0,07,
   indistinguível de zero.** É o contrapeso mais duro que existe para a cadeia `e3` → `e3.1` dele:
   se o efeito do cuidado delegado é nulo no público que de fato usa companheiro, tanto o dano
   quanto o benefício ficam menores do que a roda supõe.
3. **`e1_34` e `e1_35` — o Brasil.** 70% dos entrevistados brasileiros declararam usar IA
   generativa para lidar com sofrimento mental, e a demanda brasileira "*é real e é paga — e não vai
   para produto de companhia*". Junto com `e1_33` ("*No Brasil o vetor da substituição é o preço*":
   39% declaram o custo como barreira, R$ 322,28 na referência do CFP, fila de até 943 dias no DF),
   isso dá ao recorte brasileiro dele a base numérica que o documento diz não ter feito.
4. **`e1_39`, `e1_41`, `e1_43` — o fim do companheiro.** O encerramento já é evento datado, e a
   causa mais comum não é falência: é atualização, aquisição de talento e a própria lei. E "*não
   existe, em nenhuma jurisdição, direito de exportar o companheiro*". Nenhum dos dois mapas tem
   efeito sobre a descontinuidade; o meu tem a raiz inteira (raiz 1), mas ele não.
5. **`e1_49` — "A rota onde nem o dever nem o contador chegam: a série pública de uso cai
   exatamente quando o fenômeno cresce."** É o efeito que mais ameaça a verificabilidade de
   qualquer mapa deste tema, inclusive os três. Se ele for verdadeiro, o sinal fraco que o aluno
   propõe monitorar no Brasil (relatos recorrentes com registro verificável) fica mais difícil de
   observar com o tempo, e não mais fácil.

---

## 2. Só no mapa do aluno

Seis efeitos sem par no meu mapa, um a um, pelos quatro testes do §3 da skill.

### `e4` (1ª ordem) — "Usuários avaliam positivamente respostas que os tranquilizam mesmo quando essas respostas investigam pouco o contexto" · `sinal: medio` · `prazo: 2028` · `confianca: media`

- **Mecanismo:** presente e ancorado. As fontes [1] e [2] sustentam a avaliação favorável e o fato
  de que sinal de preferência não detectou o problema.
- **Especificidade:** falha no teste literal. Troque a raiz "delegação continuada ao companheiro
  persistente" por "assistente genérico sem memória" e a frase continua valendo integralmente —
  logo, ela não deriva desta raiz.
- **Prazo:** 2028 sem classe de referência, e o fenômeno já está medido em 2025 com n=1.604. O prazo
  aponta para trás.
- **Confiança:** média é defensável, talvez baixa demais para um achado já medido.
- **Motivo:** a triagem 12.2 recusa a concordância excessiva como raiz por ser "*comportamento já
  documentado*", e a mesma frase reentra como efeito de 1ª ordem. Pelo critério do próprio documento,
  isto é âncora da seção 3, não consequência da roda.

### `e3` (1ª ordem) — "Parte dos usuários usa o acolhimento do companheiro como principal critério para considerar suas necessidades de apoio atendidas" · `sinal: fraco` · `prazo: 2028` · `confianca: baixa`

- **Mecanismo:** ausente. A frase afirma a troca de critério, mas não diz por que o critério migra
  de "o problema andou" para "me senti acolhido". A regra 2 do §3 exige `porque <efeito pai> faz
  <mecanismo>`, e a prosa não o fornece.
- **Especificidade:** passa. "Principal critério" é uma afirmação forte e própria deste objeto.
- **Prazo:** 2028 sem classe de referência.
- **Confiança:** `fraco` + `baixa` é o par mais bem calibrado da roda dele — é o único efeito de 1ª
  ordem que assume ser inferência.
- **Motivo:** é o efeito mais original do mapa e o que está mais perto de uma contribuição própria;
  o que falta é uma linha de mecanismo e um sinal observável que o tire da inferência.

### `e1.1` (2ª ordem) — "Decisões sobre conflitos cotidianos passam a se apoiar em leituras que podem omitir contexto e intenções de outras pessoas" · `sinal: medio` · `prazo: 2029` · `confianca: media`

- **Mecanismo:** presente e herdado de `e1` (a autoridade conferida pelo histórico).
- **Especificidade:** falha pelo modal. A regra 1 do §3 pede frase **afirmativa**; "podem omitir"
  não é falseável — qualquer desfecho observado a confirma, inclusive a ausência do efeito.
- **Prazo:** 2029 sem classe de referência.
- **Confiança:** média em 2ª ordem, coerente com a distribuição.
- **Motivo:** o hedge protege o efeito do teste. "Passam a omitir" seria mais arriscado e por isso
  mais útil: daria à turma algo que o experimento dele consegue derrubar.

### `e3.1` (2ª ordem) — "Alguns desses usuários adiam buscar outras perspectivas ou ajuda profissional por acreditar que já recebem o apoio necessário" · `sinal: fraco` · `prazo: 2030` · `confianca: baixa`

- **Mecanismo:** presente.
- **Especificidade:** falha no teste da causa solta, e o documento diz isso de si mesmo: "*Barreiras
  de acesso a serviços também podem explicar adiamentos na busca de ajuda, independentemente da
  IA*". Com R$ 322,28 por consulta e fila medida em centenas de dias (futures-wheel, `e1_33` e a Nota Brasil), o
  adiamento tem causa suficiente sem companheiro nenhum.
- **Prazo:** 2030 sem classe de referência.
- **Confiança:** baixa, o que é a resposta certa diante de uma causa concorrente dessa força.
- **Motivo:** sobrevive pelo mesmo motivo que o meu `e9.2.1` sobreviveu — pode haver um canal
  próprio —, mas o canal precisa ser nomeado para que o efeito seja distinguível do adiamento
  ordinário.

### `e2.1.1` (3ª ordem) — "A repetição de conflitos não reparados pode enfraquecer redes de apoio e ampliar o afastamento social em parte desses usuários" · `sinal: fraco` · `prazo: 2031` · `confianca: baixa`

- **Mecanismo:** presente em cadeia (`e2` → `e2.1` → `e2.1.1`).
- **Especificidade:** fraca. "Enfraquecer redes de apoio e ampliar o afastamento social" serve a
  qualquer causa de conflito não reparado; e há dois hedges empilhados ("pode", "em parte desses").
- **Prazo:** 2031, dentro do horizonte.
- **Confiança:** baixa, calibrada.
- **Motivo:** a seção 8 registra que este efeito já foi rebaixado uma vez, por generalizar
  isolamento para uma geração inteira — o registro está lá, o que é mais do que a maioria dos mapas
  faz. O que falta agora não é cautela adicional; é o sinal observável que diria se ele está
  crescendo.

### `e1.1.1` (3ª ordem) — "Instituições de ensino e grupos de pesquisa passam a demandar avaliações de companheiros com ambiguidades e expressões do contexto brasileiro" · `sinal: fraco` · `prazo: 2031` · `confianca: baixa`

- **Mecanismo:** ausente. Não se diz por que a instituição demanda, quem constrói a avaliação nem
  com que orçamento.
- **Especificidade:** falha. É a família de efeito que o §3 proíbe sem nome próprio —
  "*cursos/formação reorganizam o currículo*". Sem o nome da instituição e do instrumento, a frase
  serve a qualquer um dos 19 temas da disciplina.
- **Prazo:** 2031 sem classe de referência.
- **Confiança:** baixa.
- **Motivo:** apliquei a mesma régua ao meu mapa e removi um efeito irmão — "*escolas e cursos de
  design incorporam ética do vínculo ao currículo*", que era o meu `e1.3` — por falhar no teste da
  causa solta. Pela mesma régua, este não passa. A saída existe e é barata: nomear um instrumento
  brasileiro de avaliação de ambiguidade (um conjunto de casos em português, com gabarito) transforma
  a frase genérica num efeito com dono.

---

## 3. Só no mapa do professor

Quarenta e seis efeitos meus não têm par no mapa dele. A maioria é **recorte**, e recorte
defensável: meu público é quem projeta mídia e interação, o dele é a Geração Z brasileira usuária;
meu recorte é global, o dele é o Brasil. Trato individualmente os que considero **buraco** — isto é,
aqueles que mudariam a roda dele dentro do recorte que ele mesmo declarou — e listo os demais.

### Buracos

Os `id` desta seção são do **meu** mapa; ele também tem um `e1.1` e um `e1.1.1`, que são outros
efeitos e estão na seção 2.

| id | Frase | Por que é buraco no recorte dele |
|---|---|---|
| `e12` | "A categoria jurídica de companheiro mostra-se instável porque o assistente genérico faz companhia sem se declarar companhia" | É o maior. Com `e1_21` do futures-wheel (36,7% das relações em ChatGPT), a delegação que ele investiga pode não estar acontecendo num companheiro, e sim num assistente de trabalho com memória. Isso não derruba a roda dele — troca o sujeito de todos os doze efeitos. |
| `e2.1` | "A memória vira objeto de interface, com tela própria para ler, corrigir e apagar o que o companheiro guardou" | Ele levanta o contra-mecanismo na seção 7 ("*Memória pode melhorar o contexto*: um companheiro persistente pode corrigir uma interpretação ao confrontá-la com relatos anteriores") e não o põe na roda. É o efeito que faria `e1.1` ter um freio. |
| `e9` | "O aviso de que não se fala com humano deixa de ser rodapé e vira elemento de interface com hora marcada" | O mapa dele não tem nenhum efeito regulatório, e o público "Geração Z" inclui hoje adolescentes de 14 anos — a seção 2 dele diz que adolescentes e adultos jovens "*não são tratados como grupos equivalentes*", mas a roda não os distingue. No Brasil a regra chega pelo ECA Digital, não por lei de IA. |
| `e4.1` | "O esquecimento programado vira recurso anunciado, invertendo a promessa central do produto" | É a retroação que falta. Toda a roda dele aponta para a mesma direção — o vínculo agrava o problema — e nenhum efeito freia a raiz. A skill pede ao menos um efeito de retroação por raiz. |
| `e11` | "O prompt de sistema e o log de conversa viram prova pericial, e o design de personagem passa a ser examinado como decisão de engenharia" | Daria ao experimento dele uma segunda pergunta de graça: o registro que ele já planeja guardar é exatamente a matéria que vira prova. |
| `e1`, `e2` | Raiz 1: continuidade vendida como produto e formato de exportação do companheiro (o terceiro efeito dessa raiz, `e3`, já apareceu em C6) | Ele trata a memória só como fonte de autoridade, nunca como ativo disputado. `e1_43` do futures-wheel ("*não existe, em nenhuma jurisdição, direito de exportar o companheiro*") mostra que o lado do ativo tem instrumento datado, e o lado da autoridade não tem nenhum. |
| `e10.2` | "A verificação de idade cria o par de dados mais sensível do setor, rosto ou documento ligado a conversa íntima" | Dentro do recorte dele, é o efeito que mais rápido vira notícia no Brasil. |

### Recorte, não buraco

- **Corpo e brinquedo** (`e13`, `e13.1`, `e13.1.1`, `e13.2`, `e13.2.1`, `e14`, `e14.1`, `e14.1.1`,
  `e15`, `e15.1`): o documento dele declara texto e conversa como objeto, e exclui NPC e brinquedo.
  Escolha, não omissão.
- **Custódia local** (`e5`, `e5.1`, `e5.1.1`, `e5.2`, `e5.2.1`, `e6`, `e6.1`, `e6.1.1`, `e7`,
  `e7.1`, `e7.1.1`, `e8`, `e8.1`): ele cita LLMs offline-first em `tecnologias_citadas` e escreve
  que "*executar no aparelho não comprova qualidade do apoio*" e que não é requisito causal. O
  futures-wheel dá razão a ele por outro caminho (R3: a capacidade existe, o uso "*não existe em
  medida pública nenhuma*", e dos 13 projetos citados pelo enunciado quatro existem e somam três
  estrelas). **É a decisão de recorte mais bem fundamentada do documento dele.**
- **Mercado e conformidade** (`e1.1`, `e1.1.1`, `e1.2`, `e1.2.1`, `e2.1.1`, `e3.1`, `e3.1.1`,
  `e9.1.1`, `e9.2`, `e10`, `e10.1`, `e10.1.1`, `e11.1`, `e11.1.1`, `e12.1`): são efeitos dirigidos a
  quem projeta e a quem regula, não a quem usa. Fora do público dele por construção.

---

## 4. As raízes

Ele tem **uma** raiz. A skill pede duas a quatro ("*menos que duas não dá roda*"), e o
`verificar.py` confirma o número: `raízes: 1 (frontmatter diz 1)`. As cinco candidatas recusadas
estão na tabela 12.2 — FAQ e mascote roteirizado, meditação e Tamagotchi, chatbot mais rápido,
concordância excessiva, memória ou execução local isoladamente.

### Raiz única — "A primeira interpretação das dificuldades pessoais passa a ser delegada ao companheiro digital persistente"

| Pergunta do §2 | Resposta no documento | Avaliação |
|---|---|---|
| **O que rompe?** | "*A consulta pontual a uma ferramenta transforma-se em delegação continuada de interpretação pessoal*" — muda quem ocupa o papel e como se estabelece a autoridade. | **Passa.** Não é "faz o mesmo, melhor ou mais barato"; o próprio texto exclui explicitamente essa leitura. |
| **Por que agora, e não há cinco anos?** | Trabalhos de 2025 sobre uso afetivo e concordância, somados a memória e persistência. E a admissão: "*Esta execução não reuniu comparação sistemática com 2021; portanto, não demonstra que a combinação fosse impossível antes.*" | **Falha declarada.** É a única das quatro perguntas sem resposta, e ele diz isso. A resposta existia e estava a uma busca: a evidência de dano por descontinuidade só passou a existir depois de dois eventos de 2023 (Replika em fevereiro, Soulmate em setembro); antes não havia estado acumulado cuja perda fosse mensurável. |
| **Onde está na difusão?** | Não respondido na escala da skill (`laboratório` → `demo pública` → `produto de nicho` → `adoção precoce` → `maioria`). | **Ausente.** É o item que decide se a candidata é raiz ou contexto, e ele não aparece. Pelos números disponíveis a resposta é ambígua e interessante: 72% dos adolescentes americanos já usaram companheiro (meu mapa), mas 4% dos adultos americanos usam chatbot para companhia e o mercado mundial de apps de companhia foi de US$ 120 milhões em 2025 (futures-wheel, frente R1b). Vínculo real, profundo e minoritário. |
| **O que ainda falta?** | Lista concreta: uso sustentado, compreensão contextual em português brasileiro, memória que não reforce erro, e evidência de delegação de julgamento. | **Passa, e bem.** É a melhor das quatro respostas; a lista não tem item impossível, o que a mantém como raiz e não como wildcard. |

**Veredito: raiz legítima, subespecificada, e sozinha.** Não é maduro disfarçado — a delegação
continuada de interpretação não é coisa que se faça com produto de massa comum, e a triagem 12.2
recusou corretamente as candidatas que eram. O problema não é a qualidade da raiz, é a aritmética: a
própria seção 7 dele reconhece que, se a raiz falhar, "*enfraquecem especialmente e1 e e3*" e os
resultados de `e2` e `e4` "*não sustentariam por si só este mapa*". Isso é o teste 4 do §6 aplicado
com honestidade — e o resultado, num mapa de raiz única, é que **todo o mapa cai junto**. No meu, as
quatro raízes caem separadamente e nenhuma derruba mais da metade.

Duas raízes que estavam ao alcance do recorte dele e não foram levantadas: a **descontinuidade** (o
que acontece quando o companheiro que interpreta a vida de alguém é desligado, atualizado ou
comprado) e a **instabilidade do sujeito** (a delegação acontecendo dentro do assistente genérico,
não num produto de companhia). Qualquer uma das duas daria ao mapa a segunda perna que a skill pede.

---

## 5. A seção 7 dele contra o §6 meu

**O que ele derrubou e eu não tinha.** Quatro coisas, e três delas melhoram o meu mapa:

1. **A separação entre concordância excessiva e incompreensão de contexto.** Ele escreve na seção 8:
   "*uma resposta pode discordar e ainda assim interpretar mal uma situação*". **Meu mapa não faz
   essa distinção**, e deveria: o meu `e4` usa o psychosis-bench (que mede confirmação de delírio,
   isto é, concordância) para justificar um efeito sobre limitação de memória em geral. São duas
   falhas com mecanismos diferentes, e eu tratei como uma. É o ponto em que o mapa dele é mais
   preciso que o meu.
2. **A recusa de "ausência de sentimentos humanos implica apoio inadequado"** (12.3). Nunca entrou
   no meu mapa, mas é a recusa que mais protege o dele de virar tese moral sobre máquinas.
3. **A inversão causal:** "*Pessoas com poucos recursos de apoio podem buscar mais a IA*". Meu mapa
   não tem essa objeção em lugar nenhum, e ela ataca diretamente o meu ramo de raiz 1 pelo mesmo
   flanco que o meu pré-mortem 3 ataca (viés de sobrevivência nas populações de Replika e Soulmate).
4. **O reconhecimento de que a melhor evidência disponível não cobre o Brasil.** Idêntico ao limite
   que eu declaro, e ele é mais consistente do que eu em aplicá-lo: eu cito um número brasileiro de
   fonte secundária (SBT News citando Sentio), ele prefere não citar nenhum.

**O que eu derrubei e ele manteve.** Três, pela mesma régua que apliquei a mim:

1. **`e1.1.1` (instituições de ensino demandam avaliações)** — removi o irmão dele do meu mapa
   (`e1.3`, "*escolas e cursos de design incorporam ética do vínculo ao currículo*") por falhar no
   teste da causa solta e por ser efeito genérico proibido pelo §3. Ele manteve.
2. **`e3.1.1` (serviços de acolhimento incluem o histórico de IA)** — é da família do meu
   "*planos de saúde passam a reembolsar companheiro digital*" (era `e14.2`), que removi por não ter
   mecanismo de decisão. Ele identificou a mesma fragilidade e escolheu manter com confiança baixa,
   o que é uma escolha defensável e explicitada — mas a skill pede que a alternativa apareça no
   registro de alterações, com o valor antes e depois.
3. **`e4` como efeito de 1ª ordem** — pela regra do §2, o que já está medido em 2025 é contexto da
   seção 3, não consequência da roda. Eu recusei "*chatbot conversacional na nuvem como confidente*"
   por esse motivo e o joguei para a âncora.

**A diferença de método, que é o achado desta seção.** A seção 7 dele é boa como argumentação e
incompleta como procedimento: ela discute cinco objeções e nomeia dois efeitos em risco (`e2.1` e
`e3.1.1`), mas **não produz o registro de alterações antes → depois exigido pelo §6**, com `id`,
valor anterior e valor posterior. A tabela 12.3 registra hipóteses reformuladas, não efeitos
alterados — e nenhum dos doze efeitos do bloco YAML foi removido ou rebaixado como resultado da
bateria. Pela cota mínima da skill ("*pelo menos um efeito rebaixado ou removido por raiz*"), a
bateria não fechou. A diferença não é de rigor intelectual — o texto dele é mais autocrítico que a
média — é de auditabilidade: ninguém consegue reconstruir, lendo o documento, qual valor mudou.

**Um item de formato, do verificador.** A saída de `verificar.py` não está colada na seção 12, como
o §9 exige ("*cole a saída inteira na seção 12 — os números, não a palavra 'passou'*"). Rodada por
mim, ela fecha limpa e vale a pena registrar aqui, porque desmente qualquer suspeita de descuido:
`frontmatter 18/18`, `títulos literais 12/12`, contagens batendo com o frontmatter (1 raiz, 4/4/4
efeitos), **zero prazos fora do horizonte**, e calibração caindo corretamente com a ordem —
1ª ordem: 0 alta / 3 média / 1 baixa; 2ª: 0 / 3 / 1; 3ª: 0 / 0 / 4. `RESULTADO: ok`. A calibração
dele é, em números, melhor que a minha: eu tenho duas confianças altas na 1ª ordem e ele nenhuma.

---

## 6. Cinco perguntas para a aula

1. **`e1.1.1`** — Se a delegação descrita na raiz simplesmente não acontecer, este efeito acontece
   do mesmo jeito? E, se acontecer, quem encomenda e quem paga a avaliação de ambiguidade em
   português brasileiro?
2. **`e4.1` × `e2.1`** — Se o produto é selecionado pela satisfação imediata (`e4.1`), e a
   satisfação vem da concordância (`e2.1`), o que na roda freia esse ciclo? Que efeito faltaria
   escrever para que a roda tivesse um freio, e de quem seria o incentivo?
3. **`e3.1`** — Com consulta a R$ 322 e fila de centenas de dias, que observação distinguiria um
   adiamento causado pelo companheiro de um adiamento causado pelo preço? Existe alguma medida que a
   turma conseguiria coletar?
4. **`e1`** — Se a maior parte do vínculo com memória não estiver num app de companhia e sim no
   assistente que a pessoa usa para trabalhar e estudar, o `e1` muda de sujeito? A roda continua
   valendo com esse outro sujeito, ou é outra roda?
5. **`e4.1.1`** — Quem é, concretamente, o "avaliador independente" e o "comprador institucional"
   no Brasil de 2031? E qual seria a **primeira** métrica de qualidade do apoio que valeria a pena
   entregar a ele, se fosse preciso escolher uma só?

---

## 7. O que este confronto não cobre

- **O meu mapa é de 11/09 e o dele é de 22/09.** Onze dias de notícia separam os dois, e nada do que
  aconteceu nesse intervalo foi verificado aqui. A âncora do futures-wheel é de 13/09.
- **Não abri fonte nova nesta rodada.** Os números do futures-wheel que cito são lidos da síntese
  dele, não das fontes primárias; os três artigos citados pelo aluno não foram reabertos para este
  confronto. Onde eu digo "o futures-wheel mede X", leia "a síntese do futures-wheel afirma X".
- **A convergência entre três mapas gerados por modelo de linguagem vale menos do que convergência
  entre três pessoas.** Os três podem compartilhar o mesmo viés de material de treinamento, e no
  caso de C2 já foi possível mostrar que a convergência era a mesma fonte lida duas vezes. Onde a
  tabela da seção 1 diz "tripla", leia "três derivações, não necessariamente três evidências".
- **Onde eu posso estar errado.** O meu `e9.2.1` é, por confissão da minha própria seção 8, o efeito
  mais frágil do meu mapa, e eu o uso na seção 1 para dar par ao `e3.1.1` dele. Dois efeitos fracos
  concordando não somam um forte. O meu `e4` conflaciona concordância e incompreensão de contexto,
  distinção que o mapa dele faz e o meu não — e nesse ponto a régua correta é a dele. E a minha raiz
  2 (custódia local) está superdimensionada por interesse declarado do autor, o que o futures-wheel
  confirma por outro caminho ao não achar uso medido em lugar nenhum.
- **`efeitos_so_do_professor: 46` é um número inflado por recorte, não uma medida de lacuna.** Dos
  46, trinta e oito estão listados na seção 3 como escolha de recorte defensável. O número que
  importa é o de buracos, e ele é pequeno.
