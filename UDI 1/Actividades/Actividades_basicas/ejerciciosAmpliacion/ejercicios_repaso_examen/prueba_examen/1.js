"use strict"
{
//     1️⃣ Números aleatorios y media controlada

// Crea una función generarNumeros(n, min, max) que devuelva un array con n números aleatorios entre min y max.
// Luego otra función analizarNumeros(array) que:

// Calcule la media.

// Devuelva un objeto con tres propiedades:
// { mayoresMedia: [...], menoresMedia: [...], media: valor }.
// Muestra el resultado con console.table().

    function generarNumeros(n, min, max){
        let arrayNumRandom = new Array();


        for(let i=0;i<n;i++){
           arrayNumRandom[i] = Math.floor(Math.random() * (max - min + 1)) + min;
        }

        return arrayNumRandom;
    }

    function analizarNumeros(arrayNumRandom){
        let suma = 0;
      let mediaValor;

        arrayNumRandom.forEach(element => {
            suma+=element
            });

    mediaValor = suma / arrayNumRandom.length;

    let medias = {
        mayoresMedia : [],
        menoresMedia : [],
        media : mediaValor
    };

    arrayNumRandom.forEach(element => {
        if(element > mediaValor){
            medias["mayoresMedia"].push(element)
        }else {
            medias["menoresMedia"].push(element)
        };
    })
    
        return medias;
    }

    let arrayNumRandom = new Array();

    arrayNumRandom = generarNumeros(5, 10, 100);

    console.table(analizarNumeros(arrayNumRandom));

}