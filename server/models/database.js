// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(){
//   console.log('Connected')
// });



// // Models
// require('./Category');
// //require('./Recipe');

const mongoose = require('mongoose');
require('dotenv').config();

//console.log('MONGODB_URI:', process.env.MONGODB_URI); // Log the URI

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function() {
  console.log('Database connection opened');
});

// Models
require('./Category');
require('./Recipe');
require('./user');
