const express = require('express');
const app = express();

// Configura la carpeta public como carpeta estática
app.use(express.static('public'));

// Crea una ruta para servir el archivo script.js
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/sum.test.js');
});

// Inicia el servidor
app.listen(3000, function() {
  console.log('Servidor iniciado en el puerto 3000');
});
