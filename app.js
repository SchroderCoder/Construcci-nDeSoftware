setTimeout(() => console.log("código asíncrono"), 4000);
setTimeout(() => console.error("ERROR: System Failure"), 7000);

const { randomBytes } = require('crypto');
const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', 'Hola desde node');

console.log("hola desde node");


const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50, 20000];

//Imprime el arreglo en orden 
//porque se ejecuta con los timeouts de los valores del arreglo
for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
} 


const http = require('http');

const server = http.createServer( (request, response) => {    
    //Obtener la URL de la petición
    console.log(request.url);
    //Obtener la IP de la petición
    console.log(request.socket.remoteAddress);

    if (request.url === "/hola") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="UTF-8"></head>');
        response.write("<h1>Hola mundo desde node!</h1>");
        response.end();
    } else if (request.url === "/trivia" && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="UTF-8"></head>');
        response.write("<h1>Pregunta al pulpo quién va a ganar</h1>");
        response.write('<form action="trivia" method="POST">');
        response.write('<fieldset>');
        response.write('<legend>Equipos</legend>');
        response.write('<label for="visitante">Visitante</label><input type="text" name="visitante" id="visitante">');
        response.write('<br><br>');
        response.write('<label for="local">Local</label><input type="text" name="local" id="local">');
        response.write('</fieldset>');
        response.write('<input type="submit" value="Adivina">');
        response.write('</form>');
        response.end();
    } else if (request.url === "/trivia" && request.method === "POST") {
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const dato_visitante = datos_completos.split('&')[0].split('=')[1];
            console.log(dato_visitante);
            const dato_local = datos_completos.split('&')[1].split('=')[1];
            console.log(dato_local);
            response.setHeader('Content-Type', 'text/html');
            response.write("<!DOCTYPE html>");
            response.write('<head><meta charset="UTF-8"></head>');
            response.write("<h1>El resultado es: </h1>");
            if (Math.floor(Math.random() * 2) == 0) {
                response.write('<h2>' + dato_visitante + '</h2>');
            } else {
                response.write('<h2>' + dato_local + '</h2>');
            }
            return response.end();
        });
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write('<html lang="es"');
        response.write('<head><meta charset="UTF-8"></head>');
        response.write("<h1>Error 404: El recurso solicitado no existe</h1>");
        response.end();
    }
    
});

server.listen(3000);
















/*
const datos = [];
request.on('data', (dato) => {
    console.log(dato);
    datos.push(dato);
});
return request.on('end', () => {
    const datos_completos = Buffer.concat(datos).toString();
    console.log(datos_completos);
    const nuevo_dato = datos_completos.split('=')[1];
    return response.end();
});

*/