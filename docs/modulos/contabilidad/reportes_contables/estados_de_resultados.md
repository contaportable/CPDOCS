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
