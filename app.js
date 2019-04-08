require('dotenv').config()

var express = require('express');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var contributionsRouter = require('./routes/contributions');
var eventsRouter = require('./routes/events');


var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/contributions', contributionsRouter);
app.use('/events', eventsRouter);


module.exports = app;
