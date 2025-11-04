"use strict"
{
    let a = new String("555872647583");

   let arrayNumbers = new Array();

   arrayNumbers = a.split("");
    let nuevoarray = new Array();
   for (let i=0;i<arrayNumbers.length;i++){
    nuevoarray[i] =  parseInt(arrayNumbers[i]);
   }

   //OPCIÓN 2
//    let nuevoarray = arrayNumbers.map(Number);


   console.table(nuevoarray);

   let acumulador = 0;
   let media = 0;
   nuevoarray.forEach(elem => (acumulador+=elem));
   media = acumulador / nuevoarray.length;
   console.log("La media es de : " + media);

}