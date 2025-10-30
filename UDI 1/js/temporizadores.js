"use strict"
{
    setTimeout(function(){
        let d = new Date().toLocaleDateString;
        console.log(d);
    }, 3000)

    let id = setInterval(function(){
        let d = new Date().toLocaleDateString;
        console.log(d);
    }, 2000)

    clearInterval(id);
}