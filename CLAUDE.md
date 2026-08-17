# CLAUDE.md — Proyecto CPDOCS

## Contexto del proyecto

- **Proyecto:** CP2025 Docs (ContaPortable) — documentación técnica para software de contabilidad en Visual FoxPro 9.0
- **Stack:** MkDocs con tema Material, publicado en GitHub Pages
- **Idioma:** Español. Todas las respuestas y toda la documentación se redactan en español.
- **Repositorio de docs:** `https://github.com/contaportable/CPDOCS/`

---

## Lineamientos de documentación

Los lineamientos completos están en [`promts/lineamientosDoc.md`](promts/lineamientosDoc.md). A continuación el resumen operativo que Claude debe aplicar en todo momento.

### Extensiones MkDocs activas

`admonition`, `pymdownx.details`, `pymdownx.superfences`, `pymdownx.tabbed`, `pymdownx.emoji`, `pymdownx.keys`, `pymdownx.highlight`, `attr_list`, `md_in_html`, `pymdownx.blocks.caption`, `tables`, `def_list`, `footnotes`, `glightbox`

### Jerarquía de encabezados

- **H1:** Uno por archivo. Puede incluir nombre del módulo y descripción separados por ` — `. Puede llevar icono Material.
- **H2:** Siempre con emoji. Separar con `---` antes del siguiente H2.
  - `## 📌 Introducción` / `## 📦 Instalación y requisitos` / `## ⚙️ Configuración` / `## 📝 Historial de actualizaciones` / `## 📚 Uso General` / `## 🧩 Funcionalidades` / `## 🚀 Características del reporte`
- **H3:** Siempre con emoji. Elegir el más representativo del subtema.
  - 🧪 pruebas/validaciones | 🔒 privilegio activo | 🔓 privilegio desactivado | 🔑 contraseña/acceso | 📊 límites/parámetros | 🗂️ campos/datos | 🖥️ interfaz | 🔁 flujos alternativos
- **No usar H4 ni H5** — reemplazar con admonitions anidados o listas.

### Admonitions

| Tipo | Cuándo usarlo |
|------|---------------|
| `!!! info` | Información general, requisitos previos, parámetros |
| `!!! note` | Detalles importantes, restricciones, comportamientos específicos |
| `!!! tip` | Buenas prácticas, atajos, tutoriales en video |
| `!!! warning` | Advertencias, errores potenciales, restricciones de seguridad |
| `!!! example` | Procedimientos paso a paso, flujos concretos |
| `!!! abstract` | Introducciones de sección, resumen de funcionalidades |
| `!!! danger` | Acciones destructivas o irreversibles |

Usar `???` en lugar de `!!!` para versión colapsable. Las imágenes dentro de un admonition van **indentadas** al nivel del bloque (4 u 8 espacios según anidamiento).

### Imágenes

```markdown
![Descripción](../../assets/NombreModulo/nombre_funcion/imagen.png){ .align=center }
```

- Siempre rutas **relativas** desde el `.md`.
- Carpeta en `assets/` coincide con el nombre del módulo (ej. `Facturacion/`, `Planillas/`).
- Cada funcionalidad tiene su subcarpeta con el mismo nombre que el `.md`.

**Nomenclatura de archivos:**

| Prefijo | Uso |
|---------|-----|
| `requerimiento_01.png` | Capturas del requerimiento original |
| `bloqueo_activo_01.png` | Funcionalidad en uso |
| `config_NNN.png` | Pantallas de configuración |
| `parametros_NNN.png` | Parámetros del sistema |
| `test_NNN.png` | Capturas de pruebas |
| `privilegio_desactivado_NNN.png` | Función desactivada |
| `ficha_NNN.png` | Fichas de productos/clientes |
| `paso_01.png`, `paso_02.png` | Pasos secuenciales |

No usar `<p>` ni `*caption suelto*` en línea propia — usar el alt-text de la imagen como caption (el plugin glightbox lo muestra automáticamente).

### Pestañas

```markdown
=== "1️⃣ Instalación por primera vez"
    Contenido...

=== "2️⃣ Reinstalación / Actualización"
    Contenido...
```

### Separadores

`---` entre cada H2.

### Formato de texto

- **Negrita:** nombres de campos, parámetros, elementos de UI.
- *Itálica:* uso mínimo.
- Nombres de campos en negrita cuando se mencionan en texto narrativo.

### Estructura típica de un documento

```
H1 — título
## 📌 Introducción
## 📦 Requisitos previos
## ⚙️ Configuración
## 📚 Uso
## ☑️ Validaciones y Pruebas Realizadas 🧪
## 📝 Historial de actualizaciones
```

### Sección de validaciones (obligatoria)

```markdown
## ☑️ Validaciones y Pruebas Realizadas 🧪

!!! info "Compilado validado"
    Las pruebas se realizaron sobre el compilado **EXE_YYYY_MM_DD.exe**.

!!! example "Tipos de validaciones y pruebas Realizadas"
    ??? example "Pruebas de configuración"
        - :material-check-circle: Resultado: **exitoso**

        ![Captura](../../assets/Modulo/funcion/test_config.png){ align=center }

    ??? example "Pruebas de funcionamiento"
        - :material-check-circle: Funcionalidad: **confirmada**

        ![Captura](../../assets/Modulo/funcion/test_func.png){ align=center }
```

### Reglas generales de estilo

1. Un H1 por documento, al inicio.
2. Todo H2 y H3 lleva emoji.
3. Separar H2 con `---`.
4. Información no narrativa va dentro de admonitions (no listas sueltas en el cuerpo).
5. Imágenes siempre con `{ .align=center }`.
6. Botones de navegación con `.md-button`, en negrita, con icono al final.
7. Sin H4 ni H5 — usar admonitions anidados o listas.
8. Pestañas con emoji numerado: 1️⃣ 2️⃣ 3️⃣.
9. Collapsibles (`???`) para historial, opciones avanzadas o contenido secundario.
10. No repetir información entre secciones — cada sección aporta algo nuevo.

---

## Protección de datos sensibles en imágenes

Los lineamientos completos están en [`promts/indicacionesParaProtegerDatosSensiblesDeClienteEnImagenes.md`](promts/indicacionesParaProtegerDatosSensiblesDeClienteEnImagenes.md).

### Regla obligatoria

**Toda imagen con datos reales de clientes debe pixelarse antes de publicarse.** El efecto de mosaico preserva el contexto funcional (estructura, labels, montos) pero protege la PII.

### Datos que DEBEN pixelarse

| Categoría | Ejemplos |
|-----------|---------|
| Nombre del cliente | CIMRO MEDIKAL GROUP, S.A. DE C.V. |
| Dirección | 23 CALLE ORIENTE LOCAL... |
| NIT / DUI / NRC | 02100710221024 / 3217287 |
| Municipio (valor del campo) | CHALATENANGO SUR |
| Nombre de empresa en nombres de archivo | `FAE_..._CIMRO MEDIKAL GROUP_UUID.pdf` |
| Paths de directorio locales | `C:\USERS\DEVCP\DOWNLOADS\...` |
| Nombres de carpetas personales de trabajo | Test Issues 575, InvFactAVM EL PINO |

### Datos que DEBEN permanecer visibles

- Labels del formulario (Cliente, Dirección, NIT, Municipio, etc.)
- Prefijos de nomenclatura (`FAE_YYYYMMDD_CCC-000_`)
- Códigos de cliente (`CIM-000`) cuando el objetivo es mostrar la nomenclatura
- Montos, totales, cantidades
- Estructura de interfaz, menús, botones, columnas
- Folios de documento (FF00087669, etc.)
- Estados (Transmitido, Pendiente, etc.)

### Herramienta: Python + Pillow (bloque 9px)

```python
from PIL import Image
import os

def pixelate(img, rects, block=9):
    for (x1, y1, x2, y2) in rects:
        w, h = img.size
        x1, y1 = max(0, x1), max(0, y1)
        x2, y2 = min(w, x2), min(h, y2)
        rw, rh = x2 - x1, y2 - y1
        if rw > 2 and rh > 2:
            region = img.crop((x1, y1, x2, y2))
            small  = region.resize((max(1, rw // block), max(1, rh // block)), Image.BOX)
            img.paste(small.resize((rw, rh), Image.NEAREST), (x1, y1))

def process(src_path, dst_path, rects, block=9):
    img = Image.open(src_path).convert("RGB")
    pixelate(img, rects, block)
    img.save(dst_path, "PNG")
    w, h = img.size
    print(f"OK  {os.path.basename(dst_path)}  ({w}x{h})")
```

### Verificación post-proceso

Después de pixelar, muestrear píxeles en zonas cubiertas. Un área pixelada tiene valores RGB > 130 (gris neutro); texto expuesto tiene valores < 60. Ver script completo en el archivo de instrucciones.

### Imágenes que NO requieren pixelado

- Pantallas de configuración sin datos de cliente (solo parámetros, checkboxes)
- Fichas de productos (códigos, precios, descripciones)
- Pantallas con datos genéricos o de prueba sin relación a clientes reales

### Flujo de trabajo

```
1. Capturar screenshot
2. Guardar en docs/assets/Modulo/nombre_funcion/nombre.png
3. Identificar si la imagen tiene PII de clientes
4. Si SÍ → aplicar pixelate() con las regiones identificadas
5. Verificar con pixel sampling que el mosaico fue aplicado
6. Referenciar en el .md con alt-text descriptivo y { align=center }
```
