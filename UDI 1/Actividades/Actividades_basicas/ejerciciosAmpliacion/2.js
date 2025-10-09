"use strict"
{

    function convertirCadenaANumeros(cadena){
        let regExp = /[0-9]*/;
        return cadena.match(regExp);
    }
    

    console.table(convertirCadenaANumeros("58382holasoyvictor50794322"));

}