const express = require('express');
const router = express.Router();

// Route to /api/whoami
router.get('/', (req, res) => {
  const software = req.headers['user-agent'].split(' ');
  const ip =
    req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
  const data = {
    ipaddress: ip,
    language: req.headers['accept-language'].split(',')[0],
    software:
      software[1].slice(1) + ' ' + software[2] + ' ' + software[3].slice(0, -1)
  };
  res.json(data);
});

module.exports = router;
