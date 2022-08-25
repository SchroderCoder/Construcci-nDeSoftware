const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));



const rutas_labs1 = require('./routes/lab11.routes.1.js');
app.use('/labs', rutas_labs1);


const rutas_labs2 = require('./routes/lab11.routes.2.js');
app.use('/labs', rutas_labs2);


app.use((request, response, next) => {
    response.status(404);
    response.send('<h1>Error 404: El recurso solicitado no existe</h1>'); //Manda la respuesta
});


app.listen(3000);