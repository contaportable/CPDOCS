<!---
description: Requerimiento RGDUAL: Configurar multiples formatos y  utilizar 2 formatos simultaneamente desde ContaPortable. 
---
-->
# RGDUAL - Documentación, Guia de Instalación y Uso <!-- Subtítulo de nivel 1 -->

Bienvenido a la documentación de la actualización RGDUAL en **CONTAPORTABLE 2025**.

---

## 📌 Introducción   <!-- Subtítulo de nivel 2 -->

La actualización RGDUAL, nace de la necesidad de poder configurar y utilizar multiples formatos de forma escalable en contaportable, permitiendo crear, agregar, configurar y utilizar el formato que se requiera segun la necesidad: imprimir RG del DTE en mas de un formato y estilo, enviar por correo electronico la RG del DTE en un formato distinto al que se imprime, imprimir RG del DTE en formato ticket sin perder el formato por default en tamaño carta, facilitar la configuracion de multiples formatos (permitiendo generar vistas previas de la RG que se esta configurando desde el centro de configuracion de formatos).  

---

## 📦 Instalación y requisitos

!!! info "Prerrequisitos de instalación"
    -  [⬇️ Descargar RichText32.ocx](https://drive.google.com/file/d/1JIxhDLHDS4u74DnFySlkIo_I9xHCF0A6/view?usp=drive_link)
    -  :material-content-copy: Copiar el archivo **RichText32.ocx** que has descargado a la carpeta raiz del sistema

    !!! Note "Tipos de instalación"
        === "1️⃣ Instalación por primera vez"
            - :material-update: Actualizar version del sistema (Instalar .exe) 
            - :material-security: Ejecutar el sistema como **administrador** 
            ![Ejecutar administrador](../../assets/Facturacion/RGDUAL/EjectAdministrator.png){ .align=center }

            === "Resultado de registro de Richtext32"
                === "✅ Éxito al Registrar Richtext32 en Windows"
                    ![screen "Succes Register Richtext32"](../../assets/Facturacion/RGDUAL/SuccesRegisterRichtx32.png)

                === "❌ Error al registrar Richtext32 en Windows"
                    ![screen "Error Register Richtext32"](../../assets/Facturacion/RGDUAL/ErrorRegisterRichtx32.png){ .align=center }

        === "2️⃣ Reinstalación"    
              - [⬇️ Descargar RichText32.ocx](https://drive.google.com/file/d/1JIxhDLHDS4u74DnFySlkIo_I9xHCF0A6/view?usp=drive_link)
              - :material-content-copy: Copiar el archivo RichText32.ocx que has descargado a la carpeta raiz del sistema 
              - :material-update: Actualizar version del sistema (Instalar .exe) 
              - :material-security: Ejecutar el sistema como **administrador** 
              - ⚠️ Si presentas error al abrir la configuracion de formatos o no fue posible registrar el componente RichText32.ocx en la primera instalacion, puedes ejecutar la actualización **RegisterRichtText32**  desde la ventana de comandos para volver a registrarlo
          
              ![Actualización updateRegisterRichtText32"](../../assets/Facturacion/RGDUAL/updateRegisterRichtText32.png){ .align=center }
              - ⚠️ En caso de ser necesario, si con los pasos anteriores sigues presentando error al abrir el formulario, puedes reinstalar la actualización desde cero, desde la ventana de comandos 
              ![Actualización updateRgdualInstall](../../assets/Facturacion/RGDUAL/updateRgdualInstall.png){.align=center}

            === "Resultado de registro de Richtext32"
                === "✅ Éxito al Registrar Richtext32 en Windows"
                    ![screen "Succes Register Richtext32"](../../assets/Facturacion/RGDUAL/SuccesRegisterRichtx32.png)
                === "❌ Error al registrar Richtext32 en Windows"
                    ![screen "Error Register Richtext32"](../../assets/Facturacion/RGDUAL/ErrorRegisterRichtx32.png){ .align=center }


              

---

## ⚙️ Configuración

!!! note "Establecer Formato Principal y secundario"
    💡La actualización RDUAL considera 2 escenarios, el primero es la configuración de múltiples formatos, definiendo uno de estos como formato principal, el segundo escenario consiste en utilizar un segundo formato para la RG en todas sus funciones (Imprimir, generar PDF, enviar por correo) con la opcion de combinarlos y utilizar ambos formatos.

    === "⭐ Principal"
        - ℹ️ Al aplicar la actualización, el formato que posees configurado y que utilizas actualmente se establece automáticamente como el formato principal y se agregaran 2 formatos de muestra/ejemplo de tipo ticket y tamaño carta con descuento, en caso de que desees adquirir y utilizar estos estilos, puedes contactarnos :material-email: [Enviando correo a ventas](mailto:ventas@tiservicios.net)

        - :material-star: Si deseas cambiar el formato principal, debes de deshabilitar el actual seleccionanando la opcion **Sin Utilizar**, selecciona el nuevo formato y selecciona la opción estabelecer como **Formato principal:**  
        ![establecer "Establecer formato principal"](../../assets/Facturacion/RGDUAL/EstablecerFormatPrincipal.png){ .align=center }
        - :material-content-save: Clic en el boton **Guardar cambios para formato** — guarda la configuración del formato que estas editando temporalmente sin aplicarlos (al cambiar a la siguiente pestaña la configuración del formato actual se guarda automáticamente) 
        - :material-check-circle: Clic en el boton **Aplicar cambios** — guarda permanentemente y actualiza la configuración de todos los formatos que fueron modificados 

    === "☆ Secundario/Dual"
        ℹ️ Esta opción esta desactivada por default, para activarla sigue los siguientes pasos

        - :material-file-cog: Activa el parametro **FORMATO_RGDUAL** y establece como valor la palabra **SI** desde la ventana de comandos en contaportable(`ctrl+F12`)
        ![establecer "Activar parametro RGDUAL"](../../assets/Facturacion/RGDUAL/activarParamFormatoRgDual.png){ .align=center }
        - :material-refresh: **Reiniciar** el sistema contaportable                   
        - :material-star-outline: Ingresa a la configuración de formatos y selecciona tu segundo formato a utilizar, veras habilitada la opcion de establecer **Formato secundario**, actívala
        - :material-content-save: Clic en el boton **Guardar cambios para formato** — guarda la configuración del formato que estas editando temporalmente sin aplicarlos (al cambiar a la siguiente pestaña la configuración del formato actual se guarda automáticamente) 
        - :material-check-circle: Clic en el boton **Aplicar cambios** — guarda permanentemente y actualiza la configuración de todos los formatos que fueron modificados 
        ![establecer "Establecer formato Secundario"](../../assets/Facturacion/RGDUAL/EstablecerFormatSecundario.png){ .align=center }

    === "🧩Proforma"
        ℹ️ Esta opción esta desactivada por default, se habilita únicamente para los formatos establecidos como **Sin Utilizar para DTE**
  
        - Puedes agregar un nuevo formato y activarlo como proforma, utilizado para generar una vista previa de una factura generada, antes de convertirse en DTE (no posee json relacioado)
        ![config "formatProforma"](../../assets/Facturacion/RGDUAL/configFormatoProforma.png){.align=center}  

    === "🗑️Descartar formato"
        - Abre la ventana de comando y ejecuta los comandos **USE RGDTECONFG** seguido del comando **BROWSE**
        - Busca el formato en la tabla que acabas de abrir y establece el valor: False **F** en el campo **VISIBLEINF**
        - Guardar y salir con la combinacion de teclas `ctrl+W`
        - Cierra la ventana de comandos y comprueba que el formato ya no estara disponible
        - ⚠️ No es necesario elininar el registro, si despues quieres tenerlo disponible puedes cambiar el valor a True **T**

    === "☑️Validaciones"
        - Para guardar y aplicar cambios es necesario cumplir con las siguientes validaciones:
        - 1️⃣ No es posible configurar mas de 1 formato principal
        - 2️⃣ No es posible configurar mas de 1 formato secundario
        - 3️⃣ No es posible configurar mas de 1 formato proforma
        - 4️⃣Establecer los formatos "Sin utilizar para DTE" para aquellos formatos que no sean principal ni secundario
        ![establecer "validacionFormatPrinc"](../../assets/Facturacion/RGDUAL/validacionFormatPrinc.png){ .align=center }
        - 💡Los formatos establecidos como **Sin Uitlizar para DTE** pueden utilizarse como formato proforma    
---

## 📝 Historial de actualizaciones

??? tip "🚀 V2.2- OCTUBRE 2025"
    ###✨ Se agrega opción para formatos [proforma](https://github.com/YECAPP/CP2025/issues/322):
    - Se implementa función para agregar, configurar y personalizar el formato proforma de una **factura generada** (antes de convertirse en DTE)
    - Permite una pre visulización del futuro DTE, en un formato distinto.
    ![config "formatProforma"](../../assets/Facturacion/RGDUAL/configFormatoProforma.png){.align=center}  
    ![Config "formatProforma2"](../../assets/Facturacion/RGDUAL/configFormatoProforma2.png){.align=center}  
    ![Config "formatProforma3"](../../assets/Facturacion/RGDUAL/configFormatoProforma3.png){.align=center}  
---

## 📚 Uso General

!!! example "Ejemplos de uso"
    ??? example "Acceder al centro de configuración de formatos"
        -Puedes acceder desde el menu del resumen de facturas y desde el formulario de facturación (acceso antiguo)
        - Desde el menu del resumen de facturas — muestra todos los formatos de todos los tipos de documento
        ![acceso "funcionRGDUAL"](../../assets/Facturacion/RGDUAL/accesoRgDual.png){.align=center}  

        - Desde el formulario facturas — muestra los formatos únicamente del tipo de documento que esta facturando
        ![acceso "formFacturas"](../../assets/Facturacion/RGDUAL/configGenerales.png){.align=center}  
    
    ??? example "Configuracion Generales"
        -Parámetros generales aplicados a todos los formatos de facturación 
        ![acceso "funcionRGDUAL"](../../assets/Facturacion/RGDUAL/configGenerales.png){.align=center}  

    ??? example "Agregar nuevo formato (Creando una nueva pestaña automáticamente)"
        ![Botón "Establecer formato Secundario"](../../assets/Facturacion/RGDUAL/addFormat.png){.align=center}
        ![Botón "Establecer formato Secundario2"](../../assets/Facturacion/RGDUAL/addformatStep2.png){.align=center}
        ![Botón "Establecer formato Secundario3"](../../assets/Facturacion/RGDUAL/addFormatStep3.png){.align=center}
        ![Botón "Establecer formato Secundario4"](../../assets/Facturacion/RGDUAL/addFormatStep4.png){.align=center}
        
        - Guardamos y aplicamos
        ![Botón "Establecer formato Secundario5"](../../assets/Facturacion/RGDUAL/addFormatStep5.png){.align=center}

        - Despues de agregar el nuevo formato se mostrara en un nueva pestaña
        ![Botón "Establecer formato Secundario6"](../../assets/Facturacion/RGDUAL/addFormatStep6.png){.align=center}

        - Por último, puedes modificar el alias del formato (titulo del formato)

    ??? example "Agregar json para vista previa"
        ![Botón "agegarjson"](../../assets/Facturacion/RGDUAL/preview.png){.align=center}
         -Si al dar clic en vista previa aparece el mensaje de que no existe json relacionado, se debe de agregar
        ![Botón "agegarjson2"](../../assets/Facturacion/RGDUAL/notFoundJson.png){.align=center}
        ![Botón "agegarjson3"](../../assets/Facturacion/RGDUAL/notjson.png){.align=center}
        - Pega el json a utilizar para la vista previa y dar clic en guardar
        ![Botón "agegarjson4"](../../assets/Facturacion/RGDUAL/addJsonPreview.png){.align=center}

    ??? example "Modificar formato, Seleccionar impresora predeterminada, lineas y ancho del concepto por cada formato"
        - Modificar formato
        ![Botón "modifyFormat"](../../assets/Facturacion/RGDUAL/modifyFormat.png){ .align=center }
        ![Botón "modifyFormatDos"](../../assets/Facturacion/RGDUAL/modifyformat2.png){ .align=center }

        - Seleccionar impresora predeterminada, lineas y ancho del concepto por cada formato 
        ![Botón "Seleccionar impresora predeterminada"](../../assets/Facturacion/RGDUAL/setPrinter.png){ .align=center }

    ??? example "Utilizando ambos formatos"
        === "Imprimir RG"
            ![Botón "Seleccionar impresora predeterminada"](../../assets/Facturacion/RGDUAL/PrintDual.png){ .align=center }
        
        === "Enviar por correo"
            ![Botón "Seleccionar impresora predeterminada"](../../assets/Facturacion/RGDUAL/sendEmail.png){ .align=center } 
            ![Botón "Seleccionar impresora predeterminada"](../../assets/Facturacion/RGDUAL/sendEmail2.png){ .align=center } 

    ??? example "Configurar QR de publicidad en formatos"
        - Desde esta actualización es posible configurar link estáticos, utilizados para publicidad, como visita a sitios web, redes sociales y links de encuestas
        ![Botón "generarQrPub"](../../assets/Facturacion/RGDUAL/codeQrPublicidad.png){ .align=center }    
        ![Botón "generarQrPub"](../../assets/Facturacion/RGDUAL/codeQrPublicidad2.png){ .align=center }    
        - Agregando el Qr al formato  
        - Ejemplo de uso: oConfigFormat.linkqr1 
        ![Botón "generarQrPub"](../../assets/Facturacion/RGDUAL/codeQrPublicidad3.png){ .align=center } 
        ![Botón "generarQrPub"](../../assets/Facturacion/RGDUAL/configCodeQr.png){ .align=center }    

    ??? example "Accediendo a configuraciones del formato desde la RG"
        - desde la RG se puede acceder a los parametros configurados del formato por medio del objeto oConfigFormat
        - Ejemplo: Configurar código QR1 — oConfigFormat.linkqr1
        - Ejemplo: Mostrar etiqueta para el código QR1  — oConfigFormat.lblinkqr1
        - Tambien puedes agregar información extra de facturacion, forma de pago, contactos de clientes, proyectos, departamentos (centro de costo) usando los objetos: [oContacClie](https://github.com/YECAPP/CP2025/issues/293) y [oFactFpagoProy](https://github.com/YECAPP/CP2025/issues/294)
    !!! tip "+ Video explicativo"
        [▶️ Reproducir video explicativo sobre la actualización](https://www.loom.com/share/27f34d15f82a4572a7c826106d09220e)     
        
               
