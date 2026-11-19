const ventas = require('./datos.js');

/* Crea un archivo src/explorar.js que importe las ventas y muestre:
la cantidad de registros, el primer y el último registro, la propiedad 
producto del registro en la posición 4 y la tabla completa con console.table*/

// 2. Obtener los datos solicitados en variables
console.log(ventas.length) // aca se obtiene la longitud
console.log(ventas[0]); // ingreso a la posicion del array
console.log(ventas[ventas.length-1]);// me devuelvela ultima posicion
console.log(ventas[4].producto); // ingreso al arreglo 4 propiedad producto
console.table(ventas)


