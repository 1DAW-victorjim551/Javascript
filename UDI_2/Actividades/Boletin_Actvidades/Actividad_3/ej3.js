"use strict"
{
   let btnMarcar = document.createElement("button");
    btnMarcar.textContent = "Marcar todos";
    document.body.appendChild(btnMarcar);

    let btnDesmarcar = document.createElement("button");
    btnDesmarcar.textContent = "Desmarcar todos";
    document.body.appendChild(btnDesmarcar);

   let btnAmpliar= document.createElement("button");
    btnAmpliar.textContent = "Ampliar Tamaño";
    document.body.appendChild(btnAmpliar);

   let btnRestaurar = document.createElement("button");
    btnRestaurar.textContent = "Restaurar Tamaño"
    document.body.appendChild(btnRestaurar);
    
    for(let i=0;i<100;i++){
        let div = document.createElement("div");
        let input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("value", "Nº"+Math.floor((Math.random() * 101)+ 100));
        div.appendChild(input);
        let label = document.createElement("label");
        label.textContent = i;
        div.appendChild(label);
        document.body.appendChild(div);
    }


    btnMarcar.addEventListener("click", function (evento){
        let miElemento = document.getElementsByTagName("input");
        for(let elem of miElemento){
            elem.checked = true;
            console.log("Elemento marcado " +  elem.value);
        }
        
    });

    btnDesmarcar.addEventListener("click", function (evento){
        let miElemento = document.getElementsByTagName("input");
        for(let elem of miElemento){
            elem.checked = false;
            console.log("Elemento desmarcado " + elem.value);
        }
    });

    btnAmpliar.addEventListener("click", function (evento){
        let miElemento = document.getElementsByTagName("input");

        for(let elem of miElemento){
            if(elem.value.substring(2) %2 == 0){
                elem.style.height = "60px";
                elem.style.height = "60px";
            }
        }
    });

    btnRestaurar.addEventListener("click", function (evento){
        let miElemento = document.getElementsByTagName("input");

        for(let elem of miElemento){
            if(elem.value.substring(2) %2 == 0){
                elem.style.height = "20px";
                elem.style.height = "20px";
            }
        }
    });
}