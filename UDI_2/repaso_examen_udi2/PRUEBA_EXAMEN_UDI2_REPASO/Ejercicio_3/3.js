"use strict"
{
    let btnMarcar = document.createElement("button");
    btnMarcar.textContent = "Marcar todos";
    document.body.appendChild(btnMarcar);
    
    let btnDesmarcar = document.createElement("button");
    btnDesmarcar.textContent = "Desmarcar";
    document.body.appendChild(btnDesmarcar);

    let btnAumentarTamanyoPares = document.createElement("button");
    btnAumentarTamanyoPares.textContent = "Aumentar Tamaño Pares";
    document.body.appendChild(btnAumentarTamanyoPares);

    let btnRestaurarTamanyo = document.createElement("button");
    btnRestaurarTamanyo.textContent = "Restaurar Tamaño";
    document.body.appendChild(btnRestaurarTamanyo);

    for(let i=1;i<=20;i++){
        let div = document.createElement("div");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = Math.floor(Math.random()* (200 - 100 + 1)+100);
        checkbox.name = "check" + checkbox.value;
        let label = document.createElement("label");
        label.textContent = i;

        div.appendChild(checkbox);
        div.appendChild(label);
        document.body.appendChild(div);


         checkbox.addEventListener("click", function(){
                if(checkbox.checked){
                console.log(checkbox.name + " Marcado");
                    }else{
                        console.log(checkbox.name + " Desmarcado");
                    }
    })
    }

   

    btnMarcar.addEventListener("click", function(){
        let inputs = document.body.getElementsByTagName("input");

        for(let e of inputs){
            e.checked = true;
            console.log(e.name + " Marcado");
        }
    })


    btnDesmarcar.addEventListener("click", function(){
        let inputs = document.body.getElementsByTagName("input");

        for(let e of inputs){
            e.checked = false;
            console.log(e.name + " Desmarcado");
        }
    })

    btnAumentarTamanyoPares.addEventListener("click", function(){
        let inputs = document.body.getElementsByTagName("input");

        for(let e of inputs){
            if(e.value %2 === 0){
                e.style.height = "40px";
                e.style.width = "40px";
            }
        }
    })

    btnRestaurarTamanyo.addEventListener("click", function(){
        let inputs = document.body.getElementsByTagName("input");

        for(let e of inputs){
                e.style.height = "20px";
                e.style.width = "20px";
        }
    })

}