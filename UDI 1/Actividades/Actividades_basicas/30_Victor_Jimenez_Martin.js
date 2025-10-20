"use strict"
{
    function calcularEdad(fechaNacimiento) {
    let partes = fechaNacimiento.split("-");
    let diaNac = parseInt(partes[0]);
    let mesNac = parseInt(partes[1]);
    let anyoNac = parseInt(partes[2]);

    let fechaHoy = "16-10-2025";
    let partesHoy = fechaHoy.split("-");
    let diaHoy = parseInt(partesHoy[0]);
    let mesHoy = parseInt(partesHoy[1]);
    let anyoHoy = parseInt(partesHoy[2]);

    let edad = anyoHoy - anyoNac;
    
    return edad;
}

console.log(calcularEdad("05-08-2005")); 

}