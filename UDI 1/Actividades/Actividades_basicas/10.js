"use strict"

{
    let numUsuario;
    numUsuario = (prompt("Introduce un numero para comprobar si es primo", ""));
 function esPrimo(numUsuario){
    let esPrimo = false;
    for (let i=2;i<numUsuario;i++){
        if (numUsuario % i ===0){
            return esPrimo;
        }else{
            esPrimo = true;
            return esPrimo;
        }
    }
 }   
 alert(esPrimo(numUsuario));

}