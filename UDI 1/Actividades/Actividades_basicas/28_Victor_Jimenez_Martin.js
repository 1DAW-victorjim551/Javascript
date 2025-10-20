let cadenas = ["victor", "christian", "guty", "jose antonio", "andrea", "amelie"];

let masCorta = cadenas.reduce((a, b) => a.length <= b.length ? a : b);
let masLarga = cadenas.reduce((a, b) => a.length >= b.length ? a : b);
let masAs = cadenas.reduce((a, b) => (b.split("a").length - 1) > (a.split("a").length - 1) ? b : a);
let conB = cadenas.filter(c => c.includes("b"));

console.log("Cadena más corta:", masCorta);
console.log("Cadena más larga:", masLarga);
console.log("Cadena con más 'a':", masAs);
console.log("Cantidad de cadenas con 'b':", conB.length, "Cadenas:", conB);
