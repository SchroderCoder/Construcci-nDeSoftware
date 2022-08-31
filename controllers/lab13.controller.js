
const path = require('path');
const Ganador = require('../models/ganador.model');

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

exports.getLab13 = (request, response, next) => {

    response.render(path.join('..',"views","lab13.ejs"));
};

exports.postLab13 = (request, response, next) => {

    let lalo= request.body.elige;
    let ganador= "";
    let respuestas = ["piedra","papel","tijera"];
    charlie= respuestas[Math.floor(Math.random() * 3)];

    console.log(lalo);
    console.log(charlie);


    if(lalo === charlie){
        ganador= "empate!";
    }
    else if(lalo == 'piedra'){
        if(charlie == 'papel'){
            ganador= "Ganó Charlie!";
        }else{
            ganador= "Ganó Lalo!";
        }
    }
    else if(lalo == 'tijera'){
        if(charlie == 'piedra'){
            ganador= "Ganó Charlie!";
        }else{
            ganador= "Ganó Lalo!";
        }
    }
    else if(lalo == 'papel'){
        if(charlie == 'tijera'){
            ganador= "Ganó Charlie!";
        }else{
            ganador= "Ganó lalo!";
        }
    }

    const unGanador = new Ganador(ganador);
    unGanador.save();

    response.render(path.join( '..','views','respuesta.ejs'), {
        ganador: unGanador.nombre, 
        ganadores: Ganador.fetchAll()
    });
};