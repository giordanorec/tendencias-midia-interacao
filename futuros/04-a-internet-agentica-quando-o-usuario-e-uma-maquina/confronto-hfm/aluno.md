---
tema: Internet agêntica e soluções online para usuários-máquina
slug: internet-agentica
autor_login: hgg
zona_de_interesse: Internet, mídia, interação e serviços digitais
data: 2026-09-16
horizonte: 2031
publico: eu mesmo
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 6
efeitos_ordem_2: 12
efeitos_ordem_3: 12
tecnologias_citadas: [MCP, A2A, Agentic Commerce Protocol, DPoP, interfaces para agentes, credenciais delegadas]
fontes: 8
confianca: media
experimento: Serviço online com interface humana e interface agêntica para diagnóstico, encaminhamento e execução autorizada
skill_usada: futurizacao
publico_ok: false
---

## 1. Resumo

Até 2031, a internet tende a ganhar um segundo tipo de usuário: o software que pesquisa, compara, preenche, coordena e executa tarefas em nome de uma pessoa ou organização. A transformação não se limita a compras. Educação, suporte, saúde administrativa, software, governo, mídia e trabalho poderão oferecer serviços consumíveis por agentes, com menos navegação manual e mais negociação de capacidades, restrições e resultados.

O mapa aceita três disrupções-raiz: interfaces nativas para agentes; delegação verificável de ação; e redes interoperáveis de agentes especializados. O cenário otimista adotado não significa adoção universal: significa que padrões abertos, permissões estreitas e boas interfaces podem ampliar autonomia e acesso sem eliminar o controle humano. O principal risco é a concentração de descoberta, identidade e reputação em poucos orquestradores.

## 2. O tema

Internet agêntica é uma internet em que um agente de software representa objetivos autorizados de uma pessoa ou organização diante de sites, APIs e outros agentes. “Usuário-máquina” descreve quem consome a interface; não atribui vontade, consciência ou responsabilidade jurídica à máquina.

“Produto online” está sendo usado em sentido amplo: qualquer solução ou serviço digital entregue pela internet, incluindo atendimento, diagnóstico, recomendação, educação, criação, análise, operação de software, intermediação e transação. Não é necessário haver um item comprável. O mapa inclui serviços públicos, mídia, trabalho e software B2B, mas não tenta prever AGI, consciência artificial ou o desaparecimento da navegação humana.

As respostas da entrevista foram específicas: horizonte 2031; público “eu mesmo”; mercado global; nenhum descarte explícito; viés otimista. O horizonte é limite dos prazos na roda. Futures Wheel organiza hipóteses causais, não calcula probabilidades. Hype Cycle e Quadrante Mágico são referências críticas: o primeiro descreve narrativas de expectativa, e o segundo compara fornecedores em categorias já formadas; nenhum deles é usado como previsão.

## 3. Onde isso está hoje

O Model Context Protocol (MCP) define hosts, clientes e servidores para compartilhar contexto e expor recursos, prompts e ferramentas a aplicações de modelos. Sua especificação chama atenção para consentimento, privacidade e risco de execução arbitrária. MCP demonstra uma direção de integração, mas não resolve reputação, responsabilidade ou semântica de cada serviço.

O Agent2Agent (A2A) especifica descoberta por Agent Cards, mensagens, tarefas, artefatos, streaming e notificações para agentes independentes. A proposta permite que serviços especializados colaborem sem expor memória ou ferramentas internas. Especificação, contudo, não equivale a uma rede líquida de agentes confiáveis.

O Agentic Commerce Protocol (ACP), em beta, mostra a tentativa de estruturar a relação entre comprador, agente e empresa. Embora seu foco seja comércio, o padrão é evidência útil de uma tendência maior: serviços começam a publicar capacidades e etapas para serem consumidos por agentes, não apenas por páginas humanas.

O Operator, da OpenAI, demonstrou automação de navegador. Essa rota é útil como transição, mas clicar em uma interface humana é mais frágil e menos expressivo do que declarar capacidades, limites, estado e resultado. A Cloudflare já separa, em sua infraestrutura, crawlers de busca, treinamento e agentes, e também descreve permissões por recurso para agentes.

DPoP (RFC 9449) vincula tokens a chaves para reduzir o impacto de tokens roubados. É uma peça de segurança, não identidade ou mandato completo. O NIST AI RMF oferece gestão voluntária de riscos. Portanto, o presente já tem componentes, mas ainda não tem um padrão consolidado para a relação completa entre agente, serviço, autorização, evidência e responsabilidade.

## 4. As disrupções-raiz

### 4.1 Interfaces nativas para agentes

**Maturidade:** emergente.  
**O que rompe:** a solução online deixa de ser apenas uma página para olhos humanos e passa a expor capacidades, regras, estado, evidência e formatos negociáveis para agentes. Isso vale tanto para reservar uma consulta quanto para abrir um chamado, matricular-se em um curso ou operar uma ferramenta.

**Por que agora:** MCP, A2A e ACP fornecem vocabulários iniciais para ferramentas, tarefas, artefatos e fluxos estruturados. Ainda falta semântica comum entre domínios, versionamento e compromisso com a equivalência entre a experiência humana e a agêntica.

### 4.2 Delegação verificável de ação

**Maturidade:** emergente.  
**O que rompe:** o modelo em que cada ação depende de credenciais amplas e de um clique direto. O agente recebe mandato limitado por objetivo, recurso, duração, orçamento, risco e necessidade de confirmação.

**Por que agora:** DPoP, permissões por recurso e protocolos de checkout apontam para credenciais menos reutilizáveis e para trilhas de autorização. Ainda faltam revogação compreensível, prova de intenção, resolução de disputas e responsabilidade por erros.

### 4.3 Redes interoperáveis de agentes e serviços

**Maturidade:** experimental/emergente.  
**O que rompe:** o serviço monolítico e a integração ponto a ponto. Um agente pode descobrir um especialista, delegar trabalho, receber um artefato e combinar o resultado com outros serviços.

**Por que agora:** A2A torna explícitos descoberta, tarefas longas e colaboração; MCP conecta agentes a contexto e ferramentas. Falta uma economia de reputação, observabilidade entre fronteiras, custo previsível e proteção contra agentes maliciosos.

**Candidatos recusados por maturidade:** HTTP, HTML, JSON, APIs, webhooks, OAuth/OIDC, JWT, busca, crawlers, marketplaces, automação de navegador e chatbots foram tratados como infraestrutura ou presente. São importantes, mas já são amplamente usados pelos líderes e não há debate técnico real sobre substituição integral até 2031. RAG, LLM e copilot foram recusados como raízes porque são componentes, não uma ruptura estrutural da internet.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: Interfaces nativas para agentes
    efeitos:
      - id: e1
        ordem: 1
        efeito: Serviços online publicam capacidades, restrições, estado e resultados em formatos consumíveis por agentes
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: Equipes de produto medem tarefas concluídas, erro de interpretação e intervenção humana além de cliques
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Contratos de serviço passam a incluir métricas de sucesso e evidência específicas para execução agêntica
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: Descoberta de serviços migra parcialmente de páginas e anúncios para catálogos consultados por orquestradores
            sinal: medio
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Provedores de soluções disputam regras auditáveis para aparecer em recomendações de agentes
                sinal: medio
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: Sites separam preferências para busca, treinamento, resumo, atendimento e visita de agentes
        sinal: forte
        prazo: 2027
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Criadores negociam acesso automatizado por finalidade, profundidade, atribuição e remuneração
            sinal: medio
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Camadas de preferência e medição tornam-se infraestrutura de poder entre produtores e plataformas
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: Serviços sem dados estruturados perdem visibilidade em fluxos automatizados de descoberta e atendimento
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Pequenos provedores terceirizam sua presença agêntica e dependem de integradores
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: Delegação verificável de ação
    efeitos:
      - id: e3
        ordem: 1
        efeito: Pessoas autorizam agentes a pesquisar, preencher, encaminhar e executar tarefas dentro de escopos explícitos
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Serviços exibem objetivo, evidência, limites e ponto de confirmação antes de ações de alto impacto
            sinal: forte
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Históricos de decisão tornam-se parte do suporte, da contestação e da prova de consentimento
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: Serviços adotam credenciais temporárias e específicas em vez de permissões amplas para agentes
            sinal: medio
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: A competição se desloca para quem controla autorização revogável e relação de confiança com o usuário
                sinal: medio
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: Soluções digitais classificam ações por risco e oferecem confirmação humana seletiva
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: O risco da intenção passa a decidir quando uma interface humana é obrigatória
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Setores regulados exigem trilhas de auditoria, reversão e revogação testáveis para agentes
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Serviços negociam formato, prazo, substituição e limites com o agente antes de concluir uma tarefa
            sinal: medio
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Termos de serviço passam a definir deveres de representantes automatizados
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: Redes interoperáveis de agentes e serviços
    efeitos:
      - id: e5
        ordem: 1
        efeito: Agentes delegam tarefas longas a serviços especializados e recebem artefatos estruturados
        sinal: forte
        prazo: 2028
        confianca: baixa
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: Catálogos avaliam capacidade, disponibilidade, custo, autorização e histórico de erro de agentes
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: Provedores de descoberta e certificação concentram poder sobre quais serviços são encontrados
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: Pequenas organizações oferecem soluções especializadas sem criar uma integração para cada plataforma
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: A oferta se fragmenta em componentes, enquanto cobrança e observabilidade se concentram nos hosts
                sinal: medio
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: Falhas de contexto ou instruções maliciosas atravessam cadeias de agentes com aparência de tarefa legítima
        sinal: forte
        prazo: 2027
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Hosts introduzem isolamento, limites de ferramenta, confirmação escalonada e procedência entre agentes
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Agentes sem identidade, escopo e evidência verificáveis perdem acesso a serviços profissionais
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Organizações restringem composição aberta a agentes e servidores avaliados
            sinal: medio
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Corredores certificados tornam-se a forma dominante de interoperabilidade profissional
                sinal: medio
                prazo: 2031
                confianca: baixa
```

As três rodas se reforçam: interfaces estruturadas tornam serviços encontráveis; delegação torna possível executá-los; redes interoperáveis ampliam a variedade de soluções. A cadeia continua depois de 2031, sobretudo em trabalho, regulação e concentração, mas foi cortada no terceiro nível.

## 6. Sinais fracos e wildcards

**Sinais fracos:** serviços que publicam capacidades e limites; respostas com evidência e procedência; permissões por recurso; formulários negociáveis; logs exportáveis; catálogos de agentes com histórico de incidentes; e separação entre preferências de busca, treinamento e visita agêntica.

**Wildcard:** uma cadeia de agentes altera dados, envia uma comunicação sensível ou presta um serviço inadequado por causa de instrução maliciosa em uma página. A reação pode acelerar padrões de isolamento e certificação. Outro wildcard positivo é uma plataforma pública ou cooperativa que ofereça descoberta e identidade interoperáveis sem cobrar pedágio desproporcional de pequenos serviços.

## 7. Contra o próprio mapa

`e1` foi inicialmente classificado como confiança alta, mas rebaixado para média: protocolos não obrigam empresas a manter uma interface agêntica, e a integração pode não compensar para serviços de baixo volume.

`e3` também foi inicialmente alta e rebaixado para média: delegação verificável depende de confiança, responsabilidade e revogação, não apenas de tokens. A adoção pode se concentrar em tarefas reversíveis e de baixo risco.

`e5` permanece baixa: A2A demonstra uma linguagem de colaboração, não uma economia interoperável. Hosts podem preferir redes fechadas, e serviços podem não querer expor dados ou margem.

O viés otimista favoreceu efeitos de acesso, autonomia e participação de pequenos provedores. A força contrária é explícita: concentração de orquestradores, exclusão por custo de integração, erro de contexto, regulação e perda de tráfego humano. O cenário desejável não é tratado como provável.

## 8. O que a máquina errou

Uma formulação preliminar tratava “produto” como loja, checkout e compra. Isso era estreito para o recorte solicitado. O mapa foi refeito para incluir soluções e serviços: atendimento, educação, software, governo, mídia e operações digitais.

Também seria erro chamar DPoP de identidade de agente. A RFC 9449 descreve prova de posse de chave e proteção contra replay; não resolve mandato, intenção ou responsabilidade. O documento mantém essa distinção.

As fontes primárias consultadas demonstram especificações e lançamentos, não adoção global. Por isso não foram incluídos números de mercado, volume de transações ou previsões de participação que não puderam ser verificados.

## 9. Três cenários para 2031

**Provável:** agentes complementam interfaces humanas em atendimento, pesquisa, software, educação e serviços administrativos. Adoção é desigual; protocolos coexistem; ações de maior risco continuam com confirmação humana.

**Desejável:** serviços oferecem interfaces agênticas abertas e equivalentes, com permissões mínimas, evidência, revogação e histórico compreensível. Pessoas mantêm controle, pequenos provedores conseguem ser descobertos e a rede reduz tarefas repetitivas sem transformar um único orquestrador em dono da internet.

**Indesejável:** poucos hosts controlam descoberta, identidade e reputação. Serviços tornam-se invisíveis sem pagar integração, agentes agem com autoridade opaca e usuários não conseguem revisar ou desfazer resultados. O sinal precoce é a ausência de logs exportáveis e alternativa humana.

## 10. O experimento

Construir um serviço online de diagnóstico e encaminhamento — por exemplo, classificar uma necessidade de suporte, coletar dados mínimos, sugerir próximos passos e abrir um chamado — com interface humana e interface agêntica. O agente deve declarar suas permissões, pedir confirmação para ações de alto impacto, anexar evidência e permitir revogação.

O experimento testa superfície agêntica, delegação e composição, não apenas um chatbot. Comparar um fluxo de navegador com um fluxo estruturado permite medir conclusão, erro, intervenção, compreensão do usuário, acessibilidade e facilidade de desfazer. Introduzir uma instrução ambígua testa limites de autoridade.

O mapa ganha força se o fluxo agêntico reduzir trabalho sem esconder decisões e se participantes compreenderem o que autorizaram. Eu mudaria de ideia se o custo de manter a interface superasse o benefício, se a interface humana fosse consistentemente mais segura ou se pequenas mudanças no serviço quebrassem a interpretação.

## 11. Fontes

1. Anthropic, “Introducing the Model Context Protocol”, https://www.anthropic.com/news/model-context-protocol — origem e arquitetura inicial do MCP; fonte primária, alta para o que o projeto declara, não para adoção futura.
2. Model Context Protocol, especificação, https://modelcontextprotocol.io/specification/2025-06-18 — hosts, clientes, servidores, ferramentas e princípios de consentimento; especificação primária, alta para o protocolo.
3. A2A, especificação 1.0.0, https://a2a-protocol.org/latest/specification/ — Agent Cards, tarefas, artefatos e colaboração; documentação do projeto, alta para a proposta, insuficiente para adoção.
4. Google Developers Blog, https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/ — lançamento, princípios e parceiros anunciados do A2A; fonte primária, alta para o anúncio, média para impacto.
5. Agentic Commerce Protocol, https://github.com/agentic-commerce-protocol/agentic-commerce-protocol — conexão entre comprador, agente e empresa e status beta; fonte primária, alta para escopo, baixa para adoção.
6. OpenAI, “Introducing Operator”, https://openai.com/index/introducing-operator/ — automação de navegador por agente; fonte primária, alta para a funcionalidade descrita, baixa para generalização.
7. Cloudflare, controles de crawlers e agentes, https://blog.cloudflare.com/accountable-mixed-use-ai-crawlers/ — separação entre busca, treinamento e agentes; fonte primária, alta para o recurso descrito.
8. IETF, RFC 9449 (DPoP), https://www.rfc-editor.org/rfc/rfc9449.html — vinculação de tokens a chave e defesa contra replay; padrão técnico, alta para o mecanismo.

## 12. Anexo — o levantamento bruto

### Entrevista

- Horizonte: 2031.
- Público: eu mesmo.
- Região: mercado global.
- Descartes: nenhum.
- Viés: otimista.
- Correção de escopo: produto inclui soluções e serviços online, não somente bens compráveis.

### Candidatos avaliados

- **Interfaces nativas para agentes:** aceita como ruptura de produto e descoberta.
- **Delegação verificável:** aceita como ruptura de autorização e execução.
- **Redes agente-agente:** aceita como ruptura de composição de serviços.
- **MCP:** infraestrutura habilitadora, não raiz isolada.
- **A2A:** protocolo habilitador da terceira raiz, não prova de mercado formado.
- **ACP:** evidência de um caso de uso, não escopo do mapa.
- **Browser-use:** transição útil, mas não ruptura suficiente.

### Candidatos recusados por maturidade

HTTP, HTML, JSON, APIs, webhooks, OAuth/OIDC, JWT, busca, crawlers, marketplaces, automação de navegador, chatbots, LLM, RAG e copilots foram recusados como raízes. Já são infraestrutura, práticas consolidadas ou componentes de produto; nenhum deles, isoladamente, descreve a mudança estrutural investigada.

### Limitações

As fontes são sobretudo especificações e anúncios dos próprios projetos. Elas provam existência, desenho e intenção, mas não adoção global. Não foram inventados números de mercado. A roda tem três níveis, 6 efeitos de primeira ordem, 12 de segunda e 12 de terceira; todos os prazos estão entre 2027 e 2031. A autocrítica rebaixou os efeitos de maior confiança quando a evidência era apenas de protocolo ou piloto.
