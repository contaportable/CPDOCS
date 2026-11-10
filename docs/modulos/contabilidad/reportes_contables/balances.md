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
    Este reporte muestra la situación financiera de la empresa a una fecha. Presenta **Activo** y **Pasivo** en dos columnas, con sus rubros, subcuentas y saldos.

    En la lista aparece como **Balance General**, y la pantalla de filtros lo titula **Balance General Tipo Cuenta**. Puede ajustar:

    - **Nivel:** la profundidad de las cuentas que se muestran. El valor inicial es **4**.
    - **Compactación:** el espacio entre las líneas. Puede elegir **Compacto**, **Semi Compacto** o **Normal**. El valor inicial es **Semi Compacto**.
    - **A la fecha:** la fecha de corte del balance. El valor inicial es la fecha de hoy.
    - **Título** y **Subtítulo:** los textos del encabezado. El subtítulo inicial indica que el reporte está expresado en dólares de los Estados Unidos.
    - **Mostrar saldos cero:** si la marca, incluye las cuentas con saldo cero.

!!! note "Campos deshabilitados"
    **Desde** y **Hasta** aparecen en gris en este reporte. Solo se usan en el [Balance General Comparativo](#24-balance-general-comparativo).

!!! note "Utilidad del ejercicio"
    La utilidad aparece bajo **Resultados por aplicar**, con dos líneas: **Utilidades de ejercicios anteriores** y **Utilidad del presente ejercicio**. La utilidad del ejercicio es igual a los ingresos menos los costos y los gastos.

   ![Pantalla de filtros del Balance General](../../../assets/contabilidad/reportes_contables/balance_general_filtros_01.png){ align=center }

!!! example "Cómo sacar el balance general"
    1. Seleccione **Balance General** en la lista.
    2. Escriba la **A la fecha** de corte.
    3. Elija la **Compactación** y el **Nivel** que necesite.
    4. Presione **Calcular**. La cuadrícula muestra las columnas **Código**, **Nombre**, **Sub Cuenta**, **Cuenta** y **Rubro**.
    5. Presione **Imprimir** para ver la vista previa.

   ![Vista previa del Balance General](../../../assets/contabilidad/reportes_contables/balance_general_reporte_01.png){ align=center }

---

### 2.3 Balance General Tipo Reporte

!!! info "Descripción del reporte"
    Este reporte muestra los mismos saldos que el [Balance General](#22-balance-general), con el formato de cuentas por rubro. En la cuadrícula, **Activo** aparece primero y **Pasivo** debajo, en una sola columna de filas.

    Los filtros son los mismos del Balance General: **Nivel**, **Compactación**, **A la fecha**, **Título**, **Subtítulo** y **Mostrar saldos cero**. **Desde** y **Hasta** aparecen en gris.

   ![Pantalla de filtros del Balance General Tipo Reporte](../../../assets/contabilidad/reportes_contables/balance_tipo_reporte_filtros_01.png){ align=center }

!!! note "Vista previa del reporte"
    La vista previa muestra **Activo** con sus rubros y el **Total Activo**. Después muestra **Pasivo**, con el mismo formato.

   ![Vista previa del Balance General Tipo Reporte](../../../assets/contabilidad/reportes_contables/balance_tipo_reporte_reporte_01.png){ align=center }

---

### 2.4 Balance General Comparativo

!!! info "Descripción del reporte"
    Este reporte compara los saldos de dos años. Muestra dos bloques de cuentas, uno al lado del otro: el de la izquierda corresponde al año **Desde** y el de la derecha al año **Hasta**. Cada bloque tiene las columnas **Código**, **Nombre**, **Sub Cuenta**, **Cuenta** y **Rubro**.

    En este reporte, **A la fecha** aparece en gris. Los años se escriben en **Desde** y **Hasta**. Los demás filtros son los mismos del [Balance General](#22-balance-general).

   ![Pantalla de filtros del Balance General Comparativo](../../../assets/contabilidad/reportes_contables/balance_comparativo_filtros_01.png){ align=center }

!!! example "Cómo comparar dos años"
    1. Seleccione **Balance General Comparativo** en la lista.
    2. Escriba el año **Desde** y el año **Hasta**.
    3. Presione **Calcular**.
    4. Revise los dos bloques de cuentas en la cuadrícula.
    5. Presione **Imprimir** para ver el reporte.

!!! note "Vista previa del reporte"
    La vista previa muestra los saldos del balance general en dos columnas: una por el año **Desde** y otra por el año **Hasta**. Cada rubro tiene su total. Después del **Total de Activo** aparece **Pasivo**.

   ![Vista previa del Balance General Comparativo](../../../assets/contabilidad/reportes_contables/balance_comparativo_reporte_01.png){ align=center }
