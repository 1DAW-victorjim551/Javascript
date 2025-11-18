"use strict" 
{
    // EXERCISE 3: Using prompt, ask a number N to an user and create in DOM an 
    // unordered list with N random numbers between 1 and 15 for each element in bold.
     let number = "";
    number = parseInt(prompt("Introduce a number", number));
    const element = document.createElement("ul");
     for(let i=0;i<number;i++){
        //  
        let random = Math.floor((Math.random() * 15)+ 1);
        let text = "<li><b>" + random +"<b></li>";
         element.insertAdjacentHTML("beforeend", text);
         document.body.appendChild(element);

        }
}