"use strict"
{
    function esAnagrama(texto1, texto2){
        let limpio1 = texto1.replace(/\s/g, "").toLowerCase();
        let limpio2 = texto2.replace(/\s/g, "").toLowerCase();

        let ordenado1 = limpio1.split("").sort().join("");
        let ordenado2 = limpio2.split("").sort().join("");

        return ordenado1 === ordenado2;
    }


    let formulario = document.getElementById("formuario");
    let texto1 = document.getElementById("palabra1");
    let texto2 = document.getElementById("palabra2");
    let mensaje = document.getElementById("mensaje");

    formulario.addEventListener("submit", function(e){
        e.preventDefault();
        if(esAnagrama(texto1.value, texto2.value)){
            mensaje.textContent = "Son anagramas";
        }else {
            mensaje.textContent = "NO son anagramas";
        }
    })

    let regExp = new RegExp(/[0-9a-zA-Z]+@[a-z0-9A-Z]+\.[a-zA-Z]{2,}/);
    
}

