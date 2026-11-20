Diccionario de datos:
length // aca se obtiene la longitud
console.log(ventas.length) // aca se obtiene la longitud
console.log(ventas[0]); // ingreso a la posicion del array
console.log(ventas[ventas.length-1]);// me devuelvela ultima posicion
console.log(ventas[4].producto); // ingreso al arreglo 4 propiedad producto


plan en pseudocódigo de cada indicador:

Pruebas de indicadores (arreglo completo, un registro y arreglo vacío):

| Función | `ventas` completo | `[ventas[0]]` | `[]` |
|---|---:|---:|---:|
| `totalVendido` | 985000 | 84000 | 0 |
| `unidadesVendidas` | 21 | 2 | 0 |
| `ventaMayor` | Venta con id 10 | Venta con id 1 | `null` |
| `ticketPromedio` | 89545.4545... | 84000 | `null` |
| `ventasPorCiudad(..., "medellin")` | 356000 | 84000 | 0 |

`ventaMayor([])` devuelve `null` porque no existe un registro que pueda ser el mayor. `ticketPromedio([])` también devuelve `null`, porque no se puede calcular un promedio sin ventas válidas. Las funciones de suma devuelven `0` para el arreglo vacío. `ticketPromedio` solo incluye ventas con `cantidad > 0`.

Trazas manuales comprobadas contra los resultados del programa:

| Indicador | Traza | Resultado |
|---|---|---:|
| `totalVendido(ventas)` | id 1: 2 × 42000 = 84000; id 2: 1 × 26000 = 26000; id 3: 1 × 95000 = 95000; id 4: 1 × 42000 = 42000; id 5: 3 × 45000 = 135000; id 6: 2 × 26000 = 52000; id 7: 1 × 120000 = 120000; id 8: 0 × 42000 = 0; id 9: 2 × 45000 = 90000; id 10: 4 × 42000 = 168000; id 11: 1 × 95000 = 95000; id 12: 3 × 26000 = 78000. Suma: 84000 + 26000 + 95000 + 42000 + 135000 + 52000 + 120000 + 0 + 90000 + 168000 + 95000 + 78000. | 985000 |
| `ventasPorCiudad(ventas, "medellin")` | Se normalizan las ciudades y coinciden los ids 1, 4, 5 y 11: 84000 + 42000 + 135000 + 95000. | 356000 |