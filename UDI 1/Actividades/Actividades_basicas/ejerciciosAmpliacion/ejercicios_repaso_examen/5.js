"use strict"
{
    /* 🔹 Ejemplo 5 — Fecha y edad

“Dada una fecha de nacimiento, indica cuántos años tiene y si ya ha cumplido años este año o no.”

👉 Es el típico “extra” del examen: no basta con restar años, tienes que comprobar el mes y día actuales (Date).*/

    let fecha = new Date(2005, 8, 5);

    let fechaActual = new Date();

    console.log(fechaActual.getFullYear());

    if((fecha.getMonth() >= fechaActual.getMonth()) && fecha.getDay() >= fechaActual.getDay()){
        console.log(((fechaActual.getFullYear() - fecha.getFullYear()) + 1) + " años");
    }else {
        console.log((fechaActual.getFullYear() - fecha.getFullYear()) + " años");
    }

}