//variables, constantes, consola (log, info, warn, error)
//forma moderna de declarar variables, el alcance es a nivel de bloque
let pulpo_mundial= "Paul";
//"var" no se recomienda (forma clasica) porque es a nivel de función 
var pulpo_boys= "Timothy";

//const protege de que el valor sea modificable 
const pulpos_precio= 60;

console.log(pulpo_mundial);

for(let i =0; i<10; i++){
    console.log(i);
}

//i no esta definido al ser parte del bloque y por lo tanto marca error
//console.log(i);

for(var i =0; i<10; i++ ){
    console.log(i);
}

console.log(i);

console.info ("Esto es información")

console.warn("Cuidadito wazowski")

console.error ("No hay error, españa te ataca")

// en assert si la validacion es veradera no dice nada y en falsa manda un msj de error "=== valor y tipo de dato" "== unicamente valor"
console.assert(1===1)
console.assert(true===1);
console.assert(true==1);

console.log ("precio de pulpo : $"+ pulpos_precio);

//alert, prompts y confirms

alert("Alerta! I have been murdered");
const nombre= prompt("¿Cual es tu nombre bro?");
console.log("Hola "+nombre);
const is_hungry= confirm("¿Tienes hambre?");  

//funciones tradicionales
function comer(){
    const comida= "Picadillo";
    console.log(comida);
    return true;
}


const comida= comer;

if (is_hungry){
    alert("Ya mero es hora de comer tqm");
    comida();
}

else{
    alert("Tienes que comer porque sino te desnutres");
}

//funciones anonimas

const anon= ()=>console.log("anónimo");
anon();

const platillo_fuerte = (platillo) => {
    console.log("El "+platillo + " está delicioso");
}

platillo_fuerte("Tamalito")

//arreglos 

const menu = ["Papa","Arrachera","Tamales","Chilaquiles"];

console.log(menu);

for(let p in menu){ //in trabaja con indices
    console.log(menu [p]);
}

for(let p of menu){ //for trabaja con elementos del arreglo
    console.log(p);
}

menu[10]= "Pasta";
console.log(menu);

menu.length= 2;
console.log(menu);

menu.push("Pizza");

//arreglos asociativos

menu["Postre"]= "Ate con queso";
console.log(menu);

//html dinámico con eventos
const boton= document.getElementById("boton_imagen");


boton.onclick= ()=> {
    console.log("Click!");
    document.getElementById("contenedor_imagen").innerHTML+= ' <img src= "media/pulpo.jpg" alt= imagen de un pulpo enojado>';
}

const boton_cambio_animo = document.getElementById("cambiar_animo");
boton_cambio_animo.onclick= () => {
    console.log("Holaaaaa");
}
