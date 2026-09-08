"""otimizar.py [lado] — copia tema-NN.alpha.png para hdr/temas/ilustracoes/tema-NN.png como PNG de paleta
(≤64 cores + alpha), opcionalmente reduzido ao lado dado. Imprime o peso total."""
import sys, os, glob
from PIL import Image
D = os.path.dirname(os.path.abspath(__file__))
DEST = os.path.join(D, "..", "hdr", "temas", "ilustracoes"); os.makedirs(DEST, exist_ok=True)
lado = int(sys.argv[1]) if len(sys.argv) > 1 else 1024
tot = 0
for p in sorted(glob.glob(f"{D}/tema-*.alpha.png")):
    n = os.path.basename(p)[5:7]
    im = Image.open(p).convert("RGBA")
    if lado != 1024: im = im.resize((lado, lado), Image.LANCZOS)
    q = im.quantize(colors=64, method=Image.Quantize.FASTOCTREE, dither=Image.Dither.NONE)
    out = f"{DEST}/tema-{n}.png"; q.save(out, optimize=True)
    s = os.path.getsize(out); tot += s; print(f"tema-{n}.png {s/1024:.0f} KB")
print(f"TOTAL {tot/1024:.0f} KB em {len(glob.glob(DEST+'/tema-*.png'))} arquivos, lado {lado}")
