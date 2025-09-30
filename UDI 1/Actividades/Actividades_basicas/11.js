"use strict"
{
let number;
number = parseInt(prompt("Escribe un numero ", ""));

esPar(number);

    function esPar(number){
        if (number % 2 === 0){
            return alert(number + " es Par");
        }else return alert(number + " es Impar");
    }
}