// banale server HTTP che logga su un file gli URL richiesti dai client

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.appendFile('log.txt', "At " + Date() + ": " + req.url+"\n", function (err) {
        if (err) throw err;
        console.log('log aggiornato!');
        res.end("Go away!") // non ci interessa la risposta ...
    });
}).listen(8080);