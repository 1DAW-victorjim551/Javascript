"use strict"
{
    /**
 * EJERCICIO 3
 * Esta función recibe el array original y devuelve un nuevo array
 * con los usuarios ordenados por edad de mayor a menor.
 *
 * Se utiliza la función sort.
 */
function sortByAgeDesc(array) {

  // Usamos spread operator para no modificar el array original
  const copyArray = [...array];

  // sort compara dos elementos y los ordena por edad de forma descendente
  copyArray.sort((a, b) => b.edad - a.edad);

  return copyArray;
}

// Llamada a la función
console.log("EJERCICIO 3:", sortByAgeDesc(users));

}