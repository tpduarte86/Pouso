const https = require('https');
https.get('https://vodstreaming01.video.globo.com/45/3f/ae/14651177_ae9562c753df2001462fd5c6b68b0d85729b3c88/14651177-360p_487k_h264-d56fb870-3c49-013f-106e-2abd8e7d8e78.mp4', (res) => {
  console.log(res.statusCode, res.headers);
});
