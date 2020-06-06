const express = require('express'); // Express
const router = express.Router();

router.use('/api', require('./api'));

module.exports = router;
