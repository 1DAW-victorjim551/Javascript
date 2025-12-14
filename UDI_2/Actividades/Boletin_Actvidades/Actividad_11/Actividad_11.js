"use strict"
{
    function isValidEmail(email){
        let emailRegex = /^[\w.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        let listaServidores=["terra.es","google.com","marca.es","yahoo.es"];
        let servidor = email.split("@")[1];
        if(email.match(emailRegex)){
            return listaServidores.includes(servidor);
        }else {return false}
    }


    let email = document.getElementById("email");
    let formulario = document.getElementById("formulario");
    let mensaje = document.getElementById("mensaje");
    
    formulario.addEventListener("submit", function(e){
        e.preventDefault();
        if(isValidEmail(email.value) === true){
            mensaje.textContent = "Correo válido! " + email.value;
        }else {
            mensaje.textContent = "Correo invalido, porfavor modifique su email";
        }
    })
}