const path = require('path');
const Ganador = require('../models/ganador.model');

exports.getTrivia = (request, response, next) => {
    
    console.log(request.cookies);

    const numero_clicks = request.cookies.numero_clicks ? request.cookies.numero_clicks : 0;

    const ultimo_ganador = request.session.ultimo_ganador ? request.session.ultimo_ganador : false;

    response.render(path.join('paul', 'trivia.ejs'), {
        clicks: request.cookies.numero_clicks ? request.cookies.numero_clicks : numero_clicks,
        ultimo_ganador: ultimo_ganador,
    });
};

exports.postTrivia = (request, response, next) => {

    let nombreGanador = '';
    if (Math.floor(Math.random() * 2) == 0) {
        nombreGanador = request.body.visitante;
    } else {
        nombreGanador = request.body.local;
    }

    const unGanador = new Ganador(nombreGanador);
    unGanador.save();

    request.session.ultimo_ganador = unGanador;

    const numero_clicks = request.cookies.numero_clicks ? Number(request.cookies.numero_clicks) + 1 : 1;
    
    response.cookie("numero_clicks" , numero_clicks, {
        httpOnly: true,
    });

    console.log(request.cookies);
    console.log(request.body);

    response.render(path.join('paul', 'ganador.ejs'), {
        ganador: unGanador.nombre, 
        ganadores: Ganador.fetchAll(),
        clicks: numero_clicks,
    });
};