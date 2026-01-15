"use strict"
{
    const resultado = fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json())
    .then(datos => {
        console.log(datos);
    }).catch(error => console.error(error));
    console.log(resultado);
}