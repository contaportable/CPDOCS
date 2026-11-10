---
description: Guía de los reportes de la pantalla Reportes Contables de ContaPortable: catálogo, libros, balances, estados de resultados y datos para análisis externo.
---

# **Reportes contables**

Esta página describe los reportes de la pantalla **Reportes Contables** del sistema **ContaPortable**. En esta pantalla se preparan los libros contables, los balances y los estados de resultados.

!!! info "Cómo se usa la pantalla"
    1. Seleccione el reporte en la lista de la izquierda.
    2. Escriba los filtros en el panel **Prepara tu reporte**.
    3. Presione **Calcular** para generar la información.
    4. Presione **Imprimir** para ver la vista previa, o **Excel** para exportar.

    Los botones **Copiar al portapapeles** y **CSV** están disponibles solo en **Libro Auxiliar** y en **Datos para análisis externo**.

!!! warning "Falta captura"
    Pantalla completa de **Reportes Contables** con la lista de reportes a la izquierda y los botones **Calcular**, **Imprimir**, **Excel**, **Copiar al portapapeles** y **CSV** visibles. Nombre sugerido: `assets/contabilidad/reportes_contables/pantalla_general_01.png`.

!!! tip "Cambios recientes"
    - **Libro Auxiliar en Excel:** la columna **Saldo** ya no se suma hacia abajo. La fila final muestra el saldo final de la cuenta.
    - **Libro Auxiliar:** en las líneas de gasto que vienen de la contabilización de cheques, la descripción incluye el proveedor y el código de generación, cuando aplica.
    - **Libro Diario:** al imprimir, cada partida muestra primero los cargos y después los abonos.
    - **Reportes impresos:** el título tiene más espacio para el nombre de la empresa. Un nombre largo ya no se corta.

<!-- Diagrama de las categorías de reportes de la pantalla Reportes Contables -->
!!! tip "Diagrama de las categorías de **Reportes contables**"
    ``` mermaid
    graph TD
      A[Reportes contables]:::root

      subgraph "Categorías"
        B[1. Catálogo y libros]
        C[2. Balances]
        D[3. Estados de resultados]
        E[4. Análisis]
        F[5. Configuración]
      end

      A --> B
      A --> C
      A --> D
      A --> E
      A --> F

    click B "#1-catalogo-y-libros" "Ir a catálogo y libros"
    click C "#2-balances" "Ir a balances"
    click D "#3-estados-de-resultados" "Ir a estados de resultados"
    click E "#4-analisis" "Ir a análisis"
    click F "#5-configuracion" "Ir a configuración"
    ```
---

## **1. Catálogo y libros**

<!-- Diagrama de los reportes de la categoría catálogo y libros -->
!!! tip "Diagrama de los reportes de la categoría **Catálogo y libros**"
    ``` mermaid
    graph LR
      A[Catálogo y libros]:::root

      subgraph "Listado de reportes:"
        B[1.1 Catálogo de cuentas]
        C[1.2 Libro Diario]
        D[1.3 Libro Diario Mayor]
        E[1.4 Libro Auxiliar]
      end

      A --> B
      A --> C
      A --> D
      A --> E

    click B "#11-catalogo-de-cuentas" "Ir a catálogo de cuentas"
    click C "#12-libro-diario" "Ir a libro diario"
    click D "#13-libro-diario-mayor" "Ir a libro diario mayor"
    click E "#14-libro-auxiliar" "Ir a libro auxiliar"
    ```
---

### 1.1 Catálogo de cuentas

!!! info "Descripción del reporte"
    Este reporte lista las cuentas contables de la empresa. Puede filtrarse por:

    - Todas las cuentas
    - Rango de cuentas (**Del código** / **al código**)
    - Nombre de cuenta

    También puede escribir un **Título** para el encabezado del reporte.

!!! warning "Falta captura"
    Filtros del **Catálogo de cuentas** y vista previa del reporte. Nombres sugeridos: `catalogo_filtros_01.png`, `catalogo_reporte_01.png`.

---

### 1.2 Libro Diario

!!! info "Descripción del reporte"
    Este reporte muestra las partidas contables en orden de fecha y número. Puede filtrarse por:

    - Rango de fechas (**De fecha** / **A la fecha**)
    - Todas las partidas
    - Rango de partidas (**Del No.** / **a la partida**)
    - Descripción de la partida
    - Tipo de partida

    También puede escribir un **Título** para el encabezado del reporte.

!!! note "Orden de cargos y abonos"
    En cada partida, el reporte impreso muestra primero los cargos y después los abonos.

!!! warning "Falta captura"
    Filtros del **Libro Diario** y vista previa con una partida que muestre los cargos antes que los abonos. Nombres sugeridos: `libro_diario_filtros_01.png`, `libro_diario_reporte_01.png`.

---

### 1.3 Libro Diario Mayor

!!! info "Descripción del reporte"
    Este reporte resume los movimientos del período por cuenta de mayor. Puede filtrarse por:

    - Rango de fechas
    - Todas las cuentas, rango de cuentas o nombre de cuenta
    - **Ancho de ctas de Mayor**
    - **Mostrar saldos**
    - **Mostrar movimientos cero**

!!! warning "Use solo cuentas de mayor"
    En el rango de cuentas, escriba cuentas de mayor. Si escribe otra cuenta, el sistema muestra el mensaje **Cuenta introducida no es de mayor**.

    Si no aparecen datos, revise el parámetro que indica cuáles cuentas son de mayor. El sistema muestra un recuadro rojo que señala dónde configurarlo.

!!! warning "Falta captura"
    Filtros del **Libro Diario Mayor** y el mensaje de error de cuenta que no es de mayor. Nombres sugeridos: `libro_mayor_filtros_01.png`, `libro_mayor_error_01.png`.

---

### 1.4 Libro Auxiliar

!!! info "Descripción del reporte"
    Este reporte muestra, cuenta por cuenta, los movimientos del período con sus cargos, abonos y saldo. Puede filtrarse por:

    - Rango de fechas
    - Todas las cuentas, rango de cuentas o nombre de cuenta
    - **Mostrar saldos**
    - **Mostrar movimientos cero**

    Escriba cuentas de detalle en el rango. Si escribe una cuenta de mayor, el sistema muestra un aviso.

!!! tip "Opciones de exportación"
    Después de presionar **Calcular**, puede enviar los datos fuera del sistema:

    - **Excel:** genera una hoja de cálculo. La columna **Saldo** no se suma hacia abajo. La fila final muestra el saldo final de la cuenta.
    - **Copiar al portapapeles:** copia los datos para pegarlos en Excel u otro documento.
    - **CSV:** guarda un archivo de valores separados por comas, con el nombre **Libro auxiliar**.

!!! note "Descripción de las líneas de gasto"
    Si la línea de gasto viene de la contabilización de un cheque, la descripción incluye el **proveedor** y el **código de generación** del documento, cuando aplica.

!!! warning "Falta captura"
    Esta sección necesita tres capturas:

    - Filtros del **Libro Auxiliar**. Nombre sugerido: `libro_auxiliar_filtros_01.png`.
    - Vista previa del reporte, con una línea de gasto que muestre proveedor y código de generación. Nombre sugerido: `libro_auxiliar_reporte_01.png`.
    - Hoja de Excel exportada, con la fila final del saldo. Nombre sugerido: `libro_auxiliar_excel_01.png`.

---

## **2. Balances**

<!-- Diagrama de los reportes de la categoría balances -->
!!! tip "Diagrama de los reportes de la categoría **Balances**"
    ``` mermaid
    graph LR
      A[Balances]:::root

      subgraph "Listado de reportes:"
        B[2.1 Balance de Comprobación]
        C[2.2 Balance General]
        D[2.3 Balance General Tipo Reporte]
        E[2.4 Balance General Comparativo]
        F[2.5 Balanza de Comprobación]
      end

      A --> B
      A --> C
      A --> D
      A --> E
      A --> F

    click B "#21-balance-de-comprobacion" "Ir a balance de comprobación"
    click C "#22-balance-general" "Ir a balance general"
    click D "#23-balance-general-tipo-reporte" "Ir a balance general tipo reporte"
    click E "#24-balance-general-comparativo" "Ir a balance general comparativo"
    click F "#25-balanza-de-comprobacion" "Ir a balanza de comprobación"
    ```
---

### 2.1 Balance de Comprobación

!!! info "Descripción del reporte"
    Este reporte muestra, por cuenta, el saldo inicial, los cargos, los abonos y el saldo final. Puede filtrarse por:

    - Rango de fechas
    - Todas las cuentas, rango de cuentas o nombre de cuenta
    - **Nivel** de profundidad de las cuentas
    - **Mostrar saldos cero**
    - **Mostrar movimientos cero**
    - **Solo Cuentas de Detalle**
    - **Balance de Saldos**
    - **Balance de Saldos Comprobatorio**

!!! tip "Opciones de saldo"
    - **Mostrar saldos cero:** quita los saldos iniciales de la consulta. Los saldos finales cambian.
    - **Mostrar movimientos cero:** omite los movimientos en cero, como los de cheques anulados.
    - **Solo Cuentas de Detalle:** imprime solo las cuentas que reciben saldo directo en las partidas.
    - **Balance de Saldos:** muestra el saldo neto de cada cuenta según su naturaleza. Una cuenta deudora muestra su saldo en **Debe**. Una cuenta acreedora lo muestra en **Haber**.
    - **Balance de Saldos Comprobatorio:** igual que **Balance de Saldos**, pero el saldo acreedor es negativo y el saldo deudor es positivo. La suma de los saldos finales debe dar cero.

!!! warning "Falta captura"
    Filtros del **Balance de Comprobación** con las casillas de saldos visibles, y vista previa del reporte. Nombres sugeridos: `balance_comprobacion_filtros_01.png`, `balance_comprobacion_reporte_01.png`.

---

### 2.2 Balance General

!!! info "Descripción del reporte"
    Este reporte muestra la situación financiera de la empresa a una fecha. Puede filtrarse por:

    - **Desde** y **A la fecha**
    - **Nivel** de profundidad de las cuentas
    - **Compactación** del reporte
    - **Mostrar saldos cero**

    También puede escribir un **Título** y un **Subtítulo**.

!!! warning "Falta captura"
    Filtros del **Balance General** (opción **General**) y vista previa del reporte. Nombres sugeridos: `balance_general_filtros_01.png`, `balance_general_reporte_01.png`.

---

### 2.3 Balance General Tipo Reporte

!!! info "Descripción del reporte"
    Este reporte presenta el balance general agrupado por las líneas y los rubros del reporte. Usa los mismos filtros que el [Balance General](#22-balance-general), con la opción **General TP Reporte**.

!!! warning "Falta captura"
    Vista previa del **Balance General Tipo Reporte**. Nombre sugerido: `balance_tipo_reporte_01.png`.

---

### 2.4 Balance General Comparativo

!!! info "Descripción del reporte"
    Este reporte compara los saldos del balance general entre dos fechas. Usa los mismos filtros que el [Balance General](#22-balance-general), con la opción **General Comparativo**.

!!! warning "Falta captura"
    Filtros y vista previa del **Balance General Comparativo**. Nombres sugeridos: `balance_comparativo_filtros_01.png`, `balance_comparativo_reporte_01.png`.

---

### 2.5 Balanza de Comprobación

!!! info "Descripción del reporte"
    Este reporte lista las cuentas con sus saldos para comprobar que los cargos y los abonos están balanceados. Usa los mismos filtros que el [Balance General](#22-balance-general), con la opción **Comprobación**.

!!! warning "Falta captura"
    Vista previa de la **Balanza de Comprobación**. Nombre sugerido: `balanza_comprobacion_reporte_01.png`.

---

## **3. Estados de resultados**

<!-- Diagrama de los reportes de la categoría estados de resultados -->
!!! tip "Diagrama de los reportes de la categoría **Estados de resultados**"
    ``` mermaid
    graph LR
      A[Estados de resultados]:::root

      subgraph "Listado de reportes:"
        B[3.1 Estado de Resultados del Periodo]
        C[3.2 Estado de Resultados Comparativo]
        D[3.3 Estado de Resultados Histórico]
      end

      A --> B
      A --> C
      A --> D

    click B "#31-estado-de-resultados-del-periodo" "Ir a estado de resultados del periodo"
    click C "#32-estado-de-resultados-comparativo" "Ir a estado de resultados comparativo"
    click D "#33-estado-de-resultados-historico" "Ir a estado de resultados histórico"
    ```
---

### 3.1 Estado de Resultados del Periodo

!!! info "Descripción del reporte"
    Este reporte compara los resultados del período contra el acumulado del ejercicio. Puede filtrarse por:

    - **Desde** y **Hasta** (fechas)
    - **Año** y mes final
    - **Nivel** de profundidad de las cuentas
    - **Mostrar saldos cero**

    Use la opción **Periodo Vs Acumulado (Ejercicio)**.

!!! warning "Falta captura"
    Filtros y vista previa del **Estado de Resultados del Periodo**. Nombres sugeridos: `estado_resultados_filtros_01.png`, `estado_resultados_reporte_01.png`.

---

### 3.2 Estado de Resultados Comparativo

!!! info "Descripción del reporte"
    Este reporte compara los resultados de dos años. Escriba el año inicial (**Desde**) y el año final (**Hasta**). Use la opción **Comparativo**.

!!! warning "Falta captura"
    Filtros y vista previa del **Estado de Resultados Comparativo**. Nombres sugeridos: `estado_resultados_comp_filtros_01.png`, `estado_resultados_comp_reporte_01.png`.

---

### 3.3 Estado de Resultados Histórico

!!! info "Descripción del reporte"
    Este reporte muestra solo el acumulado histórico de las cuentas. Use la opción **Solo Acumulado - Historico**.

!!! warning "Falta captura"
    Vista previa del **Estado de Resultados Histórico**. Nombre sugerido: `estado_resultados_hist_reporte_01.png`.

---

## **4. Análisis**

### 4.1 Comparativo

!!! info "Descripción del reporte"
    Este reporte compara por mes los gastos y los ingresos de las cuentas del catálogo. Sirve para analizar el comportamiento de las cuentas por período. Puede filtrarse por:

    - Año y mes inicial
    - Año y mes final
    - Rango de cuentas (**Del código** / **al código**)
    - **Mostrar saldos cero**
    - **Mostrar movimientos cero**

!!! note "Sin impresión"
    Este reporte se muestra solo en pantalla. Si presiona **Imprimir**, el sistema muestra el mensaje **Este reporte no admite impresión en pantalla**.

!!! warning "Falta captura"
    Filtros del **Comparativo** y la cuadrícula con el resultado, y el mensaje de error al presionar **Imprimir**. Nombres sugeridos: `comparativo_filtros_01.png`, `comparativo_resultado_01.png`, `comparativo_sin_impresion_01.png`.

---

### 4.2 Datos para análisis externo

!!! info "Descripción del reporte"
    Esta opción genera un origen de datos con los movimientos contables. Úselo en Excel (tablas dinámicas) u otras herramientas. Con estos datos puede crear gráficos, reportes dinámicos y análisis adicionales.

    En esta opción, el botón **Calcular** cambia a **Generar origen de datos**.

!!! tip "Opciones de exportación"
    Después de generar los datos, puede usar **Copiar al portapapeles** o **CSV**. El archivo CSV se llama **ETL Export**.

!!! warning "Falta captura"
    Pantalla de **Datos para análisis externo** con el botón **Generar origen de datos**, y un ejemplo de los datos en una tabla dinámica de Excel. Nombres sugeridos: `datos_analisis_externo_01.png`, `datos_analisis_externo_excel_01.png`.

---

## **5. Configuración**

!!! info "Configuración de los reportes"
    En esta opción puede ajustar las opciones más comunes de los reportes. Aquí también puede presionar **Seleccionar Impresor** para elegir la impresora.

!!! warning "Falta captura"
    Pantalla **Configuración de los Reportes**. Nombre sugerido: `configuracion_reportes_01.png`.

---

## 🔗 Módulos relacionados

- [Captura de partida contable](captura_partida_contable.md): alta, revisión y vista previa de partidas, incluida la vista previa de varias partidas marcadas.
- [Contabilización automática](contabilizacion_automatica.md): generación de las partidas automáticas.
- [Control de periodos](control_periodos.md): cierres y vigencia contable.
- [Reportes de clientes](../../Reports/categorias/clientes.md): incluye la antigüedad de saldos y los estados de cuenta de clientes.
- [Reportes generales](../../Reports/reportes.md): vista general de las categorías de reportes del sistema.
