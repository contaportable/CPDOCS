# Gestión de Cuentas por Cobrar (CXC)

A continuación se detalla el proceso para utilizar la opción de gestión de CXC directamente desde los documentos de facturación. Esta funcionalidad permite añadir, modificar y eliminar abonos, así como visualizar el estado de la cuenta por cobrar.

!!! tip " **Facturación - Gestión de CXC**"
    ``` mermaid
    graph TD
      A[Índice de contenidos]:::root

      subgraph "Subcategorías"
        B[1. Acceso desde facturación]
        C[2. Ventana de Gestión de CXC]
        D[3. Gestión de abonos]
        E[4. Detalles del documento]
      end

      A --> B
      A --> C
      A --> D
      A --> E

    click B "#1-acceso-desde-facturacion" "Ir al acceso desde facturación"
    click C "#2-ventana-de-gestion-de-cxc" "Ir a la ventana de gestión de CXC"
    click D "#3-gestion-de-abonos" "Ir a la gestión de abonos"
    click E "#4-detalles-del-documento" "Ir a detalles del documento"
    ```
---

## 1. Acceso desde Facturación

Para comenzar, diríjase al módulo de facturación.

1. Localice el documento que desea gestionar en la lista.
2. Haga **clic derecho** sobre el documento.
3. Seleccione la opción de gestión de CXC en el menú contextual.

![Menú contextual en facturación](../../assets/Facturacion/gestionCuentasPorCobrar/FacturacionContextual.png)

---

## 2. Ventana de Gestión de CXC

Al seleccionar la opción, se abrirá la ventana emergente **Gestión de Cuentas por Cobrar**.

* **Funcionalidad:** Esta interfaz permite añadir, modificar y eliminar los abonos efectuados al documento seleccionado en la ventana anterior, en la parte izquierda se ubica un listado de bancos y cuentas bancarias creadas y desde las cuales podrá elegir efectuar un abono.

![Ventana de gestión de abonos](../../assets/Facturacion/gestionCuentasPorCobrar/CXCWindow.png)

---

## 3. Gestión de abonos

Dentro del listado de abonos existentes, es posible desplegar opciones adicionales:

1. Localice el abono específico.

2. Expanda la **botonera de acciones** (Por medio del botón que se muestra al inicio del registro).

![Botonera de acciones en abonos](../../assets/Facturacion/gestionCuentasPorCobrar/CXCButtons.png)

3. Se mostrarán los botones disponibles:
    * ✏️ **Modificar**
    * 🗑️ **Eliminar**
    * 📄 **Ver detalles**

![Botonera de acciones expandida](../../assets/Facturacion/gestionCuentasPorCobrar/CXCButtonsExpanded.png)

---

## 4. Detalles del Documento

Al hacer clic en la opción **"Ver detalles del documento"**, el sistema desplegará información específica sobre el estado financiero del mismo.

!!! note "Información Visible"
    Aquí podrá visualizar el saldo pendiente, el total abonado y otros datos relevantes de la CXC para el documento que está siendo gestionado.

![Detalles de la CXC](../../assets/Facturacion/gestionCuentasPorCobrar/CXCDocumentDetails.png)