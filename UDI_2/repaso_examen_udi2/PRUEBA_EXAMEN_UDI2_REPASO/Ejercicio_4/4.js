"use strict"
{
    let btnReiniciar = document.createElement("button");
    btnReiniciar.textContent = "Reiniciar";
    document.body.appendChild(btnReiniciar);

    let parrafos = [];
    for(let i=0;i<3;i++){
        let myP = document.createElement("p");
        myP.textContent = "Parrafo " + (i+1);
        document.body.appendChild(myP);
        parrafos.push(myP);
    }

    parrafos.forEach(p => {
        p.addEventListener("mouseleave", function(){
        p.style.display = "none";
        });

        p.addEventListener("dblclick", function(){
            p.remove();
        });

        // REINICIAR

        btnReiniciar.addEventListener("click", function(){
            p.style.display = "";
        })
    })
    

}