"use strict"
{
    let nombre1 = prompt("Introduce el primer nombre:", "");
    let nombre2 = prompt("Introduce el segundo nombre:", "");
    let nombre3 = prompt("Introduce el tercer nombre:", "");
    
    let myArray = ["Gato", "Jirafa", "Rinoceronte"];
    console.log(myArray);
    localStorage.setItem("array", myArray);
    let mynewArray = localStorage.getItem("array");
    console.log(mynewArray);
    console.log(mynewArray.length);
    console.log(typeof mynewArray);

    localStorage.setItem("arrayJSON", JSON.stringify(myArray));

    console.log(localStorage.getItem("arrayJSON"));

    let devolverJSON = JSON.parse(localStorage.getItem("arrayJSON"));
    console.log(devolverJSON);
}