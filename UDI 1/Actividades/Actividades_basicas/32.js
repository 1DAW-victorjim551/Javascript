"use strict"
{
    function contarVocalesyConsonantes(cadena){
        const vocalesRegx =  /[aeiouáéíóúAEIOUÁÉÍÓÚ]/g;
        const abecedarioRegx = /[a-zA-Z]/;
        let contadorVocales = 0;
        let contadorConsonantes = 0;

       


          for (let i=0;i<cadena.length;i++){
            if (cadena.charAt(i).match(vocalesRegx)){
                contadorVocales++;
            }else if (cadena.charAt(i).match(abecedarioRegx)) {
                contadorConsonantes++;
            }
          }
          

           let output = "El número de vocales es " + contadorVocales + " & el número de consonantes es " + contadorConsonantes;

           return output;
    }


    let output = console.log(contarVocalesyConsonantes("Hola Mundo"));
    

      


}