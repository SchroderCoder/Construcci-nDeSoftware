
const path = require('path');
const Ganador = require('../models/ganador.model');
const Jugador = require('../models/jugador.model');

exports.getLab1 = (request, response, next) => {

    response.render(path.join('..',"views", "primeroslabs","lab1.html"));
};

exports.getLab3 = (request, response, next) => {

    response.render(path.join('..',"views", "primeroslabs","lab3.html"));
};

exports.getLab4 = (request, response, next) => {

    response.render(path.join('..',"views", "primeroslabs","lab4.html"));
};

exports.getLab5 = (request, response, next) => {

    response.render(path.join('..',"views", "primeroslabs","lab5.html"));
};

exports.getLab17 = (request, response, next) => {

    console.log(request.cookies);

    const numero_clicks = request.cookies.numero_clicks ? request.cookies.numero_clicks : 0;
    const ultimo_ganador = request.session.ultimo_ganador ? request.session.ultimo_ganador : false;

    let respuestas = ["piedra","papel","tijera"];

    Jugador.fetchAll()
        .then(([rows, fieldData]) => {     
            console.log(rows);
            response.render(path.join("..",'views', 'lab17.ejs'), {
                clicks: request.cookies.numero_clicks ? request.cookies.numero_clicks : numero_clicks,
                ultimo_ganador: ultimo_ganador,
                jugadores: rows,
                mano: respuestas,
                isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
            });
        })
        .catch(err => {
            console.log(err);
            response.render('error.ejs');
        });
};

exports.postLab17 = (request, response, next) => {
    let respuestas = ["piedra","papel","tijera"];
    let name = request.body.jugadores;
    let player= request.body.mano;
    let ganador= "";
    compu= respuestas[Math.floor(Math.random() * 3)];

    console.log(player);
    console.log(compu);


    if(player === compu){
        ganador= "empate!";
    }
    else if(player == 'piedra'){
        if(compu == 'papel'){
            ganador= "Ganó la compu!";
        }else{
            ganador= "Ganó "+ name +"!";
        }
    }
    else if(player == 'tijera'){
        if(compu == 'piedra'){
            ganador= "Ganó la compu!";
        }else{
            ganador= "Ganó "+ name +"!";
        }
    }
    else if(player == 'papel'){
        if(compu == 'tijera'){
            ganador= "Ganó la compu!";
        }else{
            ganador= "Ganó "+ name +"!";
        }
    }

    const unGanador = new Ganador(ganador);
    unGanador.save();

    request.session.ultimo_ganador = unGanador;

    const numero_clicks = request.cookies.numero_clicks ? Number(request.cookies.numero_clicks) + 1 : 1;

    response.cookie("numero_clicks" , numero_clicks, {
        httpOnly: true,
    });

    response.render(path.join( '..','views','respuesta.ejs'), {
        ganador: unGanador.nombre, 
        ganadores: Ganador.fetchAll(),
        clicks: numero_clicks,
        isLoggedIn: request.session.isLoggedIn ? request.session.isLoggedIn : false,
    });
};