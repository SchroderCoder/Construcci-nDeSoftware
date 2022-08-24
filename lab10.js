
const fs = require('fs');


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

    if (request.url === "/lab1" && request.method === "GET") {
        html = fs.readFileSync('primeroslabs/lab1.html');
        response.end(html);
        response.end();
    } 
    
    else if (request.url === "/lab3" && request.method === "GET") {
        html = fs.readFileSync("primeroslabs/lab3.html");
        response.end(html);
        response.end();
    } 
    
    else if (request.url === "/lab4" && request.method === "GET") {
        html = fs.readFileSync('primeroslabs/lab4.html');
        response.end(html);
        response.end();
    } 
    
     else if (request.url === "/libros" && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="UTF-8"></head>');
        response.write("<h1> Buen día profe, me haría muy feliz si me pudiera recomendar algunos de sus libros preferidos. Gracias<h1>")
        response.write('<form action="libros" method="POST">');
        response.write('<label for="libros">Libros</label><input type="text" name="libros" id="libros">');
        response.write('<input type="submit" value="Enviar">');
        response.write('</form>');
        response.end();
    } 
    
    else if (request.url === "/libros" && request.method === "POST") {
        request.on('data', (dato) => {
            
            fs.writeFileSync("libros.txt",dato);
        });
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="UTF-8"></head>');
        response.write("<h1>Gracias: </h1>");
        response.end();
    } 

    else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="UTF-8"></head>');
        response.write("<h1>Error 404: El recurso solicitado no existe paps</h1>");
        response.end();
    }
    
});

server.listen(3000);







