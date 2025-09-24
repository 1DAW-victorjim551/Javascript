"use strict"
{
    let num1;
    let num2;
    
    
    do {
        num1 = prompt("Añade el primer número", "");
    } while (isNaN(num1)  || num1 <=0);

     do {
        num2 = prompt("Añade el segundo número", "");
    } while (isNaN(num2)  || num2 <=0);
    

    if (num1 > num2){
        console.log(num1 + "  es mayor")
    }else if (num2 > num1){
        console.log(num2 + " es mayor")
    }else {1
        console.log("Son iguales");
    }
}