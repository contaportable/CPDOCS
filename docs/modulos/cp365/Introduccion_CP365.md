# Introducción a CP365 y Migración de Datos

## 1. ¿Qué es CP365?

**CP365** es la nueva versión y plataforma de ContaPortable, diseñada para ofrecer una experiencia más integrada y moderna a sus usuarios. A diferencia de versiones anteriores, CP365 centraliza toda la operación en una interfaz de navegación principal que facilita el acceso a los distintos módulos del sistema.

![Captura de pantalla: Interfaz Principal de CP365](poner_ruta_de_imagen_aqui)

El corazón de esta nueva interfaz es el módulo **Resumen de Facturas**. Este formulario ya no solo sirve para emitir DTEs y visualizar ventas, sino que actúa como el **Panel Central (Dashboard)** de toda la aplicación. A través de su barra lateral (sidebar), los usuarios pueden navegar ágilmente entre ventas, reportes, clientes, inventario y más opciones de configuración sin necesidad de cerrar y abrir múltiples ventanas.

## 2. Migración de Datos desde ContaPortable Tradicional

Para asegurar una transición suave hacia esta nueva versión, se proporciona la herramienta de **Migración de Datos** (basada en el formulario `yTBDataMigrate`).

### Propósito de la Migración

La herramienta de migración permite trasladar de forma segura y estructurada la información de la base de datos que se esté utilizando en el ContaPortable tradicional hacia la nueva estructura de CP365. Esto incluye:

- Cuentas Contables y Parámetros
- Clientes y Proveedores
- Inventario y Familias de Productos
- Histórico de Documentos y Facturas
- Estructura de Establecimientos y Puntos de Venta (ahora estrictamente requeridos para la emisión DTE en CP365)

![Captura de pantalla: Herramienta de Migración yTBDataMigrate](poner_ruta_de_imagen_aqui)

### ¿Cómo Funciona?

El proceso está diseñado para minimizar el riesgo de pérdida de datos. Los administradores pueden ejecutar la migración seleccionando las tablas de origen y destino, validando la integridad de la información y posteriormente verificando que los saldos y catálogos concuerden en la nueva interfaz de CP365.

Para conocer los detalles técnicos y el manual paso a paso de la migración de datos, consulte la [Guía de Migración de Datos (yTBDataMigrate)](yTBDataMigrate.md).

Para conocer más sobre cómo operar la nueva interfaz central de CP365, consulte el [Manual de Resumen de Facturas](ResumenFacturas.md).
