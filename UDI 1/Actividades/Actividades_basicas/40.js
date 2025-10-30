"use strict"
{
  fechaUser = prompt("Escribe una fecha de nacimiento", "d/m/Y");
  let date = new Date(date);
    function  mostrarEdad(date){

        year = 2025 - date.getFullYear(); 
        return year;
    }

    console.log(mostrarEdad(date));
}