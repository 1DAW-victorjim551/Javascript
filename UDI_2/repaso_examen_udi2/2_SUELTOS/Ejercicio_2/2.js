"use strict"
{   
    let form = document.createElement("form");
    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    form.appendChild(inputNombre);
    for(let i=0;i<4;i++){
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = Math.floor(Math.random() * (100 -1 +1) + 1);
        let label = document.createElement("label");
        label.textContent = checkbox.value;
        form.appendChild(checkbox);
        form.appendChild(label); 
    }

    let btnProcesar = document.createElement("button");
    btnProcesar.textContent = "Procesar";
    btnProcesar.type = "submit";
    form.appendChild(btnProcesar);
    let btnReiniciar = document.createElement("button");
    btnReiniciar.textContent = "Reiniciar";
    form.appendChild(btnReiniciar);

    document.body.appendChild(form);

    btnProcesar.addEventListener("click", function(e){
        e.preventDefault();
        let mensaje = document.createElement("p");
        let mensajeDOM = document.querySelector("p");
        
        let nombre = document.querySelector("input[type='text']");

        if(nombre.value === ""){
            mensaje.textContent = "No existe ningún nombre en el formulario, escribe uno";
        }else {
            let checkboxes = document.querySelectorAll("input[type='checkbox']");
            let sumatorio = 0;
                for(let c of checkboxes){
                    if(c.checked){
                    sumatorio += parseInt(c.value);
                    }
                }
            
            mensaje.textContent = "Hola " + nombre.value + " este es tu total: " + sumatorio; 
        }
        if(!mensajeDOM){form.appendChild(mensaje);}
        
    });

    btnReiniciar.addEventListener("click", function(e){
        e.preventDefault();
        let nombre = document.querySelector("input[type='text']");
        nombre.value = "";

        let checkboxes = document.querySelectorAll("input[type='checkbox']");

        for(let c of checkboxes){
            c.checked = false;
        }

        let mensaje = document.querySelector("p");
        if(mensaje){mensaje.remove();}
        

    })
}