# Dashboard Ejecutivo — Documento de Arquitectura y Flujo

> **Fecha:** Marzo 2026  
> **Proyecto:** Resumen Facturas — Módulo Dashboard  
> **Archivos clave:**  
> - `PRGS/defineDashboardManager.prg` — clase gestora (`yDashboardManager` + `yKPICard`)  
> - `FORMS/resumenfacturas.scx` — formulario principal (binario VFP9)  
> - `FORMS/resumenfacturas.sc2` — fuente texto (FoxBin2PRG)

---

## 1. Resumen Ejecutivo

El módulo Dashboard Ejecutivo muestra **12 indicadores clave (KPI)** del negocio en tarjetas visuales interactivas dentro del formulario principal de la aplicación. Los usuarios pueden:

- Ver de un vistazo ventas, cobros, compras, gastos, nómina, inventario y más.
- **Filtrar por mes y año** con combos en la barra de herramientas.
- **Arrastrar y reorganizar** las tarjetas libremente (drag-and-drop nativo VFP9).
- **Hacer click en cualquier tarjeta** para ver el detalle expandido con grid de datos.
- Imprimir o exportar a Excel el detalle de cada indicador.
- Las posiciones se **guardan automáticamente** por usuario al cerrar el formulario.

---

## 2. Arquitectura: Antes vs. Ahora

### 2.1 Enfoque anterior (Dashboard.sc2 + Utility1)

```
┌──────────────────────────────┐
│  Dashboard.sc2 (Formulario)  │
│   └── Pageframe1             │
│        └── Page1             │
│             └── Utility1     │  ← Objeto visual de indices.vcx
│                  ├── GetWidgets()    │
│                  ├── GetDashboard()  │  Lectura PARAMETROS
│                  ├── SavePosition()  │  Escritura PARAMETROS
│                  ├── AddWidget()     │
│                  └── Arrange()       │
│                                      │
│  Tipo de widgets: "boxinfo",         │
│  "graph_cnconta" (del mismo VCX)     │
└──────────────────────────────┘
```

**Limitaciones:**
- Dependencia directa de `indices.vcx` — cualquier cambio en la librería afecta al dashboard.
- Los widgets son clases visuales pesadas ("boxinfo", "graph_cnconta") definidas en el VCX.
- El formato de persistencia es un string plano `"W:200,H:150,L:10,T:20,Chart:5"` parseado con `ArrayFromList2.prg`.
- No se puede usar el dashboard en formularios que no tengan Utility1 en diseño.

### 2.2 Enfoque nuevo (defineDashboardManager.prg)

```
┌──────────────────────────────────────┐
│  resumenfacturas.scx (Formulario)    │
│   ├── CntDashboardMain (Height=36)   │  ← Barra: título + combos + refresh
│   ├── Pageframe1                     │
│   │    └── Page1                     │  ← Área de tarjetas KPI
│   │         ├── yKPICard_1           │
│   │         ├── yKPICard_2           │
│   │         └── ...yKPICard_12       │
│   └── CntDashboardDetail            │  ← Panel detalle (oculto por defecto)
│                                      │
│  oDashboardManager (propiedad form)  │  ← Instancia de yDashboardManager
│    (defineDashboardManager.prg)       │
│    ├── LoadDashboard()               │
│    ├── BuildKPICards()               │
│    ├── SaveLayout()                  │
│    ├── ApplyMonthYearFilter()        │
│    ├── ArrangeCards()                │
│    ├── ShowDetail() / HideDetail()   │
│    └── PrepareContainers()           │
└──────────────────────────────────────┘
```

**Ventajas:**
1. **Cero dependencias externas** — no necesita Utility1, ni indices.vcx, ni clases del VCX.
2. **Un solo archivo PRG** contiene toda la lógica del dashboard (~560 líneas).
3. **Reutilizable** — se puede instanciar en cualquier formulario con un Pageframe.
4. **Tarjetas livianas** (yKPICard) — contenedores puros de VFP9, sin OLE ni ActiveX.
5. **Persistencia directa** vía `_Screen.YoApp1.GetParam/SetParam` (misma infraestructura existente).
6. **Drag-and-drop nativo** con `DragMode=1` + `Page1.DragOver`, sin BINDEVENT manual.

---

## 3. Flujo Completo Paso a Paso

### 3.1 Inicialización (Init del formulario)

```
Init → AddProperty('oDashboardManager') 
     → NEWOBJECT('yDashboardManager', 'PRGS\defineDashboardManager.prg', .NULL., ThisForm)
```

El manager almacena una referencia a `ThisForm` y queda listo para operar.

### 3.2 Carga del Dashboard (SideBarClick → "Dashboard" o pgDashboard.Activate)

```
controller('SideBarClick') → oDashboardManager.LoadDashboard(.T.)
                                ├── PrepareContainers()
                                │     ├── CntBancos.Visible = .F.
                                │     ├── CntDashboardDetail.Visible = .F.
                                │     ├── CntDashboardMain.Height = 36  (toolbar)
                                │     └── Pageframe1.Visible = .T., Top=36
                                │
                                ├── FillDashboardMonthYear()
                                │     └── model('FillDashboardMonthYear')
                                │         → Llena combos cmbDashboardMes y cmbDashboardAnio
                                │
                                ├── GetDashboardData()
                                │     └── model('GetDashboardData', mes, año)
                                │         → 12 consultas SQL a la BD
                                │         → Genera cursor: curDashboardKPI
                                │           (IdIndicador, Titulo, Valor, Descripcion, ColorR/G/B)
                                │
                                ├── BuildKPICards(Page1)
                                │     ├── Limpia tarjetas anteriores (RemoveObject)
                                │     ├── Para cada registro de curDashboardKPI:
                                │     │   ├── Crea yKPICard con NEWOBJECT
                                │     │   ├── Restaura posición guardada (GetParam)
                                │     │   └── Si no hay posición → layout automático 3 columnas
                                │     └── Cada yKPICard ya tiene DragMode=1
                                │
                                └── UpdateTitle()
                                      └── lblDashboardTitle.Caption = "Dashboard - Mes Año"
```

### 3.3 Drag-and-Drop de Tarjetas

```
Usuario arrastra yKPICard
  → VFP9 dispara DragMode=1 automáticamente
  → Page1.DragOver (ya existe en el form)
      ├── Lee oSource.xadjust, oSource.yadjust (centrar el cursor)
      ├── Calcula nueva posición = nXCoord - xadjust
      └── Mueve oSource.Left, oSource.Top
```

No requiere BINDEVENT, MouseDown, MouseMove, MouseUp. VFP9 maneja todo nativamente.

### 3.4 Persistencia (SaveLayout)

```
QueryUnload → oDashboardManager.SaveLayout()
                ├── Para cada yKPICard en Page1:
                │     key = "DashCardPos_[nKPIId]"
                │     value = "Left,Top"
                │     → SetParam(key, value)
                └── Los parámetros se guardan en tabla PARAMETROS
```

Al reabrir, `BuildKPICards` lee los mismos parámetros con `GetParam` y restaura posiciones.

### 3.5 Filtro por Mes/Año

```
Usuario cambia combo → InteractiveChange
  → controller('DashboardMonthYearChange')
    → oDashboardManager.ApplyMonthYearFilter()
        ├── Lee BoundValue de cmbDashboardMes y cmbDashboardAnio
        ├── model('GetDashboardData', mes, año) → recalcula KPIs
        ├── BuildKPICards() → recrea tarjetas con nuevos valores
        └── UpdateTitle() → actualiza título con mes/año
```

### 3.6 Click en Tarjeta → Detalle

```
yKPICard.Click → oDashboardManager.ShowDetail(nKPIId)
                   ├── model('GetDashboardDetail', nKPIId)
                   │     → Consulta SQL detallada → cursor curDashboardDetail
                   └── view('ShowDashboardDetail', nKPIId)
                         ├── Oculta Pageframe1 + CntDashboardMain
                         ├── Muestra CntDashboardDetail
                         └── Llena grid con curDashboardDetail

Botón "Volver" → view('HideDashboardDetail')
                   ├── CntDashboardDetail.Visible = .F.
                   ├── CntDashboardMain.Visible = .T. (Height=36)
                   └── Pageframe1.Visible = .T.
```

---

## 4. Los 12 KPIs del Dashboard

| # | Indicador | Descripción |
|---|-----------|-------------|
| 1 | Ventas del Período | Total facturado en el mes/año seleccionado |
| 2 | Cobros | Total de cobros realizados |
| 3 | Top Productos | Productos más vendidos |
| 4 | Cuentas por Cobrar | Saldo pendiente de clientes |
| 5 | Cuentas por Pagar | Saldo pendiente a proveedores |
| 6 | Compras | Total de compras del período |
| 7 | Gastos | Total de gastos operativos |
| 8 | Flujo de Caja | Movimientos bancarios netos |
| 9 | Órdenes de Compra | Estado de órdenes pendientes |
| 10 | Top Clientes | Clientes con mayor facturación |
| 11 | Nómina | Gastos de personal del período |
| 12 | Inventario | Valor y estado del inventario |

Cada KPI se obtiene mediante consulta SQL directa a la base de datos del ERP, consolidados en el cursor `curDashboardKPI`.

---

## 5. Integración con JSON y Persistencia

El sistema utiliza la infraestructura existente de `_Screen.YoApp1` para persistir el estado del dashboard:

- **`GetParam(key)`** — Lee un valor de la tabla PARAMETROS para el usuario actual.
- **`SetParam(key, value)`** — Escribe/actualiza un valor en PARAMETROS.

**Claves utilizadas:**

| Clave | Formato | Ejemplo |
|-------|---------|---------|
| `DashCardPos_[n]` | `"Left,Top"` | `"248,118"` |

Esta integración permite que en el futuro se pueda migrar fácilmente a JSON completo (usando `jsonfox.app` que ya está en el proyecto) para almacenar layouts más complejos con dimensiones, tipo de gráfico, filtros personalizados por tarjeta, etc.

---

## 6. Por Qué Este Enfoque es Superior

| Aspecto | Dashboard Anterior (Utility1) | Dashboard Nuevo (Manager PRG) |
|---------|-------------------------------|-------------------------------|
| **Dependencias** | indices.vcx + clases VCX | 1 archivo PRG, cero dependencias |
| **Líneas de código en el form** | ~700+ líneas de BINDEVENT, hover, drag manual | ~10 líneas (solo delega al manager) |
| **Drag-and-drop** | Manual con MouseDown/Move/Up + 8 BINDEVENTs por tarjeta | Nativo VFP9 `DragMode=1` + DragOver |
| **Hover/efectos** | BINDEVENT manual en cada control hijo | Manejado por yKPICard.MouseEnter/Leave |
| **Reutilización** | Solo funciona en forms con Utility1 en diseño | Cualquier form con un Pageframe |
| **Mantenimiento** | Cambiar VCX puede romper múltiples forms | Un PRG aislado, versionable con Git |
| **Testing** | Difícil, depende de UI visual | Se puede instanciar y probar el PRG |
| **Persistencia** | String "K:V,K:V" + ArrayFromList2.prg | GetParam/SetParam directo |

---

## 7. Ideas para Mejoras Futuras

### 7.1 Corto Plazo (próximas semanas)
- **Gráficos integrados:** Usar FoxyPreviewer + FoxCharts (ya están en el proyecto) para generar gráficos de barras/pastel/línea dentro de cada tarjeta KPI.
- **Animación de carga:** Mostrar un "skeleton loader" mientras se ejecutan las consultas SQL.
- **Tooltips contextuales:** Al pasar sobre una tarjeta, mostrar variación vs. mes anterior (↑ +12%, ↓ -3%).

### 7.2 Mediano Plazo (1-2 meses)
- **Layout JSON completo:** Migrar la persistencia a un JSON estructurado (usando `jsonfox.app`), almacenando no solo posición sino también:
  - Dimensiones personalizadas (tarjetas expandibles)
  - Tipo de gráfico preferido por KPI
  - Filtros activos por tarjeta
  - Orden de prioridad visual
- **Dashboard configurable:** Permitir al usuario elegir qué KPIs mostrar/ocultar.
- **Alertas visuales:** Tarjetas que cambian de color cuando un KPI supera un umbral definido (ej: CxC > $100,000 → rojo parpadeante).

### 7.3 Largo Plazo (3+ meses)
- **Múltiples dashboards:** Guardar y alternar entre layouts nombrados ("Vista Gerencial", "Vista Contable", "Vista Ventas").
- **API REST:** Exponer los KPIs como endpoints JSON usando VFPConnection.fll para consumo desde un dashboard web complementario.
- **Comparativas automáticas:** Mostrar indicadores vs. período anterior, vs. presupuesto, vs. meta.
- **Exportación PDF:** Generar un reporte PDF del dashboard completo con FoxyPreviewer para envío por correo.

---

## 8. Resumen Técnico para TI

```
Archivos involucrados:
  PRGS/defineDashboardManager.prg  → Clase gestora + clase yKPICard (~560 líneas)
  FORMS/resumenfacturas.scx/.sct   → Formulario binario (ejecutable)
  FORMS/resumenfacturas.sc2        → Fuente texto (versionable)

Dependencias en runtime:
  _Screen.YoApp1.GetParam()/.SetParam()  → Lectura/escritura en PARAMETROS
  Conexión a BD del ERP                  → Para las 12 consultas SQL de KPIs

No requiere:
  × indices.vcx / Utility1
  × ArrayFromList2.prg
  × Clases "boxinfo" o "graph_cnconta"
  × BINDEVENT para drag-and-drop
```
