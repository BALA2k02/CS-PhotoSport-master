const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://balamanikandansrinivasan:FSjezsTHLWpEVgnA@cluster0.tmmtxhy.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database connected!');
}).catch(err => {
  console.error('Error connecting to database', err);
});
