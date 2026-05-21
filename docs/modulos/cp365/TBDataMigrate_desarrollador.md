# TBDataMigrate — Guía Técnica (Desarrollador)

## 1. Propósito y Arquitectura

Resumen de uso técnico para la clase `yTBDataMigrate` (ubicada en `LIB1.0/DefineTBDataMigrate.prg`). Esta clase encapsula toda la lógica para extraer esquemas de datos desde un entorno origen (incluyendo propiedades de DBC, tablas e índices) y regenerarlos en un entorno destino.

### Archivos esenciales
- **Clase principal**: `LIB1.0/DefineTBDataMigrate.prg`
- **Cursores de metadata persistentes (generados en la ruta destino)**: 
  - `tbmeta_d.dbf` (Definición de estructura de tablas)
  - `tbmeta_i.dbf` (Definición de índices)

## 2. Modos de Operación

La clase soporta operar de forma directa leyendo desde archivos `.dbf` físicos, o mediante la definición de estructuras por código (Modo Script).

### Modo Directo (Extraer y Ejecutar)

Consiste en extraer la información directamente desde un directorio origen y aplicar los cambios en el destino.

```foxpro
* Instanciar la clase e indicar rutas
loMig = NEWOBJECT("yTBDataMigrate", "LIB1.0\DefineTBDataMigrate.prg")
loMig.cRutaOrigen = "C:\path\to\origin\"
loMig.cRutaDestino = "C:\path\to\dest\"

* Extrae campos e índices a cursores en memoria
loMig.prepararMetadataDesdeOrigen() 

* Opcional: Genera un PRG maestro que contiene las definiciones en código
loMig.exportarScriptMaestro("C:\path\out.prg", "cargarMetadata")  

* Ejecuta la migración (si ya existe tbmeta_d en origen copia basado en metadata)
loMig.ejecutar() 
```

### Modo Script (Definir Metadata por Código)

En este modo, en lugar de leer una base de datos origen, se define la estructura manualmente (útil para despliegues donde no se desea enviar la BD física).

```foxpro
loMig = NEWOBJECT("yTBDataMigrate", "LIB1.0\DefineTBDataMigrate.prg")

* Iniciar modo script
loMig.iniciarScript()

* Registrar campos (Ejemplo: Tabla, Campo, Tipo, ReferenciaDBC, Nulable, TipoIndice)
loMig.registrarCampo("Facturas", "ID", "N(10)", "CLIPROV", .T., "REGULAR")

* Registrar índices
loMig.registrarIndice("Facturas", "CLIPROV", "ID", "ID", "CANDIDATE", .F., "")

* Ejecutar migración desde el script cargado en memoria
loMig.ejecutarDesdeScript(.T.)
```

## 3. Notas Operativas y Troubleshooting

- **Logs**: La clase escribe automáticamente un archivo `migracion_<timestamp>.log` en la ruta destino con todos los mensajes de progreso, errores y advertencias.
- **Creación de Índices**: La rutina intenta recrear índices fieles al origen. Si falla, el sistema intenta crear índices "fallback" (versiones simplificadas). La mayoría de los errores provienen de:
  - Archivo destino no abierto en modo exclusivo (la clase ahora implementa reintentos para abrirlo).
  - Expresiones inválidas en `tbmeta_i.Expresion` o en la condición `Filtro`.
  - Índices únicos (`PRIMARY`/`CANDIDATE`) que presentan valores duplicados en el origen.

### Errores Comunes
- **"Variable 'X' is not found" / "Unrecognized phrase"**: Inspeccionar la `Expresion` correspondiente en `tbmeta_i.dbf` y normalizarla. Asegúrese de usar únicamente campos de la tabla o funciones estándar, evitando referencias a variables de ámbito externo que no existan en el entorno de destino.
- **"Uniqueness of index ... is violated"**: El índice origen está marcado como único, pero la tabla tiene registros duplicados en ese campo. Solución: Convertir el índice a regular o eliminar los duplicados en el origen antes de migrar.

## 4. Próximos Pasos Recomendados (Testing)

- Ejecutar una migración de prueba en una copia de la carpeta `DATA` y revisar minuciosamente el archivo log completo.
- Si persisten errores en la creación de índices específicos, capturar los mensajes del log (que incluyen el `expr` y la cláusula `for`) para aplicar reglas de fallback mejoradas dentro de la clase principal `yTBDataMigrate`.
