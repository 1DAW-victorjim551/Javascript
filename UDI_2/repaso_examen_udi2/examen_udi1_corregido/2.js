"use strict"
{
    /**
 * EJERCICIO 2
 * Esta función recibe el array original de usuarios y devuelve un nuevo array
 * con los DNIs que son válidos.
 *
 * Se utiliza:
 * - filter para quedarse solo con los usuarios cuyo DNI es correcto
 * - map para extraer únicamente el DNI de esos usuarios
 */
function getValidDNI(array) {

  // Array con las letras oficiales del DNI según el resto de dividir entre 23
  const letters = [
    'T','R','W','A','G','M','Y','F','P','D','X','B',
    'N','J','Z','S','Q','V','H','L','C','K','E'
  ];

  return array
    // filter comprueba si el DNI de cada usuario es válido
    .filter(user => {

      // Extraemos los 8 primeros caracteres y los convertimos a número
      const number = parseInt(user.DNI.substring(0, 8));

      // Extraemos la letra del DNI y la convertimos a mayúscula
      const letter = user.DNI.substring(8).toUpperCase();

      // Calculamos la letra correcta según el número del DNI
      const correctLetter = letters[number % 23];

      // Devolvemos true si la letra coincide (DNI válido)
      return correctLetter === letter;
    })

    // map devuelve un nuevo array solo con los DNIs válidos
    .map(user => user.DNI);
}

// Llamada a la función
console.log("EJERCICIO 2:", getValidDNI(users));

}