"use strict"
{
    let numUsuario = 0;

    numUsuario = parseInt(prompt("Dime un numero", ""));

    for (let i=1; i < numUsuario; i++){
        if (numUsuario % i == 0){
            alert(i + " Es divisor de " + numUsuario);
        }
    }
}