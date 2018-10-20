var express = require('express');
var bodyParser = require("body-parser");
var router = require('./public/javascripts/routes');
var myErrorLogger = require('./public/javascripts/middlewares/ErrorLogger')
var myRequestLogger = require('./public/javascripts/middlewares/RequestLogger')

var cors = require('cors');
var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(myRequestLogger);
app.use('/', router);
app.use(myErrorLogger);

app.listen(3000);
console.log("Server listening in port 3000!");

