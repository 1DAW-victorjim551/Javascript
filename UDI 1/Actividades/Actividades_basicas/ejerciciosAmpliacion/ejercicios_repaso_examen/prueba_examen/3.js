"use strict"
{
//     3️⃣ Analizador de texto

// Crea una función analizarTexto(texto) que devuelva un objeto con:

// Número de palabras.

// Número de vocales.

// Número de consonantes.

// Si hay números, indícalo con un booleano.
// Usa expresiones regulares y métodos de string (match, replace, etc.).

    function analizarTexto(texto){
        let contadorVocales = 0;
        let contadorConsonantes = 0;
        let areNumbers = false;

        let regExpVocales = /[aeiouáéíóúAEIOUÁÉÍÓÚ]/;
        let regExpNumeros = /[0-9]/;

        // OPCION 1 (NO TIENE EN CUENTA TODAS LAS POSIBILIDADES)
        // let acumulador = [];
        // acumulador = texto.split(" ");
        // contadorPalabras = acumulador.length;
        
        let palabras = texto.trim().split(/\s+/);
        let contadorPalabras = palabras.length;

        for(let i=0;i<texto.length;i++){
            let caracter = texto.charAt(i);
            if(caracter.match(regExpVocales)){
                contadorVocales++;
            }else {
                contadorConsonantes++;
            };

            if(caracter.match(regExpNumeros)){
                areNumbers = true;
            };
        }

       let objectAnalizerText = {
            numeroPalabras : contadorPalabras,
            numeroVocales : contadorVocales,
            numeroConsonantes : contadorConsonantes,
            hayNumeros : areNumbers
       };

       return objectAnalizerText;
    }

    console.table(analizarTexto("Hay flores en el campo 56 23"));
}