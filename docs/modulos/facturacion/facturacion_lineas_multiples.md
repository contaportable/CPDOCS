<!---
description: Facturacion Multilinea en ContaPortable, ORIGEN: solicitado por PDM INVERSIONES. 
---
-->
# Facturación Multilinea - Documentación 

Bienvenido a la documentación del requerimiento Facturación Multilinea en **CONTAPORTABLE 2025**.

---

## 📌 Introducción

En base al [requerimiento#277](https://github.com/YECAPP/CP2025/issues/277), se desarrollo la opción para incluir conceptos largos en la facturación, distribuidos en multiples lineas, segun longitud del concepto, evitando generar palabras incompletas.

## ⚙️ Configuración / Párametros

!!! Note "Activar parámetro FACTURARDESCRIPMULTILINE"
    - :material-console: Desde la venta de comandos del sistema, busca el parámetro FACTURARDESCRIPMULTILINE y asigna el valor de **SI** para activarlo.
    ![parametro "FACTURARDESCRIPMULTILINE"](../../assets/Facturacion/lineasMultiples/parametro_FACTURARDESCRIPMULTILINE.png){.align=center}

    - :material-refresh: **Reinicia** el sistema
    - Se habilitara el nuevo icono en la ventana de facturación
    ![imagen "nuevoBotonHabilitado"](../../assets/Facturacion/lineasMultiples/nuevoBotonHabilitado.png){.align=center}

    - :material-file-cog:Definir el parámetros de ancho del concepto en el detalle de factura desde la configuración de formatos, ya que se utilizará para determinara la cantidad de caracteres permitidos en cada ítem, determinando de esta forma el salto de linea para un nuevo ítem.
    ![imagen "nuevoBotonHabilitado"](../../assets/Facturacion/lineasMultiples/configAnchoConceptoDetFact.png){.align=center}

!!! Note "Funcionamiento"
    - Pega el texto que desees incluir en la ventana emergente
    ![imagen "FuncionamientoExample"](../../assets/Facturacion/lineasMultiples/FuncionamientoExample.png){.align=center}
    - Clic en aceptar, luego se te solicitara la cantidad y el precio que se agregará en el primer item, veras que se agrega el concepto dristribuido por items
    ![imagen "FuncionamientoExample2"](../../assets/Facturacion/lineasMultiples/FuncionamientoExample2.png){.align=center}

---

## 📚 Uso General