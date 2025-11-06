"use strict"
{
    
  let arrayObjeto = [{nombre: "Ana Márquez Sete", DNI: "21147465T", edad: 6}, {nombre: "Álvaro García Molina", DNI: "24545535G", edad: 32}, {nombre: "Paloma González Mújica", DNI: "45678912L", edad: 4}, {nombre: "Alberto García Álvarez", DNI: "79753330W", edad: 14}];




    
    //EJERCICIO 1.

    function identificadorUsuario(arrayObjeto){
        let separacion = new Array()
        let dni_user = new Array();
        let user_name = new Array();
        let primer_nombre = new Array();
        let primer_apellido = new Array();
        let segundo_apellido = new Array();
          arrayObjeto.forEach(elem => {
            separacion.push(elem["nombre"].split(" "));
            dni_user.push(elem["DNI"].substring(5, 8));
          });
        //   console.table(separacion);
        //   console.table(dni_user);
      
          for (let i=0;i<separacion.length;i++){
              for(let j=0;j<i;j++){
                  if (j == 0){
                      primer_nombre = separacion[i][j].substring(0, 1);
                  }else if(j==1){
                      {
                          primer_apellido = separacion[i][j].substring(0, 3);
                          
                      }
                  }else if(j==2){
                      {
                          segundo_apellido = separacion[i][j].substring(0, 3);
                      }
                  } 
                  
                  user_name.push(primer_nombre+primer_apellido+segundo_apellido+dni_user[i]);
              }
              
          }

        let regExp = /[^A-Z]/;

        // user_name.map(elem => {
        //     regExp.test(elem);
        // });

        return user_name;
        
    }

    //RESULTADO 1
    console.log("RESULTADO 1");
    console.table(identificadorUsuario(arrayObjeto));




    // EJERCICIO 2

    function validadorDNI(arrayObjeto){
        let arrayDNI = new Array();
        let regExpDNI = /^\d{8}[A-Za-z]$/
       arrayDNI =  arrayObjeto.forEach(elem => {
            elem["DNI"];
        })
        arrayDNI = arrayDNI.map("edad").filter(regExpDNI).join("");

        return arrayDNI;
        
    }
    // RESULTADO EJERCICIO 2
    console.table(validadorDNI(arrayObjeto));


    // EJERCICIO 3

    function ordenarObjetos(arrayObjeto){
        let arrayordenados = new Array();

        arrayObjeto.forEach(elem => {
            arrayordenados = elem["edad"].sort((a, b) => a-b);
        })

        return arrayordenados;
    }

    // RESULTADO EJERCICIO 3
    console.table(ordenarObjetos(arrayObjeto));


    // EJERCICIO 4

    // function doblePrimo(arrayObjeto){

        
    //     arrayObjeto.forEach(elem => {
    //         elem["edad"]
    //     })
    // }
}