# **Estados de resultados**

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

    - **Mes**
    - **Año**
    - **Nivel** de profundidad de las cuentas
    - **Título** y **Subtítulo**

    En la lista aparece como **Estado de Resultados del Periodo**, y la pantalla lo titula **Estado de Resultados - Periodo Vs Ejercicio**.

   ![Pantalla de filtros del Estado de Resultados del Periodo](../../../assets/contabilidad/reportes_contables/estado_resultados_filtros_01.png){ align=center }

!!! note "Columnas de la cuadrícula"
    La cuadrícula muestra el **Código**, el **Nombre de Cuenta** y dos pares de columnas: **Parcial** y **Saldo del Periodo**, y **Parcial** y **Saldo del Ejercicio**. Entre las cuentas aparecen los subtotales, como la **Utilidad Bruta** y la **Utilidad Neta**.

!!! tip "Cómo se calculan las columnas"
    - **Periodo:** va del primer día al último día del mes elegido.
    - **Acumulado:** va del 1 de enero al último día del mes elegido.

!!! example "Cómo sacar el estado de resultados de un mes"
    1. Seleccione **Estado de Resultados del Periodo** en la lista.
    2. Elija la opción **Periodo Vs Acumulado (Ejercicio)**.
    3. Escriba el **Año** y elija el mes final.
    4. Presione **Calcular**. El mensaje **Estado de Resultado finalizado** indica que el cálculo terminó.
    5. Presione **Imprimir** para ver el reporte.

!!! note "Vista previa del reporte"
    El encabezado muestra el mes y el año del reporte, por ejemplo **Estado de Resultados Enero 2026**. La vista previa tiene dos columnas de saldos: **Saldos del Periodo** y **Saldos del Ejercicio**. Al final aparecen las firmas del gerente general, el contador y el representante legal.

   ![Vista previa del Estado de Resultados del Periodo](../../../assets/contabilidad/reportes_contables/estado_resultados_reporte_01.png){ align=center }

---

### 3.2 Estado de Resultados Comparativo

!!! info "Descripción del reporte"
    Este reporte compara los resultados de dos años. Compara el año **Desde** contra el año **Hasta**. En los dos años, el cálculo va del 1 de enero al último día del mes elegido.

    Para este reporte, elija la opción **Comparativo**.

!!! note "Impresión"
    Este reporte se imprime con los rubros personalizados de la empresa.

!!! note "Vista previa del reporte"
    El encabezado es **Estado de Resultados Comparativo**. Hay una columna para el año **Desde** y otra para el año **Hasta**. Cada columna muestra los ingresos, los costos, los gastos y las utilidades.

   ![Vista previa del Estado de Resultados Comparativo](../../../assets/contabilidad/reportes_contables/estado_resultados_comp_reporte_01.png){ align=center }

!!! warning "Falta captura"
    Filtros del **Estado de Resultados Comparativo**. Nombre sugerido: `estado_resultados_comp_filtros_01.png`.

---

### 3.3 Estado de Resultados Histórico

!!! info "Descripción del reporte"
    Este reporte muestra el historial de resultados de las cuentas.

    - **Periodo:** es el rango de fechas que usted elige.
    - **Acumulado:** incluye todo el movimiento hasta la fecha final.

    Para este reporte, elija la opción **Solo Acumulado - Historico**.

!!! note "Vista previa del reporte"
    El encabezado muestra el rango de fechas del reporte, por ejemplo **Estado de Resultados 01/01/2026 al 30/11/2026**. La vista previa tiene dos columnas: **Saldos del Periodo** y **Saldos acumulados**.

   ![Vista previa del Estado de Resultados Histórico](../../../assets/contabilidad/reportes_contables/estado_resultados_hist_reporte_01.png){ align=center }
