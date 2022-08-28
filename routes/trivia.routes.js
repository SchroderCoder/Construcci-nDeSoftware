const express = require('express');
const path = require('path');

const router = express.Router();

const ganadores = [];

router.get('/trivia', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'paul', 'trivia.html'));
});

router.post('/trivia', (request, response, next) => {
    console.log(request.body);
    let ganador = '';
    if (Math.floor(Math.random() * 2) == 0) {
        ganador = request.body.visitante;
    } else {
        ganador = request.body.local;
    }

    console.log(ganador);
    ganadores.push(ganador);
    response.render(path.join('paul', 'ganador.ejs'), {
        ganador: ganador, 
        ganadores: ganadores,
    });
});

module.exports = router;