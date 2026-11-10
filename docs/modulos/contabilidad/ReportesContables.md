---
description: Documentación de los reportes contables del módulo de contabilidad en ContaPortable.
---

# 📊 Reportes contables

Esta página reúne los reportes del módulo de contabilidad para revisar movimientos, saldos, antigüedad, partidas y exportaciones de información financiera.

!!! info "Objetivo general"
    Los reportes contables permiten verificar el comportamiento de cada cuenta, revisar los movimientos del período y preparar cierres, conciliaciones y análisis financieros con información confiable.

!!! tip "Cambios recientes incorporados"
    Estos reportes recibieron las siguientes mejoras:

    - vista previa de **varias partidas a la vez**, cada una con su propio encabezado, subtotal y página;
    - la descripción de las líneas de gasto en el **Libro Auxiliar** ahora incluye el proveedor y el código de generación, cuando aplica;
    - en **antigüedad de saldos de clientes** (CLI21 a CLI25), un documento invalidado en un mes posterior ya no borra el cargo original: el cargo se mantiene en su período y la reversión se muestra aparte;
    - los montos de antigüedad de saldos se redondean a 2 decimales, para evitar residuos que descuadraban los totales;
    - más espacio para el nombre de la empresa en los encabezados impresos, para que no se corte cuando es largo.

<!-- Se agrega un diagrama para resumir la estructura funcional de los reportes contables -->
!!! tip "Diagrama de los reportes contables"
    ``` mermaid
    graph TD
      A[Reportes contables]:::root

      subgraph "Categorías principales"
        B[1. Mayor y auxiliar]
        C[2. Partidas]
        D[3. Saldos y antigüedad]
        E[4. Exportación e impresión]
      end

      A --> B
      A --> C
      A --> D
      A --> E

    click B "#1-mayor-y-auxiliar" "Ir al mayor y auxiliar"
    click C "#2-partidas" "Ir a partidas"
    click D "#3-saldos-y-antiguedad" "Ir a saldos y antigüedad"
    click E "#4-exportacion-e-impresion" "Ir a exportación e impresión"
    ```
---

## 📌 Introducción

El módulo de contabilidad incluye reportes para revisar la información financiera con detalle. Entre los más utilizados están el **Libro Auxiliar**, el **listado de partidas** y los reportes de **saldos y antigüedad**.

Estos reportes están pensados para apoyar:

- la revisión de cargos y abonos por cuenta;
- la validación de movimientos del período;
- la conciliación con clientes y proveedores;
- la preparación de cierres contables y análisis financiero.

---

## **1. Mayor y auxiliar**

### 1.1 Libro Auxiliar Mayor

!!! info "Descripción del reporte"
    El reporte de **Libro Auxiliar** permite revisar, cuenta por cuenta, los movimientos registrados en un período determinado, con el detalle de cargos y abonos. Es de uso frecuente para auditoría, conciliación contable y análisis financiero.

    Puede filtrarse por:

    - período o fecha;
    - cuenta contable o rango de cuentas;
    - tipo de movimiento;
    - datos seleccionados según la empresa o centro de costo.

!!! tip "Descripción de líneas de gasto con proveedor y código de generación"
    Cuando una línea de gasto proviene de la contabilización de un cheque, el Libro Auxiliar ahora agrega en la descripción el **nombre del proveedor** y el **código de generación** del documento, cuando corresponde. Esto evita tener que abrir el documento original para identificar a quién pertenece cada cargo.

!!! tip "Opciones de exportación e impresión"
    Desde la vista previa del reporte, el botón de exportación permite enviar la información a Excel o imprimirla, conforme a las opciones disponibles para los reportes del sistema (ver sección **4. Exportación e impresión**).

!!! note "Uso recomendado"
    Si la intención es validar la contabilidad con una hoja de cálculo, conviene exportar primero a Excel; si la necesidad es revisar la lógica del movimiento por cuenta, el libro auxiliar en pantalla sigue siendo la mejor alternativa para detectar saldos y variaciones.

!!! warning "Falta captura"
    Esta sección necesita una captura de la pantalla de filtros del Libro Auxiliar y una vista previa del reporte ya generado, idealmente mostrando una línea de gasto con proveedor y código de generación en la descripción.

---

## **2. Partidas**

### 2.1 Listado de partidas

!!! info "Descripción del reporte"
    El listado de partidas permite revisar el detalle contable de cada movimiento registrado. Sirve para confirmar que cada crédito, débito y descripción correspondan al documento o proceso que originó la operación.

    Entre sus ventajas se encuentran:

    - revisión rápida del detalle por fecha y número de partida;
    - consulta de la composición de cada movimiento;
    - soporte para encontrar errores de asiento o cuentas mal asignadas;
    - preparación para impresión del cierre contable.

!!! note "Flujo recomendado"
    Al revisar una partida, conviene validar primero la fecha, la cuenta, el monto y la descripción; luego, si corresponde, imprimir la vista previa para documentar la aprobación del asiento.

!!! warning "Falta captura"
    Esta sección necesita una captura del listado de partidas en pantalla, con algunas filas visibles a modo de ejemplo.

### 2.2 Vista previa de varias partidas

!!! info "Descripción del reporte"
    Al marcar varias partidas en la pantalla de captura y elegir la opción **Vista previa de Partida**, el sistema arma un solo reporte con todas las partidas marcadas, ordenadas por fecha y número. Cada partida conserva su propio encabezado, subtotal y salto de página, igual que si se imprimiera una por una.

    Si alguna de las partidas marcadas no tiene líneas registradas, el sistema avisa cuántas partidas se omitieron y continúa mostrando el resto. Con una sola partida marcada, la vista previa funciona como antes.

!!! tip "Orden exacto de las líneas al imprimir"
    Si la partida tiene activada la opción de mantener el orden exacto de las líneas, la vista previa de varias partidas respeta ese orden en lugar de reordenar por fecha.

!!! warning "Falta captura"
    Esta sección necesita una captura de la pantalla donde se marcan varias partidas y una del reporte resultante, mostrando al menos dos partidas con su encabezado y subtotal por separado.

---

## **3. Saldos y antigüedad**

### 3.1 Antigüedad de saldos de clientes (CLI21 a CLI25)

!!! info "Descripción del reporte"
    Los reportes de **antigüedad de saldos** (CLI21 a CLI25) permiten analizar el comportamiento de los saldos por cliente, identificando vencimientos, pendientes y movimientos de cada período.

    Estos reportes ayudan a:

    - revisar la situación financiera por cliente;
    - evaluar saldos vencidos y pendientes de cobro;
    - comparar el estado actual con el histórico del período.

!!! warning "Documentos invalidados en un período posterior"
    Cuando una factura o documento se invalida en un mes distinto al que se emitió, el reporte ya no muestra solo el movimiento negativo de la invalidación: el cargo original se mantiene en el período en que se emitió, y la reversión aparece por separado en el período en que ocurrió la invalidación. Esto refleja correctamente en qué momento se generó cada saldo.

    Además, se corrigió el reporte **CLI21**, que en algunos casos no mostraba ningún cargo.

!!! note "Redondeo a 2 decimales"
    Los montos de los reportes de antigüedad de saldos se redondean a 2 decimales. Esto evita que queden residuos de centavos que antes provocaban pequeños descuadres al comparar el total del reporte contra el saldo real del cliente.

!!! warning "Falta captura"
    Esta sección necesita una captura de alguno de los reportes CLI21 a CLI25, idealmente mostrando un cliente con un documento invalidado en un período posterior al de su emisión.

---

## **4. Exportación e impresión**

!!! info "Herramientas de salida"
    Los reportes contables pueden exportarse o imprimirse desde su vista previa, conforme a la necesidad del usuario:

    - **Excel**: para análisis, cruce de información y conciliación con otras herramientas.
    - **Vista previa / impresión**: para documentación formal y entrega a auditoría o control interno.

!!! tip "Espacio para nombres de empresa largos"
    Los encabezados de los reportes contables (como el Balance de Comprobación, Balance General y Catálogo de cuentas, entre otros) ahora reservan más espacio para el nombre de la empresa. Antes, un nombre largo podía cortarse o desalinearse en la impresión; ahora se muestra completo.

!!! warning "Falta captura"
    Esta sección necesita una captura de un encabezado de reporte contable con un nombre de empresa largo, mostrando que ya no se corta.

---

## 🔗 Módulos relacionados

- [Captura de partida contable](captura_partida_contable.md) — alta y revisión de asientos contables.
- [Contabilización automática](contabilizacion_automatica.md) — generación y validación de movimientos automáticos.
- [Control de periodos](control_periodos.md) — administración de cierres y vigencia contable.
- [Reportes generales](../../Reports/reportes.md) — vista general de categorías de reportes del sistema.

---

## ☑️ Validaciones y pruebas realizadas

!!! info "Revisión de documentación"
    La actualización de esta página se realizó con base en los cambios registrados en la rama de desarrollo del módulo de contabilidad, con especial atención a la vista previa de partidas, el Libro Auxiliar, la antigüedad de saldos y la impresión de reportes.

!!! example "Aspectos validados en la mejora documental"
    - Revisión de la descripción de líneas de gasto con proveedor y código de generación en el **Libro Auxiliar**.
    - Validación de la vista previa de varias partidas marcadas en un solo reporte.
    - Validación del tratamiento de documentos invalidados en un período posterior en antigüedad de saldos (CLI21 a CLI25).
    - Ajuste de redacción y estructura para alinearse con la guía de reportes del producto.

!!! warning "Capturas pendientes"
    Esta página quedó sin capturas propias: faltan imágenes del Libro Auxiliar, del listado de partidas, de la vista previa de varias partidas, de los reportes de antigüedad de saldos y de un encabezado con nombre de empresa largo. Cada sección de arriba señala puntualmente qué capturar.

