const https = require('https');
https.get('https://globoplay.globo.com/v/14651177/', (res) => {
  console.log(res.statusCode, res.headers['x-frame-options']);
});
