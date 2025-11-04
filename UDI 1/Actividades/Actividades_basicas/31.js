"use strict"
{
    function myFunction(date) {
        // let date = new Date(input);
        let actualDate = new Date();
        console.log(date);


        let age = actualDate.getFullYear() - date.getFullYear();
        if (actualDate.getMonth() < date.getMonth() || (actualDate.getMonth() === date.getMonth() && actualDate.getDay() < date.getDay())) {
            age--;
        }


        return age;
    }


    console.log(myFunction(new Date(2003,10,5)));
   
}
