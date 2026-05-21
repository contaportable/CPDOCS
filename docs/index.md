# CP2025 — Documentación

> Contaportable/CP2025 — App de escritorio en **Visual FoxPro 9.0** con control de versiones en **GitHub** y conversión binario⇄texto mediante **foxbin2prg**.

!!! tip "Lectura rápida"
    - **Repo:** [YECAPP/CP2025](https://github.com/YECAPP/CP2025)  
    - **Rama de trabajo:** `DESARROLLO` · **Releases:** `main`  
    - **Conversión:** bin→texto antes de *push*, texto→bin después de *pull*

## ¿Qué es CP2025?

Software contable y de facturación. El código principal está en Visual FoxPro 9.0; para poder versionar en Git se convierten los binarios (formularios/clases/reportes) a texto con **foxbin2prg**.

## Formatos de archivos

| Binario (VFP) | Texto (foxbin2prg) | Descripción                                    |
| --- | --- | --- |
| `.vcx` | `.vc2` | Contenedor de clases |
| `.scx` | `.sc2` | Formularios |
| `.prg` | `.prg` | Código (ya es texto) |

## Flujo de ramas

- **`DESARROLLO`**: rama principal de trabajo.
- **`main`**: se usa para publicar **releases** estables.

### Enlaces útiles

1. Contaportable.com :  
        1.  Descarga: <https://www.contaportable.com/vip/public/descargas/>  
        2.  Membresía: <https://www.contaportable.com/vip/public/login>
