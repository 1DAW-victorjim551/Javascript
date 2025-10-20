"use strict"
{
    let regExp = /^[m|d].*[a|o]$/i;
    let cadena = "me llamo maria";
    
   console.table(regExp.exec(cadena));
}