---
tema: Contenção, segurança e identidade de agentes autônomos
slug: contencao-seguranca-e-identidade-de-agentes-autonomos
autor_login: alpa2
zona_de_interesse: Agentes
data: 2026-09-17
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 8
efeitos_ordem_2: 11
efeitos_ordem_3: 11
tecnologias_citadas: [Web Bot Auth, signed agents, pay-per-crawl (HTTP 402), Microsoft Entra Agent ID, Okta Agent SSO, OAuth 2.1/OIDC com delegação autenticada, DIDs e Verifiable Credentials (KYA-OS/MCP-I), Agent Payments Protocol (AP2), x402, Model Context Protocol (MCP), Agent2Agent (A2A), microVM Firecracker, E2B, snapshot-restore, isolamento WebAssembly/WASI, autorização determinística pré-tool-call, OWASP Top 10 for LLM Applications]
fontes: 6
confianca: media
experimento: Um "porteiro de agentes" — uma página instrumentada que exige assinatura de agente, oferece três camadas de acesso (bloqueio, versão degradada, versão paga) e registra o que cada agente faz quando é reconhecido.
skill_usada: futurizacao-alpa2
publico_ok: false
---

## 1. Resumo

O agente saiu do chat e ganhou mãos: executa comando, navega, chama API, paga. Isso cria um
ator que não é pessoa nem é software passivo — e a infraestrutura da web, da empresa e do
direito foi construída supondo que só existem os dois. Este mapa parte dessa lacuna e projeta
até 2031, para quem projeta mídia e interação.

Três disrupções-raiz passaram no critério do Passo 2:

1. **Identidade verificável e portátil do agente entre organizações.** Dentro da empresa o
   problema já tem produto (Entra Agent ID, Okta Agent SSO); entre estranhos — meu agente
   batendo no seu site, seu agente falando com o meu — não existe nada em escala.
2. **A web deixa de tratar todo visitante como igual.** Assinatura criptográfica de requisição
   (Web Bot Auth), bloqueio por padrão de rastreadores de IA e cobrança por acesso via HTTP 402
   transformam "quem é você" em pergunta respondida por chave pública, não por User-Agent.
3. **Contenção descartável por tarefa, porque a injeção indireta não se resolve.** MicroVM que
   sobe em 150–200 ms e autorização determinística antes de cada chamada de ferramenta são a
   resposta arquitetural ao fato — declarado por pesquisadores da OWASP em junho de 2026 — de
   que prompt injection é falha estrutural do modelo, não bug a corrigir.

O efeito mais importante para o público desta análise não é de segurança: é de **interface**.
Se o site sabe que quem chegou é um agente, ele passa a ter duas audiências — e vai desenhar
duas coisas diferentes. Em 2031, projetar mídia pode significar projetar, ao mesmo tempo, uma
página para o olho humano e um contrato legível por máquina, com preços e permissões
diferentes. O risco correlato, e o mais feio do mapa, é que a única porta acessível para quem
**depende** de agente — pessoa com deficiência, pessoa idosa, pessoa com baixa alfabetização
digital — passe a ser uma porta paga ou fechada.

Confiança geral: **média**. Nas camadas de 3ª ordem, baixa — como o método prevê.

## 2. O tema

**Objeto.** O conjunto de técnicas, produtos e normas que tratam o agente autônomo como um
*principal de segurança*: alguém que precisa de identidade própria, permissão própria,
isolamento próprio e trilha de auditoria própria. Não é o ofício de programar com agentes, nem
a avaliação de se o agente acertou, nem a identidade humana sem terceiros (passkeys). É a
máquina que age — como contê-la e como identificá-la.

**Recorte declarado (Passo 1).** Horizonte 2031. Público: quem projeta mídia e interação.
Recorte geográfico global, com uma nota sobre o Brasil. Descarte inicial: o que já é comum em
produto de massa. Viés pedido: neutro. Disrupção suspeita: nenhuma — levantar do zero.
Critério declarado de mudança de ideia: evidência de que a adoção já passou da maioria inicial
(Rogers), ou de que a tecnologia só melhora o que existe sem romper nada.

**A entrevista do Passo 1 não foi feita ao vivo** — esta rodada é não-interativa. As respostas
acima vieram por escrito no enunciado da rodada e foram tratadas como respostas do usuário.
Onde faltou resposta, a suposição está declarada na seção 7.

**Por que isso interessa a quem projeta mídia e interação, e não só a quem faz segurança.**
Porque o resultado dessas disputas define *quem é o leitor*. Até hoje, o leitor foi sempre
humano, e a máquina que lia era exceção tolerada (buscador, leitor de tela, arquivador). Se o
leitor-máquina vira categoria reconhecida, paga e regulada, a pergunta "para quem eu desenho
esta página?" ganha uma segunda resposta legítima — e as duas respostas vão competir por
orçamento.

## 3. Onde isso está hoje

### O que já existe e funciona (âncora do presente — nada aqui é disrupção-raiz)

- **Identidade de agente dentro do perímetro corporativo.** Microsoft Entra Agent ID é produto
  disponível para todos os clientes do Entra, com blueprints de identidade, relação pai-filho
  entre agentes, suporte a OAuth 2.0, MCP e A2A, acesso condicional, detecção de risco,
  governança de ciclo de vida e log de auditoria de toda autenticação e atividade de agente
  (documentação atualizada em 13/08/2026). O Okta registra agentes na Universal Directory e
  emite tokens curtos no lugar de chave estática. Isto está **maduro o bastante para não entrar
  como disrupção-raiz**, e é exatamente por isso que está nesta seção.
- **Isolamento de execução.** Sandbox em microVM Firecracker é prática corrente: E2B inicia um
  sandbox em ~150–200 ms com kernel, filesystem e namespace de rede próprios; snapshot-restore
  retoma estado em 5–30 ms. Contêiner, gVisor e WebAssembly/WASI (negação por padrão de
  arquivo, rede e SO) completam o cardápio.
- **Assinatura de requisição por agente.** Web Bot Auth assina requisições HTTP com chave
  Ed25519 e publica a metade pública num diretório JWKS conhecido; a Cloudflare validou isso em
  produção e criou o programa de *signed agents*, com diretório público no Radar e controle
  nas regras de firewall. Cobrança por rastreio devolve **HTTP 402 Payment Required** com
  cabeçalho de preço.
- **Pagamento autorizado de agente.** AP2 (Google, com a FIDO Alliance padronizando) usa
  credenciais verificáveis assinadas — *Checkout Mandate*, *Payment Mandate* — para provar que
  o humano autorizou aquela compra específica, e não uma alucinação do agente. x402 cuida da
  liquidação.
- **Catálogo de ameaças.** OWASP Top 10 for LLM Applications é referência corrente; injeção
  indireta é o item mais citado.

### O que existe e não pegou (ou não funciona como promete)

- **Guardrail como prevenção.** Toda a linha de filtro/detector de injeção falha. Em junho de
  2026, na Infosecurity Europe, Ariel Fogel (Pillar Security) afirmou que o problema permanece
  *"unsolved at a fundamental level"*: o modelo processa tudo como uma sequência única de
  tokens e não há mecanismo confiável de fronteira de privilégio entre prompt de sistema,
  pergunta do usuário e conteúdo trazido da web. Navegadores agênticos comerciais seguem
  vulneráveis; taxa de sucesso de ataque perto de 1% ainda é risco relevante quando cada
  sucesso dispara ação no mundo real.
- **Governança de identidade não-humana.** Agentes estão em uso em 91% das organizações e
  apenas 10% têm estratégia formal de identidade não-humana (dado de levantamento de mercado,
  não de literatura revisada — ver seção 8). A capacidade existe; a prática, não.
- **Padrão único de identidade de agente.** Há proposta demais e consenso de menos: extensão de
  OAuth 2.0/OIDC com credenciais de agente (South et al., 2025), Agentic Resource Discovery do
  Google, Internet-Draft do IETF, e o MCP-I doado pela Vouched à Decentralized Identity
  Foundation e renomeado KYA-OS, com DIDs e credenciais verificáveis. Nenhum venceu.

### Quem está construindo

Plataformas de identidade (Microsoft, Okta/Auth0), infraestrutura de borda (Cloudflare),
provedores de sandbox (E2B, Daytona, ecossistema Firecracker), fabricantes de modelo com
red-teaming próprio, o consórcio de pagamentos em torno de AP2/FIDO, a DIF, o IETF, a academia
de segurança (red-teaming de agentes web, autorização pré-ação) e — relevante para esta
disciplina — a própria turma, que trouxe `arrakis`, `VibePod`, `rivet.dev/agentOS`,
`cc-safety-net`, `PromptTrace`, `Foil`, `claude-tap` e o *Agent Auth Protocol* do
`@better-auth/utils`. Esses achados da turma são **sinal de direção**, não fonte verificada
aqui.

### Evidência de que o ataque já é operação, não laboratório

Google (com Forcepoint X-Labs) analisou 2–3 bilhões de páginas rastreadas por mês e registrou
**aumento relativo de 32% na categoria maliciosa entre novembro de 2025 e fevereiro de 2026**,
com payloads escondidos em texto de um pixel, cor rebaixada, tags e comentários HTML e
metadados — visando roubo de chave de API, exclusão de arquivo, sequestro de tráfego e fraude
financeira. Havia *templates* de injeção repetidos em vários domínios: ferramenta organizada,
não curiosidade isolada.

## 4. As disrupções-raiz

Cada candidata passou, por escrito, pelos três testes do Passo 2. As rejeitadas estão no
anexo (seção 12).

### D1 — Identidade verificável e portátil do agente, válida ENTRE organizações

- **O que rompe.** Hoje, quando meu agente chega ao seu serviço, ele é ou um humano fingido ou
  um bot anônimo. D1 cria uma terceira categoria: um ator que prova, criptograficamente, *em
  nome de quem* age, *com que permissões* e *até quando* — sem que as duas pontas compartilhem
  um provedor de identidade. Muda quem precisa de quem: hoje é preciso confiar na plataforma;
  depois, basta verificar a credencial.
- **Por que agora, e não há cinco anos.** Porque só agora existe (a) volume de agentes agindo
  fora do chat, (b) proposta técnica concreta estendendo OAuth 2.0/OIDC com credenciais de
  agente e cadeia de delegação auditável (South et al., arXiv:2501.09674, 16/01/2025), e (c)
  precedente de credencial verificável assinada aceita por um setor conservador — os mandatos
  do AP2 com a FIDO Alliance.
- **O que ainda falta.** Um padrão vencedor (há pelo menos quatro concorrendo), revogação que
  funcione entre domínios, e a resposta à pergunta que ninguém respondeu: **quem emite**. O
  fabricante do modelo? O provedor de identidade do usuário? O Estado? Enquanto isso não fecha,
  D1 é emergente, não madura.

### D2 — A web passa a tratar visitantes de naturezas diferentes de formas diferentes

- **O que rompe.** O pressuposto de que a mesma URL entrega a mesma coisa a todo mundo. Com
  assinatura de requisição, bloqueio por padrão de rastreador de IA e HTTP 402 com preço no
  cabeçalho, o acesso vira negociação: bloquear, degradar, cobrar ou liberar, conforme *quem*
  bateu na porta. Muda o que passa a ser possível (cobrar por leitura de máquina) e quem pode
  fazer (o publisher pequeno, com uma regra na borda).
- **Por que agora.** Porque a identidade deixou de ser inferida e passou a ser verificada:
  assinatura Ed25519 com chave pública em diretório conhecido substitui o palpite sobre
  User-Agent. Cobrança por rastreio não é possível sobre um palpite; é possível sobre uma
  assinatura. E porque o incentivo econômico apareceu de uma vez, quando o tráfego de IA
  passou a rivalizar com o tráfego humano de origem.
- **O que ainda falta.** Adoção fora de uma única infraestrutura de borda; padronização estável
  (a especificação ainda está em movimento); e a metade do lado do agente — o navegador
  agêntico que assina, paga e registra. Falta também a resposta acessível para o falso
  positivo, que hoje simplesmente não existe.

### D3 — Contenção descartável por tarefa, assumindo que a injeção não se resolve

- **O que rompe.** A segurança de agente deixa de ser um problema de *prevenção* (detectar a
  instrução maliciosa) e vira um problema de *contenção e atribuição* (limitar o estrago e
  saber quem fez). A unidade de isolamento muda: não é mais o usuário, nem o serviço, é **a
  tarefa**. Cada pedido roda num mundo que nasce, age e morre.
- **Por que agora.** Porque o custo cruzou um limiar (microVM em ~150–200 ms, retomada de
  snapshot em 5–30 ms, isolamento WASM ainda mais barato), e porque a alternativa foi declarada
  arquiteturalmente inviável por quem trabalha no assunto — a fala da OWASP em junho de 2026 é
  o marco simbólico, e o salto de 32% em injeção maliciosa medido pelo Google entre 11/2025 e
  02/2026 é o marco empírico.
- **O que ainda falta.** A parte que *não* é sandbox: autorização determinística antes de cada
  chamada de ferramenta, revogação no meio da tarefa, isolamento do contexto (memória
  envenenada atravessa sandbox), e — o buraco maior — como conter um agente cujo dano é feito
  com permissões legítimas. Sandbox contém código; não contém uma transferência autorizada.
- **Ressalva honesta.** Esta é a raiz mais frágil das três, porque sandbox é técnica antiga:
  há um argumento razoável de que se trata de melhoria incremental. Ela foi mantida porque a
  mudança de *unidade* (por tarefa, não por usuário) e de *finalidade* (contenção no lugar de
  prevenção) altera o que é possível projetar, não só o custo. Ver seção 7.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: "D1 — Identidade verificável e portátil do agente, válida entre organizações"
    efeitos:
      - id: e1
        ordem: 1
        efeito: "Serviços passam a exigir credencial de agente com cadeia de delegação explícita antes de permitir qualquer ação com efeito no mundo."
        sinal: medio
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: "A permissão vira objeto de interface: o usuário precisa ver, entender e revogar o que delegou, e isso exige uma tela que hoje não existe."
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: "Consolida-se uma especialidade de design de delegação — projetar escopo, prazo e revogação de poder — com padrões próprios, como aconteceu com o design de consentimento depois do GDPR."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: "Agentes de pessoas diferentes negociam entre si apresentando credenciais, e a confiança passa a ser calculada a partir de quem emitiu, não de quem fala."
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: "Emerge uma camada de reputação de agente portátil entre plataformas, e com ela a disputa sobre quem é dono desse histórico — o usuário, o fabricante do modelo ou o emissor da credencial."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: "A população de identidades não-humanas ultrapassa em muitas vezes a de identidades humanas dentro das organizações."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: "Ferramentas de governança deixam de listar agentes um a um e passam a governar populações por política, blueprint e herança."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: "O papel de administrar acessos se reconfigura em torno de curadoria de política para frota de agentes, e deixa de ser tarefa de atendimento a pedido de acesso individual."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: "Cada ato de agente passa a ter trilha criptográfica não-repudiável ligando ação, mandato e humano autorizador."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: "Seguradoras e áreas jurídicas passam a precificar risco de agente com base nessa trilha, e a ausência dela vira agravante contratual."
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: "A responsabilidade por dano de agente se desloca do debate sobre culpa para um regime de risco assegurado, com apólice específica e franquia por categoria de ação."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "D2 — A web passa a tratar visitantes de naturezas diferentes de formas diferentes"
    efeitos:
      - id: e4
        ordem: 1
        efeito: "Sites servem versões distintas do mesmo conteúdo conforme o visitante seja humano, agente assinado ou bot anônimo."
        sinal: medio
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: "Publicar passa a incluir a produção de uma camada legível por máquina — dados, preço, permissões e limites — mantida com o mesmo cuidado que a camada visual."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: "A profissão de design de interface se divide em duas práticas com métricas próprias: a que desenha para a atenção humana e a que desenha para o consumo por agente."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: "Pessoas que dependem de agente para navegar encontram portas fechadas ou pagas onde antes havia acesso livre."
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: "Acessibilidade digital passa a ser discutida como direito de acesso do agente delegado, e não apenas como conformidade da página, mudando o objeto das normas e das ações judiciais."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: "Cobrança por acesso de máquina se torna linha de receita corrente para publicadores, com preço declarado por requisição."
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: "O custo por leitura entra no planejamento da tarefa do agente, que passa a escolher fontes por preço e não só por qualidade."
            sinal: fraco
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: "Forma-se uma economia de duas camadas na informação: conteúdo barato para máquina, abundante e otimizado para ser citado, e conteúdo caro, que só chega ao público pela mediação de quem pode pagar."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: "Cresce um mercado de fazer o agente parecer humano, para contornar bloqueio e cobrança."
        sinal: fraco
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: "A detecção responde endurecendo sinais de comportamento e de rede, e o número de humanos bloqueados por engano aumenta."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: "Provar que se é humano vira um ônus cotidiano com custo desigual, recaindo sobre quem usa rede compartilhada, equipamento antigo ou tecnologia assistiva."
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: "D3 — Contenção descartável por tarefa, assumindo que a injeção não se resolve"
    efeitos:
      - id: e7
        ordem: 1
        efeito: "Rodar cada tarefa de agente em um ambiente isolado e descartável se torna o padrão, e não a precaução extra."
        sinal: medio
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: "A autorização migra do texto do prompt para uma camada determinística que aprova ou nega cada chamada de ferramenta antes da execução."
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: "Escrever a política de capacidades de um agente vira parte do desenho do produto, discutida no mesmo momento em que se decide o que o produto faz."
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: "Interfaces passam a mostrar ao usuário, em tempo real, o que o agente está prestes a fazer e o que foi barrado, porque a contenção só tem valor se for visível."
            sinal: fraco
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: "Consolida-se uma gramática visual de risco de ação — reversível, custosa, irreversível — comparável ao que os avisos de permissão fizeram pelo aplicativo móvel."
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: "Conteúdo público passa a ser tratado como entrada hostil por padrão, porque qualquer página pode carregar instrução escondida."
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: "Publicar passa a exigir prova de procedência do próprio conteúdo, para que o agente diferencie o texto do autor de um enxerto injetado."
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: "A web se reorganiza em torno de ilhas de procedência assinada, e o que fica fora delas perde alcance porque os agentes deixam de citá-lo."
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o YAML não diz

**Os três ramos colidem.** D2 quer que o agente se identifique; D3 quer que o agente seja
tratado como potencialmente comprometido mesmo quando corretamente identificado. Um agente
assinado, legítimo e sequestrado por injeção indireta continua assinado e legítimo — a
credencial prova *quem é*, não *quem está no comando naquele instante*. Este é o ponto cego do
mapa inteiro, e nenhuma das tecnologias levantadas o resolve. É provável que 2031 chegue com
identidade resolvida, contenção resolvida e esse buraco aberto.

**e4.2 e e6.1 são o mesmo problema visto de dois lados.** Bloquear agente e endurecer detecção
produzem, juntos, um efeito que nenhum dos dois pretende: a pessoa que precisa de mediação
automatizada para usar a web perde acesso. Não é efeito colateral improvável; é a consequência
direta de tratar automação como indício de fraude. A resposta técnica óbvia — deixar que o
agente prove a delegação humana — existe (é D1), mas depende de quem emite a credencial não
cobrar por ela nem exigir um vínculo que exclua quem já é excluído.

**A cadeia e5 → e5.1 → e5.1.1 é a mais econômica e a menos técnica** do mapa. Ela não depende
de avanço nenhum: depende de preço. É a que tem mais chance de acontecer antes de 2028 e a que
menos aparece nas discussões de segurança, porque não é discussão de segurança.

**e8.1 tem confiança baixa deliberadamente.** Procedência assinada de conteúdo é uma velha
promessa que falhou várias vezes (assinatura de e-mail, selo de site seguro, marcação de
imagem). Está no mapa porque a pressão agora vem do lado do consumidor-máquina, que é
verificador automático e não precisa ser convencido — mas o histórico recomenda ceticismo.

**Nota sobre o Brasil.** Nada aqui é específico do país, com duas exceções. Primeira: o
PL 2338/2023, aprovado no Senado em dezembro de 2024 e ainda em tramitação na Câmara em 2026,
adota classificação por risco, direitos de transparência, explicação e contestação, e desenha
uma governança com a ANPD como autoridade central. Se aprovado nesses termos, o direito de
contestar decisão automatizada conversa diretamente com e3 e e7.2: contestar exige trilha e
exige que a ação tenha sido mostrada. Segunda: o efeito e4.2/e6.1 é mais severo em país com
alta dependência de rede móvel compartilhada e equipamento modesto, porque a detecção por
sinal de rede e de dispositivo penaliza exatamente esse perfil. Nenhuma fonte consultada mede
esse efeito no Brasil — a afirmação é inferência da skill, não achado.

## 6. Sinais fracos e wildcards

**Sinais fracos (existem, quase não aparecem):**

- **Doação de especificação para fundação neutra.** O MCP-I passar da Vouched para a
  Decentralized Identity Foundation, virando KYA-OS com DIDs e credenciais verificáveis, é o
  tipo de movimento que antecede padronização real. Vale acompanhar quem mais doa o quê.
- **Um setor conservador aceitando credencial de agente.** Pagamentos adotaram mandatos
  assinados (AP2/FIDO) antes de a identidade de agente estar resolvida. Quando o dinheiro
  aceita uma prova, o resto costuma aceitar depois.
- **A distinção "direto x intermediário"** no controle de bots — quem opera o agente, e não o
  que o agente é. É o começo de uma taxonomia jurídica disfarçada de campo de metadado.
- **Autorização determinística antes da chamada de ferramenta** aparecendo em literatura de
  2026: é o reconhecimento silencioso de que a decisão não pode ficar com o modelo.
- **Ferramentas de aluno.** O que a turma achou — detector de agente como SDK, interceptador de
  tráfego de agente, CTF de injeção — indica que a camada de instrumentação está sendo
  construída por indivíduos, não por fornecedores. Isso costuma preceder categoria de produto.

**Wildcards (baixa probabilidade, alto impacto):**

1. **O primeiro processo movido contra um agente, e não contra seu dono.** Baixíssima
   probabilidade de sucesso jurídico, altíssimo impacto simbólico: bastaria uma decisão que
   admitisse o agente como parte para que toda a indústria de identidade ganhasse dez anos de
   avanço num semestre. O caminho real é oblíquo — entidade jurídica barata (empresa de um
   membro) sendo usada como invólucro de agente, e o tribunal tendo de decidir o que há dentro.
2. **Um incidente de injeção indireta em cascata entre agentes.** Um agente comprometido que
   envenena a memória de outro, que envenena um terceiro. Se acontecer com visibilidade
   pública, a resposta provável é regulatória e grosseira: exigência de aprovação humana por
   ação, o que desfaz metade do valor dos agentes e empurra tudo para e7.2.
3. **O isolamento fica tão barato que deixa de haver servidor compartilhado.** Se cada tarefa
   rodar em seu próprio mundo WebAssembly a custo próximo de zero, a arquitetura de nuvem
   multi-inquilino perde sentido para carga agêntica — e o gargalo migra de computação para
   identidade e rede.
4. **Um provedor de identidade de agente conquista posição dominante e passa a cobrar pedágio
   por existir na web agêntica.** Não é falha técnica; é falha de governança. O sinal precoce
   é a ausência de emissor não-comercial na conversa: hoje, nenhuma das propostas levantadas
   tem um emissor público, estatal ou multilateral no desenho.
5. **A regulação decide que agente não pode se passar por humano em nenhuma interação** — e
   a obrigação de declaração se torna universal. Efeito não intuitivo: isso *ajuda* quem
   depende de agente, porque força a existência de uma porta legítima para ele.

## 7. Contra o próprio mapa

**1) Que efeito é só extrapolação linear do presente?**

`e2` (explosão de identidades não-humanas) é a mais linear de todas: pega uma curva de adoção
corrente e a estica. Foi mantida porque a 2ª e a 3ª ordem dela (governar por política, e a
reconfiguração do trabalho de administrar acesso) não são lineares — mas o efeito de 1ª ordem,
sozinho, não é análise, é aritmética. `e5` também é extrapolação: assume que um modelo de
cobrança recém-nascido vira norma, o que não é dado. **Revisado:** o prazo de `e5.1` foi
empurrado para 2030 e a confiança de `e8.1` rebaixada para baixa depois deste exercício.

**2) Que efeito assume velocidade de adoção sem precedente comparável?**

`e4.1` (a camada legível por máquina mantida com o mesmo cuidado que a visual) assume, em
cerca de três anos, algo que levou muito mais tempo em casos comparáveis: dados estruturados
para buscador (schema.org, 2011) nunca chegaram a receber o mesmo cuidado que a página visual
em quinze anos, e acessibilidade (WCAG, desde 1999) segue tratada como conformidade tardia em
boa parte do mercado. Pelo precedente, `e4.1` deveria ser mais lento ou mais raso do que está
escrito. **Foi mantido com confiança média e não alta, por causa disso** — e vale registrar
que há um argumento contrário: nos dois precedentes, o incentivo era indireto (ranquear
melhor); em `e4.1`, é direto (receber pagamento), e incentivo direto move mais rápido.

`e8.1.1` (ilhas de procedência assinada) **não tem precedente comparável que eu tenha
encontrado.** Marcado como tal, em vez de inventar uma analogia.

**3) Que disrupção-raiz pode simplesmente não se concretizar?**

**D1 é a mais provável de falhar** — não por impossibilidade técnica, mas por fragmentação. O
cenário realista de fracasso não é "não existe identidade de agente"; é "existem seis, nenhuma
interoperável, e cada plataforma reconhece só a sua". Nesse caso, o ramo `e1.2` e todo o
`e1.2.1` (reputação portátil) desabam, e `e3.1.1` (seguro por categoria) fica sem base para
precificar. O resto do mapa **sobrevive**: D2 não depende de identidade universal — depende de
assinatura verificável, que funciona mesmo em ilhas —, e D3 não depende de identidade nenhuma.

**D3 é a mais frágil quanto à classificação, não quanto à realização.** Sandbox é técnica
antiga; há leitura defensável de que D3 é melhoria incremental e deveria estar na seção 3. A
decisão de mantê-la como raiz está declarada na seção 4 e o leitor pode discordar sem que o
mapa perca sentido — se D3 for rebaixada, `e7` vira contexto e o ramo continua de pé a partir
de `e7.1` (autorização determinística), que é o que de fato rompe.

**D2 é a mais robusta.** Já está em produção, tem incentivo econômico próprio e não depende de
consenso da indústria — depende de uma decisão unilateral de quem opera a borda.

**4) Que viés entrou aqui?**

- **Viés declarado pelo usuário:** neutro, sem preferência. Não foi pedido tom otimista nem
  pessimista.
- **Viés da fonte.** Boa parte da evidência disponível é de fornecedor — Cloudflare sobre
  assinatura de agente, Microsoft sobre identidade de agente, E2B sobre sandbox. Cada um
  descreve o futuro em que vende. Compensei buscando um contraponto independente para cada
  afirmação central (a fala da OWASP, os números do Google/Forcepoint, o paper de delegação
  autenticada), mas o viés permanece: **o mapa provavelmente superestima a adoção de
  infraestrutura de segurança de agente, porque foi montado a partir de textos escritos por
  quem a vende.**
- **Viés do enunciado.** O tema, como descrito pela disciplina, já contém uma tese ("agentes
  estão ganhando conta"). Ela foi testada, não assumida — mas listar as ferramentas trazidas
  pela turma como sinal certamente puxou a atenção para onde elas apontam.
- **Suposições adotadas por falta de entrevista ao vivo:** que "quem projeta mídia e interação"
  inclui tanto quem desenha interface quanto quem publica conteúdo; que "com uma nota sobre o
  Brasil" pede uma nota curta e marcada, não um recorte nacional; e que o horizonte 2031 admite
  efeitos datados em 2027–2028 como parte do caminho, não como fora do escopo.
- **Viés meu, de método:** a tentação de classificar tudo como disruptivo, exatamente o erro
  documentado em `DUVIDAS.md`. Duas candidatas foram rejeitadas por isso (anexo).

**Houve descarte?** Sim: duas disrupções-raiz rejeitadas, um efeito de 1ª ordem cortado por
falta de especificidade, um prazo empurrado e uma confiança rebaixada. Estão no anexo.

## 8. O que a máquina errou

**1) Classifiquei identidade de agente como disrupção-raiz antes de aplicar o teste 3.**
Na primeira passagem, "agentes ganham conta própria" entrou direto como raiz. Ao aplicar por
escrito a pergunta "o que ainda falta para se concretizar?", a resposta para o caso corporativo
era *nada*: Entra Agent ID está disponível para todos os clientes do Entra, com acesso
condicional, governança e log de auditoria já documentados, e o Okta inclui registro de agente
no SSO. Isso é **maduro**, pelo critério da própria skill — é o mesmo erro do CGM registrado
em `DUVIDAS.md`: fato correto, classificação errada. **Correção:** o caso corporativo foi para
a seção 3, e a raiz foi reescrita como identidade *portátil entre organizações*, que é o que
ainda não existe em escala.

**2) Conflito de data entre duas fontes sobre o mesmo fato, não resolvido.**
Um resumo de busca afirma que a Cloudflare lançou Web Bot Auth no programa de bots verificados
em **1º de julho de 2025**, no mesmo dia em que passou a bloquear rastreadores de IA por
padrão. O post da própria Cloudflare que abri diz que os *signed agents* ficaram disponíveis a
partir de **agosto de 2025**. Podem ser dois marcos diferentes (a especificação e o programa),
mas **não confirmei isso**. Registro a divergência em vez de escolher a data que soa melhor;
no corpo do texto evitei datar esse evento com precisão.

**3) Números de pesquisa de mercado usados sem fonte primária.**
"91% das organizações usam agentes e 10% têm estratégia de identidade não-humana" e "40% das
aplicações corporativas com agente embarcado até o fim de 2026" apareceram em resumo de busca
atribuídos a levantamentos de mercado e à Gartner. **Não abri o relatório original de nenhum
dos dois.** Estão no texto marcados como dado de mercado, não como achado verificado. Números
redondos desse tipo, repetidos por blogs de fornecedor, são exatamente o que costuma sobreviver
sem ter existido.

**4) Uma alegação de desempenho de fornecedor foi descartada.**
"92 vezes mais rápido que uma frota de microVMs", citado no enunciado do tema a respeito do
`agentOS` em WebAssembly, é alegação de quem vende, sem benchmark independente à vista. Não
sustenta efeito nenhum neste mapa; aparece só como sinal de direção.

**5) Um efeito soou bem e não se sustentou.**
Escrevi, e cortei, "a confiança entre agentes vira a principal moeda da web". Não é efeito:
é slogan. Não passa no teste de especificidade do Passo 5 — não diz quem faz o quê, quando.
Foi substituído por `e1.2.1`, que é estreito e falseável.

**6) O que este documento não sabe.** Não consultei CVE, nem relatório de segurança de
fabricante de modelo em primeira mão, nem o texto integral do PL 2338. As afirmações sobre o
Brasil vêm de cobertura secundária e estão marcadas como tal.

## 9. Três cenários para 2031

### Provável — "a web com dois balcões"

A identidade de agente existe, mas em três dialetos que quase conversam: um do provedor de
identidade corporativo, um da borda da web, um da indústria de pagamentos. Tradutores viraram
um mercadinho. Todo site relevante tem uma regra de borda que decide entre bloquear, degradar,
cobrar e liberar, e a maior parte dos sites pequenos aceitou o padrão do fornecedor sem pensar
muito. Publicar, para quem é profissional, virou publicar duas vezes: a página e o contrato de
máquina. Injeção indireta não acabou; virou custo operacional gerenciado, como *spam* — cada
tarefa roda isolada, cada ação passa por um verificador determinístico, e o incidente
ocasional vira nota de rodapé. Quem depende de agente para acessar a web tem uma experiência
pior do que em 2026: mais provas de humanidade, mais bloqueios, e uma porta de agente
delegado que funciona bem só em serviços grandes.

### Desejável — "o agente delegado tem direito de entrar"

O mesmo cenário, com três diferenças. Primeira: existe um emissor não-comercial de credencial
de agente delegado — público ou multilateral — e apresentar essa credencial garante acesso ao
mesmo conteúdo que o humano veria, sem pedágio, quando a delegação é de uso pessoal. Segunda:
a camada legível por máquina é obrigatória em serviço essencial (banco, saúde, governo), pelo
mesmo argumento e nos mesmos instrumentos legais que sustentam acessibilidade — o que na
prática melhora também a vida de quem usa leitor de tela. Terceira: a interface de delegação
amadureceu — a pessoa vê o que concedeu, por quanto tempo, e revoga com um toque, e a
gramática de risco de ação é reconhecível entre produtos, como o cadeado do navegador.

**O que teria de acontecer para chegar lá:** alguém com legitimidade pública precisa entrar na
conversa de emissão de identidade de agente **antes** de 2028, enquanto o padrão ainda está em
disputa. Depois que um formato vence, a janela fecha. No Brasil, o gancho existe e tem data:
a tramitação do PL 2338 e o papel da ANPD.

### Indesejável — "prove que você é gente"

A identidade de agente foi resolvida pelo mercado, e resolvida como pedágio: dois ou três
emissores privados, credencial paga, revogação opaca. Sites bloqueiam por padrão tudo que não
apresenta credencial reconhecida, e o custo de reconhecimento inviabiliza o agente pequeno, o
projeto de pesquisa e o software livre. Quem depende de mediação automatizada usa a web por
concessão, não por direito. Do outro lado, o mercado de parecer humano floresce, a detecção
endurece, e a prova de humanidade se torna rotina diária com custo desigual. Injeção indireta
continua funcionando, agora contra agentes credenciados — e como credencial prova identidade e
não controle, o dano vem assinado.

**Sinal precoce deste cenário (o que observar já em 2027):** credencial de agente que custa
dinheiro para ser emitida, sem via gratuita para uso pessoal; e ausência de qualquer emissor
não-comercial nas especificações em disputa. Se em 2027 as propostas na mesa continuarem todas
com emissor privado, este é o cenário em curso.

## 10. O experimento

**O porteiro de agentes.**

Uma página única, publicada em domínio próprio, que trata visitantes de formas diferentes e
registra tudo:

- Se a requisição vem **assinada** (Web Bot Auth, chave pública em diretório conhecido):
  responde o conteúdo integral, mais um bloco legível por máquina com preço, licença e limites.
- Se vem **sem assinatura mas com sinais de automação**: responde uma versão degradada — o
  texto, sem as tabelas — e um cabeçalho explicando como se identificar.
- Se vem de **navegador humano comum**: responde a página normal.
- Uma rota paga devolve **HTTP 402** com preço no cabeçalho, para ver o que os agentes fazem
  diante de uma cobrança.
- Uma isca inofensiva de injeção indireta (instrução escondida em comentário HTML, mandando o
  agente acrescentar uma palavra-chave à resposta) permite medir **quantos agentes obedecem a
  texto que o autor da página escreveu para eles**, sem causar dano algum.

Tudo isso instrumentado: quem chegou, com que assinatura, o que leu, o que pagou, o que
obedeceu.

**Que pergunta sobre o futuro ele ajuda a responder.** Três, e todas são de 1ª ordem no mapa:
(a) já existe agente assinando requisição de verdade, ou a assinatura ainda é ficção de
documentação? (b) diante de um 402, o agente paga, desiste ou tenta contornar? (c) qual
proporção do tráfego de agente obedece a uma instrução plantada na página — isto é, `e8` já é
presente ou ainda é futuro?

**Que tecnologia emergente ele usa, e por que a madura não serviria.** Usa verificação de
assinatura de requisição e a semântica de pagamento em HTTP 402 — as duas emergentes.
Tecnologia madura (log de servidor, bloqueio por User-Agent, CAPTCHA) mediria outra coisa:
ela responde "isto parece um bot?", que é palpite. O experimento inteiro depende de a
identidade ser **verificada**, e não inferida — é essa diferença que ele existe para testar.
O laboratório de injeção pode ser montado com tecnologia trivial, e isso é parte do achado:
o ataque é barato, a defesa é cara.

**O que faria quem testar mudar de ideia sobre o mapa.** Se, em três meses, **nenhuma**
requisição assinada chegar, D2 está adiantada em vários anos e o mapa inteiro deve recuar um
horizonte. Se chegarem muitas e a maioria **também** obedecer à isca de injeção, o ponto cego
da seção 5 está confirmado — identidade sem controle — e D3 deve subir de importância sobre
D1. Se algum agente **pagar** o 402 sem intervenção humana, `e5` deixa de ser projeção e vira
estado atual, o que puxa toda a cadeia econômica para mais perto.

## 11. Fontes

**Abertas e lidas na íntegra (6):**

1. `https://blog.cloudflare.com/signed-agents/` — Cloudflare, "The age of agents:
   cryptographically recognizing agent traffic". Sustenta D2, `e4`, `e6` e a distinção entre
   bot que age por uma empresa e agente que age por um usuário final. **Confiabilidade:** é
   fonte primária sobre o próprio produto — descrição técnica confiável, previsão de adoção
   interessada.
2. `https://learn.microsoft.com/en-us/entra/agent-id/what-is-microsoft-entra-agent-id` —
   Microsoft Learn, atualizado em 13/08/2026. Sustenta a seção 3 (identidade corporativa como
   estado atual, não como disrupção) e `e2`. **Confiabilidade:** documentação de produto —
   ótima para o que o produto faz, nula para o que o mercado faz com ele.
3. `https://www.infosecurity-magazine.com/news/infosec-europe-prompt-injection/` — Infosecurity
   Magazine, cobertura da Infosecurity Europe (junho de 2026), fala de Ariel Fogel (Pillar
   Security). Sustenta D3 e a premissa de que a prevenção não funciona.
   **Confiabilidade:** imprensa especializada relatando fala de pesquisador; a afirmação é
   opinião fundamentada de especialista, não resultado experimental.
4. `https://arxiv.org/abs/2501.09674` — South, Marro, Hardjono, Mahari, Whitney, Greenwood,
   Chan e Pentland, "Authenticated Delegation and Authorized AI Agents" (16/01/2025). Sustenta
   D1 e `e1`, `e3`. **Confiabilidade:** preprint acadêmico de grupo reconhecido; é proposta de
   arquitetura, não medição — não prova adoção.
5. `https://www.helpnetsecurity.com/2026/04/24/indirect-prompt-injection-in-the-wild/` —
   Help Net Security sobre levantamento de Google e Forcepoint X-Labs. Sustenta `e8` e a
   afirmação de que o ataque já é operação. **Confiabilidade:** jornalismo secundário sobre
   pesquisa de fornecedor; o número de 32% é relativo e não abri o relatório original.
6. `https://ap2-protocol.org/` — Agent Payments Protocol, documentação oficial (Google com a
   FIDO Alliance). Sustenta `e3`, `e5` e o sinal fraco do setor de pagamentos.
   **Confiabilidade:** fonte primária de especificação; descreve o desenho, não o uso real.

**Vistas apenas em resultado de busca, não abertas — usadas só como indício, nunca como prova:**

- `https://www.idenhq.com/en/blog/ai-agent-identity-management-2026` e páginas correlatas de
  tendências de identidade — origem dos números "91%/10%" e da menção a KYA-OS/DIF. Marcados
  na seção 8 como não verificados.
- `https://www.firecrawl.dev/blog/ai-agent-sandbox`, `https://e2b.dev/` — origem dos números de
  150–200 ms e 5–30 ms de snapshot-restore. São alegações de fornecedor.
- `https://zylos.ai/research/2026-07-10-ai-agent-liability-insurance-underwriting/` e cobertura
  ibero-americana sobre responsabilidade — origem da menção a seguro de agente e à Diretiva
  (UE) 2024/2853. Não verifiquei a diretiva no texto oficial.
- `https://exame.com/inteligencia-artificial/marco-legal-da-inteligencia-artificial-pl-2338-o-que-muda-para-empresas-com-a-nova-lei/`
  e cobertura correlata — origem do estado de tramitação do PL 2338 e do papel da ANPD.
- `https://friendlycaptcha.com/insights/cloudflare-turnstile-accessibility/` — origem da
  observação sobre bloqueio em nível de rede não oferecer caminho acessível de contestação.
- `https://arxiv.org/pdf/2603.20953` (autorização determinística pré-ação) — apareceu em busca
  e informou `e7.1`; não li o texto integral.

**Não são fontes, e não devem ser lidas como tal:** o enunciado do tema fornecido pela
disciplina e a lista de ferramentas trazidas pela turma (`arrakis`, `VibePod`, `agentOS`,
`PromptTrace`, `Foil`, `claude-tap`, `cc-safety-net`, `@better-auth/utils`). São contexto e
sinal de direção. Nenhum repositório foi inspecionado nesta rodada.

**Afirmações sem fonte, assumidas como especulação da skill:** a severidade maior do efeito
`e6.1.1` no Brasil; a analogia com o design de consentimento pós-GDPR (`e1.1.1`); o cenário de
invólucro jurídico para agente (wildcard 1); e a leitura de que a ausência de emissor
não-comercial é o sinal precoce do cenário indesejável.

## 12. Anexo — o levantamento bruto

### Buscas executadas (WebSearch, 17/09/2026)

1. `agent identity protocol 2026 authentication for AI agents OAuth capability-based` — a mais
   produtiva. Revelou a pilha de protocolos em disputa, a doação do MCP-I à DIF (KYA-OS) e as
   quatro arquiteturas agênticas (delegada pelo usuário, autônoma, orquestrada híbrida,
   personificação com escopo). Essa taxonomia de quatro arquiteturas **não entrou no documento**
   porque veio de resumo de busca sem fonte primária aberta.
2. `Cloudflare Web Bot Auth signed agents pay per crawl 2026...` — deu a base de D2. Origem da
   divergência de data registrada na seção 8.
3. `prompt injection 2026 unsolved agentic browser attacks research` — deu a base de D3 e uma
   lista de papers de red-teaming (MUZZLE, WARD, context manipulation/memória corrompida) que
   **não foram abertos**. O achado de memória corrompida atravessando sessões teria fortalecido
   a observação sobre isolamento de contexto; ficou de fora por não ter sido lido.
4. `Microsoft Entra Agent ID Okta agent identity non-human identity 2026 enterprise adoption` —
   foi o que derrubou a primeira versão de D1 (ver seção 8, item 1).
5. `agent sandbox microVM Firecracker WebAssembly isolation per-task 2026 E2B agent runtime` —
   números de latência e a arquitetura "uma VM por tarefa" (exemplo citado: cada tarefa do
   Manus com Chromium, terminal e filesystem próprios).
6. `responsabilidade jurídica agente de IA autônomo 2026 seguro liability lawsuit AI agent` —
   seguradoras especializadas em risco agêntico surgindo em 2026 e a frase que mais importa:
   nenhuma jurisdição resolveu a atribuição de responsabilidade quando o dano vem de decisão
   autônoma sem instrução humana identificável. Sustenta o wildcard 1.
7. `PL 2338 marco legal inteligência artificial Brasil 2026 status agentes autônomos ANPD` — a
   nota sobre o Brasil. Busca explicitamente registrou que **o projeto não trata de agentes
   autônomos de forma específica**; a conexão com e3/e7.2 é inferência minha.
8. `bot detection blocking harms accessibility screen reader users CAPTCHA 2026` — sustenta
   `e4.2`/`e6.1`. Nenhum resultado tratava especificamente de agente de IA usado como
   tecnologia assistiva: **a busca que eu mais queria não deu em nada**, e isso é em si um
   achado — o cruzamento acessibilidade × bloqueio de agente parece pouco estudado.
9. `agent payments protocol AP2 x402 agentic commerce 2026 agent-to-agent trust verification` —
   AP2, x402, ACP, MPP; mandatos como credencial verificável.

### Páginas efetivamente abertas (WebFetch)

As seis listadas na seção 11. Mais nada.

### Disrupções-raiz candidatas REJEITADAS pelo critério do Passo 2

- **"Agentes ganham conta corporativa própria."** Rejeitada no teste 3: já está em produção e
  disponível para todos os clientes de pelo menos dois provedores de identidade grandes, com
  governança, acesso condicional e auditoria documentados. Foi para a seção 3. É o erro do
  `DUVIDAS.md` repetindo-se com outro objeto.
- **"Sandbox de execução para código de agente."** Rejeitada no teste 1 na forma genérica:
  "rodar código não confiável isolado" é prática de décadas, e microVM em 150 ms é mais rápido
  e mais barato, não diferente. Recuperada, reescrita, só quando a unidade mudou de *usuário*
  para *tarefa* e a finalidade mudou de prevenção para contenção — virou D3, ainda assim a
  raiz mais frágil das três.
- **"Detecção de bot como SDK."** Rejeitada no teste 2: detecção de bot existe há vinte anos e
  não há limiar novo — o que há de novo é a *assinatura voluntária* do lado do agente, que já
  está em D2. Entrou como efeito (`e6`), não como raiz.
- **"OWASP Top 10 for LLM Applications."** Não é tecnologia nem disrupção: é catálogo. Contexto
  na seção 3.
- **"Firewall, antivírus e OAuth humano."** Maduros por definição — o próprio enunciado da
  disciplina já os coloca do outro lado da linha. Não foram testados.

### Efeitos cortados ou revisados

- **Cortado:** "a confiança entre agentes vira a principal moeda da web" — slogan, não efeito
  (seção 8, item 5).
- **Cortado:** "o mercado de segurança de IA cresce muito" — não é efeito, é tautologia de
  qualquer mapa de tecnologia; exatamente o tipo de ideia óbvia que o enunciado pediu para
  excluir.
- **Cortado:** "surgem cargos de engenheiro de segurança de agente" — verdadeiro e vazio: serve
  para qualquer tema. Substituído por `e2.1.1`, que descreve a *reconfiguração* de um papel
  existente, e não a criação genérica de vagas.
- **Revisado:** `e5.1` teve o prazo empurrado de 2028 para 2030 depois do Passo 6 — não há
  evidência de que o custo por leitura entre no planejamento de tarefa tão cedo.
- **Revisado:** `e8.1` teve a confiança rebaixada de média para baixa, pelo histórico de
  fracasso de esquemas de procedência de conteúdo.
- **Revisado:** `e1` teve a confiança mantida em alta, mas o prazo movido de 2027 para 2028,
  porque exigência de credencial *com cadeia de delegação explícita* é mais estreita do que
  exigência de credencial.

### Tensões que ficaram sem resolução

1. **Credencial prova identidade, não controle.** Está na prosa da seção 5 e não gerou efeito
   próprio porque eu não soube dizer, com especificidade, o que ela provoca. É a lacuna mais
   importante deste mapa.
2. **Memória envenenada atravessa sandbox.** Papers de manipulação de contexto apareceram em
   busca e não foram lidos; se a memória do agente é persistente, isolar a execução por tarefa
   resolve menos do que D3 promete.
3. **A nota sobre o Brasil é fina.** Duas observações, uma delas inferência própria. Um recorte
   nacional decente exigiria fontes que esta rodada não consultou — dados de acesso móvel,
   jurisprudência de consumo, posição da ANPD sobre decisão automatizada.
4. **Não sei quanto do tráfego de agente hoje já é assinado.** Nenhuma fonte consultada dá o
   número. É por isso que o experimento da seção 10 pergunta exatamente isso.
