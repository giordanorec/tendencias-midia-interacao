---
tema: Narrativa gerativa e coautoria
slug: narrativa-gerativa-e-coautoria
autor_login: grec
zona_de_interesse: Simulação e mundos
data: 2026-09-12
horizonte: 2046
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 13
efeitos_ordem_2: 25
efeitos_ordem_3: 25
tecnologias_citadas: [MangoBox, AIComicBuilder, LunaTranslator, Ren'Py, Twine, Ink, Inform 7, YarnSpinner, Narrative Context Protocol, NCP-Bench, Storyform, Seedance, Kling, Veo, Gemini Imagen, GPT-5.2, Steam AI disclosure, itch.io Generative AI disclosure, Amazon KDP AI disclosure, IFComp]
fontes: 19
confianca: media
experimento: A mesma história, duas pessoas — teste de quebra do referente comum em obra instanciada
skill_usada: futurizacao-giordano
publico_ok: false
---

## 1. Resumo

O custo de **produzir** uma obra narrativa está caindo para perto de zero, e três rupturas
separadas saem daí. A primeira é a geração do artefato inteiro a partir de uma intenção curta:
uma frase vira elenco, arte, diálogo e um jogo que se abre. A segunda é a obra que se remonta a
cada leitura — deixa de haver exemplar, passa a haver instância. A terceira é a tradução
sobreposta no lado do leitor, que faz a obra existir em línguas que ninguém autorizou. Os
números de hoje já mostram a primeira acontecendo: os lançamentos com declaração de IA saltaram
de 13 para cerca de 530 por mês na Steam e respondem por 60 a 90% de todo o crescimento da
loja, enquanto ficam com 10 a 27% das vendas. O gargalo do ofício migrou de fazer para ser
encontrado. Mas a segunda ruptura esbarra num teto medido: o melhor modelo avaliado pelo
NCP-Bench mantém os compromissos de uma história em 42% dos casos depois de 20 turnos. Este
mapa aposta que até 2046 o que muda de verdade não é quem escreve — é o que conta como obra,
quem consegue prová-la humana, e se ainda existe um texto comum sobre o qual duas pessoas
possam discordar.

## 2. O tema

Narrativa gerativa e coautoria é o objeto **história como coisa gerada** — e o que essa geração
faz com a ideia de autoria. Não é o personagem que age dentro de um mundo (tema 7), não é o
vídeo como mídia (tema 12), não é design procedural de regras (tema 14). É o artefato narrativo
inteiro — prosa, cena, elenco, ramificação, tradução — saindo de um pipeline em vez de uma
equipe.

Ele encosta em mídia e interação em três pontos. O primeiro é de produção: as ferramentas de
narrativa interativa (Ren'Py, Twine, Ink, Inform, YarnSpinner) são ferramentas de **autoria
manual** com décadas de maturidade, e viraram alvo natural de substituição por geração. O
segundo é de interação: a história que se adapta a quem lê muda a relação entre obra e público
de "recepção" para "instanciação". O terceiro é de circulação: a camada de tradução em tempo
real desacopla a obra da língua em que foi publicada.

Merece mapa de futuro, e não levantamento de estado da arte, por uma razão específica: o
levantamento responde "o que existe", e aqui o que está em jogo não é a capacidade técnica — é
o que acontece com as **instituições construídas em cima da escassez de obras**. Crítica,
prêmio, cânone, direito autoral, localização, spoiler, biblioteca e currículo pressupõem todos
que uma obra é cara de fazer, fixa no tempo, e a mesma para todo mundo. As três premissas estão
caindo ao mesmo tempo, por mecanismos diferentes. Um levantamento de estado da arte não vê isso
porque não é uma questão de arte nem de estado.

Uma observação de método: com horizonte de 2046 — vinte anos — este mapa é estruturalmente
menos confiável que um mapa de cinco anos, e a seção 7 trata disso como o problema principal,
não como ressalva.

## 3. Onde isso está hoje

### 3.1 O que já existe e funciona

**Geração da obra inteira a partir de prompt curto.** O MangoBox (`mangobox.ai`, aberto em
12/09/2026) recebe uma frase ou um esboço e devolve retratos de personagem, arte de cenário,
personalidades, cena de abertura e um jogo de escolhas, com até cinco personagens; o modo pago
custa US$ 9/mês e inclui 20 gerações de vídeo. O AIComicBuilder (1,9 mil estrelas, 314 forks,
Apache-2.0) faz o mesmo caminho para quadrinho animado: recebe TXT/DOCX/PDF, extrai
personagens, segmenta em episódios, monta folha de referência de personagem em quatro vistas,
decupa em plano, gera quadros-chave e interpola vídeo, plugando em OpenAI, Gemini, DALL·E,
Imagen, Kling, Seedance e Veo. Os dois têm a mesma forma: **script → storyboard → identidade
visual consistente → artefato assistível ou jogável**, sem equipe.

**Tradução sobreposta no lado do leitor.** O LunaTranslator (13,1 mil estrelas, 1,1 mil forks,
4.945 commits, GPLv3) extrai texto de jogo por *hook* de memória ou OCR embutido, traduz com o
motor que o usuário escolher — inclusive LLM local — e devolve sobreposto. Cobre emuladores de
NS, PSP, PSVita e PS2. Obra japonesa lida em português sem que ninguém tenha traduzido.

**Declaração de IA como infraestrutura de loja.** A Valve exige declaração desde janeiro de
2024; o itch.io implantou o campo "Generative AI disclosure" em 20/11/2024, com quatro
categorias (Graphics, Sound, Text & Dialog, Code), **obrigatório para assets** e opcional para
jogos, e desindexação de asset não declarado; a Amazon exige declaração no KDP desde setembro
de 2023 e limitou o volume de publicação por dia/semana no mesmo mês.

**O número que descreve a adoção.** O censo de Sulka Haro sobre ~53.600 lançamentos da Steam
entre meados de 2023 e meados de 2026: a fatia de lançamentos com declaração de IA foi de 10,9%
em 2024, 19,9% em 2025 e 30,8% em 2026; os lançamentos declarados passaram de ~13 para ~530 por
mês, enquanto os não declarados foram de ~1.030 para ~1.320 — ou seja, **60 a 90% de todo o
crescimento da loja é de jogos com IA declarada**. A fatia estimada de vendas foi de 3–6% em
2024 para 10–27% em 2025–2026. A projeção do próprio estudo é de cruzar 50% dos lançamentos em
2027–2028. No Steam Next Fest de junho de 2026, 1.163 de 4.382 demos declararam IA (26,5%), e
cerca de 1.700 de 8.682 inscrições no evento inteiro (20%); nas declarações, ~60% são de arte.

**A regra que fecha a porta.** Em 31/01/2026 o IFComp — a competição de referência da ficção
interativa, 32ª edição, 71 inscrições — publicou a regra: *"All entries' player-facing content
must be entirely created by humans, including cover art, prose, and all in-game assets"*, com
uso de IA permitido só em desenvolvimento (edição, depuração, acessibilidade, tradução
limitada, código), e proibição de a obra exigir que o júri interaja com serviço generativo
durante a partida. A regra foi motivada pela pesquisa pós-competição de 2025.

**A posição jurídica.** O U.S. Copyright Office publicou a Parte 2 do relatório *Copyright and
Artificial Intelligence* em 29/01/2025: autoria humana é requisito, obra inteiramente gerada não
é registrável, e **prompt sozinho — por mais detalhado — não estabelece autoria**; em obra
mista, só a contribuição humana é protegida, e a parte gerada tem de ser identificada e
renunciada no registro.

### 3.2 O que existe e não funciona

**Coerência de longo prazo.** O NCP-Bench (aceito no ICML 2026, submetido em 08/08/2026, 100
ambientes narrativos derivados de sinopses de filme) mede a preservação de compromissos
narrativos contra intervenção livre do jogador: o melhor modelo testado, GPT-5.2, mantém 42% de
sobrevivência depois de 20 turnos, e a taxa de conflito factual vai de 40% a 68% entre modelos.
A conclusão dos autores é direta: qualidade linguística alta não garante preservação de
compromisso. É o teto técnico da narrativa adaptativa, medido.

**Padronização da estrutura narrativa.** O Narrative Context Protocol (Hank Gerba, arXiv
2503.04844, 03/2025, revisado 07/2025) propõe um padrão aberto — o *Storyform* — para tornar a
estrutura de uma história portável entre sistemas e servir de balizamento a geradores. Existe,
foi testado num estudo de caso de um ano com uma autora adaptando a própria novela, e não foi
adotado por nenhuma engine comercial.

**Narrativa multimodal coerente.** O workshop AISTORY do CVPR 2026 (04/06/2026, Denver;
organizadores de Keio, Tóquio, Rochester; palestrantes da NVIDIA e Tencent) existe exatamente
porque os modelos geram visual impressionante e narrativa incoerente — consistência de
personagem, sincronia de tom, progressão temporal continuam problemas abertos.

**Descoberta.** A contrapartida do volume: em 2026 a crítica ao Next Fest foi de que o evento
estava tomado de obra gerada, e o desvio entre 30,8% dos lançamentos e 10–27% das vendas diz que
a oferta cresceu sem que a demanda a acompanhasse.

### 3.3 Quem constrói

Quatro grupos, com incentivos diferentes. **Produto fechado de geração de obra**: MangoBox e
similares, assinatura mensal, público amador. **Aberto e comunitário**: AIComicBuilder,
LunaTranslator, e a linhagem de ferramentas de autoria manual (Ren'Py, Twine, Ink, Inform,
YarnSpinner) que é ao mesmo tempo base e alvo. **Plataformas de distribuição**: Valve, itch.io e
Amazon, que não geram nada e definem tudo, porque escrevem as regras de declaração e indexação.
**Instituições de legitimação**: IFComp, Copyright Office, prêmios literários, e — do lado do
trabalho — Dublar, o movimento Dublagem Viva e a Authors Guild.

### 3.4 Nota sobre o Brasil

Dois fatos concretos. O movimento **Dublagem Viva** (Associação dos Dubladores do Brasil,
Dublagem Viva e o DigiLabour/INCT-DSI) começou em novembro de 2023 dentro do *Real Voices*, da
United Voice Artists, que reúne entidades de mais de 20 países e reunia quase 100 mil
assinaturas; em 29/06/2026, Dia do Dublador, a campanha com Cecília Lemes e Carlos Campanile
chegou a 200 mil visualizações em 24 horas, articulada com quatro associações de dublagem de
outros países. A pauta é explícita: que a IA **não** seja usada para reproduzir vozes de atores
de outros idiomas em português.

O **PL 2338/2023** foi aprovado no Senado em 10/12/2024 e continua na Câmara. O texto do Senado
prevê que o titular possa proibir o uso de conteúdo protegido e tenha **direito a remuneração**
quando a obra for usada no desenvolvimento de sistema comercial de IA. Em setembro de 2026 não
virou lei. Isto é a classe de referência brasileira para qualquer prazo regulatório deste mapa:
**mais de três anos entre projeto e nada**.

## 4. As disrupções-raiz

### 4.1 Raiz 1 — A obra narrativa inteira gerada a partir de uma intenção curta

**O que rompe.** Rompe a cadeia de produção narrativa como divisão de trabalho. Até aqui, contar
uma história em mídia interativa exigia compor um coletivo — roteirista, artista, programador,
localizador, revisor — porque nenhum deles conseguia fazer o resto. A geração do artefato
inteiro dissolve a necessidade do coletivo, e com ela dissolve o que o coletivo sustentava: o
custo fixo que fazia da publicação um filtro. Não é "fazer o mesmo mais barato": é publicar
deixar de ser uma decisão econômica.

**Por que agora, e não há cinco anos.** Três pré-condições recentes. Modelos multimodais fecharam
o ciclo texto → imagem → som → vídeo num só pipeline chamável por API — o AIComicBuilder pluga
seis provedores diferentes na mesma esteira. A consistência de personagem entre quadros virou
tratável por *image-to-image* com folha de referência, que é o que separa "imagens bonitas" de
"uma obra". E o custo de inferência caiu ao ponto de uma assinatura de US$ 9 cobrir geração de
cena sob demanda. Em 2021 nenhuma das três valia.

**Onde está na difusão.** `produto de nicho → adoção precoce`. Cuidado com o número: os 30,8% da
Steam medem **asset gerado dentro de obra feita por gente**, não obra inteira gerada — 60% das
declarações são de arte. A obra inteira a partir de uma frase (MangoBox, AIComicBuilder) é
nicho, com dezenas de milhares de usuários, não milhões. Emergente.

**O que ainda falta.** Coerência acima de algumas dezenas de turnos (NCP-Bench). Um caminho de
distribuição que não morra na descoberta. Titularidade — hoje a obra nasce sem dono registrável.
E um formato de qualidade que o público reconheça: a diferença entre 30,8% dos lançamentos e
10–27% das vendas é a medida do que falta.

**Quem bloqueia.** O IFComp já bloqueou, por regra escrita. As lojas bloqueiam por indexação
(itch.io desindexa asset não declarado) e por cota (KDP limita publicação por dia). E o público
bloqueia por reputação — "AI slop" virou categoria de rejeição antes de virar categoria de
análise. O efeito disso está em `e2`.

### 4.2 Raiz 2 — A obra que se remonta a cada leitura

**O que rompe.** Rompe a identidade da obra como objeto compartilhado. Toda a institucionalidade
da cultura letrada assume que existe **um texto** ao qual duas pessoas podem se referir: é o que
torna possível citar, resenhar, ensinar, premiar, discordar, dar spoiler, preservar. Se cada
leitura instancia uma variante, o referente comum deixa de existir por construção — e não por
desacordo interpretativo, que é o que a crítica sempre soube tratar.

**Por que agora, e não há cinco anos.** Porque a adaptação deixou de ser ramificação escrita à
mão e passou a ser geração. Ramificação é finita e autorada: o espaço de uma obra Ren'Py cabe num
grafo que o autor desenhou. Geração é um espaço que ninguém percorreu — nem o autor. A diferença
só passou a existir quando o custo de gerar uma cena nova em tempo de leitura ficou abaixo do
custo de escrevê-la antes. E aparece, agora, em resposta institucional: o NCP e o *Storyform*
existem porque alguém precisou inventar como manter intenção autoral num sistema que gera.

**Onde está na difusão.** `demo pública`, quase toda em pesquisa. Comercialmente existe em
plataformas de roleplay conversacional, que não são obra no sentido deste mapa. Especulativa —
e por isso **toda a cadeia desta raiz carrega confiança rebaixada**.

**O que ainda falta.** Basicamente uma coisa, e ela é medida: preservação de compromisso
narrativo. 42% de sobrevivência em 20 turnos não sustenta uma obra. Falta também um vocabulário
público para discutir obra instanciada — hoje não existe nem a palavra.

**Quem bloqueia.** Os autores, e é importante notar que eles bloqueiam **construindo**: o NCP é
literalmente um movimento de autores para limitar o gerador. Bloqueiam também as instituições que
precisam de texto fixo para operar — ensino, crítica, prêmio —, e o próprio leitor, que
frequentemente quer a obra *certa* e não a *dele*. O estudo de Sacks/Ippolito e colegas com 37
escritores (*Holding the Line*, arXiv 2404.13165, 04/2024) mostrou que a recusa não é global: é
seletiva por etapa do processo, e traçar uma fronteira firme é justamente o que dá conforto para
usar. O efeito está em `e7.2`.

### 4.3 Raiz 3 — A tradução sobreposta em tempo real, do lado do leitor

**O que rompe.** Rompe o controle do detentor sobre em que línguas a obra existe, e rompe a
localização como etapa de publicação. Até aqui, a obra chegava a um mercado porque alguém pagou
para traduzi-la; a decisão de existir em português era de quem detinha o direito. A camada do
leitor transfere essa decisão para o leitor, sem contrato, sem pagamento e sem que o detentor
saiba. Não é tradução melhor: é tradução que acontece **fora da cadeia**.

**Por que agora, e não há cinco anos.** Porque as três peças ficaram boas ao mesmo tempo: OCR de
alta precisão embarcado, LLM de tradução rodando local com qualidade aceitável para consumo de
ficção, e *hook* de texto já maduro por herança da comunidade de visual novels. O LunaTranslator
não inventou nada — ele empilhou. Há cinco anos a peça que faltava era a do meio, e a tradução
automática de ficção era ilegível.

**Onde está na difusão.** `produto de nicho`. 13,1 mil estrelas é comunidade dedicada, não
mercado. Mas o mecanismo é genérico e já migrou de plataforma: existem equivalentes para Android
sem root. Emergente.

**O que ainda falta.** Latência em fala e vídeo (hoje resolve texto). Integração no sistema
operacional ou no console — enquanto for aplicativo de terceiro, é nicho por atrito. E uma
definição jurídica: a camada produz obra derivada não autorizada, e ninguém testou isso em
tribunal.

**Quem bloqueia.** Detentores de direito e plataformas, por via técnica (anti-*hook*,
renderização protegida, cláusula de EULA), e o trabalho organizado — Dublar e Dublagem Viva
pedem exatamente a proibição do mecanismo aplicado à voz. O efeito está em `e10.2` e `e11`.

### 4.4 Candidatos recusados como raiz

*Candidato "asset gerado por IA na produção de jogos" recusado como raiz:* saiu de ~7% dos
lançamentos da Steam em fevereiro de 2024 para 30,8% em 2026, com projeção de cruzar 50% em
2027–2028 — está entrando em **maioria** dentro da janela deste mapa. É contexto, não ruptura;
tratado na seção 3.

*Candidato "assistente de escrita por LLM / co-writing" recusado como raiz:* a Amazon exige
declaração de texto gerado desde setembro de 2023 e o Copyright Office normatizou obra mista em
janeiro de 2025 — quando a regra já existe e é rotina, a prática é madura. Além disso, ele falha
no teste 1: escrever com assistente faz o mesmo, mais rápido. É melhoria sustentadora. Entra
como efeito (`e3`), não como raiz.

*Candidato "vídeo gerado por prompt" recusado como raiz:* é o tema 12 da disciplina. Aqui ele
aparece como insumo do pipeline (`AIComicBuilder → Seedance/Kling/Veo`), não como objeto.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A obra narrativa inteira gerada a partir de uma intenção curta
    efeitos:
      - id: e1
        ordem: 1
        efeito: O número de obras narrativas publicadas por mês cresce mais rápido do que qualquer curadoria humana consegue acompanhar, e o gargalo do ofício migra de produzir para ser encontrado
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: As lojas transformam o cadastro em barreira — cota de submissão, taxa e desindexação de quem não declara — e publicar deixa de ser gratuito
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: A distribuição narrativa se reconcentra em quem pode pagar pela visibilidade, e o qualquer-um-publica de 2026 reencontra um porteiro com outro nome
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: A primeira leitura de uma obra passa a ser feita por um agente de recomendação que a percorre inteira antes de qualquer humano
            sinal: fraco
            prazo: 2033
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Autores passam a escrever para o agente-curador, e otimizar obra para leitor-máquina vira ofício
                sinal: fraco
                prazo: 2038
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Conteúdo voltado ao público feito integralmente por humanos vira regra escrita de competição e critério de compra, não posição moral
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Surge um mercado de auditoria de proveniência narrativa, e o falso positivo passa a destruir reputação de autor
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A prova de autoria migra do texto para o processo — versionamento, rascunho datado, sessão de escrita gravada — e escrever sem registrar deixa de ser publicável em parte dos canais
                sinal: fraco
                prazo: 2036
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: A recusa vira nicho de preço e obras humanas passam a ser vendidas mais caro pela escassez declarada, não por diferença medida
            sinal: fraco
            prazo: 2034
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: O selo humano se descola da qualidade e vira gênero de mercado, consumido por identidade como o vinil
                sinal: fraco
                prazo: 2042
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: O custo de uma obra narrativa deixa de ser dominado por produção e passa a ser dominado por direitos, verificação e distribuição
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Estúdio pequeno para de contratar roteirista por obra e passa a contratar direção narrativa por catálogo
            sinal: fraco
            prazo: 2035
            confianca: baixa
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O contrato de roteiro deixa de ser medido em lauda ou cena e passa a ser medido em especificação e revisão, tirando do sindicato a unidade com que ele negociava
                sinal: fraco
                prazo: 2039
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: A obra gerada por prompt nasce sem titularidade registrável, e só a contribuição humana tem dono
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O log do processo criativo — prompts, cortes, revisões — vira ativo contratual exigido em aquisição de catálogo
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: O que se compra numa aquisição deixa de ser a obra e passa a ser a cadeia de proveniência que a torna defensável
                sinal: fraco
                prazo: 2041
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: A plataforma que hospeda obra gerada assume risco jurídico que o autor não consegue assumir e passa a exigir declaração vinculante
            sinal: medio
            prazo: 2031
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: A declaração de IA deixa de ser autoavaliação e passa a ser verificada na ingestão, com obra recusada por suspeita e sem recurso técnico
                sinal: fraco
                prazo: 2037
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: O protótipo jogável deixa de ser marco de projeto e vira formato de conversa — pitch, aula e briefing passam a circular como obra jogável em vez de documento
        sinal: medio
        prazo: 2030
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: O ofício de design narrativo troca escrever o roteiro por escrever a restrição, e o autor passa a especificar o que não pode acontecer
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A crítica passa a avaliar o espaço de possibilidades de uma obra em vez da obra, e a resenha vira relatório de exploração
                sinal: fraco
                prazo: 2040
                confianca: baixa
  - disrupcao: A obra que se remonta a cada leitura — a instância no lugar do exemplar
    efeitos:
      - id: e6
        ordem: 1
        efeito: Duas pessoas que leram o mesmo título passam a ter lido textos diferentes, e a conversa sobre a obra perde o referente comum
        sinal: medio
        prazo: 2034
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Crítica e comunidade passam a discutir a semente e o sistema em vez do texto, e a resenha cita parâmetros de geração como hoje cita edição e tradutor
            sinal: fraco
            prazo: 2038
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: O cânone se parte em obra fixa citável e obra instanciada não citável, e o ensino de literatura passa a depender da primeira para existir
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Para poder discutir, comunidades passam a congelar e publicar instâncias, e a partida gravada vira o objeto compartilhado no lugar da obra
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: O arquivo cultural deixa de guardar obras e passa a guardar execuções, preservando uma amostra arbitrária de um espaço que ninguém percorreu inteiro
                sinal: fraco
                prazo: 2043
                confianca: baixa
          - id: e6.3
            ordem: 2
            efeito: Spoiler deixa de fazer sentido como categoria, e a economia de atenção que vive dele — embargo de resenha, trailer, semana de lançamento — perde o gancho
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e6.3.1
                ordem: 3
                efeito: O marketing narrativo migra de o-que-acontece para o-que-o-sistema-permite-que-aconteça-com-você, e a promessa passa a ser sobre o leitor
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: A adaptação por leitor vira alvo comercial de personalização, e a obra passa a carregar o perfil de quem lê
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Ler passa a exigir entregar dados à obra, e a narrativa entra na mesma disputa de privacidade em que já estão recomendação e publicidade
            sinal: medio
            prazo: 2035
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Surge a obra deliberadamente cega, que recusa saber quem lê, como posição estética assumida
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: A personalização encontra o teto da coerência — quanto mais a obra cede ao leitor, menos mantém os compromissos que a tornavam uma história
            sinal: forte
            prazo: 2030
            confianca: alta
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: A arquitetura que vence é híbrida, com espinha fixa escrita por humano e folha gerada, e o ofício que sobra é escrever a espinha
                sinal: medio
                prazo: 2036
                confianca: media
          - id: e7.3
            ordem: 2
            efeito: O padrão aberto de estrutura narrativa vira infraestrutura disputada, porque quem define o formato define o que uma história pode ser
            sinal: fraco
            prazo: 2034
            confianca: baixa
            efeitos:
              - id: e7.3.1
                ordem: 3
                efeito: O formato embutido carrega uma poética — arcos, beats, tipos de personagem — e histórias que não cabem nele ficam tecnicamente difíceis de contar
                sinal: fraco
                prazo: 2041
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: O exemplar deixa de ser vendável e o acesso ao gerador vira o produto — paga-se pelo direito de instanciar, não pela obra
        sinal: medio
        prazo: 2032
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: Quem para de pagar perde as obras que julgava ter, porque elas não existem fora do sistema que as remonta
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Preservação passa a depender de emulação do modelo em vez de cópia do arquivo, e obra sem modelo preservado fica ilegível como um disquete
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: Biblioteca pública e acervo institucional não conseguem adquirir o que não é exemplar, e ficam de fora de parte do que passa a ser produzido
            sinal: fraco
            prazo: 2037
            confianca: baixa
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: Forma-se um acervo de duas velocidades — o que é comprável e preservável, e o que só existe enquanto a assinatura vigora
                sinal: fraco
                prazo: 2043
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: O leitor perde a capacidade de recomendar com precisão, porque o isto de leia-isto não é o mesmo duas vezes
        sinal: fraco
        prazo: 2035
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: A recomendação migra de obra para curador, e confia-se em quem indica porque não dá para conferir o objeto indicado
            sinal: fraco
            prazo: 2039
            confianca: baixa
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: A autoridade cultural se desloca do crítico que leu a obra para o curador que conhece o sistema, e ter lido deixa de ser a credencial
                sinal: fraco
                prazo: 2044
                confianca: baixa
  - disrupcao: A tradução sobreposta em tempo real, executada do lado do leitor
    efeitos:
      - id: e10
        ordem: 1
        efeito: A obra passa a existir em línguas que seu detentor nunca autorizou nem sabe que existem
        sinal: forte
        prazo: 2029
        confianca: alta
        efeitos:
          - id: e10.1
            ordem: 2
            efeito: A localização deixa de ser condição de entrada num mercado e vira decisão de qualidade — traduz-se para competir com a camada do leitor, não para chegar a ele
            sinal: medio
            prazo: 2033
            confianca: media
            efeitos:
              - id: e10.1.1
                ordem: 3
                efeito: Obras passam a ser escritas já prevendo leitura por camada automática — frase curta, menos trocadilho, menos oralidade regional — e a língua de origem empobrece por antecipação
                sinal: fraco
                prazo: 2040
                confianca: baixa
          - id: e10.2
            ordem: 2
            efeito: Detentores e plataformas tratam a camada como obra derivada não autorizada e passam a bloqueá-la tecnicamente com anti-hook e renderização protegida
            sinal: medio
            prazo: 2032
            confianca: media
            efeitos:
              - id: e10.2.1
                ordem: 3
                efeito: A guerra técnica empurra a tradução do leitor para fora do aplicativo — para a câmera e o visor — onde nenhum EULA alcança
                sinal: fraco
                prazo: 2038
                confianca: baixa
          - id: e10.3
            ordem: 2
            efeito: O mercado brasileiro de localização de jogos deixa de crescer por volume e passa a disputar o que a máquina faz mal — gíria, humor e registro regional
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e10.3.1
                ordem: 3
                efeito: Traduzir vira ofício de autoria assumida e o nome do tradutor vira argumento de venda, porque só a assinatura distingue do que qualquer um gera de graça
                sinal: fraco
                prazo: 2041
                confianca: baixa
      - id: e11
        ordem: 1
        efeito: A dublagem brasileira perde a etapa de tradução como reserva de trabalho e concentra a disputa na voz
        sinal: forte
        prazo: 2031
        confianca: media
        efeitos:
          - id: e11.1
            ordem: 2
            efeito: A regulação brasileira chega depois do fato consumado, porque o PL 2338 leva mais tempo para virar lei do que a prática leva para se normalizar
            sinal: medio
            prazo: 2035
            confianca: media
            efeitos:
              - id: e11.1.1
                ordem: 3
                efeito: O que sobra de proteção é contratual e local — cláusula por obra, não direito geral — e passa a depender do poder de barganha de cada elenco
                sinal: fraco
                prazo: 2042
                confianca: baixa
          - id: e11.2
            ordem: 2
            efeito: A voz vira o último ativo verificável da cadeia narrativa, e o consentimento vocal vira o contrato mais disputado do audiovisual
            sinal: medio
            prazo: 2034
            confianca: media
            efeitos:
              - id: e11.2.1
                ordem: 3
                efeito: Atores passam a licenciar a própria voz como catálogo, e quem entra no ofício depois encontra um mercado já estocado por quem entrou antes
                sinal: fraco
                prazo: 2040
                confianca: baixa
      - id: e12
        ordem: 1
        efeito: A fronteira entre obra e interface se dissolve, e o leitor passa a rodar uma camada que reescreve o que vê — traduz, resume, muda o registro, corta o que não quer
        sinal: medio
        prazo: 2034
        confianca: media
        efeitos:
          - id: e12.1
            ordem: 2
            efeito: A obra tal como o autor a entregou deixa de ser o que chega ao leitor, e versão original vira um modo entre outros
            sinal: fraco
            prazo: 2038
            confianca: media
            efeitos:
              - id: e12.1.1
                ordem: 3
                efeito: O direito moral à integridade da obra fica inaplicável na prática, porque a alteração acontece no dispositivo do leitor e não em nenhuma cópia
                sinal: fraco
                prazo: 2044
                confianca: baixa
          - id: e12.2
            ordem: 2
            efeito: Acessibilidade e censura pessoal passam a usar a mesma camada, e a distinção entre adaptar e mutilar deixa de ter critério técnico
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e12.2.1
                ordem: 3
                efeito: Plataformas passam a oferecer a camada oficialmente para não perderem o controle dela, e a reescrita do leitor vira funcionalidade contratada
                sinal: fraco
                prazo: 2041
                confianca: baixa
      - id: e13
        ordem: 1
        efeito: A barreira de língua deixa de segmentar o mercado, e obras de nicho de qualquer idioma passam a competir pela mesma atenção
        sinal: medio
        prazo: 2033
        confianca: media
        efeitos:
          - id: e13.1
            ordem: 2
            efeito: Cenas nacionais pequenas ganham leitor estrangeiro sem intermediário e passam a depender de uma camada que não controlam
            sinal: fraco
            prazo: 2036
            confianca: baixa
            efeitos:
              - id: e13.1.1
                ordem: 3
                efeito: O repertório de um leitor brasileiro de 2046 é montado por recomendação que atravessa línguas, e literatura nacional enfraquece como recorte de leitura
                sinal: fraco
                prazo: 2046
                confianca: baixa
```

### 5.1 Os mecanismos, que o bloco não carrega

**`e1`.** Porque a geração da obra inteira zera o custo fixo de publicar, o número de obras cresce
sem que o número de horas de atenção cresça. O mecanismo é aritmético e já está medido: 13 → 530
lançamentos declarados por mês na Steam, 60–90% de todo o crescimento da loja, contra 10–27% das
vendas. Classe de referência: a própria série de Haro, 2,5 anos de febre. Sinal forte: três
artefatos verificáveis hoje (censo Steam, relatório do Next Fest de junho de 2026, crítica
pública ao evento).

**`e1.1`** porque `e1` torna a triagem impossível para a loja, e a loja só tem dois instrumentos —
cobrar e desindexar. Ambos já foram usados: KDP limitou publicação por dia em 2023, itch.io
desindexou asset não declarado em 2024. Classe de referência: App Store, que levou ~5 anos entre
a abertura e a taxa anual de desenvolvedor virar filtro efetivo. Daí 2031.

**`e1.2`** porque a leitura humana não escala e a máquina lê barato. Sinal fraco — nenhum artefato
público hoje; é inferência. `e1.2.1` é o filho legítimo, não o pai amadurecido: o ator muda (de
loja para autor) e o mecanismo muda (de triagem para otimização).

**`e2`** porque `e1` torna a autoria humana escassa, e escassez vira critério de seleção. O
artefato existe e está datado: IFComp, 31/01/2026, com os três mecanismos explícitos — conteúdo
voltado ao jogador, proibição de serviço generativo em tempo de partida, e expectativa de
declaração. Sinal forte. É a **retroação** da raiz 1: freia a disrupção dentro de um recorte
institucional, sem freá-la no mercado.

**`e2.1`** porque a regra de `e2` precisa ser verificável para valer, e ninguém sabe verificar. O
sinal médio vem de haver tentativa sem instituição: houve em 2026 pelo menos um caso público de
conto premiado sob suspeita de geração — registro na seção 12, com a ressalva de que **não abri
fonte primária sobre ele e o mapa não apoia nenhum efeito nesse caso**. Classe de referência:
detecção de plágio, que levou ~10 anos entre o problema e o mercado consolidado de verificação.
Daí 2032.

**`e3`** porque, quando produzir fica barato, o que sobra no orçamento é o que não barateia. Note
que este é o efeito que absorve o candidato recusado "co-writing": ele entra aqui como causa de
barateamento, não como ruptura.

**`e4`** porque a posição do Copyright Office (29/01/2025) é explícita — prompt não estabelece
autoria — e ela vale independentemente de qualquer previsão minha. Sinal forte, confiança média:
o fato está posto, a **consequência comercial** é que é incerta, porque o mercado pode simplesmente
conviver com obra sem titularidade, como convive com muita coisa.

**`e5`** porque a queda de custo muda o que é barato o bastante para ser descartável, e um
protótipo jogável passa a custar menos que um documento bem escrito. É o efeito mais direto para
o público deste mapa — quem projeta mídia e interação.

**`e6`** porque a instanciação remove o referente. Aqui o prazo é o problema, e volto a ele na
seção 7: a classe de referência que usei é a VR de consumo (mais de 10 anos e ainda não chegou a
10%), porque `e6` depende de mudança de **hábito de leitura**, não de capacidade técnica.
Mudança de hábito de leitura é a coisa mais lenta deste mapa inteiro.

**`e6.2`** porque a comunidade precisa de objeto comum e vai fabricá-lo se não o receber. Sinal
médio com artefato análogo: comunidades de roguelike já publicam *seeds*, e comunidades de LLM já
publicam transcrições. O mecanismo existe, o objeto é que é novo.

**`e7.2`** é o efeito mais bem ancorado de toda a raiz 2 e é **retroação**: 42% de sobrevivência
em 20 turnos e 40–68% de conflito factual, medidos no NCP-Bench sobre 100 ambientes, ICML 2026.
Note a assimetria deliberada: um efeito de 2ª ordem com sinal forte e confiança alta debaixo de
um pai de sinal médio. Ordem é distância causal, não data nem certeza.

**`e8`** porque quem gera controla o acesso, e assinatura é o modelo que já está no mercado — o
MangoBox cobra US$ 9/mês pelo direito de instanciar. Sinal médio: é tentativa, não caso
consolidado.

**`e10`** porque o LunaTranslator existe, funciona, é livre e tem 13,1 mil estrelas. Sinal forte e
confiança alta — este é o único efeito de 1ª ordem deste mapa que praticamente já aconteceu; o
prazo 2029 é para virar visível ao público do mapa, não para começar.

**`e10.2`** é a retroação da raiz 3, com dono nomeado: detentor de direito e plataforma. Classe de
referência: DRM em música, ~6 anos entre o problema e a resposta técnica generalizada — e a
resposta perdeu. `e10.2.1` diz exatamente isso: a camada migra para onde o EULA não alcança.

**`e11`** porque a cadeia de dublagem tem duas etapas separáveis — traduzir e interpretar — e a
camada automática come a primeira antes da segunda. Sinal forte: Dublagem Viva existe desde 2023,
200 mil visualizações em 24 horas em junho de 2026, aliança com quatro associações estrangeiras.
Confiança média porque a **velocidade** é que é incerta, não a direção.

**`e11.1`** porque a classe de referência é medida e é brasileira: PL 2338 aprovado no Senado em
dezembro de 2024, ainda na Câmara em setembro de 2026. Mais de três anos, sem lei. Prazo 2035 já
embute isso.

**`e13`** porque a camada do leitor remove o custo que segmentava mercados por língua — e note
que este efeito **converge** com `e1`: os dois aumentam a oferta de obra disputando a mesma
atenção, por caminhos que não se tocam.

### 5.2 Cruzamentos

**Convergência 1 — a curadoria deixa de ser humana.** `e1.2` (raiz 1: excesso de oferta) e `e9.1`
(raiz 2: impossibilidade de conferir o objeto indicado) chegam ao mesmo lugar por caminhos
independentes. Um vem do volume, o outro da instabilidade do referente. Convergência de raízes
diferentes é o achado mais forte deste mapa: mesmo que a raiz 2 não se concretize, `e1.2`
sustenta o efeito sozinho.

**Convergência 2 — o processo vira o objeto verificável.** `e2.1.1` (prova de autoria migra para
o processo) e `e4.1` (log do processo vira ativo contratual) convergem de uma pressão cultural e
de uma pressão jurídica que não se conhecem. Quem construir a ferramenta de registro de processo
atende às duas.

**Convergência 3 — o tradutor e o autor acabam no mesmo lugar.** `e10.3.1` (o nome do tradutor
vira argumento de venda) e `e2.2` (obra humana vendida pela escassez declarada) são o mesmo
movimento: quando a máquina faz de graça, a assinatura humana passa a ser o produto.

**Retroalimentação negativa 1.** `e2` freia a raiz 1 e gera `e2.2`, que torna obra humana mais
cara e mais rentável, o que financia produção humana, o que reforça `e2`. Ciclo que se sustenta —
mas só dentro do recorte institucional (competições, selos, nichos de preço), não no volume.

**Retroalimentação negativa 2.** `e7.2` freia a raiz 2 pelo teto técnico, e gera `e7.2.1`
(arquitetura híbrida), que ao preservar a espinha humana **reduz a instanciação** e portanto
enfraquece `e6`. A raiz 2 pode se autolimitar sem que ninguém a regule.

**Contradição não resolvida.** `e1.1` (lojas fecham o cadastro; reconcentração; menos gente
publica) contra `e13` (fim da barreira de língua; obras de nicho de qualquer idioma competem;
mais gente alcança). As duas não podem valer na mesma intensidade. O que decide entre elas é
empírico e observável: **se a barreira de descoberta ficar mais alta que a barreira de língua, o
mercado reconcentra; se a de língua cair mais rápido, ele se dispersa.** Registro as duas.

### 5.3 Cobertura STEEP e quem perde

- **Social:** `e6`, `e6.1`, `e9`, `e13.1.1` — o referente comum, a credencial de ter lido, o
  repertório nacional.
- **Tecnológico:** `e7.2`, `e7.3`, `e10.2`, `e8.1.1` — teto de coerência, padrão de estrutura,
  guerra de bloqueio, emulação de modelo como preservação.
- **Econômico:** `e1.1`, `e3`, `e8`, `e10.3` — barreira de cadastro, migração do custo,
  assinatura no lugar do exemplar, mercado de localização.
- **Ecológico:** **vazio, e declaro.** Não encontrei mecanismo específico de narrativa gerativa
  para efeito ambiental que não seja o efeito genérico de custo energético de inferência — que
  serve para qualquer tema deste semestre e por isso não entra (regra dos efeitos proibidos).
  Se alguém quiser preencher, o caminho é a diferença entre gerar sob demanda a cada leitura
  (raiz 2) e gerar uma vez e distribuir cópias — aí há mecanismo, mas eu não tenho número.
- **Político:** `e4.2`, `e11.1`, `e12.1.1` — risco jurídico da plataforma, atraso regulatório
  brasileiro, direito moral inaplicável.

**Quem perde, nomeado:** tradutores de volume e estúdios de dublagem (`e11`); roteiristas
contratados por obra (`e3.1`); críticos cuja autoridade vinha de ter lido (`e9.1.1`); autores
sem registro de processo (`e2.1.1`); bibliotecas e acervos públicos (`e8.2`); quem entra no
ofício de dublagem depois do estoque de vozes licenciadas (`e11.2.1`); e o autor que escreve
histórias que não cabem no formato embutido (`e7.3.1`).

## 6. Sinais fracos e wildcards

### Sinais fracos

**S1 — A camada de tradução saindo do aplicativo.** Onde foi visto: LunaTranslator (13,1 mil
estrelas), e o `overlay-translator` para Android sem root com OCR em dispositivo e LLM offline.
O que mudaria: se a camada deixar de ser aplicativo de terceiro e virar recurso de sistema, `e10`
passa de nicho a infraestrutura e todo o ramo da raiz 3 acelera cinco anos. **Sinal observável:**
uma fabricante de sistema operacional ou console anunciar tradução sobreposta nativa ligada por
padrão — e não como recurso de acessibilidade.

**S2 — Um padrão aberto de estrutura narrativa adotado por engine comercial.** Onde foi visto:
Narrative Context Protocol (arXiv 2503.04844), com *Storyform* e um estudo de caso de um ano; e a
existência do workshop AISTORY no CVPR 2026. O que mudaria: se uma engine de peso embutir um
formato, `e7.3` deixa de ser fraco e a poética embutida (`e7.3.1`) vira questão urgente, não
especulativa. **Sinal observável:** Unity, Unreal, Ren'Py ou Godot listarem um formato de
estrutura narrativa em changelog oficial.

**S3 — A loja, e não a competição, criando o filtro.** Onde foi visto: IFComp escreveu a regra
(31/01/2026); itch.io tem a etiqueta "No AI" mas **escondeu o filtro na navegação**, o que gerou
protesto público de desenvolvedores. O que mudaria: `e2` hoje vale para um recorte institucional
pequeno; uma loja grande com filtro ligado por padrão o transformaria em critério de mercado.
**Sinal observável:** Steam ou itch.io oferecer "ocultar jogos com IA declarada" como preferência
de conta, não como busca avançada.

**S4 — O registro do processo como produto.** Onde foi visto: em lugar nenhum como produto — só
como necessidade implícita na posição do Copyright Office (documentar a contribuição humana) e
na regra do IFComp (declarar o uso). É um sinal fraco pela ausência: há demanda formada e
nenhuma oferta. **Sinal observável:** uma editora ou um estúdio exigir log de processo em
cláusula contratual padrão — ou uma ferramenta de escrita anunciar "prova de autoria" como
recurso.

**S5 — A obra que recusa saber quem lê.** Nenhum artefato ainda. Aparece como contraposição
estética possível a `e7.1`. **Sinal observável:** um selo editorial ou um estúdio declarar
publicamente que sua obra não coleta nem usa dados do leitor — como argumento de venda, não como
política de privacidade.

### Wildcards

**W1 — Um prêmio literário de primeira linha premia uma obra assumidamente coescrita, e mantém a
decisão sob contestação.** *Mecanismo:* um júri decide que a categoria relevante é o resultado, e
não o processo; a obra vence; a contestação vem; o júri não recua e publica o critério.
*Por que é improvável:* a direção do movimento institucional em 2026 é a oposta — o IFComp acabou
de fechar a porta e a pesquisa pós-competição de 2025 mostrou oposição forte dos jogadores a
prosa gerada não editada. *O que faria com o mapa:* inverteria `e2` de retroação para aceleração,
derrubaria `e2.2` (o selo humano deixaria de ser prêmio de escassez) e adiantaria `e3` em cerca
de cinco anos. *Sinal precoce:* um prêmio criar categoria explícita para obra coescrita, em vez
de proibi-la — a categoria é o passo antes da premiação.

**W2 — Um tribunal reconhece titularidade sobre obra gerada por prompt detalhado.** *Mecanismo:* um
caso concreto em que o prompt é longo, iterado e documentado o bastante para o juízo enxergar
controle sobre elementos expressivos — que é exatamente a porta que o Copyright Office deixou
aberta ao dizer que a determinação pode mudar com a tecnologia. *Por que é improvável:* a posição
está consolidada e repetida em decisões de recusa. *O que faria com o mapa:* removeria `e4` e com
ele `e4.1` e `e4.1.1`; o processo deixaria de ser ativo e o mercado de proveniência (`e2.1`)
perderia metade da demanda. *Sinal precoce:* uma decisão de instância inferior, em qualquer
jurisdição, aceitando registro de obra gerada com base em prompt documentado.

**W3 — Um modelo de imagem ou vídeo amplamente usado sai de circulação por decisão judicial sobre
treinamento.** *Mecanismo:* condenação que torne o modelo indistribuível; a esteira do
AIComicBuilder, que pluga seis provedores, perde os que dependiam daquele treinamento; o custo de
gerar obra inteira sobe. *Por que é improvável:* há substituição rápida entre provedores, e a
disputa tem andado por licenciamento e não por remoção. *O que faria com o mapa:* adiaria a raiz
1 em três a cinco anos e tornaria `e3` (custo dominado por direitos) o efeito central do mapa em
vez de um efeito lateral. *Sinal precoce:* uma medida cautelar que suspenda a distribuição de
pesos de um modelo em produção — não uma multa.

**W4 — A narrativa gerativa se mostra um teto, não uma rampa.** *Mecanismo:* o conflito factual
medido no NCP-Bench (40–68%) não cede com escala, porque o problema é de arquitetura e não de
tamanho; a indústria conclui, por volta de 2032, que a obra gerada só funciona em formato curto.
*Por que é improvável:* a série histórica de capacidade tem sido de melhora contínua. *O que faria
com o mapa:* a raiz 2 morre inteira, e a raiz 1 se reduz a "ferramenta de protótipo" — sobra `e5`
e quase nada mais dela. *Sinal precoce:* duas gerações consecutivas de modelo sem ganho no
NCP-Bench ou equivalente.

## 7. Contra o próprio mapa

### 7.1 Pré-mortem: é 2046 e este mapa se mostrou errado

**Razão 1 — o horizonte.** Vinte anos é longo demais para o método. A Futures Wheel deriva
consequências de um estado técnico observado, e o estado técnico de 2046 não deriva do de 2026:
duas ou três rupturas que não estão neste mapa terão acontecido no meio do caminho e
reorganizado tudo. Este é o defeito estrutural, não um erro pontual. Consequência aplicada:
**rebaixei toda a 3ª ordem com prazo acima de 2040 para `confianca: baixa`** e não deixei nenhum
efeito de 3ª ordem com confiança alta em lugar nenhum do mapa.

**Razão 2 — confundi volume de asset com geração de obra.** O número mais forte que tenho (30,8%
dos lançamentos da Steam) mede jogo feito por gente **com** asset gerado, e 60% das declarações
são de arte. Se eu tratar isso como evidência da raiz 1, estou usando a medida de outra coisa. É
o erro mais provável do mapa inteiro. Consequência aplicada: `e1` mantém sinal forte (o volume
é real e é o que o efeito afirma), mas a raiz 1 declara explicitamente, na seção 4.1, que os
30,8% **não** são obra inteira gerada.

**Razão 3 — a resistência institucional pode ser mais forte e mais rápida do que projetei.** O
IFComp fechou a porta em 14 meses contados da implantação da etiqueta do itch.io. Se esse for o
padrão e não a exceção, `e2` domina e boa parte dos ramos de aceleração fica confinada a nichos
de baixo valor. Consequência aplicada: `e2` subiu para sinal forte e confiança alta, e a prosa de
`e2` passou a chamá-lo de retroação da raiz 1, não de efeito lateral.

### 7.2 Extrapolação linear

`e1` é extrapolação linear pura: mais obras, mais volume, mais do mesmo. Ele só se sustenta
porque tem mecanismo de não-linearidade nomeado — o custo fixo de publicar vai a zero, e uma
variável que vai a zero não é "mais do mesmo", é mudança de regime. `e1.1` (a loja cobra) é o que
reintroduz o custo fixo e fecha a não-linearidade.

`e13` também era linear ("mais tradução, mais mercado") e por isso **não recebeu filho de 3ª
ordem além de `e13.1.1`**: a regra de parada da §3 se aplicou — o terceiro nível seria `e13.1`
mais adiante, não outro ator com outro mecanismo.

`e3` tinha, na primeira passagem, prazo 2030 e era só "o custo migra". Ganhou o mecanismo que
faltava — verificação passa a custar, porque `e2` e `e4` a tornam obrigatória — e o prazo foi
empurrado.

### 7.3 Velocidade de adoção, confrontada com as classes de referência

| Efeito | Classe usada | Veredito |
|---|---|---|
| `e1` | censo Steam 2024–2026 (2,5 anos de 10,9% a 30,8%) | prazo 2028 sustentado |
| `e2` | itch.io 11/2024 → IFComp 01/2026 (14 meses) | prazo 2028 sustentado |
| `e6` | VR de consumo (>10 anos sem chegar a 10%) | **prazo empurrado**, ver 7.6 |
| `e10` | o artefato já existe e funciona | prazo 2029 sustentado |
| `e11.1` | PL 2338: Senado 12/2024 → Câmara, nada em 09/2026 | prazo 2035 sustentado |
| `e2.1` | detecção de plágio (~10 anos até mercado) | prazo 2032 sustentado |
| `e1.1` | App Store (~5 anos até a taxa virar filtro) | prazo 2031 sustentado |

### 7.4 E se a raiz não acontecer

**Raiz 1 não acontece** (a geração da obra inteira fica presa em amador): sobram `e10` a `e13`
inteiros, que não dependem dela — a raiz 3 é autônoma. Perdem-se `e1` a `e5` e, por tabela,
`e8`. O mapa encolhe mas não morre.

**Raiz 2 não acontece** (é o cenário do wildcard W4, e é o mais provável dos três): perdem-se
`e6` a `e9`, doze efeitos. Sobra `e7.2` invertido — o teto vira a notícia, não a exceção. Este é
o teste que mais importa, porque a raiz 2 é a mais especulativa e a que sustenta as perguntas mais
interessantes do tema. Registro: **se a raiz 2 cair, este mapa perde quase toda a sua parte
original e vira um mapa sobre economia de produção.**

**Raiz 3 não acontece** (bloqueio técnico vence, `e10.2` sem `e10.2.1`): perdem-se `e10` a `e13`.
Mas `e13` tem um caminho alternativo por `e1` (excesso de oferta também mistura mercados), o que
significa que `e13` não deriva *só* desta raiz — ver 7.5.

As três raízes sobrevivem ao teste de não serem uma só disfarçada: nenhuma delas leva às outras.
A raiz 1 é sobre custo de produção, a 2 sobre identidade da obra, a 3 sobre controle da
circulação. Um mundo com as três é diferente de um mundo com qualquer uma.

### 7.5 Teste da causa solta

Removi cada raiz e reexaminei os efeitos de 2ª e 3ª ordem:

- **`e13` falha parcialmente.** Sem a raiz 3, obras de nicho ainda competiriam pela mesma atenção,
  por causa de `e1`. Mantive-o na raiz 3 porque o mecanismo *específico* — a barreira de língua
  deixar de segmentar — só vem dela, mas registro a dependência dupla, e ela é o que faz a
  Convergência 1 valer.
- **`e9.1` passa.** Sem a instanciação, recomendar continua funcionando: o problema é o objeto
  não ser o mesmo duas vezes, e isso só a raiz 2 produz.
- **`e3.1` falha e foi rebaixado.** "Estúdio pequeno para de contratar roteirista por obra"
  aconteceria também por contração de mercado, por consolidação, por qualquer coisa. Rebaixei
  para sinal fraco e confiança baixa, em vez de removê-lo, porque o mecanismo específico (o custo
  migrou para direitos e verificação, e a direção narrativa é o que não se automatiza) continua
  válido — mas ele não é a única causa possível.
- **`e12.2` falha no teste de especificidade.** Acessibilidade e censura pessoal usando a mesma
  camada é verdade de qualquer tecnologia de reescrita, inclusive das que já existem. Rebaixado
  para sinal fraco e confiança baixa.
- **Três efeitos foram removidos e estão na seção 12.2.**

### 7.6 Registro de alterações — auditável

| id | antes | depois | por quê |
|---|---|---|---|
| `e6` | prazo 2031 | **prazo 2034** | depende de mudança de hábito de leitura; a classe de referência (VR de consumo) mostra que hábito não segue capacidade |
| `e6.1` | confianca alta | **confianca media** | o mecanismo é bom mas o efeito assume que a crítica se adapta em vez de recusar o objeto, e a §7.1 razão 3 diz que a recusa é subestimada |
| `e3` | prazo 2030 | **prazo 2032** | faltava a causa do encarecimento; verificação só vira custo depois de `e2` e `e4` se firmarem |
| `e3.1` | sinal medio, confianca media | **sinal fraco, confianca baixa** | falha no teste da causa solta (§7.5) |
| `e2` | sinal medio, confianca media | **sinal forte, confianca alta** | há artefato datado e verificável (IFComp, 31/01/2026), e eu havia subestimado a retroação |
| `e11` | confianca alta | **confianca media** | a direção é certa, a velocidade não; a classe brasileira (`e11.1`) mostra que o tempo institucional é longo |
| `e12.1` | confianca alta | **confianca media** | assume que a camada do leitor se generaliza além do nicho de VN, o que é justamente o que `e10.2` disputa |
| `e12.2` | sinal medio | **sinal fraco, confianca baixa** | falha no teste de especificidade (§7.5) |
| `e1.2` | confianca alta | **confianca media** | zero artefatos hoje; é inferência, e inferência não sustenta confiança alta |
| — | efeito "surge a profissão de engenheiro de narrativa" | **removido** | efeito proibido pela §3 da skill: "surge uma nova profissão" serve para qualquer tema |
| — | efeito "a formação em roteiro se reorganiza em torno de direção" | **removido** | mesmo motivo; não tinha curso nomeado nem mecanismo próprio |
| — | efeito "reguladores criam categoria jurídica para obra gerada" | **removido** | genérico; o que sobrou dele com mecanismo e ator é `e4.2` e `e11.1` |

Um efeito rebaixado ou removido por raiz: raiz 1 tem `e3`, `e3.1` e `e1.2`; raiz 2 tem `e6` e
`e6.1`; raiz 3 tem `e11`, `e12.1` e `e12.2`. A cota foi cumprida. A bateria **derrubou** coisa —
três efeitos removidos e nove alterados de doze linhas de registro.

### 7.7 Suposições escondidas

1. **Que o custo de inferência continua caindo ou pelo menos estável.** Se subir — energia,
   escassez de computação, precificação de provedor — a raiz 1 desacelera e `e8` (assinatura)
   acelera, porque geração sob demanda vira privilégio pago.
2. **Que os modelos continuam acessíveis por API a preço de varejo.** O AIComicBuilder pluga seis
   provedores; se essa camada fechar, o "qualquer um gera" acaba.
3. **Que as plataformas continuam permitindo.** Steam, itch.io e KDP escreveram as regras que
   sustentam metade deste mapa. Podem escrever outras.
4. **Que a posição do Copyright Office se mantém.** É o pressuposto de `e4` inteiro, e é o que o
   W2 ataca.
5. **Que o modelo aberto continua aberto.** `e10` depende de LLM local rodando tradução. Se a
   distribuição de pesos for restringida, a raiz 3 morre por falta de insumo.
6. **Que existe leitor.** Todo este mapa assume que a demanda por narrativa continua existindo na
   forma que conhecemos. Em vinte anos, é uma suposição grande e eu não a testei.

### 7.8 Viés do autor

Dois, nomeados.

O primeiro: **`e6` e todo o ramo do referente comum está aqui porque eu acho a pergunta bonita.**
"Duas pessoas podem discutir um livro que leram em versões diferentes?" é uma questão elegante, e
elegância não é evidência. É o ramo com menos artefato e mais prosa neste documento, e é
exatamente o que o §7.4 identifica como o mais frágil.

O segundo, de sentido contrário: o mapa tem **viés institucionalista**. Por eu escrever de dentro
de uma universidade, `e2`, `e4`, `e11.1` e `e8.2` — regra, direito, regulação, biblioteca —
recebem mais espaço do que o mercado receberia se quem escrevesse fosse um estúdio. Um estúdio
escreveria um mapa com mais `e3` e menos `e2`.

### 7.9 Calibração

| ordem | alta | media | baixa | total |
|---|---|---|---|---|
| 1 | 3 | 10 | 0 | 13 |
| 2 | 1 | 16 | 8 | 25 |
| 3 | 0 | 1 | 24 | 25 |

Contados pelo verificador, não por mim: a minha primeira contagem à mão dava 13 médias e 11 baixas
na 2ª ordem, e 2 médias na 3ª. Errei os três números, e o script os corrigiu — está na seção 12.1.

A distribuição cai como tem de cair: a confiança alta vai de 23% na 1ª ordem a 4% na 2ª e a zero na
3ª. O único efeito de 2ª ordem com confiança alta é `e7.2`, e ele a tem por ter benchmark revisado
por pares atrás — não por posição na árvore. A 3ª ordem é quase toda baixa, o que com horizonte de
vinte anos é a resposta honesta, não modéstia de formulário.

## 8. O que a máquina errou

Sou eu a máquina. Sobre esta rodada, especificamente:

1. **Quase adotei uma família de páginas de SEO como atores do campo.** A busca por MangoBox
   devolveu oito resultados — LlamaGen, Summer Engine, Chatforce, Seeles, Jenova, Combos,
   Figma — todos se descrevendo como "AI visual novel generator" com texto quase idêntico. Eu
   tinha começado a montar a seção 3.3 com quatro deles como "o campo". Abri só o `mangobox.ai`;
   os outros não entraram, e a lição é que volume de resultado de busca não é volume de mercado.

2. **Peguei o número do agregador antes da fonte primária.** O mesmo dado sobre a Steam apareceu
   como 20%, 26,5%, 30,8% e 33% em quatro páginas diferentes, e a primeira versão desta seção 3
   dizia "um terço", que é o arredondamento do agregador. Os 33% são projeção citada de segunda
   mão; o número do censo é 30,8% em 2026. Corrigi para o censo de Haro e mantive os dois
   números do Next Fest (26,5% dos demos, 20% do evento) separados, porque medem populações
   diferentes e misturá-los seria fabricar precisão.

3. **Usei um caso que não abri para sustentar um efeito, e desfiz.** O caso do conto premiado sob
   suspeita de geração (Granta / Commonwealth Short Story Prize) apareceu em resultado de busca
   em português, e eu o tinha usado como evidência do sinal médio de `e2.1`. Não abri fonte
   primária sobre ele. Rebaixei para menção com ressalva explícita na prosa de `e2.1` e registro
   na seção 12.3. O efeito continua com sinal médio por outro fundamento — a existência de
   demanda sem oferta —, não por esse caso.

4. **Quase colei duas datas da mesma campanha numa frase só.** A Dublagem Viva começou em
   novembro de 2023; as 200 mil visualizações em 24 horas são da ação de 29 de junho de 2026, e
   as "quase 100 mil assinaturas" são do *Real Voices* internacional, não da campanha brasileira.
   Três números de três coisas diferentes, que numa frase apressada viram um só.

5. **Descartei um dado chamativo por não ter fonte primária.** "A OpenAI desliga o Sora 2 em
   24/09/2026" apareceu num blog comercial de comparação de ferramentas. Seria um dado
   interessante para a discussão de dependência de provedor (suposição 2 da §7.7). Não achei
   anúncio oficial e não usei. Está na seção 12.3.

6. **O manifesto que eu queria citar não abriu.** `dublagemviva.com.br` responde com certificado
   inválido (`*.kinghost.net`). Citei fontes secundárias que abriram (INCT-DSI e IDS) em vez de
   citar o manifesto de memória. Registro na 12.3.

## 9. Três cenários para 2046

**Provável.** Publicar não custa nada e não vale nada; ser lido custa caro. A oferta de obra
narrativa cresceu duas ordens de grandeza e a atenção não cresceu, então a camada que decide o
que se lê é onde está todo o valor — e ela é operada por agentes que percorrem as obras antes das
pessoas. A raiz 2 não se realizou como se esperava: o teto de coerência medido em 2026 se
mostrou arquitetural, e o que venceu foi a forma híbrida — espinha escrita por gente, folha
gerada na hora. Quem escreve ainda escreve, mas escreve menos cena e mais restrição, e é pago
por catálogo, não por obra. A tradução é ambiente: ninguém pensa em "que língua é isto", do
mesmo jeito que ninguém pensa em resolução de tela. A dublagem brasileira sobreviveu como ofício
de interpretação, com a tradução automatizada e a voz sob contrato individual. Há um mercado
pequeno e caro de obra com autoria humana verificada, e um mercado enorme e barato de tudo o
mais. *Sinal precoce de que estamos aqui:* a loja lança o filtro "sem IA" e menos de 10% das
contas o ligam.

**Desejável.** O mesmo volume, mas com o problema da descoberta resolvido por pluralidade em vez
de por concentração: em vez de uma camada de curadoria, várias, e o leitor escolhe de quem
aceita indicação. O padrão aberto de estrutura narrativa foi adotado cedo, o que impediu que uma
plataforma definisse sozinha o que uma história pode ser; a poética embutida ficou plural porque
o formato ficou público. A proveniência virou infraestrutura barata e cotidiana — todo mundo
registra processo, ninguém precisa provar nada em tribunal — e isso dissolveu a disputa sobre
autoria em vez de acirrá-la. A tradução ambiente levou obra brasileira para fora, e não só de
fora para dentro. O que teria sido preciso: uma decisão de padrão aberto tomada antes de 2032, e
alguém disposto a financiar curadoria plural quando concentrá-la era mais barato. *Sinal
precoce:* uma engine de peso adota um formato aberto de estrutura narrativa e nenhuma plataforma
lança um concorrente fechado nos dois anos seguintes.

**Indesejável.** A curadoria se concentrou em duas plataformas, e escrever passou a ser escrever
para o agente delas. Publicar voltou a custar — taxa, cota, verificação paga —, e o
"qualquer um publica" durou quinze anos. A obra instanciada se firmou o bastante para dissolver
o objeto comum, mas não o bastante para entregar uma experiência melhor: a conversa sobre
cultura ficou mais pobre sem que nada a substituísse, e discutir uma obra virou comparar
capturas de tela. O acervo público não conseguiu adquirir o que não é exemplar, e há um buraco
de vinte anos nas bibliotecas. A regulação brasileira chegou em 2035 e regulou um mercado que já
não existia. *Sinal precoce, e é o mais fácil de observar de todos:* uma loja começar a cobrar
taxa de submissão por obra narrativa, e o número de publicadores independentes cair no ano
seguinte.

## 10. O experimento

**O que é.** *A mesma história, duas pessoas* — um teste de quebra do referente comum. Um gerador
de novela visual curta (dez a quinze minutos) que aceita uma semente e um parâmetro declarado de
**grau de variação**: com variação 0, duas pessoas recebem exatamente a mesma obra; com variação
alta, recebem instâncias que divergem em cena, em personagem secundário e em desfecho. Dois
participantes jogam separados, sem saber qual variação receberam. Depois sentam juntos e têm dez
minutos para chegar a um acordo sobre **o que aconteceu na história**. Registra-se em que ponto
a conversa quebra: quando eles descobrem que leram coisas diferentes, quanto tempo levam, e se
ainda conseguem discutir a obra depois de descobrir.

**Que pergunta sobre o futuro ele ajuda a responder.** A pergunta de `e6`, que é o efeito mais
frágil e mais interessante deste mapa: *a partir de que grau de divergência duas pessoas param de
conseguir conversar sobre a mesma obra?* Ninguém sabe a resposta, e ela decide se a raiz 2 é uma
mudança cultural ou um detalhe de implementação. Se a conversa aguenta divergência alta, `e6`
cai e com ele doze efeitos. Se quebra com divergência baixa, `e6.2` (congelar instâncias) vira
urgente e o mapa muda de tom.

**Que tecnologia emergente usa, e por que não dá com a madura.** Usa geração de cena e diálogo em
tempo de leitura, com consistência de personagem entre cenas — o que o MangoBox e o
AIComicBuilder já fazem, e o que o NCP-Bench mede. Não dá com tecnologia madura por uma razão
exata: em Ren'Py, Twine ou Ink, a ramificação é escrita à mão e o espaço é **finito e conhecido
pelo autor**. As duas pessoas estariam comparando caminhos de um grafo que alguém desenhou — que
é uma experiência que já existe há trinta anos e sobre a qual já se sabe conversar. O objeto
deste mapa é outro: o espaço que ninguém percorreu, nem o autor. Só a geração produz isso.

**O que a turma faz ao testar em sala.** Em duplas, com variação sorteada e cega. Cada dupla
joga, conversa os dez minutos e preenche três coisas: o minuto em que percebeu a divergência, o
que fez quando percebeu (ignorou, investigou, desistiu), e se ainda considera que "leram a mesma
obra". Depois, uma rodada aberta com a turma inteira tentando discutir a obra como um grupo —
que é a condição mais dura, porque com quinze instâncias o referente comum ou aparece ou não
existe. Sai disso uma curva simples: grau de variação × conversa sobreviveu.

**O resultado que me faria mudar de ideia.** Se as duplas, mesmo com variação alta, convergirem
para um acordo sobre a história sem esforço — tratando as diferenças como detalhe, do jeito que
tratamos duas montagens diferentes da mesma peça —, então `e6` está errado, o referente comum é
mais robusto do que este mapa supõe, e a raiz 2 perde a consequência cultural que a torna
interessante. Eu rebaixaria `e6` a `e9` e reescreveria a raiz 2 como questão de produto, não de
cultura. E o inverso também: se quebrar com variação baixíssima — se bastar um personagem
secundário diferente para a conversa travar —, então `e6.2` deixa de ser efeito de 2ª ordem e
vira requisito de projeto, e todo sistema de narrativa gerativa precisa nascer com uma função de
congelar e compartilhar instância.

## 11. Fontes

1. `https://fragwyz.substack.com/p/three-years-of-ai-on-steam` — Sulka Haro, *Three years of AI
   on Steam*. Sustenta os números centrais da seção 3.1 e o mecanismo de `e1`: censo de ~53.600
   lançamentos, 10,9% → 19,9% → 30,8%, 13 → 530 lançamentos/mês, 60–90% do crescimento, 3–6% →
   10–27% das vendas, projeção de 50% em 2027–2028. Confiabilidade alta para o dado bruto: é
   censo, não amostra, sobre dado público da loja; a projeção é do autor e deve ser lida como
   extrapolação.
2. `https://app.cinevva.com/news/2026-07-20-steam-ai-disclosure-study` — cobertura do mesmo
   estudo. Usada só para confirmar a atribuição e os recortes por ano. Confiabilidade média:
   é secundária; onde divergiu do original, vale o original.
3. `https://www.llamagriffin.com/Data/SteamNextFestJune2026/part-2.html` — Llama & Griffin,
   relatório do Steam Next Fest de junho de 2026. Sustenta 1.163/4.382 demos (26,5%),
   ~1.700/8.682 do evento (20%), ~60% das declarações em arte, e a isenção de código na revisão
   de política de janeiro de 2026. Confiabilidade média-alta: declara as três fontes
   (GameDiscoverCo, SteamDB, declarações de desenvolvedor) e a ressalva metodológica.
4. `https://itch.io/t/4309690/generative-ai-disclosure-tagging` — anúncio oficial do itch.io
   (leafo, 20/11/2024). Sustenta o campo de declaração, as quatro categorias, a
   obrigatoriedade para assets e a desindexação. Confiabilidade alta: é a plataforma falando de
   si.
5. `https://intfiction.org/t/gen-ai-disclosure-on-itch-io/72448` — fórum da comunidade de ficção
   interativa. Sustenta o sinal fraco S3: a etiqueta existe, o filtro ficou escondido, e
   desenvolvedores relatam que quase não há pacote de arte sem IA ao filtrar. Confiabilidade
   média: é relato de comunidade, vale como sinal e não como medida.
6. `https://ifcomp.org/rules/` — regras oficiais do IFComp. Sustenta `e2`: conteúdo voltado ao
   jogador integralmente humano, uso permitido em desenvolvimento, proibição de serviço
   generativo durante a partida. Confiabilidade alta: documento normativo.
7. `https://intfiction.org/t/ifcomp-2026-rule-update/78851` — anúncio e discussão da regra
   (31/01/2026). Sustenta a data, a motivação pela pesquisa pós-competição de 2025, e as
   ambiguidades apontadas pela comunidade (tradução, conteúdo opcional desligado, IA como motor
   de raciocínio). Confiabilidade alta para a regra, média para o "mais de 85% se opõem", que
   vem de leitura de gráfico no fórum e não de tabela publicada.
8. `https://github.com/HIllya51/LunaTranslator` — repositório. Sustenta `e10`: 13,1 mil estrelas,
   1,1 mil forks, 4.945 commits, GPLv3, hook e OCR embutido, emuladores, motores de tradução
   incluindo LLM local. Confiabilidade alta para os números do repositório; estrela não é
   usuário.
9. `https://github.com/LingyiChen-AI/AIComicBuilder` — repositório. Sustenta a descrição do
   pipeline da raiz 1: 1,9 mil estrelas, 314 forks, Apache-2.0, roteiro → personagem em quatro
   vistas → decupagem → quadros-chave → interpolação → montagem, plugando OpenAI, Gemini,
   DALL·E, Imagen, Kling, Seedance, Veo. Confiabilidade alta para o que o código declara fazer;
   não testei a qualidade da saída.
10. `https://www.mangobox.ai/` — página do produto. Sustenta o exemplo da obra inteira a partir de
    uma frase: até cinco personagens, arte, personalidade, cena de abertura, US$ 9/mês, 20
    vídeos/mês. Confiabilidade baixa-média: é material do próprio fornecedor, e nenhuma das
    alegações de desempenho foi verificada. Usada como existência, não como medida.
11. `https://arxiv.org/abs/2608.08160` — Ma et al., *Can LLM Agents Stick to the Script?*
    (NCP-Bench), ICML 2026, submetido em 08/08/2026. Sustenta `e7.2` e o teto técnico da raiz 2:
    100 ambientes, 42% de sobrevivência do melhor modelo (GPT-5.2) após 20 turnos, conflito
    factual de 40% a 68%. Confiabilidade alta: revisado por pares, benchmark público.
12. `https://arxiv.org/abs/2503.04844` — Gerba, *Narrative Context Protocol* (também publicado
    como *Universal Narrative Model*), 03/2025, rev. 07/2025. Sustenta `e7.3` e o sinal fraco S2:
    o *Storyform*, a portabilidade entre sistemas, o estudo de caso de um ano. Confiabilidade
    média: preprint, proposta de padrão sem adoção comercial demonstrada.
13. `https://arxiv.org/abs/2404.13165` — *Holding the Line: A Study of Writers' Attitudes on
    Co-creativity with AI*, 04/2024, 37 escritores. Sustenta a afirmação da §4.2 de que a recusa
    de escritores é seletiva por etapa, e não global. Confiabilidade média-alta: qualitativo, n
    pequeno e declarado; não generaliza para população.
14. `https://www.copyright.gov/ai/` — página oficial do relatório *Copyright and Artificial
    Intelligence*. Sustenta `e4`: Parte 1 (31/07/2024), Parte 2 (29/01/2025), Parte 3
    (pré-publicação 09/05/2025). Confiabilidade alta para as partes e datas; as conclusões
    específicas sobre prompt vieram das análises jurídicas listadas na busca e da Parte 2, e a
    página em si não as reproduz — registro a limitação.
15. `https://authorsguild.org/news/amazon-adds-to-kdp-generative-ai-policy-caps-daily-self-publishing-uploads/`
    — Authors Guild. Sustenta a declaração obrigatória no KDP (setembro de 2023, texto, imagem e
    tradução) e o limite de publicação diária. Confiabilidade média-alta: entidade parte
    interessada, mas cita o anúncio da plataforma. Atenção: o limite citado aqui é de três
    títulos/dia (2023); fontes de 2026 falam em dez por formato por semana — não confirmei a
    mudança em fonte primária da Amazon, e por isso o mapa usa o mecanismo (existe cota), não o
    valor.
16. `https://inctdsi.uff.br/2026/06/29/dubladores-e-ia-campanha-defende-o-trabalho-humano-na-dublagem/`
    — INCT-DSI/DigiLabour, 29/06/2026. Sustenta a nota sobre o Brasil e `e11`: 200 mil
    visualizações em 24 horas, aliança com quatro associações estrangeiras, Cecília Lemes e
    Carlos Campanile. Confiabilidade média-alta: laboratório de pesquisa que participa da
    campanha — parte interessada, mas identificada.
17. `https://ids.org.br/noticia/dubladores-brasileiros-criam-movimento-dublagem-viva-para-pedir-a-regulamentacao-do-uso-da-ia/`
    — IDS, 01/02/2024. Sustenta a origem do movimento (novembro de 2023), as demandas
    explícitas e a filiação ao *Real Voices*/United Voice Artists com quase 100 mil assinaturas.
    Confiabilidade média: é notícia de terceiro sobre a campanha.
18. `https://www.camara.leg.br/noticias/1140392-camara-comeca-a-discutir-projeto-que-regulamenta-a-inteligencia-artificial-no-brasil/`
    — Agência Câmara, 14/03/2025. Sustenta `e11.1` e a classe de referência regulatória
    brasileira: aprovação no Senado em dezembro de 2024, previsão de direito a remuneração
    quando obra protegida for usada em sistema comercial de IA. Confiabilidade alta: fonte
    oficial do Legislativo.
19. `https://aistory2026.github.io/` — CVPR 2026 Workshop on Generative AI for Storytelling
    (AISTORY), 04/06/2026, Denver. Sustenta a afirmação da §3.2 de que consistência de
    personagem, tom e progressão temporal são problemas abertos. Confiabilidade alta: workshop
    de conferência de primeira linha; a página é chamada de trabalhos, não resultado.

## 12. Anexo — o levantamento bruto

### 12.1 Saída do verificador

```
python3 .../futurizacao-giordano/references/verificar.py tendencia-narrativa-gerativa-e-coautoria.md --links
frontmatter: 18/18 campos
títulos literais: 12/12
raízes: 3 (frontmatter diz 3)
efeitos ordem 1: 13 (frontmatter diz 13)
efeitos ordem 2: 25 (frontmatter diz 25)
efeitos ordem 3: 25 (frontmatter diz 25)
prazo > horizonte (2046) em ordens 1-2: 0 
prazo > horizonte em ordem 3 (permitido, mas declare): 0 
confiança ordem 1: alta 3 · media 10 · baixa 0
confiança ordem 2: alta 1 · media 16 · baixa 8
confiança ordem 3: alta 0 · media 1 · baixa 24
links da seção 11: 19/19 respondem (frontmatter diz fontes: 19)
RESULTADO: ok
```

### 12.2 Premissas assumidas (o que o briefing não cobriu)

O `briefing:` veio completo — modo, tema, slug, autor, zona de interesse, horizonte, público,
recorte, descartado, raiz suspeita, viés, busca web e caminho de saída. Não houve rebaixamento
de confiança por falta de entrevista. O que ele **não** cobriu e eu assumi:

- **Profundidade em três ordens e modo "a partir de um tema, não de um setor"** — vieram no
  pedido, não no bloco `briefing:`; adotei como dito.
- **Ideias óbvias a excluir:** assumi a régua da disciplina ("o que já é comum em produto de
  massa") mais a lista de efeitos proibidos da própria skill. Três efeitos foram removidos por
  essa régua e estão em 7.6.
- **O que me faria mudar de ideia:** o pedido deu dois critérios — adoção passada da maioria
  inicial (Rogers), ou tecnologia que não rompe nada. Apliquei os dois na §4.4: a geração de
  asset foi recusada pelo primeiro, o co-writing pelo segundo.
- **Fronteiras com temas vizinhos:** assumi as do enunciado (7 = personagem que age; 12 = vídeo
  como mídia; 14 = procedural de regras) e mantive o objeto em "a história como coisa gerada".
- **Número de raízes:** a skill permite de 2 a 4. Escolhi 3. Uma quarta candidata — "a
  distribuição da obra deixa de passar por catálogo" — foi descartada por ser consequência de
  `e1`, não ruptura independente.
- **Moeda e mercado:** os valores citados são os declarados nas fontes (US$), sem conversão.

### 12.3 Fontes que apareceram e não entraram, e por quê

- `dublagemviva.com.br/index.php/manifesto/` — **não abriu**: certificado inválido, o host
  responde com `*.kinghost.net`. Era a fonte primária do manifesto. Substituída por INCT-DSI e
  IDS.
- Caso do conto premiado sob suspeita de geração (*The Serpent in the Grove*, Granta /
  Commonwealth Short Story Prize) — apareceu em cobertura em português (Exame, Diário do Estado,
  Revista Fórum, Método Viral). **Nenhuma aberta.** Não sustenta efeito neste mapa; fica como
  pista para quem quiser verificar.
- "OpenAI desliga o Sora 2 em 24/09/2026" — veio de página comercial de comparação de
  ferramentas (ChatCut). Sem anúncio oficial encontrado. Não usado.
- "Vencedora do Nobel usa IA" (coluna na CNN Brasil) — não aberta, não usada.
- Páginas de produto que se descrevem como "AI visual novel generator" e não foram abertas:
  LlamaGen, Summer Engine, Chatforce, Seeles, Jenova, Combos/Converge, Figma. Todas com texto
  quase idêntico. Não entram como atores do campo.
- `wilds.ai`, `dunia.gg`, `isekaizero.ai`, `weavai.app` — páginas de comparação de plataformas de
  roleplay, com números de usuário ("AI Dungeon com mais de 2 milhões de ativos mensais") que não
  consegui rastrear até fonte primária. **Não usados.** Este é o buraco de dados mais sério do
  levantamento: não tenho número confiável de adoção das plataformas de narrativa conversacional.
- Páginas de mercado de localização de jogos (Gridly, Loxily, Speequalgames, WebProNews,
  Artlangs, Apollo Technical) com estimativas de US$ 1,5–1,7 bilhão e projeção de US$ 3 bilhões.
  Não abertas, não rastreadas até a consultoria de origem. **Não usadas** — por isso `e10.3` fala
  de direção de mercado e não de tamanho.
- Estatísticas de descoberta na Steam ("metade dos 17.889 jogos de 2025 com menos de 10 análises")
  vindas de blog de marketing indie. Coerentes com o censo de Haro, mas não verificadas. Não
  usadas como número; usadas só como reforço qualitativo do mecanismo de `e1`.

### 12.4 Buscas feitas

Quatorze buscas, em português e inglês: `AI visual novel generator mangobox.ai`; `generative
interactive fiction AI narrative 2026 arXiv co-writing agency study`; `itch.io AI generated games
policy disclosure tag`; `Steam AI disclosure generative content percentage of games 2026`; `game
localization industry AI machine translation jobs 2026`; `prêmio literário obra escrita com IA
polêmica 2026 coautoria`; `US Copyright Office AI generated works human authorship registration
2025`; `LunaTranslator OCR real-time game translation overlay`; `dubladores brasileiros IA
dublagem sintética 2026 Dublagem Viva`; `personalized generative narrative shared cultural object
criticism`; `Twine Ren'Py interactive fiction community 2026 AI tools IFComp rules`;
`AIComicBuilder github script to animated comic`; `arXiv 2026 LLM interactive narrative coherence
long-horizon benchmark`; `Sulka Haro Three years of AI on Steam census`. Mais uma sobre "AI slop"
e curadoria de vitrine, cujos resultados foram todos secundários e ficaram em 12.3.

**Buscas que não deram em nada de aproveitável:**

- A busca sobre mercado de localização devolveu só conteúdo de agência de tradução vendendo
  serviço. Nenhum dado primário sobre emprego de tradutor de jogo. O efeito `e10.3` ficou sem
  número por isso.
- A busca sobre prêmio literário e IA devolveu só cobertura secundária de um único caso. Não
  achei nenhuma decisão institucional de prêmio (regulamento, critério publicado) além do
  IFComp — o que, por si, é um achado: em 2026 o IFComp parece ser a única competição narrativa
  de peso com regra escrita sobre conteúdo gerado.
- Não encontrei nenhum estudo sobre **recepção de obra instanciada** — duas pessoas lendo
  variantes e tentando conversar. Procurei por essa exata questão e achei só personalização do
  lado do gerador (PREFINE, *Wrapped in Anansi's Web*), nunca do lado da conversa entre leitores.
  É o buraco que o experimento da seção 10 existe para preencher, e a razão de `e6` ser o efeito
  mais fraco em evidência deste mapa.

### 12.5 Efeitos cortados, na íntegra

1. *"Surge a profissão de engenheiro de narrativa, responsável por especificar restrições a
   sistemas gerativos."* — Removido. Efeito proibido: "surge uma nova profissão" serve para
   qualquer tema do semestre. O que havia de específico nele foi absorvido por `e5.1` (o autor
   especifica o que não pode acontecer), que tem ator e mecanismo.
2. *"A formação em roteiro e design narrativo se reorganiza em torno de direção em vez de
   execução."* — Removido. Efeito proibido: "cursos reorganizam o currículo". Não consegui nomear
   curso nem mecanismo próprio sem inventar. Registro a tentação: era o efeito mais fácil de
   escrever de todo o mapa, e é exatamente por isso que a skill o proíbe.
3. *"Reguladores criam uma categoria jurídica nova para obra gerada."* — Removido. Efeito
   proibido: "reguladores criam categoria/lei nova" sem regulador nomeado. O que sobrou dele com
   ator e mecanismo virou `e4.2` (a plataforma exige declaração vinculante porque assume o risco)
   e `e11.1` (o PL 2338 chega tarde, com número e data).
4. *"O mercado de trabalho de escritores de jogo se contrai."* — Cortado antes de entrar.
   Genérico, sem ator e sem mecanismo. O que dele é defensável está em `e3.1` (contratação por
   catálogo em vez de por obra) e `e3.1.1` (a unidade de contrato muda), ambos rebaixados.
5. *"Obras passam a ser geradas ao vivo durante a transmissão, e o público participa da
   geração."* — Cortado. É tema 7 (personagem que age em mundo) e tema 12 (vídeo como mídia)
   disfarçados; fora da fronteira declarada deste mapa.
6. *"O custo energético da geração sob demanda vira restrição de projeto."* — Cortado por falta de
   número, e porque na forma em que eu conseguia escrevê-lo servia para qualquer tema. Registrado
   na §5.3 como a categoria STEEP ecológica vazia, com o caminho para quem quiser preenchê-la.

### 12.6 Versões anteriores dos efeitos alterados

Para auditoria do §6, os valores **antes** da bateria, já refletidos na tabela de 7.6:

```
e6:    prazo 2031   -> 2034
e6.1:  confianca alta -> media
e3:    prazo 2030   -> 2032
e3.1:  sinal medio, confianca media -> sinal fraco, confianca baixa
e2:    sinal medio, confianca media -> sinal forte, confianca alta
e11:   confianca alta -> media
e12.1: confianca alta -> media
e12.2: sinal medio -> fraco; confianca media -> baixa
e1.2:  confianca alta -> media
```

### 12.7 O que ficou de fora do recorte e vale para outro mapa

- **Áudio.** ChatTTS e Bark aparecem no enunciado do tema e não viraram efeito próprio aqui;
  entram só via `e11` (voz e dublagem). Um mapa sobre fala gerativa em narrativa seria outro
  documento.
- **Worldbuilding como artefato separado.** `chronicler` e `Fantasy-Map-Generator` são geração de
  **mundo**, não de história. Fronteira com o tema 14.
- **Plataformas de roleplay conversacional.** Character.AI e similares têm escala real e não são
  obra no sentido deste mapa — não há artefato que alguém possa recomendar, criticar ou
  preservar. É uma fronteira que vale discutir em aula: *se não dá para recomendar, ainda é
  narrativa?*
- **O caso do "print da partida" como gênero.** `e6.2` toca nisso de leve. Há aí um objeto
  cultural novo — a instância congelada e compartilhada — que merecia um mapa só dele.
