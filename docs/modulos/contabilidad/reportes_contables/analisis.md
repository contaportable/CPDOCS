# **Análisis**

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

