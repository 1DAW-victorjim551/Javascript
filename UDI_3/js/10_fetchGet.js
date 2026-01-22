"use strict"
{
    let boton1 = document.createElement("input");
    boton1.setAttribute("type", "button");
    boton1.setAttribute("value", "Btn 1: Cargar Recurso");
    document.body.appendChild(boton1);

    let url = "https://jsonplaceholder.typicode.com/todos"
    let myRequest = new Request(url);
    boton1.addEventListener("click", function(evento){
        fetch(myRequest)
        .then(function (response){
            if(response.ok){
                return response.json();
            }else {
                throw new Error("ERROR al obtener el JSON");
            }
        })
        .then(function (arrayJson){
            arrayJson.forEach(json => {
                let p = document.createElement("p");
                p.innerHTML = json.userId;
                document.body.appendChild(p);
            });
        })
    })

    let boton2 = document.createElement("input");
    boton2.setAttribute("type", "button");
    boton2.setAttribute("value", "Btn 2: Get 1 JSON");
    document.body.appendChild(boton2);
    let myValue = document.createElement("input");
    myValue.setAttribute("type", "number");
    document.body.append(myValue);
    
    boton2.onclick  = function(evento){
        url = url + "/" + myValue.value;
        let myRequest = new Request(url);

        fetch(myRequest)
        .then (function (response){
            if(response.ok){
                return response.json;
            }else {
                throw new Error ("ERROR en el fetch")
            }
        })
        .then(function (json){
            
                let p = document.createElement("p");
                p.innerHTML = json.userId + json.id;
                document.body.appendChild(p);
        })
    }
}