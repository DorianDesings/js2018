/*
    Expresiones regulares:
        Son una secuencia de caracteres que forma un patrón de búsqueda, principalmente utilizada para la búsqueda de patrones de cadenas de caracteres u operaciones de sustituciones.

    Página para evaluar expresiones regulares: https://regex101.com/

    sintaxis:
        /patron/
    Banderas:
        i: ignore case. No diferencia entre mayusculas y minúsculas
        g: global. Busca de forma global, es decir, no se para después de la primera coincidencia
*/

const text = document.getElementById('text').textContent
const regEx = /lorem/gi

console.log(regEx.test(text))
console.log(text.includes('Lorem'))