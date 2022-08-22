
const boton_cambio_animo= document.getElementById("cambiar_animo");

let is_happy= false;

const feliz = () => {
    const contenedor= document.getElementById("contenedor_imagen");
    contenedor.innerHTML = ' <img src="media/pulpo_feliz.jpg" alt= "Pulpo feliz" width= "400">';
    boton_cambio_animo.innerText= "Enojado";
    boton_cambio_animo.style.backgroundColor = "#c62828";
    is_happy = true;
}

const enojado = () => {
    const contenedor = document.getElementById("contenedor_imagen");
    contenedor.innerHTML= ' <img src="media/pulpo_enojado.jpg" alt= "Pulpo enojado" width= "400">';
    boton_cambio_animo.innerText = "Feliz";
    boton_cambio_animo.style.backgroundColor = "#a7ffeb";
    is_happy = false;
   
}

enojado();

boton_cambio_animo.onclick= () => {
    if (is_happy){
        enojado();
    }
    else{
        feliz();
    }
}
