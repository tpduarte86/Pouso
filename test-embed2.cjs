const https = require('https');

const urls = [
  'https://globoplay.globo.com/v/14651177/',
  'https://g1.globo.com/v/14651177/'
];

urls.forEach(url => {
  const req = https.get(url, (res) => {
    console.log(url, res.statusCode, res.headers['x-frame-options'] || 'NO X-FRAME');
  });
  req.on('error', e => console.error(url, e));
});
