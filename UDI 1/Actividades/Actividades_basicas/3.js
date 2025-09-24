"use strict"

{
    let hora= 0;
    let minuto= 0;
    let segundo=0;

    hora = prompt("Escribe una hora", "");
    minuto = prompt("Escribe un minuto", "");
    segundo = prompt("Escribe un segundo", "");

    segundo++;
    if (segundo>=60){
        segundo = 0;
        minuto++;
    }
        if (minuto >= 60){
            minuto = 0;
            hora++;
        }
            if (hora >= 24){
                hora = 0;
            }
        

    alert("La hora completa es " + hora + " : " + minuto + " : " + segundo);
}