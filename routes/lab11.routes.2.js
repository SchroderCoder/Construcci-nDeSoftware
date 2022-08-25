const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/lab5', (request, response, next) => {
    html = fs.readFileSync('primeroslabs/lab5.html');
        response.end(html);
        response.end();
});

router.get('/lab6', (request, response, next) => {
    html = fs.readFileSync('primeroslabs/lab6.html');
        response.end(html);
        response.end();
});

router.get('/peliculas', (request, response, next) => {
    response.write("<!DOCTYPE html>");
    response.write('<head><meta charset="UTF-8"></head>');
    response.write("<h1> Laboratorio 11<h1>");
    response.write("<h2> Buen día profe, me haría muy feliz si me pudiera recomendar alguna de sus peliculas preferidas. Gracias<h2>")
    response.write('<form action="peliculas" method="POST">');
    response.write('<label for="peliculas">peliculas</label><input type="text" name="peliculas" id="peliculas">');
    response.write('<input type="submit" value="Enviar">');
    response.write('</form>');
    response.write(" <h2> Preguntas Lab 11</h2>");
    response.write(" <h3> Describe el archivo package.json. <h3>")
    response.write(" <p> El package.json nos permite crear proyectos de maner mucho más facil al presentar una interfaz de interacción, a su vez le da un formato de datos importantes de nuestro proyecto y permite gestionar librerías, paquetes y scripts <p>")
    response.write(" <h2> Referencias</h2>");
    response.write(" <p> Node.js (s.f), 'The package.json guide'. Recuperado de: https://nodejs.dev/en/learn/the-package-json-guide <p>")
    response.end();
});

router.post('/peliculas', (request, response, next) => {
    fs.writeFile("peliculas.txt",request.body.peliculas);
    response.setHeader('Content-Type', 'text/html');
    response.write("<!DOCTYPE html>");
    response.write('<head><meta charset="UTF-8"></head>');
    response.write("<h1>Gracias </h1>");
    response.end();
});

module.exports = router;