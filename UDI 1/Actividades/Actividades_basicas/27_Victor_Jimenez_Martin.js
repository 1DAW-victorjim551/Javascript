"use strict"
{
    let vector = [3, 4, -6, 9, 8, 1, 4];

    console.log("La longitud del vector es de " + vector.length + " elementos");
    
    let pares = "";
    let impares = "";
    
    for (let i=0;i<vector.length;i++){
        if (vector[i] % 2 == 0){
            pares += vector[i] + " ";
        }else {
            impares += vector[i] + " ";
        }
    }

    console.log(vector);
    console.log(pares);
    console.log(impares);

    let sumaNeg = 0;
    for (let i=0;i<vector.length;i++){
        if (vector[i] < 0){
            sumaNeg += vector[i];
        }
    }

    console.log(sumaNeg);

    let productPares = 0;

    for (let i=0;i<vector.length;i++){
        if (vector[i] % 2 == 0){
            productPares *= vector[i];
        }
    }
    
   for (let i = 0; i < vector.length; i++) {
    let num = vector[i];
    let esPrimo = true;

    if (num < 2) {
        esPrimo = false;
    } else {
        for (let j = 2; j <= Math.sqrt(num); j++) {
            if (num % j === 0) {
                esPrimo = false;
            }
        }
    }

    if (esPrimo) {
        console.log(num + " es primo");
    } else {
        console.log(num + " no es primo");
    }
}
    
    let media = 0;

    for (let i=0;i<vector.length;i++){
        media += vector[i];
    }

   console.log((media / vector.length));

     vector.sort( (a,b)=> a-b);
     console.log(vector);
      vector.sort( (a,b)=> b-a);
      console.log(vector);
    

      function isFounded(num, vector){
        let isFounded = false;
        for (let i=0;i<vector.length;i++){
            if (vector[i] === num){
                isFounded = true;
            }
        }

        return isFounded;
      }
   
      let esEncontrado;
     console.log(esEncontrado = isFounded(4, vector)); 

    
    
}