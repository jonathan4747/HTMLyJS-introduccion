console.log("Hola desde la consola");
function desplegarHola(elemento){
    console.log(elemento);
    
    //elemento.innerText = "acaba de cambiar";
    //elemento.remove();
    
    console.log("hola, le diste click");
    alert("hola le diste al boton.");
}

function remueveElemento(elemento){
    elemento.remove();

}
function cambioTexto(elemento){
    elemento.innerText="usted cambio";
}