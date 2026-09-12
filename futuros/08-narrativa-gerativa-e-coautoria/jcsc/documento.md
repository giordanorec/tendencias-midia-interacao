---
tema: Narrativa gerativa e coautoria
slug: narrativa-gerativa-e-coautoria
autor_login: jcsc
zona_de_interesse: Simulação e mundos
data: 2026-09-12
horizonte: 2031
publico: "quem projeta mídia e interação"
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 5
efeitos_ordem_2: 10
efeitos_ordem_3: 10
tecnologias_citadas: [MangoBox, LunaTranslator, StreamVox, Ren'Py, Monogatari, Inform 7, Twine, Yarn Spinner, Dialogic, Arrow, Chronicler, Fantasy-Map-Generator, AI Dungeon, NovelAI, Character.AI, Sora, Kling, Pika, Luma, ChatTTS, Bark, AIComicBuilder, grafos de conhecimento para narrativa, OCR de tela, text hooking, tradução por LLM]
fontes: 16
confianca: media
experimento: "Sala de leitura divergente — uma novela visual gerada que entrega a cada pessoa da turma uma versão diferente do mesmo capítulo, e depois as obriga a discutir a obra sem saber o que a outra leu"
skill_usada: futurizacao-jcsc
publico_ok: false
---

## 1. Resumo

O custo de produzir uma obra narrativa jogável caiu para perto de zero, e o efeito mensurável até agora não foi mais obra boa: foi mais obra. Em 2026, 30,8% dos lançamentos da Steam declaram uso de IA, contra 10,9% em 2024 — mas esses jogos respondem por algo entre 10% e 27% das vendas estimadas, um descolamento de duas a três vezes entre o que se publica e o que se joga. O gargalo migrou da produção para a atenção. Três rupturas sustentam o mapa até 2031: a geração do artefato narrativo inteiro a partir de uma intenção curta; a obra que se re-instancia diferente a cada leitor, dissolvendo o referente comum de que a conversa sobre uma obra depende; e a tradução sobreposta em tempo real, que tira de quem publica o controle sobre em que língua a obra é lida. A terceira é a mais subestimada e a que já está em produção fora de qualquer contrato. O mapa é cético quanto a substituição e otimista quanto a deslocamento: o que se observa não é o desaparecimento do autor, é a migração do trabalho autoral da escrita de falas para a especificação de restrições — e a migração do valor escasso da autoria para a curadoria.

## 2. O tema

Narrativa gerativa e coautoria é a história tratada como coisa gerada: uma frase que vira uma novela visual jogável com elenco, cenas, arte e diálogo; um roteiro que vira vídeo animado; uma obra em japonês lida em português sem que ninguém a tenha traduzido. O objeto aqui não é o personagem que age dentro de um mundo (isso é o tema 7), nem a geração de vídeo e imagem como mídia (tema 12), nem o design procedural de regras (tema 14). O objeto é a **história como artefato produzido por máquina** e o que isso faz com a noção de autoria e de obra.

Encosta em mídia e interação em três pontos. Primeiro, na **interface de autoria**: se a unidade de trabalho deixa de ser a linha de diálogo e passa a ser a restrição ("este personagem nunca mente"), toda a ferramentaria de escrita — Twine, Inform, Yarn Spinner, Ren'Py — está desenhada para a unidade errada. Segundo, na **interface de leitura**: uma obra que se re-instancia por leitor quebra pressupostos básicos de interface, de salvamento a compartilhamento a crítica. Terceiro, na **camada que o projetista não controla**: tradução sobreposta acontece por cima do produto, sem pedir licença, e desloca decisões de design (tipografia, comprimento de linha, ritmo de fala) para fora da mão de quem projetou.

Merece mapa de futuro, e não levantamento de estado da arte, porque a variável decisiva não é técnica. Tecnicamente, a coisa já funciona — MangoBox entrega uma novela jogável a partir de uma frase hoje, por US$ 9/mês. O que está em disputa é institucional: quem pode publicar, quem pode concorrer a prêmio, o que conta como obra, quem é pago. Essas respostas não se leem no estado da arte; elas se projetam.

**Registro da entrevista (Etapa 1 da skill).** As cinco perguntas foram feitas e todas foram respondidas — nenhuma ficou como "tanto faz". Horizonte: 2031. Público: quem projeta mídia e interação. Recorte: global, com nota sobre o Brasil. Descarte explícito: o que já é comum em produto de massa, que é a régua da disciplina; nenhuma outra exclusão. Viés: neutro. O texto integral das perguntas e das respostas está na seção 12.

## 3. Onde isso está hoje

### O artefato inteiro a partir de uma frase: existe e é barato

**MangoBox** (`mangobox.ai`) recebe uma descrição — pode ser uma frase — e devolve retratos de personagem, locações, personalidades e uma cena de abertura jogável. Limite declarado: cinco personagens por história. Preço: gratuito com limites, US$ 9/mês no Pro, com "histórias e visualizações ilimitadas" e 20 vídeos gerados por mês. A página não publica número de usuários nem de histórias criadas, o que é em si um dado: não há escala verificável para citar.

O que existe e **não** funciona bem é a permanência. **AI Dungeon**, marco histórico do gênero (2019), caiu de 48 para 26 jogadores simultâneos na Steam entre fevereiro de 2025 e abril de 2026 — números tão baixos que a comparação percentual é ruído, mas a direção é clara e o patamar absoluto é o achado: a obra fundadora da narrativa gerada interativa tem hoje dezenas de jogadores simultâneos, não milhões. Os relatos recorrentes sobre ela são de repetição, memória fraca e enchimento narrativo.

### O volume: o gargalo mudou de lugar

O censo de Sulka Haro sobre 53.597 lançamentos da Steam entre meados de 2023 e meados de 2026 mostra a curva: **10,9% dos lançamentos com declaração de IA em 2024, 19,9% em 2025, 30,8% em 2026**. Em volume absoluto, de ~13 lançamentos com flag por mês antes da obrigatoriedade para ~530 por mês. Jogos com flag de IA respondem por 60% a 90% de todo o crescimento mensal de lançamentos da plataforma. A projeção da própria análise: mais de 50% dos lançamentos até 2027-2028.

E o contrapeso, no mesmo dado: esses jogos representam entre **10% e 27% das vendas estimadas** no período recente — subiu de 3-6% em 2024, mas continua defasado em relação ao terço dos lançamentos. A leitura honesta é que a produção escalou e o consumo não acompanhou na mesma proporção.

O recorte por tipo de uso, medido na Steam Next Fest de junho de 2026 sobre 4.382 demos rastreadas (26,5% com declaração de IA, contra 21,2% em fevereiro de 2026 pela mesma metodologia), mostra onde a geração de fato entrou: **arte e texturas concentram ~60% das declarações**; áudio vem depois; tradução/localização é comum; **escrita e diálogo é a categoria de frequência mais baixa**. Isto é relevante e desconfortável para este tema: o que a indústria está gerando em massa não é a história — é a superfície da história. E na mesma amostra, apenas 1 dos 10 demos mais jogados de junho tinha flag de IA, contra 26,5% da base: uma defasagem de mais de 2,5 vezes entre presença e popularidade.

### Quem trabalha com isso: o campo é hostil

O *State of the Game Industry 2026* da GDC, com mais de 2.300 profissionais, mede: **36%** usam IA generativa pessoalmente (30% em estúdios de jogo, 58% em publicação/marketing/suporte); **52%** consideram que a IA generativa tem impacto negativo na indústria — contra 30% no ano anterior e 18% no anterior a esse; **7%** veem impacto positivo, queda de 13%. Por disciplina, as visões mais desfavoráveis vêm de arte visual e técnica (64%), **game design e narrativa (63%)** e programação (59%). Demissões: 28% foram demitidos nos últimos dois anos (33% nos EUA). Uma leitura secundária desse mesmo relatório atribui 19% de taxa de demissão especificamente a narrativa/escrita e 20% a design — número que **não consegui confirmar no material oficial da GDC**, que não publica o recorte de demissão por disciplina; ver seção 8.

A curva de sentimento é o dado mais forte desta seção: a rejeição não está estabilizando, está acelerando (18% → 30% → 52% em três anos). Isso é uma força contrária de primeira grandeza, e o mapa que a ignorar está errado.

### As instituições: o wildcard já aconteceu, e nas duas direções

O briefing do tema listava como wildcard "um best-seller assumido como coautoria com IA ganhar um prêmio literário — ou ser barrado dele". **Ambas as pontas já ocorreram, e antes do horizonte.**

Barrado: em novembro de 2025, o Ockham New Zealand Book Awards retirou da disputa do Jann Medlicott Acorn Prize for Fiction os livros *Obligate Carnivore*, de Stephanie Johnson, e *Angel Train*, de Elizabeth Smither — não pelo texto, mas pelas **capas**, que continham elementos gerados por IA. A regra que motivou a exclusão ("submissões não podem conter interferência de IA, seja em conteúdo ou em arte") foi criada em agosto de 2025, depois de os livros já terem sido desenhados. Quem notou foi um livreiro. Johnson respondeu que nunca usou IA no processo de escrita.

Acusado e absolvido: em maio de 2026 o Commonwealth Short Story Prize recebeu denúncias de que histórias premiadas seriam geradas por IA, com foco em *The Serpent in the Grove*, de Jamir Nazir. A Commonwealth Foundation investigou por um mês — entrevistas com todos os vencedores regionais, rascunhos de trabalho, documentos com carimbo de tempo, notas — e concluiu em 22 de junho de 2026 que **a IA não foi usada**, mantendo os vencedores. Detalhe metodologicamente importante: a Fundação **recusou deliberadamente usar detectores de IA**, alegando preocupação com propriedade artística e consentimento sobre obra inédita. O que ela prometeu como prioridade imediata não foi detecção — foi fortalecer a verificação de originalidade e discutir o assunto com o setor.

Na ficção interativa, a regra de 2026 do IFComp é literal: *"All entries' player-facing content must be entirely created by humans, including cover art, prose, and all in-game assets."* IA é permitida para edição, depuração, acessibilidade, pesquisa, tradução limitada e código — ou seja, **para tudo que o jogador não vê**. E há uma proibição adicional que quase ninguém comenta: a obra **não pode exigir que o jogador interaja com serviço de IA externo durante o jogo** — o que exclui, de partida, a categoria inteira de narrativa gerada em tempo de execução, independentemente de quem escreveu.

Nas plataformas, a régua é irregular. A Steam é a mais desenvolvida: exige declaração em duas categorias (conteúdo pré-gerado e gerado ao vivo), checa antes do lançamento, e em 2026 estreitou a regra para exigir relato apenas do que é "diretamente experimentado pelo jogador" — código foi isentado. O itch.io tornou a declaração **obrigatória para pacotes de assets e opcional para jogos**, com as tags "AI Generated" e "No AI", justificando pela "ambiguidade jurídica sobre direitos". Lojas de console (Nintendo, PlayStation, Xbox), Epic e GOG não têm exigência clara.

### A camada jurídica: o chão que falta

O Copyright Office dos EUA concluiu, em 29 de janeiro de 2025, que **prompt não é autoria**: "prompting alone does not qualify as sufficient human authorship because a human cannot control the way an idea is expressed and executed through prompting" — e que nem prompting iterativo nem instruções detalhadas resolvem, porque o sistema sempre introduz elementos não solicitados. O Escritório abriu uma exceção condicional: se a tecnologia evoluir a ponto de o prompt dirigir de perto os elementos expressivos sem a IA "preencher as lacunas", a conclusão pode mudar. No Brasil, o PL 2338/2023 foi aprovado por unanimidade no Senado em 10 de dezembro de 2024 e segue na Câmara; a votação final, esperada para o fim de 2025, foi adiada para 2026 — e um dos pontos sem consenso é exatamente direito autoral.

Traduzindo para quem projeta: **a obra gerada por prompt, hoje, nos EUA, não tem titularidade clara.** Isso não impede ninguém de publicar. Impede de processar quem copiar.

### A tradução sobreposta: pequena, madura e fora de controle

**LunaTranslator** (GPLv3, código aberto) extrai texto de jogo em execução por *hook* de memória — "compatível com quase todas as novelas visuais, populares e obscuras" — ou por OCR com modelo próprio embutido, e ainda por hook de emuladores de NS/PSP/PSV/PS2. Traduz por praticamente qualquer motor, incluindo LLM e tradução offline, e devolve o resultado numa sobreposição configurável.

**StreamVox**, de fevereiro de 2026, ataca o mesmo problema por outro flanco: não toca no arquivo nem no motor de texto do jogo. Escuta o áudio que o computador está tocando e devolve legenda traduzida flutuante em 61 idiomas. A limitação é honesta e reveladora: só traduz o que tem voz — menu, narração e falas do protagonista mudo ficam de fora. O argumento comercial dele é o retrato do problema: "localizações oficiais levam anos e alcançam uma fração dos lançamentos; projetos de fã rodam em tempo de voluntário e travam no meio da rota".

Enquanto isso, o mercado formal de localização não está encolhendo: as estimativas de mercado que encontrei projetam crescimento de 8% a 9% ao ano até meados da década de 2030. A leitura que sustento é de **bifurcação, não de colapso** — e é a leitura mais frágil deste mapa (seção 7).

### O que a pesquisa acadêmica já mostrou

Pan e colegas (arXiv 2505.24803, submetido em 30/05/2025, publicado em 29/12/2025) testaram narrativa gerada guiada por **grafo de conhecimento editável**, num estudo em duas etapas com 15 participantes. Dois achados importam aqui. O primeiro é o limite: a melhoria se concentrou em narrativas "orientadas a ação e estruturalmente explícitas", e **não apareceu em histórias introspectivas**. O segundo é a direção da ferramentaria: os participantes relataram forte sensação de controle ao editar o grafo, e descreveram a experiência como envolvente e lúdica. A interface de autoria que funciona não é a caixa de prompt — é a estrutura editável.

Sobre homogeneização, a literatura está em desacordo real. Ashkinaze e colegas (arXiv 2401.13481), com mais de 800 participantes de 48 países e 3.414 respostas em cinco condições, **não** encontraram efeito da exposição a ideias de IA sobre criatividade individual (F(4;19,86)=0,12; p=0,97) e encontraram **aumento** de diversidade coletiva nas condições de alta exposição (δ=0,31 e δ=0,26; p=0,001), com a condição de controle perdendo diversidade ao longo do tempo (β=-0,39; p=0,03). Há um corpo de trabalho em sentido contrário, indicando que coescrever com LLM aumenta similaridade entre autores e reduz diversidade lexical e de conteúdo — não consegui abrir o artigo de referência (403 na ScienceDirect), e portanto não o conto como fonte. Registro a divergência em vez de escolher o lado que convém ao mapa.

### O Brasil

A Pesquisa Game Brasil 2026 (Go Gamers, SX Group e Blend New Research; mais de 7.000 entrevistados de 16 a 66 anos, campo de 5 a 13 de março de 2026) mede: **39,3%** comprariam um jogo sabendo que arte, dublagem e texto foram substancialmente feitos com IA; **40%** ao menos considerariam; **45,7%** se preocupam com perda de empregos no setor por causa da IA. Ou seja: nem rejeição automática, nem adesão. Uma maioria que não compraria, uma minoria grande que compraria, e uma preocupação trabalhista que atravessa os dois grupos.

## 4. As disrupções-raiz

### D1 — Geração do artefato narrativo inteiro a partir de uma intenção curta

**O que rompe.** Não a existência de histórias geradas — rompe a *unidade mínima de produção*. Até aqui, gerar ajudava a fazer partes: um retrato, uma fala, uma textura. A ruptura é o artefato completo e jogável — elenco, arte, personalidade, diálogo, cena — saindo de uma frase, sem etapa de montagem humana. Isso não melhora o pipeline de produção narrativa; **dispensa** o pipeline.

**Por que agora e não há cinco anos.** Porque o ciclo texto → imagem → som → vídeo fechou num modelo só. Em 2021, gerar uma novela visual exigia costurar três ou quatro sistemas com formatos incompatíveis e um humano no meio de cada junção. O que mudou não foi a qualidade de cada parte; foi a junção deixar de precisar de gente.

**O que ainda falta.** Permanência. A evidência de AI Dungeon — a obra fundadora do gênero, hoje com dezenas de jogadores simultâneos — e o desempenho dos demos com flag na Steam (1 em 10 mais jogados, contra 26,5% da base) dizem que gerar e ser jogado são problemas diferentes, e que o segundo não foi resolvido. Falta também titularidade: enquanto prompt não for autoria nos EUA, a obra gerada é publicável e não é defensável.

**Por que não é tecnologia madura.** Pelo critério da Etapa 2 da skill, madura é o que já é padrão de mercado consolidado e sem debate real de substituição. Isto é o oposto: 52% dos profissionais do setor consideram o impacto negativo e a curva de rejeição está acelerando; as instituições estão em movimento nas duas direções ao mesmo tempo (IFComp fecha, Steam e itch.io abrem com rótulo); e o efeito comercial é contestado pelos próprios dados de venda.

### D2 — A obra que se re-instancia diferente a cada leitor

**O que rompe.** A obra como artefato fixo. Se a história se adapta a cada pessoa em tempo de execução, o que se publica não é um texto — é um sistema que instancia textos. Rompe o referente comum: duas pessoas que "leram o mesmo livro" deixam de ter lido o mesmo livro, e a conversa sobre a obra — que é o mecanismo social pelo qual uma obra ganha valor — fica sem chão. Rompe também a inspeção: classificação indicativa, moderação, crítica e prêmio são todos procedimentos desenhados para examinar **o produto**, e aqui o produto só existe depois do leitor.

**Por que agora e não há cinco anos.** Porque o custo marginal de gerar a próxima cena caiu abaixo do custo de armazenar todas as cenas possíveis. A narrativa ramificada clássica (Twine, Ren'Py, Inform, Yarn Spinner) precisava pré-escrever cada ramo; por isso ramificava pouco e convergia rápido. Geração em tempo de execução não pré-escreve nada — e isso só fez sentido econômico quando inferência ficou barata o bastante para rodar por jogador, por cena.

**O que ainda falta.** Coerência de longo curso e controle de autor. O estudo de grafo de conhecimento é a melhor evidência do estado real: a estrutura explícita melhora narrativas orientadas a ação e **não** melhora as introspectivas. Falta também caminho institucional: a regra do IFComp que proíbe exigir serviço de IA externo durante o jogo exclui esta categoria inteira do principal circuito de ficção interativa, independentemente de qualidade.

**Por que não é tecnologia madura.** Não existe produto de massa que entregue obra re-instanciada por leitor com permanência. As buscas por isso retornaram sobretudo páginas de marketing e projeções de mercado sem metodologia declarada — que descartei (seção 12). Há debate real e não resolvido sobre se isto é uma forma nova ou uma novidade que cansa.

### D3 — Tradução sobreposta em tempo real, fora do controle de quem publica

**O que rompe.** O vínculo entre obra e língua, e o controle do publisher sobre em que mercados a obra circula. A localização sempre foi decisão de quem publica: traduz-se o que compensa traduzir, quando compensa. LunaTranslator e StreamVox tiram essa decisão da mesa — a obra é lida em português por quem quiser, sem contrato, sem licença, sem que o detentor dos direitos saiba. Rompe também a superfície de design: tipografia, comprimento de linha, ritmo de leitura e sincronia de fala passam a ser determinados por uma camada que o projetista não escreveu e não pode ajustar.

**Por que agora e não há cinco anos.** Duas mudanças. A tradução por LLM passou a lidar com registro, gíria e contexto de cena num nível em que a leitura corrida deixa de doer — não boa, mas suficiente. E o custo de OCR e de reconhecimento de fala em tempo real caiu para rodar em máquina doméstica junto com o jogo. StreamVox, de fevereiro de 2026, é a demonstração mais limpa: nem toca no jogo, só escuta o áudio — o que significa que **nenhuma medida técnica do lado do publisher impede**.

**O que ainda falta.** Cobertura do que não tem voz nem texto extraível (a própria StreamVox admite: menu, narração e protagonista mudo ficam de fora), e qualquer resposta institucional. Não há caso conhecido de publisher tratando sobreposição de tradução como violação de direitos — o que pode significar tolerância, ou apenas que ninguém mediu o tamanho ainda.

**Por que não é tecnologia madura.** Tradução automática dentro do pipeline de localização é madura (é a primeira passada padrão do setor, com revisão humana). Tradução sobreposta **por iniciativa do leitor, por cima de obra não localizada** não é: vive em ferramenta de nicho, GPLv3 e itch.io, sem adoção por nenhuma plataforma grande, e sem qualquer moldura contratual.

### Candidatos descartados por maturidade (critério da Etapa 2 aplicado)

- **Engines de novela visual e ferramentas de diálogo ramificado** — Ren'Py, Monogatari, Inform 7, Twine, Yarn Spinner, Dialogic, Arrow. Padrão consolidado há mais de uma década, sem debate de substituição: a geração as usa como alvo de saída, não as ameaça como categoria. São o presente.
- **Texto → imagem como técnica** — consolidada e, na Steam, a categoria de declaração mais frequente (~60% das declarações são arte/textura). É insumo deste tema, não ruptura dele; e como mídia é objeto do tema 12.
- **Voz sintética para diálogo** — ChatTTS, Bark e congêneres. Amplamente adotada, sem debate técnico sobre substituição. O debate real sobre voz é jurídico e trabalhista, não sobre se a técnica funciona.
- **Tradução automática neural como primeira passada de localização** — já é o padrão de mercado do setor, com o humano na revisão. Descartada aqui; o que sobreviveu ao critério foi a sobreposição feita pelo leitor (D3), que é outra coisa.
- **Chatbot de personagem** — Character.AI e similares. Além de ser produto de massa consolidado, o personagem que age dentro de um mundo é o tema 7, não este.
- **Geração procedural de mapa e mundo** — Fantasy-Map-Generator e linhagem. Procedural clássico é maduro, e regras (não histórias) são o tema 14.
- **Roteiro → vídeo** — Sora, Kling, Pika, Luma, AIComicBuilder. **Descarte parcial e declarado**: a geração de vídeo como mídia é o tema 12 e não entra como disrupção-raiz aqui. Entra apenas como insumo de D1, e com a fronteira técnica registrada: o estado atual é ~60 segundos de coerência multi-plano no melhor caso (Sora), com consistência de personagem ainda frágil entre gerações.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: Geração do artefato narrativo inteiro a partir de uma intenção curta
    efeitos:
      - id: e1
        ordem: 1
        efeito: O custo de produzir um protótipo narrativo jogável cai ao ponto de o gargalo do campo deixar de ser a produção e passar a ser a atenção do público
        sinal: forte
        prazo: 2027
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A curadoria se torna o serviço escasso e remunerado do campo, ocupando o lugar que a produção ocupava
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Selos de obra feita por humanos se institucionalizam como categoria auditável de mercado, com processo de verificação e custo próprio
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Estúdios pequenos deixam de contratar escritor júnior e passam a contratar editor sênior de saída de máquina
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O degrau de entrada da profissão de escritor de jogo desaparece, porque some o trabalho de baixa responsabilidade em que se aprendia o ofício
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O volume de obras narrativas publicadas cresce mais rápido que qualquer capacidade humana ou algorítmica de avaliá-las
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Plataformas passam a cobrar taxa, depósito ou verificação pelo direito de publicar, revertendo a gratuidade da publicação digital
            sinal: medio
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A publicação independente volta a ter porteiro, e o custo de entrada retorna por via econômica depois de ter sido eliminado por via técnica
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: A unidade de compra migra da obra para o gerador, e o público passa a assinar sistemas em vez de adquirir títulos
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: O direito autoral por obra perde tração como base de remuneração e a disputa econômica migra para licenciamento de corpus e de estilo
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A obra que se re-instancia diferente a cada leitor
    efeitos:
      - id: e3
        ordem: 1
        efeito: Duas pessoas que consumiram a mesma obra deixam de ter consumido a mesma coisa, e a conversa sobre a obra perde o referente comum
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: A crítica desloca o objeto do texto para o sistema, e passa a avaliar o gerador e suas regras em vez do enredo
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Publicar o traço da sessão — semente, registro de decisões, grafo de estado — vira parte da obra, para que ela possa ser citada e revisitada
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Classificação indicativa e moderação deixam de poder inspecionar o produto e passam a inspecionar o processo que o gera
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Reguladores passam a exigir laudo de comportamento do sistema sob teste em vez de laudo de conteúdo entregue
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: O trabalho autoral se desloca de escrever falas para especificar restrições de personagem, tabu, arco e tom
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Ferramentas de autoria passam a expor estrutura explícita e editável — grafo de conhecimento, estado de mundo, ontologia — como superfície principal de trabalho, no lugar da caixa de prompt
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: O ensino de roteiro se reorganiza em torno de modelagem de mundo e de sistemas, e a escrita de cena vira exercício e não competência central
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: Tradução sobreposta em tempo real, fora do controle de quem publica
    efeitos:
      - id: e5
        ordem: 1
        efeito: Obras não localizadas passam a ser consumidas em línguas para as quais ninguém as traduziu, sem passar por quem detém os direitos
        sinal: forte
        prazo: 2027
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Localizar deixa de ser decisão de lançamento e vira decisão de qualidade, porque a alternativa gratuita já existe no dia do lançamento
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: O mercado de localização se bifurca entre commodity automatizada e adaptação cultural de alto valor, e a faixa intermediária desaparece
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: A língua de origem deixa de ser propriedade da obra e passa a ser uma configuração do leitor
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Contratos de direitos por território e por idioma perdem aderência ao que de fato acontece com a obra em circulação
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.3
            ordem: 2
            efeito: Comunidades de tradução por fãs perdem a função histórica de porta de entrada e se reposicionam em curadoria, revisão e correção da camada automática
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.3.1
                ordem: 3
                efeito: Obras de nicho em línguas menores ganham público antes de ganhar editor, invertendo a ordem histórica entre circulação e publicação
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não consegue dizer

**A cadeia continuaria, e a skill corta em três níveis por decisão de formato, não por achar que acabou.** O corte mais custoso é em `e1.2.1`: se o degrau de entrada da profissão some, o nível seguinte seria a mudança na composição demográfica de quem escreve narrativa — a profissão passa a ser acessível a quem já tem currículo, o que é uma máquina de reprodução de quem já estava dentro. Isso é efeito de quarta ordem e ficou de fora. Mesma coisa em `e3.2.1`: o nível seguinte seria a formação de um mercado de auditoria de comportamento de sistema narrativo, com metodologia disputada — exatamente a discussão que a Commonwealth Foundation abriu ao **recusar** usar detector de IA.

**Os prazos não são previsões, são ordenações.** O que o YAML afirma com alguma segurança é a ordem relativa dos efeitos, não o ano. Todos os `prazo` deste mapa estão dentro do horizonte de 2031 pedido na entrevista, mas três deles — `e2.1.1`, `e2.2.1` e `e5.2.1` — são efeitos que plausivelmente só se consolidam **depois** de 2031; foram ancorados em 2031 por ser o limite do mapa, e essa ancoragem é uma escolha, não uma medida. Registro isso aqui porque a rodada anterior desta skill (`DUVIDAS.md`) falhou exatamente no ponto oposto: colocou prazos fora do horizonte sem avisar.

**O bloco não mostra as forças contrárias, e elas são grandes.** Nenhum nó do YAML carrega o fato de que 52% dos profissionais do setor consideram o impacto da IA generativa negativo, com a curva acelerando (18% → 30% → 52%). Um formato que só representa efeitos propagando-se para a frente é estruturalmente otimista quanto à propagação — a resistência não tem onde aparecer. Trato disso na seção 7.

**Os três galhos não são independentes, e o bloco os desenha como se fossem.** `e1` (custo de produção perto de zero) e `e5` (tradução sem intermediário) atacam o mesmo alvo por lados opostos: um inunda o mercado de obra nova, o outro torna disponível todo o acervo que já existia e estava preso por barreira de língua. A soma dos dois sobre `e2` (volume acima da capacidade de avaliação) é maior que qualquer um deles sozinho, e o YAML hierárquico não tem como expressar essa convergência.

## 6. Sinais fracos e wildcards

**O sinal fraco mais importante: quem gera não é quem joga.** Numa discussão do fórum de ficção interativa sobre competições abertas a IA generativa em 2026, um participante resume o que os dados da Steam mostram por outro caminho: *"people enjoy generating games with LLMs a lot more than they enjoy playing LLM-generated games"*. Se isto for verdade estrutural e não fase, o destino de D1 não é substituir a indústria de obras — é virar **brinquedo de autoria**, uma categoria de software criativo, não de entretenimento consumido. O mercado endereçável muda de ordem de grandeza, e muda de tipo: vende-se ferramenta, não obra.

**Sinal fraco: a recusa organizada tem um vazio de contraparte.** No mesmo fórum, a tentativa de organizar uma competição "vale tudo" para obras geradas **não saiu do papel — ninguém se ofereceu para organizar**. Isto é mais informativo que a proibição do IFComp: a proibição mostra que a comunidade estabelecida fechou a porta; a competição que não nasceu mostra que a comunidade alternativa ainda não tem massa crítica de gente disposta a fazer trabalho institucional não pago. Instituições se sustentam em trabalho voluntário, e a energia de quem gera é energia de gerar, não de organizar.

**Sinal fraco: a Commonwealth Foundation recusou o detector.** Num campo onde todo mundo assume que a resposta à autoria duvidosa é detecção automática, a instituição que enfrentou o caso mais barulhento de 2026 escolheu o caminho oposto — rascunhos, documentos com carimbo de tempo, entrevista sobre processo — e justificou pela propriedade artística e pelo consentimento sobre obra inédita. Se esse precedente pegar, a resposta institucional à narrativa gerativa não será um classificador; será **procedência**: prova de processo, não prova de produto. Isso muda o que se deve construir.

**Sinal fraco: a categoria "escrita e diálogo" é a menos declarada na Steam.** Enquanto arte concentra ~60% das declarações, escrita fica na cauda. Duas leituras opostas, e não sei qual vale: ou a geração de texto narrativo ainda não é boa o bastante para entrar em produto, ou ela já entrou e **não está sendo declarada**, porque texto é indetectável de um jeito que arte não é. A segunda leitura, se verdadeira, torna todo o número de declaração da Steam um piso e não uma medida — e este mapa inteiro se apoia nesses números.

**Wildcard 1 — o processo judicial de titularidade sobre a obra gerada.** Alguém publica uma novela visual gerada, ela faz sucesso, outra pessoa a copia inteira, e o tribunal aplica a doutrina do Copyright Office: prompt não é autoria, logo não há o que proteger. O efeito não é sobre quem processa — é sobre **financiamento**. Investidor não financia ativo que não pode ser defendido. Se isso virar jurisprudência visível antes de 2031, D1 perde o caminho de capital e fica restrita a hobby e a assinatura de ferramenta. Probabilidade que atribuo: média-baixa, impacto alto.

**Wildcard 2 — uma plataforma grande embute a sobreposição de tradução.** Se a Steam, um console ou o próprio sistema operacional embutir tradução em tempo real como recurso de plataforma, D3 sai do nicho de ferramenta GPLv3 e vira infraestrutura em um único movimento. Toda a economia de localização por território é reprecificada em um ciclo de negociação de contrato. Probabilidade: baixa até 2031 pelo risco jurídico que a plataforma assumiria, impacto muito alto. É o wildcard de maior razão impacto/probabilidade deste mapa.

**Wildcard 3 — o efeito cansaço chega antes da maturidade.** A rejeição profissional está em 18% → 30% → 52% em três anos. Se essa curva contaminar o público na mesma velocidade — e a PGB 2026 mostra 45,7% de brasileiros já preocupados com emprego no setor —, "feito com IA" vira selo negativo de compra antes de a tecnologia ficar boa. Nesse cenário a declaração obrigatória deixa de ser transparência e vira **rótulo de advertência**, e a resposta racional do produtor passa a ser não declarar. Probabilidade: média. Impacto: inverte o sinal de metade deste mapa.

**Wildcard 4, de sinal contrário — a obra gerada que entra no cânone pela porta da frente.** Uma obra assumidamente coescrita com IA ganha um prêmio maior sem escândalo, porque o processo autoral é documentado e defensável (o caminho que a Commonwealth Foundation apontou). O efeito não é técnico: é que "coautoria com IA" deixa de ser categoria de suspeita e vira categoria de ofício, com critério. Probabilidade: baixa até 2031, dado que as regras em vigor no circuito literário e na ficção interativa vão na direção contrária. Impacto alto sobre `e1.1.1` — o selo "feito por humanos" só faz sentido enquanto não existir uma moldura respeitada para o trabalho misto.

## 7. Contra o próprio mapa

Esta seção é a Etapa 4 da skill. Cada rebaixamento abaixo registra o valor original e o motivo.

### Rebaixamentos de confiança aplicados

**`e1` — de `alta` para `media`.** Original: `alta`. O efeito ("o gargalo migra da produção para a atenção") tem evidência forte do lado da produção (530 lançamentos com flag por mês, 30,8% dos lançamentos de 2026, 60-90% do crescimento). Mas ele afirma uma mudança de **regime** do campo, e o dado que temos de recepção aponta que a parte "atenção" já era o gargalo antes da IA — a Steam já tinha crise de descoberta com 20.000 lançamentos em 2025, e três jogos capturaram cerca de 43% de toda a receita da plataforma no início de 2026. Se a concentração já era essa, "o gargalo migrou" é descrição imprecisa: o gargalo já estava lá, e a geração apenas engrossou a fila. Rebaixado.

**`e5` — de `alta` para `media`.** Original: `alta`. A evidência é boa (LunaTranslator funcionando com hook e OCR, StreamVox com 61 idiomas por áudio, comunidade de novela visual usando) mas o escopo observado é estreito: PC, novela visual japonesa, público que já procurava solução. Nada disso demonstra que o comportamento atravesse para console, para mobile ou para público geral — que é o que o efeito afirma ao dizer "obras não localizadas passam a ser consumidas". Rebaixado por generalização não demonstrada.

**`e2.1` — de `media` para `baixa`.** Original: `media`. "Plataformas passam a cobrar pelo direito de publicar" tem lógica econômica limpa e **nenhum precedente na direção pedida**. A história das lojas digitais é de redução de barreira, não de aumento: a taxa de submissão da Steam é simbólica há anos e a pressão competitiva entre Steam, itch.io, Epic e GOG empurra para baixo, não para cima. O efeito assume que a plataforma prefira menos catálogo a mais catálogo, contra o incentivo dela. Rebaixado.

**`e5.1.1` — de `media` para `baixa`.** Original: `media`. "O mercado de localização se bifurca e o meio desaparece" é a tese que mais me agrada e a que tem a evidência mais contrária: as projeções de mercado que encontrei apontam crescimento de 8% a 9% ao ano até meados da década de 2030, e o discurso do próprio setor é de modelo híbrido — máquina na primeira passada, humano na adaptação — que é justamente o meio sobrevivendo, não desaparecendo. Mantive o efeito porque a bifurcação é mecanismo plausível, mas com confiança baixa e registro explícito de que a evidência disponível o contradiz.

**`e2.2` e `e5.2` — mantidos em `baixa`, mas por motivo diferente do que eu tinha.** Ambos descrevem mudança de hábito de consumo, e eu havia atribuído confiança baixa por serem distantes. O motivo real é melhor: são efeitos que dependem de um comportamento de público para o qual **não tenho nenhuma medida**. As buscas por evidência de produto com narrativa personalizada por leitor em escala retornaram material promocional sem metodologia (seção 12). Confiança baixa por ausência de dado, não por distância causal — a distinção importa porque ausência de dado é corrigível e distância causal não.

### Qual efeito é só extrapolação linear do presente

**`e2`** é o caso mais claro, e é justamente o único que mantive em `alta`. Ele diz que o volume vai continuar crescendo acima da capacidade de avaliação — o que é traçar a reta 10,9% → 19,9% → 30,8% e estendê-la. A própria fonte faz isso (projeção de >50% em 2027-2028). Mantive `alta` porque a inércia de três anos de dados sobre 53.597 lançamentos é forte, mas registro que **`alta` aqui significa "a reta continua", não "eu entendi o mecanismo"**. Se a Steam mudar a política de declaração outra vez — e ela já mudou em janeiro de 2026, isentando código —, o número muda sem que nada no mundo mude.

### Qual efeito assume velocidade de adoção sem precedente

**`e4.1`** — ferramentas de autoria migrarem da caixa de prompt para estrutura explícita editável até 2030. A evidência que tenho é um estudo com **15 participantes**, e um estudo com 15 participantes não estabelece direção de indústria. Pior: a história da ferramentaria de autoria é de lentidão extrema — Inform 7 é de 2006, Twine de 2009, Ren'Py de 2004, e todos continuam em uso porque autor aprende ferramenta uma vez e não troca. Uma migração de superfície de autoria em quatro anos não tem precedente observável nesse campo. O efeito continua em `media` porque a direção me parece certa, mas o prazo é o elo fraco.

**`e3.2`/`e3.2.1`** — regulador passar de inspeção de produto para inspeção de processo em cinco anos. Nenhum órgão de classificação indicativa do mundo fez transição metodológica dessa magnitude nesse prazo. E o PL 2338 brasileiro é a evidência do ritmo real: aprovado no Senado em dezembro de 2024, votação final adiada do fim de 2025 para 2026, sem consenso justamente na parte autoral. Regulação sobre este tema anda em anos, não em ciclos de produto.

### Qual disrupção pode simplesmente não se concretizar

**D2 é a mais frágil das três, e por larga margem.** Ela é a única sem produto de massa funcionando, a única sustentada por um estudo pequeno, e a única contra a qual existe evidência direta de fadiga: AI Dungeon, que é a implementação mais longeva da ideia, está em dezenas de jogadores simultâneos. Some-se a frase do fórum de ficção interativa — gera-se mais do que se joga — e a regra do IFComp que exclui do circuito qualquer obra que exija serviço de IA externo durante o jogo.

**Se D2 não se concretizar, o mapa perde `e3`, `e4` e seus seis descendentes — quase metade dos nós.** Mas perde de um jeito específico que vale registrar: `e4` (autoria vira especificação de restrição) **sobrevive sem D2**, porque ele já acontece dentro de D1. Mesmo que a obra final seja fixa e igual para todos, quem a gerou trabalhou especificando restrições, não escrevendo falas. `e3` (perda do referente comum) é o que morre de fato, e com ele a pergunta de segunda ordem que a disciplina levantou sobre "ainda existe a obra?". Nesse cenário, a resposta é: sim, existe — a obra continua sendo uma coisa fixa, só que barata e abundante, e o problema do campo passa a ser inteiramente de descoberta e de valor, não de ontologia.

### Que viés meu entrou aqui

Três, e o terceiro é o pior.

**Viés de fonte.** Metade das evidências quantitativas deste mapa vem de **uma plataforma só**, a Steam, e de **um único mecanismo**, a declaração obrigatória. Escolhi assim porque é onde há número auditável — o censo de 53.597 lançamentos existe, e nada equivalente existe para itch.io, para console ou para a web. Mas isso significa que o mapa enxerga bem o mercado de jogo para PC e enxerga mal literatura, quadrinho, audiovisual e narrativa em plataformas fechadas, que também são o tema. A régua está torta na direção do que tem dado.

**Viés de disponibilidade institucional.** Os casos de prêmio que narrei (Nova Zelândia, Commonwealth, IFComp) estão no mapa porque foram **noticiados em inglês**. Não tenho nenhum caso equivalente da América Latina, da Ásia ou da África — o que não significa que não existam, significa que não os encontrei. A seção 3 apresenta um retrato anglófono como se fosse global, e o `recorte_geografico: global` do frontmatter é otimista.

**Viés de gosto, e este é o que mais me incomoda.** Eu prefiro a tese de que a coautoria desloca o trabalho autoral em vez de eliminá-lo — é uma tese confortável, que não obriga a encarar demissão, e ela organiza `e4`, `e1.2` e boa parte da seção 9. Os dados que tenho não a sustentam com essa segurança: 52% dos profissionais do setor dizem que o impacto é negativo, e a curva acelera. A tese do deslocamento é uma leitura possível dos mesmos fatos que sustentam a tese da substituição, e escolhi a primeira. Quem ler este mapa deve saber que essa escolha foi feita por preferência, não por evidência.

## 8. O que a máquina errou

**Erro 1 — atribuí à GDC um número que a GDC não publica.** Uma busca retornou "narrativa/escritores: 19% de taxa de demissão; game designers: 20%", atribuído ao *State of the Game Industry 2026* da GDC, e escrevi isso no rascunho como dado da GDC. Ao abrir o material oficial da GDC para conferir, o relatório traz demissão agregada (28% no geral, 33% nos EUA, dois terços das AAA) e **não traz recorte de demissão por disciplina**. O recorte por disciplina que a GDC publica é de *sentimento* sobre IA (arte 64%, design e narrativa 63%, programação 59%) — outra coisa. O número de 19% pode existir em alguma tabulação secundária, mas não consegui verificá-lo na fonte primária, e ele está marcado como não confirmado na seção 3. A desconfiança nasceu de um detalhe: 19% e 20% são próximos demais de 18% e 20%, que aparecem em outro lugar do mesmo material, sobre outra coisa.

**Erro 2 — quase montei o mapa em cima de uma literatura que li pela metade.** Ao buscar evidência sobre homogeneização criativa, encontrei e ia citar um resultado de que coescrever com LLM reduz diversidade lexical e de conteúdo — que é exatamente o que um mapa sobre coautoria "quer" citar. A página da ScienceDirect devolveu **HTTP 403** e eu não abri o artigo. Ao buscar substituto abrível, achei um estudo com metodologia maior (mais de 800 participantes, 48 países, 3.414 respostas) que aponta **na direção oposta**: nenhum efeito sobre criatividade individual e *aumento* de diversidade coletiva sob alta exposição. Se eu tivesse citado só o primeiro, teria afirmado como assentado um ponto em que a literatura está em conflito aberto. A seção 3 agora registra o conflito e não escolhe lado.

**Erro 3 — confundi maturidade técnica com maturidade de mercado no descarte de voz sintética.** No primeiro passe, quase mantive voz sintética (ChatTTS, Bark) como candidata a disrupção-raiz, com o argumento de que "há debate real sobre ela". Há — mas o debate é jurídico e trabalhista sobre direitos de voz, não técnico sobre substituição. O critério da Etapa 2 da skill fala em debate sobre *substituição da tecnologia*, e por esse critério voz sintética é madura. A confusão foi minha: tratei "é polêmico" como equivalente a "não está consolidado". Corrigido no descarte da seção 4.

**Erro 4 — aceitei números de mercado de páginas que são anúncio disfarçado de pesquisa.** As buscas sobre narrativa personalizada por leitor devolveram cifras vistosas ("mercado de livro interativo gerado por IA cresceu de US$ 1,7 bi em 2023 para US$ 3,2 bi em 2025", "73% mais conclusão de leitura em histórias personalizadas por IA") em páginas cuja finalidade é vender um produto e que não declaram metodologia nem amostra. Cheguei a anotá-las. Não entraram no documento, e a razão está registrada na seção 12: número redondo sem metodologia, em página de venda, sobre o mercado que a página vende. Consequência real e desconfortável: **D2 ficou sem nenhuma evidência quantitativa de mercado**, e é por isso que ela é a disrupção mais frágil do mapa (seção 7) — não por falta de busca, mas porque o que existe para achar é material promocional.

**Erro 5 — a falha que a rodada anterior desta skill documentou, e que a skill ainda não impede.** O `DUVIDAS.md` de jcsc registra que numa rodada anterior quatro efeitos de terceira ordem receberam prazo **fora** do horizonte pedido, sem aviso, e que a Etapa 4 da skill não checa isso porque a autocrítica dela foi desenhada para rebaixar confiança, não para conferir aderência à entrevista. Essa correção **não foi aplicada ao `SKILL.md`**, deliberadamente, e portanto eu rodei sem essa proteção. Conferi os prazos à mão contra o horizonte de 2031: nenhum passou. Mas três efeitos (`e2.1.1`, `e2.2.1`, `e5.2.1`) foram **ancorados** em 2031 por ser o teto do mapa, e não porque 2031 seja a estimativa honesta — a estimativa honesta é "depois". Ancorar no teto é a mesma falha com o sinal invertido: em vez de estourar o horizonte sem avisar, comprime-se para dentro dele sem avisar. Está avisado, no comentário em prosa da seção 5 e aqui.

**O que não foi erro, e registro para não inflar a lista.** Todos os 16 links da seção 11 foram abertos; nenhuma fonte foi inventada; nenhum nome de produto citado é fictício. Os dois casos em que uma fonte não abriu (ScienceDirect 403) ou não confirmou o que se atribuía a ela (GDC) estão declarados acima em vez de contornados.

## 9. Três cenários para 2031

**Provável.** Em 2031 a maioria dos lançamentos de jogo carrega declaração de uso de IA, e a declaração deixou de dizer qualquer coisa — virou o aviso de cookies do setor, presente em todo lugar e lido por ninguém. A produção de obra narrativa é abundante e barata; a receita continua concentrada em pouquíssimos títulos, como já era antes. A profissão de escritor de jogo não desapareceu: encolheu na base e se deslocou no topo — contrata-se menos gente para escrever falas e mais gente para especificar personagem, tabu e arco, e para editar saída de máquina. O degrau de entrada do ofício é o que de fato sumiu, e quem começou depois de 2027 teve muito mais dificuldade de entrar do que quem já estava dentro. As instituições se dividiram em dois circuitos que não conversam: o circuito de procedência, herdeiro do IFComp e da Commonwealth Foundation, que exige prova de processo humano e cresceu em prestígio na mesma medida em que encolheu em volume; e o circuito aberto, maior e sem critério, onde a curadoria é o único produto escasso. Tradução sobreposta é fato consumado no PC e continua fora dos contratos: todo mundo sabe que acontece, ninguém regula, e a localização oficial se justifica por qualidade e não mais por acesso. A obra que se re-instancia por leitor existe como categoria de nicho respeitada e comercialmente pequena — nem virou o padrão nem morreu.

**Desejável.** O mesmo cenário, com uma diferença que muda tudo: a coautoria com IA ganhou uma moldura de ofício em vez de uma moldura de suspeita. O caminho que a Commonwealth Foundation apontou em 2026 ao recusar o detector e pedir rascunhos, carimbos de tempo e conversa sobre processo virou prática comum — **procedência declarada em vez de detecção automática**. Com isso, dizer "coescrevi com máquina, e aqui está como" deixou de ser confissão e passou a ser descrição de método, com critério público para julgar se foi bem feito. As ferramentas de autoria acompanharam: a superfície de trabalho é estrutura editável — grafo de mundo, restrição de personagem, mapa de estado — e não caixa de prompt, o que dá ao autor controle que ele possa defender e ao leitor um objeto que ele possa citar. O ensino se reorganizou em torno disso a tempo. E a tradução sobreposta foi absorvida em vez de combatida: publicar passou a incluir expor um glossário, uma tabela de nomes e um guia de tom para a camada automática ler — traduzir mal ficou mais difícil do que traduzir bem. Para chegar aqui foi preciso uma coisa só, e nada disso é técnico: alguém precisou fazer o trabalho institucional não pago de organizar critério — exatamente o trabalho que, em 2026, ninguém se ofereceu para fazer.

**Indesejável.** A declaração obrigatória virou rótulo de advertência antes de a tecnologia ficar boa, e a resposta racional do mercado foi parar de declarar. Texto gerado é indetectável de um jeito que arte não é — e a categoria "escrita e diálogo", que já era a menos declarada na Steam em 2026, virou a mais subdeclarada de todas. O resultado não é um mercado com IA nem um mercado sem IA: é um mercado onde ninguém sabe o que está lendo e todo mundo desconfia de tudo. A suspeita passou a recair sobre pessoas: escritores acusados de usar máquina por escreverem limpo demais, prêmios anulados por denúncia anônima, obras retiradas de circulação sem apuração — a versão ruim do caso da Nova Zelândia, em que dois livros saíram de uma premiação por uma capa, multiplicada por mil e sem investigação de um mês. As plataformas responderam com detectores automáticos, que erram nos dois sentidos e cujo erro recai desproporcionalmente sobre quem escreve em língua que não é a sua. O mercado de localização, esse sim, colapsou no meio: a camada gratuita ficou boa o bastante para o consumidor final e o trabalho de adaptação cultural sobreviveu apenas no topo, com a faixa intermediária — onde estava a maior parte dos empregos, inclusive no Brasil — reduzida a revisão paga por linha. **O sinal precoce disso é observável desde já, e é um só: a taxa de declaração de IA parar de subir sem que a adoção pare.** Enquanto declaração e adoção sobem juntas, o sistema é honesto. No dia em que a curva de declaração achatar e os lançamentos continuarem crescendo, a subdeclaração começou — e esse é o dado a vigiar, porque ele é público e mensurável mês a mês.

## 10. O experimento

### Sala de leitura divergente

**O que é.** Uma novela visual curta, gerada, com uma característica única: **cada pessoa da turma recebe uma versão diferente do mesmo capítulo**. Mesmo ponto de partida, mesmos personagens, mesma cena de abertura — e a partir da terceira ou quarta cena o sistema diverge por leitor, ancorado em algumas poucas escolhas e num identificador de sessão. Ninguém sabe, ao ler, que a versão do vizinho é diferente. Depois de todo mundo terminar, a turma é posta para discutir a obra — sem aviso prévio de que as versões divergiam.

Três artefatos: (1) o gerador, com a semente e as restrições explícitas de personagem e de tabu escritas à mão; (2) o **traço** de cada sessão — semente, escolhas, cenas geradas, log completo — salvo e depois exibido lado a lado; (3) o registro da discussão, que é o dado real do experimento.

**Que pergunta sobre o futuro ele ajuda a responder.** A pergunta de segunda ordem que a disciplina levantou e que este mapa não resolve: *se a história se adapta a cada leitor, ainda existe "a obra"? Duas pessoas podem discutir um livro que leram em versões diferentes?* Este mapa colocou `e3` em confiança média por não ter nenhuma medida de comportamento de público — a seção 7 registra isso como ausência de dado, não como distância causal. O experimento produz exatamente o dado ausente, em escala de turma: quanta divergência uma conversa sobre obra aguenta antes de deixar de ser uma conversa sobre a mesma obra. E produz uma segunda coisa que nenhuma pesquisa de mercado dá: **o momento em que as pessoas percebem**. Se elas descobrem sozinhas que leram coisas diferentes, e em quanto tempo, é informação sobre o que é o referente comum de uma obra.

**Que tecnologia emergente ele usa — e por que não dá com tecnologia madura.** Usa geração de cena narrativa em tempo de execução, com restrição explícita de personagem e de tabu, mais geração de imagem por cena. Com tecnologia madura — Ren'Py, Twine, Yarn Spinner — dá para **simular** o experimento pré-escrevendo, digamos, seis versões de cada capítulo e sorteando. E vale fazer isso como controle. Mas não é a mesma coisa, e a diferença é o objeto do experimento: com seis versões pré-escritas, a divergência é **finita, autorada e conhecida**, e duas pessoas que leram a versão 3 leram a mesma coisa. A pergunta de 2031 é sobre divergência aberta, em que nenhum par de leitores compartilha texto e nem o autor sabe o que foi escrito. Isso é irredutível a ramificação pré-escrita — é o que separa a novela ramificada clássica, que é presente maduro, do que este tema chama de emergente.

**O que a turma vai fazer quando testar isso em sala.** Quatro etapas, cerca de 50 minutos.
1. **Ler** (15 min): cada pessoa lê o seu capítulo no próprio aparelho. Silêncio, sem comparar telas. Ninguém é avisado de nada.
2. **Discutir às cegas** (15 min): grupos de quatro recebem perguntas que **pressupõem** obra única — "o que motiva a personagem principal?", "a cena do meio funciona?", "qual foi a melhor fala?". A instrução é discutir, não comparar. O dado a coletar é o cronômetro: **em que minuto o grupo percebe que não leu a mesma coisa**, e o que dispara a percepção — um nome, um fato de enredo, um objeto.
3. **Revelar e comparar traços** (10 min): os traços das quatro sessões são exibidos lado a lado. A pergunta é onde divergiram e se a divergência foi de superfície ou de sentido.
4. **Votar** (10 min): três perguntas fechadas, com voto registrado. *Isto foi uma obra ou quatro?* *Você recomendaria "esta obra" a alguém — e o que exatamente estaria recomendando?* *A discussão do passo 2 foi uma conversa sobre uma obra, ou quatro monólogos que se cruzaram?*

**O que seria um resultado que me faria mudar de ideia.** Dois, em direções opostas, e ambos derrubam parte do mapa.

Se os grupos **não perceberem** a divergência, ou perceberem muito tarde e considerarem irrelevante quando descobrem — se a conversa correr normalmente sobre motivação, ritmo e personagem apesar de o texto ser outro —, então `e3` está errado. O referente comum de uma obra não é o texto; é o mundo, os personagens e a situação, e esses o sistema preserva. Nesse caso a perda do referente comum não é problema, é um não-problema, e D2 deixa de ameaçar a conversa sobre obra — só muda o que se conversa. Metade do galho de D2 cai.

Se a divergência for percebida **imediatamente** e a reação predominante for de frustração — "então não vale a pena discutir", "prefiro ler a versão que todo mundo leu" —, então o mapa está otimista demais na direção oposta, e `e3.1` (a crítica migra do texto para o sistema) é uma saída elegante que ninguém vai querer. Nesse caso a narrativa re-instanciada por leitor não perde por qualidade: perde porque **as pessoas querem ter lido o mesmo livro**, e essa é uma preferência social, não uma limitação técnica — o tipo de coisa que nenhuma melhoria de modelo resolve. Seria a confirmação, em sala, da frase do fórum de ficção interativa: gera-se mais do que se joga, e o motivo é que a obra compartilhada vale por ser compartilhada.

## 11. Fontes

Todas as 16 foram abertas. As que não abriram, ou que não confirmaram o que se atribuía a elas, estão na seção 8.

1. **MangoBox** — `https://www.mangobox.ai/` — Sustenta a existência e o preço da geração de novela visual completa a partir de uma frase (até cinco personagens, US$ 9/mês no Pro). Confiabilidade: é a página do próprio produto, portanto vale como prova de que existe e do que promete, não como prova de qualidade nem de escala — e ela própria não publica número de usuários.
2. **Cinevva — estudo de declaração de IA na Steam, 20/07/2026** — `https://app.cinevva.com/news/2026-07-20-steam-ai-disclosure-study` — Fonte dos números centrais do mapa: 30,8% dos lançamentos de 2026 (19,9% em 2025, 10,9% em 2024), 10-27% das vendas estimadas, ~530 lançamentos com flag por mês, 60-90% do crescimento mensal. Confiabilidade: média-alta — é análise secundária, mas declara a fonte primária (censo de Sulka Haro sobre 53.597 lançamentos), o período e a principal limitação do dado (a flag é binária e não mede dose).
3. **Llama & Griffin — The AI Disclosure Report, Steam Next Fest junho/2026** — `https://www.llamagriffin.com/Data/SteamNextFestJune2026/part-2.html` — Sustenta o recorte por tipo de uso (arte ~60% das declarações; escrita e diálogo na cauda), a série 21,2% (fev/2026) → 26,5% (jun/2026) pela mesma metodologia, e a defasagem entre presença (26,5%) e popularidade (1 dos 10 mais jogados). Confiabilidade: média-alta — amostra declarada (4.382 demos), metodologia consistente entre edições, mas é levantamento privado sem revisão externa.
4. **GDC — State of the Game Industry 2026** — `https://gdconf.com/article/gdc-2026-state-of-the-game-industry-reveals-impact-of-layoffs-generative-ai-and-more/` — Sustenta uso pessoal de IA generativa (36%), a série de sentimento negativo (18% → 30% → 52%), o recorte por disciplina (arte 64%, design e narrativa 63%, programação 59%) e demissões agregadas (28%; 33% nos EUA). Confiabilidade: alta para o que publica — mais de 2.300 respondentes, série histórica, publicação primária. É amostra autosselecionada de profissionais, o que enviesa sentimento. **Não** traz demissão por disciplina (ver seção 8).
5. **IndustrifyAI — Gaming layoffs and AI, 2026** — `https://industrifyai.com/gaming-layoffs-and-ai-what-the-numbers-actually-say-in-2026/` — Origem do número de 19% de demissão em narrativa/escrita e 20% em design, atribuído à GDC 2026. Confiabilidade: **baixa neste ponto específico** — o recorte não consta do material oficial da GDC e não foi confirmado. Citada no documento como não confirmada, deliberadamente, para deixar o rastro do erro.
6. **Euronews — prêmio neozelandês desclassifica dois autores por capa gerada, 18/11/2025** — `https://www.euronews.com/2025/11/18/new-zealand-book-award-disqualifies-two-authors-for-ai-artwork` — Sustenta o caso do Jann Medlicott Acorn Prize (Ockham NZ Book Awards), a regra de agosto de 2025, os dois títulos, o fato de a IA estar na capa e não no texto e de quem notou ter sido um livreiro. Confiabilidade: alta — jornalismo com declarações nominais do júri, da editora e da autora.
7. **Commonwealth Foundation — atualização sobre o prêmio de 2026, 22/06/2026** — `https://commonwealthfoundation.com/2026-cw-prize-update/` — Sustenta a denúncia de maio/2026, a investigação de um mês (rascunhos, documentos com carimbo de tempo, notas, entrevistas), a conclusão de que IA não foi usada, e a recusa deliberada de usar detectores. Confiabilidade: alta como fonte primária da instituição sobre o próprio processo; é parte interessada no desfecho, o que importa para a conclusão mas não para a descrição do método.
8. **IFComp — regras (edição de 2026)** — `https://ifcomp.org/rules/` — Fonte primária da regra literal sobre conteúdo voltado ao jogador e da proibição de exigir serviço de IA externo durante o jogo. Confiabilidade: alta — é o regulamento em vigor, não comentário sobre ele.
9. **Fórum de ficção interativa — competições abertas a genAI em 2026** — `https://intfiction.org/t/interactive-fiction-competitions-open-to-genai-entries-2026/77758` — Sustenta a frase sobre gerar versus jogar, o fato de a competição alternativa não ter saído do papel por falta de quem organizasse, e a restrição posterior do Spring Thing. Confiabilidade: baixa como dado, alta como sinal — é conversa de comunidade, não medição; as opiniões são de participantes identificáveis e ativos no campo, e é assim que está usada.
10. **The Conversation — Byers e Nansen (Universidade de Melbourne), 10/02/2026** — `https://theconversation.com/are-video-game-developers-using-ai-players-want-to-know-but-the-rules-are-patchy-274850` — Sustenta o quadro comparado de políticas de plataforma (Steam com duas categorias e checagem prévia, estreitamento de 2026, itch.io com tag sem exigência para jogos, ausência em console/Epic/GOG) e o número de 15.000 jogos com rótulo no SteamDB. Confiabilidade: alta — autoria acadêmica identificada, editoria com revisão, posição normativa declarada (transparência como direito do consumidor).
11. **LunaTranslator — documentação oficial** — `https://docs.lunatranslator.org/en/` — Sustenta os métodos de extração (hook de memória, OCR embutido, hook de emulador de NS/PSP/PSV/PS2), a variedade de motores de tradução incluindo LLM e offline, e a licença GPLv3. Confiabilidade: alta para capacidade declarada; é documentação do próprio projeto, sem medida independente de qualidade de tradução.
12. **StreamVox — jogar novelas visuais japonesas sem patch de tradução, 07/02/2026 (atualizado 14/08/2026)** — `https://www.streamvox.pro/blog/japanese-visual-novels-no-translation-patch` — Sustenta a abordagem por áudio (não toca no arquivo nem no motor de texto), os 61 idiomas, a limitação honesta (só o que tem voz) e o diagnóstico sobre localização oficial e patch de fã. Confiabilidade: média — é conteúdo de marketing do produto, portanto vale como prova de capacidade anunciada e de posicionamento, não como avaliação independente; a limitação declarada aumenta a credibilidade do resto.
13. **Pan, Andronis, Hayek, Wilkinson, Lasy, Parry, Gadney, Smith e Grierson — "Guiding Generative Storytelling with Knowledge Graphs", arXiv:2505.24803 (30/05/2025; publicado em 29/12/2025)** — `https://arxiv.org/abs/2505.24803` — Sustenta o achado de que grafo de conhecimento editável melhora narrativa orientada a ação e **não** melhora narrativa introspectiva, e o relato de forte sensação de controle ao editar a estrutura. Confiabilidade: média — publicado e com autoria institucional, mas estudo de usuário com **15 participantes**, o que limita generalização (registrado na seção 7).
14. **Ashkinaze, Mendelsohn, Qiwei, Budak e Gilbert — "How AI Ideas Affect the Creativity, Diversity, and Evolution of Human Ideas", arXiv:2401.13481v3** — `https://arxiv.org/html/2401.13481v3` — Sustenta a ausência de efeito sobre criatividade individual (F(4;19,86)=0,12; p=0,97) e o aumento de diversidade coletiva sob alta exposição (δ=0,31 e δ=0,26; p=0,001), contra a hipótese de homogeneização. Confiabilidade: alta para o desenho — mais de 800 participantes de 48 países, 3.414 respostas, cinco condições, experimento dinâmico. É sobre ideação, não sobre escrita de ficção longa: a transposição para narrativa é minha e é discutível.
15. **ISTOÉ — Pesquisa Game Brasil 2026** — `https://istoe.com.br/brasileiros-games-ia-pgb` — Sustenta os números brasileiros: 39,3% comprariam jogo com arte, dublagem e texto substancialmente feitos com IA; 40% ao menos considerariam; 45,7% preocupados com perda de emprego. Confiabilidade: média-alta — a matéria declara amostra (mais de 7.000, de 16 a 66 anos), campo (5 a 13/03/2026) e realizadores (Go Gamers, SX Group, Blend New Research); é cobertura jornalística de pesquisa de mercado, não o relatório primário.
16. **Copyright Alliance — análise da Parte 2 do relatório Copyright and AI do US Copyright Office (relatório de 29/01/2025)** — `https://copyrightalliance.org/ai-report-part-2-copyrightability/` — Sustenta a conclusão de que prompt não constitui autoria suficiente, de que prompting iterativo não resolve, e a exceção condicional caso a tecnologia evolua. Confiabilidade: média-alta — reproduz e cita o relatório oficial, mas é organização de defesa de detentores de direitos, com interesse na leitura restritiva. A conclusão citada é a do Escritório e é verificável nele; a moldura é da entidade.

**Fontes usadas apenas como pista e não citadas como evidência** (aparecem na seção 12): resultados de busca sobre demissões agregadas do setor de entretenimento, sobre o tamanho do mercado de localização de jogos, sobre a decisão da Suprema Corte dos EUA em *Thaler* (certiorari negado em 02/03/2026) e sobre a tramitação do PL 2338/2023. Delas, PL 2338 e mercado de localização estão mencionados no texto **com a origem declarada como resultado de busca não aberto** — e é por isso que aparecem sem número exato e sem link na seção 3.

## 12. Anexo — o levantamento bruto

### 12.1 A entrevista, na íntegra (Etapa 1 da skill)

As cinco perguntas foram feitas exatamente como o `SKILL.md` determina, antes de qualquer geração de conteúdo.

> 1. **Horizonte temporal**: para que ano você quer projetar os efeitos? (ex: 2028, 2030, 2035)
> 2. **Público-alvo**: quem vai ler/usar esse mapa? (investidor, desenvolvedor, gestor de produto, você mesmo)
> 3. **Recorte geográfico**: mercado global, ou uma região específica?
> 4. **Descartes explícitos**: existe algo que você já sabe que NÃO quer que o mapa cubra?
> 5. **Viés desejado**: você quer um mapa otimista, pessimista, ou neutro/cético?

Respostas recebidas, na íntegra:

> - Tema: "Narrativa gerativa e coautoria" (tema 8 de 19 da disciplina; família "Simulação e mundos").
> - Horizonte: 2031. Público: quem projeta mídia e interação. Recorte: global, com uma nota sobre o Brasil.
> - Descartado de início: o que já é comum em produto de massa (a régua da disciplina); nenhuma outra exclusão.
> - Disrupção suspeita: nenhuma — descubra. Viés: neutro. Ideias óbvias a excluir: as que servem para qualquer tema.
> - O que me faria mudar de ideia: evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a tecnologia não rompe nada (só melhora o que existe).
> - Profundidade: três ordens. Modo: a partir de uma inovação/tema, não de um setor.
> - Zona de interesse do autor: "Simulação e mundos". Login do autor: jcsc. Skill usada: futurizacao-jcsc.

**Nenhuma pergunta ficou sem resposta**; não há "tanto faz" a registrar. Duas observações sobre interpretação, declaradas em vez de assumidas em silêncio:

- O **descarte** pedido ("o que já é comum em produto de massa") é a mesma régua do critério de maturidade da Etapa 2 da skill, e por isso o reforça em vez de acrescentar exclusão nova. Tratei como uma régua só, aplicada na seção 4.
- O **critério de mudança de ideia** informado na entrevista — "evidência de que a adoção já passou da maioria inicial (Rogers), ou de que a tecnologia não rompe nada" — não é campo do formato, mas foi usado operacionalmente: é ele que descartou voz sintética, texto→imagem e MT neural de pipeline (passaram da maioria inicial) e que quase descartou D2 (ver seção 7, onde ela é declarada a mais frágil).

### 12.2 As buscas feitas, na ordem, e o que cada uma rendeu

| # | Busca | Rendeu |
|---|---|---|
| 1 | `AI generated visual novel from a prompt 2026 mangobox` | MangoBox confirmado como produto real; muita página de SEO comparativa (llamagen, seeles, summerengine, jenova, chatforce) descartada |
| 2 | `generative interactive narrative research 2026 arXiv LLM story game` | Trilha acadêmica: grafos de conhecimento (2505.24803), NARRA-Gym, LIGS, drama interativo por LLM (2502.17878) |
| 3 | `Steam AI disclosure percentage games generative AI 2026 statistics` | Série 10,9% → 19,9% → 30,8%; descolamento entre lançamentos e vendas; projeção de >50% em 2027-2028 |
| 4 | `game localization industry AI impact 2026 translators jobs revenue` | Projeções de mercado (crescimento de 8-9% ao ano) e discurso de "modelo híbrido"; nenhuma fonte primária aberta — usado só como contraevidência declarada |
| 5 | `literary prize AI co-written novel 2026 award disclosure rule` | Os dois casos institucionais do mapa (Nova Zelândia e Commonwealth) |
| 6 | `Commonwealth Short Story Prize 2026 AI generated winners allegations` | Nuance decisiva: houve denúncia, houve investigação, e a conclusão foi que IA **não** foi usada |
| 7 | `itch.io AI generated content policy tag 2026 disclosure` | Declaração obrigatória para assets, opcional para jogos; tags "AI Generated"/"No AI"; justificativa de ambiguidade jurídica |
| 8 | `LunaTranslator real-time game translation overlay OCR 2026` | LunaTranslator, RSTGameTranslation, Thaluna, Torii — o nicho é maior do que um projeto só |
| 9 | `US Copyright Office AI authorship human authorship report 2026 registration` | "Prompt não é autoria"; *Thaler* com certiorari negado em 02/03/2026 (não aberto, não contado como fonte) |
| 10 | `PL 2338 marco legal inteligência artificial Brasil 2026 direito autoral` | Aprovado no Senado em 10/12/2024, na Câmara, votação final adiada para 2026, sem consenso em direito autoral |
| 11 | `narrative designer game writer jobs AI 2026 layoffs writers guild` | Origem do 19% não confirmado (ver seção 8) e do agregado de 45.000 empregos perdidos no setor |
| 12 | `GDC State of the Game Industry 2026 survey generative AI developers percentage` | A série de sentimento e o recorte por disciplina — o dado mais forte da seção 3 |
| 13 | `IFComp interactive fiction competition AI generated rules 2026 intfiction` | A regra de 2026 e a proibição de serviço de IA externo durante o jogo |
| 14 | `script to video AI 2026 Sora Pika Luma long form narrative consistency` | Fronteira técnica de ~60s de coerência multi-plano; consistência de personagem frágil. Usado só para justificar o descarte parcial (tema 12) |
| 15 | `Brasil jogos narrativos IA generativa 2026 tradução localização mercado brasileiro` | PGB 2026; mercado brasileiro de games; cursos públicos de localização com IA (CULTSP Pro) |
| 16 | `personalized adaptive story AI per reader each playthrough different 2026 product` | **Nada aproveitável** — ver 12.4 |
| 17 | `study human-AI co-writing homogenization creativity ideas less diverse` | O conflito na literatura (ScienceDirect bloqueado × arXiv 2401.13481 aberto) |
| 18 | `"Guiding Generative Storytelling with Knowledge Graphs" arxiv findings` | Confirmação do achado de ação × introspecção |
| 19 | `AI Dungeon NovelAI 2026 users decline Character.AI interactive fiction scale` | A decadência do AI Dungeon na Steam (48 → 26 simultâneos) — contraevidência central |
| 20 | `2026 game publisher ships AI real-time translation feature unofficial patch visual novel` | StreamVox e o ecossistema de sobreposição; nenhum caso de publisher embutindo o recurso |
| 21 | `"AI slop" discoverability storefront curation 2026 flood of generated games` | A crise de descoberta: 3.455 demos no Next Fest de fev/2026; três jogos com ~43% da receita da Steam no início de 2026 |

### 12.3 Todos os candidatos a disrupção-raiz cogitados, e o destino de cada um

| Candidato | Destino | Motivo |
|---|---|---|
| Artefato narrativo completo a partir de intenção curta | **Aceito (D1)** | Rompe a unidade mínima de produção; debate real e acelerando; efeito comercial contestado pelos próprios dados |
| Obra re-instanciada por leitor em tempo de execução | **Aceito (D2)** | Rompe a obra como artefato fixo e a inspecionabilidade; sem produto de massa, com debate aberto |
| Tradução sobreposta em tempo real pelo leitor | **Aceito (D3)** | Rompe o vínculo obra-língua e tira a decisão de localização de quem publica; nicho, sem moldura contratual |
| Engine de novela visual (Ren'Py, Monogatari) | Descartado | Padrão há mais de uma década; é alvo de saída da geração, não ameaçado por ela |
| Ferramenta de diálogo ramificado (Twine, Inform 7, Yarn Spinner, Dialogic, Arrow) | Descartado | Consolidadas; a ramificação pré-escrita é presente maduro |
| Texto → imagem | Descartado | Consolidado; ~60% das declarações da Steam; é insumo, e como mídia é tema 12 |
| Voz sintética (ChatTTS, Bark) | Descartado | Madura; o debate é jurídico e trabalhista, não sobre substituição técnica (ver erro 3, seção 8) |
| MT neural como primeira passada de localização | Descartado | Já é o padrão do setor com revisão humana |
| Chatbot de personagem (Character.AI, Inworld) | Descartado | Produto de massa consolidado; e o personagem que age num mundo é o tema 7 |
| Geração procedural de mapa e mundo (Fantasy-Map-Generator) | Descartado | Procedural clássico é maduro; regras em vez de histórias é o tema 14 |
| Roteiro → vídeo (Sora, Kling, Pika, Luma, AIComicBuilder) | Descarte parcial | Entra como insumo de D1; como mídia é tema 12 |
| Worldbuilding offline em Markdown (Chronicler) | Descartado | Ferramenta de organização, não ruptura; não muda quem produz o quê |
| "Agente narrativo com memória ilimitada" | Descartado | Nenhuma fonte aberta e verificável sustenta a capacidade; só material promocional (12.4) |

### 12.4 Buscas que não deram em nada, e o que foi recusado

**A busca #16 (narrativa personalizada por leitor) foi o fracasso mais instrutivo do levantamento.** Ela devolveu quase exclusivamente páginas de um mesmo domínio de marketing (`jenova.ai`) com títulos gerados em série — "AI Story Game: Play Infinite Narratives That Remember Everything (March 2026)", "AI Interactive Stories: Play Infinite Narratives That Adapt to You (March 2026)" — e um agregador de "20 avanços". Nenhuma declara metodologia, amostra ou origem dos números.

Cifras que apareceram nessas páginas e que **recusei citar**:
- "Mercado de livro interativo gerado por IA cresceu de US$ 1,7 bi (2023) para US$ 3,2 bi (2025)."
- "Mercado global de jogo de narrativa personalizada por IA valia US$ 3,8 bi em 2025 e chegará a US$ 19,6 bi em 2034."
- "Conteúdo interativo gera 2× de engajamento; histórias personalizadas por IA têm 73% mais conclusão."

Motivo da recusa, em uma linha: **são números de mercado publicados por quem vende o mercado, sem metodologia, amostra ou fonte primária**. O 73% é o pior — é uma métrica de efeito comportamental sem nenhum desenho experimental declarado. A consequência está assumida no corpo do documento: D2 ficou sem evidência quantitativa de mercado, e é por isso que é a disrupção mais frágil das três.

**Outras buscas de rendimento baixo:**
- A busca por publisher grande embutindo tradução em tempo real (#20) **não achou nenhum caso**. Isso é resultado, não falha: sustenta que D3 continua fora do controle institucional e alimenta o wildcard 2.
- A busca por competição de ficção interativa aberta a IA (#13) achou o oposto do procurado — fechamento no IFComp e uma competição alternativa que não nasceu. Também é resultado, e virou sinal fraco na seção 6.
- A busca sobre localização (#4) devolveu quase só relatórios de mercado pagos com números divergentes entre si (US$ 3,90 bi em 2025 numa fonte, US$ 1,5-1,7 bi noutra, para o que parece ser o mesmo mercado). Nenhum foi aberto; a divergência entre eles é a razão de o mapa falar em "crescimento de 8-9% ao ano" sem ancorar valor absoluto.

**Uma fonte bloqueada:** o artigo da ScienceDirect sobre efeito homogeneizador de LLM na diversidade criativa devolveu **HTTP 403**. Não foi citado. A alternativa aberta (arXiv 2401.13481) aponta em sentido contrário, e o conflito está registrado na seção 3 em vez de resolvido por conveniência.

### 12.5 Efeitos gerados e cortados

Cortados por serem genéricos — serviriam para qualquer tema de IA, e a entrevista pediu explicitamente que ficassem de fora:

- "Aumenta a demanda por profissionais que sabem usar IA."
- "Empresas que adotarem antes terão vantagem competitiva."
- "Surgem novas profissões que não existem hoje."
- "Questões éticas ganham centralidade no debate público."
- "O custo de energia da inferência vira restrição." *(verdadeiro e relevante, mas é efeito da infraestrutura de IA, não da narrativa gerativa — pertence a outro mapa)*

Cortados por serem de quarta ordem (limite de três níveis da skill), com registro do ponto de corte:

- De `e1.2.1` (some o degrau de entrada) → **mudança na composição demográfica de quem escreve narrativa**: a profissão fica acessível principalmente a quem já tem currículo, reproduzindo quem já estava dentro. Mencionado em prosa na seção 5.
- De `e3.2.1` (laudo de comportamento em vez de laudo de conteúdo) → **formação de um mercado de auditoria de sistema narrativo, com metodologia disputada**. Mencionado em prosa na seção 5.
- De `e5.3.1` (obra ganha público antes de editor) → **inversão da cadeia editorial em línguas menores: o editor passa a comprar direito de obra que já tem leitor estrangeiro**. Não coube.
- De `e1.1.1` (selo "feito por humanos" auditável) → **disputa jurídica sobre publicidade enganosa em selo de procedência**, quando o selo for violado. Não coube.

Cortados por não se sustentarem sob a Etapa 4, com o motivo:

- ~~"Escolas de escrita criativa fecham por falta de demanda"~~ — extrapolação sem mecanismo. A evidência de campo aponta o contrário: a demanda por critério de autoria está **subindo** (regra do IFComp, prêmios, selos), e critério se ensina.
- ~~"O mercado de novela visual é o primeiro a ser inteiramente automatizado"~~ — afirma prioridade temporal sem base. O dado da Steam mostra que a geração entrou primeiro pela **arte** (~60% das declarações) e por último pela escrita, o que sugere o inverso: gêneros intensivos em texto são os mais resistentes, não os mais expostos.
- ~~"Os motores de novela visual são substituídos por plataformas gerativas proprietárias"~~ — ignora que Ren'Py e Twine são gratuitos, abertos e já instalados na cabeça de quem os usa. A substituição de ferramenta de autoria por produto proprietário pago é exatamente o movimento que a história desse campo nunca fez.
- ~~"Prêmios literários passam a ter categoria de coautoria com IA até 2031"~~ — a direção observada em 2026 é oposta (exclusão na Nova Zelândia, proibição no IFComp). Rebaixado de efeito a **wildcard 4** na seção 6, que é o lugar honesto dele.

### 12.6 Verificação do bloco YAML contra a entrevista

Checagem feita à mão, por causa do que o `DUVIDAS.md` registra sobre a rodada anterior desta skill.

- **Profundidade**: 3 níveis. Nenhum `e*.*.*.*`. ✅
- **Ids únicos e hierárquicos**: e1, e2, e3, e4, e5 · e1.1, e1.2, e2.1, e2.2, e3.1, e3.2, e4.1, e5.1, e5.2, e5.3 · e1.1.1, e1.2.1, e2.1.1, e2.2.1, e3.1.1, e3.2.1, e4.1.1, e5.1.1, e5.2.1, e5.3.1. Sem repetição. ✅
- **Contagem × frontmatter**: 5 de 1ª ordem, 10 de 2ª, 10 de 3ª — bate com `efeitos_ordem_1: 5`, `efeitos_ordem_2: 10`, `efeitos_ordem_3: 10`. ✅
- **Todo efeito tem `sinal`, `prazo` e `confianca`**: conferido nó a nó. ✅
- **Nenhum `prazo` excede o `horizonte: 2031`**: menor 2027, maior 2031. ✅ — com a ressalva da ancoragem no teto declarada na seção 5 e no erro 5 da seção 8.
- **Nenhum `efeito` em forma de pergunta**: todos em frase afirmativa. ✅
- **Distribuição de confiança**: 1 alta (`e2`), 11 média, 12 baixa. Toda a terceira ordem está em `baixa` exceto `e5.1.1`, que está em `baixa` após rebaixamento. Isso é o esperado pelo formato. ✅

### 12.7 O que ficaria de fora de qualquer versão pública

Duas coisas, registradas aqui porque a seção 12 é privada e é a matéria-prima do processamento posterior.

**A primeira é a fragilidade da base numérica.** Este mapa parece quantitativo e é, em boa parte, um mapa sobre **uma plataforma** (Steam) medida por **um mecanismo** (declaração obrigatória) cuja própria fonte avisa que é binário e não mede dose. Tirados os números da Steam e da GDC, o que resta é qualitativo: três casos institucionais, dois estudos acadêmicos pequenos ou de escopo adjacente, duas ferramentas de nicho e uma pesquisa de opinião brasileira. Qualquer peça pública gerada a partir daqui deve carregar essa ressalva, ou vai transmitir mais certeza do que existe.

**A segunda é que o mapa tem uma aposta escondida, e ela deve ficar explícita.** As três disrupções foram escolhidas porque rompem **autoria** — quem escreve, quem assina, quem é pago. Havia um recorte alternativo igualmente defensável, centrado em **recepção**: a atenção como recurso escasso, a curadoria como produto, a obra que compete com um volume infinito de obra parecida. Esse mapa alternativo usaria as mesmas fontes e chegaria a efeitos bem diferentes — e provavelmente a conclusões menos confortáveis, porque num mapa de recepção o escritor não se desloca para outro lugar: ele desaparece da conta, porque a conta não é sobre quem produz. Escolhi o recorte de autoria porque é o que o tema pede ("o que isso faz com autoria"). A escolha está declarada aqui para que quem processar este documento saiba que foi uma escolha.
