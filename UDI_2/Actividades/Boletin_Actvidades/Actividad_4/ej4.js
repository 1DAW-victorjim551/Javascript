"use strict"
{
    
  let reaparecer = document.createElement("button");
  reaparecer.textContent = "Reaparecer";
  document.body.appendChild(reaparecer);

   for (let i = 0; i < 4; i++) {
  document.body.appendChild(document.createElement("br"));
}


  let contenedor = document.createElement("div");
  contenedor.style.border = "black 1px solid"
  document.body.appendChild(contenedor);
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");

  p1.textContent = "Parrafo 1";
  p2.textContent = "Parrafo 2";
  p3.textContent = "Parrafo 3";
  contenedor.appendChild(p1);
  contenedor.appendChild(p2);
  contenedor.appendChild(p3);
  
  contenedor.addEventListener("mouseleave", function (e){
    contenedor.style.display = "none";
  });

  contenedor.addEventListener("dblclick", function (e){
    contenedor.replaceChildren();
  });
  
  reaparecer.addEventListener("click", function(e){
    contenedor.style.display = "block";
  });
}