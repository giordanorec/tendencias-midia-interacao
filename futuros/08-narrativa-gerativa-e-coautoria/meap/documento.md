---
tema: Narrativa gerativa e coautoria
slug: narrativa-gerativa-e-coautoria
autor_login: meap
zona_de_interesse: Simulação e mundos
data: 2026-09-11
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global, com nota sobre o Brasil
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 10
efeitos_ordem_3: 10
tecnologias_citadas: [Ren'Py, Twine, Inform 7, Monogatari, YarnSpinner, Dialogic, Arrow, chronicler, Fantasy-Map-Generator, mangobox.ai, AIComicBuilder, LunaTranslator, Textractor, Pika, Luma, ChatTTS, Bark, AI Dungeon, Character.AI, NovelAI, Narrative Context Protocol]
fontes: 12
confianca: media
experimento: "Teste cego de proveniência em narrativa interativa — seis trechos jogáveis (três feitos por humano, três gerados de ponta a ponta), medindo acerto de palpite, disposição a pagar e efeito da declaração sobre a nota"
skill_usada: futurization-meap
publico_ok: false
---

## 1. Resumo

O custo de produzir um artefato narrativo jogável caiu a um ponto em que a execução deixou de
ser o gargalo — e o gargalo migrou para a seleção, a consistência e a proveniência. Três
rupturas sustentam o mapa: a geração de ponta a ponta de uma obra narrativa a partir de uma
intenção curta; a tradução e a re-locução sobrepostas no lado do consumidor, que fazem a obra
chegar sem passar por nenhum intermediário; e a proveniência declarada, que deixou de ser
escolha de marketing e virou campo obrigatório de catálogo e de conformidade. O que o mapa
NÃO encontrou foi a morte do autor: a pergunta "quem é o autor" já foi respondida na prática
por prêmios, lojas e sindicatos entre 2024 e 2026, e a resposta foi conservadora — a obra
continua tendo dono, mas passou a ter também um regime declarado de produção. O efeito de
segunda ordem mais firme não é estético, é econômico: a taxa de sucesso por título cai porque
o catálogo cresce mais rápido que a atenção, e a curadoria com nome e rosto volta a ser
infraestrutura. O efeito de terceira ordem mais provável é curricular e contratual, não
artístico. Confiança média: a base de evidência de 1ª ordem é boa e recente; a de 3ª ordem é
inferência.

## 2. O tema

Narrativa gerativa e coautoria é a produção do artefato narrativo inteiro — enredo, elenco,
arte, diálogo, voz, e o programa que torna isso jogável — a partir de uma intenção curta, e o
regime de trabalho em que autor e máquina escrevem juntos como modo normal, não como
experimento.

O tema pertence a mídia e interação por um motivo específico: a narrativa interativa é o único
gênero em que a obra é, ao mesmo tempo, texto e software. Um romance gerado é texto; uma
novela visual gerada é texto, imagem, som e máquina de estados. Os modelos multimodais fecharam
o ciclo texto → imagem → som → vídeo num pipeline só, e a linhagem de ferramentas de narrativa
interativa — Ren'Py (2004), Inform, Twine, YarnSpinner, Dialogic, Arrow — virou o alvo natural
dessa geração porque já tinha o formato do artefato definido.

Merece mapa de futuro porque a variável que mudou não foi a qualidade da narrativa, e sim o
custo de produzi-la e o custo de traduzi-la. Quando um custo cai ordens de grandeza, o que muda
primeiro não é o produto: é quem decide o que existe, quem é pago por quê, e como o público
encontra qualquer coisa. É esse deslocamento — da execução para a seleção — que o mapa segue.

Fronteira com os vizinhos: o personagem que age dentro de um mundo é tema 7; a geração de vídeo
e imagem como mídia é tema 12; design procedural de regras é tema 14. Aqui o objeto é a
história como coisa gerada, e o que isso faz com autoria.

## 3. Onde isso está hoje

**A geração de ponta a ponta existe e é comercial, mas em escala pequena.** `mangobox.ai`
recebe uma descrição em texto e devolve uma novela visual jogável no navegador, com elenco,
arte e conversas; a própria página institucional descreve o produto apenas como "uma plataforma
para criar e compartilhar histórias interativas", sem declarar limites técnicos nem política
de propriedade do que sai — o que já diz alguma coisa sobre a maturidade do setor [1].

**A adoção declarada em loja é alta e está acelerando — e é o dado mais sólido que existe.**
No Steam Next Fest de junho de 2026, 1.163 de 4.382 demos rastreadas declararam uso de IA
generativa: 26,5%, contra 21,2% na edição de fevereiro de 2026, medido com a mesma metodologia
[2]. Na semana anterior ao festival, mais de 300 jogos foram lançados no Steam e 120 declararam
IA — 40% dos lançamentos daquela semana [2]. Em 2025, foram 20.004 jogos lançados no Steam e
4.311 com declaração de IA: 22% do ano, o dobro de 2024 [3].

**A consistência, não a geração, é o problema técnico aberto.** O workshop AISTORY do CVPR 2026
(4 de junho, Denver) enumera como problemas em aberto exatamente aquilo de que uma obra
narrativa depende: consistência de personagem ao longo da sequência visual, coerência temporal,
alinhamento entre tom narrativo e estilo visual, e elementos interativos com adaptação em tempo
real [4]. A resposta emergente é estrutural: o Narrative Context Protocol, de Hank Gerba
(arXiv, março de 2025), propõe codificar a história numa "Storyform" — um registro estruturado
de traços narrativos — para servir de trilho ao gerador e permitir portabilidade da história
entre plataformas; a validação é um experimento de um ano, um autor, uma novela [5].

**A tradução do lado do consumidor já é infraestrutura de nicho madura.** `LunaTranslator`
(GPLv3, 13,1 mil estrelas no GitHub, mais de 4.900 commits) extrai o texto do jogo por hook de
memória ou OCR, passa por um motor de tradução — inclusive LLM e tradução offline — e devolve
sobreposto, com TTS; suporta hook de emulador para NS, PSP, PSV e PS2 [6]. Uma obra japonesa
nunca localizada é jogada em outra língua sem que ninguém a tenha traduzido.

**A declaração de proveniência virou regra, em três frentes independentes.** No itch.io, a
declaração de IA generativa é campo obrigatório para pacotes de assets, com bloqueio de
indexação para quem não classifica. Na ficção interativa, a IFComp mudou a regra para 2026:
"todo o conteúdo voltado ao jogador deve ser inteiramente criado por humanos, incluindo arte de
capa, prosa e todos os assets do jogo", mas segue permitindo IA para "edição, depuração, apoio
de acessibilidade, pesquisa, assistência limitada de tradução ou código" — e proíbe que a obra
exija do jurado interação com serviço generativo externo durante a partida [7]. Na Europa, as
obrigações do Artigo 50 do AI Act passam a valer em 2 de agosto de 2026, com diretriz adotada
em 20 de julho de 2026: os provedores devem "adicionar marcas legíveis por máquina que permitam
a detecção de conteúdo gerado ou manipulado por IA" [8].

**A pergunta da autoria foi respondida na prática, e a resposta foi morna.** Rie Kudan ganhou o
prêmio Akutagawa em janeiro de 2024 com *Tokyo-to Dojo-to*, declarou no discurso que cerca de
5% do texto veio direto do ChatGPT, e o comitê — que já havia chamado a obra de "praticamente
impecável" — não tratou o uso como problema [9]. E a pesquisa de recepção aponta na mesma
direção: Hwang, Liao, Blodgett, Olteanu e Trischler entrevistaram 19 escritores profissionais e
pesquisaram 30 leitores assíduos; os leitores não distinguiram o texto coescrito do texto
escrito sozinho e reagiram positivamente ao escritor que experimenta a ferramenta — enquanto os
escritores definiram autenticidade pelo *processo* de criação, não pelo texto final [10].

**O trabalho reagiu antes da estética.** O acordo SAG-AFTRA de mídia interativa de 2025, que
encerrou a greve de onze meses, exige consentimento escrito prévio para criar ou usar réplica
digital de intérprete, e exige que o produtor informe, ao pedir o consentimento, se haverá
geração em tempo real — com tarifas mínimas próprias para réplica digital e para geração em
tempo real [11]. No Brasil, o movimento Dublagem Viva, criado por dubladores em novembro de
2023 dentro da campanha internacional "Real Voices", pede que a IA não seja usada para
reproduzir a voz de atores em português e que o uso respeite a Lei 9.610/98 e os contratos de
trabalho [12].

**Contexto maduro, que não entra como disrupção:** as engines de narrativa (Ren'Py, Twine,
Inform 7, Monogatari, YarnSpinner, Dialogic, Arrow), os geradores de mundo e mapa
(`chronicler`, `Fantasy-Map-Generator`), a síntese de fala (ChatTTS, Bark e congêneres), a
geração de imagem de personagem, e a narrativa infinita conversacional (AI Dungeon desde 2019,
Character.AI, NovelAI). Ver a triagem na seção 12.

## 4. As disrupções-raiz

### 4.1. Geração de ponta a ponta do artefato narrativo jogável

**O que rompe.** A cadeia em que uma obra narrativa interativa exige um time — roteirista,
artista, programador de diálogo, editor — e um prazo medido em meses. Rompe a premissa de que
produzir e publicar são o filtro. Quando uma frase vira uma novela visual jogável em minutos,
o que era escasso (a execução) fica abundante, e o que era gratuito (a atenção de alguém, a
decisão sobre o que merece existir) fica escasso.

**Por que agora.** Os modelos multimodais fecharam o ciclo num pipeline só, e as engines de
narrativa já ofereciam um alvo de saída bem definido — script de diálogo, máquina de estados,
assets nomeados. Não foi preciso inventar o formato do artefato; bastou preenchê-lo. A prova é
de campo, não de laboratório: 22% dos 20.004 lançamentos do Steam em 2025 declararam IA
generativa, e 40% dos lançamentos da semana de 19 de junho de 2026 [2][3].

**O que ainda falta.** Consistência ao longo da obra longa — personagem, tom, continuidade —
que é precisamente a lista de problemas em aberto do AISTORY [4]. E falta a camada de
restrição: uma forma de o autor dizer ao gerador o que ele *não* pode fazer. O NCP é a
tentativa mais articulada, com validação de um autor só [5]. Sem essa camada, a geração
produz protótipo, não obra.

### 4.2. Tradução e re-locução sobrepostas no lado do consumidor

**O que rompe.** A localização como condição de acesso. Rompe a premissa de que uma obra chega
a um mercado porque alguém comprou o direito, contratou tradutor e produziu a versão. Rompe
também, mais silenciosamente, a ideia de que a obra tem uma língua de origem observável pelo
público: quando a camada de tradução roda no dispositivo, o leitor não sabe — nem precisa saber
— em que língua a obra foi escrita.

**Por que agora.** Os componentes são maduros e baratos separadamente (OCR, hook de memória,
tradução por LLM, TTS), e a integração já está empacotada em software livre com base instalada
real: LunaTranslator, GPLv3, 13,1 mil estrelas, hook inclusive de emulador de console [6]. Não
depende de nenhum acordo comercial nem de nenhuma plataforma.

**O que ainda falta.** Qualidade suficiente para obra de prestígio — o caso *Metaphor:
ReFantazio*, criticado por tradução que soou artificial, é o tipo de falha que mantém a versão
oficial viva. E falta a camada equivalente para áudio rodando no dispositivo com latência
aceitável: a dublagem sintética sobreposta em tempo real, sobre obra alheia, ainda não é de uso
corriqueiro.

### 4.3. Proveniência declarada como atributo de mercado da obra

**O que rompe.** A premissa de que como uma obra foi feita é assunto interno de quem a fez.
Rompe a indiferença do catálogo: até 2024, a loja não perguntava; a partir de 2026, pergunta,
armazena, filtra e — na Europa — exige marca legível por máquina. O que se rompe é a
possibilidade de a obra circular sem regime declarado.

**Por que agora.** Três causas independentes convergiram sem combinar: plataforma (itch.io
obrigatório para assets; Steam com campo de declaração e 26,5% de adesão nas demos do Next Fest
de junho de 2026 [2]), comunidade (IFComp separando conteúdo voltado ao jogador de assistência
de desenvolvimento, regra nova para 2026 [7]) e Estado (Artigo 50 do AI Act em vigor a partir
de 2 de agosto de 2026, com marcação legível por máquina [8]; no Brasil, o PL 2338/2023 seguindo
na Câmara). A convergência importa: como as causas são independentes, a disrupção não desaparece
se uma delas recuar.

**O que ainda falta.** Verificação. Hoje a declaração é autodeclaração, e não há mecanismo de
auditoria com custo baixo. Falta também o acordo sobre o que conta: a regra da IFComp separa
"conteúdo voltado ao jogador" de "assistência de desenvolvimento" [7], a diretriz europeia fala
de marcação de conteúdo gerado ou manipulado [8], e o Steam, segundo a leitura corrente do
mercado, isenta ferramenta interna de fluxo de trabalho. Três linhas diferentes no mesmo eixo.

### 4.4. Descartada — narrativa infinita conversacional gerada por LLM

Descartada como disrupção-raiz por maturidade. O AI Dungeon é de 2019; Character.AI e NovelAI
consolidaram a categoria entre 2021 e 2023. Pelo critério da triagem — mais de três anos como
categoria estabelecida, sem ruptura de cadeia de valor — é madura. Sete anos depois, ela não
tirou dinheiro nem poder de nenhum incumbente da narrativa: não derrubou editora, não derrubou
estúdio, não mudou o que é uma obra. Entra na seção 3 como contexto. Ver a justificativa
completa e o contra-argumento na seção 12.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: Geração de ponta a ponta do artefato narrativo jogável
    efeitos:
      - id: e1
        ordem: 1
        efeito: O custo marginal de produzir um protótipo narrativo jogável cai a quase zero e o gargalo da produção migra da execução para a seleção.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Os catálogos abertos crescem mais rápido do que a atenção disponível e a taxa de sucesso por título lançado cai.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A curadoria com nome e rosto — festivais, coletivos, editoras de nicho — volta a ser a infraestrutura de descoberta que o algoritmo de loja deixou de ser.
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O ofício de roteirista de jogo se reparte — encolhe a escrita de volume (falas de ambiente, ramos secundários, variações) e cresce a escrita de sistema (regras de mundo, restrições, contratos de personagem).
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Os cursos de escrita para mídia interativa passam a ensinar especificação de restrição narrativa — o que o gerador não pode fazer — antes de ensinar diálogo.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A prototipagem narrativa se desloca para o início do projeto e uma história passa a ser jogada antes de a decisão de produzi-la ser tomada.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: O playtest de narrativa deixa de ser caro e passa a rodar com dezenas de variantes da mesma premissa por ciclo.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: O critério de aprovação de projeto em estúdio migra de "o pitch convence" para "a variante testou melhor", e o poder de decisão narrativa sai do roteirista-chefe para quem controla o funil de teste.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: O gargalo técnico visível passa a ser a consistência — personagem, tom, continuidade — e não mais a geração.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Surge uma camada de middleware narrativo entre o autor e o modelo, com bíblia de mundo legível por máquina, restrições declaradas e contratos de personagem.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A bíblia de mundo, e não o texto final, vira o ativo licenciável de uma franquia, e o contrato de licenciamento passa a descrever restrições em vez de descrever obras.
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: Tradução e re-locução sobrepostas no lado do consumidor
    efeitos:
      - id: e4
        ordem: 1
        efeito: Obras não localizadas passam a ser consumidas rotineiramente em língua estrangeira, com a camada de tradução instalada pelo próprio leitor.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A cauda longa — novelas visuais japonesas, webnovels chinesas, indies brasileiros — ganha público internacional sem nenhum contrato de localização assinado.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A localização oficial se reposiciona como selo de canon e de qualidade — "a versão autorizada" — em vez de ser a condição de acesso ao mercado.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: O trabalho de tradução migra para revisão e adaptação cultural sobre saída de máquina, com queda de tarifa por palavra e de posto fixo em estúdio.
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: A formação em tradução audiovisual reorganiza o currículo em torno de julgamento cultural e direção de texto, e a fluência de digitação em par de línguas deixa de ser o diferencial da profissão.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: A camada do leitor deixa de ser só texto e passa a incluir legenda, dublagem sintética e reescrita de registro rodando sobre a obra alheia.
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A fronteira entre traduzir e adaptar sem autorização deixa de ser observável pelo detentor de direitos, porque a transformação acontece no dispositivo do leitor e não deixa cópia distribuída.
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A cobrança de direito autoral se desloca do artefato para o distribuidor da camada — loja de extensões, sistema operacional —, porque é o único ponto da corrente onde ainda existe um intermediário identificável.
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: Proveniência declarada como atributo de mercado da obra
    efeitos:
      - id: e6
        ordem: 1
        efeito: A declaração de proveniência vira campo obrigatório de catálogo e item de conformidade legal, e deixa de ser escolha de posicionamento.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: O catálogo se separa em faixas declaradas e "feito por humano" passa a funcionar como atributo de preço, no mesmo mecanismo de um selo de origem.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Surge auditoria de proveniência como serviço pago — e, junto com ela, a fraude de declaração, porque o atributo passou a valer dinheiro e continua sendo autodeclarado.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Prêmios, festivais e concursos passam a legislar onde a máquina pode entrar, separando conteúdo voltado ao público de assistência de desenvolvimento.
            sinal: medio
            prazo: 2027
            confianca: alta
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: A unidade premiada deixa de ser a obra e passa a ser a obra sob um regime declarado de produção, e comparar obras de regimes diferentes vira discussão de categoria em vez de discussão de mérito.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: O consentimento de voz e imagem de intérprete vira cláusula padrão de contrato, com registro por uso e tarifa própria para geração em tempo real.
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: A voz de personagem se torna um ativo licenciado separadamente da atuação, com mercado secundário e prazo de validade contratual.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: O elenco de uma obra longa passa a ser contratado como catálogo renovável de vozes, e a carreira de intérprete de dublagem se divide entre quem licencia timbre e quem atua ao vivo.
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

**O que o YAML não diz.**

A roda tem três raízes, mas elas não pesam igual. A disrupção 3 (proveniência) é a única em que
os efeitos de 1ª ordem já são observáveis com data e número — 2 de agosto de 2026 para o Artigo
50 [8], regra nova de 2026 na IFComp [7], acordo ratificado em 2025 no SAG-AFTRA [11]. É o
ramo de maior confiança e o de menor originalidade: está descrevendo o presente com um ano de
atraso. A disrupção 1 tem a evidência de adoção mais forte (os números do Steam) e os efeitos
mais incertos, porque adoção declarada não é a mesma coisa que dependência: 26,5% de demos com
declaração de IA não informa se a IA gerou a obra ou a arte de fundo.

A assimetria entre os ramos é deliberada e vale ser lida: **nenhum efeito de 3ª ordem deste mapa
é estético.** Todos são curriculares, contratuais ou de infraestrutura de descoberta. Isso não é
timidez — é o que a evidência sustenta. A hipótese estética forte (a obra deixa de existir como
coisa compartilhada porque cada leitor lê uma versão) foi derrubada na rodada adversarial e
rebaixada a sinal fraco, na seção 6.

Três ramos merecem desconfiança explícita e estão marcados como tal na seção 7: e2.1.1 (o
deslocamento de poder dentro do estúdio), e5.1.1 (a cobrança migrando para o distribuidor da
camada) e e6.1.1 (auditoria e fraude de proveniência). Os três são mecanismos plausíveis sem
nenhum caso observado.

## 6. Sinais fracos e wildcards

**O sinal fraco mais interessante é uma ausência.** Não existe, até setembro de 2026, nenhum
produto de escala em que a narrativa se adapte por leitor a ponto de duas pessoas lerem obras
diferentes. A tecnologia está disponível há anos; ninguém a transformou em produto de massa. A
hipótese mais provável não é técnica, é social: a graça de uma obra inclui poder falar dela com
outra pessoa. Se isso estiver certo, a adaptação por leitor tem um teto de mercado que nenhum
avanço de modelo derruba. Se estiver errado, é o efeito de 2ª ordem mais importante do mapa e
ele não está aqui. **É o que mudaria o mapa inteiro.**

**A Storyform como formato de arquivo.** Se o NCP — ou um concorrente — for adotado por duas
plataformas grandes, a história vira dado portátil e não obra acoplada a uma engine [5]. Isso
abriria um mercado de histórias sem plataforma, análogo ao que o PDF fez com o documento
diagramado. Hoje é um artigo de arXiv com validação de um autor. Sinal baixíssimo, impacto alto.

**Marca legível por máquina como infraestrutura de fato.** O Artigo 50 exige marcação legível
por máquina a partir de agosto de 2026 [8]. Se essa marcação pegar como padrão técnico e não
apenas como obrigação regulatória, ela vira a base sobre a qual se constrói tudo em e6 — filtro
de loja, faixa de preço, elegibilidade de prêmio. Se não pegar, e6.1 e e6.1.1 caem juntos.

**A camada do leitor virando plataforma.** LunaTranslator hoje traduz. Nada impede que a mesma
arquitetura — hook, transformação, sobreposição — reescreva registro, troque personagem, censure
ou dublê. O sinal fraco é que a camada de modificação do consumidor é genérica por construção, e
a tradução é só o primeiro uso.

**Wildcards.**

*Um wildcard que já aconteceu.* A hipótese "um livro assumidamente coautorado com IA ganha um
prêmio literário — ou é barrado dele" estava na descrição do tema como carta selvagem. Ela se
realizou em janeiro de 2024: Rie Kudan, prêmio Akutagawa, 5% do texto vindo direto do ChatGPT,
declarado no discurso, e o comitê não viu problema [9]. Não houve ruptura. Isso é informação
sobre o mapa, não sobre o prêmio: **a coautoria declarada foi absorvida pelas instituições
literárias com menos atrito do que se supunha.** O wildcard que resta é o inverso — uma
instituição de peso cassar um prêmio *retroativamente* por proveniência não declarada. Aí o
custo de declarar vira menor que o de esconder, e e6 acelera.

*Um estúdio grande publicar a bíblia de mundo sob licença aberta.* Se uma franquia abrir a
camada de restrição e fechar só o gerador, o modelo de negócio da narrativa vira licenciamento
de mundo e não venda de obra — e e3.1.1 sai de 2031 para dois anos antes.

*Uma decisão judicial responsabilizando o distribuidor da camada de tradução.* Improvável e
possível. É o gatilho único que materializa e5.1.1 de uma vez.

## 7. Contra o próprio mapa

**O erro mais provável deste mapa é ele estar descrevendo o presente e chamando de futuro.**
A disrupção 3 inteira é assim: obrigação de declarar, consentimento de voz, regra de concurso —
tudo isso já está em vigor ou entra em vigor em 2026. Chamar de disrupção-raiz algo que já
aconteceu é o erro de maturidade que a própria triagem deveria impedir. A defesa é que os
efeitos de 2ª e 3ª ordem (faixa de preço, auditoria, fraude, reorganização de carreira de
intérprete) ainda não aconteceram. Mas o leitor deve tratar a seção 4.3 como diagnóstico, não
como previsão.

**O segundo erro provável é confundir declaração com dependência.** Todo o peso de evidência da
disrupção 1 vem dos números do Steam [2][3] — e um jogo que declara uso de IA pode ter usado IA
para gerar o retrato de um NPC secundário. A declaração mede quantos tocaram na tecnologia, não
quantos dependem dela. Se a maior parte dos 26,5% for uso periférico, e1 é verdadeiro mas com
uma década a mais de prazo do que 2027.

**Extrapolação linear.** Os efeitos e4.2 (queda de tarifa de tradução) e e1.2 (repartição do
ofício de roteirista) são, em boa medida, "o que já acontece, só que mais". A pressão sobre
tarifa de tradução via pós-edição de máquina é anterior à IA generativa; a escrita de volume em
jogo grande já era terceirizada. Mantive os dois porque o mecanismo é o mesmo e a magnitude muda
— mas quem os ler como novidade estará errado.

**Adoção acelerada.** e5 (dublagem sintética sobreposta em tempo real como prática corriqueira
até 2029) é o efeito com o cronograma mais frágil do mapa. A tradução de texto sobreposta levou
mais de uma década para chegar a 13 mil estrelas de nicho [6]; supor que a de áudio faça o mesmo
percurso em três anos é otimismo de cronograma.

**Viés do recorte.** O mapa foi feito com o recorte "descubra a disrupção, não a suponha" e
viés declarado neutro. Mesmo assim, ele tem um viés de estrutura: **três das três disrupções são
sobre economia e instituição, nenhuma é sobre forma narrativa.** Um mapa feito por alguém de
literatura ou de game design teria achado ruptura na forma — gêneros novos, estruturas que só
existem porque são geradas — e teria tratado o que está aqui como pano de fundo. Não afirmo que
o outro mapa estaria errado; afirmo que este não o cobre.

**O que me faria mudar de ideia, declarado antes:** evidência de que a adoção já passou da
maioria inicial na curva de Rogers, ou de que a tecnologia só melhora o que existe sem romper
nada. Sobre o primeiro: 22% dos lançamentos do Steam em 2025 [3] põe a adoção **na fronteira
entre adotantes iniciais (16%) e maioria inicial (50%)** — perto demais do limite para o mapa
ser confortável, e é por isso que a confiança geral é média e não alta. Sobre o segundo: o
argumento mais forte contra o mapa inteiro é que leitores não distinguem texto coescrito de
texto escrito sozinho [10]. Se o produto final é indistinguível, então o que mudou foi o custo
de produção — e mudança de custo de produção é melhoria, não ruptura. Levo esse argumento a
sério: ele é a razão de os efeitos de 3ª ordem deste mapa serem todos econômicos e nenhum
estético.

## 8. O que a máquina errou

**Erro 1 — tomar um wildcard do enunciado como futuro quando ele era passado.** A descrição do
tema oferecia como carta selvagem "um best-seller assumido como coautoria com IA ganhar um
prêmio literário — ou ser barrado dele". A primeira derivação colocou isso na seção 6, com prazo
2029. A busca mostrou que aconteceu em janeiro de 2024, com o Akutagawa, e que o comitê não viu
problema [9]. Um wildcard que já se realizou e não rompeu nada não é wildcard: é evidência
contra o mapa, e mudou a seção 3 e a seção 7. Foi o achado que mais alterou o resultado.

**Erro 2 — quase citar número de mercado sem fonte nomeada.** Um resultado de busca afirmava que
"o mercado global de jogos de ficção interativa valia US$ 3,8 bilhões em 2024 e chegará a US$
7,8 bilhões em 2032, a 12% de CAGR". Números redondos, nenhuma consultoria nomeada, nenhum
relatório identificável. Removido. É o padrão descrito no DUVIDAS.md deste mesmo método: projeção
de mercado redonda e plausível é o formato típico da alucinação estatística.

**Erro 3 — quase usar fazenda de SEO como fonte de escala.** A busca por números de usuários de
AI Dungeon e Character.AI devolveu quase só conteúdo gerado para ranquear (`characterai.it.com`,
`weavai.app`, `dungeonsdeep.ai`, `aigearbase.com`), incluindo uma estatística sem sentido
("jogadores simultâneos no Steam caindo de 48 em fevereiro de 2025 para 26 em abril de 2026"
como indicador de uma plataforma web). Nenhum foi citado. O mapa ficou sem dado de escala para
a narrativa conversacional — e é melhor assim do que com dado inventado. Registro o incômodo:
a própria pesquisa sobre inundação de conteúdo gerado foi prejudicada por inundação de conteúdo
gerado.

**Erro 4 — causa solta na primeira derivação.** O efeito "surge middleware narrativo com bíblia
de mundo legível por máquina" foi derivado inicialmente da disrupção 3 (proveniência), como se
fosse resposta a exigência regulatória. O teste de remoção da raiz derrubou: tire a obrigação de
declarar e o middleware continua aparecendo, porque a causa é a falha de consistência do gerador
[4][5], não a regulação. Religado à disrupção 1 como e3.1.

**Erro 5 — afirmação encontrada em busca e não confirmada na fonte.** Um resultado de busca
atribuía à Games Workshop um posicionamento de marca "Human Made" como sinal de produto de luxo,
em janeiro de 2026, e situava a afirmação num artigo específico. Abri o artigo — as dez previsões
de Tommy Thompson, de 14 de janeiro de 2026 [3] — e a afirmação não está lá. O texto traz os
números do Steam e as previsões de adoção, e não menciona "Human Made". A alegação foi removida
do mapa, embora ela sustentasse bem o efeito e6.1. Efeito mantido por outros fundamentos, mais
fracos.

**Erro 6 — fontes que não abriram e não foram citadas.** Seis tentativas de leitura falharam e
nada delas entrou no documento: o artigo da NSF sobre storytelling interativo (PDF devolvido em
binário ilegível), a página do acordo no site do SAG-AFTRA (HTTP 403), o manifesto no site do
Dublagem Viva (certificado TLS inválido), a reportagem da CNN sobre o Akutagawa (HTTP 451), a
matéria do IT Forum (HTTP 403) e a da Variety (redirecionamento não seguido). Três delas foram
substituídas por fonte equivalente aberta de fato [9][11][12]; as outras três viraram ausência
declarada. A lista completa está na seção 12.

## 9. Três cenários para 2031

### 9.1. Provável

A geração de ponta a ponta virou etapa padrão de pré-produção e não virou a obra. Todo estúdio
de narrativa, do indie ao grande, passou a jogar dez variantes de uma premissa antes de escolher
uma; o que se publicou continuou passando por gente. A declaração de proveniência estabilizou em
três faixas de fato — sem IA, IA de apoio, IA voltada ao público — e as lojas filtraram por elas
como filtram por gênero. O catálogo triplicou e a atenção não; a descoberta migrou de volta para
curadoria com nome, e os festivais pequenos ganharam peso desproporcional ao seu público. O
ofício de roteirista de jogo não sumiu: encolheu na escrita de volume e cresceu na escrita de
restrição, e os currículos de escrita para mídia interativa acompanharam com cinco anos de
atraso. A localização oficial deixou de ser a porta de entrada de um mercado e virou selo:
quem quis ler a obra japonesa antes leu com a camada do próprio dispositivo, e quem quis a
versão canônica esperou. A pergunta sobre quem é o autor nunca foi respondida em tese; foi
respondida contrato a contrato, com consentimento por uso e tarifa por geração em tempo real.

### 9.2. Desejável

O que aconteceu de melhor foi o middleware narrativo ter sido aberto. A bíblia de mundo legível
por máquina virou formato público, e com ela a história ficou portátil: a mesma obra pôde ser
lida como texto, jogada como novela visual e ouvida como áudio, sem ser refeita três vezes e sem
ficar presa a uma plataforma. Isso deslocou a competição da execução para a concepção de mundo —
que é o que autores fazem melhor que geradores. A declaração de proveniência funcionou porque
foi granular em vez de binária: em vez de um carimbo "tem IA", o catálogo passou a dizer o que
foi gerado, e o público formou gosto em cima disso em vez de pânico. A camada de tradução do
leitor foi absorvida legalmente em vez de combatida: obras entraram em mercados que jamais
teriam pago uma localização, e os tradutores que sobraram foram pagos para a parte que a máquina
não faz — julgar o que uma piada significa aqui. O Brasil foi beneficiado por ser cauda longa:
produção nacional em português circulou fora sem contrato de localização, e pela primeira vez o
custo de exportar narrativa não foi a tradução.

### 9.3. Indesejável

O catálogo aberto entrou em colapso de sinal. A produção cresceu mais rápido que qualquer
mecanismo de filtro, e as lojas responderam com o instrumento que tinham: mais algoritmo. A
descoberta virou pagamento, e o custo de aparecer subiu o suficiente para que a queda do custo
de produzir não beneficiasse ninguém que não pudesse pagar por atenção. A declaração de
proveniência, sendo autodeclarada e valendo dinheiro, foi fraudada rotineiramente; a auditoria
apareceu como serviço pago e virou mais uma barreira de entrada para quem é pequeno — o selo de
"feito por humano" custou caro justamente para quem de fato fazia à mão. A tradução do lado do
leitor foi tratada como pirataria, a cobrança se deslocou para o distribuidor da camada, e o
efeito prático foi o oposto do esperado: as camadas abertas foram removidas das lojas e
sobreviveram só as fechadas, dentro do sistema operacional de duas empresas. As obras não
localizadas continuaram inacessíveis, agora por decisão de plataforma e não por custo. E a
carreira de intérprete se partiu: quem licenciou o timbre cedo recebeu uma vez e foi substituído
pela própria voz.

## 10. O experimento

**Teste cego de proveniência em narrativa interativa.** É construível esta semana, com material
existente e sem orçamento.

**O que se monta.** Seis trechos jogáveis de novela visual, de 5 a 8 minutos cada, sobre a mesma
premissa curta. Três feitos à mão — Ren'Py ou Twine, arte e texto de autores humanos, inclusive
obras já publicadas com permissão. Três gerados de ponta a ponta a partir de uma frase, numa
ferramenta do tipo `mangobox.ai` [1], sem edição posterior. Interface idêntica nos seis, sem
créditos, sem marca d'água, ordem aleatória por participante.

**O que se mede, com pelo menos 20 participantes.** Primeiro, **acerto de palpite**: o
participante joga, diz se acha que aquilo foi feito por gente ou por máquina, e diz por quê.
A hipótese nula é o acaso (50%); o resultado de Hwang et al. para texto literário é que os
leitores não distinguem [10], e o experimento testa se isso se mantém quando a obra é
multimodal e interativa — onde a falha de consistência é mais fácil de flagrar [4]. Segundo,
**disposição a pagar**: quanto o participante pagaria por uma obra completa naquele estilo,
perguntado antes de qualquer revelação. Terceiro, e é o que interessa de verdade: **o efeito da
declaração**. Metade dos participantes recebe a proveniência declarada antes de jogar; a outra
metade, depois. Se a nota e a disposição a pagar mudarem conforme o momento da revelação, o que
se mediu não foi a obra — foi o selo. E é exatamente esse número que decide se e6.1 (faixa de
preço por proveniência) tem base ou é projeção.

**Por que este experimento e não outro.** Ele testa a suposição de que todo o mapa depende: a de
que a proveniência importa para quem consome. Se o público não distingue e não se importa, a
disrupção 3 é regulatória e nada mais — e metade deste documento descreve um mercado que existe
só para reguladores e para profissionais.

**Variante barata, de uma tarde.** Instalar `LunaTranslator` [6] sobre uma novela visual japonesa
sem tradução oficial e pedir a três pessoas que não leem japonês que joguem meia hora,
registrando onde a compreensão quebra e se elas jogariam mais. Mede o mesmo eixo pelo outro lado:
não o que a máquina produz, mas o que ela torna acessível. Dá um número de qualidade percebida
para e4, que hoje está apoiado só em contagem de estrelas de repositório.

## 11. Fontes

Todas as fontes abaixo foram abertas e lidas nesta rodada. As tentativas que falharam estão na
seção 12 e não foram citadas em nenhum ponto do documento.

1. `https://www.mangobox.ai/about` — sustenta a existência comercial da geração de ponta a ponta
   de novela visual a partir de descrição em texto (seção 3, disrupção 1, experimento).
   **Confiabilidade: baixa.** É material do próprio fornecedor e, lido na íntegra, não declara
   limites técnicos, preço nem propriedade da saída. Serve como prova de existência do produto,
   não como prova de capacidade.

2. `https://www.llamagriffin.com/Data/SteamNextFestJune2026/part-2.html` — 1.163 de 4.382 demos
   com declaração de IA (26,5%) no Next Fest de junho de 2026, contra 21,2% em fevereiro de 2026;
   40% dos lançamentos da semana de 19/06/2026. **Confiabilidade: média-alta.** Metodologia
   declarada, dados de terceiro (GameDiscoverCo), e o próprio relatório separa as duas populações
   (demos e evento cheio) em vez de misturá-las — sinal de cuidado. É análise independente, não
   revisada por pares.

3. `https://www.aiandgames.com/p/10-predictions-for-ai-in-games-for` — Tommy Thompson, 14/01/2026:
   4.311 jogos com declaração de IA em 2025, de 20.004 lançamentos no Steam (22%), o dobro de
   2024. **Confiabilidade: média para os números, baixa para as previsões.** Autor com trajetória
   reconhecida em IA para jogos; os números são verificáveis contra a base do Steam, as previsões
   são opinião declarada como tal. Foi a fonte que desmentiu a alegação do erro 5.

4. `https://aistory2026.github.io/` — workshop AISTORY do CVPR 2026 (04/06/2026, Denver): lista de
   problemas em aberto em narrativa gerativa — consistência de personagem, coerência temporal,
   alinhamento de tom, interatividade em tempo real. **Confiabilidade: alta para o que sustenta.**
   É a agenda declarada de uma comunidade científica numa conferência de primeira linha; prova
   que o problema está aberto, não que ele seja insolúvel.

5. `https://arxiv.org/abs/2503.04844` — Hank Gerba, *Narrative Context Protocol*, arXiv, 05/03/2025
   (revisão em 28/07/2025): padrão aberto de narrativa, "Storyform", interoperabilidade e
   restrição de geração. **Confiabilidade: média-baixa.** Preprint sem revisão por pares, com
   validação de um autor, um experimento de um ano, uma novela. Citado como sinal de direção e
   sinal fraco, não como tecnologia estabelecida.

6. `https://github.com/HIllya51/LunaTranslator` — tradutor de novela visual, GPLv3, 13,1 mil
   estrelas, mais de 4.900 commits; extração por hook de memória e OCR, incluindo hook de
   emulador de NS/PSP/PSV/PS2, motores de tradução variados incluindo LLM e offline, TTS.
   **Confiabilidade: alta para o que existe, nenhuma para adoção.** Contagem de estrelas mede
   visibilidade entre desenvolvedores, não número de leitores — é a maior fragilidade empírica
   da disrupção 2.

7. `https://ifcomp.org/rules/` — regra nova de 2026: "todo o conteúdo voltado ao jogador deve ser
   inteiramente criado por humanos, incluindo arte de capa, prosa e todos os assets do jogo";
   permitido usar IA para "edição, depuração, apoio de acessibilidade, pesquisa, assistência
   limitada de tradução ou código". **Confiabilidade: alta.** Fonte primária, regulamento vigente
   de uma instituição com 32 edições. É a formulação mais precisa que encontrei da linha entre
   conteúdo e assistência.

8. `https://digital-strategy.ec.europa.eu/en/policies/guidelines-ai-transparency-obligations` —
   diretrizes do Artigo 50 do AI Act, aplicáveis a partir de 02/08/2026; obrigação de "adicionar
   marcas legíveis por máquina que permitam a detecção de conteúdo gerado ou manipulado por IA".
   **Confiabilidade: alta.** Fonte primária, Comissão Europeia. Diz o que é exigido; não diz nada
   sobre como será fiscalizado, que é onde e6.1.1 vive.

9. `https://www.smithsonianmag.com/smart-news/this-award-winning-japanese-novel-was-written-partly-by-chatgpt-180983641/`
   — Rie Kudan, prêmio Akutagawa, janeiro de 2024, *Tokyo-to Dojo-to*; cerca de 5% do texto vindo
   direto do ChatGPT, declarado por ela; comitê havia chamado a obra de "praticamente impecável".
   **Confiabilidade: média-alta.** Jornalismo de veículo com processo editorial, relatando fato
   público e declaração em discurso. Foi consultado como substituto da CNN (erro 6).

10. `https://arxiv.org/abs/2411.13032` — Hwang, Liao, Blodgett, Olteanu e Trischler, *"It was 80%
    me, 20% AI": Seeking Authenticity in Co-Writing with Large Language Models*, 20/11/2024:
    19 escritores profissionais em entrevista semiestruturada e 30 leitores assíduos em survey;
    leitores não distinguiram o texto coescrito, escritores localizaram a autenticidade no
    processo e não no texto. **Confiabilidade: média-alta para o achado, com ressalva de escala.**
    Amostra pequena e qualitativa; é o contra-argumento mais forte ao mapa inteiro e por isso foi
    usado contra ele, na seção 7, e não a favor.

11. `https://www.dglaw.com/sag-aftras-new-video-game-agreement/` — Acordo SAG-AFTRA de Mídia
    Interativa de 2025, ratificado no verão de 2025 (alerta de 06/11/2025): consentimento escrito
    prévio para criação e uso de réplica digital; obrigação de informar, ao pedir consentimento,
    se haverá geração em tempo real; tarifas mínimas distintas para réplica digital e para geração
    em tempo real. **Confiabilidade: média-alta.** Análise de escritório de advocacia sobre
    documento contratual — competente no recorte jurídico, interessada por natureza. Consultada
    porque a página do próprio SAG-AFTRA recusou a leitura (erro 6). Não confirma a cláusula de
    suspensão de consentimento em greve, que por isso não é afirmada neste documento.

12. `https://ids.org.br/noticia/dubladores-brasileiros-criam-movimento-dublagem-viva-para-pedir-a-regulamentacao-do-uso-da-ia/`
    — movimento Dublagem Viva, criado por dubladores brasileiros em novembro de 2023, dentro da
    campanha internacional "Real Voices" da United Voice Artists; pede que a IA não seja usada
    para reproduzir vozes de atores em português e que o uso respeite a Lei 9.610/98 e os
    contratos de trabalho. **Confiabilidade: média.** Veículo institucional relatando pauta de um
    movimento; descreve a demanda com precisão e não traz número de adesão nem efeito medido.
    É a única âncora brasileira do documento, e é fraca — ver a nota sobre o Brasil na seção 12.

## 12. Anexo — o levantamento bruto

### 12.1. Fase 1 — entrevista de enquadramento

A skill exige entrevista antes de produzir. Nesta rodada não havia interlocutor disponível, e as
respostas foram fornecidas no enunciado da execução. Registro como foram dadas, porque o mapa
inteiro depende delas e uma sessão futura precisa saber o que foi escolhido e o que foi assumido.

| # | Pergunta | Resposta |
|---|---|---|
| 1 | Tema exato | Narrativa gerativa e coautoria (tema 8 de 19; família "Simulação e mundos") |
| 2 | Recorte | Assumido: tecnologia + prática social + mercado. **Não foi respondido explicitamente** — assumi o recorte mais largo porque a descrição do tema mistura os três |
| 3 | Horizonte | 2031 |
| 4 | Para quem | Quem projeta mídia e interação |
| 5 | Geografia | Global, com nota sobre o Brasil |
| 6 | Já descartado | O que já é comum em produto de massa (a régua da disciplina). Nenhuma outra exclusão |
| 7 | Viés desejado | Neutro |
| 8 | O que o solicitante já sabe | Nenhuma disrupção suspeitada — pedido explícito de descobrir. Ideias óbvias a excluir: as que serviriam para qualquer tema |

Condição de falseamento declarada antes da produção: o mapa cai se a adoção já tiver passado da
maioria inicial (Rogers), ou se a tecnologia não romper nada e apenas melhorar o que existe.
Ambas foram testadas na seção 7 e nenhuma das duas foi descartada com folga.

### 12.2. Fase 2 — triagem de maturidade completa

| Tecnologia | Classificação | Razão | Destino |
|---|---|---|---|
| Ren'Py, Monogatari, Twine | **Madura** | Ren'Py desde 2004; padrão de fato da novela visual; não rompe nada hoje | Seção 3, contexto |
| Inform 7 | **Madura** | Ficção interativa parser, décadas de uso, comunidade estável | Seção 3 |
| YarnSpinner, Dialogic, Arrow | **Maduras** | Diálogo ramificado é ferramenta resolvida; o problema que resolvem não mudou | Seção 3 |
| `chronicler`, `Fantasy-Map-Generator` | **Maduras** | Worldbuilding offline e geração de mapa; nicho estável, sem ruptura de cadeia | Seção 3 |
| Geração de imagem de personagem | **Madura** | Commodity desde 2023; presente na maioria dos fluxos; sozinha não rompe narrativa | Seção 3 |
| Síntese de fala (ChatTTS, Bark e congêneres) | **Madura** | Mais de 3 anos como commodity; qualidade suficiente para diálogo cotidiano | Seção 3; alimenta e5 e e7 |
| LLM como assistente de escrita | **Madura como tecnologia, emergente como prática declarada** | A ferramenta é commodity; a *declaração* do uso é que é nova | Alimenta a disrupção 3 |
| Narrativa infinita conversacional (AI Dungeon, Character.AI, NovelAI) | **Madura** | AI Dungeon é de 2019; categoria consolidada há 5-7 anos; não rompeu cadeia de valor de ninguém | **Descartada como raiz** — seção 4.4 |
| Script-to-video (Pika, Luma e congêneres) | **Emergente** | Viável e comercial, mas ainda não é pipeline de obra narrativa longa; consistência é o limite [4] | Alimenta e3; objeto principal do tema 12 |
| `AIComicBuilder` (roteiro → quadrinho animado) | **Emergente** | Demonstra o pipeline completo; sem escala nem produto de massa | Alimenta a disrupção 1 |
| Geração de ponta a ponta de novela visual (`mangobox.ai`) | **Disruptiva** | Rompe a cadeia autor-artista-programador; efeito é ruptura de quem decide o que existe | **Disrupção-raiz 1** |
| Tradução sobreposta no dispositivo (`LunaTranslator`, `Textractor`) | **Componentes maduros, efeito disruptivo** | OCR, hook e MT são maduros; a *prática* de consumir obra não localizada rompe a localização como condição de acesso | **Disrupção-raiz 2** |
| Protocolos de interoperabilidade narrativa (NCP) | **Emergente, fraca** | Preprint, validação de um autor [5] | Sinal fraco, seção 6; alimenta e3.1 |
| Declaração e marcação de proveniência (itch.io, Steam, Artigo 50) | **Disruptiva** | Rompe a indiferença do catálogo quanto a como a obra foi feita; três causas independentes | **Disrupção-raiz 3** |
| Adaptação narrativa por leitor | **Emergente, não comprovada** | Tecnicamente possível há anos, sem produto de escala; a ausência é o dado | Sinal fraco, seção 6 |

Regra de ouro aplicada: tecnologia presente em mais de 50% dos dispositivos ou serviços do
público-alvo é madura; tema de palestra há mais de 5 anos sem ter mudado nada de fundamental é
maduro. A narrativa infinita conversacional falha nos dois critérios de uma vez.

### 12.3. Fase 5 — rodada adversarial, item a item

Quatro testes destrutivos aplicados a todos os efeitos derivados: extrapolação linear, adoção
acelerada, causa solta (remover a raiz e ver se o efeito sobrevive) e viés do solicitante.

**Descartados — 6 efeitos**

| Efeito derivado | Teste que o derrubou | Por quê |
|---|---|---|
| "O mercado de escritores de jogo desaparece até 2030" | Adoção acelerada + precedente histórico | Nenhuma profissão de escrita em mídia desapareceu em 5 anos por automação. Reescrito como e1.2 (reparte, não desaparece) |
| "A localização como indústria deixa de existir" | Extrapolação linear (absoluto) | Substituição total não tem precedente. Reescrito como e4.2 + e4.1.1 (reposicionamento) |
| "Plataformas de streaming oferecem modo narrativo adaptativo por espectador até 2029" | Causa solta | Remova a geração narrativa e o efeito ainda acontece, vindo de recomendação + geração de vídeo. Deriva do tema 12, não daqui |
| "Duas pessoas não poderão mais discutir o mesmo livro" | Adoção acelerada + evidência contrária | Nenhum produto de escala faz isso; e leitores sequer distinguem texto coescrito de texto humano [10]. Rebaixado a sinal fraco (seção 6) |
| "A IA substitui o game designer narrativo" | Viés + vazio | Não nomeia mecanismo. É o tipo de efeito que serviria para qualquer tema — excluído por pedido explícito do enquadramento |
| "Um best-seller coautorado com IA ganha um prêmio literário" (como wildcard) | Maturidade | Aconteceu em janeiro de 2024 [9]. Movido para a seção 3 como evidência, e para a seção 6 invertido |

**Religados — 1 efeito**

"Surge middleware narrativo com bíblia de mundo legível por máquina": derivado inicialmente da
disrupção 3, religado à disrupção 1 como e3.1. Teste de remoção de raiz: sem obrigação de
declarar, o middleware continua aparecendo, porque a causa é a falha de consistência [4][5].

**Reescritos — 3 efeitos**

e1.2 (de "desaparece" para "se reparte"), e4.2 (de "a indústria acaba" para "migra para revisão
com queda de tarifa"), e4.1.1 (de "a localização morre" para "vira selo de canon").

**Mantidos com ressalva — 4 efeitos**

- e2.1.1 (poder de decisão migra para quem controla o funil de teste): mecanismo plausível, zero
  casos observados. Marcado `review`.
- e5.1.1 (cobrança se desloca para o distribuidor da camada): especulativo; depende de uma
  decisão judicial que não existe. Marcado `review`.
- e6.1.1 (auditoria de proveniência e fraude de declaração): a analogia com selo de origem é
  forte, mas é analogia. Marcado `review`.
- e4.2 (queda de tarifa de tradução): sobreviveu ao teste de causa solta por pouco — a pressão
  sobre tarifa via pós-edição de máquina é anterior à IA generativa. Mantido porque a magnitude
  muda, declarado como extrapolação parcial na seção 7. Marcado `suspect`.

**Resumo da rodada adversarial:** 6 descartados, 3 reescritos, 1 religado a outra raiz, 4
mantidos com ressalva. Dos 27 efeitos que restaram na roda, 4 (15%) carregam marca de suspeita.
Nenhuma raiz foi rodada de novo — a única candidata a rerrodada seria a disrupção 3, pelo motivo
declarado na seção 7 (descreve o presente), mas ela foi mantida porque seus efeitos de 2ª e 3ª
ordem ainda não ocorreram.

### 12.4. Buscas que falharam

Seis leituras tentadas e não obtidas. Nenhuma foi citada no documento; três foram substituídas.

| URL | Falha | Desfecho |
|---|---|---|
| `https://par.nsf.gov/servlets/purl/10652689` | PDF devolvido em binário ilegível | Abandonada. Era um artigo da NSF sobre IA generativa e storytelling interativo; nenhuma alegação dele entrou |
| `https://www.sagaftra.org/sag-aftra-members-approve-2025-video-game-agreement` | HTTP 403 | Substituída pela fonte [11]. Consequência: a cláusula de suspensão de consentimento em greve, que apareceu em resultados de busca, **não é afirmada** neste documento |
| `https://www.sagaftra.org/contracts-industry-resources/interactive/2025-interactive-media-video-game-agreement` | HTTP 403 | Idem |
| `https://dublagemviva.com.br/index.php/manifesto/` | Certificado TLS não corresponde ao domínio (`*.kinghost.net`) | Substituída pela fonte [12]. O manifesto em si não foi lido |
| `https://www.cnn.com/2024/01/19/style/rie-kudan-akutagawa-prize-chatgpt` | HTTP 451 (indisponível por motivos legais) | Substituída pela fonte [9] |
| `https://itforum.com.br/noticias/movimento-dublagem-viva-ia/` | HTTP 403 | Substituída pela fonte [12] |
| `https://variety.com/2025/gaming/news/...sag-aftra-1236451291/` | Redirecionamento entre hosts não seguido | Não substituída; os dados de ratificação vieram de [11] |

### 12.5. Alegações encontradas e não usadas

- **Mercado de ficção interativa: US$ 3,8 bi (2024) → US$ 7,8 bi (2032), 12% CAGR.** Sem
  consultoria nomeada, sem relatório identificável. Removida (erro 2).
- **Games Workshop e o posicionamento "Human Made" como sinal de luxo, janeiro de 2026.** Abri o
  artigo apontado como fonte [3] e a alegação não está lá. Removida (erro 5).
- **Números de usuários de AI Dungeon e Character.AI.** Toda a primeira página de resultados era
  conteúdo gerado para ranqueamento, com estatística incoerente. Nada usado (erro 3).
- **"Uso de tradução por IA cresceu 533% no último ano."** Apareceu em resultado de busca sem
  base metodológica nem fonte primária identificável. Não usada.
- **"Salto de 77% em lançamentos contra 14% de aumento em jogos bem-sucedidos, dez/2025–fev/2026."**
  Sustentaria e1.1 diretamente, mas veio de resultado de busca cuja página não foi aberta.
  Não citada; e1.1 ficou apoiado nos números do Steam [2][3] e na inferência de razão entre
  catálogo e atenção, que é mais fraca. **É a lacuna de evidência mais relevante do mapa.**
- **`Metaphor: ReFantazio` criticado por tradução artificial.** Mencionado na seção 4.2 como
  exemplo ilustrativo; veio de resultado de busca e a página não foi aberta. Não sustenta nenhum
  efeito da roda, apenas ilustra o que ainda falta.

### 12.6. Nota sobre o recorte brasileiro

O recorte pedia "global, com uma nota sobre o Brasil", e a nota que consegui produzir é fraca —
registro isso em vez de disfarçar. Há duas âncoras: o movimento Dublagem Viva [12], que é
demanda organizada e não efeito medido, e o PL 2338/2023, que segue na Câmara depois de aprovado
no Senado em dezembro de 2024 — e cuja tramitação não abri em fonte primária nesta rodada, razão
pela qual ele aparece no corpo do texto apenas como menção de contexto e **não está na lista de
fontes**.

O que faltou e deveria estar: número de jogos brasileiros lançados com declaração de IA, dado de
emprego em localização e dublagem no país, e qualquer medição de consumo de obra não localizada
no Brasil. Nenhum dos três foi encontrado em fonte aberta nesta rodada. A hipótese que o mapa
levanta sem conseguir testar — a de que o Brasil é beneficiado pela disrupção 2 por ser cauda
longa exportadora, e prejudicado por ser mercado importador de dublagem — aparece no cenário
desejável (9.2) e no indesejável (9.3), e **não está apoiada em evidência brasileira**. Quem
retomar este mapa deve começar por aí.

### 12.7. Caminhos abandonados

- **Mapear a forma narrativa** (gêneros que só existem porque são gerados, estruturas novas).
  Abandonado por falta de evidência: não achei nenhum gênero consolidado que dependa de geração.
  É a maior omissão declarada do mapa, na seção 7.
- **Seguir o eixo do personagem autônomo** — abandonado por ser o tema 7, e não este.
- **Tratar a qualidade da narrativa gerada como variável** — abandonado porque toda medição
  disponível é de preferência declarada em amostra pequena, e o único achado sólido [10] diz que
  leitores não distinguem. Sem métrica, viraria opinião com aparência de dado.
