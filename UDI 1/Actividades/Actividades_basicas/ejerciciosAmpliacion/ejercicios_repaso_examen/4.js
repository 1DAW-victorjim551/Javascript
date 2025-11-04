"use strict"
{
    /**
     * 🔹 Ejemplo 4 — Números capicúas y primos

“Dado un número, indica si es capicúa y además si es primo.”

👉 Combina ejercicios 10 + 25.
Te obliga a reutilizar funciones anteriores y aplicar lógica doble.
     */

    function esCapicua(number){
        let isValid = false;
        let reverse = number.toString().split("").reverse().join("");
        if (number == reverse){
            return isValid = true;
        }else return isValid;
    }

    function esPrimo(number){
        let isValid = false;
        if(number <=1){
            return isValid;
            
        }else {
            for(let i=1;i<number;i++){
              if(number % i === 0){
                return isValid;
              }else {
                return isValid = true;
              }
            }
        }
    }

    let number = 4;

    if ((esCapicua(number)) && (esPrimo(number))){
        console.log(number + " Es Capicuo y Primo!");
    }else {
        console.log(number + " no es Capicuo ni Primo!");
    }

}