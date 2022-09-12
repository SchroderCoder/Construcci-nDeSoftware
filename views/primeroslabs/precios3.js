const boton_saul = document.getElementById("saul");

boton_saul.onclick = () =>{
    const cant3= document.getElementById("cant3")
    const total3= cant3.value* 111;
    document.write("<h2> artículo comprado!</h2>");
    document.write("<h3> Cantidad: " + cant3.value);
    document.write("<h3> Precio unitario: $" +111);
    document.write("<h3> IVA: 16%");
    document.write("<br>");
    document.write("TOTAL: $" +(total3*1.16) +" Dólares");
}