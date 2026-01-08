"use strict"

{

    let h1 = document.createElement("h1");
    h1.textContent = "Prueba Carmelo";
    document.body.appendChild(h1);

    let tabla = document.createElement("table");
    document.body.appendChild(tabla);

    let contador = 1;

    for (let index = 0; index < 20; index++) {
        let fila = document.createElement("tr");
        for (let j = 0; j < 20; j++) {
            let celda = document.createElement("td");
            celda.textContent = contador;
            fila.appendChild(celda);
            contador++;
        }
        tabla.appendChild(fila);
    }



}