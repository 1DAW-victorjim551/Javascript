"use strict"
{
  let arrayObjeto = [
    {nombre: "Ana Márquez Sete", DNI: "21147465T", edad: 6},
    {nombre: "Álvaro García Molina", DNI: "24545535G", edad: 32},
    {nombre: "Paloma González Mújica", DNI: "45678912L", edad: 4},
    {nombre: "Alberto García Álvarez", DNI: "79753330W", edad: 14}
  ];

  // EJERCICIO 1
  function identificadorUsuario(arrayObjeto){
    let separacion = new Array();
    let dni_user = new Array();
    let user_name = new Array();

    arrayObjeto.forEach(elem => {
      separacion.push(elem["nombre"].split(" "));
      dni_user.push(elem["DNI"].substring(5, 8));
    });

    for (let i = 0; i < separacion.length; i++){
      let primer_nombre = separacion[i][0].substring(0, 1);
      let primer_apellido = separacion[i][1].substring(0, 3);
      let segundo_apellido = separacion[i][2].substring(0, 3);
      user_name.push((primer_nombre + primer_apellido + segundo_apellido + dni_user[i]).toUpperCase());
    }

    return user_name;
  }

  // RESULTADO EJERCICIO 1
  console.log("RESULTADO 1");
  console.table(identificadorUsuario(arrayObjeto));

  // EJERCICIO 2
  function validadorDNI(arrayObjeto){
    let arrayDNI = new Array();
    let regExpDNI = /^\d{8}[A-Za-z]$/;

    arrayObjeto.forEach(elem => {
      if (regExpDNI.test(elem["DNI"])){
        arrayDNI.push(elem["DNI"]);
      }
    });

    return arrayDNI;
  }

  // RESULTADO EJERCICIO 2
  console.log("RESULTADO 2");
  console.table(validadorDNI(arrayObjeto));

  // EJERCICIO 3
  function ordenarObjetos(arrayObjeto){
    let arrayordenados = [...arrayObjeto];
    arrayordenados.sort((a, b) => a.edad - b.edad);
    return arrayordenados;
  }

  // RESULTADO EJERCICIO 3
  console.log("RESULTADO 3");
  console.table(ordenarObjetos(arrayObjeto));
}
