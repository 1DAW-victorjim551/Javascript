"use strict"
{
    /**
     * 🔹 Ejemplo 2 — Vector de números con propiedades extra

“Dado un array de números, muestra la media, los que estén por encima y los que estén por debajo.”

👉 Aquí combina:

Ejercicio 27 (arrays)

Ejercicio 9 o 10 (operaciones numéricas)

Uso de condicionales + bucle

Pista de razonamiento:
Primero calculas la media, luego haces un segundo recorrido comparando cada elemento con esa media.
     */


    let arrayNumbers = new Array(3, 4, 5, 2, 6, 10, 542, 45, 5, 76, 34, 21, 4356, 4323, 245);

    let media = 0;
    let acumulador = 0;

    arrayNumbers.forEach(elem => acumulador+=elem);
    media = (acumulador / arrayNumbers.length).toFixed(2);

    for(let elem of arrayNumbers){
        if(elem > media){
            console.log("Es mayor de la media : " + media + " el elemento : " + elem);
        }else{
            console.log("Es menor de la media : " + media + " el elemento : " + elem);
        }
    }


}