"use strict"
{
    let myBtn = document.getElementById("btnToggle");
    let caja = document.getElementById("caja");

    myBtn.addEventListener("click", function(){
        caja.classList.toggle("oculto");
    });
}