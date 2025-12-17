"use strict"
{
    let btnNewNumber = document.createElement("button");
    btnNewNumber.textContent = "Nuevo número";
    let btnDelLastNumber = document.createElement("button");
    btnDelLastNumber.textContent = "Eliminar último"
    document.body.appendChild(btnNewNumber);
    document.body.appendChild(btnDelLastNumber);
    
    let ul = document.createElement("ul");
    document.body.appendChild(ul);

    btnNewNumber.addEventListener("click", function(){
        let li = document.createElement("li");
        li.textContent = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        li.style.listStyle = "none";

        ul.appendChild(li);
    });

    btnDelLastNumber.addEventListener("click", function(e){
        if(ul.lastChild === null){
            e.preventDefault();
            console.log("No hay más elementos de la lista por borrar")
        }else {ul.lastChild.remove()}
    })

}