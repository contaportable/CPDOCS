# **Balances**

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
      end

      A --> B
      A --> C
      A --> D
      A --> E

    click B "#21-balance-de-comprobacion" "Ir a balance de comprobación"
    click C "#22-balance-general" "Ir a balance general"
    click D "#23-balance-general-tipo-reporte" "Ir a balance general tipo reporte"
    click E "#24-balance-general-comparativo" "Ir a balance general comparativo"
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
    - **Nivel:** es la longitud máxima del código que el reporte muestra. El reporte omite las cuentas con un código más largo. El valor inicial muestra todos los niveles. En la captura es **11**.
    - **Mostrar saldos cero:** si no marca la casilla, el reporte quita las cuentas con saldo final igual a cero.
    - **Mostrar movimientos cero:** si no marca la casilla, el reporte quita las cuentas donde el saldo inicial, **Debe**, **Haber** y saldo final son cero.
    - **Solo Cuentas de Detalle:** quita las cuentas de mayor. Quedan solo las cuentas que reciben saldo directo en las partidas.
    - **Balance de Saldos:** muestra el saldo neto de cada cuenta en una sola columna, según su naturaleza. Una cuenta deudora muestra su saldo en **Debe**. Una cuenta acreedora lo muestra en **Haber**.
    - **Balance de Saldos Comprobatorio:** igual que **Balance de Saldos**, pero el saldo acreedor sale negativo. Esta opción es la **balanza de comprobación**: la suma de los saldos finales debe dar cero.

!!! example "Cómo comprobar que la contabilidad cuadra"
    1. Seleccione **Balance de Comprobacion** en la lista.
    2. Escriba el rango de fechas.
    3. Marque **Balance de Saldos Comprobatorio**.
    4. Presione **Calcular**.
    5. Revise el total del saldo final. Debe ser cero. Si no es cero, revise las partidas del período.

   ![Pantalla de filtros del Balance de Comprobación](../../../assets/contabilidad/reportes_contables/balance_comprobacion_filtros_01.png){ align=center }

!!! note "Vista previa del reporte"
    El encabezado muestra el período, si **Mostrar Saldos** y **Mostrar movimientos cero** están activos, y los rubros de las cuentas, como **Activo**. Cada línea muestra el **Código**, el **Nombre**, el **Saldo Inicial**, el **Debe**, el **Haber** y el **Saldo**.

   ![Vista previa del Balance de Comprobación](../../../assets/contabilidad/reportes_contables/balance_comprobacion_reporte_01.png){ align=center }

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
