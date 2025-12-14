"use strict";
{
    const formulario = document.getElementById("formulario");
    const provincia = document.getElementById("provincia");
    const ciudad = document.getElementById("ciudad");
    const mensaje = document.getElementById("mensaje");

    provincia.addEventListener("change", function () {
        ciudad.innerHTML = '<option value="">Select no seleccionado</option>';

        if (provincia.value === "Alicante") {
            ciudad.innerHTML += 
                `<option value="Alicante Capital">Alicante Capital</option>
                <option value="Elche">Elche</option>
                <option value="Orihuela">Orihuela</option>`
            ;
        }

        if (provincia.value === "Castellon") {
            ciudad.innerHTML += 
                `<option value="Castellón Capital">Castellón Capital</option>
                <option value="Oropesa">Oropesa</option>
                <option value="Vinaroz">Vinaroz</option>`
            ;
        }

        if (provincia.value === "Valencia") {
            ciudad.innerHTML += 
                `<option value="Valencia Capital">Valencia Capital</option>
                <option value="Torrent">Torrent</option>
                <option value="Mislata" selected>Mislata</option>`
            ;
        }
    });

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        if (provincia.value === "" || ciudad.value === "") {
            mensaje.textContent = "Debes seleccionar provincia y ciudad";
            mensaje.style.color = "red";
        } else {
            mensaje.textContent = "Formulario enviado correctamente";
            mensaje.style.color = "green";
        }
    });
}