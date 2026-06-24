const https = require('https');
https.get('https://g1.globo.com/mg/sul-de-minas/videos-jornal-da-eptv-2-edicao/video/centro-logistico-de-pouso-alegre-triplica-de-tamanho-e-movimenta-us-250-milhoes-em-2026-14651177.ghtml', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    let lines = data.split(' ');
    // look for globoplay or embed
    lines.forEach(l => {
      if (l.includes('iframe') || l.includes('embed') || l.includes('player')) {
        // console.log(l.substring(0, 100));
      }
    });
    const matches = data.match(/https:\/\/[^"'\s]+(?:embed|player)[^"'\s]+/gi);
    console.log("MATCHES:", matches ? matches.slice(0, 5) : 'None');
  });
});
