"use strict"

{
    const maxRows = 10;
    const maxCells = 10;
    let contador = 0;
    
    let calculateNumberBtn = document.createElement("button");
    calculateNumberBtn.textContent = "Calcular Número Primo";
    document.body.appendChild(calculateNumberBtn);
    
    let resetNumberBtn = document.createElement("button");
    resetNumberBtn.textContent = "Resetear";
    document.body.appendChild(resetNumberBtn);


    let table = document.createElement("div");
    table.classList.add("table");
    
        let row = document.createElement("div");
        table.appendChild(row);
        for(let i=0;i<100;i++){
            let number = i;
            table.textContent = number;
        }

        
        
    
   let br = document.createElement("br");
    document.body.appendChild(br);
    document.body.appendChild(br);
    document.body.appendChild(br);
    document.body.appendChild(table);
}