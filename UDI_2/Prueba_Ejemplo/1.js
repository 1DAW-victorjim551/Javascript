"use strict"
{
    let myP = document.getElementById("mensaje");
    let button = document.getElementById("btnCambiar");

    button.addEventListener("click", function(){
        myP.textContent = "Mensaje actualizado"
        myP.style.color = "red";
        myP.style.fontSize = "24px";
    });
}