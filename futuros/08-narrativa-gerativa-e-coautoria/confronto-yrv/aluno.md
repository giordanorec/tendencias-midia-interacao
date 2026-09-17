---
tema: Narrativa gerativa e coautoria
slug: narrativa-gerativa-e-coautoria
autor_login: yrv
zona_de_interesse: Digital Storytelling / Virtual Worlds / Creative Interactivity
data: 2026-09-16
horizonte: 2031
publico: Estúdios e consumidores de ficção instantânea
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 10
efeitos_ordem_3: 10
tecnologias_citadas: [mangobox.ai, Ren'Py, Twine, Inform, Monogatari, NovelAI, AI Dungeon, Amazon KDP, Steam, AO3, Wattpad, Gemini 3.1 Flash, Claude, ConStory-Bench, ConStory-Checker, NCP-Bench]
fontes: 10
confianca: media
experimento: Gerador de história conformante a cânone com laço de veto humano — a turma gera e corrige, e o artefato registra cada correção, o tipo de violação e se ela persiste
skill_usada: futurizacao-yrv
publico_ok: false
---

## 1. Resumo

O custo de contar caiu 99,7% em três anos e o custo de manter verdadeiro não caiu junto. Este
mapa sustenta que três rupturas governam narrativa gerativa e coautoria até 2031: a geração do
artefato narrativo inteiro a partir de uma intenção curta, que já triplicou o lançamento mensal
de livros; a **conformidade a um cânone virando o recurso escasso**, porque quando gerar é
grátis o gargalo migra para manter coerente; e a colisão entre atribuição de autoria e digestão
de franquias, onde a declaração de origem é auto-reportada e a detecção é inconfiável o
bastante para virar instrumento de acusação entre pares. O falsificador pedido — custo
proibitivo de IA — **não se sustenta onde se esperava e se sustenta noutro lugar**: o preço por
token despencou, mas 71% dos americanos se opõem a um data center perto de casa, mais do que se
opõem a uma usina nuclear, e há mais de 200 moratórias locais ativas. A restrição não é o preço
do token: é onde a máquina pode ser construída.

## 2. O tema

O tema é a **geração sob medida de narrativa conformante a um cânone** — do livro coerente a
partir de um prompt único até a ficção interativa de construção acelerada. Inclui variação de
temas, permutação de cenários, digestão de franquias e fan-fiction interativa instantânea. Não
pressupõe regras de jogo: o artefato vai de narrativa pura a jogável.

Fora do recorte, por decisão da entrevista: **sistema de pergunta-e-resposta e conversa com IA**;
**vídeo e imagem como foco** (cabem como adição, nunca como objeto); e **agente autônomo
divorciado da narrativa**. As três fronteiras seguem a partilha dos 19 temas da disciplina [6]. A fronteira adotada, nas palavras de quem pediu, é **a narrativa, não
a entidade** — personagem que reage às decisões do jogador dentro da história está dentro;
agente sem história está fora.

Merece mapa de futuro, e não levantamento de estado da arte, porque a camada que está se movendo
não é a técnica de geração. É a camada que decide **o que conta como obra e como autor** — e ela
se moveu de forma documentada três vezes em dois anos: regime de direitos, regime de distribuição
e regime de policiamento comunitário.

## 3. Onde isso está hoje

### O colapso de preço, medido

Consultar um modelo no nível do GPT-3.5 custava US$ 20 por milhão de tokens em novembro de 2022
e US$ 0,07 em outubro de 2024. O GPT-4 estreou a US$ 30 por milhão de tokens de entrada em março
de 2023; em abril de 2026, o Gemini 3.1 Flash custa US$ 0,10 de entrada e US$ 0,40 de saída —
queda de 99,7% em três anos [a — não lido]. A desaceleração é esperada: de
10× ao ano até 2025 para algo entre 3× e 5× até 2027.

### O que a queda de preço já produziu, medido por terceiro independente

Reimers & Waldfogel, **NBER Working Paper 34777 (maio de 2026)**, mediram o mercado de livros
depois da difusão dos LLMs [2]:

- Lançamentos mensais de e-books na Amazon passaram de **cerca de 100.000 no período 2020–22
  para mais de 300.000 no fim de 2025** — quase o triplo.
- **A qualidade média caiu**, e caiu mais nas categorias que cresceram mais rápido.
- A qualidade **melhorou para livros fora do top 100** por categoria-mês, e **não houve melhora
  estatisticamente significativa no top 100**.
- Excedente do consumidor: **−13%** no cenário de mesmo volume com qualidade menor, **+5%** com
  o aumento real de produção (3,6 milhões → 6,7 milhões de livros), **+10%** no cenário de
  triplicação.

### O regime de distribuição já se mexeu

A Amazon impôs, no fim de 2024, um teto de **três envios por dia** no KDP — antes disso algumas
contas subiam cinquenta ou mais títulos por dia — e exige declaração de conteúdo **gerado** por
IA, mas não de conteúdo **assistido**. A declaração é de uso interno: não aparece na página do
produto e a Amazon afirma que não afeta royalties nem posição de busca [b — não lido].
Na Steam, a declaração é obrigatória desde o início de 2024, e um censo de 53.597 lançamentos
mede a curva: 10,9% em 2024, 19,9% em 2025, 30,8% em 2026 até meados do ano [3].

### O regime de direitos já se mexeu

Em **29 de janeiro de 2025**, o US Copyright Office publicou a Parte 2 do relatório sobre IA:
a saída só é protegida "where a human author has determined sufficient expressive elements"; a
proteção não alcança "the mere provision of prompts"; e usar IA para *assistir* "does not bar
copyrightability" [4].

### O policiamento migrou para a comunidade

O AO3 **não tem política anti-IA**; a OTW esclareceu em 2023 que usar IA não desqualifica uma
obra desde que o criador humano mantenha controle autoral significativo. Em abril de 2026, a obra
*Rose-Colored Glasses* foi publicada no AO3 com a autora declarando que a maior parte fora
escrita pelo Claude. Em **junho de 2026**, um grupo anônimo distribuiu um documento de 25 páginas
nomeando cerca de **30 autoras de fan-fiction** como usuárias de IA, no fandom Heated Rivalry. A
detecção usada é reconhecidamente limitada, fácil de evadir por edição ou reformatação, e produz
acusação pública sobre evidência ambígua [c — não lido].

Do lado dos dados: conjuntos derivados do AO3 circulam abertamente no Hugging Face, incluindo uma
coleção multilíngue de cerca de 12,6 milhões de fanworks; o conjunto `fiction-1b` declara que
22,2% do material vem do AO3 [c].

### A coautoria já entrou em instituição de prestígio

Rie Qudan (九段理江) venceu o 170º Prêmio Akutagawa em **17 de janeiro de 2024** com *Tōkyō-to
Dōjō-tō*, e declarou uso de ChatGPT em cerca de 5% do livro — esclarecendo depois que a IA escreveu
apenas **as falas da IA dentro do romance** [8]. O precedente importa menos pelo número do que pelo
que não aconteceu em seguida: o prêmio não foi retirado.

### O substrato maduro

Ren'Py, Twine, Inform e Monogatari são a opção padrão para ficção interativa há anos, com
milhares de obras publicadas. São o chão deste tema, não a tendência — o que resta para eles é
ficar mais barato e mais difundido.

## 4. As disrupções-raiz

### 4.1 · Geração do artefato narrativo inteiro a partir de uma intenção curta

**O que rompe.** A produção do primeiro rascunho coerente como trabalho. O que deixa de ter razão
de existir é a etapa de **redação de primeira versão** e de permutação de cenário — o escritor
júnior de contrato, a montagem de variante, o protótipo narrativo. Não é "fica mais barato": a
etapa sai do caminho crítico.

**Por que agora e não há cinco anos.** O lançamento mensal de e-books triplicou entre 2022 e o
fim de 2025 [2], o que é um sinal de produção, não de intenção; e o preço por token caiu 99,7%
em três anos [a]. Há cinco anos nenhuma das duas coisas era verdade.

**O que ainda falta.** Conformidade. Nada neste pipeline garante que o gerado seja coerente com
um corpo de regras estabelecido, e é exatamente isso que separa um artefato jogável de uma obra.

### 4.2 · A conformidade a um cânone vira o recurso escasso

**Classificação: EMERGENTE — e este rótulo foi revertido no meio do trabalho.** Esta raiz esteve
classificada como *experimental*, pelo tier que a skill de `bvga` acrescenta (protótipos e papers,
sem solução confiável para uso amplo), com a justificativa de que não havia ferramenta alguma que
medisse conformidade. **Essa justificativa era falsa, e o erro era meu** — eu não havia procurado.
Existem pelo menos dois benchmarks independentes e publicados sobre exatamente isto (seção 8 e
fontes [9] e [10]), o que dá à raiz dois artefatos verificáveis e independentes e a coloca como
**emergente**, não experimental. O que continua faltando não é a métrica: é adoção e é a classe
que nenhum benchmark cobre — ver abaixo.

**O que rompe.** O pressuposto de que coerência é subproduto da autoria. Enquanto escrever era
caro, quem escrevia carregava o cânone na cabeça e a coerência vinha de graça junto com o
trabalho. Quando gerar fica grátis, a coerência deixa de ser subproduto e vira **função separável,
contratável e mensurável** — e o gargalo de produção migra de escrever para verificar.

**Por que agora.** Três sinais datados, dois deles diretos. A medição de mercado mostra a
assinatura do gargalo: a qualidade média caiu **mais nas categorias que cresceram mais rápido**
[2]. E, desde 2026, o problema tem instrumento: o **ConStory-Bench** (Microsoft e SUTD, março de
2026) define uma taxonomia de cinco categorias de erro de consistência com 19 subtipos — entre
elas **Caracterização** e **World-building** — e uma métrica normalizada, a *Consistency Error
Density*, erros por dez mil palavras [9]; e o **NCP-Bench** (agosto de 2026) faz o equivalente
para narrativa **interativa**, medindo se o narrador preserva fatos e compromissos quando o
jogador tenta subvertê-los [10]. Há cinco anos nada disso existia, nem o problema tinha nome.

**O que ainda falta.** Não é mais a métrica — é a **classe que a métrica não cobre**. Os dois
benchmarks medem *contradição*: o gerado briga com um fato já estabelecido, um compromisso, uma
regra do mundo. Nenhum dos dois avalia o que o recorte deste mapa define como o caso interessante:
**invenção no silêncio do cânone** — aquilo que o cânone não diz, que o gerador preencheu, e que
pode ou não caber ali. Contradição tem verdade de referência e por isso é automatizável; o
silêncio não tem, e é onde o julgamento do dono do cânone continua insubstituível. É essa lacuna,
e não a ausência de instrumento, que sustenta a raiz.

### 4.3 · Atribuição de autoria e digestão de franquias colidem

**O que rompe.** A zona cinzenta em que o fan-work viveu por décadas, sustentada por dois
pressupostos que a geração destrói ao mesmo tempo: que a proveniência de um texto é conhecível, e
que o derivado é distinguível do substituto. O detentor de franquia perde a capacidade de separar
homenagem de concorrência; a plataforma perde a capacidade de permanecer neutra.

**Por que agora.** Três datas: 29/01/2025, o Copyright Office exigindo aporte humano demonstrável
[4]; abril de 2026, uma obra majoritariamente gerada declarada abertamente no AO3; junho de 2026,
trinta autoras nomeadas por detecção inconfiável [c]. E os conjuntos derivados do AO3 já
circulam, com 12,6 milhões de fanworks [c].

**O que ainda falta.** Detecção de proveniência confiável. Enquanto a declaração for
auto-reportada e a detecção for evadível por reformatação, o regime inteiro repousa sobre honra —
e a falha dele recai sobre indivíduos acusados, não sobre plataformas.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: Geração do artefato narrativo inteiro a partir de uma intenção curta
    efeitos:
      - id: e1
        ordem: 1
        efeito: O primeiro rascunho coerente deixa de ser trabalho e passa a ser insumo descartável
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A produção de ficção migra de escrever para encomendar e selecionar e o não-escritor passa a produzir
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A formação em escrita se reorganiza em torno de encomenda e julgamento e não de redação
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O catálogo salta de ordem de grandeza porque quem não escreve passa a produzir e a descoberta vira o único recurso escasso do mercado
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: A plataforma de distribuição vira autoridade editorial de fato por omissão e não por decisão
                sinal: medio
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A ficção sob medida para uma única pessoa passa a ser economicamente trivial
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A obra deixa de ser objeto comum entre leitores e passa a ser instância privada
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A conversa sobre uma obra perde referente comum e a crítica perde objeto estável
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: A unidade de compra deixa de ser a obra e passa a ser o mundo com a instância gerada a cada leitura
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: A comunidade passa a discutir a semente e o cânone em vez do texto e o objeto comum volta como especificação reproduzível
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: A conformidade a um cânone vira o recurso escasso
    efeitos:
      - id: e3
        ordem: 1
        efeito: Manter o gerado coerente com um cânone vira o gargalo de produção no lugar de escrever
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: A conformidade se separa da autoria e vira função contratável
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Curador de cânone aparece como cargo nomeado com responsabilidade sobre o que entra na obra
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: O cânone passa a ter valor de ativo separado das obras que o instanciam
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Licenciar o cânone passa a valer mais do que publicar a obra
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: A correção humana não propaga entre cenas e o custo de conformidade cresce com o tamanho da obra
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A obra longa e coerente volta a ser cara e a geração se confina ao formato curto
            sinal: medio
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: O formato curto se torna o padrão da ficção gerada e o romance permanece artesanal
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: Atribuição de autoria e digestão de franquias colidem
    efeitos:
      - id: e5
        ordem: 1
        efeito: Declarar a origem do texto vira condição de publicação e a declaração é auto-reportada
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A verificação de origem falha e a detecção inconfiável vira instrumento de acusação entre pares
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A comunidade substitui a plataforma como órgão de policiamento com custo social alto e taxa de erro alta
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: O regime de direitos se divide entre obra com aporte humano demonstrável e obra sem
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Forma-se um domínio público de fato com tudo o que não consegue provar autoria humana
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: A digestão de franquias torna o fan-work indistinguível do derivado comercial e força o detentor a agir
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: A tolerância histórica ao fan-work encolhe porque o detentor não consegue mais separar homenagem de substituto
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: O licenciamento explícito de cânone para geração substitui a zona cinzenta como arranjo padrão
                sinal: fraco
                prazo: 2033
                confianca: baixa
```

### O que o bloco não consegue dizer

**As raízes 1 e 2 são uma o freio da outra, e a árvore não tem notação para isso.** A raiz 1
derruba o custo de gerar; a raiz 2 diz que o custo migra para verificar. Se a verificação for
cara o bastante, ela recompõe parte do custo que a raiz 1 eliminou — retroalimentação negativa,
não soma. Quem lê os dois galhos como aditivos superestima o efeito líquido.

**Convergências, fora da árvore por regra de parada.** Dois efeitos só fazem sentido com duas
raízes e por isso não entram como nó:

- **Conformidade auditável como obrigação** exige a raiz 2 (existir medida) *e* a raiz 3 (existir
  obrigação de declarar). Sem medida, a declaração não tem o que auditar; sem obrigação, a medida
  não tem quem a exija. É o cruzamento mais consequente do mapa.
- **Cânone licenciado com garantia de conformidade** exige a raiz 2 *e* a raiz 3 — é o produto que
  resolve as duas ao mesmo tempo, e é onde estaria o dinheiro se ambas se realizarem.

**Dois sujeitos com incentivos opostos.** O público deste mapa é duplo. Onde o efeito atinge
estúdio e consumidor de forma diferente, isso está dito no texto do efeito; mas o bloco YAML não
tem campo para sujeito, e essa é uma perda real de informação na hora de processar os mapas da
turma juntos.

## 6. Sinais fracos e wildcards

**Propagação de correção.** Se corrigir uma violação de cânone numa cena impedir a mesma violação
nas seguintes, e4 inteiro morre e a raiz 2 vira problema resolvido. Quase não há sinal público
disso — é a incógnita mais barata de testar e a mais determinante do mapa.

**Cânone como ativo licenciável.** Detentores de franquia vendendo acesso estruturado ao cânone
para geração conformante, com garantia contratual. Nenhum sinal forte hoje; se aparecer, e3.2 e
e6.1.1 aceleram juntos.

**Vigilância e pressão religiosa sobre conteúdo gerado.** Apontadas pelo autor do recorte como
ameaça. Não achei sinal datado suficiente para tratar como efeito; fica aqui, registrado como
pedido não atendido por falta de fonte, não por discordância.

**Wildcard.** Uma decisão judicial reconhecendo copyright sobre obra majoritariamente gerada,
contrariando a posição de janeiro de 2025 [4]. Derrubaria e5.2, e5.2.1 e boa parte da raiz 3.

**Wildcard, o mais provável dos dois.** Uma moratória de data center em jurisdição grande o
bastante para encarecer inferência de consumo. Ver seção 7 — é o falsificador, e ele mordeu.

## 7. Contra o próprio mapa

### O falsificador pedido, e onde ele realmente morde

Foi pedido testar **custo proibitivo de IA e restrição de recursos**. O resultado é o achado mais
forte desta rodada, e ele **desloca o falsificador em vez de confirmá-lo**.

No preço por token, o falsificador **falha**: US$ 20 por milhão de tokens em novembro de 2022,
US$ 0,07 em outubro de 2024, e US$ 0,10 de entrada no Gemini 3.1 Flash em abril de 2026 — 99,7%
de queda em três anos [a]. Nada nessa série sustenta "custo proibitivo".

Na **infraestrutura física**, ele se sustenta e com números melhores do que os de preço. Pesquisa
Gallup de **2 a 18 de março de 2026**, mil adultos por telefone, margem de ±4 pontos: **71% dos
americanos se opõem à construção de um data center de IA na sua região, 48% fortemente**, contra
**53% que se opõem a uma usina nuclear** [1]. A oposição é transpartidária — 56% de democratas
fortemente contra, 39% de republicanos — e atinge todas as regiões, de 63% no Oeste a 75–76% no
Meio-Oeste e no Sul. No plano institucional: **mais de 200 moratórias locais ativas**, 13 dos
condados de Maryland, e Nova York como primeiro estado a aprovar moratória estadual pelo
Legislativo no verão de 2026 — com a governadora impondo moratória de um ano por decreto em vez
de sancionar o projeto [5].

**A consequência para o mapa:** a restrição não é o preço do token, é **onde a máquina pode ser
construída**. Isso não derruba o mapa — desloca quem ele beneficia. Geração barata por token com
substrato politicamente caro favorece quem já tem capacidade instalada, ou seja, **estúdio, não
consumidor**. O público duplo deste mapa se separa exatamente aí, e o cenário indesejável da
seção 9 é construído sobre isso.

### A posição do autor sobre "AI slop", testada em vez de aceita

Quem pediu declarou que a rejeição a conteúdo gerado é sinal fraco, porque modelos melhores a
dissolvem e "people desire consumption". A evidência **confirma metade e refuta metade**.

Confirma o consumo: o excedente do consumidor **subiu** — +5% no cenário de produção real, +10%
no de triplicação [2]. As pessoas de fato consomem, e em volume maior.

Refuta a fraqueza do sinal: a qualidade média **caiu**, e caiu mais onde o crescimento foi mais
rápido [2]; e a rejeição existe, só que não aparece como queda de demanda — aparece como
**policiamento social**, com trinta autoras nomeadas publicamente em junho de 2026 por um método
de detecção que não funciona [c]. O sinal é forte; o que é fraco é a *forma de mercado* dele.
Quem procurar rejeição na demanda não vai achar, e vai concluir erradamente que não existe.

### Qual efeito é só extrapolação linear

**e1.2** é o mais exposto, e foi reescrito por causa disso. Na primeira versão ele dizia que o
catálogo cresce mais rápido que a capacidade de leitura — o que é quase a definição do presente,
já que a passagem de 100 mil para 300 mil lançamentos mensais já aconteceu [2] e foi produzida
por **escrita assistida**, não por geração de artefato inteiro. Reescrito, o efeito afirma o que
só a raiz 1 produz: **quem não escreve passa a produzir**. Escrita assistida acelera quem já
escrevia; geração de artefato inteiro muda quem pode produzir, e é essa troca de sujeito — não o
volume — que torna a descoberta o único recurso escasso. Se um leitor discordar de que a troca de
sujeito é real, e1.2 e e1.2.1 caem juntos, e é a crítica mais justa que este mapa aceita.

### O que a prova de causa solta encontrou, e onde ela errou

Esta prova não é da minha ferramenta: é do teste de **causa solta** da skill de `meap` —
*remova a disrupção-raiz; o efeito ainda aconteceria por outro motivo?* Ela foi aplicada aos 24
efeitos e acusou dois, **e um dos dois acusados era falso positivo**.

Em **e2.1** (a obra deixa de ser objeto comum entre leitores) a prova disparou porque feeds
algorítmicos e streaming já fragmentam o consumo hoje. A acusação não se sustenta quando se olha
o mecanismo em vez da descrição: o feed fragmenta **qual** obra compartilhada cada um encontra —
todos ainda leem o mesmo livro, apenas encontram livros diferentes —, enquanto a geração sob
medida fragmenta **a obra em si**, e duas pessoas que leram "o mesmo livro" leram textos
diferentes. O objeto comum sobrevive ao feed e não sobrevive à instanciação por leitor. São
efeitos com descrição parecida e mecanismo oposto.

**A prova tem, portanto, um modo de falha nomeável:** ela compara descrições, não mecanismos, e
mata qualquer efeito que tenha um gêmeo lexical no presente. Usada sem essa ressalva, ela poda
exatamente os efeitos mais interessantes — os que se parecem com algo conhecido e funcionam por
outra via. A decisão de manter e2.1 é do autor do mapa, contra a recomendação da ferramenta, e
está registrada como tal.

### Qual efeito assume velocidade sem precedente

**e6.1** — a tolerância ao fan-work encolher até 2031. Regimes de tolerância informal são
notoriamente estáveis; o fan-work convive com detentores de franquia há mais de quarenta anos sem
resolução. Não encontrei caso comparável de erosão em cinco anos. Fica com `confianca: baixa` e
esta ressalva anexada.

### Qual disrupção pode não se concretizar

**A raiz 2 continua sendo a mais frágil, por um motivo diferente do que eu supunha.** Ela não
depende mais da inexistência de métrica — a métrica existe [9][10]. Depende de uma precondição
mais estreita: que o julgamento humano sobre **invenção no silêncio** seja transferível. Há um
dado que parece falar contra, e que **não fala tanto quanto parece**. Na validação do
ConStory-Bench, contra 1.000 erros injetados, o verificador automático recuperou 550 e os
anotadores humanos 138,5 — recall de 0,139 contra 0,550 [9]. Lido sem o protocolo, isso sugere que
humanos são ruins em achar contradição. Lido com o protocolo, sugere outra coisa: eram **dois**
escritores profissionais, pagos a US$ 1,00 por história, cobrindo 200 histórias de 8 a 10 mil
palavras em dois dias — mesmo supondo que dividiram o lote, dá cerca de dez minutos por história,
contra os trinta e poucos que só a leitura exige. Eles não leram; varreram. E os próprios autores
registram que o desenho "pode evidenciar a vantagem da automação em vez de estabelecer uma linha
de base humana". O número descreve **anotador pago varrendo texto alheio abaixo da velocidade de
leitura** — que é uma condição real e frequente, mas não é a do dono de um cânone relendo o próprio
mundo, sobre quem este estudo não diz nada. Se o julgamento no silêncio não for transferível, e3.1, e3.1.1, e3.2 e e3.2.1 caem juntos, e
o mapa vira um mapa de duas raízes com um gargalo real e sem dono. É a aposta mais frágil e mais
própria deste documento.

### Que viés entrou

**Quatro. O terceiro é estrutural, e o quarto é o único que o autor enunciou por conta própria.**
A procedência de cada um está marcada, porque ela mesma é informação: um foi confirmado pelo autor,
um foi corrigido por verificação, um foi inferido por mim e aceito depois de explicado, e um veio
de uma escolha explícita dele.

O primeiro é de recorte, **confirmado pelo autor** quando confrontado com ele ("true enough"):
quem pediu trabalha com cânone e worldbuilding, e a raiz 2 é a que mais se parece com o problema
que ele já tem. E o desdobramento é pior do que a formulação original admitia. Quando a raiz 2 foi
promovida a raiz, **todos os seus efeitos tinham `sinal: fraco`** — ela foi escolhida por afinidade
com o problema do autor, não por evidência. A evidência apareceu **depois**, quando a busca que
faltava encontrou dois benchmarks e elevou e3 e e4 a `forte` (seções 8 e 12.4). O mapa acertou,
e acertou pelo motivo errado: a ordem correta seria evidência e depois promoção, não promoção e
depois evidência. Que tenha dado certo desta vez não valida o procedimento.

O segundo é de fronteira, e ele é **menor do que este documento afirmava até agora**. A linha
adotada corta por *função* — autonomia que serve à narrativa está dentro, entidade sem história
está fora — enquanto o documento da disciplina corta por *objeto*: "o personagem que age dentro de
um mundo é o tema 7", sem qualificação. A diferença entre os dois cortes é uma classe específica:
**o personagem reativo dentro de uma história gerada**, que o professor manda para o tema 7 e que
esta fronteira mantém no 8. A classe não é hipotética — é o que os exemplos do próprio tema 7
descrevem (`opengameagent`, `Thistle Gulch`, `Eastshore`).

**Mas a latitude não foi gasta.** Nenhum dos 26 efeitos da roda depende de autonomia de
personagem: as quatro menções a "personagem" no documento estão na declaração de fronteira e na
discussão de caracterização, nenhuma na árvore. A sobreposição com o mapa do colega é portanto
**declarada e não exercida** — risco latente, não conflito real. A versão anterior desta seção
dizia "sobreposição residual" sem ter verificado se havia alguma, e afirmava mais do que os dados
do próprio documento sustentam.

O terceiro é de camada, vem da CLA, e foi **inferido por mim** — o autor não o reconheceu de
início ("não entendo isso"), e o aceitou depois de explicado sem o exemplo técnico. Fica registrado
assim, porque um viés que precisa de tradução para ser visto é justamente o tipo que passa
despercebido. Na litania: "a IA está inundando o mercado de livros". Nas
causas sistêmicas: colapso de preço de inferência e plataformas que não checam conteúdo. Na visão
de mundo: **a obra é um objeto delimitado, compartilhado entre leitores, e vale preservar**. No
mito: o autor como origem singular. Todo o alarme deste mapa — e2.1, e2.1.1, a crítica perdendo
objeto — repousa na terceira camada. Se a métrica de sucesso migrar de "obra" para "fluxo
pessoal contínuo", então esses efeitos deixam de ser perdas e viram o propósito, e metade da
inquietação deste documento evapora sem que um único fato mude.

O quarto é do autor e foi enunciado por ele, ao escolher o que quer deste campo em 2031. Entre
quatro propriedades possíveis, ele marcou três — **garantia de conformidade, runs reproduzíveis,
procedência inspecionável** — e deixou de fora a única que era econômica: autor pago por mundo e
fan-work licenciado. As três que ficaram são todas sobre **verificabilidade**; a que caiu era sobre
**remuneração**. Isso enviesa a seção 9 de forma direta: o cenário desejável descreve um mundo em
que se pode *checar* o que a máquina fez, e não um mundo em que quem escreveu é pago por isso.
É uma posição defensável e é dele — mas um mapa escrito por alguém que vive de licenciar cânone
teria um "desejável" diferente, com as mesmas evidências.

## 8. O que a máquina errou

**Um resultado acadêmico invertido pelo resumo.** O resumo de busca afirmou que, no estudo do
NBER, "os melhores livros em muitas categorias melhoraram". O texto primário diz o oposto no
ponto que importa: **não houve melhora estatisticamente significativa no top 100**; a melhora
ocorreu **fora** do top 100 [2]. É uma inversão de sinal numa conclusão específica, não um
arredondamento. **Como percebi:** fui abrir o resumo oficial para copiar a frase exata e ela
dizia outra coisa. A regra que me salvou foi banal — nunca citar do resumo de busca o que vai
virar afirmação no documento.

**Uma série temporal que não existe.** O mesmo resumo de busca trouxe excedente do consumidor
como série anual: "menos de 1% em 2023, mais de 3% em 2024, cerca de 7% em 2025". O texto
primário não apresenta série anual nenhuma — apresenta **três cenários**: −13% com mesmo volume e
qualidade menor, +5% com o aumento real de produção, +10% no cenário de triplicação [2]. Números
por cenário viraram números por ano, o que é uma reconstrução plausível e falsa. **Como percebi:**
a série era suspeitosamente bem-comportada — três anos, três valores crescentes, todos redondos.

**Um denominador trocado.** Circulou que "livros com IA passaram de metade dos lançamentos de
2025". O material primário fala em **quase metade dos autores** declarando usar IA como auxílio
[2]. Metade dos autores e metade dos lançamentos são grandezas diferentes, e a segunda é muito
mais forte que a primeira. Não usei nenhuma das duas como número no corpo.

**Uma contradição entre fontes sobre quem foi o primeiro.** Um agregador afirmou que o Maine
seria o primeiro estado a adotar moratória de data center, pausando projetos até novembro de 2027.
A reportagem especializada diz que **Nova York** foi o primeiro estado a aprovar moratória pelo
Legislativo, no verão de 2026, e **não menciona o Maine** [5]. Fiquei com a segunda, por ser
veículo editorial com pauta própria, e registro a divergência em vez de escolher em silêncio.

**Afirmei que uma literatura não existia, sem ter procurado por ela.** Este mapa sustentou,
durante quase todo o trabalho, que não havia métrica nem ferramenta para conformidade a cânone —
e essa afirmação virou a justificativa para classificar a raiz 2 como *experimental* e para
desenhar o experimento como "inventar a unidade de medida". **É falso.** Existem ao menos dois
benchmarks independentes e publicados: o ConStory-Bench, com taxonomia de cinco categorias e 19
subtipos e a métrica CED [9], e o NCP-Bench para narrativa interativa [10]. **Como percebi:** quem
pediu o recorte perguntou o que fazia um sinal ser fraco, e a resposta honesta obrigou a separar
duas coisas que eu havia colapsado — *não encontrei* e *não existe*. Eu tinha buscado sobre
direito autoral, declaração de origem, fan-fiction e data centers, e **nunca busquei sobre
consistência narrativa**. O buraco estava na minha pesquisa, não no mundo. É o erro mais caro
deste documento, porque ausência de evidência é indistinguível de evidência de ausência para quem
lê — e porque ele não deixa rastro: nada no texto denunciava que aquela busca não tinha sido feita.

**Usei um número sem ler o protocolo que o produziu — e generalizei demais.** Com os benchmarks em
mãos, escrevi que "humanos são ruins em achar contradição", apoiado no 0,139 de recall dos
anotadores do ConStory-Bench contra 0,550 da máquina [9]. O número está certo; a leitura estava
errada. O protocolo é **dois** escritores profissionais, a US$ 1,00 por história, cobrindo 200
histórias de 8 a 10 mil palavras em dois dias — na leitura mais generosa, uns dez minutos por
história, contra os trinta e poucos que a leitura sozinha consome. Eles varreram, não leram. E os
próprios autores advertem que o desenho "pode evidenciar a vantagem da automação em vez de
estabelecer uma linha de base humana para erros que ocorrem naturalmente". **Como percebi:** quem
pediu o recorte perguntou se os anotadores eram voluntários ou autores dedicados, de boa memória,
que conhecessem o próprio material — e a pergunta expôs que eu não tinha olhado. A correção mudou
a seção 10: o dado deixou de ser "humanos não servem para isso" e passou a ser uma **previsão
específica sobre o braço de estranhos**, mais um controle novo que o braço do autor agora exige.
Erro de segunda ordem, e o mais insidioso desta rodada: eu havia acabado de registrar, três
parágrafos acima, que tinha afirmado ausência sem procurar — e caí em seguida em citar um número
sem checar como ele foi obtido.

**Um número atribuído a uma empresa sem a empresa.** Um blog afirmou que "dados da própria Amazon
mostram que mais de 40% dos novos títulos do KDP no primeiro trimestre de 2026 envolveram IA". Não
encontrei essa afirmação em nenhum material da Amazon. Ficou fora do documento. Atribuir a uma
empresa um dado que só existe num blog é a forma mais eficiente de fabricar autoridade.

## 9. Três cenários para 2031

Os três são escritos do lado de quem usa: **o que a pessoa tem na mão em 2031**. A camada
institucional aparece como consequência, não como assunto — foi a correção mais dura que este
mapa recebeu, e ela veio de quem pediu o recorte.

**Provável.** Você abre um catálogo grande demais para ser lido e compra obras avulsas, como
hoje, só que há muito mais delas e a maior parte não foi lida por ninguém antes de você. A
geração sob medida existe e é recurso de nicho dentro de plataforma fechada: você pede uma
variação e recebe uma, mas **ela não é reproduzível** — ninguém mais consegue ler a sua, e por
isso ninguém conversa sobre ela. A declaração de origem está em toda parte e não informa nada,
porque é auto-reportada e ninguém checa conteúdo. Conformidade continua sendo julgamento de uma
pessoa só dentro de cada estúdio, sem nome de cargo. O leitor ganhou volume e perdeu o comum.

**Desejável.** O que você compra é **um mundo, não uma história**, e o mundo vem com três
garantias que hoje não existem. A primeira é conformidade com liberdade no silêncio: o gerador
não contradiz o cânone nem a caracterização dos personagens, e **pode inventar livremente naquilo
que o cânone não diz**, desde que o inventado possa razoavelmente existir ali — a regra não é "só
o que está escrito", é "nada que contrarie o que está escrito, nem quem os personagens são". A
segunda é procedência inspecionável: qualquer trecho pode ser interrogado — *onde está escrito
isso?* — e devolve a passagem canônica, ou assume que aquilo foi preenchido no silêncio, com
procedência por frase e não por caixa de declaração. A terceira é a que devolve o objeto comum:
uma run é reproduzível, porque semente, versão do cânone e pedido devolvem o mesmo texto para
outra pessoa, de modo que duas pessoas deixam de compartilhar um texto e passam a compartilhar
**uma especificação que gera o mesmo texto** — e a comunidade volta a ter do que falar. Para
chegar aqui foi preciso o que ainda não aconteceu: uma **definição operável de violação** — não
"o cânone não menciona", e sim "contradiz o cânone ou a caracterização" — e que ela viesse de fora
do fornecedor do modelo, porque sem isso a garantia é marketing.

**Indesejável.** A conformidade foi resolvida, e só dentro de um jardim murado. Um fornecedor
garante que o gerado não contradiz o cânone, e a garantia **não é auditável nem portável**: você
não pode levar o seu mundo embora, e não pode verificar a afirmação — tem que confiar em quem a
faz. A restrição física chegou junto: com moratórias espalhadas e 71% de oposição local [1], a
capacidade concentrou-se em quem já a tinha, e a geração sob medida virou recurso de assinatura de
quem opera capacidade instalada. O leitor voltou a receber catálogo. O sinal precoce não é o preço
do token — é o **primeiro grande gerador a anunciar lista de espera por capacidade**, e o segundo
é a **primeira garantia de conformidade que nenhum terceiro consegue verificar**.

## 10. O experimento

**O que é.** Um **gerador de história conformante a um cânone, com laço de veto humano por
dentro**. Você dá uma intenção curta e um cânone; ele gera a história inteira; você veta,
corrige, e ele regenera respeitando a correção. O artefato é a coisa que se usa — e cada ação de
veto fica registrada: o que foi marcado, de que tipo, em que cena, e se a correção **persistiu**
nas cenas seguintes. A medição não é o produto: ela anda junto com o uso.

**O que conta como violação.** Não é "o cânone não menciona". É **contradiz o cânone ou a
caracterização**: o gerado pode inventar no silêncio, desde que o inventado possa razoavelmente
existir naquele mundo e não contrarie o que está estabelecido nem quem os personagens são. A
definição é de quem pediu o recorte, e ela divide o trabalho dentro do laço: **contradição tem
verdade de referência e é automatizável; silêncio não tem, e é irredutivelmente humano**.

**A divisão de trabalho dentro do laço.** A contradição é achada por máquina, do tipo
ConStory-Checker [9] — não por gosto de automação, mas porque o tempo humano na sala é escasso e
essa parte já está resolvida. O que sobe para a pessoa é a classe que nenhum benchmark cobre: as
invenções feitas no silêncio do cânone. É onde o julgamento de quem é dono do mundo não tem
substituto, e é o que o experimento mede.

**Que pergunta sobre o futuro ele responde.** A precondição da raiz 2: **o julgamento sobre
invenção no silêncio é transferível?** Se duas pessoas com a mesma página de cânone concordam
sobre o que cabe e o que não cabe, certificação vira ofício, o curador de cânone de e3.1.1 é cargo
real, e o cenário desejável da seção 9 tem chão. Se discordam, a conformidade fica presa na cabeça
do dono do cânone, e3.1 e todo o galho caem, e a promessa de mundo licenciado com garantia é
vendível e não verificável.

**Que tecnologia emergente usa, e por que não dá com madura.** Geração de narrativa longa
condicionada a um corpo de regras, com recuperação sobre esse corpo, mais verificação de
consistência do tipo publicado em 2026 [9][10]. Com Ren'Py, Twine ou Inform — os maduros deste
tema — não há o que medir: o autor escreve cada linha, não existe geração capaz de violar o
cânone, e ninguém além dele preenche silêncio nenhum. O motor de novela visual é substrato maduro
e **não será construído**: o esforço vai no laço e no registro.

**Casos-teste que já existem antes de o instrumento ser construído.** Os erros documentados no
corpus do próprio autor, que atravessaram o leitor mais próximo que a obra tem: atribuir dever de
cuidado a quem não o tem, ler não-intervenção como traço definidor, tomar uma lente tardia pela
fundação. Todos são **erros de caracterização**, nenhum é contradição factual, e nenhum seria pego
por verificador de fatos. Critério de falha: se o laço não separa esses da invenção legítima, ele
não está medindo o que diz medir.

**O que a turma vai fazer quando testar.** Usar. Cada pessoa recebe uma página de cânone, gera uma
história e veta o que não couber, em rodadas curtas. Os números saem do uso: quantas correções até
parar de violar, quais persistem, e — o dado que interessa — **onde estranhos discordam entre si e
do dono do cânone** sobre as invenções em silêncio.

**Controle que o desenho exige.** O braço do autor roda **sem pressa e com o cânone à mão**, e
roda **duas vezes em momentos separados**. Sem isso, o experimento mede fadiga de varredura em vez
de julgamento — que é exatamente a armadilha em que a linha de base humana do ConStory-Bench caiu
(seção 8) — e não distingue "certificação é intransferível" de "certificação é instável até dentro
de uma cabeça só".

**O que me faria mudar de ideia.** Se a concordância entre estranhos for alta, minha premissa de
que certificação é intransferível está errada e a raiz 2 perde o gargalo — bom para o campo, ruim
para o mapa. Se for baixa **inclusive entre o autor e ele mesmo em dois momentos**, então "violação
de cânone" não é categoria observável nem para quem escreveu o cânone, o experimento mediu ruído,
e o cenário desejável da seção 9 é impossível por construção.

## 11. Fontes

Abertas e lidas no trabalho desta semana, entre 13 e 16/09/2026. Onde o corpo se apoia em resultado
de busca sem leitura da fonte primária, isso está marcado no texto e a fonte **não** entra na
contagem.

1. **Gallup — "Americans Oppose AI Data Centers in Their Area"**.
   https://news.gallup.com/poll/709772/americans-oppose-data-centers-area.aspx
   Sustenta: pesquisa de 2 a 18/03/2026, mil adultos por telefone, ±4 pontos; 71% de oposição, 48%
   forte; 53% para usina nuclear; recorte partidário e regional. Confiabilidade: alta — instituto
   com método e margem declarados.
2. **Reimers, I. & Waldfogel, J. — "AI and the Quantity and Quality of Creative Products"**,
   NBER Working Paper 34777 (maio/2026), via resumo oficial do NBER.
   https://www.nber.org/digest/202605/how-large-language-models-are-reshaping-book-market
   Sustenta: 100 mil → 300 mil lançamentos mensais; queda de qualidade média maior onde o
   crescimento foi maior; melhora fora do top 100 e ausência de melhora no top 100; excedente do
   consumidor por cenário. Confiabilidade: alta — working paper com resumo institucional. Foi a
   fonte que corrigiu dois erros registrados na seção 8.
3. **Censo de declarações de IA na Steam** — Sulka Haro, via Cinevva (20/07/2026).
   https://app.cinevva.com/news/2026-07-20-steam-ai-disclosure-study
   Sustenta: 53.597 lançamentos; 10,9% / 19,9% / 30,8%; natureza binária da marca.
   Confiabilidade: média-alta — censo com método e tamanho declarados, veiculado por terceiro.
4. **US Copyright Office, NewsNet 1060** (29/01/2025).
   https://www.copyright.gov/newsnet/2025/1060.html
   Sustenta: aporte humano expressivo exigido; prompt puro não basta; uso assistivo não impede
   proteção. Confiabilidade: alta — fonte primária do órgão.
5. **Governing — "Data Centers Are Spreading. So Are Moratoriums."**
   https://www.governing.com/infrastructure/data-centers-are-spreading-so-are-moratoriums
   Sustenta: 200+ moratórias locais ativas; 13 condados de Maryland; Nova York como primeiro
   estado por via legislativa no verão de 2026 e a moratória de um ano por decreto; ações no
   Texas, na Pensilvânia e em Chicago. Confiabilidade: média-alta — veículo especializado em
   governo. **Contradiz o agregador citado na seção 8 quanto a qual estado foi o primeiro.**
6. **Temas de tendência 2026.2, tema 8** — CIN0055.
   https://tendencias-midia-interacao.vercel.app/materiais/temas-tendencias-2026-2.md
   Sustenta: o levantamento da turma, a linha maduro/emergente e a fronteira com os vizinhos.
   Confiabilidade: alta para o que afirma.
7. **Formato do documento de tendência** — CIN0055.
   https://tendencias-midia-interacao.vercel.app/materiais/formato-documento-tendencia.md
   Sustenta: estrutura, frontmatter e regras do bloco da roda. Confiabilidade: alta.
8. **Rie Qudan** — Wikipedia. https://en.wikipedia.org/wiki/Rie_Qudan
   Sustenta: 170º Prêmio Akutagawa em 17/01/2024, a grafia preferida pela autora, e o
   esclarecimento de que a IA escreveu apenas as falas da IA dentro do romance — usado neste mapa
   como precedente institucional de coautoria aceita. Confiabilidade: média.

9. **Li, J.; Guo, X.; Wu, Y.; Lee, R. K.-W.; Li, H.; Xie, Y. — "Lost in Stories: Consistency Bugs
   in Long Story Generation by LLMs"**, Microsoft e Singapore University of Technology and Design,
   arXiv:2603.05890v1 (06/03/2026). https://arxiv.org/html/2603.05890v1
   Sustenta: ConStory-Bench, 2.000 prompts, cinco categorias de erro com 19 subtipos, entre elas
   Caracterização e World-building; ConStory-Checker como pipeline LLM-as-judge; métrica CED
   (erros por dez mil palavras) e GRR; erros acumulando aproximadamente **linear com o tamanho do
   texto**; e a validação contra 1.000 erros injetados — máquina com recall 0,550 e precisão
   0,884, anotadores humanos com recall 0,139. Confiabilidade: alta para o instrumento e os
   números publicados; **baixa para a comparação humano-máquina**, e isso está registrado na
   seção 8 — a linha de base humana são dois anotadores pagos por peça, varrendo abaixo da
   velocidade de leitura, em texto que não era deles, e os autores advertem que o desenho favorece
   a automação. É preprint, com afiliação industrial e validação declarada.
10. **Ma et al. — "Can LLM Agents Stick to the Script? A Benchmark for Long-Horizon Consistency in
    Interactive Narratives"** (NCP-Bench), arXiv:2608.08160v1 (agosto de 2026).
    https://arxiv.org/html/2608.08160
    Sustenta: consistência em narrativa **interativa** via fact ledger, commitment set e trajetória
    de referência; auditor automático para conflito de fato, violação de compromisso e conflito com
    entrada do jogador; e os resultados — o modelo mais forte sobrevive a 42% das corridas de 20
    turnos, conflitos de fato dominam 40–68% das falhas, menos de 3,5% das interações chegam a 100
    turnos sem conflito. Confiabilidade: média-alta; independente do item 9, sem referência cruzada
    entre os dois.

**Citadas no corpo e NÃO lidas, por isso fora da contagem:** marcadas no corpo com letra, e não com número,
justamente para não se confundirem com as fontes lidas. **[a]** — os dados de preço por token vêm
de agregadores de mercado consultados em nível de busca, sem abertura de fonte primária de nenhum
fornecedor. **[b]** — as políticas do Amazon KDP, idem. **[c]** — o material sobre o AO3 e o caso
de junho de 2026 vem de resultado de busca: a página do Fanlore retornou **HTTP 403** e não foi
possível abri-la.

## 12. Anexo — o levantamento bruto

### 12.1 Entrevista

Nove perguntas em bloco, uma segunda rodada condicional disparada por colisão de fronteira com o
tema 7, e echo-back do recorte fechado antes de qualquer geração. Nenhum campo ficou em aberto.

A fronteira final é de quem pediu, não minha: *"an autonomous character that is part of the
narrative and reacts to the decisions of the player is almost indispensable. Our boundary is the
narrative, not the entity. Autonomous agents divorced from stories are non-belonging."* Eu havia
proposto corte diferente — autonomia da construção versus personagem persistente — e foi
substituído por este, que é mais simples e mais defensável.

### 12.2 Triagem de maturidade — Fase 2

| candidata | veredicto | teste | motivo |
|---|---|---|---|
| Ren'Py, Twine, Inform, Monogatari | **MADURO · H1** | T1, T5 | Opção padrão há anos, milhares de obras; resta ficar mais barato. Entra na seção 3, nunca na 4 |
| Tradução automática convencional | **MADURO · H1** | T1, T5 | Implantada em escala, caminho padrão |
| Editor de mapa e gerador de nomes | **MADURO · H1** | T1 | Muda velocidade, não possibilidade |
| Assistente de escrita por continuação de prosa (NovelAI e similares) | **H2− · melhoria** | T1 | Escora o presente: faz o autor atual escrever mais rápido sem mudar quem pode produzir. É o caso exemplar de inovação que se disfarça de tendência |
| Geração de fala e voz | **melhoria** | T2 | Sem ela um time competente aceita mais custo, não muda de objetivo |
| Geração de artefato narrativo inteiro a partir de intenção curta | **DISRUPTIVO · H2+** | passa T1/T3/T4 | Torna sem valor a etapa de primeira versão. Entra por mercado novo (não-escritor produz) e pela baixa (fan-fiction, que o incumbente não atende) |
| Conformidade a cânone como função separável | **EXPERIMENTAL · H2+** | passa T1/T3, T4 parcial | Falta a medida. Classificada como experimental pelo tier de `bvga` — protótipo e demonstração, sem solução confiável para uso amplo. Virou raiz por decisão declarada, com o custo registrado na seção 7 |
| Regime de declaração e verificação de origem | **DISRUPTIVO · H3** | passa T1/T3/T4 | Torna sem valor o registro por presunção e a neutralidade da plataforma |
| Personagem autônomo persistente sem narrativa | **FORA DO RECORTE** | — | Tema 7, pela fronteira da entrevista |
| Vídeo e imagem como foco | **FORA DO RECORTE** | — | Tema 12 |
| Design procedural de regras | **FORA DO RECORTE** | — | Tema 14 |

### 12.3 Efeitos mortos ou rebaixados na Fase 5

| id | efeito | prova | destino |
|---|---|---|---|
| e7 | O preço de uma obra de ficção cai a zero e o mercado pago desaparece até 2031 | P1 + P2 | **Cortado.** Extrapolação de "abundância → preço zero", desmentida pelo excedente do consumidor subindo e pelo mercado persistindo [2] |
| e8 | Modelos melhores resolvem conformidade sozinhos até 2029 | P5 | **Cortado.** Galho inteiro pendurado numa única precondição não validada, e é o espelho otimista da raiz 2 — se entrasse, a raiz 2 se autodestruiria sem evidência |
| e9 | Plataformas passam a verificar origem por análise de conteúdo até 2030 | P4 + P3 | **Cortado.** Força contrária decisiva e não modelada: a Amazon checa velocidade de envio e identidade, explicitamente não checa conteúdo; e a detecção comunitária já demonstrou ser evadível por reformatação [9] |
| e1.2.1 | A plataforma vira curadora editorial | P4 | **Reescrito** para "autoridade editorial **de fato por omissão e não por decisão**" — a plataforma declara que a marca de IA não afeta royalties nem busca, então a autoridade que ela exerce não é escolhida |
| e6.1 | A tolerância ao fan-work encolhe | P2 | **Mantido com `confianca: baixa`** e a ressalva de ausência de precedente anexada à seção 7 |
| e3 (raiz 2 inteira) | — | P5 | **Mantida sob protesto registrado.** É a raiz com sinal mais fraco do mapa e está declarada na seção 7 como a aposta mais frágil |

Nenhum efeito sobreviveu sem exame: três cortes, uma reescrita, um rebaixamento e uma raiz
mantida com ressalva pública. Cota de dano cumprida nas três raízes.

### 12.4 A busca que faltava, feita tarde

Até 16/09 este mapa afirmava que não existia instrumento para medir conformidade a cânone. A
afirmação nunca foi testada: as buscas cobriram direito autoral, declaração de origem,
fan-fiction, mercado de livros e infraestrutura, e **nenhuma cobriu consistência narrativa**. A
pergunta de quem pediu o recorte — *o que faz um sinal ser fraco?* — forçou a distinção entre "não
encontrei" e "não existe", e a busca que faltava encontrou, em minutos, dois benchmarks
independentes [9][10].

Consequências, todas registradas onde ocorreram: a raiz 2 voltou de experimental para emergente
(4.2); o sinal de e3 subiu de `medio` para `forte` e o de e4 de `fraco` para `forte`, com a
confiança de e4 de `baixa` para `media`; e4 ganhou evidência direta — *"errors accumulate
approximately linearly with output length"* é literalmente o que o efeito afirma; a precondição
faltante da raiz 2 deixou de ser "não há métrica" e passou a ser "não há métrica para o silêncio";
e a seção 10 deixou de propor a invenção de uma unidade de medida e passou a propor a adjudicação
da classe que a métrica existente não cobre.

### 12.5 O que não foi apurado

- **Fanlore retornou HTTP 403.** Todo o material sobre o caso de junho de 2026 e sobre política do
  AO3 está em nível de resultado de busca. É a lacuna mais séria do documento, porque a raiz 3
  apoia parte do seu "por que agora" nesse caso. Um mapa com mais tempo abriria isso primeiro.
- **Vigilância, pressão religiosa e pânico moral** foram pedidos explicitamente como ameaça e não
  entraram como efeito: não achei sinal datado suficiente. Registrado como pedido não atendido por
  falta de fonte.
- **Preço por token** e **políticas do KDP** ficaram em nível de busca. Ambos são load-bearing no
  corpo e por isso estão marcados no texto, fora da contagem de fontes.
- **Emprego em escrita e localização:** nenhum dado. A raiz 1 afirma que uma etapa deixa de existir
  sem um único número de emprego para sustentá-la.
- **Recorte geográfico é global e as fontes são americanas.** Gallup, Copyright Office, NBER, KDP,
  Steam. Não apurei Europa, Brasil, Japão nem China, e o Japão aparece apenas pelo Akutagawa. Viés
  geográfico declarado, não recorte.

### 12.6 Sobre a rodada anterior

Uma versão anterior deste mapa foi produzida em 13/09/2026 pela skill `futurizacao-vafs`, num
teste cruzado, com três raízes das quais duas sobreviveram conceitualmente aqui. A raiz descartada
era **tradução sobreposta em tempo real dissolvendo a localização**: caiu porque o próprio anexo
daquela rodada registrava ausência total de dado de emprego, e porque o recorte final desta rodada
é mais amplo e mais preciso. Em seu lugar entrou a conformidade a cânone.

### 12.7 Auditoria cruzada — este mapa passado pelos critérios das skills da turma

Em 16/09/2026 foram baixadas as skills de nove colegas (`alpa2`, `bvga`, `hfm`, `jcsc`, `jgpt`,
`kvv`, `meap`, `mjbo`, `vafs`) e os critérios de cada uma foram aplicados a este mapa. A de
`jlsn` não pôde ser obtida: o link publicado na página da turma está truncado — traz 28
caracteres de identificador do Drive, e o formato usa 33.

O que a auditoria mudou neste documento:

| origem | mecanismo que a minha skill não tem | o que mudou aqui |
|---|---|---|
| `meap` | **Prova de causa solta** — remova a raiz; o efeito ainda aconteceria por outro motivo? | Acusou e1.2 e e2.1. **e1.2 foi reescrito** para afirmar a troca de sujeito (quem não escreve passa a produzir) em vez do volume. **e2.1 foi mantido** contra a recomendação, e o modo de falha da prova está descrito na seção 7 |
| `bvga` | Tier **EXPERIMENTAL** como subcategoria de emergente | A raiz 2 foi reclassificada para experimental — e depois **revertida para emergente** em 16/09, quando a busca por literatura de consistência narrativa desmentiu a premissa que sustentava o rebaixamento (seção 8). O tier de `bvga` continua correto como conceito; o que estava errado era o meu diagnóstico do estado da arte |
| `jcsc` | Rebaixamento **auditável** — registrar o valor original de confiança, não só que houve rebaixamento | Adotado: e6.1 foi de `media` para `baixa`, e e1.2.1 de `media` para `baixa`; os valores originais ficam registrados aqui |
| `jgpt` | Teste do desaparecimento — *"se isso sumisse amanhã, o campo voltaria a como era há 5 anos?"* | Aplicado à raiz 1. Resultado desconfortável e registrado: se a geração de artefato inteiro sumisse, a enchente de catálogo **diminuiria mas não pararia**, porque a escrita assistida carrega a maior parte dela. Foi o que motivou a reescrita de e1.2 |
| `jgpt` | **Perguntar** o viés ao autor em vez de inferir | A seção 7 traz viés inferido por mim; a pergunta foi feita ao autor e a resposta dele substitui a inferência onde houver divergência |
| `mjbo` | Viés **localizado** — apontar onde no mapa o interesse inflou um efeito, não declarar interesse genérico | Já praticado na seção 7 (raiz 2), agora por regra e não por acaso |
| `alpa2`, `hfm`, `kvv`, `vafs` | Baterias adversariais equivalentes à minha em substância | Nenhuma mudança: os itens que elas cobrem já estavam cobertos por P1–P6 |

**O que nenhuma das dez skills tem**, incluindo a minha: campo para **sujeito** do efeito. Este
mapa tem público duplo — estúdio e consumidor — com incentivos opostos, e o bloco `roda:` não
consegue dizer de quem fala cada efeito. É a lacuna de formato mais séria que a comparação
revelou, e ela afeta o processamento conjunto dos mapas da turma, não só este documento.

### 12.8 Registro de método

- Estrutura, frontmatter e regras do bloco da roda conforme a especificação da disciplina [7].
- Entrevista: 9 perguntas, 1 rodada condicional, echo-back confirmado.
- Fase 2: 11 candidatas testadas, 5 reprovadas por maturidade ou melhoria, 3 excluídas por
  fronteira, 3 aprovadas como raiz.
- Roda: 3 raízes, 6 / 10 / 10 efeitos, com os sinais da raiz 2 revistos em 16/09, profundidade 3, prazos monotônicos por galho, dois efeitos de
  primeira ordem com `confianca: alta` (e1, e5) e **nenhum de terceira ordem com alta** — dentro da
  cota de humildade.
- Fase 5: seis provas aplicadas; três cortes, uma reescrita, um rebaixamento, uma raiz sob ressalva.
- Fora da árvore por regra de parada: duas convergências, registradas em prosa na seção 5.
