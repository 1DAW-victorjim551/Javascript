"use strict"

    let form = document.querySelector("form");
    let input = document.querySelector(".form_list");

    let prioridades = ["Alta", "Media", "Baja"];

    let select = document.createElement("select");

    prioridades.forEach(p => {
        let option = document.createElement("option");
        option.value = p;
        option.textContent = p;
        select.appendChild(option);
    });

    form.appendChild(select);

    let lista = document.createElement("ul");
    document.body.appendChild(lista);

    function añadirTarea(){
        let li = document.createElement("li");
        li.textContent = input.value + " - " + select.value;
        lista.appendChild(li);
    }
    

