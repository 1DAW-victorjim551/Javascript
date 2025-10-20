"use strict"
{
    function esCapicua(numero) {
    let miString = numero.toString();
    let reverso = miString.split("").reverse().join("");
    return miString === reverso;
}

console.log(esCapicua(2002)); // true
console.log(esCapicua(1234)); // false

}