const express = require('express'); // Express
const mongoose = require('mongoose'); // Mongoose
const router = express.Router();

const Topic = mongoose.model('Topic');

// Create
router.post('/', async (req, res) => {
  const body = req.body;
  try {
    const topicDb = await Topic.create(body);
    res.json(topicDb);
  } catch (error) {
    return res.status(500).json(error)
  }
});

// Get By Id
router.get('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const topicDb = await Topic.findById(_id);
    res.json(topicDb);
  } catch (error) {
    return res.status(400).json(error)
  }
});

// Get All
router.get('/', async (req, res) => {
  try {
    const topicDb = await Topic.find();
    res.json(topicDb);
  } catch (error) {
    return res.status(400).json(error)
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const topicDb = await Topic.findByIdAndDelete(_id);
    res.json(topicDb);
  } catch (error) {
    return res.status(500).json(error)
  }
});

// Put
router.put('/:id', async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const topicDb = await Topic.findByIdAndUpdate(_id, body, {
      new: true,
    });
    res.json(topicDb);
  } catch (error) {
    return res.status(500).json(error)
  }
});

module.exports = router;
