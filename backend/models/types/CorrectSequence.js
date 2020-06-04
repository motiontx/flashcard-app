const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Flashcard = mongoose.model('Flashcard');

const correctSequenceSchema = new Schema({
  events: [{
    event: {
      type: String,
      required: 'Event name is required',
    },
    order: {
      type: Number,
      required: 'Order number is required',
    },
  }],
}, {
  discriminatorKey: 'kind',
});

const CorrectSequence = Flashcard.discriminator('CorrectSequence', correctSequenceSchema);
export default CorrectSequence;
