/*

Objeto Math

Objeto estático

Tenemos que usar su nombre para utilizarlo

Propiedades:
    Math.E - Math.Pi
Métodos:
    Math.abs(x) Devuelve el valor absoluto de x
    Math.ceil(x) Devuelve el entero más grande mayor o igual que un número.
    Math.floor(x) Devuelve el entero más pequeño menor o igual que un número.
    Math.pow(x, y) Devuelve la potencia de x elevado a y
    Math.sqrt(x) Devuelve la raiz cuadrada de x
    Math.random() Genera un número pseudoaleatorio entre 0 y 1
    Math.round(x) Devuelve el valor de un número redondeado al entero más cercano.
    Math.sign(x) Devuelve el signo de la x, que indica si x es positivo, negativo o cero.
*/

console.log(Math.E);
console.log(Math.PI);

let num = 5.9;

console.log(Math.abs(num));

console.log(Math.ceil(num));

console.log(Math.floor(num));

console.log(Math.pow(3,3));

console.log(Math.round(Math.random()*100));

//console.log(Math.random() * (max - min)+min);

console.log(Math.round(Math.random() * (100 - 50)+50));

console.log(Math.sign(0)); // -1 | 0 | 1

console.log(Math.sqrt(2));





