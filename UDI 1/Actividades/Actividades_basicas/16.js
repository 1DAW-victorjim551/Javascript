"use strict"
{
    let output = "";
    let number;
    let letter;

    function dibujarPatron(number, letter){
        while (number!=0){
        for(let i=0;i<number;i++){
           output+= letter;
           console.log(output);
        }
        number--;
        output = '\n';
    }
    }

    dibujarPatron(5, "A");
}