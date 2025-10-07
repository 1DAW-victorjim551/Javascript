"use strict"
{
    function invertirCadena(frase){
        let resultadoCadena = "";
        for (let i=frase.lenght; i>0;i--){
            resultadoCadena += frase.charAt(i);
        }
        return console.log(resultadoCadena);
    }

    invertirCadena("Hola Mundo");
}