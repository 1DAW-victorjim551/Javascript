"use strict"
{
    try {
        let a=5, b=0;
        let c=a/b;
        console.log("El resultado es " + c);
        
        const v=[1, 2, 3];
        v = [1, 2, 3, 4];
    } catch (error) {
        console.log(error);
    }finally{
        console.log("HOLA");
    }

    try {
        let numero;
        numero = prompt ("Introduce a number:", "solo numeros");

        if (isNaN(numero)){
            throw new Error ("No has introducido un numero");
        }else {
            numero++;
            console.log(numero);
        }
        
    } catch (error) {
        
    }
}