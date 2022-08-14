// Nombre: Carlos Adrián García Estrada    Matricula: A01707503
// Fecha: 11 de agosto 2022

//Laboratorio 4: Fundamentos de JavaScript

//-----------------------Caso 1-----------------------------------------------------

let num= prompt("introduce un número: ");

num= parseInt(num);

//Casos de prueba 
//Caso 1: input= 4 output= Número: 1 Cuadrado: 1 Cubo: 1 Número: 2 Cuadrado: 4 Cubo: 8  Número: 3 Cuadrado: 9 Cubo: 27 Número: 4 Cuadrado: 16 Cubo: 64
//Caso 2: input= 1 output= Número: 1 Cuadrado: 1 Cubo: 1 
//Caso 3: input =2 output=  Número: 1 Cuadrado: 1 Cubo: 1 Número: 2 Cuadrado: 4 Cubo: 8

document.write("Respuesta Caso 1: ")
for(let i =1; i<(num+1); i++){
    document.write("<br>" + "Número: " +i+" Cuadrado: " +Math.pow(i,2) +" Cubo: " +Math.pow(i,3));
}

//-----------------------Caso 2-----------------------------------------------------
document.write("<br><br> Respuesta Caso 2: ")

const num1=  Math.floor(Math.random() * (100) + 1)
const num2= Math.floor(Math.random() * (100) + 1)

let startTime = performance.now();

let res= prompt("RAPIDO introduce la respuesta \n" + num1+ "+" + num2);
res= parseInt(res);

let endTime = performance.now();
let time= Math.round((endTime - startTime)/1000)

if (res== num1+num2){
    document.write("¡Correcto crack!     Tiempo: " + time + " segundos");
}

else{
    document.write("incorrecto, a estudiar más paps.    Tiempo: " +time + " segundos");
}

//-----------------------Caso 3-----------------------------------------------------
//Casos de prueba
//Caso 1: input= [0,3,6,-1,0,-24,5,0,-4] output= El arreglo contiene: 3 ceros, 3 números negativos y 3 numeros positivos
//Cas0 2: input = [1,2,3,4,5,6,7] output=  El arreglo contiene: 0 ceros, 0 números negativos y 7 numeros positivos

document.write("<br><br> Respuesta Caso 3 : ")

function contador(arr){
    let zerocount=0;
    let negativecount=0;
    let count= 0;
    for(let p of arr){ //in trabaja con indices
        if (p==0){
            zerocount++;
        }
        else if (p<0){
            negativecount++;
        }

        else{
            count++;
        }

    }

    let ar = [zerocount, negativecount, count];
    return ar;
}

arr= [0,3,6,-1,0,-24,5,0,-4];
document.write("El arreglo es: " + arr);
let count= contador(arr);
document.write("<br> El arreglo contiene: "+ count[0]+ " ceros, " + count[1]+ " números negativos y " +count[2]+ " numeros positivos");

//-----------------------Caso 4-----------------------------------------------------
document.write("<br><br> Respuesta Caso 4 : ")
//-----------------------Caso 5-----------------------------------------------------

document.write("<br><br> Respuesta Caso 5 : ")
function inverso(num){
    continua= true;
    while(continua){
        if (num>=10 || num<=-10){
            
        }

        else{
            console.log("Ingresa un numero válido")
        }
    }
}

let numero= console.prompt("Ingresa un numero de dos digitos");
inverso(numero);