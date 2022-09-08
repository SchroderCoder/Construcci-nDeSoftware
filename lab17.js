const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');

const app = express();

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(session({
    secret: 'meuehtldjssi8hdofienalfienvcpfhsojapojkjdfñaasojfoe49074jkslaf3', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const csrfProtection = csrf();
app.use(csrfProtection); 

app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});

const rutas_usuario = require('./routes/user.routes.js');
app.use('/user', rutas_usuario);

const rutas_labs = require('./routes/lab17.routes.1.js');
app.use('/labs', rutas_labs);

const rutas_jugadores = require('./routes/jugadores.routes.js');
app.use('/jugadores', rutas_jugadores);

app.use((request, response, next) => {
    response.status(404);
    response.send('<h1>Error 404: El recurso solicitado no existe</h1>'); //Manda la respuesta
});


app.listen(3000);