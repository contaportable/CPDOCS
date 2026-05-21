# Migración de Datos (TBDataMigrate) — Guía de Usuario

## 1. ¿Qué resuelve esta herramienta?

`TBDataMigrate` es una herramienta unificada diseñada para facilitar la extracción, creación y migración de estructuras de bases de datos y sus registros. Su objetivo principal es asegurar que el entorno de destino sea una réplica fiel del entorno de origen, garantizando la integridad de los datos y de los índices.

![TODO: Insertar Imagen - Pantalla principal de la herramienta de Migración de Datos](../assets/cp365/migracion_principal.png)

Sus capacidades principales incluyen:

- Extraer la estructura completa de las tablas de origen.
- Extraer todos los índices reales asociados a cada tabla.
- Detectar la base de datos (DBC) de origen a la que pertenece cada tabla.
- Crear las bases de datos (DBC), tablas e índices correspondientes en el entorno de destino.
- Migrar los datos desde el origen al destino de manera segura.

## 2. Beneficios Prácticos

- **Reducción de complejidad**: Todo el proceso se gestiona mediante un único flujo y una sola herramienta.
- **Fidelidad estructural**: Asegura que el entorno destino incluya no solo las tablas, sino también todos los índices tal cual existen en el origen.
- **Flexibilidad de ejecución**: Soporta distintos modos de trabajo, ya sea migrando desde bases de datos físicas o utilizando scripts maestros.
- **Trazabilidad**: Deja un registro detallado en logs y metadatos, lo que facilita auditorías y revisiones.
- **Uso incremental**: Es compatible con actualizaciones parciales o por módulo, sin afectar el resto del sistema.

## 3. Modos de Aplicación

La herramienta permite tres modos principales de operación según las necesidades del proyecto:

### 3.1 Modo A: Migración Completa (Estructura + Datos)

**Escenario**: Se cuenta con una carpeta de datos de origen y se requiere construir la misma estructura en otro lugar copiando además la información.

**Pasos generales**:

1. Configurar las rutas de origen y destino en la herramienta.
   ![TODO: Insertar Imagen - Configuración de rutas de origen y destino](../assets/cp365/migracion_rutas.png)
2. Indicar que se desea realizar la copia de datos y sobreescribir la estructura existente si fuera necesario.
3. Ejecutar el proceso principal.

### 3.2 Modo B: Despliegue mediante Script Maestro

**Escenario**: No se desea distribuir archivos físicos (DBF) para crear las bases de datos; en su lugar, se prefiere usar un script ejecutable que contenga las definiciones de las tablas.

**Pasos generales**:

1. El equipo técnico genera un "Script Maestro" que contiene la estructura.
2. Se ejecuta este script en el entorno de destino.
3. El sistema crea las estructuras vacías (y opcionalmente migra datos) sin depender de archivos de bases de datos de origen físico.

### 3.3 Modo C: Solo Estructura

**Escenario**: Es necesario preparar el entorno con tablas e índices vacíos, sin cargar información histórica.

**Pasos generales**:

1. Se configura la herramienta desactivando la migración de datos.
2. Se ejecuta el proceso, ya sea desde el origen real (Modo A) o desde un script (Modo B), logrando como resultado un entorno estructurado listo para ser llenado desde cero.

## 4. Checklist Operativo

### Antes de ejecutar

- [ ] Verificar las rutas configuradas para la carpeta de origen (si aplica) y la carpeta de destino.
- [ ] Confirmar si el objetivo es migrar datos completos o únicamente generar la estructura vacía.
- [ ] Confirmar si la operación se hará conectándose directamente al origen o mediante un Script Maestro.

### Después de ejecutar

- [ ] Revisar el archivo de registro (log) generado para confirmar que no hubo errores.
   ![TODO: Insertar Imagen - Vista del archivo de log de resultados](../assets/cp365/migracion_log.png)
- [ ] Validar en el destino que las bases de datos (DBC) hayan sido creadas.
- [ ] Confirmar que todas las tablas requeridas estén presentes.
- [ ] Verificar que los índices de cada tabla se crearan de acuerdo al origen.
- [ ] Si se migró información, validar el conteo de registros para asegurar que no se haya perdido información.

## 5. Resultado Esperado

Al finalizar el uso de esta herramienta, se contará con una estructura de base de datos en el destino idéntica al origen (con o sin datos, según lo elegido). Todo el proceso quedará registrado, facilitando el despliegue tanto en instalaciones actuales como en infraestructuras futuras que requieran automatización.
