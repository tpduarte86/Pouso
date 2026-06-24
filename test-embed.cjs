const https = require('https');

const urls = [
  'https://globoplay.globo.com/v/14651177/',
  'https://g1.globo.com/v/14651177/',
];

urls.forEach(url => {
  https.get(url, (res) => {
    console.log(url, res.statusCode, res.headers['x-frame-options'] || 'NO X-FRAME');
  });
});
