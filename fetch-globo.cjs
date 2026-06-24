const https = require('https');
https.get('https://g1.globo.com/mg/sul-de-minas/videos-jornal-da-eptv-2-edicao/video/centro-logistico-de-pouso-alegre-triplica-de-tamanho-e-movimenta-us-250-milhoes-em-2026-14651177.ghtml', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const lines = data.split('\n').filter(l => l.includes('.mp4'));
    console.log("MP4 URLs:", lines);
  });
});
