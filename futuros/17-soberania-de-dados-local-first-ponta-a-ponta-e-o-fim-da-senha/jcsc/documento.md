---
tema: "Soberania de dados: local-first, ponta-a-ponta e o fim da senha"
slug: soberania-de-dados-local-first-ponta-a-ponta-e-o-fim-da-senha
autor_login: jcsc
zona_de_interesse: Pessoas e dados
data: 2026-09-12
horizonte: 2031
publico: "quem projeta mídia e interação"
recorte_geografico: global
disrupcoes_raiz: 3
efeitos_ordem_1: 9
efeitos_ordem_2: 17
efeitos_ordem_3: 17
tecnologias_citadas: [local-first, CRDT, Automerge, Beelay, Zero, ElectricSQL, PowerSync, Convex, InstantDB, Jazz, SQLite, WebAuthn, passkeys, FIDO2, CXP, CXF, HPKE, Keyhive, BeeKEM, end-to-end encryption, zero-knowledge, self-hosting, AT Protocol, PDS, DID, Private Cloud Compute, Budgero, gov.br, LGPD]
fontes: 20
confianca: media
experimento: "Cofre de bolso — app local-first de notas financeiras, sem conta e com servidor cego, cujo único caminho de recuperação é um cartão de chave impresso; testado em sala com perda deliberada do aparelho"
skill_usada: futurizacao-jcsc
publico_ok: false
---

## 1. Resumo

Três rupturas convergem na arquitetura do software pessoal: o dado volta a morar no dispositivo e o servidor vira cache; o servidor deixa de conseguir ler o que guarda; e a senha acaba, levando junto o intermediário que devolvia a conta perdida. Até 2031 o efeito mais provável não é a soberania individual prometida, e sim um deslocamento de poder: do provedor de identidade para o cofre de chaves, do servidor de aplicação para o motor de sincronização, e — em países com identidade digital pública — da big tech para o Estado. O mapa é cético por evidência, não por temperamento: em 8 de maio de 2026 a Meta removeu a criptografia ponta-a-ponta das mensagens do Instagram alegando baixa adesão, e a FIDO Alliance registrou 5 bilhões de passkeys em uso com 75% das pessoas tendo habilitado ao menos uma — ou seja, a peça que parecia emergente virou padrão do incumbente, enquanto a peça que rompe de verdade (servidor cego em produto de massa) recuou. Para quem projeta mídia e interação, o campo de trabalho nos próximos cinco anos é menos o login e mais o que vem depois dele: recuperação, herança, divergência entre dispositivos e o desenho de um produto que não pode olhar para dentro do próprio banco.

## 2. O tema

Soberania de dados, aqui, é uma questão de **arquitetura**, não de política de privacidade. São três camadas que só recentemente ficaram baratas o suficiente para andarem juntas: **local-first** (o dado mora no dispositivo e sincroniza, em vez de morar no servidor e ser exibido), **ponta-a-ponta** (o servidor não consegue ler o que guarda) e **passwordless** (a autenticação é criptográfica, feita pelo próprio aparelho, sem provedor terceiro). Cada uma existe isolada há anos. O objeto deste mapa é o que acontece quando elas se combinam e desmontam o pressuposto de que a empresa é dona do seu dado, da sua conta e da sua identidade.

Encosta em mídia e interação em pelo menos três pontos concretos. Primeiro, na linguagem de interface: sem servidor como fonte da verdade, "salvar", "carregando" e "conflito" deixam de significar o que significavam, e o estado divergente entre dois aparelhos passa a ser caso normal em vez de erro. Segundo, no modelo de negócio que sustenta produto de mídia: personalização, busca global, recomendação e moderação pressupõem um servidor que lê. Terceiro, na experiência de perda — quem perde o aparelho, quem morre, quem precisa provar quem é — que hoje é resolvida por um humano do outro lado e amanhã pode não ser resolvida por ninguém.

Merece mapa de futuro, e não levantamento de estado da arte, porque a pergunta interessante não é "o que existe" (existe muito, e está catalogado) mas "o que quebra quando isso vira padrão" — e porque, como a seção 7 detalha, há evidência recente e forte de que **pode não virar**. Um levantamento de estado da arte de 2026 diria "local-first está crescendo". Só um mapa de efeitos mostra que o mesmo movimento que promete tirar o intermediário está, na prática, criando um intermediário novo.

### A entrevista (Etapa 1 da skill)

A skill exige entrevista antes de qualquer conteúdo, e proíbe assumir padrão em silêncio. As cinco perguntas foram feitas e respondidas. Nesta rodada o respondente **não foi o autor da skill**: a rodada é comparativa e automatizada, e as respostas vieram do enunciado da disciplina, em nome dele. Isso está registrado aqui porque muda o peso do resultado — nenhuma resposta foi "tanto faz", mas nenhuma foi negociada em conversa também.

| Pergunta | Resposta |
|---|---|
| 1. Horizonte temporal | 2031 |
| 2. Público-alvo | Quem projeta mídia e interação |
| 3. Recorte geográfico | Global, com uma nota sobre o Brasil |
| 4. Descartes explícitos | O que já é comum em produto de massa (a régua da disciplina). Nenhuma outra exclusão. Ideias óbvias que serviriam para qualquer tema também ficam de fora |
| 5. Viés desejado | Neutro |

Três respostas adicionais foram dadas fora do roteiro das cinco perguntas e são tratadas como parte do contrato: a profundidade é de três ordens (o padrão da skill), o modo é "a partir de uma inovação/tema" e não a partir de um setor, e o critério declarado de mudança de ideia é **"evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a tecnologia não rompe nada"**. Esse último critério foi acionado durante a Etapa 2 e mudou o mapa — ver seções 4, 7 e 8.

## 3. Onde isso está hoje

### A camada de identidade já virou padrão do incumbente

Em 7 de maio de 2026, no World Passkey Day, a FIDO Alliance divulgou 5 bilhões de passkeys em uso no mundo, 90% de conhecimento declarado, **75% das pessoas com ao menos uma passkey habilitada** e 49% usando regularmente quando disponível; do lado corporativo, 68% das organizações declararam ter implantado ou estar implantando passkeys para funcionários. Os dados vêm de dois estudos da Sapio Research em abril de 2026, com 11.000 consumidores e 1.400 decisores em dez países, margem de ±0,9 e ±2,6 pontos.

O mesmo relatório traz o número que importa mais para este mapa: **apenas 28% das organizações chegaram a passwordless completo**, enquanto 82% dizem que esse é o objetivo final e **57% ainda dependem de métodos "phishable" no login primário**. Ou seja: a passkey chegou; a senha não foi embora. Ela recuou para o segundo plano — o fluxo de recuperação.

E é lá que o sistema está quebrado. O trabalho "The State of Passkeys: Studying the Adoption and Security of Passkeys on the Web", apresentado no 35º USENIX Security Symposium por pesquisadores da Ruhr-Universität Bochum, da Hochschule Heilbronn e da Universidade de Wuppertal, avaliou **103 implantações reais de passkey com 28 verificações derivadas da especificação WebAuthn: nenhuma passou em todas**. Dezoito tinham vulnerabilidades de severidade crítica; 53, de severidade alta. Cinco sites sequer verificavam a assinatura, 22 não validavam o desafio corretamente e 57 ignoravam o contador de assinaturas. A leitura do analista que resume o estudo é a que interessa aqui: o protocolo está certo, a implantação é que não está — segurança é propriedade de implementação, não garantia de protocolo.

A portabilidade da credencial, que é a peça que decide se "sem terceiros" é verdade, está em padronização: o **Credential Exchange Format (CXF)** ficou em Review Draft em março de 2025 e o **Credential Exchange Protocol (CXP)**, que transporta a credencial cifrada com HPKE, mirava padronização no início de 2026. A Apple já entregou transferência de credencial no mesmo dispositivo em iOS/macOS 26 usando CXF. A própria FIDO descreve as especificações como "um formato padrão para transferir todo tipo de credencial em um gerenciador de credenciais... seguro por padrão".

### A camada de dado saiu da pesquisa e virou produto — com limites declarados

O ensaio fundador é de 2019: "Local-First Software: You Own Your Data, in spite of the Cloud", de Martin Kleppmann, Adam Wiggins, Peter van Hardenberg e Mark McGranaghan, apresentado no PAPOC. Ele define sete ideais — não depender de servidor remoto, desempenho local, persistência sem sincronização, acesso universal, controle do usuário, longevidade e colaboração — e, o que é mais relevante sete anos depois, lista o que **não** resolveu: segurança, controle de acesso entre réplicas sem autoridade central, compartilhamento seletivo e modelo de negócio.

Em 8 de junho de 2026 a Rocicorp lançou o **Zero 1.0**, primeira versão estável de seu motor de sincronização, depois de quase dois anos, mais de 50 releases e centenas de correções. Os limites declarados são tão informativos quanto o lançamento: só PostgreSQL, views não sincronizadas, tipos de coluna sem suporte, API cliente que não reage a erro ou atualização rejeitada, bundle de 232 KB gzipped e SSR ainda no roteiro. O fundador Aaron Boodman descreve a força do produto como ser "apenas um cache sofisticado" que não pode corromper dado — e aponta quem quer montagem de fato descentralizada e ponta-a-ponta para outro projeto, o Jazz. O campo em volta tem ElectricSQL, InstantDB, PowerSync e Convex.

A **Local-First Conf 2026**, terceira edição, aconteceu em Berlim de 12 a 14 de julho. A programação é o melhor termômetro social disponível do campo: no dia 1, Kleppmann com "Local-first in an unstable world", Jake Lazaroff com "Building more resilient local-first software with atproto", um painel "Data Ownership Beyond Local First", e três palestras que são o casamento com o tema vizinho de IA local — "Agents on the canvas", "Plaintext-first apps in the age of agents" e "Frontier LLM results, on device". No dia 2, "Local Digital Objects using Zero-knowledge Cryptography", "Iroh: syncing terabytes of data, peer-to-peer", "Tiles: Own your AI with local models and open protocols" e — sinal honesto de um campo que ainda discute a própria premissa — "Local first collaborative Spreadsheets. Are CRDTs useful?".

### O controle de acesso sobre dado que o servidor não lê ainda é pesquisa

O buraco apontado em 2019 tem hoje um endereço: o projeto **Keyhive**, do Ink & Switch (Brooklyn Zelenka, John Mumm, Alex Good; 2024–2026), que traz controle de acesso por capacidades e criptografia ponta-a-ponta para dado local-first, com um mecanismo de acordo de chave de grupo chamado **BeeKEM**, co-desenhado com o próximo protocolo de sincronização do Automerge, o **Beelay**, capaz de sincronizar cargas cifradas que o servidor não consegue decifrar.

O caderno de pesquisa do projeto é explícito sobre o que **não** está resolvido. Sem servidor central não há serialização automática das operações, e o protocolo precisa funcionar em peer-to-peer, sneakernet ou servidor de sincronização. Existe um parâmetro de segurança em que tolerar concorrência **elimina o sigilo futuro** — o texto reconhece que há contextos "onde preocupações de engenharia dominam preocupações de segurança". E aparece uma classe de ataque que só existe no cenário descentralizado, o *cross-fork attack*: comprometer um usuário em um ramo para atacar o segredo do grupo em outro. Isto não é produto. É estado da arte de laboratório, com a honestidade de dizer que é.

### E o mercado de massa andou para trás

Em **8 de maio de 2026** a Meta desligou globalmente as conversas com criptografia ponta-a-ponta nas mensagens diretas do Instagram. A justificativa oficial foi a baixa adesão do recurso, que nunca foi padrão e exigia ativação conversa a conversa. WhatsApp, Messenger e Signal seguem com ponta-a-ponta por padrão; o Instagram voltou ao modelo em que a Meta pode acessar conteúdo de mensagens, imagens, vídeos e áudios — com a empresa afirmando que não os usa para treinar IA.

Do outro lado, a IA foi na direção contrária da nuvem cega: a **Private Cloud Compute** da Apple, anunciada em 10 de junho de 2024, promete computação sem estado (dado não retido nem em log), ausência de acesso privilegiado de operação, não-alvejabilidade e transparência verificável, com imagens de produção publicadas para pesquisa em até 90 dias num log à prova de adulteração. É a tentativa de manter a garantia do dispositivo quando o cômputo precisa sair dele — e é, por construção, uma garantia de processo, não de arquitetura: alguém ainda decifra para computar.

### O modelo de negócio é o problema aberto de sempre

Um fio do Hacker News em que um desenvolvedor pergunta como monetizar aplicação verdadeiramente local-first resume o campo melhor do que qualquer relatório: a referência de todo mundo é o Obsidian (app gratuito, sincronização paga), a expectativa de preço em consumidor é a da app store, licença perpétua não cobre custo operacional contínuo, e a própria cultura FOSS da comunidade dificulta cobrar. O caminho que aparece é B2B ou camada gratuita com recurso pago.

A forma concreta desse caminho já está no ar. O **Budgero**, um dos produtos levantados pela turma, afirma que o dado financeiro "é criptografado no seu dispositivo antes de sincronizar", que a empresa "não consegue ler o conteúdo", que é código aberto sob AGPL-3.0 e livre para auto-hospedar, e cobra US$ 4/mês ou US$ 35/ano pela hospedagem, com backup completo em SQLite ou CSV. É exatamente o par "grátis se você hospeda, pago se eu hospedo" — e é a resposta prática à pergunta "como se ganha dinheiro sem ler o dado".

### A nota sobre o Brasil: a identidade está indo para o lado contrário

O recorte é global, mas o contraste brasileiro é forte demais para ficar de fora. Enquanto o discurso local-first empurra a identidade para o indivíduo, o Brasil a consolidou no Estado. Em 2 de julho de 2026 o gov.br passou de **548 milhões de assinaturas digitais** no ano, superando três meses antes a meta de 540 milhões para o fim de 2026, numa plataforma usada por **177 milhões de pessoas**. Desde maio de 2024, 14 bancos — Banco do Brasil, Banrisul, Bradesco, BRB, Caixa, Sicoob, Santander, Itaú, Agibank, Sicredi, Mercantil, PicPay/Original, BTG Pactual e Nubank — permitem entrar no gov.br com a credencial bancária, gerando conta nível prata com acesso a mais de 4 mil serviços.

Do lado regulatório, a ANPD foi transformada em autarquia de natureza especial pela **Lei nº 15.352, de 25 de fevereiro de 2026**, com autonomia funcional, técnica, decisória, administrativa e financeira. E a Resolução CD/ANPD nº 32, de 26 de janeiro de 2026, é o ato mais recente listado na página oficial de regulamentações. Não há, nessa lista, regulamento específico de portabilidade de dados — o direito existe na LGPD, a regulamentação dele ainda não apareceu.

## 4. As disrupções-raiz

O critério de recusa da skill é explícito: **trate como presente, não futuro, qualquer tecnologia ou prática já consolidada como padrão de mercado — amplamente adotada pelos líderes do setor E sem debate técnico real e atual sobre sua substituição no horizonte considerado.** Aplicado a este tema, ele derrubou o candidato mais óbvio.

### Candidato recusado por maturidade: passkeys/WebAuthn como método de login

Esta é a recusa que define o mapa, e ela contraria a leitura inicial que o enunciado do tema sugere. Em 2026 a passkey é adotada pelos líderes (Apple, Google, Microsoft), está em 5 bilhões de instâncias, 75% das pessoas têm ao menos uma habilitada, a Microsoft criou contas novas sem senha por padrão e não há **nenhum** debate real sobre substituir WebAuthn por outra coisa até 2031. Pelos dois lados do critério, é madura. Pela régua da disciplina ("o que já é comum em produto de massa"), também.

Isso aciona exatamente o critério de mudança de ideia declarado na entrevista — "evidência de que a adoção já passou da maioria inicial (Rogers)". Passou. A passkey não é a disrupção; é o novo incumbente. O que permanece emergente, e é o que entra abaixo como D3, é a consequência de segunda ordem dela: **o desaparecimento do intermediário que devolve a conta**.

### Outros candidatos recusados por maturidade

OAuth2/OIDC, JWT, bcrypt e argon2 (o próprio `argon2`, escolha nº 1 da entrega de desenvolvimento do autor, é o exemplo canônico de maduro); TLS/HTTPS; backup criptografado no servidor; 2FA por SMS; "login com Google" como identidade primária; gerenciador de senhas; biometria local como desbloqueio; criptografia ponta-a-ponta em mensageria (Signal, WhatsApp — padrão desde a década passada); SQLite embarcado no cliente; cache offline de PWA; e auto-hospedagem via Docker. Nenhum deles rompe nada em 2031: são o chão sobre o qual as três disrupções abaixo se apoiam.

### D1 — O dispositivo volta a ser a fonte da verdade, e o servidor vira cache

**O que rompe.** A inversão do contrato de 15 anos de SaaS: o dado deixa de morar no servidor e ser exibido no cliente, e passa a morar no cliente e ser sincronizado pelo servidor. Rompe a premissa de que estar offline é um estado degradado, a de que latência de rede é custo inevitável de interação, e a de que encerrar o serviço encerra o acesso ao dado.

**Por que agora e não há cinco anos.** Porque a peça que faltava — o motor de sincronização — deixou de ser um projeto por empresa e virou produto comprável com versão estável: Zero 1.0 em junho de 2026, ao lado de ElectricSQL, PowerSync, InstantDB e Convex. Em 2021 quem quisesse local-first escrevia o próprio CRDT e a própria camada de rede.

**O que ainda falta.** Escrita offline de verdade (o Zero rejeita escrita em estado desconectado), suporte a mais de um banco, tipos de coluna completos, reação do cliente a atualização rejeitada, renderização no servidor. E uma resposta honesta à pergunta que a própria comunidade colocou no palco em 2026: CRDT é mesmo útil para o caso geral, ou só para texto colaborativo?

### D2 — O servidor deixa de conseguir ler o que guarda, e o controle de acesso passa a viver no dado

**O que rompe.** Não é a cifra em trânsito nem em repouso — isso é maduro. É o controle de acesso: hoje "compartilhar" é uma linha numa tabela de permissões do servidor, e por isso o servidor precisa poder ler. Com capacidades criptográficas delegadas (Keyhive) e acordo de chave de grupo tolerante a concorrência (BeeKEM), compartilhar vira delegar uma chave, e o servidor sincroniza carga que não decifra (Beelay). Rompe o modelo de negócio que depende de ler o dado, a busca no servidor, a recomendação, a moderação e a própria capacidade de a empresa responder a uma ordem judicial com conteúdo.

**Por que agora e não há cinco anos.** Porque o ensaio de 2019 listava controle de acesso como problema não resolvido, e em 2024–2026 ele ganhou um programa de pesquisa com protocolo publicado, implementação em Rust e integração desenhada com o Automerge.

**O que ainda falta.** Quase tudo do que separa pesquisa de produto: auditoria de segurança, resposta ao *cross-fork attack*, e uma decisão sobre o trade-off em que tolerar concorrência elimina o sigilo futuro. E falta demanda: a Meta acabou de desligar ponta-a-ponta no Instagram por falta de adesão, o que é evidência direta contra esta disrupção — ver seção 7.

### D3 — A conta deixa de ter um intermediário que a devolve

**O que rompe.** Com a senha, existia sempre alguém do outro lado com poder de devolver o acesso: o provedor, o suporte, o e-mail de reset. Esse alguém era simultaneamente a maior vulnerabilidade (é por ali que se ataca) e a rede de segurança de toda a população que perde aparelho, esquece coisas, adoece ou morre. Tirar a senha tira os dois. Rompe o suporte como função, a herança digital como pedido posterior da família, e a posição do provedor de identidade como dono de fato da conta — que se desloca para quem guarda a chave.

**Por que agora e não há cinco anos.** Porque a passkey venceu como método (é por isso que ela está recusada como disrupção acima) e só agora o problema seguinte fica visível em escala: 28% das organizações em passwordless completo, 57% ainda com método phishable no login primário, 103 implantações auditadas e nenhuma aprovada, e a Microsoft tratando senha, pergunta secreta e caminho fraco de recuperação como superfície de ataque a remover. A portabilidade da credencial (CXF/CXP, HPKE, iOS/macOS 26) é o que transforma "sem senha" em "sem dono" — e ela chegou em 2025–2026.

**O que ainda falta.** O CXP virar padrão final e ser implementado dos dois lados por todos os custodiantes; um caminho de recuperação que não seja nem senha nem humano; e uma resposta jurídica à herança. Hoje a resposta é a da Apple: o Contato de Legado tem acesso a fotos, mensagens, notas, arquivos e backups mediante chave de acesso **mais certidão de óbito**, e **não** tem acesso ao iCloud Keychain — onde estão "informações de pagamento, senhas e passkeys". A chave não se herda. Esse é o buraco por onde D3 passa.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: O dispositivo volta a ser a fonte da verdade, e o servidor vira cache e canal de sincronização
    efeitos:
      - id: e1
        ordem: 1
        efeito: Aplicações respondem à interação local sem latência de rede, e estar offline deixa de ser um modo degradado
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O botão salvar e o indicador de carregamento deixam de ser elementos da linguagem de interface
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Designers passam a projetar o estado divergente entre dispositivos como caso normal, não como erro
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O custo de infraestrutura por usuário desloca-se do servidor para o dispositivo do próprio usuário
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: O preço do software pessoal desacopla-se do número de usuários ativos e volta a se aproximar de licença
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: A sincronização vira uma camada de produto comprável, e deixa de ser algo que cada equipe escreve do zero
        sinal: forte
        prazo: 2028
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: Forma-se um novo ponto único de dependência, com poucos motores de sincronização sob poucos donos
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: A promessa de independência do local-first convive com aprisionamento ao fornecedor de sincronização
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: O banco relacional do servidor deixa de ser a interface do cliente e vira detalhe interno do motor
            sinal: medio
            prazo: 2029
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Consulta local, reatividade e resolução de conflito entram na formação básica de quem faz interface
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e3
        ordem: 1
        efeito: A longevidade do arquivo volta a ser argumento de venda, porque o aplicativo pode morrer e o dado continua legível
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: Formato aberto e exportação completa viram requisito de compra, e não cortesia do fornecedor
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: O encerramento de um serviço deixa de ser evento catastrófico e vira migração, reduzindo o poder de retenção da plataforma
                sinal: fraco
                prazo: 2031
                confianca: baixa
  - disrupcao: O servidor deixa de conseguir ler o que guarda, e o controle de acesso passa a viver no próprio dado
    efeitos:
      - id: e4
        ordem: 1
        efeito: Compartilhar deixa de ser conceder permissão no servidor e passa a ser delegar uma capacidade criptográfica
        sinal: medio
        prazo: 2029
        confianca: baixa
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: A revogação de acesso deixa de ser instantânea e vira um problema de convergência entre réplicas
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Políticas corporativas de segurança passam a admitir revogação eventual no lugar de revogação imediata
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: O metadado vira o alvo principal de vigilância e de produto, porque o conteúdo deixou de ser legível
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: A disputa regulatória desloca-se do conteúdo das mensagens para o grafo de relações e a telemetria
                sinal: medio
                prazo: 2031
                confianca: baixa
      - id: e5
        ordem: 1
        efeito: Funcionalidades que dependem de o servidor ler o dado migram para o cliente ou desaparecem do produto
        sinal: forte
        prazo: 2029
        confianca: media
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: A moderação em serviço cego passa a depender de denúncia, reputação e metadado, não de leitura de conteúdo
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A arquitetura cega vira passivo jurídico, e serviços que a adotam tornam-se alvo prioritário de regulação
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: A personalização passa a rodar no dispositivo, com o modelo indo até o dado em vez de o dado ir até o modelo
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: O aparelho pessoal torna-se o único lugar onde existe o perfil completo de uma pessoa, e por isso o alvo de maior valor
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: O modelo de negócio baseado em ler o dado do usuário fica indisponível para esta classe de produto
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: Auto-hospedagem gratuita e assinatura de sincronização consolidam-se como o par padrão de monetização
            sinal: medio
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: Software pessoal de nicho torna-se viável para equipes de uma a três pessoas, e o catálogo se pulveriza
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: Produtos de massa gratuitos evitam a arquitetura cega e a mantêm como diferencial de nicho pago
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Privacidade por arquitetura consolida-se como segmento de mercado pago, e não como padrão da web
                sinal: medio
                prazo: 2031
                confianca: media
  - disrupcao: A conta deixa de ter um intermediário que a devolve, porque o fim da senha leva junto o fim do esqueci minha senha
    efeitos:
      - id: e7
        ordem: 1
        efeito: A recuperação de conta, e não o login, torna-se o ponto mais frágil e mais atacado do sistema
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: Provedores passam a exigir dois ou mais fatores de recuperação registrados já na criação da conta
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Pessoas sem segundo aparelho ou sem rede de confiança ficam estruturalmente mais expostas à perda definitiva de conta
                sinal: medio
                prazo: 2031
                confianca: media
          - id: e7.2
            ordem: 2
            efeito: O suporte humano deixa de poder devolver o acesso, e o custo de atendimento cai enquanto o dano por perda sobe
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: Surge um mercado de custódia de recuperação, com recuperação social e custodiante pago como serviço
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e8
        ordem: 1
        efeito: A morte e a incapacidade viram problema técnico explícito, porque a chave não está com nenhuma instituição
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e8.1
            ordem: 2
            efeito: A herança digital passa a exigir ato prévio da pessoa viva, e não pedido posterior da família
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e8.1.1
                ordem: 3
                efeito: Inventário e sucessão passam a incluir custódia de chaves, e a advocacia incorpora isso como prática corrente
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e8.2
            ordem: 2
            efeito: Plataformas separam formalmente o que devolvem aos herdeiros do que nunca devolvem, que é a chave
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e8.2.1
                ordem: 3
                efeito: A legislação passa a tratar chave criptográfica como categoria distinta de dado pessoal para efeito de sucessão
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e9
        ordem: 1
        efeito: A credencial torna-se portátil entre custodiantes, e o custodiante deixa de ser dono da identidade
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e9.1
            ordem: 2
            efeito: O cofre de chaves assume a posição de maior poder da cadeia, no lugar do provedor de identidade
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e9.1.1
                ordem: 3
                efeito: A disputa de plataforma desloca-se do login para o cofre, com o sistema operacional competindo contra o cofre de terceiro
                sinal: medio
                prazo: 2031
                confianca: baixa
          - id: e9.2
            ordem: 2
            efeito: Estado e bancos consolidam-se como âncora de identidade forte nos países com identidade digital pública
            sinal: forte
            prazo: 2028
            confianca: media
            efeitos:
              - id: e9.2.1
                ordem: 3
                efeito: Sem terceiros passa a significar na prática com um terceiro público, e a soberania individual esbarra na soberania estatal
                sinal: medio
                prazo: 2031
                confianca: media
```

### O que o bloco não consegue dizer

**A roda esconde que as três disrupções não têm a mesma chance.** D1 tem produto estável no ar; D3 tem padrão em implementação nas três grandes plataformas; D2 tem um programa de pesquisa e um recuo de mercado no mesmo ano. Tratadas lado a lado no YAML, elas parecem irmãs. Não são. Se D2 não vier, quinze dos quarenta e três efeitos caem.

**A roda esconde a contradição entre D1 e D3.** O local-first quer que o dado dure mais que o aplicativo; o fim da senha faz o acesso depender de uma chave que pode se perder para sempre. A combinação das duas produz um cenário que nenhum efeito isolado descreve: **dado eterno e ilegível**. Um arquivo que sobrevive ao serviço, ao aparelho e ao dono, e que ninguém consegue abrir. É o efeito mais interessante deste mapa e ele não cabe numa linha de `efeito:`.

**Todos os prazos ficam dentro do horizonte de 2031, por decisão explícita.** Três cadeias continuariam além: `e1.2.1` (preço de software desacoplado de usuário ativo) só se fecha quando uma geração de produtos nasce assim, provavelmente depois de 2033; `e8.2.1` (chave criptográfica como categoria jurídica própria na sucessão) depende de jurisprudência acumulada, o que raramente leva menos de uma década; e `e9.2.1` (a colisão entre soberania individual e soberania estatal) é um processo político sem data. Estão registrados com prazo 2031 por serem o limite do mapa, não por serem prováveis em 2031 — a skill corta em três níveis e o formato fixa o horizonte, então o lugar honesto dessa ressalva é aqui, em prosa.

**A quarta ordem, que a skill proíbe gerar, é onde estaria o efeito de mídia mais forte.** De `e5.2.1` (o aparelho como único lugar do perfil completo) sairia, no nível seguinte, a reorganização da publicidade em torno de inferência no dispositivo com prova de exibição — o que reconstruiria o mercado de anúncios inteiro sobre outra base técnica. Corte feito aqui, conforme a Etapa 3.

## 6. Sinais fracos e wildcards

### Sinais fracos

**A IA indo até o dado, em vez do dado ir até a IA.** É o casamento deste tema com o tema 16, e ele já está no palco: a Local-First Conf 2026 teve "Frontier LLM results, on device", "Plaintext-first apps in the age of agents", "Agents on the canvas", "Your Own AI Infrastructure: Building a Complete Local AI Stack" e "Tiles: Own your AI with local models and open protocols" — cinco palestras em dois dias num evento que até 2024 falava basicamente de CRDT e sincronização. O sinal não é a existência de modelo local; é o campo de **arquitetura de dado** ter adotado o agente como premissa de projeto em um ano. Se isso se firmar, o argumento comercial do local-first deixa de ser privacidade e passa a ser capacidade: só quem tem o dado em casa consegue deixar um agente trabalhar sobre ele inteiro.

**Controle de acesso descentralizado saindo do laboratório.** Keyhive e BeeKEM, com o Beelay integrado ao Automerge, são hoje pesquisa do Ink & Switch sem auditoria pública declarada. Se um único produto de uso real embarcar isso e sobreviver a uma auditoria, D2 muda de patamar — porque o que falta a D2 não é demanda de discurso, é a peça técnica do compartilhamento.

**A credencial ficando portátil de fato.** CXF em Review Draft desde março de 2025, CXP mirando padronização no início de 2026, HPKE no transporte, Apple já entregando transferência no mesmo dispositivo em iOS/macOS 26. O dia em que exportar todas as passkeys de um cofre para outro for tão banal quanto exportar um CSV de senhas, a identidade deixa de ser ativo de retenção — e esse é o gatilho real de `e9`.

**A conta que troca de servidor sem pedir licença.** O roteiro do AT Protocol de 24 de março de 2026 anuncia gestão básica de conta na implementação de referência do PDS, incluindo exportação de dados, e trata dado permissionado como frente em desenvolvimento. É pouco, e é justamente por ser pouco que é sinal fraco: a portabilidade de conta que o protocolo promete ainda não está no roteiro como prioridade.

**Um contra-sinal fraco, que vale tanto quanto os outros.** No mesmo palco de Berlim havia uma palestra chamada "Local first collaborative Spreadsheets. Are CRDTs useful?". Quando a comunidade coloca a própria premissa técnica em forma de pergunta no programa, ou é maturidade intelectual ou é dúvida real. Em 2031 saberemos qual.

### Wildcards

**Wildcard 1 — Um Estado democrático vence judicialmente o direito de exigir acesso a dado criptografado.** O Reino Unido emitiu à Apple, em janeiro de 2025, uma Technical Capability Notice sob o Investigatory Powers Act; a Apple retirou o Advanced Data Protection dos novos usuários britânicos em fevereiro de 2025 e voltou ao Investigatory Powers Tribunal em 2026. Se a decisão for pelo governo, o "servidor cego" vira ilegal de facto num mercado inteiro, e D2 morre por via jurídica antes de morrer por via de mercado. Probabilidade difícil de estimar; impacto total sobre metade deste mapa. *(Registro de honestidade: este parágrafo descreve um processo que eu li em resumos de busca e não em fonte primária aberta — ver seção 8.)*

**Wildcard 2 — O inverso: uma legislação que obrigue local-first ou ponta-a-ponta por padrão para dado sensível.** É o wildcard sugerido pelo enunciado do tema, e é o mais improvável dos dois, porque a pressão regulatória observável na Europa em 2026 vai na direção oposta. Se acontecer — provavelmente por saúde ou por dado de criança, não por dado em geral —, D2 salta de nicho pago a requisito de conformidade, e `e6.2` se inverte inteiro.

**Wildcard 3 — Um vazamento catastrófico de cofre de chaves.** Todo o modelo "a chave é sua" pressupõe que o lugar onde a chave mora é seguro. Um comprometimento de escala num cofre grande — gerenciador de senhas, chaveiro de sistema operacional, custodiante de recuperação — não quebraria a criptografia, quebraria a confiança no modelo, e empurraria o público de volta para o intermediário que devolve a conta. Baixa probabilidade, impacto alto, e efeito perverso: fortaleceria justamente a centralização que o tema tenta desmontar.

**Wildcard 4 — Uma plataforma grande removendo o fallback de senha em um país inteiro, de uma vez.** Não "passwordless por padrão em contas novas", que já aconteceu, mas desligar a recuperação por senha para a base instalada. Seria o primeiro teste populacional real de D3, e produziria em semanas o dado que hoje falta sobre quantas pessoas ficam de fora.

## 7. Contra o próprio mapa

Esta seção registra a Etapa 4 da skill. Cada rebaixamento abaixo traz o valor original, antes da autocrítica, para que a revisão seja auditável e não apenas afirmada.

### Rebaixamentos aplicados

| Efeito | Confiança original | Depois | Por quê |
|---|---|---|---|
| `e1` | alta | **media** | Extrapola "offline deixa de ser modo degradado" a partir de motores que ainda rejeitam escrita offline. O Zero 1.0, o produto mais maduro da categoria, enfileira escrita durante instabilidade curta mas falha em estado desconectado. Afirmar o efeito com confiança alta seria afirmar o contrário do que o produto documenta. |
| `e2` | alta | **media** | Uma versão 1.0 de um produto não é uma categoria consolidada. Zero, ElectricSQL, PowerSync, InstantDB e Convex atendem recortes diferentes, e o próprio fundador do Zero manda quem quer descentralização real para outro projeto. "Camada comprável" ainda é promessa de fornecedor. |
| `e5` | alta | **media** | Assume que produtos aceitam perder busca, recomendação e moderação para manter a arquitetura. A evidência de 2026 mostra a escolha inversa: a Meta preferiu desligar a criptografia a conviver com o servidor cego. |
| `e6.1` | media | **baixa** | O par "grátis se você hospeda, pago se eu hospedo" tem exemplos reais (Budgero, a US$ 4/mês, e o Obsidian como referência da comunidade), mas o fio do Hacker News sobre monetização de local-first é uma lista de dificuldades, não de casos de sucesso. Um padrão de mercado não se estabelece com dois exemplos. |
| `e9.2` | alta | **media** | Viés de composição: eu generalizei para o mundo um fenômeno que verifiquei no Brasil (gov.br, 177 milhões de pessoas, 14 bancos integrados). Índia e União Europeia têm programas comparáveis; os Estados Unidos, não. O efeito é forte onde há identidade digital pública, e é isso que o texto agora diz. |

### Qual efeito é só extrapolação linear do presente

`e1.1` — "o botão salvar e o indicador de carregamento deixam de ser elementos da linguagem de interface". Isso vem acontecendo desde o Google Docs, em 2006, sem nenhuma das três disrupções deste mapa. É tendência de produto, não consequência de ruptura arquitetural: um app inteiramente na nuvem também pode esconder o salvar. Mantive o efeito porque ele é verdadeiro, mas ele não prova nada sobre local-first — e, num mapa comparativo, é exatamente o tipo de efeito que serviria para qualquer tema, que a entrevista pediu para excluir. Fica aqui a declaração de que ele é o elo mais fraco da roda.

### Qual efeito assume velocidade de adoção sem precedente

`e6.1`, em 2030. Ele supõe que um modelo de monetização hoje praticado por produtos de uma a três pessoas vire padrão de uma categoria em quatro anos. Não conheço caso comparável: nem o software livre nem o modelo freemium fizeram essa travessia nesse prazo. Rebaixado para confiança baixa, e sinalizado aqui.

Um segundo candidato é `e7` em 2027, com confiança **alta** — a única confiança alta do mapa. Ela se sustenta não por projeção, mas por medição já feita: 103 implantações auditadas e nenhuma aprovada em 28 verificações; 57% das organizações ainda com método phishable no login primário; 28% em passwordless completo. O deslocamento do ataque para a recuperação não é previsão, é descrição do presente que continua. Por isso ela permanece alta.

### Qual disrupção pode simplesmente não se concretizar

**D2, o servidor cego.** É a que tem a evidência mais dura contra. Em 8 de maio de 2026 a Meta removeu a criptografia ponta-a-ponta das mensagens diretas do Instagram, globalmente, com a justificativa de que pouca gente usava. Não foi proibição, não foi falha técnica, não foi custo: foi desinteresse do público medido por quem tem a maior amostra do mundo. Some-se a isso o que o caderno do Keyhive admite — que tolerar concorrência elimina sigilo futuro, e que existe uma classe de ataque nova, o *cross-fork*, sem solução fechada — e o quadro é de uma disrupção sem tração de mercado e sem peça técnica pronta.

Se D2 não vier, caem quinze dos quarenta e três efeitos, e o mapa restante descreve um mundo bem menos romântico: o dado mora no seu aparelho, sincroniza rápido, sobrevive ao encerramento do serviço — **e o servidor continua lendo a cópia**. Local-first sem ponta-a-ponta é uma melhoria de arquitetura, não uma mudança de quem manda. Vale dizer com todas as letras: esse é, hoje, o desfecho mais provável.

### Que viés meu entrou aqui

Três, e eles se somam.

**Viés de origem.** Este tema chegou à disciplina por uma varredura de finanças pessoais com privacidade feita pelo autor da skill, ligada a um produto real dele que removeu o provedor de identidade terceiro. Quem levanta o tema a partir de um produto próprio já decidiu que o problema é relevante. O mapa herda essa decisão.

**Viés de fonte.** Das vinte fontes que abri, seis são da própria comunidade local-first (duas do Ink & Switch, duas da Local-First Conf, o ensaio de Kleppmann e a página do Budgero) e duas são da FIDO Alliance, que é um consórcio de fornecedores. São partes interessadas descrevendo o próprio movimento. Os contrapesos que consegui — o estudo do USENIX, a decisão da Meta, o fio do Hacker News, os limites declarados do Zero — foram buscados depois, de propósito, e são minoria na contagem.

**Viés de recorte linguístico.** Tudo o que li sobre local-first está em inglês e vem de Europa e Estados Unidos. A nota sobre o Brasil existe justamente porque, ao procurar, encontrei o movimento contrário — e não tenho material equivalente sobre Índia, China ou África, onde vivem a maioria dos usuários de aparelho móvel do mundo. Onde escrevi "global", leia-se "o que o mundo anglófono publicou".

## 8. O que a máquina errou

**1. Entrei na rodada tratando passkey como a disrupção, e estava errado.** O enunciado do tema apresenta passkeys como uma das três rupturas convergentes, e eu comecei a montar a roda em cima disso. A primeira busca derrubou: 5 bilhões de passkeys, 75% das pessoas com ao menos uma habilitada, Microsoft com contas novas sem senha por padrão, nenhum debate sobre substituir WebAuthn. Pelo critério de recusa da própria skill, é maduro. Percebi porque o critério de mudança de ideia declarado na entrevista — "adoção já passou da maioria inicial (Rogers)" — é verificável com um número, e o número estava na primeira fonte que abri. Corrigido movendo a disrupção de "a senha acabou" para "o intermediário que devolvia a conta acabou".

**2. Quase citei uma fonte fraca sobre o fato mais importante do mapa.** A remoção da criptografia ponta-a-ponta do Instagram apareceu primeiro em dois sites de conteúdo automatizado (`techtonic-times.github.io` e `digitalbiztalk.com`), que eu não citaria e cuja data eu não confiaria. Desconfiei pelo domínio e pelo tom, refiz a busca e só usei o fato depois de confirmá-lo na Euronews. Se a verificação não tivesse sido feita, o pilar da seção 7 estaria apoiado em SEO.

**3. Tentei citar o ensaio fundador na URL errada e teria dado erro.** `https://www.inkandswitch.com/local-first/` é o endereço canônico que toda busca devolve, e o fetch voltou vazio duas vezes. Usei o PDF de Kleppmann, que abre e é a mesma obra. O documento cita o PDF, não a página — a diferença importa porque a checagem de links do formato testa a URL, não a obra.

**4. O número do gov.br não foi confirmado na fonte primária.** A nota oficial do Ministério da Gestão não respondeu (duas tentativas, conexão encerrada) e o Tecnoblog devolveu 403. Os números de 548 milhões de assinaturas, meta de 540 milhões e 177 milhões de usuários vêm do Correio Braziliense, que é imprensa de referência mas é fonte secundária. **Está declarado: o número oficial permanece não verificado na origem.**

**5. A lista de bancos integrados ao gov.br veio de fonte secundária porque a primária está bloqueada.** A página da Agência Gov está fora do ar "por exigência da legislação eleitoral". Usei o portal Contábeis, de maio de 2024. O fato é de 2024, não de 2026, e está datado assim no texto — resisti à tentação de escrever "hoje, 14 bancos".

**6. Afirmei sobre a Lei 15.352/2026 mais do que a fonte primária me deu.** O Planalto derrubou a conexão. Verifiquei em página institucional da UFJF, que confirma data e transformação da ANPD em agência. A página oficial de regulamentações da ANPD, que abri, lista a Resolução nº 32 de 26/01/2026 mas **não menciona a Lei 15.352** — uma lacuna que não sei explicar e que registro em vez de contornar. Um dado que vi em busca e **não** usei por não conseguir abrir: a criação de 200 cargos de especialista pela lei.

**7. Sobre o Keyhive, o resumo de busca dizia mais do que a página do projeto sustenta.** A busca afirmava que o código é "early preview" e "não passou por auditoria de segurança". A página oficial do projeto, que abri, diz apenas que é pesquisa de 2024–2026 e não declara auditoria. No texto escrevi "sem auditoria pública declarada", que é o que a fonte permite, e não "sem auditoria", que é o que a busca sugeria.

**8. O wildcard do Reino Unido está no documento apoiado só em resumo de busca.** Não consegui abrir fonte primária sobre a Technical Capability Notice nem sobre o processo no Investigatory Powers Tribunal em 2026. Mantive o wildcard porque ele é estruturalmente importante, e marquei no próprio parágrafo que a evidência é de segunda mão. Não entra na lista de fontes.

**9. Um acerto por vigilância, não por mérito.** O `DUVIDAS.md` do autor registra que esta skill já deixou prazos ultrapassarem o horizonte pedido sem aviso, e que a correção não foi aplicada ao `SKILL.md`. Conferi os 43 valores de `prazo` contra o horizonte de 2031 antes de fechar: nenhum passa. As três cadeias que só se fechariam depois estão ditas em prosa na seção 5, que é a conduta que o `DUVIDAS.md` recomendava. Registro como erro evitado, não como erro cometido — e registro que evitá-lo dependeu de ler um arquivo que a skill não manda ler.

## 9. Três cenários para 2031

**Provável.** O dado mora no aparelho e sincroniza em milissegundos, e ninguém chama isso de local-first — chama de "o app é rápido". Três ou quatro motores de sincronização atendem a maior parte do mercado, e trocar de motor é tão caro quanto trocar de banco de dados era em 2020: o aprisionamento mudou de andar, não desapareceu. A senha sumiu do login e sobreviveu no suporte: a maioria dos serviços mantém um caminho de recuperação que envolve um humano, porque a alternativa — perder a conta para sempre — custa mais clientes do que custa a fraude. A criptografia ponta-a-ponta virou uma linha de preço: está no plano pago, no produto de nicho, no app de finanças que cobra US$ 4 por mês, e não está no produto gratuito de massa, que continua precisando ler para recomendar e moderar. Quem projeta mídia e interação trabalha com estado divergente todos os dias e aprendeu a desenhar a tela do conflito. Herança digital ainda é um problema aberto, resolvido caso a caso por famílias que descobrem, no pior momento possível, que a chave não estava com ninguém.

**Desejável.** O mesmo cenário anterior, mais três coisas que precisariam ter sido decididas entre 2027 e 2029. Primeiro: a portabilidade da credencial saiu do papel — o CXP virou padrão final e foi implementado nos dois sentidos por todos os custodiantes grandes, de modo que mudar de cofre é uma operação de cinco minutos, e por isso nenhum custodiante consegue reter ninguém. Segundo: a recuperação foi resolvida sem reintroduzir o intermediário — recuperação social com pessoas de confiança, fragmentos de chave distribuídos, custódia opcional e paga para quem quiser, tudo com interface que uma pessoa de 70 anos consiga usar, porque foi desenhado por quem projeta interação e não por quem projeta criptografia. Terceiro: a herança virou ato prévio e banal, oferecido na criação da conta como o contato de emergência do celular. Nesse cenário a soberania de dados deixou de ser um recurso de nicho pago e virou uma propriedade do sistema, e a diferença entre ele e o provável não é tecnológica — é de quem decidiu gastar esforço de produto em cima de perda, morte e velhice em vez de em cima de onboarding.

**Indesejável.** A arquitetura cega virou passivo. Depois de um caso grande de dano em serviço que não conseguia ler o que guardava, a regulação passou a exigir capacidade de acesso para categorias inteiras de aplicação, e ponta-a-ponta ficou restrito a mensageria, por herança histórica, e a produtos pequenos demais para interessar. A chave saiu do provedor e foi parar em dois cofres de sistema operacional; a identidade das pessoas passou a depender de uma conta de plataforma com ainda menos alternativa do que havia em 2026, porque agora nem senha existe para escapar. Em países com identidade digital pública, o Estado virou a âncora única e a recusa deixou de ser possível na prática. Milhões de pessoas perderam acesso definitivo a arquivos — não por ataque, por perda de aparelho sem segundo fator. **O sinal precoce disso é específico e observável desde já:** o momento em que um serviço grande anunciar que a recuperação de conta passa a exigir documento de identidade validado pelo Estado. É a hora em que o fim da senha terá substituído um intermediário privado por um intermediário do qual não se sai.

## 10. O experimento

### O que é

**Cofre de bolso** — um aplicativo web local-first de notas financeiras pessoais, sem cadastro, sem e-mail, sem senha. Todos os dados ficam num banco local no navegador, cifrados no dispositivo antes de qualquer sincronização, com um servidor de sincronização que recebe carga que não consegue decifrar. No primeiro uso, o app gera a chave e imprime — literalmente, em PDF de uma página — um **cartão de chave**: um QR code e doze palavras. A tela diz uma frase só: *este papel é a sua conta; não existe outro caminho de volta*. Não há "esqueci minha senha", não há suporte, não há e-mail de recuperação.

O escopo é deliberadamente pequeno: lançar um gasto, ver o total do mês, sincronizar entre dois aparelhos. O experimento não é sobre finanças. É sobre a única pergunta que o resto do mapa não responde.

### Que pergunta sobre o futuro ele ajuda a responder

**Quando a recuperação de conta deixa de existir, o que as pessoas fazem com o objeto que a substitui?**

A seção 4 mostra que o ponto de ruptura de D3 não é o login — é o que acontece depois da perda. Os números existem para adoção de passkey e não existem para isto. O experimento produz esse dado em pequena escala e com observação direta: onde a pessoa guarda o cartão, se guarda, se fotografa (o que anula a proteção), se manda para si mesma no WhatsApp (idem), se perde no mesmo dia, se pede uma cópia.

### Que tecnologia emergente ele usa, e por que não dá para fazer com madura

Usa um motor de sincronização local-first com carga cifrada no cliente — a combinação de D1 com D2 — e substitui a credencial por material de chave portátil, que é o que o CXF/CXP promete padronizar. O que **não** dá para fazer com tecnologia madura é o conjunto: com passkey (madura) o experimento não funciona, porque a passkey vive num cofre de plataforma que já tem recuperação embutida pela conta Apple ou Google — o intermediário continua lá, e a pergunta do experimento desaparece. Com backup criptografado no servidor (maduro), o provedor tem a chave e devolve a conta. Com autenticação por e-mail (madura), o provedor de e-mail é o intermediário. **Só com servidor cego e chave exclusivamente do usuário o "sem volta" é verdade** — e é o "sem volta" que se quer medir.

### O que a turma vai fazer quando testar isso em sala

Em ordem, numa aula:

1. Cada pessoa cria o cofre no próprio celular, lança três gastos e imprime o cartão. Cronometro quanto tempo leva e registro quantas fotografam o cartão em vez de guardá-lo.
2. Sincroniza com um segundo dispositivo — um notebook emprestado — e observa o que aparece na tela quando os dois divergem de propósito (mesmo gasto editado nos dois, offline).
3. **Perda deliberada:** todo mundo apaga os dados do site no navegador do celular. Metade da turma fica com o cartão; a outra metade entrega o cartão para mim antes de apagar.
4. Quem tem o cartão restaura. Quem não tem, tenta de tudo — e descobre, na prática, que não há a quem recorrer. Eu recuso o pedido na frente de todos, que é o ponto pedagógico da coisa.
5. Discussão final, com uma pergunta escrita: *você usaria isto para uma coisa que importa?* Respostas anônimas, contadas na hora.

### O que seria um resultado que me faria mudar de ideia

**Se mais de dois terços da turma responder "sim, eu usaria para uma coisa que importa" depois de ter passado pela perda**, meu ceticismo com D2 e D3 está errado: existe público disposto a aceitar a arquitetura sem rede de segurança, e o recuo da Meta no Instagram diz respeito à indiferença de um público que nunca entendeu o que estava desligando, não a uma rejeição informada.

**E o inverso, que é o resultado que eu de fato espero:** se a maioria fotografar o cartão de chave com o celular nos primeiros cinco minutos, então o modelo inteiro está sendo derrotado não pela criptografia nem pela regulação, mas pelo comportamento — as pessoas reconstroem o intermediário sozinhas, e o intermediário que elas escolhem é a galeria de fotos do telefone, sincronizada com a nuvem de uma das duas grandes plataformas. Seria a demonstração mais econômica possível de que "sem terceiros" é uma propriedade da arquitetura e não do uso.

## 11. Fontes

Vinte fontes, todas efetivamente abertas nesta rodada. O que aparece apenas em resumo de busca e não foi aberto **não está nesta lista** — está declarado na seção 8 ou na seção 12.

1. Kleppmann, M.; Wiggins, A.; van Hardenberg, P.; McGranaghan, M. **"Local-First Software: You Own Your Data, in spite of the Cloud"** (PAPOC, 2019). `https://martin.kleppmann.com/papers/local-first.pdf` — sustenta a definição do campo, os sete ideais e, sobretudo, a lista de problemas que o próprio ensaio deixou em aberto (segurança, controle de acesso, compartilhamento, modelo de negócio), que organiza as seções 3 e 4. Alta confiabilidade: é o texto fundador, revisado, dos autores originais. Ressalva de método: a URL canônica `inkandswitch.com/local-first/` não abriu; esta é a mesma obra em outro endereço.

2. Ink & Switch. **Keyhive** (página do projeto). `https://www.inkandswitch.com/project/keyhive/` — sustenta a existência, a autoria (Brooklyn Zelenka, John Mumm, Alex Good), o período 2024–2026 e o escopo do controle de acesso por capacidades, BeeKEM e integração com o Beelay/Automerge. Confiabilidade alta para o que é, com o viés óbvio de ser a descrição que o laboratório faz de si: não declara auditoria, e eu não afirmo que houve nem que não houve.

3. Ink & Switch. **"06 · E2EE in the Local-First Setting"** (caderno do Keyhive). `https://www.inkandswitch.com/keyhive/notebook/06/` — sustenta a parte mais cética da seção 4: a ausência de serialização sem servidor central, o trade-off em que tolerar concorrência elimina o sigilo futuro, o *cross-fork attack* e a frase de que há contextos em que engenharia domina segurança. Alta confiabilidade e, por ser autocrítica do próprio grupo interessado, especialmente informativa.

4. InfoQ. **"Zero Reaches 1.0, Marking the First Stable Release of Rocicorp's Web Sync Engine"** (junho de 2026). `https://www.infoq.com/news/2026/06/zero-version-1/` — sustenta a data de 8 de junho de 2026, os limites declarados (só PostgreSQL, sem escrita offline, bundle de 232 KB, SSR no roteiro), a fala do fundador sobre ser "apenas um cache sofisticado" e o encaminhamento para o Jazz. Média-alta: imprensa técnica especializada, com citação direta do fundador; é reportagem sobre lançamento, portanto herda o enquadramento do fornecedor.

5. Local-First Conf 2026 — **programação do dia 1**. `https://app-2026.localfirstconf.com/schedule/day-1` — sustenta os títulos e palestrantes citados na seção 3 e o sinal fraco da seção 6. Alta confiabilidade como registro factual de programação; nenhuma como medida de adoção de mercado.

6. Local-First Conf 2026 — **programação do dia 2**. `https://app-2026.localfirstconf.com/schedule/day-2` — mesma função e mesma ressalva; é daqui que vêm "Local Digital Objects using Zero-knowledge Cryptography", "Tiles: Own your AI with local models and open protocols" e a palestra que pergunta se CRDTs são úteis.

7. FIDO Alliance. **"Five Billion Passkeys: FIDO Alliance Reports Mainstream Global Usage on World Passkey Day 2026"** (7 de maio de 2026). `https://fidoalliance.org/fido-alliance-reports-accelerating-global-passkey-adoption-on-world-passkey-day-2026/` — sustenta todos os números de adoção usados na recusa por maturidade da seção 4: 5 bilhões, 90%, 75%, 49%, 68%, 82%, 28%, 57%, e a metodologia (Sapio Research, abril de 2026, 11.000 consumidores e 1.400 decisores, dez países, margens de ±0,9 e ±2,6). Confiabilidade dupla: a metodologia é declarada e as margens são publicadas, o que é acima da média do setor; mas é uma pesquisa declarativa encomendada por um consórcio de fornecedores da tecnologia medida. "75% habilitaram uma passkey" é autorrelato, não telemetria.

8. FIDO Alliance. **Credential Exchange Specifications**. `https://fidoalliance.org/specifications-credential-exchange-specifications/` — sustenta a existência oficial das especificações de troca de credencial e a formulação "seguro por padrão". Página institucional; abriu, mas é rasa — não traz status nem datas, que vieram da fonte 9.

9. Corbado. **"WebAuthn Credential Exchange Protocol (CXP) & Credential Exchange Format (CXF)"**. `https://www.corbado.com/blog/credential-exchange-protocol-cxp-credential-exchange-format-cxf` — sustenta o status e as datas (CXF em Review Draft desde março de 2025; CXP mirando padronização no início de 2026), o uso de HPKE e a entrega da Apple em iOS/macOS 26. Média: é blog técnico de um fornecedor de autenticação, portanto parte interessada, mas descreve especificação pública e verificável, e é explícito ao dizer que não identifica críticas — o que eu registro como limitação da fonte, não como ausência de críticas.

10. KuppingerCole (Nitish Teixeron). **"103 Passkey Deployments: Not One Passed"** (5 de agosto de 2026). `https://www.kuppingercole.com/blog/teixeron/103-passkey-deployments` — sustenta os números do estudo "The State of Passkeys", do 35º USENIX Security Symposium (Ruhr-Universität Bochum, Hochschule Heilbronn, Universidade de Wuppertal): 103 implantações, 28 verificações, nenhuma aprovada, 18 críticas, 53 altas, 5 sem verificação de assinatura, 22 sem validar desafio, 57 ignorando contador. Alta confiabilidade como relato de artigo revisado por pares em conferência de primeira linha, com a ressalva de que é **resumo secundário**: a página do USENIX devolveu 403 e eu não abri o artigo original.

11. Apple. **"Como adicionar um Contato de Legado"** / Legacy Contact. `https://support.apple.com/en-us/102631` — sustenta o fato decisivo de D3: o Contato de Legado precisa da chave de acesso **e** da certidão de óbito, acessa fotos, mensagens, notas, arquivos e backups, e **não** acessa o iCloud Keychain, onde ficam "informações de pagamento, senhas e passkeys". Altíssima confiabilidade: é documentação normativa do próprio fornecedor sobre o próprio produto.

12. Apple Security Research. **"Private Cloud Compute: A new frontier for AI privacy in the cloud"** (10 de junho de 2024). `https://security.apple.com/blog/private-cloud-compute/` — sustenta o contraponto da seção 3: as garantias declaradas de computação sem estado, ausência de acesso privilegiado, não-alvejabilidade e transparência verificável com imagens publicadas em até 90 dias. Confiabilidade alta para o que a empresa se compromete; nenhuma para o que acontece se ela não cumprir. É promessa auditável, não arquitetura cega.

13. Euronews Next. **"Instagram is dropping end-to-end encrypted chats. This is what is changing"** (8 de maio de 2026). `https://www.euronews.com/next/2026/05/08/instagram-is-dropping-end-to-end-encrypted-chats-this-is-what-is-changing` — sustenta o pilar da seção 7: a remoção global, a data, a justificativa de baixa adesão, a permanência de WhatsApp, Messenger e Signal com ponta-a-ponta por padrão, e a declaração da Meta de que as mensagens não treinam IA. Alta: imprensa pública europeia de referência. Não traz número de adesão do recurso removido, e eu não afirmo nenhum.

14. Hacker News. **"I love local first, but I struggle with how to monetize truly local-first applications"** (fio, item 40786600). `https://news.ycombinator.com/item?id=40786600` — sustenta a seção 3 no ponto do modelo de negócio e o rebaixamento de `e6.1` na seção 7. Confiabilidade baixa como evidência e alta como sintoma: é conversa de praticantes, não dado. Usada como termômetro social declarado, nunca como prova. Não consegui recuperar a contagem de pontos e comentários.

15. Budgero. **Página do produto**. `https://budgero.app/` — sustenta a existência da forma comercial descrita em `e6.1`: cifra no dispositivo antes de sincronizar, empresa que declara não conseguir ler, código aberto sob AGPL-3.0, auto-hospedagem livre, US$ 4/mês ou US$ 35/ano, exportação em SQLite e CSV. Baixa-média: é material de marketing do próprio fornecedor, e as afirmações de zero-knowledge não foram verificadas por mim nem por auditoria que eu tenha visto. Ressalva importante: páginas de comparação do mesmo site descrevem o licenciamento como Functional Source License, enquanto a página inicial diz AGPL-3.0 — usei o que está na página que abri, e a divergência fica registrada aqui.

16. ANPD. **Regulamentações da ANPD** (página oficial de atos normativos). `https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd` — sustenta que a Resolução CD/ANPD nº 32, de 26 de janeiro de 2026, é o ato mais recente listado, e que **não há** regulamento de portabilidade de dados na lista. Máxima confiabilidade: é a fonte oficial. Serve tanto para o que afirma quanto para o silêncio que revela.

17. UFJF — Lei Geral de Proteção de Dados Pessoais. **"Sancionada a Lei que transforma a ANPD em Agência Reguladora"** (27 de fevereiro de 2026). `https://www2.ufjf.br/lgpd/2026/02/27/sancionada-a-lei-que-transforma-a-anpd-em-agencia-reguladora/` — sustenta a Lei nº 15.352, de 25 de fevereiro de 2026, e a transformação da ANPD. Média-alta: página institucional universitária, secundária. O Planalto derrubou a conexão e o texto da lei não foi lido por mim.

18. Correio Braziliense. **"GOV.BR supera 548 milhões de assinaturas digitais em 2026"** (2 de julho de 2026). `https://www.correiobraziliense.com.br/brasil/2026/07/7453518-gov-br-supera-548-milhoes-de-assinaturas-digitais-em-2026.html` — sustenta os números da nota sobre o Brasil: 548 milhões de assinaturas, meta de 540 milhões para o fim de 2026, 177 milhões de pessoas usando o gov.br. Média-alta: imprensa de referência citando dado governamental. **Secundária** — a nota oficial do Ministério da Gestão não respondeu em duas tentativas.

19. AT Protocol. **"AT Protocol Roadmap (Spring 2026)"** (24 de março de 2026). `https://atproto.com/blog/2026-spring-roadmap` — sustenta o sinal fraco da conta portátil: gestão básica de conta e exportação de dados entrando na implementação de referência do PDS, e dado permissionado como frente aberta. Serve principalmente pelo que **não** diz: portabilidade entre PDS e gestão de chave pelo usuário não aparecem como prioridade. Alta confiabilidade como documento oficial do protocolo.

20. Contábeis. **"Clientes Nubank agora podem acessar gov.br com dados do banco"** (3 de maio de 2024). `https://www.contabeis.com.br/noticias/64984/clientes-nubank-agora-podem-acessar-gov-br-com-dados-do-banco/` — sustenta a lista dos 14 bancos integrados ao login do gov.br e o nível prata resultante, com acesso a mais de 4 mil serviços. Média: imprensa setorial, secundária, e **de 2024** — citada com a data explícita porque a fonte primária (Agência Gov) está fora do ar por exigência da legislação eleitoral.

## 12. Anexo — o levantamento bruto

### 12.1 A entrevista, na íntegra e sem interpretação

As cinco perguntas da Etapa 1, feitas literalmente como estão no `SKILL.md`:

> 1. **Horizonte temporal**: para que ano você quer projetar os efeitos? (ex: 2028, 2030, 2035)
> 2. **Público-alvo**: quem vai ler/usar esse mapa? (investidor, desenvolvedor, gestor de produto, você mesmo)
> 3. **Recorte geográfico**: mercado global, ou uma região específica?
> 4. **Descartes explícitos**: existe algo que você já sabe que NÃO quer que o mapa cubra?
> 5. **Viés desejado**: você quer um mapa otimista, pessimista, ou neutro/cético?

Respostas recebidas, literais:

> - Tema: "Soberania de dados: local-first, ponta-a-ponta e o fim da senha" (tema 17 de 19 da disciplina; família "Pessoas e dados").
> - Horizonte: 2031. Público: quem projeta mídia e interação. Recorte: global, com uma nota sobre o Brasil.
> - Descartado de início: o que já é comum em produto de massa (a régua da disciplina); nenhuma outra exclusão.
> - Disrupção suspeita: nenhuma — descubra. Viés: neutro. Ideias óbvias a excluir: as que servem para qualquer tema.
> - O que me faria mudar de ideia: evidência de que a adoção já passou da maioria inicial (Rogers) ou de que a tecnologia não rompe nada (só melhora o que existe).
> - Profundidade: três ordens. Modo: a partir de uma inovação/tema, não de um setor.
> - Zona de interesse do autor: "Pessoas e dados". Login do autor: jcsc. Skill usada: futurizacao-jcsc.

**Condição desta rodada, declarada porque muda o peso do resultado.** A skill manda nunca pular a entrevista e nunca aceitar "vá direto ao resultado". A entrevista foi feita e respondida, mas de forma assíncrona e não pelo autor da skill: esta é uma rodada comparativa automatizada em que onze skills rodam sobre dezenove temas, e as respostas vieram do enunciado da disciplina em nome do autor. Nenhuma resposta foi "tanto faz", então não houve o caso que a Etapa 1 manda registrar na seção 2 por omissão — mas houve um caso que a skill não prevê, o de o respondente não ser o dono da skill, e ele fica registrado aqui.

### 12.2 Como o critério de maturidade foi aplicado, candidato a candidato

Formulação do critério, literal do `SKILL.md`: *"Recuse — trate como 'presente', não 'futuro' — qualquer tecnologia ou prática que já seja padrão de mercado consolidado: amplamente adotada pelos players líderes do setor E sem debate técnico real e atual sobre sua substituição no horizonte considerado."*

| Candidato | Adotado pelos líderes? | Há debate real sobre substituí-lo até 2031? | Veredito |
|---|---|---|---|
| Passkeys / WebAuthn como método de login | Sim — Apple, Google, Microsoft; 5 bi de passkeys; 75% com ao menos uma | Não | **Recusado** |
| OAuth2 / OIDC | Sim | Não | Recusado |
| JWT | Sim | Não | Recusado |
| bcrypt / argon2 | Sim | Não | Recusado |
| TLS / HTTPS | Sim | Não | Recusado |
| Criptografia ponta-a-ponta em mensageria | Sim (WhatsApp, Signal, Messenger) | Não como técnica; sim como política — mas o debate é sobre proibi-la, não substituí-la | Recusado |
| Backup criptografado no servidor | Sim | Não | Recusado |
| 2FA por SMS | Sim | Sim, há debate — mas de **abandono**, não de substituição da categoria; e já é o incumbente em declínio | Recusado |
| Login social como identidade primária | Sim | Não | Recusado |
| Gerenciador de senhas | Sim | Não | Recusado |
| SQLite embarcado no cliente | Sim | Não | Recusado |
| Cache offline de PWA | Sim | Não | Recusado |
| Auto-hospedagem via Docker | Sim, no nicho | Não | Recusado |
| Motor de sincronização local-first (D1) | Não — 1.0 de junho de 2026, cinco fornecedores disputando | Sim, inclusive sobre a utilidade do CRDT | **Aceito** |
| Controle de acesso descentralizado sobre dado cifrado (D2) | Não — pesquisa | Sim, inclusive sobre o trade-off de sigilo futuro | **Aceito** |
| Fim do intermediário de recuperação de conta (D3) | Não — 28% em passwordless completo, 57% ainda phishable | Sim, e é o debate mais quente do setor | **Aceito** |
| Identidade auto-soberana / DID / credencial verificável | Parcialmente — atproto tem PDS em produção | Sim | **Cogitado e cortado por escopo**, não por maturidade: o enunciado do tema atribui identidade de agentes ao tema 2 e o objeto aqui é a arquitetura de dado e identidade da pessoa. Sobrevive como sinal fraco na seção 6. |
| Modelo de IA rodando localmente | — | — | **Cortado por fronteira**: é o tema 16. Entra aqui só como efeito (`e5.2`) e sinal fraco. |

### 12.3 Buscas realizadas

Dezoito consultas, nesta ordem: local-first / Ink & Switch / CRDT 2026; estatísticas de adoção de passkey FIDO 2026; problema de recuperação de conta e fallback de senha; Chat Control / CSAR 2026; Apple Advanced Data Protection e Investigatory Powers 2026; Zero / ElectricSQL / Jazz em produção; LGPD, gov.br e portabilidade; modelo de negócio de ponta-a-ponta e monetização local-first; Local-First Conf 2026; herança digital e contato de legado; remoção do ponta-a-ponta do Instagram; Microsoft passwordless por padrão; ANPD e portabilidade; gov.br número de usuários; LLM no dispositivo e Private Cloud Compute; Budgero; Keyhive / BeeKEM; FIDO Credential Exchange Protocol; atproto e PDS auto-hospedado; passkey no Brasil e bancos; estudo das 103 implantações de passkey.

### 12.4 Tentativas de leitura que falharam, e o que se perdeu com cada uma

| URL | O que aconteceu | O que se perdeu |
|---|---|---|
| `https://www.inkandswitch.com/local-first/` | Fetch voltou vazio, duas vezes | A página canônica do ensaio; substituída pelo PDF de Kleppmann |
| `https://app-2026.localfirstconf.com/schedule` | Só a navegação, sem programação | Nada — os dias 1 e 2 abriram |
| `https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15352.htm` | ECONNRESET | O texto da Lei 15.352/2026; a criação de 200 cargos não foi usada |
| `https://tecnoblog.net/noticias/assinatura-digital-via-gov-br-ultrapassa-548-milhoes-de-usos/` | HTTP 403 | Confirmação secundária do número do gov.br |
| `https://www.gov.br/gestao/pt-br/assuntos/noticias/2026/julho/assinatura-gov-br-supera-meta-de-2026-e-chega-a-548-milhoes-de-usos` | Conexão encerrada, duas tentativas | A **fonte primária** do número do gov.br |
| `https://agenciagov.ebc.com.br/noticias/202405/clientes-do-nubank-poderao-usar-dados-da-instituicao-bancaria-para-acessar-gov.br` | Página fora do ar por exigência da legislação eleitoral | A fonte primária da integração dos bancos ao gov.br |
| `https://www.usenix.org/conference/usenixsecurity26/presentation/jannett` | HTTP 403 | O artigo original do estudo das 103 implantações; usado por meio do resumo da KuppingerCole |

### 12.5 Material lido em resumo de busca e deliberadamente NÃO usado como fonte

- **Chat Control / CSAR.** Os resumos descrevem votação do Parlamento Europeu em 9 de julho de 2026, posição do Conselho de 26 de novembro de 2025 sem ordens de detecção obrigatórias, retirada da varredura no lado do cliente do texto do Conselho, minoria de bloqueio com Alemanha e Luxemburgo, e trílogo em colapso em junho de 2026. Nada disso foi aberto em fonte primária ou em imprensa que eu tenha conseguido verificar, e por isso **não entrou no corpo do documento**, embora fosse o contrapeso regulatório mais relevante para D2. A única menção que sobrou é a frase genérica da seção 6 sobre a pressão regulatória europeia ir na direção oposta.
- **Apple × Reino Unido (Technical Capability Notice, Investigatory Powers Tribunal).** Idem: entrou apenas como wildcard, com aviso explícito de que a evidência é de segunda mão.
- **Automerge 3.0** com formato colunar e redução de 40–60% no tamanho dos documentos: número atraente, fonte fraca (um blog de pesquisa agregada). Não usado.
- **"Quase um milhão de passkeys registradas por dia" e "98% de sucesso de login contra 32%"**, atribuídos à Microsoft: números fortes, não abertos na fonte. Não usados.
- **Eurosky com "alguns milhares de usuários" em março de 2026** e a ferramenta de migração EU-HAUL em vinte minutos: seriam boa evidência para `e3.1.1` e `e9`. Não abertos. Não usados.
- **Resolução CD/ANPD nº 32 como reconhecimento mútuo de adequação Brasil–União Europeia**: a interpretação veio de blogs jurídicos; a página oficial confirma que a resolução existe e trata de transferência internacional, e é só isso que o documento afirma.
- **Criação de 200 cargos de especialista pela Lei 15.352/2026.** Não aberto. Não usado.

### 12.6 Efeitos gerados e cortados antes de fechar a roda

- *"Seguradoras de risco cibernético recalibram apólices pela queda de credential stuffing"* — cortado por ser quase idêntico ao exemplo que o `ESTUDO.md` do autor usa para ilustrar efeito de 3ª ordem. Reaproveitar o exemplo do material didático como achado seria fraude de forma.
- *"A interface de conflito vira um gênero de tela com convenções próprias"* — cortado por redundância com `e1.1.1`.
- *"Governos passam a oferecer custódia de chave como serviço público"* — cortado por ser wildcard, não efeito; a versão que sobreviveu está em `e7.2.1` como mercado privado.
- *"O suporte técnico deixa de existir como profissão"* — cortado por exagero: o dado do FIDO mostra redução de chamados de reset (35% das organizações), não desaparecimento da função.
- *"A publicidade se reorganiza em torno de inferência no dispositivo com prova de exibição"* — seria 4ª ordem a partir de `e5.2.1`. Cortado pela regra dos três níveis e mencionado em prosa na seção 5, como a skill manda.
- *"Crianças e adolescentes ficam fora do modelo por não poderem custodiar chave"* — cortado por falta de evidência que eu tenha aberto; é a intuição mais forte que ficou de fora, e o gancho com o ECA Digital (Lei 15.211/2025, vigência em 17 de março de 2026) apareceu em fonte secundária que não usei.

### 12.7 Uma decisão de execução que precisa ficar registrada

O `DUVIDAS.md` do autor documenta um defeito conhecido desta skill: na rodada de teste, quatro efeitos de 3ª ordem receberam prazo além do horizonte pedido, sem aviso. O texto diz explicitamente que a correção **não** foi aplicada ao `SKILL.md`, para manter o `TESTE.md` fiel ao que aconteceu.

Executei o `SKILL.md` como ele está — não adicionei etapa nenhuma. Mas, ao conferir o bloco da roda contra o frontmatter, mantive todos os 43 prazos dentro de 2031 e escrevi em prosa, na seção 5, quais cadeias só se fecham depois. Isso é o que o `FORMATO` pede (o horizonte é o ano-alvo do mapa) e coincide com o que o `DUVIDAS.md` recomendava para a próxima iteração. Registro para que ninguém leia esta rodada como evidência de que o defeito foi corrigido na skill: **ele não foi**. Foi contornado nesta execução, por leitura de um arquivo que a skill não manda ler.

### 12.8 O que eu faria diferente na próxima rodada deste tema

Buscaria evidência fora do mundo anglófono, que é o buraco declarado na seção 7. Abriria o artigo do USENIX em vez do resumo. Procuraria telemetria de adoção de passkey (não autorrelato) e, principalmente, o número que não existe em lugar nenhum e que decide o mapa inteiro: **quantas pessoas, por ano, perdem definitivamente uma conta por perda de dispositivo.** Sem esse número, D3 é uma discussão sobre arquitetura quando deveria ser uma discussão sobre quantas pessoas ficam de fora.
