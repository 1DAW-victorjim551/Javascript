"use strict"
{
    let acumulador = 0;
    let contador = 0;
    let producto = 1;
    let suma = 0;
    

    while (acumulador >= 0){
        acumulador =  parseInt(prompt("Dime un numero no negativo", ""));
        if (acumulador < 0){
            alert("Numero no valido");
        }else{
        suma += acumulador;
        producto *= acumulador;
        contador++;
        }
        
    }

    let media = parseFloat(suma / contador);
    alert("La suma es " + suma + " || El producto es " + producto + " || La media es " + media);

    
}