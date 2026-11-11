<!---
description: Guía para registrar Órdenes de Compra, ajustes, devoluciones y órdenes del exterior en ContaPortable, con importación desde Excel o JSON y su efecto en el inventario.
--->

# 🛒 Registro de Órdenes de Compra (OC)

La Orden de Compra registra la mercadería que entra a inventario. A diferencia de la [Orden de Gasto](registro_ordenes_gasto.md), que registra egresos que no son de inventario, la Orden de Compra sí mueve existencias y costos.

Todos los documentos de este módulo usan el mismo formulario. Se diferencian por su **tipo**.

!!! abstract "En esta guía aprenderá a"
    - Elegir el tipo de documento correcto.
    - Crear una orden de compra y llenar su detalle.
    - Importar el detalle desde Excel o desde un DTE en JSON.
    - Registrar devoluciones a proveedores.
    - Aplicar el documento y recalcular costos para que el inventario se actualice.

!!! tip "Flujo rápido"
    Cree la orden → llene el detalle → guarde → **aplique** el documento → **recalcule costos** → revise los reportes de inventario.

---

## 📋 Tipos de documento

Elija el tipo en el selector **Seleccione un Tipo de Documento**. Cada tipo tiene su propio nodo en el listado.

| Sigla | Documento | Efecto en el inventario |
| :---: | :--- | :--- |
| **OC** | Orden de Compra | Entrada (+) |
| **OA** | Orden de Ajuste | Entrada (+) |
| **RA** | Requisición de Almacén | Salida (−) |
| **MP** | Mermas y Pérdidas | Salida (−) |
| **DV** | Devolución sobre salida | Normalmente entrada (+), porque regresa a bodega lo que salió |
| **DV** | Devolución sobre compra | Salida (−), porque la mercadería vuelve al proveedor |
| **OE** | Orden del Exterior | Entrada (+) |

!!! warning "No confunda estas siglas"
    - **OE** es Orden del **Exterior**, para compras de importación. No es "orden de entrega".
    - **OA** es Orden de **Ajuste** de inventario. No es "orden de anticipo".
    - Las dos devoluciones comparten la sigla **DV**. Su numeración es continua entre ambas.

---

## 🚪 Crear una orden de compra

!!! example "Paso a paso"
    1. Elija el tipo de documento en el selector.
    2. Presione **Nuevo**.
    3. Complete el encabezado.
    4. Llene el detalle o impórtelo, como se explica más abajo.
    5. Presione **Guardar**.
    6. Aplique el documento y recalcule costos.

### Encabezado

| Campo | Qué escribir |
| :--- | :--- |
| **Fecha** | La fecha del documento. Define el período en el que se refleja el movimiento. |
| **Proveedor** | Obligatorio en las órdenes de compra. Del proveedor se toman las tasas de IVA y de retención. |
| **Bodega** | La bodega donde ingresa, o de donde sale, la mercadería. |
| **Departamento** | El centro de costo del documento. |
| **Proyecto** | Opcional. Sirve para agrupar movimientos por proyecto en los reportes. |
| **CCF / Fecha CCF** | El comprobante de crédito fiscal del proveedor. Alimenta el Libro de Compras. |
| **Observaciones** | Un texto libre. En los documentos creados automáticamente, indica el documento de origen. |

---

## 🧾 Llenar el detalle

Cada línea tiene **código de producto, descripción, cantidad y costo**. Según la configuración, también puede pedir **lote, IMEI y fecha de vencimiento**.

!!! danger "El signo de la cantidad importa"
    - **Devolución sobre compra:** siempre resta inventario. Al guardar, al importar desde Excel o al importar el JSON, las cantidades quedan en negativo, aunque las haya escrito en positivo.
    - **Devolución sobre salida:** respeta el signo que escribió. Una cantidad positiva devuelve producto a la bodega. Una negativa lo saca. El sistema no lo corrige, así que revíselo antes de guardar.

---

## 📥 Importar el detalle

Puede cargar el detalle sin escribirlo a mano. La importación desde Excel está disponible en la orden de compra, la orden de ajuste, la orden del exterior y las devoluciones. La importación desde JSON es para la orden de compra, la orden del exterior y la devolución sobre compra.

=== "1️⃣ Desde Excel"

    !!! example "Cómo importar"
        1. Presione **Importar**. Aparece un menú con dos opciones.
        2. Elija **Obtener plantilla**. Así descarga la plantilla oficial.
        3. Llene la plantilla, guárdela y ciérrela.
        4. Elija **Importar plantilla** y seleccione el archivo. Se aceptan archivos **.xls** y **.xlsx**.
        5. Revise el resumen y el detalle importado antes de guardar.

    La plantilla tiene el encabezado en la **fila 3** y los datos desde la **fila 4**, con estas columnas en este orden:

    | Columna | Contenido |
    | :--- | :--- |
    | **CODIGO** | El código del producto. Puede ser el código interno, un código numérico o el código de barras. |
    | **DESCRIPCION** | La descripción de la línea. |
    | **CANTIDAD** | La cantidad, en número. |
    | **COSTO** | El costo unitario, en número. |

    Al terminar, el sistema indica cuántas líneas agregó, cuántas filas sin código descartó y cuántos códigos no existen en el inventario. Corrija los códigos que no existen antes de guardar.

    !!! warning "Si el archivo está bloqueado"
        - **Descargado de Internet:** si el sistema lo detecta, ofrece desbloquearlo antes de importar.
        - **Excel no puede abrirlo:** guárdelo como **.xlsx** y vuelva a importarlo. Si persiste, haga clic derecho sobre el archivo, elija **Propiedades**, marque **Desbloquear** y presione **Aceptar**.

    !!! tip "Búsqueda por código de barras"
        El botón de configuración (engranaje) tiene la opción **Búsqueda de inventario por código de barra**. Cambia cómo se buscan los productos al escribir el código. La etiqueta sobre el detalle indica el modo activo.

=== "2️⃣ Desde JSON (DTE)"

    Con **Importar JSON** carga el archivo del DTE que le envió el proveedor. El sistema toma el emisor, el receptor y el detalle del documento.

    Cada formulario acepta solo sus tipos de DTE. Si el JSON es de otro tipo, el sistema lo indica y no lo importa.

    | Formulario | Tipo de DTE | Cómo se registra |
    | :--- | :--- | :--- |
    | **Orden de Compra** | 01 Factura | Compra local. El total incluye IVA: el sistema calcula el neto (total ÷ 1.13) y registra el IVA del 13 % como crédito fiscal. El inventario se valora al neto. |
    | | 03 Comprobante de Crédito Fiscal | Compra con crédito fiscal, con los valores del comprobante. |
    | | 14 Factura de Sujeto Excluido | Compra a sujeto excluido. |
    | **Orden del Exterior** | 11 Factura de Exportación | Compra del exterior. |
    | **Devolución sobre compra** | 05 Nota de Crédito | Se registra como nota de crédito. Las cantidades quedan en negativo. |
    | **Devolución sobre salida** | No aplica | No se importa JSON, porque no viene de un documento del proveedor. |
    | **Orden de Ajuste** | No aplica | No se importa JSON. |

    Esta es la vía recomendada cuando el proveedor emite DTE, porque evita errores al escribir códigos y montos.

---

## ↩️ Devoluciones

Hay dos tipos de devolución:

| Devolución | Para qué sirve | Efecto en el inventario |
| :--- | :--- | :--- |
| **Sobre salida** | Regresar a bodega mercadería que salió por requisición y no se usó. | Respeta el signo que escribió. Normalmente suma. |
| **Sobre compra** | Devolver mercadería al proveedor, con o sin nota de crédito. | Siempre resta. |

### Devolver sobre salida

Elija la devolución sobre salida en el selector. Capture o importe el detalle que regresa a bodega y guarde. Esta devolución no tiene nota de crédito ni importación de JSON.

### Devolver sobre compra

Hay dos formas de crearla:

=== "1️⃣ Desde la orden de compra (recomendado)"

    !!! example "Cómo generarla"
        1. Abra la orden de compra guardada, en modo de edición.
        2. Haga clic derecho sobre el detalle y elija **Generar devolución sobre compra**.
        3. Confirme. El sistema copia el detalle con las cantidades en negativo.
        4. Ajuste la devolución para dejar solo lo que realmente devuelve.

    La devolución queda enlazada a la orden de origen, así que los reportes pueden rastrear la compra.

    !!! note "Una devolución por orden"
        El sistema no genera una segunda devolución sobre una orden que ya tiene una. Si necesita devolver más, edite la existente.

    !!! warning "La orden debe estar aplicada"
        Si el sistema solo considera movimientos aplicados, no tiene sentido devolver una orden que aún no afecta al inventario. El sistema lo advierte y no genera el documento.

=== "2️⃣ Desde el selector de documentos"

    Elija la devolución sobre compra en el selector y capture el detalle, impórtelo desde Excel o, si el proveedor emitió la nota de crédito en DTE, impórtela desde su JSON.

### Tipo de orden: devolución o nota de crédito

| Opción | Cuándo usarla | Efecto en el Libro de Compras |
| :--- | :--- | :--- |
| **DEVOLUCIÓN** | El proveedor no emitió nota de crédito. | Solo afecta el inventario. |
| **NOTA DE CRÉDITO** | El proveedor emitió una nota de crédito. | Aparece como 05 Nota de crédito, con los datos de la nota. |

Al importar el JSON de una nota de crédito, el tipo queda en **NOTA DE CRÉDITO** automáticamente. Las devoluciones creadas desde la orden también se proponen así: cámbielo a **DEVOLUCIÓN** si el proveedor no emitió nota.

!!! example "Datos de la nota de crédito"
    Con el tipo **NOTA DE CRÉDITO**, el botón **Datos NC** abre el diálogo con los datos fiscales de la nota:

    | Campo | Contenido |
    | :--- | :--- |
    | **Número de nota de crédito** | En una nota electrónica, el código de generación del DTE, con sus 36 caracteres. |
    | **Serie** y **Clase de documento** | Datos del documento emitido por el proveedor. |
    | **Fecha del documento** | Fecha de emisión de la nota. |
    | **Período en el que se declara** | Mes y año. El IVA de la nota se incluye en ese período. |
    | **Registro de IVA** | El NRC del proveedor. |
    | **Formulario único** | Dato complementario, cuando aplica. |

    Presione **Guardar y regresar** para confirmar o **Cancelar y regresar** para descartar. Si importó el JSON, estos datos ya vienen llenos.

!!! warning "Sin registro de IVA y período, la nota no aparece en el libro"
    Una devolución con tipo **NOTA DE CRÉDITO** aparece en el Libro de Compras y en los anexos, en el período declarado. Mientras no llene el **Registro de IVA** y el **período**, la nota no se incluye.

---

## ✅ Aplicar el documento

Un documento recién guardado **no está aplicado**. Aplicarlo lo confirma como movimiento real.

Según la configuración, los documentos no aplicados pueden no afectar el inventario. Es la causa más frecuente de que una compra "no aparezca" en las existencias.

En el listado, cada tipo tiene dos nodos: **No Aplicadas** y **Aplicadas**. Para pasar un documento de uno a otro use **Enviar** y **Devolver** en el menú contextual. La visibilidad de estas opciones depende de los permisos del usuario.

---

## 📊 Efecto en el inventario

!!! danger "Los movimientos se recalculan, no se graban al guardar"
    Al guardar una orden, las existencias y los costos que muestran los reportes **no se actualizan de inmediato**. Se reconstruyen cada vez que ejecuta **Recalcular costos**.

Si registró una compra y el reporte de existencias no la muestra, lo más probable es que falte recalcular. El documento puede estar bien.

**Recalcule costos:**

- Después de registrar, modificar o anular documentos de inventario.
- Después de aplicar o desaplicar documentos.
- Después de cambiar un parámetro de inventario.
- Antes de emitir reportes de kardex o de costos para un cierre o una auditoría.

El recálculo recorre órdenes de compra, requisiciones y ventas, y reconstruye las entradas, salidas, saldos y costo promedio de cada producto.

!!! info "Costo promedio en cero"
    Cuando una salida deja la existencia de un producto en cero, el costo promedio de ese movimiento queda en cero. Es el comportamiento esperado, no un error de captura.

---

## ❓ Problemas frecuentes

??? question "La compra no aparece en las existencias"
    Confirme que el documento esté aplicado y que haya ejecutado **Recalcular costos**.

??? question "El archivo de Excel no se importa"
    Guárdelo como .xlsx y revise que el encabezado esté en la fila 3 y los datos empiecen en la fila 4.

??? question "Un código del Excel no aparece en el detalle"
    El código no existe en el inventario. Corrija el código en la plantilla y vuelva a importarla.

---

## 📌 Buenas prácticas

- Recalcule costos antes de emitir cualquier reporte de inventario.
- Aplique los documentos el mismo día que los registra.
- Genere las devoluciones desde la orden de origen, para conservar la trazabilidad.
- Revise el signo de las cantidades en las devoluciones sobre salida.
- Use la importación desde JSON cuando el proveedor emita DTE, incluidas sus notas de crédito.
- Parta siempre de la plantilla oficial al importar desde Excel.

---

## 🔗 Páginas relacionadas

- [Gestión de cuentas por pagar (CXP)](gestion_cuentas_por_pagar.md): el pago de las órdenes de compra.
- [Registro de Órdenes de Gasto (OG)](registro_ordenes_gasto.md): egresos que no son de inventario.
- [Requisiciones y mermas](../inventario/requisiciones-mermas-y-perdidas.md): las salidas de inventario.
- [Gestión de inventario](../inventario/GestionInventario.md): visión general del módulo.

---
