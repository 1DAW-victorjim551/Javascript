"use strict"
{
    let url = "https://jsonplaceholder.typicode.com/todos/10";

    let myRequest = new Request(url);

    fetch(myRequest, {
        method: "DELETE"
    })
        .then(response => response.json())
        .then(console.log);

    let url2 = "https://jsonplaceholder.typicode.com/todos/11"
    let myRequest2 = new Request(url2);

    fetch(myRequest2, {
        method: "PATCH",
        body: {
            tittle: "Nuevo título modificado"
        }
    })
        .then(response => response.json())
        .then(console.log);


    let url3 = "https://jsonplaceholder.typicode.com/todos/11"
    let myRequest3 = new Request(url3);

    fetch(myRequest3, {
        method: "PATCH",
        body: {
            tittle: "Nuevo título modificado"
        }
    })
        .then(response => response.json())
        .then(console.log);

    // ACCEDIENDO A PUT, PATCH Y A DELETE DESDE JSON SERVER


    // PUT

    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(document.createElement("br"));

    let url4 = "http://localhost:3000/members";
    let putBtn = document.createElement("button");
    putBtn.textContent = "PUT - Json Server";
    document.body.appendChild(putBtn);

    let myValue2 = document.createElement("input");
    myValue2.setAttribute("type", "number");
    document.body.appendChild(myValue2);

    putBtn.addEventListener("click", function (evento) {
        let url5 = url4 + "/" + myValue2.value;
        let myRequest4 = new Request(url5);
        fetch(myRequest4, {
            method: "PUT",
            body: JSON.stringify({
                userId: 15,
                title: "Titulo 3",
                completed: false,
                mensaje: "Esto es una prueba, ahora de PUT"
            })
        })
            .then((response) => response.json())
            .then(console.log())

    })


    
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(document.createElement("br"));

      let patchBtn = document.createElement("button");
    patchBtn.textContent = "PATCH - Json Server";
    document.body.appendChild(patchBtn);

    let myValue3 = document.createElement("input");
    myValue3.setAttribute("type", "number");
    document.body.appendChild(myValue3);

    patchBtn.addEventListener("click", function (evento) {
        let url5 = url4 + "/" + myValue3.value;
        let myRequest5 = new Request(url5);
        fetch(myRequest5, {
            method: "PATCH",
            body: JSON.stringify({
            mensaje: "Esto es una prueba, ahora de PATCH"
            })
        })
            .then((response) => response.json())
            .then(console.log())

    })


}