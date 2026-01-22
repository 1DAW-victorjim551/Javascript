"use strict"
{
    let boton1 = document.createElement("input");
    boton1.setAttribute("type", "button");
    boton1.setAttribute("value", "Btn 1: Cargar Recurso");
    document.body.appendChild(boton1);

    let url = "https://jsonplaceholder.typicode.com/todos";
    let myRequest = new Request(url);

    boton1.addEventListener("click", function(evento){
        fetch(myRequest, {
            method : "POST",
            body: JSON.stringify({
                userId: 500,
                title: "my own JSON",
                completed: true
            })
        })
        .then (response => response.json())
        .then (console.log)
    })

    let formulario = document.querySelector("#idForm1");
    formulario.addEventListener("submit", function(evento){
        const datos = new FormData(formulario);
        console.log("userID: " + datos.get("userId"));
        console.log("id: " + datos.get("id"));
        console.log("title: " + datos.get("title"));

      fetch(myRequest, {
            method:'POST',
            body: JSON.stringify({
                userId:datos.get('userId'),
                title:datos.get('title'),
                completed:true
            })
        })
        .then(response => response.json())
        .then(console.log)
    })

    let url3 = "https://formsubmit.co/ajax/vjimmar0508@g.educaand.es";
    let formulario2 = document.querySelector(".cFormulario2");
    formulario2.addEventListener("submit", function(e){
        e.preventDefault();
        let datos = new FormData(formulario2);

        fetch(url3, {
            method: "POST",
            body: datos
        })
        .then(response => response.json())
        .then(datosRecibidos => console.log(datosRecibidos))
    });

}
