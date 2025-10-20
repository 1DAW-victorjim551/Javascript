"use strict"
{
 function convertirNumero(numero, base) {
    if(base === 2) {
      return parseInt(numero, 2);
    } else if(base === 10) {
        return numero.toString(2);
    }
}

console.log(convertirNumero(100, 2));
console.log(convertirNumero(4, 10));


}