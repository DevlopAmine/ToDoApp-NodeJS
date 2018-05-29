var http = require('http');
var EventEmitter = require('events').EventEmitter;

/*var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('Salut tout le monde !');
});

server.on('close', function() { // On écoute l'évènement close
    console.log('Bye bye !');
})*/
// Code équivalent au précédent
var server = http.createServer();
server.on('request', function(req, res) { });


var jeu = new EventEmitter();

jeu.on('gameover', function(message){
    console.log(message);
});
jeu.on('nouveaujoueur', function(message){
    console.log(message);
});
jeu.emit('gameover', 'Vous avez perdu !');jeu.emit('nouveaujoueur', 'Mario', 35);


server.listen(8080); // Démarre le serveur
//server.close(); // Arrête le serveur. Déclenche l'évènement close

