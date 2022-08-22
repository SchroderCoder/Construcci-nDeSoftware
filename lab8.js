'use strict'
const fs = require("fs");

var readline = require('readline');
var http = require("http");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log("Hola desde node");
//---------------------------------------------------------CASO 1--------------------------------------------------------------------
// CASO DE PRUEBA 1: Input: [1,2,3,4,5] output: El promedio es: 3
//CASO DE PRUEBA 2: Input: [0,0,0,0,0] output: El promedio es 0;

const arreglo = [4, 50, 2390, 140, 155, 2, 666, 7, 12, 233, 1010, 430]

for (let item of arreglo){
    var prom = arreglo.reduce((a, b) => a + b, 0) / arreglo.length;
}

console.log("El promedio es: "+prom);
//---------------------------------------------------------CASO 2--------------------------------------------------------------------

//---------------------------------------------------------CASO 3--------------------------------------------------------------------


const question1 = () => {
    return new Promise((resolve, reject) => {
      rl.question('Escribe algo para la posteridad: ', (respuesta) => {
        fs.writeFileSync("xd.txt",respuesta);
        resolve()
      })
    })
  }
  
  const question2 = () => {
    return new Promise((resolve, reject) => {
      rl.question('Escribe un numero entero y lo convierto a binario ', (respuesta) => {
        let num= parseInt(respuesta);
        let x= [];
        let rest= 0;

         while (num >= 1){
            rest= num%2;
            rest= rest.toString();
            console.log(rest);
            x.push(rest)
            num= Math.floor(num/2);
            console.log(num);
        }
        x= x.reverse();
        console.log(" El número en binario es: " +x);

      })
    })
  }
  
  const main = async () => {
    await question1()
    await question2()
    rl.close()
  }

  main();
  
//---------------------------------------------------------CASO 4--------------------------------------------------------------------

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