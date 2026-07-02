# Contabilización automática en ContaPortable

La contabilización automática es el proceso mediante el cual el sistema convierte documentos operativos en asientos contables, aplicando la configuración de cuentas de la empresa. En términos prácticos, permite que movimientos como ventas, pagos, depósitos, cheques o retaceos queden reflejados en contabilidad sin necesidad de capturar cada asiento manualmente.

## ¿Qué necesita saber sobre este proceso?

El resultado de la contabilización depende de la configuración contable de cada empresa. No existe una regla única para todas, porque cada organización puede usar un catálogo de cuentas distinto y codificar los movimientos de forma diferente.

Por ejemplo:

- En una empresa la cuenta del iva podrá estar en la cuenta 110401 Credito fiscal compras, pero en otra esa misma cuenta podría estar en la 11901 Iva Compras
- En una empresa los gastos de ventas podrán estar en la cuenta 4201 y en otra esos mismos gastos peuden estar en la 5101

## Archivos involucrados
Existen varios archivos involucrados en la contabilización autmática, a continuación se detallan los más importantes que están involucrados:

- **Contabilizar.scx:** Formulario en el que se seleccionan los periodos a contabilizar.  
  Divide los documentos de la siguiente forma:
  
    - Cheques  
    - Depósitos  
    - Quedans  
    - Caja Chica  
    - Ventas  
    - Retaceos

- **_conta.vcx:** clase que contiene la subclase **_conta.conta** que contiene los métodos para contabilizar los documentos, es la más importante, es la encargada de generarlas partidas
- **Cataconfig.dbf** Almacena el resultado de la configuración del catalogo de cuentas, es el resultado del metodo GenCataconfig de la clase **_conta.conta**
    - Con1:Contiene condición 1 de selección
    - Con2:Contiene condición 2 de selección
    - Con3: 3a condición de selección
    - Con4: 4a Condicion 
    - Con5: 5a condición (nunca se ha usado) 
    - Resultado: es la cuenta resultado de la sección de condiciones 
    - Precedencia:importancia de selección, 1 implica que es más importante 
    - Desc_doc: Descripción del documento
    - Desc_sis: Descripción del catálogo de sistema 
    - Desc_conta:Descripción del catálogo de contabilidad 
    - Line: Selector de línea

- **Gencataconfig.prg(deprecado):** Se utilizaba para generar el cataconfig anteriormente, luego se pasó a la clase **_conta.conta**  