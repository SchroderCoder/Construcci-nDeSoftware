const fs = require("fs");

var readline = require('readline');
var http = require("http");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log("Hola desde node");

const arreglo = [4, 50, 2390, 140, 155, 2, 666, 7, 12, 233, 1010, 430]

for (let item of arreglo){
    var prom = arreglo.reduce((a, b) => a + b, 0) / arreglo.length;
}

console.log("El promedio es: "+prom);

rl.question("Escribe algo que quieras que se guarde por los siglos de los siglos amen: ", (respuesta) => {
    fs.writeFileSync("xd.txt",respuesta);
    rl.close();

});

// const http = require("http");
// const server = http.createServer((request,response) => {
//     console.log(request.url);
//     response.setHeader("Content-Type", "text/html");
//     fs.readFile("media/index.html", null, function(error, data){
//         if (error){
//             response.write(404);
//             response.write("No se encuentra el archivo")
//         }

//         else{
//             response.write(data);
//         }
//         response.end();
//     });
// })

// server.listen(3000);    

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}

http.createServer(onRequest).listen(8000);