"use strict"
{
     /**
    ** Usando la tecnología de sessionStorage, almacena en una variable llamada username el nombre del usuario y, al cargar la página, verificar:
     * - si la variable no existe:
     *    - Indicarle al usuario que no está identificado.
     *    - Mostrarle un prompt para que introduzca su nombre de usuario.
     *    - Controlar si deja el prompt en blanco y hace click en cancelar.
     *    - guardar el valor de la variable username.
     * - si la variable ya existe:
     *    - Saludar al usuario escribiendo: ¡Bienvenido de nuevo, username!
     * Añadir en la parte superior un botón para eliminar la variable username del sessionStorage
     * 
     * NOTA: excepto el prompt para pedirle los datos al usuario, todo debe escribirse en el DOM
     *  usando los elementos HTML que creas necesarios en Javascript
     * NOTA2: probar el funcionamiento recargando la página tras haber introducido un username y tras borrarlo tanto con el botón como desde el navegador.
     *
    */


     let miH2 = document.createElement("h2");
     let username = "";

    if(sessionStorage.getItem("nombre")==="" || sessionStorage.getItem("nombre") === null){
        username = sessionStorage.setItem("nombre", prompt("Introduce un nombre", ""));
    }else{
        username = sessionStorage.getItem("nombre");
        miH2.textContent = "Bienvenido " + username;
        console.log(username)
        document.body.appendChild(miH2);
    }
}