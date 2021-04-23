var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var membersRouter = require('./routes/members');
var fetchVaccinesRouter = require('./routes/fetchVaccines');
var deleteMember = require('./routes/deleteMember');
var updateMember = require('./routes/updateMember');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/members', membersRouter);
app.use('/fetchVaccines', fetchVaccinesRouter);
app.use('/deleteMember', deleteMember);
app.use('/updateMember', updateMember);

module.exports = app;
