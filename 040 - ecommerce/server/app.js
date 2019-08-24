const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useCreateIndex: true,
  useNewUrlParser: true
});

const indexRouter = require('./routes/index');
const ecommerceApi = require('./routes/api/ecommerce');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader('Cache-Control', 'no-cache');
  next();
});
app.use('/image', express.static(path.join(__dirname, 'public/images')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/', indexRouter);
app.use('/api/ecommerce', ecommerceApi);

module.exports = app;
