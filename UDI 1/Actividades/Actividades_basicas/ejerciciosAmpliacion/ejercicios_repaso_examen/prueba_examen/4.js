"use strict"
{
//     4️⃣ Calculadora de fechas

// Pide una fecha de nacimiento y muestra:

// Edad actual.

// Si ya cumplió años este año o no.

// Cuántos días faltan para su próximo cumpleaños.
// Usa el objeto Date y Math.abs().

    let fechaActual = new Date();
    let fechaNac = new Date(2005, 5, 8);
    let edadPersona = new String();
    
    if ((fechaNac.getDate() >= fechaActual.getDate()) && fechaNac.getMonth() >= fechaActual.getMonth()){
         edadPersona = (fechaActual.getFullYear() - fechaNac.getFullYear()) + 1;
    }else{
         edadPersona = (fechaActual.getFullYear() - fechaNac.getFullYear())
    }

     // Próximo cumpleaños
    let proximoCumple = new Date(fechaActual.getFullYear(), fechaNac.getMonth(), fechaNac.getDate());

    if (fechaActual > proximoCumple) {
        proximoCumple.setFullYear(fechaActual.getFullYear() + 1);
    }

    // Días que faltan (en milisegundos → días)
    let diasFaltan = Math.ceil((proximoCumple - fechaActual) / (1000 * 60 * 60 * 24));


    console.log("Edad de la persona: " + edadPersona);
    console.log("Días que faltan para su próximo cumpleaños: " + diasFaltan);



}