# Formulario contabilizar
Proporciona una interfaz para decidir que documentos se van a contabilizar, contiene 4 metodos principales: 
  - Cheques()
  - Depositos() 
  - Quedans()
  - Retaceos()
  - Ventas()

## Ventas
El método ventas contabiliza de acuerdo al parámetro gcContaFactX

## Parámetro gcContaFactX
Determina la forma en que habrá de contabilizarse las partidas en el sistema, se originó por la necesidad de poder contabilizar por dia los documento de ventas. 

Valores posibles de este parámetro son :

  - **DEPTO**: contabilizará por parámetro
  - **otro**: contabiliza las facturas por cada venta 

