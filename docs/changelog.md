# Changelog ContaPortable
---

## 2026-09-22

### 📝 Nuevas Características
- Cambio: Actualizador del sistema con validación de membresía y respaldos ZIP.
- Descripción: Se incorpora el nuevo actualizador con verificación de membresía, respaldos preventivos empaquetados en archivos ZIP y función de reversión de versiones sin afectar datos contables.

### 🐞 Corrección de Errores (Bugs)
- Cambio: Tipografía en formato de impresión de partidas contables.
- Descripción: Se ajusta la fuente tipográfica en el formato de impresión de partidas contables para mejorar la legibilidad y presentación formal.

---

## 2026-09-21

### 📝 Nuevas Características
- Cambio: Reactivación de la gestión de Cuentas por Cobrar (CXC) en facturación.
- Descripción: Se reincorpora la opción de Gestionar CXC desde la emisión de facturas manteniendo la compatibilidad con la normativa DTE 2.0.

### 🐞 Corrección de Errores (Bugs)
- Cambio: Visualización de resultados en reportes de proyectos y gastos.
- Descripción: Se soluciona el inconveniente en la versión INVFACT2 donde los reportes de proyectos y gastos no mostraban registros bajo ciertos filtros.

---

## 2026-09-18

### 🐞 Corrección de Errores (Bugs)
- Cambio: Corrección de desbordamiento visual en listado de depósitos bancarios.
- Descripción: Se amplía la capacidad de la columna Total en la cuadrícula de depósitos bancarios para mostrar cifras elevadas sin presentar asteriscos por desbordamiento.

---

## 2026-09-17

### 📝 Nuevas Características
- Cambio: Canal de descarga de actualizaciones en repositorio optimizado.
- Descripción: Se añade compatibilidad de canales y optimización en la velocidad de descarga de paquetes de actualización del sistema.

### 🐞 Corrección de Errores (Bugs)
- Cambio: Corrección de valores nulos en reportes de bancos y gastos.
- Descripción: Se corrigen inconsistencias por campos NULL en la generación de los reportes Auxiliar de Bancos (BAN11) y Consolidado de Gastos (GAS12).
- Cambio: Validación de campos en generación de ajustes de inventario físico.
- Descripción: Se corrigen las variables al aplicar ajustes y devoluciones de documentos en el generador de inventario físico.
- Cambio: Corrección ortográfica en componente selector de fechas.
- Descripción: Se corrige la escritura del mes de septiembre en el control desplegable de selección de fechas de la interfaz.

---

## 2026-09-16

### 📝 Nuevas Características
- Cambio: Integración de verificación de membresía en el actualizador.
- Descripción: Se añade la verificación automática del estado de membresía para la descarga e instalación de actualizaciones del sistema.

### 🐞 Corrección de Errores (Bugs)
- Cambio: Cálculo de totales e IVA en Órdenes de Gasto relacionadas a depósitos.
- Descripción: Se ajusta la lectura del total de cabecera en Órdenes de Gasto para calcular correctamente montos y saldos con IVA incluido al asociarlas en depósitos.
- Cambio: Depuración de valores nulos en reporte de salidas por cliente.
- Descripción: Se asegura la correcta sustitución de valores nulos en consultas del reporte de salidas de inventario por cliente.

---

## 2026-09-09

### 🐞 Corrección de Errores (Bugs)
- Cambio: Corrección en libro de ventas al consumidor en Informes/Anexos.
- Descripción: Se soluciona el error de impresión en la variante 1 del libro de ventas a consumidor final dentro del módulo de anexos tributarios.

---

## 2026-09-08

### 📝 Nuevas Características
- Cambio: Inclusión de rango de documentos en partida diaria de ventas.
- Descripción: Se añade la visualización del rango correlativo de documentos involucrados al contabilizar partidas diarias de ventas.

### 🐞 Corrección de Errores (Bugs)
- Cambio: Corrección del reporte de salidas por cliente.
- Descripción: Se muestra el nombre de cliente para las requisiciones en el reporte, además de las observaciones que ya se incluían.
- Descripción: Se muestra el nombre de cliente para las requisiciones en el reporte, además de las observaciones que ya se incluían, y se incorpora vista previa y exportación adecuada a Excel.

---

## 2026-09-07

### 🐞 Corrección de Errores (Bugs)
- Cambio: Redondeo exacto en reportes de antigüedad de saldos.
- Descripción: Se ajusta el cálculo a dos decimales exactos en los reportes de antigüedad de saldos para eliminar residuos centesimales y evitar descuadres.
- Cambio: Contabilización independiente del anexo de percepción (Casilla 163).
- Descripción: Se define una ruta específica para que la partida única contable solo considere el 1% de percepción correspondiente, evitando duplicidades.

---

## 2026-09-04

### 📝 Nuevas Características
- Cambio: Alerta informativa en productos sin movimientos en catálogo.
- Descripción: Se incluye un mensaje de advertencia al usuario al intentar imprimir la ficha de un ítem que no cuenta con movimientos registrados.

### 🐞 Corrección de Errores (Bugs)
- Cambio: Eliminación de duplicidad de facturas por contactos principales en CLI17.
- Descripción: Se corrige la consulta para evitar registros repetidos en el reporte de facturación y en su exportación a Excel cuando existen múltiples contactos asociados al cliente.
- Cambio: Precisión y prevención de desbordamiento numérico en órdenes de producción.
- Descripción: Se amplía la precisión del cálculo de costo en requisiciones originadas desde órdenes de producción para evitar desbordamientos numéricos.

---

## 2026-09-01

### 🐞 Corrección de Errores (Bugs)
- Cambio: Corrección del error en contabilización de depósitos bancarios.
- Descripción: Se mejora la forma en que se contabilizan los depósitos bancarios en el sistema.
- Descripción: Se mejora la forma en que se contabilizan los depósitos bancarios en el sistema evitando inconsistencias de línea al generar la partida.
- Cambio: Ordenamiento de detalle de partida contable.
- Descripción: Se asegura que el ordenamiento de las líneas de detalle de la partida sea consistente al imprimir y consultar.

---

## 2026-08-31

### 🐞 Corrección de Errores (Bugs)
- Cambio: Preservación de descripciones ingresadas por el usuario en partidas contables.
- Descripción: Se corrige la sobreescritura de descripciones personalizadas en las líneas de detalle de las partidas.

---

## 2026-08-28

### 🐞 Corrección de Errores (Bugs)
- Cambio: Corrección de ordenamiento de líneas de partida por secuencia.
- Descripción: Con esto se logra un orden correcto de las líneas de partida según su secuencia, mejorando la claridad y consistencia en los reportes y así mismo en la interfaz de partidas
- Descripción: Con esto se logra un orden correcto de las líneas de partida según su secuencia, mejorando la claridad y consistencia en los reportes y así mismo en la interfaz de partidas.

---

## 2026-08-27

### 📝 Nuevas Características
- Cambio: Consideración de eventos de retorno en saldo disponible de depósitos.
- Descripción: Se incorpora el evento de retorno en el cálculo de saldos disponibles y se añade la columna de número de documento en la pestaña de cargos.

---

## 2026-08-18

### 📝 Nuevas Características
- Cambio: Habilitación de Gestión de CXC en Factura Consumidor Final.
- Descripción: Se restablece el acceso directo a la gestión de Cuentas por Cobrar en conjunto con la normativa DTE 2.0.

### 🐞 Corrección de Errores (Bugs)
- Cambio: Eliminación de total duplicado al pie del libro de compras.
- Descripción: Se remueve la fila repetida de totales en el pie de página de las tres variantes del reporte del libro de compras en informes.
- Cambio: Validación de códigos duplicados en documentos anulados.
- Descripción: Se optimiza la normalización y comparación de códigos reales para evitar falsos positivos por ceros o espacios vacíos.

---

## 2026-08-14

### 🐞 Corrección de Errores (Bugs)
- Cambio: Corrección en generación de partida diaria de ventas por departamento.
- Descripción: Se subsana la discrepancia de saldos al generar partidas contables agrupadas por departamento bajo el parámetro CONTAFACTX.

---

## 2026-08-13

### 📝 Nuevas Características
- Cambio: Acceso directo al mantenimiento de formas de pago.
- Descripción: Se añade la opción para crear y configurar formas de pago directamente desde la pestaña de facturación.
- Cambio: Ampliación de descripción para libros de IVA en Excel.
- Descripción: Se incrementa el límite de caracteres en la columna de descripción al exportar libros de IVA a hojas de cálculo.
- Cambio: Adaptación de reportes de movimientos de inventario con códigos de generación.
- Descripción: Se adecuan los reportes INV32 e INV37 para soportar códigos de generación y exportación fidedigna a Excel.

### 🐞 Corrección de Errores (Bugs)
- Cambio: Corrección en reporte de retenciones de renta en planillas.
- Descripción: Se soluciona la falta de registros al imprimir el reporte consolidado de retenciones de renta.

---

## 2026-08-12

### 📝 Nuevas Características
- Cambio: Estandarización fiscal de reportes de libros de IVA.
- Descripción: Se incorpora dirección, NIT y leyenda de moneda de curso legal en los encabezados de los libros de IVA según los requerimientos de auditoría y administración tributaria.

---

## 2026-08-11

### 📝 Nuevas Características
- Cambio: Ampliación de espacios para nombres de empresas largos en reportes contables.
- Descripción: Se reestructuran los encabezados de la reportería contable para admitir razones sociales extensas sin truncamiento.

### 🐞 Corrección de Errores (Bugs)
- Cambio: Ampliación de máscaras de impresión en libro de compras F07.
- Descripción: Se amplían los formatos numéricos en F07_21 para permitir cifras en el orden de millones sin cortes visuales.

---

## 2026-08-10

### 🐞 Corrección de Errores (Bugs)
- Cambio: Contabilización de Anticipo a Cuenta 2% en Documentos Contables de Liquidación (DCL).
- Descripción: Se corrige el descuadre de partida única asignando el mismo monto del anticipo tanto en el débito como en el crédito e identificando la cuenta de contrapartida adecuada.

---

## 2026-07-31

### 📝 Nuevas Características
- Cambio: Totales generales en resumen de entradas y salidas de inventario (INV35).
- Descripción: Se incorpora la fila de totalización al final del reporte de movimientos de inventario por código.

### 🐞 Corrección de Errores (Bugs)
- Cambio: Tratamiento de notas de crédito en liquidación de IVA.
- Descripción: Se asegura que las notas de crédito resten adecuadamente las percepciones de IVA en el reporte de liquidación de impuestos.
- Cambio: Clasificación de importaciones gravadas de servicios en libro de compras.
- Descripción: Se corrigen las 3 variantes del libro de compras para reflejar los servicios gravados importados en su columna correspondiente en lugar de exentos.
- Cambio: Manejo contable de DTE invalidados en meses posteriores.
- Descripción: Los reportes de antigüedad y estados de cuenta reflejan los documentos invalidados fuera de período en negativo respetando los principios contables.
- Cambio: Prevención de movimientos huérfanos al eliminar partidas contables.
- Descripción: Se garantiza la limpieza íntegra de registros en auditoría al eliminar partidas en períodos autorizados.

---

## 2026-07-27

### 📝 Nuevas Características
- Cambio: Nueva interfaz de depósitos bancarios multidocumento.
- Descripción: Se optimiza la carga y visualización de saldos permitiendo asociar múltiples facturas a un único depósito.

### 🐞 Corrección de Errores (Bugs)
- Cambio: Contabilización de retaceos en Quedans y cheques.
- Descripción: Se corrige la cuenta de contrapartida aplicada a retaceos al contabilizar quedans y notas de cargo.
- Cambio: Bucle de cálculo en techo de ISSS en planillas.
- Descripción: Se corrige la rutina de cálculo de deducciones del seguro social para que procese correctamente la nómina completa de colaboradores sin interrupciones.

---

## 2026-07-25

### 📝 Nuevas Características
- Cambio: Incorporación de eventos de retorno en reportes de inventario y clientes.
- Descripción: Se reflejan los eventos de retorno en los reportes de ventas, consultas de existencias de inventario y estados de cuenta.

---

## 2026-07-24

### 📝 Nuevas Características
- Cambio: Eventos de retorno en anexos de IVA y exportación CSV.
- Descripción: Se adaptan los generadores de CSV de ventas al consumidor y compras a sujetos excluidos para considerar los eventos de retorno.

---

## 2026-07-15

### 📝 Nuevas Características
- Cambio: Ampliación de código de generación y saldos en reportes INV32 e INV37.
- Descripción: Se otorga mayor espacio para los códigos de generación de DTE y se agregan columnas de saldo final exacto en exportaciones a Excel.

---

## 2026-07-13

### 📝 Nuevas Características
- Cambio: Búsqueda y salida de inventario por código de barras.
- Descripción: Se habilita la lectura de código de barras para agilizar el registro de requisiciones y mermas en inventario.
- Cambio: Información ampliada en reporte gerencial de vehículos.
- Descripción: Se totalizan los gastos y se incluyen columnas de observaciones y proyectos asociados en la exportación a Excel.

---

## 2026-07-06

### 📝 Nuevas Características
- Cambio: Configuración de cuenta para Anticipo a Cuenta 2% en ventas y compras.
- Descripción: Se añade la configuración contable del anticipo para su adecuada inclusión en la partida única automática.

---

## 2026-06-26

### 📝 Nuevas Características
- Cambio: Filtro por familias en reportes de inventario.
- Descripción: Se agrega la opción para filtrar reportes de inventario tanto por código individual como por familia de productos.

### 🐞 Corrección de Errores (Bugs)
- Cambio: Inclusión de comisiones en cálculo de vacaciones ordinales.
- Descripción: Se ajusta el cálculo de la prestación de vacaciones en planilla para considerar comisiones conforme a la legislación laboral.

---

## 2026-06-24

### 📝 Nuevas Características
- Cambio: Edición directa en cuadrícula de catálogo de inventario.
- Descripción: Se permite modificar nombres y datos de ítems directamente desde la tabla con guardado selectivo y registro en bitácora.
- Cambio: Precisión decimal ampliada en Órdenes de Gasto.
- Descripción: Se habilitan hasta 6 decimales en detalles de órdenes de gasto para costeo de alta precisión.

---

## 2026-06-19

### 📝 Nuevas Características
- Cambio: Tipo de requisición para merma y pérdida de inventario.
- Descripción: Se crea un tipo de movimiento dedicado a mermas con reportería propia e impacto en los costos del sistema.

---

## 2026-06-15

### 🐞 Corrección de Errores (Bugs)
- Cambio: Corrección de autocompletado en nombre legal de clientes.
- Descripción: Se evita que el nombre legal sea reemplazado indebidamente al cambiar de pestañas en la ficha del cliente.
- Cambio: Saldo inicial y consolidación en movimientos de proveedores (PROV11).
- Descripción: Se ajusta el cálculo de saldos iniciales en el reporte de proveedores para conciliar correctamente abonos y cargos en Excel.

---

## 2026-05-25

### 📝 Nuevas Características
- Cambio: Teléfono personalizado en avisos de cobro por correo.
- Descripción: Se permite configurar un número de contacto específico para las notificaciones de cobro enviadas a clientes.

### 🐞 Corrección de Errores (Bugs)
- Cambio: Formato de impresión de quedan compacto.
- Descripción: Se optimiza el diseño del quedan para reducir el espacio impreso y mantener los encabezados en todas las páginas.

---

## 2026-05-20

### 🐞 Corrección de Errores (Bugs)
- Cambio: Restricción de creación de partidas en períodos cerrados.
- Descripción: Se asegura que el bloqueo de períodos contables únicamente restrinja nuevos registros sin interferir en consultas históricas.

---

## 2026-05-15

### 📝 Nuevas Características
- Cambio: Importación de planillas para informe F14 de retenciones de renta.
- Descripción: Se clasifica automáticamente el código de ingreso y deducciones sociales al importar nóminas hacia el informe tributario F14.

---

## 2026-05-04

### 📝 Nuevas Características
- Cambio: Módulo integral de gestión de familias de inventario.
- Descripción: Se implementa la creación, modificación y eliminación segura de familias de inventario desde el árbol visual, con auditoría y bitácora completa.
- Cambio: Reporte de productos vendidos agrupados por familia (CLI1I).
- Descripción: Se incorpora el nuevo reporte de ventas por familia de productos en la categoría de movimientos de clientes.

### 🐞 Corrección de Errores (Bugs)
- Cambio: Asignación de porcentaje de vacaciones en ficha de empleado.
- Descripción: Se subsana el error que registraba el porcentaje de vacaciones como una línea de ingreso adicional.

---

## Nota importante:

Por favor estar pendiente de los canales oficiales de ContaPortable, para verificar nuevos cambios.