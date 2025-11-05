"use strict"
{
//     Ejercicio 2. Texto con condiciones

// Enunciado:
// Dada una cadena de texto, muestra:

// Cuántas palabras empiezan por vocal.

// Cuántas por consonante.

// Cuántas terminan en vocal.

// Y finalmente, la cadena con las palabras ordenadas al revés (sin usar reverse() directamente sobre el texto).

// 💡 Pista: Usa .split(" "), .filter() y .join(" ").
// Usa expresiones regulares (/^[aeiou]/i).


let texto = "Pablito clavo un clavito rodeado de higos";
let contadorEmpezarVocal = 0;
let contadorAcabarVocal = 0;
let contadorEmpezarConsonante = 0;

let regExpEmpezarVocal = /^[aeiouáéíóúAEIOUÁÉÍÓÚ]/;
let regExpAcabarVocal = /[aeiouáéíóúAEIOUÁÉÍÓÚ]$/;
let regExpConsonante = /^[^aeiouáéíóúAEIOUÁÉÍÓÚ]/;

        let palabras = texto.trim().split(/\s+/);
    
        for (let palabra of palabras){
            if(regExpEmpezarVocal.test(palabra)){
                contadorEmpezarVocal++;
            }else if(regExpAcabarVocal.test(palabra)){
                contadorAcabarVocal++;
            }else if(regExpConsonante.test(palabra)){
                contadorEmpezarConsonante++;
            }
        }

        console.log("Empiezan por vocal : " + contadorEmpezarVocal);
        console.log("Acaban por vocal : " + contadorAcabarVocal);
        console.log("Empiezan por consonante : " + contadorEmpezarConsonante);


}