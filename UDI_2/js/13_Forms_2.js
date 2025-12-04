"use strict";

{
    let formulario = document.querySelector("#idForm");
    let botonEnviar = document.querySelector("#idBtnEnviar");

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault(); // Evito que se envíe el formulario antes de validarlo

        let contraseña = document.querySelector("#idPasswd");
        let cajaTexto = document.querySelector("#idText1");
        let email = document.querySelector("#idEmail1");

        // Validaciones
        // TO DO:  VALIDAR QUE LOS 3 CAMPOS CUMPLEN LAS REESTRICCIONES Y ENVIAR
        if (!validarTexto(cajaTexto.value) || cajaTexto.value.length < 4 || !validarEmail(email.value)) {
            console.log("No se puede enviar el formulario");

            if (!validarTexto(cajaTexto.value)) {
                mostrarMensaje("El texto tiene que comenzar por la letra 'a'", cajaTexto);
            }

            if (cajaTexto.value.length < 4) {
                mostrarMensaje("El texto tiene que tener al menos 4 caracteres", cajaTexto);
            }

            if (!validarEmail(email.value)) {
                mostrarMensaje("El email debe tener un formato correcto", email);
            }
        } else {
            console.log("Se envía el formulario de forma automática");
            alert("Se enviará el formulario en cuanto hagas click!\nYa no hay vuelta atrás");
            formulario.submit();
        }
    });

    function validarTexto(texto) {
        let expReg = /^[a]/i; // Debe empezar por 'a' o 'A'
        return expReg.test(texto);
    }

    function validarEmail(supuestoEmail) {
        let expReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
        return expReg.test(supuestoEmail);
    }

    function mostrarMensaje(mensaje, elemento) {
        console.log(elemento);
        const alerta = document.createElement("p");
        alerta.textContent = mensaje;
        alerta.setAttribute("class", "error");
        elemento.insertAdjacentElement("afterend", alerta);

        setTimeout(() => {
            alerta.remove();
        }, 5000);
    }
}
