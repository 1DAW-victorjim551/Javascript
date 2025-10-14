"use strict"
{
    function validarPalindromo(cadena){
        let frase = new String(cadena);
        let resultadoCadena = "";
        for (let i=cadena.length; i>=0;i--){
            resultadoCadena += cadena.charAt(i);
        }

        if (resultadoCadena == frase){
            return true;
        }else return false;
    }

    console.log(validarPalindromo("sala"));
}