"use strict"
{
    function miFuncion(texto, patron) {
        return texto.split(patron).join('');
    }


let resultado = miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
console.log(resultado); 

}