var express = require('express'); //importamos la dependencia
var app = express(); //Declaramos una app de express

var port = process.env.PORT || 3000; //seteamos el puerto para que escuche el servidor //indica el puerto por donde se ejecutará el server

//primera ruta(está al nivel de la raíz /), Hello World!
app.get('/', function(req, res){
    res.send('<html><head></head><body><h1>Hello world!</h1></body></html>'); //imprime en html 
});

app.listen(port); //levantar el server y ponerlo a escuchar. //Asignarle al server a que puerto debe escuchar

app.get('/api', function (req, res){
    res.json({firstname: 'John', lastname: 'Doe'}); //Envía información al server de JSON
});

app.get('/person/:id', function (req, res){
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>'); //Darle forma a la información en HTML. También recibiendo la información solicitada.
});