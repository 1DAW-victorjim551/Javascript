"use strict"
{
    // Set 
    let mySet1 = new Set();
    mySet1.add(1);
    mySet1.add(2);
    mySet1.add(2);
    mySet1.add("a");
    mySet1.add({});
    mySet1.add({});
    mySet1.add("hola");
    mySet1.add("Hola");

    for (let elem of mySet1){
        console.log(elem);
    }
    mySet1.forEach(elem => console.log(elem));
    // NO SE PUEDE MAPEAR
    console.log(mySet1);

    // Transformar un Set en un Array
    let myArray1 = Array.from(mySet1);
    console.log(myArray1);

    // Crear un set a partir de un Array

    let myArray2 = new Array (1, 2, 3, 4 , 5, 6, 7, 8, 9, 9 ,9 ,9, 9, 6, 7);

    let mySet2 = new Set(myArray2);
    console.log(mySet2);

  console.log(mySet2.has(10)); // FALSE
  console.log(mySet2.has(6)); // TRUE
  mySet2.delete(1); //elimina concretamente el 1 (no lo hace por posición)
  mySet2.clear; // ELIMINA TODOS LOS ELEMENTOS  DEL SET 


  /**
   * MAP: colección de datos identificados por una clave
   */

  let map = new Map ();
  map.set("name", "Luis");
  map.set("lastname", "Martinez");
  map.set("age", 55);
  console.log(map);
  console.log(map.size);
  console.log(map.has("email")); //LO HACE POR CLAVE  
  console.log(map.has("name"));
  console.log(map.get("name"));
  map.set("name", "Luis Enrique");
  console.log(map);

  map.set({}, 10);
  map.set(false, "muy falso");
  console.log(map);

  // RECORRER UN MAP
  map.forEach(elem => console.log(elem));
    map.forEach (function (valor, clave){
        console.log(valor + " :" + clave);
    })

    for(let [clave, valor ] of map){
        console.log(clave + ": " + valor)
    }

    let map2 = new Map([
        ["name", "Donald"],
        ["lastname", "Trump"],
        ["age", 79]
    ]);

    console.log(map2);
   let map2Keys = [...map2.keys()];
   let map2Values = [...map2.values()];
   console.log(map2Keys + " : " + map2Values);
   
}