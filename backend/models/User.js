const mongoose = require('mongoose'); // Mongoose
const Schema = mongoose.Schema;

const validateEmail = (email) => { // emailregex.com
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email)
};

const userSchema = new Schema({
  name: {
    type: String,
    required: 'Name is required',
  },
  surname: {
    type: String,
    required: 'Surname is required',
  },
  username: {
    type: String,
    required: 'Username is required',
  },
  email: {
    type: String,
    validate: [validateEmail, 'Please fill a valid email address'],
    required: 'Email address is required',
  },
  birthdate: {
    type: Date,
  },
  country: {
    type: String,
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);
export default User;
