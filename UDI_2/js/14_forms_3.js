"use strict"
{
    let formulario = document.querySelector("#idFormulario");
    const datos = new FormData(formulario);
   console.log(datos.get("nombre"));
   console.log(datos.get("edad"));
   console.log(datos.get("email"));

   formulario.addEventListener("submit", function(e){
        e.preventDefault();
        let datos2 = new FormData(formulario);
        datos2.append("dni", "1111454G");
        datos2.append("adress", "Calle Betis");
        for(let campos of datos2.values){
            console.log(campos);
        }

        for(let campos of datos2.entries){
            console.log(campos);
        }
        formulario.submit();
   });
}