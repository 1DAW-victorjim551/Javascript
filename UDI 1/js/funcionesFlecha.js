"use strict"
{
    function sumar(n1, n2){
        return n1+n2;
    }

    () => console.log("arrow function");

    const s = (n1, n2) => n1 + n2;
    console.log(s);

    const s2 = (param1, param2, param3=0) => {
        console.log(param1);
        console.log(param2);
        console.log(param3);
        return param1+param2+param3;
    };

    console.log(s2(20, 10, 50, 90));

    function fParaTransformarAFlecha (){
        return prompt("How old are you?", 8);
    }

    const tf = () => prompt("How old are you?", 8); 
    console.log(tf());

    const f = function (param1, param2){
        console.log(param1);
        console.log(param2);
        return "XXX"
    }

    const fconvertir = (param1, param2) => {
        console.log(param1+param2)
        return "XXX";
    }

   console.log(fconvertir(10, 20));


   let b=7;
    let c = (b) => b*10;
    let d = c(b);
    console.log(d);
    let e = c(100);
    console.log(e);
}