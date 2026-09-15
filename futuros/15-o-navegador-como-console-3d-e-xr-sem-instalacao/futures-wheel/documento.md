---
titulo: "O navegador como console: 3D e XR sem instalação"
tipo: resumo-de-tendencia
disciplina: "CIN0055 Tendências em Mídia e Interação 2026.2"
tema: "15 de 19"
familia: "Criação e plataforma"
zona: "Criação e plataforma"
skill: futurizacao-futures-wheel
autor: grec
horizonte: 2031
recorte: "global, com nota sobre o Brasil"
data: 2026-09-12
mapa_completo: "futures-wheel-o-navegador-como-console-3d-e-xr-sem-instalacao.md"
---

# O navegador como console: 3D e XR sem instalação

**Rodada com teto de 15 subagentes, dos quais 14 foram usados.** A skill prevê um expansor por ramo;
aqui os ramos foram agrupados por tema em três lotes de 2ª ordem, cada lote marcou os **cinco ramos mais
férteis**, e a 3ª ordem saiu só sobre esses quinze (TMI-0028, TMI-0050). Por isso, dos 107 efeitos de 2ª
ordem, **92 ficaram sem filhos**: o orçamento foi para onde rendia profundidade. A
Fase 8 (infográficos) foi pulada. O mapa completo, com 205 efeitos (43 + 107 + 55),
conexões cruzadas, wildcards e 247 fontes (201 abertas por inteiro), está em
`futures-wheel-o-navegador-como-console-3d-e-xr-sem-instalacao.md` e no HTML de mesmo nome.

## A inovação

O enunciado propõe que **o app vire link**: com o WebGPU dando acesso à GPU e o WebXR ligando o óculos, jogo,
visualização 3D, editor de splats e experiência imersiva rodariam no navegador **sem instalar nada — sem loja, sem
aprovação, sem plataforma dona** —, e que o navegador vire **console de IA** pela mesma porta. As cinco frentes
(113 fontes, 103 abertas) testaram as proposições contra os critérios declarados de antemão. A primeira ficou de pé
como capacidade e caiu como "sem dono", a segunda foi rebaixada a sinal fraco, e apareceu uma terceira, econômica.

**A capacidade chegou; o uso, não.** O WebGPU vem ligado por padrão no Chrome, no Edge, no Firefox para Windows e no
Safari 26, e alcança cerca de 84% dos navegadores em uso. Mas só 0,42% dos carregamentos de página no Chrome enviam
trabalho à GPU pelo WebGPU, contra 27,34% que usam WebGL; a sessão WebXR imersiva criada fica em 0,00011%, plana
desde 2023 (Chrome Platform Status, 11/09/2026). O contador não enxerga o Quest Browser nem o Safari do visionOS, e
a Meta declara mais de 1 milhão de usuários mensais de WebXR no Quest. Para malha 3D comum, o WebGPU acelera o que
o WebGL já fazia, e os motores mantêm o WebGL 2 como padrão (Unity 6.6, Godot 4.7). O rompimento está onde há
computação na GPU: ordenar splats por quadro em cena editável, iluminação por compute, modelo de linguagem na página.

**O porteiro muda de lugar.** No lugar da loja entram a lista de bloqueio de GPU, o modo de compatibilidade do
Chrome 146, a permissão de mapeamento 3D do Android XR, os modos de proteção que desligam o WebGPU (Modo Isolamento
da Apple desde 2024, Proteção Avançada do Android) e a ausência de WebXR no iPhone. O mesmo splat leva 9,5 ms por
quadro numa RTX 3070 e 151 a 164 ms em GPU integrada. A GPU exposta a qualquer link é superfície de ataque: o
primeiro zero-day explorado no Dawn foi corrigido em abril de 2026.

**A loja perde o caixa, não o catálogo.** A taxa se move pelo pagamento: 72% dos jogos iOS de maior receita nos EUA
já tinham loja web em 2024, o 9º Circuito manteve comissão zero sobre o link externo até se fixar uma taxa por custo,
e a Google Play caiu para 10% + 5% nos EUA, no Reino Unido e no EEE. E a loja reancora a cobrança no evento seguinte:
a Play passa a cobrar de 10% a 20% sobre a compra feita até 24 horas depois do link, a Apple cobra 15% sobre mini
apps em super-app e 15% sobre o link no iPhone brasileiro. O jogo que sai da loja entra noutra vitrine que cura e
cobra (Discord, mensageiros, portais). A IA no navegador bifurcou entre a página que traz o próprio modelo (pesada,
restrita a hardware de topo) e o navegador que fornece o dele (Prompt API sondada em 1,34% dos carregamentos e usada
em 0,00017%, só no desktop) — este recria a plataforma dona.

**Os sinais do enunciado, conferidos.** O Gestalt Village existe, mas foi criado e parado num dia (22/03/2026), tem
0 estrelas e baixa cerca de 2,56 GB antes de rodar "sem requisição de rede". O MixedRealityToolkit legado não teve
página aberta que documente a transição. O wildcard do enunciado já é, em parte, o estado atual: o iPhone não tem
WebXR.

## A tese

O link já alcança a GPU e o óculos, mas quase ninguém que o abre usa isso: a parte que rompe (computação na GPU para splats e IA) fica com quem cria, a experiência de massa segue em WebGL 2, e as funções da loja — cobrar, aprovar, regrar conteúdo e filtrar aparelho — não somem: mudam de dono (driver e lista de bloqueio, fabricante do navegador e do óculos, anfitrião do iframe, regulador) e perdem o aviso prévio que a loja dava.

## Os 43 efeitos de 1ª ordem

| id | Efeito | STEEP | Prob. | Prazo |
|---|---|---|---|---|
| `e1_01` | A distância entre sondar e usar vira a métrica que separa plataforma de promessa: 10,65% dos carregamentos no Chrome pedem o adaptador… | Tecnológico | alta | até 2028 |
| `e1_02` | Os motores publicam WebGPU como caminho opcional com rede de segurança WebGL 2 (Unity 6.6 tira WebGPU do experimental em 24/08/2026 mas… *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_03` | O WebGPU rompe apenas onde há computação na GPU: ordenar milhões de gaussianas por quadro (WebSplatter 1,2–4,5× sobre visualizadores web;… | Tecnológico | alta | até 2028 |
| `e1_04` | O splat vira mídia publicável por URL sem app proprietário: KHR_gaussian_splatting está 'Complete, Ratified by the Khronos Group' e o… *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_05` | Conteúdo WebGL já publicado ganha desempenho sem ser reescrito: a tradução dinâmica WebGL→WebGPU (GL2GPU, WWW 2025) reduz o tempo de quadro… | Tecnológico | média | 2028-2031 |
| `e1_06` | O WebGPU se separa do navegador e vira camada de portabilidade para voltar à loja: Transformers.js v4 roda o mesmo código WebGPU em… | Econômico | média | até 2028 |
| `e1_07` | Páginas de aparência editorial inflam maturidade e adoção sem fonte ('WebXR adoption grew 40% in 2026'; '65% dos novos web apps com 3D usam… | Social | alta | até 2028 |
| `e1_08` | No Brasil, a realidade aumentada por link já é escolha de desenho em escola pelo motivo de R1 (não instalar), mas sobre tecnologia madura —… | Social | alta | até 2028 |
| `e1_09` | A receita dos jogos móveis que mais faturam migra para a loja web (web shop) enquanto o jogo continua instalado da App Store: 72% dos jogos… *(óbvio)* | Econômico | alta | até 2028 |
| `e1_10` | A taxa sobre a compra feita por link deixa de ser fixada pela loja e passa a ser arbitrada por tribunal e regulador com valor atrelado a… *(óbvio)* | Político | alta | até 2028 |
| `e1_11` | O incentivo econômico para distribuir o executável pela web encolhe nos mercados ricos e fica maior no Brasil: desde 30/06/2026 a Google… | Econômico | média | até 2028 |
| `e1_12` | O corte de comissão tende a ficar com o desenvolvedor e não chegar a quem compra: com a comissão efetiva da Apple na UE caindo ~10 pontos… | Econômico | média | até 2028 |
| `e1_13` | O jogo no navegador se consolida como vitrine que alimenta a loja, não como substituto: 62% dos jogadores web (EUA/Reino Unido) já baixaram… *(óbvio)* | Econômico | média | até 2028 |
| `e1_14` | A loja de XR que a web ameaçaria é pequena e parada, e a pressão por XR no navegador não vem de fuga de taxa: a receita de desenvolvedores… *(óbvio)* | Econômico | alta | até 2028 |
| `e1_15` | O jogo instantâneo que cresce roda em tecnologia web dentro de mensageiros que curam, descobrem e monetizam: as Discord Activities são apps… *(óbvio)* | Econômico | alta | até 2028 |
| `e1_16` | Os portais de jogo web viram o gargalo de descoberta de um catálogo que triplica: foram lançados 15.000 jogos HTML5 no 1º semestre de 2025… *(óbvio)* | Econômico | média | até 2028 |
| `e1_17` | O jogo por link se desenha para sessão curta e hardware amplo, não para o AAA: no painel da Poki a sessão mais comum é de 11–20 minutos… *(óbvio)* | Social | alta | até 2028 |
| `e1_18` | Obras em WebAR sem app ganham data para quebrar: a Niantic Spatial encerrou o acesso à 8th Wall em 28/02/2026 (sem login, edição ou… *(óbvio)* | Social | alta | até 2028 |
| `e1_19` | A Apple controla o 3D na web sem bloquear nada, oferecendo um caminho declarativo e curado: o Safari 26.0 (15/09/2025) liga WebGPU em… | Político | alta | até 2028 |
| `e1_20` | A lista de bloqueio de GPU e o calendário de habilitação por fabricante de chip passam a decidir, sem aviso ao usuário, quem consegue abrir… *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_21` | A web gráfica se divide oficialmente em duas classes: o Chrome 146 (25/02/2026) lançou o WebGPU Compatibility mode ('featureLevel:… | Tecnológico | alta | até 2028 |
| `e1_22` | O mesmo link 3D entrega experiências separadas por uma ordem de grandeza conforme o aparelho: o WebSplatter renderiza a cena garden em 9,5… *(óbvio)* | Social | alta | até 2028 |
| `e1_23` | A mesma página de computação na GPU passa a ser utilizável num navegador e inviável em outro: o custo por despacho WebGPU é de 31,7 µs no… | Tecnológico | média | até 2028 |
| `e1_24` | Distribuir por link aumenta o consumo de energia no aparelho de quem abre: em 10 plataformas de conteúdo Android, a versão web no Chrome… *(óbvio)* | Tecnológico | média | até 2028 |
| `e1_25` | Um quarto dos celulares não abre link de XR imersivo: o iOS Safari 26.x não expõe a WebXR Device API (só atrás de flag), toda a cobertura… *(óbvio)* | Político | alta | até 2028 |
| `e1_26` | O WebXR no iPhone passa a depender de enforcement regulatório, não de padrão: motores não-WebKit estão permitidos na UE desde o iOS 17.4… *(óbvio)* | Político | média | 2028-2031 |
| `e1_27` | No Brasil a alternativa à App Store chega como outra loja antes de chegar como link: o Termo de Compromisso de Cessação homologado pelo… | Político | alta | até 2028 |
| `e1_28` | A GPU exposta a qualquer link vira superfície de ataque explorada, e redes corporativas e escolares ganham motivo para desligar WebGPU por… *(óbvio)* | Político | alta | até 2028 |
| `e1_29` | A recomendação publicada de tratar a GPU no navegador como câmera e microfone — com permissão explícita — dá base técnica para um prompt de… | Político | baixa | 2028-2031 |
| `e1_30` | Abrir um link de XR dá à página dados que funcionam como biometria e teclado: com 100 s de movimento de cabeça e mãos, um modelo identifica… *(óbvio)* | Social | média | até 2028 |
| `e1_31` | As fabricantes de óculos exercem controle pela permissão e pelo desenho da entrada, não pelo bloqueio: no Android XR 'all WebXR APIs… | Político | alta | até 2028 |
| `e1_32` | A própria GPU denuncia o que o visitante abre e identifica o aparelho, o que empurra navegadores a degradar precisão de tempo e computação:… | Tecnológico | média | até 2028 |
| `e1_33` | O XR por link de alta qualidade fica preso ao WebGL no óculos de maior base e no navegador de maior uso: no Meta Quest Browser o WebGPU… *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_34` | A AR imersiva completa pela web fica restrita à plataforma de óculos com menor base: o Chrome no Android XR documenta AR Module, Hit Test,… | Econômico | média | até 2028 |
| `e1_35` | Com a Meta pausando o Horizon OS para terceiros (17/12/2025) e centrando o Quest na loja — '86% of the effective time people spend in their… *(óbvio)* | Político | média | até 2028 |
| `e1_36` | O público-alvo da XR imersiva por link diminui enquanto cresce a categoria de óculos onde ela não se aplica: a IDC projetava queda de 42,8%… *(óbvio)* | Econômico | alta | até 2028 |
| `e1_37` | No comércio, o 3D por link sem instalação já maduro (Shopify com GLB/USDZ via model-viewer) desloca o gargalo para a produção do ativo, não… *(óbvio)* | Econômico | baixa | até 2028 |
| `e1_38` | O modelo de linguagem mais acessível a uma página passa a ser o escolhido e distribuído pelo fabricante do navegador: a Prompt API (Gemini… *(óbvio)* | Político | alta | até 2028 |
| `e1_39` | A IA embutida no navegador fica restrita a computador bem equipado e exclui o celular: o Gemini Nano do Chrome exige pelo menos 22 GB… *(óbvio)* | Social | alta | até 2028 |
| `e1_40` | 'IA no navegador sem rede' vira download adiantado de gigabytes e, no Brasil, recurso de quem tem Wi-Fi fixo: o Gestalt Village baixa ~2,56… *(óbvio)* | Social | alta | até 2028 |
| `e1_41` | O custo de inferência passa do servidor do autor para a GPU de quem abre o link, e o autor independente publica IA sem conta de API — com… *(óbvio)* | Econômico | média | até 2028 |
| `e1_42` | Inferência e interface passam a disputar a mesma GPU e a mesma memória na página, e o orçamento de memória vira o gargalo da IA no… *(óbvio)* | Tecnológico | média | até 2028 |
| `e1_43` | Surge o artefato que junta R1 e R2 — mundo 3D gerado e habitado por agentes rodando na GPU de quem abre, sem servidor: a Visionary combina… | Tecnológico | baixa | 2028-2031 |

Os 7 temas que organizam a 1ª ordem, e pelos quais os lotes de expansão foram formados: **Capacidade instalada, uso mínimo: onde o WebGPU rompe e onde só acelera** (`e1_01` a `e1_08`); **A loja perde o caixa, não o catálogo** (`e1_09` a `e1_14`); **A curadoria muda de dono: vitrines, super-apps e fornecedores** (`e1_15` a `e1_19`); **O porteiro vira a GPU, o driver e o motor do navegador** (`e1_20` a `e1_27`); **Segurança e privacidade trazem a permissão de volta** (`e1_28` a `e1_32`); **XR por link: assimetria entre óculos e base que encolhe** (`e1_33` a `e1_37`); **IA no navegador: a página traz o modelo ou o navegador fornece o dele** (`e1_38` a `e1_43`).

## Os 5 mais impactantes

1. **`e1_25` — Um quarto dos celulares não abre link de XR imersivo.** A ausência de WebXR no Safari do iOS sustenta 17 efeitos em cinco temas (sv4) e o ciclo estabilizador fl8: cada substituto da Apple (<model>, AR Quick Look) funciona e retira quem reclamaria. No Brasil atinge 24,56% dos celulares e decide que a RA de massa passe pelos caminhos da fabricante.

2. **`e1_09` — A receita sai para a loja web, o jogo fica na loja.** É a raiz da R3: mostra que a ruptura econômica está no pagamento, não no executável. Dela partem as respostas das lojas (e2_A22, e2_B01) e os ciclos fl9 e fl4, que explicam por que a taxa se reancora no próximo evento rastreável.

3. **`e2_A05` — O fallback WebGL 2 vira o produto de massa.** Fixa o piso estético do 3D por link até 2031 por cinco caminhos independentes — motor, portal, óculos, comprador institucional, escola (segundo ponto de convergência) — e alimenta fl1. É o que o público vê enquanto o compute fica com quem cria.

4. **`e2_C01` — O dono do sistema desliga o WebGPU por segurança.** Com e3_T2_16, mostra os dois donos de sistema móvel cortando a GPU por perfil; abre fl2 e cv4, o caminho para a imposição por frota (e3_T2_17) e a confusão estatística entre política e hardware fraco (e3_T2_18). É o porteiro que mais cresce sem aparecer como porteiro.

5. **`e3_T2_26` — O Decreto 12.880 dá a idade de graça à loja e cobra do link.** No Brasil, para qualquer peça com acesso provável por menores, decide link × app antes da conta da taxa (ct5, cv3). É a peça comum dos dois wildcards brasileiros de sinais opostos (w4 e w5) e a primeira regra que pune a distribuição por navegador de forma explícita.

**O que os cinco têm em comum.** Nenhum trata de o navegador desenhar melhor. Os cinco mostram **por onde o controle passa quando o executável deixa de passar pela loja**: pela plataforma que não oferece a API (`e1_25`), pela cobrança que se prende ao pagamento em vez da instalação (`e1_09`), pelo piso técnico que o público efetivamente recebe, o WebGL 2 (`e2_A05`), pelo dono do sistema que desliga a GPU em nome da segurança (`e2_C01`) e pela regra de idade que dá o sinal de graça a quem distribui por loja e cobra a verificação de quem distribui por link (`e3_T2_26`). O que o mapa descreve é **o link alcançando a GPU e o óculos enquanto as funções da loja — cobrar, aprovar, regrar conteúdo, filtrar aparelho — mudam de dono e perdem o aviso prévio**.

**Os 5 mais surpreendentes**: `e1_01` um único implantador move a 'adoção' pública do WebGPU; `e2_A02` o WebXR está abaixo da régua de depreciação do próprio Chromium; `e2_A08` o gêmeo digital adota splat por link sem esperar o WebGPU; `e3_T2_18` proteção aparece como hardware fraco; `e3_T1_07` linkar para o jogo jogável escapa da tarifa por instalação.

**Distribuição.** Econômico 28% → 26% → 33% e Político 23% → 21% → 22% da 1ª à 3ª ordem; Tecnológico 30% → 37% → 40%; Social 19% → 16% → 5%. **A categoria Ecológica ficou vazia**, e isso não é descuido: o único candidato (`e1_24`, energia maior da versão web de apps de conteúdo 2D no Android) mede apps 2D, não WebGPU nem WebXR, e foi reclassificado como Tecnológico; nenhuma fonte do corpus mede energia de WebGPU ou WebXR em celular (TMI-0083). 92 dos 205 efeitos são óbvios depois da auditoria (TMI-0061), numa proporção que cai de uma ordem para a seguinte; a taxa de não óbvios ficou abaixo da faixa de conferência da decisão, com a explicação registrada na síntese: a árvore descreve sobretudo mecanismos já em produto, política ou lei em 2026. 2 ficam fora da janela de 2031 (`e2_A21`, `e2_C39`).

## Wildcards

7 cenários de baixa probabilidade e alto impacto: 2 positivos, 4 negativos e 1 ambíguo.

- **w1 · O WebXR volta para trás da chave no visionOS** (negativo). Numa versão do visionOS entre 2027 e 2029, a Apple passa o WebXR de 'ligado por padrão' para uma permissão por site que vem desligada, enquanto os ambientes imersivos de site feitos com <model> e uma chamada de JavaScript…
- **w2 · Cinco dias sem GPU na web** (negativo). Em 2027, uma campanha de malvertising encadeia uma falha de uso-após-liberação no Dawn a uma fuga da sandbox e atinge, em anúncios comuns, a família Chromium inteira — Chrome, Edge, Samsung Internet e o navegador do Quest, que…
- **w3 · WebXR no iPhone pela porta de Tóquio** (positivo). Entre 2028 e 2030, um fornecedor lança no Japão, sob o regime do iOS 26.2 para motores alternativos, um navegador com Blink ou Gecko que traz WebXR imersivo — inclusive AR — no iPhone.
- **w4 · A idade pública que abre o link** (positivo). Em 2027, já na fase de fiscalização efetiva da ANPD, o governo federal põe no ar a verificação de idade pública que o art. 28 do Decreto 12.880 autoriza: uma credencial do gov.br que responde só 'sim ou não' para a faixa etária…
- **w5 · O link enquadrado como burla** (negativo). Já na fiscalização efetiva de 2027, a ANPD recebe denúncia de que um jogo que a App Store brasileira classificou 18+ por caixa de recompensa continua jogável por menores na versão web e num mini app de mensageiro.
- **w6 · O financiador único sai da biblioteca** (negativo). Numa nova rodada de cortes da Reality Labs, em 2027 ou 2028, a Meta deixa de pagar contribuições externas de WebXR. O caminho WebGPU nativo dentro da sessão imersiva do three.js, escrito com a nota 'This contribution is funded by…
- **w7 · A tomada de modelo no navegador** (ambíguo). Entre 2028 e 2030, a lógica da decisão da Comissão Europeia de 16/07/2026 — que obriga o Google a dar a serviços de IA rivais acesso aos modelos no dispositivo do sistema, inclusive o Gemini Nano, até o Android 18 e 01/08/2027 —…

**O wildcard do enunciado, testado.** "Uma fabricante de óculos bloquear WebXR por default" **perde a forma literal e ganha outra.** Por modelo de negócio é a forma menos plausível: a Meta declara mais de 1 milhão de usuários mensais de WebXR no Quest, paga o caminho WebGPU do WebXR no three.js e vende PWA na Horizon Store — controla a web imersiva por permissão por site, não por bloqueio. Por perfil ou política já acontece com o WebGPU (Modo Isolamento, Proteção Avançada) e, no iPhone, com o WebXR: deixou de ser wildcard. A forma que continua wildcard é a **substituição** (`w1`): há precedente — no visionOS 1.x o WebXR vinha desligado de fábrica — e o Safari 27 beta leva ao visionOS ambientes imersivos de site feitos com o elemento `<model>`, o caminho declarativo da própria Apple. O que separa isso de acontecer é o investimento recente da Apple no WebXR com WebGPU (Safari 26.2) e a falta de um gatilho, como um vazamento de dados de pose.

Os dois wildcards brasileiros saem do mesmo mecanismo com sinais opostos: a verificação de idade pública do gov.br que o Decreto 12.880 autoriza libera o link para público jovem (`w4`), ou a ANPD enquadra a versão web e o mini app como contorno da classificação da loja (`w5`), com base na linguagem anticontorno que já usou contra o Discord (Despacho nº 3/2026). O negativo mais próximo de acontecer é `w2`: uma cadeia de exploração no Dawn que leva a família Chromium, inclusive o navegador do Quest, a desligar o WebGPU por dias.

## Nota Brasil

No Brasil o link esbarra **no aparelho, na franquia e na regra de idade, mais do que na taxa**. São 93,1 milhões de linhas pré-pagas (Anatel, julho de 2026); 65% de quem usa internet acessa só pelo celular, 87% na classe DE (TIC Domicílios 2025); 24,56% dos celulares são iOS, sem WebXR; os aparelhos mais vendidos da América Latina em 2025 não têm status de WebGPU documentado. Por isso a RA de massa passa por caminhos que rodam no Safari, e a IA na página volta ao servidor, porque o modelo embutido pelo navegador não chega ao celular. No caixa, o Brasil fica fora do corte de taxa da Play até 30/09/2027, mas no iPhone o link paga 15% contra 10% da App Store desde o iOS 26.5; o Pix custa 0,89% a 1,45% por transação (fonte bancária), e a recarga do Free Fire por ID com Pix já escapa da taxa sobre link. Na regulação, o termo de compromisso do CADE com a Apple e o PL 4675/2025 tratam de loja e pagamento, não de motor de navegador; o Decreto 12.880/2026 dá o sinal de idade de graça a loja e sistema e obriga o serviço por navegador a aferir por conta própria, e a fiscalização efetiva da ANPD começa em 2027. Para público jovem, a regulação pesa contra o link onde a economia pesa a favor. Na pesquisa, os anais do SVR e do SBGames na SOL-SBC não têm artigo com WebGPU, e a RA por link aparece em escola sobre tecnologia madura. Procurado e não encontrado: uso de WebGPU ou WebXR com recorte brasileiro (o contador do Chrome não publica por país), distribuição de GPU e versão de Android no parque ativo, vendas de óculos XR no país, fatia brasileira dos portais de jogos web.

## O que me faria mudar de ideia

Os dois critérios declarados de antemão foram adoção além da maioria inicial de Rogers, medida pelo uso de quem abre o link (TMI-0092), e tecnologia que só melhora o que existe. **Nenhum derrubou as raízes por maturidade; o segundo derrubou uma parte da R1.** Nenhum contador de uso passa dos 2,5% de inovadores. Para malha 3D comum o WebGPU só melhora; rompe onde há computação na GPU. E "sem loja, sem aprovação, sem plataforma dona" não se sustenta: as funções da loja reaparecem com donos novos. A régua tem uma fraqueza própria deste tema: o único contador público de uso é o do Chrome, que não enxerga os navegadores dos óculos e conta quem desligou o WebGPU por proteção como quem não usa. Sinais que mudariam a conclusão:

- WebGPUQueueSubmit acima de 2,5% dos carregamentos no Chrome Platform Status por 90 dias seguidos, sem degrau de um dia atribuível a um único implantador (hoje 0,42%): o WebGPU sai dos inovadores e a leitura 'rompe só onde há compute' (e1_03, fl1) precisa ser refeita; acima de 16%, a R1 passa da maioria inicial pela régua de quem abre o link.
- WebXrSessionCreated acima de 0,001% dos carregamentos (hoje 0,00011%) ou medida independente de uso de WebXR no Quest Browser e no visionOS acima de 5 milhões de usuários ativos por mês (hoje 'mais de 1 milhão', autodeclarado pela Meta): cai e2_A02 e enfraquecem fl2 e fl7.
- WebXR ligado por padrão no Safari do iOS, ou navegador com motor não-WebKit lançado na UE ou no Japão com WebXR imersivo: desfaz o ciclo estabilizador fl8 e inverte ao menos 17 efeitos de sv4 (wildcard w3).
- LanguageModel_Prompt acima de 0,01% dos carregamentos (hoje 0,00017%) ou Prompt API estável no Chrome para Android: a R2 deixa de ser sinal fraco, e o ponto de convergência 'no Brasil a IA na página volta ao servidor' precisa ser revisto.
- Taxa sobre compra por link fixada pelo juízo no caso Epic v. Apple: acima de 20% fecha a vantagem da loja web no iPhone dos EUA; abaixo de 5% reforça a R3 e quebra o ciclo estabilizador fl9 (sv6).
- Participação dos jogos iOS de maior receita nos EUA com loja web abaixo de 50% (72% em ago/2024) depois da cobrança da Play sobre link, iniciada em 01/10/2026: a R3 perde o mecanismo de fuga.
- Segundo zero-day do Dawn explorado em 12 meses, ou política do Chrome Enterprise que desligue WebGPU (hoje não achada): fl2 passa de moderado a forte e o wildcard w2 vira efeito.
- Custo por despacho WebGPU no Firefox abaixo de 100 µs (medido ~1040 µs no Firefox 147, contra 31,7 µs no Safari 26.2): cai e1_23 e a dependência dupla da IA na página em relação ao Chromium (e2_B25, sy6).
- Medida da ANPD que cite versão web, PWA ou mini app como contorno: ct5 e ct6 se resolvem contra o link para público jovem (w5). Especificação pública de verificação de idade do gov.br apresentável pela Digital Credentials API: resolve a favor (w4).
- Percentual de peças publicadas com three.js que usam o WebGPURenderer acima de 25% em levantamento público (hoje não medido): as arbitragens 19 e 20 passam de correção de texto a mudança do ciclo fl1.

## Bibliografia essencial

Fontes abertas por inteiro, com título e URL copiados do registro `json/bibliografia.json` (TMI-0082). A lista completa, com 247 fontes, está na nota Obsidian.

1. Chrome Platform Status — contadores de uso (API pública /data/featurepopularity e /data/timeline/featurepopularity), leitura de 11/09/2026 — `https://chromestatus.com/data/timeline/featurepopularity?bucket_id=3888`
2. Chrome Platform Status — contadores WebXR (buckets 2908, 2415, 2413), séries 2023–2026 — `https://chromestatus.com/data/timeline/featurepopularity?bucket_id=2908`
3. Chrome Platform Status — contadores das APIs de IA embutidas (LanguageModel, Summarizer, Translator) e WebNN (MLContext), leitura de 11/09/2026 — `https://chromestatus.com/data/featurepopularity`
4. caniuse.com — base de dados aberta (Fyrd/caniuse, data-2.0.json atualizado em 24/08/2026; uso regional BR de jul/2026) — `https://raw.githubusercontent.com/Fyrd/caniuse/main/fulldata-json/data-2.0.json`
5. W3C — WebGPU, Candidate Recommendation Draft de 01/09/2026 (GPU for the Web WG); WGSL — `https://www.w3.org/TR/webgpu/`
6. W3C — WebXR Device API, Candidate Recommendation Draft de 09/06/2026 (Immersive Web WG) — `https://www.w3.org/TR/webxr/`
7. WebKit Blog — WebKit Features for Safari 26.2 (12/12/2025): WebXR com WebGPU no visionOS — `https://webkit.org/blog/17640/webkit-features-for-safari-26-2/`
8. Android Developers — Develop for the web on Android XR (última atualização 31/08/2026) — `https://developer.android.com/develop/xr/web`
9. Unity Discussions — 'WebGPU out of experimental in Unity 6.6' (24/08/2026); Unity 6000.6.0f1 — `https://discussions.unity.com/t/webgpu-out-of-experimental-in-unity-6-6/1734694`
10. PlayCanvas Blog — 'New in SuperSplat: WebGPU and Streaming Bring Huge Performance Wins' (03/06/2026); releases no GitHub — `https://blog.playcanvas.com/new-in-supersplat-webgpu-and-streaming-bring-huge-performance-wins/`
11. Cesium — 'Introducing 3D Gaussian Splats with Hierarchical Level of Detail Using 3D Tiles' (27/04/2026) — `https://cesium.com/blog/2026/04/27/3d-gaussian-splats-lod/`
12. WebSplatter: Enabling Cross-Device Efficient Gaussian Splatting in Web Browsers via WebGPU — Yudong Han, Chao Xu, Xiaodan Ye, Weichen Bi, Zilong Dong, Yun Ma (Peking University; Tongyi Lab/Alibaba), arXiv 2602.03207, 03/02/2026 — `https://arxiv.org/abs/2602.03207`
13. GL2GPU: Accelerating WebGL Applications via Dynamic API Translation to WebGPU — Yudong Han, Weichen Bi, Ruibo An, Deyu Tian, Qi Yang, Yun Ma (Peking University); WWW '25, pp. 751–762, DOI 10.1145/3696410.3714785 — `https://github.com/yudshj/GL2GPU`
14. WebLLM: A High-Performance In-Browser LLM Inference Engine — Charlie F. Ruan et al. (CMU, SJTU, NVIDIA), arXiv 2412.15803 (v1 dez/2024; v2 13/04/2026) — `https://arxiv.org/html/2412.15803v2`
15. Generic and Automated Drive-by GPU Cache Attacks from the Browser — Lukas Giner, Roland Czerny, Christoph Gruber, Fabian Rauscher, Andreas Kogler, Daniel De Almeida Braga, Daniel Gruss (TU Graz; Univ. Rennes/CNRS/IRISA); ACM ASIA CCS '24, DOI 10.1145/3634737.3656283 — `https://ddealmei.github.io/assets/pdf/papers/2024-asiaccs-webgpu.pdf`
16. Privacy Leakage via Unrestricted Motion-Position Sensors in the Age of Virtual Reality: A Study of Snooping Typed Input on Virtual Keyboards — Yi Wu, Cong Shi, Tianfang Zhang, Payton Walker, Jian Liu, Nitesh Saxena, Yingying Chen; IEEE Symposium on Security and Privacy (S&P) 2023 — `https://mosis.eecs.utk.edu/publications/wu2023privacy.pdf`
17. Help Net Security, 'Google fixes Chrome zero-day with in-the-wild exploit (CVE-2026-5281)' (01/04/2026) e BleepingComputer, 'Google warns of new Chrome zero-day flaw exploited in attacks' (04/09/2026) — `https://www.helpnetsecurity.com/2026/04/01/google-chrome-zero-day-cve-2026-5281/`
18. Android Help — 'Improve device security with Advanced Protection for Android' (support.google.com/android/answer/16339980; página sem data) — `https://support.google.com/android/answer/16339980?hl=en`
19. webkit-changes — commit '[Lockdown Mode] Explicitly disable WebGPU' (Mike Wyrzykowski, 06/05/2024) — `https://www.mail-archive.com/webkit-changes@lists.webkit.org/msg214108.html`
20. Chrome for Developers — The Prompt API (publicada 20/05/2025, atualizada 26/08/2026) — `https://developer.chrome.com/docs/ai/prompt-api`
21. Gestalt Village — repositório paulobsf/GestaltVillage (README e código clonados) — `https://github.com/paulobsf/GestaltVillage`
22. Appcharge — 'We Analyzed Web Store Adoption Across Top Grossing Mobile Games' (28/10/2024) — `https://www.appcharge.com/blog/mobile-game-web-store-report`
23. Epic Games, Inc. v. Apple Inc., No. 25-2935 (9th Cir., opinião de 11/12/2025) — PDF oficial do tribunal — `https://cdn.ca9.uscourts.gov/datastore/opinions/2025/12/11/25-2935.pdf`
24. Android Developers Blog, 'Expanded billing choice and lower fees on Google Play' (24/06/2026) — `https://android-developers.googleblog.com/2026/06/play-expanded-billing.html`
25. Google Play Console Help — 'Enrolling in the external content links program for users in the US' — `https://support.google.com/googleplay/android-developer/answer/16470497?hl=en`
26. Apple Developer News — 'Introducing the App Store Mini Apps Partner Program' (13/11/2025) — `https://developer.apple.com/news/?id=xcz1s7cz`
27. Apple Newsroom — 'Apple anuncia mudanças no iOS para o Brasil' (atualização de 18/06/2026; iOS 26.5) — `https://www.apple.com/newsroom/2026/06/apple-announces-changes-to-ios-in-brazil/`
28. Road to VR — 'Meta's Latest Quest Store Revenue Figure Signals a Steady but Stagnant Marketplace' (04/04/2025) — `https://roadtovr.com/meta-quest-store-revenue-milestone-2025-update/`
29. Niantic Spatial — 'Goodbye 8thwall.com. Hello 8thwall.org.' — `https://info.nianticspatial.com/blog/8th-wall-open-source`
30. Open Web Advocacy — 'The Digital Markets Act Is Delivering Real Wins, But Not Yet for Browser Engines' (15/05/2026) — `https://open-web-advocacy.org/blog/the-digital-markets-act-is-delivering-real-wins-but-not-yet-for-browser-engines/`
31. Alex Russell — Ensaio “The Performance Inequality Gap, 2026”, Infrequently Noted, 28/11/2025. — `https://infrequently.org/2025/11/performance-inequality-gap-2026/`
32. UploadVR — WebXR passa a vir ligado no visionOS 2 (no visionOS 1.x vinha desligado de fábrica), 12/06/2024; aberta pelo caçador de wildcards — `https://www.uploadvr.com/visionos-2-apple-vision-pro-webxr/`
33. WebKit Blog — News from WWDC26: WebKit in Safari 27 beta (elemento <model>, ambientes imersivos de site); aberta pelo caçador de wildcards — `https://webkit.org/blog/17967/news-from-wwdc26-webkit-in-safari-27-beta/`
34. CADE — Conselho Administrativo de Defesa Econômica (Brasil) — Notícia oficial “Cade forma maioria pela homologação de TCC em investigação sobre práticas da Apple no iOS”, gov.br, 23/12/2025. — `https://www.gov.br/cade/pt-br/assuntos/noticias/cade-forma-maioria-pela-homologacao-de-tcc-em-investigacao-sobre-praticas-da-apple-no-ios`
35. ANPD — Despacho Decisório nº 3/2026/SFI (Discord Inc.), 12/08/2026; aberto pelo caçador de wildcards — `https://www.gov.br/anpd/pt-br/centrais-de-conteudo/documentos-tecnicos-orientativos/despacho_decisorio_3_discord-inc.pdf/@@display-file/file`
36. CGI.br/Cetic.br — TIC Domicílios 2025, apresentação de principais resultados (09/12/2025), gráficos 2D e 2E — `https://cetic.br/media/analises/tic_domicilios_2025_principais_resultados.pdf`
37. Teleco, 'Estatísticas de Celulares no Brasil' (dados Anatel de julho de 2026) — `https://teleco.com.br/ncel.asp`

---

*Mapa gerado pela skill `futures-wheel` (modo 1, a partir de uma inovação) em 12/09/2026, com teto de 15 subagentes, dos quais 14 usados. Fase 8 pulada. 205 efeitos, 113 não óbvios (55%) depois da auditoria, que fez 83 reclassificações e arbitrou 27 contradições entre agentes (17 efeitos com nota de correção). Contrato em `CONTRATO.md`, histórico em `log.txt`, artefatos intermediários em `json/`.*