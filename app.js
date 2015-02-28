var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'jade');

app.get('/', function (req, res) {

  res.render('index');
  // res.send('Hello World!');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});