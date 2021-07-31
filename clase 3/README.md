<!--
#3 - Strings - Curso básico de JavaScript 2018
https://www.youtube.com/watch?v=dxq2iF6kOUU
-->
[![imagen](https://img.youtube.com/vi/dxq2iF6kOUU/hqdefault.jpg)](https://www.youtube.com/watch?v=dxq2iF6kOUU)

# STRINGS

Nomenclatura del punto para uso de propiedades y metodos:
```js
*cadena.metodo(); //con parentesis para metodos
*cadena.propiedad;
```
* Propiedades: Son las caracterisiticas que la cadena tiene por ser una cadena. Ej: Longitud.

   ``` js 
   let cadena = "Hola Mundo";
   cadena.length; //Devuelve la longitud de la cadena
   ```

* Método: Es todo aquello que la cadena puede hacer. Ej: convertirse en mayúsculas.
    ``` js 
    let cadena = "Hola Mundo";

    cadena.toUpperCase();   //devuelve la caden en mayusula  
    
    cadena.toLowerCase();   //devuelve la cadena en minuscula
    
    cadena.IndexOf('hola'); //devuelv la posicion en la que se encuentra el string, si no lo encuentra devuelve -1
   
    cadena.replace('valor a buscar', 'valor nuevo') //remplaza el fragmento de la cadena que digamos y pone el valor nuevo.
    
    cadena.substring(inicio [,fin]) //Extrae los caracteres desde inicio hasta fin (Si no se incluye el fin extrae hasta el final)
    
    cadena.slice(inicio [,fin]) //Igual que substring pero admite valores negativos, si ponemos valores negativos empezará desde atrás (Si no se incluye el final extrae hasta el final)
    
    cadena.trim() //Elimina los espacios al inicio y al final de la cadena

    //--ES6--
    cadena.startsWith(valor [,inicio]) //Sirve para saber si la cadena empieza con ese valor. Devuleve true o false
    
    cadena.endsWith(valor [,longitud]) //Sirve para saber si la cadena termina con ese valor. Devuleve true o false

    cadena.includes(valor[,inicio]) //Igual que indexOf pero devuelve true o false

    cadena.repeat(valor) //Repite el string el número de veces que le indiquemos.
    ```
*Más metodods y porpiedades en [w3schools](https://www.w3schools.com/jsref/jsref_obj_string.asp)
