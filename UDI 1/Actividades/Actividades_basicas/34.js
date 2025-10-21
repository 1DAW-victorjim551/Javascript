"use strict"
{
    function isValidEmail(email){
        const emailRegex = /^[a-zA-Z][\w.-]*@[a-z]*\.[a-z]{2,}$/;

       let isValid = false;

       if (email.match(emailRegex)){
        return isValid = true;
       }else {
        return isValid;
       }
    }

    console.log(isValidEmail("Javier.ferrer@iesmartinez.es"));
}