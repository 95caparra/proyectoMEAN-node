//requires 
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//iniciar variables
var app = express();

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//importar rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');
var loginRoutes = require('./routes/login');

//conexion a la bd
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;
    console.log('Base de datos: \x1b[32m%s\x1b[0m', ' online');
});

//Rutas
app.use('/usuario', usuarioRoutes);
app.use('/login', loginRoutes);
app.use('/', appRoutes);

//escuchar petición
app.listen(3000, () => {
    console.log('Express server en el pueto 3000: \x1b[32m%s\x1b[0m', ' online');
});