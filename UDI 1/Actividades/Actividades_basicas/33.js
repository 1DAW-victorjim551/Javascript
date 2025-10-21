"use strict";
{
    function esNombreValido(cadena){
        const abecedarioRegx = /^[a-zA-Z/s]*$/;
        let esValido = false;

        console.log(cadena);

        if(cadena.match(abecedarioRegx)){
            esValido = true;
        }

        return esValido;
    }

    console.log(esNombreValido("Javier Ferrer")); // true
    console.log(esNombreValido("Javier123"));     // false
}
