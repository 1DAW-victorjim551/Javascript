"use strict"
{
    let myCallback = () => alert("Hola mundo");

    setTimeout(myCallback, 2000);

    let myArray = ["Perro", "Gato", "Elefante"];
    let f = function() {
        for(let a of myArray){
            console.log(a);
        }

        for(let i=0;i<5000;i++){
            console.log("-");
        }
    }

    function modificarArray(array, callback){
        array.push("Jirafa");
        callback();
        array.push("Cebra");
    }

    modificarArray(array, callback);
    console.log(myArray);
}