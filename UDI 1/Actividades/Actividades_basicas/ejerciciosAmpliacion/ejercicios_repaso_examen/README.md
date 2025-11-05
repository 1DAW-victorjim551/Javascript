1️⃣ Solo letras → /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/
Solo permite letras, sin números ni símbolos.

2️⃣ Solo números → /^\d+$/
Solo dígitos (uno o más).

3️⃣ Número decimal → /^\d+(\.\d+)?$/
Número entero o con decimales usando punto.

4️⃣ Nombre y apellidos válidos → /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/
Permite letras y espacios, sin números ni caracteres especiales.

5️⃣ Email válido → /^[\w.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
Valida un correo electrónico tipo usuario@dominio.com
.
6️⃣ Contraseña segura → /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
Debe tener al menos 8 caracteres, 1 mayúscula, 1 minúscula, 1 número y 1 símbolo.

7️⃣ Código postal español (5 dígitos) → /^[0-5]\d{4}$/
Empieza por 0–5 y tiene 5 dígitos.

8️⃣ Teléfono español (9 dígitos) → /^[679]\d{8}$/
Empieza por 6, 7 o 9 y tiene 9 cifras.

9️⃣ Fecha formato dd/mm/yyyy → /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
Valida fechas con ceros iniciales y separador /.

🔟 Hora formato 24h (hh:mm) → /^([01]\d|2[0-3]):[0-5]\d$/
Horas válidas de 00:00 a 23:59.

11️⃣ URL sencilla → /^https?:\/\/[^\s/$.?#].[^\s]*$/i
Reconoce URLs que empiecen por http o https.

12️⃣ Palabra que empiece por vocal → /^[aeiouáéíóúAEIOUÁÉÍÓÚ]/
Coincide con palabras que comienzan por una vocal.

13️⃣ Palabra que empiece por mayúscula → /^[A-ZÁÉÍÓÚÑ]/
Primera letra debe ser mayúscula.

14️⃣ Frase que termine en punto o signo de exclamación/interrogación → /[.!?]$/
Termina en punto, signo de exclamación o interrogación.

15️⃣ Solo espacios en blanco → /^\s+$/
Contiene solo espacios, tabs o saltos de línea.

16️⃣ DNI español (8 números + letra) → /^\d{8}[A-Za-z]$/
Ejemplo válido: 12345678Z.

17️⃣ Color hexadecimal CSS → /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
Ejemplos válidos: #FF00FF, #F0F, FF00FF.

18️⃣ Archivo con extensión .jpg o .png → /^.+\.(jpg|png)$/i
Valida nombres de archivo de imagen.

19️⃣ Frase que contenga al menos un número → /\d+/
Coincide con cualquier texto que contenga números.

20️⃣ Texto que no contenga números → /^[^\d]+$/
Solo letras, símbolos o espacios — ningún número permitido.

Para coger bien palabras aunque hayan uno o mas espacios
let palabras = cadena.trim().split(/\s+/);