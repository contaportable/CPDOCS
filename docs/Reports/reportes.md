# Reportes

Se explica uso y organización de reportes en **contaportable**.

## Archivos

1. **Definereport.prg**: Se creó para poder iniciar el traslado de todos los reportes a código.
2. Contiene dos clases principales: Reportes.

!!! note "**Clases Statement contenidas en DefineReport.prg**"
    1. StatementSTM: Reportes de sistema.
    2. StatementINV: [Reportes de inventario](categorias/inventario.md){ .md-button--primary }
    3. StatementCLI: [Reportes de clientes](categorias/clientes.md){ .md-button--primary }
    4. StatementIVA: [Reportes de impuestos](categorias/impuestos.md){ .md-button--primary }
    5. StatementReportListener: Actúa como controlador de errores, al mismo tiempo, valida los tamaños adecuados para la impresión de reportes

??? info "**Reports** es el formulario principal que utiliza las clases"  
    FORMS\Report.sc2 Se usa para invocar las clases Statement y setear la parametrería de los reportes
