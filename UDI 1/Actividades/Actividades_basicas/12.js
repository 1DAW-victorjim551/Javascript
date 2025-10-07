"use strict"
{
    
   
    let num1;
    let num2;
    let resultado1;
    let resultado2;

    num1 = parseFloat(prompt("Pasar de Grados a Farenheit", ""));
    resultado1 = num1 + 32;
    alert(num1 + " °C son " + resultado1 + " °F");

    num2 = parseFloat(prompt("Pasar de Farenheit a Grados", ""));
    resultado2 =  num2 - 32;
    alert(num2 + " °F son " + resultado2 + " °C");
}