"use strict"
{
//     9️⃣ Detector de contraseñas débiles

// Crea una función esSegura(pass) que use una expresión regular para comprobar:

// Mínimo 8 caracteres.

// Al menos 1 mayúscula, 1 minúscula, 1 número y 1 símbolo.
// Lanza un error con throw new Error("Contraseña insegura") si no cumple, y captura la excepción.

    function esSegura(pass){
        let regExpPasswd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

        if(regExpPasswd.test(pass)){
            return true;
        }else {
            throw new Error("Contraseña insegura");
        }
    }

    try {
        console.log(esSegura("Verpelis123%"));
    } catch (error) {
        console.error(error.message);
    }   

}