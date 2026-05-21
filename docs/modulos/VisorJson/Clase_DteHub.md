# Clase DteHub

## Descripción General

La clase `DteHub` es el centro de operaciones para la gestión de archivos JSON de DTE (Documentos Tributarios Electrónicos) en el sistema. Su objetivo es importar, validar, almacenar y organizar documentos DTE en formato JSON, facilitando su posterior consulta y visualización.

## Propósito

- Centralizar la administración de archivos JSON de DTE
- Validar y clasificar documentos importados
- Crear la estructura de carpetas y tablas para almacenar los DTE por año y mes
- Facilitar la visualización y exportación de los datos JSON

## Propiedades principales

- `jsonDte`: Contenido JSON del DTE actual
- `oyImportJson`: Objeto auxiliar para importación de JSON
- `oyTbJson`: Objeto auxiliar para operaciones sobre JSON
- `oFSO`: Objeto FileSystem para manejo de archivos y carpetas

## Métodos principales

### INIT
Inicializa la clase y crea instancias de los objetos auxiliares (`ytbjson`, `FileSystemObject`).

### createStructureDefaultDteHub()
Crea la estructura de directorios y tablas necesarias para almacenar los DTE por año y mes.

### getDteHubByDteList()
Obtiene la lista de DTE, la valida y la inserta en las tablas correspondientes. Realiza la importación y clasificación de los documentos.

### saveJsonInJSTable(toDteClean, tcMesDte, tcAnioDte, tcSelloRecDte)
Guarda el contenido JSON de cada DTE en las tablas mensuales (`jsMMYYYY.dbf` y `jsMMYYYYD.dbf`). Realiza el split del JSON en campos individuales para facilitar la consulta y visualización.

### createDirectoryDteHub(tcDirAnio)
Crea los directorios base y subcarpetas por año para almacenar los archivos y tablas de DTE.

### createTablesDteHub(tcPathTableCreate)
Crea las tablas DBF necesarias para almacenar los encabezados y detalles de los DTE importados. Las tablas incluyen campos como `LINE`, `CODGEN`, `VERSION`, `AMBIENTE`, `ESTADO`, y hasta 120 campos `DESCRIP` para almacenar información detallada del JSON.

### validateDteObj(toDteJson, tcActionValidate, tcCursorEvaluate)
Valida condiciones específicas del DTE, como el ambiente, y marca observaciones en caso de inconsistencias.

## Estructura de Datos

Las tablas creadas por `DteHub` para almacenar los DTE incluyen:

- **jsMMYYYY.dbf**: Encabezado del DTE (versión, ambiente, estado, código de generación, sello de recepción, fecha, receptor, emisor, etc.)
- **jsMMYYYYD.dbf**: Detalle del DTE, con hasta 120 campos `DESCRIP` para almacenar información JSON desglosada.

## Flujo de Trabajo

1. Importar archivos JSON de DTE
2. Validar y clasificar los documentos
3. Crear directorios y tablas según año/mes
4. Guardar el JSON y sus datos en las tablas
5. Visualizar el contenido con el visor JSON

## Notas
- El sistema maneja validaciones automáticas y observaciones para documentos con errores o inconsistencias.
- La estructura de carpetas y tablas permite organizar los DTE por año y mes, facilitando la consulta histórica.

