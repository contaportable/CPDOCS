# :material-folder-tree: Gestión de Familias de Inventario

Esta guía detalla el funcionamiento de las **Familias de Inventario**, diseñadas para organizar y clasificar los productos/materiales/items de inventario de forma jerárquica y eficiente.

---

## :material-login: Acceso al Formulario

Para gestionar las familias, puede acceder de las siguientes maneras:

1. **Vista Lateral**: Abra la gestión de inventario; el árbol de familias es visible permanentemente a la izquierda.
2. **Barra de Herramientas**: Utilice los botones de **Crear Familia** y **Cambiar Nombre**.
3. **Menú Contextual**: Haga **clic derecho** sobre cualquier nodo del árbol para desplegar opciones avanzadas.

    <p style="text-align:center">
    ![Árbol de familias](../../assets/Inventario/FamiliyTree.png){ align=center }
    </p>

---

## :material-plus-circle: Crear una Nueva Familia

Siga estos pasos para registrar una nueva familia de inventario que aparecerá en el árbol:

1. **Inicie la acción**: Presione el botón **Crear Familia** o use el clic derecho en el árbol.
2. **Seleccione el Segmento**: En el formulario, elija el primer prefijo de la familia según su configuración. El sistema sugerirá automáticamente el siguiente código disponible.
3. **Complete los Datos**: Rellene los campos obligatorios:
    * **Familia**
    * **Descripción**
    * **Clasificación**.
4. **Finalice**: Pulse el botón `Crear`. El sistema validará que el código no esté duplicado y en caso de no estarlo, se agregará la nueva familia al árbol.

!!! note "Creación de una nueva familia de inventario"
    <p style="text-align:center">
    ![Botón de crear familia y formulario](../../assets/Inventario/NewFamily.png){ align=center }

    ![Formulario de creación de familias](../../assets/Inventario/NewFamilyForm.png){ align=center }
    </p>
    <p style="text-align:center">
    *Existen tres formas de crear una familia: desde el nodo dedicado en el árbol de familias, dando click derecho a un nodo existente o desde el botón crear familia que se encuentra en la barra de herramientas.*
    </p>

---

## :material-pencil: Modificar Familias

Puede editar los nombres, descripciones y clasificaciones existentes:

1. **Seleccione el elemento en el árbol**: Marque en el árbol el elemento que desea modificar.
2. **Active la edición**: Presione **Cambiar Nombre** en la barra superior o vía clic derecho desde el menú contextual que aparece
3. **Actualice**: El sistema habilitará la modificación directa del texto desde el árbol. Escriba el nuevo nombre de la familia y presione Enter para guardar, el sistema mostrará un mensaje de confirmación para proceder con el cambio de nombre del elemento de la familia.

!!! info "Nota de Seguridad"
    Los elementos  **"Todos"**, **"Crear nueva familia"**, **"Cambiar código"**,  **"Sin Familia"**, son nodos creados automáticamente, por esta razón están protegidos por el sistema y no pueden ser renombrados ni eliminados, si lo intentara el sistema mostrará un mensaje de advertencia y restringirá la acción.

!!! note "Modificación de nombre de familia desde el árbol"
    <p style="text-align:center">
    ![Modificación de nombre de familia desde TreeView](../../assets/Inventario/ModifyFamilyName1.png){ align=center }

    ![Modificación de nombre de familia desde TreeView](../../assets/Inventario/ModifyFamilyName2.png){ align=center }

    ![Modificación de nombre de familia desde TreeView](../../assets/Inventario/ModifyFamilyName3.png){ align=center }
    </p>

---

## :material-delete: Eliminar Familias

El proceso de eliminación incluye medidas de seguridad para proteger la integridad de los datos y que no se vaya a eliminar una familia que tiene productos asociados

1. **Acción**: Clic derecho sobre el nodo y seleccione **Eliminar**.
2. **Confirmación**: El sistema solicitará una confirmación explícita por medio de un mensaje
3. **Validación de Uso**:
    * Si la familia tiene productos asociados, el sistema **bloqueará** la acción.
    * Solo se permite eliminar familias sin códigos de inventario vinculados.

!!! note "Eliminación de familia de inventario desde el árbol"
    <p style="text-align:center">
    ![Eliminación de familia de inventario desde el árbol](../../assets/Inventario/FamilyDelete1.png){ align=center }

    ![Eliminación de familia de inventario desde el árbol](../../assets/Inventario/FamilyDelete2.png){ align=center }
    </p>

---

!!! warning "Restricción de Borrado"
    <p style="text-align:center">
    ![Alerta al eliminar familia con códigos](../../assets/Inventario/FamilyRestrictions.png){ align=center }
    </p>
    *Mensaje de advertencia cuando existen códigos de inventarios vinculados a la familia que se intenta eliminar.*

---

## :material-history: Auditoría y Bitácora

Todas las operaciones críticas quedan registradas para su posterior revisión:

* **Eventos registrados**: Creación, Modificación y Eliminación.
* **Detalles**: Usuario, fecha/hora, operación y observaciones del cambio.

!!! note "Referencia Visual: Bitácora"
    <p style="text-align:center">
    ![Bitácora de sistema mostrando operaciones de familia](../../assets/Inventario/FamilyChangeLog.png){ align=center }
    </p>

---
