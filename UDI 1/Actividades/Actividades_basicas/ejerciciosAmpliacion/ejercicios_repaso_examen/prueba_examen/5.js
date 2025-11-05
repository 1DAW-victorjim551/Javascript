"use strict"
{
//     5️⃣ Set de números únicos

// Crea una función sinDuplicados(array) que reciba un array con números repetidos y devuelva un Set con los valores únicos.
// Luego muestra:

// Cuántos valores se eliminaron.

// Cuál es el mínimo y el máximo usando Math.min y Math.max.


    function sinDuplicados(array){
        let setNumeros = new Set(array);
        return setNumeros;
    }

    let valoresEliminados = 0;
    let arrayNumbers = [4, 5, 6, 6, 7, 3, 5, 3, 7, 8, 9, 3, 1, 4, 5, 6];

    valoresEliminados = arrayNumbers.length - sinDuplicados(arrayNumbers).size;

    console.log("Array Original : " + arrayNumbers);
    console.log("Array Nuevo : " + sinDuplicados(arrayNumbers));
    console.log("Elementos eliminados " + valoresEliminados);

    let min = Math.min(...sinDuplicados(arrayNumbers));
    let max = Math.max(...sinDuplicados(arrayNumbers));

    console.log("El maximo es " + max);
    console.log("El minimo es " + min);

}