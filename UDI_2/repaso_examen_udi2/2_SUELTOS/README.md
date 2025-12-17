# 📝 Examen Práctico DOM – JavaScript

**Asignatura:** DWEC  
**Unidad:** DOM, Eventos y Formularios  
**Duración:** 90 minutos  
**Material permitido:** Ninguno

---

## 🔹 Ejercicio 1 – Gestión dinámica de bloques (4 puntos)

Al cargar la página, se debe generar dinámicamente mediante JavaScript lo siguiente:

### 📌 Parte A (2 puntos)

1. Un botón con el texto **“Crear bloques”**.
2. Al pulsar el botón, se deben crear **15 bloques `<div>`**, cada uno con:

   * Un número aleatorio entre **50 y 150** (incluidos).
   * Un color de fondo **azul claro**.
   * Un tamaño inicial de **50px x 50px**.
3. Cada bloque debe aparecer en una **fila nueva**.

---

### 📌 Parte B (2 puntos)

A cada bloque se le debe asociar el siguiente comportamiento:

* Al **pasar el ratón por encima**, el bloque:

  * Aumenta su tamaño a **80px x 80px**.
* Al **salir el ratón**, vuelve a su tamaño original.
* Al **hacer doble clic** sobre un bloque:

  * Se elimina del DOM.
  * Se muestra por consola:

    ```
    Bloque XX eliminado
    ```

    donde **XX** es el número que contenía el bloque.

⚠️ **No se permite usar `innerHTML`.**

---

## 🔹 Ejercicio 2 – Formulario dinámico y validaciones (6 puntos)

Se debe crear dinámicamente mediante JavaScript un **formulario**, con la siguiente estructura:

---

### 📌 Parte A – Creación del formulario (2 puntos)

El formulario debe contener:

1. Un campo de texto para introducir un **nombre**.
2. Un grupo de **4 checkboxes**, cada uno con:

   * Un número aleatorio entre **1 y 100**.
   * El valor del checkbox debe ser ese número.
3. Un botón con el texto **“Procesar”**.
4. Un botón con el texto **“Resetear”**.

---

### 📌 Parte B – Comportamiento de los checkboxes (2 puntos)

* Al marcar un checkbox, se debe mostrar por consola:

  ```
  Número XX marcado
  ```
* Al desmarcarlo:

  ```
  Número XX desmarcado
  ```

---

### 📌 Parte C – Botón “Procesar” (1,5 puntos)

Al pulsar el botón **Procesar**:

1. Se debe comprobar que el campo **nombre no esté vacío**.
2. Se deben sumar los valores de los **checkboxes marcados**.
3. Mostrar por consola:

   ```
   Usuario: NOMBRE
   Suma seleccionada: TOTAL
   ```

⚠️ Si el nombre está vacío, se debe mostrar:

```
Error: nombre obligatorio
```

---

### 📌 Parte D – Botón “Resetear” (0,5 puntos)

Al pulsar **Resetear**:

* Se desmarcan todos los checkboxes.
* Se vacía el campo nombre.
* Se muestra por consola:

  ```
  Formulario reiniciado
  ```

---

## ⚠️ Condiciones obligatorias

* Todo debe crearse **exclusivamente desde JavaScript**.
* Uso obligatorio de:

  * `createElement`
  * `appendChild`
  * `addEventListener`
* ❌ Prohibido:

  * `innerHTML`
  * Atributos inline (`onclick`, `onchange`, etc.)
* El código debe estar contenido dentro de un bloque con:

  ```js
  "use strict";
  ```

---

## 🎯 Objetivo del examen

* Evaluar el dominio del **DOM**.
* Uso correcto de **eventos**.
* Trabajo con **formularios** y **validaciones**.
* Correcta organización del código y lógica de programación.

---

💡 **Recomendación:**
Si eres capaz de resolver correctamente estos ejercicios, el niv
