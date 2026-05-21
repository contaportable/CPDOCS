<!---
description: Parametros en facturacion para activar funciones
---
-->
# Parametros en facturacion que activan funciones contaportable

## ⚙️ Configuración

!!! note "Listado de parametros"

| Parámetro | Valor Default | Descripción | Valores Posibles |
| :--- | :---: | :--- | :--- |
| `BLOCKPRICEFACT` | `SI` | Permite bloquear precios del producto en facturacion y solo se puede modificar por medio de una contraseña | `SI` / `NO` |
| `FACTURARCONCBARRAS` | `SI` | Activa busqueda avanzada de productos por codigo de barra y codigo de productos, para seguir agregando mas productos (tipo facturacion de supermercado) | `SI`,`NO` |
| `FACTSTYLE` | `DTE` | Permite cambiar el Tipo de facturación NORMAL, DTE, LOTES Y VENC, ADVALORM, FOVIAL Y CONTRANS, VENTAS NO SUJETAS | `DTE`/ `MEDICA`/ `ADV` / `DTEFOVCOT` / `DTEVNTASNOSUJ` |
| `FACTSTYLEBYCBARRA` | `CODIGO` | Determina si el selector de código de la factura muestra el codigo de barras | `-` |
| `FACTSTYLEONLYPTERM` | `NO` | Activa que solo el producto terminado se muestra en el selector de productos de la factura / Mostrará solo los productos terminados en el selector de productos de la venta, los productos que se incluyan deben tener el tipo 2 de producto terminado | `SI`/ `NO` |
| `FACTURACIONINACTIVEPRODINCLUDE` | `SI` | Cuando el valor sea "NO" mostrara solo los productos activos, valor por default es "SI", mostrando todos los productos | `SI`/ `NO` |
| `FACTURACIONDESCUENTOACTIVAR` | `SI` | El parametro permite activar las opciones para aplicar descuentos en la facturación | SI / NO |
| `FACTURACIONIMPORTFROMEXCEL` | `SI` | El parametro permite activar la opcion de importar detalle desde excel en la facturación | SI / NO |
| `ACTIVE_FF_PRECIVA` | `SI` | Al activarse el precio se mostrara con IVA solo para las facturas de exportación | SI / NO |
| `DTE_FACTURAR_OIMP` | `SI` | Parámetro para activar/desactivar el facturar con otros impuestos | SI / NO |
| `FORMATO_RGDUAL` | `SI` | Parámetro para activar/desactivar el uso de un segundo formato de impresión | SI / NO |
| `DTE_NAMEOBJECT_SELLORECEPCION` | `selloRecepcion` | Contiene el nombre del objeto en el json del DTE que contiene el sello de recepción | Cualquier nombre para le objeto que contiene la firma en el JSON del DTE |
| `DTE_INCLUDE_EMAILFOOT` | `SI` | El parametro indica si se incluye el pie de correo en el envio del DTE | SI / NO |
| `DTE_NAMEOBJECT_FIRMAELECTRONICA` | `firma` | Contiene el nombre del objeto en el json del DTE que contiene la firma electrónica | Cualquier nombre para le objeto que contiene la firma en el JSON del DTE |
| `TPNOMBREINFACT` | `1` | Si el valor es '1 MOSTRARA EL NOMBRE LEGA, SI ES '0' MOSTRARA EL NOMBRE COMERCIAL | 1 / 0 |
| `FACTURACIONDOUBLEROUNDED` | `NO` | Parametro utilizado para realizar un doble redondeo a nivel de item y de totales | SI / NO |
| `FACTURACIONCODIGOVAL` | `NO` | Si esta en SI validará todos los códigos que se ingresen en la facturación | SI / NO |
| `TPBUSQUEDALECTORJSON` | `FILES` | Determina el tipo de busqueda del lector json al importar archivos, si desea buscar por carpetas debe establecer el valor FOLDERS | FILES / FOLDERS |
| `DTE_EXPORTJSON` | `SI` | Parámetro para activar/desactivar la funcion de exportacion de json del DTE | SI / NO |
| `FACTURARDESCRIPMULTILINE` | `NO` | El parametro permite activar la opcion de agregar contenido multilineal en la descripcion | SI / NO |
| `CUSTOMFLOWGENDTE` | `NO` | Permite activar la personalización del flujo de generación del DTE | SI / NO |
| `GENOBJFACTDATAEXTRAINRG` | `NO` | Si el parametro esta activo genera objetos con informacion extra en el json de la factura | SI / NO |
| `ACTIVATELINKSPAGO` | `NO` | Al activar el parametro se habilitara la configuracion necesaria para generar links de pago y poder agregar el QR en el DTE o en cotizaciones | SI / NO |
| `MOSTRARENRG_ESTADOPAGOWOMPI` | `NO` | Si esta activo, consultará a la API de wompi el estado de pago del documento, el cual se podra mostrar en el formato | SI / NO |
| `ACTIVECOTIZACION` | `NO` | Al estar activo este parametro, se mostrara la opción de cotización en el resumen de facturas | SI / NO |
| `ACTIVE_CO_PRECIVA` | `NO` | Al activarse, el precio se mostrara con IVA para cotizaciones | SI / NO |
