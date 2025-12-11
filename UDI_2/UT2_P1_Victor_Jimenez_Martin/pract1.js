"use strict"
{
    let Forms  = document.getElementsByClassName("inputNBotones");
    let Buttons = document.getElementsByClassName("crearBotones");
    let myBtn = Buttons[0];
    let Buttons2 = document.getElementsByClassName("reiniciar");
    let reiniciar = Buttons2[0];
    console.log(myBtn);
    
    let inputText1 = document.getElementById("idTexto1");


        myBtn.addEventListener("click", function(){
        let numBotones = inputText1.value;

      if(numBotones > 0){
        for(let i=0;i<numBotones;i++){
          console.log("bucle");
           let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

      let boton = document.createElement("button");
      boton.textContent = `rgb(${r}, ${g}, ${b})`;
      boton.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      myBtn.insertAdjacentElement("beforebegin", boton);
      
      boton.addEventListener("click", function(){
      document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    })

      reiniciar.addEventListener("click", function(){
      boton.remove();
      document.body.style.backgroundColor = "white";
    });
        }
       
  }
    });
}