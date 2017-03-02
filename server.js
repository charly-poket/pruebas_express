//importar
var express = require('express');
//instanciar
var app = express();

//Archivos estaticos css, js, img, html
app.use(express.static('.'));

//ruteo
app.get('/', function(req, res){
res.sendfile(__dirname + '/index.html');
});

//escuchar
var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})