const filesystem = require("fs");
filesystem.writeFileSync("hola.txt","Hola desde node");

console.log("Hola desde node");

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 340, 1000, 50]

for (let item of arreglo){
    setTimeout(() => {
        console.log(item);
    }, item);
}

const http = require("http");
const server = http.createServer((request,response) => {
    console.log(request.url);
    if(request.url === "/trivia"){
        response.setHeader("Content-Type", "text/html");
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="UTF-8">')
        response.write("<h1>Pregunta al pulpo quien va a ganar! </h1>");
        response.write("<form action = 'trivia' method= POST>");
        response.write("<fieldset>");
        response.write("<legend> Equipos </legend>");
        response.write("<label for = 'visitante'> Visitante: </label><input type = 'text' name = 'visitante'>");
        response.write("<br><br>");
        response.write("<label for = 'local'> Local: </label><input type = 'text' name = 'local' id = 'local'>");
        response.write("</fieldset>");
        response.write("<input type = 'submit' value = 'Adivina'> ");
        response.write("</form>");
        response.end();
    }
    
    else if(request.url === "/trivia" && request.method === "POST"){
        const datos = [];
        request.on ("data", (dato) => {
            console.log(dato);
            datos.push(dato);
            console.log(datos);
        });     
        
    }

    else{
        response.statusCode = 404;
        response.setHeader("Content-Type", "text/html");
        response.write("<!DOCTYPE html>");
        response.write("<h1>ERROR 404 PAPS </h1>");
        response.end();
    }

})

server.listen(3000);    