var express = require('express'),
    jwt     = require('express-jwt'),
    config  = require('./config'),
    quoter  = require('./quoter');

var app = module.exports = express.Router();

var jwtCheck = jwt({
  secret: config.secret
});

app.use('/api/protected', jwtCheck);

app.get('/api/protected/random-quote', function(req, res) {
  res.status(200).send(quoter.getRandomOne());
});

app.get('/api/protected/menu', function(req, res) {
    res.writeHead(200, {"Content-Type": "application/json"});
    var menuArray = [{"titulo":"Inicio","iconCls":"glyphicon glyphicon-home","href":".home","id":"332f1de09c1d4836"},{"titulo":"Salir","iconCls":"glyphicon glyphicon-off","href":".salir","id":"7f6fddc014a80ac3"},{"titulo":"Tareas","iconCls":"glyphicon glyphicon-calendar","submenu":[{"titulo":"Enviar Informes","iconCls":"glyphicon glyphicon-envelope","href":".enviar","id":"332f1de09c1d4abc"},{"titulo":"Imprimir Reportes","iconCls":"glyphicon glyphicon-print","id":"daf93b69dd6fa707"}],"id":"daf93b69dd6fa907"}];

    var json = JSON.stringify({
        menu: menuArray,
        user: "P. Sergio Alvarado G."
    });
    res.end(json);
});
