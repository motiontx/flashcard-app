const mongoose = require('mongoose'); // Mongoose
const Schema = mongoose.Schema;

const Topic = mongoose.model('Topic');

const flashcardSchema = new Schema({
  topic: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Topic',
    //required: 'Topic Id is required',
  },
  settings: {
    color: {
      type: String,
    },
  },
}, {
  timestamps: true,
  discriminatorKey: 'kind',
});

const Flashcard = mongoose.model('Flashcard', flashcardSchema);
export default Flashcard;
