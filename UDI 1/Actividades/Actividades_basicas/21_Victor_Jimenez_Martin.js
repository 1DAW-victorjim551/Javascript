"use strict"
{
    function invertirCadena(frase){
        let cadena = new String(frase);
        let resultadoCadena = "";
        for (let i=cadena.length; i>=0;i--){
            resultadoCadena += cadena.charAt(i);
        }
        return resultadoCadena;
    }

   console.log(invertirCadena("Hola Mundo")); 
}