const express = require('express'); // Express
const router = express.Router();

router.use('/users', require('./users'));
router.use('/topics', require('./topics'));
router.use('/flashcards', require('./flashcards'));

module.exports = router;
