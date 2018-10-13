/* 
2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
    triángulo = b * h/2
    rectángulo = b * h
    círculo = π * r2 (pi * radio al cuadrado)
*/

let figure = prompt('Introduce la figura geómetrica de la que quieres calcular el área: triangle, rectangle or circle')

let base;
let height;
let radius;

switch(figure){
    case 'triangle':
        base=prompt('Introduce la base del triángulo')
        height=prompt('Introduce la altura del triángulo')
        console.log(`El área del triángulo es ${(base*height)/2}`);
        break
    case 'rectangle':
        base=prompt('Introduce la base del rectángulo')
        height=prompt('Introduce la altura del rectángulo')
        console.log(`El área del rectángulo es ${base*height}`);
        break
    case 'circle':
        radius=prompt('Introduce el radio del círculo')
        console.log(`El área del círculo es ${Math.PI * Math.pow(radius,2)}`);
        break
    default: console.log('La figura geométrica no es válida');
}