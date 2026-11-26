const ventas = require("./datos"); // o donde tengas exportado tu arreglo ventas
const {
  totalVendido,
  totalVendidoM,
  unidadesPorProducto,
  ventasDelDia,
  totalPorCiudad,
  ticketPromedio,
} = require("./analitica"); // importe  las funciones que tengo en analitica de datos
// forma para dar el COP

const formatoCOP = (valor) => `$${Number(valor || 0).toLocaleString("es-CO")}`;

console.log(`El resumen general`)
console.log(`Total vendido: ${formatoCOP(totalVendidoM(ventas))}`)
console.log(`Unidades vendidas por producto:`)
console.table(unidadesPorProducto(ventas))

console.log(`Ventas por ciudad:`)
for (const [ciudad, total] of Object.entries(totalPorCiudad(ventas))) {
  console.log(`${ciudad}: ${formatoCOP(total)}`)
}

function mostrarResumenDelDia(fecha) {
  const ventasDelDiaSeleccionado = ventasDelDia(ventas, fecha);
  const total = totalVendido(ventasDelDiaSeleccionado);

  console.log(`\nResumen del ${fecha}`);
  console.log(`Cantidad de ventas: ${ventasDelDiaSeleccionado.length}`);
  console.log(`Total vendido: ${formatoCOP(total)}`);
  const promedio = ticketPromedio(ventasDelDiaSeleccionado);
  console.log(`Ticket promedio: ${promedio === null ? "No aplica (sin ventas válidas)" : formatoCOP(promedio)}`);
}

mostrarResumenDelDia("2026-09-01"); // Día con ventas
mostrarResumenDelDia("2026-09-07"); // Día sin ventas
