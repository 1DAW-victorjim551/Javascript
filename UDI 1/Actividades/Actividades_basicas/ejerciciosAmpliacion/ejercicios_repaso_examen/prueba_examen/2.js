"use strict"
{
//     2️⃣ Control de usuarios con Map

// Simula una base de datos con un Map que contenga usuarios:
// clave = nombre, valor = contraseña.
// Crea una función login(usuario, contraseña) que compruebe si existe y si la contraseña es correcta.
// Lanza un Error si el usuario no existe o la contraseña es incorrecta, 
// y captura el error con try/catch mostrando un mensaje apropiado.


    function login(usuario, contraseña){

        if(mapaUsuarios.has(usuario, contraseña)){
          return "Bienvenido " +  usuario;
            
        }else {
            throw new Error("USUARIO O CONTRASEÑA NO COINCIDEN");
        }
        
    }


    let mapaUsuarios = new Map();
    mapaUsuarios.set("usuario", "contraseña");
    mapaUsuarios.set("antonio", "antonio123f");

    console.log(mapaUsuarios);

    try {
        console.log(login("antonio", "antonio123f"));
    } catch (error) {
        console.error(error.message);
    }

}