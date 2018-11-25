var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var mongoose = require('mongoose');
var mongoDB = 'mongodb://admin123:admin123@ds115874.mlab.com:15874/project'
mongoose.connect(mongoDB);
