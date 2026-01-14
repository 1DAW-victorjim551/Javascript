"use strict"
{
    if(localStorage.getItem("contador") === null || localStorage.getItem("contador") === "null" || localStorage.getItem("contador") === "" ){
        localStorage.setItem("contador", 0);
    }
   let myP =  document.createElement("p");
    myP.textContent =  `Contador Visitas : ${localStorage.getItem("contador")}`;
    document.body.appendChild(myP);
    let contador = localStorage.getItem("contador");
    contador++;
    localStorage.setItem("contador", contador);

    let btnDelete = document.createElement("button");
    btnDelete.textContent = "Eliminar localStorage";
    document.body.appendChild(btnDelete);


    btnDelete.addEventListener("click", () => {
        localStorage.setItem("contador", 0);
        myP.textContent =  `Contador Visitas : ${localStorage.getItem("contador")}`;
    })
}