---
tema: "Mídia sintética controlável: vídeo e imagem"
slug: midia-sintetica-controlavel-video-e-imagem
autor_login: vafs
zona_de_interesse: Percepção e mídia sintética
data: 2026-09-11
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 9
efeitos_ordem_2: 14
efeitos_ordem_3: 19
tecnologias_citadas: [ControlNet, EbSynth, Pika, Luma Dream Machine, Runway, Kling 3.0 Motion Control, Sora, Veo, FLUX, ComfyUI, Rive, Cavalry, Remotion, satori, Graphite, Pixel Composer, InvokeAI, diffusers, StabilityMatrix, Magnific, Adobe Firefly, Autodesk Flow Studio, Wonder Dynamics, VAR (Visual Autoregressive Modeling), Odyssey-2, Project Genie, C2PA Content Credentials, pix2pix, CycleGAN]
fontes: 20
confianca: media
experimento: "Banco de dirigibilidade — mede quanto de uma intenção visual sobrevive em três regimes de controle e o que sobra da procedência depois da distribuição"
skill_usada: futurizacao-vafs
publico_ok: false
---

## 1. Resumo

Vídeo por prompt já é produto de massa; o que está em disputa agora é o **controle** — aplicar
efeito numa região do quadro, pintar um quadro-chave e propagá-lo, fixar primeiro e último
quadro, transferir o movimento de uma performance para um personagem parado, montar a geração
como grafo de nós. Este mapa parte daí e identifica quatro disrupções-raiz: (1) o controle fino
sobre a geração, que muda a unidade de trabalho do take para a região e o quadro; (2) a peça
sintética que deixa de ser arquivo e vira programa versionável; (3) a imagem em movimento que
responde a evento e é gerada de forma causal em tempo real, apagando a fronteira entre vídeo e
interface; e (4) a disputa de arquitetura entre geração por escala (autoregressiva) e difusão,
que ameaça justamente o ecossistema de controle construído em cima da difusão. Os efeitos
derivados vão da recomposição do ofício (a execução intermediária perde demanda antes da
direção) ao colapso do vídeo isolado como prova — porque o que derruba a prova não é a
qualidade da falsificação, é a **dirigibilidade** dela. A resposta institucional já começou:
regra de rotulagem de conteúdo sintético na Europa e no Brasil eleitoral, festivais fechando
inscrição para IA generativa, e uma proposta de regra de prova nos EUA que voltou para revisão
em junho de 2026. Confiança média no conjunto, baixa na terceira ordem, e um viés declarado:
o mapa foi pedido neutro e a zona de interesse do autor é percepção e mídia sintética.

## 2. O tema

O objeto aqui é a **imagem em movimento como mídia sintética dirigível** — não a história
gerada (tema 8), não o som e a voz (tema 13), não o design procedural sem IA (tema 14). A
distinção que organiza tudo é entre *produzir* e *dirigir*. Até pouco tempo atrás, gerar um
plano de vídeo era um sorteio: escrevia-se um prompt, rodava-se n vezes, escolhia-se o menos
ruim. Cada nova tentativa jogava fora tudo que tinha dado certo na anterior. Isso não é
ferramenta profissional — é máquina caça-níquel com boa taxa de retorno.

O que mudou é que a geração ficou boa o bastante para que o gargalo deixasse de ser a
qualidade do resultado e passasse a ser a **especificação da intenção**. E é aí que mídia e
interação se encontram de verdade: dirigir uma geração é um problema de interface. Região,
máscara, quadro-chave, curva de câmera, grafo de nós, máquina de estados — são todos formatos
de dizer a uma máquina o que se quer, com granularidade diferente. A pergunta de design não é
mais "que prompt escrever", é "que superfície de controle expor, e a que custo cognitivo".

Isso merece mapa de futuro, e não levantamento de estado da arte, por três razões. Primeiro,
porque os efeitos não estão no produto, estão na cadeia: quem executa, quem aprova, quem
credita, quem prova. Segundo, porque existe uma disputa técnica em aberto — difusão contra
geração por escala — cujo desfecho redefine sobre o que a camada de controle é construída.
Terceiro, porque a resposta institucional já está sendo escrita agora, em texto legal e em
regulamento de festival, antes que a tecnologia se estabilize; e regra escrita cedo tem o
hábito de durar mais que a condição que a motivou.

## 3. Onde isso está hoje

**A camada de controle já tem linhagem e produto.** A raiz técnica do controle espacial sobre
difusão é o ControlNet, de Lvmin Zhang, Anyi Rao e Maneesh Agrawala, submetido em fevereiro de
2023: uma arquitetura que trava o modelo grande pré-treinado e adiciona condicionamento
espacial — bordas, profundidade, segmentação, pose humana — por camadas de convolução
inicializadas em zero, treinável tanto com menos de 50 mil quanto com mais de 1 milhão de
exemplos (fonte 3). A raiz *não generativa* é anterior e continua viva: "Stylizing Video by
Example", de Jamriška, Sochorová, Texler, Lukáč, Fišer, Lu, Shechtman e Sýkora (ACM TOG 38(4),
art. 107, 2019) — o artigo por trás do EbSynth — em que o artista estiliza à mão um ou mais
quadros-chave e o método propaga a estilização para o resto da sequência, usando síntese por
patches guiada, com mesclagem temporal que preserva coerência de textura, contraste e alta
frequência (fonte 4). É controle sem modelo generativo, e segue sendo a saída mais previsível
para rotoscopia estilizada.

**No produto comercial, o vocabulário de venda já é o do controle.** A página do Kling 3.0 na
Runway anuncia, nesta ordem: fixar primeiro e último quadro e deixar o modelo preencher o
movimento entre eles; *Motion Control*, que anima uma imagem parada de personagem usando o
movimento de um vídeo de performance; geração de diálogo, som ambiente e efeitos junto com a
imagem; e sequências multi-plano que mantêm personagem e estilo consistentes entre cortes
(fonte 11). Note o que **não** está lá: nenhuma promessa de "escreva e receba". A promessa é
de direção.

**A geração como grafo é um ecossistema, não um recurso.** O ComfyUI se descreve como "o
padrão aberto para IA visual", com canvas infinito de nós em que "toda decisão é visível e
todo passo é inspecionável", declarando mais de 60 mil nós, milhares de workflows e 132 mil
estrelas no GitHub, com suporte a modelos de vídeo, imagem e áudio de fornecedores diferentes
no mesmo grafo (fonte 12). A frase que resume a proposta de valor é literal: "controle completo
sobre cada modelo, cada nó, cada passo, cada saída".

**A animação que responde já é infraestrutura de produto.** O Rive define máquina de estados
como "uma forma visual de conectar animações e definir a lógica que dirige as transições", com
estados, transições, grafo e camadas, produzindo "motion graphics interativo pronto para ser
implementado no seu produto, app, jogo ou site" sem handoff complexo (fonte 13). E o mesmo
arquivo roda em runtimes oficiais para Web (JS), React, React Native, iOS, Android, Flutter,
Unity, Unreal, C++ (Mac/Linux/Windows) e C# — com a ressalva, dita pela própria documentação,
de que certos recursos podem não estar disponíveis em um runtime específico (fonte 14).

**A geração causal em tempo real saiu do artigo.** A Odyssey descreve o Odyssey-2 como um
"world model" que gera vídeo interativo com um quadro novo a cada 50 milissegundos (20 qps),
de forma "causal e autoregressiva, gerando cada quadro apenas a partir do contexto dos quadros
anteriores e das suas ações", moldável em tempo real por texto (fonte 15). Do lado do
incumbente, o Google começou a liberar o Project Genie em 29 de janeiro de 2026 para assinantes
do AI Ultra nos EUA: mundos jogáveis gerados por descrição, sessões limitadas a 60 segundos,
720p, 20 a 24 quadros por segundo, com o próprio anúncio registrando que os mundos podem violar
a física, não corresponder ao prompt e ter latência de controle alta (fonte 16). Ou seja:
funciona, é público, e ainda é claramente early adopter.

**A disputa de arquitetura tem um marco datado.** "Visual Autoregressive Modeling: Scalable
Image Generation via Next-Scale Prediction", de Keyu Tian, Yi Jiang, Zehuan Yuan, Bingyue Peng
e Liwei Wang (arXiv, abril de 2024), redefine o aprendizado autoregressivo sobre imagem como
predição da *próxima escala* em vez do próximo token em varredura: FID de 18,65 para 1,73, IS
de 80,4 para 350,2 no ImageNet 256×256, cerca de 20× mais rápido na inferência, com leis de
escala de correlação próxima a -0,998 e generalização zero-shot para inpainting, outpainting e
edição (fonte 1). Foi um dos dois melhores artigos da trilha principal do NeurIPS 2024
(fonte 2). É o sinal técnico de que a difusão pode não ser o fim da história — e o que importa
aqui não é o benchmark, é a consequência: a camada de controle de hoje foi construída em cima
da mecânica específica da difusão.

**A resposta institucional já está escrita, e é o dado mais duro deste mapa.** O Artigo 50 do
AI Act europeu entra em vigor em **2 de agosto de 2026**: quem fornece sistema que gera áudio,
imagem, vídeo ou texto sintético tem de marcar a saída em formato legível por máquina e
detectável como artificialmente gerada ou manipulada, de forma "eficaz, interoperável, robusta
e confiável na medida do tecnicamente viável"; e quem implanta deepfake tem de divulgar —
com isenções para edição assistiva que não altera substancialmente o insumo e regime reduzido
para obra artística, criativa, satírica ou ficcional (fonte 6). A C2PA, coalizão sob comitê
diretor com Adobe, Amazon, BBC, Google, Meta, Microsoft, OpenAI, Publicis, Sony, TikTok e
Truepic, mantém a especificação aberta de proveniência na versão 2.3, com a página atualizada
em 8 de janeiro de 2026 (fonte 5).

**No Brasil, a régua saiu antes da lei geral.** O PL 2338/2023, o marco legal da IA, foi
aprovado no plenário do Senado em 10 de dezembro de 2024 e remetido à Câmara dos Deputados em
17 de março de 2025, onde segue (fonte 17). Enquanto isso, a Justiça Eleitoral já legislou na
prática: análise da coluna Observatório das Eleições identifica 403 decisões da Justiça
Eleitoral envolvendo deepfake entre 2020 e julho de 2026, com crescimento de 356% nos casos de
alta relevância entre 2024 e 2026, disputando a aplicação do art. 9º-B (transparência sobre
conteúdo sintético) e do art. 9º-C, §1º (proibição de deepfake) da Resolução TSE 23.610/2019 —
e com divergência aberta sobre se o conteúdo precisa ter verossimilhança suficiente para ser
proibido (fonte 19). A regulamentação específica do ciclo de 2026 exige rótulo explícito e
destacado em material de campanha criado ou alterado por IA, proíbe publicar peça nova de IA
nas 72 horas antes e 24 horas depois da votação, veda chatbot e avatar simulando conversa entre
candidato e eleitor, e prevê inversão do ônus da prova quando demonstrar a irregularidade for
excessivamente oneroso (fonte 20). Na publicidade, o CONAR publicou novo Guia em maio de 2026,
vigente desde 1º de junho: as regras valem "independentemente da tecnologia empregada", e IA
generativa, influenciador virtual, avatar e deepfake não afastam responsabilidade sobre
veracidade, transparência e risco de engano (fonte 18).

**E o circuito cultural começou a desenhar fronteira.** O Cinema St. Louis anunciou que o
St. Louis International Film Festival e o St. Louis Filmmakers Showcase deixarão de aceitar
filmes feitos com ferramentas de IA generativa a partir de 2027, mantendo permitida a IA já
embutida em software de edição — a diretora de curadoria formula a linha com precisão
operacional: "sempre foi possível trocar a cor da camisa de alguém [com edição digital], e isso
continua ok. Mas criar essa camisa do nada, isso não é permitido" (fonte 8). Em Cannes 2026, o
delegado-geral Thierry Frémaux declarou que o festival está "com os artistas, com os roteiristas
e com todos nessas profissões", propôs rotular filmes *sem* inteligência artificial de forma
análoga à certificação de alimento orgânico, e o festival abriu sob carta aberta de milhares de
atores e cineastas franceses denunciando que as ferramentas estavam "saqueando" o setor — ao
mesmo tempo em que anunciava patrocínio plurianual da Meta e exibia documentário de Steven
Soderbergh que usou IA da Meta para gerar vídeo de John Lennon e Yoko Ono (fonte 9).

**Os números de produtividade que circulam são de fornecedor, e precisam ser lidos assim.**
Em cobertura da própria Autodesk sobre Cannes 2026, estúdios de animação usando o Flow Studio
relatam ter passado de cerca de 30 segundos de trabalho finalizado por dia para três minutos e
meio, e analistas do Morgan Stanley estimam que a IA generativa pode reduzir custos de produção
de cinema e TV em até 30% (fonte 10). São as duas cifras mais citadas do setor hoje; a primeira
é relato de cliente publicado pelo fabricante, a segunda é estimativa de banco. Nenhuma das
duas é medição independente.

**O que já é maduro e, por decisão de recorte, fica fora da seção 4:** geração de imagem e de
vídeo por prompt simples, edição de vídeo em linha do tempo, motion graphics feito à mão,
upscaling. São a régua da disciplina — o que já é comum em produto de massa não entra como
disrupção. O registro completo dos testes de rejeição está na seção 12.

## 4. As disrupções-raiz

Cada candidata abaixo passou pelos três testes da Fase 2 da skill (madura? emergente?
disruptiva?). As rejeitadas estão na seção 12, com o motivo. O critério do Teste 3 é duro de
propósito: só é disrupção quando existe ator ou prática **nomeável** que perde a razão de
existir — não basta ficar mais rápido, mais barato ou mais acessível.

### D1 — O controle fino sobre a geração: região, quadro-chave, transferência de movimento

**O que rompe.** Rompe o take como unidade indivisível de trabalho. Quando dá para aplicar
efeito numa região específica do quadro, pintar um quadro-chave e propagá-lo pela sequência,
fixar primeiro e último quadro, ou transferir o movimento de uma performance para um personagem
parado, a operação "regerar tudo porque uma parte saiu errada" deixa de ser necessária. Quem
perde a razão de existir é a **prática de execução intermediária** cujo valor era refazer à mão
o que a máquina errou — rotoscopia manual de limpeza, inbetween de correção, recomposição de
plano inteiro por causa de um detalhe — e, junto com ela, a separação nítida entre a etapa de
produção e a etapa de pós.

**Por que agora e não há cinco anos.** Em 2021 não havia camada de condicionamento espacial
sobre modelo grande pré-treinado: o ControlNet é de 2023 (fonte 3), e a tradução disso para
produto de vídeo com controle de movimento e de quadros-chave é do ciclo 2025–2026 (fonte 11).
A propagação por quadro-chave existia desde 2019 (fonte 4), mas isolada, sem modelo generativo
com que compor.

**O que ainda falta.** Falta consistência de identidade entre planos longos sem intervenção
manual, falta uma superfície de controle que não exija montar grafo, e falta interoperabilidade:
hoje cada controle é específico do modelo que o expõe, e trocar de modelo joga fora a direção
já feita.

### D2 — A peça sintética deixa de ser arquivo e vira programa

**O que rompe.** Rompe o arquivo renderizado como entregável e como unidade de autoria. Quando
a peça é um grafo de nós (ComfyUI), um componente em código (Remotion, satori) ou um motor
procedural de nós (Graphite, Cavalry), o que se entrega é a *receita*, reexecutável e
versionável — e o render é uma instância dela. Quem perde a razão de existir é o **acervo de
assets prontos como produto final** e o fluxo de aprovação baseado em "arquivo entregue,
projeto encerrado": um grafo não encerra, ele é reexecutado com parâmetros novos.

**Por que agora.** Porque o ecossistema de nós atingiu massa crítica fora do laboratório — mais
de 60 mil nós e 132 mil estrelas de GitHub em um único projeto (fonte 12) — e porque a
composição de modelos de fornecedores diferentes no mesmo grafo passou a ser rotina, o que só é
possível quando o grafo, e não o modelo, é o lugar onde a decisão criativa mora.

**O que ainda falta.** Falta estabilidade: grafo quebra quando o nó muda de versão. Falta
licenciamento claro sobre o componente (quem é dono do nó que gera). E falta reprodutibilidade
determinística entre máquinas, sem a qual "entregar a receita" não é entrega, é promessa.

### D3 — A imagem em movimento vira sistema que responde a evento

**O que rompe.** Rompe a fronteira entre vídeo e interface. De um lado, a animação como máquina
de estados que responde a entrada e roda do mesmo arquivo em web, iOS, Android, Unity e Unreal
(fontes 13 e 14). Do outro, a geração causal e autoregressiva de quadro a quadro em tempo real,
em que o futuro não existe antes da ação do usuário (fontes 15 e 16). Nos dois casos o que
perde a razão de existir é o **render antecipado como forma da obra** — e, com ele, a noção de
cópia final idêntica para todo espectador, que é o que sustenta distribuição, catálogo, crítica
e arquivo.

**Por que agora.** Porque os dois lados chegaram simultaneamente a produto público: runtime
multiplataforma maduro de um lado, mundo jogável gerado por descrição distribuído a assinante
do outro, em janeiro de 2026 (fonte 16).

**O que ainda falta.** Falta muito: sessão de 60 segundos, 720p, 20–24 qps e latência de
controle alta (fonte 16) descrevem uma tecnologia em uso real e ainda longe de escolha padrão.
Falta modelo de distribuição — hospedar execução custa por espectador, ao contrário de servir
arquivo. E falta linguagem: ninguém sabe ainda como se dirige uma obra que não tem duração.

### D4 — A disputa de arquitetura: geração por escala contra difusão

**O que rompe.** Rompe o pressuposto de que o controle fino é um acessório treinado por fora do
modelo. Toda a camada de controle de hoje — adaptadores, condicionamentos, nós especializados —
foi construída sobre a mecânica específica da difusão. Se a geração por predição de próxima
escala escalar como o artigo do VAR indica, com leis de potência semelhantes às de modelos de
linguagem e generalização zero-shot para inpainting, outpainting e edição (fonte 1), o controle
passa a ser instrução *dentro* do mesmo modelo, e quem perde a razão de existir é o
**ecossistema de truques de pipeline acoplado à difusão** — que hoje é justamente onde mora o
conhecimento prático da comunidade aberta.

**Por que agora.** Porque o resultado deixou de ser promessa: melhor artigo da trilha principal
do NeurIPS 2024 (fonte 2), com ganho medido sobre transformers de difusão em benchmark público
e cerca de 20× de vantagem em inferência (fonte 1).

**O que ainda falta.** Falta, e é decisivo, a transposição verificada do resultado de **imagem**
para **vídeo**: o artigo mede geração de imagem condicionada a classe no ImageNet 256×256, não
geração de vídeo dirigida (ver seção 8). E falta um ecossistema de controle nativo dessa
arquitetura com a densidade do que existe hoje sobre difusão. Esta é a disrupção-raiz mais
frágil das quatro, e o mapa diz isso de novo na seção 7.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: Controle fino sobre a geração — região, quadro-chave, transferência de movimento
    efeitos:
      - id: e1
        ordem: 1
        efeito: "A unidade de trabalho deixa de ser o take gerado inteiro e passa a ser a região e o quadro, porque corrigir um detalhe não exige mais descartar o que já deu certo"
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "O custo marginal de uma correção cai abaixo do custo de aprovar um erro, e o ciclo de aprovação de cliente migra de duas rodadas grandes para revisão contínua"
            sinal: medio
            prazo: 2028
            confianca: baixa
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "A agência deixa de vender produção de filme como pacote fechado e passa a vender manutenção continuada da peça no ar"
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e1.1.2
                ordem: 3
                efeito: "O contrato de direito de imagem passa a precisar de cláusula sobre até onde a performance pode ser corrigida depois da aprovação"
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "A demanda por execução intermediária — rotoscopia de limpeza, inbetween de correção, recomposição de plano inteiro — cai antes e mais rápido que a demanda por direção"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "O ensino de animação se reorganiza em torno de leitura de movimento, direção e crítica, com a execução manual virando fundamento e não profissão de entrada"
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e1.2.2
                ordem: 3
                efeito: "A porta de entrada do mercado audiovisual fecha para quem aprendia executando, e a formação passa a depender de estágio dentro de estúdio ou de obra autoral própria"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "Equipes de cinco a sete pessoas passam a entregar volume que exigia dezenas, porque a etapa que mais cede ao controle fino é a de execução repetitiva"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "O mercado audiovisual se parte entre um topo que segue caro por elenco, locação e direito, e uma base em que o preço do plano tende ao custo de computação"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "A negociação coletiva desloca a disputa de salário por diária para royalty sobre modelo treinado no acervo e na performance do próprio time"
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e2.1.2
                ordem: 3
                efeito: "Produção sem IA generativa vira segmento comercial com selo próprio, e não apenas critério de inscrição de festival"
                sinal: medio
                prazo: 2030
                confianca: media
          - id: e2.2
            ordem: 2
            efeito: "A publicidade migra de uma peça para muitas variantes da mesma peça, porque variar passou a custar menos que decidir qual variante fazer"
            sinal: medio
            prazo: 2028
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: "O briefing criativo vira definição de espaço de busca, e a medição de campanha passa a comparar parâmetros de geração em vez de peças"
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "Falsificar deixa de depender de sorte, porque dá para especificar quem aparece, em que região do quadro e com que movimento — a falsificação passa a ser encomendável"
        sinal: medio
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "O vídeo isolado perde valor probatório por padrão, e a pergunta em redação e em juízo migra de se a imagem é real para quem assinou a captura e quando"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "Custódia e assinatura de captura viram serviço vendido por hora de material, com câmera, plataforma e terceiro de confiança dividindo a cadeia"
                sinal: medio
                prazo: 2030
                confianca: baixa
              - id: e3.1.2
                ordem: 3
                efeito: "Prova audiovisual sem cadeia de custódia deixa de ser admitida de rotina em litígio de alto valor, e o ônus de demonstrar autenticidade se desloca para quem apresenta"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: "O jornalismo passa a publicar a procedência junto com a imagem, e a ausência de credencial vira a informação principal sobre o material"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: "Autenticidade certificada vira segmento comercial, e quem não pode pagar a infraestrutura de prova perde acesso ao circuito formal de distribuição"
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A peça sintética deixa de ser arquivo e vira programa versionável
    efeitos:
      - id: e4
        ordem: 1
        efeito: "O entregável de uma produção passa a ser o grafo que produz a peça, e o arquivo renderizado vira uma instância dele"
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Versionamento, diff e revisão por pares entram no fluxo criativo, e a autoria passa a ser legível como histórico de alterações em vez de arquivo final"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "A ficha técnica passa a listar componentes reutilizáveis com licença própria, e a disputa de crédito criativo se desloca para quem escreveu o nó"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "Forma-se um mercado de componentes de geração — nós, workflows, rigs de controle — separado do mercado de assets prontos"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "O banco de imagens deixa de vender imagem e passa a vender direito de treino e componente que gera, convertendo acervo em licença de processo"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "Checagem de conformidade — marca, acessibilidade, direito de uso, rotulagem de conteúdo sintético — passa a rodar dentro do grafo, antes do render, porque o grafo expõe cada passo como objeto inspecionável"
        sinal: fraco
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "Jurídico e compliance entram no pipeline como nó, e deixam de ser etapa de aprovação depois da peça pronta"
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "O regulador passa a pedir o grafo e não só a peça, e a auditoria de publicidade e de propaganda eleitoral vira leitura de pipeline"
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A imagem em movimento vira sistema que responde a evento
    efeitos:
      - id: e6
        ordem: 1
        efeito: "A fronteira entre vídeo e interface perde suporte técnico, porque o mesmo artefato toca, responde a entrada e roda em web, app e engine"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "O motion designer passa a projetar comportamento — entradas, estados, transições — em vez de sequência, e o handoff para desenvolvimento desaparece como etapa formal"
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "O design de interação absorve o vocabulário de cinema — plano, corte, ritmo, continuidade — como linguagem padrão de especificação de produto"
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: "O vídeo linear passa a ser um caso particular — a gravação de uma sessão — e distribuir uma obra passa a significar hospedar a execução dela"
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: "A plataforma de streaming passa a operar execução além de catálogo, e o custo por espectador deixa de ser fixo por título"
                sinal: fraco
                prazo: 2031
                confianca: baixa
              - id: e6.2.2
                ordem: 3
                efeito: "A crítica e o arquivo cultural perdem o objeto estável de referência, porque duas pessoas que viram a mesma obra não viram a mesma sequência"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: "A geração em tempo real entra primeiro onde o erro é barato — jogo casual, publicidade interativa, material didático — e não onde ele é caro"
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "Forma-se um gênero intermediário entre jogo e vídeo, produzido sem equipe de engine e sem orçamento de estúdio"
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "Produzir mundo jogável passa a custar menos que licenciar e operar uma engine, e o mercado casual absorve o formato antes do mercado premium"
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: A disputa de arquitetura entre geração por escala e difusão
    efeitos:
      - id: e8
        ordem: 1
        efeito: "O controle deixa de ser adaptador treinado por fora e passa a ser instrução dentro do mesmo modelo que gera"
        sinal: medio
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "O ecossistema de controle acoplado à difusão perde parte da razão de existir, e o valor migra do truque de pipeline para o dado de treino e a avaliação"
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "A comunidade aberta que hoje sustenta o controle fino perde seu principal objeto técnico e se reorganiza em torno de dados e avaliação, ou é absorvida pelas plataformas fechadas"
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: "Imagem, vídeo e texto passam a ser gerados pela mesma arquitetura, e ferramenta de imagem deixa de ser categoria de produto"
        sinal: medio
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: "A suíte criativa deixa de vender aplicativos separados por mídia e passa a vender direção sobre um modelo único, com o diferencial migrando para acervo licenciado e garantia jurídica"
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: "Procedência comprovável vira o diferencial competitivo do mercado corporativo, e quem não consegue demonstrar origem do material sai das licitações e dos contratos grandes"
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

**O que o bloco não consegue dizer.**

*A roda tem um centro de gravidade, e ele não é técnico.* Três dos quatro ramos convergem para
a mesma coisa por caminhos diferentes: **prova de origem**. D1 chega lá pelo lado do dano
(e3 → e3.1 → e3.1.1), D2 pelo lado da auditoria (e5 → e5.1 → e5.1.1), D4 pelo lado do mercado
(e9 → e9.1 → e9.1.1). Quando três ramos independentes desembocam no mesmo lugar, ou é
convergência real ou é viés do analista. Aqui há evidência dos dois lados: a convergência tem
lastro datado (AI Act art. 50 em agosto de 2026, C2PA 2.3, regra eleitoral brasileira de 2026,
fontes 6, 5 e 20), mas também é o ângulo que mais interessa a quem escolheu este tema.

*Os prazos de 1ª ordem não são previsão, são constatação com atraso.* e1 e e3 estão marcados
para 2027 com confiança alta porque já estão acontecendo — o Kling 3.0 vende exatamente e1 hoje
(fonte 11). Marcar 2027 é dizer "isto estará consolidado", não "isto começará".

*A confiança cai de forma desigual entre os ramos.* O ramo D3 tem confiança baixa em quase toda
a segunda ordem não por falta de tecnologia, mas por falta de **modelo econômico**: hospedar
execução tem custo marginal por espectador, e ninguém demonstrou ainda que alguém paga por isso
fora de jogo. Já o ramo D1 tem confiança alta na primeira ordem e média na segunda porque a
tecnologia está pronta e o que falta é contrato — e contrato muda mais devagar que software,
mas muda de forma previsível.

*Dois efeitos estão marcados abaixo do que a leitura ingênua sugeriria, de propósito.* e1.1 e
e2.2 são extrapolação linear do que já acontece (mais variantes, ciclos mais curtos) e por isso
foram rebaixados para confiança baixa na auditoria da Fase 4, mesmo tendo sinal médio. Efeito
com sinal forte e confiança baixa não é contradição: quer dizer "o movimento começou, e mesmo
assim eu não sei se ele vai para onde estou dizendo".

*O que a roda não cobre por decisão de recorte:* som e voz sintéticos (tema 13), geração de
narrativa (tema 8) e design procedural sem IA (tema 14) aparecem só quando encostam no objeto.
A geração de áudio junto com a imagem, anunciada no Kling 3.0 (fonte 11), é a costura mais
visível entre este tema e o 13, e ficou fora da roda de propósito.

## 6. Sinais fracos e wildcards

**Sinal fraco 1 — animação que responde, não que toca.** O Rive é o sinal mais sutil do tema,
porque não se apresenta como IA e não disputa benchmark. Uma máquina de estados que responde a
evento e roda do mesmo arquivo em dez runtimes (fontes 13 e 14) é, tecnicamente, uma peça de
software disfarçada de peça de motion. Se essa forma virar o padrão de como se entrega animação
em produto, a fronteira entre vídeo e interface some por baixo, sem nenhum anúncio — e sem
precisar de nenhuma das outras três disrupções deste mapa.

**Sinal fraco 2 — o benchmark que mudou de arquitetura.** O VAR (fontes 1 e 2) é o sinal
técnico. O que o torna um sinal fraco, e não um fato consolidado, é que o resultado é de
geração de imagem condicionada a classe; a passagem para vídeo dirigido é conjectura. Se em
2027 aparecer um modelo de vídeo por predição de próxima escala com controle nativo de região
e quadro-chave, a disrupção D4 salta de frágil para dominante em um ciclo.

**Sinal fraco 3 — a linha da camisa.** A formulação da curadoria do Cinema St. Louis — trocar a
cor da camisa é permitido, criar a camisa do nada não é (fonte 8) — é a primeira tentativa
pública de desenhar a fronteira no lugar certo: não entre IA e não-IA, mas entre **assistir** e
**originar**. Se essa distinção pegar, ela reorganiza toda a discussão de rotulagem, que hoje
opera com um binário grosseiro. Note que o Artigo 50 do AI Act já traz a mesma intuição, ao
isentar ferramenta de edição assistiva que não altera substancialmente o insumo (fonte 6).

**Sinal fraco 4 — a contradição de Cannes.** O mesmo festival cujo delegado-geral propõe rotular
filmes sem IA como alimento orgânico anunciou patrocínio plurianual da Meta e exibiu documentário
que usou IA da Meta para gerar imagem de pessoas mortas (fonte 9). Isso não é hipocrisia
isolada; é o formato provável do desfecho — posição pública dura e prática interna negociada,
caso a caso, sem régua estável.

**Wildcard 1 — um longa dirigido por uma pessoa entra na competição oficial de um festival de
primeira linha.** Baixa probabilidade dentro do horizonte, e o obstáculo é nomeável: a direção
dos grandes festivais está indo na direção oposta (fontes 8 e 9). Impacto alto porque
resolveria, por decisão de curadoria e não por argumento, a pergunta de legitimidade que o
setor está adiando.

**Wildcard 2 — uma decisão judicial obriga a abrir o grafo de produção de uma peça.** A regra
eleitoral brasileira de 2026 já prevê inversão do ônus da prova quando demonstrar a
irregularidade for excessivamente oneroso para quem acusa (fonte 20). Basta uma decisão que
transforme isso em "mostre o pipeline" para que a seção 12 de qualquer produção vire peça
processual. Impacto alto e assimétrico: favorece quem já produz em grafo (D2) e pune quem
produz em ferramenta fechada sem registro.

**Wildcard 3 — um modelo autoregressivo aberto atinge paridade e roda em hardware de consumo.**
Colapsaria a vantagem das plataformas fechadas justamente na camada de controle, e realimentaria
a comunidade aberta em vez de dissolvê-la (invertendo e8.1.1). Probabilidade baixa dentro do
horizonte, impacto alto.

**Wildcard 4 — uma prova em vídeo dirigida decide um caso de grande repercussão no Brasil.**
Ano eleitoral, 403 decisões da Justiça Eleitoral sobre deepfake entre 2020 e julho de 2026 e
crescimento de 356% nos casos de alta relevância entre 2024 e 2026 (fonte 19) descrevem um
sistema já sob carga. Um caso emblemático anteciparia em anos toda a terceira ordem do ramo
e3 — e provavelmente na forma mais cara: exigência de custódia sem infraestrutura para
cumpri-la.

**Wildcard negativo — nada disso vira norma e a rotulagem morre na implementação.** Assinar
proveniência não adianta se o intermediário de distribuição descarta o metadado no caminho. Se
a marcação prevista para agosto de 2026 (fonte 6) for cumprida na origem e perdida na
distribuição, os efeitos e3.1.1, e3.2, e3.2.1 e e9.1.1 caem juntos, e o mapa perde seu ramo mais
bem sustentado.

## 7. Contra o próprio mapa

Esta seção é o produto direto da auditoria da Fase 4 da skill, item por item, não um texto de
humildade escrito depois.

**Qual efeito é só extrapolação linear.** Dois, e estão marcados. **e2.2** ("publicidade migra
de uma peça para muitas variantes") é a curva de hoje com mais volume: variação em massa de
criativo já é prática corrente em mídia programática, e chamar isso de efeito de futurização é
generoso. Foi rebaixado para confiança baixa. **e1.1** ("revisão contínua no lugar de duas
rodadas grandes") tem o mesmo defeito em grau menor: a compressão de ciclo de aprovação vem
acontecendo desde a digitalização da pós-produção, e o controle fino acelera, não inaugura.
Também rebaixado. Um terceiro, **e4.1** (versionamento e diff no fluxo criativo), sobreviveu
porque o mecanismo é novo — não é ciclo mais curto, é mudança na natureza do objeto entregue —
mas fica registrado que ele é o mais próximo da fronteira.

**Qual efeito assume velocidade de adoção sem precedente.** **e6.2.1** — plataforma de streaming
operando execução em vez de catálogo até 2031. Não existe caso comparável de uma indústria de
distribuição trocar o próprio custo marginal de fixo-por-título para variável-por-espectador
nesse prazo; o comparável mais próximo é a transição de mídia física para streaming, que levou
mais de uma década e foi na direção contrária (de variável para fixo). O efeito fica no mapa com
sinal fraco e confiança baixa, mas ele é o candidato número um a estar errado por otimismo de
prazo. **e7.1.1** tem o mesmo problema em escala menor: comparar o custo de produzir mundo
gerado com o de licenciar engine pressupõe que o custo de inferência caia em uma velocidade que
só se observou em armazenamento e largura de banda, não em computação de inferência.

**Qual disrupção-raiz pode simplesmente não se concretizar.** **D4**, com folga. O resultado que
a sustenta é de geração de imagem condicionada a classe em benchmark fechado (fonte 1); a
transposição para vídeo dirigido é conjectura minha, não afirmação do artigo. O desfecho mais
provável não é "autoregressivo vence" nem "difusão vence", é híbrido — e um híbrido preserva o
ecossistema de controle em vez de destruí-lo. Se D4 não se concretizar, caem e8, e8.1, e8.1.1 e
metade de e9: a convergência para modelo único perde o mecanismo técnico e vira apenas
consolidação de mercado, que é outra história. O que **não** cai é o ramo e9.1.1 (procedência
como diferencial), porque ele tem sustentação própria em regulação (fontes 6 e 20).

**Onde o elo causal ainda é fraco mesmo depois da reescrita.** **e5** (conformidade rodando
dentro do grafo) foi reescrito duas vezes e ainda é o efeito mais frágil da roda: o mecanismo
existe — grafo expõe cada passo como objeto inspecionável (fonte 12) — mas não há nenhum sinal
de que áreas jurídicas estejam se movendo nessa direção; é derivação lógica sem evidência de
campo. Fica com sinal fraco e confiança baixa, e é o primeiro item a cortar numa revisão.
**e3.1.1** (custódia como serviço por hora de material) também depende de um passo que não
consegui documentar: existe tecnologia de assinatura na captura, mas não encontrei demanda
comercial mensurável por ela fora de contexto jornalístico e forense.

**Que viés entrou aqui.** Três, e convém nomear todos.

1. *Viés do recorte pedido.* O pedido declarou viés neutro, mas também declarou de saída que a
   disrupção-raiz é o controle — e um mapa que começa sabendo qual é a disrupção não a está
   descobrindo, está confirmando. Tentei compensar submetendo o próprio controle aos três testes
   da Fase 2 por escrito (seção 12), mas o enquadramento inicial pesa.
2. *Viés da zona de interesse.* A zona declarada é "percepção e mídia sintética". Isso explica
   por que o ramo da prova e da percepção de autenticidade (e3) é o mais desenvolvido e o mais
   bem sustentado do mapa, enquanto o ramo econômico (e2) está mais raso. Um autor da zona de
   economia criativa teria produzido a roda oposta.
3. *Viés de fonte.* Boa parte da evidência sobre capacidade de controle vem de página de produto
   de quem vende o produto (fontes 11 e 12) e de cobertura publicada pelo próprio fabricante
   (fonte 10). Nenhum dos números de produtividade citados na seção 3 é medição independente, e
   eles estão na seção 3 exatamente porque são o que existe — não porque são confiáveis.

**Um comentário sobre o método, e não sobre o tema.** A roda dos futuros não estima
probabilidade e não prioriza investimento: ela diz o que é logicamente derivável se a raiz
acontecer. Ler qualquer efeito de terceira ordem deste documento como previsão é usar o
instrumento fora da especificação — e a própria frequência de `confianca: baixa` na terceira
ordem é o resultado esperado do método, não uma falha de execução dele.

## 8. O que a máquina errou

Cinco itens específicos, todos desta rodada, todos com o modo de detecção. A busca esteve
disponível e foi usada; é por isso que há o que relatar.

**1. Escopo do resultado do VAR — corrigido depois de abrir o artigo.** O enunciado do tema
resume o VAR como "GPT vence difusão", e eu comecei a escrever a disrupção D4 tratando esse
resultado como se valesse para geração de **vídeo**. Ao abrir o arXiv (fonte 1), o que o artigo
mede é geração de imagem condicionada a classe no ImageNet 256×256 — FID de 18,65 para 1,73, IS
de 80,4 para 350,2, cerca de 20× mais rápido, generalização zero-shot para inpainting,
outpainting e edição **de imagem**. Vídeo não aparece. A diferença é decisiva para este mapa,
porque D4 só é disruptiva *aqui* se a arquitetura atravessar para vídeo dirigido, e isso é
conjectura minha, não achado do artigo. A seção 4 e a seção 7 foram reescritas para dizer isso.

**2. Uma regra de Cannes que eu quase afirmei com data e não consegui confirmar em fonte
primária.** Os resultados de busca traziam, de forma consistente e com aparência de fato, que em
9 de abril de 2026 o 79º Festival de Cannes tornou formalmente inelegíveis à Palma de Ouro os
filmes em que a IA generativa dirige roteiro, geração visual ou síntese de performance
principal, com citação atribuída a Iris Knobloch. A cadeia de sustentação, quando puxada, era um
blog de uma produtora de filmes de IA e um post de rede social — não o regulamento do festival
nem cobertura de agência. Ao abrir uma fonte jornalística (fonte 9), o que se confirma é
diferente e mais interessante: a posição pública de Thierry Frémaux ao lado dos artistas, a
proposta de rotular filmes *sem* IA como alimento orgânico, a carta aberta de milhares de
profissionais franceses, e a contradição do patrocínio da Meta. **A regra formal com data não
entrou no documento.** O que entrou foi o que a fonte aberta sustenta. Este é o erro mais
perigoso da rodada, porque o fato falso era mais útil ao argumento que o fato verdadeiro.

**3. Recursos de produto atribuídos por memória, e a lista real é outra.** Eu esperava encontrar
controle de câmera (pan, tilt, zoom, dolly) anunciado como recurso central do Kling 3.0, porque
é assim que o setor costuma vender controle. A página do produto (fonte 11) anuncia outra coisa:
primeiro e último quadro, *Motion Control* por vídeo de performance, áudio junto com imagem e
consistência multi-plano. Controle de câmera não está lá. A correção importa porque muda qual
é a superfície de controle que o mercado está efetivamente empurrando — performance e quadro,
não lente.

**4. Uma alegação de dado de treino que ficou de fora por não ter sido possível verificar.** O
enunciado do tema cita o Adobe Firefly pelo "acervo licenciado — a disputa jurídica embutida", e
eu ia registrar na seção 3 que o Firefly é treinado apenas em conteúdo licenciado do Adobe
Stock, domínio público e conteúdo aberto, com indenização de propriedade intelectual para
assinantes pagos. Três tentativas de abrir páginas oficiais da Adobe falharam (404, 403 e
timeout — detalhe na seção 12). A alegação vem de resumo de busca e de terceiros, não de fonte
aberta. **Ela não está na seção 3, não está na seção 11 e não conta no contador de fontes.**
O Firefly permanece apenas na lista de tecnologias citadas.

**5. Divergência entre duas fontes secundárias sobre a regra eleitoral brasileira, com a fonte
primária inacessível.** Uma análise jurídica (fonte 20) atribui as regras de IA do ciclo 2026 a
uma resolução do TSE aprovada em 2 de março de 2026; uma análise acadêmica de decisões
(fonte 19) trabalha com os artigos 9º-B e 9º-C, §1º da Resolução TSE 23.610/2019. As duas coisas
provavelmente são compatíveis — resolução nova costuma alterar a de 2019 —, mas eu não consegui
confirmar: o site do TSE recusou acesso automatizado em duas tentativas, por WebFetch e por
requisição direta, devolvendo bloqueio de borda. **O documento cita o conteúdo das regras e
evita afirmar o número da resolução como fato verificado.** Quem for usar este mapa para
qualquer fim prático deve conferir no TSE, à mão.

**O que não apareceu.** As atribuições de autoria e ano que eu tinha de memória para ControlNet
(Zhang, Rao, Agrawala, 2023) e para o artigo do EbSynth (Jamriška et al., ACM TOG 38(4), art.
107, 2019) bateram exatamente com as fontes abertas (fontes 3 e 4). Isso não significa que
memória seja confiável — o item 2 acima mostra o caso em que ela parecia igualmente segura e
apontava para um fato que não existe na forma lembrada. Significa apenas que essas duas
atribuições específicas resistiram à checagem.

## 9. Três cenários para 2031

**Provável.** Em 2031, dirigir a geração é o ofício, e ninguém chama mais isso de IA — chama de
trabalhar. A unidade de produção é a região do quadro e o quadro-chave; o entregável, em boa
parte do mercado publicitário e de conteúdo, é um grafo com parâmetros, e o render é um
subproduto. O mercado audiovisual está partido: no topo, produções caras porque elenco, locação
e direito continuam caros; na base, um volume enorme feito por equipes de cinco pessoas a preço
de computação. O ofício de execução intermediária encolheu antes do de direção, e a formação não
acompanhou — há uma geração que não teve por onde entrar. Vídeo isolado, sem cadeia de
procedência, não é aceito como prova em nenhum contexto sério, e existe um mercado pequeno e
caro de custódia de captura que atende jornalismo, forense e litígio de alto valor, e mais
ninguém. Existem duas categorias de festival, com e sem IA generativa, e a linha entre elas é
contestada caso a caso. A geração causal em tempo real é real e está confinada a jogo casual,
educação e publicidade interativa; ninguém conseguiu resolver quem paga pelo custo por
espectador. A disputa de arquitetura terminou em híbrido, sem vencedor, e o ecossistema aberto
de controle sobreviveu menor e mais dependente das plataformas.

**Desejável.** O mesmo quadro técnico, com três diferenças que não são automáticas. Primeira: a
procedência funciona ponta a ponta — o metadado assinado na captura chega ao espectador porque
plataforma de distribuição foi obrigada a preservá-lo, e não só a origem foi obrigada a marcar.
Isso exige que a fiscalização do Artigo 50 europeu, a partir de agosto de 2026, alcance o
intermediário e não só o gerador, e que a regra brasileira siga o mesmo caminho. Segunda: a
camada de controle é interoperável — existe um formato comum de descrever direção (região,
quadro-chave, movimento) que sobrevive à troca de modelo, o que impede que a direção já feita
seja refém do fornecedor, e mantém a comunidade aberta viva mesmo se a arquitetura mudar.
Terceira: a formação foi reconstruída de propósito, com a execução manual ensinada como
fundamento de leitura e crítica, e com porta de entrada financiada — porque o que fecha o
mercado para o iniciante não é a máquina, é a ausência de um degrau. Para chegar aqui,
alguém precisa ter tratado interoperabilidade e formação como política, e não como consequência.

**Indesejável.** A rotulagem existe e não significa nada: todo mundo marca na origem, todo
intermediário descarta no caminho, e o público aprende que o selo não informa. Prova de origem
vira privilégio — quem tem infraestrutura de custódia é ouvido, quem não tem não é, e isso se
aplica tanto a veículo de imprensa quanto a cidadão com vídeo de celular. A falsificação
dirigida, barata e encomendável, encontra um sistema probatório que já desistiu de distinguir e
passou a decidir por reputação da fonte. No trabalho, o pior desfecho não é desemprego em massa:
é a captura da camada de direção por três plataformas fechadas que não interoperam, de modo que
o profissional não acumula patrimônio técnico — cada troca de fornecedor zera a experiência
acumulada, e o valor fica todo com quem opera o modelo. **O sinal precoce deste cenário é
verificável hoje e não depende de opinião:** basta medir se um arquivo assinado na captura
chega ao espectador com a credencial intacta depois de passar pelas plataformas usuais de
distribuição. Se a taxa de sobrevivência da credencial não subir nos próximos dois ciclos, este
é o cenário em curso.

## 10. O experimento

**Banco de dirigibilidade** — um experimento de bancada com duas metades, uma sobre controle e
outra sobre procedência, que juntas testam a tese central deste mapa.

**O que é.** *Metade A (dirigibilidade).* Define-se um conjunto pequeno de intenções visuais
difíceis e verificáveis — por exemplo: "o personagem levanta a mão esquerda, e só ela, entre o
quadro 12 e o 24, sem que o fundo mude"; "a mesma personagem aparece em três planos com o mesmo
casaco". Cada intenção é executada em três regimes: (1) prompt puro, sem controle; (2)
quadro-chave pintado à mão e propagado por método não generativo, na linhagem do EbSynth; (3)
grafo com máscara de região, primeiro e último quadro fixos e transferência de movimento. Mede-se
**taxa de acerto de intenção** (julgada às cegas, sem que o juiz saiba o regime), **número de
tentativas até o acerto** e **custo de uma correção pontual depois do acerto** — este último é o
número que importa, porque é ele que sustenta e1 e derruba ou confirma e1.1.

*Metade B (procedência).* Cada peça aprovada recebe credencial de conteúdo na exportação. Em
seguida ela é publicada e recuperada por cinco caminhos de distribuição usuais (rede social,
mensageria, upload em plataforma de vídeo, envio por e-mail, download direto) e se verifica, em
cada caminho, se a credencial sobreviveu. A saída é uma tabela de sobrevivência por caminho.

**Que pergunta sobre o futuro ele ajuda a responder.** Duas, uma por metade. A primeira: *o
controle fino entrega mesmo o que promete, ou o custo de especificar a intenção compensa o custo
de sortear até acertar?* Se prompt puro com dez tentativas sai mais barato que grafo com uma,
a disrupção D1 é mais fraca do que este mapa supõe e toda a primeira ordem precisa ser
rebaixada. A segunda: *a infraestrutura de prova de origem, que três ramos desta roda assumem
como dada, sobrevive à distribuição real?* É o sinal precoce do cenário indesejável da seção 9,
medido em vez de suposto.

**Que tecnologia emergente ele usa, e por que não dá com tecnologia madura.** Usa camada de
controle espacial e temporal sobre geração (região, máscara, quadro-chave, transferência de
movimento) e credencial de conteúdo assinada. Não dá para fazer com tecnologia madura por uma
razão simples: com edição de vídeo convencional, a taxa de acerto de intenção é sempre 100% —
o operador faz o que quer, o tempo é que varia. A pergunta "quanto da intenção sobrevive" só
existe quando a execução é delegada a um gerador. E a metade B não tem sentido antes da
rotulagem obrigatória, que passa a valer na Europa em agosto de 2026 (fonte 6).

**O que a turma vai fazer quando testar isso em sala.** Cada pessoa recebe uma intenção do
conjunto e um regime sorteado, sem escolher. Executa até acertar, ou até um teto de tentativas,
registrando tempo e número de tentativas. Depois **todo mundo julga às cegas** as peças de todo
mundo, sem saber o regime — o julgamento coletivo é o instrumento de medida, e é ele que
protege o resultado do entusiasmo de quem executou. A metade B é feita em conjunto, em uma
rodada só: todos publicam pelos cinco caminhos e a tabela de sobrevivência é preenchida ao vivo.
A discussão final é sobre a divergência entre a percepção de quem executou e a nota de quem
julgou — é aí que aparece se "controle" é ganho de resultado ou sensação de controle.

**O que seria um resultado que me faria mudar de ideia.** Três resultados, cada um derrubando
uma parte do mapa. (a) Se o regime de prompt puro empatar em taxa de acerto com o regime de
grafo e ganhar em tempo total, D1 não é disrupção — é preferência de fluxo, e o mapa inteiro
perde a raiz mais forte. (b) Se o custo de uma correção pontual depois do acerto **não** cair
entre os regimes, e1 está errado no seu ponto central e e1.1 cai junto. (c) Se a credencial
sobreviver em quatro dos cinco caminhos, o cenário indesejável da seção 9 perde seu sinal
precoce, e os efeitos e3.1.1 e e3.2.1 devem ser rebaixados — porque a procedência estaria
resolvida por infraestrutura, e não precisaria virar mercado.

## 11. Fontes

Vinte fontes, todas abertas e lidas nesta sessão. Fonte que não abriu não está aqui e não conta
no frontmatter — a lista do que falhou está na seção 12.

1. **Tian, Keyu; Jiang, Yi; Yuan, Zehuan; Peng, Bingyue; Wang, Liwei. "Visual Autoregressive
   Modeling: Scalable Image Generation via Next-Scale Prediction". arXiv:2404.02905 (abr/2024).**
   `https://arxiv.org/abs/2404.02905` — Sustenta a disrupção D4 e a correção do item 1 da seção
   8: o resultado é de geração de **imagem** (ImageNet 256×256), FID 18,65→1,73, IS 80,4→350,2,
   ~20× na inferência, leis de escala com correlação ≈ -0,998. Confiabilidade alta para o que
   afirma; é preprint revisado e publicado em conferência, e os números são do próprio resumo.
2. **NeurIPS Blog. "Announcing the NeurIPS 2024 Best Paper Awards" (10/dez/2024).**
   `https://blog.neurips.cc/2024/12/10/announcing-the-neurips-2024-best-paper-awards/` — Confirma
   que o artigo do VAR é um dos dois melhores artigos da trilha principal. Confiabilidade alta:
   é o anúncio oficial da conferência.
3. **Zhang, Lvmin; Rao, Anyi; Agrawala, Maneesh. "Adding Conditional Control to Text-to-Image
   Diffusion Models". arXiv:2302.05543 (fev/2023).** `https://arxiv.org/abs/2302.05543` —
   Sustenta a linhagem técnica do controle espacial (ControlNet): condicionamento por borda,
   profundidade, segmentação e pose, com convoluções inicializadas em zero, robusto de <50 mil a
   >1 milhão de exemplos. Confiabilidade alta.
4. **Jamriška, Ondřej; Sochorová, Šárka; Texler, Ondřej; Lukáč, Michal; Fišer, Jakub; Lu,
   Jingwan; Shechtman, Eli; Sýkora, Daniel. "Stylizing Video by Example". ACM Transactions on
   Graphics 38(4), art. 107 (2019).** `https://dcgi.fel.cvut.cz/home/sykorad/ebsynth.html` —
   Sustenta a linhagem não generativa do controle por quadro-chave (EbSynth): o artista estiliza
   quadros-chave e o método propaga com síntese por patches guiada e mesclagem temporal.
   Confiabilidade alta; página oficial dos autores, artigo revisado por pares.
5. **C2PA — Coalition for Content Provenance and Authenticity (página institucional, atualizada
   em 8/jan/2026).** `https://c2pa.org/` — Sustenta a existência de padrão aberto de proveniência
   na versão 2.3 e a composição do comitê diretor (Adobe, Amazon, BBC, Google, Meta, Microsoft,
   OpenAI, Publicis, Sony, TikTok, Truepic). Confiabilidade alta para o que o padrão é; é fonte
   interessada quanto a adoção, e por isso nenhum número de adoção foi extraído dela.
6. **EU AI Act, Artigo 50 — Transparency obligations for providers and deployers of certain AI
   systems.** `https://artificialintelligenceact.eu/article/50/` — Sustenta a obrigação de
   marcação legível por máquina de conteúdo sintético, a obrigação de divulgação de deepfake, as
   isenções (edição assistiva, obra artística/satírica/ficcional) e a data de aplicação,
   2/ago/2026. Confiabilidade alta quanto ao texto; é sítio de referência sobre o regulamento, e
   não o Jornal Oficial — para uso jurídico, conferir a versão oficial.
7. **The National Law Review. "Machine-Generated Evidence Challenges the Federal Rules: Inside
   the Contested Proposed Federal Rule of Evidence 707".**
   `https://natlawreview.com/article/machine-generated-evidence-challenges-federal-rules-inside-contested-proposed`
   — Sustenta o estado da regra de prova gerada por máquina nos EUA: aprovação para consulta
   pública em 10/jun/2025, consulta de 15/ago/2025 a 16/fev/2026, e decisão do Standing Committee
   em 3–4/jun/2026 de **não** recomendar ação, devolvendo a proposta para revisão.
   Confiabilidade média-alta: análise jurídica especializada, com datas verificáveis; não é fonte
   primária do judiciário.
8. **St. Louis Public Radio. "Cinema St. Louis limits the use of AI in festival films"
   (8/set/2026).** `https://www.stlpr.org/arts/2026-09-08/cinema-st-louis-limits-ai-use-festival-films`
   — Sustenta a decisão de recusar filmes feitos com IA generativa a partir de 2027, a permissão
   para IA já embutida em software de edição, e a formulação da fronteira entre assistir e
   originar ("trocar a cor da camisa" × "criar a camisa do nada"). Confiabilidade alta; rádio
   pública com citação direta de responsável pela curadoria.
9. **France 24. "Cannes 2026 rolls out red carpet amid AI spat, absence of major US studios"
   (12/mai/2026).** `https://www.france24.com/en/culture/20260512-cannes-film-festival-opens-grappling-with-ai-and-hollywood`
   — Sustenta a posição pública de Thierry Frémaux, a proposta de rotular filmes sem IA como
   alimento orgânico, a carta aberta de profissionais franceses, a ausência dos grandes estúdios
   e a contradição do patrocínio da Meta. Confiabilidade alta; veículo internacional de notícias.
   **Foi esta fonte que impediu o erro relatado no item 2 da seção 8.**
10. **Autodesk News. "AI in filmmaking: What Cannes 2026 revealed about the future of the media
    and entertainment industry".** `https://adsknews.autodesk.com/en/views/ai-in-filmmaking-at-cannes-2026/`
    — Sustenta as duas cifras de produtividade e custo mais citadas do setor (de ~30 s para 3min30
    de trabalho finalizado por dia com o Flow Studio; estimativa do Morgan Stanley de até 30% de
    redução de custo). **Confiabilidade baixa como evidência independente:** é publicação do
    próprio fabricante sobre clientes do próprio produto, e está citada no documento como "o que
    circula no setor", não como medição.
11. **Runway — página do modelo Kling 3.0.** `https://runway.com/product/models/kling-3.0` —
    Sustenta quais recursos de controle o mercado está efetivamente vendendo hoje: primeiro e
    último quadro, Motion Control por vídeo de performance, áudio junto com imagem, consistência
    multi-plano. Confiabilidade alta para "o que é anunciado", nula para "o que funciona": é
    material de venda.
12. **ComfyUI — sítio oficial.** `https://www.comfy.org/` — Sustenta a existência e a escala do
    ecossistema de geração como grafo: mais de 60 mil nós, 132 mil estrelas no GitHub, canvas de
    nós com "cada passo inspecionável", suporte a modelos de vídeo, imagem e áudio de
    fornecedores distintos. Confiabilidade média: números de estrela e de nós são verificáveis por
    terceiros, mas a descrição é autopromocional.
13. **Rive — documentação, State Machine.** `https://rive.app/docs/editor/state-machine/state-machine`
    — Sustenta a definição de animação como máquina de estados com estados, transições, grafo e
    camadas, entregue pronta para implementação em produto, app, jogo ou site. Confiabilidade alta
    para o que a ferramenta faz; é documentação técnica do produto.
14. **Rive — documentação, Runtimes (getting started).** `https://rive.app/docs/runtimes/getting-started`
    — Sustenta a lista de runtimes oficiais (Web/JS, React, React Native, iOS, Android, Flutter,
    Unity, Unreal, C++ e C#) e a ressalva de que certos recursos podem não estar disponíveis em um
    runtime específico. Confiabilidade alta, mesma razão.
15. **Odyssey. "Introducing Odyssey-2: A General-Purpose World Model".**
    `https://odyssey.ml/introducing-odyssey-2` — Sustenta a geração causal e autoregressiva de
    vídeo interativo, um quadro novo a cada 50 ms (20 qps), moldável em tempo real por texto, e a
    lista de casos de uso pretendidos. Confiabilidade média: é anúncio de fornecedor sobre o
    próprio modelo; os números são alegação, não medição independente.
16. **9to5Google. "Google rolling out 'Project Genie' to generate playable worlds" (29/jan/2026).**
    `https://9to5google.com/2026/01/29/google-project-genie/` — Sustenta a distribuição pública do
    modelo de mundo a assinantes do AI Ultra nos EUA e, sobretudo, **os limites**: sessões de 60
    segundos, 720p, 20–24 qps, física violável, latência de controle alta. Confiabilidade média-alta;
    veículo especializado relatando anúncio oficial, e os limites citados vêm do próprio anúncio.
17. **Senado Federal — tramitação do PL 2338/2023.**
    `https://www25.senado.leg.br/web/atividade/materias/-/materia/157233` — Sustenta o estado do
    marco legal brasileiro de IA: aprovado no plenário do Senado em 10/dez/2024, remetido à Câmara
    em 17/mar/2025. Confiabilidade alta; é a fonte primária da tramitação.
18. **TozziniFreire Advogados. "Novo guia do Conar: o que muda para campanhas com influenciadores
    digitais".** `https://tozzinifreire.com.br/boletins/novo-guia-do-conar-o-que-muda-para-campanhas-com-influenciadores-digitais`
    — Sustenta que o Guia do CONAR publicado em maio de 2026 e vigente desde 1º/jun/2026 aplica as
    regras "independentemente da tecnologia empregada", e que IA generativa, influenciador virtual,
    avatar e deepfake não afastam responsabilidade. Confiabilidade média-alta: análise de escritório
    especializado; a fonte primária é o próprio Guia, que não foi aberto.
19. **Metrópoles, coluna Observatório das Eleições. "Eleições 2026: o que os tribunais estão
    decidindo sobre deepfakes?"**
    `https://www.metropoles.com/colunas/observatorio-das-eleicoes/eleicoes-2026-o-que-os-tribunais-estao-decidindo-sobre-deepfakes`
    — Sustenta os números de litígio (403 decisões entre 2020 e jul/2026; +356% em casos de alta
    relevância entre 2024 e 2026), os artigos 9º-B e 9º-C, §1º da Resolução TSE 23.610/2019, e a
    divergência sobre exigir verossimilhança. Confiabilidade média-alta: coluna de observatório
    acadêmico em veículo de imprensa, com dado próprio e metodologia declarada como preliminar.
20. **Barbieri Advogados. "Inteligência Artificial nas Eleições 2026: o que a resolução do TSE
    estabelece".** `https://www.barbieriadvogados.com/inteligencia-artificial-nas-eleicoes-2026/`
    — Sustenta o conteúdo das regras do ciclo 2026: rótulo explícito e destacado, proibição de
    peça nova de IA nas 72 h antes e 24 h depois da votação, vedação a chatbot e avatar simulando
    conversa com eleitor, deveres das plataformas e inversão do ônus da prova. **Confiabilidade
    média com ressalva:** é análise de escritório, e o número e a data da resolução divergem do
    enquadramento da fonte 19; o sítio do TSE bloqueou acesso automatizado (seção 8, item 5).

## 12. Anexo — o levantamento bruto

### 12.0 Estado da entrevista (Fase 1 da skill)

**Os seis pontos da entrevista foram respondidos. Nenhum ficou em aberto.** As respostas vieram
integralmente na mensagem de abertura desta rodada, o que a própria skill prevê ("se quem pediu
já responder tudo da Fase 1 na primeira mensagem, não repita a pergunta — confirme o que foi
entendido em uma frase e siga"). Como não houve ponto sem resposta, a regra de corte da Fase 1
— rebaixar a confiança do documento inteiro para `baixa` — **não** foi acionada. A confiança
`media` no frontmatter é avaliação do conteúdo, não penalidade de processo. Registro do que foi
recebido, para auditoria:

| # | Ponto da entrevista | Resposta recebida |
|---|---|---|
| 1 | Tema e recorte | "Mídia sintética controlável: vídeo e imagem" — a imagem em movimento como mídia sintética dirigível; controle fino (região, quadro-chave, regra, grafo, estado) e as arquiteturas que disputam a difusão. Explicitamente fora: história gerada (tema 8), som e voz (tema 13), design procedural sem IA (tema 14). |
| 2 | Horizonte de tempo | 2031. |
| 3 | Para quem | Quem projeta mídia e interação. |
| 4 | Recorte geográfico | Global, com uma nota sobre o Brasil. |
| 5 | O que já está descartado | O que já é comum em produto de massa (a régua da disciplina). Nenhuma outra exclusão. Também: excluir ideias óbvias que serviriam para qualquer tema. |
| 6 | Viés desejado | Neutro. Sem disrupção suspeita previamente — a instrução foi descobrir. |

Condições adicionais declaradas na abertura, e cumpridas: usar busca e leitura de página de
verdade, citar só o que foi aberto, não inventar fonte, não fazer perguntas de volta, e assumir
e declarar o que não estivesse definido. Duas coisas ficaram sem definição e foram assumidas:
(a) o número de disrupções-raiz e de efeitos não foi especificado — assumi quatro raízes, pelo
critério de "uma por mecanismo distinto de controle", e derivei até o limite do horizonte;
(b) o critério "já é comum em produto de massa" não veio com definição operacional — assumi o
Teste 1 da própria skill (três implantações em produção, em escala, como opção padrão de algum
fluxo real).

**Critério de mudança de ideia declarado pelo pedido**, e como o mapa responde a ele: o pedido
disse que mudaria de ideia diante de evidência de que a adoção já passou da maioria inicial
(Rogers) ou de que a tecnologia não rompe nada. Resposta do levantamento: a **geração** já passou
— por isso ela está na seção 3 e não na 4. O **controle fino** não passou: a evidência é de
early adopter em curva de capacidade ascendente (produto vendendo o recurso há um ciclo, fonte
11; ecossistema aberto grande mas de nicho, fonte 12; tempo real com sessões de 60 s e 720p,
fonte 16). E há ruptura nomeável em cada uma das quatro raízes, registrada no Teste 3 abaixo.

### 12.1 Fase 2 — o teste maduro / emergente / disruptivo, aplicado por escrito

Todas as tecnologias que passaram pela sessão estão aqui, aceitas e rejeitadas.

| Candidata | Teste 1 — está madura? | Teste 2 — é emergente? | Teste 3 — é disruptiva? | Decisão |
|---|---|---|---|---|
| Geração de vídeo por prompt (Sora, Veo, Kling, Luma em produto de consumo) | **Sim.** Está em produto de massa e é opção padrão de fluxo real; o que resta é ficar mais barato e mais rápido. | — | — | **Madura / comum em produto de massa.** Rejeitada como raiz; entra na seção 2 e 3 como ponto de partida. Também excluída pela régua declarada no ponto 5 da entrevista. |
| Geração de imagem por prompt simples (FLUX, Firefly, Midjourney) | **Sim**, mesma razão. | — | — | **Madura.** Rejeitada. |
| Edição de vídeo em linha do tempo (NLE) | **Sim** — décadas de uso, opção padrão. | — | — | **Madura.** Rejeitada. |
| Motion graphics feito à mão | **Sim.** | — | — | **Madura.** Rejeitada. |
| Upscaling / restauração (Magnific e similares) | **Sim** — opção padrão em fluxo de pós; o que resta é melhorar. | — | — | **Madura.** Rejeitada. |
| pix2pix / CycleGAN | **Sim, e historicamente.** É a raiz de imagem-para-imagem, hoje substituída em produção. | — | — | **Madura (e superada).** Rejeitada; citada como linhagem. |
| ControlNet e adaptadores de condicionamento | **Parcialmente** — já é padrão dentro do fluxo aberto de difusão. | Sim, fora do nicho aberto. | Isolado, não: é o **mecanismo** de D1 e o objeto ameaçado por D4. | **Não entra como raiz própria**; entra como linhagem técnica de D1 e como o que D4 ameaça. |
| EbSynth / propagação por quadro-chave | Madura como técnica (2019), de nicho como adoção. | Sim, em uso real crescente em estilização. | Isolado, não. | **Componente de D1**, não raiz. |
| Controle fino sobre geração (região, quadro-chave, primeiro/último quadro, transferência de movimento) | Não — não é a opção padrão de nenhum fluxo em escala. | **Sim** — em produto pago, curva de capacidade subindo (fonte 11). | **Sim** — o take como unidade indivisível e a prática de execução intermediária perdem a razão de existir. | **ACEITA — D1.** |
| Geração como grafo / peça como programa (ComfyUI, Remotion, satori, Graphite, Pixel Composer, Cavalry) | Não — é padrão dentro de uma comunidade, não do mercado. | **Sim** — 60 mil nós, 132 mil estrelas (fonte 12). | **Sim** — o arquivo renderizado como entregável e o acervo de assets prontos perdem a razão de existir. | **ACEITA — D2.** |
| Animação como máquina de estados (Rive) + geração causal em tempo real (Odyssey-2, Project Genie) | Não — Rive é adotado mas não é padrão de entrega de animação; tempo real está em 60 s e 720p. | **Sim** — produto público e distribuído (fontes 13–16). | **Sim** — o render antecipado como forma da obra, e a cópia final idêntica para todos, perdem a razão de existir. | **ACEITA — D3.** |
| Arquitetura autoregressiva visual / geração por escala (VAR) | Não. | **Sim, com ressalva** — resultado publicado e reproduzido, adoção em produto ainda indireta. | **Sim, condicionalmente** — se atravessar para vídeo, o ecossistema de controle acoplado à difusão perde a razão de existir. | **ACEITA — D4, a mais frágil das quatro.** Ver seção 7. |
| C2PA / Content Credentials | Não madura (adoção parcial), não emergente no sentido de capacidade. | — | Não: não rompe nada — é **resposta** a uma ruptura causada por outra tecnologia. | **Rejeitada como raiz.** Entra como infraestrutura e aparece em vários efeitos. |
| Deepfake de rosto / troca de identidade | Não totalmente. | Sim. | Não, **isoladamente**: sozinho é melhoria de fidelidade. O que rompe a prova é a **dirigibilidade** (especificar quem, onde e como), não a qualidade do rosto. | **Rejeitada como raiz própria**; absorvida em e3, com o mecanismo explicitado. |
| Adobe Firefly (acervo licenciado) | — | — | Não: é **modelo de negócio e garantia jurídica**, não ruptura técnica; e a alegação sobre dado de treino não pôde ser verificada (seção 8, item 4). | **Rejeitada.** Permanece só na lista de tecnologias citadas. |
| InvokeAI, diffusers, StabilityMatrix | Maduras dentro do nicho — infraestrutura de execução. | — | Não. | **Rejeitadas.** Infraestrutura, não ruptura. |
| Pixelmash | Ferramenta madura de nicho. | — | Não. | **Rejeitada.** |
| mcp-server-hedra, @neta-art/generation | Não. | **Não comprovadamente** — não encontrei evidência de uso em escala. | — | **Rejeitadas por falharem no Teste 2**: especulação/integração pontual, não tecnologia emergente. Não entram nem como sinal fraco, por falta de sinal. |
| Design procedural sem IA (Cavalry como motor de regras puro) | Madura. | — | — | **Rejeitada e fora do recorte** — é o tema 14. |
| Geração de áudio junto com a imagem | — | Sim. | — | **Fora do recorte** — é o tema 13. Registrada como a costura mais visível entre os dois temas (fonte 11). |

### 12.2 Fase 4 — a auditoria, efeito por efeito

**Rebaixados (sobreviveram com confiança menor).**

- **e1.1** — extrapolação linear: compressão de ciclo de aprovação já vem acontecendo há duas
  décadas. Rebaixado de `media` para `baixa`.
- **e2.2** — extrapolação linear: variação em massa de criativo publicitário já é prática
  corrente. Rebaixado de `media` para `baixa`.
- **e8**, **e8.1** — rebaixados para `baixa` por dependerem inteiramente de D4, cuja premissa de
  transposição para vídeo é conjectura (seção 8, item 1).
- **e3.1.1** — rebaixado para `baixa`: não encontrei demanda comercial mensurável por custódia de
  captura fora de jornalismo e forense.
- **e6.2.1** e **e7.1.1** — mantidos em `baixa` e marcados na seção 7 por assumirem velocidade de
  adoção sem precedente comparável.

**Reescritos (o elo causal pulava uma etapa).**

- **e3** — versão original: "o vídeo deixa de ser prova". Pulava a etapa. Reescrito para nomear o
  mecanismo: o que muda não é a existência da falsificação, é a possibilidade de **encomendá-la
  com especificação** (quem, em que região do quadro, com que movimento).
- **e3.1** — versão original: "ninguém mais acredita em vídeo". Reescrito para o passo
  intermediário verificável: perda de valor probatório **por padrão**, com deslocamento da
  pergunta para autoria e momento da assinatura.
- **e5** — reescrito duas vezes. A primeira versão dizia apenas que "compliance entra no
  pipeline", sem dizer por quê. A versão final nomeia o mecanismo (o grafo expõe cada passo como
  objeto inspecionável, fonte 12) e ainda assim permanece o efeito mais frágil da roda.
- **e6.2** — versão original: "o vídeo linear acaba". Reescrito para "vira caso particular — a
  gravação de uma sessão", que é derivável; o desaparecimento não é.
- **e9** — versão original afirmava convergência de modelos como fato em curso. Reescrito como
  consequência condicional de D4, com confiança rebaixada.

**Cortados (saíram da roda).**

1. *"Todo vídeo vira interativo até 2031."* Cortado: é a pergunta de terceira ordem do enunciado
   do tema, mas não tem mecanismo de distribuição nem de monetização narrável dentro do
   horizonte. O que sobrou dele, com mecanismo, é e6.2 e e6.2.1. A versão forte virou material da
   seção 6.
2. *"Um longa-metragem feito por uma pessoa ganha um prêmio principal em festival de primeira
   linha."* Cortado da roda por contradizer a direção observável das curadorias (fontes 8 e 9) —
   um efeito de roda precisa ser derivável, não torcida. Reposicionado como **wildcard 1**, que é
   o lugar certo para ele.
3. *"O ensino de animação deixa de existir."* Cortado: efeito genérico, aplicável a qualquer
   automação de ofício. A versão específica e derivável (reorganização em torno de direção,
   fechamento da porta de entrada) ficou como e1.2.1 e e1.2.2.
4. *"Desemprego em massa no audiovisual."* Cortado pelo mesmo motivo: serviria para qualquer
   disrupção deste semestre, e não tem passo intermediário narrável em uma frase. O que é
   específico deste tema — a execução intermediária ceder **antes** da direção — está em e1.2.
5. *"Surge a profissão de diretor de IA."* Cortado: é especulação de nomenclatura, não efeito
   estrutural. Absorvido por e1.2.
6. *"O preço da mídia sintética cai."* Cortado no Teste 3 antes mesmo de virar efeito: "fica mais
   barato" é melhoria, não disrupção — é o critério explícito da Fase 2.
7. *"Plataformas fecham o acesso à camada de controle."* Cortado da roda por ser cenário, e não
   efeito derivável de uma raiz específica. Foi para o cenário indesejável da seção 9.

**Efeitos que sobreviveram sem alteração:** e1, e2, e4, e6, e7 (primeira ordem, todos com
evidência direta em fonte aberta) e a maior parte da terceira ordem dos ramos D1 e D2. A skill
avisa que uma roda em que 100% dos efeitos sobrevivem não passou pela auditoria de verdade —
aqui sobreviveram intactos 30 dos 42 efeitos que entraram na roda; 7 foram rebaixados, 5
reescritos, e outros 7 foram cortados antes de entrar.

### 12.3 Buscas e fontes que falharam

Registro das tentativas que não deram em nada, exigido pela skill.

- **Sítio do TSE (`tse.jus.br`)** — duas notícias oficiais sobre a tese de deepfake e sobre as
  regras de IA na campanha de 2026 devolveram **HTTP 403** por WebFetch e bloqueio de borda
  (Akamai, "Access Denied") por requisição direta com agente de navegador. Consequência prática:
  o documento cita o **conteúdo** das regras a partir de duas análises secundárias (fontes 19 e
  20) e **não** afirma o número da resolução como fato verificado (seção 8, item 5).
- **Adobe** — três tentativas de confirmar a alegação sobre dado de treino e indenização do
  Firefly: `adobe.com/products/firefly/discover/what-is-commercially-safe-ai.html` (**404**),
  `helpx.adobe.com/firefly/.../adobe-firefly-faq.html` (**403**) e
  `business.adobe.com/products/firefly-business/firefly-ai-approach.html` (**timeout de 60 s**).
  A alegação ficou fora do documento.
- **Hollywood Reporter** — a matéria com os cinco balanços de Cannes 2026 respondeu com redirect
  para um domínio de paywall (`tollbit.hollywoodreporter.com`) e não foi aberta. A informação foi
  buscada em outro veículo (fonte 9), com resultado diferente do que os resumos de busca
  sugeriam — ver seção 8, item 2.
- **DCGI/CVUT (`www.dcgi.fel.cvut.cz`)** — erro de certificado (o host não consta nos nomes
  alternativos do certificado). Resolvido abrindo a página dos autores em `dcgi.fel.cvut.cz`
  (fonte 4).
- **ACM Digital Library** — **403** ao tentar confirmar a citação do artigo do EbSynth pela fonte
  editorial. A citação foi confirmada pela página oficial dos autores.
- **Um erro meu de operação:** em uma das chamadas paralelas de leitura de página, enviei por
  engano uma URL sem relação nenhuma com o tema (documentação de um repositório de artefatos
  forenses). A página abriu, foi lida, não tem relevância alguma para este mapa e **não** está
  contada nas 20 fontes. Fica registrado porque a skill pede o levantamento bruto sem edição.
- **Buscas que não produziram fonte utilizável:** "regulamento oficial de Cannes 2026 sobre IA
  generativa" (só resultados secundários e de blogs interessados); "medição independente de ganho
  de produtividade com IA em animação" (só material de fornecedor); "dados do mercado audiovisual
  brasileiro sob impacto de IA generativa" (nada com metodologia declarada dentro do tempo desta
  rodada — é a lacuna mais séria da nota sobre o Brasil).

### 12.4 A nota sobre o Brasil, na íntegra

O recorte é global com nota sobre o Brasil, e a nota é desconfortável: **o Brasil está regulando
o efeito antes de ter medido a causa.** A lei geral de IA está parada entre as casas desde março
de 2025 (fonte 17), mas a Justiça Eleitoral já opera um regime completo de conteúdo sintético —
rótulo obrigatório, proibição de deepfake em propaganda, janela de silêncio de 72 h antes e 24 h
depois da votação, vedação a avatar simulando conversa com eleitor, deveres de plataforma e
inversão do ônus da prova (fonte 20) — e já produziu centenas de decisões, com divergência de
fundo sobre se a proibição exige verossimilhança (fonte 19). A autorregulação publicitária seguiu
o mesmo caminho: o CONAR não criou regra nova para IA, declarou que as regras existentes valem
"independentemente da tecnologia empregada" (fonte 18).

Três consequências para este mapa. Primeira: os efeitos do ramo e3 (prova, procedência,
custódia) têm **prazo mais curto no Brasil** que a média global, porque o gatilho aqui é
eleitoral e o calendário é fixo. Segunda: a exigência de rotulagem chega antes da infraestrutura
de proveniência — marca-se por declaração, não por assinatura criptográfica na captura —, o que
significa que o Brasil vai testar na prática se rotulagem declarativa funciona, e essa resposta
interessa ao mundo inteiro. Terceira: não encontrei, dentro desta rodada, nenhum dado com
metodologia declarada sobre o impacto da geração controlável na produção audiovisual brasileira
— nem de emprego, nem de custo, nem de volume. O ramo e2 deste mapa, aplicado ao Brasil, é
extrapolação de mercado estrangeiro, e deve ser lido assim.

### 12.5 O que ficou de fora e por quê

- **Números de mercado** (tamanho de mercado de vídeo por IA, projeções de receita): deixados de
  fora inteiramente. As projeções disponíveis vêm de consultorias sem metodologia pública, e o
  método da roda não precisa delas — a roda deriva mecanismo, não volume.
- **Comparação de qualidade entre modelos** (qual gerador é melhor): fora do recorte. É
  informação com meia-vida de semanas e não muda nenhum efeito deste mapa.
- **Uso de mídia sintética para abuso sexual não consentido:** é um efeito real e grave da mesma
  raiz e3, deliberadamente não desenvolvido aqui porque exige tratamento próprio, com fontes e
  cuidado que uma seção de roda de futuros não comporta. Fica registrado como omissão consciente,
  não como esquecimento. A regra eleitoral brasileira já o trata com penalidade agravada (fonte
  20).
- **Impacto ambiental da inferência:** citado como motivo por uma das curadorias (fonte 8) e não
  desenvolvido, por falta de fonte com medição que eu tenha aberto nesta rodada.
- **A costura com o tema 13 (som e voz):** o Kling 3.0 já gera diálogo, ambiência e efeitos junto
  com a imagem (fonte 11). Isso significa que a fronteira entre os temas 12 e 13 está sendo
  apagada pelo produto, mesmo que a disciplina a mantenha separada — vale a menção para quem
  cruzar os dois mapas.
