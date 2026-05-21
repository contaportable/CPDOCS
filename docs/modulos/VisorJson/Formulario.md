# Formulario Visor Json

## Descripción General

El formulario **Visor Json** es una interfaz desarrollada en Visual FoxPro 9 para importar, visualizar y analizar datos en formato JSON, orientada a la gestión documental electrónica. Permite la carga múltiple de archivos JSON, la visualización tabular y jerárquica de los datos, y la interacción mediante controles como cuadrícula (Grid) y árbol (TreeView).

### Componentes principales
- **Cuadrícula (Grid1):** Muestra los datos importados en 8 columnas editables, con doble clic para ver detalles.
- **TreeView (Olecontrol1):** Permite navegar la estructura jerárquica de los datos JSON.
- **Botón "Importar Json" (Command1):** Inicia la importación de archivos JSON.
- **Botón "Actualizar" (Command2):** Refresca la visualización de los datos.
- **Controles OLE adicionales:** Para visualización o interacción avanzada.
- **Propiedades clave:** Modo oscuro, maximizado, integración MDI, año inicial (`startyear = 2020`).

---

## Propiedades relevantes
- `Caption = "Visor Json"`: Título del formulario.
- `startyear = 2020`: Año inicial para operaciones relacionadas.
- `WindowState = 2`: El formulario se abre maximizado.
- `MDIForm = .T.`: El formulario es hijo MDI.
- Colores y fuentes adaptados para modo oscuro.

---

## Eventos destacados
- **Command1.Click:** Llama a `ImportMultipleJS` para importar archivos JSON.
- **Command2.Click:** Actualiza la vista o recarga los datos.
- **Grid1.ColumnX.Text1.DblClick:** Llama a `ViewJson` para mostrar el detalle del registro seleccionado.
- **Olecontrol1.Click:** Permite seleccionar nodos en el árbol para cargar detalles.

---

## Métodos y Procedimientos del Formulario (detallados)

### crearindices
Crea índices sobre los datos cargados para optimizar búsquedas y ordenamientos dentro del formulario. Suele ser llamado después de importar o generar datos, y puede usar comandos como `INDEX ON` para mejorar el rendimiento de consultas y navegación.

### gencurbase
Genera un cursor base a partir de los datos JSON importados, permitiendo trabajar con una estructura temporal y manipulable en Visual FoxPro. Elimina cualquier cursor temporal anterior, convierte los datos JSON en un cursor, define campos y tipos de datos, inserta los datos procesados y crea índices para optimizar el acceso.

### importmultiplejs
Permite importar múltiples archivos JSON. Abre un cuadro de diálogo para seleccionar archivos, lee y convierte su contenido a cursores, y actualiza la cuadrícula y el árbol de navegación. Utiliza funciones como `GETFILE`, `FILETOSTR` y `JSONTOCURSOR`.

### joinfjsontables
Permite unir varias tablas o estructuras JSON en una sola vista o cursor, facilitando la comparación y análisis de datos provenientes de diferentes archivos. Puede usar comandos como `SELECT ... UNION` o rutinas personalizadas para combinar datos.

### newkey
Genera una nueva clave o identificador único para registros o nodos, útil al importar o crear nuevos elementos. Puede incrementar un contador interno o buscar el valor máximo actual y sumarle uno.

### nodelist
Genera y mantiene una lista de nodos a partir de la estructura de los datos JSON importados, facilitando la navegación y búsqueda. Recorre la estructura JSON, crea una lista (cursor o arreglo) con información como ID, nombre, padre, nivel y tipo, y la utiliza para poblar el TreeView o realizar búsquedas rápidas.

### setear
Método general para establecer propiedades, valores o configuraciones en los controles del formulario según el contexto o los datos cargados. Puede ajustar visibilidad, habilitación, colores, fuentes y otros atributos de los controles.

### setgrid
Configura la cuadrícula (Grid1) para mostrar los datos importados. Define columnas, encabezados, formatos, anchos y enlaza los datos a la cuadrícula. Puede ajustar la alineación y el formato de celdas según el tipo de dato.

### settreeview
Configura el control tipo árbol (TreeView) para mostrar la estructura jerárquica de los datos importados, creando nodos y subnodos según la estructura JSON. Limpia el árbol, recorre la estructura y agrega nodos con relaciones padre-hijo.

### validarnodo
Verifica si un nodo seleccionado cumple con los criterios de validez antes de permitir operaciones adicionales. Evalúa condiciones como existencia, tipo, formato y reglas de negocio, devolviendo .T. o .F. según la validez del nodo.

### viewjson
Muestra el detalle del JSON correspondiente al registro seleccionado en la cuadrícula. Se activa al hacer doble clic en cualquier celda, recupera el JSON, lo formatea y lo muestra en un visor o ventana modal.

---

## Ejemplo de flujo de uso
1. El usuario abre el formulario, que se presenta en modo oscuro y maximizado.
2. Puede importar archivos JSON usando el botón "Importar Json".
3. Los datos importados se muestran en la cuadrícula y el árbol.
4. Al hacer doble clic en una celda, se visualiza el detalle del JSON.
5. El botón "Actualizar" permite refrescar la vista o recargar los datos.

---

## Ejemplo de métodos (pseudocódigo)

```foxpro
PROCEDURE crearindices
    * Crea índices sobre los datos cargados
    INDEX ON id TAG id
ENDPROC

PROCEDURE darkmode
    * Cambia colores de fondo y texto a modo oscuro
    THIS.BackColor = RGB(30,30,30)
    THIS.ForeColor = RGB(240,240,240)
ENDPROC

PROCEDURE gencurbase
    IF USED("curBase")
        USE IN curBase
    ENDIF
    lcJson = THISFORM.cJsonData
    IF !EMPTY(lcJson)
        JSONTOCURSOR(lcJson, "curBase", .T.)
    ENDIF
    INDEX ON id TAG id
    THISFORM.Grid1.RecordSource = "curBase"
ENDPROC

PROCEDURE importmultiplejs
    lcFiles = GETFILE("json", "Selecciona archivos JSON", "Importar", 1)
    IF EMPTY(lcFiles)
        RETURN
    ENDIF
    FOR EACH lcFile IN lcFiles
        lcJson = FILETOSTR(lcFile)
        IF !ISNULL(lcJson)
            JSONTOCURSOR(lcJson, "miCursor", .T.)
        ENDIF
    ENDFOR
    THISFORM.SetGrid()
    THISFORM.SetTreeView()
ENDPROC

PROCEDURE joinfjsontables
    * Une varias tablas JSON en una sola vista
    SELECT * FROM tabla1 UNION SELECT * FROM tabla2 INTO CURSOR unionjson
ENDPROC

PROCEDURE newkey
    * Genera una nueva clave única
    cKey = STR(VAL(THIS.cnextkey) + 1)
    RETURN cKey
ENDPROC

PROCEDURE nodelist
    IF USED("curNodos")
        USE IN curNodos
    ENDIF
    CREATE CURSOR curNodos (id I, nombre C(100), idPadre I, nivel I, tipo C(20))
    LOCAL lnId, lnNivel
    lnId = 1
    lnNivel = 1
    DO WHILE !EOF("curBase")
        INSERT INTO curNodos VALUES (lnId, curBase.nombre, curBase.idPadre, lnNivel, curBase.tipo)
        IF curBase.tieneHijos
            =ProcesarHijos(curBase.id, lnNivel+1)
        ENDIF
        SKIP IN curBase
        lnId = lnId + 1
    ENDDO
ENDPROC

PROCEDURE setear
    * Establece propiedades/configuraciones en controles
    THIS.Grid1.Enabled = .T.
ENDPROC

PROCEDURE setgrid
    * Configura la cuadrícula para mostrar datos
    THIS.Grid1.ColumnCount = 8
ENDPROC

PROCEDURE settreeview
    THISFORM.Olecontrol1.Object.Nodes.Clear()
    SCAN
        THISFORM.Olecontrol1.Object.Nodes.Add(, , "nodoID", campoPrincipal)
        IF !EMPTY(campoSubnodo)
            THISFORM.Olecontrol1.Object.Nodes.Add("nodoID", 4, , campoSubnodo)
        ENDIF
    ENDSCAN
    THISFORM.Olecontrol1.Object.Nodes.Item(1).Expanded = .T.
ENDPROC

PROCEDURE validarnodo
    lcNodo = THISFORM.Olecontrol1.Object.SelectedItem
    IF ISNULL(lcNodo) OR EMPTY(lcNodo.Text)
        RETURN .F.
    ENDIF
    IF lcNodo.Tipo <> "Permitido"
        RETURN .F.
    ENDIF
    RETURN .T.
ENDPROC

PROCEDURE viewjson
    IF EOF() OR BOF()
        RETURN
    ENDIF
    lcJson = THISFORM.Grid1.ColumnX.Text1.Value
    lcJsonFormatted = FormatearJson(lcJson)
    MESSAGEBOX(lcJsonFormatted, 64, "Detalle JSON")
ENDPROC
```

---

Esta documentación detalla la estructura, componentes y funcionamiento del formulario Visor Json según el archivo fuente. Para mayor profundidad, consulta los métodos específicos en el código fuente.
