"use strict"
{
    function f(param1, param2, param3){
        console.log(param1);
        console.log(param2);
        console.log(param3);
    }

    f(10, 3, 5);

    function f2(param1, param2, ...param3){
        console.log(param1);
        console.log(param2);
        console.log(param3);
    }

    f2(20, 30, 40, 50, 60, 70, 80, 93);

  const f4 =  function (param1, param2, param3){
        console.log("esto es bastante raro...");
        return 10+30;
    }

    console.log(f3);
    f3(10, 20);
    let x = f3 (10, 20);
    console.log(x);

    //FUNCIONES ANONIMAS
    (function (){
        console.log("función anónima");
    })();

    (function (param1, param2, param3=30){
        console.log("funcion anonima 2");
        console.log(param1);
        console.log(param2);
        console.log(param3);
    })(30, 50, 10);

   const v = (function (param1, param2, param3=30){
    console.log("funcion anónima 2");
    return param1+param2;
   })(promt("Introduce param1", ""), promt("Introduce param2", ""));

   console.log(v);
}