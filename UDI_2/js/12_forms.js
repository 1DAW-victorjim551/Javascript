"use strict"
{
    let myForm1 = document.getElementsById("idForm1");
    console.log(myForm1);

    console.log(myForm1.nTexto.value);

    console.log(myForm1.nURL.value);

    myForm1.nTexto.value = "today is raining";
    console.log(myForm1.nURL.value);

    let inputText1 = document.getElementById("idTexto1");

    inputText1.addEventListener("input", function (e){
        console.log("input");
        console.log(e.data);
        console.log(e.target.value);
        console.log(inputText1.value);
    });

    inputText1.addEventListener("change", function (e){
        console.log("change : " + inputText1.value);
    });


    // textarea
    let TextArea1 = document.getElementById("idTextArea1");
    TextArea1.addEventListener("input", function (e){
        console.log(e.data);
        console.log(e.target.value);
    });

    TextArea1.addEventListener("change", function (e){
        console.log("change:" + e.data);
        console.log(e.target.value);
    });

    let rButton1 = document.querySelector("[name='nrButton1]'");
    console.log(rButton1);
    rButton1.forEach(r => {
        console.log(r);
        console.log(r.value);
        console.log(r.previousElementSibling.textContent);
    
        if(r.checked){
            console.log("La opcion marcada es " + r.value);
        }
    });

    console.log(`Tiene ${rButton1.length} opciones`)
    
    for(let r of rButton1) {
        r.addEventListener("change", function (e){
            if(r.checked){
                console.log("Se ha marcado" + r.value);
            }
        })
    }

    // CHECKBOX

    let myChecks = document.querySelectorAll("[name='nchecks1']");
    console.log(myChecks);

    myChecks.forEach(c => {
        console.log(c);
        console.log(c.value);
        console.log(c.previousElementSibling.textContent);

        if(c.checked){
            console.log(`La opcion marcada es ${c.value}`);
        }
    });

    for(let c of myChecks){
        c.addEventListener("change", function(e){
            if(c.checked){
                console.log(`Me como un ${c.value}`)
            }else {
                console.log(`No me como un ${c.value}`);
            }
        })
    }

    let seleccion = document.querySelector("#idLenguaje");
    console.log(seleccion);

    for(let o of seleccion){
        console.log(o.value);
        console.log(o.textContent);
        console.log(sleeccion.options[seleccion.selectedIndex].value);
    }

    seleccion.options[seleccion.selectedIndex].value;
    seleccion.addEventListener("change", function (e){
        console.log(`\nEl índice seleccionado es: ${seleccion.selectedIndex}`);
        console.log(`El valor del elemento seleccionado es: ${seleccion.options[seleccion.selectedIndex].value}`);
        console.log(`El texto del elemento seleccionado es: ${seleccion.options[seleccion.selectedIndex].text}`);
    });

    
// DATALIST
console.log("\n\t7.Acceder a un datalist: ");
let dataList = document.querySelector("#idFrutas"); //coge un List console.log(listaDatos);
//let cajaDeEntrada document.querySelector("input[name="nFrutas"]'); let cajabetntada console.log(cajaDeEntrada);
let cajadatos = document.querySelector("#idFrutas1");
//Puedo recorrer los elementos option del select: ·Array.from(listaDatos.options).forEach(function (elemento){ console.log('Valor de los elementos: $(elemento.value)'); console.log("El texto elegido es: $(elemento.text)');

// for (let elem of listaDatos) { // ESTO NO FUNCIONA PORQUE listaDatos NO ES ITERABLE
//
//
// )

for(let o of Array.from(dataList.options)){
    console.log(o.value);
    console.log(o.text);
    console.log(o.selectedIndex);
}

cajaDeEntrada.addEventListener("change", function (e) {
});
console.log(cajaDeEntrada.value);
//console.log(e.target.value); // es lo mismo
    



}