"use strict"
{
    fetch("./recursos/texto.txt")
    .then(response => response.text())
    .then(datos => console.log(datos));

    localStorage.setItem("image", "./recursos/flores.jpg");

    let btnShowImage = document.createElement("button");
    btnShowImage.textContent = "Mostrar imagen";
    document.body.appendChild(btnShowImage);

    btnShowImage.addEventListener("click", function(){
        fetch(localStorage.getItem("image"))
    .then(response => response.blob())
    .then(function (myBlob){
        console.log(myBlob.size);
        console.log(myBlob.type);
        let objectURL = URL.createObjectURL(myBlob);
        let myImage = document.createElement("img");
        myImage.setAttribute("src", objectURL);
        document.body.appendChild(myImage)
    });
    })
    

}