var express = require('express');
var path = require('path');


var app = express();
var port = process.env.PORT;

var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'client', 'views'));
app.use(express.static(path.resolve(__dirname, 'client')));
app.use(bodyParser.json());
app.use(methodOverride());

app.get('/*', function(req, res){
  res.render('index.ejs');
});

app.listen(port, function(){
  console.log("server listening at..port: " + port);
});
