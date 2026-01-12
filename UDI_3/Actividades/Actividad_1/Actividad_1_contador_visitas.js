"use strict"
{
// 1. Realiza una Web que almacene en una cookie el número de visitas que has realizado,
// incrementado el valor del número de visitas a cada visita realizada. La web debe tener una
// interfaz para visualizar el contenido de la cookie y para eliminar la cookie.

   document.cookie = "contador;max-age=604800";
   let myP =  document.createElement("p");
    myP.textContent =  `Contador Visitas : ${getCookie("contador")}`;
    document.body.appendChild(myP);
    let contador = getCookie("contador");
    contador++;
    console.log(contador);
    document.cookie = `contador=${contador}`;

    let btnDelete = document.createElement("button");
    btnDelete.textContent = "Eliminar Cookie";
    document.body.appendChild(btnDelete);


    btnDelete.addEventListener("click", () => {
        document.cookie = "contador=0";
        myP.textContent =  `Contador Visitas : ${getCookie("contador")}`;
    })



    function getCookie(cname) { 
        let name = cname + "=";
        let ca = document.cookie.split(';'); // convierte el string con todas las cookies que tenga la página (están separadas por ;) a [] con todas las cookies
        //console.log(ca); // [cookie1=valor1; cookie2=valor2; ...]
        for(let i = 0; i < ca.length; i++) { // tiene 3 elementos ['nombre=Federico', 'edad=34', 'altura=178']
            let c = ca[i];
            //console.log(c); // escribe el valor de la cookie
            while (c.charAt(0) == ' ') { // eliminar espacios que pueda haber por delante
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) { // comprueba si es la cookie buscada
                return c.substring(name.length, c.length); // devuelve el valor
            }
        }
        return "";
    }
}