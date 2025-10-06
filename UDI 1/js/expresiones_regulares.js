"use strict"
{
    const r1 = /.a.o/gimuy; 
    //i en las flagses sin case sensitive
    const r2 = new RegExp(".a.o", "i");
    const r3 = new RegExp(/.a.o/, "i");
    
   console.log(r1.source); // .a.o
   console.log(r1.flags); //gimuy
   r1.flags.includes("g")?console.log("yes"):console.log("no g");
   r1.global?console.log("yes"):console.log("no g");
   r1.flags.includes("i")?console.log("yes"):console.log("no i");
   r1.ignoreCase?console.log("yes"):console.log("no i");
   
   r1.flags.includes("m")?console.log("yes"):console.log("no m");
   r1.multiline?console.log("yes"):console.log("no m");

   r1.flags.includes("u")?console.log("yes"):console.log("no u");
   r1.unicode?console.log("yes"):console.log("no u");

    r1.flags.includes("y")?console.log("yes"):console.log("no y");
    r1.sticky?console.log("yes"):console.log("no y");

    /**
     * devuelve boolean => regExp.text(string);
     * devuelve [] => regExp.exec(string);
     *  devuelve [] => str.match(regExp);
     */

    
    r4 = new RegExp(/.a.o/, "i");
    r4.test("GATO");
    r4.test("Perro");
    r4.test("pAtO");

    console.log("--------m--------");
    const regEx1 = new RegExp("^football");
    const regEx2 = new RegExp("^football", "m");
    console.log( regExp1.test("rugby\nfootball")); //False
    console.log( regExp2.test("rugby\nfootball")); //True

    console.log("-----u------");
    r4=/😘./u;
    console.log(r4.test("😘"));

    r4=/./; //Un carácter
    console.log(r4.test("ab")); //True porque mira que solo haya uno, 
                                // lo cumple y marca true


    console.log(r4.test("x"));  //true
    r4=/^.$/; //$ => termina || un solo caracter para leer
    console.log(r4.test("("));


    console.log("-------y--------");
    const regExp3 = new RegExp("a", "y");
    regExp3.lastIndex=0; // default
    console.log(regExp3.test("ba"));  //false
    regExp3.lastIndex=1
    console.log(regExp3.test("ba")); //true
    const regExp4 = /foo/y;
    let myString1 = "table footballfootbolin";
    regExp4.lastIndex=6
    console.log(regExp4.test(myString1)); //true
    
    //Una vez comprueba el LastIndex va avanzando el propio indice
    // Despues de la comprobacion seria 9
    console.log(regExp4.lastIndex);

    console.log("SPECIAL CHARACTERS")

    /**
     * . => CUALQUIER CARÁCTER
     *  \ => ESCAPA CARACTERES
     * \n => SALTO DE LINEA
     * /t => TABULADOR
     * /r => SALTO DE CARRO
     * /f => FIN DE FORUMLARIO
     */
    
    let regExp5 = /^.$/i;
    let regExp6 = /^\.$/i;
    console.log(regExp6.test("X"));

    /**
     * /s => ESPACIO
     * [] => CUALQUIER CARÁCTER DEL INTERIOR
     * [^] => NO PUEDE EXISTIR NINGUN CARACTER DE DENTRO
     * | => ALTERNATIVA: O LO QUE ESTÁ A LA IZQ O LO QUE ESTÁ EN LA DERECHA
     */
    let regExp7= /^\s.\s$/i;
    console.log(regExp7.test(" X "));
    let regExp8 = /^[aeiou]$/i;
    console.log(regExp8.test("a")); //Da falso porque indicamos que acabe en vocal
    //pero si ponemos lo siguiente dará true
    regExp8 = /^[aeiou]$/i;
    console.log(regExp8.test("ab"));
    //NEGACION CON [^] NO EXISTE VOCAL
    let regExp9 = /^[^aeiou]$/i;
    console.log(regExp9.test("h")); //TRUE

    let regExp10= /casa|cama/i;
    console.log(regExp10.test("casae")); //TRUE
    console.log(regExp10.test("cama")); //TRUE
    console.log(regExp10.test("capa")); // FALSE
    let regExp11 = /[^ca|sa]/i;
    console.log(regExp11.test("ca")) //FALSE
    console.log(regExp11.test("fan")); // TRUE

    /**
     * [a-z] => CUALQUIER LETRA MINUSCULA(no acentos ni ñ)
     * [0-9] \d => RANGO DE NUMEROS
     * [^a-zA-Z] => NO HAY UNA LETRA
     * [0-9a-zA-Z] => QUE HAYA UN CARACTER ALFANUMERO
     * [^0-9a-zA-Z] => QUE NO HAYA UN CARACTER ALFANUMERO
     * [ ] => UN ESPACIO
     * [\t] => un tabulador
     * [\r] => un salto de carro
     * [\n] => un salto de línea
     * [\f] => un fin de formulario
     * \s => todo lo de [\t\r\n\f]
     * \S => ^ (niega) todo lo de [[\t\r\n\f]
     */

    let regExp12= /[a-z]$/;
    console.log(regExp12.test("ñ"));

    let regExp13 = /^[0-9]$/;
    console.log(regExp13.test("47")); //false
    let regExp14 = /^\d$/;
    console.log(regExp14.test("7")); //true
    let regExp15 = /^[^0-9]$/;
    console.log(regExp15.test("6")) //false

    /**
     * \b => UN TEXTO CON ESPACIOS O SIMBOLOS DE PUNTUACION O AL PRINCIPIO O AL FINAL
     * \B => ^ ``
     */

    let regExp16 = /fo\b/;
 console.log(regExp16.test("Esto es un parrafo.")); //TRUE
console.log(regExp16.test("Esto es un parrafo")); //TRUE


}
