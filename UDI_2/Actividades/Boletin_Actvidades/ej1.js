"use strict" 
{
    
    const element = document.createElement("ul");

    // CREACIÓN
    let myBtn1 = document.createElement("button");
    myBtn1.textContent = "Nuevo número";
    document.body.appendChild(myBtn1);

    //BORRADO
    let myBtn2 = document.createElement("button");
    myBtn2.textContent = "Borrar último número";
    document.body.appendChild(myBtn2);
    
    myBtn1.addEventListener("click", function f (element){
        let random = Math.floor((Math.random() * 100)+ 1);
        let text = "<li><b>" + random +"<b></li>";
         element.insertAdjacentHTML("beforeend", text);
         document.body.appendChild(element);
    })
    
    
    


}