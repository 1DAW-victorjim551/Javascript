"use strict";

{
  // Obtener todos los elementos <a>
  let listaA = document.getElementsByTagName("a");
  console.log(listaA);

  for (let a of listaA) {
    console.log(a);
    console.log(a.textContent);
    console.log(a.href);
  }

  // Obtener todos los elementos con clase "cListaVehiculos"
  let listaUls = document.getElementsByClassName("cListaVehiculos");
  for (let ul of listaUls) {
    console.log(ul);
    console.log(ul.textContent);
  }

  listaUls = document.getElementsByName("nLista"); // NodeList
  console.log(listaUls)

  listaUls.forEach(element => {
    console.log(element);
    console.log(element.textContent);
    console.log(element);
  });

  let ul = document.getElementById("idAviones");
  console.log(ul);
  console.log(ul.textContent);

  let myCar = document.querySelector("#idCoches");
  console.log(myCar)

  let myCharacters = document.querySelector(".cListaPersonajes");
  console.log(myCharacters);

  let myP = document.querySelector("p");
  console.log(myP);
  console.log(myP.innerText);
  console.log(myP.textContent);
  let listaP = document.querySelectorAll("p");

  listaP.forEach(p => {
    console.log(p);
    console.log(p.textContent);
  });

  listaUls = document.querySelectorAll("ul")
  listaUls.forEach(ul => {
    console.log(ul);
    console.log(listaUls[0])
  })

  elemName = document.querySelectorAll('[name="nLista]');
}
