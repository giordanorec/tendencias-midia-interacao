---
tema: "Soberania de dados: local-first, ponta-a-ponta e o fim da senha"
slug: soberania-de-dados-local-first-ponta-a-ponta-e-o-fim-da-senha
autor_login: mjbo
zona_de_interesse: Pessoas e dados
data: 2026-09-17
horizonte: 2031
publico: Quem projeta mídia e interação
recorte_geografico: global
disrupcoes_raiz: 4
efeitos_ordem_1: 7
efeitos_ordem_2: 15
efeitos_ordem_3: 15
tecnologias_citadas: [local-first software, CRDT, Automerge, Yjs, SQLite WASM, ElectricSQL, Zero, TanStack DB, Livestore, PowerSync, Triplit, WebAuthn, passkeys, FIDO2, CXP, CXF, HPKE, extensão PRF do WebAuthn, Argon2, criptografia ponta-a-ponta, criptografia de acesso zero, Signal, Proton, iCloud Advanced Data Protection, Contato Legado da Apple, budgero, Clerk, Ollama, Apple Foundation Models, Private Cloud Compute, gov.br, Open Finance]
fontes: 15
confianca: media
experimento: Cofre derivado de passkey
skill_usada: futurizacao-mjbo
publico_ok: false
---

## 1. Resumo

Três rupturas simultâneas estão desmontando o arranjo em que a empresa é dona do seu dado, da sua conta e da sua identidade: o dado passa a morar no dispositivo e sincronizar (local-first), o servidor passa a não conseguir ler o que guarda (ponta-a-ponta) e a senha some, substituída por uma chave criptográfica presa ao aparelho (passkeys). As três já saíram do laboratório — a FIDO Alliance contabiliza 5 bilhões de passkeys em uso e 75% das pessoas com pelo menos uma conta configurada; o WebAuthn Level 3 virou Recomendação do W3C em 25 de agosto de 2026; o Automerge 3.0 derrubou o consumo de memória de CRDTs em mais de dez vezes; e produtos de escala como o Linear provaram que local-first não é hobby. O que ainda não aconteceu é a ruptura: quem perde a senha perde a conta sem ter o que resetar, quem morre leva o chaveiro junto (o Contato Legado da Apple não alcança passkeys), e um servidor cego não sustenta publicidade nem moderação por leitura de conteúdo. Este mapa aposta que, até 2031, o conflito não será mais técnico e sim de arquitetura de poder — quem guarda a chave, quem responde pela recuperação, quem paga a conta de um software que não pode vender o que hospeda. E aposta também que a peça mais subestimada de todas é a extensão PRF do WebAuthn, que transforma a passkey de credencial de login em fonte da chave que cifra o dado, costurando as três rupturas numa só.

## 2. O tema

O objeto aqui não é criptografia, nem autenticação, nem banco de dados isoladamente. É a **arquitetura de dado e identidade da pessoa** — onde o dado dela mora, quem consegue lê-lo e como ela prova que é ela. Essas três perguntas foram respondidas, nos últimos vinte anos, da mesma maneira: o dado mora no servidor de quem faz o software, a empresa lê tudo o que guarda (é assim que ela personaliza, modera e monetiza) e a identidade é emprestada por um intermediário — o "entrar com Google", o e-mail, a senha guardada num banco de hashes.

O tema encosta em mídia e interação em três pontos que não são periféricos. **Primeiro, a interface.** Um aplicativo local-first não tem estado de carregamento como elemento estrutural: o dado já está ali. Em compensação, ele tem divergência — duas versões do mesmo documento que precisam ser reconciliadas na frente do usuário. Isso exige um vocabulário visual que ainda não existe de forma consolidada, do mesmo jeito que o "desfazer" um dia não existia. **Segundo, o modelo de negócio da mídia.** Recomendação, personalização e moderação em escala pressupõem leitura do conteúdo pelo servidor. Se o servidor é cego, essas funções não somem — migram para o cliente, e passam a ser artefatos locais que o usuário, em princípio, pode inspecionar e editar. **Terceiro, a autenticação como momento de interação.** A tela de login é o primeiro contato de qualquer produto digital. Passkey muda o que essa tela é: deixa de ser um teste de memória e vira um gesto biométrico local de meio segundo — e, quando dá errado, deixa de ter conserto barato.

Merece um mapa de futuro, e não um levantamento de estado da arte, por uma razão específica: as três rupturas estão em estágios de maturidade muito diferentes e as consequências interessantes aparecem no cruzamento delas, não em nenhuma isoladamente. A passkey já é mainstream em adoção e não rompeu nada ainda. O local-first é maduro em biblioteca e imaturo em produto de consumo. A criptografia ponta-a-ponta por padrão é tecnicamente trivial e politicamente contestada em tribunal, agora, em pelo menos duas jurisdições. Um levantamento de estado da arte descreveria três curvas separadas; o que este documento tenta é mapear o que acontece quando elas se encontram — e a peça que as encontra, a derivação de chave a partir da passkey, é exatamente a que quase ninguém está olhando.

## 3. Onde isso está hoje

### O que já existe e funciona em produção

**Passkeys saíram do estágio de promessa.** O relatório do Dia Mundial da Passkey de 2026 da FIDO Alliance estima 5 bilhões de passkeys em uso no mundo, 90% de consciência do público, 75% das pessoas com passkey habilitada em pelo menos uma conta e 49% usando regularmente quando disponível. No lado corporativo, 68% das organizações declararam ter implantado ou estar implantando passkeys para acesso de funcionários, e 28% se declaram totalmente sem senha. A pesquisa foi conduzida pela Sapio Research em abril de 2026, com 11.000 consumidores em dez países e 1.400 tomadores de decisão em empresas de 500+ funcionários [1]. Duas ressalvas importam: a FIDO Alliance é a entidade que promove o padrão — é parte interessada divulgando pesquisa encomendada — e "habilitou uma vez" não é o mesmo que "usa como método principal"; o próprio relatório registra que 57% das organizações ainda dependem de métodos passíveis de phishing como acesso primário dos funcionários.

**O padrão fechou.** O WebAuthn Level 3 tornou-se Recomendação do W3C em 25 de agosto de 2026 [2]. Isso encerra o ciclo normativo que começou em 2019 e transforma o que era "extensão experimental de navegador" em superfície estável — inclusive a capacidade, que a Level 3 formaliza, de derivar material de chave criptográfica a partir da credencial (a extensão PRF).

**Portabilidade de credencial deixou de ser papel.** CXF (formato) e CXP (protocolo de transferência, com HPKE cifrando a credencial em trânsito) são os dois padrões FIDO para mover passkeys entre chaveiros. O CXF está em Review Draft desde março de 2025; o CXP mirava padronização formal para o início de 2026. A Apple já embarcou transferência de credencial baseada em CXF no iOS e macOS 26, e Apple, Google, Microsoft, 1Password, Bitwarden e Dashlane contribuem ativamente às especificações [3]. O que esses padrões **não** resolvem, e isso está declarado: credenciais legadas continuam presas ao provedor original, e a aplicação que confia na credencial não é notificada quando o usuário troca de chaveiro.

**No Brasil, o gov.br adotou o mesmo caminho.** A atualização do aplicativo, noticiada em fevereiro de 2026, permite entrar sem senha e sem reconhecimento facial do próprio gov.br, usando passkeys ou a biometria nativa do aparelho, para contas Prata e Ouro [4]. A fonte é imprensa secundária — a página oficial da Secretaria de Comunicação Social que apareceria como fonte primária estava com conteúdo restrito quando tentei abri-la, e por isso nenhum número de usuários entra aqui.

**Local-first virou produto de escala, não experimento.** O termo vem do ensaio de 2019 do Ink & Switch (Kleppmann, Wiggins e outros), com sete ideais — rápido, multi-dispositivo, offline, colaborativo, longevo, privado e sob controle do usuário [5][6]. A infraestrutura amadureceu: o Automerge 3.0, lançado em julho de 2025, rearquitetou a biblioteca para representação comprimida em tempo de execução, com o exemplo mais citado sendo Moby Dick colado num documento consumindo 700 MB no Automerge 2 e 1,3 MB no Automerge 3 — mais de dez vezes menos — e tempos de carregamento caindo de horas para segundos [7]. No mercado, uma safra de motores de sincronização (ElectricSQL, Zero, TanStack DB, Livestore, PowerSync, Triplit) disputa a camada, e o Linear é o caso repetidamente citado de produto de grande porte construído sobre sincronização local [8].

**Criptografia de acesso zero é um modelo de negócio existente, não uma hipótese.** A Proton declara que não consegue varrer a caixa de entrada do usuário e que por isso só se financia por planos pagos [9]. A Signal, como organização sem fins lucrativos, estimou em 2023 que precisaria de cerca de US$ 50 milhões por ano para operar em 2025, com aproximadamente US$ 14 milhões só de infraestrutura (US$ 6 milhões apenas em taxas de registro por SMS) e cerca de US$ 19 milhões de pessoal para cerca de 50 funcionários [10]. Esse é o número mais útil deste levantamento inteiro: é o preço declarado de operar comunicação cifrada em escala sem ler nada.

### O que existe mas não funciona — ou funciona com atrito grave

**A recuperação de conta é o buraco estrutural da passkey.** A crítica recorrente não é sobre a cifra e sim sobre o que acontece depois: não existe "redefinir" uma credencial cuja chave privada nunca saiu do aparelho. Quando a passkey é vinculada ao dispositivo e o dispositivo se perde, não há caminho de volta pelo mesmo canal. A consequência prática relatada é que o custo do suporte não desaparece — muda de natureza, de reset de senha para verificação de identidade, que é mais cara e mais lenta. Esse ponto veio de busca e de literatura secundária; a revisão de literatura acadêmica que eu queria citar como fonte primária (MDPI, *Applied Sciences*) devolveu HTTP 403 e por isso não entra na lista de fontes.

**A herança digital não tem caminho.** A documentação da Apple é explícita: o Contato Legado tem acesso a fotos, mensagens, notas, arquivos e backups, mas **não** a filmes, músicas, livros, assinaturas e aos dados guardados no Chaveiro do iCloud — que é onde moram informações de pagamento, senhas e passkeys [11]. Ou seja: o mecanismo oficial de sucessão digital da maior plataforma de passkeys do mundo exclui exatamente as passkeys.

**Local-first cobra caro em complexidade, e a lista de limitações é longa e conhecida.** Sincronização é a parte mais difícil; conflitos resolvidos por CRDT podem ser tecnicamente consistentes e semanticamente absurdos para o usuário; migração de schema precisa acontecer em cada cliente, com versões coexistindo; navegadores descartam armazenamento local (o Safari apaga IndexedDB após sete dias de inatividade); conjuntos de dados grandes não cabem; lógica pesada no cliente pune aparelho velho; e dado no cliente é, em tese, extraível se o dispositivo for comprometido [12]. Do lado de quem escolhe motor de sincronização hoje, os relatos são de arestas concretas: long polling lento e frágil, escrita do lado do cliente resolvida caso a caso, um usuário por instância de SQLite em arquiteturas que não preveem compartilhamento, ausência de presença em tempo real, e risco de manutenção em projetos absorvidos por outras empresas [8]. Autorização multiusuário permanece como problema aberto declarado da comunidade.

**A arquitetura sem intermediário ainda usa intermediário.** O caso mais concreto que abri: o budgero, aplicativo de orçamento pessoal apontado como exemplo nº 1 de local-first com ponta-a-ponta e self-host, guarda os dados em SQLite no cliente (via WASM) e sincroniza cifrado através de um backend em Go, sob licença AGPL-3.0. Mas a versão em nuvem autentica com **Clerk**, um provedor de identidade terceiro; é só na versão self-hosted que a autenticação é local e sem dependência de nuvem [13]. A soberania completa, no exemplo canônico, é uma opção de instalação — não o padrão do produto.

### O que está em disputa jurídica e política, agora

**Reino Unido × Apple.** Em fevereiro de 2025 o governo britânico emitiu uma Technical Capability Notice sob a seção 253 do Investigatory Powers Act 2016 exigindo capacidade de acesso a dados do iCloud. A Apple retirou o Advanced Data Protection para novos usuários no Reino Unido e deu prazo para quem já usava desabilitar. Em outubro de 2025 o governo retirou a primeira notificação e emitiu uma segunda, focada em usuários britânicos. O processo de Privacy International e co-reclamantes segue ativo no Investigatory Powers Tribunal, com audiência de gestão em setembro de 2026 e audiência substantiva planejada para dezembro de 2026 [14].

**União Europeia × Chat Control.** O Parlamento Europeu rejeitou em 26 de março de 2026 a extensão da derrogação temporária que permitia varredura voluntária de material de abuso infantil, e a derrogação expirou em 4 de abril de 2026 [15]. O que se seguiu — nova aprovação de regime temporário pelo Conselho, votação parlamentar de julho de 2026 com emendas que blindariam aplicativos com ponta-a-ponta — aparece apenas em fontes secundárias agregadoras e por isso está registrado no anexo, não como afirmação sustentada aqui. O que é seguro dizer: a questão está aberta e o resultado não está decidido.

### Quem está construindo

Padrões: W3C (WebAuthn), FIDO Alliance (CTAP, CXP, CXF). Plataformas: Apple, Google, Microsoft — que controlam os chaveiros. Bibliotecas e pesquisa local-first: Ink & Switch, Automerge, Yjs. Camada comercial de sincronização: ElectricSQL, Zero, TanStack DB, PowerSync, Livestore, Triplit. Serviços cifrados: Proton, Signal. Chaveiros independentes: 1Password, Bitwarden, Dashlane. E uma camada difusa e relevante de software pessoal open source — budgero, kostos, Atlas, fintrack, rotki, BeeCount, e a leva de contabilidade com IA self-hosted (TaxHacker, wilson, accountant24) — que é onde o padrão aparece primeiro porque é onde o custo de errar é menor.

## 4. As disrupções-raiz

Quatro candidatos passaram pelo teste da Etapa 3. Um quinto grupo — backup criptografado, HTTPS, 2FA por SMS, "login com Google", self-hosting via Docker — foi reprovado na primeira pergunta: não torna possível nada que antes não fosse, só torna mais barato ou mais fácil. Esses ficam na Seção 3, como parte do presente, e não entram aqui.

### 4.1 Local-first: o dado mora no cliente e o servidor vira transporte

**O que rompe.** Rompe a premissa de que usar um software implica depositar o dado com quem o fabrica. Quando a cópia autoritativa está no dispositivo, encerrar o serviço deixa de significar perder o acervo, e "exportar meus dados" deixa de ser uma funcionalidade concedida para virar o estado normal do sistema. Invalida diretamente o papel do backend como custodiante-e-fonte-da-verdade, e enfraquece a métrica de retenção construída sobre a dificuldade de sair.

**O que torna possível que antes não era.** Software colaborativo que continua funcionando — inclusive colaborativamente, entre pares — sem a empresa que o escreveu. Não é a mesma coisa que "modo offline": é autoridade do dado, não cache.

**Por que agora, e não há cinco anos.** Três mudanças datáveis: CRDTs deixaram de ser proibitivos em memória (Automerge 3.0, julho de 2025, com reduções de ordem de grandeza [7]); SQLite compilado para WASM tornou possível um banco relacional real dentro do navegador; e existe hoje uma camada comercial de motores de sincronização competindo entre si [8], o que significa que a decisão deixou de exigir construir infraestrutura do zero. Há cinco anos, adotar local-first custava um time de sistemas distribuídos.

**O que falta para se concretizar.** Autorização multiusuário, que segue como problema aberto; migração de schema em frota heterogênea; e uma resposta para armazenamento em navegador, que hoje é revogável pelo próprio navegador [12]. Enquanto essas três não tiverem resposta padrão, local-first continua viável para ferramenta profissional e difícil para produto de massa.

### 4.2 Ponta-a-ponta por padrão: o servidor não consegue ler o que guarda

**O que rompe.** Rompe o pressuposto de que hospedar implica poder ler. Invalida, de uma vez, três coisas que a indústria trata como naturais: monetização por análise do conteúdo hospedado, personalização executada no servidor e moderação de conteúdo por varredura. E invalida, do lado de quem exige acesso, a via mais simples de obtenção de dado — porque ordem judicial contra quem não tem a chave não produz texto claro.

**O que torna possível que antes não era.** Terceirizar a guarda sem terceirizar a confiança. Isso é diferente de "guardar com quem eu confio": a confiança deixa de ser um requisito do arranjo.

**Por que agora.** Cifragem no cliente ficou trivial em custo de engenharia e de CPU; o custo da confiança em terceiros ficou visível e mensurável em vazamentos e encerramentos; e — a peça nova — a Recomendação do WebAuthn Level 3, de 25 de agosto de 2026, formaliza derivar material de chave da própria credencial de hardware [2], o que dispensa o usuário de memorizar uma senha-mestra para que exista cifragem forte no cliente. Esse último item é o que muda a equação: até aqui, ponta-a-ponta em aplicação de consumo esbarrava em "e onde a pessoa guarda a chave?".

**O que falta para se concretizar.** Falta sobreviver à disputa regulatória em curso — o caso britânico contra a Apple [14] e o ciclo europeu do Chat Control [15] são os dois processos que vão definir se o servidor cego é um direito ou um obstáculo. E falta modelo de negócio: o preço declarado de operar cifrado em escala sem ler nada é conhecido e é alto [10][9].

**Ressalva.** Esta é a disrupção com maior chance de não se concretizar na forma descrita. Ver Seção 7, item 3.

### 4.3 Passkeys: a autenticação deixa de ter segredo compartilhado

**O que rompe.** Rompe o segredo memorizável como base da identidade digital. Invalida o phishing de credencial como vetor de massa — não porque as pessoas fiquem mais espertas, mas porque não há nada transmissível para entregar ao atacante. Invalida o mercado de reset de senha e o help desk construído em cima dele. E ameaça, de forma menos óbvia, o "entrar com Google/Apple/Facebook": se o aparelho prova a identidade diretamente para cada serviço, o federador perde a função de intermediário obrigatório — embora ganhe outra, como dono do chaveiro.

**O que torna possível que antes não era.** Autenticação forte sem custo cognitivo e — via extensão PRF — uma chave criptográfica estável, por origem, disponível a qualquer aplicação web sem que o usuário precise gerenciar segredo nenhum.

**Por que agora.** WebAuthn Level 3 como Recomendação do W3C em agosto de 2026 [2]; 5 bilhões de passkeys em circulação e suporte nos três sistemas operacionais dominantes [1]; e CXP/CXF implementados na prática a partir de 2026, resolvendo o argumento de aprisionamento que travava adoção corporativa [3].

**O que falta para se concretizar.** Recuperação e sucessão. As duas estão documentadamente sem resposta: não há o que redefinir quando a credencial se perde, e o mecanismo oficial de herança da Apple exclui explicitamente o Chaveiro onde as passkeys moram [11]. Enquanto não houver um padrão de recuperação comparável em maturidade ao próprio WebAuthn, a passkey convive com um caminho de senha atrás dela — e um caminho de senha atrás dela significa que a senha não acabou.

### 4.4 IA como cliente do dado local (emergente, com ressalva)

**O que rompe — ou ameaça romper.** Rompe a barganha implícita "para ter assistente útil, entregue seu dado". Se o modelo vai até o acervo e o acervo não sai de casa, "não temos acesso ao seu dado" deixa de ser incompatível com "temos um produto inteligente".

**Ressalva explícita, e é por isso que esta entra como emergente e não como disrupção consumada:** não consigo nomear uma prática, um papel ou um modelo de negócio que isto já tenha invalidado. É aposta, não rompimento. Os exemplos são pequenos — contabilidade com IA self-hosted, agentes financeiros que mantêm tudo em SQLite local — e a arquitetura dominante segue sendo híbrida, com escalonamento para servidor quando o pedido é difícil.

**Por que agora.** Modelos pequenos ficaram utilizáveis em hardware de consumo, e a arquitetura híbrida com garantias auditáveis virou posição de plataforma. Esse é o cruzamento com o tema 16 — e a fronteira que eu mantenho é: **o modelo rodando localmente é o tema 16; aqui o objeto é o dado que ele lê e a identidade de quem o invoca.**

**O que falta.** Falta que a IA local seja boa o bastante para que alguém troque conveniência por soberania sem se sentir punido. E falta resolver o que o agente local envia quando chama uma ferramenta externa — porque nesse instante o dado sai, e toda a arquitetura de servidor cego atrás dele não serve de nada.

## 5. A roda dos futuros

```yaml
roda:
  - disrupcao: Local-first — o dado mora no cliente e o servidor vira transporte
    efeitos:
      - id: e1
        ordem: 1
        efeito: Aplicações passam a funcionar por inteiro offline e a latência de interação deixa de depender da rede
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e1.1
            ordem: 2
            efeito: O design de interface abandona o estado de carregamento como elemento estrutural e passa a projetar para divergência e reconciliação
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e1.1.1
                ordem: 3
                efeito: Consolida-se um vocabulário visual de conflito e proveniência — quem mudou o quê, quando e em qual dispositivo — comparável ao que o desfazer foi para a edição
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e1.2
            ordem: 2
            efeito: O time de produto herda a complexidade que era do servidor, incluindo migração de schema em frota de clientes em versões diferentes
            sinal: medio
            prazo: 2028
            confianca: media
            efeitos:
              - id: e1.2.1
                ordem: 3
                efeito: Versionamento de dado do usuário vira competência de carreira e surge o papel formal de engenheiro de sincronização
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e2
        ordem: 1
        efeito: O encerramento de um serviço deixa de significar perda do acervo, porque a cópia autoritativa já está no dispositivo
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e2.1
            ordem: 2
            efeito: A promessa de que o dado é do usuário passa a ser verificável tecnicamente e vira critério de compra em software profissional
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e2.1.1
                ordem: 3
                efeito: Editais e contratos públicos passam a exigir arquitetura de saída — exportabilidade contínua, e não exportação sob pedido
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e2.2
            ordem: 2
            efeito: O formato de arquivo volta a importar e a interoperabilidade deixa de ser um assunto de API para voltar a ser um assunto de documento
            sinal: fraco
            prazo: 2030
            confianca: baixa
            efeitos:
              - id: e2.2.1
                ordem: 3
                efeito: Formatos comuns por domínio de vida pessoal — orçamento, anotação, saúde — são disputados como padrão, repetindo a briga do ODF contra o OOXML em escala doméstica
                sinal: fraco
                prazo: 2033
                confianca: baixa
  - disrupcao: Ponta-a-ponta por padrão — o servidor não consegue ler o que guarda
    efeitos:
      - id: e3
        ordem: 1
        efeito: O provedor perde a capacidade técnica de atender ordens de acesso ao conteúdo e a disputa migra do dado hospedado para o dispositivo e para os metadados
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e3.1
            ordem: 2
            efeito: A regulação se bifurca por jurisdição e o mesmo produto passa a ter arquiteturas diferentes conforme o país onde é vendido
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.1.1
                ordem: 3
                efeito: Escolher em que mercado operar vira escolher que criptografia oferecer, e empresas menores desistem de jurisdições hostis em vez de manter duas engenharias
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e3.2
            ordem: 2
            efeito: A vigilância se desloca para o cliente e propostas de varredura no dispositivo antes da cifragem voltam a cada ciclo legislativo
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e3.2.1
                ordem: 3
                efeito: A confiança na cadeia de construção do aplicativo — build reprodutível, atestação, auditoria externa — vira o campo de batalha principal da privacidade, acima da cifra em si
                sinal: fraco
                prazo: 2031
                confianca: baixa
      - id: e4
        ordem: 1
        efeito: O modelo de receita baseado em ler o dado hospedado deixa de estar disponível na camada de armazenamento e a monetização migra para assinatura
        sinal: medio
        prazo: 2029
        confianca: media
        efeitos:
          - id: e4.1
            ordem: 2
            efeito: Software pessoal com privacidade se firma como bem pago enquanto o gratuito com anúncio permanece padrão de massa, e a privacidade se estratifica por renda
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.1.1
                ordem: 3
                efeito: Surge pressão política por sincronização cifrada como serviço público ou cooperativo, nos moldes do que o Pix foi para pagamento no Brasil
                sinal: fraco
                prazo: 2033
                confianca: baixa
          - id: e4.2
            ordem: 2
            efeito: Personalização e recomendação são reimplementadas no cliente e o ranking passa a ser um artefato local, em princípio inspecionável pelo usuário
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e4.2.1
                ordem: 3
                efeito: Editar o próprio algoritmo de recomendação vira uma peça de interface de primeira classe, como hoje é montar uma playlist
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e4.3
            ordem: 2
            efeito: A moderação em escala perde a leitura do conteúdo e se reorganiza em torno de denúncia, reputação e grafo social
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e4.3.1
                ordem: 3
                efeito: A responsabilização legal por conteúdo se desloca da plataforma para a comunidade e para o fabricante do cliente, e o debate jurídico muda de alvo
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: Passkeys — a autenticação deixa de ter segredo compartilhado
    efeitos:
      - id: e5
        ordem: 1
        efeito: O phishing de credencial deixa de funcionar como vetor de massa e o ataque migra para sessão, dispositivo e engenharia social sobre o fluxo de recuperação
        sinal: forte
        prazo: 2028
        confianca: alta
        efeitos:
          - id: e5.1
            ordem: 2
            efeito: O ponto mais fraco da conta passa a ser o caminho de recuperação, que vira o alvo principal da fraude
            sinal: forte
            prazo: 2028
            confianca: alta
            efeitos:
              - id: e5.1.1
                ordem: 3
                efeito: A recuperação de conta se torna serviço regulado, com padrão de verificação de identidade e responsabilidade definida sobre quem errou na reemissão
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e5.2
            ordem: 2
            efeito: O suporte deixa de gastar com redefinição de senha e passa a gastar com reconquista de identidade, um atendimento mais caro e mais demorado
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e5.2.1
                ordem: 3
                efeito: Organizações pequenas terceirizam identidade de novo para não manter esse atendimento, recriando o intermediário que a passkey prometia dispensar
                sinal: medio
                prazo: 2031
                confianca: baixa
      - id: e6
        ordem: 1
        efeito: A conta passa a ser ancorada no ecossistema do fabricante do aparelho, porque é o chaveiro dele que sincroniza e resguarda a passkey
        sinal: forte
        prazo: 2027
        confianca: alta
        efeitos:
          - id: e6.1
            ordem: 2
            efeito: A portabilidade de credencial deixa de ser cortesia do fornecedor e passa a ser exigência regulatória de concorrência
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.1.1
                ordem: 3
                efeito: O chaveiro, e não o endereço de e-mail, se torna a identidade raiz da pessoa, e trocar de chaveiro vira evento de vida comparável a trocar de banco
                sinal: fraco
                prazo: 2032
                confianca: baixa
          - id: e6.2
            ordem: 2
            efeito: A sucessão digital fica sem caminho porque o que o contato legado não alcança é exatamente o chaveiro
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e6.2.1
                ordem: 3
                efeito: Consolida-se uma figura de custódia criptográfica com segredo dividido entre pessoas de confiança, oferecida como serviço de cartório, de banco ou de família
                sinal: fraco
                prazo: 2032
                confianca: baixa
  - disrupcao: IA como cliente do dado local — o modelo vai até o dado, e não o contrário (emergente)
    efeitos:
      - id: e7
        ordem: 1
        efeito: Assistentes passam a operar sobre o acervo pessoal inteiro sem que ele seja enviado a um servidor, e privacidade deixa de custar utilidade
        sinal: medio
        prazo: 2028
        confianca: media
        efeitos:
          - id: e7.1
            ordem: 2
            efeito: A qualidade do assistente passa a depender do hardware do usuário e a desigualdade de aparelho vira desigualdade de capacidade assistida
            sinal: medio
            prazo: 2030
            confianca: media
            efeitos:
              - id: e7.1.1
                ordem: 3
                efeito: Aparelho pessoal passa a ser comparado por quanto de assistente roda localmente, como na década anterior foi comparado por câmera
                sinal: fraco
                prazo: 2031
                confianca: baixa
          - id: e7.2
            ordem: 2
            efeito: O ponto de coleta se desloca do servidor para o aplicativo de IA local, que por definição enxerga tudo
            sinal: medio
            prazo: 2029
            confianca: media
            efeitos:
              - id: e7.2.1
                ordem: 3
                efeito: A pergunta de privacidade deixa de ser onde o dado está e passa a ser o que o agente local envia quando aciona uma ferramenta externa
                sinal: fraco
                prazo: 2031
                confianca: baixa
```

### O que o bloco não diz

**Primeiro: os quatro ramos não são independentes, e o bloco os desenha como se fossem.** A dependência mais forte é entre 4.2 e 4.3: quase tudo que está sob `e3` e `e4` pressupõe que o ponta-a-ponta por padrão sobreviva à disputa regulatória em curso. Se não sobreviver, treze dos trinta e sete efeitos caem junto. É exatamente o problema que a Análise de Impacto Cruzado (Gordon e Helmer, RAND, 1966) existe para tratar e que o Futures Wheel, sozinho, não trata: a roda lista efeitos como se cada um tivesse probabilidade própria, quando na verdade eles se condicionam.

**Segundo: há um efeito que aparece em dois ramos diferentes e o YAML não consegue mostrar isso.** `e5.2.1` (organizações terceirizam identidade de novo) e `e6.1.1` (o chaveiro vira identidade raiz) convergem no mesmo lugar: a reconstituição do intermediário. A promessa da Seção 4.3 é desintermediação; os dois caminhos de segunda e terceira ordem apontam para reintermediação, por motivos diferentes — um por custo operacional, outro por posse do chaveiro. Quando dois ramos independentes chegam ao mesmo destino, isso é mais forte do que qualquer um dos dois isoladamente, e a estrutura em árvore esconde.

**Terceiro: os prazos são a parte mais frágil do bloco e devem ser lidos como ordem, não como data.** Eu tenho confiança razoável em que `e5.1` acontece antes de `e5.1.1`; não tenho nenhuma confiança em que `e5.1.1` aconteça em 2032 e não em 2036. Onde o campo `prazo` parece preciso, ele é decorativo.

**Quarto: não há nenhum efeito de retrocesso na roda.** Nenhum ramo contempla passkeys sendo abandonadas depois de um incidente de recuperação em massa, nem local-first sendo revertido por custo de manutenção. Isso é uma escolha do método — o Futures Wheel deriva consequências da disrupção se concretizando — mas é também uma distorção: no mundo real, tecnologias recuam.

## 6. Sinais fracos e wildcards

### Sinais fracos

**1. A extensão PRF do WebAuthn — a passkey deixando de ser só login.** É o sinal mais importante deste mapa e o menos comentado fora de círculos de especialistas. Formalizada na Level 3, agora Recomendação [2], ela permite derivar material de chave criptográfica a partir da credencial de hardware. Isso significa que a chave que cifra o dado local pode nascer da mesma biometria que faz o login, sem senha-mestra memorizada. É a costura entre as três disrupções deste mapa, e ela está disponível **agora**, em navegador, para qualquer desenvolvedor. Praticamente nenhum produto de consumo a usa.

**2. Portabilidade de credencial existindo antes de haver demanda social por ela.** CXP e CXF estão implementados em plataforma [3] antes que o público tenha percebido que está aprisionado a um chaveiro. Padrão que chega antes do problema virar conversa é raro, e costuma indicar que quem redigiu o padrão viu a disputa antecipadamente — no caso, o risco regulatório de concorrência.

**3. Sete dias de inatividade.** O Safari apaga IndexedDB depois de sete dias sem uso do site [12]. Uma política de navegador, tomada por razões de rastreamento, pode inviabilizar sozinha o local-first na web sem instalação. É um detalhe minúsculo com poder de veto sobre um ramo inteiro da roda — e é decidido por três empresas, sem processo público.

**4. O intermediário sobrevivendo dentro do exemplo canônico.** O budgero usa Clerk na nuvem e autenticação local só no self-host [13]. Quando o caso exemplar de uma arquitetura contém o oposto dela na configuração padrão, isso é dado sobre o mercado, não sobre o projeto.

**5. O preço declarado de não ler nada.** Cerca de US$ 50 milhões por ano para operar a Signal, com US$ 6 milhões só em taxas de registro por SMS [10]. É o número que qualquer conversa sobre "por que não é tudo assim" tem de enfrentar.

### Wildcards

**A. Uma legislação que obrigue local-first ou ponta-a-ponta por padrão para dado sensível.** Impacto: altíssimo — inverteria o ônus e transformaria cada efeito de segunda ordem deste mapa em requisito de conformidade em dois ou três anos. **Por que a probabilidade é baixa:** a direção regulatória dominante medida em 2026 é a oposta. O Reino Unido está em tribunal exigindo capacidade de acesso [14] e o ciclo europeu do Chat Control mostra um legislador dividido, não um legislador convencido [15]. Obrigar ponta-a-ponta exigiria que os mesmos parlamentos que discutem varredura decidissem proibi-la — uma inversão sem precedente recente.

**B. Comprometimento em escala de um chaveiro de plataforma.** Se o chaveiro sincronizado de uma das três grandes for comprometido de forma ampla, centenas de milhões de contas ficam sem caminho de volta **por construção**: não há redefinição. **Por que a probabilidade é baixa:** hardware seguro, atestação e separação de chaves tornam esse ataque muito caro. **Por que o impacto é alto:** seria o primeiro incidente de segurança sem procedimento de remediação conhecido, e provavelmente traria a senha de volta como caminho oficial de contingência — matando a disrupção 4.3 pela porta dos fundos.

**C. Rotação forçada por criptografia pós-quântica.** Se a migração para algoritmos resistentes a computação quântica exigir reemissão de credenciais em massa, vai expor que praticamente ninguém projetou rotação de passkey em escala. **Por que a probabilidade é baixa no horizonte de 2031:** os cronogramas de transição vigentes são mais longos que isso, e a maior parte do risco de "colher agora, decifrar depois" recai sobre dado cifrado em trânsito, não sobre credencial de autenticação. **Por que o impacto é alto:** um evento de reemissão obrigatória testaria, num único movimento, exatamente o fluxo que o mapa aponta como não resolvido.

**D. Uma decisão judicial que responsabilize o fabricante do cliente pelo que o cliente cifra.** Se a responsabilidade migrar da plataforma para quem escreve o aplicativo, o software livre local-first — mantido por uma ou duas pessoas, sem departamento jurídico — vira o elo fraco. **Por que a probabilidade é baixa:** exigiria reinterpretar regimes de responsabilidade intermediária consolidados. **Por que o impacto é alto:** esvaziaria justamente a camada onde a arquitetura deste mapa nasce.

## 7. Contra o próprio mapa

### 1. O efeito que é só extrapolação linear do presente: `e5.2`

"O suporte deixa de gastar com redefinição de senha e passa a gastar com reconquista de identidade" é o help desk de hoje com outro rótulo. A estrutura não muda: existe um canal de atendimento, existe uma pessoa trancada do lado de fora, existe um procedimento de verificação e existe um custo por ticket. Troca-se o motivo do chamado e o preço unitário sobe. Isso é mudança de grau, não de natureza — exatamente o que o teste da Etapa 3 rejeitaria se `e5.2` fosse candidato a disrupção-raiz. Ele está na roda porque é provável, não porque seja interessante. O efeito que seria uma mudança de natureza — `e5.1.1`, recuperação virando serviço regulado com responsabilidade atribuída — está em confiança baixa, e é o que realmente valeria observar.

### 2. O efeito que assume velocidade de adoção sem caso comparável: `e4`

`e4` afirma que a receita migra de leitura-do-dado para assinatura até 2029. Não encontro caso comparável com essa velocidade. Dois candidatos, e os dois depõem contra:

- **HTTPS por padrão.** O Let's Encrypt foi lançado em 2014 e a web só chegou perto de universalizar tráfego cifrado por volta de 2021 — cerca de sete anos. E essa mudança era **grátis**, **invisível para o usuário final** e **empurrada por navegadores** que passaram a marcar sites como inseguros. Mesmo com os três fatores a favor, levou sete anos.
- **E-mail pago com privacidade.** A Proton existe desde 2014 com o modelo de acesso zero [9] e, uma década depois, o e-mail de massa continua sendo gratuito e lido por quem hospeda. A migração que `e4` prevê em três anos não aconteceu em doze.

`e4` exige o inverso dos três fatores do HTTPS: uma mudança **cara**, **visível** (a pessoa passa a pagar) e **contrária** ao interesse de quem hoje domina a distribuição. Três anos é uma data que eu escolhi porque ela cabia no horizonte do mapa, não porque algum precedente a sustente. Se eu fosse honesto com a evidência, `e4` teria prazo 2034 e confiança baixa — e, com isso, `e4.1`, `e4.2` e `e4.3` e seus três descendentes sairiam do horizonte de 2031 inteiro.

### 3. A disrupção que pode não se concretizar: 4.2, o ponta-a-ponta por padrão

É a mais frágil das quatro, e não por razão técnica — tecnicamente ela está pronta. Ela depende de duas decisões que estão sendo tomadas por outras pessoas, em tribunal e em parlamento, enquanto este documento é escrito: o caso da Technical Capability Notice britânica contra a Apple, com audiência substantiva planejada para dezembro de 2026 [14], e o ciclo europeu de regulação de varredura [15]. Se o resultado for varredura obrigatória no cliente antes da cifragem, ponta-a-ponta continua existindo como palavra e deixa de existir como garantia.

**O que sobra do mapa se 4.2 cair.** Sobra bastante, e é importante dizer por quê: **local-first não exige ponta-a-ponta** (dá para ter o dado autoritativo no cliente e sincronizar em claro) e **passkey não exige servidor cego** (autenticação e cifragem de conteúdo são camadas distintas). Os ramos `e1`, `e2`, `e5`, `e6` e `e7` continuam de pé. Caem `e3` e `e4` com seus cinco filhos e cinco netos — treze dos trinta e sete efeitos, pouco mais de um terço do mapa. O que muda de tom é o resto: sem servidor cego, local-first vira principalmente uma técnica de desempenho e resiliência, e para de ser uma tese sobre poder. O mapa sobrevive; a tese dele, não.

### 4. O viés que entrou aqui, e onde exatamente ele inflou o mapa

O tema chegou por uma varredura de finanças pessoais com privacidade, ligada a um projeto real em que o autor **removeu o provedor de identidade terceiro do próprio produto**. Esse é um viés de quem já pagou o custo da decisão e, tendo pago, precisa que ela tenha valido a pena. Onde ele aparece:

- **Em `e2.1`** ("verificabilidade vira critério de compra"). Isso é uma preferência de desenvolvedor projetada como demanda de mercado. Não há, no levantamento, nenhuma evidência de que comprador de software pessoal escolha por arquitetura. A evidência disponível aponta para o contrário: o budgero, exemplo nº 1 da própria varredura que originou o tema, mantém um provedor de identidade terceiro na versão em nuvem e só dispensa no self-host [13]. Quem escreveu o produto sabe fazer sem; escolheu com, na configuração que a maioria vai usar.
- **Em `e6.1.1`** ("o chaveiro vira identidade raiz"). Efeito elegante, com zero sinal atual, escrito porque fecha bem o argumento.

**E há um viés mais grave, que é o de classificação.** O critério declarado para eu mudar de ideia sobre este mapa era evidência de que a adoção já passou da maioria inicial de Rogers. Para passkeys, essa evidência existe e está na Seção 3: 75% com pelo menos uma passkey habilitada e 49% usando regularmente [1]. Pelo critério de difusão, passkey não é tecnologia emergente — é maioria inicial consolidada indo para maioria tardia. Eu mantive 4.3 como disrupção-raiz porque o teste da Etapa 3 mede **ruptura**, não **difusão**, e o que ela rompe (recuperação, sucessão, intermediação de identidade) continua sem ter rompido. Mas registro que essa é uma escolha discutível, que ela mantém no mapa a disrupção com maior número de efeitos de sinal forte, e que um leitor aplicando estritamente a régua da disciplina — "o que já é comum em produto de massa não entra" — teria razão em cortar 4.3 inteira. Se cortar, caem `e5` e `e6` com dez descendentes, e o mapa perde metade dos seus efeitos de confiança alta. Sobretudo, perderia a peça que costura tudo — a derivação de chave a partir da credencial — que é justamente a parte **não** difundida de uma tecnologia difundida.

## 8. O que a máquina errou

Quatro erros concretos, pegos durante esta execução. Nenhum é hipotético.

**1. Citei um número que a página não continha.** Um resultado de busca trazia, no próprio título, "Verificação em Duas Etapas do GOV.BR (...) já faz parte da vida de 50 milhões de pessoas", numa URL do gov.br — fonte primária, número redondo, exatamente o que a Seção 3 pedia para o recorte Brasil. Ao abrir a página, ela devolveu "Conteúdo Restrito" e não continha nenhum dado: nem número de usuários, nem menção a passkey, nem data. **Como percebi:** porque abri antes de citar. Se eu tivesse confiado no título do resultado de busca, o documento teria um número de fonte oficial que a fonte oficial não sustenta. O número não entrou, e o recorte Brasil ficou apoiado em imprensa secundária [4], o que está declarado na Seção 3.

**2. Inverti o sentido do Chat Control na primeira leitura.** Tratei inicialmente o "Chat Control 1.0" como um mandato de varredura obrigatória que teria sido derrubado. Ao abrir a análise do CDT Europe, é o contrário: era uma **derrogação voluntária** da ePrivacy, que permitia varredura, e cuja extensão o Parlamento rejeitou em 26 de março de 2026, expirando em 4 de abril [15]. A diferença importa muito para o mapa — "o legislador proibiu a varredura" e "o legislador deixou de autorizar a varredura" apontam para futuros diferentes em `e3.1`. **Como percebi:** ao tentar escrever a data da rejeição junto com o placar e notar que a fonte que eu tinha em mãos não sustentava nenhum dos dois na forma que eu tinha assumido.

**3. Ia usar o budgero como caso de arquitetura sem intermediário de identidade.** A descrição pública — local-first, self-hostable, ponta-a-ponta — casa perfeitamente com a tese. Ao abrir o repositório, a versão em nuvem autentica com Clerk, um provedor de identidade terceiro [13]. **Como percebi:** ao procurar, especificamente, *como* ele autentica — pergunta que eu só fiz porque o experimento da Seção 10 depende disso. Esse erro, uma vez corrigido, virou a melhor evidência **contra** o próprio mapa, e está na Seção 7.

**4. Perdi uma fonte acadêmica e não a substituí por memória.** A revisão de literatura sobre barreiras de adoção de passkeys (MDPI, *Applied Sciences*) devolveu HTTP 403. Eu tinha, da busca, um resumo dos achados dela — e a tentação era citar o resumo como se fosse leitura. Não citei: a afirmação sobre recuperação como buraco estrutural está na Seção 3 marcada como vinda de literatura secundária, e a fonte não entra na Seção 11.

**Um alerta que não é erro pego, e sim desconfiança declarada.** Boa parte do que a busca devolveu sobre eventos de 2026 vem de blogs agregadores e sites de notícia de tecnologia de baixa reputação, que reescrevem uns aos outros. Onde não consegui fonte primária — notadamente para o desdobramento do Chat Control depois de abril de 2026 — a afirmação ficou fora das seções 3 a 10 e foi para o anexo. Assumir que "nada mais errou" seria, aqui, o mesmo que dizer que não conferi.

## 9. Três cenários para 2031

**Provável.** Em 2031, a senha não acabou — ela virou o porão da casa. Passkey é o caminho normal de entrada em praticamente todo serviço grande, e atrás dela continua havendo um código por e-mail, um documento com foto, uma ligação para a central. O resultado é que a segurança melhorou muito no caminho principal e quase nada no caminho de exceção, que é para onde a fraude migrou inteira: o setor mais atacado do mundo digital passou a ser o atendimento de recuperação. Local-first venceu onde a latência doía — ferramenta profissional, editor colaborativo, aplicativo de campo — e ficou como nicho respeitado no resto; a maior parte do software de consumo continua sendo uma janela para um servidor, só que mais rápida. Ponta-a-ponta virou padrão em mensagem e permanece opcional em arquivo e backup, com um mapa de disponibilidade que muda conforme o país. O chaveiro do fabricante do aparelho se consolidou como a coisa mais importante que uma pessoa tem, e quase ninguém pensa nisso até o dia em que troca de ecossistema — ou morre.

**Desejável.** Em 2031, três coisas chatas foram resolvidas e é por isso que ninguém fala delas. A primeira: recuperação de conta virou um desenho de produto respeitável, com custódia dividida entre pessoas de confiança em vez de um telefonema para um atendente — a pessoa nomeia três contatos, dois deles bastam, e isso funciona igual em qualquer serviço porque virou padrão. A segunda: sucessão digital entrou no padrão junto, e o chaveiro deixou de ser a única coisa que não se herda. A terceira: exportabilidade contínua virou exigência de compra institucional, primeiro em edital público e depois por contágio, e com isso "seu dado é seu" passou a ser uma afirmação que se testa em vez de uma frase de página de marketing. Nada disso exigiu tecnologia nova — as três dependiam de acordo entre plataformas e de alguém com poder de compra insistindo. **O que precisaria ser feito para chegar lá:** um grupo de trabalho no W3C ou na FIDO Alliance tratando recuperação e sucessão com a mesma seriedade com que tratou autenticação, e pelo menos um comprador grande — um governo, um sistema de saúde — escrevendo exportabilidade contínua em edital antes de 2028.

**Indesejável.** Em 2031, "soberania de dados" virou nome de plano pago. A arquitetura funcionou exatamente como prometido e foi absorvida como diferencial de produto premium: quem paga tem cliente cifrado, dado no aparelho e assistente local; quem não paga tem a mesma nuvem legível de sempre, agora com menos concorrência, porque manter duas arquiteturas expulsou os pequenos do mercado. A passkey consolidou a conta dentro do ecossistema do fabricante, e trocar de aparelho passou a significar negociar com uma empresa a devolução da própria identidade. Vazou um chaveiro grande e não havia procedimento — a resposta foi trazer a senha de volta como contingência oficial, o que desfez em seis meses o argumento de segurança de uma década. **O sinal precoce disso, hoje:** privacidade aparecendo na tabela de preços em vez de na descrição do produto. Quando o exemplo canônico de uma arquitetura sem intermediário mantém o intermediário na configuração padrão e o remove só na versão que exige um servidor próprio [13], o caminho para a estratificação já está aberto — e ele não parece um retrocesso, parece um plano de assinatura.

## 10. O experimento

### O que é — "Cofre derivado de passkey"

Um aplicativo web mínimo de orçamento pessoal — meia dúzia de campos, lançamentos e um saldo — com três propriedades e nenhuma a mais:

1. Os dados vivem num banco local no navegador (SQLite em WASM, ou IndexedDB se for mais rápido de montar).
2. A chave simétrica que cifra esse banco **não vem de senha**: é derivada da passkey do usuário, via extensão PRF do WebAuthn, formalizada na Level 3 [2].
3. A sincronização acontece por um servidor propositalmente burro, que recebe e devolve blocos cifrados e não tem nenhuma capacidade de lê-los — um servidor cego de verdade, escrito em um arquivo.

Cadastro: zero campos. A pessoa toca no sensor do próprio aparelho e a conta existe. Não há e-mail, não há senha, não há provedor de identidade.

### Que pergunta sobre o futuro ele ajuda a responder

A pergunta central do mapa, e a que ele mesmo declara não resolvida: **se a chave nasce do aparelho e o servidor não lê nada, o que acontece com a pessoa nos três momentos em que hoje existe um caminho de volta?** Trocar de aparelho, perder o aparelho, morrer. É o teste empírico de `e5.1` (recuperação vira o ponto fraco), `e6.1` (portabilidade entre chaveiros) e `e6.2` (sucessão sem caminho) — os três efeitos em que este mapa mais aposta e para os quais tem menos evidência.

### Que tecnologia emergente ele usa, e por que não dá com tecnologia madura

A peça emergente é a **derivação de chave a partir de credencial de hardware não exportável** (extensão PRF do WebAuthn). Não dá para fazer com tecnologia madura, e a distinção é exata: derivar chave de cifragem a partir de senha é maduro, resolvido e comum — é o que Argon2 faz, e é o que a maior parte dos aplicativos do levantamento usa. Mas uma chave derivada de senha herda as propriedades da senha: existe um segredo memorizável, ele pode ser anotado, transmitido a um cônjuge, guardado num cofre de papel, entregue a um inventariante. **É justamente isso que desaparece quando a chave vem de um chip que não exporta a chave privada.** O experimento só testa o problema que o mapa afirma existir se usar a peça que cria o problema. Com Argon2, a recuperação funcionaria — e o experimento mediria a tecnologia errada.

O servidor cego, por si só, é maduro (armazenar blocos opacos é trivial). O local-first, por si só, é maduro em biblioteca. O que não é maduro, e não existe praticamente em nenhum produto de consumo, é a junção: PRF derivando a chave do dado local, sem senha em lugar nenhum da cadeia.

### O que a turma faz quando testar isso em sala

Cada pessoa cria a conta no próprio celular ou notebook — trinta segundos, um toque — e registra três ou quatro lançamentos, o suficiente para que o cofre tenha conteúdo que ela reconheça como seu. Depois, todo mundo executa os mesmos três roteiros, com cronômetro:

- **Roteiro A — troca de aparelho.** Abrir o aplicativo em um segundo dispositivo, ou no navegador de outra pessoa, e tentar recuperar o cofre. Mede quanto do trabalho o chaveiro sincronizado faz sozinho e quanto sobra para o usuário.
- **Roteiro B — perda.** A pessoa ao lado apaga a passkey do chaveiro (com autorização, e com o dado cifrado ainda no servidor). Tentar entrar. Registrar o que a interface oferece como saída — e, se não oferecer nada, registrar o que a pessoa **tenta** fazer, que é o dado mais interessante do experimento.
- **Roteiro C — herança.** Em duplas, cada um tenta entregar ao outro acesso permanente ao próprio cofre, usando apenas o que o aplicativo e o sistema operacional oferecem. Sem combinar solução de antemão.

Ao final, três números na lousa: quantos recuperaram em A, quantos recuperaram em B, quantos conseguiram C. E uma coluna qualitativa, que provavelmente vale mais: **o que as pessoas tentaram quando não havia caminho.** É onde o vocabulário de interface que falta (`e1.1.1`) aparece por ausência.

### O que seria um resultado que me faria mudar de ideia

**Se a maioria recuperar o cofre no Roteiro B sem atrito**, apenas porque o chaveiro sincronizado da plataforma restaurou a passkey, então o "fim da senha" não cria o problema de recuperação que este mapa coloca no centro — a plataforma já o resolveu por baixo, silenciosamente. Nesse caso `e5.1` cai, `e5.1.1` cai junto, e o ramo da disrupção 4.3 encolhe a uma observação sobre conveniência. Mas atenção ao que esse mesmo resultado confirmaria: se foi o chaveiro do fabricante que salvou todo mundo, `e6` fica **mais** forte, não menos — a conta estaria ancorada no ecossistema de forma ainda mais completa do que o mapa supõe. Um resultado, duas leituras opostas, e é o Roteiro C que decide entre elas: se ninguém conseguir herdar, a ancoragem é o achado, não a conveniência.

**E se o Roteiro C funcionar** — se houver um caminho razoável para passar o cofre adiante usando só o que o sistema operacional oferece hoje —, então `e6.2` está errado e a Apple resolveu sucessão de passkey sem documentar, o que eu consideraria o resultado mais surpreendente possível deste experimento, dado que a documentação diz o contrário em letras claras [11].

## 11. Fontes

Quinze fontes abertas e lidas. Fontes que apareceram em busca mas que eu não abri não estão aqui; o que veio delas está no anexo, marcado.

1. **FIDO Alliance — "Five Billion Passkeys: FIDO Alliance Reports Mainstream Global Usage on World Passkey Day 2026"** — `https://fidoalliance.org/fido-alliance-reports-accelerating-global-passkey-adoption-on-world-passkey-day-2026/` — Sustenta todos os números de adoção de passkeys da Seção 3 (5 bi de credenciais, 90% de consciência, 75% habilitadas, 49% de uso regular, 68% de organizações implantando, 28% totalmente sem senha, 57% ainda com método passível de phishing) e a metodologia Sapio Research de abril de 2026. **Confiabilidade:** metodologia declarada e margem de erro publicada, mas é parte interessada — a aliança que promove o padrão divulgando pesquisa que encomendou. Bom para ordem de grandeza, fraco como evidência independente.
2. **W3C — "Web Authentication: An API for accessing Public Key Credentials Level 3 is now a W3C Recommendation"** — `https://www.w3.org/news/2026/web-authentication-an-api-for-accessing-public-key-credentials-level-3-is-now-a-w3c-recommendation/` — Sustenta a data de 25 de agosto de 2026 e o status normativo da Level 3. **Confiabilidade:** máxima, é o próprio organismo de padronização. Ressalva: o anúncio é genérico e **não** detalha PRF; a atribuição da extensão à Level 3 vem de literatura técnica secundária e está assim marcada no texto.
3. **Corbado — "WebAuthn Credential Exchange Protocol (CXP) & Format (CXF)"** — `https://www.corbado.com/blog/credential-exchange-protocol-cxp-credential-exchange-format-cxf` — Sustenta o que CXP e CXF são, o uso de HPKE, o status (CXF em Review Draft desde março de 2025; CXP mirando 2026), a implementação em iOS/macOS 26 e — o mais útil — a lista do que os padrões **não** resolvem. **Confiabilidade:** média-alta; é blog de fornecedor de autenticação, portanto competente e interessado. Usei para estrutura e status, não para juízo de valor.
4. **FDR — "Gov.br não vai mais pedir senha de acesso"** — `https://fdr.com.br/2026/02/12/govbr-nao-vai-mais-pedir-senha-de-acesso-saiba-como-fazer-login-de-forma-mais-rapida/` — Sustenta a nota sobre o Brasil: passkeys/biometria nativa no aplicativo gov.br, para contas Prata e Ouro, em fevereiro de 2026. **Confiabilidade:** baixa. É imprensa secundária, não cita a fonte oficial do anúncio nem números. Usei porque a página oficial correspondente estava com conteúdo restrito, e marquei essa fragilidade no texto.
5. **Kleppmann, Wiggins, van Hardenberg, McGranaghan — "Local-First Software: You Own Your Data, in spite of the Cloud" (2019)** — `https://martin.kleppmann.com/papers/local-first.pdf` — Sustenta a definição e os sete ideais do local-first, o papel dos CRDTs como abordagem promissora e a lista de problemas em aberto no momento da publicação. **Confiabilidade:** alta. É o texto fundador, revisado e apresentado em conferência da ACM SIGPLAN.
6. **Wikipédia — "Local-first software"** — `https://en.wikipedia.org/wiki/Local-first_software` — Sustenta a atribuição de autoria e ano, a lista de tecnologias e a existência de desacordo interno na comunidade sobre descentralização. **Confiabilidade:** média; usei só para corroborar o que a fonte 5 já dizia e para o mapeamento geral do campo.
7. **Automerge — "Automerge 3.0"** — `https://automerge.org/blog/automerge-3/` — Sustenta a data (julho de 2025), a representação comprimida em tempo de execução e os números de redução de memória e tempo de carregamento. **Confiabilidade:** alta para fato técnico verificável, baixa para comparação — é o projeto divulgando o próprio lançamento, e os exemplos são escolhidos por ele.
8. **johnny.sh — "Choosing a Sync Engine for Local-First in 2026"** — `https://johnny.sh/blog/choosing-a-sync-engine-in-2026/` — Sustenta as arestas concretas dos motores de sincronização: long polling no Electric, escrita cliente-lado sem caminho padrão, um usuário por instância no Livestore, ausência de presença no Zero, risco de manutenção no Triplit. **Confiabilidade:** média; é relato de praticante, sem metodologia, mas específico o bastante para ser checável e sem interesse comercial aparente em nenhum dos motores.
9. **Proton — "Why privacy isn't free"** — `https://proton.me/blog/ad-free-business-model` — Sustenta o argumento de que criptografia de acesso zero impede publicidade personalizada e que a receita vem exclusivamente de planos pagos. **Confiabilidade:** é declaração institucional de parte interessada. Vale como posição declarada de um ator, não como análise de mercado; não traz número de usuários nem de receita.
10. **Signal — "Signal is expensive"** — `https://signal.org/blog/signal-is-expensive/` — Sustenta o custo operacional: cerca de US$ 50 milhões/ano projetados para 2025, ~US$ 14 mi de infraestrutura (US$ 6 mi só em taxas de registro), ~US$ 19 mi de pessoal para ~50 funcionários, modelo 501c3 com doação e empréstimo inicial de Brian Acton. **Confiabilidade:** alta para o que é — custos declarados pela própria organização, publicados em 2023 com projeção para 2025. É autodeclaração, mas incomumente detalhada e feita por quem não tem incentivo em parecer barato.
11. **Apple — "How to add a Legacy Contact for your Apple Account"** — `https://support.apple.com/en-us/102631` — Sustenta o achado central sobre sucessão digital: o Contato Legado alcança fotos, mensagens, notas, arquivos e backups, e **não** alcança dados do Chaveiro do iCloud — informações de pagamento, senhas e passkeys. **Confiabilidade:** máxima. É documentação normativa do fabricante sobre o próprio produto.
12. **RxDB — "Why Local-First Software Is the Future and its Limitations"** — `https://rxdb.info/articles/local-first-future.html` — Sustenta a lista de limitações da Seção 3: conflito semântico, consistência eventual, inadequação a conjuntos grandes, descarte de IndexedDB pelo Safari após sete dias, custo em cliente fraco, migração de schema por cliente, extração em dispositivo comprometido, dificuldade com dado relacional. **Confiabilidade:** média-alta; é fornecedor de banco local-first — ou seja, interessado na tese e, ainda assim, publicando a lista de limitações, o que é o sentido menos suspeito de viés.
13. **budgero (f-liva/budgero, GitHub)** — `https://github.com/f-liva/budgero` — Sustenta a arquitetura (SQLite no cliente via WASM, sincronização cifrada por backend em Go, AGPL-3.0) e o achado que virou evidência contra o mapa: Clerk como provedor de identidade na versão em nuvem, autenticação local só no self-host. **Confiabilidade:** alta. É o código e a documentação do próprio projeto — verificável linha a linha por qualquer pessoa.
14. **Privacy International — "PI Apple TCN Challenge"** — `https://privacyinternational.org/legal-action/pi-apple-tcn-challenge` — Sustenta a cronologia do caso britânico: TCN sob a seção 253 do IPA 2016 em fevereiro de 2025, retirada do ADP para novos usuários no Reino Unido, recusa do tribunal ao sigilo total em abril de 2025, substituição da notificação em outubro de 2025, gestão processual em setembro de 2026 e audiência substantiva planejada para dezembro de 2026. **Confiabilidade:** alta para cronologia processual — é parte no processo, portanto com posição declarada, mas as datas e peças são públicas e conferíveis.
15. **CDT Europe — "Response to the European Parliament Rejection of the Chat Control 1.0's Extension"** — `https://cdt.org/insights/cdt-europes-response-to-the-european-parliament-rejection-of-the-chat-control-1-0s-extension/` — Sustenta a rejeição parlamentar em 26 de março de 2026 e a expiração da derrogação em 4 de abril de 2026, além da natureza voluntária da derrogação. **Confiabilidade:** alta para os fatos processuais, com posição advocatória declarada. Não sustenta o placar da votação, que por isso não aparece no corpo do documento.

**Fontes que tentei abrir e não abriram:** revisão de literatura sobre adoção de passkeys em *Applied Sciences* (MDPI), `https://www.mdpi.com/2076-3417/15/8/4414` — HTTP 403; e a notícia institucional da Secretaria de Comunicação Social sobre verificação em duas etapas no gov.br, `https://www.gov.br/secom/pt-br/acompanhe-a-secom/noticias/2026/02/verificacao-em-duas-etapas-do-gov-br-que-amplia-a-seguranca-digital-ja-faz-parte-da-vida-de-50-milhoes-de-pessoas` — conteúdo restrito. Nenhuma das duas sustenta afirmação neste documento.

## 12. Anexo — o levantamento bruto

### 12.1 Etapa 1 — entrevista, respostas recebidas

- **Horizonte:** 2031.
- **Público:** quem projeta mídia e interação.
- **Recorte geográfico:** global, com uma nota sobre o Brasil.
- **Já descartado:** o que já é comum em produto de massa (a régua da disciplina). Nenhuma outra exclusão — confirmado explicitamente, não assumido.
- **Viés desejado:** neutro/analítico.
- **Zona de interesse:** Pessoas e dados.
- **Disrupção suspeita pelo autor:** nenhuma — instrução de descobrir.
- **Ideias óbvias a excluir:** as que serviriam para qualquer tema.
- **Critério declarado para mudar de ideia:** evidência de que a adoção já passou da maioria inicial (Rogers), ou de que a tecnologia não rompe nada (só melhora o que existe).
- **Profundidade:** três ordens. **Modo:** a partir de uma inovação/tema, não de um setor.
- **`publico_ok`:** mantido em `false` — não houve autorização explícita do autor para nome em galeria pública, e a skill proíbe assumir.

*Observação de processo:* esta rodada foi executada sem usuário disponível para responder. As respostas acima vieram pré-fornecidas. A Etapa 1 da skill é bloqueante por desenho, e o desenho foi respeitado no sentido de que nada foi produzido antes de os itens obrigatórios (1, 3, 4, 5) estarem definidos — mas registro que não houve diálogo real, e portanto não houve a oportunidade de fazer a pergunta de desempate que a skill prevê quando uma resposta é vaga.

### 12.2 Etapa 2 — buscas executadas, na ordem

1. `passkeys adoption 2026 FIDO Alliance statistics` — deu no relatório do Dia Mundial da Passkey, que virou a fonte [1]. Resultados paralelos (Descope, MojoAuth, Security Boulevard) não foram abertos.
2. `local-first software CRDT 2026 Ink & Switch state` — deu no ensaio fundador, na Wikipédia e em listas awesome. Mencionou Local-First Conf 2026 em Berlim, em julho, com Kleppmann, Steve Ruiz (tldraw) e Jeffrey Heer (Mosaic). **Não abri a página da conferência; portanto não uso isso como afirmação.**
3. `FIDO Credential Exchange Protocol CXP passkey portability 2026 implementation` — deu na análise do Corbado, fonte [3]. O resultado de busca afirmava também que o Android passou a suportar CXP via atualização do Google Play Services; **não abri fonte primária disso e não afirmo no corpo.**
4. `Chat Control CSAM regulation 2026 encryption EU Council outcome` — resultado ruidoso, dominado por blogs agregadores (`thecybersecguru.com`, `stateofsurveillance.org`, `hivesecurity.gitlab.io`, `euperspectives.eu`, `andreafortuna.org`). Alegações que **não** entraram no corpo por falta de fonte primária: que o Conselho aprovou regime temporário válido até 3 de abril de 2028; que em 9 de julho de 2026 houve votação de 314 a 276; que o Parlamento aprovou emendas isolando aplicativos com ponta-a-ponta do esquema. Se alguma dessas for verdadeira, `e3.1` e `e3.2` mudam de sinal — vale checar antes da aula.
5. `Apple Advanced Data Protection UK Investigatory Powers order 2026 outcome tribunal` — levou à Privacy International, fonte [14]. Alegação de resultado de busca não confirmada em primária: segunda ação da Apple no tribunal em agosto de 2026 (9to5Mac). Não usei.
6. `sync engine 2026 ElectricSQL Zero Jazz local-first production adoption Linear` — deu no johnny.sh, fonte [8]. Alegação não verificada em primária, mas plausível e repetida: o Linear como caso de produto de grande porte sobre sincronização local. Usei com atribuição cuidadosa ("é o caso repetidamente citado").
7. `gov.br passkey chave de acesso 2026 Brasil autenticação sem senha` — deu no FDR, fonte [4], e no resultado do gov.br/secom que não abriu. Ver Seção 8, item 1.
8. `passkey recovery problem account lockout criticism 2026 usability` — deu material consistente sobre recuperação (MojoAuth, ToolsMint, MS Cloud Bros, MDPI). **A única fonte acadêmica devolveu 403.** As demais são blogs de fornecedor; usei o consenso como afirmação atribuída a "literatura secundária", sem citar nenhuma como fonte.
9. `end-to-end encryption breaks advertising personalization business model 2026 Proton Signal sustainability` — quase todos os resultados eram do próprio domínio da Proton. Abri um, fonte [9]. O viés do resultado de busca aqui é notável: uma pergunta sobre modelo de negócio de criptografia devolve quase só o marketing de um dos atores.
10. `digital inheritance passkeys legacy contact estate access encrypted accounts 2026 problem` — deu em blogs de planejamento sucessório. A afirmação central (Contato Legado não alcança o Chaveiro) foi confirmada na documentação da Apple, fonte [11]. Alegações **não** usadas: que RUFADAA foi adotada nos 50 estados americanos mais DC até 2026; que o 1Password atualizou acesso de beneficiário em 2025.
11. `on-device AI local data privacy 2026 Ollama Apple Foundation Models personal data never leaves device` — resultados fracos, quase todos de blogs comerciais de IA. Números atraentes e **descartados** por falta de fonte: "55% da inferência corporativa roda on-premise, contra 12% em 2023" e "mais de 75 países com legislação de localização de dados". O primeiro é exatamente o tipo de estatística redonda de blog comercial que o `DUVIDAS.md` do autor descreve como armadilha; não entrou. A menção a Siri/Private Cloud Compute em junho de 2026 também não foi aberta em primária e não sustenta afirmação.
12. `ANPD LGPD 2026 criptografia ponta a ponta dado sensível regulamento Open Finance portabilidade` — resultados de escritórios de advocacia e provedores de pagamento, nenhum primário da ANPD. Não abri nenhum e nada dali entrou no corpo. A informação potencialmente relevante e não verificada: portabilidade de crédito pessoal via Open Finance em operação no Brasil desde fevereiro de 2026, e intensificação da fiscalização do Art. 18 da LGPD pela ANPD. Se confirmada, seria a ponte brasileira mais forte para `e2.1.1`.
13. `budgero local-first self-hostable end-to-end encrypted personal finance github` — levou ao repositório, fonte [13], e ao achado do Clerk.
14. `"local-first" 2026 criticism "doesn't work" authorization multi-user hard problems blog` — levou ao RxDB, fonte [12], e à menção de uma apresentação da Local-First Conf 2026 listando autorização, recuperação durável, bootstrap, retenção e depuração como problemas fundamentais. Não abri a apresentação; a afirmação sobre autorização multiusuário como problema aberto está no corpo atribuída à comunidade, não a uma fonte específica.

### 12.3 Etapa 3 — o teste de disrupção aplicado, incluindo os reprovados

**Aprovados nas três perguntas (disrupção-raiz):** local-first; ponta-a-ponta por padrão; passkeys. **Aprovado em 1 e 3, reprovado em 2 (emergente, entra com ressalva):** IA como cliente do dado local.

**Reprovados na pergunta 1 — "o que isso torna possível que antes não era?" — e portanto tratados como tecnologia madura, presentes só na Seção 3:**

- **Backup criptografado.** Não torna nada possível; protege o mesmo dado no mesmo lugar.
- **HTTPS / TLS.** Universalizado. Melhoria consumada, não ruptura em curso.
- **2FA por SMS.** Pior que o que substitui em segurança; nem melhoria clara é.
- **"Login com Google" / federação OAuth.** É exatamente o intermediário que o tema questiona. Maduro, e do lado errado do argumento.
- **Self-hosting via Docker.** Rodar software próprio num servidor próprio é possível há décadas. Ficou mais fácil — pergunta 1 reprovada. **Esta foi a decisão mais difícil do teste,** porque o self-host é central no material de origem do tema (`kostos`, `TaxHacker`, `finvo`). O que o salva de ser irrelevante é que ele é o *veículo* das outras disrupções, não uma disrupção em si.
- **Gerenciador de senhas.** Melhoria de higiene; não muda o modelo de segredo compartilhado, só o administra melhor.
- **Criptografia de disco.** Madura e universal em sistema operacional de consumo.

**Candidato considerado e cortado antes do teste:** "descentralização / protocolos federados (ActivityPub, AT Protocol)". Cortado por fronteira de tema, não por maturidade — é arquitetura de rede social e identidade de publicação, não arquitetura de dado e identidade da pessoa. Entraria num mapa vizinho.

### 12.4 Etapa 4 — efeitos cortados da roda, com o motivo

Aplicando a regra de parada (parar de ramificar quando o efeito exige encadear duas ou mais suposições independentes não testadas), os seguintes foram gerados e **removidos**:

- *"O conceito de conta desaparece e é substituído por chave pública pessoal portátil entre serviços."* — Exige três apostas empilhadas: adoção universal de passkey, resolução do problema de recuperação **e** cooperação entre plataformas concorrentes. É wildcard, não efeito de terceira ordem.
- *"Governos adotam local-first para prontuário eletrônico nacional."* — Plausível e completamente não rastreável a partir das disrupções; depende de política de saúde, não de arquitetura de software. Cortado.
- *"O e-mail deixa de existir como identificador."* — Extrapolação vistosa. O e-mail sobreviveu a todas as tecnologias que o iam substituir nos últimos vinte anos; nada no levantamento sugere que desta vez seja diferente. Uma versão fraca dele sobreviveu como `e6.1.1`.
- *"Publicidade desaparece como modelo da internet de consumo."* — Salto de `e4` que ignora que este mapa trata de software **pessoal**, não de mídia de massa. Fora de escopo.
- *"Cartórios passam a emitir certificados digitais de sucessão criptográfica no Brasil."* — Específico demais e dependente de regulação local que eu não verifiquei. Sobrevive numa forma genérica em `e6.2.1`.
- *"CRDTs viram primitiva de banco de dados relacional padrão (Postgres nativo)."* — É previsão de roadmap de produto disfarçada de efeito social. Cortado.
- *"A IA local torna o servidor completamente desnecessário."* — Contradiz o próprio levantamento, que mostra arquitetura híbrida como posição dominante de plataforma. Cortado por conflito com a evidência.

**Efeito que quase virou wildcard e ficou na roda:** `e4.1.1` (sincronização cifrada como serviço público ou cooperativo). Ficou porque tem um caminho narrável em uma frase — se privacidade se estratificar por renda (`e4.1`), há pressão política para ofertá-la publicamente — e porque existe precedente brasileiro de infraestrutura pública digital de adoção massiva. Mas é o efeito de terceira ordem em que tenho menos confiança de todo o mapa, e ele é a fronteira exata onde a regra de parada quase disparou.

### 12.5 Etapa 5 — contestação, notas que não couberam na Seção 7

- **Sobre `e1` estar em confiança alta.** É o único efeito de primeira ordem que eu consideraria mover para "já aconteceu" em vez de "vai acontecer". Aplicativo que funciona offline com dado autoritativo local existe em produção hoje. O que justifica mantê-lo na roda é o alcance — ele descreve a generalização, não a existência. Um leitor rigoroso poderia dizer que isso é trapaça, e teria um ponto.
- **Sobre a assimetria de ramos.** A disrupção 4.2 tem três efeitos de segunda ordem sob `e4` e a 4.4 tem dois no total. Isso não reflete importância relativa: reflete que eu tinha mais evidência sobre modelo de negócio de criptografia (fontes [9] e [10]) do que sobre IA local (onde o levantamento foi fraco, ver 12.2, item 11). A forma da roda é, em parte, a forma da minha pesquisa.
- **Sobre o viés da skill, e não do autor.** A skill exige "pelo menos um wildcard de baixa probabilidade e alto impacto". Isso cria um incentivo a produzir wildcards mesmo quando o campo não oferece nenhum convincente — e é o tipo de exigência formal que, cumprida sem cuidado, vira decoração. Dos quatro wildcards da Seção 6, o **A** e o **B** têm mecanismo causal claro; o **C** e o **D** são mais fracos e existem, em parte, porque o formato os recompensa. Registro isso porque a Seção 7 pede o viés do autor e da skill, e este é o da skill.
- **Sobre o que eu não consegui contestar.** Não encontrei argumento honesto contra `e5.1` (recuperação vira o ponto fraco). Ele é quase tautológico: se você remove o caminho fácil de volta, o caminho que sobra é o mais fraco. A ausência de contestação possível é, ela própria, um sinal — de que `e5.1` talvez seja uma definição travestida de previsão.

### 12.6 Etapa 8b — checagem automática, saída

Registrada abaixo, executada sobre o arquivo entregue. A lição do `DUVIDAS.md` do autor foi aplicada: **os números específicos foram conferidos, não a mensagem "passou"**.

```
seções (grep -c "^## "): 12
frontmatter: todos os 18 campos presentes, nenhum omitido
roda: YAML válido, 3 níveis de profundidade
efeitos ordem 1: 7   (declarado no frontmatter: 7)
efeitos ordem 2: 15  (declarado: 15)
efeitos ordem 3: 15  (declarado: 15)
todo nó com sinal/prazo/confianca: sim
fontes na seção 11: 15 (declarado: 15)
```
