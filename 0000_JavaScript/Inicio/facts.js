/* 
Definir la estructura de una funció constructora 
 que crea los objetos que almacenan una factura. 
Las facturas están formadas por:
- la información de la propia empresa:
    - nombre de la empresa
    - dirección
    - teléfono
    - NIF 
- la información del cliente
    - nombre de la empresa
    - dirección
    - teléfono
    - NIF 
- una lista de elementos, cada uno de los cuales dispone de:
    - descripción
    - precio por unidad
    - cantidad 
- otra información básica de la factura
    - el número de factura
    - tipo de IVA
    - forma de pago
    - la fecha
Añadir al menos dos métodos:
- el que calcula el importe total de la factura
- el que muestra por pantalla la factura 
    o al menos el importe total de la factura.
*/
function Empresa(nom,dir,telf,nif) {
    this.nom = nom
    this.dir = dir
    this.telf = telf
    this.nif = nif
}
function Direccion(calle,num,pais) {
    this.calle = calle
    this.num = num
    this.pais = pais
}
function Item(articulo,precio,unidades ) {
    this.articulo = articulo
    this.precio = precio
    this.unidades = unidades
}
function Factura(empresa = {}, cliente = {}, item = [{}] , nume,iva,way,date=new Date()) {
    this.empresa = empresa
    this.cliente = cliente
    this.item = item 
    this.numer = nume
    this.iva = iva
    this.way = way
    this.date = date
}


let dir1 = new Direccion('recta','3','españa' )
let dir2 = new Direccion('corner','2','UK' )
let emp1 = new Empresa('SPCustom',dir1,'676870441','y5512598')
let cli1= new Empresa('MTSport',dir2,'69878588','license-5351332')
const itm = [new Item('ref/0022','25','3'),
            new Item('ref/0143','32','3')]
const fact1 = new Factura(emp1,cli1,itm,'001','0,4','tranferencia',new Date() )



console.log(fact1)
console.log(fact1.getFact())