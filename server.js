var express = require('express')
var app = express()
const orm = require('./config/orm')

orm.selectAll('burgers')

orm.insertOne('burgers', 'burger_name', 'devoured', 'hamburger', true)