var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended:false}));

app.get('/form', function(req, res){
    res.render('form');
});

app.get('/form_receiver', function(req, res){
    var title = req.query.title;
    var desc = req.query.desc;
    res.send(title+','+desc);
});

app.post('/form_receiver', function(req, res){
    var title = req.body.title;
    var desc = req.body.desc;
    res.send(title+','+desc);
});

app.listen(3000, function(){
    console.log('Connected 3000 port!');
});