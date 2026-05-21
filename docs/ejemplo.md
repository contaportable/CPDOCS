# Flujo foxbin2prg (BIN ⇄ TXT)

Objetivo: versionar en Git los artefactos de **Visual FoxPro 9.0** convirtiéndolos a **texto** con foxbin2prg antes de subir cambios, y reconstruir **binarios** al bajar del repositorio.

## Mapeo de extensiones

| Visual FoxPro (bin) | Texto (foxbin2prg) |
| --- | --- |
| `.vcx` | `.vc2` |
| `.scx` | `.sc2` |
| `.frx` | `.fr2` |
| `.prg` | `.prg` (no cambia) |

## Escenario A — *Push* (subir cambios)

1. **Convierte BIN → TXT** (ejemplos):
    ```bash
    # Ejemplo de conversión (ajusta rutas/comandos según tu entorno)
    # Utilidad externa: Convert_VFP9_BIN_2_PRG.vbs o ejecutable de foxbin2prg
    foxbin2prg <ruta>  # BIN → TXT (*.vc2/*.sc2/*.fr2)
    ```
2. **Revisa y haz commit** solo de archivos **texto** (`.vc2`, `.sc2`, `.fr2`, `.prg`).
3. **Push** a la rama de trabajo (p. ej. `DESARROLLO`).

!!! warning
    Evita commitear archivos **binarios** (`.vcx/.scx/.frx`). Usa `.gitignore`/`gitattributes` para reforzarlo.

## Escenario B — *Pull* (bajar cambios)

1. `git pull` desde tu rama (p. ej. `DESARROLLO`).
2. **Convierte TXT → BIN** para reconstruir los artefactos de VFP:
    ```bash
    foxbin2prg <ruta>  # TXT → BIN (*.vcx/*.scx/*.frx)
    ```
3. Abre el proyecto en VFP y verifica formularios, clases y reportes.

## Recomendaciones
- Establece una **convención**: _“siempre convertir antes de push; siempre reconstruir después de pull”_.
- Considera **hooks** de Git (pre-commit/pre-push) para automatizar la conversión.
- Documenta en `CONTRIBUTING.md` y crea **plantillas de PR** para exigir la verificación.
- Añade `CODEOWNERS` para asignar revisores por carpetas (e.g., `FORMS/`, `REPORTS/`).

## Solución de problemas
- **Conflictos en texto** (`*.vc2/*.sc2/*.fr2`): resuélvelos como cualquier archivo Markdown/JSON. Luego reconstruye BIN.
- **Archivos DBF/IDX**: idealmente **no** versionarlos (alto ruido). Usa `.gitignore`.
- **Ramas**: `DESARROLLO` para trabajo diario; `main` para releases. Asegura fast-forward o PRs revisados.
