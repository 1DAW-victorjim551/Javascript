"use strict"
{
    let num1;
    let num2;
    
    do{
       num1 = prompt("Escribe el primer numero", "");
    }while(isNaN(num1)){
        num1 = parseFloat(num1);
    }

    do{
        num2 = prompt("Escribe el segundo numero", "");
    }while(isNaN(num2)){
        num2 = parseFloat(num2);
    }
    let operacion;
    let resultado;
    alert("Elige la operacion (+, -, %, *");
    operacion = prompt("Elige la operacion", "");
    switch(operacion){
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "%":
            resultado = num1 % num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
    }

    alert("El resultado de la operación es " + resultado);
}