"use strict"
{
    let newDiv = document.createElement("div");
    newDiv.id = "id1";
    newDiv.style = "color: red";
    newDiv.className = "cDiv1";
    newDiv.classList.add("cDiv3");
    console.log(newDiv);
    document.body.append(newDiv);

    let newP = document.createElement("p");
    
    // Atributos de un elemento HTML
    /**
     * setAttribute (String attr, valor) : añade o cambiar el valor del atributo
     * boolean hasAttribute (String attr) : Indica si el Element tiene el atributo sttr
     * boolean hasAttributes () : indica si el Element tiene atributos HTML o no
     * Array getAttributeNames () : devuelve un array de String con los atributos del Element
     * String getAttribute (String attr)
     * removeAttribute (String attr)
     * 
     * Node getAttributeNode (String attr) : igual que getAttribute pero devuelve el Node
     * Node removeAttributeNode (String attr) : igual que removeAttribute pero devuelve el Node borrado
     * Node setAttributeNode (String attr, valor) : igual que setAttribute pero devuelve el Node al que le acabas de insertar el atributo
     * 
     */

    newP.setAttribute("name", "nDiv1");
    newP.setAttribute("id", "idParrafo1");
    newP.setAttribute("class", "cParrafo1");
    newP.setAttribute("data-kk", "pp"); //INVENTADO
    console.log(newP.hasAttribute("name"));
   console.log(newP.getAttributeNames()); //IMPORTANTE
   newP.setAttribute("style", "color: orange");
   newP.removeAttribute("style");    
    let attr1 = newP.getAttribute("id");
    let attr2 = newP.getAttributeNode("id");
    console.log(attr1);
    console.log(attr2);

    newP.appendChild(document.createTextNode("text of P"));
    newDiv.appendChild(newP);

    console.log(newDiv.isConnected);
    console.log(newP.isConnected);

    let myA = document.querySelector(".enlace");
   console.log(myA.getAttribute("data-id"));
   myA.setAttribute("data-description", "DOM");

   //  STYLE
 console.log(myA.style);
 console.log(myA.style.color);  
 console.log(myA.style.backgroundColor);
 console.log(window.getComputedStyle(myA));

 myA.style.textDecoration = "line-through";
 myA.style.setProperty("text-decoration", "none");

 // https://www.w3schools.com/cssref/index.php

 
}