const mongoose = require('mongoose'); // Mongoose
const Schema = mongoose.Schema;

const Flashcard = mongoose.model('Flashcard');

const standardFlashcardSchema = new Schema({
  sideA: {
    type: String,
    required: 'side A is required',
  },
  sideB: {
    type: String,
    required: 'side B is required',
  },
}, {
  discriminatorKey: 'kind',
});

const StandardFlashcard = Flashcard.discriminator('StandardFlashcard', standardFlashcardSchema);
export default StandardFlashcard;
