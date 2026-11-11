---
description: Formulario de contabilización en ContaPortable — tipos de documento que se procesan y el parámetro que define cómo se agrupan las partidas de ventas.
---

# 🗂️ **Formulario de contabilización**

El formulario de contabilización es la pantalla desde la que se decide qué documentos se van a contabilizar en un período.

## 📋 **1. Documentos que se procesan**

Desde este formulario se pueden contabilizar:

- Cheques
- Depósitos
- Quedans
- Retaceos
- Ventas

Cada tipo se selecciona de forma independiente, de modo que puede contabilizar por bloques y revisar los resultados antes de continuar con el siguiente grupo.

## 🏢 **2. Agrupación de las partidas de ventas**

La forma en que se contabilizan las ventas se define con el parámetro `gcContaFactX`:

| Valor | Comportamiento |
| ----- | -------------- |
| **`DEPTO`** | Agrupa todas las facturas del período por departamento y genera **una sola partida por departamento**. |
| **Cualquier otro valor** | Contabiliza las facturas de forma individual, generando **una partida por cada venta**. |

!!! tip "Cuál conviene usar"
    Use `DEPTO` cuando necesite una contabilidad resumida por centro de costo y no requiera el detalle documento por documento. Deje el valor individual cuando necesite rastrear cada factura en su propia partida.

!!! info "Revise el resultado tras el primer cierre"
    Después de cambiar este parámetro, contabilice un período de prueba y verifique el número de partidas generadas antes de aplicarlo al cierre definitivo.

## 🔗 **3. Páginas relacionadas**

- [Contabilización automática](contabilizacion_automatica.md#ventas-agrupadas-por-departamento)
- [Captura y edición de Partida Contable](captura_partida_contable.md)
- [Control de cierre de períodos contables](control_periodos.md)
