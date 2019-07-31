/*
    Expresiones regulares:
        Son una secuencia de caracteres que forma un patrón de búsqueda, principalmente utilizada para la búsqueda de patrones de cadenas de caracteres u operaciones de sustituciones.

    Página para evaluar expresiones regulares: https://regex101.com/

    sintaxis:
        /patron/
    Banderas:
        i: ignore case. No diferencia entre mayusculas y minúsculas
        g: global. Busca de forma global, es decir, no se para después de la primera coincidencia

    Comodines:
        -Sustitución: Define un comodín dentro del patron. El símbolo es el "."

        -Listado de caracteres válidos: Entre corchetes se pone una lista de los caracteres válidos. 
        [aeiou] Con esto cogeríamos todas las vocales

        -Rangos: Entre corchetes si ponemos un guión entre dos caracteres establecemos un rango. [a-z] Todas las letras minúsculas.
        Tabla ASCII https://ascii.cl/es/

        -Mezcla entre rangos y listas: 
            Podemos unir los dos anteriores en una sola expresión. [0-5ou] Serían números del 0 al 5, la letra "o" y la letra "u"

        -Cadenas completas:
            Para establecer una cadena completa debe ir entre paréntesis, si queremos más palabras irán separadas por un pipe. (lorem|amet) es válida la palabra "lorem" y la palabra "amet"

*/

const text = document.getElementById('text').textContent
const regEx = /lorem/gi
const regEx2 = new RegExp('lorem', 'gi')
const regEx3 = new RegExp('/lorem/', 'gi')

console.log(regEx.test(text))
console.log(text.includes('Lorem'))