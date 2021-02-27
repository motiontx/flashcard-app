const express = require('express'); // Express
const app = express();

const dotenv = require('dotenv'); // Environment Variables
dotenv.config();

const morgan = require('morgan'); // Morgan
app.use(morgan('dev'));

const cors = require('cors'); // CORS
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true })) //application/x-www-form-urlencoded

const mongoose = require('mongoose');// Mongoose
const USER = process.env['DATABASE_USER'];
const DBCLUSTER = process.env['DATABASE_CLUSTER'];
const DBNAME = process.env['DATABASE_NAME'];
const DBPASSWORD = process.env['DATABASE_PASSWORD'];
mongoose.connect(`mongodb+srv://${USER}:${DBPASSWORD}@${DBCLUSTER}.mongodb.net/${DBNAME}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
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

app.use(require('./routes'));

// ----------------------------------------------------

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.clear()
  console.log('\x1b[32m%s\x1b[0m', `----------------------------------------------------`);
  console.log('\x1b[37m%s\x1b[0m', `-- ฅ^•ﻌ•^ฅ ... Listening on port ${app.get('port')} ... ฅ^•ﻌ•^ฅ --`);
  console.log('\x1b[32m%s\x1b[0m', `----------------------------------------------------`);
  console.log();
});
