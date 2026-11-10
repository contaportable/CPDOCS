<!---
description: Guía de los reportes de la pantalla Reportes Contables de ContaPortable: catálogo, libros, balances, estados de resultados y datos para análisis externo.
-->

# 📒 **Reportes contables**

Esta página describe los reportes de la pantalla **Reportes Contables** del sistema **ContaPortable**. En esta pantalla se preparan los libros contables, los balances y los estados de resultados.

!!! info "Cómo se usa la pantalla"
    1. Seleccione el reporte en la lista de la izquierda.
    2. Escriba los filtros en el panel **Prepara tu reporte**.
    3. Presione **Calcular** para generar la información.
    4. Presione **Imprimir** para ver la vista previa, o **Excel** para exportar.

    Los botones **Copiar al portapapeles** y **CSV** están disponibles solo en **Libro Auxiliar** y en **Datos para análisis externo**.

   ![Pantalla general de Reportes Contables](../../assets/contabilidad/reportes_contables/pantalla_general_01.png){ align=center }

!!! note "Filtro de cuentas"
    Casi todos los reportes usan el mismo filtro de cuentas. Elija una de estas tres opciones:

    - **Imprimir todas las cuentas:** incluye todo el catálogo.
    - **Imprimir por un rango de cuentas:** escriba **Del código** y **al código**. Si deja vacío **al código**, el sistema usa el mismo código que **Del código**.
    - **Imprimir por un nombre de cuenta:** escriba parte del nombre. El sistema busca ese texto en cualquier parte del nombre.

    Si falta un dato, el sistema muestra un aviso. Por ejemplo: **Código uno no ha sido introducido** o **Digite un nombre de cuenta**.

!!! note "Cómo se calculan los saldos"
    - El **saldo inicial** es la suma de todos los movimientos anteriores a la fecha inicial.
    - El **saldo final** es la suma de todos los movimientos hasta la fecha final.
    - Una cuenta deudora calcula **Debe − Haber**. Una cuenta acreedora calcula **Haber − Debe**.

!!! tip "Cambios recientes"
    - **Libro Auxiliar en Excel:** la columna **Saldo** ya no se suma hacia abajo. La fila final muestra el saldo final de la cuenta.
    - **Libro Auxiliar:** en las líneas de gasto que vienen de la contabilización de un cheque, la descripción incluye el proveedor y el código de generación, cuando aplica.
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
    Este reporte lista las cuentas contables de la empresa. Muestra el **código**, el **nombre** y el **rubro** de cada cuenta.

    El rubro sale del primer dígito del código. Puede ser Activo, Pasivo, Capital, Gastos, Ingresos, Resultados, Contingencias, Presupuestos u Otros.

    Puede filtrarse por:

    - Todas las cuentas
    - Rango de cuentas (**Del código** / **al código**)
    - Nombre de cuenta

    Los botones disponibles son **Calcular**, **Imprimir** y **Excel**.

!!! example "Cómo generar el catálogo"
    1. Seleccione **Catalogo de Cuentas** en la lista.
    2. Elija el filtro de cuentas.
    3. Presione **Calcular**. El catálogo aparece en la cuadrícula, con las columnas **Codigo** y **Nombre**.
    4. Presione **Imprimir** para ver el reporte, o **Excel** para exportarlo.

   ![Pantalla de filtros del Catálogo de cuentas](../../assets/contabilidad/reportes_contables/catalogo_filtros_01.png){ align=center }

---

### 1.2 Libro Diario

!!! info "Descripción del reporte"
    Este reporte muestra las partidas contables en orden de fecha y número. Cada línea muestra estas columnas:

    - Fecha, número y tipo de partida
    - Código y nombre de la cuenta
    - Descripción 1 y descripción 2
    - Cheque
    - **Debe** y **Haber**

    Puede filtrarse por:

    - Rango de fechas (**De fecha** / **A la fecha**)
    - **Imprimir Todas las Partidas**
    - **Imprimir por un rango de partidas** (**Del No.** / **a la partida**)
    - **Imprimir por una descripcion de partida**
    - **Tipo** de partida

    También puede escribir un **Título** para el encabezado del reporte.

!!! tip "Búsqueda por descripción"
    El texto que escriba se busca en la **descripción 1**, en la **descripción 2** y en el **número de cheque**.

!!! note "Orden de cargos y abonos"
    En cada partida, el reporte impreso muestra primero los cargos y después los abonos.

!!! note "Exportar a Excel"
    El botón **Excel** exporta las mismas diez columnas del reporte.

!!! example "Cómo imprimir un rango de partidas"
    1. Seleccione **Libro Diario** en la lista.
    2. Escriba **De fecha** y **A la fecha**.
    3. Elija **Imprimir por un rango de partidas**.
    4. Escriba **Del No.** y **a la partida**. Si falta un dato, el sistema muestra el aviso **Partida uno no ha sido introducida**.
    5. Presione **Imprimir**.

   ![Pantalla de filtros del Libro Diario](../../assets/contabilidad/reportes_contables/libro_diario_filtros_01.png){ align=center }

!!! note "Vista previa del reporte"
    Cada partida se imprime en un bloque con estos datos:

    - Encabezado con la **Fecha**, el **Número** y el tipo (**Tp**) de la partida.
    - Una línea por cuenta, con el **Código**, la **Descripción**, el **Cheque**, el **Debe** y el **Haber**.
    - El **Total Partida**, con la suma del **Debe** y la suma del **Haber**.
    - Las firmas del contador y del representante legal.

   ![Vista previa del Libro Diario](../../assets/contabilidad/reportes_contables/libro_diario_reporte_01.png){ align=center }

---

### 1.3 Libro Diario Mayor

!!! info "Descripción del reporte"
    Este reporte resume los movimientos del período por cuenta de mayor. Puede filtrarse por:

    - Rango de fechas
    - Filtro de cuentas (todas, rango o nombre)
    - **Ancho de ctas de Mayor**: la longitud del código de las cuentas de mayor.
    - **Mostrar saldos**: agrega el saldo inicial de cada cuenta.

    La cuadrícula muestra las columnas **Fecha**, **Codigo**, **Nombre**, **Descripcion**, **Debe** y **Haber**.

    También puede escribir un **Título** para el encabezado del reporte.

!!! note "Formato del reporte"
    Según la configuración de la empresa, el reporte muestra cada movimiento o un resumen con la leyenda **Movimientos Diarios**.

!!! warning "Use solo cuentas de mayor"
    En el rango de cuentas, escriba cuentas de mayor. Si escribe otra cuenta, el sistema muestra el aviso **Cuenta Uno introducida no es de mayor** (o **Cuenta dos**).

    Si el reporte no muestra datos, revise el parámetro que indica cuáles cuentas son de mayor. El sistema muestra el aviso **Debes configurar adecuadamente el parámetro que indica qué cuentas son de mayor** y un recuadro rojo que señala dónde configurarlo.

   ![Pantalla de filtros del Libro Diario Mayor](../../assets/contabilidad/reportes_contables/libro_mayor_filtros_01.png){ align=center }

   ![Aviso de cuenta que no es de mayor](../../assets/contabilidad/reportes_contables/libro_mayor_error_01.png){ align=center }

---

### 1.4 Libro Auxiliar

!!! info "Descripción del reporte"
    Este reporte muestra, cuenta por cuenta, los movimientos del período. Cada línea muestra estas columnas:

    - Fecha, tipo y número de partida
    - Código y nombre de la cuenta
    - Descripción 1 y descripción 2
    - **Debe**, **Haber** y **Saldo**

    El **Saldo** es acumulado. Empieza de nuevo en cada cuenta.

    Puede filtrarse por:

    - Rango de fechas
    - Filtro de cuentas (todas, rango o nombre)
    - **Mostrar saldos**
    - **Mostrar movimientos cero**

!!! tip "Opciones del reporte"
    - **Mostrar saldos:** agrega una primera línea **Saldo** en cada cuenta. Su fecha es el día anterior a la fecha inicial. Esa línea trae lo acumulado antes del período. Si no marca la casilla, el saldo empieza en cero.
    - **Mostrar movimientos cero:** muestra las líneas con **Debe** y **Haber** en cero, por ejemplo los cheques anulados. Si no marca la casilla, el reporte oculta esas líneas.

!!! warning "Use solo cuentas de detalle"
    En el rango de cuentas, escriba cuentas de detalle. Si escribe una cuenta de mayor, el sistema muestra el aviso **Cuenta Uno introducida es de mayor**.

!!! tip "Opciones de exportación"
    Después de presionar **Calcular**, puede enviar los datos fuera del sistema:

    - **Excel:** genera una hoja de cálculo. La columna **Saldo** no se suma hacia abajo. La fila final muestra el saldo final de la cuenta.
    - **Copiar al portapapeles:** copia los datos para pegarlos en Excel u otro documento.
    - **CSV:** guarda un archivo de valores separados por comas.

!!! note "Descripción de las líneas de gasto"
    Si la línea de gasto viene de la contabilización de un cheque, la descripción incluye el **proveedor** y el **código de generación** del documento, cuando aplica.

!!! example "Cómo revisar una cuenta"
    1. Seleccione **Libro Auxiliar** en la lista.
    2. Escriba **De Fecha** y **A la Fecha**.
    3. Elija **Imprimir por un rango de cuentas** y escriba la cuenta en **Del Código**.
    4. Marque **Mostrar saldos**.
    5. Presione **Calcular**. El mensaje **Generando los registros del libro auxiliar, por favor espere** indica que el reporte se está preparando.
    6. Revise los movimientos en pantalla. Presione **Imprimir** o **Excel** para sacar el reporte.

   ![Pantalla de filtros del Libro Auxiliar](../../assets/contabilidad/reportes_contables/libro_auxiliar_filtros_01.png){ align=center }

!!! note "Vista previa del reporte"
    El encabezado muestra el período, el rango de cuentas y el estado de las opciones **Mostrar Saldos** y **Mostrar movimientos cero**. Cada línea muestra la fecha, el tipo y número de partida, el folio del documento, el nombre, el **Debe**, el **Haber** y el saldo acumulado.

   ![Vista previa del Libro Auxiliar](../../assets/contabilidad/reportes_contables/libro_auxiliar_reporte_01.png){ align=center }

!!! warning "Falta captura"
    Esta sección necesita dos capturas más:

    - Una línea de gasto que venga de un cheque, con proveedor y código de generación en la descripción. Nombre sugerido: `libro_auxiliar_gasto_01.png`.
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
    Este reporte muestra, por cuenta, estas columnas: **código**, **nombre**, **saldo inicial**, **Debe**, **Haber** y **saldo final**. Incluye las cuentas de mayor. El sistema las calcula con la suma de sus cuentas de detalle.

    Puede filtrarse por:

    - Rango de fechas
    - Filtro de cuentas (todas, rango o nombre)
    - **Nivel** de profundidad de las cuentas
    - **Mostrar saldos cero**
    - **Mostrar movimientos cero**
    - **Solo Cuentas de Detalle**
    - **Balance de Saldos**
    - **Balance de Saldos Comprobatorio**

!!! tip "Opciones del reporte"
    - **Nivel:** es la longitud máxima del código que el reporte muestra. Por defecto es la longitud de las cuentas de mayor (3 o 4). El reporte omite las cuentas con un código más largo.
    - **Mostrar saldos cero:** si no marca la casilla, el reporte quita las cuentas con saldo final igual a cero.
    - **Mostrar movimientos cero:** si no marca la casilla, el reporte quita las cuentas donde el saldo inicial, **Debe**, **Haber** y saldo final son cero.
    - **Solo Cuentas de Detalle:** quita las cuentas de mayor. Quedan solo las cuentas que reciben saldo directo en las partidas.
    - **Balance de Saldos:** muestra el saldo neto de cada cuenta en una sola columna, según su naturaleza. Una cuenta deudora muestra su saldo en **Debe**. Una cuenta acreedora lo muestra en **Haber**.
    - **Balance de Saldos Comprobatorio:** igual que **Balance de Saldos**, pero el saldo acreedor sale negativo. La suma de los saldos finales debe dar cero.

!!! example "Cómo comprobar que la contabilidad cuadra"
    1. Seleccione **Balance de Comprobacion** en la lista.
    2. Escriba el rango de fechas.
    3. Marque **Balance de Saldos Comprobatorio**.
    4. Presione **Calcular**.
    5. Revise el total del saldo final. Debe ser cero. Si no es cero, revise las partidas del período.

!!! warning "Falta captura"
    Filtros del **Balance de Comprobación** con las casillas de saldos visibles, y vista previa del reporte. Nombres sugeridos: `balance_comprobacion_filtros_01.png`, `balance_comprobacion_reporte_01.png`.

---

### 2.2 Balance General

!!! info "Descripción del reporte"
    Este reporte muestra la situación financiera de la empresa. Usa los saldos acumulados hasta la fecha **A la fecha**. Puede filtrarse por:

    - **Desde** y **A la fecha**
    - **Nivel** de profundidad de las cuentas
    - **Compactación** del reporte (**Compacto**, **Semi Compacto** o **Normal**). Esta opción cambia el espacio entre las líneas.
    - **Mostrar saldos cero**

    También puede escribir un **Título** y un **Subtítulo**.

    Para este reporte, elija la opción **General**.

!!! note "Utilidad del ejercicio"
    El Balance General calcula la utilidad del ejercicio. La utilidad es igual a los ingresos menos los costos y los gastos. El sistema la suma a la cuenta de utilidad.

    Si la empresa usa rubros personalizados, el cálculo separa los gastos, los otros ingresos y gastos, y los gastos e ingresos financieros.

!!! tip "Exportar a Excel"
    El archivo de Excel tiene estas columnas: Código, Nombre, Parcial, Cuenta y Total. Las mismas columnas aparecen para el lado deudor y para el lado acreedor.

!!! warning "Falta captura"
    Filtros del **Balance General** (opción **General**) y vista previa del reporte. Nombres sugeridos: `balance_general_filtros_01.png`, `balance_general_reporte_01.png`.

---

### 2.3 Balance General Tipo Reporte

!!! info "Descripción del reporte"
    Este reporte muestra los mismos saldos que el [Balance General](#22-balance-general). La diferencia es el formato: agrupa las cuentas por los rubros del reporte y las ordena por código.

    Para este reporte, elija la opción **General TP Reporte**. Los filtros son los mismos del Balance General.

!!! warning "Falta captura"
    Vista previa del **Balance General Tipo Reporte**. Nombre sugerido: `balance_tipo_reporte_01.png`.

---

### 2.4 Balance General Comparativo

!!! info "Descripción del reporte"
    Este reporte compara los saldos de dos años. Toma el saldo al 31 de diciembre del año **Desde** y lo compara con el saldo al 31 de diciembre del año **Hasta**.

    Para este reporte, elija la opción **General Comparativo**. Los demás filtros son los mismos del [Balance General](#22-balance-general).

!!! example "Cómo comparar dos años"
    1. Seleccione **Balance General Comparativo** en la lista.
    2. Escriba el año **Desde** y el año **Hasta**.
    3. Presione **Calcular**.
    4. Presione **Imprimir** para ver el reporte.

!!! warning "Falta captura"
    Filtros y vista previa del **Balance General Comparativo**. Nombres sugeridos: `balance_comparativo_filtros_01.png`, `balance_comparativo_reporte_01.png`.

---

### 2.5 Balanza de Comprobación

!!! info "Descripción del reporte"
    Este reporte muestra los mismos saldos que el [Balance General](#22-balance-general), pero no calcula la utilidad del ejercicio. Sirve para comprobar que los cargos y los abonos están balanceados.

    Para este reporte, elija la opción **Comprobación**. Los filtros son los mismos del Balance General.

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

!!! note "Reglas de los estados de resultados"
    - Los tres reportes usan la misma pantalla. La opción elegida cambia la forma de calcular.
    - Los tres reportes dejan fuera las partidas de cierre.
    - Todos tienen la casilla **Mostrar saldos cero** y el filtro **Nivel**.

### 3.1 Estado de Resultados del Periodo

!!! info "Descripción del reporte"
    Este reporte compara los resultados de un mes contra el acumulado del año. Puede filtrarse por:

    - **Año**
    - **Mes** final
    - **Nivel** de profundidad de las cuentas
    - **Mostrar saldos cero**

    Para este reporte, elija la opción **Periodo Vs Acumulado (Ejercicio)**.

!!! tip "Cómo se calculan las columnas"
    - **Periodo:** va del primer día al último día del mes elegido.
    - **Acumulado:** va del 1 de enero al último día del mes elegido.

!!! example "Cómo sacar el estado de resultados de un mes"
    1. Seleccione **Estado de Resultados del Periodo** en la lista.
    2. Elija la opción **Periodo Vs Acumulado (Ejercicio)**.
    3. Escriba el **Año** y elija el mes final.
    4. Presione **Calcular**. El mensaje **Estado de Resultado finalizado** indica que el cálculo terminó.
    5. Presione **Imprimir** para ver el reporte.

!!! warning "Falta captura"
    Filtros y vista previa del **Estado de Resultados del Periodo**. Nombres sugeridos: `estado_resultados_filtros_01.png`, `estado_resultados_reporte_01.png`.

---

### 3.2 Estado de Resultados Comparativo

!!! info "Descripción del reporte"
    Este reporte compara los resultados de dos años. Compara el año **Desde** contra el año **Hasta**. En los dos años, el cálculo va del 1 de enero al último día del mes elegido.

    Para este reporte, elija la opción **Comparativo**.

!!! note "Impresión"
    Este reporte se imprime con los rubros personalizados de la empresa.

!!! warning "Falta captura"
    Filtros y vista previa del **Estado de Resultados Comparativo**. Nombres sugeridos: `estado_resultados_comp_filtros_01.png`, `estado_resultados_comp_reporte_01.png`.

---

### 3.3 Estado de Resultados Histórico

!!! info "Descripción del reporte"
    Este reporte muestra el historial de resultados de las cuentas.

    - **Periodo:** es el rango de fechas que usted elige.
    - **Acumulado:** incluye todo el movimiento hasta la fecha final.

    Para este reporte, elija la opción **Solo Acumulado - Historico**.

!!! warning "Falta captura"
    Vista previa del **Estado de Resultados Histórico**. Nombre sugerido: `estado_resultados_hist_reporte_01.png`.

---

## **4. Análisis**

### 4.1 Comparativo

!!! info "Descripción del reporte"
    Este reporte compara los montos de las cuentas mes por mes. Sirve para analizar el comportamiento de los gastos y los ingresos por período.

    Para cada cuenta del rango, el reporte muestra una columna por cada mes entre las dos fechas. Puede filtrarse por:

    - Año y mes inicial
    - Año y mes final
    - Rango de cuentas (**Del código** / **al código**)
    - **Mostrar saldos cero**
    - **Mostrar movimientos cero**

!!! note "Solo en pantalla"
    Este reporte se muestra solo en pantalla. Si presiona **Imprimir**, el sistema muestra el aviso **Este reporte no admite impresión en pantalla**.

    Para sacar el reporte, presione **Excel**. El archivo se llama **Reporte comparativo por periodos**.

!!! example "Cómo comparar los gastos de un año"
    1. Seleccione **Comparativo** en la lista.
    2. Escriba el año y el mes inicial. Escriba el año y el mes final.
    3. Escriba el rango de cuentas de gastos.
    4. Presione **Calcular**.
    5. Revise la cuadrícula en pantalla. Presione **Excel** para guardar el análisis.

!!! warning "Falta captura"
    Filtros del **Comparativo** y la cuadrícula con el resultado, y el aviso al presionar **Imprimir**. Nombres sugeridos: `comparativo_filtros_01.png`, `comparativo_resultado_01.png`, `comparativo_sin_impresion_01.png`.

---

### 4.2 Datos para análisis externo

!!! info "Descripción del reporte"
    Esta opción genera un origen de datos con los movimientos contables. Úselo en Excel (tablas dinámicas) u otras herramientas de análisis. Con estos datos puede crear gráficos y reportes dinámicos.

    En esta opción, el botón **Calcular** cambia a **Generar origen de datos**. Puede filtrar por rango de fechas y por el filtro de cuentas (todas, rango o nombre).

!!! tip "Columnas del origen de datos"
    Cada línea es un movimiento contable. Estas son las columnas:

    - **Fecha:** fecha, ejercicio, cuatrimestre, trimestre, periodo, mes, nombre del mes y día.
    - **Cuenta:** cuenta, nombre de la cuenta, nombre completo de la cuenta, cuenta de mayor y su nombre.
    - **Clasificación:** rubro, nombre del rubro y naturaleza.
    - **Partida:** número, tipo (número y nombre), código y referencia.
    - **Descripción:** descripción 1 y descripción 2.
    - **Importes:** **Debe**, **Haber** y saldo, con seis decimales.

!!! tip "Opciones de exportación"
    Después de generar los datos, use **Copiar al portapapeles**, **CSV** o **Excel**. El archivo CSV se llama **ETL Export**.

!!! warning "Avisos del sistema"
    - **No hay cuentas contables:** el catálogo está vacío.
    - **No se encontraron coincidencias de nombres:** el texto de **Nombre de cuenta** no coincide con ninguna cuenta.
    - **No se ingresó ningún nombre de cuenta:** elegió filtrar por nombre y dejó el campo vacío.
    - **No hay datos para generar, favor reintente con parámetros diferentes:** no hay movimientos con esos filtros.
    - **Proceso finalizado, puede proceder con la exportación por medio de los botones correspondientes:** los datos están listos.

!!! example "Cómo preparar los datos para Excel"
    1. Seleccione **Datos para análisis externo** en la lista.
    2. Escriba **De Fecha** y **A la Fecha**.
    3. Presione **Generar origen de datos**.
    4. Espere el aviso **Proceso finalizado**.
    5. Presione **CSV** o **Copiar al portapapeles**.
    6. Abra el archivo en Excel y cree una tabla dinámica.

!!! warning "Falta captura"
    Ejemplo de los datos en una tabla dinámica de Excel. Nombre sugerido: `datos_analisis_externo_excel_01.png`.

---

## **5. Configuración**

!!! info "Configuración de los reportes"
    Esta opción tiene dos botones:

    - **Configuración:** abre la ventana donde se ajustan las opciones más comunes de los reportes.
    - **Seleccionar Impresor:** elige la impresora que usan los reportes.

!!! warning "Falta captura"
    Pantalla **Configuración de los Reportes** y la ventana que abre el botón **Configuración**. Nombres sugeridos: `configuracion_reportes_01.png`, `configuracion_reportes_02.png`.

---

## 🔗 Módulos relacionados

- [Captura de partida contable](captura_partida_contable.md): alta, revisión y vista previa de partidas, incluida la vista previa de varias partidas marcadas.
- [Contabilización automática](contabilizacion_automatica.md): generación de las partidas automáticas.
- [Control de periodos](control_periodos.md): cierres y vigencia contable.
- [Reportes de clientes](../../Reports/categorias/clientes.md): incluye la antigüedad de saldos y los estados de cuenta de clientes.
- [Reportes generales](../../Reports/reportes.md): vista general de las categorías de reportes del sistema.
