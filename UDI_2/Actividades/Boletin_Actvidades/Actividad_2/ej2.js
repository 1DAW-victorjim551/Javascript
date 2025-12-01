"use strict"

{
    const maxRows = 10;
    const maxCells = 10;
    
    let calculateNumberBtn = document.createElement("button");
    calculateNumberBtn.textContent = "Calcular Número Primo";
    document.body.appendChild(calculateNumberBtn);
    
    let resetNumberBtn = document.createElement("button");
    resetNumberBtn.textContent = "Resetear";
    document.body.appendChild(resetNumberBtn);


    let table = document.createElement("div");
    table.classList.add("table");
    
        
        for(let i=1;i<=100;i++){
            let cell = document.createElement("div");
            cell.classList.add(`num${i}`);
            cell.textContent = i;
            table.appendChild(cell);
        }

        
        
    
   for (let i = 0; i < 3; i++) {
    document.body.appendChild(document.createElement("br"));
}

    document.body.appendChild(table);

    // Creación de la FUNCIONALIDAD DE LOS BOTONES

      calculateNumberBtn.addEventListener("click", function (){
        for(let i = 2; i <= 100; i++){
            let esPrimo = true;
            for(let j = 2; j < i; j++){
                if(i % j === 0){
                    esPrimo = false;
                    break;
                }
            }
            
            if(esPrimo){
                const div = document.querySelector(`.num${i}`);
                if(div) div.style.backgroundColor = "yellow";
            }
        }
    });
    
    resetNumberBtn.addEventListener("click", function (evento){
       for(let i = 1; i <= 100; i++){
            const div = document.querySelector(`.num${i}`);
            if(div) div.style.backgroundColor = "white";
        }
    });
}