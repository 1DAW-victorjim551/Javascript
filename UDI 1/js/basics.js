"use scrict"
{
    var a = 4;
    let v = 10.7;
    let b= true;
    let s = "my string"
    let s2 = "7"
    console.log("the string is " + s);
    console.log(`the string is ${s}`);
    console.log('my string is ${s}');

    let edad = 23, nuevaEdad, incremento = 4;
    const name = "Rosa Garcia";
    console.log(typeof incremento === "number");

    let v1 = ["hello"]
    v2.push("goodbye");
    let v2 = v1;
    console.log(v2);
    v2 = [...v1];
    v2.push("its too late");
    console.log(v2);

    let numero = 5;
    console.log(numero);
    console.log(numero.toString());

    let x = "2", y = 5;
    console.log(typeof(x + " " + y));
    console.log(x + y);

    let num = 100;
    let num2 = 100.3;
    let num3 = 11;

    let n = parseInt(num);
    let float = parseFloat(num);
    let mistring  = num2.toString();

    console.table("mensaje");
    console.table(v2);

    let answer = confirm("Desea cancelar la suscripcion?");
    alert(answer);
    answer = prompt("Introduce una provincia", "Huelva");
    alert(answer)


    if (condicion) {
        
    } else if (condicion) {

    }else {

    }

    let anaEdad;

    anaEdad = parseInt(prompt("Introduce una edad", ""));
    console.log(anaEdad);

    //SWITCH
    const metodoPago = "efectivo";
    switch(metodoPago){
        case "tarjeta":
            console.log("Pagaste con tarjeta");
            break;
        case "efectivo":
            console.log("Pagaste con un cheque");
            break;
        
        default:
            console.log("has pagado con otro metodo");
            break;
    }

    //OPERADOR TERNARIO (PRIMERO TRUE : FALSE)
    let esSocio = true;
    esSocio?console.log("La cuota son 10€") : console.log("La cuota son 20€");

    //BUCLES

    //BUCLES FOR
    for (let i=2;i<=30;i+=2){
        if (i%10 !== 0) {
            console.log(i);
        }
    }

    //WHILE
    let i=2;
    while (i<=30){
        console.log(i);
        i+=2;
    }


    // BREAKS Y CONTINUE
    let auxClave = true;
    let numVeces = 0;
    while (auxClave !== "SuperClave" && auxClave && numVeces < 3){

    }

}