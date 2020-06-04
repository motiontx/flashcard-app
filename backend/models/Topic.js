const mongoose = require('mongoose'); // Mongoose
const Schema = mongoose.Schema;

const User = mongoose.model('User');

const topicSchema = new Schema({
  name: {
    type: String,
    required: true,
    required: 'Topic name is required',
  },
  description: {
    type: String,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    //required: 'Owner Id is required',
  },
  visibility: {
    type: String,
    enum: ['private', 'public'],
    default: 'private',
    required: 'Visibility attribute is required',
  },
}, {
  timestamps: true,
});

const Topic = mongoose.model('Topic', topicSchema);
export default Topic;
