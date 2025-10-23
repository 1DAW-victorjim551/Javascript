// 39. Programa una función que dado un array de elementos, elimine los duplicados, pe.e mi
// Funcion (“x”,10,”x”,2,”10,10, true,true) devolverá [“x”,10,2,”10”,true]

"use strict"
{
    let arrayNumbers = [4, 7, 8, 5, 6, 4, 2, 4, 5, 4, 4, 4, 1];

    function eliminarRepeticiones(arrayNumbers){
        let sinDuplicados = new Set(arrayNumbers);
        return sinDuplicados;
    }

    console.log(eliminarRepeticiones(arrayNumbers));
}