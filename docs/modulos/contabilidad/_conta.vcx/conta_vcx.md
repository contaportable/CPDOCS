# Clase conta (dentro del paquete de clases _conta.vcx)
Esta clase se encarga la contabilización automática de todas las partidas de los siguientes documentos

  - Cheques  
  - Depósitos  
  - Quedans  
  - Caja Chica  
  - Ventas  
  - Retaceos

## Métodos principales

  - **genC2():**Se invoca para generar una partida, puede recibir un documento referecniado por su id, por ejemplo: ID00000001 o OG00000002, el método debe identificar el tipo de documento consultar la parametrización de cataconfig.dbf y obtener la cuenta que lo contabiliza, luego debe consultar el detalle del documento y obtener todos los documentos del detalle para ir contabilizandolos cada uno por medio del método **genc2Detalle()** y contabilizarlo con el metodo.
    - **Parámetros**: Recibe lcId y tbAcumular, el segundo parámetro de acumular es el que se implementó para las ventas por día, metodo : **genc2_facturas()** 

  - **genc2Detalle():**Genera los documentos del detalle uno a uno, determina si están del lado deudor o acreedor: 
    - **Deudor**: las cuentas que devuelva el documento cuentas irán en el debe
    - **Acreedor**: las cuentas irán en el haber 
  - **genc2_facturas():** se encarga de generar las ventas por día, usa siempre el metodo **genc2()** solo que acumula las cuentas generadas en la tabla c2Temp, sin borrarlas por cada ejecución de factura, luego se sumarizan en c2TempResumen y de ahí lo toma **actualizadia()** para mandarlo a la partida.
  - **actualiza():** Las cuentas generadas por los metodos **genc2()** se depositan en la tabla c2Temp y luego este método se encarga de actualizarlas a contabilidad 
