"""pos.py — quantiza cada tema-NN.png para {branco, tinta, vermelho}, gera .alpha.png e .escuro.png
e monta amostras.png (as três sobre branco e sobre #16110f). Também mede quão duotone a saída veio."""
import sys, os, numpy as np
from PIL import Image
D = os.path.dirname(os.path.abspath(__file__))
INK = np.array([0x23,0x1f,0x20]); RED = np.array([0xdb,0x1e,0x2f]); WHITE = np.array([255,255,255])
INK_D = np.array([0xf4,0xef,0xe9]); RED_D = np.array([0xff,0x6b,0x64]); BG_D = np.array([0x16,0x11,0x0f])
nn = sys.argv[1:] or ["01","07","17"]
claros, escuros = [], []
for n in nn:
    p = f"{D}/tema-{n}.png"
    if not os.path.exists(p): print("falta", p); continue
    im = Image.open(p).convert("RGB")
    if im.size != (1024,1024): im = im.resize((1024,1024), Image.LANCZOS)
    a = np.asarray(im).astype(float)
    # distância a cada uma das três cores; o pixel vai para a mais próxima
    d = np.stack([np.linalg.norm(a-c,axis=2) for c in (WHITE,INK,RED)],axis=2)
    cls = d.argmin(axis=2)  # 0 branco 1 tinta 2 vermelho
    # vermelho só se o pixel for de fato saturado (R bem acima de G e B); senão é tinta com sangria de croma
    sat = a[:,:,0] - np.maximum(a[:,:,1], a[:,:,2])
    cls = np.where((cls==2) & (sat < 60), 1, cls)
    # medida de "impureza": pixels a mais de 60 de distância de qualquer das três (antialias conta pouco)
    imp = (d.min(axis=2) > 60).mean()*100
    tot = (cls>0).sum(); print(f"tema-{n}: tinta {(cls==1).sum()/tot*100:.0f}% · vermelho {(cls==2).sum()/tot*100:.0f}% da área pintada · pintado {tot/cls.size*100:.0f}% do quadrado · fora-de-paleta {imp:.1f}%")
    # alpha: cobertura = 1 - proximidade do branco (suaviza a borda)
    dw = d[:,:,0]; alpha = np.clip((dw-18)/100.0,0,1)  # abaixo de 18 é ruído do fundo: transparente
    col = np.where((cls==2)[...,None], RED, INK).astype(np.uint8)
    rgba = np.dstack([col, (alpha*255).astype(np.uint8)])
    Image.fromarray(rgba,"RGBA").save(f"{D}/tema-{n}.alpha.png")
    cold = np.where((cls==2)[...,None], RED_D, INK_D).astype(np.uint8)
    esc = (cold*alpha[...,None] + BG_D*(1-alpha[...,None])).astype(np.uint8)
    Image.fromarray(esc,"RGB").save(f"{D}/tema-{n}.escuro.png")
    claros.append(im.resize((512,512), Image.LANCZOS)); escuros.append(Image.fromarray(esc).resize((512,512), Image.LANCZOS))
if claros:
    g = 32; W = 512*len(claros) + g*(len(claros)+1); H = 512*2 + g*3
    M = Image.new("RGB",(W,H),(255,255,255))
    Image.fromarray(np.full((H//2, W, 3), 255, np.uint8)) 
    M.paste(Image.new("RGB",(W,H//2),(0x16,0x11,0x0f)),(0,H//2))
    for i,(c,e) in enumerate(zip(claros,escuros)):
        x = g + i*(512+g); M.paste(c,(x,g)); M.paste(e,(x,H//2+g//2))
    M.save(f"{D}/amostras.png"); print("amostras.png", M.size)
