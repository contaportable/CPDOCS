# Especificación: portada por tarjetas, etiquetas de estado y feedback

## Objetivo
La portada de la documentación debe llevar al usuario a las guías más usadas con un clic, mostrar qué cambió recientemente y permitir que el usuario indique si una página le fue útil.

## Alcance
1. **Portada por tarjetas**: una rejilla de tarjetas con las guías de mayor uso (Bancos, Contabilidad, Reportes contables, Contribuyentes, Actualizador, Reportes de inventario).
2. **Etiquetas de estado**: solo "Nuevo" y "Actualizado". Cada una tiene fecha de vigencia y se oculta sola al vencer.
3. **Feedback**: al pie de cada página, "¿Te fue útil esta página?" con respuesta a soporte@contaportable.com.
4. **Hoja de anuncio de ContaPortable365**: página "Próximamente" con logo oficial, sin prometer contenido en este sitio.

## Fuera de alcance
- Analítica de clics (no hay acceso a estadísticas del sitio).
- Publicar páginas que no estén en `main`.
- Changelog con enlaces o formato extra (lo lee el actualizador).

## Criterios de aceptación
- [ ] Cada tarjeta enlaza a una página que existe en `main`.
- [ ] Ninguna etiqueta dice "En desarrollo".
- [ ] Una etiqueta con fecha `data-hasta` anterior a hoy no se muestra.
- [ ] El botón de feedback abre un correo a soporte@contaportable.com.
- [ ] `mkdocs build` termina sin errores nuevos (las advertencias de imágenes faltantes ya existían).
- [ ] El menú no incluye entradas a páginas que no estén en `main`.

## Plan
1. Estilos y script de vigencia: `docs/assets/css/estados.css`, `docs/assets/js/estados.js`.
2. Tarjetas en `docs/index.md`.
3. Configuración en `mkdocs.yml`: `extra_css`, `extra_javascript`, `extra.feedback`.
4. Etiquetas en los títulos de las páginas actualizadas (depósitos, contabilización, reportes contables, actualizador, contribuyentes, fase 1).
5. Hoja de anuncio: `docs/contaportable365/proximamente.md` con el logo oficial.

## Verificación
- Compilar con `python -m mkdocs build` y revisar que no aparezcan errores de navegación.
- Comprobar en el HTML generado que los enlaces de las tarjetas existen.
- Revisar que las etiquetas tengan fecha y que el script no falle al cargar.

## Mantenimiento de las etiquetas
Cada etiqueta lleva `data-hasta`. Al cerrar cada mes se revisan las fechas: cuando vence, la etiqueta desaparece sin editar la página. Para una nueva etiqueta, se agrega al título con fecha de vigencia.

## Riesgos
- El script depende de la fecha del navegador del usuario.
- El botón de feedback depende del cliente de correo instalado.
