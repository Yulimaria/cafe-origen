const ventas = require("./datos");

function espacios(ciudad) {
    return ciudad.trim(); // elimina los espacios de las palabras ciudad
}

function minusculas(ciudad) {
    return ciudad.toLowerCase(); // minusculas
}
function mayusculas(ciudad) {
    return ciudad.toUpperCase(); // mayusculas
}


/* 1. CALCULAR EL VALOR DE UNA VENTA */

function valorVenta(venta) {
    // Accedemos a las propiedades del objeto venta.
    // Multiplicamos la cantidad por el precio unitario.
    // Retornamos el importe de esa venta individual.
    return venta.cantidad * venta.precio;
}

/* CALCULAR EL TOTAL VENDIDO */
function totalVendido(ventas) {

    // Inicializamos el acumulador en cero.
    // Aquí guardaremos la suma de los importes.
    let acumulador = 0;

    // Recorremos el arreglo ventas.
    // En cada iteración, venta representa un objeto individual.
    for (const venta of ventas) {

        // Calculamos el importe de la venta actual
        // y lo sumamos al acumulador.
        acumulador += valorVenta(venta);
    }

    // Retornamos la suma de todas las ventas.
    return acumulador;
}


/* CALCULAR LAS UNIDADES VENDIDAS */
function unidadesVendidas(ventas) {

    // Inicializamos el acumulador en cero.
    // Guardaremos la suma de todas las cantidades.
    let acumulador = 0;

    // Recorremos cada objeto del arreglo ventas.
    for (const venta of ventas) {

        // Sumamos la cantidad del objeto actual.
        acumulador += venta.cantidad;
    }

    // Retornamos el total de unidades vendidas.
    return acumulador;
}


/* ENCONTRAR LA VENTA DE MAYOR VALOR */
function ventaMayor(ventas) {

    // Inicializamos el mayor valor en cero.
    // Esta variable almacenará el importe más alto.
    let mayorValor = 0;

    // Inicializamos el registro en null.
    // Aquí guardaremos el objeto de la venta mayor.
    let registroMayor = null;

    // Recorremos todos los objetos del arreglo.
    for (const venta of ventas) {

        // Calculamos el importe de la venta actual.
        const importeActual = valorVenta(venta);

        // Comparamos el importe actual con el mayor encontrado.
        if (importeActual > mayorValor) {

            // Actualizamos el mayor importe.
            mayorValor = importeActual;

            // Guardamos el objeto completo de la venta.
            registroMayor = venta;
        }
    }

    // Retornamos el registro completo, no solamente el importe.
    return registroMayor;
}

/* PROBAR LAS FUNCIONES*/

console.log("Total vendido:", totalVendido(ventas));
console.log("Unidades vendidas:", unidadesVendidas(ventas));
console.log("Venta de mayor valor:", ventaMayor(ventas));

function ticketPromedio(ventas) {

}