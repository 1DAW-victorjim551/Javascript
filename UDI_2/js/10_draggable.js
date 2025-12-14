"use strict"

{
    let cajaRoja = document.querySelector (".cajaRoja"); 
    let cajaAzul = document.querySelector (".cajaAzul"); 
    //cajaRoja.draggable=true; //hacemos el elemento arrastrable 
    let contenedor = document.querySelector (".contenedor");
    let draggedBox;

    const finalMessage = document.getElementById("finalMessage");

    /* Los diferentes eventos que existen al arrastrar:
        dragstart
        drag
        dragend
    
    */

    cajaRoja.addEventListener("dragstart", (ev) => {
        // console.log("dragstart");
        draggedBox = ev.target;
    });

    cajaRoja.addEventListener("drag", () => {
        // console.log("drag");
    });

    cajaRoja.addEventListener("dragend", () => {
        // console.log("dragend");
    });

    cajaAzul.addEventListener("dragstart", (ev) => {
        // console.log("dragstart");
        draggedBox = ev.target;
    });

    cajaAzul.addEventListener("drag", () => {
        // console.log("drag");
    });

    cajaAzul.addEventListener("dragend", () => {
        // console.log("dragend");
    });

    /* Para la cesta:
        dragenter
        dragleave
        dragover
        drop    
    */

    contenedor.addEventListener("dragenter", () => {
        // console.log("dragenter");
    });

    contenedor.addEventListener("dragleave", () => {
        // console.log("dragleave");
    });

    contenedor.addEventListener("dragover", (ev) => {
        // console.log("dragover");
        ev.preventDefault();
    });

    contenedor.addEventListener("drop", () => {
        // console.log("drop");
        contenedor.insertAdjacentElement("afterbegin", draggedBox);
    });
    
    document.body.addEventListener("dragover", (ev) => {
        ev.preventDefault();
    });

    document.body.addEventListener("drop", (ev) => {
        if (ev.target === document.body) {
            document.body.insertAdjacentElement("afterbegin", draggedBox);
        }
    });
}