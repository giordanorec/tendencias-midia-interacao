// Edge Middleware — acesso à área /futuros/ (11/09/2026).
// Regra: o professor entra com senha (cookie tmi_prof) e vê tudo. Um tema fica público para a turma
// a partir da data registrada em /futuros/liberados.json (a data da aula em que ele é apresentado).
// Tudo o mais em /futuros/ redireciona para a página de entrada.
export const config = { matcher: ['/futuros/:path*'] };

async function sha256(s) {
  const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return Array.from(new Uint8Array(b)).map(x => x.toString(16).padStart(2, '0')).join('');
}

function hojeRecife() {
  // AAAA-MM-DD em America/Recife (UTC-3, sem horário de verão)
  const d = new Date(Date.now() - 3 * 3600 * 1000);
  return d.toISOString().slice(0, 10);
}

export default async function middleware(req) {
  const url = new URL(req.url);
  const p = url.pathname;
  // Públicos: a entrada, os json de estado, o css, o índice dos 19 temas e o index de cada tema (capa quando fechado; completo quando aberto).
  if (p.startsWith('/futuros/entrar') || p === '/futuros/liberados.json' || p === '/futuros/abertos.json' || p === '/futuros/temas.json' || p === '/futuros/futuros.css') return;
  if (/^\/futuros\/?$/.test(p) || /^\/futuros\/\d{2}-[a-z0-9-]+\/?$/.test(p)) return;
  // A lista /futuros/confrontos/ é da turma: a rotina a anuncia no grupo depois de cada aula (22/09/2026).
  // Ela só lista o que já foi liberado, e cada confronto continua com a própria chave.
  if (/^\/futuros\/confrontos\/?$/.test(p)) return;
  // /futuros/licoes/ é o apanhado do que as prospecções ensinaram: é da turma, não tem mapa de
  // tema fechado dentro e é linkada de todas as páginas de tema (22/09/2026).
  if (/^\/futuros\/licoes(\/|\/licoes\.md)?$/.test(p)) return;
  const senha = process.env.FUTUROS_SENHA || '';
  if (senha) {
    const esperado = await sha256(senha + '|tmi-futuros');
    const cookie = req.headers.get('cookie') || '';
    if (cookie.split(';').some(c => c.trim() === 'tmi_prof=' + esperado)) return;
  }
  // Confronto com o mapa de um aluno (/futuros/<tema>/confronto-<login>/) só abre com a chave
  // "<tema>/confronto-<login>" em liberados.json — o tema aberto não o abre junto (17/09/2026).
  const c = p.match(/^\/futuros\/(\d{2}-[a-z0-9-]+)\/confronto-([a-z0-9]+)(\/|$)/);
  const m = p.match(/^\/futuros\/(\d{2}-[a-z0-9-]+)(\/|$)/);
  if (m) {
    const chave = c ? c[1] + '/confronto-' + c[2] : m[1];
    try {
      const r = await fetch(new URL('/futuros/liberados.json', req.url));
      const lib = await r.json();
      const data = lib[chave];
      if (data && hojeRecife() >= data) return;
    } catch (e) { /* sem lista: fica fechado */ }
  }
  const destino = new URL('/futuros/entrar/', req.url);
  destino.searchParams.set('de', p);
  return Response.redirect(destino, 302);
}
