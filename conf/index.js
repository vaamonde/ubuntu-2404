// Criando as variáveis do Express e do App do Node.JS
var express = require ('express'); 
var app = express();

// Mensagem que será mostrada no browser (navegador) 
app.get('/', function (req, res) {
    // Obtém a data e hora atual
    var dataHoraAtual = new Date().toLocaleString();
    // Mensagem que será enviada com a data e hora atual
    var mensagem = 'Meu novo projeto em Node.JS - Robson Vaamonde<br>Data e hora atual: ' + dataHoraAtual;
    res.send(mensagem);
});

// Porta padrão utilizada pela aplicação do Node.JS
app.listen(3000, function() {
    console.log('Aplicativo de exemplo ouvindo na porta 3000');
});