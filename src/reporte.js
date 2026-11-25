const ventas = require("./datos"); // o donde tengas exportado tu arreglo ventas
 const {
  totalVendido,
  totalVendidoM,
  unidadesVendidas,
  unidadesVendidasM,
  ventasPorCiudad,
  ventasPorCiudadM,
  unidadesPorProducto,

} = require("./analitica"); // importe  las funciones que tengo en analitica de datos
// forma para dar el COP

const formatoCOP = (valor) => `$${Number(valor || 0).toLocaleString("es-CO")}`;

console.log(`El resumen general`)
console.log(`Total Vendido`, totalVendidoM(ventas))
console.log(`Unidades vendidas`, unidadesPorProducto(ventas))
