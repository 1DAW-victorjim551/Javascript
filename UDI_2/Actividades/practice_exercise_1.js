"use strict"
{
    // EXERCISE 1: Using prompt, ask a number N to an user 
    // and create in DOM N paragraphs with a random number between 0 and 10 each one.
    let number = "";
    number = parseInt(prompt("Introduce a number", number));

   

        for(let i=0;i<number;i++){
        //  
        let random = Math.floor(Math.random() * 11);
        const element = document.createElement("p");
         element.textContent = random;
         document.body.appendChild(element);

        }
}