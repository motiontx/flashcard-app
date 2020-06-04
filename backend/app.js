const express = require('express'); // Express
const app = express();

const morgan = require('morgan'); // Morgan
app.use(morgan('dev'));

const cors = require('cors'); // CORS
app.use(cors());

const mongoose = require('mongoose'); // Mongoose
mongoose.connect('mongodb://localhost:27017/flashcard-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('/', function(req, res) {
  res.send('Hello World!');
});

// Models
require('./models/User');
require('./models/Topic');
require('./models/Flashcard');

require('./models/types/CorrectSequence');
require('./models/types/JoinWithArrows');
require('./models/types/StandardFlashcard');
require('./models/types/TrueOrFalse');

// ----------------------------------------------------

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.clear()
  console.log('\x1b[32m%s\x1b[0m', `----------------------------------------------------`);
  console.log('\x1b[37m%s\x1b[0m', `-- ฅ^•ﻌ•^ฅ ... Listening on port ${app.get('port')} ... ฅ^•ﻌ•^ฅ --`);
  console.log('\x1b[32m%s\x1b[0m', `----------------------------------------------------`);
  console.log();
});
