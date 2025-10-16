"use strict"
{
    function miFuncion(numero, base) {
  if (base === 2) {
    // Convertir de binario (cadena o número) a decimal
    // Aseguramos que sea string para usar parseInt bien
    return parseInt(numero.toString(), 2);
  } else if (base === 10) {
    // Convertir de decimal a binario
    return numero.toString(2);
  } else {
    return "Base no soportada, usa 2 o 10";
  }
}

// Ejemplos:
console.log(miFuncion(100, 2));
console.log(miFuncion(4, 10));

}