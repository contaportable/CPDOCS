# Gastos de Importación (Órdenes de Exterior)

El submódulo de **Gastos de Importación** (también conocido como Órdenes de Compra del Exterior o OEC) permite llevar un control detallado de las compras internacionales, desde su solicitud hasta su recepción.

## 1. Órdenes de Compra del Exterior (OEC)
El formulario de **Órdenes de Compra del Exterior** es el punto de partida para gestionar las importaciones. 

![TODO: Insertar Imagen - Listado de Órdenes de Compra del Exterior](../assets/inventario/gridoec_principal.png)

### Características Principales
- **Gestión Visual:** Interfaz clara y optimizada para visualizar fácilmente el estado de las importaciones en curso.
- **Validaciones de Estado:** Incorpora validaciones para evitar modificaciones accidentales en documentos que ya están vinculados a otras etapas del proceso.
- **Trazabilidad:** Permite rastrear la orden, consultando en cualquier momento qué facturas de compra o retaceos han sido generados a partir de ella.

### Exportación de OEC
Una orden del exterior (OEC) puede ser exportada rápidamente a:
- **Orden de Envío (OE)**
- **Documento de Venta** (cuando la importación ya tiene un cliente final asignado desde el origen).

![TODO: Insertar Imagen - Opciones de exportación de una OEC](../assets/inventario/exportacion_oec.png)

> **Nota:** Para conocer cómo se distribuyen los gastos asociados a la importación (fletes, aranceles, etc.) para el costeo de los productos, consulte la sección de **[Retaceos](Retaceo.md)**.
