"use strict"
{
   let intervalo;
   
   let btnComenzar = document.createElement("button");
   btnComenzar.textContent = "Comenzar Saludos";
   document.body.appendChild(btnComenzar);
   
   let btnParar = document.createElement("button");
   btnParar.textContent = "Parar Saludos";
   document.body.appendChild(btnParar);
   
   btnComenzar.addEventListener("click", function(){
      intervalo = setInterval(function(){
         alert("Hola");
      }, 5000);
   });
   
   btnParar.addEventListener("click", function(){
      clearInterval(intervalo);
   });
}