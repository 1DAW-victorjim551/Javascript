"use strict"
{
    let btn = document.querySelector("#btn");
    const imgURL = "https://desguacescorpas.com/wp-content/uploads/oKJFo8ipjIEA1vP6AjBJyAVBJdeWXkdkoRnb3NYeH1VGBjQGKZbDJQ.jpg";
    const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
    btn.addEventListener("click", function(e){
        let myRequest = new Request(corsAnywhere + imgURL);
        fetch (myRequest, {
            method : "GET",
            headers : new Headers({
                "Access-Control-Allow-Origin" : "*",
                "Content-Type" : "Application/image"
            })
        })
        .then(response => {
            console.log(response.status); //codigo de status
            console.log(response.statusText);
            console.log(response.ok); // true or false

            if(response.ok){
                return response.blob();
            }else {
                throw new Error ("Error accediendo a la URL");
            }
        })
        .then(myBlob => {
            let myImg = document.createElement("img");
            myImg.src = URL.createObjectURL(myBlob);
            return myImg;
        })
        .then(myImg => document.body.appendChild(myImg))
        .catch(error => {
            console.log("ERROR " + error)
        })
    })
}