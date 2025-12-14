"use strict"
{
    let papelera = document.getElementById("papelera_vacia");
    let papel = document.getElementById("papel");

    papelera.addEventListener("dragover", function(e){
        e.preventDefault();
    })

    papelera.addEventListener("drop", function(){
        papelera.src = "./Media/papelera_llena.png";
        papel.style.display = "none";
    })


}