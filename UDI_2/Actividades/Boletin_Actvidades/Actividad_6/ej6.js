"use strict"
{
   let intervalo;
   
   let btnEmpezar = document.createElement("button");
   btnEmpezar.textContent = "Empezar Saludos";
   document.body.appendChild(btnEmpezar);
   
   let btnParar = document.createElement("button");
   btnParar.textContent = "Parar Saludos";
   document.body.appendChild(btnParar);
   
   btnEmpezar.addEventListener("click", function(){
      intervalo = setInterval(function(){
         alert("Hola!");
      }, 5000);
   });
   
   btnParar.addEventListener("click", function(){
      clearInterval(intervalo);
   });
}