# Análisis de ventas de Café Origen

## ¿Qué es este proyecto?

Este proyecto sirve para revisar las ventas de ejemplo de Café Origen. Los datos están en `datos.js`, las funciones que hacen los cálculos en `analitica.js` y el reporte que se ve en consola en `reporte.js`.

## ¿Cómo se ejecuta?

Para verlo, hay que tener Node.js instalado. Abre una terminal en la carpeta `src` y ejecuta:

```bash
node reporte.js
```

El reporte aparecerá en la misma consola. No hace falta instalar otros paquetes.

## ¿Qué preguntas responde?

- ¿Cuánto se vendió en total?
- ¿Cuántas unidades se vendieron de cada producto?
- ¿Cuánto se vendió en cada ciudad? Las variantes como `Bogotá` y `bogota` se juntan en el mismo grupo.
- ¿Cuántas ventas hubo en un día, cuánto sumaron y cuál fue el ticket promedio?
- ¿Qué pasa si consulto un día que no tuvo ventas?

El ticket promedio solo cuenta las ventas con cantidad mayor que cero. Si ese día no hubo ventas válidas, el reporte dice que no aplica.
