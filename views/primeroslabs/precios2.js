const boton_crush = document.getElementById("crush");

boton_crush.onclick = () =>{
    const cant2= document.getElementById("cant2")
    const total2=cant2.value*15000;
    document.write("<h2> artículo comprado!</h2>");
    document.write("<h3> Cantidad: " + cant2.value);
    document.write("<h3> Precio unitario: $" +15000);
    document.write("<h3> IVA: 16%");
    document.write("<br>");
    document.write("TOTAL: $" +(total2*1.16) +" Dólares");


}