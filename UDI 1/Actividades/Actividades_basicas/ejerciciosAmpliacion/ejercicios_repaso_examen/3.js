"use strict" 
{
    /**
     * 🔹 Ejemplo 3 — Palabras y patrones

“Dada una cadena de texto, elimina las palabras que empiecen por vocal y muestra las que queden al revés.”

👉 Combina:

Ejercicio 19 (split)

Ejercicio 21 (invertir texto)

Ejercicio 24 (filtrar con una condición)

Pista de razonamiento:
split() → filter() → reverse() → join(" ").
     */

    let regExp= /^[aeiouáéíóúAEIOUÁÉÍÓÚ]/;

    let cadena = "Óscar observa el árbol enorme y corre hacia la calle";

  let resultado =  cadena.split(" ").filter(palabra => !regExp.test(palabra) ).reverse().join(" ");

    console.log(resultado);



}