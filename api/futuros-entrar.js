// POST /api/futuros-entrar — confere a senha do professor e grava o cookie tmi_prof (11/09/2026).
// A senha mora na variável de ambiente FUTUROS_SENHA do projeto Vercel; nunca no repositório.
const crypto = require('crypto');

module.exports = async (req, res) => {
  if (req.method !== 'POST') { res.statusCode = 405; return res.end('POST'); }
  let corpo = '';
  await new Promise(r => { req.on('data', c => corpo += c); req.on('end', r); });
  const params = new URLSearchParams(corpo);
  const senha = (params.get('senha') || '').trim();
  const de = params.get('de') || '/futuros/';
  const esperada = process.env.FUTUROS_SENHA || '';
  const destinoSeguro = /^\/futuros\//.test(de) ? de : '/futuros/';
  if (!esperada || senha !== esperada) {
    res.statusCode = 302;
    res.setHeader('Location', '/futuros/entrar/?erro=1&de=' + encodeURIComponent(destinoSeguro));
    return res.end();
  }
  const hash = crypto.createHash('sha256').update(esperada + '|tmi-futuros').digest('hex');
  res.setHeader('Set-Cookie', `tmi_prof=${hash}; Path=/; HttpOnly; Secure; SameSite=None; Partitioned; Max-Age=31536000`);
  res.statusCode = 302;
  res.setHeader('Location', destinoSeguro);
  res.end();
};
