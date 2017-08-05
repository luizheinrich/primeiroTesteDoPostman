var express = require('express');
var app = express();
var path = require('path');

var postosApi = require('./server/postos/postos.api');
var cors = require ('cors');
var bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());

//bodyParser formata e coloca no formato json
app.use(bodyParser.urlencoded({
    
    extended: false
    
    
    
}));

// configurar a pasta de arquivos estáticos
//todos os arquivos que serão acessados partirão deste diretório

app.use(express.static(path.join(__dirname + '/www')));


app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/www/index.html'));
});



require('./server/postos/postos.router')(app, express, postosApi);




app.listen(3000, function () {
	console.log("Escutando na porta 3000");
});