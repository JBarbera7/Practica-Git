
const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/sum.test.js');
  });

  app.listen(3000, function() {
    console.log('Servidor iniciado en el puerto 3000');
  });