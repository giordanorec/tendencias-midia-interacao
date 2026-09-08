# Gramática visual — série "19 temas" (CIN0055 · 2026.2)

Uma ilustração por tema, **acento no canto da cena, não capa**. As dezenove têm de parecer
da mesma mão. O que não está aqui não entra.

## Suporte
- Quadrado 1024×1024, **fundo branco puro** (#FFFFFF), sem textura, sombra, grão ou gradiente.
- Margem interna uniforme: a figura ocupa ~65% do lado, centrada. Muito branco em volta —
  a opacidade parcial e o canto da cena pedem ar.
- Pós-processamento (PIL): cada pixel é quantizado para {branco, tinta, vermelho} e o branco
  vira transparência → `tema-NN.alpha.png`. Daí sai a versão para fundo escuro
  (`tema-NN.escuro.png`: tinta→#f4efe9, vermelho→#ff6b64). A página pode usar o alpha
  e trocar as cores por CSS, ou usar o PNG branco com `mix-blend-mode: multiply` no claro.

## Duas tintas, papéis fixos
- **Tinta (#231f20) é a estrutura**: o sistema que já existia — a grade, o trilho, o contorno,
  o quadro, as linhas de ligação. Sempre em maioria (≈85–95% da área pintada).
- **Vermelho CIn (#db1e2f) é a ruptura**: o elemento que entra, sai, quebra ou desloca —
  **a disrupção-raiz do tema**. Um foco só (ou uma família pequena de marcas iguais),
  nunca mais que ~15% da área pintada, e sempre onde o olho deve parar.
- Nenhuma terceira cor, nenhum cinza, nenhuma transparência simulada, nenhuma hachura.

## Traço e formas
- Linhas de **espessura única** (≈8px em 1024), pontas retas, sem variação caligráfica,
  sem "mão". Geometria de régua e compasso: reta, círculo, arco, quadrado, grade de pontos.
- Preenchimento chapado só em poucas peças (o ponto vermelho, um quadrado cheio). O resto
  é contorno. Sem perspectiva, sem 3D, sem sobreposição translúcida.
- Referências de família: Müller-Brockmann, Munari, diagramas de Bauhaus, sinalização suíça.

## Composição
- **Um gesto por imagem**: uma metáfora geométrica que se lê em dois segundos e sustenta
  uma segunda leitura. Sempre há um "antes" em tinta e um "depois/rompimento" em vermelho.
- Assimetria controlada: a figura pode pesar para um lado, mas o quadrado fica equilibrado.

## Proibido
- Qualquer texto, letra, número, logotipo ou ícone de interface.
- Ícone literal: robô, cérebro, circuito, lâmpada, cadeado, tela de computador, nuvem, mão,
  rosto, figura humana. A disrupção é dita por geometria, não por pictograma.
- Gradiente, sombra, brilho, textura de papel, estilo "isométrico", estilo "3D render".
