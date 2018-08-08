/*
Sintaxis simple:
switch(condición) {
    case n:
        //código
        break;
    case n2:
        //código
    break;
    
    default:
     //código
}

Sintaxis múltiple:
switch(condición) {
    case n:
    case n2:
    case n3:
    case n4:
        //código
        break;
    case n5:
    case n6:
        //código
    break;

    default:
     //código
} 
*/

let num = 13;

switch(num){
    case 1: console.log('Num vale 1');
    break;
    case 2: console.log('Num vale 2');
    break;
    case 3: console.log('Num vale 3');
    break;
    default: console.log('Num no vale ni 1 ni 2 ni 3');
}

switch(num){
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
    console.log('Num es un número impar');
    break;
    case 2:
    case 4:
    case 6:
    case 8:
    console.log('Num es un número par');
    break;

    default: console.log('Num no está contemplado en los casos');
}