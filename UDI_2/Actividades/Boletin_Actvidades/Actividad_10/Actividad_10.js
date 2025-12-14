"use strict"
{
    function validateDNI(dni){
        let regexDNI = /^\d{8}[A-Za-z]$/;

        if(dni.match(regexDNI)){
            return true;
        }else {return false}
    }

    let dni = document.getElementById("dni");
    let mensaje = document.getElementById("mensaje");
    let formulario = document.getElementById("formulario");

    dni.addEventListener("blur", function(){
        if (validateDNI(dni.value) === false) {
            mensaje.textContent = "Formato del DNI incorrecto";
        }else {mensaje.textContent = "";}
    });

    formulario.addEventListener("submit", function(){
        if(validateDNI(dni.value)===false){
            mensaje.textContent = "Formato del DNI incorrecto";
        }else {mensaje.textContent = "";}
    })
}