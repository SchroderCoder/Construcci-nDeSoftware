const express = require('express');
const path = require('path');
const router = express.Router();
const ganadores= [];

router.get('/lab5', (request, response, next) => {
    response.sendFile(path.join(__dirname,"..",'views', 'primeroslabs', 'lab5.html'));
});

router.get('/lab12', (request, response, next) => {
    response.sendFile(path.join(__dirname,"..",'views', 'lab12.html'));
});

router.post('/lab12', (request, response, next) => {
    let lalo= "papel";
    let ganador= "";
    let respuestas = ["piedra","papel","tijera"];
    charlie= respuestas[Math.floor(Math.random() * 3)];

    if(lalo === charlie){
        ganador= "empate!";
        ganadores.push(ganador);
    }
    else if(lalo == 'piedra'){
        if(charlie == 'papel'){
            ganador= "Ganó Charlie!";
            ganadores.push(ganador);
        }else{
            ganador= "Ganó Lalo!";s
            ganadores.push(ganador);
        }
    }
    else if(lalo == 'tijera'){
        if(charlie == 'piedra'){
            ganador= "Ganó Charlie!";
            ganadores.push(ganador);
        }else{
            ganador= "Ganó Lalo!";
            ganadores.push(ganador);
        }
    }
    else if(lalo == 'papel'){
        if(charlie == 'tijera'){
            ganador= "Ganó Charlie!";
            ganadores.push(ganador);
        }else{
            ganador= "Ganó lalo!";
            ganadores.push(ganador);
        }
    }
    response.render(path.join( '..','views','respuesta.ejs'), {
        ganador: ganador, 
        ganadores: ganadores,
    });
});

module.exports = router;