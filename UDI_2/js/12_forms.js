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

    



}