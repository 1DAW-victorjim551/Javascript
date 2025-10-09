"use strict"
{
    let persona = {
        nombre : "Pepe",
        edad: 30,
        ciudad: "Huelva"
    };

    console.log(persona);
    console.log(persona.nombre);
    console.log(persona["nombre"]);
    persona.edad = 33;
    console.log(persona.edad);

    let animal = {
        tipo: "gato",
        patas: 4,
        tieneBigotes: true,
        dimensiones: {
            altura: 60,
            ancho: 30,
            largo: 80
        },
        dieta: ["pescado", "pienso", "sobras"]
    }



    console.log(animal);
    animal.dimensiones.largo = 90;
    console.log(animal.dimensiones.largo);


    let personaCompleta = {
        nombre: "Hugo",
        dni : "564932T",
        edad : 19,
        ciudad : "Sevilla",
        pasatiempos: ["jugar a la consola", "javascript", "escuchar musica"],
        contacto : {
            email: "hsilben979@g.educaand.es",
            telefono: "684829464",
            instagram: "@hugosilvamaricon"
        },

        saludar(){
            console.log("Holaaa");
        },

        saludarCompleto(){
            console.log("Hola me llamo " + this.nombre)
        },

        decirEmail(){
            return this.contacto.email;
        }
    }

   console.log(personaCompleta.saludarCompleto());

   let e = personaCompleta.decirEmail();

   console.log(e);

   /**
    * DESESTRUCTURACION DE UN OBJETO LITERAL
    */

   personaCompleta.nombre;
   const {nombre:n, dni:id, contacto: c}  = personaCompleta;
   const {email, telefono: tfno, instagram: ig} = c
    console.log(ig);

    /**
     * UNIR OBJETOS LITERALES
     */

    const producto = {
        nombreProducto : "Lejía",
        precio: 2.95,
        marca: "don limpio"
    }

    let colores = {
        colorLiquido: "amarillo",
        colorRecipiente: "blanco",
        colorTapon: "azul"
    }

    let productoColor1 = {producto, colores};
    console.log(productoColor1);

    console.log("-------");
    
    let productoColor2 = {...producto,...colores};
    producto.nombreProducto="suavizante";
    console.log(productoColor2);
}