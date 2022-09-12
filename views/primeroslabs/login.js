const login = document.getElementById("verficar");
const key = document.getElementById("k1");
const confirm_key = document.getElementById("k2");
const boton = document.getElementById("verificar");
boton.addEventListener("click",Verificar_key);

function Verificar_key() {
    if(key.value == confirm_key.value) {
        alert("¡Password creado con exito!");
        window.location.href = 'lab6.html';
    } 
    else {
        alert("¡Error! Su password no coincide, intentelo de nuevo");
    }
}