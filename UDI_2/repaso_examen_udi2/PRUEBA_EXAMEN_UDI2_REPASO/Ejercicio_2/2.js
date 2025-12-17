"use strict"
{
  function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

    let tablaDiv = document.createElement("div");
    tablaDiv.style.display = "grid";
    tablaDiv.style.gridTemplateColumns = "repeat(10, 1fr)";
    tablaDiv.style.gridTemplateRows = "repeat(10, 1fr)";
    tablaDiv.style.border = "1px solid black";

    let resaltarPrimos = document.createElement("button");
    resaltarPrimos.textContent = "Resaltar Primos";
    document.body.appendChild(resaltarPrimos);


    
    let reiniciar = document.createElement("button");
    reiniciar.textContent = "Reiniciar";
    document.body.appendChild(reiniciar);


    for(let i=1;i<=100;i++){
        let celda = document.createElement("div");
        celda.textContent = i;
        celda.style.border = "1px solid black";
        tablaDiv.appendChild(celda);

        if(isPrime(i)){
            resaltarPrimos.addEventListener("click", function(){
                celda.style.backgroundColor = "yellow";
            })        
        }

        reiniciar.addEventListener("click", function(){
            celda.style.backgroundColor = "white";
        })
    }

     

    document.body.appendChild(tablaDiv);
}