"use strict"
{
//     7️⃣ Objeto con información de estudiantes

// Crea un array de objetos tipo:

// { nombre: "Lucía", nota: 8 }


// Crea una función analizarNotas(estudiantes) que devuelva:

// Nota media.

// Estudiante con nota más alta y más baja.

// Número de aprobados y suspensos.
// Usa métodos de array (forEach, map, reduce).

    let arrayEstudiantes = [{nombre : "Lucia", nota : 8}, {nombre : "Esteban", nota : 9}, {nombre : "Pablo", nota : 6}, {nombre : "Nuria", nota : 3}];

    function analizarNotas(arrayEstudiantes){
        let media = 0;
        let suma = 0;
        let contadorAprobados = 0;
        let contadorSuspensos = 0;

        arrayEstudiantes.forEach(elem => {
             suma += elem.nota;
             if(elem["nota"] >= 5){
                contadorAprobados++;
             }else {
                contadorSuspensos++;
             };
        });

        media = (suma / arrayEstudiantes.length);
        let max = arrayEstudiantes.reduce((a, b) => a.nota > b.nota ? a : b);
        let min = arrayEstudiantes.reduce((a, b) => a.nota < b.nota ? a : b);


        return "La media de la clase ha sido de : " + media + 
        "\n Hay " + contadorAprobados + " Aprobados" + " y " + contadorSuspensos + " Suspensos" +
        "\n El estudiante con la nota más alta ha sido " + max.nombre + " : " + max.nota +
        "\n El estudiante con la nota más baja ha sido " + min.nombre + " : " + min.nota;
    }

    console.log(analizarNotas(arrayEstudiantes));
}