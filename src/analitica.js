function normalizarCiudad(ciudad) {
    return String(ciudad)
        .trim()
        .replace(/\s+/g, " ")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

/* 1. CALCULAR EL VALOR DE UNA VENTA */

function valorVenta(venta) {
    // Accedemos a las propiedades del objeto venta.
    // Multiplicamos la cantidad por el precio unitario.
    // Retornamos el importe de esa venta individual.
    let total = venta.cantidad * venta.precio;
    return total
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
    if (ventas.length === 0) {
        return null;
    }

    let acumulador = ventas[0]
    for (const venta of ventas) {
        if (valorVenta(acumulador) < valorVenta(venta)) {
            acumulador = venta
        }
    }
    return acumulador
}



/* PROBAR LAS FUNCIONES*/

// console.log("Total vendido:", totalVendido(ventas));
// console.log("Unidades vendidas:", unidadesVendidas(ventas));
//  console.log("Venta de mayor valor:", ventaMayor(ventas));

//Crea ticketPromedio(ventas): el valor total dividido
// entre la cantidad de ventas válidas (las que tienen cantidad mayor que 0).
function ticketPromedio(ventas) {
    const ventasValidas = ventas.filter(venta => venta.cantidad > 0);
    if (ventasValidas.length === 0) {
        return null;
    }

    return totalVendido(ventasValidas) / ventasValidas.length;
}

function ventasPorCiudad(ventas, ciudad) {
    const ciudadBuscada = normalizarCiudad(ciudad); // 
    let acumulador = 0;

    for (const venta of ventas) {
        if (normalizarCiudad(venta.ciudad) === ciudadBuscada) { 
         
            acumulador += valorVenta(venta);
        }
    }

    return acumulador;
}
//console.log(ventasPorCiudad(ventas, "medellin")); 

function totalVendidoM (ventas){
    const acumuladorVenta = ventas.reduce((acm,item) => acm + (item.cantidad* item.precio),0);
//aca lo que hice fue en una funcion flecha: primero declare una variable donde almacene la información
// luego llamando el arreglocon .reduce declaramos el acumulador acm y el item que con lo que llamo cada atributo.
// ya le estoy diciendo que acm donde inicia en 0 sume los datos de la multiplicacion
//(acm, item) => ... es la función flecha que va dentro del .reduce().
    return acumuladorVenta;
}

function unidadesVendidasM (ventas){
    const sumatotal = ventas.reduce((acm, ventas) => acm + ventas.cantidad,0);
    return sumatotal
}
//console.log(unidadesVendidasM(ventas));
// se llama la funcion desde afuera 


function ventasPorCiudadM(ventas, ciudad) {
  const ciudadBuscada = normalizarCiudad(ciudad);
  //aca lo que hiciste fue llamar la funcion de normalizarCiudad para reutilizarla

  const filtro = ventas.filter(
    (item) => normalizarCiudad(item.ciudad) === ciudadBuscada
  );

  return filtro.reduce(
    (acumulador, item) => acumulador + valorVenta(item),
    0
  );
}

function comparacion(func1, func2){
    if (func1===func2){
        return"Ok"
    }else{
        return "diferente"
    }
        
}
// console.log(comparacion(totalVendidoM(ventas),totalVendido(ventas)))

function comparation (func3, func4){
    if (func3===func4){
        return "ok"    
    }else{
        return"diferente"
    }
}
// console.log(comparation(unidadesVendidas(ventas),unidadesVendidasM(ventas)))

function comparation3 (func5, func6){
    if (func5===func6){
      return "ok"  
    }else{
        return"diferente"
    }
}
// console.log(comparation3(ventasPorCiudad(ventas), unidadesVendidasM(ventas)))

const normalizarTexto = (texto) =>
  String(texto ?? "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");

function totalPorCiudad(ventas) {
  const totales = {};
  const nombresVisibles = {};

  for (const venta of ventas) {
    const ciudad = normalizarTexto(venta.ciudad);
    const nombreVisible = nombresVisibles[ciudad] || String(venta.ciudad).trim();
    nombresVisibles[ciudad] = nombreVisible;
    totales[nombreVisible] = (totales[nombreVisible] || 0) + venta.cantidad * venta.precio;
  }

  return totales;
}

// console.log(totalPorCiudad(ventas));
function unidadesPorProducto(ventas){
    return ventas.reduce((acm, item) => {
    // acumulador, item cada objeto del arreglo
    //para que la función devuelva el resultado final hacia afuera cuando la invoques.    
    const nombre = item.producto;
    // guardar el texto del producto actual
    const unidades= item.cantidad;
    // Para guardar el número de artículos vendido
//Ahora debes decirle al acumulador que busque si ya existe una etiqueta 
// con ese nombre y le sume las unidades:   
 acm[nombre] = (acm[nombre] || 0) + unidades;
 return acm;
}, {});
}
// 
function topProductosPorValor(ventas, k){
    const valorPorProducto = ventas.reduce((acm, item)=>{
        const subtotal = item.cantidad * item.precio;
        acm[item.producto] = (acm[item.producto] || 0) + subtotal;
        return acm;
    }, {});

    return Object.entries(valorPorProducto)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([producto]) => producto);
}

function ventasDelDia(ventas, fecha) {
    return ventas.filter(venta => venta.fecha === fecha);
}

//console.log(ventasPorCiudadM(ventas, "medellin"));

module.exports={
  totalVendido,
  totalVendidoM,
  unidadesVendidas,
  unidadesVendidasM,
  ventasPorCiudad,
  ventasPorCiudadM,
  unidadesPorProducto,
  totalPorCiudad,
  ticketPromedio,
  ventasDelDia,
 
}
