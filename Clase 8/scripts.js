/* 
Operador ternario
(condición) ? true : false

(condición) ? 
    (primera sentencia,
    segunda sentencia)
    :
    (primera sentencia,
    segunda sentencia)
*/

let num = 3;

/* if(num % 2 == 0) console.log(`${num} es par`);
else console.log(`${num} es impar`); */

(num % 2 == 0) ? console.log(`${num} es par`) : console.log(`${num} es impar`);

(num % 2 == 0) ? 
    (
        console.log(`${num} es par`),
        console.log(`${num} es par 2`)
    )
     : 
    (
        console.log(`${num} es impar`),
        console.log(`${num} es impar`)
    )