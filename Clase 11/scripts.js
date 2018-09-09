/* Bucles */

/* 
    Indeterminados - No sabemos el número de veces que se va a ejecutar el código

    Bucle while
    while(condición){
        //código a ejecutar
    }    

    Bucle do...while
    do{
        //código a ejecutar
    }while(condición)
*/

let pass = 'hola';

while(pass != 'hola'){
    pass = prompt('Introduzca su contraseña')
}

console.log('Fin del bucle');

do{
    pass = prompt('Introduzca su contraseña')

}while(pass != 'hola')

