"use strict"
{
   console.log(Math.PI);
   console.log(Math.E);
   console.log(Math.LN2);
   console.log(Math.LN10);
   console.log(Math.PI);

   let f = 37.6
  console.log(Math.floor(f));
  console.log(Math.ceil(f));
  console.log(Math.round(f));

  console.log(Math.abs(f));
  console.log(Math.min(10, 20));
  console.log(Math.max(10, 20));
  console.log(Math.pow(2, 4));
  console.log(Math.sqrt(121));
  console.log(Math.random().toFixed(3));
    
  // 0<= x <=10
  console.log(Math.round(Math.random()*10)); // Entre 0 y 10
  console.log(Math.floor(Math.random()*10)); // Entre 0 y 9
  console.log(Math.ceil(Math.random()*10)); // Entre 1 y 10
  console.log(Math.round(Math.random()*(100 - 10) + 10)); // Entre 10 y 100
  
}