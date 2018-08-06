var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors());
app.options('*', cors());

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

// app.use(express.static(__dirname + '/public'));

// app.get('/', function(request, response) {
//  response.render('pages/index');
// });

/**
 * Ejemplo de aplicación de modulos
 */
var Demos = require('./module/demo');
app.get('/demo1', Demos.demo1);
app.get('/demo2', Demos.demo2);

/**
 * Conexion con MongoDB
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:elys2507@ds113566.mlab.com:13566/techumxesm');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.info('Estamos conectados...');
});

/**
 * Exponiendo servicios
 */

 var User = require('./module/user');
 app.post('/user/access', User.validateUser);
 app.post('/user/create', User.createUser);