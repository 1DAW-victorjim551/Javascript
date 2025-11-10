"use strict";
{
  let fechaUser = prompt("Escribe una fecha de nacimiento", "dd/mm/yyyy");

  // Separar la fecha en partes
  let partes = fechaUser.split("/");
  let dia = parseInt(partes[0], 10);
  let mes = parseInt(partes[1], 10) - 1;
  let anio = parseInt(partes[2], 10);

  let date = new Date(anio, mes, dia);

  function mostrarEdad(fecha) {
    let hoy = new Date();
    let edad = hoy.getFullYear() - fecha.getFullYear();

    if (
      hoy.getMonth() < fecha.getMonth() ||
      (hoy.getMonth() === fecha.getMonth() && hoy.getDate() < fecha.getDate())
    ) {
      edad--;
    }

    return edad;
  }

  console.log("Tu edad es : ", mostrarEdad(date));
}
