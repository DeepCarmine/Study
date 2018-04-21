var express = require('express');
var session = require('express-session');
var app = express();

app.use(session({
    secret: '11!@#ASD@$%REFSD!@#E',
    resave: false,
    saveUninitialized: true
}))

app.listen(3003, function(){
    console.log('Coonected 3003 port!!');
});
