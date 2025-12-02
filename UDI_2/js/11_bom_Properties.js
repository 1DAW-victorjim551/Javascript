"use strict"
{
    window.addEventListener("resize", (e) => {
        console.clear();
        console.log("********** Evento Resize **********");
        console.log(window.innerWidth);// ancho de la parte interna visible
        console.log(window.innerHeight);// altura de la parte interna visible. Obtiene la altura 
        // del area de contenido del navegador incluyendo, si es interpretado, la barra de deslizado
        console.log(window.outerWidth);  // ancho del navegador
        console.log(window.outerHeight); // altura del navegador
        console.log(e);
      });

      // window.addEventListener("scroll", (e) => {
        //     console.clear();
        //     console.log("********** Evento Scroll ***********");
        //     console.log(window.scrollX); // número de pixels que el documento ha sido desplazado horizontalmente
        //     console.log(window.scrollY); // número de pixels que el documento ha sido desplazado verticalmente
        //     console.log(e);
        // });


        window.addEventListener("DOMContentLoaded", (e) => {    // cuando acaba de cargar el html (sin imágenes, css,...)
            console.log("********** Evento DOMContentLoaded **********");
            console.log(window.screenX);
            console.log(window.screenY);
            console.log(e);
        });
}