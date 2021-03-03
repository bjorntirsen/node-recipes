const path = require('path');
const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongo-recipies', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

app.use(express.urlencoded({ extended: true }));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

db.on('error', (error) => console.error(error));

app.listen(3000, () => console.log('App listening on port 3000'));
