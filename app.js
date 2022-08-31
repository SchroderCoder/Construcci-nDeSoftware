const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(session({
    secret: 'pbyvtrynobivujcinbrtciouitrumfyiñufydtopjhvvfgirseu576r', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const rutas_usuario = require('./routes/user.routes');
app.use('/user', rutas_usuario);

const rutas_trivia = require('./routes/trivia.routes');
app.use('/paul', rutas_trivia);

app.use('/hola/lalo', (request, response, next) => {
    response.send('Hola! desde la ruta "/hola/lalo"'); 
});

app.use('/hola', (request, response, next) => {
    response.send('Hola! desde la ruta "/hola"'); 
});

app.get('/info', (request, response, next) => {
    console.log(path.join(__dirname));
    console.log(path.join(__dirname, '..'));
    console.log(path.join(__dirname, '..', 'views', 'index.html'));
    response.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use((request, response, next) => {
    response.status(404);
    response.send('Error 404: El recurso solicitado no existe'); //Manda la respuesta
});


app.listen(3000);