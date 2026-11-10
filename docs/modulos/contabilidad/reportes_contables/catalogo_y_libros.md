# **Catálogo y libros**

!!! abstract "En esta categoría"
    - Consultar e imprimir el catálogo de cuentas de la empresa.
    - Revisar las partidas contables en el Libro Diario y en el Libro Diario Mayor.
    - Analizar los movimientos de cada cuenta en el Libro Auxiliar y exportarlos.

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
    Este reporte lista las cuentas contables de la empresa. Sirve para consultar el código, el nombre y el rubro de cada cuenta.

El reporte usa el [filtro de cuentas](../ReportesContables.md#filtro-de-cuentas) de la pantalla:

| Opción | Qué hace |
| :--- | :--- |
| **Imprimir Todas las Cuentas** | Incluye todo el catálogo. |
| **Imprimir por un rango de cuentas** | Incluye las cuentas entre **Del Codigo** y **al Codigo**. |
| **Imprimir por un nombre de cuenta** | Busca el texto de **Nombre de Cuenta** en cualquier parte del nombre. |

!!! example "Cómo generar el catálogo"
    1. Seleccione **Catalogo de Cuentas** en la lista.
    2. Elija el filtro de cuentas.
    3. Presione **Calcular**.
    4. Revise las cuentas en la cuadrícula.
    5. Presione **Imprimir** para ver el reporte, o **Excel** para exportarlo.

    ![Pantalla de filtros del Catálogo de cuentas](../../../assets/contabilidad/reportes_contables/catalogo_filtros_01.png){ align=center }

!!! note "Qué verá"
    - **En pantalla:** la cuadrícula muestra las columnas **Codigo** y **Nombre**.
    - **En el reporte:** cada cuenta muestra también su rubro. El rubro sale del primer dígito del código. Puede ser Activo, Pasivo, Capital, Gastos, Ingresos, Resultados, Contingencias, Presupuestos u Otros.

---

### 1.2 Libro Diario

!!! info "Descripción del reporte"
    Este reporte muestra las partidas contables en orden de fecha y número. Sirve para revisar cada partida con sus cargos y abonos.

| Opción | Qué hace |
| :--- | :--- |
| **de Fecha** y **A la Fecha** | Definen el período de las partidas. |
| **Imprimir Todas las Partidas** | Incluye todas las partidas del período. |
| **Imprimir por un rango de partidas** | Incluye las partidas entre **Del la Partida** y **a la Partida**. |
| **Imprimir por una descripcion de partida** | Busca el texto en la descripción 1, en la descripción 2 y en el número de cheque. |
| **Tipo** | Limita el reporte a un tipo de partida. |
| **Titulo** | Cambia el título del encabezado del reporte. |

!!! example "Cómo imprimir un rango de partidas"
    1. Seleccione **Libro Diario** en la lista.
    2. Escriba **de Fecha** y **A la Fecha**.
    3. Elija **Imprimir por un rango de partidas**.
    4. Escriba **Del la Partida** y **a la Partida**.
    5. Presione **Imprimir**.

    ![Pantalla de filtros del Libro Diario](../../../assets/contabilidad/reportes_contables/libro_diario_filtros_01.png){ align=center }

!!! warning "Aviso del sistema"
    Si falta un número de partida, el sistema muestra **Partida uno no ha sido introducida**. Escriba el número y presione **Imprimir** de nuevo.

!!! note "Qué verá"
    **En pantalla:** cada línea muestra la fecha, el número, el tipo, el código, el nombre de la cuenta, las dos descripciones, el cheque, el **Debe** y el **Haber**.

    **En la vista previa:** cada partida se imprime en un bloque con estos datos:

    - Encabezado con la **Fecha**, el **Número** y el tipo (**Tp**) de la partida.
    - Una línea por cuenta, con el **Código**, la **Descripción**, el **Cheque**, el **Debe** y el **Haber**. Los cargos aparecen antes que los abonos.
    - El **Total Partida**, con la suma del **Debe** y la suma del **Haber**.
    - Las firmas del contador y del representante legal.

    ![Vista previa del Libro Diario](../../../assets/contabilidad/reportes_contables/libro_diario_reporte_01.png){ align=center }

!!! tip "Exportar a Excel"
    El botón **Excel** exporta las mismas columnas que muestra la pantalla.

---

### 1.3 Libro Diario Mayor

!!! info "Descripción del reporte"
    Este reporte resume los movimientos del período por cuenta de mayor. Sirve para ver el movimiento total de cada cuenta de mayor.

| Opción | Qué hace |
| :--- | :--- |
| **de Fecha** y **A la Fecha** | Definen el período del reporte. |
| Filtro de cuentas | Elige las cuentas: todas, un rango o un nombre. |
| **Ancho de ctas de Mayor** | Indica cuántos caracteres tiene el código de una cuenta de mayor. |
| **Mostrar saldos** | Agrega el saldo inicial de cada cuenta. |
| **Titulo** | Cambia el título del encabezado del reporte. |

!!! example "Cómo preparar el libro mayor"
    1. Seleccione **Libro Diario Mayor** en la lista.
    2. Escriba **de Fecha** y **A la Fecha**.
    3. Elija el filtro de cuentas. En un rango, escriba cuentas de mayor.
    4. Marque **Mostrar saldos** si necesita el saldo inicial.
    5. Presione **Calcular**.

    ![Pantalla de filtros del Libro Diario Mayor](../../../assets/contabilidad/reportes_contables/libro_mayor_filtros_01.png){ align=center }

!!! note "Qué verá"
    La cuadrícula muestra las columnas **Fecha**, **Codigo**, **Nombre**, **Descripcion**, **Debe** y **Haber**. Según la configuración de la empresa, el reporte muestra cada movimiento o un resumen con la leyenda **Movimientos Diarios**.

!!! warning "Use solo cuentas de mayor"
    Si escribe en el rango una cuenta que no es de mayor, el sistema muestra **Cuenta Uno introducida no es de mayor** (o **Cuenta dos**). Escriba una cuenta de mayor y presione **Calcular** de nuevo.

    ![Aviso de cuenta que no es de mayor](../../../assets/contabilidad/reportes_contables/libro_mayor_error_01.png){ align=center }

!!! warning "El reporte no muestra datos"
    El sistema muestra **Debes configurar adecuadamente el parámetro que indica qué cuentas son de mayor** y un recuadro rojo. El recuadro señala dónde configurar el parámetro. Corríjalo y presione **Calcular** de nuevo.

---

### 1.4 Libro Auxiliar

!!! info "Descripción del reporte"
    Este reporte muestra, cuenta por cuenta, los movimientos del período con su saldo acumulado. Sirve para revisar y conciliar una cuenta.

| Opción | Qué hace |
| :--- | :--- |
| **De Fecha** y **A la Fecha** | Definen el período del reporte. |
| Filtro de cuentas | Elige las cuentas: todas, un rango o un nombre. En un rango, escriba cuentas de detalle. |
| **Mostrar saldos** | Agrega una primera línea **Saldo** en cada cuenta. Esa línea trae lo acumulado antes del período. Su fecha es el día anterior a la fecha inicial. Si no marca la casilla, el saldo empieza en cero. |
| **Mostrar movimientos cero** | Muestra las líneas con **Debe** y **Haber** en cero, por ejemplo los cheques anulados. Si no marca la casilla, el reporte oculta esas líneas. |

!!! example "Cómo revisar una cuenta"
    1. Seleccione **Libro Auxiliar** en la lista.
    2. Escriba **De Fecha** y **A la Fecha**.
    3. Elija **Imprimir por un rango de cuentas**.
    4. Escriba la cuenta en **Del Código**.
    5. Marque **Mostrar saldos**.
    6. Presione **Calcular**. El mensaje **Generando los registros del libro auxiliar, por favor espere** indica que el reporte se prepara.
    7. Revise los movimientos en pantalla.
    8. Presione **Imprimir** o **Excel** para sacar el reporte.

    ![Pantalla de filtros del Libro Auxiliar](../../../assets/contabilidad/reportes_contables/libro_auxiliar_filtros_01.png){ align=center }

!!! warning "Use solo cuentas de detalle"
    Si escribe una cuenta de mayor en el rango, el sistema muestra **Cuenta Uno introducida es de mayor**. Escriba una cuenta de detalle y presione **Calcular** de nuevo.

!!! note "Qué verá"
    **En pantalla y en la vista previa:** cada línea muestra la fecha, el tipo y el número de partida, el folio del documento, el nombre, el **Debe**, el **Haber** y el saldo acumulado. El saldo empieza de nuevo en cada cuenta.

    **En el encabezado de la vista previa:** aparecen el período, el rango de cuentas y el estado de **Mostrar Saldos** y de **Mostrar movimientos cero**.

    ![Vista previa del Libro Auxiliar](../../../assets/contabilidad/reportes_contables/libro_auxiliar_reporte_01.png){ align=center }

### 📤 Opciones de exportación

Después de presionar **Calcular**, puede enviar los datos fuera del sistema:

| Botón | Resultado |
| :--- | :--- |
| **Excel** | Genera una hoja de cálculo. La columna **Saldo** no se suma hacia abajo. La fila final de cada cuenta muestra su saldo final. |
| **Copiar al portapapeles** | Copia los datos para pegarlos en Excel u otro documento. |
| **CSV** | Guarda un archivo de valores separados por comas. |

!!! note "Hoja de Excel"
    Cada cuenta se exporta en un bloque. El bloque muestra el nombre de la cuenta, sus movimientos y una fila de cierre con el **Debe**, el **Haber** y el saldo final. Las columnas son **Fecha**, **Tipo**, **Número**, **Código**, **Nombre**, **Descripción** (dos columnas), **Debe**, **Haber**, **Saldo** y **Referencia**.

    ![Libro Auxiliar exportado a Excel](../../../assets/contabilidad/reportes_contables/libro_auxiliar_excel_01.png){ align=center }
