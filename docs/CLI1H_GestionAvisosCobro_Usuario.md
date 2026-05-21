# CLI1H - Gestion de Avisos de Cobro - Guia de Usuario

## Objetivo

CLI1H permite gestionar avisos de cobro por cliente desde una bandeja operativa. En esta vista puede:

1. Revisar saldos y antiguedad de deuda.
2. Confirmar correo destino.
3. Consultar estado previo de envio.
4. Ejecutar envio individual o masivo.

## Alcance

Esta guia cubre el flujo completo de uso, desde abrir el reporte hasta validar el resultado de envio, con espacios para capturas que luego se incrustan en PDF.

## Flujo operativo paso a paso (con captura)

### Paso 1. Abrir reportes de clientes

Ingrese a la pantalla de reportes de clientes desde el menu principal.

![Paso 1 - Menu reportes](capturas/cli1h/01_menu_reportes_clientes.png)

Comentario para PDF: "Iniciamos en la pantalla de reportes de clientes, donde seleccionaremos el reporte operativo CLI1H."

### Paso 2. Seleccionar reporte CLI1H

Seleccione el reporte CLI1H en el listado de reportes.

![Paso 2 - Seleccion CLI1H](capturas/cli1h/02_seleccion_reporte_cli1h.png)

Comentario para PDF: "Aqui se elige CLI1H, que es la bandeja de gestion de avisos de cobro."

### Paso 3. Completar filtros

Defina los filtros requeridos:

1. Fecha de corte.
2. Rango de clientes.
3. Inclusion de afiliadas.
4. Fecha Q.
5. Departamento.
6. Cuentas bancarias.

![Paso 3 - Filtros CLI1H](capturas/cli1h/03_filtros_cli1h.png)

Comentario para PDF: "En este paso delimitamos el universo de clientes y documentos pendientes que se incluiran en la bandeja."

### Paso 4. Ejecutar reporte

Ejecute el reporte para abrir la ventana dedicada de gestion CLI1H.

![Paso 4 - Ejecutar reporte](capturas/cli1h/04_ejecutar_reporte_cli1h.png)

Comentario para PDF: "Al ejecutar, el sistema transforma los filtros del formulario legacy al motor dinamico de ReportRender."

### Paso 5. Revisar bandeja de resultados

Valide columnas clave antes de cualquier accion:

1. Accion.
2. IDCliente.
3. Clinombre.
4. Email.
5. CantDoc.
6. Saldo.
7. DiasMax.
8. Estado.
9. FhSent.
10. Mensaje.

![Paso 5 - Bandeja CLI1H](capturas/cli1h/05_bandeja_resultados_cli1h.png)

Comentario para PDF: "La bandeja consolida por cliente y recupera estado previo para evitar reprocesos innecesarios."

### Paso 6. Buscar por columna

Use el combo de "busqueda por columna" y escriba criterio en la caja de busqueda para filtrar resultados.

![Paso 6 - Busqueda por columna](capturas/cli1h/06_busqueda_por_columna.png)

Comentario para PDF: "La busqueda por columna facilita enfocar clientes concretos por nombre, correo o identificador."

### Paso 7. Configurar cuenta de correo

Abra configuracion de correo para validar:

1. Proveedor.
2. Tipo de autenticacion.
3. Remitente.
4. Correo copia.
5. Plantilla de asunto y mensaje.

![Paso 7 - Configuracion correo](capturas/cli1h/07_configuracion_correo_cli1h.png)

Comentario para PDF: "Antes de enviar, se revisa la cuenta activa para asegurar proveedor, autenticacion y remitente correctos."

### Paso 8. Enviar individual o masivo

Puede enviar:

1. Individual desde la fila.
2. Masivo con el boton "Enviar todos".

![Paso 8 - Envio individual y masivo](capturas/cli1h/08_envio_individual_masivo.png)

Comentario para PDF: "Se permite envio puntual por cliente o ejecucion masiva sobre todos los pendientes."

### Paso 9. Monitorear progreso y estado

Durante envio masivo, revise barra de progreso y actualizacion de estado por fila.

![Paso 9 - Progreso envio](capturas/cli1h/09_progreso_envio_cli1h.png)

Comentario para PDF: "El sistema muestra avance del lote y actualiza estado/mensaje por cliente en tiempo real."

### Paso 10. Verificar resultado final

Confirme estados "enviado" o "error" y valide detalle en la columna mensaje.

![Paso 10 - Resultado final](capturas/cli1h/10_resultado_final_cli1h.png)

Comentario para PDF: "Finalizamos verificando trazabilidad del envio para control operativo y seguimiento."

## Vistas guardadas

1. Guardar Vista: guarda combinacion actual de filtros y busqueda para reutilizarla.
2. Cargar Vista: recupera una configuracion previamente guardada del mismo reporte.

![Vistas guardadas](capturas/cli1h/11_vistas_guardadas_cli1h.png)

Comentario para PDF: "Las vistas guardadas aceleran la operacion diaria con escenarios recurrentes."

## Comportamiento del boton Cerrar

En CLI1H, el boton de regreso cierra la ventana completa de gestion. No retorna al contenedor interno de filtros porque el flujo funciona como herramienta operativa independiente.

## Checklist para exportar a PDF con comentario

1. Verificar que las 11 capturas esten incrustadas y visibles.
2. Confirmar que cada paso tiene su linea "Comentario para PDF".
3. Exportar a PDF manteniendo orden secuencial de pasos.
4. Usar el comentario de cada paso como guion narrado en la presentacion.

## Observaciones operativas

1. Si la ventana no abre, el sistema muestra mensaje de fallo de apertura CLI1H.
2. El estado mostrado depende del historial JSON y deteccion de PDFs en carpetas configuradas.
3. Si una vista guardada no aparece, valide que pertenezca al reporte CLI1H.
