"use strict"
{
    /**
     * PROPIEDADES PARA REEMPLAZAR O CREAR TEXTOS O ELEMENTOS PEQUEÑOS
     * textContent --> texto sin formato
     * innerHTML --> texto con formato
     * outerHTML --> texto con formato + etiqueta HTML
     * 
     */
    
    let myDiv1 = document.getElementById("idDiv1");
    console.log(myDiv1);
    //CONCATENAR TEXTO + agregarle ESTILO
    myDiv1.style.setProperty("background-color", "red")
    myDiv1.textContent = "Contenido del DIV sin formato";
    myDiv1.textContent +=" Hola caracola";

    let myDiv2 = document.getElementsByClassName("cDiv2");
     // RESULTADO ARRAY DE myDiv2
    console.log(myDiv2);

    // QUERY SELECTOR USAR PARA PILLARLO BIEN 

    myDiv2.textContent = "Hola a todas y a todos";
    // VAMOS A ESCRIBIR CON FORMATO
    myDiv2.innerHTML = "Hola a <strong>TODA</strong> y a todos";
    myDiv2.innerHTML += " , buenas <i>tardes</i>";

    console.log(myDiv2.outerHTML);

    /**
     * append  --> añadir hijo (Node o String) + no te devuelve nada
     * appendChild --> añadir hijo (Node) +  te devuelve el nodo insertado
     */

    const img = document.createElement("img");
    img.src = "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg";
    img.style.setProperty("width", "40px");
    img.alt ="logo JS";
    document.body.appendChild(img);
    console.log(i);

    const myDiv3 = document.createElement("div"); // Me invento miDiv3 para luego colocar miDiv4 alrededor de miDiv3 (más abajo)
    myDiv3.textContent = "Esto es mi Div3 insertado con javascript";
    myDiv3.setAttribute("id", "idDiv3");
    console.log(myDiv3);

    document.body.append(myDiv3);

    /**
 *      insertAdjacent: 3 versiones:
 * insertAdjacentElement (insertPosition, HTMLElement) : para insertar un Element
 * insertAdjacentHTML(insertPosition, string) : para insertar código HTML (similar a innerHTML)
 * insertAdjacentText (inserPosition, string) : para insertar texto (similar a textContent)
 * 
 * llevan 2 parámetros:
 * parámetro1: posición donde va insertado el contenido.
 *  beforebegin: el contenido se inserta ANTES de la etiqueta HTML de apertura
 *  afterbegin: el contenido se inserta DENTRO de la etiqueta HTML, antes de su primer hijo
 *  beforeend: el contenido se inserta DENTRO de la etiqueta HTML, después de su último hijo (=appendChild())
 *  afterend: el contenido se inserta DESPUÉS de la etiqueta HTML de cierre
 * parámetro2: el contenido que se inserta
 */

    /**
  *  <!-- beforebegin -->
  *  <p> 
  *     <!-- afterbegin -->
  *     texto
  *     <!-- beforeend -->
  *  </p>
  *  <!-- afterend -->
  */

    p1.insertAdjacentElement("beforebegin", p2);
    p1.insertAdjacentElement("afterbegin", p2);
    p1.insertAdjacentElement("beforeend", p2);
    p1.insertAdjacentElement("afterend", p2);

    let myDiv4 = document.createElement("div");
    myDiv1.setAttribute("id", "idDiv4");
    myDiv4.textContent("Contenido de Div 4");
    myDiv3.setAttribute("style", "background-color: 'orange'");
    myDiv3.style.setProperty("background-color", "orange");
    myDiv3.style.backgroundColor = "orange";
    myDiv3.insertAdjacentElement("beforebegin", myDiv4);
    myDiv3.insertAdjacentElement("afterbegin", myDiv4);
    myDiv3.insertAdjacentElement("beforeend", myDiv4);
    myDiv3.insertAdjacentElement("afterend", myDiv4);

    // COMO UN BEFORESEND => myDiv3.appendChild(myDiv4);

    myDiv3.insertAdjacentHTML("afterbegin", "<h1>Hola</h1>");
    myDiv3.insertAdjacentText("beforeend", "Hola");
    
}