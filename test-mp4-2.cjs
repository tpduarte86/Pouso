const https = require('https');

const options = {
  hostname: 'vodstreaming01.video.globo.com',
  path: '/45/3f/ae/14651177_ae9562c753df2001462fd5c6b68b0d85729b3c88/14651177-360p_487k_h264-d56fb870-3c49-013f-106e-2abd8e7d8e78.mp4',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
    'Referer': 'https://g1.globo.com/',
    'Origin': 'https://g1.globo.com'
  }
};

https.get(options, (res) => {
  console.log('Status:', res.statusCode);
  if (res.statusCode >= 300 && res.statusCode < 400) console.log('Location:', res.headers.location);
});
