---
titulo: "Soberania de dados: local-first, ponta-a-ponta e o fim da senha"
tipo: resumo-de-tendencia
disciplina: "CIN0055 Tendências em Mídia e Interação 2026.2"
tema: "17 de 19"
familia: "Pessoas e dados"
zona: "Pessoas e dados"
skill: futurizacao-futures-wheel
autor: grec
horizonte: 2031
recorte: "global, com nota sobre o Brasil"
data: 2026-09-13
mapa_completo: "futures-wheel-soberania-de-dados-local-first-ponta-a-ponta-e-o-fim-da-senha.md"
---

# Soberania de dados: local-first, ponta-a-ponta e o fim da senha

**Rodada com teto de 15 subagentes, dos quais 14 foram usados.** A skill prevê um expansor por ramo;
aqui os ramos foram agrupados por tema em três lotes de 2ª ordem, cada lote marcou os **cinco ramos mais
férteis**, e a 3ª ordem saiu só sobre esses quinze (TMI-0028, TMI-0050). Por isso, dos 111 efeitos de 2ª
ordem, **96 ficaram sem filhos**: o orçamento foi para onde rendia profundidade. A
Fase 8 (infográficos) foi pulada. O mapa completo, com 209 efeitos (49 + 111 + 49),
conexões cruzadas, wildcards e 263 fontes (211 abertas por inteiro), está em
`futures-wheel-soberania-de-dados-local-first-ponta-a-ponta-e-o-fim-da-senha.md` e no HTML de mesmo nome.

## A inovação

O enunciado anuncia três rupturas convergentes na arquitetura do software pessoal — o dado que mora no aparelho e
sincroniza (**local-first**), o servidor que não lê o que guarda (**ponta a ponta**) e o login criptográfico pelo próprio
aparelho (**passkeys**) — e promete que, juntas, tirariam da empresa a posse do dado, da conta e da identidade. A rodada
partiu a frase em promessas testadas uma a uma (TMI-0095). As cinco frentes (120 achados, 104 abertos) deram vereditos
diferentes.

- **"A senha acaba" (R3a): corrigida — a senha sai da frente e fica atrás.** Nos nove serviços do FIDO Passkey Index,
  26% dos logins usam passkey (autodeclarado, out/2025); na web, 11,3% do Tranco Top 100K aceitam passkey, quase sempre
  ao lado da senha, e o Chrome registra login WebAuthn bem-sucedido em 0,068% dos carregamentos (11/09/2026). Nenhuma
  implantação tirou a senha da recuperação.
- **"Sem provedor terceiro" (R3b): derrubada.** 75,2% dos sites com passkey integram o login do Google; a passkey
  sincronizada mora na conta Apple, Google ou Microsoft, com segredo-mestre que não se troca; o formato de troca (CXF)
  está publicado, o protocolo (CXP) segue rascunho e a portabilidade passa pelo sistema.
- **Ponta a ponta além da mensagem (R2): corrigida — opcional e reversível.** Por padrão, só credenciais e poucas
  categorias; ninguém publica quantos ativam o resto. A Apple retirou o ADP de novos usuários no Reino Unido e a Meta
  desligou o E2E das mensagens diretas do Instagram em 08/05/2026 alegando pouco uso.
- **Local-first (R1): corrigida — substrato para quem cria.** Yjs com 31,8 milhões de downloads mensais e Zero 1.0, mas
  nenhum app de consumidor com usuários ativos publicados; o Keyhive avisa "DO NOT use in production"; o capital de
  sincronização foi para empresa e agentes (Electric comprada pela Databricks; o Instant Cloud desliga em 31/08/2027).
- **A promessa composta (R4): derrubada.** E surgiu uma raiz que o enunciado não tem (**R5**): a IA como leitor do dado
  protegido, pelo servidor atestado do provedor ou pelo agente do sistema operacional.

## A tese

Até 2031 a empresa deixa de ser dona da senha, não da conta nem do dado: as três técnicas avançam em ritmos e universos diferentes, e o controle que sai do titular vai para o fabricante do sistema operacional, para o Estado e para quem decide a recuperação de conta.

## Os 49 efeitos de 1ª ordem

| id | Efeito | STEEP | Prob. | Prazo |
|---|---|---|---|---|
| `e1_01` | Nos grandes serviços que tornam a passkey o caminho padrão, a senha deixa de ser o login principal: nos 9 serviços do FIDO Passkey Index… *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_02` | Na web medida pelo Chrome, a oferta de passkey corre muito à frente do uso: em 11/09/2026 a chamada WebAuthn get aparece em 0,33% dos… | Tecnológico | alta | até 2028 |
| `e1_03` | Na cauda longa da web, a passkey entra como fator a mais ao lado da senha, não como substituto: o censo do Tranco Top 100K acha 11,3% dos… *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_04` | O ‘fim da senha’ que se mede é o fim da senha em poucos serviços grandes: entre usuários da Dashlane, a Amazon gera 39,9% das autenticações… *(óbvio)* | Econômico | alta | até 2028 |
| `e1_05` | A velocidade da troca da senha pela passkey passa a ser decidida por desenho de interface em pontos específicos da jornada: um conjunto de… † | Tecnológico | média | até 2028 |
| `e1_06` | A passkey é financiada como redução de custo operacional do provedor, não como controle do titular: login de 8,5 s com passkey contra 31,2… *(óbvio)* † | Econômico | alta | até 2028 |
| `e1_07` | Práticas domésticas de compartilhar conta e de alternar aparelhos e ecossistemas mantêm a senha como via da família: no fio de 22/07/2026… *(óbvio)* † | Social | média | até 2028 |
| `e1_08` | O ataque migra da passkey para o caminho alternativo e para depois do login: enquanto houver fallback (SMS, app, senha), um proxy de… *(óbvio)* | Tecnológico | alta | até 2028 |
| `e1_09` | Sem senha, a camada de recuperação vira o ativo que as plataformas protegem por patente: as patentes concedidas localizadas sobre o tema… † | Econômico | média | 2028-2031 |
| `e1_10` | A passkey sincronizada troca milhões de senhas por um segredo-mestre por conta como alvo: a Unit 42 (03/08/2026) mostrou três ataques… | Tecnológico | alta | até 2028 |
| `e1_11` | Quando a passkey também cifra o dado, perder a credencial deixa de ser ‘esqueci a senha’ e vira perda irreversível do acervo: o WebAuthn… | Social | média | 2028-2031 |
| `e1_12` | Implantações sem gestão do ciclo de vida da passkey produzem pessoas trancadas fora e ‘passkeys mortas’: entre 208 implementações… | Tecnológico | alta | até 2028 |
| `e1_13` | A herança digital informal — a família que sabia ou adivinhava a senha — deixa de funcionar, e o acesso de herdeiros passa a depender da… *(óbvio)* † | Social | média | 2031-2036 |
| `e1_14` | O E2E opcional transfere à pessoa um risco de perda que ela não administra: num estudo com 281 usuários do Tutanota, cerca de 12%… *(óbvio)* | Social | média | até 2028 |
| `e1_15` | A passkey chega à maior parte da web por transitividade do login com Google, não pelo site: 75,2% dos sites com passkey no Tranco Top 100K… | Político | alta | até 2028 |
| `e1_16` | A conta da plataforma vira ponto único de falha de todas as identidades da pessoa: passkeys sincronizadas moram no chaveiro E2E da conta… *(óbvio)* | Político | alta | até 2028 |
| `e1_17` | O aprisionamento no chaveiro do fabricante passa a se dar por fricção de interface, não por impossibilidade técnica: no modal de cadastro… | Econômico | média | até 2028 |
| `e1_18` | A portabilidade de passkey chega como recurso do sistema operacional, não como protocolo aberto entre nuvens: o formato de troca CXF v1.0 é… | Tecnológico | alta | até 2028 |
| `e1_19` | A identidade verificável tende a trocar o intermediário publicitário pelo par Estado + carteira do sistema operacional: a Digital… | Político | média | 2028-2031 |
| `e1_20` | Quem cria software passa a trazer a autenticação para dentro por controle e confiabilidade, mas a ferramenta aberta volta a se concentrar:… | Econômico | média | até 2028 |
| `e1_21` | Portabilidade de conta e posse das chaves se separam na primeira decisão de produto em escala: o Bluesky, com mais de 10 milhões de contas… | Tecnológico | alta | até 2028 |
| `e1_22` | Credencial é o único dado pessoal amplo cifrado ponta a ponta por padrão; o acervo (backup, fotos, arquivos) segue legível pelo provedor… *(óbvio)* † | Tecnológico | alta | até 2028 |
| `e1_23` | E2E opcional sem métrica pública de ativação vira reversível pelo argumento do baixo uso: a Apple se recusou a informar a fração com ADP… † | Econômico | média | até 2028 |
| `e1_24` | A passkey passa a ser a chave do backup E2E de massa e desloca a confiança da memória da pessoa para o cofre de hardware do provedor: desde… | Tecnológico | média | até 2028 |
| `e1_25` | ‘Zero-knowledge’ de marketing deixa de bastar como promessa de servidor cego: a análise da ETH Zürich (ACM CCS 2024) mostrou que cinco… | Tecnológico | média | 2028-2031 |
| `e1_26` | Servidor cego sem publicidade vira produto de doação ou assinatura com custos que o próprio serviço expõe, e a identidade continua ancorada… *(óbvio)* | Econômico | alta | até 2028 |
| `e1_27` | Um Estado consegue fazer desaparecer o E2E opcional de backup num mercado inteiro, e a disponibilidade do servidor cego passa a depender do… *(óbvio)* | Político | alta | até 2028 |
| `e1_28` | Regras de vigilância passam a traçar a fronteira jurídica por quem detém a chave, isentando o E2E entre usuários de obrigações que recaem… † | Político | média | 2028-2031 |
| `e1_29` | A pressão por acesso excepcional muda de alvo, do servidor para o aparelho e para categorias de usuário: Matthew Green prevê (14/08/2026)… *(óbvio)* | Político | média | 2028-2031 |
| `e1_30` | A regulação troca a varredura de conteúdo, que o E2E bloqueia, pela verificação de identidade e idade na entrada: no trílogo do regulamento… | Político | média | 2028-2031 |
| `e1_31` | A objeção de desempenho que mantinha o servidor como fonte da verdade cai: o Automerge 3.0 (14/07/2025) reduz a memória em mais de 10x… | Tecnológico | alta | até 2028 |
| `e1_32` | O capital de sincronização vai para operação corporativa, defesa e agentes de IA, e as sync engines independentes são absorvidas por quem… | Econômico | alta | até 2028 |
| `e1_33` | O rótulo ‘local-first’ fica disputado a ponto de tornar indecidível qualquer métrica de adoção: Kleppmann cita Linear e tldraw como… † | Tecnológico | média | até 2028 |
| `e1_34` | A promessa ‘o dado sobrevive ao fim do serviço’ é testada ao vivo e vale só para quem consegue hospedar: com a equipe do InstantDB… | Social | alta | até 2028 |
| `e1_35` | O local-first colaborativo com servidor cego segue em laboratório e mantém a permissão no servidor, que continua lendo o dado, nos apps de… | Tecnológico | alta | 2028-2031 |
| `e1_36` | O local-first de uso pessoal fica invisível para qualquer régua de uso: nenhum app local-first de consumidor publica usuários ativos… *(óbvio)* | Econômico | alta | até 2028 |
| `e1_37` | Para a IA poder ler o dado, o ‘servidor cego’ é redefinido como ‘servidor atestado’: a Meta lançou no WhatsApp o ‘Incognito Chat’ com a… † | Tecnológico | média | até 2028 |
| `e1_38` | O agente de IA com acesso ao sistema operacional passa a ler em claro, no aparelho, o que o E2E e o local-first protegeram: Meredith… *(óbvio)* | Tecnológico | média | 2028-2031 |
| `e1_39` | A IA sobre dado financeiro ‘que não sai da máquina’ chega como armazenamento local com inferência na nuvem por padrão: o wilson guarda tudo… | Tecnológico | média | até 2028 |
| `e1_40` | O modelo de negócio que treina IA com o conteúdo do usuário perde acesso ao dado cifrado, e o assistente em app E2E passa a vir desligado e… | Econômico | média | 2028-2031 |
| `e1_41` | O local-first sobrevive reposicionado como formato de dado para agentes de IA, e não como categoria de app de massa: a Local-First Conf… | Tecnológico | média | 2028-2031 |
| `e1_42` | A publicidade contorna o E2E abrindo uma superfície não cifrada ao lado e monetizando metadados de comportamento: no WhatsApp, anúncios,… *(óbvio)* | Econômico | alta | até 2028 |
| `e1_43` | O custo crescente de guardar dado legível cria incentivo para a empresa não conseguir ler o que guarda, sem que haja evidência de isso… *(óbvio)* | Econômico | média | 2028-2031 |
| `e1_44` | A soberania do self-hosted esbarra num porteiro que não é o servidor, e sim a lista de reputação do navegador: segundo o blog do Immich… | Tecnológico | média | até 2028 |
| `e1_45` | A justificativa para dado local e cifrado migra da privacidade individual para a soberania diante da dependência de empresas e leis dos… *(óbvio)* | Político | média | 2028-2031 |
| `e1_46` | Quando o aparelho vira a chave, o roubo do celular desbloqueado vira roubo de identidade, e a defesa acrescenta camadas de contexto e de… *(óbvio)* | Social | alta | até 2028 |
| `e1_47` | A passkey resolve pouco contra o golpe dominante em que a própria titular autentica, e o gasto de segurança vai para vigiar o comportamento… *(óbvio)* | Econômico | alta | até 2028 |
| `e1_48` | Um regulador torna obrigatória, num fluxo de pagamento de massa, a credencial FIDO vinculada ao aparelho — e documenta que obrigar a… | Político | alta | até 2028 |
| `e1_49` | No Brasil, o sem-senha empilha intermediários em vez de eliminá-los: o gov.br (175 milhões de usuários, 83,4 milhões de contas Ouro em… | Político | média | até 2028 |

† 10 efeitos de 1ª ordem têm nota de correção do classificador (arbitragem entre agentes, TMI-0091), impressa junto do efeito na nota Obsidian e no HTML; o rótulo acima reproduz o texto original.

Os 9 temas que organizam a 1ª ordem, e pelos quais os lotes de expansão foram formados: **A senha sai da frente onde a plataforma define o padrão, e só ali** (`e1_01` a `e1_07`); **A recuperação de conta vira o novo lugar do controle e do ataque** (`e1_08` a `e1_14`); **O intermediário troca de nome: chaveiro do sistema, login social e portabilidade mediada** (`e1_15` a `e1_21`); **Ponta a ponta além da mensagem: opcional, sem número de uso e reversível** (`e1_22` a `e1_26`); **A lei traça a linha em quem tem a chave** (`e1_27` a `e1_30`); **Local-first: o substrato amadurece para quem cria, o app de massa não aparece** (`e1_31` a `e1_36`); **A ponta como leitor: IA sobre o dado protegido** (`e1_37` a `e1_41`); **O modelo de negócio se adapta sem ser desmontado** (`e1_42` a `e1_45`); **O aparelho como identidade num país de celular roubado** (`e1_46` a `e1_49`).

## Os 5 mais impactantes

1. **`e1_16` — A conta de plataforma vira ponto único de falha.** Passkeys sincronizadas moram no chaveiro da conta Apple, Google ou Microsoft; um bloqueio, uma tomada ou um PIN observado leva todas juntas. É o fator crítico da vulnerabilidade sv1 (12 efeitos dependentes) e o núcleo de cv1, em que a mesma conta acumula chave de backup (e2_B23), rede de recuperação (e2_A17) e maioridade na loja (e3_T2_05) — a forma concreta da queda de R4.

2. **`e1_15` — A passkey chega pela transitividade do Google.** 75,2% dos sites com passkey do Top 100K integram o Google SSO e recebem só um token; é o número que derruba R3b. Alimenta fl3 (a defesa contra roubo de sessão vem do mesmo intermediário, e2_B01, e3_T1_18) e faz a moderação do Google, com até duas apelações, trancar serviços de terceiros (e2_B02).

3. **`e2_A12` — A recuperação vai para a prova de identidade civil.** O mesmo corte de custo que financia a passkey tira o atendente e põe documento, prova de vida e rosto conferidos por terceiro (Entra ID, com ‘cost savings estimator’); a Meta leva a lógica ao consumidor por selfie (e3_T1_01). Origina fl9 (o depósito vaza e abastece a fraude por vídeo sintético, e3_T1_02) e, no Brasil, a base estatal como gabarito (e3_T1_04, ct7, w9): a recuperação é o terceiro lugar do controle (24 de 48 conexões).

4. **`e2_B20` — O padrão decide se o E2E sobrevive.** Na mesma empresa, o E2E por padrão ficou (Messenger) e o opcional foi desligado por ‘baixo uso’ (Instagram, 08/05/2026). É o mecanismo que quebra ou alimenta fl1, explica por que R2 avança em credenciais e recua no acervo, e vira a primeira decisão de projeto: E2E ‘disponível’ numa plataforma de massa só indica permanência se for padrão.

5. **`e1_46` — O celular roubado desbloqueado é a identidade.** 830.890 celulares roubados ou furtados no Brasil em 2025: o aparelho aberto é passkey, chave de backup, conta gov.br e vínculo do Pix. Origina fl5 (o BCB amarra a confiança ao aparelho novo, e2_C35, mas o cadastro admite SMS, e3_T1_25), a sinergia sy4 (exportação do cofre e restauração do backup em minutos) e cv6 (a troca de aparelho junta todos os elos fracos).

**O que os cinco têm em comum.** Nenhum trata de a técnica ficar mais segura. Os cinco mostram **onde fica o ponto que, perdido, bloqueado ou roubado, leva tudo junto**: a conta de plataforma que guarda as passkeys (`e1_16`), o login do Google pelo qual a passkey chega a três de cada quatro sites que a aceitam (`e1_15`), a recuperação que troca o atendente pela prova de identidade civil feita por terceiro (`e2_A12`), a configuração padrão que decide se o E2E sobrevive ou é desligado por "pouco uso" (`e2_B20`) e, no Brasil, o celular roubado desbloqueado, que é ao mesmo tempo passkey, chave de backup, conta gov.br e vínculo do Pix (`e1_46`). A senha deixa de ser o ponto fraco; o ponto fraco passa a ser quem guarda a conta, a recuperação e o padrão.

**Os 5 mais surpreendentes**: `e2_C18` proteger a conversa do agente quebra o leitor de tela; `e3_T1_11` um site apaga a passkey da outra conta; `e3_T1_15` a lei e a plataforma entregam ao herdeiro o avesso; `e1_44` o porteiro do self-hosted é a lista do navegador; `e3_T2_10` o ECA Digital abre aos pais o grafo, não o conteúdo.

**Distribuição.** Tecnológico 41% → 33% → 29% da 1ª à 3ª ordem; Político 20% → 30% → 33%; Econômico 27% → 18% → 20%; Social 12% → 18% → 18%. **A categoria Ecológica tem 1 efeito** (`e2_A25`): o celular antigo guardado como chave em vez de reusado ou reciclado. Passa no teste do meio físico (TMI-0083), mas é o mais fraco do mapa — probabilidade baixa e sem fonte que ligue passkey à guarda de aparelho. Oito candidatos foram reprovados porque terminavam em custo, exclusão, confiança ou mercado de usados, e nenhuma frente mediu energia de enclave, sincronização ou descarte. 56 dos 209 efeitos são óbvios depois da auditoria (TMI-0061), caindo de 41% na 1ª ordem para 28% na 2ª e 10% na 3ª. 5 ficam fora da janela de 2031 (`e1_13`, `e2_A27`, `e2_C12`, `e2_C34`, `e3_T1_15`), concentrados em herança digital e lei em tramitação; o classificador declarou compressão nesses ramos e empurrou três datas.

## Wildcards

9 cenários de baixa probabilidade e alto impacto: 3 positivos, 4 negativos e 2 ambíguos.

- **w1 · Troca geral do chaveiro: o segredo-mestre vaza e a senha volta num fim de semana** (negativo). Entre 2027 e 2029, uma família de malware comercial para Android e Chrome industrializa as duas técnicas que em 2026 eram de laboratório: copiar o segredo-mestre do cofre sincronizado e registrar uma chave do atacante no…
- **w2 · Relógio quântico adiantado: colhido agora, decifrado em 2031** (negativo). Um laboratório anuncia, antes de 2031, uma máquina tolerante a falhas que chega perto das estimativas publicadas para quebrar logaritmo discreto de curva elíptica de 256 bits.
- **w3 · O verme que viaja cifrado: a varredura no cliente volta pela segurança dos agentes** (negativo). Uma mensagem de texto comum, enviada por um mensageiro E2E, carrega uma instrução que o agente de IA do aparelho do destinatário lê em claro ao resumir as conversas.
- **w4 · Schrems III: a chave fora do provedor vira condição para a nuvem americana** (ambíguo). O Tribunal de Justiça da UE julga o recurso contra o Data Privacy Framework e o anula, como anulou o Safe Harbor e o Privacy Shield.
- **w5 · O STF fecha a ADPF 403: o E2E vira garantia constitucional no Brasil** (positivo). O STF conclui o julgamento da ADI 5527 e da ADPF 403 com a tese dos relatores: o sigilo das comunicações veda interpretar o Marco Civil como autorização para obrigar o provedor a entregar conteúdo cifrado ponta a ponta ou para…
- **w6 · Sanção desliga a identidade: a conta americana como passaporte revogável** (ambíguo). Uma nova rodada de sanções dos EUA contra autoridades de um país, com o Brasil como caso-limite, é lida pelas grandes plataformas como proibição de prestar serviço aos designados e, por prudência de compliance, a pessoas e órgãos…
- **w7 · O teste de encerramento dá certo: um app sobrevive ao fim do backend e ganha métrica** (positivo). Em 31/08/2027 a nuvem do Instant desliga.
- **w8 · Da orientação à obrigação: o Estado manda cifrar ponta a ponta o que é dele e o padrão transborda** (positivo). Depois de uma nova campanha de espionagem que lê SMS, e-mail e backups em nuvem de políticos, juízes e profissionais de saúde, um legislativo transforma em lei o que era orientação.
- **w9 · O gabarito vaza: a base de rostos do Estado perde valor como prova de recuperação** (negativo). Um incidente expõe, em escala nacional, a base de fotos de identificação que bancos e empresas consultam para confirmar quem é a pessoa por selfie.

**O wildcard do enunciado, testado.** "Uma legislação que obrigue local-first ou E2E por padrão para dado sensível" **mudou de forma.** Na letra, segue wildcard: nenhuma lei proposta ou aprovada com esse teor foi achada. O que já é tendência normativa é cifrar por padrão **com a chave de quem guarda o dado** — Cyber Resilience Act da UE (aplicação em 11/12/2027), proposta de alteração da HIPAA Security Rule (06/01/2025), regras da DPDP indiana —, que a cifra do provedor já cumpre. A chave fora do provedor só aparece de forma indireta: como condição para transferir dado a nuvem de país terceiro (Recomendações 01/2020 do EDPB), como isenção no regime europeu de varredura e como orientação voluntária. As portas mais prováveis para a obrigação são judiciais (`w4`, `w5`) ou de segurança nacional (`w8`).

Três wildcards têm o Brasil no centro. Em `w5`, o STF conclui a ADI 5527 e a ADPF 403 com a tese dos relatores e o E2E vira garantia constitucional. Em `w6`, uma rodada de sanções americanas é lida pelas plataformas como proibição de servir aos designados, e a conta — com passkeys, backup e recuperação — some por decisão de outro país. Em `w9`, a base de fotos que bancos e empresas consultam para confirmar identidade por selfie vaza, e a recuperação de conta por rosto perde o gabarito.

## Nota Brasil

No Brasil os ramos se cruzam no **celular roubado ou furtado desbloqueado** — 830.890 em 2025 (Anuário Brasileiro de Segurança Pública) —, que é passkey, chave do backup do WhatsApp, conta gov.br vinculada ao aparelho e vínculo de dispositivo do Pix. A defesa **empilha intermediários em vez de removê-los**: o Banco Central trata o aparelho nunca usado como não confiável (R$ 200 por transação e R$ 1.000 por dia, Resolução BCB 403), mas o cadastro admite SMS; a Jornada Sem Redirecionamento do Open Finance elegeu o FIDO2, e o Pix por aproximação ficou abaixo de 0,02% das operações em jan/2026. O golpe dominante — em que a própria pessoa autentica ou autoriza (WhatsApp 34%, falsa central 31%) — escapa da passkey, e os bancos gastam cerca de R$ 5 bilhões em cibersegurança em 2026 sem citar passkey. O **ECA Digital** (Lei 15.211/2025) puxa a verificação de idade para a conta da loja de aplicativos e abre aos pais a lista de adultos com quem o adolescente conversa, sem ler o conteúdo. O **Cade** transformou em caso de concorrência a decisão sobre quem lê a conversa com a empresa no WhatsApp. Na herança, o PL 4/2025 veda aos herdeiros a vida privada como regra, enquanto o Legacy Contact da Apple entrega fotos e mensagens e retém as chaves. Procurado e não encontrado: registro oficial da passkey do gov.br para o cidadão (só a do SIAFI, para servidores, está documentada), banco brasileiro com passkey confirmada, qualquer número brasileiro de uso de passkey ou de backup E2E, e o resultado final do STF sobre criptografia.

## O que me faria mudar de ideia

Os dois critérios declarados de antemão foram adoção além da maioria inicial de Rogers, medida pelo uso da pessoa titular da conta (TMI-0092, TMI-0094), e tecnologia que só melhora o que existe. **Nenhum derrubou a arquitetura por maturidade, e o segundo derrubou a promessa composta.** O único número acima do limiar de ~16% é o 26% do Passkey Index, num universo autosselecionado e autodeclarado; na web, o contador do Chrome está na fase de inovadores, e R1 e R2 não têm número de uso algum. Onde há avanço, ele melhora o login sem mover quem controla a conta e o dado. A régua tem uma fraqueza própria deste tema: o login que importa no Brasil é de aplicativo nativo, que o contador do Chrome não vê. Sinais que mudariam a conclusão:

- O contador CredentialManagerGetPublicKeyCredentialSuccess do chromestatus subir uma ordem de grandeza sobre 0,068% dos carregamentos (11/09/2026) e sustentar o patamar por 90 dias sem degrau de um dia (limiar do Classifier, não número de fonte): R3a sairia da fase de inovadores no único contador público.
- A FIDO Alliance publicar o Passkey Index com n, ponderação e aplicativos nativos, ou um grande banco brasileiro ou o gov.br publicar a fatia de logins feitos com passkey: R3a ganharia medida fora do universo autosselecionado e do Chrome.
- Apple ou Meta publicarem a fração de contas com ADP ou backup E2E ativo, ou ligarem o E2E do acervo por padrão: R2 ganharia régua de uso e fl1 seria quebrado.
- O Investigatory Powers Tribunal decidir o caso Apple × governo britânico (audiência de mérito marcada para dez/2026) ou o STF concluir a ADI 5527/ADPF 403: a via estatal de retirar o E2E opcional seria travada ou legitimada (e2_B30, w5).
- O CXP sair de Working Draft e existir transferência direta Apple → Google sem gerenciador intermediário, levando também contatos de recuperação: R3b e fl2 perderiam o mecanismo de mediação.
- Anúncio de rotação ou revogação do segredo-mestre dos cofres sincronizados, ou exploração em campo das técnicas da Unit 42 (w1): a senha voltaria como caminho de massa por evento, não por tendência.
- Primeiro caso relatado de abuso do contato de recuperação da Apple ou do Google (sv6): vários efeitos de recuperação sairiam de média para alta.
- Na desativação do Instant Cloud (31/08/2027), um app publicar quantas pessoas continuaram usando sem o servidor (w7): R1 teria o primeiro número de uso de consumidor.
- Release auditada do Keyhive/Beelay ou Decentralized MLS adotado em grupo de trabalho da IETF: o local-first colaborativo com servidor cego sairia do laboratório antes de 2031 (e1_35, e2_C12).
- Meta publicar uso do Incognito Chat ou uma quebra pública de atestação de enclave em produção: R5 ganharia número ou perderia a garantia (e2_C17, sv4).
- Texto final do regulamento europeu de abuso infantil com a exclusão do E2E mantida — ou o fim do regime interino em 03/04/2028 sem substituto: e1_28 viraria vantagem regulatória estável ou cairia.
- Regulamento da ANPD sobre portabilidade (LGPD art. 18, V) e do art. 27 do ECA Digital publicados: fixariam no Brasil o formato de saída do dado (e3_T2_17) e se o classificador local vira dever de comunicar (e3_T2_08).

## Bibliografia essencial

Fontes abertas por inteiro, com título e URL copiados do registro `json/bibliografia.json` (TMI-0082). A lista completa, com 263 fontes, está na nota Obsidian.

1. Kleppmann, M.; Wiggins, A.; van Hardenberg, P.; McGranaghan, M. "Local-first software: You own your data, in spite of the cloud". Onward! 2019 (ACM SIGPLAN, SPLASH, Atenas, outubro de 2019); ensaio Ink & Switch, abril de 2019 — `https://www.inkandswitch.com/essay/local-first/`
2. FIDO Alliance (com Liminal) — Passkey Index, outubro de 2025 (PDF) — `https://fidoalliance.org/wp-content/uploads/2025/10/FIDO-Passkey-Index-October-2025.pdf`
3. Chrome Platform Status — contadores de uso (API JSON pública do chromestatus.com), último ponto 11/09/2026 — `https://chromestatus.com/data/featurepopularity`
4. Bhardwaj, P.; Sastry, N. (University of Surrey). "State of Passkey Authentication in the Wild: A Census of the Top 100K sites". arXiv 2602.15135 (v2, 19/03/2026); versão em Passive and Active Measurement (PAM), Springer — `https://arxiv.org/html/2602.15135v2`
5. Blessing, J.; Hugenroth, D.; Anderson, R. J.; Beresford, A. R. "SoK: Web Authentication and Recovery in the Age of End-to-End Encryption". Proceedings on Privacy Enhancing Technologies (PoPETs) 2025(3); versão anterior no arXiv 2406.18226 (26/06/2024) — `https://petsymposium.org/popets/2025/popets-2025-0113.pdf`
6. Jannett, L.; Mayer, A.; Westers, M.; Mladenov, V.; Mainka, C.; Schwenk, J. (Ruhr-Universität Bochum e outras). "The State of Passkeys: Studying the Adoption and Security of Passkeys on the Web". 35th USENIX Security Symposium, 2026 (pré-publicação) — `https://www.usenix.org/system/files/conference/usenixsecurity26/sec26_prepub_jannett.pdf`
7. W3C News — "Web Authentication: An API for accessing Public Key Credentials Level 3 is now a W3C Recommendation" (25/08/2026) — `https://www.w3.org/news/2026/web-authentication-an-api-for-accessing-public-key-credentials-level-3-is-now-a-w3c-recommendation/`
8. FIDO Alliance — Download Credential Exchange Specifications — `https://fidoalliance.org/download-credential-exchange-specifications/`
9. Microsoft Security Blog — 'Pushing passkeys forward', 1º de maio de 2025 — `https://www.microsoft.com/en-us/security/blog/2025/05/01/pushing-passkeys-forward-microsofts-latest-updates-for-simpler-safer-sign-ins/`
10. Palo Alto Networks Unit 42 — "Pass the Passkey: A Novel Attack Surface in Passwordless Authentication" (03/08/2026) — `https://unit42.paloaltonetworks.com/passwordless-authentication-security-risks/`
11. Google (blog oficial) — 'Recovery Contacts: Sign in with a little help from your friends and family' (15/10/2025) — `https://blog.google/innovation-and-ai/technology/safety-security/recovery-contacts-verify-google-account/`
12. Microsoft Learn — 'Account Recovery Overview in Microsoft Entra ID' (ms.date 29/04/2026; atualizado em 15/06/2026) — `https://learn.microsoft.com/en-us/entra/identity/authentication/concept-account-recovery-overview`
13. Corbado — 'Signal API iOS Bug: Passkeys of other Accounts deleted' (21/08/2026; modificado em 28/08/2026) — `https://www.corbado.com/blog/signal-api-ios-passkey-deletion-bug`
14. Tim Cappalli — Post “Please, please, please stop using passkeys for encrypting user data”, 27/02/2026; índice do blog com posts de 2025–2026. — `https://blog.timcappalli.me/p/passkeys-prf-warning/`
15. Troy Hunt — Post “Passkeys for Normal People”, 05/05/2025. — `https://www.troyhunt.com/passkeys-for-normal-people/`
16. Apple Support — 'Apple can no longer offer Advanced Data Protection in the United Kingdom to new users' (página 122234) — `https://support.apple.com/en-us/122234`
17. Meta Newsroom — 'We're Making it Easier to Encrypt Your WhatsApp Chat Backups', 30 de outubro de 2025 — `https://about.fb.com/news/2025/10/making-it-easier-to-encrypt-whatsapp-chat-backups/`
18. MacRumors — ‘PSA: Instagram Encrypted Messaging Ends on Friday, May 8’ (05/05/2026) — `https://www.macrumors.com/2026/05/05/psa-instagram-encrypted-messaging-ends-may-8/`
19. Meta Newsroom — ‘Launching Default End-to-End Encryption on Messenger’ (06/12/2023) — `https://about.fb.com/news/2023/12/default-end-to-end-encryption-on-messenger/`
20. Hofmann, J.; Truong, K. T. (ETH Zürich). "End-to-End Encrypted Cloud Storage in the Wild: A Broken Ecosystem". ACM CCS 2024 — `https://brokencloudstorage.info/`
21. Knodel, M.; Fábrega, A.; Ferrari, D.; Leiken, J.; Li Hou, B.; Yen, D.; de Alfaro, S.; Cho, K.; Park, S. (NYU; Cornell). "How To Think About End-To-End Encryption and AI: Training, Processing, Disclosure, and Consent". arXiv 2412.20231 (v2, 22/03/2025); IACR ePrint 2024/2086 — `https://arxiv.org/pdf/2412.20231`
22. Meredith Whittaker — Fortune, “AI agents are an existential threat to secure messaging, Signal’s president Whittaker says”, 27/11/2025, sobre fala na conferência Slush (Helsinque). — `https://fortune.com/2025/11/27/ai-agents-are-an-existential-threat-to-secure-messaging-signals-president-whittaker-says`
23. Matthew Green — Post “Everything is about to ‘go dark’”, 14/08/2026. — `https://blog.cryptographyengineering.com/2026/08/14/everything-is-about-to-go-dark/`
24. Meta Newsroom — ‘Introducing a Completely Private Way to Chat With AI’ (13/05/2026) — `https://about.fb.com/news/2026/05/incognito-chat-whatsapp-meta-ai/`
25. Ink & Switch — Keyhive (página do projeto) + README do repositório inkandswitch/keyhive — `https://www.inkandswitch.com/project/keyhive/`
26. Martin Kleppmann — Podcast Software Engineering Radio, episódio 716, “Martin Kleppmann: Local-First Software”, 15/04/2026 (página do episódio com resumo e trechos). — `https://se-radio.net/2026/04/se-radio-716-martin-kleppmann-local-first-software/`
27. Martin Kleppmann, Paul Frazee, Jake Gold, Jay Graber, Daniel Holmgren, Devin Ivy, Jeromy Johnson, Bryan Newbold, Jaz Volpert — Artigo “Bluesky and the AT Protocol: Usable Decentralized Social Media”, ACM CoNEXT-2024 Workshop on the Decentralization of the Internet (DIN ’24); arXiv 2402.03239 v2, 16/10/2024. PDF baixado e lido na seção 3.5 (identidade e autenticação). — `https://arxiv.org/abs/2402.03239`
28. TechTarget — 'Databricks' Electric acquisition adds embeddable PostgreSQL', 11 de agosto de 2026 — `https://www.techtarget.com/data-technologies/news/366649200/Databricks-Electric-acquisition-adds-embeddable-PostgreSQL`
29. InstantDB — 'The Instant team joins OpenAI' (ensaio oficial; anúncio de 22 de agosto de 2026 segundo resumos de busca) — `https://www.instantdb.com/essays/instant_team_joins_openai`
30. Local-First Conf 2026 (Berlim, Festsaal Kreuzberg, 12 a 14/07/2026), programação oficial dos dias 1 e 2 — `https://app-2026.localfirstconf.com/schedule/day-1`
31. Blog do Immich, 20/10/2025, 'Google flags Immich sites as dangerous'; HN 1.464 pontos, 688 comentários — `https://immich.app/blog/google-flags-immich-as-dangerous`
32. Parlamento Europeu — comunicado de 26/03/2026: as medidas voluntárias de detecção de abuso sexual infantil não serão prorrogadas — `https://www.europarl.europa.eu/news/en/press-room/20260325IPR39207/child-sexual-abuse-online-voluntary-detection-measures-will-not-be-extended`
33. EDPB — Recomendações 01/2020 sobre medidas suplementares a ferramentas de transferência, v2.0 (18/06/2021) — `https://www.edpb.europa.eu/system/files/documents/2021-06/edpb_recommendations_202001vo.2.0_supplementarymeasurestransferstools_en.pdf`
34. Fórum Brasileiro de Segurança Pública — Anuário Brasileiro de Segurança Pública 2026 (20ª edição, dados de 2025), PDF — `https://forumseguranca.org.br/wp-content/uploads/2026/07/anuario-2026.pdf`
35. B02 — Open Finance Brasil, ‘[SV] Vínculo de dispositivo – v1.3.1’ (15/05/2024), via efeito de 1ª ordem — `https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/405995541/Informa+es+Gerais+-+SV+V+nculo+de+dispositivo+-+v1.3.1`
36. Portal gov.br, 'Vinculação do dispositivo' (Governo Digital); UAI Notícias, 19/02/2026, sobre passkeys no app gov.br — `https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/atendimento-gov.br/duvidas-no-aplicativo-gov.br/vinculacao-do-dispositivo`
37. Tesouro Nacional (gov.br) — 'Acesso por Passkey' ao SIAFI — `https://www.gov.br/tesouronacional/pt-br/siafi/como-acessar/acesso_por_passkey`
38. Lei 15.211/2025 (ECA Digital), texto compilado no Planalto — arts. 12, 13, 14 e 41-A — `https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/L15211.htm`
39. Cade — ‘Cade mantém multa diária contra Meta e WhatsApp por descumprimento de medida preventiva’ (23/04/2026) — `https://www.gov.br/cade/pt-br/assuntos/noticias/cade-mantem-multa-diaria-contra-meta-e-whatsapp-por-descumprimento-de-medida-preventiva`
40. Senado Notícias — 'Rede social, selfies e milhas aéreas na partilha? Novo Código Civil delimita herança digital' (27/03/2026) — `https://www12.senado.leg.br/noticias/infomaterias/2026/03/rede-social-selfies-e-milhas-aereas-na-partilha-novo-codigo-civil-delimita-heranca-digital`
41. IP.rec — Instituto de Pesquisa em Direito e Tecnologia do Recife (e votos de Edson Fachin e Rosa Weber no STF) — IP.rec, “Criptografia no STF, parte 2: a retomada do julgamento”, 25/09/2023; e página do STF “Entenda: STF julga ações contra normas do Marco Civil da Internet” (sem data explícita; caminho de imagem sugere nov/2024). — `https://ip.rec.br/blog/criptografia-no-stf-parte-2-a-retomada-do-julgamento/`

---

*Mapa gerado pela skill `futures-wheel` (modo 1, a partir de uma inovação) em 13/09/2026, com teto de 15 subagentes, dos quais 14 usados. Fase 8 pulada. 209 efeitos, 153 não óbvios (73%) depois da auditoria, que fez 37 reclassificações e arbitrou 29 contradições entre agentes (25 efeitos com nota de correção). Contrato em `CONTRATO.md`, histórico em `log.txt`, artefatos intermediários em `json/`.*