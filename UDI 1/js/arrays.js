"use strict"
{
    let myArray = new Array ();
    myArray[0]= 10;
    myArray[1]= 20;
    myArray[2]= "Martinez";
    console.log(myArray);
    myArray[0]= 10;
    
    myArray2[0]= 10;
    myArray2[1]= "30";

    let myArray3 = ["gamusino", "up", "globo"];
   console.log(`El array tiene ${myArray3.length} elementos`);
    
   //CLONADO DE UN ARRAY
   let myArray4 = new Array();
   myArray4 = [...myArray,...myArray3];
   console.log(myArray4);

   //Arrays bidimensionales
   // Forma 1:
   // arrayBi [[]];
   let myArrayBi1 = new Array();
   myArrayBi1[0] = [1,2,3,4,5];
   myArrayBi1[1] = [2,3,4,5,6];
   myArrayBi1[2] = [7,8,9,6,4];
   myArrayBi1[2][4] = "A";
   console.log(myArrayBi1);
    // Forma 2 :
    let numFilas = 2;
    let numColumnas = 3;
    let myArrayBi2 = new Array(numFilas);

    for(let i=0;i<numFilas; i++){
        myArrayBi2[i] = new Array (numColumnas);
    }

    console.table(myArrayBi2);
    for (let i=0;i<numFilas;i++){
        for (let j=0;j<numColumnas;j++){
            myArrayBi2[i][j] = 0;
        }
    }

    console.log(myArrayBi2);


    // Forma 3 :
    let myArrayBi3 = Array.from(Array(2), () => new Array(3));
    for (let i=0;i<numFilas;i++){
        for (let j=0;j<numColumnas;j++){
            myArrayBi3[i][j] = 0;
        }
    }

    console.table(myArrayBi3);
    
    // Forma 4 :
    let myArrayBi4 = new Array(5).fill().map( () => new Array(4));
    
    // OPERACIONES CON ARRAYS
    
    //join 
    console.log("|n|tJOIN: ");
    const elements = ["fire", "air", "water"];
    let str = elements.join("-");
    console.log(str);

    //split
    console.log("\n\tSPLIT: ");
    const strNumbers = "1,2,3,4,5,6,7,8,9,10";
    const myArrayNumbers = strNumbers.split(",");
    
    // push
    console.log("\n\tPUSH: ");
    elements.push ("earth");
    console.log(elements);

    // pop
    console.log("\n\tPOP: ");
     let myelement = elements.pop();
     console.log(myelement);
     console.log(elements);

     // Shift
     console.log("\n\tSHIFT: ");
     let firstElement = elements.shift();
     console.log(firstElement);
     console.log(elements);

     // reverse
     elements.reverse ();
     const reverseElements = [...elements.reverse ()];
     console.log(reverseElements);
     console.log(elements);

     // sort --> modifica el array original
     console.log("\n\tSORT:");
     let myNumbers =  [100, 5, 15, 1, 99];
     myNumbers.sort();
     console.log(myNumbers);

     myNumbers.sort (function (firts, second){
        if (firts > second){
            return 1;
        }else {
            return -1;
        }
     });

     console.log(myNumbers);
     myArray.sort( (a,b)=> a>b?1:-1);
      myArray.sort( (a,b)=> a-b); // >

      // [] ==> OPCIONAL
      // slice (inicio, [final]) ==> desde inicio hasta final -1

      console.log("\n\SLICE:");
      let nombres = ["Rita", "Manuel", "Miguel", "Ana", "Vanesa"];

      let nombresMasculinos = nombres.slices(1,3);
      console.log(nombresMasculinos);
      // Te coge los ultimos dos
      console.log(nombres.slice(-2));

      // filter: crea un nuevo array con los elementos filtrados
      console.log("\n\FILTER:");
      let users = [
        {name: "John", age: 34},
        {name: "Amy", age: 20},
        {name: "Thomas", age: 10}
      ];

      let filteredUsers = users.filter (function(user){
        return user.age > 15;
      });

      console.log(filteredUsers);

      let filteredUsers2 = users.filter((user) => user.age > 15);
      console.log(filteredUsers2);

      console.log("\n\FIND:");
      // FIND: devuelve el 1º elemento del array que cumple la condición

      let user = users.find (function (user){
            return user.name.match(/A[a-z]*/)
      });

      console.log(user);

      let user2 = users.find ((user) => user.name.match(/A[a-z])*/));
      console.log(user2);

      //Probar tamién con el flag g en la expresión regular

      //SOME ==> true/false. Comprueba si al menos un elemento cumple la condición
      
      console.log("\n\SOME:");

      let hasUser = users.some(function (user){
        return user.age === 10;
      });

      console.log(hasUser);

      let hasUser2 = users.some ((user) => user.age===10);
      hasUser?console.log("PO ZI"):console.log("PO NO");
      console.log(hasUser2);
      hasUser2?console.log("PO ZI"):console.log("PO NO");

      //findIndex ==> devuelve el índice del primer elemento que cumpla la condición
      console.log("\n\FINDINDEX:");
      let index = users.findIndex(function (user){
        return user.age === 25;
      });

      console.log(index);

      let index2 = users.findIndex ((user) => user.age === 25);

      //CONCAT ==> concatena arrays, copiando por valor no por referencia
      console.log("\n\FINDINDEX:");
      let array1 = ["a", "b", "c"];
      let array2 = ["d", "f", "g"];

      let array3 = array1.concat(array2);
      console.log(array3);

      // REDUCE (acumulador, valorActual)
      console.log("\n\REDUCE:");

      let numbers = [1, 2, 3, 4, 5];

      let sumaTotal = numbers.reduce (function(acumulador, valorActual){
        acumulador += valorActual;
        return acumulador;
      }, 0); // EL 0 ES EL VALOR INICIAL DE LA VARIABLE ACUMULADOR

      console.log(sumaTotal);

      let sumaTotal2 = numbers.reduce((acumulador, valorActual) => acumulador+=valorActual);
      console.log(sumaTotal2);

      const miArrayNumeros = [[0,1], [2, 3], [4, 5]] // ==> 0,1,2,3,4,5

     let arrayConcat = miArrayNumeros.reduce((acc, valorActual) => acc.concat(valorActual));
     console.log(arrayConcat);

     // includes () ==> true/false

     const motos = ["yamaha", "ducati", "kawasaki"];
     console,log(motos.includes("vepas")); //FALSE
     console,log(motos.includes("ducati")); //TRUE
     
     // ITERAR SOBRE UN ARRAY

     /**
      * ITERAR SOBRE ARRAY:
      * - for
      * - forEach
      * - map
      * - for of
      */

     // FOR

     let vector = [1, 2, "A", "F", -1, 2.4];
     for (let i=0;i<vector.length;i++){
      console.log(vector[i]);
     };
     
     // FOR EACH

     vector.forEach (function(elem){
      console.log(elem);
     });

     vector.forEach(function(elem, index){
      console.log("En la posición " + index + " nos encontramos el valor" + elem);
     });

     vector.forEach((elem) => console.log(elem));
     vector.forEach((elem, index) => console.log(elem + " se encuentra en la posición " + index));

     // MAP

     let vector2 = vector.map(function(elem){
      console.log(elem);
      return elem;
         }); 
     console.log(vector2);

     let vector3 = vector.map(elem => isNaN(elem) ? elem : elem * 2);
     console.log(vector3);


    //  let users = [
    //   {name: "John", age: 34},
    //   {name: "Amy", age: 20},
    //   {name: "Thomas", age: 10}
    // ];


   let arrayAges =  users.map(user => user.age);
   let sumaEdades = arrayAges.reduce((acumulador, valorActual) => acumulador+=valorActual, 0);

   console.log(arrayAges);
   console.log(sumaEdades);


  // FOR OF

  // SOLO PARA ARRAYS
  for (let user of users){
    console.log(user);
  }

  let fullUsers = users.map (user => {
    return {
      ...user,
      city: "Jalisco"
    };
  });
  console.log(fullUsers);

  let fullUsers2= users.map  (user => {
    return {
      ...user,
      age: user.age*2
    }
  });

  console.log(fullUsers2);
}