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

}