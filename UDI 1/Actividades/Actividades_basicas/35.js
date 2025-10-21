"use strict"
{
    let arrayNumeros = [2, 5, 6, 7];

    function elevarAlCuadrado(arrayNumeros){
        let arrayElevado = arrayNumeros.map(number => number*number);
        return arrayElevado;
    }

    console.log(elevarAlCuadrado(arrayNumeros));
    console.log(arrayNumeros);
}