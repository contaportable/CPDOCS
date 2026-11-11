<!---
description: Guía para gestionar las órdenes de compra del exterior (OEC) en ContaPortable, desde su registro hasta su exportación y su trazabilidad con facturas y retaceos.
--->

# 🚢 Gastos de importación (órdenes del exterior)

Las órdenes de compra del exterior (OEC) registran las compras internacionales desde su solicitud hasta su recepción. Use este módulo para dar seguimiento a cada importación.

!!! abstract "En esta guía aprenderá a"
    - Consultar el listado de órdenes del exterior.
    - Exportar una OEC a una orden de envío o a un documento de venta.
    - Rastrear qué facturas y retaceos se generaron a partir de una orden.

!!! tip "Costos de importación"
    Para repartir los gastos de la importación, como fletes y aranceles, entre los productos, vea [Retaceos](Retaceo.md).

---

## 📋 Órdenes de compra del exterior

El formulario de OEC es el punto de partida de cada importación. Desde el listado puede consultar el estado de cada compra en curso.

!!! warning "Falta captura"
    Listado de órdenes de compra del exterior. Nombre sugerido: `01_listado_oec.png`.

### Qué le ayuda el sistema

- **Estado visible:** la lista muestra el avance de cada importación.
- **Protección de documentos vinculados:** el sistema evita modificar una orden que ya está ligada a otra etapa del proceso.
- **Trazabilidad:** en cualquier momento puede ver qué facturas de compra o retaceos se generaron a partir de una orden.

---

## 📤 Exportar una OEC

Una OEC se puede exportar en dos formas:

| Destino | Cuándo usarlo |
| :--- | :--- |
| **Orden de envío (OE)** | Para comunicar la orden al proveedor del exterior. |
| **Documento de venta** | Cuando la importación ya tiene un cliente final asignado desde el origen. |

!!! warning "Falta captura"
    Opciones de exportación de una OEC. Nombre sugerido: `02_exportacion_oec.png`.

---

## ❓ Problemas frecuentes

??? question "No puedo modificar una orden"
    Es probable que la orden ya esté vinculada a una factura o a un retaceo. Revise la trazabilidad de la orden para ver qué documentos la usan.

---

## 🔗 Páginas relacionadas

- [Retaceos](Retaceo.md): distribución de los gastos de importación entre los productos.
- [Gestión de inventario](GestionInventario.md)

---
