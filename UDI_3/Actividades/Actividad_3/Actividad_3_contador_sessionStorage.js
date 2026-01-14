"use strict"
{
    if(sessionStorage.getItem("contador") === null || sessionStorage.getItem("contador") === "null" || sessionStorage.getItem("contador") === "" ){
        sessionStorage.setItem("contador", 0);
    }
   let myP =  document.createElement("p");
    myP.textContent =  `Contador Visitas : ${sessionStorage.getItem("contador")}`;
    document.body.appendChild(myP);
    let contador = sessionStorage.getItem("contador");
    contador++;
    sessionStorage.setItem("contador", contador);

    let btnDelete = document.createElement("button");
    btnDelete.textContent = "Eliminar sessionStorage";
    document.body.appendChild(btnDelete);


    btnDelete.addEventListener("click", () => {
        sessionStorage.setItem("contador", 0);
        myP.textContent =  `Contador Visitas : ${sessionStorage.getItem("contador")}`;
    })
}