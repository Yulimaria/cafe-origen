const ventas = require("./datos"); // o donde tengas exportado tu arreglo ventas
 const {
  totalVendido,
  totalVendidoM,
  unidadesVendidas,
  unidadesVendidasM,
  ventasPorCiudad,
  ventasPorCiudadM,
} = require("./analitica"); // importe  las funciones que tengo en analitica de datos

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

  for (const venta of ventas) {
    const ciudad = normalizarTexto(venta.ciudad);
    totales[ciudad] = (totales[ciudad] || 0) + venta.cantidad * venta.precio;
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
}) 

}
console.log(unidadesPorProducto(ventas));
// 
topProductosPorValor(ventas, k){
    const valorPorProducto = ventas.reduce((acm, item)=>{
        const subtotal = item.cantidad * item.precio;
        acm[item.producto] = (acm[item.producto] || 0) + subtotal;
        return acm
    })
}return Object.entries(valorPorProducto)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([producto]) => producto);

