📝 EXAMEN PRÁCTICO – UT2
DOM, Eventos y Formularios

⏱ Tiempo recomendado: 1 hora y 30 minutos
📁 Archivo a entregar: exam_dom_nombreApellido.js

⚠️ IMPORTANTE

Todos los elementos HTML indicados deberán crearse e insertarse desde JavaScript, salvo que se indique lo contrario.

Se deben controlar posibles errores.

Se valorará el uso correcto de eventos, DOM y validaciones.

No se permite el uso de librerías externas.

🔴 EJERCICIO 1 (2 puntos) – DOM + Eventos + Arrays

Crea dinámicamente:

Un botón con el texto “Nuevo número”

Un botón con el texto “Eliminar último”

Una lista desordenada (<ul>)

Funcionamiento:

Al pulsar “Nuevo número”, se añadirá a la lista un <li> con un número aleatorio entre 1 y 100.

Al pulsar “Eliminar último”, se eliminará el último elemento de la lista.

Si se intenta eliminar un elemento cuando la lista está vacía, no debe producirse error y se mostrará un mensaje por consola.

🔴 EJERCICIO 2 (2,5 puntos) – DOM + Eventos + Lógica

Crea dinámicamente una tabla de 10x10 donde:

Cada celda contenga un número consecutivo empezando en 1.

Además, crea:

Un botón “Resaltar primos”

Un botón “Limpiar tabla”

Funcionamiento:

Al pulsar “Resaltar primos”, todas las celdas que contengan números primos deberán ponerse con fondo amarillo.

Al pulsar “Limpiar tabla”, todas las celdas deberán volver a su estado original (sin color de fondo).

⚠️ Importante:

El cálculo de números primos debe hacerse mediante una función auxiliar.

🔴 EJERCICIO 3 (2 puntos) – Eventos + Checkboxes

Crea dinámicamente:

20 checkboxes

Cada checkbox tendrá:

Un label con un número consecutivo desde 0

Un value aleatorio entre 100 y 200

Crea también los siguientes botones:

“Marcar todos”

“Desmarcar todos”

“Aumentar tamaño pares”

“Restaurar tamaño”

Funcionamiento:

Al hacer click en un checkbox, se mostrará por consola:

checkXXX marcado

checkXXX desmarcado
siendo XXX su value.

“Aumentar tamaño pares” aumentará el tamaño solo de los checkboxes con value par.

“Restaurar tamaño” devolverá todos los checkboxes a su tamaño original.

🔴 EJERCICIO 4 (1,5 puntos) – Eventos de ratón + DOM

Crea dinámicamente:

3 elementos <p> con texto

Un botón “Reaparecer”

Eventos:

Al pasar el ratón fuera de un <p> → el párrafo se oculta

Al hacer doble click sobre un <p> → el párrafo se elimina del DOM

Al pulsar “Reaparecer”, solo reaparecerán los párrafos ocultos, no los eliminados

🔴 EJERCICIO 5 (2 puntos) – Formularios + Validación

Crea un formulario con:

Un campo para introducir un DNI

Un botón de envío

Validaciones:

El DNI se validará:

Al perder el foco

Al enviar el formulario

Si la letra no es correcta:

Se cancelará el envío

Se mostrará un mensaje de error en pantalla

⚠️ Recuerda usar el algoritmo oficial del DNI.

🧠 CONSEJOS (esto es muy “profe”)

Usa addEventListener, no eventos en línea

Controla arrays vacíos

No repitas código (funciones auxiliares)

Diferencia ocultar de eliminar

Lee dos veces cada enunciado (hay trampas)

🔥 Cómo te recomiendo usar este examen

Hazlo sin mirar nada

Cronométrate (90 min)

Cuando termines:

Si quieres, me lo pasas ejercicio por ejercicio

O dime: “corrígeme el ejercicio 3”

O “dame pistas, no código” (como te gusta)

Si haces este examen bien, apruebas UT2 sin problemas.
Cuando quieras, empezamos 💪