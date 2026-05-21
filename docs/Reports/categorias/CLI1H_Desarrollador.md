# Guía de Desarrollo — Gestión de Avisos de Cobro (CLI1H)

## Objetivo Técnico
CLI1H reutiliza el motor `ReportRender` para transformar un reporte legacy en una bandeja operativa de cobranza y envío de correos (Issue #650). Se ha modificado el formato del reporte CLI1A/CLI1H, implementando plantillas de correo dinámicas y ampliando capacidades de exportación y presentación de cuentas.

## Cambios Principales (Issue #650)
1. **Plantillas Dinámicas de Correo:**
   - Se modificó la clase `SendEmailApiMp`.
   - Se agregó el método `CrearPlantillaEmailHTMLBodyPersonalizado()`, el cual permite personalizar dinámicamente todas las secciones de la plantilla HTML del correo basándose en parámetros (incluyendo el cuerpo del correo).
   - *Pruebas de referencia:* Revisar archivo `testenvioemialwithotherbody.prg` en la rama DESARROLLO.
2. **Ampliación de Límite de Caracteres:**
   - Se amplió el campo de número de cuenta bancaria para soportar un mayor límite de caracteres.
3. **Formato de Reporte CLI1H:**
   - Se modificó el formato visual del reporte CLI1H. Ahora muestra el nombre del Banco y el Número de Cuenta separados correctamente.
   - Se solucionaron problemas de previsualización (acoplamiento de toolbar y arrastre de totales en reportes largos de más de 100 facturas).

## Arquitectura y Componentes
1. **Punto de Entrada (Report.sc2):** Detecta `THISFORM.DetailReport == 'CLI1H'`, construye `loCartaCobroContext` con los filtros capturados, instancia `DefineReportRender` y ejecuta `OpenCli1HManager(loCartaCobroContext)`.
2. **Motor ReportRender (LIB1.0/DefineReportRender.prg):**
   - `RR_OpenCLI1HManager()`: Puente de integración entre legacy y host CLI1H. Intenta abrir `avisocobroemailhostform`.
   - `RR_CLI1H_ApplyReportContext()`: Traspasa el contexto de filtros.
   - `RR_CLI1H_BuildManagementCursor()`: Construye y consolida el cursor de gestión por cliente, resuelve correos y prepara columnas operativas.
   - `RR_CLI1H_ReadLog()` y `RR_CLI1H_SaveSendState()`: Gestionan la persistencia en JSON (`cli1h_sendlog.json`) para mantener trazabilidad y el estado de los envíos entre sesiones.
3. **Host de UI (ReportRender.vc2):** Define el contenedor y sus eventos (init, backtofilters, presets).

> [!NOTE]
> **Capturas de Diagrama y Flujo:**
> ![TODO: Insertar Imagen - Entrada Report.sc2]()
> ![TODO: Insertar Imagen - Construcción Cursor]()
> ![TODO: Insertar Imagen - Persistencia JSON]()

## Estructura de Datos
- **Filtros JSON:** `other_modules/CXC/ReportRenderFilters/CLI1H.json`
- **Presets:** `other_modules/CXC/ReportPresets/`
- **Historial (Log):** `other_modules/CXC/ReportRenderData/CLI1H/cli1h_sendlog.json`

## Consideraciones Adicionales y Reglas de Implementación
- El método de correo `CrearPlantillaEmailHTMLBodyPersonalizado()` es reutilizable para cualquier documento que requiera una estructura HTML dinámica (como recibos de ingresos).
- En el despliegue con cuentas Outlook hacia diferentes dominios, los correos pueden ser bloqueados por directivas antispam si el dominio no está autorizado. Esto es un tema de infraestructura externa y permisos de la cuenta administradora del cliente.

> [!WARNING]
> Al realizar despliegues con cuentas OAuth2 o configuraciones específicas de DTE para cobro, asegure que las validaciones de servidor estén cubiertas por las reglas de Firewall locales.

---
*Guía de desarrollo actualizada con base en el alcance del Issue #650 y la integración del módulo ReportRender.*
