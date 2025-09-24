"use strict"
{
    let numUsuario = 0;
    numUsuario = parseInt(prompt("Dime un numero", ""));
    let result = 0;
    
    for (let i=0;i<=10;i++){
        result = numUsuario * i;
        alert(numUsuario + " * " + i + " = " + result);
    }
}