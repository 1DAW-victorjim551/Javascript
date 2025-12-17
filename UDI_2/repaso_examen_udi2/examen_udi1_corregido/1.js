"use strict"
{

/**
 * EJERCICIO 1
 * Esta función recibe un array de objetos usuario y devuelve un nuevo array
 * con los identificadores generados para cada usuario.
 *
 * El identificador se compone de:
 * - Primera letra del nombre
 * - Tres primeras letras del primer apellido
 * - Tres primeras letras del segundo apellido
 * - Tres últimos caracteres del DNI
 *
 * Todo debe estar en minúsculas y sin tildes.
 * Se utiliza la función map para transformar cada objeto del array original.
 */
function getUserIdentifiers(array) {

  // map recorre el array original y devuelve un nuevo array con el resultado
  return array.map(user => {

    // Normalizamos el nombre para eliminar tildes:
    // normalize("NFD") separa letras y acentos
    // replace elimina los caracteres de acento
    // toLowerCase convierte todo a minúsculas
    const normalizedName = user.nombre
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

    // Separamos nombre y apellidos usando el espacio como separador
    const parts = normalizedName.split(" ");

    // Obtenemos la primera letra del nombre
    const nameInitial = parts[0][0];

    // Obtenemos las tres primeras letras del primer apellido
    const firstSurname = parts[1].substring(0, 3);

    // Obtenemos las tres primeras letras del segundo apellido
    const secondSurname = parts[2].substring(0, 3);

    // Obtenemos los tres últimos caracteres del DNI
    const lastDniDigits = user.DNI.substring(user.DNI.length - 3);

    // Concatenamos todas las partes para formar el identificador
    return nameInitial + firstSurname + secondSurname + lastDniDigits;
  });
}

// Llamada a la función
console.log("EJERCICIO 1:", getUserIdentifiers(users));
}