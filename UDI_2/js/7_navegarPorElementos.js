"use strict"
{
    console.log(document.body.children);
    console.log(document.body.children.length);
    for (let element of document.body.children){
        console.log(element);
    }

    let listaAviones = document.querySelector("#idAviones");
    let padreAviones = listaAviones.parentElement;
    console.log(padreAviones);

   console.log(document.body.firstElementChild);
  console.log(document.body.firstElementChild.textContent);
  console.log(document.body.firstElementChild.firstChild);
  console.log(document.body.children[0]);
  console.log(document.body.children[document.body.children.length -1]);
  console.log(document.body.previousElementSibling);
 console.log(document.body.nextElementSibling);

  /**
     * PARA NAVEGAR POR LOS NODOS
     * childNodes : devuelve un array de NodeList con los nodos hijos del elemento en cuestión
     * parentElement : devuelve el nodo padre o null si no tiene 
     * firstChild : devuelve el primer nodo hijo
     * lastChild : devuelve el último nodo hijo
     * previousSibling : devuelve el anterior nodo hermano
     * nextSibling : devuelve el siguiente nodo hermano
     */

 console.log(document.body.childNodes);
console.log(document.body.lastChild);
console.log(document.body.childNodes[document.body.childNodes.length-1]);
console.log(document.body.childNodes[5].firstChild);

let myDiv = document.querySelector("#idApp");
let myPmyDiv = myDiv.querySelector("p");
console.log(myPmyDiv.textContent);
// luego del p si quieremos sacar el nodo anterior al p hacemos esto:

// --> por hacer lo de arriba


    
  


}