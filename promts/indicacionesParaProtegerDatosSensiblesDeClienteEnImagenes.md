# Instrucciones — Protección de Datos Sensibles de Clientes en Imágenes

> Guía técnica para aplicar efecto de mosaico a capturas de pantalla antes de incluirlas en la documentación del proyecto CPDOCS.
> El objetivo es preservar el contexto funcional de cada imagen (estructura de la interfaz, labels, montos, flujos) mientras se protege la información personal identificable (PII) de los clientes.

---

## 1. Requisitos previos

```bash
pip install Pillow
```

Verificar instalación:

```bash
python -c "from PIL import Image; print('Pillow OK')"
```

---

## 2. Datos que se deben pixelar vs. los que deben permanecer visibles

### Pixelar (datos sensibles de clientes)

| Categoría | Ejemplos |
| --------- | -------- |
| Nombre del cliente | CIMRO MEDIKAL GROUP, S.A. DE C.V. |
| Dirección | 23 CALLE ORIENTE LOCAL 20131025... |
| NIT | 02100710221024 |
| DUI | 01234567-8 |
| NRC | 3217287 |
| Municipio (valor del campo) | CHALATENANGO SUR |
| Nombre de empresa en nombres de archivo | `FAE_..._CIMRO MEDIKAL GROUP_UUID.pdf` |
| Paths de directorio locales | `C:\USERS\DEVCP\DOWNLOADS\...` |
| Breadcrumb con carpetas personales | `CF_TEST_PROD > test_dubdirectory > ...` |
| Nombres de carpetas de trabajo del tester | Test Issues 575, InvFactAVM EL PINO |

### NO pixelar (contexto funcional visible)

| Elemento | Razón |
| -------- | ----- |
| Labels del formulario | Permiten entender la estructura |
| Prefijos de nomenclatura en archivos | `FAE_YYYYMMDD_CCC-000_` muestra el patrón |
| Código de cliente (`CIM-000`) | Parte de la nomenclatura, no PII directo |
| Montos, totales, cantidades | Datos operativos no identificables |
| Estructura de interfaz, menús, botones | Contexto funcional esencial |
| Folios de documento (`FF00087669`) | Número de transacción, no PII de persona |
| Estados (`Transmitido`, `Pendiente`) | No identifican al cliente |
| Tipo de documento, fecha, elaborado | Datos de sistema |

---

## 3. Script Python reutilizable

Guardar como `proteger_imagenes.py` o incluir la función en el script de documentación:

```python
from PIL import Image
import os

def pixelate(img, rects, block=9):
    """
    Aplica efecto mosaico a regiones rectangulares de una imagen PIL.

    Args:
        img: objeto Image de Pillow (convertido a RGB)
        rects: lista de tuplas (x1, y1, x2, y2) en píxeles absolutos
        block: tamaño del bloque de mosaico en píxeles (default 9)
    """
    for (x1, y1, x2, y2) in rects:
        w, h = img.size
        x1, y1 = max(0, x1), max(0, y1)
        x2, y2 = min(w, x2), min(h, y2)
        rw, rh = x2 - x1, y2 - y1
        if rw > 2 and rh > 2:
            region = img.crop((x1, y1, x2, y2))
            small  = region.resize(
                (max(1, rw // block), max(1, rh // block)), Image.BOX
            )
            img.paste(small.resize((rw, rh), Image.NEAREST), (x1, y1))


def process(src_path, dst_path, rects, block=9):
    """Abre, pixela y guarda una imagen."""
    img = Image.open(src_path).convert("RGB")
    pixelate(img, rects, block)
    img.save(dst_path, "PNG")
    w, h = img.size
    print(f"OK  {os.path.basename(dst_path)}  ({w}x{h})")
```

### Ejemplo de uso

```python
process(
    src_path="docs/assets/Facturacion/mi_funcion/captura.png",
    dst_path="docs/assets/Facturacion/mi_funcion/captura.png",  # sobreescribe
    rects=[
        (218, 22, 625, 44),   # nombre cliente
        (146, 44, 632, 67),   # dirección
        (638, 44, 766, 67),   # NRC
        (115, 67, 463, 92),   # municipio
        (510, 67, 662, 92),   # NIT
    ]
)
```

---

## 4. Reglas por tipo de imagen

### 4.1 Formulario de factura (ventana Factura del sistema)

La ventana Factura tiene un layout consistente. Los campos aparecen en filas horizontales:

```
[Cliente] [CIM-000] [botones] [NOMBRE CLIENTE ← PIXELAR]   [Fecha] [fecha]
[Dirección] [DIRECCIÓN ← PIXELAR]                           [NRC] [NRC ← PIXELAR]
[Municipio] [código] [MUNICIPIO ← PIXELAR]                  [NIT] [NIT ← PIXELAR]
[Depto]     [código] [depto_nombre]                         [DUI] [DUI ← PIXELAR]
```

Para estimar coordenadas absolutas:
1. Obtener dimensiones de la imagen: `img = Image.open(path); w, h = img.size`
2. El título "Factura" aparece en los primeros ~20px de altura
3. Las filas del formulario tienen aproximadamente 20-25px de alto cada una
4. Los campos de valor empiezan a aproximadamente x=115 (campos izquierdos) o x=460 (campos derechos)

### 4.2 Lista de facturas (grilla superior en capturas de formulario)

Cuando la captura muestra la grilla de facturas sobre el formulario:

```
[TpDoc] [Número] [Fecha] [CodCliente] [NOMBRE CLIENTE ← PIXELAR] [Elaboro] [Depto] [Monto] [Estado]
```

Estrategia: identificar el inicio de la columna Nombre Cliente (después del código CCC-000) y pixelar hasta la columna Elaboro.

### 4.3 Ventana Explorer de Windows (carpetas con archivos)

Formato de nombre de archivo: `FAE_YYYYMMDD_CCC-000_[NOMBRE CLIENTE]_UUID.ext`

Pixelar:
- **Breadcrumb** (barra de ruta): franja completa en la parte superior (y=0 a ~26px, ancho completo)
- **Nombre del cliente en el archivo**: solo la porción del nombre de empresa, dejando visible el prefijo `FAE_YYYYMMDD_CCC-000_` y el UUID al final

```text
FAE_20260202_CIM-000_ [CIMRO MEDIKAL GROUP, S.A. DE C.V.] _9B17268C-FB6C-4E63-8608.json
                       ↑ PIXELAR ESTA PARTE ↑
```

Para estimar x de inicio del nombre: prefijo = 21 chars × ~7.5px/char ≈ 158px desde inicio del texto (x≈55) → nombre empieza en x≈213.

### 4.4 Lista de facturas en app full-screen (1920px de ancho)

La grilla de facturas en capturas de pantalla completa de ContaPortable:
- Columna Nombre Cliente: aproximadamente x=730-1070 (varía según módulo)
- Filas de datos: y variable según el número de registros visibles
- Usar una banda horizontal que cubra las filas con datos: `(730, y_inicio, 1070, y_fin)`

### 4.5 Formulario de factura embebido en capturas full-screen

El formulario visible dentro de la captura full-screen es pequeño. Los campos:
- Nombre cliente: aproximadamente x=720-955
- Dirección: x=605-955
- NRC: x=958-1055
- Municipio: x=605-835
- NIT: x=858-975

---

## 5. Cómo medir coordenadas exactas

Cuando no se conocen las coordenadas exactas, usar pixel sampling:

```python
from PIL import Image

img = Image.open("ruta/imagen.png")
w, h = img.size
print(f"Dimensiones: {w}x{h}")

# Escanear una fila para encontrar texto oscuro
for x in range(0, w, 5):
    px = img.getpixel((x, 50))[:3]
    if px[0] < 80:  # texto oscuro (negro o azul oscuro)
        print(f"  Texto en x={x}: RGB{px}")
```

También útil para detectar los límites verticales de filas:

```python
# Detectar cambios bruscos de color en una columna (bordes de fila)
prev = None
for y in range(0, h):
    px = img.getpixel((100, y))[:3]
    if prev and abs(px[0] - prev[0]) > 30:
        print(f"  Cambio de fila en y={y}: {prev} -> {px}")
    prev = px
```

---

## 6. Verificar que el mosaico fue aplicado correctamente

Después de procesar, verificar que los píxeles en las zonas cubiertas son mosaico (no texto original):

```python
from PIL import Image

img = Image.open("ruta/imagen_procesada.png")

# Muestrear puntos dentro de las zonas pixeladas
puntos_a_verificar = [(300, 32), (200, 52), (400, 70)]

for (x, y) in puntos_a_verificar:
    px = img.getpixel((x, y))[:3]
    es_mosaico = px[0] > 130  # gris neutro o tono promediado
    es_texto   = px[0] < 60   # negro puro o azul oscuro
    print(f"  ({x},{y}): RGB{px} -> {'MOSAICO OK' if es_mosaico else 'TEXTO EXPUESTO' if es_texto else 'REVISAR'}")
```

Para confirmar el patrón de bloque 9×9 (todos los vecinos deben ser idénticos):

```python
px_base = img.getpixel((300, 32))[:3]
for dx in range(-9, 18, 9):
    for dy in range(-9, 18, 9):
        px = img.getpixel((300+dx, 32+dy))[:3]
        print(f"  ({300+dx},{32+dy}): {px}  {'=BLOQUE' if px == px_base else 'DIFERENTE'}")
```

---

## 7. Nota sobre el visor de imágenes (Read tool)

El visor de imágenes puede mostrar versiones en **caché** de la imagen original incluso después de aplicar el mosaico. Para verificar que los cambios fueron efectivamente guardados en disco, usar siempre el método de **pixel sampling** del punto 6, que lee directamente los valores del archivo guardado.

---

## 8. Imágenes que NO requieren pixelado

- Pantallas de configuración del sistema sin datos de cliente (solo parámetros, checkboxes, contraseñas con asteriscos)
- Fichas de productos (códigos, precios, descripciones de productos — no de clientes)
- Pantallas de sistema con datos de ejemplo genéricos o datos de prueba sin relación a clientes reales

---

## 9. Flujo de trabajo recomendado

```text
1. Capturar screenshot durante documentación del issue
2. Guardar en docs/assets/Modulo/nombre_funcion/nombre_descriptivo.png
3. Identificar si la imagen tiene PII de clientes
4. Si SÍ → aplicar pixelate() con las regiones identificadas
5. Verificar con pixel sampling que el mosaico fue aplicado
6. Referenciar en el .md con alt-text descriptivo y { align=center }
```

---

*Lineamiento establecido durante la documentación del Issue #545 (nomenclatura DTE) e Issue #509 (bloqueo de descuentos). Aplicado a imágenes en `assets/Facturacion/nomenclatura_dte/` y `assets/Facturacion/bloqueo_descuentos/`.*
