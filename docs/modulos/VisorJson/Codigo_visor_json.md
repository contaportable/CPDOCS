### getJsonDTE

**Propósito:**  
El método `getJsonDTE` de la clase `ytbjson` está diseñado para obtener el contenido JSON de un DTE (Documento Tributario Electrónico) previamente procesado o importado.

**Funcionamiento:**  
- Este procedimiento accede al objeto JSON correspondiente al DTE y lo retorna como una cadena.
- Es útil para recuperar el JSON original de un documento, por ejemplo, para visualizarlo, exportarlo o realizar validaciones adicionales.

**Uso típico:**  
Se utiliza cuando se requiere acceder al contenido completo del DTE en formato JSON, ya sea para mostrarlo en el visor, exportarlo a otro sistema, o realizar operaciones de análisis sobre el documento.

**Retorno:**  
Devuelve una cadena con el contenido JSON del DTE.

**Ejemplo de invocación:**
```foxpro
lcJsonDTE = loYtbjson.getJsonDTE()
```

**Notas:**
- El método asume que el objeto DTE ya ha sido cargado o procesado en la instancia de la clase.
- Si el DTE no está disponible, el método puede retornar una cadena vacía o nula.

---

¿Deseas agregar un ejemplo de uso más detallado o alguna advertencia técnica específica?### getJsonDTE

**Propósito:**  
**Funcionamiento:**  
- Este procedimiento accede al objeto JSON correspondiente al DTE y lo retorna como una cadena.
- Es útil para recuperar el JSON original de un documento, por ejemplo, para visualizarlo, exportarlo o realizar validaciones adicionales.

**Uso típico:**  
Se utiliza cuando se requiere acceder al contenido completo del DTE en formato JSON, ya sea para mostrarlo en el visor, exportarlo a otro sistema, o realizar operaciones de análisis sobre el documento.

**Retorno:**  
Devuelve una cadena con el contenido JSON del DTE.

**Ejemplo de invocación:**
```foxpro
lcJsonDTE = loYtbjson.getJsonDTE()
**Notas:**
- Si el DTE no está disponible, el método puede retornar una cadena vacía o nula.

---
# Clase DteHub y Visor JSON

## Descripción General

La clase `DteHub` es el centro de operaciones para la gestión de archivos JSON de DTE (Documentos Tributarios Electrónicos) en el sistema. Permite importar, validar, almacenar y visualizar documentos en formato JSON, integrándose con el visor de JSON para mostrar el contenido procesado.

## Propósito

- Centralizar la administración de archivos JSON de DTE
- Validar y clasificar documentos importados
- Crear la estructura de carpetas y tablas para almacenar los DTE por año y mes
- Facilitar la visualización y exportación de los datos JSON

## Métodos Principales

### INIT
Inicializa la clase y crea instancias de los objetos auxiliares (`ytbjson`, `yImportJson`, `FileSystemObject`).

### createStructureDefaultDteHub()
Crea la estructura de directorios y tablas necesarias para almacenar los DTE por año y mes.

### getDteHubByDteList()
Obtiene la lista de DTE, la valida y la inserta en las tablas correspondientes. Realiza la importación y clasificación de los documentos.

### saveJsonInJSTable()
Guarda el contenido JSON de cada DTE en las tablas mensuales (`jsMMYYYY.dbf` y `jsMMYYYYD.dbf`). Realiza el split del JSON en campos individuales para facilitar la consulta y visualización.

### createDirectoryDteHub()
Crea los directorios base y subcarpetas por año para almacenar los archivos y tablas de DTE.

### createTablesDteHub()
Crea las tablas DBF necesarias para almacenar los encabezados y detalles de los DTE importados. Las tablas incluyen campos como `LINE`, `CODGEN`, `VERSION`, `AMBIENTE`, `ESTADO`, y hasta 120 campos `DESCRIP` para almacenar información detallada del JSON.

## Integración con el Visor JSON

El visor JSON utiliza el método `getJsonDTE` de la clase `ytbjson` para obtener el contenido JSON de un DTE previamente importado y almacenado por `DteHub`. Este método retorna el JSON como una cadena, permitiendo visualizar, exportar o validar el documento.

### getJsonDTE

**Propósito:**  
Obtener el contenido JSON de un DTE procesado o importado.

**Funcionamiento:**  
- Accede al objeto JSON correspondiente al DTE y lo retorna como una cadena.
- Útil para visualizar, exportar o validar el JSON original del documento.

**Ejemplo de invocación:**
```foxpro
lcJsonDTE = loYtbjson.getJsonDTE()
```

**Notas:**
- El método asume que el objeto DTE ya ha sido cargado o procesado en la instancia de la clase.
- Si el DTE no está disponible, puede retornar una cadena vacía o nula.

## Estructura de Datos

Las tablas creadas por `DteHub` para almacenar los DTE incluyen:

- **jsMMYYYY.dbf**: Encabezado del DTE (versión, ambiente, estado, código de generación, sello de recepción, fecha, receptor, emisor, etc.)
- **jsMMYYYYD.dbf**: Detalle del DTE, con hasta 120 campos `DESCRIP` para almacenar información JSON desglosada.

## Flujo de Trabajo

1. Importar archivos JSON de DTE
2. Validar y clasificar los documentos
3. Crear directorios y tablas según año/mes
4. Guardar el JSON y sus datos en las tablas
5. Visualizar el contenido con el visor JSON usando `getJsonDTE`

## Referencias

- [defineDteHub.PRG](../../../../../../../NIXON/FOX/SEPT2025DTEMANAGEMENTHUB/APP/LIB1.0/defineDteHub.PRG)
- [defineytbjson.PRG](../../../../../../../NIXON/FOX/SEPT2025DTEMANAGEMENTHUB/APP/LIB1.0/defineytbjson.PRG)

---