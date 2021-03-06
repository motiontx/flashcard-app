const express = require('express'); // flashcardsExpress
const mongoose = require('mongoose'); // Mongoose
const router = express.Router();

const Flashcard = mongoose.model('Flashcard');

// Types
router.get('/types', async (req, res) => {
  try {
    const discriminators = await Flashcard.discriminators;
    const types = Object.keys(discriminators)
    res.json(types);
  } catch (error) {
    return res.status(500).json(error)
  }
});

// Create
router.post('/', async (req, res) => {
  const body = req.body;
  try {
    const flashcardDb = await Flashcard.create(body);
    res.json(flashcardDb);
  } catch (error) {
    return res.status(500).json(error)
  }
});

// Get By Id
router.get('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const flashcardDb = await Flashcard.findById(_id);
    res.json(flashcardDb);
  } catch (error) {
    return res.status(400).json(error)
  }
});

// Get All
router.get('/topic/:id', async (req, res) => {
  const _topicId = mongoose.Types.ObjectId(req.params.id);
  try {
    const flashcardDb = await Flashcard.find({topic: _topicId});
    res.json(flashcardDb);
  } catch (error) {
    return res.status(400).json(error)
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const flashcardDb = await Flashcard.findByIdAndDelete(_id);
    res.json(flashcardDb);
  } catch (error) {
    return res.status(500).json(error)
  }
});

// Put
// router.put('/:id', async (req, res) => {
//
// });

module.exports = router;
