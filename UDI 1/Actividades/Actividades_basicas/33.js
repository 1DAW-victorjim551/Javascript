"use strict"
{
    function esNombreValido(cadena){
        const abecedarioRegx = /^[a-zA-Z]$/s;
        let esValido = false;

       if(cadena.match(abecedarioRegx)){
            esValido = true;
       };

        //   for (let i=0;i<cadena.length;i++){
        //     if (cadena.charAt(i).match(abecedarioRegx)){
        //         esValido = true;
        //     }
        //   }

           return esValido;
    }


    let output = console.log(esNombreValido("javi"));

}