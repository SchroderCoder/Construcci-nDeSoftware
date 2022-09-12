const boton_anti = document.getElementById("anti");
const boton_crush = document.getElementById("crush");
const boton_saul = document.getElementById("saul");

boton_anti.onclick = () =>{
    const cant1= document.getElementById("cant1")
    const total1= cant1.value*62500;
    document.write("<h2> artículo comprado!</h2>");
    document.write("<h3> Cantidad: " + cant1.value);
    document.write("<h3> Precio unitario: $" +62500);
    document.write("<h3> IVA: 16%");
    document.write("<br>");
    document.write("TOTAL: $" +(total1*1.16) +" Dólares");


}

boton_crush.onclick = () =>{
    const cant2= document.getElementById("cant2")
    const total2=cant2.value*1500;
    document.write("<h2> artículo comprado!</h2>");
    document.write("<h3> Cantidad: " + cant2.value);
    document.write("<h3> Precio unitario: $" +1500);
    document.write("<h3> IVA: 16%");
    document.write("<br>");
    document.write("TOTAL: $" +(total2*1.16) +" Dólares");


}

boton_saul.onclick = () =>{
    const cant3= document.getElementById("cant3")
    const total3= cant3.value* 111111111111;
    document.write("<h2> artículo comprado!</h2>");
    document.write("<h3> Cantidad: " + cant3.value);
    document.write("<h3> Precio unitario: $" +111111111111);
    document.write("<h3> IVA: 16%");
    document.write("<br>");
    document.write("TOTAL: $" +(total3*1.16) +" Dólares");
}