const mongoose = require('mongoose'); // Mongoose
const Schema = mongoose.Schema;

const Flashcard = mongoose.model('Flashcard');

const joinWithArrowsSchema = new Schema({
  pairs: [{
    sentenceOne: {
      type: String,
      required: 'Sentence one is required',
    },
    sentenceTwo: {
      type: String,
      required: 'Sentence two is required',
    },
  }],
}, {
  discriminatorKey: 'kind',
});

const JoinWithArrows = Flashcard.discriminator('JoinWithArrows', joinWithArrowsSchema);
export default JoinWithArrows;
