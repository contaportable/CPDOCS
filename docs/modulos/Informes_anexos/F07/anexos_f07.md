<!--- description: Documentación del modulo de anexos F07 ----->

# Anexos F07 - Generales <!-- Subtítulo de nivel 1 -->

## 📚 USO GENERAL

!!! Tip "Permite Generar los CSV de los distintos anexos correspondientes al informe F07 (Clasificarlos en proceso, presentados y eliminados), también permite generar los libros de IVA en base a los anexos y contabilizarlos"
    - Ingresar comprobantes al anexos manualmente
    - Importar Dte al anexo
    - Cargar Dte´s emitidos desde contaportable
    ![parametro "VALIDATEISRFIELDSANEXOS"](../../../assets/Informes_anexos/F07/anexosF07ScreenPrincipal.png){.align=center}
    ![parametro "VALIDATEISRFIELDSANEXOS"](../../../assets/Informes_anexos/F07/anexosF07.png){.align=center}

---

## ⚙️ Parámetros / Configuraciones

!!! Note "VALIDATEISRFIELDSANEXOS"

    En base al [Requerimiento en el Issues#109](https://github.com/YECAPP/CP2025/issues/109)
    Se ha creado el parámetro VALIDATEISRFIELDSANEXOS Para permitir guardar anexos sin configurar los campos de ISR 
    ![parametro "VALIDATEISRFIELDSANEXOS"](../../../assets/Informes_anexos/F07/parametro_VALIDATEISRFIELDSANEXOS.png){.align=center}
    
    **Valor default: SI**

    - Si esta activo (valor en SI) valida los campos de ISR para que sean necesarios llenarlos (de lo contrario no permite guardar)
    - Al desactivarse (valor en NO) permitirá guardar el anexo sin necesidad de configurar los campos de ISR, permitiendo exportar a excel
    - Los anexos vinculados a este parámetro son: **Compras, Ventas Contribuyentes, ventas Consumidor Final, Casilla #66**
    
    !!! example "Ejemplo con el valor default del parametro (activo), lo que impide guardar sin configurar los campos de ISR"
        ![parametro "VALIDATEISRFIELDSANEXOS"](../../../assets/Informes_anexos/F07/parametro_VALIDATEISRFIELDSANEXOS2.png){.align=center}
    
    !!! example "Ejemplo al desactivar el parametro, permitiendo guardar el anexo sin configurar los campos ISR (útil para guardar temporalmente, o para generar a excel y configurarlos los campos del ISR posteriormente)" 
        ![parametro "VALIDATEISRFIELDSANEXOS"](../../../assets/Informes_anexos/F07/parametro_VALIDATEISRFIELDSANEXOS3.png){.align=center}

    !!! Tip "Configuración contable"
        ![parametro "VALIDATEISRFIELDSANEXOS"](../../../assets/Informes_anexos/F07/ConfigContable.png){.align=center}    

        ??? Tip "Definir cuantas contables de ventas"
            ![parametro "VALIDATEISRFIELDSANEXOS"](../../../assets/Informes_anexos/F07/ConfigContableVentas.png){.align=center}

        ??? Tip "Definir cuantas contables de compras"
            ![parametro "VALIDATEISRFIELDSANEXOS"](../../../assets/Informes_anexos/F07/ConfigContableCompras.png){.align=center}
---
