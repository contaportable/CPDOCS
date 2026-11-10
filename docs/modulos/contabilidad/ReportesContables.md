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

    click B "reportes_contables/catalogo_y_libros.md" "Ir a catálogo y libros"
    click C "reportes_contables/balances.md" "Ir a balances"
    click D "reportes_contables/estados_de_resultados.md" "Ir a estados de resultados"
    click E "reportes_contables/analisis.md" "Ir a análisis"
    click F "reportes_contables/configuracion.md" "Ir a configuración"
    ```
---
## 📚 Categorías

- [1. Catálogo y libros](reportes_contables/catalogo_y_libros.md): catálogo de cuentas, Libro Diario, Libro Diario Mayor y Libro Auxiliar.
- [2. Balances](reportes_contables/balances.md): balance de comprobación, balance general y sus variantes.
- [3. Estados de resultados](reportes_contables/estados_de_resultados.md): período, comparativo e histórico.
- [4. Análisis](reportes_contables/analisis.md): reporte comparativo y datos para análisis externo.
- [5. Configuración](reportes_contables/configuracion.md): opciones de impresión y de reportes.

---

## 🔗 Módulos relacionados

- [Captura de partida contable](captura_partida_contable.md): alta, revisión y vista previa de partidas, incluida la vista previa de varias partidas marcadas.
- [Contabilización automática](contabilizacion_automatica.md): generación de las partidas automáticas.
- [Control de periodos](control_periodos.md): cierres y vigencia contable.
- [Reportes de clientes](../../Reports/categorias/clientes.md): incluye la antigüedad de saldos y los estados de cuenta de clientes.
- [Reportes generales](../../Reports/reportes.md): vista general de las categorías de reportes del sistema.
