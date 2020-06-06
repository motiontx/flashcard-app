const express = require('express'); // Express
const mongoose = require('mongoose'); // Mongoose
const router = express.Router();

const User = mongoose.model('User');

// Create
router.post('/', async (req, res) => {
  const body = req.body;
  try {
    const userDb = await User.create(body);
    res.json(userDb);
  } catch (error) {
    return res.status(500).json(error)
  }
});

// Get By Id
router.get('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const userDb = await User.findById(_id);
    res.json(userDb);
  } catch (error) {
    return res.status(400).json(error)
  }
});

// Get All
router.get('/', async (req, res) => {
  try {
    const userDb = await User.find();
    res.json(userDb);
  } catch (error) {
    return res.status(400).json(error)
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const userDb = await User.findByIdAndDelete(_id);
    res.json(userDb);
  } catch (error) {
    return res.status(500).json(error)
  }
});

// Put
router.put('/:id', async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const userDb = await User.findByIdAndUpdate(_id, body, {
      new: true,
    });
    res.json(userDb);
  } catch (error) {
    return res.status(500).json(error)
  }
});

module.exports = router;
