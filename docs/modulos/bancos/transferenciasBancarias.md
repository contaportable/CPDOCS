<!---
description: Documentación del formulario de transferencia entre cuentas bancarias en el módulo de Bancos. Genera automáticamente los documentos DP, CH o NC correspondientes a cada cuenta. Issue #551.
--->

# Transferencia entre Cuentas

El módulo de Bancos incorpora un formulario dedicado para realizar transferencias entre cuentas propias, generando automáticamente los documentos de salida (nota de cargo NC o cheque CH) y entrada (depositos DP) sin necesidad de registrarlos por separado.

---

## 📌 Introducción

!!! abstract "Formulario de Transferencia entre Cuentas"
    Anteriormente, una transferencia entre cuentas bancarias requería dos movimientos manuales separados: un depósito para la cuenta destino y una nota de cargo o cheque para la cuenta origen. El nuevo formulario unifica este proceso en un solo paso, generando los registros correspondientes en el módulo de Bancos de forma automática.

---

## 🎯 Objetivo

!!! info "Propósito"
    - Simplificar el proceso de transferencia entre cuentas bancarias propias en un único formulario.
    - Generar automáticamente los documentos DP (depósito), CH (cheque) o NC (nota de cargo) en los módulos correspondientes.
    - Garantizar la trazabilidad de cada transferencia mediante el número de referencia de movimiento (RM) en los documentos generados.
    - Validar obligatoriedad de campos clave (descripción y cuenta contable de subcuenta) antes de ejecutar la transferencia.

---

## 🔍 Alcance

!!! note "Módulos y funciones afectadas"
    - **Módulo:** Bancos → Transferencia entre Cuentas
    - **Documentos generados automáticamente:** DP (depósito), NC (nota de cargo)
    - **Acceso:** controlado por usuario (A-01 tiene acceso por defecto; otros usuarios requieren permiso explícito)
    - **Reportes bancarios verificados:** Auxiliar de Bancos (ban11.frx), Estado de Cuenta Bancario (ban12.frx), Saldos de Cuentas Bancarias (ban13.frx), Saldos de Cuentas Bancarias — Solo Disponibilidad (ban13v2.frx), Listado de Cheques (ban14.frx)

---

## ✨ Solución Implementada

!!! abstract "Descripción de la solución"
    Se implementó un formulario dedicado accesible desde el módulo de Bancos. Al completar los datos y ejecutar la transferencia, el sistema crea automáticamente el documento de salida (NC o CH) en la cuenta origen y el depósito (DP) en la cuenta destino.

    ![Boton para ingresar al formulario de transferencia entre cuentas](../../assets/Bancos/transferenciasbancarias/toolbutton.png){ align=center }

    ### 🖥️ Formulario de transferencia

    !!! note "Campos del formulario"
        - **Descripción** — campo obligatorio (sin descripción el depósito generado puede eliminarse al modificarse)
        - **Cuenta contable** — obligatorio, solo permite ingresar subcuentas (campo bloqueado para evitar ingreso manual de cuentas de mayor)
        - **Monto** de la transferencia
        - **Banco Origen** con tipo de documento de salida (CH o NC)
        - **Banco Destino** (genera el DP automáticamente)

        ![Diseño final del formulario de transferencia entre cuentas](../../assets/Bancos/transferenciasbancarias/requerimiento_diseno_final.png){ align=center }

    ### 📄 Documentos generados automáticamente

    !!! note "Documento de salida — NC (Nota de Cargo)"
        Al seleccionar NC como tipo de documento de salida, el sistema genera una Nota de Cargo en la cuenta origen con los datos de la transferencia.

        ![NC generada — vista de documento](../../assets/Bancos/transferenciasbancarias/sol_nc_documento.png){ align=center }

        ![NC generada — detalle del movimiento](../../assets/Bancos/transferenciasbancarias/sol_nc_detalle.png){ align=center }

    !!! note "Documento de entrada — DP (Depósito)"
        Simultáneamente, el sistema genera un Depósito en la cuenta destino por el mismo monto.

        ![DP generado — vista de documento](../../assets/Bancos/transferenciasbancarias/sol_dp_documento.png){ align=center }

---

## ⚙️ Configuración Requerida

!!! note "Requisitos de configuración"
    | Requisito | Descripción |
    | --------- | ----------- |
    | **Acceso de usuario** | El usuario debe tener acceso al formulario de transferencia. El usuario A-01 lo tiene por defecto. Los demás deben configurarse desde la administración de accesos. |
    | **Cuenta contable** | Debe configurarse una subcuenta contable válida para el registro. El sistema no permite ingresar cuentas de mayor ni dejarlo vacío. |
    | **Descripción** | Campo obligatorio. Un depósito generado sin descripción puede eliminarse al entrar a modificarlo y guardarlo. |
    | **Bancos configurados** | Las cuentas bancarias origen y destino deben estar registradas en el módulo de Bancos. |

---

## 🔄 Flujo Funcional

!!! example "Flujo de transferencia entre cuentas"

    === "1️⃣ Ejecutar la transferencia"
        1. Acceder al módulo de Bancos → opción **Transferencias Bancarias**.
        2. Ingresar la **descripción** de la transferencia (campo obligatorio).
        3. Seleccionar la **cuenta contable** usando el selector (no se puede ingresar manualmente).
        4. Ingresar el **monto** de la transferencia.
        5. Seleccionar el **Banco Origen** y el tipo de documento de salida (NC).
        6. Seleccionar el **Banco Destino**.
        7. Guardar y aplicar la transferencia.
        8. El sistema genera automáticamente el documento de salida y el DP en destino.
        9. El formulario se limpia para una nueva transferencia.

    === "2️⃣ Verificar los documentos generados"
        10. Ir al módulo de Bancos → cuenta origen → verificar el documento NC generado.
        11. Confirmar que el número del depósito aparece en la observación del documento.
        12. Ir a la cuenta destino → verificar el DP generado con el mismo monto y orden de gasto de complemento.
        13. Consultar los reportes bancarios (ban11-ban14) para confirmar que ambos movimientos aparecen correctamente.

    === "3️⃣ Control de acceso"
        14. Desde la administración de usuarios, verificar los permisos del formulario de transferencia.
        15. Un usuario sin acceso verá bloqueada la opción en el módulo.
        16. El usuario A-01 tiene acceso habilitado por defecto.

---

## ☑️ Validaciones y Pruebas Realizadas 🧪

!!! example "Tipos de validaciones y pruebas Realizadas"
    ??? example "Flujo completo de transferencia"
        Se validó el flujo completo: acceso al formulario, selección de bancos, ejecución de la transferencia, verificación de documentos de salida y entrada.

        - :material-check-circle: Acceso al formulario con usuario A-01: **exitoso**
        - :material-check-circle: Selección de banco origen, tipo de documento y banco destino: **correcto**
        - :material-check-circle: Generación automática de NC y DP: **confirmada**
        - :material-check-circle: Formulario se limpia después de ejecutar: **confirmado**
        - :material-check-circle: Documento de salida (NC) en cuenta origen: **verificado**
        - :material-check-circle: Documento de entrada (DP) en cuenta destino: **verificado**

        ![Acceso al formulario de transferencia](../../assets/Bancos/transferenciasbancarias/test1_acceso_formulario.png){ align=center }

        ![Selección de bancos y datos de la transferencia](../../assets/Bancos/transferenciasbancarias/test1_seleccion_bancos.png){ align=center }

        ![Transferencia guardada y aplicada](../../assets/Bancos/transferenciasbancarias/test1_guardar_transferencia.png){ align=center }

        ![Formulario limpio tras la transferencia](../../assets/Bancos/transferenciasbancarias/test1_formulario_limpio.png){ align=center }

        ![Verificación documento de salida — vista 1](../../assets/Bancos/transferenciasbancarias/test1_doc_salida_01.png){ align=center }

        ![Verificación documento de salida — vista 2](../../assets/Bancos/transferenciasbancarias/test1_doc_salida_02.png){ align=center }

        ![Verificación documento de salida — vista 3](../../assets/Bancos/transferenciasbancarias/test1_doc_salida_03.png){ align=center }

        ![Verificación documento de entrada — vista 1](../../assets/Bancos/transferenciasbancarias/test1_doc_entrada_01.png){ align=center }

        ![Verificación documento de entrada — vista 2](../../assets/Bancos/transferenciasbancarias/test1_doc_entrada_02.png){ align=center }

        ![Verificación documento de entrada — vista 3](../../assets/Bancos/transferenciasbancarias/test1_doc_entrada_03.png){ align=center }

    ??? example "Verificación en reportes bancarios (ban11 – ban14)"
        Se confirma que los movimientos de salida y entrada aparecen correctamente en los reportes bancarios disponibles.

        - :material-check-circle: Auxiliar de Bancos (ban11.frx) — movimiento registrado: **confirmado**
        - :material-check-circle: Estado de Cuenta Bancario (ban12.frx) — movimiento registrado: **confirmado**
        - :material-check-circle: Saldos de Cuentas Bancarias (ban13.frx) — movimiento registrado: **confirmado**
        - :material-check-circle: Saldos de Cuentas Bancarias — Solo Disponibilidad (ban13v2.frx) — movimiento registrado: **confirmado**
        - :material-check-circle: Listado de Cheques (ban14.frx) — movimiento registrado: **confirmado**

        ![Auxiliar de Bancos (ban11.frx) — movimiento de salida](../../assets/Bancos/transferenciasbancarias/test1_ban11_01.png){ align=center }

        ![Auxiliar de Bancos (ban11.frx) — movimiento de entrada](../../assets/Bancos/transferenciasbancarias/test1_ban11_02.png){ align=center }

        ![Estado de Cuenta Bancario (ban12.frx) — vista 1](../../assets/Bancos/transferenciasbancarias/test1_ban12_01.png){ align=center }

        ![Estado de Cuenta Bancario (ban12.frx) — vista 2](../../assets/Bancos/transferenciasbancarias/test1_ban12_02.png){ align=center }

        ![Saldos de Cuentas Bancarias (ban13.frx)](../../assets/Bancos/transferenciasbancarias/test1_ban13.png){ align=center }

        ![Saldos de Cuentas Bancarias — Solo Disponibilidad (ban13v2.frx)](../../assets/Bancos/transferenciasbancarias/test1_ban13v2.png){ align=center }

        ![Listado de Cheques (ban14.frx) — vista 1](../../assets/Bancos/transferenciasbancarias/test1_ban14_01.png){ align=center }

        ![Listado de Cheques (ban14.frx) — vista 2](../../assets/Bancos/transferenciasbancarias/test1_ban14_02.png){ align=center }

    ??? example "Control de acceso por usuario"
        Se validó que el formulario respeta el sistema de permisos: usuarios sin acceso no pueden usarlo, y el usuario A-01 tiene acceso habilitado por defecto.

        - :material-check-circle: Usuario sin acceso bloqueado del formulario: **confirmado**
        - :material-check-circle: Usuario A-01 con acceso por defecto: **confirmado**

        ![Configuración de acceso al formulario](../../assets/Bancos/transferenciasbancarias/seg_acceso_formulario.png){ align=center }

        ![Usuario sin acceso — formulario bloqueado](../../assets/Bancos/transferenciasbancarias/seg_sin_acceso.png){ align=center }

        ![Usuario A-01 con acceso habilitado](../../assets/Bancos/transferenciasbancarias/seg_acceso_a01.png){ align=center }

    ??? example "Validaciones de campos obligatorios"
        Se identificó que el campo descripción y la cuenta contable no eran obligatorios. Se implementaron las validaciones correspondientes.

        - :material-check-circle: Descripción obligatoria — validación activa: **confirmada**
        - :material-check-circle: Cuenta contable obligatoria — validación activa: **confirmada**
        - :material-check-circle: Solo permite subcuentas — validación activa: **confirmada**
        - :material-check-circle: Validaciones funcionando en EXE_2026_04_09_01: **confirmadas**

        ![Validación: descripción es obligatoria](../../assets/Bancos/transferenciasbancarias/valid_descripcion_mensaje.png){ align=center }

        ![Validación: cuenta contable es obligatoria](../../assets/Bancos/transferenciasbancarias/valid_cuenta_mensaje.png){ align=center }

        ![Validación: solo permite subcuentas](../../assets/Bancos/transferenciasbancarias/valid_solo_subcuenta_mensaje.png){ align=center }

        ![Test EXE_2026_04_09_01 — validaciones funcionando (1)](../../assets/Bancos/transferenciasbancarias/test2_valid_01.png){ align=center }

        ![Test EXE_2026_04_09_01 — validaciones funcionando (2)](../../assets/Bancos/transferenciasbancarias/test2_valid_02.png){ align=center }

        ![Test EXE_2026_04_09_01 — validaciones funcionando (3)](../../assets/Bancos/transferenciasbancarias/test2_valid_03.png){ align=center }

        ![Bug residual: ingreso manual de cuenta de mayor permitido](../../assets/Bancos/transferenciasbancarias/test2_bug_cuenta_mayor.png){ align=center }

    ??? example "Bloqueo del campo cuenta contable"
        Corrección final: el campo de cuenta contable se bloquea para impedir que el usuario ingrese manualmente una cuenta de mayor. Solo es posible seleccionarla a través del selector, que filtra únicamente subcuentas.

        - :material-check-circle: Campo cuenta bloqueado para ingreso manual: **confirmado**
        - :material-check-circle: Selector filtra solo subcuentas: **confirmado**

        ![EXE_2026_04_09_02 — campo cuenta bloqueado (1)](../../assets/Bancos/transferenciasbancarias/test3_bloqueo_01.png){ align=center }

        ![EXE_2026_04_09_02 — campo cuenta bloqueado (2)](../../assets/Bancos/transferenciasbancarias/test3_bloqueo_02.png){ align=center }

        ![EXE_2026_04_09_02 — campo cuenta bloqueado (3)](../../assets/Bancos/transferenciasbancarias/test3_bloqueo_03.png){ align=center }

        ![EXE_2026_04_09_02 — campo cuenta bloqueado (4)](../../assets/Bancos/transferenciasbancarias/test3_bloqueo_04.png){ align=center }

        ![EXE_2026_04_09_02 — campo cuenta bloqueado (5)](../../assets/Bancos/transferenciasbancarias/test3_bloqueo_05.png){ align=center }

---
