// Nombre: Carlos Adrián García Estrada    Matricula: A01707503
// Fecha: 14 de agosto 2022

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
    for(let p of arr){ //in trabaja con indices, of con objetos
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
//Casos de prueba
//Caso 1: input= [[1,2,3],[4,5,6],[7,8,9]] output=  El promedio en la columna 2 es: 0 El promedio en la columna 1 es: 5 El promedio en la columna 2 es: 8
//Cas0 2: input = [[0,0,0],[0,0,0],[0,0,0]] output=  El promedio en la columna 0 es: 0 El promedio en la columna 1 es: 0 El promedio en la columna 2 es: 0
document.write("<br><br> Respuesta Caso 4 : ")

function promedios(arr){
    let prom= 0;
    let av= [];
    for (let i=0; i<arr.length; i++){
        for (let j=0; j<arr[i].length; j++){
            prom+= arr[i][j];
        }
        av.push(prom)
        av[i]= av[i]/arr[i].length;
        prom=0;
    }
    return av;
}

let arr1= [1,2,3], arr2= [4,5,6], arr3= [7,8,9];
let array= [arr1,arr2,arr3];
let promedio= promedios(array);
promedio[0];    
promedio[1];
promedio[2];
for (let i in promedio){
    document.write("El promedio en la columna " +i+ " es: "+ promedio[i]+ "<br>");
}

//-----------------------Caso 5-----------------------------------------------------

//Casos de prueba
//Caso 1: input= 12, output: el inverso es 21
//Caso 2: input= 2348492, output= 294832
//Caso 3: input= 0, output, ingresa un número válido
document.write("<br><br> Respuesta Caso 5 : ")


function inverso(num){
    let reverse= "";
        for (let i= num.length; i>0; i--){
            reverse+= num.charAt(i-1);
        }
         return reverse;
}

let continua= true;

while (continua){
    let numero = prompt("Ingresa un número de 2 o más digitos")
    if (numero>=10 || numero<=-10 ){
        let rev= inverso(numero);
        document.write("El inverso es: " + rev);
        continua= false;
        break;
    }  

    else{
        console.log("Ingresa un número válido")
    }
}

//-----------------------Caso 6-----------------------------------------------------
document.write("<br><br><h2>Caso 6</h2>");
document.write("<br><br>Ordenamiento de arreglo");
document.write("<br><br>Método Bubble sort y swap sort:");

class sort{
    constructor(arr,swaps, comp, method){
        this.arr=arr;
        this.comp= comp;
        this.method= method;
        this.swaps= swaps;
    }

    swapSort() {
        let temp=0;
        for (let i = 0; i < (this.arr.length - 1); i++) {
          for (var j = i + 1; j < this.arr.length; j++) {
            this.comp++;
            if (this.arr[i] > this.arr[j]) {
              temp = this.arr[i];
              this.arr[i] = this.arr[j];
              this.arr[j] = temp;
              this.swaps++;
            }
          }
        }
      }


    bubbleSort() {
        let temp= 0;
        for (let i = 0; i < this.arr.length-1; i++) {
          for (var j = 0; j < this.arr.length-i-1; j++) {
            this.comp++;
            if (this.arr[j] > this.arr[j+1]){
              temp = this.arr[j];
              this.arr[j] = this.arr[j+1];
              this.arr[j+1] = temp;
              this.swaps++;
            }
          }
        }   
      }
      

}

arr1=[0,3,6,1,2,-1,5,7,0]
arr2=[6,0,1,265,34,-1,-54,8,2]

const sort1= new sort (arr1,0,0,"bubble sort");
const sort2= new sort(arr2,0,0,"swap sort");

document.write("<br>")
document.write("Array 1: "+ arr1);
document.write("<br>")
document.write("Array 2: "+ arr2);

sort1.bubbleSort();
sort2.swapSort();


document.write("<br>")
document.write("Array 1 ordenado: "+ sort1.arr+ " Método: " +sort1.method+ " comparaciones: "+sort1.comp+" swaps: "+sort1.swaps);
document.write("<br>")
document.write("Array 2 ordenado: "+ sort2.arr+ " Método: " +sort2.method+ " comparaciones: "+sort2.comp+" swaps: "+sort2.swaps);