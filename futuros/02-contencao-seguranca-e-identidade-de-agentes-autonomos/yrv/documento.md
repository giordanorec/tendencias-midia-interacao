---
tema: "Contenção, segurança e identidade de agentes autônomos"
slug: contencao-seguranca-e-identidade-de-agentes-autonomos
autor_login: yrv
zona_de_interesse: Agentes
data: 2026-09-17
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 7
efeitos_ordem_2: 10
efeitos_ordem_3: 10
tecnologias_citadas: [Web Bot Auth, HTTP Message Signatures, RFC 9421, Signature Agent Card, Cloudflare Verified Bots, pay per crawl, HTTP 402, Forwarded header, WIMSE, SPIFFE, OAuth 2.1, Cross App Access, MCP, Okta Agent SSO, Microsoft Entra Agent ID, AP2, FIDO Alliance, CaMeL, FIDES, Progent, RTBAS, FORGE, IPI-proxy, AgentDojo, LlamaFirewall, Gray Swan Shade, gVisor, Firecracker, Kata Containers, bubblewrap, Seatbelt, OWASP Top 10 for LLM Applications, PromptTrace, MITRE ATLAS]
fontes: 21
confianca: media
experimento: "O Balcão — uma página com duas portas, uma que verifica assinatura de agente e outra que infere pelo comportamento, servindo conteúdo e preço diferentes, para medir quantos humanos caem na porta errada"
skill_usada: futurizacao-yrv
publico_ok: false
---

## 1. Resumo

O agente ganhou mãos antes de ganhar nome, e é o nome que está chegando agora. Este mapa
sustenta que três rupturas governam a contenção de agentes até 2031. A primeira é de
protocolo: distinguir humano de máquina deixou de ser inferência estatística e virou
verificação criptográfica — o Web Bot Auth assina cada requisição com Ed25519 e publica a
chave num diretório, e em 3 de junho de 2026 o tráfego automatizado passou o humano na rede
da Cloudflare, 57,5% contra 42,5% das requisições de HTML. A segunda é de arquitetura: o
humano no laço deixou de ser controle, e há número para isso — a própria Anthropic registra
que usuários aprovam cerca de 93% dos pedidos de permissão do Claude Code, o que transfere a
decisão para monitores determinísticos fora do modelo, do tipo CaMeL, Progent ou FIDES. A
terceira é econômica: o agente vira principal com conta, orçamento e trilha próprios —
identidades de máquina já são 109 para cada humana no levantamento da Palo Alto Networks, e o
crescimento projetado das identidades de agente, 85% em doze meses, é o mais rápido dos três
tipos. A fragilidade declarada deste mapa está na primeira raiz: quase toda a evidência de
adoção vem de um fornecedor só, e um padrão que só existe na borda de uma empresa não é um
padrão — é um produto.

## 2. O tema

O tema é **o agente autônomo tratado como ator próprio**: uma coisa que executa comando,
navega, chama API e gasta dinheiro, e que por isso precisa de identidade, permissão,
isolamento e trilha de auditoria seus, e não emprestados do humano que a acionou.

Ele encosta em mídia e interação por três lados.

Primeiro, porque **a web deixou de ser desenhada só para gente**. Quando a maioria das
requisições de página é de máquina, a pergunta de projeto muda: para quem é a página, o que
ela serve a cada um, e como ela diz isso sem precisar adivinhar.

Segundo, porque **a interface da permissão é interface**. O diálogo "permitir/negar" é um
artefato de linguagem de interação, e há medida de que ele falhou: aprovar quase tudo não é
consentir, é cansar. O que vem no lugar — política de capacidade declarada antes — é um
objeto de design ainda sem gramática.

Terceiro, porque **quem projeta passa a projetar para dois públicos ao mesmo tempo**: o
humano que lê e o agente que compra em nome dele. São públicos com métricas opostas.

Três coisas ficam **fora** deste mapa, por decisão de recorte:

- **O ofício de programar com agentes** — tema 1 da disciplina. Aqui o objeto não é como se
  escreve com o agente, é como se contém o agente.
- **Se o agente acertou — avaliação e observabilidade** — tema 3. A trilha de auditoria entra
  aqui só como prova de identidade e responsabilidade, nunca como medida de qualidade.
- **Identidade humana sem terceiros (passkeys)** — tema 17. Aqui o principal é a máquina.

E, por cima dos três, a régua da disciplina: **o que já é comum em produto de massa não
entra**. CAPTCHA, WAF, antivírus, OAuth para gente e contêiner Docker são substrato — aparecem
na seção 3, não na seção 4, e o teste que reprovou cada um está na seção 12.

Por que isto merece mapa de futuro e não levantamento de estado da arte: porque a pergunta
central ainda não tem resposta em lugar nenhum. Quem emite a identidade do agente, o que ela
autoriza, e quem paga quando ela erra são três perguntas abertas com candidatos concorrentes
e nenhum vencedor — e é exatamente essa a condição em que um mapa vale mais que um inventário.

## 3. Onde isso está hoje

### O agente virou maioria do tráfego, e a régua parou de funcionar

Em 3 de junho de 2026 a Cloudflare divulgou, pelo Radar, que requisições automatizadas
passaram a 57,5% do tráfego de HTML contra 42,5% de humanos — a primeira vez que a máquina
passa a gente [16]. O próprio anúncio vem com ressalva que convém repetir: a medida é de
requisições de HTML numa rede só, não de atenção nem de internet inteira, e o chefe da empresa
a chamou de "meio bagunçada". Ainda assim, é o dado datado que muda a pergunta de projeto.

O método antigo de distinguir — `User-Agent`, faixa de IP, comportamento de mouse — não
distingue mais nada. E ele nunca foi neutro: na pesquisa do WebAIM de 2023–2024, usuários de
leitor de tela apontaram o CAPTCHA como a barreira **número um** da web, à frente de link
ambíguo e de imagem sem descrição, posição que ele ocupa há mais de uma década [11]. O
reCAPTCHA analisa atividade de fundo e, quando confunde o dispositivo assistivo com robô,
entrega justamente o desafio que a pessoa não consegue resolver [11]. Ou seja: o mecanismo que
deveria separar humano de máquina já erra sistematicamente contra um grupo de humanos.

### A identidade de agente saiu do papel — mas quase toda por um fornecedor

O **Web Bot Auth** propõe que o agente assine a requisição com chave privada, em vez de
declarar quem é. A arquitetura está no draft IETF `draft-meunier-web-bot-auth-architecture-05`,
de Thibault Meunier (Cloudflare) e Sandor Major (Google), publicado em 2 de março de 2026:
assinatura sobre `@authority` ou `@target-uri`, parâmetros obrigatórios `created`, `expires`,
`keyid` (impressão digital SHA-256 do JWK) e `tag="web-bot-auth"`, com cabeçalho opcional
`Signature-Agent` apontando o diretório de chaves; segredo compartilhado é proibido, só
criptografia assimétrica, e a chave não pode correlacionar a uma pessoa — só a um papel
organizacional [2]. Sobre ele, o `draft-meunier-webbotauth-registry-03`, de 26 de junho de
2026, acrescenta o **Signature Agent Card**: um documento JSON, montado sobre o OAuth Client ID
Metadata Document, em que o agente declara user-agent esperado, adesão ao robots.txt, se é
"fetcher" ou "crawler", **finalidade do uso do dado**, tipos de conteúdo alvo, controle de taxa
e endpoints conhecidos [12].

Do lado da implantação, a Cloudflare integrou HTTP Message Signatures ao seu Verified Bots
Program: a borda valida `Signature`, `Signature-Input` e `Signature-Agent` com Ed25519 e marca
o tráfego como verificado, para que o dono do site escreva regra em cima disso [3]. É
implantação real — e é de uma empresa só. O IETF não adotou nenhum dos drafts como documento
de grupo de trabalho.

### A cobrança já tem código de status

O **pay per crawl** da Cloudflare, de 1º de julho de 2025, usa o HTTP **402 Payment Required**:
o rastreador apresenta pagamento em cabeçalho e recebe 200, ou recebe 402 com o preço, via
`crawler-price`, `crawler-exact-price` e `crawler-max-price` [6]. O texto é explícito sobre
onde isso vai dar: agentes com orçamento negociando acesso a recurso digital de forma
programática — pedir "sintetize a pesquisa recente sobre câncer" e gastar verba comprando o
material [6]. E é explícito sobre a dependência: sem Web Bot Auth, qualquer um se passa por
qualquer um, e a cobrança não tem a quem cobrar [6].

### A contenção existe, é boa, e não é suficiente

A Anthropic publicou em 25 de maio de 2026 a arquitetura de contenção do Claude, com três
padrões: contêiner efêmero em gVisor no claude.ai; sandbox do sistema operacional com humano
no laço no Claude Code (Seatbelt no macOS, bubblewrap no Linux, leitura liberada e escrita,
rede e shell sob aprovação); e VM selada no Cowork [17]. O documento é notável por declarar as
próprias falhas: configuração de projeto executada antes do consentimento, injeção direta pelo
usuário furando a defesa ambiental, exfiltração por domínio já permitido — porque a lista de
domínios permitidos é, na prática, concessão de capacidade — e a VM cegando ferramentas de
detecção de endpoint [17]. E declara o número que derruba o desenho vigente: **os usuários
aprovam cerca de 93% dos pedidos**, o que o próprio texto chama de fadiga de aprovação [17].

O incidente da Microsoft, de 5 de junho de 2026, mostra a costura: no Claude Code GitHub
Action, a ferramenta `Bash` estava sob bubblewrap com limpeza de variáveis de ambiente, e a
ferramenta `Read` não estava — bastava instruir o agente a ler `/proc/self/environ` por um
comentário de issue para colher a `ANTHROPIC_API_KEY` do runner. Reportado em 29 de abril de
2026, corrigido em 5 de maio na versão 2.1.128, com a recomendação da "Regra de Dois": nenhum
fluxo deve ter, ao mesmo tempo, entrada não confiável, acesso a segredo e capacidade de mudar
estado externo [9].

### O número da injeção de prompt é público — e continua não sendo zero

O system card de 28 de maio de 2026 registra, para o Claude Opus 4.8 em 129 ambientes web com
dez tentativas cada, **31,5% de sucesso de ataque sem salvaguardas e 0,5% com elas**; em
ambiente de código, 7,03% e 2,09% [18]. A própria Anthropic havia publicado, em 24 de novembro
de 2025, que 1% de sucesso "ainda representa risco significativo" e que "nenhum agente de
navegador é imune a injeção de prompt" [1]. Do lado de fora, a comparação entre fornecedores
não fecha: a OpenAI publica um índice de robustez de 0,963 numa superfície só, o Google não
publica número por superfície, e a Meta mede guardrail em benchmark público (17,6% no
AgentDojo, 1,75% com LlamaFirewall) — três réguas que não se comparam [18].

O OWASP incorporou isso: o Top 10 para Aplicações de LLM de agosto de 2026 mantém injeção de
prompt em primeiro e **sobe Excessive Agency do sexto para o terceiro lugar**, com metodologia
nova — 7.714 incidentes analisados, 6.639 classificáveis, e peso de 75% para julgamento da
comunidade contra 25% para o dado de incidente [5]. A leitura do próprio OWASP é a que
interessa aqui: "o modelo não está apenas devolvendo uma resposta, está tomando uma ação", e o
foco deve migrar de impedir a manipulação do modelo para controlar o que o agente pode fazer,
via identidade, autorização e menor privilégio [5].

### O agente já é identidade de primeira classe em produto — e mal governada

A Palo Alto Networks, no 2026 Identity Security Landscape, mede **109 identidades de máquina
para cada humana**, contra 82 para 1 um ano antes; projeta crescimento de 77% para identidades
de máquina, 56% para humanas e **85% para identidades de agente**, a mais rápida das três; e
registra que mais da metade dos participantes não consegue aplicar menor privilégio de forma
consistente a contas de serviço [4]. Do lado dos padrões: o Okta tornou o Agent SSO geral em 24
de agosto de 2026, registrando agentes no diretório com token curto e governado em vez de chave
estática, e o Cross App Access — extensão do OAuth — foi adotado como a especificação oficial
de autorização gerida por empresa do MCP; o Entra Agent ID, da Microsoft, também está geral
[14]. O que ainda falta é governança e não protocolo: só 34% das organizações aplicam a agentes
os controles que aplicam a humanos, e a cadeia de delegação colapsa escopo — "um agente com
token restrito que chama uma ferramenta com token amplo tem token amplo" [14].

No IETF, o `draft-klrc-aiagent-auth-00`, de 2 de março de 2026, de Pieter Kasselman (Defakto),
Jean-François Lombardo (AWS), Yaroslav Rosomakho (Zscaler) e Brian Campbell (Ping), não inventa
protocolo: compõe WIMSE, SPIFFE e OAuth 2.0, trata o agente como workload que itera entre um
LLM e um conjunto de ferramentas, e declara em aberto exatamente o ponto de interação — como a
confirmação com o usuário acontece no meio da execução [7].

### O dinheiro do agente também já tem padrão

O AP2, anunciado pelo Google em setembro de 2025, define como um agente obtém autorização
assinada e verificável para iniciar pagamento em nome de alguém, com mandatos abertos e
fechados restringindo comerciante, itens, valor, orçamento, instrumento e recorrência; a versão
0.2 saiu em abril de 2026 e, no mesmo mês, o Google anunciou a doação do protocolo à FIDO
Alliance para mantê-lo neutro [15].

### A defesa determinística saiu do paper e virou objeto de teste

O trabalho de 25 de junho de 2026 de Narisetty, Kore, Kattamanchi e Kumarapu avalia cinco
defesas fora de banda — CaMeL, FIDES, Progent, RTBAS e FORGE — que usam capacidades, rótulos de
fluxo de informação e monitor de referência. Contra o Progent, o sucesso médio de ataque caiu
cerca de seis vezes, de 25,8% para 4,2%, e um ataque adaptativo feito à mão chegou a 2,6%; os
autores marcam que é evidência preliminar, em modelo pequeno (Qwen2.5-7B) [8]. A ferramenta de
red team correspondente também existe: o IPI-proxy, de 12 de maio de 2026, intercepta a
resposta HTTP de domínios já autorizados e injeta 820 cadeias de ataque em seis posições de
HTML, para medir agente em tráfego real e não em página simulada [10].

E há infraestrutura de treino: o PromptTrace, que a varredura da turma trouxe, hoje oferece **10
laboratórios e um CTF de 17 níveis** com defesas em camadas — regra de recusa, filtro de
palavra, canário, regex de saída e classificador de LLM em vários estágios —, gratuito e sem
cadastro, referenciado ao OWASP e ao MITRE ATLAS [21]. *(O bloco do tema descrevia sete
laboratórios e quinze níveis; ao abrir o site em 17/09/2026 são dez e dezessete. A divergência
está na seção 8.)*

### O isolamento tem preço conhecido

O levantamento de 2 de fevereiro de 2026 da Northflank põe números onde havia opinião:
contêiner comum sobe em milissegundos e compartilha o kernel; o gVisor sobe em milissegundos e
cobra 10–30% em carga pesada de I/O; o Firecracker sobe em ~125 ms com menos de 5 MiB de
sobrecarga por VM; o Kata em ~200 ms. A recomendação para código não confiável em produção é
microVM ou Kata, por isolamento imposto em hardware [13].

### E já existe o mercado de contornar tudo isso

Fora do escopo dos padrões, e anterior a eles: proxy residencial, navegador anti-detecção e
serviço de resolução de CAPTCHA são indústria em operação hoje, vendida abertamente como
"padrão de contorno" para quando a Cloudflare bloqueia agente. Isto é estado da arte, não
efeito futuro — e por isso um efeito que eu havia escrito sobre "mercado de parecer humano" foi
morto na Fase 5 e registrado na seção 12.

### Nota sobre o Brasil

O PL 2338/2023, marco legal da IA, foi aprovado no Plenário do Senado em 10 de dezembro de 2024
e remetido à Câmara dos Deputados em 17 de março de 2025, onde a tramitação segue; a matéria no
Senado consta como encerrada naquela casa [19]. O regime que ele desenha reparte
responsabilidade entre desenvolvedor e operador — quer dizer: **o Brasil está resolvendo a
pergunta da responsabilidade sem criar sujeito novo**, e isso importa para este mapa, porque
retira força da hipótese de personalidade jurídica do agente (ver seções 6 e 12).

## 4. As disrupções-raiz

Antes das três, o que foi recusado. A triagem de maturidade completa está na seção 12; aqui
ficam só os nomes e o teste que reprovou: CAPTCHA, WAF, antivírus e OAuth para humanos
reprovam em T5 (rotina). Contêiner com namespaces e cgroups reprova em T5. **Firecracker e
gVisor também reprovam em T5** — são maduros, com preço e falhas documentados, e entram como
*substrato*: participam da disrupção sem serem a disrupção, porque o que rompe é o arranjo, não
o artefato. E o grupo mais importante da recusa: **classificador de injeção, hook que bloqueia
comando destrutivo e caixa de aprovação por ação reprovam em T1** — não mudam o que é possível,
fazem durar o arranjo em que instrução e dado dividem o mesmo contexto. São H2−, no vocabulário
dos Três Horizontes: inovação que escora o presente e se disfarça de tendência.

### Raiz 1 — A identidade do agente vira propriedade verificável do protocolo, não inferência do servidor

**O que rompe.** Rompe a competência de *adivinhar quem está do outro lado*. Toda uma indústria
— impressão digital de navegador, análise de movimento de mouse, reputação de IP, CAPTCHA —
existe para produzir um palpite probabilístico sobre a natureza do visitante. Assinatura
criptográfica no cabeçalho torna o palpite desnecessário para quem assina, e torna a recusa
explícita para quem não assina. O ativo deixa de ser o modelo de detecção e passa a ser o
**diretório de chaves** e o direito de constar nele.

**Por que agora e não há cinco anos.** Sinal datado: a arquitetura virou draft IETF em 2 de
março de 2026 [2] e ganhou um registro com declaração de finalidade em 26 de junho de 2026
[12]; a validação Ed25519 roda na borda da Cloudflare para planos Free e Pro [3]; e o incentivo
econômico existe porque há código de status para cobrar, o 402, desde 1º de julho de 2025 [6].
Há cinco anos faltavam as três pernas: não havia volume de agente que justificasse (o tráfego
automatizado só passou o humano em junho de 2026 [16]), não havia como cobrar, e não havia
quem assinasse.

**O que ainda falta acontecer.** Um emissor que não seja um único fornecedor de CDN. Enquanto o
diretório de chaves, a validação e a regra de política estiverem na mesma empresa, o que existe
é produto, não padrão — e o IETF não adotou nenhum dos drafts como documento de grupo. Falta
também a peça que a própria Cloudflare já apontou: confiança transitiva, carregando identidade
e finalidade declarada através de intermediários.

### Raiz 2 — A autorização do agente sai do modelo e do humano, e vira monitor determinístico fora de banda

**O que rompe.** Rompe duas competências ao mesmo tempo. A primeira é *escrever prompt de
sistema defensivo* — a crença de que dá para instruir o modelo a não obedecer ao texto errado.
A segunda, mais cara, é *o humano no laço como controle*: o número de 93% de aprovação [17]
mostra que o botão "permitir" não é consentimento, é ruído. O que entra no lugar não é melhor
persuasão nem melhor classificador: é um monitor que decide fora do modelo, com capacidade
declarada antes e regra que não depende do que o modelo achou do texto — CaMeL, FIDES, Progent,
RTBAS, FORGE [8].

**Por que agora e não há cinco anos.** Sinal datado: as cinco defesas fora de banda já são
objeto de avaliação adaptativa comparada, com queda de 25,8% para 4,2% no Progent, em junho de
2026 [8]; o OWASP subiu Excessive Agency de sexto para terceiro em agosto de 2026 e recomendou
explicitamente mudar o foco de impedir manipulação para controlar ação [5]; a Microsoft
transformou a "Regra de Dois" em recomendação de arquitetura depois de um caso real com
credencial vazada, em junho de 2026 [9]. Há cinco anos o agente não tinha ferramenta, não
tinha segredo e não tinha saída — não havia o que conter.

**O que ainda falta acontecer.** Falta a prova de que o monitor determinístico não mata a
utilidade em agente de propósito geral. A evidência disponível é de modelo pequeno e é
declarada preliminar pelos próprios autores [8]. E falta a peça de interação: o draft do IETF
deixa em aberto justamente *como* a confirmação com o usuário acontece no meio da execução [7]
— ou seja, ninguém sabe ainda qual é a interface disso.

### Raiz 3 — O agente vira principal econômico: conta própria, orçamento próprio, trilha própria

**O que rompe.** Rompe o pressuposto de que o agente é extensão do usuário. Chave de API
compartilhada, sessão herdada, conta de serviço genérica — tudo isso pressupõe que quem
responde é a pessoa, e que o agente é só um braço. Quando o agente tem identidade emitida,
expirada e auditada por si, com orçamento e mandato assinado, ele vira **parte** da transação.
O que perde valor é o IAM desenhado para dois tipos de sujeito (gente e servidor); o que nasce
é registro, seguro, reputação e disputa.

**Por que agora e não há cinco anos.** Sinal datado: 109 identidades de máquina por humana,
contra 82 um ano antes, com projeção de 85% de crescimento para identidade de agente [4]; Okta
Agent SSO geral em 24 de agosto de 2026 e Cross App Access adotado na especificação do MCP
[14]; composição WIMSE/SPIFFE/OAuth em draft IETF de 2 de março de 2026 [7]; AP2 na versão 0.2
em abril de 2026 e doado à FIDO Alliance no mesmo mês [15]. Há cinco anos não existia agente
que gastasse dinheiro sozinho.

**O que ainda falta acontecer.** Falta o preço do erro ter dono. Hoje a responsabilidade é
repartida por contrato entre fornecedores, e a lei que se aproxima no Brasil reparte entre
desenvolvedor e operador sem criar sujeito novo [19]. Enquanto não houver um caso julgado com
valor cobrado, a identidade do agente serve para autorizar e não para responsabilizar — e é a
segunda função que sustenta metade dos efeitos deste galho.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: A identidade do agente vira propriedade verificável do protocolo, não inferência do servidor
    efeitos:
      - id: e1
        ordem: 1
        efeito: Sites passam a servir conteúdo, preço e limite diferentes conforme a identidade assinada do agente, em vez de conforme comportamento inferido
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: A unidade de comércio da mídia deixa de ser a página servida e passa a ser o acesso negociado por requisição, com preço declarado no próprio protocolo
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Redações e produtoras passam a desenhar o material primeiro para o comprador-máquina, com estrutura, licença e preço legíveis antes do texto
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Quem chega sem assinatura cai na faixa de suspeita e paga o atrito da dúvida, inclusive a pessoa que navega por tecnologia assistiva
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Acesso acessível passa a depender de o agente assistivo ser credenciado, e o credenciamento vira questão de direito e não de usabilidade
                sinal: fraco
                prazo: 2032
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A competência de inferir quem está do outro lado perde valor, e a indústria de detecção de bot migra de adivinhar para arbitrar política de acesso
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A emissão de identidade de agente se concentra em poucos diretórios, e recusar assinatura vira poder de exclusão da web
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Autoridade de concorrência passa a tratar emissor de identidade de agente como infraestrutura essencial, com dever de acesso não discriminatório
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: A autorização do agente sai do modelo e do humano, e vira monitor determinístico fora de banda
    efeitos:
      - id: e3
        ordem: 1
        efeito: A permissão do agente deixa de ser pedida à pessoa no instante da ação e passa a ser declarada antes, como política executável
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: A interface principal de um agente vira a edição do seu orçamento de capacidades, e o diálogo de aprovação vira exceção rara e cara
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Escrever política de capacidade entra na formação de quem projeta interação, ao lado de arquitetura de informação
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: A Regra de Dois vira restrição de arquitetura de produto, e nenhuma superfície junta entrada não confiável, acesso a segredo e saída externa
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Produtos de mídia com agente se partem em superfícies separadas e visíveis, e a costura entre elas vira elemento de linguagem de interface
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Contenção vira propriedade declarada e comparável do agente, publicada como ficha técnica de isolamento
        sinal: fraco
        prazo: 2030
        confianca: baixa
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Compra corporativa de agente passa a exigir a ficha de contenção antes da demonstração de capacidade
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Certificação de contenção vira barreira de entrada e empurra o agente pequeno para dentro da plataforma de um terceiro
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: O agente vira principal econômico, com conta própria, orçamento próprio e trilha própria
    efeitos:
      - id: e5
        ordem: 1
        efeito: Identidade de agente vira classe própria no diretório corporativo, com emissão, expiração e auditoria separadas das do humano e das da conta de serviço
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A responsabilidade por ato de agente é repartida por contrato entre emissor, operador e dono antes de qualquer lei dizer como
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Nasce cobertura de seguro precificada pela trilha de auditoria que o agente consegue exibir, e auditabilidade vira custo contábil e não virtude
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Reputação de agente vira ativo que atravessa plataformas, e o histórico do agente passa a pesar mais que o do dono
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Surge mercado secundário de agente com histórico limpo, e lavagem de reputação vira fraude nomeada e perseguida
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: O agente passa a carregar orçamento e a fechar transação com mandato assinado, sem humano no laço de cada compra
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Preço, oferta e página passam a ser desenhados para quem compara mil opções por segundo, e a persuasão visual perde função econômica
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: A publicidade se reorganiza em torno de convencer o agente, e a peça dirigida ao humano vira exercício de marca e não de conversão
                sinal: fraco
                prazo: 2033
                confianca: baixa
      - id: e7
        ordem: 1
        efeito: Encontro entre agentes de donos diferentes vira interação corriqueira, e cada lado precisa provar ao outro em nome de quem age e com que limite
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: O protocolo de apresentação entre agentes carrega mandato e limite, e a negociação passa a acontecer sem interface para humano nenhum
            sinal: fraco
            prazo: 2031
            confianca: baixa
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A disputa entre pessoas migra para disputa entre mandatos, e a mediação vira questão de registro e não de conversa
                sinal: fraco
                prazo: 2033
                confianca: baixa
```

### O que o bloco não consegue dizer

**As três raízes não somam — elas se travam.** Quem lê a árvore soma os galhos, e eles não
somam. A raiz 1 só entrega o efeito econômico (e1.1, e6) se a raiz 3 entregar mandato e
orçamento; o 402 sem identidade é cobrança sem cobrado, e a identidade sem orçamento é crachá
sem carteira. Inversamente, a raiz 2 **freia** a raiz 3: quanto mais determinística a
autorização, menos o agente precisa de reputação, porque a política já diz o que ele pode — e
reputação portátil (e5.2) só vira ativo num mundo onde a permissão é negociada caso a caso.
Duas das minhas apostas, portanto, competem entre si, e a roda não tem notação para isso.

**Três efeitos exigiam duas raízes e por isso ficaram fora da árvore**, registrados aqui como
convergência, que é o que interessa quando os mapas da turma forem cruzados:

- *O balcão com preço por identidade.* Raiz 1 + raiz 3: o site verifica quem é o agente e o
  agente paga com mandato assinado, na mesma requisição. É o cruzamento mais provável de todos
  e nenhum galho sozinho o alcança.
- *Seguro precificado por contenção comprovada.* Raiz 2 + raiz 3: o prêmio cai se o agente
  exibe monitor determinístico e ficha de isolamento. Isto liga o tema 2 ao tema 3 da
  disciplina, porque a prova é a trilha.
- *Agente que prova ser agente para poder acessar em nome de humano com deficiência.* Raiz 1 +
  raiz 2: só funciona se, além de assinar, o agente demonstrar limite de capacidade — senão
  credenciar vira dar chave de tudo a quem só precisava de leitura.

**A regra de parada que usei é minha, e declarei.** A literatura da Futures Wheel não traz
critério de parada: Glenn descreve anéis concêntricos e não diz quantos. Expandi um nó só
quando o filho muda de **ator** ou de **mecanismo** em relação ao pai. Parei antes do nível 3
em quatro galhos por mesmidade, e mandei para a seção 6 o que exigia duas precondições não
validadas ao mesmo tempo. O registro de cada parada está na seção 12.

**Nenhum efeito de terceira ordem tem confiança alta**, e isso é de propósito. Terceira ordem
não é mais profunda, é mais **mediada**: herda a incerteza de todos os elos anteriores. A cota
da skill permitiria um efeito `alta` na ordem 3; não usei, porque nenhum candidato sobreviveu
à pergunta "que força contrária nomeada perde para isto, e por quê".

## 6. Sinais fracos e wildcards

### Sinais fracos — quase invisíveis hoje, decisivos se crescerem

**O isolamento por tarefa fica barato demais para importar.** Firecracker sobe em ~125 ms com
menos de 5 MiB por VM [13]; a varredura da turma trouxe o `rivet.dev/agentOS`, que promete um
sistema operacional virtual por agente em WebAssembly e se anuncia "92 vezes mais rápido que
uma frota de microVMs". Se o custo de dar um mundo inteiro a cada tarefa cair para o preço de
uma chamada de função, a contenção deixa de ser decisão de arquitetura e vira padrão silencioso
— e metade da raiz 2 perde urgência, porque conter deixa de custar.

**A declaração de finalidade no cartão do agente.** O Signature Agent Card carrega o campo de
**finalidade pretendida do dado** [12]. Isto é pequeno e é enorme: é a primeira vez que um
protocolo de web pede ao cliente que declare *para que* vai usar o que leu. Se isso pegar, a
licença de uso migra do rodapé jurídico para o cabeçalho HTTP, e passa a ser verificável.

**A fadiga de aprovação medida.** 93% de aprovação [17] é o tipo de número que muda desenho de
produto quando circula. Ainda quase ninguém o cita; quando virar régua de auditoria, o diálogo
"permitir/negar" some dos produtos sérios em um ano.

**A divergência de régua entre fornecedores.** Anthropic publica taxa de sucesso de ataque,
OpenAI publica índice de robustez, Google não publica, Meta mede guardrail em benchmark público
[18]. Enquanto as réguas não se comparam, não há mercado de segurança de agente — há catálogo.
O sinal fraco é o primeiro comprador corporativo que exigir a mesma régua de todos.

**O Brasil resolvendo sem sujeito novo.** O PL 2338 reparte responsabilidade entre desenvolvedor
e operador [19]. Se a Câmara mantiver esse desenho, o Brasil vira evidência de que dá para
responsabilizar ato de agente sem inventar personalidade — o que, na prática, é um argumento
exportável contra a hipótese mais chamativa deste tema.

### Wildcards — baixa probabilidade, alto impacto

**O primeiro processo contra o agente, e não contra o dono.** Alguém aciona judicialmente a
identidade do agente como ré, e um juízo decide não extinguir o feito de plano. Não precisa
ganhar: basta não ser rejeitado liminarmente para que toda a indústria de seguro, registro e
reputação (e5.1, e5.1.1, e5.2) antecipe em três anos. Probabilidade baixa até 2031, e mais
baixa no Brasil do que em jurisdição de *common law*.

**Um emissor revoga em massa.** O diretório de chaves de um grande provedor é comprometido, ou
a empresa decide revogar uma classe inteira de agentes. Se identidade assinada já for
pré-requisito de acesso, isso derruba uma fatia da web para milhões de fluxos automatizados de
uma vez — e a resposta regulatória pula direto para e2.1.1, infraestrutura essencial, sem
passar pelos degraus intermediários.

**Injeção de prompt é demonstrada estruturalmente insolúvel — ou estruturalmente resolvida.**
Nos dois extremos o mapa quebra. Se um resultado forte mostrar que separar instrução de dado no
mesmo contexto é impossível sem perder capacidade, a raiz 2 vence por completo e agente de
propósito geral em conteúdo aberto vira produto regulado. Se, ao contrário, uma arquitetura
resolver o problema de fato, a raiz 2 morre inteira e sobram só as raízes 1 e 3.

**Personalidade jurídica eletrônica.** Uma jurisdição relevante cria a figura do agente como
sujeito com patrimônio próprio. Eu havia escrito isto como efeito de primeira ordem e o matei
na Fase 5 (ver seção 12): nenhum ordenamento *precisa* disso — responsabilidade objetiva do
operador resolve o mesmo problema sem criar sujeito. Fica aqui como wildcard, que é o lugar
honesto dele.

## 7. Contra o próprio mapa

### Qual efeito é só extrapolação linear do presente

**e4** — "contenção vira propriedade declarada e comparável". Ele descreve, em outro volume, o
que fornecedores já fazem: a Anthropic publicou a arquitetura de contenção em maio de 2026 [17]
e taxas de ataque no system card [18]. Chamar isso de efeito futuro é confundir *mais do
mesmo* com mudança de ator. Mantive porque o ator muda no filho — o comprador corporativo
passa a exigir antes da demonstração — mas rebaixei o pai de `media` para `baixa` por P1, e o
galho inteiro está na faixa mais frágil do mapa.

Um segundo candidato foi eliminado por esta mesma prova e não está mais na roda: "a taxa de
sucesso de injeção de prompt cai abaixo de 1% em produto de massa". É o presente em outro
volume — com o agravante de que a Anthropic já publica 0,5% com salvaguardas [18]. Isso não é
futuro, é métrica de release.

### Qual efeito assume velocidade de adoção que nunca se viu em caso comparável

**e1, com prazo em 2028.** Assume que servir conteúdo diferente por identidade assinada vira
comportamento corrente de site em dois anos. O caso comparável mais próximo é o HTTPS: a
migração levou cerca de uma década do Let's Encrypt (2015) à normalidade, mesmo com
certificado gratuito, automação e pressão de navegador — três coisas que o Web Bot Auth não
tem. O que sustenta o prazo curto não é o padrão, é a concentração: uma única empresa na frente
de uma fração enorme dos sites pode ligar uma chave. Isso acelera a adoção e **enfraquece** a
alegação de que seja padrão. Se eu tivesse que apostar contra um número deste mapa, seria este.

### Qual disrupção pode simplesmente não se concretizar, e o que aconteceria

**A raiz 1.** Ela tem uma precondição única mal disfarçada: um emissor de identidade que não
seja o próprio CDN. Se o IETF não adotar nenhum dos drafts como documento de grupo, se o Google
seguir o caminho próprio e se a briga de crawlers virar contrato bilateral entre cinco empresas
grandes, o Web Bot Auth vira detalhe de implementação de um fornecedor e nada disto acontece na
escala do mapa. Nesse caso **morrem e1, e1.1, e1.1.1, e1.2, e1.2.1, e2, e2.1 e e2.1.1** — oito
efeitos, o galho inteiro — e restam as raízes 2 e 3, que são internas às organizações e não
dependem de acordo público. Este é o pior teste de precondição única do mapa, e não consegui
desenhar em volta dele: a raiz é genuinamente uma aposta só.

### Que viés meu entrou aqui

Dois, e são de tipos diferentes.

O primeiro é de **fonte**. Cinco das vinte e uma fontes são da Cloudflare ou de drafts escritos
por gente da Cloudflare [2, 3, 6, 12, 16], e três são da Anthropic ou sobre produto dela
[1, 17, 18]. Escrevi um mapa sobre identidade de agente lendo majoritariamente quem vende
identidade de agente e quem vende agente. Tentei compensar abrindo IETF, arXiv, OWASP e
Microsoft, mas o viés está no corpo: quando este documento diz "o tráfego automatizado passou o
humano", está dizendo "uma empresa mediu na própria rede e anunciou".

O segundo é de **enquadramento**, e a *Causal Layered Analysis* o expõe melhor que eu. Na
litania, o mapa é sobre segurança: injeção de prompt, taxa de ataque, sandbox. Nas causas
sistêmicas, é sobre **quem cobra pedágio na web** — 402, diretório de chaves, pay per use. Na
visão de mundo, ele repousa inteiro sobre uma premissa que nunca enunciei: *acesso deve ser
condicionado a identidade conhecida*. Trocando essa premissa pela oposta — *acesso anônimo é
valor a defender, e o custo do abuso é preço de uma web aberta* —, os mesmos fatos produzem um
mapa invertido, em que identidade de agente é o problema e não a solução, e em que e1.2 (o
atrito contra quem não assina) deixa de ser efeito colateral e vira o efeito principal. No
mito, a metáfora que organiza tudo aqui é a do **crachá**: agente é funcionário que precisa se
identificar na portaria. A metáfora concorrente — agente é **ferramenta**, e ninguém pede
crachá a um martelo — não aparece em nenhuma fonte que li, e a ausência dela é mais um dado
sobre quem escreve sobre o assunto do que sobre o assunto.

E o viés mais banal de todos: não escolhi este tema. Ele me foi dado como tema 2 de 19, e eu o
trabalhei com a régua da disciplina e com entrevista respondida por encargo, sem interlocutor
para me corrigir no meio. Um recorte que ninguém contestou é um recorte que ninguém confirmou.

### O que a bateria não conseguiu derrubar

A raiz 3 resistiu a todas as seis provas. Tem sinal forte e datado [4, 14, 15], tem incumbente
nomeado (IAM de dois sujeitos), tem porta de entrada por mercado novo (transação que nenhum
humano faria), tem força contrária modelada (inércia de governança: só 34% aplicam controle
humano a agentes [14]) e sobrevive à CLA — abaixo da litania "agentes precisam de conta" há
mecanismo econômico real, que é a contabilidade de quem paga. É a parte do mapa em que eu
apostaria dinheiro.

## 8. O que a máquina errou

**1. Data trocada por três anos, e eu quase repeti.** A busca devolveu o post da Cloudflare
"Message Signatures are now part of our Verified Bots Program" como conteúdo de 2026. Ao abrir,
o texto se refere a um post de maio de **2025** como anterior e descreve disponibilidade em
planos Free e Pro sem data de 2026 [3]. Se eu tivesse citado pelo resumo de busca, teria
apresentado como novidade recente algo com mais de um ano — e "por que agora" é o campo que
sustenta a raiz inteira. *Como percebi:* a Fase 3 exige sinal **datado**; fui conferir a data
no corpo da página e ela não batia com o resumo.

**2. Três mandatos que eram dois, e um padrão de credencial que a fonte não diz.** O resumo de
busca afirmou, com confiança, que o AP2 "introduz três mandatos assinados (Intent, Cart,
Payment) carregados como W3C Verifiable Credentials". A página que abri descreve mandatos de
**checkout** e de **pagamento**, cada um em forma aberta e fechada, e **não especifica** qual
padrão de credencial é usado [15]. Registrei o que a fonte diz e deixei o resto de fora. *Como
percebi:* "três mandatos com nomes bonitos" é exatamente o formato de detalhe que um modelo
preenche por simetria.

**3. Uma lista de dez que virou oito.** O primeiro resumo de busca sobre o OWASP Top 10 de 2026
entregou **oito** itens e apresentou como se fosse a lista inteira. A página aberta traz os dez,
com Vector and Embedding Weaknesses em nono e Improper Output Handling em décimo [5]. A mesma
busca também disse "6.639 incidentes"; a fonte diz **7.714 analisados, 6.639 classificáveis**,
com peso 75/25 entre julgamento e dado [5]. Dois erros na mesma frase: truncamento
apresentado como lista completa, e numerador perdido.

**4. Uma fonte que não abriu e por isso não existe.** O `securityboulevard.com` devolveu HTTP
403. Havia material suficiente no resumo de busca para escrever um parágrafo convincente sobre
o OWASP 2026 citando aquele link. Não entrou: a regra é que fonte que não abriu não vai para a
seção 11. Troquei pela ReversingLabs, que abriu.

**5. Atribuição que eu não consegui verificar, e por isso não afirmei.** Resultados de busca
atribuíram à Visa um "Verified Agent ID" emitido pela própria Visa, com registro de consentimento
assinado pelo emissor do cartão, em setembro de 2025. Não abri fonte primária da Visa. A
afirmação não está no corpo do documento e o link não está na seção 11 — o que custa ao mapa um
exemplo útil, e é o preço correto.

**6. O bloco do tema estava desatualizado, e a fonte primária corrigiu.** A descrição da
disciplina diz que o PromptTrace tem "sete laboratórios de injeção de prompt e um CTF de quinze
níveis". Ao abrir o site em 17/09/2026: **dez laboratórios e Gauntlet de dezessete níveis** [21].
Não é erro da máquina — é o material de apoio envelhecendo em semanas, que é o próprio objeto
deste mapa. Registro porque a tentação era copiar o número do enunciado sem conferir.

**7. Números redondos de fornecedor, declarados como tais.** "109 para 1", "85% de crescimento",
"77%", "56%" [4] vêm de um relatório da Palo Alto Networks lido através de um terceiro (Help Net
Security). Não abri o relatório original, não sei o tamanho da amostra nem o método — a própria
matéria diz que não os especifica. Os números estão no corpo porque sustentam a direção, não a
magnitude, e esta frase é a ressalva que a Fase 6 exige.

**8. O que eu não consegui apurar.** Quantos sites, em números absolutos, têm Web Bot Auth
ligado: **não consegui apurar**. Quantos agentes constam hoje no programa de bots verificados:
**não consegui apurar** — a página aberta não traz a lista nem o total [3]. Sem esses dois
números, "adoção" na raiz 1 é qualitativa, e é assim que está escrita.

## 9. Três cenários para 2031

**Provável.** Em 2031 o crachá venceu por inércia, não por acordo. Assinar requisição virou
higiene para qualquer agente que queira passar por uma borda grande, e quem não assina não é
bloqueado — é degradado: página mais lenta, conteúdo parcial, limite de taxa apertado. A
cobrança existe e é pequena, concentrada em arquivo de referência e em API de dado estruturado;
o jornal cobra do agente o que nunca conseguiu cobrar do leitor, e por isso escreve para os
dois, com a parte legível por máquina no topo. Dentro das empresas, agente é classe de
identidade no diretório, com token curto e dono nominal, e a política de capacidade substituiu
a caixa de aprovação em produto sério — mas não em produto de consumo, onde o "permitir" ficou
porque desliga a responsabilidade do fabricante. Injeção de prompt não foi resolvida: virou
risco residual precificado, com número publicado a cada versão e um mercado de auditoria em
cima. A trilha de auditoria do agente é o artefato mais valioso do conjunto, e quem não a tem
paga mais caro em tudo — seguro, contrato, integração.

**Desejável.** Em 2031 a identidade de agente é verificável e **não é concedida por quem vende
acesso**. Existe mais de um diretório de chaves, a especificação foi adotada por um grupo de
trabalho do IETF e não pertence a ninguém, e o cartão do agente carrega finalidade declarada —
o que fez a licença de uso migrar do rodapé jurídico para o protocolo, verificável por qualquer
um. O caminho até aqui passou por três coisas concretas: adoção da especificação por um órgão
neutro, uma exigência regulatória de acesso não discriminatório ao diretório, e — a mais difícil
— um regime explícito para o **agente delegado por pessoa com deficiência**, credenciado com
limite de capacidade em vez de chave geral, para que assinar não vire vigiar. A autorização
determinística venceu o guardrail probabilístico sem matar a utilidade, e a consequência
inesperada foi de design: a interface principal de um agente virou seu orçamento de
capacidades, e aprender a escrever isso entrou no currículo de quem projeta interação. O botão
"permitir" desapareceu, e ninguém sentiu falta.

**Indesejável.** Em 2031 a web tem portaria, e a portaria é de três empresas. Identidade de
agente virou pré-requisito de acesso a qualquer coisa útil, e emitir identidade virou o negócio
mais rentável da camada de infraestrutura — não pelo preço, pelo veto. Quem não está no
diretório não existe: pesquisa independente, arquivamento, acessibilidade, jornalismo de dados,
tudo passou a depender de uma autorização renovável. O atrito recaiu sobre quem sempre pagou —
usuário de tecnologia assistiva, que já apontava o CAPTCHA como a barreira número um [11],
agora precisa que seu agente seja credenciado para abrir uma página, e o credenciamento vem com
telemetria. Do outro lado, o agente autorizado ficou grande demais para conter: como a
identidade é forte, a permissão ficou frouxa, e a primeira vez que um agente com crachá válido
fez algo irreparável, não havia a quem cobrar — o contrato repartia responsabilidade entre
emissor, operador e dono em termos que nenhum dos três reconhecia. **O sinal precoce deste
cenário é específico e observável já em 2027:** a primeira vez que um site grande responder
`403` — e não `402` — a um agente assinado de um concorrente. Cobrar é mercado; recusar quem
pagaria é portaria.

## 10. O experimento

### O Balcão

**O que é.** Uma página só, servida por um servidor de vinte linhas, com **duas portas** para o
mesmo conteúdo. A porta A verifica assinatura: exige `Signature`, `Signature-Input` e
`Signature-Agent` nos moldes do Web Bot Auth, valida Ed25519 contra um diretório de chaves que
nós mesmos publicamos, e responde conforme a identidade — conteúdo integral para agente
conhecido, `402` com preço em `crawler-price` para agente desconhecido. A porta B não verifica
nada: infere, do jeito velho, por `User-Agent`, cadência de requisição, movimento de ponteiro e
tempo até o primeiro clique, e decide se aquilo é gente. A página mostra, ao vivo e lado a lado,
o que cada porta concluiu sobre o mesmo visitante.

**Que pergunta sobre o futuro ele ajuda a responder.** Duas, e a segunda é a que importa:

1. O que muda no **projeto** de uma página quando o servidor sabe, com certeza, que quem está
   do outro lado é uma máquina em nome de alguém? O conteúdo devia ser o mesmo? O preço? A
   ordem? Este é o efeito e1 em escala de mesa.
2. **Quantos humanos a porta B erra — e quais?** É a pergunta do e1.2, e é a única do mapa que
   dá para medir numa sala de aula em uma hora.

**Que tecnologia emergente ele usa, e por que não dá para fazer com tecnologia madura.** Usa
assinatura HTTP no perfil Web Bot Auth (`keyid` como impressão SHA-256 do JWK, `tag`,
`created`, `expires`) e diretório de chaves descoberto por `Signature-Agent` [2], mais o
cabeçalho de preço do pay per crawl e a resposta `402` [6]. Com tecnologia madura o experimento
**não existe**: CAPTCHA, WAF e reputação de IP só sabem fazer a porta B, e a porta B é o que
está sendo posto à prova. Chave de API também não serve — ela identifica a conta, não o agente,
e todo o ponto é separar as duas. O que é maduro aqui é substrato: TLS, Ed25519, um servidor
HTTP qualquer.

**O que a turma vai fazer quando testar isso em sala.** Quatro passagens pelo balcão, na ordem:

1. **Humano comum.** Cada pessoa entra pelas duas portas no seu próprio aparelho. Anotamos o
   veredito da porta B.
2. **Humano com atrito.** A mesma pessoa entra de novo sob três restrições sorteadas: só
   teclado, sem mouse; leitor de tela ligado (VoiceOver ou NVDA); e cookies de terceiros
   bloqueados. É a condição documentada em que o detector comportamental confunde dispositivo
   assistivo com robô [11]. Anotamos quantas vezes a porta B rebaixou a mesma pessoa que tinha
   aprovado na passagem 1.
3. **Agente assinado.** Cada dupla roda um agente com par de chaves próprio, registrado no nosso
   diretório, e negocia o `402`.
4. **Agente sem assinatura, tentando parecer gente.** Vale copiar `User-Agent`, espaçar
   requisição, simular movimento. É o estado da arte do contorno, e a turma precisa vê-lo
   funcionando para entender por que a inferência perdeu.

Fechamos com a única discussão que não dá para ter sem ter passado pelas quatro: **o mesmo
conteúdo, servido diferente conforme quem bate na porta, é personalização ou é portaria?**

**O que seria um resultado que me faria mudar de ideia.** Três, e cada um derruba uma parte
diferente do mapa:

- **Se a porta B acertar.** Se a inferência comportamental classificar corretamente quase todo
  mundo, inclusive na passagem 2, e o agente da passagem 4 não conseguir passar, então a
  competência de adivinhar **não** perdeu valor — e a raiz 1 é solução para um problema que o
  incumbente ainda resolve. Seria o falsificador mais limpo deste documento.
- **Se assinar não mudar nada no projeto da página.** Se, depois de saber com certeza que é
  agente, a melhor resposta continuar sendo exatamente a mesma página, então e1 é verdade
  técnica e mentira de design, e a metade deste mapa que fala de mídia cai.
- **Se o custo de montar o balcão for alto demais.** Se uma dupla competente não conseguir
  publicar diretório, assinar e validar em uma tarde, a adoção prevista para 2028 está errada
  por anos, e todos os prazos da raiz 1 deslizam junto.

## 11. Fontes

Vinte e uma fontes, todas abertas nesta sessão em 17/09/2026. Fonte que não abriu não está
aqui — uma delas devolveu 403 e ficou de fora (seção 8, item 4).

1. **Anthropic — "Mitigating the risk of prompt injections in browser use"**, 24/11/2025.
   `https://www.anthropic.com/news/prompt-injection-defenses`
   *Sustenta:* que as defesas são treino, classificador e red team, e que 1% de sucesso de
   ataque "ainda representa risco significativo"; a frase "nenhum agente de navegador é imune a
   injeção de prompt".
   *Confiabilidade:* primária e interessada — é o fabricante falando do próprio produto. Vale
   pelo que admite, não pelo que elogia.

2. **IETF — `draft-meunier-web-bot-auth-architecture-05`**, Thibault Meunier (Cloudflare) e
   Sandor Major (Google), 02/03/2026.
   `https://datatracker.ietf.org/doc/html/draft-meunier-web-bot-auth-architecture`
   *Sustenta:* toda a mecânica da raiz 1 — assinatura sobre `@authority`/`@target-uri`,
   parâmetros obrigatórios, `keyid` como impressão SHA-256 do JWK, proibição de segredo
   compartilhado, chave ligada a papel e não a pessoa, e a delimitação de escopo.
   *Confiabilidade:* documento técnico primário, mas é **Internet-Draft expirado e não adotado
   por grupo de trabalho** — descreve uma proposta, não um padrão. Esta ressalva é a base da
   fragilidade declarada na seção 7.

3. **Cloudflare — "Message Signatures are now part of our Verified Bots Program"**.
   `https://blog.cloudflare.com/verified-bots-with-cryptography/`
   *Sustenta:* que a validação Ed25519 de `Signature`, `Signature-Input` e `Signature-Agent`
   roda na borda e alimenta regra de política; disponibilidade em Free e Pro.
   *Confiabilidade:* primária do implementador. **Atenção à data:** o resumo de busca a
   apresentou como 2026; o corpo remete a 2025 (seção 8, item 1). Não traz número de bots
   verificados nem de tráfego.

4. **Help Net Security — "Machine identities outnumber humans 109 to 1"**, 14/05/2026,
   reportando o *2026 Identity Security Landscape* da Palo Alto Networks.
   `https://www.helpnetsecurity.com/2026/05/14/2026-identity-security-landscape-report/`
   *Sustenta:* 109:1 contra 82:1 no ano anterior; crescimento projetado de 77% (máquina), 56%
   (humana) e 85% (agente); mais da metade não aplica menor privilégio a conta de serviço.
   *Confiabilidade:* **secundária sobre relatório de fornecedor**. A matéria não informa amostra
   nem método, e eu não abri o relatório original. Use para direção, não para magnitude.

5. **ReversingLabs — "OWASP Top 10 for LLM Apps 2026: Excessive agency risk on the rise"**,
   sobre a edição de agosto de 2026.
   `https://www.reversinglabs.com/blog/owasp-top-10-for-llm-apps-excessive-agency`
   *Sustenta:* a lista de dez com Excessive Agency subindo de 6º para 3º; a metodologia (7.714
   incidentes analisados, 6.639 classificáveis, peso 75/25); e a recomendação de migrar o foco
   para identidade, autorização e menor privilégio.
   *Confiabilidade:* secundária de empresa de segurança sobre documento público do OWASP.
   Consistente entre si; a fonte primária do OWASP não foi aberta nesta sessão.

6. **Cloudflare — "Introducing pay per crawl"**, 01/07/2025.
   `https://blog.cloudflare.com/introducing-pay-per-crawl/`
   *Sustenta:* o uso do HTTP 402 e dos cabeçalhos `crawler-price`, `crawler-exact-price` e
   `crawler-max-price`; a dependência explícita de Web Bot Auth contra falsificação; e a visão
   declarada de agentes com orçamento negociando acesso.
   *Confiabilidade:* primária e interessada. A parte mecânica (código de status, cabeçalhos) é
   verificável; a parte de visão é marketing de roadmap e está tratada como tal.

7. **IETF — `draft-klrc-aiagent-auth-00`**, Pieter Kasselman (Defakto), Jean-François Lombardo
   (AWS), Yaroslav Rosomakho (Zscaler), Brian Campbell (Ping Identity), 02/03/2026.
   `https://www.ietf.org/archive/id/draft-klrc-aiagent-auth-00.html`
   *Sustenta:* que o caminho escolhido é compor WIMSE, SPIFFE e OAuth 2.0 em vez de inventar
   protocolo; o agente definido como workload; e o problema em aberto da confirmação com o
   usuário no meio da execução.
   *Confiabilidade:* draft informativo de quatro empresas concorrentes — a pluralidade dos
   autores é o que lhe dá peso. Não é padrão.

8. **arXiv:2606.26479 — "Adaptive Evaluation of Out-of-Band Defenses Against Prompt Injection in
   LLM Agents"**, Narisetty, Kore, Kattamanchi e Kumarapu, 25/06/2026.
   `https://arxiv.org/abs/2606.26479`
   *Sustenta:* a existência de CaMeL, FIDES, Progent, RTBAS e FORGE como família de defesa fora
   de banda, e a queda de 25,8% para 4,2% no Progent, com ataque adaptativo a 2,6%.
   *Confiabilidade:* preprint sem revisão por pares, em modelo pequeno (Qwen2.5-7B), e os
   próprios autores chamam o resultado de preliminar. É o elo mais frágil da raiz 2 e está dito
   assim no corpo.

9. **Microsoft Security Blog — "Securing CI/CD in an agentic world: Claude Code GitHub action
   case"**, 05/06/2026.
   `https://www.microsoft.com/en-us/security/blog/2026/06/05/securing-ci-cd-in-agentic-world-claude-code-github-action-case/`
   *Sustenta:* o caso concreto da assimetria entre `Bash` (sob bubblewrap) e `Read` (sem
   isolamento) permitindo ler `/proc/self/environ`; as datas (reporte 29/04/2026, correção
   05/05/2026, versão 2.1.128); e a formulação da "Regra de Dois".
   *Confiabilidade:* alta para o fato — é análise técnica de um concorrente sobre vulnerabilidade
   já corrigida e divulgada, com cronologia verificável.

10. **arXiv:2605.11868 — "IPI-proxy: An Intercepting Proxy for Red-Teaming Web-Browsing AI Agents
    Against Indirect Prompt Injection"**, Chen, Toyoda, Lai e Leung, 12/05/2026.
    `https://arxiv.org/abs/2605.11868`
    *Sustenta:* que já existe instrumental para medir agente em tráfego real — 820 cadeias de
    ataque de seis benchmarks, em seis posições de HTML, sobre domínio autorizado.
    *Confiabilidade:* preprint; **o resumo não traz resultado quantitativo**, só método. Citado
    como existência de ferramenta, não como evidência de taxa.

11. **Smashing Magazine — "The Accessibility Problem With Authentication Methods Like CAPTCHA"**,
    novembro de 2025.
    `https://www.smashingmagazine.com/2025/11/accessibility-problem-authentication-methods-captcha/`
    *Sustenta:* a pesquisa WebAIM de 2023–2024 em que usuários de leitor de tela põem o CAPTCHA
    como barreira número um, posição estável há mais de uma década; e o mecanismo pelo qual o
    reCAPTCHA, analisando atividade de fundo, entrega o desafio pior a quem usa dispositivo
    assistivo.
    *Confiabilidade:* publicação editorial reputada, reportando levantamento de terceiro
    (WebAIM). O dado primário do WebAIM não foi aberto nesta sessão.

12. **IETF — `draft-meunier-webbotauth-registry-03`**, Maxime Guerreiro (Cloudflare), Ulas Kirazci
    (Amazon), Thibault Meunier (Cloudflare), atualizado em 26/06/2026.
    `https://datatracker.ietf.org/doc/draft-meunier-webbotauth-registry/`
    *Sustenta:* o Signature Agent Card sobre OAuth Client ID Metadata Document, e o conteúdo do
    objeto `web_bot_auth` — user-agent esperado, adesão a robots.txt, modo fetcher/crawler,
    **finalidade do uso**, tipos de conteúdo, controle de taxa, endpoints e lista de IPs.
    *Confiabilidade:* draft ativo (expira 28/12/2026), com autor de duas empresas diferentes.
    Ainda não adotado.

13. **Northflank — "How to sandbox AI agents in 2026: MicroVMs, gVisor & isolation strategies"**,
    02/02/2026.
    `https://northflank.com/blog/how-to-sandbox-ai-agents`
    *Sustenta:* os números de isolamento — gVisor com 10–30% de sobrecarga em I/O, Firecracker
    em ~125 ms e menos de 5 MiB por VM, Kata em ~200 ms — e a recomendação de microVM para
    código não confiável em produção.
    *Confiabilidade:* fornecedor de plataforma escrevendo sobre a própria categoria. Os números
    de Firecracker são conhecidos e coerentes com a documentação pública; os de gVisor são
    faixa, não medida.

14. **startwithidentity — "AI Agent Identity Standards 2026: Cross App Access, MCP, and What Is
    Still Missing"**.
    `https://startwithidentity.com/blog/agent-identity-gets-a-protocol/`
    *Sustenta:* Okta Agent SSO geral em 24/08/2026; Cross App Access adotado na especificação de
    autorização gerida por empresa do MCP; Entra Agent ID geral; e as lacunas de governança —
    34% aplicando controle humano a agentes, e o colapso de escopo na cadeia de delegação.
    *Confiabilidade:* blog especializado, secundário. As datas de produto são verificáveis em
    fonte primária que não abri; as lacunas são análise do autor, e estão citadas como análise.

15. **paz.ai — "Agent Payments Protocol (AP2): What It Is in 2026"**.
    `https://www.paz.ai/glossary/agent-payments-protocol-ap2`
    *Sustenta:* o AP2 como camada de autorização de pagamento; mandatos de checkout e de
    pagamento em forma aberta e fechada, restringindo comerciante, itens, valor, orçamento,
    instrumento e recorrência; anúncio em setembro de 2025, v0.2 em abril de 2026, doação à FIDO
    Alliance em abril de 2026.
    *Confiabilidade:* verbete secundário de glossário. Contradiz resumos de busca sobre "três
    mandatos" e sobre W3C Verifiable Credentials (seção 8, item 2); segui a fonte aberta.

16. **TechTimes — "Bot Traffic Passes Humans Online: Cloudflare Says Agentic AI Drove 57.5%
    Share"**, 05/06/2026, sobre anúncio de 03/06/2026.
    `https://www.techtimes.com/articles/317877/20260605/bot-traffic-passes-humans-online-cloudflare-says-agentic-ai-drove-575-share.htm`
    *Sustenta:* 57,5% contra 42,5%; a data; e as ressalvas — só requisições de HTML, rede de um
    fornecedor, e a admissão de que a medida é "meio bagunçada".
    *Confiabilidade:* imprensa de tecnologia reportando dado de vendor. Vale sobretudo pelas
    ressalvas, que a fonte carrega e que o corpo do mapa repete.

17. **Anthropic Engineering — "How we contain Claude"**, 25/05/2026.
    `https://www.anthropic.com/engineering/how-we-contain-claude`
    *Sustenta:* os três padrões de contenção (gVisor efêmero, sandbox com humano no laço, VM
    selada); Seatbelt e bubblewrap; os modos de montagem e a resolução de symlink antes da
    validação; a lista de domínios como concessão de capacidade; e o número central deste mapa
    — **cerca de 93% de aprovação**, nomeado como fadiga de aprovação.
    *Confiabilidade:* primária e, incomum para o gênero, **autocrítica**: enumera falhas
    próprias com nome. É por isso que carrega mais peso aqui do que qualquer outra fonte de
    fabricante.

18. **VentureBeat — "Anthropic's browser agent got hijacked 31.5% of the time before safeguards
    engaged"**.
    `https://venturebeat.com/security/anthropic-browser-agent-hijacked-31-percent-before-safeguards-engaged`
    *Sustenta:* 31,5% bruto e 0,5% com salvaguardas em 129 ambientes web, dez tentativas cada,
    com Gray Swan Shade, no system card de 28/05/2026; 7,03% e 2,09% em código; e a
    incomparabilidade entre fornecedores (OpenAI 0,963 de robustez numa superfície, Google sem
    número, Meta com 17,6% → 1,75% no AgentDojo).
    *Confiabilidade:* imprensa especializada compilando números publicados pelos próprios
    fabricantes. O achado mais útil é justamente o de que as réguas não se comparam.

19. **Senado Federal — PL 2338/2023, "Dispõe sobre o uso da Inteligência Artificial"**.
    `https://www25.senado.leg.br/web/atividade/materias/-/materia/157233`
    *Sustenta:* aprovação do parecer em Plenário em 10/12/2024 e remessa à Câmara em 17/03/2025;
    autoria de Rodrigo Pacheco; 244 emendas na comissão temporária.
    *Confiabilidade:* primária e oficial para a tramitação. **Não sustenta** a descrição do
    regime de responsabilidade entre desenvolvedor e operador, que veio de resumo de busca e
    está no corpo com essa ressalva.

20. **arXiv:2603.21642 — "Are AI-assisted Development Tools Immune to Prompt Injection?"**,
    Charoes Huang, Xin Huang e Amin Milani Fard, 23/03/2026.
    `https://arxiv.org/abs/2603.21642`
    *Sustenta:* que a contenção varia entre clientes MCP do mesmo mercado — sete avaliados
    (Claude Desktop, Claude Code, Cursor, Cline, Continue, Gemini CLI, Langflow), com guardrails
    fortes num extremo e alta suscetibilidade a envenenamento entre ferramentas no outro; e as
    dimensões medidas (validação estática, visibilidade de parâmetro, detecção, aviso ao
    usuário, sandbox de execução, log de auditoria).
    *Confiabilidade:* preprint; o resumo **não traz números**, só a comparação qualitativa.
    Citado como evidência de dispersão entre fornecedores, que é o que sustenta e4.

21. **PromptTrace — Prompt Injection Labs**, consultado em 17/09/2026.
    `https://prompttrace.airedlab.com/`
    *Sustenta:* dez laboratórios e Gauntlet de dezessete níveis, com defesas em camadas (regra
    de recusa, filtro de palavra, canário, regex de saída, classificador de LLM em vários
    estágios), gratuito e sem cadastro, referenciado ao OWASP e ao MITRE ATLAS.
    *Confiabilidade:* fonte primária do próprio artefato. Diverge do enunciado do tema, que
    falava em sete laboratórios e quinze níveis (seção 8, item 6).

## 12. Anexo — o levantamento bruto

Sem edição e sem corte. É aqui que fica a prova de que a dúvida aconteceu.

### 12.1 · A entrevista da Fase 1, como foi feita e como foi respondida

Esta rodada não teve interlocutor humano: as respostas vieram no encargo que acionou a skill.
A skill exige que as nove perguntas sejam feitas de uma vez e que o recorte seja devolvido para
confirmação explícita. Fiz as nove e devolvi o recorte; a confirmação foi a própria instrução
do encargo de não parar para perguntar. **Isto é uma violação parcial da Fase 1 e está
registrada como tal**: um recorte que ninguém contestou é um recorte que ninguém confirmou, e
a seção 7 repete isso.

- **1. Tema e fronteira.** Tema: conter, autorizar e identificar o agente autônomo como ator
  próprio. Fronteira montada por mim a partir de "Fronteira com os vizinhos" do bloco do tema,
  conforme §1.5 da skill: fora o ofício de programar com agentes (tema 1), fora avaliação e
  observabilidade de acerto (tema 3), fora identidade humana sem terceiros (tema 17).
  *Campo preenchido por mim — marcado como suposição.*
- **2. Horizonte.** 2031.
- **3. Recorte geográfico.** Global, com nota sobre o Brasil.
- **4. Para quem.** Quem projeta mídia e interação.
- **5. O que já está descartado.** O que já é comum em produto de massa — a régua da disciplina.
  Nenhuma outra exclusão.
- **6. Viés desejado.** Neutro.
- **7. O que faria mudar de ideia.** Evidência de que a adoção já passou da maioria inicial
  (Rogers), ou de que a tecnologia não rompe nada e só melhora o existente.
- **8. Quantas disrupções-raiz.** Três. *Campo derivado por mim de "profundidade: três ordens" —
  marcado como suposição.*
- **9. Posso navegar.** Sim. WebSearch e WebFetch de verdade; só entrou na seção 11 o que abri.

**Perguntas condicionais (§1.2), avaliadas — nenhuma disparada.** A fronteira colide com três
vizinhos, mas o encargo já dizia qual lado é meu. O horizonte de cinco anos é coerente com
software de infraestrutura de rede. A resposta 5 não contradiz a 1. O viés é neutro e não
precisa de justificativa. Uma única rodada de entrevista, portanto.

### 12.2 · Fase 2 — a triagem de maturidade, candidata por candidata

Dezenove candidatas passaram pela régua. Ordem dos testes: T1 régua, T2 substituição, T3 por
que agora, T4 precondição faltante, T5 rotina. Reprovar T1 ou aprovar T5 encerra.

**MADURAS — recusadas. Entram como substrato na seção 3, nunca na seção 4.**

| Candidata | Teste que reprovou | Uma linha |
|---|---|---|
| CAPTCHA (reCAPTCHA, hCaptcha) | T5 | Instalação padrão, preço estável, falhas documentadas há uma década — inclusive as de acessibilidade [11]. É H1 em decadência. |
| WAF e gestão de bot por heurística | T5 | Produto de prateleira desde os anos 2010; o que muda é a eficácia, não a instalação. |
| OAuth 2.0 / OIDC para humanos | T5 | Tema 17, e maduro. |
| Antivírus e EDR | T5 | Maduro — e cego dentro de VM selada [17], o que o torna substrato com limitação conhecida. |
| Contêiner com namespaces e cgroups | T5 | Milissegundos para subir, kernel compartilhado, escape documentado [13]. |
| gVisor | T5 | Sobrecarga medida e faixa de uso conhecida [13]. Substrato. |
| Firecracker / Kata | T5 | ~125 ms e ~200 ms, menos de 5 MiB por VM, alimentando serviço de nuvem em escala [13]. **Participa da disrupção sem ser a disrupção** — o que rompe é o arranjo (um mundo por tarefa), não o artefato. |
| TLS, Ed25519, RFC 9421 | T5 | Criptografia e assinatura de mensagem HTTP são substrato do Web Bot Auth, não novidade dele. |
| Chave de API estática e conta de serviço | T5 | Maduríssimo — e é justamente o incumbente da raiz 3. |

**H2− — reprovam em T1. Este é o grupo que quase virou raiz, e não virou.**

| Candidata | Por que é H2− |
|---|---|
| Classificador de injeção de prompt | Não muda o que é possível: reduz a probabilidade de o modelo obedecer ao texto errado, mantendo intacto o arranjo em que instrução e dado dividem o contexto. Faz o presente durar mais. A própria Anthropic diz que 1% ainda é risco significativo [1]. |
| Hook que bloqueia comando destrutivo (`cc-safety-net`, `destructive_command_guard`) | Evita um erro conhecido; não muda o que o agente pode ser autorizado a fazer. |
| Caixa de aprovação por ação (humano no laço) | O caso mais claro: 93% de aprovação [17]. Não é controle, é escoramento — e com número. |
| Varredura de segredo na saída | Foi contornada no caso real, com o modelo truncando a credencial antes de imprimir [9]. Escora. |
| Interceptação e inspeção de tráfego do agente (`claude-tap`, `VibePod`) | Instrumento de observação, não de autorização. Ótimo para o tema 3; H2− aqui. |
| Guia de segurança por biblioteca e versão (`securitycards`) | Melhora a decisão do agente sobre dependência; não muda o que é possível. |
| Caçador de lixo deixado pelo agente (`aislop`, `skylos`) | Higiene de código. Tema 1, e H2− aqui. |

**EMERGENTES — passam T1, T3 e T4, com incerteza genuína.**

| Candidata | T1 | T3 (sinal datado) | T4 (o que falta) |
|---|---|---|---|
| Web Bot Auth + Signature Agent Card | passa | draft-05 em 02/03/2026 [2]; registry-03 em 26/06/2026 [12]; borda da Cloudflare [3] | emissor que não seja o CDN; adoção por grupo de trabalho |
| Agente como principal no IAM (Cross App Access, WIMSE/SPIFFE, Agent SSO) | passa | Okta GA 24/08/2026 [14]; draft IETF 02/03/2026 [7] | cadeia de delegação que não colapse escopo [14] |
| Autorização determinística fora de banda (CaMeL, FIDES, Progent, RTBAS, FORGE) | passa | avaliação adaptativa comparada em 25/06/2026 [8] | prova em modelo grande e agente de propósito geral |
| Mandato assinado de pagamento (AP2) | passa | v0.2 e doação à FIDO em abril de 2026 [15] | comerciante aceitando, e regra de estorno |
| Cobrança no protocolo (402 + pay per crawl / pay per use) | passa | 01/07/2025 [6]; evolução para pay per use anunciada | depende inteiramente da identidade — não é raiz sozinha |
| Isolamento por tarefa em WebAssembly (`rivet.dev/agentOS`) | passa | alegação do fornecedor, sem medida independente | qualquer medida de terceiro. Ficou em sinal fraco (seção 6), não em raiz |
| Ficha declarada de contenção comparável | passa | dispersão medida entre sete clientes MCP [20] | uma régua comum entre fornecedores [18] |

**DISRUPTIVAS — emergente mais competência que deixa de valer mais porta de entrada.** As três
que viraram raiz, com os dois campos que a Fase 2 exige nomear:

1. **Identidade verificável no protocolo.** Torna sem valor: inferir quem está do outro lado
   (impressão digital, reputação de IP, CAPTCHA, análise comportamental). Entra por **mercado
   novo**: tráfego automatizado que hoje é bloqueado por precaução vira cliente pagante.
2. **Autorização determinística fora do modelo.** Torna sem valor: escrever prompt de sistema
   defensivo, e o humano no laço como controle. Entra pela **baixa do mercado**: aplicações que
   não podiam pagar revisão humana de cada ação passam a poder rodar agente sobre conteúdo não
   confiável.
3. **Agente como principal econômico.** Torna sem valor: o IAM de dois sujeitos (gente e
   servidor) e a chave compartilhada. Entra por **mercado novo**: transações que nenhum humano
   faria — micro-compra de acesso, negociação entre agentes.

**Nenhuma RECUSA PARCIAL foi emitida.** O tema não é majoritariamente maduro: das dezenove
candidatas, nove são maduras, sete são H2− e sete são emergentes, das quais três qualificam
como disruptivas. A régua recusou o suficiente para o mapa ter o que mapear.

### 12.3 · Fase 5 — a bateria adversarial, prova por prova

**P1 — Extrapolação linear.** Varri os dezessete efeitos procurando "mais X" ou "menos X" com
o mesmo ator e o mesmo mecanismo do pai.
- **e4** — flagrado. Descreve em outro volume o que a Anthropic já faz [17, 18]. Rebaixado de
  `media` para `baixa`; mantido porque o ator muda no filho (comprador corporativo).
- **e-morto-1** (ver 12.4) — eliminado.
- e6.1 passou raspando: "persuasão visual perde função econômica" tem mecanismo novo (comparação
  em massa) e ator novo (o comprador-máquina). Mantido com `fraco`/`baixa`.

**P2 — Velocidade de adoção.** Procurei prazo sem caso histórico comparável, ou com caso mais
lento.
- **e1 (2028)** — flagrado, e está na seção 7. O comparável é o HTTPS pós-Let's Encrypt: cerca
  de uma década, com certificado gratuito, automação e pressão de navegador. O Web Bot Auth não
  tem as três. O que sustenta o prazo é concentração de infraestrutura, não dinâmica de padrão
  — e isso é um argumento fraco disfarçado de forte. Mantive 2028, com a ressalva explícita.
- **e5 (2028)** — sustentado. O comparável é a própria adoção de conta de serviço gerida, e o
  salto de 82:1 para 109:1 em um ano [4] é evidência de velocidade já observada, não projetada.

**P3 — Já aconteceu.** Procurei efeito que já é verdade hoje em algum lugar.
- **e-morto-2** (ver 12.4) — eliminado, e migrado para a seção 3.
- e3.2 ("Regra de Dois vira restrição de arquitetura") sobreviveu por pouco: já é recomendação
  publicada [9], mas não é restrição — ninguém é impedido de embarcar um produto que viole as
  três. A diferença entre recomendação e restrição é o mecanismo, e por isso ficou.

**P4 — Força contrária.** Para cada efeito, quem perde e o que pode fazer.
- **e5.3** — eliminado (ver 12.4). A força contrária é o próprio direito: responsabilidade
  objetiva do operador resolve o problema sem criar sujeito novo, e é isso que o PL 2338 faz
  [19].
- **e2** — rebaixado de `alta` para `media`. A força contrária é a indústria de anti-bot, que
  não some: ela migra para arbitrar política, e quem arbitra política tem mais poder do que
  quem adivinha. Ela **ganha** com a mudança, o que enfraquece a tese de ruptura e explica o
  rebaixamento.
- e1.2 — força contrária nomeada e forte: regulação de acessibilidade. É o que impede o efeito
  de ser pior do que está escrito, e é o que torna e1.2.1 (credenciamento como questão de
  direito) plausível.
- e6 — força contrária: emissor de cartão e regra de estorno. Um agente que compra errado gera
  disputa, e o custo da disputa é de quem processa o pagamento. Modelado, e é por isso que e6
  ficou em `media` e não em `alta`.

**P5 — Precondição única.** Procurei galho pendurado numa aposta só.
- **Raiz 1 inteira** — flagrada, e é o achado mais importante da bateria. A precondição é "um
  emissor de identidade que não seja o próprio CDN". Se ela falhar, morrem oito efeitos de uma
  vez: e1, e1.1, e1.1.1, e1.2, e1.2.1, e2, e2.1, e2.1.1. Isso é mais de três, que é o limiar da
  prova. **Não consegui desenhar em volta** — a raiz é genuinamente uma aposta só, e está dito
  na seção 7.
- Raiz 2 — precondição: monitor determinístico que não mate a utilidade. Se falhar, morrem e3,
  e3.1, e3.1.1 e sobrevivem e3.2 e e4 (que dependem de arquitetura, não de monitor). Dentro do
  limiar.
- Raiz 3 — sem precondição única: e5 já está acontecendo [4, 14], e6 e e7 dependem de coisas
  diferentes.

**P6 — Camada (CLA).** Passei as três raízes pelas quatro camadas. O resultado completo está na
seção 7, e o resumo é este:
- *Litania:* "agentes precisam de crachá porque injeção de prompt é perigosa."
- *Causas sistêmicas:* quem cobra pedágio na web; 402; concentração de infraestrutura; custo de
  revisão humana que não escala.
- *Visão de mundo:* **acesso deve ser condicionado a identidade conhecida**. Premissa nunca
  enunciada, e que sustenta o mapa inteiro. Trocada pela oposta, o mapa inverte de sinal sem
  que um único fato mude.
- *Mito/metáfora:* o **crachá** — agente é funcionário que se identifica na portaria. A
  metáfora concorrente, agente como **ferramenta** (ninguém pede crachá a um martelo), não
  aparece em nenhuma das vinte e uma fontes. A ausência é dado.
- Nenhum efeito foi flagrado como verdadeiro **só** na litania a ponto de ser eliminado; e4 foi
  o que chegou mais perto e já havia sido rebaixado por P1.

**Cota mínima de dano — cumprida.** Uma eliminação por raiz, mais dois rebaixamentos:

| Raiz | Efeito eliminado | Prova |
|---|---|---|
| 1 | e-morto-2 (mercado de "parecer humano") | P3 |
| 2 | e-morto-1 (taxa de injeção abaixo de 1%) | P1, com apoio de P2 |
| 3 | e5.3 (personalidade jurídica do agente) | P4 |

Rebaixamentos: **e2** de `alta` para `media` (P4); **e4** de `media` para `baixa` (P1).

### 12.4 · Os efeitos mortos, com o id original

**e-morto-2 — "Nasce um mercado de parecer humano, e do outro lado um de provar que não se é
agente."** *Id original na rodada: e1.3, ordem 1, raiz 1, sinal `fraco`, prazo 2029, confiança
`baixa`.*
Morto por **P3 — já aconteceu**. Proxy residencial, navegador anti-detecção e serviço de
resolução de CAPTCHA são indústria em operação hoje, vendidos abertamente como contorno para
bloqueio de agente; as próprias buscas desta sessão devolveram material comercial de fornecedores
de proxy explicando o "padrão de fallback" para o bloqueio da Cloudflare. Isto não é efeito
futuro, é estado da arte — e foi para a seção 3, no último bloco antes da nota sobre o Brasil.
*Por que doeu:* era o efeito mais vistoso do galho, e o que mais renderia discussão em sala. A
prova P3 existe exatamente para matar efeitos vistosos que já são presentes.

**e-morto-1 — "A taxa de sucesso de injeção de prompt cai abaixo de 1% em produto de massa."**
*Id original: e3.3, ordem 2, raiz 2, sinal `medio`, prazo 2029, confiança `media`.*
Morto por **P1 — extrapolação linear**, com apoio de **P2**. Mesmo ator (fabricante de modelo),
mesmo mecanismo (treino mais classificador), só volume. Agravante fatal: **a Anthropic já
publica 0,5% com salvaguardas** [18], e já publicava 1% em novembro de 2025 [1]. Escrever como
efeito de 2029 algo que é métrica de release de 2026 é o erro exato que a prova persegue.
*O que sobrou:* nada — o efeito não foi rebaixado, foi retirado. A informação está na seção 3,
que é o lugar dela.

**e5.3 — "O agente ganha personalidade jurídica própria, com patrimônio e capacidade de ser
parte."** *Id original: e5.3, ordem 1, raiz 3, sinal `fraco`, prazo 2031, confiança `baixa`.*
Morto por **P4 — força contrária**. Nenhum ordenamento *precisa* criar sujeito novo: a
responsabilidade objetiva do operador, com repartição entre desenvolvedor e operador, resolve o
mesmo problema prático sem o custo dogmático — e é o desenho que o PL 2338 leva à Câmara [19].
A força contrária é a própria doutrina civilista, que tem tudo a perder e nada a ganhar, e não
consegui nomear uma razão para ela perder até 2031. *Onde foi parar:* seção 6, como wildcard,
que é o lugar honesto de uma hipótese de alto impacto e baixa probabilidade. O efeito que ficou
no lugar dele é e5.1, responsabilidade repartida **por contrato** antes de lei — que é o que
está de fato acontecendo.

### 12.5 · Os galhos parados antes da terceira ordem, e por quê

A regra de parada é minha e está declarada na seção 5: expandir só se o filho muda de **ator**
ou de **mecanismo**. Quatro paradas por mesmidade, registradas aqui:

- Sob **e1.1**, tentei "o preço do acesso passa a variar por agente e por horário". Mesmo ator
  (o site), mesmo mecanismo (preço no protocolo), só granularidade. **Fundido com o pai.**
- Sob **e3.1**, tentei "a política de capacidade passa a ter versionamento e revisão". Mesmo
  ator, mesmo mecanismo, só maturidade de ferramenta. **Fundido com o pai.**
- Sob **e5**, tentei "o número de identidades de agente cresce mais rápido que o de humanas".
  Isso já é medido [4] e é o próprio pai em outro volume. **Fundido.**
- Sob **e7.1**, tentei "surgem corretores de reputação entre agentes". Ator novo, mas exige
  **duas precondições não validadas ao mesmo tempo** — reputação portátil (e5.2, que já é
  `fraco`) e negociação sem humano (e7.1, também `fraco`). Pela regra, isso não vai para a roda:
  vai para a seção 6 como sinal fraco, e está lá embutido no wildcard do emissor.

### 12.6 · As buscas que não deram em nada

- **Número absoluto de sites com Web Bot Auth ligado.** Nenhuma fonte aberta ou encontrada
  publica isso. Nem a Cloudflare [3], que teria o dado. `não consegui apurar`.
- **Lista atual de agentes no programa de bots verificados.** A página remete ao Cloudflare Radar
  sem trazer a lista nem o total [3]. `não consegui apurar`.
- **Fonte primária da Visa sobre "Verified Agent ID".** Apareceu em resumo de busca com data de
  setembro de 2025; não abri a fonte da Visa, então a afirmação não entrou no corpo nem na
  seção 11. Custou ao mapa um exemplo útil do lado das bandeiras de cartão.
- **Fonte primária do OWASP GenAI sobre o Top 10 de 2026.** Tentei via Security Boulevard, que
  devolveu **HTTP 403**. Substituída pela ReversingLabs [5]. A edição original do OWASP continua
  não aberta nesta sessão.
- **Relatório original da Palo Alto Networks (2026 Identity Security Landscape).** Lido só
  através do Help Net Security [4]. Amostra e método `não consegui apurar`.
- **Dado primário do WebAIM sobre a pesquisa de 2023–2024.** Lido através da Smashing Magazine
  [11]. O ranking é citado com essa mediação declarada.
- **Caso judicial contra agente, em qualquer jurisdição.** Procurei e não achei nenhum. É por
  isso que a hipótese está na seção 6 como wildcard e não na roda.
- **Medida independente da alegação do `rivet.dev/agentOS`** ("92 vezes mais rápido que uma
  frota de microVMs"). Nada de terceiro. A alegação está na seção 6 atribuída ao fornecedor, e
  não sustenta nenhum efeito.
- **`Foil` (SDK de detecção de agente) e `arrakis` (sandbox em MicroVM com backtracking).**
  Vieram da varredura da turma, entraram na triagem pela categoria, mas não consegui fonte
  aberta específica nesta sessão. Estão citados como categoria, não como evidência.

### 12.7 · Os caminhos abandonados

**Uma quarta raiz: "o isolamento fica barato demais para importar."** Cheguei a escrevê-la. Caiu
em T5 pelo artefato — Firecracker e gVisor são maduros [13] — e não consegui sustentar o
arranjo como ruptura sem medida independente do que o WebAssembly promete. Virou sinal fraco na
seção 6. Se aparecer medida de terceiro, esta é a primeira candidata a promover numa próxima
rodada.

**Uma raiz sobre governança e não sobre tecnologia:** "a organização passa a responder pelo
agente como responde pelo empregado". Caiu porque é consequência, não raiz — está distribuída
em e5.1 e e5.1.1.

**Um galho sobre o tema 3 (observabilidade).** Tentei derivar de e5.1.1 um galho sobre trilha de
auditoria como produto. Cortei por fronteira: é tema 3, e o encargo é explícito sobre não
invadir. Ficou só como nota de convergência na seção 5.

**Um horizonte mais longo.** Considerei 2036 para dar espaço à terceira ordem, já que nove dos
dez efeitos de ordem 3 caem depois de 2031 — quatro em 2032, cinco em 2033, e só e3.2.1 dentro
do horizonte. O horizonte é 2031 por instrução; a consequência é que **a terceira ordem deste
mapa é majoritariamente extra-horizonte, e isso está declarado**, o que a regra do formato
permite e que esta linha existe para não deixar passar em silêncio.

### 12.8 · As quatro perguntas do teste cruzado, respondidas sobre esta rodada

1. **Fez perguntas antes de rodar?** Sim — Fase 1, as nove perguntas em bloco e o `RECORTE
   FECHADO` devolvido antes de qualquer produção. Registro completo em 12.1, **com a violação
   parcial declarada**: não houve interlocutor para confirmar, e a confirmação foi a instrução
   do encargo.
2. **Separou novidade de comum, e recusou o comum?** Sim — Fase 2, em 12.2. Nove candidatas
   recusadas por T5 e sete por T1, cada uma com o teste nomeado. O grupo H2− (classificador de
   injeção, hook de comando destrutivo, caixa de aprovação) é o que mais importa: é o que quase
   virou raiz e não virou, por reprovar na régua da disciplina.
3. **Duvidou do próprio resultado?** Sim — Fase 5, em 12.3, com as seis provas aplicadas por
   `id`. Cota de dano cumprida: uma eliminação por raiz (e1.3, e3.3, e5.3, em 12.4) e dois
   rebaixamentos (e2, e4). A bateria **derrubou** coisa, e as mortes estão registradas com o id
   original e a prova que as matou.
4. **Saiu no formato?** Sim — Fase 6, autochecagem rodada e resultado colado em 12.9.

### 12.9 · A autochecagem da Fase 6

Rodada em 17/09/2026, sobre o arquivo final. Saída colada sem edição.

```
grep -c '^## ' => 12
faltam: nada
raizes: 3 (frontmatter diz 3 )
efeitos por ordem: {1: 7, 2: 10, 3: 10}
ordem 3 com confianca alta: 0 (cota: no maximo 1)
contadores batem: True
ids unicos: True 27
```

O script não checa o que segue, e por isso está conferido à mão:

**Todos os links da seção 11 foram abertos por mim nesta sessão**, e `fontes: 21` é o número
real de fontes lidas — não o número de resultados de busca vistos, que foi muito maior.

**A varredura automática dos vinte e um links devolveu dezenove `200`, um `429` e um `403`.**
Os dois que não deram `200` no `curl` — o VentureBeat (`429`, limite de taxa) e o blog de
segurança da Microsoft (`403`) — **foram abertos e lidos nesta sessão** pela ferramenta de
leitura de página; o que falhou foi o cliente automatizado sem credencial de navegador. Registro
em vez de esconder, porque é literalmente o objeto deste mapa: duas das minhas fontes recusam
atendimento a um agente que não consegue provar que é gente, e uma delas é um texto sobre como
conter agentes. A seção 3 descreve isso como faixa de suspeita; eu acabei de cair nela.

**Monotonicidade de prazo:** verificada pelo script em todos os galhos, sem exceção.

**Prazos além do horizonte:** nove dos dez efeitos de ordem 3 caem depois de 2031 — quatro em
2032 (e1.1.1, e1.2.1, e3.1.1, e5.1.1) e cinco em 2033 (e2.1.1, e4.1.1, e5.2.1, e6.1.1,
e7.1.1); e3.2.1, em 2031, é o único dentro do horizonte. Nenhum efeito de ordem 1 ou 2
ultrapassa 2031. A regra do formato permite que a ordem 3 ultrapasse o horizonte; a declaração
explícita está em 12.7, último parágrafo. *(Eu havia escrito "dez dos dez, sete em 2032, três em
2033" nas duas passagens; o verificador da disciplina apontou, e corrigi — fica registrado
porque contar errado o próprio mapa é exatamente o tipo de erro que a seção 8 persegue.)*

**Frases afirmativas:** nenhum `efeito` termina em `?`, conferido pelo script. As perguntas do
bloco do tema — "quem emite a identidade?", "nasce um mercado de parecer humano?" — foram
convertidas em afirmações falsificáveis antes de entrar na roda, que é o que a §1.5 da skill
exige e o que separa uma roda de uma lista de dúvidas.

**Títulos `##`:** doze, literais e numerados. Todo subtítulo deste documento é `###` ou mais
fundo.
