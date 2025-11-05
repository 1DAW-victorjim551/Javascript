"use strict"
{
// 6️⃣ Frases limpias y reversibles

// Crea una función limpiarYRevertir(texto) que:

// Elimine las palabras que empiecen por vocal (usa regex).

// Devuelva la frase con las palabras restantes en orden inverso.
// Ejemplo:
// Entrada → "Oscar observa el árbol enorme y corre"
// Salida → "corre y"

    function limpiarYRevertir(texto){
        let regExpVocales = /^[aeiouáéíóúAEIOUÁÉÍÓÚ]/;
        
        let devolverTexto = texto.split(" ").filter(palabra => !regExpVocales.test(palabra)).reverse().join(" ");

        return devolverTexto;
    }

    console.log(limpiarYRevertir("Oscar observa el árbol enorme y corre"));
}