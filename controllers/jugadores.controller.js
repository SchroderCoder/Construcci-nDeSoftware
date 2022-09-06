const path = require('path');
const Jugador = require('../models/jugador.model');

exports.getjugadores = (request, response, next) => {

    Jugador.fetchAll()
        .then(([rows, fieldData]) => {
            console.log(rows);
            response.render(path.join('Jugador', 'jugador.ejs'), {
                jugadores: rows,
            });
        })
        .catch(err => {
            console.log(err);
            response.render('error.ejs');
        });
    
};

exports.getNewjugador = (request, response, next) => {

    response.render(path.join('Jugador', 'nuevo.ejs'));

};


exports.postNewjugador = (request, response, next) => {

    const jugador = new Jugador(request.body.nombre);
    jugador.save()
        .then(() => {
            Jugador.fetchAll()
                .then(([rows, fieldData]) => {
                    console.log(rows);
                    response.render(path.join('Jugador', 'jugador.ejs'), {
                    jugadores: rows,
                })
            });
        })
        .catch(err => {
            console.log(err);
            response.render('error.ejs');
        });
    
};
