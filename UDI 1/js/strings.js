"use strict"
{
    let myString = "Hola que tal?";
    let myString2 = new String ("user:password:group:home:shell");
    console.log(myString.length);
    console.log(myString.toLowerCase());
    console.log(myString.toUpperCase());
    console.log(myString.concat(" " + myString2));
    console.log(myString.charAt(0));
    console.log(myString.charAt(myString.length - 1));
    console.log( myString.indexOf("¿", 10));
    console.log(myString.lastIndexOf("¿", 3)); //14
    console.log(myString.replace("?", "!"));
    console.log(myString.replaceAll("?", "!"));
    console.table(myString.split("."));
    let myArray = myString2.split(":");
    console.log(myArray, myArray.length);
    console.log(myString.substring(0, 10));
    console.log(myString2.substring(myString2).indexOf(":" + 1).indexOf(":"));//CONSEGUIR GROUP SIN SPLIT
    console.log(myString2.includes("groups")?"SI":"NO");
    console.log(myString2.repeat(3)) //REPITE 3 VECES EL STRING
    let myString4 = "      HO LA    ";
    myString4.trim();
}