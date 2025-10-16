"use strict"
{
    const cadenas = [
  "banana",
  "manzana",
  "pera",
  "arándano",
  "cereza",
  "uva",
  "babosa",
  "melón"
];

let cadenaMasCorta = cadenas[0];
for (let cadena of cadenas) {
  if (cadena.length < cadenaMasCorta.length) {
    cadenaMasCorta = cadena;
  }
}


let cadenaMasLarga = cadenas[0];
for (let cadena of cadenas) {
  if (cadena.length > cadenaMasLarga.length) {
    cadenaMasLarga = cadena;
  }
}

let cadenaMasAs = cadenas[0];
let maxAs = 0;

for (let cadena of cadenas) {
  let countAs = 0;
  for (let letra of cadena) {
    if (letra.toLowerCase() === 'a') {
      countAs++;
    }
  }
  if (countAs > maxAs) {
    maxAs = countAs;
    cadenaMasAs = cadena;
  }
}

let cadenasConB = [];
for (let cadena of cadenas) {
  if (cadena.toLowerCase().includes('b')) {
    cadenasConB.push(cadena);
  }
}

console.log("a. Cadena más corta:", cadenaMasCorta);
console.log("b. Cadena más larga:", cadenaMasLarga);
console.log("c. Cadena con más letras 'a':", cadenaMasAs, `(Número de 'a': ${maxAs})`);
console.log(`d. Número de cadenas con 'b': ${cadenasConB.length}`);
console.log("   Cadenas con 'b':", cadenasConB);

}