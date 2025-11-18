"use strict"
{
    //EXERCISE 2: Using prompt, ask a number N to an user and create in DOM N H2 elements writing 
    // inside a paragraph your name in bold and italic + a random number between 0 and 10.

    let number = "";
    number = parseInt(prompt("Introduce a number", number));

   

        for(let i=0;i<number;i++){
        //  
        let random = Math.floor(Math.random() * 11);
        let text = "<p><b><i>Víctor Jiménez Martín </i><b>" + " " + random + "</p>";
        const element = document.createElement("h2");
         element.insertAdjacentHTML("beforeend", text);
         document.body.appendChild(element);

        }
}