"use strict"
{
    function calcularFactorial(numero){
        let resultado = 0;
        for (let i=numero - 1;i>0;i--){
            resultado = numero*=i;
        }

        return console.log(resultado);
    }

    calcularFactorial(5);
}