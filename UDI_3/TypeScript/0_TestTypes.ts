console.log("Hello TypeScript");
let myString = "text string";
console.log(typeof myString);


let a : string = "hello";

console.log(typeof a);

let b : string = " and goodbye";

console.log(a + b);

let bb : string = "Adios";

let c : number = 10;
let d : number = 6.5;
console.log(c+d);
console.log(c+d-1);
console.log("El resultado es : " + (c+d));

let e:boolean = true;

let f : string | undefined | number;
f = "hola";
f = 3;
f = undefined;

function myFunction(a?: number): void{
    console.log(a);
}

myFunction();

function myFunction2() : string{
    return "dwec";
}

function sumar (a : number, b : number) : number {
    return a+b;
}

console.log("The result is " + sumar(5,20));

let myArray : Array<string> = ["Elem1", "elem2", "elem3"];
let myArray2 : (string[] | number) = ["Elem1", "elem2", "elem3"];
let myArray3 : Array<string | number> = ["Elem1", "elem2", "elem3", 4];

class MyClass{
    //atributos
    public name : string;
    public age : number = 19;
    //constructor
    constructor(name : string, age?:number){
        this.name = name;

       if (age !== undefined) { 
        this.age = age; 
    }
    //        this.age = age;
       
    }
    //  set incrementaEdad (age :number ){
    //         this.age = age;
    // }
}


let myClass = new MyClass("Margarita", 20);
let myClass2 = new MyClass("Christian");

console.log(myClass2.age);
