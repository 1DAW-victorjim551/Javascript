"use strict"
{
   let p1 = document.createElement("p");

    document.body.appendChild(p1);

     document.addEventListener("mousemove", function (evento){
        p1.textContent = "Eje X: " + evento.clientX + " Eje Y: " + evento.clientY;
    });
        
}

