// 38. Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos,
// el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma
// descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }

"use strict"
{
    let arrayNumbers = [2, 5, 8, 9, 6, 5, 4 , 3];
    function objetosAscYDesc(arrayNumbers){
       let Arrayasc =  [...arrayNumbers].sort((a, b) => b-a);
       let Arraydesc = [...arrayNumbers].sort((a, b) => a-b);

       let objetoAscYDesc = {
        asc : Arrayasc,
        desc : Arraydesc
       }

       return objetoAscYDesc;
    }

    console.log(objetosAscYDesc(arrayNumbers));
}