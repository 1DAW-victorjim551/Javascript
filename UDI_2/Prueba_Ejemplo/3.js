"use strict"
{
    let nombre = document.getElementById("nombre");
    let formulario = document.getElementById("formulario");
    let myP = document.createElement("p");
    myP.id = "resultado";

    formulario.addEventListener("submit", function(event){
        event.preventDefault();

        if(nombre.value === ""){
            myP.textContent = "Porfavor escribe un nombre";
        }else {
            myP.textContent = "Hola " + nombre.value;
        }

        document.body.appendChild(myP);
    });


    
}