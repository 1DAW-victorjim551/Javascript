"use strict"
{
    /**
 * Comprueba si un número es primo
 * Un número primo solo es divisible entre 1 y él mismo
 */
function isPrime(num) {

  // Los números menores que 2 no son primos
  if (num < 2) return false;

  // Comprobamos si el número tiene algún divisor
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}



/**
 * EJERCICIO 4
 * Esta función devuelve un array con las edades que:
 * - Sean el doble de un número primo
 * - Estén ordenadas de menor a mayor
 *
 * Se utilizan las funciones filter, map y sort
 */
function getDoublePrimeAges(array) {

  return array
    // filter comprueba si la mitad de la edad es un número primo
    .filter(user => isPrime(user.edad / 2))

    // map devuelve únicamente la edad del usuario
    .map(user => user.edad)

    // sort ordena las edades de menor a mayor
    .sort((a, b) => a - b);
}

// Llamada a la función
console.log("EJERCICIO 4:", getDoublePrimeAges(users));

}