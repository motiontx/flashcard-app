const mongoose = require('mongoose'); // Mongoose
const Schema = mongoose.Schema;

const Flashcard = mongoose.model('Flashcard');

const trueOrFalseSchema = new Schema({
  sentence: {
    type: String,
    required: 'Sentence is required',
  },
  veracity: {
    type: Boolean,
    required: 'Veracity of the sentence is required',
  },
}, {
  discriminatorKey: 'kind',
});

const TrueOrFalse = Flashcard.discriminator('TrueOrFalse', trueOrFalseSchema);
export default TrueOrFalse;
