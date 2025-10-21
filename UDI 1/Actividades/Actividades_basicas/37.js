// 37. Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el
// primero almacena los números pares y en el segundo los impares, pe.
// miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}

"use strict"
{
    let arrayNumbers = [2, 5, 7, 7, 4, 6, 4, 3, 2, 7, 10];
    
    function paresImpares(arrayNumbers){
        let arrayPares = [];
        let arrayImpares = [];
        arrayNumbers.forEach(element => {
            if(element % 2 === 0){
                arrayPares.push(element);
            }else {
                arrayImpares.push(element)
            }
        });
        let objetoParesImpares = {
            pares : arrayPares,
            impares : arrayImpares
        }
        return objetoParesImpares;
    }

    console.log(paresImpares(arrayNumbers));
}