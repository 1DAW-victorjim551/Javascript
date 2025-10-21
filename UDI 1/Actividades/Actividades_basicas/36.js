"use strict"
{
    let arrayNumbers = [4, 6, 8, -99, 45, 95, 32];

    function encontrarMasAltoYMasBajo(arrayNumbers){
      let masAlto =  Math.max(...arrayNumbers);
      let masBajo = Math.min(...arrayNumbers);

      return [masAlto, masBajo];
    }

    console.log(encontrarMasAltoYMasBajo(arrayNumbers));
}