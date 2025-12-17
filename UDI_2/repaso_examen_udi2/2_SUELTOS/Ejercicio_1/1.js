"use strict"
{
    for(let i=0;i<15;i++){
        let fila = document.createElement("div");

        let bloque = document.createElement("div");
        bloque.textContent = Math.floor(Math.random() * (150 - 50 + 1)+50);
        bloque.style.backgroundColor = "cyan";
        bloque.style.height = "50px";
        bloque.style.width = "50px";
        bloque.style.border = "1px solid black";

        fila.appendChild(bloque);
        document.body.appendChild(fila);

        // AÑADIR LOS EVENTOS DEL BLOQUE
        bloque.addEventListener("mouseover", function(){
            bloque.style.height = "80px";
            bloque.style.width = "80px";
        });

        bloque.addEventListener("mouseover", function(){
            bloque.style.height = "80px";
            bloque.style.width = "80px";
        });

        bloque.addEventListener("mouseleave", function(){
            bloque.style.height = "50px";
            bloque.style.width = "50px";
        });

        bloque.addEventListener("dblclick", function(){
            bloque.remove();
        });
    }
}