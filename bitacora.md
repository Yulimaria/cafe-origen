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

# Bitácora — Café Origen (MiniReto 3)

## `totalVendidoM(ventas)`
- **¿Qué recorro?** El arreglo `ventas` completo.
- **¿Qué filtro?** Nada, tomo todas las ventas.
- **¿Qué transformo?** Cada venta en su valor (`cantidad * precio`).
- **¿Qué acumulo?** La suma total en dinero partiendo desde `0`.
- **¿Cómo agrupo?** No agrupa; deja un solo número con el total.

## `unidadesVendidasM(ventas)`
- **¿Qué recorro?** Todo el arreglo `ventas`.
- **¿Qué filtro?** Ninguno, reviso cada registro.
- **¿Qué transformo?** Cada venta en las unidades vendidas (`item.cantidad`).
- **¿Qué acumulo?** La suma de unidades empezando en `0`.
- **¿Cómo agrupo?** No agrupa; devuelve un único total de unidades.

## `ventasPorCiudadM(ventas, ciudad)`
- **¿Qué recorro?** El arreglo `ventas`.
- **¿Qué filtro?** Solo las ventas cuya ciudad coincida con la buscada, limpiando espacios y pasando a minúscula (`trim().toLowerCase()`).
- **¿Qué transformo?** El texto de la ciudad para comparar sin líos y cada venta filtrada en su subtotal (`cantidad * precio`).
- **¿Qué acumulo?** El dinero acumulado de esa ciudad desde `0`.
- **¿Cómo agrupo?** No arma grupos de todas las ciudades; saca el total de una sola.

## `totalPorCiudad(ventas)`
- **¿Qué recorro?** Todo el arreglo `ventas`.
- **¿Qué filtro?** Nada, paso por todas para armar el resumen.
- **¿Qué transformo?** La ciudad a clave normalizada (sin espacios extra y en minúscula) y cada venta a su valor (`cantidad * precio`).
- **¿Qué acumulo?** El subtotal dentro de la clave que le toca a cada ciudad (`grupos[ciudad] = (grupos[ciudad] || 0) + subtotal`).
- **¿Cómo agrupo?** En un objeto (`{}`) usando el nombre normalizado de la ciudad como llave para que `"Medellín"` y `"medellín"` sumen en el mismo lado.

## `unidadesPorProducto(ventas)`
- **¿Qué recorro?** El arreglo `ventas`.
- **¿Qué filtro?** Nada, tomo todas las ventas.
- **¿Qué transformo?** Cada venta en el par producto y cantidad vendida.
- **¿Qué acumulo?** Las unidades por cada producto (`acum[producto] = (acum[producto] || 0) + item.cantidad`).
- **¿Cómo agrupo?** En un objeto (`{}`) con el nombre del producto como clave y la suma de unidades como valor.

## `topProductosPorValor(ventas, k)`
- **¿Qué recorro?** Primero `ventas` para sumar lo que generó cada producto, y después el arreglo de pares que sale de `Object.entries(...)`.
- **¿Qué filtro?** Con `.slice(0, k)` me quedo solo con los `k` primeros del ranking.
- **¿Qué transformo?** Primero sumo el valor por producto, luego ordeno de mayor a menor con `.sort((a, b) => b[1] - a[1])` sobre el arreglo nuevo (para no tocar `ventas`), y al final saco solo el nombre del producto con `.map(...)`.
- **¿Qué acumulo?** El total en dinero de cada producto en un objeto antes de ordenar.
- **¿Cómo agrupo?** Primero junto el dinero por producto en un objeto, lo paso a `Object.entries` para ordenarlo sin alterar `ventas`, recorto `k` elementos y dejo solo los nombres.