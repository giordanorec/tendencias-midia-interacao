---
tema: Contenção, segurança e identidade de agentes autônomos
slug: contencao-seguranca-e-identidade-de-agentes-autonomos
autor_login: jgpt
zona_de_interesse: Agentes
data: 2026-09-18
horizonte: 2031
publico: quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 8
efeitos_ordem_2: 16
efeitos_ordem_3: 16
tecnologias_citadas:
  - Web Bot Auth
  - HTTP Message Signatures
  - HTTP 402 (pay per crawl)
  - Microsoft Entra Agent ID
  - Okta Agent SSO
  - Cross App Access
  - Model Context Protocol (MCP)
  - A2A (Agent2Agent)
  - WIMSE
  - SPIFFE
  - OAuth 2.1 / PKCE
  - Transaction Tokens
  - Firecracker microVM
  - Kata Containers
  - gVisor
  - WebAssembly / WASI
  - Decentralized Identifiers (DIDs)
  - Verifiable Credentials
fontes: 13
confianca: media
experimento: "Um mesmo site servido em três versões conforme a identidade assinada de quem bate na porta — humano, agente identificado e agente anônimo — para medir o que se perde de cada lado."
skill_usada: futurizacao-jgpt
publico_ok: false
---

## 1. Resumo

Entre 2025 e 2026 o agente de IA deixou de ser um script anônimo e passou a ter conta. Na
borda da web, assinatura criptográfica de requisição (Web Bot Auth) tornou possível saber
quem está batendo na porta, e com isso cobrar preço diferente por requisição via HTTP 402.
Dentro da empresa, o agente virou objeto de diretório com ciclo de vida próprio — Entra
Agent ID em GA em abril de 2026, Okta Agent SSO em agosto, Cross App Access adotado no MCP
no mesmo mês, e um rascunho IETF de março propondo tratar agente como workload com
identidade WIMSE. Ao mesmo tempo, isolar uma tarefa ficou barato: uma microVM Firecracker
sobe em ~125 ms com menos de 5 MiB de sobrecarga. Três limiares cruzados, e a consequência
que interessa a quem projeta mídia e interação é a mesma: **a página deixa de ter um só
público**. Quem a lê pode ser pessoa, agente identificado com dono declarado, ou agente que
não quis dizer o nome — e o produto vai responder diferente para cada um. O protocolo de
delegação está quase resolvido; a disciplina de operá-lo, a cadeia de responsabilidade e o
que acontece com quem depende de agente para acessar a web não estão resolvidos em lugar
nenhum.

## 2. O tema

O objeto aqui é a máquina que age — não a que responde. Um agente que executa comando,
navega e chama API é um ator no mundo, e o mundo foi construído supondo que todo ator é
pessoa ou é um serviço estável com dono conhecido. Agente não é nem um nem outro: é criado
por ação de usuário, vive minutos, morre, e age em nome de alguém. A documentação da
Microsoft formula isso com precisão rara para um manual de produto: identidades de
aplicação "carregam a expectativa de estabilidade de longo prazo, propriedade conhecida e
ciclo de vida gerenciado", e agentes podem ser "criados e destruídos milhares de vezes por
dia".

Isso encosta em mídia e interação por três lados, e nenhum deles é o lado da segurança.

Primeiro, **a superfície de conteúdo virou superfície de negociação**. Quando a identidade
de quem requisita é uma assinatura e não um cabeçalho declarado, cobrar por acesso passa a
ser tecnicamente possível — e a Cloudflare implementou exatamente isso, com 402 e
cabeçalhos de preço. Uma página deixa de ser uma página e passa a ser uma oferta com
condição.

Segundo, **a interface passa a ter dois leitores**. Quem desenha uma tela em 2031 desenha
para o olho humano e para o agente que a consome em nome de um humano. Não é o mesmo
problema de acessibilidade, nem o mesmo problema de SEO: é um segundo destinatário com
outro custo de erro.

Terceiro, **distinguir humano de máquina virou política de produto**, não questão técnica.
E toda política de distinção produz falso positivo. O falso positivo aqui tem nome e
endereço: pessoa que usa tecnologia assistiva e já hoje "aparece como anomalia" em sistemas
de detecção de bot.

Merece mapa de futuro, e não estado-da-arte, porque o estado-da-arte de setembro de 2026 já
é um campo resolvido no papel e não resolvido na prática — a frase mais útil que li na
pesquisa é de um analista do setor: "o protocolo de delegação está perto de resolvido, e a
disciplina operacional em torno dele não está perto de nada". O interessante não é o que
existe; é o que decorre de existir.

## 3. Onde isso está hoje

**O que já existe e funciona.**

Identidade de agente na borda da web é real e está em produção. A Cloudflare publicou o
Web Bot Auth, que assina requisições com par de chaves Ed25519 e publica a chave pública em
um diretório JWK hospedado; o crawler manda `signature-agent`, `signature-input` e
`signature` em cada requisição (fonte 6). Em 1º de julho de 2025 a empresa lançou o *pay per
crawl* em beta privado, usando HTTP 402 com cabeçalho de preço em dois fluxos — reativo (o
crawler descobre o preço depois de pedir) e proativo (declara antes que aceita pagar). Em 28
de agosto de 2025 veio a categoria **signed agent**, deliberadamente separada de crawler:
"este tipo de bot não está operando em nome de uma única empresa, mas dos próprios usuários
finais" (fonte 5). O primeiro grupo incluiu o ChatGPT agent, o Goose (Block), Browserbase e
Anchor Browser.

Identidade de agente dentro da empresa também é real. O Microsoft Entra Agent ID chegou a
GA em abril de 2026 (fonte 11, com a página de conceito atualizada em junho de 2026). O
modelo é explícito: identidade de agente é um tipo próprio, distinto de service principal e
de conta humana, com acesso **autônomo** (direitos dados ao agente) e acesso **delegado**
(direitos do usuário, com o usuário controlando o que delega); agentes criados no Copilot
Studio registram quem os criou como *sponsor*; quando o sistema exige que o agente pareça
usuário, existe a "conta de usuário do agente", pareada 1-para-1 com a identidade de agente.
Do outro lado do mercado, Okta tornou o Agent SSO geralmente disponível em 24 de agosto de
2026 e teve o Cross App Access adotado como extensão oficial de autorização gerenciada por
empresa do MCP, também em agosto de 2026 (fonte 4).

Há padronização em curso, e ela é conservadora por escolha. O rascunho IETF
`draft-klrc-aiagent-auth-00`, de 2 de março de 2026, assinado por gente da Defakto, AWS,
Zscaler e Ping Identity, não inventa protocolo: compõe os existentes — identificador WIMSE
(com SPIFFE como implementação madura), credenciais de vida curta, mTLS no transporte,
WIMSE Proof Tokens e HTTP Message Signatures na aplicação, OAuth 2.0 para delegação,
Transaction Tokens para não vazar autorização entre microsserviços, e o OpenID Shared
Signals Framework para revogar em tempo real (fonte 1).

Isolamento barato é fato medido. Firecracker sobe em ~125 ms com menos de 5 MiB de
sobrecarga por VM e chega a 150 VMs por segundo por host; Kata sobe em ~200 ms; gVisor
custa 10–30% em carga pesada de I/O. A recomendação corrente para código gerado por LLM é
categórica: microVM ou Kata, porque a fronteira de hardware elimina classes inteiras de
ataque de kernel (fonte 13).

E o problema continua no lugar. Na edição de 2025 do OWASP Top 10 para aplicações LLM —
publicada em 17/11/2024 e ainda exibida como lista corrente na página do projeto — injeção de
prompt é o risco nº 1 e *excessive agency* é o nº 6 (fonte 2). A edição de 2026 saiu em
03/08/2026 e traz, nas palavras do próprio projeto, "rankings atualizados, cobertura de
ameaça expandida e nova pesquisa fundamentada em milhares de incidentes reais de segurança
de IA"; ela remete explicitamente ao OWASP Top 10 for Agentic Applications quando o modelo
deixa de ser componente e passa a ser ator com ferramenta, memória e consequência (fonte 3).
**A ordem exata da lista de 2026 não consta da página oficial e só aparece em cobertura de
fornecedor — por isso este documento não afirma nenhuma posição de 2026**; ver seção 8.

**O que existe e não funciona.**

A camada operacional. A análise de setembro de 2026 sobre padrões de identidade de agente
lista as falhas como operacionais, não protocolares: apenas 34% das organizações aplicam a
agentes controles de grau humano; a maioria dos agentes herda chave de API estática, sem
expiração nem trilha; entradas não confiáveis continuam executáveis em ambientes com
credencial; cadeias de delegação herdam a permissão mais ampla a menos que alguém as
estreite ativamente; e os sistemas registram chamadas individuais, não cadeias de delegação
inteiras (fonte 4).

O protocolo entre agentes de donos diferentes é o mais frágil, e isso está na própria
especificação. O A2A descobre agentes por *agent card* em URI bem-conhecida, registro curado
ou configuração direta — e **não exige verificação da autenticidade do card por assinatura**.
No lugar disso recomenda medidas de proteção: card estendido autenticado para informação
sensível, controle de acesso no endpoint que serve o card (mTLS, restrição de rede, OAuth
2.0) e credencial dinâmica fora de banda em vez de segredo estático embutido no card
(fonte 9). A decisão é deliberada — delega a gestão de credencial a quem implementa —, e a
consequência é que personificação e adulteração de card dependem inteiramente de controle
adicional que o protocolo não obriga ninguém a ter.

E o que ninguém resolveu é conceitual. O levantamento acadêmico de abril de 2026 sobre
padrões de identidade de IA (fonte 7) aponta cinco lacunas e chama todas de estruturais —
"mais esforço de engenharia sozinho não as fecha": verificação de intenção semântica (não
se consegue confirmar o que um agente foi genuinamente projetado para fazer),
responsabilidade em delegação recursiva (agente que delega a agente), integridade da
identidade ao longo do tempo, opacidade de governança, e sustentação operacional. Um
trabalho de junho de 2026 sobre protocolos de interoperabilidade (fonte 8) chega a
conclusão vizinha por outro caminho: voto e preservação de dissenso estão universalmente
ausentes em MCP, A2A e ACP, e governança de comunidade de agentes é "uma camada
arquitetural faltante acima dos padrões de interoperabilidade, não uma funcionalidade
faltante dentro deles".

Do lado jurídico, o quadro é o oposto do que a expressão "identidade do agente" sugere: o
agente não é pessoa e não pode ser réu. A responsabilidade recai sobre desenvolvedor
(defeito de projeto, de fabricação, falha em advertir) e sobre quem opera (direito de
agência, negligência na supervisão, quebra de contrato). A novidade legislativa é
defensiva: lei da Califórnia em vigor desde 1º de janeiro de 2026 impede que a operação
autônoma do sistema seja usada como defesa, e o Colorado AI Act, de junho de 2026, exige
avaliação de impacto de quem opera sistemas de alto risco (fonte 10).

**Nota Brasil.** O PL 2338/2023 foi aprovado no Senado em dezembro de 2024 e a votação na
Câmara escorregou para 2026 por impasse político; adota classificação por risco à moda do
AI Act, com um capítulo próprio de direitos dos afetados. A ANPD publicou em dezembro de
2025 o Mapa de Temas Prioritários 2026–2027 colocando "inteligência artificial e
tecnologias emergentes" como um dos quatro eixos de fiscalização, e foi posicionada como
coordenadora do Sistema Nacional de IA, atuando como reguladora residual onde não há
regulador setorial. O sandbox regulatório começou em junho de 2025 e três empresas —
Metatext, Synapse e IA Greenworld — estão em teste prático desde fevereiro de 2026, com
foco em transparência algorítmica até dezembro de 2026 (fonte 12). Nenhum desses
instrumentos trata especificamente de identidade de agente; o Brasil chega a essa discussão
com vocabulário de proteção de dados, não de identidade não-humana.

**Diagnóstico de maturidade (heurística, não previsão).** Aplicando a leitura de hype
sugerida na skill: a cobertura de identidade de agente corporativa já é cobertura de adoção
(GA de produto, preço, licença, documentação de operação), não de demonstração. A cobertura
de identidade de agente na web aberta é mista — a mecânica está em produção, mas o volume
de agentes assinados ainda é pequeno diante do tráfego automatizado total. A cobertura de
governança entre agentes de donos diferentes é quase toda de demonstração e de paper. Isso
diz onde o campo está, não quando ele chega a lugar nenhum.

## 4. As disrupções-raiz

### D1 — O agente virou principal de segurança com ciclo de vida próprio

**O que rompe.** Até aqui, a unidade de controle de acesso era a pessoa ou o serviço. O
agente cabia mal nas duas: como pessoa, herdava permissões amplas demais e sumia do log
como se fosse o humano; como serviço, exigia uma chave estática permanente para uma coisa
que vive minutos. A ruptura é o agente como **terceiro tipo de principal**: efêmero por
projeto, com dono registrado, com direito próprio e com direito delegado separados, e com
trilha que distingue a ação do agente da ação de quem o criou.

**Por que agora e não há cinco anos.** O limiar não é técnico, é de cardinalidade e de
duração. Em 2021 não existia carga de trabalho que criasse e destruísse milhares de
identidades por dia por ação de usuário final — a documentação da Microsoft dá exatamente
esse motivo para não reusar service principal. O que mudou foi o número de agentes e o
tempo de vida de cada um, e isso quebrou o pressuposto de permanência embutido no modelo
anterior. A prova de que o limiar foi cruzado é comercial: GA em abril de 2026, licença
paga (Agent 365), plano de serviço próprio de Acesso Condicional e Proteção de Identidade
para agentes com rollout entre julho e agosto de 2026.

**O que falta.** Tudo o que não é protocolo: dono declarado por agente, credencial com
expiração, estreitamento ativo de escopo na delegação, e log de **cadeia** e não de chamada
(fonte 4). E a lacuna estrutural que nenhum diretório resolve: delegação recursiva — quando
o agente A delega ao agente B, de quem é o ato (fonte 7).

### D2 — A identidade do requisitante na web aberta virou assinatura, e assinatura permite preço

**O que rompe.** A web tratava o requisitante como declaração não verificável: o
`User-Agent` é texto que qualquer um escreve. Isso tornava impossível qualquer política
fina — só dava para bloquear ou deixar passar. Com HTTP Message Signatures e chave pública
publicada, a identidade passa a ser **verificada em vez de inferida**, e a partir daí
existem coisas que antes não existiam: uma classe de tráfego "agente do usuário final"
separada de "crawler da empresa X", e cobrança por requisição com 402.

**Por que agora e não há cinco anos.** O limiar é a verificabilidade. A formulação que
melhor resume está na análise técnica do Web Bot Auth: pagamento por rastreio "não é
possível em cima do User-Agent, mas passa a ser possível no momento em que a identidade é
uma assinatura". Não é um preço que caiu nem uma latência que melhorou: é uma capacidade
que não existia. E é recente e datável — Web Bot Auth anunciado em maio de 2025, pay per
crawl em 1º de julho de 2025, classe *signed agent* em 28 de agosto de 2025, e o
endurecimento de 2026 que obriga os cabeçalhos de pagamento a entrarem no
`signature-input`, para impedir adulteração de preço e replay.

**O que falta.** Universalidade e simetria. Hoje a mecânica é operada por uma infraestrutura
de borda dominante e pelo cadastro dela; um esquema em que só o maior CDN do mundo emite a
lista de bons agentes não é um padrão da web, é uma condição de mercado. Falta também o
caminho inverso — como um site prova ao agente que é quem diz ser, e como o humano por trás
do agente consente no gasto.

### D3 — Isolar uma tarefa ficou mais barato do que revisar o que ela faz

**O que rompe.** A política de segurança de software sempre foi sobre permissão: o que este
processo pode fazer. Quando dar um mundo descartável a cada execução custa ~125 ms e menos
de 5 MiB, a pergunta muda de *o que ele pode fazer* para *em que mundo ele vive e o que
sobrevive quando ele morre*. Isso habilita um uso qualitativamente novo — rodar código
gerado por modelo, não revisado por humano, em produção — que não era defensável quando
isolamento forte significava uma VM por minuto e por gigabyte.

**Por que agora e não há cinco anos.** Limiares numéricos, e são eles que fazem a candidata
passar no teste: 125 ms de boot, <5 MiB por VM, 150 VMs por segundo por host, restauração
de snapshot em 5–30 ms, e a possibilidade de deixar o sandbox pausado a custo de computação
zero. Em 2021 o isolamento por hardware existia (Firecracker é de 2018), mas o que faltava
era a carga que o justificasse — e o que o mercado fazia com código não confiável era
revisar, não isolar. A recomendação de 2026 inverteu o default.

**O que falta.** O isolamento resolve o dano ao host, não o dano à tarefa. Um agente
isolado que foi convencido por injeção de prompt a exfiltrar exatamente o que ele tinha
direito de ler causa o mesmo estrago dentro da caixa. A caixa protege o mundo do agente;
não protege o usuário do agente.

**Candidatas rejeitadas nesta etapa.** Firewall, WAF, antivírus e OAuth para humanos:
maduros, são piso. Guardrail por instrução de sistema e filtro de saída: não cruzam limiar
nenhum — são mitigação incremental de um problema que o próprio OWASP descreve como
arquitetural. Personalidade jurídica do agente, seguro de agente, reputação portátil entre
plataformas e governança de comunidade de agentes com voto e dissenso: emergentes, sem
nenhuma mudança estrutural forçada até agora — vão para a seção 6.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O agente virou principal de segurança com ciclo de vida próprio
    efeitos:
      - id: e1
        ordem: 1
        efeito: O log de auditoria passa a registrar cadeias de delegação inteiras, e não chamadas isoladas, porque a chamada isolada deixou de responder quem mandou fazer.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Nasce um formato de trilha de proveniência de ato que atravessa empresas, análogo ao que a nota fiscal eletrônica fez com a transação.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Interfaces de produto passam a exibir ao usuário final a cadeia de quem pediu o quê, e a revisão dessa cadeia vira uma tela de uso diário em vez de artefato de perícia.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Auditoria e perícia digital passam a exigir o grafo de delegação como prova, e a ausência dele é tratada como falha de controle.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Operar agente sem trilha de cadeia encarece o seguro de responsabilidade civil da empresa, e a trilha vira requisito contratual antes de virar requisito legal.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A credencial de vida curta substitui a chave de API estática como padrão de fato para agente, e a chave estática passa a ser tratada como dívida de segurança nomeada.
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Integrações que só sabem autenticar por chave estática — sistemas internos antigos, APIs de fornecedor pequeno — ficam fora do alcance dos agentes corporativos.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Surge uma camada de adaptadores que converte identidade de agente em chave estática na última milha, reintroduzindo no adaptador exatamente o risco que o modelo novo eliminou.
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: A revogação em tempo real vira função de produto visível, e cancelar um agente em curso passa a ser um botão na interface de quem opera.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: O botão de desligar agente se torna elemento de design recorrente, com o mesmo problema de affordance do botão de parada de emergência — visível demais é ruído, escondido demais é inútil.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: Todo agente passa a ter um dono humano nomeado no diretório, e esse nome é o endereço para onde a responsabilidade é enviada.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Criar agente deixa de ser ato livre do usuário e passa a ter gate de aprovação, como hoje se aprova acesso a sistema sensível.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: A fricção de aprovação empurra parte do uso para agentes pessoais fora do perímetro corporativo, criando uma TI sombra de agentes maior do que a de aplicativos.
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Delegação recursiva sem resposta jurídica produz o primeiro caso público em que ninguém consegue dizer de quem foi o ato entre dois agentes encadeados.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: Contratos de serviço passam a proibir sub-delegação a agentes de terceiros por default, e a interoperabilidade entre agentes de organizações diferentes encolhe por cláusula, não por limitação técnica.
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: A identidade do requisitante na web aberta virou assinatura, e assinatura permite preço
    efeitos:
      - id: e4
        ordem: 1
        efeito: Sites passam a servir respostas diferentes conforme a requisição seja de humano, de agente assinado ou de automação anônima.
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Nasce uma disciplina de projeto para o segundo leitor — versões de conteúdo estruturadas para consumo por agente, com contrato de dado em vez de layout.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: A versão para agente se torna a versão canônica do conteúdo em categorias transacionais, e a página para humano vira uma renderização entre outras.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: A publicidade gráfica perde alcance nas categorias onde o agente faz a tarefa, porque o agente não vê banner.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: O gasto migra para colocação dentro da resposta que o agente lê, e a disputa regulatória sobre publicidade identificável se desloca do anúncio visível para o dado que o agente consome sem mostrar a ninguém.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: O preço por requisição deixa de ser zero para uma fatia do tráfego, e o acesso a conteúdo passa a ter valor negociado na borda em vez de assinatura no front.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Agentes passam a operar com orçamento explícito, e o usuário precisa consentir em gasto que ele não vê acontecer.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Consentimento de gasto vira o padrão de interação mais disputado do período, disputando com a notificação push o lugar de mecanismo mais abusado da interface.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Veículos pequenos sem infraestrutura de borda ficam de fora da cobrança e se tornam a fonte barata que os agentes preferem, invertendo a economia de reputação editorial.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: A qualidade média do que os agentes citam cai antes de subir, e a checagem de procedência vira funcionalidade de produto voltada ao usuário final.
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: Quem depende de automação para acessar a web — pessoa com deficiência, pesquisador, arquivista — é classificado junto com o tráfego que os sites querem barrar.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Acessibilidade passa a exigir uma credencial de agente assistivo reconhecida, transformando um direito em um cadastro.
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Quem emite essa credencial passa a saber quais sites cada pessoa com deficiência visita, e a acessibilidade produz um rastro de vigilância que ela não tinha.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Forma-se um mercado de parecer humano — serviços que vendem assinatura, residência e comportamento de humano para automação que não quer se declarar.
            sinal: fraco
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: A prova de humanidade migra para verificação de identidade civil em categorias corriqueiras, e navegar sem documento vira exceção em vez de regra.
                sinal: fraco
                prazo: 2031
                confianca: baixa

  - disrupcao: Isolar uma tarefa ficou mais barato do que revisar o que ela faz
    efeitos:
      - id: e7
        ordem: 1
        efeito: A unidade de contenção encolhe da sessão para a tarefa, e cada passo do agente roda em um mundo descartável próprio.
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Desfazer vira operação de infraestrutura e não de aplicação, porque descartar o mundo é mais barato do que reverter o que foi feito nele.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: A interface de trabalho com agente passa a exibir ramificações em vez de histórico linear, e comparar dois futuros da mesma tarefa vira gesto comum de uso.
                sinal: fraco
                prazo: 2030
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: O estado persistente entre tarefas — memória do agente — vira a superfície de ataque que sobra, porque é a única coisa que atravessa as caixas.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: Memória de agente passa a ser tratada como entrada não confiável por padrão, e revisar o que o agente lembra vira tarefa periódica de quem opera.
                sinal: fraco
                prazo: 2030
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: Rodar código gerado por modelo sem revisão humana prévia deixa de ser exceção e vira o caminho normal, com a caixa no lugar da revisão.
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: A revisão humana se desloca do código para a fronteira da caixa — o que entra, o que sai, que credencial existe lá dentro.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Especificar fronteira vira a habilidade central de quem projeta sistemas com agente, e ler código deixa de ser o gargalo da equipe.
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: O dano possível se concentra no que o agente tinha legitimamente o direito de acessar, porque o resto a caixa já impede.
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: Escopo mínimo por tarefa substitui perfil de permissão por papel, e a permissão passa a ser pedida no momento do ato em vez de concedida de antemão.
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

**O que o bloco não diz sozinho.**

A roda tem três raízes, mas elas não são independentes — e o YAML esconde isso. D2 (assinatura
na web) só produz efeito econômico porque D1 (identidade com dono) dá a quem cobra um
interlocutor solvente do outro lado; um agente assinado sem dono declarado não é
faturável. E D3 (isolamento barato) é o que torna D1 sustentável: identidade efêmera para
um agente que vive minutos só faz sentido se o ambiente dele também for descartável na
mesma escala de tempo. As três raízes são faces de uma mudança só — **o agente passou a
ser uma entidade contável**: tem nome, tem endereço de cobrança e tem um lugar onde mora.

Segundo ponto que o bloco não carrega: a assimetria entre os ramos. Os efeitos de D1 e D3
são majoritariamente de infraestrutura, e infraestrutura tende a se concretizar pelo
caminho mais chato — contrato, licença, auditoria. Os efeitos de D2 são de política, e
política pode reverter. A subárvore de `e5` (preço por requisição) é a que depende de mais
elos frágeis: exige que a cobrança escale além de um beta, que haja mais de um ator de
borda oferecendo, e que agentes aceitem gastar. Nenhuma dessas três condições estava
demonstrada em setembro de 2026.

Terceiro: `e6` é o único ramo em que a disrupção produz dano a pessoas específicas e
identificáveis, e é por isso que ele tem o prazo mais curto entre os ramos de sinal fraco.
Não porque haja mais evidência — mas porque o mecanismo já está operando hoje, sem agente
nenhum, contra quem usa tecnologia assistiva. O agente só aumenta a pressão sobre uma
classificação que já erra.

## 6. Sinais fracos e wildcards

**Sinais fracos observados na pesquisa.**

*Verificação de intenção semântica.* O levantamento de abril de 2026 (fonte 7) formula
aquilo que nenhum produto tenta fazer: confirmar o que um agente foi genuinamente projetado
para realizar. Toda a pilha atual verifica *quem* é o agente e *o que ele pode fazer* —
nada verifica *para quê ele existe*. Se alguma forma de atestado de propósito aparecer, ela
muda a natureza do que é um agent card e do que é uma permissão.

*Voto e dissenso entre agentes.* O trabalho de junho de 2026 (fonte 8) nota que voto e
preservação de dissenso estão universalmente ausentes em MCP, A2A e ACP. Isso é um sinal
fraco porque hoje não há caso de uso; é interessante porque a ausência é de uma camada
inteira, não de uma funcionalidade — e camadas inteiras faltantes costumam ser preenchidas
de uma vez, por um ator só.

*Conta de usuário do agente.* O detalhe mais revelador da documentação do Entra: quando o
sistema exige que o agente pareça usuário, cria-se uma conta de usuário pareada 1-para-1
com a identidade de agente. É a admissão de que metade do mundo corporativo não consegue
representar um ator não-humano, e que a solução de compatibilidade é fingir. Cada uma
dessas contas é um lugar onde a distinção humano/máquina foi deliberadamente apagada por
motivo técnico — exatamente o oposto do que a política de segurança quer.

**Candidatas emergentes rejeitadas como raiz (Etapa 2).**

Personalidade jurídica do agente: não cruzou limiar nenhum, e a jurisprudência caminha na
direção contrária — a lei da Califórnia de janeiro de 2026 reforça a responsabilidade de
quem opera em vez de criar um sujeito novo. Seguro específico de agente: existe discussão,
não existe produto com sinistro pago que eu tenha verificado. Reputação portátil entre
plataformas: tecnicamente possível com credenciais verificáveis, sem nenhum incentivo de
adoção — nenhuma plataforma quer que a reputação construída nela viaje. DIDs e credenciais
verificáveis para agente (MCP-I): existem, estão em fundação, não forçaram mudança
estrutural.

**Wildcards.**

*O processo contra o agente, e não contra o dono.* Baixa probabilidade, alto impacto. Hoje
o consenso jurídico é explícito: o agente não pode ser processado. Um tribunal que aceite,
em qualquer jurisdição, tratar a identidade de agente como centro autônomo de imputação —
mesmo que para efeito limitado, como responder por um contrato dentro de um limite de
orçamento — converteria um objeto de diretório em sujeito. O sinal precoce não seria uma
decisão judicial; seria um contrato-padrão de plataforma que declara o agente como parte
contratante, para transferir risco.

*A ruptura da cadeia de confiança da borda.* Se a lista de agentes bons for comprometida ou
politicamente capturada — uma chave vazada, ou uma jurisdição exigindo bloqueio seletivo —,
a identidade assinada deixa de ser neutra e vira instrumento de controle de acesso à
informação. Impacto alto porque, diferente do bloqueio por IP, este é auditável, específico
por ator e difícil de contornar por design.

*Isolamento tão barato que a caixa vira o produto.* Se o custo por mundo descartável cair
mais uma ordem de grandeza, deixa de fazer sentido compartilhar qualquer ambiente, e
software multiusuário volta a ser software monousuário replicado. Seria uma reversão de
quarenta anos de arquitetura, e quase nada do que se sabe sobre projeto de sistemas
compartilhados sobreviveria.

*Injeção de prompt resolvida.* O wildcard que ninguém coloca na lista porque é bom. O
OWASP descreve a falha como arquitetural, por não existir equivalente de consulta
parametrizada para separar instrução de dado. Se aparecer essa separação — no nível do
modelo, não do filtro —, boa parte da indústria de contenção descrita neste mapa perde a
razão de ser em poucos anos, e as subárvores de D3 encolhem drasticamente.

## 7. Contra o próprio mapa

**Extrapolação linear.** O ramo `e2` é o mais culpado. "Credencial de vida curta substitui
chave estática" é a continuação de uma curva que começou muito antes de agentes existirem —
é a mesma tese que o mundo de identidade defende desde SPIFFE, em 2018, com adoção lenta.
Chamar isso de efeito da disrupção é creditar ao agente um movimento que já estava em
andamento. Mantive `confianca: media` em vez de `alta` por isso, e considero `e2.1` (sistemas
antigos ficam de fora) o efeito mais bem sustentado do ramo, porque é o que realmente muda
com a cardinalidade nova. O ramo `e8.1` sofre do mesmo mal em menor grau: deslocar revisão
para a fronteira é o que já se chama de *shift left* há dez anos.

**Velocidade de adoção nunca vista.** Três prazos do mapa são otimistas e assumo isso.

`e4` em 2028 — "sites servem respostas diferentes conforme quem requisita" — pressupõe
adoção de um esquema de assinatura em escala de web aberta em cerca de dois anos. O caso
comparável que contradiz: HTTPS, com incentivo muito mais forte, aparelhamento gratuito
(Let's Encrypt, 2016) e pressão de navegador, levou aproximadamente uma década para
ultrapassar a maioria do tráfego. Web Bot Auth não tem nem navegador empurrando nem
usuário percebendo. Deixei `confianca: alta` em `e4` apenas porque a diferenciação por
tipo de requisitante **já acontece hoje** em forma grosseira (bloqueio de crawler), e o que
o mapa prevê é o refinamento dela, não a criação. Se o leitor discordar dessa leitura, o
efeito deveria ser `media`.

`e5` em 2029 — preço por requisição em escala — é o efeito mais frágil do mapa inteiro. O
`pay per crawl` estava em beta privado desde julho de 2025 e não encontrei evidência de
saída de beta. Comparável que contradiz o prazo: micropagamento por conteúdo na web é
tentado desde os anos 1990 e falhou em todas as encarnações; nada garante que a existência
de um mecanismo de identidade resolva o problema, que nunca foi técnico, e sim de
coordenação de demanda. Baixei `e5.2` e toda a subárvore para `baixa`.

`e6.2` — mercado de parecer humano — em 2029 é curto. Mas aqui o comparável **sustenta** o
prazo em vez de contradizê-lo: o mercado de resolução de CAPTCHA e de residential proxy já
existe, é maduro e tem preço público. O efeito não é a criação de um mercado, é a
reorientação de um mercado existente, e reorientação é rápida.

**Se cada disrupção não vingar.**

*Se D1 não vingar* — se identidade de agente ficar como funcionalidade de nicho da
Microsoft e da Okta, sem padrão interoperável e sem adoção fora de grandes empresas —,
morrem `e1`, `e2` e `e3` inteiros, e sobra o mundo atual: agentes usando credencial de
pessoa, indistinguíveis no log. É o cenário mais provável de fracasso porque, como a fonte
3 mostra, a lacuna já é operacional e não protocolar: ter o padrão não faz ninguém usá-lo.
Nesse mundo, `e3.2` (ninguém sabe de quem foi o ato) acontece mesmo assim — e mais cedo,
porque não haverá nem a trilha parcial.

*Se D2 não vingar* — se a assinatura na borda não sair de um cadastro operado por um ator
—, morrem `e4`, `e5` e metade de `e6`. Mas atenção: `e6.1` e `e6.2` **sobrevivem à morte da
raiz**, porque o dano a quem usa tecnologia assistiva vem da detecção heurística de bot, que
já existe e é o que se usaria na ausência da assinatura. A subárvore de acessibilidade é a
única do mapa que piora se a disrupção falhar, em vez de melhorar. Isso é o achado mais
incômodo desta seção.

*Se D3 não vingar* — improvável, porque os números já estão medidos e o produto já está
vendido. O modo realista de fracasso não é o isolamento não acontecer; é ele se provar
irrelevante, com todo o dano ocorrendo dentro do escopo legítimo do agente. Nesse caso `e7`
e `e8` acontecem exatamente como escritos e não protegem ninguém — a caixa vira teatro de
segurança bem medido. É a hipótese que eu mais gostaria de ver testada.

**Viés do autor.** A skill manda perguntar ao usuário se ele escolheu o tema por gostar
dele. Esta rodada foi executada sem interlocutor humano disponível, então não perguntei e
não invento a resposta. Declaro o que dá para declarar: o tema foi atribuído, não escolhido,
o que reduz o viés de afeição, mas a descrição do tema fornecida pela disciplina já vinha
com uma tese embutida — "o mais revelador de todos: identidade para agentes" — e este mapa
concorda com ela. Concordar com o enquadramento recebido é um viés, e ele não foi testado
aqui. Um mapa independente deveria considerar seriamente a hipótese oposta: que identidade
de agente é uma resposta burocrática a um problema que é de modelo, e que ela vai produzir
mais registro do que segurança. A seção 9, cenário indesejável, é a versão mais próxima
disso que este documento contém.

## 8. O que a máquina errou

**1. Datei a Cloudflare um ano à frente, e quase publiquei assim.** O resumo de busca que
recebi afirmava que o Web Bot Auth entrou no programa de bots verificados em "1 de julho de
2025" e, na mesma resposta, que "a partir de 1º de julho de 2026" a distinção entre bot
verificado e signed agent passou a ser expressa por um campo novo. Ao abrir os dois posts
originais da Cloudflare, as datas são julho e agosto de **2025**, não 2026 — o post de
signed agents é de 28/08/2025 e mostra dados de tráfego de 21 a 27 de agosto de 2025.
Corrigi o texto para as datas dos posts. O erro é do tipo perigoso porque um ano de
diferença muda a leitura de maturidade: em 2025 é anúncio, em 2026 seria adoção
consolidada. A seção 3 usa as datas verificadas.

**2. Não consegui extrair número nenhum dos papers de red-teaming, e quase citei assim
mesmo.** O AgentRedBench (arXiv 2606.02240) e o trabalho sobre injeção armazenada entre
sessões (arXiv 2606.04425) apareceram na busca como sustentação numérica ideal — taxa de
sucesso de ataque, eficácia de defesa. Ao abrir os PDFs, o extrator devolveu metadados,
autores e data, e nenhum número: o conteúdo está em fluxos comprimidos que a ferramenta não
lê. A tentação era escrever "estudos mostram taxas de sucesso de X%" com o link ao lado, o
que passaria por qualquer leitura rápida. Não há nenhum percentual de ataque neste
documento por essa razão. **Os dois papers existem e foram abertos, mas sustentam apenas a
existência do problema, não a sua magnitude** — e estão marcados assim na seção 11.

**3. O OWASP Top 10 de 2026 está no documento sem ter sido lido na fonte primária.** Foi assim
que este documento quase foi entregue, e a correção veio de fora: a página da Aembit devolveu
HTTP 403, eu registrei a afirmação como "não verificada" e segui — mantendo na seção 11 um
link que eu não tinha aberto. Isso contraria duas decisões em vigor da disciplina
(`TMI-0033`: fonte que não abre sai da seção 11; `TMI-0025`: a afirmação que fica órfã é
reescrita, nunca mantida apoiada no anexo), estendidas às rodadas de skill de aluno pela
`TMI-0071`. Ao voltar à fonte primária, o erro ficou maior do que o de procedimento: a página
do projeto OWASP exibe como lista corrente a **edição de 2025**, em que *excessive agency* é o
nº 6 — e a página oficial da edição de 2026 (03/08/2026) confirma que há "rankings
atualizados", mas **não publica a ordem**. Ou seja: a afirmação "subiu de sexto para terceiro"
não tem respaldo em nenhum documento oficial que eu tenha aberto; ela circula em cobertura de
fornecedor (ReversingLabs, SC Media, Check Point, Aembit), quatro veículos que provavelmente
leram o mesmo PDF que eu não baixei. O texto da seção 3 foi reescrito para afirmar só o que os
primários sustentam, e a posição de 2026 saiu do documento. Fica no anexo 12.G como pista
verificável por quem baixar o PDF.

**3b. O mesmo erro, de novo, com o A2A.** A caracterização do A2A na seção 3 também estava
apoiada em resumo de busca, com um "(fonte 8, via resumo de busca)" que parecia honesto e não
era — porque o item 8 da lista de fontes remetia a algo que eu não tinha aberto. Fui à
especificação do protocolo e ela sustenta o ponto, com mais precisão do que o resumo: a
descoberta se dá por URI bem-conhecida, registro curado ou configuração direta, a verificação
de autenticidade do card não é exigida, e o que a spec faz é recomendar controle de acesso no
endpoint e credencial dinâmica fora de banda. O parágrafo foi reescrito a partir da spec.
**O padrão comum aos itens 3 e 3b vale mais que os dois casos: marcar uma afirmação como "não
verificada" e mantê-la citada dá a aparência de rigor sem o custo dele.** Marcar não é
verificar; ou se abre a fonte, ou a frase sai.

**4. Errei a natureza da relação entre as três raízes na primeira versão da roda.** A
primeira montagem tratava D1, D2 e D3 como três árvores independentes e distribuía os
efeitos econômicos todos em D2. Ao escrever a prosa da seção 5 ficou evidente que `e5`
(preço) não fecha sem `e1`/`e3` (dono solvente), e que D3 é pré-condição de D1 e não um
ramo paralelo. Não refiz a estrutura, porque o formato da disciplina pede uma raiz por
subárvore — registrei a dependência em prosa. É uma limitação do formato, não do campo: uma
Futures Wheel com raízes acopladas precisaria de arestas entre subárvores, e o YAML não as
tem.

**5. Limitação de processo declarada.** Esta rodada foi executada sem interlocutor humano.
A Etapa 0 da skill foi cumprida com respostas fornecidas de antemão, e a Etapa 4 exige
perguntar ao autor sobre viés — pergunta que não pôde ser feita. Está registrado na seção 7
e aqui. Nenhuma resposta de usuário foi inventada.

## 9. Três cenários para 2031

**Provável.** Em 2031 o agente tem conta em todo lugar onde havia diretório corporativo, e
em quase nenhum lugar onde não havia. Dentro das empresas grandes, a identidade de agente
virou rotina de auditoria: o agente nasce com dono, credencial de horas e escopo estreito, e
morre sem deixar credencial órfã. Fora delas, o quadro é o de sempre — a maior parte dos
agentes continuou rodando com a chave estática de alguém, e o log continuou registrando
chamada e não cadeia, exatamente como os analistas de 2026 previram que continuaria. Na web
aberta, a diferenciação por tipo de requisitante se consolidou como prática, mas a cobrança
por requisição não saiu de acordos bilaterais entre grandes editoras e grandes laboratórios;
o 402 programático continuou sendo uma promessa elegante. O isolamento por tarefa virou
invisível, que é o destino de toda infraestrutura que funciona: ninguém mais discute em que
caixa o agente roda, do mesmo jeito que ninguém discute em que contêiner o build roda. E a
injeção de prompt continua em primeiro lugar na lista, agora em um contexto em que o agente
tem crachá — o que significa que o ataque bem-sucedido é aquele que faz o agente usar
corretamente permissões que ele legitimamente tinha.

**Desejável.** Em 2031, a identidade de agente foi tratada como infraestrutura pública e não
como produto. Existe mais de um emissor de credencial de agente reconhecido na borda da web,
com regra de admissão escrita e auditável, e um site pode aceitar assinatura de qualquer um
deles — o que impediu que a lista de bons agentes virasse propriedade de um ator. A cadeia
de delegação é registrada inteira e é legível por quem foi afetado, não só por quem opera:
uma pessoa consegue perguntar "quem mandou esse agente fazer isso comigo" e obter resposta
sem processo judicial. E, o mais importante, o caso do acesso assistivo foi resolvido antes
de virar dano: agentes que agem em nome de pessoa com deficiência entraram no esquema sem
cadastro nominal e sem rastro de navegação atribuível — a credencial prova o direito de
acesso sem identificar a pessoa. Para chegar aqui, três coisas teriam de ter sido feitas:
levar a especificação de assinatura de agente a um organismo de padronização com múltiplos
implementadores, e não a um programa de fornecedor; exigir por regulação — no Brasil, dentro
do arranjo que a ANPD coordena — que trilha de delegação seja legível pelo afetado e não só
pelo controlador; e desenhar a credencial de agente assistivo como prova de atributo, não de
identidade, o que é tecnicamente trivial com credenciais verificáveis e foi puro atraso
político não ter feito antes.

**Indesejável.** Em 2031 a web se partiu em duas por preço e por permissão. Sites relevantes
respondem bem a três ou quatro agentes de grandes laboratórios, que pagam, e mal a todo o
resto — o que inclui pesquisador, arquivista, jornalista com script e a pessoa cega cujo
agente de leitura não está em lista nenhuma. A prova de humanidade se espalhou para além dos
sistemas sensíveis e chegou ao corriqueiro: para comprar passagem ou ler um arquivo público,
alguém pede documento. Do outro lado, o mercado de parecer humano cresceu até ficar melhor
financiado que o de detectar, e a assinatura criptográfica, que prometia acabar com a
imitação, só encareceu a imitação sem impedi-la. Dentro das empresas, a identidade de agente
produziu volume recorde de registro e nenhuma redução de incidente — todo ataque relevante
passou a ser um agente devidamente autenticado, com dono devidamente nomeado, fazendo com
permissão legítima algo que ninguém pediu; a trilha serve para apurar depois, nunca para
impedir antes. O sinal precoce disso é observável já em 2027, e é banal: contagem de
identidades de agente emitidas crescendo mais rápido que qualquer indicador de incidente
evitado, com a segurança sendo reportada pelo número de crachás emitidos. Quando o
indicador de sucesso vira o volume de cadastro, o cenário já começou.

## 10. O experimento

**O que é.** Um mesmo conteúdo servido em três versões, escolhidas na borda pela identidade
de quem requisita. Um site pequeno — uma página de conteúdo real, com texto, preço e um
formulário — que responde:

- para requisição **sem assinatura**: a página completa como hoje;
- para requisição com **assinatura de agente válida e dono declarado**: uma versão
  estruturada, sem elemento decorativo, com os dados em contrato explícito;
- para requisição com **assinatura ausente mas comportamento automatizado detectado**: uma
  versão degradada, ou um 402 com preço simbólico.

Monta-se com HTTP Message Signatures (par Ed25519, diretório JWK público) e um Worker de
borda que verifica a assinatura e roteia. Do lado do cliente, três agentes: um assinado, um
anônimo e um navegador humano.

**Que pergunta sobre o futuro ele responde.** Duas, e as duas estão no mapa. Primeira: *o
que se perde de cada lado quando o conteúdo é escrito para o segundo leitor?* O efeito
`e4.1` supõe que exista uma disciplina de projeto para agente; o experimento mede o custo
dela — quanto do conteúdo sobrevive à tradução, e o que um humano perde se receber por
engano a versão de agente. Segunda, e mais importante: *quantos falsos positivos a
classificação produz?* O efeito `e6` supõe que quem depende de automação seja classificado
junto com quem se quer barrar. Basta rodar contra o próprio site um leitor de tela com
automação, um navegador com extensão de acessibilidade e um agente de pesquisa, e contar
quantos caem na faixa degradada. Esse número é a coisa mais útil que o experimento produz,
e ninguém precisa esperar 2031 para tê-lo.

**Que tecnologia emergente usa, e por que não dá com tecnologia madura.** Usa assinatura de
requisição verificável (Web Bot Auth / HTTP Message Signatures) e resposta 402 com preço.
Com tecnologia madura — `User-Agent`, `robots.txt`, heurística de fingerprint, CAPTCHA — o
experimento não responde nada, porque todas essas são inferências: o resultado mediria a
qualidade do palpite, não o efeito da diferenciação. É a verificabilidade que torna a
pergunta respondível, e ela é de 2025.

**O que a turma faria testando em sala.** Cada pessoa chega com um agente e tenta cumprir
uma tarefa simples no site — achar o preço, preencher o formulário. Metade recebe chave e
assina; metade não. Mede-se: taxa de conclusão por grupo, tempo, e — o dado que interessa —
quantos participantes do grupo assinado preferiram a versão de agente à versão humana
depois de ver as duas. Segunda rodada, com a classe operando o outro lado: cada pessoa
define o preço do próprio 402 e vê quanto tráfego perde. É a discussão sobre preço de
acesso encenada em quarenta minutos, com números da própria sala.

**O que mudaria a opinião do autor.** Duas medições. Se a versão para agente se mostrar
**mais barata de produzir** que a versão para humano — e não mais cara, como o mapa supõe
em `e4.1` —, então a linha temporal de `e4` está conservadora e a versão para agente vira
canônica antes de 2031, não depois. E se a taxa de falso positivo contra acessos assistivos
ficar próxima de zero num teste honesto, o ramo `e6` inteiro perde força, e eu estaria
importando para 2031 um problema que o campo está resolvendo sozinho. Qualquer uma das duas
mudaria este documento mais do que qualquer notícia de produto.

## 11. Fontes

As treze foram abertas e lidas nesta sessão, e todas responderam a cliente automatizado. Por
`TMI-0033` e `TMI-0071`, fonte que não abre não entra aqui; por `TMI-0025`, nenhuma afirmação
das seções 1 a 11 se apoia em algo que não esteja nesta lista. As marcações de confiabilidade
são minhas.

1. **IETF, `draft-klrc-aiagent-auth-00` — "AI Agent Authentication and Authorization
   Framework"** (02/03/2026; P. Kasselman/Defakto, J. Lombardo/AWS, Y. Rosomakho/Zscaler,
   B. Campbell/Ping Identity).
   `https://www.ietf.org/archive/id/draft-klrc-aiagent-auth-00.html`
   Sustenta: a seção 3 (padronização em curso), a tese de que o campo compõe padrões
   existentes em vez de inventar, e a lacuna de confirmação humana em meio à execução.
   Confiabilidade: alta como registro do que está sendo proposto; é rascunho individual, não
   consenso de grupo de trabalho, e expira em 03/09/2026 — não é norma.

2. **OWASP GenAI Security Project — página do Top 10 for LLM Applications, edição 2025**
   (publicada em 17/11/2024). `https://genai.owasp.org/llm-top-10/`
   Sustenta: injeção de prompt como risco nº 1 e *excessive agency* como nº 6 na edição de
   2025. Confiabilidade: alta — é o projeto que produz a lista.

3. **OWASP GenAI Security Project — "OWASP GenAI LLM Top 10 2026"** (03/08/2026).
   `https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/`
   Sustenta: existência e data da edição de 2026, a descrição de "rankings atualizados,
   cobertura de ameaça expandida e nova pesquisa fundamentada em milhares de incidentes
   reais", e o encaminhamento do risco ao *Top 10 for Agentic Applications* quando o modelo
   vira ator. Confiabilidade: alta para esses fatos. **Limite explícito: a página não traz a
   lista ordenada — a ordem de 2026 só está no PDF, que não foi baixado.** Por isso o
   documento não afirma posição de 2026 nenhuma.

4. **"AI Agent Identity Standards 2026: Cross App Access, MCP, and What Is Still Missing"**
   (startwithidentity.com). `https://startwithidentity.com/blog/agent-identity-gets-a-protocol/`
   Sustenta: Cross App Access adotado no MCP (ago/2026), Okta Agent SSO em GA (24/08/2026),
   Entra Agent ID como concorrente, e a lista de lacunas operacionais — 34% de controles de
   grau humano, chave estática herdada, escopo que herda a permissão mais ampla, log de
   chamada e não de cadeia. É a fonte da frase que organiza o documento: o protocolo está
   quase resolvido, a disciplina operacional não.
   Confiabilidade: média. Análise de setor bem informada, mas o número de 34% não traz
   pesquisa de origem — tratei como ilustração, não como medida.

5. **Cloudflare — "The age of agents: cryptographically recognizing agent traffic"**
   (28/08/2025). `https://blog.cloudflare.com/signed-agents/`
   Sustenta: a categoria *signed agent* separada de crawler, a definição de que o agente
   opera em nome do usuário final e não de uma empresa, Web Bot Auth como mecanismo, e a
   primeira coorte (ChatGPT agent, Goose, Browserbase, Anchor Browser).
   Confiabilidade: alta para o fato técnico e as datas; é fonte interessada quanto ao mérito
   do esquema — a empresa opera o cadastro que descreve.

6. **Cloudflare — "Introducing pay per crawl"** (01/07/2025).
   `https://blog.cloudflare.com/introducing-pay-per-crawl/`
   Sustenta: mecânica do 402 com fluxo reativo e proativo, exigência de Ed25519 + diretório
   JWK + HTTP Message Signatures, e a visão declarada de agentes com orçamento negociando
   acesso programaticamente (que alimenta `e5`).
   Confiabilidade: alta para a mecânica; **beta privado** na data do post, e não encontrei
   evidência de saída de beta — é por isso que `e5` está com confiança rebaixada.

7. **Otsuka, Toyoda & Leung — "AI Identity: Standards, Gaps, and Research Directions for AI
   Agents"** (arXiv 2604.23280, 25/04/2026). `https://arxiv.org/abs/2604.23280`
   Sustenta: as cinco lacunas estruturais — intenção semântica, delegação recursiva,
   integridade da identidade, opacidade de governança, sustentação operacional — e a
   afirmação de que mais engenharia sozinha não as fecha.
   Confiabilidade: média-alta. Preprint, sem revisão por pares registrada; é levantamento
   conceitual, não medição.

8. **Kang & Diponegoro — "Governance Gaps in Agent Interoperability Protocols: What MCP,
   A2A, and ACP Cannot Express"** (arXiv 2606.31498, 30/06/2026).
   `https://arxiv.org/abs/2606.31498`
   Sustenta: ausência universal de voto e preservação de dissenso, e a tese de que
   governança de comunidade de agentes é camada arquitetural faltante acima dos padrões.
   Confiabilidade: média. Preprint; taxonomia de seis dimensões proposta pelos próprios
   autores, sem validação externa.

9. **Especificação A2A — "Agent Discovery"** (documentação oficial do protocolo).
   `https://a2a-protocol.org/latest/topics/agent-discovery/`
   Sustenta: as três estratégias de descoberta (URI bem-conhecida, registro curado,
   configuração direta); que a especificação **não exige** verificação de autenticidade do
   agent card por assinatura; e as medidas que ela recomenda em lugar disso — card estendido
   autenticado, controle de acesso no endpoint (mTLS, rede, OAuth 2.0) e credencial dinâmica
   fora de banda em vez de segredo estático.
   Confiabilidade: alta — é a especificação falando de si mesma. É também fonte interessada:
   descreve as recomendações como suficientes, o que é juízo do próprio projeto.

10. **The Lyon Firm — "Who Is Legally Responsible When an AI Agent Makes a Mistake?"**
    `https://thelyonfirm.com/blog/agentic-ai-liability-legal-responsibility-autonomous-ai-agents/`
    Sustenta: o agente não é pessoa e não pode ser réu; responsabilidade recai sobre
    desenvolvedor (defeito de projeto, de fabricação, falha em advertir) e sobre quem opera;
    lei da Califórnia em vigor desde 01/01/2026 removendo a autonomia como defesa; Colorado
    AI Act em junho de 2026.
    Confiabilidade: média. É material de escritório de advocacia, com finalidade comercial;
    os exemplos que dá são hipotéticos, não casos julgados — e por isso este documento **não
    cita nenhum caso concreto de processo contra agente**, ao contrário do que resumos de
    busca sugeriam. Ver seção 8.

11. **Microsoft Learn — "What are agent identities?" (Entra Agent ID)** (página atualizada em
    15/06/2026). `https://learn.microsoft.com/en-us/entra/agent-id/what-are-agent-identities`
    Sustenta: identidade de agente como tipo distinto de service principal e de conta humana;
    o argumento de efemeridade e cardinalidade ("criados e destruídos milhares de vezes por
    dia"); acesso autônomo × delegado; o *sponsor* registrado; e a "conta de usuário do
    agente" pareada 1-para-1, usada na seção 6.
    Confiabilidade: alta como descrição do produto e do modelo conceitual; é documentação de
    fornecedor — descreve o que a Microsoft fez, não o que o mercado adotou. **A data de GA
    (abril/2026) e os planos de serviço de julho-agosto/2026 não estão nesta página**; vêm de
    cobertura secundária corroborada e estão declarados assim na seção 8.

12. **Confidata — "ANPD e Regulação de IA no Brasil: Guia 2026-2027"** (nota Brasil).
    `https://confidata.com.br/blog/anpd-regulacao-ia-brasil-2026-2027`
    Sustenta: o Mapa de Temas Prioritários da ANPD 2026–2027 (dez/2025), a ANPD como
    coordenadora do SIA e reguladora residual, o PL 2338/2023 aprovado no Senado em dez/2024
    com votação adiada na Câmara, e o sandbox com Metatext, Synapse e IA Greenworld em teste
    desde fev/2026.
    Confiabilidade: média — blog especializado, consistente com as demais fontes da busca,
    sem link para os atos originais. Nenhuma afirmação forte do mapa depende só dela.

13. **Northflank — "How to sandbox AI agents in 2026: MicroVMs, gVisor & isolation
    strategies"**. `https://northflank.com/blog/how-to-sandbox-ai-agents`
    Sustenta: Firecracker ~125 ms de boot e <5 MiB por VM, até 150 VMs/s por host; Kata ~200
    ms; gVisor 10–30% em I/O; e a recomendação de microVM ou Kata para código gerado por LLM.
    Confiabilidade: média-alta para os números de Firecracker, que são públicos e reproduzidos
    em várias fontes; é fornecedor de plataforma de contêiner, com interesse no tema.

**Abertas e descartadas como sustentação numérica** (existência do problema, não magnitude):
arXiv 2606.02240 (AgentRedBench, Dingeto & Leeney) e arXiv 2606.04425 (injeção armazenada
entre sessões, Xie et al., 31/07/2026). Os dois PDFs foram abertos; o extrator devolveu
metadados e nenhum resultado numérico. Não sustentam frase nenhuma das seções 1 a 10 e por
isso não recebem número. Ver seção 8, item 2.

**Uma fonte foi aberta e reprovada** por devolver HTTP 403 a cliente automatizado, e por
`TMI-0033` ela não entra aqui: está no anexo 12.G, com o endereço, o motivo e o que foi feito
com a afirmação que dependia dela. Ver também a seção 8, item 3.

## 12. Anexo — o levantamento bruto

### A. Respostas da Etapa 0 (entrevista), tal como recebidas

Esta rodada não teve interlocutor humano disponível. As respostas abaixo foram fornecidas
de antemão junto com a tarefa e tratadas como se tivessem vindo da entrevista. Nenhuma foi
inventada; nenhuma pergunta adicional foi feita.

- Tema: "Contenção, segurança e identidade de agentes autônomos" (tema 2 de 19; família
  "Agentes").
- Horizonte: 2031.
- Público: quem projeta mídia e interação.
- Recorte geográfico: global, com nota sobre o Brasil.
- Descartado de início: o que já é comum em produto de massa (régua da disciplina). Nenhuma
  outra exclusão.
- Disrupção suspeita: nenhuma — descobrir.
- Viés desejado: neutro.
- Ideias óbvias a excluir: as que serviriam para qualquer tema.
- O que faria o autor mudar de ideia: evidência de que a adoção já passou da maioria
  inicial (Rogers), ou de que a tecnologia não rompe nada (só melhora o que existe).
- Profundidade: três ordens. Modo: a partir de uma inovação/tema, não de um setor.
- Zona de interesse: Agentes. Login: jgpt. Skill: futurizacao-jgpt.

Consequência de "viés neutro" no documento: a seção 9 tem os três cenários com extensão
comparável e o indesejável recebeu sinal precoce concreto, em vez de ficar retórico. Se o
viés pedido fosse cético, `e4` teria saído com `confianca: media`.

### B. Buscas realizadas e o que cada uma devolveu

1. `agent identity authentication protocol AI agents 2026 standard` — devolveu o rascunho
   IETF, o survey arXiv 2604.23280, a peça da startwithidentity, MCP-I/KYA-OS doado à DIF
   em março de 2026, o concept paper do NCCoE de fevereiro de 2026, e os quatro modelos de
   identidade em comércio (Mastercard Agent Pay, Visa Trusted Agent Protocol, Google AP2,
   DIDs). **Os itens de comércio e o NCCoE não foram abertos e por isso não entraram no
   documento** — são pistas boas para quem continuar.
2. `prompt injection agent security 2026 OWASP LLM top 10` — devolveu as quatro análises do
   OWASP 2026 e quatro papers (AgentRedBench, Parallax, imunidade de ferramentas de
   desenvolvimento, injeção armazenada entre sessões).
3. `Cloudflare Web Bot Auth signed agents pay per crawl 2026` — devolveu os dois posts da
   Cloudflare, os docs de AI Crawl Control, e a análise da Crawlbase de onde vem a frase
   sobre pagamento não ser possível em cima do User-Agent. **A Crawlbase não foi aberta
   diretamente**; a formulação está na seção 4 como paráfrase do resumo de busca, não como
   citação de fonte lida.
4. `agent sandbox microVM Firecracker WebAssembly isolation per-agent 2026 cost latency` —
   devolveu Northflank, Blaxel, Spheron, Cosmonic, Zylos e o repositório
   `awesome-agent-runtime-security`. Um resultado mencionava sandbox de VM sub-milissegundo
   (0,8 ms de spawn, ~265 KB por sandbox, via fork copy-on-write de snapshot Firecracker);
   **não abri a fonte e por isso esse número não está no corpo do documento** — se for
   verdadeiro, empurra o wildcard "a caixa vira o produto" para muito mais perto.
5. `bot detection blocking assistive technology accessibility disabled users AI agent 2026`
   — a busca mais frustrante do levantamento. Devolveu quase só material comercial de
   fornecedores de gestão de bot (DataDome, HUMAN, Friendly Captcha, BigRock) e duas
   patentes. **Não encontrei nenhuma medição de falso positivo contra tecnologia
   assistiva** — nem número, nem estudo, nem relato organizado. A afirmação de que usuários
   de tecnologia assistiva "aparecem como anomalias" é reconhecida pelos próprios
   fornecedores, mas ninguém publica a taxa. Essa ausência é o que justifica a segunda
   pergunta do experimento na seção 10, e é provavelmente o achado mais acionável desta
   rodada.
6. `legal liability autonomous AI agent lawsuit contract entered by agent 2026` — devolveu
   Bloomberg Law, Squire Patton Boggs, The Lyon Firm e quatro papers (agência operacional,
   *Agents of Chaos*, governança descentralizada, responsabilidade civil interacional). O
   resumo de busca trouxe dois casos aparentemente concretos — um agente que teria
   comprometido 24.000 francos suíços em patrocínio no Fórum Econômico Mundial em março de
   2026, e a Nippon Life Insurance Company of America processando a OpenAI por exercício
   ilegal da advocacia, também em março de 2026. **Ao abrir a fonte que os deveria conter,
   o artigo só trazia cenários hipotéticos, sem nome de caso nem data.** Os dois casos
   foram removidos do documento. Ficam registrados aqui como pistas a verificar, não como
   fato.
7. `Brasil regulação inteligência artificial agentes autônomos PL 2338 ANPD 2026` —
   devolveu Confidata, Demarest, a página do PL no Senado, LBCA, Convergência Digital,
   IALocus, CriaAI e Mind Group. Abri só a Confidata.
8. `"Microsoft Entra Agent ID" general availability agent identity directory 2026` —
   devolveu o Microsoft Learn, o "what's new" do Entra, e três posts do Big Hat Group com
   datas de julho e agosto de 2026 (Agent ID para Dataverse, governança de identidade de
   agente, guidance atualizado). **Os posts do Big Hat Group não foram abertos.**
9. `agent-to-agent trust two agents negotiating different owners 2026 A2A protocol security`
   — devolveu SecureW2, OneReach, Tyk, Galileo, Stellagent, o paper de governança (7), o
   survey "Web of Agents" e "Identity Management for Agentic AI" (arXiv 2510.25819).
   **Nenhuma dessas foi aberta exceto o paper de governança**; a caracterização do A2A na
   seção 3 vem de resumo de busca e está marcada assim.

### C. Candidatas a disrupção-raiz e o veredito de cada uma (Etapa 2)

| Candidata | Veredito | Motivo |
|---|---|---|
| Identidade de agente como principal no diretório | **disruptiva** | Limiar de cardinalidade e efemeridade; GA, licença e plano de serviço próprios |
| Assinatura de requisição na web + preço por acesso | **disruptiva** | Verificabilidade cria capacidade que não existia; datável em 2025 |
| Isolamento por tarefa barato | **disruptiva** | Limiar numérico medido; inverte o default de revisar para isolar |
| Firewall, WAF, antivírus, OAuth humano | madura | Piso; não muda restrição nenhuma |
| CAPTCHA | madura | E já falhando no que promete |
| Guardrail por instrução de sistema / filtro de saída | descartada | Mitigação incremental de falha arquitetural; não cruza limiar |
| Detecção heurística de bot por fingerprint | madura | Existe há mais de uma década; o que muda é a assinatura, não a heurística |
| Personalidade jurídica do agente | emergente → seção 6 | Direito caminha na direção oposta |
| Seguro específico de agente | emergente → seção 6 | Discussão sem produto verificado |
| Reputação portátil entre plataformas | emergente → seção 6 | Possível, sem incentivo de adoção |
| DIDs / credenciais verificáveis para agente (MCP-I) | emergente → seção 6 | Em fundação, sem mudança estrutural forçada |
| Governança de comunidade de agentes (voto, dissenso) | emergente → seção 6 | Camada inteira ausente, sem caso de uso |

### D. Efeitos gerados e cortados

- *"Agentes desenvolvem linguagem própria de negociação, ilegível para humanos."* Cortado:
  sem mecanismo identificável ligando isso à cadeia causal das três raízes, e existe
  literatura suficiente mostrando que sistemas convergem para protocolos legíveis quando há
  auditoria obrigatória — que é exatamente o que D1 impõe. Era especulação livre, o teste da
  Etapa 3 a reprova.
- *"O agente passa a ter score de crédito."* Cortado do nível 3 de `e5`: é a mesma ideia de
  reputação portátil já listada como emergente na seção 6, e repetir seria inflar contagem.
- *"Sistemas operacionais passam a expor primitiva de agente."* Cortado: plausível, mas é
  4º nível a partir de `e7.1`, e o formato da disciplina fixa o teto em três. Anotado aqui
  como o fio mais promissor para quem quiser puxar.
- *"A injeção de prompt migra para o canal de identidade — o atacante assina."* Cortado
  como efeito e promovido a wildcard na seção 6 (ruptura da cadeia de confiança da borda),
  porque tem probabilidade baixa e impacto desproporcional, que é a definição de wildcard e
  não de efeito.
- Toda uma subárvore sobre **agentes em jogos e mundos persistentes** — NPC com identidade
  verificável, economia de itens entre agentes — foi gerada e descartada inteira: é um
  recorte de aplicação, e o modo pedido era a partir do tema, não do setor. Fica registrada
  como possível recorte estreito para outra rodada.

### E. Caminhos abandonados

- Tentei sustentar a magnitude do problema de injeção com número de paper e não consegui
  (seção 8, item 2). O caminho alternativo seria o próprio PromptTrace, citado na descrição
  do tema — não busquei por ele nesta rodada, e é a primeira coisa que eu faria em uma
  segunda passada.
- Não busquei relatórios de segurança dos fabricantes de modelo, sugeridos na descrição do
  tema. É onde provavelmente estão os únicos números de taxa de ataque com metodologia
  declarada.
- Não busquei CVEs de agentes. Seria a medida mais objetiva de "cada mão nova é uma
  superfície de ataque nova" — contagem de CVE por ano em ferramentas de agente — e não
  aparece em lugar nenhum deste documento.
- Não busquei nada sobre custo. Nenhuma das fontes diz quanto custa emitir e operar uma
  identidade de agente, e a seção 4 afirma que o limiar de D1 não é de custo. Essa
  afirmação não foi testada contra dado de preço.

### F. O que este documento não cobre, por fronteira de tema

Conforme a delimitação da disciplina: o ofício de programar com agentes (tema 1), avaliação
e observabilidade de acerto do agente (tema 3) e identidade humana sem terceiros / passkeys
(tema 17) ficaram de fora deliberadamente. A fronteira mais porosa foi com o tema 17: toda
a seção sobre prova de humanidade (`e6.2.1`) encosta em identidade humana, e a separação
que adotei é que aqui o objeto é a máquina que age — a identidade humana só aparece como
consequência da pressão que a máquina exerce sobre ela.

### G. Correções aplicadas depois da primeira montagem (rastro)

A primeira versão deste documento foi montada, validada no formato e só então conferida contra
as decisões em vigor da disciplina. Duas violações apareceram e foram corrigidas antes da
entrega. Registro o rastro porque a evidência descartada não pode sumir.

1. **Fonte 403 mantida na seção 11.** A análise da Aembit sobre o OWASP 2026 devolveu HTTP 403
   e permaneceu na lista numerada, marcada como "não verificada". `TMI-0033` manda tirar; a
   `TMI-0071` estende a regra a rodadas de skill de aluno. Tirada. O link fica registrado no
   fim da seção 11 e aqui.
2. **Afirmação órfã.** Com a fonte fora, "excessive agency subiu de 6º para 3º em 2026" ficaria
   sem base alcançável, o que `TMI-0025` proíbe. Fui aos primários do OWASP: a página do
   projeto (`genai.owasp.org/llm-top-10/`) exibe a edição de **2025** com *excessive agency* em
   6º, e a página da edição de **2026** (03/08/2026) confirma rankings atualizados sem publicar
   a ordem. A frase foi reescrita para o que os primários sustentam.
3. **Mesma falha no A2A**, corrigida indo à especificação (`a2a-protocol.org`, tópico de agent
   discovery), que sustenta o ponto com mais precisão do que o resumo de busca sustentava.

**Pista não verificada, deixada aqui de propósito:** quatro veículos independentes
(ReversingLabs, SC Media, Check Point, Aembit) afirmam que na edição de 2026 *excessive agency*
está em 3º, *unbounded consumption* subiu de 10º para 6º e *system prompt leakage* foi ampliado
e renomeado para *hidden context exposure*; e que a lista de 2026 foi influenciada em 25% por
dados de 6.639 incidentes reais, com 75% de peso de voto. **Nada disso foi confirmado em fonte
primária** — está tudo no PDF da edição de 2026, que não foi baixado. Se for verdadeiro, reforça
o argumento da seção 4 sobre D1 e não muda efeito nenhum da roda; a decisão de não usar foi de
procedimento, não de mérito.

Contagem de fontes atualizada de 10 para 13: saiu a Aembit, entraram as duas páginas oficiais
do OWASP e a especificação do A2A, e a nota Brasil (antes "9-b") passou a ter número próprio.

