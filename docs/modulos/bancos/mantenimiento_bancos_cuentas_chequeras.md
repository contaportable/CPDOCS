---
description: Guía para el mantenimiento de bancos, cuentas bancarias y chequeras en ContaPortable.
---

# Mantenimiento de bancos, cuentas bancarias y chequeras

Esta interfaz corresponde al mantenimiento de bancos, cuentas bancarias y chequeras del módulo bancario, permitiendo configurar los registros base que luego se usarán en procesos de movimientos, conciliaciones y reportes financieros.

## 1. ¿Cuándo usar esta pantalla?

Use esta pantalla cuando necesite:

- Crear o modificar un banco.
- Definir cuentas bancarias para la empresa.
- Configurar chequeras y sus datos asociados.

!!! tip "Importante"
    Si lo que necesita es registrar un depósito, el flujo correspondiente está en la guía de depósitos bancarios. Esta pantalla es de configuración y mantenimiento.

## 2. Qué se puede administrar aquí

En esta interfaz suele encontrarse información relacionada con:

- Bancos.
- Cuentas bancarias.
- Chequeras.

La lógica principal es la configuración previa para que luego las operaciones bancarias puedan ejecutarse con los datos correctos.

![Pantalla principal del mantenimiento bancario](../../assets/Bancos/gestionbancos/01_mantenimiento_bancos.png)

## 3. Flujo recomendado

1. Ingrese al módulo de bancos o al área de mantenimiento correspondiente.
2. Abra la opción para crear o modificar un banco o una cuenta.
3. Complete la información requerida.
4. Revise los datos de la chequera si aplica.
5. Guarde los cambios y confirme que el registro quede disponible para los procesos posteriores.

## 4. Gestión de bancos

En la sección de bancos puede registrar la entidad financiera y su tipo. Este registro es la base para luego asociar cuentas y chequeras.

### Datos que suele pedir el formulario

- Código o identificador del banco.
- Descripción o nombre del banco.
- Tipo de banco o clasificación.
- Información de referencia para identificarlo correctamente.

![Registro de bancos](../../assets/Bancos/depositos/08_registro_bancos.png)

## 5. Gestión de cuentas bancarias

Las cuentas bancarias son los vínculos entre el banco y las operaciones reales del sistema. Aquí se define la cuenta que luego se usará al registrar depósitos, conciliaciones o pagos.

### Información importante al crear una cuenta

- Número de cuenta.
- Banco asociado.
- Tipo de cuenta.
- Moneda y datos básicos de control.

![Registro de cuentas bancarias](../../assets/Bancos/depositos/09_registro_cuentas_bancarias.png)

## 6. Gestión de chequeras

Las chequeras permiten vincular el uso de cheques a una cuenta bancaria específica. Este registro es especialmente útil cuando la empresa necesita controlar números de cheques, rangos y estados activos.

### Datos que se revisan en una chequera

- Código de la chequera.
- Serie o prefijo.
- Rango inicial y final.
- Cuenta bancaria asociada.
- Estado activo o inactivo.
- Reporte de cheque si corresponde.

![Registro de chequeras](../../assets/Bancos/depositos/10_registro_chequeras.png)

## 7. Relación con otros módulos

Esta interfaz se relaciona con distintos procesos del sistema, como:

- Depósitos.
- Conciliación bancaria.
- Movimientos de caja y bancos.
- Reportes y consultas financieras.

Por ello, aunque no se use para capturar depósitos directamente, sí resulta fundamental para que el resto del módulo funcione con información correcta.

## 8. Buenas prácticas

- Use nombres claros para cada banco y cuenta.
- Revise que la información de chequeras sea consistente.
- Mantenga actualizada la configuración cuando cambien cuentas, sucursales o políticas bancarias.
- Evite duplicar registros que representen la misma cuenta o entidad.
- Antes de usar una cuenta en operaciones reales, confirme que esté correctamente asociada al banco y a la chequera que corresponda.
